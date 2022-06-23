let conjunto = new Set();

let numeros = [10,10,20,20,30,30,40,40,50,50];

numeros.forEach(element => {
  
    conjunto.add(element);  
});

numeros = [...conjunto];

console.log(numeros);