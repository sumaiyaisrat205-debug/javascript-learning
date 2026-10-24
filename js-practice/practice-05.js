let number =25;
number %= 2;
console.log(number);


// let marks = 75;
// let attendance =90;
// console.log(typeof attendance);
// console.log( marks >= 40 && attendance >= 80);

let a = 10;
let b = "10";
// console.log(a + b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a=b);
// console.log(a==b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

// if/else
    let age = 16;
if(age >= 18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote")
}

// else/if
let marks = 75;
 if(marks >=80){
    console.log("A+")
 }
 else if(marks >=70){
    console.log("A");
 }
 else if(marks >=60){
    console.log("A-");
 }
 else if(marks >=50){
    console.log("B");
 }
 else if(marks >=40){
    console.log("B-");  
 }
 else{
    console.log("fail");
 }

//  switch
let day = 3;
switch(day){
    case 1:
    console.log("saturday")
    break;
    case 2:
        console.log("sunday");
    break;
    case 3:
        console.log("monday");
        break;
    case 4:
        console.log("teusday");
    break;
    case 5:
        console.log("wednesday");
    break;
    case 6:
        console.log("thursday");
    break;
    case 7:
        console.log("friday");
    break;
    default:
        console.log("invalid day")
}


// nested if

let userName = "admin";
let password = "1234";
if (userName === "admin") {
    if(password === "1234"){
        console.log("login succesfull");
    }
    else{
        console.log("wrong password")
        }
    }
 else {
   console.log ("invalid username")
}

// ternary operator
// let score = 20;
// let result = score >= 18 ? "valid" : "invalid";
// console.log(result);


// project
let studentName ="Sumaiya";
let score = 75;
let attendance = 80;
if(score >=60 && attendance >=75){
    console.log(studentName + "she has passed");
}
else{
    console.log(userName + "she has failed");
}


// project
let temperature = 32;
if (temperature >=35){
    console.log("very hot");
}
else if(temperature >= 25){
    console.log("warm");
}
else if(temperature >= 15){
    console.log("cool");
}
else{
    console.log("cold");
    
}