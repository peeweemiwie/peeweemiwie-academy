// console.log(888)
var logo1 = $('#logo1'),
    logo2 = $('#logo2'),
    btn   = $('.btn'),
    svg   = $(svg)
;

// btn.on('mouseover', function(){
//   // alert(3);
//   TweenMax.fromTo([logo1, logo2], 1, {
//     x     : 300,
//     y     : 300,
//     ease  : Power4.easeInOut
//   },{
//     x     : 0,
//     y     : 0,
//     delay : 1
//   })
// });

btn.on('mouseover', function(){
  TweenMax.staggerFromTo('.btn', 1, {
    x     : 0,
    y     : 0,
    ease  : Power4.easeInOut
  },{
    x     : 100,
    y     : 100,
    delay : 1
  }, .2)
});