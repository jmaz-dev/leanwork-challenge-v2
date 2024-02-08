# Leanwork Group | Teste (Front-end)

### Olá recrutador!! Segue abaixo as instruções para abrir o app.

1. Copie o comando para clonar o repositório:

```
git clone https://github.com/jmaz-dev/leanwork-challenge-v2.git
```

2. Após clonar o respositório na pasta desejada, abra o terminal e instale os modulos com:

`npm install`

3. Finalizada a instalação, inicie a aplicação com:

`npm run dev`

### A aplicação irá rodar geralmente na porta 5173 em modo de desenvolvimento

4. [http://localhost:5173](http://localhost:5173) - Acesse aqui para visualizar no navegador.

## Descrição da solução utilizada

A solução desenvolvida é uma aplicação web eficiente e minimalista, construída com React e Vite, utilizando o mínimo de bibliotecas necessárias para garantir leveza e simplicidade. A estrutura da aplicação é gerenciada pelo React Router DOM para o roteamento eficaz entre as diferentes páginas.

O formulário na aplicação é tratado pelo React Hook Forms em conjunto com Zod para validação de dados, proporcionando uma experiência de usuário fluida e segura. Isso permite a fácil manipulação e validação dos dados inseridos pelos usuários, garantindo consistência e integridade.

A persistência dos dados é realizada localmente utilizando o LocalStorage, onde um conjunto de custom hooks foi desenvolvido para realizar operações CRUD (Create, Read, ~~Update~~, Delete). A chave de acesso ao LocalStorage é protegida por variáveis de ambiente e poderia ser armazenada de forma segura no arquivo .env, garantindo a segurança dos dados da aplicação.

O estilo da aplicação foi implementado de maneira modular e reutilizável, utilizando classes CSS para fornecer uma estrutura de estilo coesa e fácil de manter. Isso promove uma organização eficiente do código CSS, tornando-o legível e facilitando futuras atualizações.

Ao concluir a interação do usuário com a aplicação, uma tela de boas-vindas personalizada é exibida, proporcionando uma experiência acolhedora e marcante para o novo usuário. Essa abordagem não apenas atende aos requisitos funcionais da aplicação, mas também foca na usabilidade e na simplicidade, garantindo uma experiência agradável para o usuário final.
