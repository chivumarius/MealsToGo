<<<<<<< HEAD
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  search: {
    padding: 16,
  },

  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignment: "center", justifyContent: "center" }}>
      <Text>Our React Native Blank Canvas.</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
>>>>>>> b095c75c9a907eee4a188f3ea24eb41a052bbdb5
