volunteerManager.controller('EventsController', function EventsController($scope, EventsFactory) {
  $scope.events = EventsFactory.events;
  $scope.EventsFactory = EventsFactory;
});
