import {createClient} from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'
import {projectId, dataset} from '../lib/env'
import {SanityImageSource} from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: 'v2025-02-19',
  useCdn: true,
})

const imgBuilder = ImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return imgBuilder.image(source)
}
