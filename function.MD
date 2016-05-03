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