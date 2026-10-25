// project-2

let marks = 72;
if(marks >=80){
    console.log("A+");
}
else if(marks >= 60){
    console.log("A");
}
else if(marks >=40){
    console.log("Pass");
}
else{
    console.log("fail");
}

// project-3
let username = "student";
let password = "12345";
// if(username === "student"){
//     if(password === "12345"){
//         console.log("login sucessfull");
//     }
//     else{
//         console.log("Invalid Credentials");
//     }
// }
// else{
//     console.log("invalid username");

// }

if(username === "student" && password === "12345"){
    console.log("login succesfull");   
}
else{
    console.log("Invalid Credentials");   
}

let number = -10;
if(number >= 0){
    console.log("positive");
}
else if(number <= 0){
    console.log("negetive");
}
else{
    console.log("zero");
}

// l

// loops
// for loop
for (let i = 1; i <= 5; i++){
    console.log("hello Javascript");
}

for (let i = 0; i <= 10; i++){
    console.log(i)
}

for (let i = 2; i <=10; i += 2){
    console.log(i);
}
for (let i = 1; i<= 17; i +=2){
    console.log("odd number-",i);
}

// while loop
let i = 0;
while(i <= 100){
    console.log("I Love Javascript");
    i++;
}

// d0....while
let x = 10;
do{
    console.log(x);
    x++;
}while (x <= 5);

// namta
// let number = 5;
// for(let i = 1; i <= 10; i++){
//     console.log(number + "x"+ i + "=" + number * i);
// }

let namta = 5;
for(let i = 1; i <= 10; i++){
    // console.log(namta  + "x" + i + " = " + namta * i);
     console.log(namta * i);
}
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);
}

// function
function greet(){
    console.log("hello sumaiya")
}
greet()
greet()
greet()

// function indivisual
function greet(name) {
    console.log("Hello " + name);
}

greet("Sumaiya");
greet("Rahim");
greet("Karim");

function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(50, 30);