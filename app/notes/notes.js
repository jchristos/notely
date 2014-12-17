'use strict';

angular.module('myApp.notes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/notes', {
    templateUrl: 'notes/notes.html',
    controller: 'NotesController'
  });
}])

.controller('NotesController', function($scope, $http) {
  var apiBasePath = 'https://elevennote-nov-2014.herokuapp.com/api/v1/';
  var postNotePath = apiBasePath + 'notes';
  var apiKey = '$2a$10$ZDfkfFq7JtH4CK3w3DGkTeTOWK0XmLoGvUSew0DrEcynVPGfv8lei';
  var notes = [];

  $http.get(apiBasePath + 'notes.json?api_key=' + apiKey).success(function(noteData) {
    $scope.notes = noteData;
  });

  $scope.commit = function() {
    $http.post(postNotePath, {
      api_key: apiKey,
      note: {
        title: 'COOL TITLE',
        body_html: 'LESS COOL BODY'
      }
    }).success(function(successData) {
      console.log(successData);
    }).error(function(errorData) {
      console.log(errorData);
    });
  };

});
