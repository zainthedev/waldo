import 'styled-components';

// Extend styled-components module
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      secondary: string;
    };
  }
}