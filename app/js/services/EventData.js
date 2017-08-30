eventsApp.factory('eventData', function ($http) {
    return {
        getEvent: function () {
                return $http.get(url: 'data/event/1')
        }
    };
})
