const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here

    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg){
    background(backgroundImg)
}

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;

    hour = datetime.slice(11,13);

   if(hour>=4 && hour<=6){
       bg = "sunrise1.png"
   }else if(hour>=7 && hour<=9){
    bg = "sunrise2.png"
}else if(hour>=10 && hour<=12){
    bg = "sunrise3.png"
}else if(hour>=13 && hour<=15){
    bg = "sunrise4.png"
}else if(hour>=16 && hour<=18){
    bg = "sunrise5.png"
}else if(hour>=18 && hour<=19){
    bg = "sunrise6.png"
}else if(hour>=19 && hour<=20){
    bg = "sunset7.png"
}else if(hour>=21 && hour<=23){
    bg = "sunset8.png"
}else if(hour>=23 && hour<=24){
    bg = "sunset9.png"
}else if(hour>=19 && hour<=21){
    bg = "sunset10.png"
}else if(hour>=1 && hour<=2){
    bg = "sunset11.png"
}else if(hour>=2 && hour<=4){
    bg = "sunset12.png"
}

backgroundImg = loadImage(bg);

}
