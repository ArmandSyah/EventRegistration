 eventsApp.controller('EditEventController',
    function EditEventController ($scope, eventData) {
        $scope.saveEvent = function (event, newEventForm) {
            if(newEventForm.$valid){
                eventData.saveEvent(event).$promise
                .then(function (response) {
                    console.log(response, 'it worked!');
                })
                .catch(function (response) {
                    console.log(response, 'it didn\'t work');
                })
            }
        }

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        }
})
