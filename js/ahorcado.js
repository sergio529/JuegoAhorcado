var words=["ALURA", "AHORCADO", "ORACLE","XD"];
var board= document.getElementById("draw").getContext("2d");
var lettersUsed = [];
var correctLetters="";
var lives=5;
var point=0
var drawCoordenate=400;

function chooseWord(){
 var  wordChoosen= words[Math.floor(Math.random()*words.length)];
 console.log(wordChoosen);
 gameWord=wordChoosen
 return gameWord;

}

function drawLines(){

    board.linewidth=6;
    board.lineCap="round";
    board.lineJoin="round";
    board.strokeStyle= "#0A3871";
    board.beginPath()
    
    var spaceInLines=475/gameWord.length;
    for (let i=0 ; i<gameWord.length;i++){
        board.moveTo(drawCoordenate+(spaceInLines*i),640)
        board.lineTo(drawCoordenate+50+(spaceInLines*i),640)
    }
    board.stroke();
    board.closePath();  
}

drawLines(chooseWord()); 

function writeCorrectLetter(index){
    board.font="bold 52px inter";
    board.linewidth=6;
    board.lineCap="round";
    board.lineJoin="round";
    board.fillStyle= "#0A3871";
    var spaceInLines=475/gameWord.length;
    board.fillText(gameWord[index],drawCoordenate+5+(spaceInLines*index), 620)
    point+=1;
}

function writeWrongLetter(letter,lives){
    board.font="500 52px inter";
    board.linewidth=6;
    board.lineCap="round";
    board.lineJoin="round";
    board.fillStyle= "gray";
    board.fillText(letter, drawCoordenate-275+(60*(10-lives)), 700 , 40 )
    console.log(lives);

}

function checkClickedKey(key){
    if (lettersUsed.length<1 || lettersUsed.indexOf(key)<0){
        lettersUsed.push(key);
        return false;
    }
    else{
        lettersUsed.push(key);
        return true;
    }

}

function addCorrectLetter(i){
    correctLetters+= gameWord[i].toUpperCase()
}

function addWrongLetter(a){
    if (gameWord.indexOf(a)<=0)
{
    lives-=1;
}}



document.onkeydown=(e)=>{
    let letter=e.key.toUpperCase();
    if(!checkClickedKey(e.key)){

        
        if(gameWord.includes(letter)){
            console.log(letter);
            addCorrectLetter(gameWord.indexOf(letter));
            for(let i=0; i<gameWord.length;i++){
                if(gameWord[i]==letter){
                    writeCorrectLetter(i);

                }
            }
        }
        else{
            
            addWrongLetter(letter)
            writeWrongLetter(letter,lives);
            
        }
        
        if(lives==0){
            alert("Intenta un nuevo juego")
            changePage("index.html")
        }

        if(point==gameWord.length){
            alert("Ha ganado"),
            changePage("index.html");
        }
        
        

    }

};
