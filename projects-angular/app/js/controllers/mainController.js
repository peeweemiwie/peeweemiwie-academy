app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    title: 'MOVE!!!',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99,
    date: "1971-09-27"
  };

  $scope.yoga = {
    title: 'peewee yoga',
    developer: 'peeweemiwie yagi',
    price: 1999.99,
    date: "2016-01-05"
  };
}]);