app.directive('experienceTest', function(){
  return {
    restrict: 'AEC',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/experience.html'
  };
});

app.directive('portfolioTest', function(){
  return {
    restrict: 'AEC',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/portfolio.html'
  };
});

app.directive('bioTest', function(){
  return {
    restrict: 'AEC',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/bio.html'
  };
});

app.directive('contactTest', function(){
  return {
    restrict: 'AEC',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/contact.html'
  };
});