# -Soft-Wrap-Completo-Processo-Seletivo
Aplicação Completa || FrontEnd &amp;&amp; BackEnd || React.Js &amp;&amp; Node.Js
## Relatorio
## Iniciando o projeto 
Para inicar o projeto, basta seguir o passo a passo descrito abaixo.
Ps => {
  Voce deve possuir o Dockers ou Postgress em sua maquina para executar a migration.
  Alem de realizar a criação do banco para realizar a migration.
  Dito isso podemos comecar!
}

1 - Entrar na pasta Back_End e rodar o comando no prompt (CMD) -> YARN INSTALL
2 - Execute a migration, para criar sua tabela no banco de dados (CMD) --> YARN SEQUELIZE DB:MIGRATE
2 - Em seguida, rode o comando -> YARN DEV
3 - Depois disso, abra a pasta do Front_End e rode no prompt (CMD) -> NPM INSTALL
4 - E por ultimo -> NPM START

### Back End
Como foi pedido no desafio, a aplicação foi desenvolida em Node.Js, optei também por utilizar um modulo chamado "NODEMON", facilitando assim o desenvolvimento, pois foi possivel setar configurações para o projeto ficar se auto reiniciando, sem a necessidade de perder tempo tendo que fazer essa reinicializaão a cada mudança, ajudando muito na produtividade.
Usei o Express.js, para ajudar na criação de abstrações de rotas, middlewares e muitas outras funções para facilitar a criação da API.
Também usei o "DOCKER", que no caso ajuda bastante a controlar os serviços da aplicação, que nao sejam exatamente o codigo da aplicação em si, como por exemplo servicos de email ou
algum serviço para armezenar dados. Nesse desafio, utilizei ele para a criação de um ambiente isolado, por que se eu fosse usar por exemplo um banco de dados, qualquer que fosse, no meu caso foi o "POSTGRESS", e se usasse ele da maneira normal, ele iria mexer em varios arquivos, do nosso sistema, da nossa maquina, e se em algum momento eu precisasse deletar esse banco de dados, excluir, ou ate mesmo atualizar a versao dele, iria ser bem dificil, sem falar tambem pelo fato de ele ficar como um subsistema em um conteiner, isolado do sistema.
Usei tambem o "SEQUELIZE", um ORM, para ajudar com as conexões com o banco de dados, criação de tabelas, que no caso são as Migrations e o acesso a funcoes para o CRUD, para nao ter que ficar escrevendo as famosas, queries em Sql.
Junto com ele foi usado o modelo de MVC, Model, View e Controller.
Model para armazenar as abstraçoes do banco e manipular os dados, nao cuida da parte de regra de negocio da aplicação.
Controller para o ponto de entrada das requisições, ligadas a todas as funcoes.
View para retornar o um arquivo Json que sera utilizado no FrontEnd da aplicação.
Utilizei os metodos, PUT, DELETE, STORE(POST) E GET, para a realização do CRUD.

### Front End
Já para nossa parte visual, foi utilizado React.Js.
Usei o "NPX" para criar o projeto, pelo fato de ter a versão de projeto mais atualizada que a do NPM.
Instalei o "REACT ROUTER DOM" para configurar as rotas da aplicação.
Configurei uma rota de erro, para o caso de uma rota nao existente tentar ser acessada.
Fiz uma pagina Home e dois componentes, que foram importados dentro dela (Home),
assim separando mais as funcionalidades da aplicação e nao deixando tudo simplesmente jogado e pouco organizado.
Precisei usar props e states para passar os dados da pagina central para os componentes.
Tabém alguns metodos do Ciclo de Vida, para tratar suas respostas.
Optei por utilizar o "AXIOS", ao inves do proprio fetch, pois assim conseguimos diminuir um pouco a quantidade de linhas,
e codigo, tornando o mais visivel e simples de entender.
Tambem o uso de uma biblioteca chamada "REACT-BOOTSTRAP" para a facilitação do uso de Modal (Uma quadrado de opçoes),
para o usuario nao ter que ir para outra pagina sempre que quiser realizar uma ação.

### Considerações Finais
Achei um desafio bem interessante, pelo fato de ter mexido apenas uma vez com essa tecnologia do back end, node.js, dockers, express, sequelize...
Sem falar pelo prazo tambem, que foi bem emocionante.
Fico muito feliz com o resultado que consegui trazer com essa aplicação, em tão pouco tempo.
Só tenho a agredecer por essa oportunidade e experiencia.

Muito obrigrado !
