(function () {
  angular.module("demoApp").controller("mainController", function($scope, userService){
    $scope.users = userService.users();
    $scope.newUser = {};  // initializing the variable to an empty hash
    $scope.addUser = function() {
      userService.add($scope.newUser);
      $scope.newUser = {};
    };
  });
})();
