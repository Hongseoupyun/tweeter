$(document).ready(function() {
  
   console.log("jquery ready")
   

   $("#tweet-text").on("keyup",function(){
    let counter = $(this).parent().next().children()[1]
    let lengthOfText = $(this).val().length - 9
    $(counter).val(140 - lengthOfText)

    //console.log($(this).val())
   
  
   })
});