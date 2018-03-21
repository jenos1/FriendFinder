// Post sends object(newFriend) to server which returns an object(data) that is displayed in the modal.
function validateForm() {
  var isValid = true;
  $(".chosen-options").each(function() {
    if ($(this).val() === "") {
      isValid = false;
      alert("Please complete all fields before submitting.");
    }
  });
  return isValid;
}

$("#submit").on("click", function(event){
   event.preventDefault();
  //  alert("clicked");
  // Form validation
  console.log("Test");
  if(validateForm()) {
    var newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
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
    };
console.log("New Friend data: ", newFriend);
var isValid = validateForm();
var currentURL = window.location.origin;

// AJAX Post method to submit data to api/friends including (URL + data object)
  $.post(currentURL + "api/friends", newFriend, function(data) {
    if(data){     
        $("#match-name").text(data.name);
       console.log("Name ", data.name, "Photo: ", data.photo);
        $("#match-img").attr('src', data.photo );
        $("#survey-results").modal("show");      
    } 
  });

    // Clear form data
    $('#name').val("");
    $('#photo').val("");
    $('#q1').val("");
    $('#q2').val("");
    $('#q3').val("");
    $('#q4').val("");
    $('#q5').val("");
    $('#q6').val("");
    $('#q7').val("");
    $('#q8').val("");
    $('#q9').val("");
    $('#q10').val("");
  
  };
});
