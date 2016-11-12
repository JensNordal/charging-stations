'use strict';

/**
 * @ngdoc function
 * @name chargingStationsApp.controller:mapController
 * @description
 * # mapController
 * Controller of the chargingStationsApp
 */
var app = angular.module('myApp', ['ngMap']);
app.controller('mapController', function($scope, $http, $interval) 
{
	/* jshint ignore:start */
    // $scope.map .. this exists after the map is initialized
    var markers = [];
    for (var i=0; i<8 ; i++) {
      markers[i] = new google.maps.Marker({
        title: "Hi marker " + i
      });
    }
    $scope.GenerateMapMarkers = function() {
        $scope.date = Date(); // Just to show that we are updating
        
        var numMarkers = Math.floor(Math.random() * 4) + 4;  // betwween 4 & 8 of them
        for (i = 0; i < numMarkers; i++) {
            var lat =   1.280095 + (Math.random()/100);
            var lng = 103.850949 + (Math.random()/100);
            // You need to set markers according to google api instruction
            // you don't need to learn ngMap, but you need to learn google map api v3
            // https://developers.google.com/maps/documentation/javascript/markers
            var latlng = new google.maps.LatLng(lat, lng);
            markers[i].setPosition(latlng);
            markers[i].setMap($scope.map);
        }      
    };  
    /* jshint ignore:end */
    $interval( $scope.GenerateMapMarkers, 2000);
    
}); // mapController
