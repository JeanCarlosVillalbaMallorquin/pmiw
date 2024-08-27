function alterado( a, b, c){
let cambiodecolor = color(random((a*1.5),255),random((b+20),255), random(c,255));;
 return cambiodecolor; 
} // function alterado (let a,let b,let c){
// let cambiodecolor = color(random((a*1.5),255),random((b+20),255), random(c,255));;
// return cambiodecolor; } 





 
//funcion para colocar el dibujo de los espirales con for
function dibujoespiralsgrandes( a,  b, E, T){//(posX,posY,espaciado,tamaño)
 //este es la funcion para mi segundo for de circulos
   for(let f=0;f<12;f++){
      for(let g=0;g<10;g++){
        for(let h=6;h>0;h--){
         
          ellipse(a+(f*E),b+(E*g),T*h,T*h);
          }
     }
   }
   
 }
