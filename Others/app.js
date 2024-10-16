// a. Data types

let String_Name = "Kent Ryan Pagongpong";
let Int_Age = 20;
let Boolean_Gender_Male = true;
let Char_Middle_In = 'L';
let String_Occupation = "Student";

// console.log("Name : " + String_Name);
// console.log("Age : " + Int_Age);
// console.log("A male : " + Boolean_Gender_Male);
// console.log("Middle Initial : " + Char_Middle_In);
// console.log("Occupation : " + String_Occupation);

// b. Arithmetic and Logical Operators

function Calculate(num1 , num2 , Operators){

  if (Operators === '+') {
    Sum = num1 + num2;
    return "The s um is : " + Sum;

  }else if(Operators === '-') {
    Difference = num1 - num2;
    return "The Difference is : " + Difference;

  }else if(Operators === '*') {
    Product = num1 * num2;
    return "The Product is : " + Product;

  }else if(Operators === '/') {
    Quotient = num1 / num2;
    return "The Quotient is : " + Quotient;

  }else{
    return "Invalid Try again"
  }
  
}

// console.log(Calculate(12, 11, '*'));

// c. Conditional Statement
// i. if else

function If_else(user_age){

let age_limit = 18;


if (user_age === age_limit || user_age > age_limit){

  return "You're Allowed to enter the website because you're " + user_age + " yrs old =)";

}else{
  return "Youre Not Allowed to enter this this website because you're " + user_age + " yrs old and it is below the age limit";
}
}

// console.log(If_else(19));

// ii. switch

function Switch_statement(age){


let age_category;

switch(true) {

  case (age >= 0 && age <= 12):
    age_category = "Your age belongs to the CHILD age category";
  break;

  case (age >= 13 && age <= 18):
    age_category = "Your age belongs to the TEEN age category";
  break;

  case (age >= 19):
    age_category = "Your age belongs to the ADULT age category";
  break;

  default:
    age_category = "Invalid Age"

}
return age_category;

}

// console.log(Switch_statement(18));

  
// d. Loops

function For_loop(){

  for(let i = 0; i <=10 ; i++) {
    console.log(i);
  }
}

function While_loop(){

  let i = 1;
  while(i <= 5) {
    console.log(i); i++;
  }
  
}

function Do_while_loop(){

  let i = 1;
  do { console.log(i); i++;} 
  while(i <=5);
  
}


// console.log(For_loop());
// console.log(While_loop());
// console.log(Do_while_loop());

// e. Functional Programming
// i. Determine a number if it is a odd or even

function Odd_Even(number){



  if (number%2 === 0 ) {
     return "The number " + number +  " is an Even number";
  }else {
     return "The number " + number +  " is an Odd number";
  }
  
}

// console.log(Odd_Even(9));


// ii. Determine a number is it is prime number

function Prime_num(num){

  if(num <= 1) 
    return "The number " + num + " is not a prime number ";

  for(let i = 2; i < num; i++) {

    if (num % i === 0) {
      return "The number " + num + " is not a prime number ";
    }
  }

  return "The number " + num + " is a prime number";

}

// console.log(Prime_num(10));



// iii. Determine a string if it is a palindrome

function Palindrome_Identifier(string){

  let reversed_string = string.split('').reverse().join('');

  if (string === reversed_string) {

    return "The word " + string + " is a Palindrome";
  }else {

    return "The word " + string + " is not a Palindrome";
  }

}

// console.log(Palindrome_Identifier("hehe"));