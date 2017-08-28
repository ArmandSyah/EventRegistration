'use strict'

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
            name: 'JS Boot Camp',
            date: '1/1/1970',
            time: '10:15 am',
            location:{
                address: 'My basement',
                city: 'My City',
                province: 'ON'
            }
        }

    });
