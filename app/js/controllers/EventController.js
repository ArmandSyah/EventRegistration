'use strict'

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.sortorder = '-upvoteCount';
        $scope.snippet = '<span style="color: red;>He yo!</span>"'
        $scope.boolean = true;
        $scope.mystyle = {color:'red'};
        $scope.event = eventData.getEvent();

        $scope.upvoteSession = function (session) {
            session.upvoteCount++;
        }

        $scope.downvoteSession = function (session) {
            session.upvoteCount--;
        }

    });
