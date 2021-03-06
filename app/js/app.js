'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/NewEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        }).when('/Events', {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController'
        }).when('/Event/:eventId', {
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController'
        }).otherwise({
            redirectTo: '/Events'
        });
        $locationProvider.html5Mode(true);
    });
