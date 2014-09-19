volunteerManager.factory('EventsFactory', function EventsFactory($http) {
  var factory = {};
  // factory.events = [{"name": 'Feed the Programmers', "location": 'Epicodus', "date": '2014-09-18'}, {"name":"Ellen's Birthday", "location": "Ellen's House", "date": "2014-05-31"}];


  factory.events = [{"name":"fake event"}]
  factory.getEvents = function () {
    return $http.get('/events.json')
  };

  factory.addEvent = function (name, date, location) {
    return $http.post('/events', {name: name, date: date, location: location })
  }

  return factory;
})
