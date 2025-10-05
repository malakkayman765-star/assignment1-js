
/*Q1*/
var num = +prompt('Enter number')
console.log(num)

/*q2*/
var num = +prompt(' Number: ')

if (num % 3 === 0 && num % 4 === 0) {
    console.log("yes");
} else {
    console.log("no");
}

/*Q3*/
var num1 = +prompt('enter first number')
var num2 = +prompt('enter second number')
if (num1 > num2) {
    console.log(num1)
}
else {
    console.log(num2)
}

/*q4*/
var num = +prompt('insert number')
if (num < 0) {
    console.log("negative")

}
else {
    console.log("positive");
}


/*Q5*/

/*Q6*/
var num = +prompt('insert num')
if (num % 2 == 0) {
    console.log("even")
}
else {
    console.log("odd")
}

/*q8*/
var char = prompt('insert character')
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("vowel");
} else {
    console.log("consonant")

}


/*Q9*/
var num = +prompt('insert integer number')
for (var i = 1; i <= num; i++) {
    console.log(i)
}
/*Q10*/
var num = +prompt('enter an integer')
for (var i = 0; i <= 12; i++) {
    console.log(num * i)
}
/*Q11*/
var num = +prompt('enter an integer')
for (var i = 0; i <= num; i += 2) {
    console.log(i)
}
/*Q12*/
var num1 = +prompt('1st no')
var num2 = +prompt('2nd no')
var result = 1
for (var i = 1; i <= num2; i++) {
    result = result * num1
}
console.log(result)
/*Q12*/
var num1 = +prompt('Enter mark of subject 1:')
var num2 = +prompt('Enter mark of subject 2:')
var num3 = +prompt('Enter mark of subject 3:')
var num4 = +prompt('Enter mark of subject 4:')
var num5 = +prompt('Enter mark of subject 5:')
var total = num1 + num2 + num3 + num4 + num5
var average = total / 5
var percentage = (total / 500) * 100
console.log("total marks =" + total)
console.log("Average Marks=" + average)
console.log("Percentage =" + percentage)
/*Q13*/
/*Q14*/
var physics = +prompt("Enter marks for Physics:");
var chemistry = +prompt("Enter marks for Chemistry:");
var biology = +prompt("Enter marks for Biology:");
var mathematics = +prompt("Enter marks for Mathematics:");
var computer = +prompt("Enter marks for Computer:");

var total = physics + chemistry + biology + mathematics + computer;
var percentage = (total / 500) * 100

console.log("Percentage = " + percentage + "%");
if (percentage >= 90) {
    console.log("Grade A")
} else if (percentage >= 80) {
    console.log("Grade B")
} else if (percentage >= 70) {
    console.log("Grade C")
} else if (percentage >= 60) {
    console.log("Grade D");
} else if (percentage >= 40) {
    console.log("Grade E")
} else {
    console.log("Grade F");
}

/*q15*/
var monthno = prompt('monthno :')
switch (monthno) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "12":
    case "8":
    case "10":
        console.log('31')
        break;
    case "4":
    case "6":
    case "9":
    case "11":
        console.log('30')
        break;
    case "2":
        console.log('29 or 28')
        break;
    default:
        console.log('Invalid month number!');
        break;
}
/*Q16*/
var alphabet = prompt('check whether an alphabet is vowel or consonant')
switch (alphabet) {
    case "a":
    case "o":
    case "i":
    case "e":
    case "u":
        console.log('vowel');
        break;
    default:
        console.log('consonant');
        break;
}
/*Q17*/
var num1 = +prompt("Enter first number:")
var num2 = +prompt("Enter second number:")

switch (true) {
    case (num1 > num2):
        console.log("Maximum = " + num1);
        break;

    case (num2 > num1):
        console.log("Maximum = " + num2);
        break;

    default:
        console.log("Both numbers are equal");
        break;
}
/*Q18*/
var num = +prompt("Enter number:")

switch (true) {
    case (num % 2 === 0):
        console.log("even");
        break;
    default:
        console.log("odd");
        break;
}
/*Q19*/
var num = +prompt("Enter number:")

switch (true) {
    case (num > 0):
        console.log("positive");
        break;
    case (num < 0):
        console.log("negative");
        break;

    default:
        console.log("0");
        break;
}
/*Q20*/
var num1 = +prompt("Enter first number:");
var operator = prompt("Enter operator (+, -, *, /, %):");
var num2 = +prompt("Enter second number:");

switch (operator) {
    case '+':
        console.log("Result = " + (num1 + num2));
        break;

    case '-':
        console.log("Result = " + (num1 - num2));
        break;

    case '*':
        console.log("Result = " + (num1 * num2));
        break;

    case '/':
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed");
        } else {
            console.log("Result = " + (num1 / num2));
        }
        break;

    case '%':
        console.log("Result = " + (num1 % num2));
        break;

    default:
        console.log("Invalid operator!");
        break;
}