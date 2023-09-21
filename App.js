import "react-native-url-polyfill/auto";

import { SafeAreaView, StatusBar } from "react-native";
import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Navigation />
    </SafeAreaView>
  );
}
