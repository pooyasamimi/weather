declare global {
  type Theme = "dark" | "light" | "system";

  type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
  };

  type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
  };

  interface ImportMetaEnv {
    readonly VITE_OPENWEATHER_API_KEY: string;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
export {};
