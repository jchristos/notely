'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginController'
  });
}])

.controller('loginController', ['$scope', function($scope) {
  $scope.submit = function() {
    console.log('submitted');
  };
}]);
