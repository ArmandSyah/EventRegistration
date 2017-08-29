'use strict'

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.sortorder = '-upvoteCount';
        $scope.snippet = '<span style="color: red;>He yo!</span>"'
        $scope.boolean = true;
        $scope.mystyle = {color:'red'};
        $scope.event = {
            name: 'JS Boot Camp',
            date: '1/1/1970',
            time: '10:15 am',
            location:{
                address: 'My basement',
                city: 'My City',
                province: 'ON'
            },
            sessions: [
                {
                    name: 'JS Event',
                    duration: 1,
                    prof: 'Burak Obama',
                    difficulty: 'Advanced',
                    upvoteCount: 0
                },
                {
                    name: 'Java Event',
                    duration: 2,
                    prof: 'John Doe',
                    difficulty: 'Insane',
                    upvoteCount: 0
                },
                {
                    name: 'Donald Glover Appreciation',
                    duration: 4,
                    prof: 'Donald Glover',
                    difficulty: 'Introductory',
                    upvoteCount: 0
                }
            ]
        }

        $scope.upvoteSession = function (session) {
            session.upvoteCount++;
        }

        $scope.downvoteSession = function (session) {
            session.upvoteCount--;
        }

    });
