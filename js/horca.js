var board= document.getElementById("draw").getContext("2d");


function drawLine(x1,x2,y1,y2){
    board.linewidth=6;
    board.lineCap="round";
    board.lineJoin="round";
    board.strokeStyle= "#0A3871";
    board.beginPath();
    board.moveTo(x1,y1);
    board.lineTo(x2,y2);
}


drawLine(100,400,600,600)
if(lives==(5)){

}