  volunteerManager.controller('EventController', function EventController($scope, EventsFactory, $routeParams) {
  $scope.EventsFactory = EventsFactory;
  $scope.editedEvent = {};
  $scope.event = {};

  $scope.showEvent = (function() {
    EventsFactory.showEvent($routeParams.id)
    .success(function(data) {
      $scope.event = data.event;
    })
  })();

  $scope.submit = function() {
    $scope.editing = false;
    $scope.editedEvent.id = $routeParams.id;
    $scope.updateEvent();
  };

  $scope.updateEvent = function() {
    EventsFactory.updateEvent($scope.editedEvent)
      .success(function(data) {
        $scope.event = $scope.editedEvent;
      })
  };

});
