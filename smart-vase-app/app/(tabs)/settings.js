import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      <TextInput style={styles.input} placeholder="WiFi SSID" />
      <TextInput style={styles.input} placeholder="WiFi Password" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Save Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: "red" }]}>
        <Text style={styles.text}>Reset System</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 20 },
  heading: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#4CAF50",
  },
  text: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
