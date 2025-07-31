
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
  
  category:{
image:string;
  }
  rating: {
    rate: number;
    count: number;
  };
}

export interface ThemeContextType {
  currentTheme: ThemeType;
  themeConfig: ThemeConfig;
  switchTheme: (theme: ThemeType) => void;
  isLoading: boolean;
}

export type ThemeType = 'theme1' | 'theme2' | 'theme3';

export interface ThemeConfig {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    heading: string;
  };
  layout: {
    type: 'standard' | 'sidebar' | 'grid';
    spacing: 'normal' | 'spacious';
  };
}

