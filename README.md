# backend-entregas
Projeto back-end de entregas
Aplicação backend com Nodejs, utilizando o Prisma IO, para realizar entregas. Nesta aplicação, teremos de um lado o cliente - que irá se cadastrar e cadastrar itens para serem entregues em determinada localização - e, do outro, o entregador - que poderá pegar ou não determinada entrega para ser realizada. Iremos utilizar Typescript, JWT e Express.

- [x]  Criar estrutura do projeto
    - [x]  Prisma, Typescript, Bcrypt, JWT, Express, ts-node-dev, .env
- [x]  Criar tabela Deliveryman
- [x]  Criar tabela Client
- [x]  Criar tabela Deliveries
- [x]  Configurar Express (server)
- [x]  Criar cadastro de client
- [x]  Criar autenticação, funcionalidade de autenticação do cliente com JWT.
- [x]  Criar cadastro deliveryman
- [x]  Criar cadastro de entregas
- [x]  Middleware de cliente autenticado - criar um middleware para validar se o cliente está autenticado na aplicação para realizar as requisições.
- [x]  Tratar as exceções - tratar as exceções lançadas com o "throw", para visualizar no retorno da chamada.
- [x]  Autenticação deliveryman - criar um middleware para validar se o deliveryman está autenticado na aplicação para realizar as requisições.
- [x]  Criar cadastro de entregas
- [x]  Criar busca de entregas sem deliveryman - criar a funcionalidade de busca de entregas onde não exista entregador atrelado a ela.
- [x]  Criar update de entregas - criar a funcionalidade de alteração de entrega, para adicionar um entregador a ela.
- [x]  Criar busca de entregas do client - Busca de entregas utilizando o token do cliente, alterada busca com select, correção no create de Deliveryman e create Client
- [x]  Criar busca de entregas do entregador - criar a funcionalidade de busca de entregas utilizando o token do entregador.
- [x]  Atualizar entregas - criar a funcionalidade de atualização da entrega, inserindo a data final da mesma.
