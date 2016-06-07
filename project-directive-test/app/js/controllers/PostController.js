app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: 'Calvin Broadus, Jr.',
        avatar: 'img/cbj.svg'
      },
      comment: {
        img: 'img/dog.jpg',
        text: 'How much for that dogg in the window?'
      }
    },


    {
      author: {
        name: 'Matthew Healy',
        avatar: 'img/mh.svg'
      },
      comment: {
        text: 'I used to have a recurring dream when I was younger.'
      }
    }
  ],
  $scope.nav = ['link1', 'link2', 'link3', 'link4'],
  $scope.tests = [
  {
    name: 'test1',
    location: 'location1'
  },
  {
    name: 'test2',
    location: 'location2'
  }
  ];  
}]);

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});