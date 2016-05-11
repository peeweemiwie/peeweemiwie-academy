### Reverse Array

    var reverser = function(arr){
      // we need to return a new array, so let's a new array and return it later
      var reversedArr = [];
      // iterate over the 'arr' and push each item to the new array
        // we need to iterate from back to front
        // start at the length of the array and decremet our way down to the 0th index
        for(var i = arr.length - 1; i >= 0; i--){
          reversedArr.push(arr[i]);
        }
        // return the new array
        return reversedArr;
    };

    reverser([1,2,3,5,6]);



### Array Value Comparison

    var biggestSmallest = function(arr){
      // define two variables "smallest" and "largest"
      var smallest, largest;
      // set "smallest" equal to a reallllllly larger number
      smallest = arr[0];
      // set "largest" equal to a reallllllly small number
      largest = arr[0];
      // for() iterate over our "arr"
      for(var i = 0; i < arr.length; i++){
        // compare the current value to both the "smallest" and "largest" variables
        // if the current value is smaller than "smallest"
        if(arr[i] < smallest){
          // set "smallest" to the current value
          smallest = arr[i];
        }
        // if the current value is larger than "largest"
        if(arr[i] > largest){
          // set "largest" to the current value
          largest = arr[i];
        }
      // return a new array with "smallest" as the first item and "largest" as the second item
      }
      
      return [smallest, largest];
      
    };

    biggestSmallest([55, -0.01, 66, 888]);



### Array Combiner

    var arrayCombiner = function(array1, array2) {
      var output = [];
      for(var i = 0; i < Math.max(array1.length, array2.length); i++){
        if(array1[i] !== undefined){
          output.push(array1[i]);
        }
        if(array2[i] !== undefined){
          output.push(array2[i]);
        }
      }
      return output;
    };

    var combinedArray = arrayCombiner([1, 2], [4, 5, "cat nap", 3, "cat",6, 7]);

    // [1,2,3,4,5,6]

    /* should print one array that contains all the values from array1
       and array 2 smooshed together */

    console.log(combinedArray);
