const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];


//const numeros = [numerosPares, numerosImpares ] ;

const numeros = [...numerosPares, ...numerosImpares ] ;

//console.log(numeros) ;

// const num1 = 1 ;
// const num2 = 2;

// const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5] ;

// const  [nome1 = 'Ju'] = [] ; 


// console.log(nome1);

const pessoa = {
    nome: 'Ju',
    idade: '25'
}

const pessoaComTelefone = {...pessoa, telefone: 12345}

//console.log(pessoa, pessoaComTelefone) ; 

//const nome = pessoa.nome ;

const {nome} = pessoa ; 
//console.log(nome);

function imprimeDados (dados) {
    const {nome, idade} = dados;

    console.log(nome, idade) ; 

}

imprimeDados(pessoa) ;


