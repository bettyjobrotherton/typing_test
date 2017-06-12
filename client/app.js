'use strict';

angular.module('mainApp', [])
       .crontroller('MainController', MainController);

MainController.$inject = ['$scope'];

function MainController($scope){
  $scope.startTest = startTest;
  $scope.seconds = '00';
  $scope.minutes = '00';
  $scope.numberOfWords = 0;
  var timerInterval;

  function startTest(){ //Starts the timer and begins the word count when triggered
       startTimer();
       countWords();
  }
       
  function startTimer(){ //Starts the timer until the word count reaches the same as the sample text
       if(!timerInterval){
              timerInterval = setInterval(countUp, 1000);
       }
  } 
  
  function countUp(){
       var secondsValue = parseInt($scope.seconds.text());
       var minutesValue = parseInt($scope.minutes.text());
       
       if($scope.numberOfWords < 119){
              if(secondsValue === 59) {
                     seconds.text("00");
                     minutes.text(pad(minutesValue + 1));
              } else {
                     seconds.text(pad(secondsValue + 1));
                     minutes.text(pad(minutesValue));
              }
       } else {
              clearInterval(timerInterval);
              timerInterval = null;
       }
  }
  
  function countWords(){ //Counts the number of words in the text input box
  }
}
