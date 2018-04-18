$.ajax({
  type: "GET",
  url: "/retrieve",
  success: function(data) {
    for (let i = 0; i < data.tweets.length; i++) {
      appendNewTweet(data.tweets[i]);
    }
  }
});

function appendNewTweet(tweet) {
  var newTweet = `
  <div class="tweet-container"> 
    <div class="tweet-time"> ${new Date(tweet.time).toLocaleString} </div> 
    <div class="tweet-body"> ${tweet.text} </div> 
  </div>`;
  //prepend adds the latest tweet to the top (as opposed to append)
  $('#tweets-target').prepend(newTweet);
}

$('#tweet').click(function() {
  $.ajax({
    
  })
})