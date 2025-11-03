/*
*function is reusable code to perform specific task.
.function are created using function keyword
*/


function login(){
    console.log("Login created successfully")
}
login()

function Addition(){
    console.log('Addition');
}

Addition()     //Addition
Addition(10,20) //Addition

function add(a,b){  //(a,b) --> parameter
    console.log(a+b)
}
add(10,20)  // 30 (10,20)  ---> Arguments
add(1,2)    //3
add(1)      //NaN
add("Varun")//Varunundefined