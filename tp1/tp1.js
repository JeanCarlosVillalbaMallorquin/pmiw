/* TP1 
Jean Carlos Villalba Mallorquin 
COM 3 2024
legajo=88263/9
link al video: 
https://youtu.be/6pKNVyN4PRg
*/
let esp,posX,posY,tam,posY2; // las variables ahora pasan a ser "let" para declararlas
 
function preload(){
referencia=loadImage('data/referencia.jpg'); //especificar que está en data la img
}
function setup() {
createCanvas(800,400); //tamaño del lienzo
esp=60;
  posX=420; //600 antes
  posY=60; //200 antes
  tam=14;
  posY2=29;

}


function draw() {
 
  background(100);
  image(referencia,0,0,width/2,height);
   strokeWeight(1);
  
    for(let j=0;j<12;j++){
      for(let k=0;k<10;k++){
        for(let i=6;i>0;i--){
  ellipse(posX+(j*esp),posY*k,tam*i,tam*i);
  
      }
    }
  }
  // hacer acá otros 3 for par a los espirales más grandes, separación mayor
//acá llamo a la funcion que preparé para los espirales
strokeWeight(2.5);
dibujoespiralsgrandes(450,posY2,90,13); //450,29,90,13 por defecto
 if (key == 'e'){
   tam=5;
 
 } if (key =='r'){
 fill(alterado(100,50,20));
 ellipse(420,40,50,50);
 push();
 fill(0);
 textSize(29);
 text("ON",402,48);
 pop();
// dibujoespiralsgrandes(450,29,90,13);
 
 }

}
function mouseDragged(){ //para aumentar el grosor de las lineas con mouseX
tam=round(map(tam,5,mouseX,10,120));
esp=mouseY;
posY2=round(map(posY2,5,mouseY,mouseY,100));

}
 function keyPressed(){ //para reiniciar
 posX=420; //600 antes
  posY=60;
  
  esp=60;
  posX=420; //600 antes
  posY=60; //200 antes
  tam=14;
   posY2=29;
fill(255); //valor predeterminado
 }
  
