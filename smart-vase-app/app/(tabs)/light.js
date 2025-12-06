import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Light() {
  const light = 620; // mock lux value

  const status =
    light < 300 ? "Too Dim" : light < 1500 ? "Good Light" : "Too Harsh";
  const statusColor =
    light < 300 ? "red" : light < 1500 ? "green" : "orange";

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Light Intensity</Text>

      <View style={[styles.card, { borderLeftColor: statusColor }]}>
        <Ionicons name="sunny" size={40} color={statusColor} />
        <Text style={styles.value}>{light} lux</Text>
        <Text style={[styles.status, { color: statusColor }]}>{status}</Text>
      </View>

      <Text style={styles.tip}>
        {status === "Too Dim"
          ? "Move the plant closer to a window."
          : status === "Good Light"
          ? "Perfect light conditions!"
          : "The light is too harsh — consider shade."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    borderLeftWidth: 8,
    marginBottom: 20,
  },
  value: { fontSize: 30, fontWeight: "bold", marginTop: 10 },
  status: { fontSize: 20, fontWeight: "bold", marginTop: 5 },
  tip: { fontSize: 16, marginTop: 15 },
});
