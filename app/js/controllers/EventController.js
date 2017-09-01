'use strict'

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll) {

        $scope.sortorder = '-upvoteCount';
        $scope.boolean = true;
        $scope.mystyle = {
            color: 'red'
        };
        eventData.getEvent()
            .$promise
            .then(function(event) {
                $scope.event = event;
                console.log(event);
            })
            .catch(function(response) {
                console.log(response)
            });


        $scope.upvoteSession = function(session) {
            session.upvoteCount++;
        }

        $scope.downvoteSession = function(session) {
            session.upvoteCount--;
        }

        $scope.scrollToSession = function (session) {
            $anchorScroll();
        }

    });
