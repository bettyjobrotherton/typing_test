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
       } else {
              return;
       }
  } 
  
  function countUp(){ //Continues timer until the word count reaches the same as the sample text
       var secondsValue = parseInt($scope.seconds);
       var minutesValue = parseInt($scope.minutes);
       countWords(); 
       
       if($scope.numberOfWords < 119){ //If the word count is less than 119, the timer continues
              if(secondsValue === 59) {
                     $scope.seconds.toString("00");
                     $scope.minutes.toString(pad(minutesValue + 1));
                     countWords();
              } else {                //Otherwise, the timer stops.
                     $scope.seconds.toString(pad(secondsValue + 1));
                     $scope.minutes.toString(pad(minutesValue));
                     countWords();
              }
       } else {
              clearInterval(timerInterval);
              timerInterval = null;
              calculateWPM();
       }
  }
  
  function pad(num){ //Pads single digit numbers with a leading zero
       if(num < 10){
              //Returns the number with a leading zero
              return "0" + num;
       } else {
              //Returns the original number
              return num;
       }
  }
       
  function countWords(){ //Counts the number of words in the text input box
         var splitString = $scope.textInput.split(" ");
         $scope.numberOfWords = splitString.length;
  }
       
  function calculateWPM(){ //Calculates typing speen in words per a minute
     var totalTime = (parseInt($scope.seconds)/60) + parseInt($scope.minutes);
     $scope.wordsPerMin = $scope.numberOfWords/totalTime;
  }
}
