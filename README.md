# What is this?
This is a simple twitter bot that uses the tweets.ts file to send out tweets on a schedule. The schedule is set to send tweets every 2 hours by default.

# How do I run it?
Simply fork or clone this repo to your local machine. From there, you can run

```npm install```

to install all of the packages required to run the bot (The package.json is slightly bloated at the moment and will be cleaned up later).

From there, make sure to have all the proper keys required to send a tweet based on the auth version you plan to use. I have it set up for the Auth2.0 that is used in Twitter/X's v2 API.
I have provided an .env.example in the repo to give you an idea of the different tokens that might be needed. Not 100% are used in this minimal implementation of the bot.

```
#Bearer token used for non-user context API requests
BEARER_TOKEN=""
#Public key/token used for user context API requests
USER_ACCESS_TOKEN=""
#Secret key/token used for user context API requests
USER_ACCESS_TOKEN_SECRET=""
#Twitter API app/project keys
CONSUMER_KEY=""
CONSUMER_SECRET=""
#Auth 2.0 client keys
CLIENT_ID=""
CLIENT_SECRET=""
```

After getting your keys from the Twitter Developer Portal, you are ready to run the program. Simply run:

```npx tsc-node tweeter.ts```

The bot will start up with an initial tweet from the list and then send another every 2 hours until the list is finished.
