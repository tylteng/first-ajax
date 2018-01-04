document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */

var buttonOneTwo = document.querySelector('#button12');
var stepOneTwo = document.querySelector('#step12');
var buttonThreeFourFiveSix = document.querySelector('#button3456');
var stepThreeFourFiveSix = document.querySelector('#step3456');
var buttonSeven = document.querySelector('#button7');
var stepSeven = document.querySelector('#step7');
var buttonEight = document.querySelector('#button8');
var stepEight = document.querySelector('#step8');
var buttonNine = document.querySelector('#button9');
var stepNine = document.querySelector('#step9');
var carList = document.querySelector('#car')


buttonOneTwo.addEventListener('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'text'
  }).done(function(responseData) {
    var apiData = document.createElement('p');
    apiData.innerText = responseData
    stepOneTwo.appendChild(apiData)
    console.log("Completed Request!!");
  }).fail(function(){
    console.log("I'll try harder next time.");
  }).always(function(){
    console.log("All I know is, it's over.");
  });
});

buttonThreeFourFiveSix.addEventListener('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    dataType: 'text'
  }).done(function(responseData) {
    var apiData = document.createElement('p');
    apiData.innerText = responseData
    stepThreeFourFiveSix.appendChild(apiData)
    console.log("Completed Request!!");
  }).fail(function(){
    console.log("I'll try harder next time.");
  }).always(function(){
    console.log("All I know is, it's over.");
  });
});

buttonSeven.addEventListener('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    dataType: 'text'
  }).done(function(responseData) {
    var question = document.createElement('p');
    question.innerText = 'Hey neighbor, what number did you get?'
    stepSeven.appendChild(question)
    var apiData = document.createElement('p');
    apiData.innerText = responseData
    stepSeven.appendChild(apiData)
    console.log("Completed Request!!");
  }).fail(function(){
    console.log("I'll try harder next time.");
  }).always(function(){
    console.log("All I know is, it's over.");
  });
});

buttonEight.addEventListener('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/time',
    method: 'GET',
    dataType: 'text',
    data: {timezone: 'Asia/Kolkata'}
  }).done(function(responseData) {
    var apiData = document.createElement('p');
    apiData.innerText = responseData
    stepEight.appendChild(apiData)
    console.log("Completed Request!!");
  }).fail(function(){
    console.log("I'll try harder next time.");
  }).always(function(){
    console.log("All I know is, it's over.");
  });
});

buttonNine.addEventListener('click', function(){
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/a_car',
    method: 'GET',
    dataType: 'html'
  }).done(function(responseData) {
    var apiData = document.createElement('p');
    apiData.innerHTML = responseData
    carList.appendChild(apiData)
    console.log("Completed Request!!");
  }).fail(function(){
    console.log("I'll try harder next time.");
  }).always(function(){
    console.log("All I know is, it's over.");
  });
});


});
