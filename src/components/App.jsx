import React from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Loyalty from "./Loyalty";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Loyalty />
      </PaperProvider>
    </SafeAreaProvider>
  );
}