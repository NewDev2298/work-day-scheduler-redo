
$(function () {
    var currTime = dayjs().hour();

  
  var timeChange = function() {

  var time = parseInt("id");
    console.log(time);

    if (time < currTime) {
    $(".time-block").addClass("past")
  
  } else if (time == currTime) {
    $(".time-block").addClass("present")

  } else {
    $(".time-block").addClass("future")

  }
};

timeChange();

$("#currentDay").text(dayjs().format("dddd, MMMM Do"));
  
});