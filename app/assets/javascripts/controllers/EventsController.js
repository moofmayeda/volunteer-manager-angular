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


  $scope.showEvent = (function() {
    EventsFactory.showEvent($routeParams.id)
    .success(function(data) {
      $scope.event = data.event;
    })
  })();
  // $scope.event = $scope.events.filter(function(event){ return event.id === $routeParams.id; });
  // console.log($scope.event);

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
