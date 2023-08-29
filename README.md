📋 Ordenação de Propriedades CSS

## Sobre o Projeto
Com essa ferramenta, é possível inserir uma lista de propriedades CSS, ordená-la alfabeticamente e visualizar o resultado no terminal. 
Esse Projeto é o projeto do módulo 4 

## 💻 Tecnologias utilizadas
Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node.js
- readline-sync

## ⭕ Rodando o projeto na sua máquina
Lembre-se, precisa ter o Node.js instalado em seu sistema, em seguida siga os seguintes passos:

1. Clone o projeto:

   ```bash
   git clone https://github.com/L4urenmartins/Ordenando-Lista.git
   ```

2. Entre no diretório do projeto:

   ```bash
   cd individualM4
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

   Ou

   ```bash
   npm run start
   ```

## ✨ Aproveite o Projeto
Agora você pode usar a ferramenta para ordenar propriedades CSS!

## 📚 Documentação da Ferramenta
A ferramenta recebe uma lista de propriedades CSS e retorna a lista ordenada alfabeticamente.

### Entrada
A ferramenta recebe uma lista de propriedades CSS digitadas pelo usuário. Para encerrar a entrada, o usuário deve digitar "SAIR".

Exemplo:

```
Digite uma propriedade de CSS (ou "SAIR" para encerrar):
background-color
[Enter]

Digite uma propriedade de CSS (ou "SAIR" para encerrar):
font-size
[Enter]

Digite uma propriedade de CSS (ou "SAIR" para encerrar):
text-align
[Enter]

Digite uma propriedade de CSS (ou "SAIR" para encerrar):
sair
[Enter]
```

### Saída
A ferramenta retorna as propriedades CSS ordenadas alfabeticamente.

Exemplo:

```
Propriedades CSS ordenadas:
background-color, font-size, text-align
```

## 🆘 Tratamento de Erros
- Caso o usuário insira uma entrada vazia, a ferramenta exibirá uma mensagem de erro.
- A ferramenta exibe mensagens de erro para guiar o usuário em cenários inesperados.

## 📑 Referências
- [Documentação Node.js](https://nodejs.org/)
- [Documentação readline-sync](https://www.npmjs.com/package/readline-sync)

Feito por Lauren Martins 👩‍💻