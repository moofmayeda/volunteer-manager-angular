  volunteerManager.controller('EventController', function EventController($scope, EventsFactory, $stateParams) {
  $scope.EventsFactory = EventsFactory;
  $scope.editedEvent = {};
  $scope.event = {};
  console.log($stateParams.id);

  $scope.showEvent = (function() {
    EventsFactory.showEvent($stateParams.id)
    .success(function(data) {
      $scope.event = data.event;
    })
  })();

  $scope.submit = function() {
    $scope.editing = false;
    $scope.editedEvent.id = $stateParams.id;
    $scope.updateEvent();
  };

  $scope.updateEvent = function() {
    EventsFactory.updateEvent($scope.editedEvent)
      .success(function(data) {
        $scope.event = $scope.editedEvent;
      })
  };

});
