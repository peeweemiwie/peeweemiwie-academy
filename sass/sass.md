## SASS - Syntactically Awesome Stylesheets Sass!

In SCSS, nesting is not limited only to selectors. You can also nest common CSS properties if you append a : colon suffix after the name of the property.

For example, the following SCSS code:


    .parent {
      font : {
        family: Roboto, sans-serif;
        size: 12px;
        decoration: none;
      }
    }


will compile to the following CSS:


    .parent{
      font-family: Roboto, sans-serif;
      font-size: 12px;
      font-decoration: none;
    }


Q: What command allows you to compile SCSS to CSS?
  
    A: sass input.scss output.css

    Reason: The sass command takes in two arguments, the first is the location of the SCSS input and the second is the location of the file in which to place the compiled SCSS.


Q: Which of the following data types is not supported by Sass?

    A: arrays

    Reason: Arrays are not supported in Sass, but luckily you can have lists and maps which should cover most use cases for an array.


Q: What is the difference between Sass and CSS?

    A: Sass is a styling language built on top of CSS that allows for variables, nesting, mixins, and selector inheritance.

    Reason: Sass was created with one purpose in mind; to improve the experience of programming stylesheets.


Q: What best describes the benefits of SCSS nesting syntax?

    A: Nesting makes code more efficient by eliminating repetition and showing the clear DOM relationship in styling.

    Reason: This best describes the perks of nesting in SCSS, while it does improve readability, it does not generate more efficient CSS or eliminate the need for class definitions by any means.  


Q: What best describes how the introduction of variables by SCSS improves coding stylesheets?

    A: Variables improve readability and maintainability.

    Reason: While variables do improve readability, their best application is in making the code easy to maintain. They by no means make CSS render faster or the need to define properties.


Q: What command allows you to compile SCSS to CSS?
  
    A: sass input.scss output.css

    Reason: The sass command takes in two arguments, the first is the location of the SCSS input and the second is the location of the file in which to place the compiled SCSS.



#### Variable arguments

https://www.sitepoint.com/sass-basics-the-mixin-directive/

Sometimes you may need your mixin to accept a number of arguments. For example the padding property can have from one to four arguments. In this situation you could create a mixin that uses variable arguments. Variable arguments allow you to package up arguments as a list. The variable arguments look like regular arguments for a mixin except they add (…) at the end.


#### @content

You are also able to pass a block of styles not defined in the mixin through the @content directive. These additional styles will appear within the mixin where you place @content.

    @mixin cont {
      background-color: black;
      color: white;
      @content;
    }


Now when we call this mixin we can add any additional properties we want to use:


    div {
      @include cont {
          font-size: 12px;
          font-style: italic;
      }
    }

    div {
      background-color: black;
      color: white;
      font-size: 12px;
      font-style: italic;
    }

As you can see the font size and style we added has been incorporated into our styling for the div. The @content directive allows you to setup base styles and customize as needed.




### Mixin

The notation for creating a mixin is as follows:

    @mixin backface-visibility {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -ms-backface-visibility: hidden;
      -o-backface-visibility: hidden;
    }


Note: Mixin names and all other Sass identifiers use hyphens and underscores interchangeably. The following code:

    .notecard {
    .front, .back {
        width: 100%;
        height: 100%;
        position: absolute;

        @include backface_visibility;
      }
    }




    @mixin dashed-border($width, $color: #FFF) {
      border: {
         color: $color;
         width: $width;
         style: dashed;
      }
    }

    span { //only passes non-default argument
        @include dashed-border(3px);
    }

    p { //passes both arguments
        @include dashed-border(3px, green);
    }

    div { //passes out of order but explicitly defined
       @include dashed-border(color: purple, width: 5px); 
    }


#### mixin

    @mixin stripes(
      $direction, 
      $width-percent, 
      $stripe-color, 
      $stripe-background: 
      #FFF) {
        background: repeating-linear-gradient(
          $direction,
          $stripe-background,
          $stripe-background ($width-percent - 1),
          $stripe-color 1%,
          $stripe-background $width-percent
        );
      }

#### variable

    $college-ruled-style: ( 
      direction: to bottom,
      width-percent: 15%,
      stripe-color: blue,
      stripe-background: white
    );


#### css

    .definition {
        width: 100%;
        height: 100%;
        @include stripes($college-ruled-style...);
     }



#### mixin

    @mixin photo-content($file) {
      content: url(#{$file}.jpg); //string interpolation
      object-fit: cover;
    }


#### variable

    .photo { 
      @include photo-content('titanosaur');
      width: 60%;
      margin: 0px auto; 
    }


#### css


    .photo { 
      content: url(titanosaur.jpg);
      width: 60%;
      margin: 0px auto; 
    }


#### mixin

    @mixin hover-color($color){
      &:hover{
        color: $color;
      }
    }

#### css

    .test {
      top: 40%;
      @include hover-color(red);
    }    






    @mixin hover-color($color){
      &:hover{
        color: $color;
      }
    }

    $stripe-properties: to bottom, 15%, blue, white;

    @mixin transition($time){
      transition: $time;
      -webkit-transition: $time;
      -moz-transition: $time;
      -o-transition: $time;
    }

    @mixin transform-style($style){
       transform-style: $style;
      -moz-transform-style: $style;
      -o-transform-style: $style;
      -ms-transform-style: $style;
      -webkit-transform-style: $style;
    }

    @mixin backface-visibility($visibility: hidden) {
      backface-visibility: $visibility;
      -webkit-backface-visibility: $visibility;
      -moz-backface-visibility: $visibility;
      -ms-backface-visibility: $visibility;
      -o-backface-visibility: $visibility;
    }

    @mixin stripes($direction, $width-percent, $stripe-color, $stripe-background: #FFF) {
      background: repeating-linear-gradient(
        $direction,
        $stripe-background,
        $stripe-background ($width-percent - 1),
        $stripe-color 1%,
        $stripe-background $width-percent
      );
    }

    @mixin transform($transformation) {
      transform: $transformation;
      -webkit-transform: $transformation;
      -moz-transform: $transformation;
      -ms-transform: $transformation;
      -o-transform: $transformation;  
    }

    @mixin photo-content($file) {
      content: url(#{$file}.jpg);
      object-fit: cover;
    }

    //Add your own mixins here

    .notecard {
      width: 300px;
      height: 180px;
      border: 1px solid black;
      display: inline-block;
      margin: 20px;
      font-family: Roboto, sans-serif;
      box-shadow: 1px 1px 2px 2px rgba(0,0,0,.2);
      @include transform-style(preserve-3d);
      @include transition(0.4s);
      
      &:hover{
        @include transform (rotatey(-180deg));  
      }
      
      .front, .back {
        width: 100%;
        height: 100%;
        position: absolute;
        @include backface-visibility;
      }
      
      .front {
      z-index: 3;
      font-size: 20px;

        .word {
          display: block;
          text-align: center;
          position: relative;
          top: 40%;
          @include hover-color(red);
        }    
      }
      
      
      .back {
      z-index: 1;
      word-wrap: break-word;
      line-height: 1.6;
      @include transform(rotatey(-180deg));
        
        .definition {
          width: 100%;
          height: 100%;
          @include stripes($stripe-properties...)
                
          .photo {
            @include photo-content('titanosaur');
            width: 60%;
            margin: 0px auto;
              
          }
        }
      }
    }



https://www.codecademy.com/en/courses/learn-sass/lessons/mixins-and-parent-selector/exercises/mixins-and-parent-generalizations?action=lesson_resume&link_content_target=interstitial_lesson


    @mixin parallax-background($file) {
      background: url($file) no-repeat center center fixed;
      @include background-size(cover);
    }

    @mixin background-size($size){
       -webkit-background-size: $size;
      -moz-background-size: $size;
      -o-background-size: $size;
      background-size: $size;
    }
    $parallax-height: 100vh;
    $center-margin: 0px auto;

    html,
    body {
      margin: 0;
      padding: 0;
      font-family: Roboto;
      color: #2e3738;
    }


    #landscape {
      @include parallax-background("https://s3.amazonaws.com/codecademy-content/projects/sass/landscape.jpg" )
    }

    #monkeys {
      height: $parallax-height;
       width: 100%;
      height: 100vh;
      perspective: 1px;
      transform: translateZ(-1px);
      overflow-x: hidden;
      overflow-y: auto;
      @include parallax-background("https://s3.amazonaws.com/codecademy-content/projects/sass/monkeys.jpg");
    }

    #landscape,
    #monkeys {
      
      width: 100%;
      height: 100vh;
      perspective: 1px;
      transform: translateZ(-1px);
      overflow-x: hidden;
      overflow-y: auto;

      h1{
        transform: translateZ(-2px);
        text-transform: uppercase;
          font-family: 'Bitter', serif;
          letter-spacing: 0.06em;
          font-size: 120px;
          color: #FFF;
          opacity: 0.7;
          text-align: center;
      }
    }

    p {
      width: 70%;
      padding: 5%;
      margin: 0px auto;
      text-align: center;
      font-size: 20px;
      font-weight: 200;
      line-height: 1.4;
    }


### Functions and operations

Functions and operations in Sass allow for computing and iterating on styles.

With Sass functions you can:

  * Operate on color values
  * Iterate on lists and maps
  * Apply styles based on conditions
  * Assign values that result from math operations





#### division

    width: $variable/6; //division
    line-height: (600px)/9; //division
    margin-left: 20-10 px/ 2; //division
    font-size: 10px/8px; //not division



#### @each


Each loops in Sass iterate on each of the values on a list. The syntax is as follows:

    @each $item in $list {
      //some rules and or conditions
    }

The value of $item is dynamically assigned to the value of the object in the list according to its position and the iteration of the loop.


#### sass

    $list: (orange, purple, teal);

    @each $item in $list {
      .#{$item}{
        background: $item;
      }
    }


#### css


    .orange {
      background: orange;
    }

    .purple {
      background: purple;
    }

    .teal {
      background: teal;
    }


#### sass

    $total: 10; //Number of .ray divs in our html
    $step: 360deg / $total; //Used to compute the hue based on color-wheel


    .ray {
      height: 30px;
    }

    @for $i from 1 through $total {
      .ray:nth-child(#{$i}){
        background: adjust-hue(blue, $i * $step);
      }
    }


#### css

    .ray {
      height: 30px;
    }

    .ray:nth-child(1) {
      background: #9900ff;
    }

    .ray:nth-child(2) {
      background: #ff00cc;
    }

    .ray:nth-child(3) {
      background: #ff0033;
    }

    .ray:nth-child(4) {
      background: #ff6600;
    }

    .ray:nth-child(5) {
      background: yellow;
    }

    .ray:nth-child(6) {
      background: #66ff00;
    }

    .ray:nth-child(7) {
      background: #00ff33;
    }

    .ray:nth-child(8) {
      background: #00ffcc;
    }

    .ray:nth-child(9) {
      background: #0099ff;
    }

    .ray:nth-child(10) {
      background: blue;
    }



### if - if else


    width: if( $condition, $value-if-true, $value-if-false);


    @mixin deck($suite) {
      @if($suite == hearts || $suite == spades){
        color: blue;
      }
      @else-if($suite == clovers || $suite == diamonds){
        color: red;
      }
      @else{
        color: gray;
      }
    }


#### sass

    $total: 10; //Number of .ray divs in our html
    $step: 360deg / $total; //Used to compute the hue based on color-wheel


    .ray {
      height: 30px;
    }


    @for $i from 1 through $total {
      .ray:nth-child(#{$i}){
        background: adjust-hue(blue, $i * $step);
        width: if($i % 2 == 0, 300px, 350px);
        margin-left: if($i % 2 == 0, 0px, 50px);
      }
    }


  * Functions in Sass allow for an easier way to style pages, work with colors, and iterate on DOM elements.

  * Having both for loops and each-loops gives the programmer different formats to iterate on both lists and maps.

  * The introduction of conditional statements allows you to create logic-based styling rules using SCSS.



