const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var tweets = [
  {text: "What up buttercup?", time: new Date().getTime() - 12300},
  {text: "Howdy doo cockatoo?", time: new Date().getTime() - 1000},
  {text: "Good day sir!", time: new Date().getTime()},
];

app.use(express.static(__dirname + "/public"));

app.get("/ajax", (req, res) => {
  res.type('json');
  res.end(JSON.stringify({tweets:tweets}));
});

app.post("/ajax", (req, res) => {
  var newTweet = {text:req.body.tweet, time: new Date().getTime()};
  tweets.push(newTweet);
  res.type('json');
  res.end(JSON.stringify(newTweet));
});

const port = 8080;

app.listen(port, () => {
  console.log(`Your Express server is running on port ${port}.  You better catch it!`);
});