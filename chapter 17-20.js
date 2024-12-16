//Question 1
let multiArray = [[], []];

//Question 2  
let matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write("<h3>Matrix</h3>")
for (let i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(" ") + "<br><br>");
}

//Question 3 
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

//Question 4
let number = prompt("Enter a number to show its multiplication table");
let length = prompt("Enter length of multiplication table");
document.write("Multipication table of "+number+"<br>");
document.write("Length "+length+"<br><br>")
for(let i=1;i<=length;i++){
    let mul=number*i;
    document.write(number+" x "+i+" = "+mul+"<br>");
}
document.write("<br><br>");

//Question 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
for(let i=0;i<fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}
document.write("<br><br>");

//Question 6
document.write("Counting: ");
for(let i=0;i<=15;i++){
    document.write(i+",");
}
document.write("<br>");
document.write("Reverse Counting: ");
for(let i=15;i>=0;i--){
    document.write(i+",");
}
document.write("<br>");
document.write("Even: ");
for(let i=0;i<=20;i+=2){
    document.write(i+",");
}
document.write("<br>");
document.write("Odd: ");
for(let i=1;i<=20;i+=2){
    document.write(i+",");
}
document.write("<br>");
document.write("Series: ");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}
document.write("<br><br>");

//Question 7
let array = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Welcome to ABC bakery. What do you want to order sir/mam?:");
let i = 0;
while (i < array.length && searchItem.toLowerCase() !== array[i].toLowerCase()) {
    i++; 
}
if (i < array.length) {
    document.write(array[i] + " is present at index " + i + " in our bakery."+"<br><br>");
} else {
    document.write("Sorry, " + searchItem + " is not available in our bakery."+"<br><br>");
}

//Question 8
let A = [24, 53, 78, 91, 12];
let largest=A[0];
for(let i=0;i<A.length;i++){
    if(A[i]>largest){
        largest=A[i];
    }
}
document.write("Array items "+A+"<br>")
document.write("The largest number is "+largest+"<br>");

//Question 9
let smallest=A[0];
for(let i=0;i<A.length;i++){
    if(A[i]<smallest){
        smallest=A[i];
    }
}
document.write("The smallest number is "+smallest+"<br><br>");

//Question 10
document.write("<h3>Multiples of 5 (1 to 100)</h3>");
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + " , ");
    }
}