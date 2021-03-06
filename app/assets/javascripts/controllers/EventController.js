  volunteerManager.controller('EventController', function EventController($scope, EventsFactory, $stateParams) {
  $scope.EventsFactory = EventsFactory;
  $scope.event = {};

  // $scope.showEvent = (function() {
  //   EventsFactory.showEvent($stateParams.id)
  //   .success(function(data) {
  //     $scope.event = data.event;
  //   })
  // })();
  $scope.event = EventsFactory.events.filter(function(event) {
    return event.id === $stateParams.id;
  })[0];

  $scope.submit = function() {
    $scope.editing = false;
    $scope.event.id = $stateParams.id;
    $scope.updateEvent();
  };

  $scope.updateEvent = function() {
    EventsFactory.updateEvent($scope.event)
      .success(function(data) {
      })
  };

});
