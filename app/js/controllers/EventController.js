'use strict'

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log) {

        $scope.sortorder = '-upvoteCount';
        $scope.snippet = '<span style="color: red;>He yo!</span>"'
        $scope.boolean = true;
        $scope.mystyle = {color:'red'};
        eventData.getEvent()
        .success(function (event) {
            $scope.event = event;
        })
        .error(function (data, status, headers, config) {
            $log.warn(data, status, headers, config)
        })

        $scope.upvoteSession = function (session) {
            session.upvoteCount++;
        }

        $scope.downvoteSession = function (session) {
            session.upvoteCount--;
        }

    });
