app.directive('directiveTest', function(){
  return {
    restrict: 'E',
    templateUrl: "js/directives/test.html"
  };
});

app.directive('testLink', function(){
  return {
    templateUrl: 'js/directives/link.html'
  }
});

app.directive('anotherLink', function(){
  return {
    templateUrl: 'js/directives/link2.html'
  }
});
