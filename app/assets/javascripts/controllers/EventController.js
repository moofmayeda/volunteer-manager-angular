  volunteerManager.controller('EventController', function EventController($scope, EventsFactory, $routeParams) {

  $scope.showEvent = (function() {
    EventsFactory.showEvent($routeParams.id)
    .success(function(data) {
      $scope.event = data.event;
    })
  })();

});
