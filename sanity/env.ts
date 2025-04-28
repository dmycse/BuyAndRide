const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

if (!projectId || !dataset) {
  throw new Error('Missing Sanity environment variables');
}

export { projectId, dataset };