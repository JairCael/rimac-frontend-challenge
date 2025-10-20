export const VALID_CREDENTIALS = {
  DNI: import.meta.env.VITE_TEST_DNI || "",
  PHONE: import.meta.env.VITE_TEST_PHONE || "",
} as const;

export const VALIDATION_RULES = {
  DNI_LENGTH: 9,
  PHONE_LENGTH: 10,
} as const;
