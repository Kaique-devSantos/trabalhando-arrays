const nomes = ["Evaldo", "Mari", "Camis"];
// O termo callback se refere à função que é “chamada de volta” dentro de outra função

// nomes.forEach(function (nome) {
//   console.log(nome);
// });

// nomes.forEach((nome) => {
//   console.log(nome);
// });

function imprimeNome(nome) {
    console.log(nome);
  }
  
  nomes.forEach(imprimeNome);