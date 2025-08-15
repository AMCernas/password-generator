const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("firstPassword")
let secondPassword = document.getElementById("secondPassword")
document.getElementById("btn").addEventListener("click", generatePass);

function generatePass(){ 
     const inputNum = document.getElementById("inputNum").value;
     const inputValue = Number(inputNum)
     
     if(inputValue > 15 || inputValue < 5){
         alert("Select a correct value!") 
     } else{
          for(let i = 1; i <= inputValue; i++){
          let random1 = Math.floor(Math.random() * characters.length)
          let random2 = Math.floor(Math.random() * characters.length)
          firstPassword.textContent += characters[random1] 
          secondPassword.textContent += characters[random2] 
     }  
     }
}


