volunteerManager.factory('EventsFactory', function EventsFactory($http, $location) {
  var factory = {};
  // factory.events = [{"name": 'Feed the Programmers', "location": 'Epicodus', "date": '2014-09-18'}, {"name":"Ellen's Birthday", "location": "Ellen's House", "date": "2014-05-31"}];


  factory.events = [];
  factory.getEvents = function () {
    return $http.get('/events.json')
  };

  factory.addEvent = function (event) {
    return $http.post('/events', {name: event.name, date: event.date, location: event.location })
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
