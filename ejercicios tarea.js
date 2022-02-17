//Ejercicio #1
//Se pide crear la funcion/es que devuelvan aquellas palabras que NO tiene la misma vocal
//const entrada =["racecar","amalgam","oligopoly","zoom","casa","cama","enano"];
//const esperado= ["racecar","oligopoly","enano"];


const entrada = ["racecar","amalgam","oligopoly","zoom","casa","cama","enano"]; 
function vocales(array){
    var vocal=['a','e','i','o','u'];
    return array.split("").filter (data=>{
        return vocal.indexOf(data.toLowerCase())!=-1;
    });
}

function palabras (array){
    const r=[];
    array.forEach(data=>{
        const v=vocales(data);
        for(x=1;x<=v.lenght-2;x++){
            if(v[0]!=v[x])
            r.push(data)
        }
    })
    return r;   
}

console.log("Resultado esperado: ",palabras(entrada))

//EJERCICIO #2
//Dado el siguiente vector array=[5,4,20,7,5,10] use map, 
//para devolver  cada elemento del vector multiplicado por 10 resultado esperado [50,40,200,70,50,100]

const numeros=[5,4,20,7,5,10];
var multiplicacion=numeros.map(function(data){
    return data*10;
})
console.log("Resultado esperado: ",multiplicacion);

//EJERCICIO #3
//Dada la siguiente matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ] y usando únicamente map, 
//devuelva cada elemento de la matriz multiplicado por 3
//resultado esperado = [[3, 6, 9], [12, 15, 18], [21, 24, 27] ]

const  matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const corchetes = [];
function resultadoesperado(array){
    array.filter(function(data){
        corchetes.push(data.map(function(x){
            return x*3;
        }));
    });
console.log("Resultado esperado: ",corchetes);
resultadoesperado(matriz);
};

//EJERCICIO #4
// Dada la siguiente matriz = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]]; utilice reduce para encontrar el producto de sus elementos,
//resultado esperado: 720

const matriz = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]]; 
function multiplicacion(array){
    array.filter(function(data){
        array.push(data.reduce )
    })
}

var multiplicacion=multiplicacion.reduce(function(x){
    return x;
})

console.log("Resultado correcto",multiplicacion);