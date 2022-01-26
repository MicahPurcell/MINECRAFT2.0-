var canvas=new fabric.Canvas("myCanvas")
width=30
height=30
player_x=20
player_y=45
var player=""
var blocks=""
function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        player=Img 
        player.scaleToWidth(150)
        player.scaleToHeight(160)
        player.set({
            top:player_y,left:player_x
        });
        canvas.add(player)
    })
}

function blocksRespawn(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blocks=Img
        blocks.scaleToWidth(width)
        blocks.scaleToHeight(height)
        blocks.set({
            top:player_y,left:player_x
        });
        canvas.add(blocks)
    })
}

window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keypress=e.keyCode
    console.log(keypress)
    if(keypress=="67"){
        blocksRespawn("cloud.jpg")
        console.log("c")
    }
    if(keypress=="68"){
        blocksRespawn("dark_green.png")
        console.log("d")
    }
    if(keypress=="82"){
        blocksRespawn("roof.jpg")
        console.log("r")
    }
    if(keypress=="71"){
        blocksRespawn("ground.png")
        console.log("g")
    }

    if(keypress=="76"){
        blocksRespawn("light_green.png")
        console.log("l")
    }
    if(keypress=="84"){
        blocksRespawn("trunk.jpg")
        console.log("t")
    
    }
    if(keypress=="87"){
        blocksRespawn("wall.jpg")
        console.log("w")
    }
    if(keypress=="85"){
        blocksRespawn("unique.png")
        console.log("u")
    }
    if(keypress=="89"){
        blocksRespawn("yellow_wall.png")
        console.log("y")
    }
    if(keypress=="80"&&e.shiftKey==true){
       width=width+10
       height=height+10 
        console.log("shift+p")
        document.getElementById("span1").innerHTML=width;
        document.getElementById("span2").innerHTML=height;

    }
  
    if(keypress=="77"&&e.shiftKey==true){
        width=width-10
        height=height-10 
         console.log("shift+m")
         document.getElementById("span1").innerHTML=width;
         document.getElementById("span2").innerHTML=height;
 
     }

     if(keypress=="38"){
         up()
     }
     if(keypress=="40"){
        down()
    }
    if(keypress=="37"){
        left()
    }
    if(keypress=="39"){
        right()
    }

     
}
function up(){
   if(player_y >=0){
       player_y=player_y-height;
       canvas.remove(player)
       playerUpdate();
   }
}
function down(){
    if(player_y <=500){
        player_y=player_y+height;
        canvas.remove(player)
        playerUpdate()
    }
}

function left(){
    if(player_x >=0){
        player_x=player_x-width;
        canvas.remove(player)
        playerUpdate()
    }
}

function right(){
    if(player_x <=700){
        player_x=player_x+width;
        canvas.remove(player)
        playerUpdate()
    }
}
