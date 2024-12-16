//Question 1

let character = prompt("Enter a character(number or string)").charCodeAt(0);
if(character>=48 && character<=57){
    document.write("The input is a number"+"<br>")
}
else if (character >= 65 && character <= 90) {
    document.write("The input is an uppercase letter."+"<br>");
}
else if (character >= 97 && character <= 122) {
    document.write("The input is a lowercase letter."+"<br>");
}
else {
    document.write("The input is neither a number nor a valid alphabetical letter."+"<br>");
}

//Question 2
 let int1 = prompt("Enter 1st number");
 let int2 = prompt("Enter 2nd number");
 if(int1>int2){
    document.write(int1+" is larger than "+int2+"<br>");
 }
 else if(int1<int2){
    document.write(int2+" is larger than "+int1+"<br>");
 }
 else{
    document.write("Both numbers are equal"+"<br>");
 }

//Question 3
let char = prompt("Enter a character:");
char = char.toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    document.write("Is the character a vowel? true"+"<br>");
} else {
    document.write("Is the character a vowel? false"+"<br>");
}

//Question 4
let num = prompt("Enter a number");
if(num>0){
    document.write("The number is positive"+"<br>");
}else if(num<0){
    document.write("The number is negative"+"<br>");
}else if(num==0){
    document.write("The number is 0"+"<br>");
}else{
    document.write("Invalid input"+"<br>");
}

//Question 5
let correctPassword = "secretpassword123"
let userPassword = prompt("Enter your password");
if(userPassword==""){
    document.write("Please enter your Password");
}else if(correctPassword===userPassword){
    document.write("Correct! The password you entered matches the original password");
}else{
    document.write("Incorrect Password!Please try again"+"<br>");
}

//Question 6
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
}
else{ 
greeting = "Good evening"; 
} 

//Question 7
let time = prompt("Enter time in 24-hour clock format");
if (time >= 0 && time < 1200) {
    document.write("Good morning!");
}
else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    document.write("Good evening!");
}
else if (time >= 2100 && time <= 2359) {
    document.write("Good night!");
}
else {
    document.write("Invalid time input.");
}