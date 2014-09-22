var volunteerManager = angular.module('volunteerManager', ['templates', 'ui.router']);

volunteerManager.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/events");

   $stateProvider
      .state('events', {
      url: "/events",
      templateUrl: "Events.html",
      controller: "EventsController"
     })

     .state('events.detail.volunteers', {
      url: "/volunteers",
      templateUrl: "Events.detail.volunteers.html",
      controller: "EventsVolunteersController"
     })

     .state('events.detail', {
      url: "/:id",
      templateUrl: "Events.detail.html",
      controller: "EventController"
     })

     .state('volunteers', {
      url: "/volunteers",
      templateUrl: "Volunteers.html",
      controller: "VolunteersController"
     })

     .state('volunteers.detail', {
      url: "/:id",
      templateUrl: "Volunteers.detail.html",
      controller: "VolunteerController"
     })
});
