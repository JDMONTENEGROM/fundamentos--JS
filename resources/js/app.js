document.getElementById("demo").innerHTML ="HELLO JAVA SCRIPT";
document.getElementById("demo").style.fontSize="35px";
document.getElementById("demo").style.color ="red";

//salida de datos 
//window.alert("HOLA, COMO ESTAS ?");
//window.alert(5+2);
//console.log(6+2);

//declaracion de bariables 
let a,b,c;
const M = 8;
a = 5;
b = 6;
c = a + b + M;
document.getElementById("demo").innerHTML = c;
 // tipos de datos
 let num = 24; // numero entero 
 let name ="jeferson david " //cadena de caracteres 
 let km = 14.5; //NUmero decimas 
 let persona ={ firstName :"Ana", lastName :"Perez"};//objeto

 let f = 17 +"POO"; // js trata al numero comuo una cadena y lo concatena
 let q ="17"+ "POO";
//Operaciones aritmeticas 
 let num1 = 8; num2 = 4;
 let suma , resta , multiplicacion, division;

 suma = num1 + num2 ;
 resta = num1 - num2;
 multiplicacion = num1 * num2 ;
 division = num1 / num2 ;


 document.getElementById("operciones").innerHTML=
 "la suma es : " + suma + " la resta  es :" + resta + " la multiplicacion  es :" + multiplicacion +
 " la divicion es :" + division;
 // operadores de comparacion 
 let edad = 24 ;
 document.getElementById("comparaciones").innerHTML= (edad >= 18);

 //Operadores logicos 
 let num4 = 6, num5 = 3;
 document.getElementById("logicos").innerHTML = (num4 < 10 && num5 > 1 ) + "<br>" 
 + (num4 < 10  && num5 < 1);  // salto de line 
  // funciones o metodoas 

  function myFunction(){
    document.getElementById("demo").innerHTML = "new paragraph "
  }