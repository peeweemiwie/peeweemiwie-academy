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


=======================================

### Array.prototype.forEach()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

The `forEach()` method executes a provided function once per array element.

    arr.forEach(callback[, thisArg])

Parameters:

*   **callback** Function to execute for each element, taking three arguments:

*   **currentValue** The current element being processed in the array.

*   **index** The index of the current element being processed in the array.

*   **array** The array that `forEach()` is being applied to.

*   **thisArg** Optional. Value to use as this when executing callback.

---------------------------------------

    function logArrayElements(ingredients, i) {
      console.log(i + ") " +ingredients[0] + ": " + ingredients[1] + "g");
    }

    var ingredients = [["strawberries", 70], ["mango", 10], ["banana", 30], ["blueberries", 23]];

    ingredients.forEach(logArrayElements);    


=======================================

### Array.prototype.map()

*   The map() method creates a new array with the results of calling a function for every array element.

*   The map() method calls the provided function once for each element in an array, in order.

*   Note: map() does not execute the function for array elements without values.

*   Note: map() does not change the original array.


---------------------------------------

    var kvArray = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
    var reformattedArray = kvArray.map(function(obj){ 
      var rObj = {};
      rObj[obj.key] = obj.value;
      return rObj;
    });

    reformattedArray;

---------------------------------------

    var numbers = [1, 4, 9];
    var roots = numbers.map(Math.sqrt);
    console.log(roots);

    var numbers = [1, 4, 9];
    var doubles = numbers.map(function(num) {
      return num * 2;
    });
    console.log(doubles);

---------------------------------------

    var persons = [
      {firstname : "Malcom", lastname: "Reynolds", prefix: "Mr."},
      {firstname : "John", lastname: "Frye", prefix: "Mr."},
      {firstname : "Jane", lastname: "Cobb", prefix: "Ms."}
    ],
    newArray = [],
    getFullName = function(item) {
      var fullname = "Howdy! " + [item.prefix, item.firstname, item.lastname].join(" ");
      return fullname;
    };

    newArray = persons.map(getFullName);

    console.log(newArray);
