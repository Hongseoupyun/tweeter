$(document).ready(function () {
  console.log("jquery ready");

  $("#tweet-text").on("keyup", function () {
    let counter = $(this).parent().next().children()[1];
    let lengthOfText = $(this).val().length;
    console.log(lengthOfText);
    $(counter).val(140 - lengthOfText);
    let newLength = $(counter).val();
    if (newLength < 0) {
      $(counter).css("color", "red");
    } else {
      $(counter).css("color", "#545149");
    }
  });
});
