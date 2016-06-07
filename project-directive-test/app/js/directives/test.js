app.directive('directiveTest', function(){
  return {
    restrict: 'E',
    templateUrl: "js/directives/test.html"
  };
});

app.directive('testLink', function(){
  return {
    templateUrl: 'js/directives/link.html',
    link: function(scope, element, attr){
      scope.like = function(){
        element.toggleClass('btn-like');
      };
    }
  }
});