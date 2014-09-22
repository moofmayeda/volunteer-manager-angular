volunteerManager.controller('VolunteersController', function VolunteersController($scope, VolunteersFactory) {
  $scope.VolunteersFactory = VolunteersFactory;
  $scope.newVolunteer = {}

  VolunteersFactory.getVolunteers().success(function(data) {
    $scope.volunteers = VolunteersFactory.volunteers;
  });

  $scope.submit = function() {
    $scope.addVolunteer();
    $scope.new_volunteer = false
  }

  $scope.addVolunteer = function() {
    VolunteersFactory.addVolunteer($scope.newVolunteer)
      .success(function(data) {
        $scope.newVolunteer.id = data.volunteer.id;
        $scope.volunteers.push($scope.newVolunteer);
        $scope.newVolunteer = null;
      })
      .error(function() {
      })
  };
});
