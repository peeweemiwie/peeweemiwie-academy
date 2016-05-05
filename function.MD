### closure


    function wrapValue(n) {
      var localVariable = n;
      return function() { return localVariable; };
    }

    var wrap1 = wrapValue(1);
    var wrap2 = wrapValue(2);
    console.log(wrap1());
    // → 1
    console.log(wrap2());
    // → 2

---------------------------------------

    function multiplier(factor) {
      return function(number) {
        return number * factor;
      };
    }

    var twice = multiplier(2);
    console.log(twice(5));

=======================================

### Recursion

    function power(base, exponent) {
      if (exponent == 0)
        return 1;
      else
        return base * power(base, exponent - 1);
    }

    console.log(power(2, 3));
    // → 8

---------------------------------------

    function findSolution(target) {
      function find(start, history) {
        if (start == target)
          return history;
        else if (start > target)
          return null;
        else
          return find(start + 5, "(" + history + " + 5)") ||
                 find(start * 3, "(" + history + " * 3)");
      }
      return find(1, "1");
    }

    console.log(findSolution(24));


=======================================


### Invoking a Function with a Function Constructor

    function constructName(arg1, arg2) {
      this.firstName = arg1;
      this.lastName  = arg2;
      this.fullName = arg1 + " " + arg2;
    }

    var x = new constructName("Miwa","Yagi")
    console.log(x.fullName); 


### Invoking a Function with a Function Method

Both methods take an owner object as the first argument. The only difference is that call() takes the function arguments separately, and apply() takes the function arguments in an array.

In JavaScript strict mode, the first argument becomes the value of this in the invoked function, even if the argument is not an object.


---------------------------------------

#### call

    var myObject;
    function myFunction(a, b) {
        return a * b;
    }
    myObject = myFunction.call(myObject, 10, 2); 


#### apply    

    var myObject, myArray;
    function myFunction(a, b) {
        return a * b;
    }
    myArray = [3, 2];
    myObject = myFunction.apply(myObject, myArray);  
    console.log(myObject); 




