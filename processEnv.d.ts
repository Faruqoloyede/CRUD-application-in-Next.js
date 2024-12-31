namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_KEY: string; // Publicly accessible variable
      NEXT_PUBLIC_APPWRITE_PROJECT_ID: string; // Publicly accessible variable
      SECRET_API_KEY?: string; // Server-side only variable
    }
  }
  