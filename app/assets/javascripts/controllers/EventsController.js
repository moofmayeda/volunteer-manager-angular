volunteerManager.controller('EventsController', function EventsController($scope, EventsFactory, $routeParams) {
  $scope.EventsFactory = EventsFactory;
  $scope.events = EventsFactory.events;
  $scope.newEvent = {};

  $scope.getEvents = (function() {
    EventsFactory.getEvents()
      .success(function(data) {
        $scope.events = data.events;
      })
  })();

  $scope.submit = function() {
    $scope.addEvent();
    $scope.new_event = false
  }

  $scope.addEvent = function() {
    EventsFactory.addEvent($scope.newEvent)
      .success(function(data) {
        $scope.events.push($scope.newEvent);
        $scope.newEvent = null;
      })
      .error(function() {
        console.log(data);
      })
  };

});
