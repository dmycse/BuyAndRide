
// this file isn't used right now

function assertValue<T>(v: T | undefined, envVar: string): T {
  if (!v) {
    throw new Error(`Missing env var ${envVar}`);
  }
  return v;
}

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  'NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET, 
  'NEXT_PUBLIC_SANITY_DATASET'
);

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-19';

