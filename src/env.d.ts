/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_TEST_DNI: string;
  readonly VITE_TEST_PHONE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
