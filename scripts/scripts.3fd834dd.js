"use strict";angular.module("chargingStationsApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch","ngMap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).otherwise({redirectTo:"/"})}]),angular.module("chargingStationsApp").controller("MainCtrl",["$scope","current","$localStorage",function(a,b,c){a.current=b.query(),a.storage=c,a.placeChanged=function(){a.place=this.getPlace()},a.refreshCurrent=function(){a.current=b.query({location:a.location}),a.saveCity=function(b){console.log("savingCity: "+b);var d={city:b};if(c.savedCities){for(var e=!0,f=0;f<c.savedCities.length;f++)c.savedCities[f].city===d.city&&(e=!1);e===!0?(c.savedCities.push(d),a.citySaved={success:!0}):(console.log("city already saved: "+d.city),a.citySaved={duplicate:!0})}else c.savedCities=[d]}}}]),angular.module("chargingStationsApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("chargingStationsApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("chargingStationsApp").factory("current",["$resource",function(a){return a("https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?location=:location&fuel_type=ELEC&api_key=aPpj2Zmtm21V9j4douZuoEtDCNKpdxddl811Rk8a",{},{query:{method:"GET",params:{location:""},isArray:!1}})}]),angular.module("chargingStationsApp").run(["$templateCache",function(a){a.put("views/about.html",'<p class="about">This electric vehicle charging station finder was created by <a href="http://jensnordal.com">Jens Nordal</a> as part of <a href="http://webdev.seattleu.edu/">Seattle University\'s Web Development</a> certificate program and accesses the <a href="http://nrel.gov">US National Renewable Energy Laboratory\'s</a> database. </p>'),a.put("views/contact.html","<h3>Contact Us</h3> <h1>Dynamic EV Charging Stations Mapping</h1> <hr>"),a.put("views/main.html",'<div class="jumbotron" ng-controller="MainCtrl"> <h2>Find Charging Stations</h2> <h2 ng-hide="current.fuel_stations[0].city == null"> Near {{current.fuel_stations[0].city}}</h2> <p class="lead"> <div ng-init="location=\' Enter City, ZIP, or Address\'"> <form> <p> <input places-auto-complete type="text" size="40" ng-model="location" component-restrictions="{country:\'us\'}" ng-click="location = null" on-place-changed="placeChanged(place)"> <button class="btn btn-lg btn-primary" ng-click="refreshCurrent()" type="submit">Search</button> </p> </form> <br> <!-- Map --> <div id="map-canvas"> <ng-map default-style="true" zoom="4" center="[39.950, -99.005]" scrollwheel="false" zoom-to-include-markers="auto"> <marker id="foo" centered="true" ng-repeat="station in current.fuel_stations" position="{{station.latitude}}, {{station.longitude}}" on-click="map.showInfoWindow(\'bar\')"> </marker> <info-window ng-repeat="station in current.fuel_stations" id="bar" visible-on-marker="foo"> <h3>{{station.station_name}}</h3> </info-window> </ng-map> </div> <!-- end map --> <br> <div ng-hide="current.total_results == null"> <dt>Total Stations (within 5 mi.):</dt> <dd>{{current.total_results}}</dd> <br> </div> <br> <dl ng-repeat="station in current.fuel_stations"> <div class="stationName" ng-hide="station.station_name === null"> <dd>{{station.station_name}}</dd> <br> </div> <div ng-hide="station.street_address === null"> <dt>Address</dt> <dd>{{station.street_address}}</dd> <dd>{{station.city}}, {{station.state}} {{station.zip}} {{station.plus4}}</dd> <br> </div> <div ng-hide="station.intersection_directions === null"> <dd>{{station.intersection_directions}}</dd> <br> </div> <div ng-hide="station.station_phone === null"> <dt>Phone Number</dt> <dd>{{station.station_phone}}</dd> <br> </div> <div ng-hide="station.access_days_time === null"> <dt>Hours</dt> <dd>{{station.access_days_time}}</dd> <br> </div> <div ng-hide="station.groups_with_access_code === null"> <dt>Availability <small>(Public/Private)</small></dt> <dd>{{station.groups_with_access_code}}</dd> <br> </div> <div ng-hide="station.ev_network === null"> <dt>Network</dt> <dd><a ng-href="{{station.ev_network_web}}">{{station.ev_network}}</a></dd> <br> </div> <div ng-hide="station.ev_connector_types === null"> <dt>Connector Type</dt> <dd>{{station.ev_connector_types[0]}}</dd> <dd>{{station.ev_connector_types[1]}}</dd> <dd>{{station.ev_connector_types[2]}}</dd> <dd>{{station.ev_connector_types[3]}}</dd> <dd>{{station.ev_connector_types[4]}}</dd> <dd>{{station.ev_connector_types[5]}}</dd> <dd>{{station.ev_connector_types[6]}}</dd> <br> </div> <br> </dl> </div> <div> <p> <button id="AlertBtn" class="btn btn-sm btn-primary" ng-hide="current.fuel_stations[0].city == null" ng-click="saveCity(current.fuel_stations[0].city)">Save {{current.fuel_stations[0].city}}</button> </p> </div> <!-- !!!!! TODO: Update so \'City Saved\'/\'City Already Saved\' refreshes for each new city search. !!!!!--> <div ng-messages="citySaved"> <p class="city-saved-alert bg-success text-success" ng-message="success"> {{current.fuel_stations[0].city}} has been saved to your list of cities. </p> <p class="city-saved-alert bg-warning text-warning" ng-message="duplicate"> {{current.fuel_stations[0].city}} has already been saved to your list of cities. </p> </div> </p></div> <div ng-if="storage.savedCities" class="saved-cities-list"> <h2>Saved Cities</h2> <ul class="saved-cities-list"> <li ng-repeat="city in storage.savedCities"> <a ng-href="/charging-stations/#/{{city.city}}" id="savedBtn">{{city.city}}</a> </li> </ul> </div> <br>')}]);