$(document).ready(function () {
  console.log("jquery ready at composer-char-counter.js");

  //access to text area and gets length of the input and updating the value and color of the counter
  $("#tweet-text").on("keyup", function () {
    let counter = $(this).parent().next().children()[1];
    let lengthOfText = $(this).val().length;
    $(counter).val(140 - lengthOfText);
    //console.log($("#tweet-text").val())
    let newLength = $(counter).val();
    if (newLength < 0) {
      $(counter).css("color", "red");
    } else {
      $(counter).css("color", "#545149");
    }
  });

  
});
