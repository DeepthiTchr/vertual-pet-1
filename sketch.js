//Create variables here
var  dog, happyDog, database, foodS, foodStock;
function preload()
{
	//load images here
  dogImg1=loadImage("images/dogImg1.png")
  dogImg=loadImage("images/dogImg.png")}

function setup() {
	createCanvas(500,500);
  dog=createSprite(300,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15
  database=firebase.database
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);



}


function draw() {  
  background(47,139,87)
  drawSprites();


  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  

  
  //add styles here

}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}



//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}