$("#submit").on("click", function(event){
   event.preventDefault();

   //Form validation
function validateForm() {
  var isValid = true;
  $(".form-control").each(function() {
    if ($(this).val() === "") {
      isValid = false;
    }
  });

  $(".chosen-options").each(function() {

    if ($(this).val() === "") {
      isValid = false;
    }
  });
  return isValid;
}

if(validateForm()) {
  var newFriend = {
    name: $("#name").val().trim(0),
    photo:$("#photo").val().trim(0),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ]
  }
};
});


console.log(newFriend);