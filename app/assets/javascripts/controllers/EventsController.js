volunteerManager.controller('EventsController', function EventsController($scope, EventsFactory) {
  $scope.EventsFactory = EventsFactory;
  $scope.events = EventsFactory.events;
  $scope.addEvent = function() {
    alert("hi")
  };
  $scope.submit = function() {
    $scope.addEvent();
    $scope.new_event = false
  }
  $scope.getEvents = (function() {
    EventsFactory.getEvents()
      .success(function(data) {
        $scope.events = data.events;
      })
  })();

  });
