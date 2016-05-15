'use strict';

/**
 * @ngdoc service
 * @name chargingStationsApp.current
 * @description
 * # current
 * Factory in the chargingStationsApp.
 */
angular.module('chargingStationsApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?limit=10&location=:location&fuel_type=ELEC&api_key=aPpj2Zmtm21V9j4douZuoEtDCNKpdxddl811Rk8a', {}, {
      query: {
        method:'GET',
        params:{
          location: 'seattle,wa'
        },
        isArray:false
      }
    });
  }); 