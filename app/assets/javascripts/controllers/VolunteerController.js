  volunteerManager.controller('VolunteerController', function VolunteerController($scope, VolunteersFactory, $stateParams) {
  $scope.VolunteersFactory = VolunteersFactory;
  $scope.volunteer = {};

  // $scope.showVolunteer = (function() {
  //   VolunteersFactory.showVolunteer($stateParams.id)
  //   .success(function(data) {
  //     $scope.volunteer = data.volunteer;
  //   })
  // })();
  $scope.volunteer = VolunteersFactory.volunteers.filter(function(volunteer) {
    return volunteer.id === $stateParams.id;
  })[0];

  $scope.submit = function() {
    $scope.editing = false;
    $scope.volunteer.id = $stateParams.id;
    $scope.updateVolunteer();
  };

  $scope.updateVolunteer = function() {
    VolunteersFactory.updateVolunteer($scope.volunteer)
      .success(function(data) {
      })
  };

});
