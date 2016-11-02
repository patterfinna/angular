(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMessage = "";
  $scope.numLunchItems = 0;
  $scope.lunchMenu = "";

  $scope.checkLunchBox = function () {
    getItemCount($scope.lunchMenu);
    if ($scope.numLunchItems == 0){
      $scope.lunchMessage = "Please enter data first";
    }
  };

  function getItemCount(lunchBox) {
    var re = /\s*;\s*/;
    var lunchList = lunchBox.split(re);
    $scope.numLunchItems = lunchList.length;
  };
}

})();
