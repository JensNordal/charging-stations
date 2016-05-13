'use strict';

/**
 * @ngdoc function
 * @name chargingStationsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chargingStationsApp
 */
angular.module('chargingStationsApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function() {
         $scope.current = current.query({
         	location: $scope.location
    });
   };
  });
