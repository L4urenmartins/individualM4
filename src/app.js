import redline from "readline-sync";

const cssPropriedades = [];

function redlinePrompt() {

    let propriedade = (redline.question("Digite uma propriedade de CSS ou sair para encerrar: ")).toUpperCase();
    if (propriedade !== "SAIR") {
        cssPropriedades.push(propriedade);
        redlinePrompt();
    } else {
        cssPropriedades.sort();
        cssPropriedades.forEach((cssPropriedade) => {
            console.log(cssPropriedade);
        })
    }

}

redlinePrompt();