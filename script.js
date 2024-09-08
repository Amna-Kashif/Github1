// CHAP 1 (ALERTS)

// Ques 1: (Alert these indivisually):
// var firstName = "Amna",  lastName = "Kashif", email = "abc@gmail.com", phoneNum = 123456789, password = 12345678;
// alert(firstName);
// alert(lastName);
// alert(email);
// alert(phoneNum);
// alert(password);

// // // Ques 2: (Alert this Statement):
// alert("You're learning JavaScript!");

// // // Ques 3:  (Alert a Statement):
// alert("Hi! I am Amna Kashif, and i'm learning javascript");


// // CHAPTER 2: (VARIABLES FOR STRINGS)

// // Ques 1: (Declare variable in a camelCase format):
var userInput;


// // Ques 2:  (Declare variable & assign string to it in second statement):
var userName;
userNAme = "Amna Kashif";


// // Ques 3: (Declare variable and alert it):
var teamNAme = "Your Team Name";
// alert(teamNAme);


// Ques 4: (Reassign the variable):
var bestMan = "Charlie";
bestMan = "John Doe";
console.log(bestMan);


// CHAPTER 3: (VARIABLES FOR NUMBERS)

// Ques 1:  (Declaring a variable ):
var caseQty;

// Ques 2:  (Assigning a number to a variable):
caseQty = 144;
console.log(caseQty);



// Ques 3:
var num = "9";
var numAsNumber = Number(num);
var result = numAsNumber + 1;
console.log(num + " " + result);



// Ques 4:
var sumOfNumbers;
sumOfNumbers = 5 + 3;
console.log(sumOfNumbers);



// Ques 5:
var merchTotal  = 100;
var shippingCharge = 10;
var totalCost = merchTotal + shippingCharge;
console.log(totalCost);


// Ques 6:
var number = 14;
number = 12 + 3;
console.log(number);



















// CHAPTER 5: MATH EXPRESSIONS

// Ques 1: (Sum of two numbers)
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
console.log(`Sum of ${num1} and ${num2} is ${sum}`);




// Ques 2(a):  (Subtracting one number from another)
var subtraction = num1 - num2
console.log(subtraction);

// Ques 2(b):  (Multiplying two numbers)
var multiplication = num1 *  num2
console.log(multiplication);

// Ques 2(c):  (Dividing one number by another)
var  division = num1 / num2;
console.log(division);

// Ques 2(d):   (Modulus of two numbers)
var  modulus = num1 % num2;
console.log(modulus);




// Ques 3:

// 3(a):   (Declaring a variable)
var number;

// 3(b):    (Assigning a value to a variable)
number = 3
console.log(`Value after declaration is: ${number}`);

// 3(c): (Declaring  and assigning a value to a variable in one line)
var myNumber = 5;

// 3(d): (show the value in browser)
console.log(`Initial Value: ${myNumber}`);

// 3(e): (Incrementing a variable)
myNumber++;

// 3(f): (show the increment in browser)
console.log(`Value after increment is ${myNumber}`);

// 3(g): (Add num to the variable) 
myNumber += 7;

// 3(h):  (show the addition in browser)
console.log(`Value after addition is: ${myNumber}`);

// 3(i): (decrementing the variable)
myNumber--;  

// 3(j):  (show the decrement in browser)
console.log(`Value after decrement is: ${myNumber}`);

// 3(k):  (Dividing the variable by 3)
var remainder =  myNumber / 3;

// 3(l):   (show the division in browser)
console.log(`The remainder is: ${remainder}`);




// Ques 4:  (Write a expression that takes two arguments and returns their sum)
var perTicketCost = 600;
var totalTickets = 5;
var totalCost = perTicketCost * totalTickets;
console.log(`The cost to buy 5 tickets to a movie is ${totalCost}PKR`);


// Ques 5: (Table of 4)
console.log(`Table of 4:`);
var table = 4;
for(let i = 1;  i <= 10; i++){
    console.log(` ${table} x ${i} = ${table*i}`);
}


// Ques 6:  (Temperature Converter)
var celsiusTemperature = 25;
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);

var fahrenheitTemperature2 = 70;
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
console.log(`${fahrenheitTemperature2}°F is ${celsiusTemperature2}°C`);


// Ques 7: (Shopping Cart)
var priceOfItem1 = 650;
var qtyOfItem1 = 3;
var priceOfItem2 = 100;
var qtyOfItem2 = 7;
var shippingCharges = 100;
var totalCost = priceOfItem1 + priceOfItem2  + shippingCharges;

console.log(` Price of item 1 is ${priceOfItem1} \n Quantity of item 1 is ${qtyOfItem1} \n Price of item 2 is ${priceOfItem2} \n Quantity of item 2 is ${qtyOfItem2} \n Shipping Charges ${shippingCharges} The total cost of your order is ${totalCost}`);


// Ques 8:  (Marksheet of Student)

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
console.log(` Total marks: ${totalMarks} \n Marks obtained: ${marksObtained} \n Percentage of student is ${percentage}%`);


// Ques 9: (Currency in PKR)
var totalPkr = (10 * 104.8) + (25 * 28);
console.log(`Total currency in PKR: ${totalPkr}`);


// Ques 10: (Arithmetic Calculations)
var calculation = 20;

let solve = ((calculation + 5) * 10) / 2;

console.log(solve);


// Ques 11: (Age Calculator)
var currentYear = 2024;
var birthYear = 1999;
var age = currentYear - birthYear;
console.log(` Current Year: ${currentYear} \n Birth Year: ${birthYear} \n Your Age: ${age}`);


// Ques 12:  (The Geometrizer)
var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = 3.142 * radius * radius;

console.log(` Radius of a circle: ${radius} \n The circumference is: ${circumference} \n Area of a circle: ${area}`);


// Ques 13: (Life time Supply Calculator)
var favSnack = "chocolates";
var currentAge = 20;
var maxAge = 80;
var snackPerday = 2;
var totalSnack = (maxAge - currentAge) * snackPerday;

console.log(` Favorite Snack: ${favSnack} \n Current age: ${currentAge} \n Estimated Maximum Age: ${maxAge} \n Amount of snacks per day: ${snackPerday} \n You will need ${totalSnack} chocolates to last you until the ripe old age of ${maxAge}`);




