export const extractRepoNameFromUrl = (url: any) => {
  const regex = /https:\/\/api\.github\.com\/repos\/[^/]+\/([^/]+)\/git\/trees/;

  const match = url.match(regex);

  return match ? match[1] : null;
};
