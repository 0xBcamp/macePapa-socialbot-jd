import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';
import { tweetList } from './tweets';

dotenv.config();

// Set up Twitter API credentials
const client = new TwitterApi({
  appKey: process.env.CONSUMER_KEY ?? '',
  appSecret: process.env.CONSUMER_SECRET ?? '',
  accessToken: process.env.USER_ACCESS_TOKEN ?? '',
  accessSecret: process.env.USER_ACCESS_TOKEN_SECRET ?? '',
});

async function postTweet(tweetText) {
  try {
    const tweet = await client.v2.tweet(tweetText);
    console.log(`Tweet posted with ID ${tweet.data.id}`);
  } catch (error) {
    console.error(`Failed to post tweet: ${error}`);
  }
}

function getRandomTweet() {
  const randomTweet = tweetList[Math.floor(Math.random() * tweetList.length)];
  return randomTweet;
}

function tweetOnSchedule() {
  let i = 4;
  // Tweet every 2 hours until tweets are exhausted
  postTweet(tweetList[i]);
  setInterval(() => {
    i++;
    postTweet(tweetList[i]);
  }, 1000 * 60 * 60 * 2);
}

tweetOnSchedule();