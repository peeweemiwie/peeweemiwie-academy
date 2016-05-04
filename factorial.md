### Factorial


Write a function called factorial_of_n that takes a number and returns the factorial i.e. factorial_of_n(5) should return 120 (5x4x3x2x1).

Write a function called count_by_n that has parameters count_by and count_up_to, and console.log's the numbers up to count_up_to by intervals of count_by.

https://www.codecademy.com/courses/javascript-lesson-205/1/1


    function factorial_of_n(n) {
      if (n === 0) {
        return 1;
      }
      return n * factorial_of_n(n - 1);
    }

    console.log(factorial_of_n(5));


    function count_by_n(count_by, count_up_to){
      for(var i = 1; i < count_up_to; i+= count_by){
        console.log(i);
      }
    }

    count_by_n(12, 100);