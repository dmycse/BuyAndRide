import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: 'v2025-02-19',
  useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return imgBuilder.image(source);
}