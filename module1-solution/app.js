(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMessage = "";
  $scope.numLunchItems = 0;
  $scope.fontColor = "black";
  $scope.lunchMenuBorderColor = "black";
  $scope.lunchMenu = "list comma separated dishes you usually have for lunch";

  $scope.checkLunchBox = function () {
    console.log("Checking lunch box!")
    console.log("$scope.lunchMenu");
    console.log($scope.lunchMenu);
    if ($scope.lunchMenu == ""){
      $scope.lunchMessage = "Please enter data first";
      $scope.lunchMenuBorderColor = "red";
      $scope.fontColor = "red";
      return;
    }

    getItemCount($scope.lunchMenu);
    if ($scope.numLunchItems <= 3 ){
      $scope.lunchMessage = "Enjoy!";
      $scope.lunchMenuBorderColor = "green";
      $scope.fontColor = "green";
    } else if ($scope.numLunchItems > 3 ){
      $scope.lunchMessage = "Too much!";
      $scope.lunchMenuBorderColor = "green";
      $scope.fontColor = "green";
    }

  };

  function getItemCount(lunchBox) {
    var re = "/\s*;\s*/";
    var lunchList = lunchBox.split(",");
    $scope.numLunchItems = lunchList.length;
    console.log("lunchList: ")
    console.log(lunchList);
    console.log("NumLunchItems");
    console.log($scope.numLunchItems);
  };
}

})();
