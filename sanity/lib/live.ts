import { defineLive } from "next-sanity";
import { client } from "../client";

// set viewer token
const token = process.env.SANITY_VIEWER_TOKEN;

if (!token) {
  throw new Error("Missing SANITY_VIEWER_TOKEN")
}


export const { sanityFetch, SanityLive } = defineLive({ 
  client,
  serverToken: token,
  browserToken: token
});