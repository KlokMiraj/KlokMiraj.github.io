import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const twitterAuth = {
  consumer_key: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TNEXT_PUBLIC_WITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TNEXT_PUBLIC_WITTER_ACCESS_TOKEN_SECRET,
  bearer_token: process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN,
};

console.log(twitterAuth);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      "https://api.twitter.com/1.1/search/tweets.json",
      {
        headers: {
          Authorization: `Bearer ${twitterAuth.bearer_token}`,
        },
        params: {
          q: `#100DaysOfCode`,
        },
      }
    );
    // console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: error.message });
  }
}
