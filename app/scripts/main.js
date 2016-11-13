'use strict';
/* jshint ignore:start */
/*angular.module('chargingStationsApp', ['ngMap'])

.controller('mapCtrl', function ($scope, $http) {

    var mapOptions = {
        center: new google.maps.LatLng(38.5602, -121.4241),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        disableDefaultUI: true
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

 
    $http.get('https://gist.githubusercontent.com/vgrem/c7ec78e7078c2c9ed1c3/raw/959e9d8b8e60544fcc169ea890e84a2624ed8bbb/csus_locations.json').success(function (data) {
        $scope.locations = data.locations;

        $scope.locations.forEach(function(item){

            var latLng = new google.maps.LatLng(item.latitude, item.longitude);
            var marker = new google.maps.Marker({
               position: latLng,
               title: item.name,
               map: map
            });
           
        });
        
    });

});
/* jshint ignore:end */
