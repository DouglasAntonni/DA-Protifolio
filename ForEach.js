/*const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const emailsDosAprovados = (email) =>{
    console.log(`${email} \nVocê foi selecionado!`);
}

emailListInData.forEach((email, posicao, array) => {
 emailsDosAprovados(email);
 console.log(`sua posição é ${posicao}`);
 console.log(`total de aprovados ${array.length}`);
})*/
const numbers = [19, 21, 30, 3, 45, 22, 15];

const number = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(number);

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const name = names.find((name) => name === names[0]);
console.log(name);


const musicas = [

    { id: '31031685', title: 'Partita in C moll BWV 997' },
  
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  
  ];

  musicas.find((musica) => musica.id === 31031686).title;

