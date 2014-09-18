volunteerManager.controller('EventsController', function EventsController($scope, EventsFactory) {
  $scope.EventsFactory = EventsFactory;
  $scope.events = EventsFactory.events;

  $scope.getEvents = (function() {
    EventsFactory.getEvents()
      .success(function(data) {
        $scope.events = data.events;
      })
  })();

  });
