'use strict';

angular.module('mainApp', [])
       .controller('MainController', MainController);

MainController.$inject = ['$scope'];

function MainController($scope){
  $scope.startTest = startTest;
  $scope.seconds = '00';
  $scope.minutes = '00';
  var timerInterval;
       
  $scope.$watch(function($scope) { 
    return $scope.seconds; 
  }, function($scope) {
    return $scope.seconds = $scope.seconds;
  });

  function startTest(){ //Starts the timer 
       if(!timerInterval){
              timerInterval = setInterval(countUp, 1000);
       }
  } 
  
  function countUp(){ //Continues timer until the word count reaches the same as the sample text
       var secondsValue = parseInt($scope.seconds);
       var minutesValue = parseInt($scope.minutes);
       countWords();
       
       if($scope.numberOfWords < 119){
              if(secondsValue === 59) {
                     $scope.seconds.text("00");
                     $scope.minutes.text(pad(minutesValue + 1));
                     countWords();
              } else {
                     $scope.seconds.text(pad(secondsValue + 1));
                     $scope.minutes.text(pad(minutesValue));
                     countWords();
              }
       } else {
              clearInterval(timerInterval);
              timerInterval = null;
              calculateWPM();
       }
  }
  
  function countWords(){ //Counts the number of words in the text input box
         var splitString = $scope.textInput.split(" ");
         $scope.numberOfWords = splitString.length;
  }
       
  function calculateWPM(){ //Calculates typing speen in words per a minute
     var totalTime = (parseInt($scope.seconds.text())/60) + parseInt($scope.minutes.text());
     $scope.wordsPerMin = $scope.numberOfWords/totalTime;
  }
}
