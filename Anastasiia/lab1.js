//1. Write a JavaScript program that accept two integers and display the larger.Go to the editor

function larger(a, b) {
    if (a > b) {
     console.log(a)
    }
    else {
     console.log(b)
    }
}

//2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor Sample numbers : 3, -7, 2 Output : The sign is -

var a = 3;
var b = -7;
var c = 2;
 for (var i = 0; i < number.leght; i++) {
     if(numbers[i] < 0) {
      console.log("The Sign at " + numbers[i] + " is -")
     }
      else {
        console.log("The Sign at " + numbers[i] + " is +");
      }
 }


//3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor Sample numbers : 0, -1, 4 Output : 4, 0, -1

//4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor Sample numbers : -5, -2, -6, 0, -1 Output : 0

//5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor Sample Output : "0 is even" "1 is odd" "2 is even"

for(var i = 1; i < 16; i++){
    if(i === 0){
    console.log(i + " is even");
    }
    else if(i % 2 === 0){
    console.log(i + " is even");
    }
    else {
    console.log(i + " is odd");
    }
    }

/* 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. Go to the editor
Student Name	Marks David	80 Vinoth	77 Divya	88 Ishitha	95 Thomas	68 The grades are computed as follows :
Range	Grade <60	F <70	D <80	C  <90	B <100	A*/

//7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor

//8. According to Wikipedia a happy number is defined by the following process : "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". Write a JavaScript program to find and print the first 5 happy numbers. Go to the editor

//9. Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 33 + 73 + 1**3 = 371.

//10. Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

//11. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. Go to the editor
