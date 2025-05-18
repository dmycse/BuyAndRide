export const slugify = (input: string) => {
  return input.toLowerCase().replace(/\s+/g, '-').slice(0, 50); 
};
