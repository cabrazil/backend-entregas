import { prisma } from '../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthClient {
  username: string;
  password: string;
}

export class AuthClientService {
  async execute({ username, password }: IAuthClient) {
    // Receber username, password

    // Verificar se username cadastrado
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    if (!client) {
      throw new Error("Username or password invalid!")
    }
    // Verificar se senha corresponde ao username
    const passwordMatch = await compare(password, client.password)

    if (!passwordMatch) {
      throw new Error("Username or password invalid!")
    }
    // Gerar o token, pode usar um site md5
    const token = sign({username}, `${process.env.JWT_SECRET_CLIENT}`, {
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }
}