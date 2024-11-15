//  Funcion que permite unir dos textos 
 function datos(){
    let titulo= document.getElementById("titulo").value;
    let autor=document.getElementById("autor").value;

     //se unen los textos con la funcion unir 
     let text = unir(titulo,autor)
     // Mostra el texto unido en el elemento 
     document.getElementById("msj").innerHTML= text;
 }

 function unir(text1 , text2){
    return  "titulo: " + text1 + "<br/>" + "Autor " + text2;
 }