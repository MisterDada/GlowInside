// theme.ts
export interface Theme {
  background: string;
  text: string;
  card: string;
  tabIcon: string;
}

export const lightTheme: Theme = {
  background: "#FAF9F6",
  text: "#000000",
  card: "white",
  tabIcon: "#003CFE",
};

export const darkTheme: Theme = {
  background: "#000000ff",
  text: "#ffffff",
  card: "#a8a8a84c",
  tabIcon: "#ffffff",
};
