// ThemeContext.tsx
import React, { ReactNode, createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import { Theme, darkTheme, lightTheme } from "./Theme";

const ThemeContext = createContext<Theme>(lightTheme);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const scheme = useColorScheme(); // 'light' | 'dark' | null
  const theme = scheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
