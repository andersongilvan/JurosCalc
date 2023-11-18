import entarDados from 'readline-sync';

console.log('\nAPLICAÇÃO DE JUROS\n');

let valorJuro = 0;

let valorDivida = entarDados.question('Informe o valor devido: R$ ');




if (valorDivida > 0) {
    let diasDeVencimento = entarDados.question('Informe quantos dias se de atraso: ');

    if (diasDeVencimento > 0) {
        if (diasDeVencimento > 15) {

            valorJuro = 10;
        }
        
        else {

            valorJuro = 5;
        }
        valorDivida = Number(valorDivida);
        diasDeVencimento = Number(diasDeVencimento);

        let totalJuros = (valorDivida / 100) * valorJuro;
        let total = valorDivida + totalJuros;

        console.log('\nValor original de dívida: R$ ' + valorDivida);
        console.log('Dias de atraso: ' + diasDeVencimento + ' dias');
        console.log('Taxa de juros: ' + valorJuro + '%');
        console.log('Valor total com juros: R$ ' + total);
    }
    else {
        console.log('\n\nVocê está em dia.');
    }

}
else {
    console.log('O valor da dívida tem que ser maior que zero');
}






