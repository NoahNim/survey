$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var nameField = $("#name").val();
    var dob = $("#born").val();
    var genres = $("div#genre input:checked").val();
    var ages = $("#age").val();
    var surveyResults = [nameField, dob, genres, ages];

    $(".card").show();
    $(".card-text").text("Are these your choices? " + surveyResults.join(" "));
  });
});
