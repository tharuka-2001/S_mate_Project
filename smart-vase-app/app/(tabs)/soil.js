import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Soil() {
  const moisture = 45; // mock data

  const status =
    moisture < 30 ? "Dry" : moisture < 70 ? "Optimal" : "Wet";
  const statusColor =
    moisture < 30 ? "red" : moisture < 70 ? "green" : "blue";

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Soil Moisture</Text>

      <View style={[styles.card, { borderLeftColor: statusColor }]}>
        <Ionicons name="leaf" size={40} color={statusColor} />
        <Text style={styles.value}>{moisture}%</Text>
        <Text style={[styles.status, { color: statusColor }]}>{status}</Text>
      </View>

      <Text style={styles.tip}>
        {status === "Dry"
          ? "Soil is dry — consider watering soon."
          : status === "Optimal"
          ? "Perfect! Moisture level is ideal."
          : "Soil is wet — avoid overwatering."}
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
  value: { fontSize: 32, fontWeight: "bold", marginTop: 10 },
  status: { fontSize: 20, fontWeight: "bold", marginTop: 5 },
  tip: { fontSize: 16, marginTop: 15 },
});
