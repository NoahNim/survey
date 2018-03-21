$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var nameField = $("#name").val();
    var dob = $("#born").val();
    var genres = $("div#genre input:checked").val();
    var ages = $("#age").val();
    var surveyResults = "Your name is: " + nameField + " " + "Date of birth: " + dob + " " + "Your favorite music: " + genres + " " + "Your age: " + ages

    $(".card").show();
    $(".card-text").text("Are these your choices? " + surveyResults);
  });
  $("#results").click(function(event) {
    $(".card-text").hide();
    $("#results").hide();
    $("form").hide();
    $(".card").append("Thank you! Your survey results have been submitted!");
  });
});
