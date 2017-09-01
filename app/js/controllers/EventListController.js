eventsApp.controller('EventListController', ['$scope', '$location', 'eventData',
    function($scope, $location, eventData) {
        $scope.events = eventData.getAllEvents();
    }
]);
