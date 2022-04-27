$(document).ready(function () {
  console.log("jquery ready");

  //access to text area and gets length of the input and updating the value and color of the counter
  $("#tweet-text").on("keyup", function () {
    let counter = $(this).parent().next().children()[1];
    let lengthOfText = $(this).val().length;
    $(counter).val(140 - lengthOfText);
    let newLength = $(counter).val();
    if (newLength < 0) {
      $(counter).css("color", "red");
    } else {
      $(counter).css("color", "#545149");
    }
  });
});
