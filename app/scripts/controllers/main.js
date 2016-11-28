'use strict';

/**
 * @ngdoc function
 * @name chargingStationsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chargingStationsApp
 */

angular.module('chargingStationsApp')
    .controller('MainCtrl', function($scope, current, $localStorage) {
        $scope.current = current.query();
        $scope.storage = $localStorage;

        // Display infowindow on click of map marker
        $scope.showStation = function(event, station) {
            $scope.station = station;
            $scope.showInfoWindow('myInfoWindow', this);
        };
        // Set search query field to query on keyboard entry ***TODO: TEST!!! ***
        $scope.placeChanged = function() {
            $scope.place = this.getPlace();
        };
        // Refresh current location on search query
        $scope.refreshCurrent = function() {
            $scope.current = current.query({
                location: $scope.location
            });
            // Save city to local storage
            $scope.saveCity = function(city) {
                console.log('savingCity: ' + city);
                var cityData = {
                    'city': city,
                };
                if (!$localStorage.savedCities) {
                    $localStorage.savedCities = [cityData];
                } else {
                    // Check to make sure we haven't already saved the city.
                    var save = true;
                    for (var i = 0; i < $localStorage.savedCities.length; i++) {
                        if ($localStorage.savedCities[i].city === cityData.city) {
                            // this is a duplicate, so don't save
                            save = false;
                        }
                    }
                    if (save === true) {
                        $localStorage.savedCities.push(cityData);
                        // Add object to trigger messages
                        $scope.citySaved = {
                            'success': true
                        };
                    } else {
                        console.log('city already saved: ' + cityData.city);
                        // Add object to trigger messages
                        $scope.citySaved = {
                            'duplicate': true
                        };
                    }
                }
            };
        };
    });
