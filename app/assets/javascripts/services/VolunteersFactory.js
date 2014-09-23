volunteerManager.factory('VolunteersFactory', function VolunteersFactory($http, $location) {
  var factory = {};
  factory.volunteers = [];

  factory.getVolunteers = function () {
    var promise = $http.get('/volunteers.json');
    promise.success(function(data) {
      factory.volunteers = data.volunteers;
    })
    return promise;
  };

  factory.addVolunteer = function (volunteer) {
    return $http.post('/volunteers.json', {name: volunteer.name, phone: volunteer.phone, email: volunteer.email })
  };

  // factory.showVolunteer = function(id) {
  //   return $http.get('/volunteers/' + id + '.json')
  // };

  factory.updateVolunteer = function(volunteer) {
    return $http.put('/volunteers/' + volunteer.id + '.json', {name: volunteer.name, phone: volunteer.phone, email: volunteer.email, event_ids: volunteer.event_ids })
  };

  factory.deleteVolunteer = function(volunteer) {
    $location.path('/')
    return $http.delete('/volunteers/' + volunteer.id + '.json')
  }

  return factory;
})
