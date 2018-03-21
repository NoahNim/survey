$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    var nameField = $("#name").val();
    console.log(nameField);
    var dateField = $("#date").val();
    console.log(dateField);
    var timeField = $("#time").val();
    $("#output").text(nameField + " " + dateField + " " + timeField);
  });

});
