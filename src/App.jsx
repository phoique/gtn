import React from "react";
import "react-native-gesture-handler";
import MainNavigation from "./navigation/MainNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
}

export default App;
