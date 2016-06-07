app.directive('directiveTest', function(){
  return {
    restrict: 'E',
    templateUrl: "js/directives/test.html",
    link: function(scope, element, attr){
      scope.like = function(){
        element.toggleClass('btn-like');
      };
    }
  };
});