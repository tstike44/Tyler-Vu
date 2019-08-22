module.exports.twitterKeys = {
  consumer_key :      'XXXXXXXXXXXXXXXXXXXXXXXXX',
  consumer_secret :   'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  token:              'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  token_secret:       'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
};

var credentials = require('./config/api-keys').twitterKeys;
 
var st = new StreamTweets(credentials);