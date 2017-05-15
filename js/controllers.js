(function () {
  'use strict';
  angular
    .module("demoApp")
    .controller("mainController", mainController);

  function mainController ($scope, userService) {
    $scope.users = userService.users();
    $scope.newUser = {};  // initializing the variable to an empty hash
    $scope.addUser = function() {
      userService.add($scope.newUser);
      $scope.newUser = {};
    };
  }
})();
