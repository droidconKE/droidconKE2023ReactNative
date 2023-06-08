import '@react-navigation/native';

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      accent: string;
      textLight: string;
      tint: string;
      bg: string;
      background: string;
      text: string;
      border: string;
      card: string;
      notification: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
