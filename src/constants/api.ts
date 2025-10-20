const BASE_PATH = import.meta.env.VITE_API_BASE_URL || "";

export const API_ENDPOINTS = {
  PLANS: `${BASE_PATH}plans.json`,
  USER: `${BASE_PATH}user.json`,
} as const;
