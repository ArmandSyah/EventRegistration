'use strict'

eventsApp.controller('EventController',
    function EventController($scope, eventData, $routeParams) {

        $scope.sortorder = '-upvoteCount';
        $scope.event = eventData.getEvent($routeParams.eventId);


        $scope.upvoteSession = function(session) {
            session.upvoteCount++;
        }

        $scope.downvoteSession = function(session) {
            session.upvoteCount--;
        }

    });
