volunteerManager.controller('EventsController', function EventsController($scope, VolunteersFactory, EventsFactory) {
  $scope.EventsFactory = EventsFactory;
  $scope.newEvent = {}

  EventsFactory.getEvents().success(function(data) {
    $scope.events = EventsFactory.events;
  });

  VolunteersFactory.getVolunteers();

  $scope.submit = function() {
    $scope.addEvent();
    $scope.new_event = false
  }

  $scope.addEvent = function() {
    EventsFactory.addEvent($scope.newEvent)
      .success(function(data) {
        $scope.newEvent.id = data.event.id;
        $scope.events.push($scope.newEvent);
        $scope.newEvent = null;
      })
      .error(function() {
      })
  };
});
