//Question 1
let studentNames = [];

//Question 2
let studentNames1 = new Array();

//Question 3
let studentNames2 = ["John", "Alice", "Michael", "Sarah"];

//Question 4
let numbersArray = [1, 2, 3, 4, 5];

//Question 5 
let booleanArray = [true, false, true, false];

//Question 6 
let mixedArray = ["John", 25, true, null, {name: "Alice", age: 30}];

//Question 7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Qualifications</h2>");
document.write("<ol>");
for(let i=0 ; i<qualifications.length ; i++){
    document.write("<li>"+qualifications[i]+"</li>");
}
document.write("</ol>");

//Question 8
let names = ["Ali","Amna","Afia"];
let score = [320,230,480];
let totalMarks = 500; 
for (let i = 0; i < names.length; i++) {
    let percentage = (score[i] / totalMarks) * 100;
    document.write("Score of "+names[i]+" is "+score[i]+" and percentage is "+percentage+"%<br>");
}

//Question 9
let colors = ["Red","Yellow","Green"];
document.write("<h3>Initial Colors Array:</h3>");
document.write(colors.join(", ") + "<br>");

// a. 
let colorAtBeginning = prompt("What color do you want to add to the beginning?");
colors.unshift(colorAtBeginning); // Add color at the beginning
document.write("<h3>After Adding Color to the Beginning:</h3>");
document.write(colors.join(", ") + "<br>");

// b. 
let colorAtEnd = prompt("What color do you want to add to the end?");
colors.push(colorAtEnd); // Add color at the end
document.write("<h3>After Adding Color to the End:</h3>");
document.write(colors.join(", ") + "<br>");

// c.
colors.unshift("Pink", "Yellow"); // Adding two colors to the beginning
document.write("<h3>After Adding Two Colors to the Beginning:</h3>");
document.write(colors.join(", ") + "<br>");

// d. 
colors.shift(); // Remove the first color
document.write("<h3>After Deleting the First Color:</h3>");
document.write(colors.join(", ") + "<br>");

// e. 
colors.pop(); // Remove the last color
document.write("<h3>After Deleting the Last Color:</h3>");
document.write(colors.join(", ") + "<br>");

// f. 
let indexToAdd = prompt("At which index do you want to add a color?");
let colorToAdd = prompt("Enter the color name to add at index " + indexToAdd);
colors.splice(indexToAdd, 0, colorToAdd); // Add the color at the specified index
document.write("<h3>After Adding Color at Index " + indexToAdd + ":</h3>");
document.write(colors.join(", ") + "<br>");

// g.
let indexToDelete = prompt("At which index do you want to delete color(s)?");
let deleteCount = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, deleteCount); // Remove specified number of colors from the index
document.write("<h3>After Deleting " + deleteCount + " Color(s) from Index " + indexToDelete + ":</h3>");
document.write(colors.join(", ") + "<br><br>");

//Question 10
let studentScore = [53,78,45,99];
document.write("Scores of Students: " + studentScore + "<br>");
let orderedScore =studentScore.sort();
document.write("Ordered scores of Students: " + orderedScore + "<br><br>");

//Question 11
let cityNames = ["Karachi","Lahore","Islamabad","Peshawar","Quetta"];
document.write("Cities list: " + cityNames + "<br>");
let selectedCities = cityNames.slice(2,4);
document.write("Selected cities list: "+selectedCities + "<br><br>");

//Question 12
var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
document.write("<h3>Array</h3>");
document.write(arr);
document.write("<h3>String</h3>");
document.write(singleString+"<br><br>");

//Question 13
let array = [];
array.push("keyboard");
array.push("Mouse");
array.push("printer");
array.push("Monitor");
document.write("Devices: "+array+"<br>");
while(array.length>0){
    let removedelement = array.shift();
    document.write(removedelement+"<br>");
}
document.write("<br>");

//Question 14
let array2 = [];
array2.push("keyboard");
array2.push("Mouse");
array2.push("printer");
array2.push("Monitor");
document.write("Devices: "+array2+"<br>");
while(array2.length>0){
    let removedelement = array2.pop();
    document.write(removedelement+"<br>");
}
document.write("<br>");

//Question 15
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>"); 
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");



