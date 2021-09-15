// FORMA CURTA

 const h1 = document.querySelector('.container h1');
 const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
});


// FORMA LONGA

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toString();


// function getDiaSemanaTexto(diaSemana){
// const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira'
// 'quinta-feira', 'sexta-feira', 'sábado'];

// function getNomeMes(numeroMes){
// const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 
// 'junho', 'julho', 'setembro', 'outubro', 'novembro', 'dezembro'];
// return meses[numeroMes]; 
//}

// function zeroAEsquerda(num){
//     return num >= 10 ? num : `o${num}`;
// }

// function criaData(data){
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//     ` de ${data.getFullYear()} ` + 
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//     );
// }

// h1.innerHTML = criaData(data);
