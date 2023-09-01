Esta aplicação foi desenvolvida como parte de uma avaliação do primeiro módulo do curso DevInHouse.
Este foi desenvolvido individualmente por mim, com o que aprendi durante as 14 semanas do curso.
Ele foi desenvolvido utilizando a biblioteca react e mostrando conhecimento nas linguagens:
-HTML
-CSS
-JavaScript

No projeto foi necessário criar uma aplicação com as seguintes páginas
- login
- cadastro de nova farmácia
- cadastro de medicamentos
- mapa
- lista os medicamentos
- detalhar os medicamentos
- página extra de escolha própria (no meu caso eu escolhi ofertas).
Era necessário conter um menu de navegação que utilizasse rotas, ter estilo próprio e que fosse agradável para o usuário.

Para verificar o programa será necessário a instalação do Visual Studio Code, disponível no site https://code.visualstudio.com/ se atente a qual sistema é utilizado (Mac, Windows ou Linux - geralmente ele já carrega a pagina conforme o sistema utilizado).
Após instalado o VSCode faremos a instalação do Node.js, disponível no site https://nodejs.org/pt-br (ele também segue o padrão do VSCode de já mostrar o download do sistema utilizado, mas é sempre bom conferir se está correto).

Vamos fazer a instalação do git acessando o site  https://git-scm.com/downloads 
Windows: https://git-scm.com/download/win
macOSLinux: https://git-scm.com/download/mac
Linux: https://git-scm.com/download/linux
Siga os passos que pede a instalação. Após finalizado precisamos configura-lo, 
no canto direito superior temos 3 quadrados e um com 1 retângulo e 2 quadrados, o primeiro dividido no meio verticalmente e o segundo horizontalmente, clique nele (no segundo quadrado). Irá abrir uma janela na parte inferior do seu VSCode. Nele deverá constar 5 abas: PROBLEMAS, CONSOLE DE DEPURAÇÃO, TERMINAL, GITLENS E SAÍDA. Clique em terminal para fazermos as configurações.

Primeiro iremos configurar o nome e o e-mail.
Para isso é necessário que digite os seguintes comandos:
git config --global user.name "digite dentro das aspas seu nome"
git config --global user.email "digite dentro das aspas seu email"

Após isso verifique com o comando (git config --list    ou  git config --l) se seu dados estão corretos, se não estiver volte com a etapa anterior.

Continuando com as configurações no VSCode, você precisa ir em extensões (é um desenho de uma roda de mecanismo ao lado esquerdo no final da janela) clica nele e depois extensões( ou digite Shift+Command+x (no Mac) / Ctrl+Shift+x (no Windows/Linux)) também é possível clicar em outro atalho, fica disponível na barra esquerda do VSCode o quinto elemento que parece um tetris (um quadradinho se encaixando em outros 3 quadrados).

Em extensões, geralmente abre uma aba do lado esquerdo da tela, tem um campo de busca "Pesquisar Extensões" ali na pesquisa digite a palavra Simple React Snippets e veja que logo aparece uma extensão com este nome, clique em cima e faça a instalação.

Agora vá em Gerenciar como explicado acima, clica em configurações, na parte de cima da janela, vai aparecer um campo de busca escrito configurações de pesquisa, clica em cima dele e digita Emmet.
Logo abaixo vai aparecer Emmet include Languages, lá vai ter 4 campos para preenchimento, dois embaixo de item e dois embaixo de value.
Nos campos embaixo de item, você precisará colocar (não altere a ordem)
1- javascript
2-vue-html
Nos campos embaixo de valor, você precisará colocar (não altere a ordem)
1-javascriptreact
2-html
e clique em adicionar item

Agora iremos fazer a utilização de alguns pacotes e para isso será necessário seguir os seguinte passos:
Dentro do VSCode, 

Digite no terminal o seguinte: npm create vite@latest
logo após a instalação do vite ele irá pedir para colocar o nome do projeto, a minha sugestão é medicationManagement (que é o nome que eu também utilizei).

A próxima pergunta será que tipo de projeto será criado, com as seta para baixo do telhado vá até a opção React, e a próxima opção escolha JavaScript.

Execute os 3 comandos que é pedido: cd react-vite
                                    npm install
                                    npm run dev


Agora iremos digitar mais alguns comando no terminal:
digite - npm install react-router-dom
digite - npm install axios 
digite - npm install axios styled-components  
digite - npm install @mui/icons-material @emotion/react @emotion/styled  
digite - npm install react react-dom react-leaflet leaflet react-router-dom

Após tudo instalado iremos clonar o site com o seguinte comando
git clone https://github.com/camilartigas/ProjetoAvaliativo.git




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# ProjetoAvaliativo
