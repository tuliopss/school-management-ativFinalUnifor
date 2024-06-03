Sistema de gerenciamento de alunos desenvolvido para a atividade final da disciplina de Projetos de Aplicação Multiplataforma da Unifor, com arquitetura de microsserviços

Sistema desenvolvido em Node.js, React.js,e MongoDB como banco de dados. O backend conta com serviços de autenticação com JWT e bcrypt que permite o professor (usuário principal da aplicação) se cadastrar e ter acesso as funcionalidades de CRUD dos alunos. Foi utilizado o express-http-proxy para possibilitar a coesão dos microsserviços na API Gateway.


Instruções:
Para rodar o projeto, necessita-se da execução dos serviços simultaneamente.
Dentro dos próprios diretórios serão executados os comandos:
npm run gateway --> API Gateway será executada na porta 3001
npm run msteacher --> O microsserviço de professores será executado na porta 3000
npm run msstudent --> O microsserviço de estudantes executado na porta 3002
npm run dev --> O frontend será executado na porta 5173

