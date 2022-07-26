$(document).ready(function () {
  $("#empty").hide();
  $("#long").hide();
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  console.log("jquery ready at clinet.js");
  //returning html template
  const createTweetElement = function (tweetObject) {
    const $tweet = $(`<article class="tweet-container-item">
    <header class="newtonheader">
    <div class="username"><img src=${tweetObject.user.avatars}>
    ${tweetObject.user.name}</div>
    </div>
    <div>${tweetObject.user.handle}</div>
    </header>
    <p id="tweet-text" >${escape(tweetObject.content.text)}</p>
    <footer class="tweet-footer">
    <div>${timeago.format(tweetObject.created_at)}</div>
    <div><i class="fa-solid fa-flag icon"></i><i class="fa-solid fa-retweet icon"></i><i
    class="fa-solid fa-heart icon"></i>
    </div>
    </footer>
    </article>`);
    return $tweet;
  };

  //loops through the tweets and calls createTweetElement to append the result to ".tweet-container " class
  const renderTweets = function (tweetsArray) {
    for (let tweet of tweetsArray) {
      let result = createTweetElement(tweet);
      $(".tweet-container").prepend(result);
    }
  };
   // Ajax GET request
   const loadtweets = function () {
    $.ajax("/tweets", { method: "GET" }).then((arr) => {
      console.log("GET success!");
      $(".tweet-container").empty();
      renderTweets(arr);
    });
  };
  //Ajax POST request from .tweetform
  const $tweetForm = $(".tweetform");
  $tweetForm.submit(function (event) {
    event.preventDefault();
    const tweettext = $("#tweet-text").val();

    if (tweettext === null || tweettext === "") {
      $("#empty").slideDown();
      $("#long").slideUp();
    } else if (tweettext.length > 140) {
      $("#long").slideDown();
      $("#empty").slideUp();
    } else {
      $("#empty").slideUp();
      $("#long").slideUp();

      $.ajax("http://localhost:8080/tweets/", {
        method: "POST",
        data: $(this).serialize(),
      }).then(() => {
        console.log("Tweet Submitted!", $(this).serialize());
        loadtweets();
      });
    }
  });
 
  loadtweets();
});
 