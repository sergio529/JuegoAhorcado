var words=["ALURA", "AHORCADO", "ORACLE","XD"];
var board= document.getElementById("draw").getContext("2d");
var lettersUsed = [];
var correctLetters="";
var lives=9;

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
        board.moveTo(375+(spaceInLines*i),340)
        board.lineTo(425+(spaceInLines*i),340)
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
    board.fillText(gameWord[index],380+(spaceInLines*index), 320)
}

function writeWrongLetter(letter,lives){
    board.font="500 52px inter";
    board.linewidth=6;
    board.lineCap="round";
    board.lineJoin="round";
    board.fillStyle= "#0A3871";
    board.fillText(letter, 300+(40*(10-lives)), 400 , 40 )
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

        if(lives<0){
            alert("Intenta un nuevo juego")
            changePage("index.html")
        }else{
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
        }
            
    }

};
