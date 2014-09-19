var volunteerManager = angular.module('volunteerManager', ['templates', 'ui.router']);

volunteerManager.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/state1");

   $stateProvider
     .state('state1', {
       url: "/state1",
       templateUrl: "state1.html"
     })
     .state('state1.list', {
       url: "/list",
       templateUrl: "state1.list.html",
       controller: function($scope) {
         $scope.items = ["A", "List", "Of", "Items"];
       }
     })
     .state('state2', {
       url: "/state2",
       templateUrl: "state2.html"
     })
     .state('state2.list', {
       url: "/list",
       templateUrl: "state2.list.html",
       controller: function($scope) {
         $scope.things = ["A", "Set", "Of", "Things"];
       }
     })
  //add in $routeProvier to use below:
  // $routeProvider
  // .when('/volunteers',
  // {
  //   controller: 'VolunteersController',
  //   templateUrl: 'templates/Volunteers.html'
  // })
  // .when('/',
  // {
  //   controller: 'EventsController',
  //   templateUrl: 'Events.html'
  // })
  // .when ('/events/:id',
  // {
  //   controller: 'EventController',
  //   templateUrl: 'Event.html'
  // })
});
