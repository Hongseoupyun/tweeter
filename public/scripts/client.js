
$(document).ready(function () {
  console.log("jquery ready at clinet.js")
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];
//returngin html template
  const createTweetElement = function (tweetObject) {
    const $tweet = $(`<article>
    <header class="newtonheader">
    <div class="username"><img src=${tweetObject.user.avatars}>
    ${tweetObject.user.name}</div>
    </div>
    <div>${tweetObject.user.handle}</div>
    </header>
    <p id="tweet-text" >${tweetObject.content.text}</p>
    <footer class="tweet-footer">
    <div>${tweetObject.created_at}</div>
    <div><i class="fa-solid fa-flag icon"></i><i class="fa-solid fa-retweet icon"></i><i
    class="fa-solid fa-heart icon"></i>
    </div>
    </footer>
    </article>`);
    return $tweet;
  };
//loops through the tweets and calls createTweetElement to append the result to ".tweet-container " class
  const renderTweets = function (tweets) {
    for (let tweet of tweets) {
      let result = createTweetElement(tweet);
      $(".tweet-container").prepend(result);
    }
  };
  renderTweets(data);

  const $tweetForm = $(".tweetform");
  $tweetForm.submit(function (event) {
    event.preventDefault();
    console.log("this-->",$(this).serialize())
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/tweets/",
      data:$(this).serialize()
    })
    .then(() => {
      console.log("working!")
    });
  });

   

});
