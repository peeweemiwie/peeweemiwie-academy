###Fibonacci sequence

TaskFibonacci sequence

You are encouraged to solve this task according to the task description, using any language you may know. The Fibonacci sequence is a sequence Fn of natural numbers defined recursively:

    F0 = 0                                           
    F1 = 1                                           
    Fn = F(n-1) + F(n-2), if n > 1   

Write a function to generate the nth Fibonacci number.

Solutions can be iterative or recursive (though recursive solutions are generally considered too slow and are mostly used as an exercise in recursion).

The sequence is sometimes extended into negative numbers by using a straightforward inverse of the positive definition:

    Fn = F(n+2) - F(n+1), if n < 0   

support for negative n in the solution is optional.



    var fib = function(n) {
      if (n===1) {
        return [0, 1];
      } else {
        var s = fib(n - 1), 
          sLength = s.length;
          s.push(s[sLength - 1] + s[sLength - 2]);
        return s;
      }
    };

    console.log(fib(10));