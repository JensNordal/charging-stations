'use strict';

/**
 * @ngdoc overview
 * @name chargingStationsApp
 * @description
 * # chargingStationsApp
 *
 * Main module of the application.
 */
angular
  .module('chargingStationsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
    /*  .when('/:cityName', {
        templateUrl: 'views/city.html',
        controller: 'CityCtrl',
        controllerAs: 'city'
      })
    */
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
