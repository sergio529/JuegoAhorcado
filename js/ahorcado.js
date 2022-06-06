var words=["ALURA", "AHORCADO", "ORACLE","XD"];
var board= document.getElementById("draw").getContext("2D");
var lettersUsed = [];
var gameWord= "";
var lives=9;

function chooseWord(){
 var  wordChoosen= words[Math.floor(Math.random()*words.length)];
 console.log(wordChoosen);
 return wordChoosen;;

}

function drawLines(){

    board.linewidth=6;
    board.lineCap="round";
    board.lineJoin="round";
    board.strokeStyle= "#FFFFFF";
    
    board.beginPath()
    

    
    var spaceInLines=600/gameWord.length;
    for (let i=0 ; i<gameWord.length;i++){
        board.moveTo(500+(spaceInLines*i),640)
        board.lineTo(550+(spaceInLines*i),640)
    }
    board.stroke();
    board.closePath();
     
}

drawLines(chooseWord());


