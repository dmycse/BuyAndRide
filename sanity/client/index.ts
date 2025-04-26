import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "anea6r0x",
  dataset: "production",
  apiVersion: "2025-04-04",
  useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return imgBuilder.image(source);
}