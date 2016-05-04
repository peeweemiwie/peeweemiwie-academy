// Exercise 3: Fizzbuzz
// Write a program that logs each of the numbers from 1 to 100 using a while.
// For numbers that are multiples of three, print "Fizz" instead of that number.
// For numbers that are multiples of five, print "Buzz" instead of that number.
// For numbers which are multiples of both three and five print "FizzBuzz".

//////////////////////////////
// WHILE LOOP!!!!
//////////////////////////////

var i = 1;
while(i <= 100){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
    i++;
  }else if (i % 3 === 0){
    console.log("Fizz");
    i++;
  }else if (i % 5 === 0){
    console.log("Buzz");
    i++;
  }else{
    console.log(i);
    i++;
  }
}

//////////////////////////////
// FOR LOOP!!!!
//////////////////////////////


for(var i = 1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }else if (i % 3 === 0){
    console.log("Fizz");
  }else if (i % 5 === 0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
}

//////////////////////////////

var fizzBuzz = [],
  fizz = [],
  buzz = [],
  other = [];
  
for(var i = 1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    fizzBuzz.push(i);
  }else if (i % 3 === 0){
    fizz.push(i);
  }else if (i % 5 === 0){
    buzz.push(i);
  }else{
    other.push(i);
  }
}

console.log("fizzBuzz array: " + fizzBuzz);
console.log("fizz array: " + fizz);
console.log("buzz array: " + buzz);
console.log("other array: " + other);


