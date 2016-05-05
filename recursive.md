
###Nested functions and loops

https://www.codecademy.com/en/courses/javascript-lesson-205/0/4

    function multiplyBy10(number) {
      console.log(number * 10);
    }

    function multiplesOf10(limit) {
      // Put your for loop here
       for(var i=1; i<=limit; i++){
            multiplyBy10(i)
        }
    }

    // Call the function multiplesOf10() on any integer

    multiplesOf10(5);



### Recursion in JavaScript

https://www.codecademy.com/en/courses/javascript-lesson-205/3/3#


    var stack = [];

    function countDown(int) {
      stack.push(int);
      if (int === 1) {  
        return 1;
      }
        return countDown(int - 1);
    }

    function multiplyEach() {
      // Remove the last value of the stack 
      // and assign it to the variable int
      int = stack.pop();
      x = stack.length;
      // Base case
      if (x === 0) {
        return int;
      }
      // Recursive case
      else {
      stack[x - 1] = int * stack[x - 1];
      return multiplyEach();
      }
    }

    // Call the function countDown(7)
    countDown(7);
    // And then print out the value returned by multiplyEach()
    console.log(multiplyEach());



### Modifying values in a simple array
https://www.codecademy.com/en/courses/javascript-lesson-205/3/4

    // Our array of messy words
    var capitals = ["berlin", "parIs", "MaDRiD"];

    // Capitalize function
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    // Our recursive function
    function fixLetterCase(array, i) {    
      // Base case
      if (i === array.length) {
        return;
      } 
      // Action
      array[i] = capitalize(array[i]);
      // Recursive case
      return fixLetterCase(array, i + 1);
    }

    // Here is our function call
    fixLetterCase(capitals, 0);

    console.log(capitals);