app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    title: 'MOVE',
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
    price: 1.99
  };
}]);