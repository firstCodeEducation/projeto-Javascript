# Projeto: Lista de Tarefas em JavaScript

## Estrutura HTML

- **Criação do arquivo `index.html`**: Inicie criando um arquivo chamado `index.html` que conterá a estrutura básica do HTML5.

- **Elementos principais**: Dentro da tag `<body>`, insira os seguintes elementos:
  - Um título `<h1>` que represente o nome da aplicação.
  - Um campo de entrada `<input>` onde o usuário poderá digitar novas tarefas.
  - Um botão `<button>` que, ao ser clicado, adicionará a tarefa digitada à lista.
  - Uma lista não ordenada `<ul>` que exibirá as tarefas adicionadas.

## Estilos CSS

- **Criação do arquivo `style.css`**: Crie um arquivo chamado `style.css` para estilizar a aplicação, visando uma interface agradável e responsiva.

- **Estilização dos elementos**:
  - **Contêiner principal**: Defina estilos que centralizem o conteúdo e ajustem a largura conforme necessário.
  - **Título (`<h1>`)**: Aplique estilos que destaquem o título, como tamanho de fonte e margens.
  - **Campo de entrada (`<input>`)**: Estilize para que tenha um tamanho adequado e seja de fácil visualização.
  - **Botão (`<button>`)**: Aplique estilos que o tornem atraente e que indiquem sua interatividade.
  - **Itens da lista (`<li>`)**: Defina estilos para os itens da lista, incluindo espaçamento, fontes e cores.

- **Propriedades recomendadas**: Utilize propriedades CSS como `display`, `flex`, `padding`, `margin` e `background-color` para organizar e destacar os elementos da interface.

## Funcionalidade com JavaScript

- **Criação do arquivo `script.js`**: Crie um arquivo chamado `script.js` que conterá a lógica para adicionar interatividade à aplicação.

- **Seleção de elementos do DOM**: No script, selecione os elementos necessários, como o campo de entrada, o botão de adicionar e a lista de tarefas.

- **Adição de novas tarefas**: Implemente uma função que seja acionada ao clicar no botão "Adicionar". Esta função deve:
  - Capturar o texto inserido no campo de entrada.
  - Criar um novo item na lista (`<li>`) com o texto da tarefa.
  - Adicionar o novo item à lista `<ul>` existente.

- **Marcar tarefas como concluídas**: Adicione uma funcionalidade que permita ao usuário clicar em uma tarefa para marcá-la como concluída. Isso pode ser feito alternando uma classe CSS que aplica um estilo de "concluído" ao item.

- **Remover tarefas**: Para cada item da lista, inclua uma opção para removê-lo. Ao acionar essa opção, a tarefa correspondente deve ser excluída da lista.

## Considerações Finais

- **Organização dos arquivos**: Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam corretamente vinculados e organizados no projeto.

- **Testes e validação**: Após implementar as funcionalidades, teste a aplicação para garantir que todas as interações funcionem conforme o esperado.

- **Melhorias adicionais**: Considere adicionar recursos extras, como armazenamento das tarefas no navegador para que persistam após recarregar a página, ou a possibilidade de editar tarefas existentes.


