var volunteerManager = angular.module('volunteerManager', ['templates', 'ui.router']);

volunteerManager.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/events");

   $stateProvider
     .state('events.detail', {
      url: "/:id",
      templateUrl: "Events.detail.html",
      controller: "EventController"
     })

     .state('events', {
      url: "/events",
      templateUrl: "Events.html",
      controller: "EventsController"
     })
});
