volunteerManager.factory('EventsFactory', function EventsFactory($http, $location) {
  var factory = {};

  factory.events = [];
  factory.getEvents = function () {
    return $http.get('/events.json')
  };

  factory.addEvent = function (event) {
    return $http.post('/events.json', {name: event.name, date: event.date, location: event.location })
  };

  factory.showEvent = function(id) {
    return $http.get('/events/' + id + '.json')
  };

  factory.updateEvent = function(event) {
    return $http.put('/events/' + event.id + '.json', {name: event.name, date: event.date, location: event.location })
  };

  factory.deleteEvent = function(event) {
    $location.path('/')
    return $http.delete('/events/' + event.id + '.json')
  }

  return factory;
})
