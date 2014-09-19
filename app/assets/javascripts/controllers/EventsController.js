volunteerManager.controller('EventsController', function EventsController($scope, EventsFactory) {
  $scope.EventsFactory = EventsFactory;
  $scope.events = EventsFactory.events;

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
    var name = $scope.event.name;
    var date = $scope.event.date;
    var location = $scope.event.location;
    EventsFactory.addEvent(name, date, location)
      .success(function(data) {
        $scope.events.push({name: name, date: date, location: location})
      })
      .error(function() {
        console.log(data);
      })
  };

});
