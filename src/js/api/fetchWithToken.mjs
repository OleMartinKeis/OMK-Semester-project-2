import { load } from "../api/storage/index.mjs";
const token = load("token");
export function headers() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}