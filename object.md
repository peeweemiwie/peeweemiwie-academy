### object

https://www.codecademy.com/en/courses/spencer-sandbox/3/5?curriculum_id=506324b3a7dffd00020bf661

    function Rectangle(height, width) {
      this.height = height;
      this.width = width;
      this.calcArea = function() {
          return this.height * this.width;
      };
      this.calcPerimeter = function(){
            return  (this.height * 2) + (this.width * 2);
      }
    }

    var rex = new Rectangle(7,3);
    var area = rex.calcArea();
    var perimeter = rex.calcPerimeter();



https://www.codecademy.com/en/courses/spencer-sandbox/3/6?curriculum_id=506324b3a7dffd00020bf661


    function Rabbit(adjective) {
      this.adjective = adjective;
      this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
      };
    }

// now we can easily make all of our rabbits

  var rabbit1 = new Rabbit("fluffy");
  var rabbit2 = new Rabbit("happy");
  var rabbit3 = new Rabbit("sleepy");



https://www.codecademy.com/en/courses/spencer-sandbox/4/2?curriculum_id=506324b3a7dffd00020bf661


    function Person(name, age){
        this.name = name;
        this.age = age;
    }

    var family = [];
    family[0] = new Person("alice", 40);
    family[1] = new Person("bob", 42);
    family[2] = new Person("michelle", 8);
    family[3] = new Person("timmy", 6);

    for(var i=0; i<family.length; i++){
        console.log(family[i].name);
    }



https://www.codecademy.com/en/courses/spencer-sandbox/4/3?curriculum_id=506324b3a7dffd00020bf661



    function Person (name, age) {
        this.name = name;
        this.age = age;
    }

    var ageDifference = function(person1, person2) {
        return person1.age - person2.age;
    }

    var alice = new Person("Alice", 30);
    var billy = new Person("Billy", 25);

    var diff = ageDifference(alice, billy);



https://www.codecademy.com/en/courses/spencer-sandbox/4/4?curriculum_id=506324b3a7dffd00020bf661


    function Person (name, age) {
        this.name = name;
        this.age = age;
    }

    var ageDifference = function(person1, person2) {
        return person1.age - person2.age;
    };

    var olderAge = function(person1, person2){
        if(person1.age > person2.age){
            return person1.age;
        }else{
            return person2.age;
        }
    };

    var alice = new Person("Alice", 30);
    var billy = new Person("Billy", 25);

    console.log("The older person is " + olderAge(alice, billy));




https://www.codecademy.com/en/courses/spencer-sandbox/5/3?curriculum_id=506324b3a7dffd00020bf661


    var harry_potter = new Object();
    harry_potter.pages = 350;
    harry_potter.author = "J.K. Rowling";

    function Book (pages, author) {
        this.pages = pages;
        this.author = author;
    }

    var the_hobbit = new Book(320, "J.R.R. Tolkien");



https://www.codecademy.com/en/courses/spencer-sandbox/5/4?curriculum_id=506324b3a7dffd00020bf661


function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;  
    };
    this.perimeter = function(){
        return 2 * Math.PI * this.radius;
    };
};








Exercise 1: Create a variable called myCat and assign it these properties (and appropriate values of your choosing): 1. A name property, which should hold a string value 2. An age property holding an integer value 3. An isAlive property holding a boolean value 4. Add at least two more properties such as favoriteToy, and/or nappingSpot. 

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



Exercise 7:

Create a new empty object called reverse_politician_lookup by iterating over the politicians object and adding each person to the reverse_politician_lookup object with their name as a key and their job title as the value. The final object should look something like this:


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


Try to console log the value of the "name" property inside of simple_object
  console.log(complex_object["simple_object"]["name"]);


Try to use a for in loop to console log all of the properties inside of simple_object
    for(var key in complex_object["simple_object"]){
      console.log(complex_object["simple_object"][key]);
    }

