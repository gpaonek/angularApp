'use strict';

/**
 * @ngdoc function
 * @name letsgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgoApp')
  .controller('MainCtrl', function ($scope,$location,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isActive = function(route) {
        return route === $location.path();
    };


    $scope.joinedMembers = 1234;

    $http.get("http://demo8039567.mockable.io/getHomepageStatus").
    success(function(data) {
      $scope.response = data;
    }).
    error(function(data) {
      // log error
    });	
  });
