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

    // Public API from NREL
    return $resource('https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?location=:location&fuel_type=ELEC&radius=5.0&status=E&cards_accepted=all&limit=200&api_key=aPpj2Zmtm21V9j4douZuoEtDCNKpdxddl811Rk8a', {}, {
      query: {
        method:'GET',
        params:{
          location: null
        },
        isArray:false
      }
    });
  }); 