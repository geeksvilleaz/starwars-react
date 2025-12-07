import {
  SWAPIResponse,
  CategoryMenuItem,
  Person,
  Planet,
  Film,
  Species,
  Vehicle,
  Starship,
  SWAPIEntity,
} from "./types";

const SWAPI_BASE_URL = "https://swapi.dev/api";

/**
 * Fetch root API to get available categories
 */
export async function getCategories(): Promise<CategoryMenuItem[]> {
  try {
    const response = await fetch(SWAPI_BASE_URL, {
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Convert the root API response object to an array of CategoryMenuItem
    return Object.entries(data).map(([name, url]) => ({
      name,
      url: url as string,
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

/**
 * Fetch items for a category with pagination
 */
export async function getCategoryItems<T>(
  category: string,
  page: number = 1
): Promise<SWAPIResponse<T>> {
  try {
    const url = `${SWAPI_BASE_URL}/${category}/?page=${page}`;
    const response = await fetch(url, {
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${category} items:`, error);
    throw error;
  }
}

/**
 * Fetch a specific item by URL
 */
export async function getItemByUrl<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching item by URL:", error);
    throw error;
  }
}

/**
 * Extract ID from SWAPI URL
 * Example: "https://swapi.dev/api/people/1/" -> "1"
 */
export function extractIdFromUrl(url: string): string {
  const matches = url.match(/\/(\d+)\/?$/);
  return matches ? matches[1] : "";
}

/**
 * Extract category from SWAPI URL
 * Example: "https://swapi.dev/api/people/1/" -> "people"
 */
export function extractCategoryFromUrl(url: string): string {
  const matches = url.match(/\/api\/([^/]+)\//);
  return matches ? matches[1] : "";
}
