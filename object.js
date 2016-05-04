// Exercise 1: Create a variable called myCat and assign it these properties (and appropriate values of your choosing): 1. A name property, which should hold a string value 2. An age property holding an integer value 3. An isAlive property holding a boolean value 4. Add at least two more properties such as favoriteToy, and/or nappingSpot. 

var myCat = {
  name: "Love",
  age: 2,
  isAlive: true,
  powNum: 7,
  url: "https://www.instagram.com/p/BDk2ScdlFdZ/"
}

for(var meow in myCat){
  console.log(meow + ": " + myCat[meow]);
}



// Exercise 7:

// Create a new empty object called reverse_politician_lookup by iterating over the politicians object and adding each person to the reverse_politician_lookup object with their name as a key and their job title as the value. The final object should look something like this:


// var reverse_politician_lookup = {
//     'hillary clinton': 'secretary_of_state',
//     'barack obama': 'potus',
//     'michelle obama': 'flotus',
//     'joe biden': 'vice_prez',
//     'jerry brown': 'gov_of_california'
// };



var politicians = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};

var reverse_politician_lookup = {};
for(var key in politicians){
  reverse_politician_lookup[politicians[key]] = key;
}
console.log(reverse_politician_lookup);


/////////////////////////////////////////////////////


var complex_object = {
  string: "I'm a string!",
  number: 42,
  array: ["all sorts of stuff", 10, true, undefined, function(){console.log('beepity-beep')}],
  fn: console.log,
  simple_object: {name: 'bob', location: 'basement', happy: 'false'}
};


for(var key in complex_object){
  console.log(complex_object[key]);
}


//Try to console log the value of the "name" property inside of simple_object
console.log(complex_object["simple_object"]["name"]);


// Try to use a for in loop to console log all of the properties inside of simple_object
for(var key in complex_object["simple_object"]){
  console.log(complex_object["simple_object"][key]);
}

