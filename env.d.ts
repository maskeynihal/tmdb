/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TMDB_API: string;
  readonly VITE_APP_TMDB_API_KEY: string;
  readonly VITE_APP_TMDB_API_IMAGE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
