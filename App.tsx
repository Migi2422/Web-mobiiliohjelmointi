import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [age, setAge] = useState("");

  const ageAsNumber = age ? Number(age) : 0;
  const lower = age !== "" ? (220 - ageAsNumber) * 0.65 : 0;
  const upper = age !== "" ? (220 - ageAsNumber) * 0.85 : 0;
  return (
    <View style={styles.container}>
      <Text>sykemittari</Text>
      <TextInput
        keyboardType="number-pad"
        placeholder="Ikä"
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      <Text>Alaraja: {lower.toFixed(0)} bpm</Text>
      <Text>Yläraja: {upper.toFixed(0)} bpm</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
