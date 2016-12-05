'use strict';

/**
 * @ngdoc function
 * @name chargingStationsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chargingStationsApp
 */

angular.module('chargingStationsApp')
    .controller('MainCtrl', function($scope, current, $localStorage, $routeParams) {
        $scope.current = current.query();
        $scope.storage = $localStorage;
        $scope.city = $routeParams.city;

        // Set search query field to query on keyboard entry
        $scope.placeChanged = function() {
            $scope.place = this.getPlace();
        };
        // Display infowindow on click of map marker or list station name
        $scope.showStation = function(event, station) {
            $scope.station = station;
            $scope.showInfoWindow('infoWindow', station.station_name);
        };
        // Refresh current location on search query
        $scope.refreshCurrent = function() {
            $scope.current = current.query({
                location: $scope.location,
                city: $routeParams.city
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
        // Delete saved cities on demand
        $scope.deleteX = function() {
            delete $localStorage.savedCities;
        };
    });
