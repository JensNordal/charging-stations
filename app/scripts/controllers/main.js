'use strict';

/**
 * @ngdoc function
 * @name chargingStationsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chargingStationsApp
 */
angular.module('chargingStationsApp')
  .controller('MainCtrl', function ($scope, current, $localStorage) {
    $scope.current = current.query();
    $scope.storage = $localStorage;

    $scope.refreshCurrent = function() {
         $scope.current = current.query({
         	location: $scope.location
    });

    $scope.saveCity = function(city){
    var cityData = {
        'name': city,
        //'id': city.id
    };
    if (!$localStorage.savedCities){
        $localStorage.savedCities = [cityData];
    } else {
        // We have already saved some cities. 
        // Check to make sure we haven't already saved the current city.
        var save = true; // Initialize the save decision variable.
        // Use this loop to check if we've already saved the city.
        for (var i=0; i < $localStorage.savedCities.length; i++){
            if ($localStorage.savedCities[i].city === cityData.city) {
                // This is a duplicate, so don't save (variable set to false).
                save = false;
            }
        }
        if (save===true){
            $localStorage.savedCities.push(cityData);
            console.log('city saved');
        } else {
            console.log('city already saved');
        }
    }
};
   };
  });
