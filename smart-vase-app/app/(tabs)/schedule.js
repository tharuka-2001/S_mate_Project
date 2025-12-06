import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Schedule() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Watering Schedule</Text>

      <TextInput style={styles.input} placeholder="Enter Time (07:30)" />
      <TextInput style={styles.input} placeholder="Line (1–4)" />
      <TextInput style={styles.input} placeholder="Water Amount (ml)" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Save Schedule</Text>
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
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
  },
  text: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
