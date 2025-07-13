// theme.ts
export interface Theme {
  background: string;
  text: string;
}

export const lightTheme: Theme = {
  background: "#FAF9F6",
  text: "#000000",
};

export const darkTheme: Theme = {
  background: "#000000",
  text: "#ffffff",
};
