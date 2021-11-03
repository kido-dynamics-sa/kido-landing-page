export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path, options = {}) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

export async function getBanners() {
  const banners = await fetchAPI("/banners");
  return banners;
}

export async function getFeatureCardColumns() {
  const featureCardColumns = await fetchAPI("/feature-card-columns");
  return featureCardColumns;
}

export async function getSections() {
  const sections = await fetchAPI("/sections");
  return sections;
}

export async function getTextFeatures() {
  const textFeatures = await fetchAPI("/text-features");
  return textFeatures;
}
