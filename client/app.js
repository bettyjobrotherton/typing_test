'use strict';

angular.module('mainApp', [])
       .crontroller('MainController', MainController);

MainController.$inject = ['$scope'];

function MainController($scope){
  $scope.wordCount = wordCount;

  function wordCount(t){

  }
}
