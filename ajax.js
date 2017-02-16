$(document).ready(function () {
var url = 'http://first-ajax-api.herokuapp.com/'
  $("#step12").click(function(){
    $.ajax({
      url ,
      method: 'GET',
      data: "",
      dataType: 'text'
    })
  });
  $("#step3456").click(function() {
    $.ajax({
      url: `${url}ping`,
      method: 'GET',
      dataType: 'text'
    }).done(
      function () {
        $("#step3456").append("Wow what a ride! I came all the way from the server!")
      }
    ).fail(function(){
      $("#step3456").append("OOPS! 404 try harder!")
    }).always(function(){
      console.log("Sup Bro? Your request is finished!");
    })
  });

  $("#step7").click(function() {
    $.ajax({
      url: `${url}count`,
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
    })
  });

  $("#step8").click(function(){
    $.ajax({
      url: `${url}time`,
      method: 'GET',
      data: {timezone: 'America/Mexico_City'},
      dataType: 'text'
    }).done(function(responseData){
      console.log(responseData);
    })
  });

  $("#step9").click(function(){
    $.ajax({
      url: `${url}a_car`,
      method: 'GET',
      dataType: 'html'
    }).done(function(responseData){
      console.log(responseData);
      $("#list").append(responseData)
    })
  });
});
