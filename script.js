angular.module('myApp', ['ngMaterial'])
  .controller('MainCtrl', function($scope, $mdDialog) {
    $scope.hello = 'Hello Angular Material';

    $scope.releaseKraken = function() {
      $mdDialog.show(
        $mdDialog.alert({
          title:'Danger',
          textContent: 'You asked for it!',
          ok: 'Run!'
        })
      );
    };
  });
