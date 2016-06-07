app.directive('headerTitle', function(){
  return {
    restrict: 'E',
    scope: {
      title: '='
    },
    templateUrl: 'js/directives/header.html'
  };
});
