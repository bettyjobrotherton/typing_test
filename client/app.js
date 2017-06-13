'use strict';

angular.module('mainApp', [])
       .controller('MainController', MainController);

MainController.$inject = ['$scope'];

function MainController($scope){
  $scope.startTest = startTest;
  var timerInterval = null;
  $scope.showWPM = false;
  $scope.seconds = '00';
  $scope.minutes = '00';
       
  $scope.$watch(function($scope) { 
       return $scope.seconds; 
  }, function() {
       $scope.seconds;
       $scope.minutes;
       return;
  });

  function startTest(){ //Starts the timer 
       if(!timerInterval){
              $scope.numberOfWords = 0;
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
              if(secondsValue == 59) {
                     $scope.seconds = "00";
                     $scope.minutes = pad(minutesValue + 1);
                     countWords();
              } else {                
                     $scope.seconds = pad(secondsValue + 1);
                     $scope.minutes = pad(minutesValue);
                     countWords();
              }
       } else {                        //Otherwise, the timer stops.
              clearInterval(timerInterval);
              calculateWPM();
       }
  }
  
  function pad(num){ //Pads single digit numbers with a leading zero
       var convertedNum = num.toString(); //Converts number to a string
       if(num < 10){
              //Returns the number with a leading zero
              return "0" + convertedNum;
       } else {
              //Returns the original number
              return convertedNum;
       }
  }
       
  function countWords(){ //Counts the number of words in the text input box
         var inputString = $scope.textInput;
         var splitString = inputString.split(" ");
         $scope.numberOfWords = splitString.length;
  }
       
  function calculateWPM(){ //Calculates typing speen in words per a minute
     var totalTime = (parseInt($scope.seconds)/60) + parseInt($scope.minutes);
     $scope.wordsPerMin = $scope.numberOfWords/totalTime;
     $scope.showWPM = true;
  }
}
