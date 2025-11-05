

function Display1(){
    // alert("gm")
    document.getElementById("one").style.backgroundColor = "yellow"
}
function Display2(){
    document.getElementById("two").style.backgroundColor = "yellow"
}
function Display3(){
    document.getElementById("three").style.backgroundColor = "yellow"
}
function Display4(){
    document.getElementById("four").style.backgroundColor = "yellow"
}
function Display5(){
    document.getElementById("five").style.backgroundColor = "yellow"
}
function Display6(){
    let input =document.getElementById("six")
    input.value=input.value.toUpperCase()
}
function password(){
    let enteredtext= document.getElementById("login").value
    let pass = "password"
   if(enteredtext == pass){
    alert('login succues')
   }
   else{
    alert('Incorrect Password')
   }
}