eventsApp.controller('EditEventController',
    function EditEventController ($scope) {
        $scope.saveEvent = function (event, newEventForm    ) {
            if(newEventForm.$Valid())
        }

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        }
})
