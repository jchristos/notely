'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', ['$scope', 'NotesBackend', function($scope, NotesBackend) {
  $scope.submit = function() {
    NotesBackend.fetchUser($scope.user);
  };
}]);
