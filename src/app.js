import redline from "readline-sync";



function redlinePrompt() {

    const cssPropriedades = [];
    let propriedade = (redline.question("Digite uma propriedade de CSS ou sair para encerrar: ")).toUpperCase();
    const naoENumero = isNaN(parseInt(propriedade));
    if (propriedade.trim() === '' || !naoENumero) {
        console.log('Entrada vazia ou inválida. Por favor, insira uma propriedade válida ou digite "SAIR".');
        redlinePrompt();
    } else if (propriedade !== "SAIR") {
        cssPropriedades.push(propriedade);
        redlinePrompt();

    } else {
        cssPropriedades.sort();
        cssPropriedades.forEach((cssPropriedade) => {
            console.log(cssPropriedade);
        })
    }
}


redlinePrompt()