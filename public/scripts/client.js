
$(document).ready(function () {

  console.log("jquery ready at clinet.js");

  //returngin html template
  const createTweetElement = function (tweetObject) {
    const $tweet = $(`<article class="tweet-container-item">
    <header class="newtonheader">
    <div class="username"><img src=${tweetObject.user.avatars}>
    ${tweetObject.user.name}</div>
    </div>
    <div>${tweetObject.user.handle}</div>
    </header>
    <p id="tweet-text" >${tweetObject.content.text}</p>
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
  //Ajax POST request from .tweetform
  const $tweetForm = $(".tweetform");

  $tweetForm.submit(function (event) {
    event.preventDefault();
    $.ajax("http://localhost:8080/tweets/", {
      method: "POST",
      data: $(this).serialize(),
    }).then(() => {
      console.log("Tweet Submitted!");
    });
  });
  // Ajax GET request
  const loadtweets = function () {
    $.ajax("/tweets", { method: "GET", success: renderTweets }).then(() => {
      console.log("GET success!");
    });
  };

  loadtweets();
});

/*$.ajax({
  type: "POST",
  url: "http://localhost:8080/tweets/",
  data: $(this).serialize(),
}).then(() => {
  console.log("Tweet Submitted!");
});*/
//$.get("/tweets", renderTweets)
