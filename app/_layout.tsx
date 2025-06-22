import * as font from 'expo-font';
import { useEffect, useState } from "react";
import StackNavigator from "./Navigation/StackNavigator";

export default function RootLayout() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() =>{
      const loadFonts = async () => {
          await font.loadAsync({
            
          })
      }
  })



  return <StackNavigator />;
}
