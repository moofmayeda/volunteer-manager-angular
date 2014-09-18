var volunteerManager = angular.module('volunteerManager', ['ngRoute', 'templates']);

volunteerManager.config(function ($routeProvider) {
  $routeProvider
  .when('/volunteers',
  {
    controller: 'VolunteersController',
    templateUrl: 'templates/Volunteers.html'
  })
  .when('/',
  {
    controller: 'EventsController',
    templateUrl: 'Events.html'
  })
});
