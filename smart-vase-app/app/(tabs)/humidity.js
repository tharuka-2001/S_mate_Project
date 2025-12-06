import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Humidity() {
  const humidity = 38; // mock %

  const status =
    humidity < 30 ? "Dry" : humidity < 60 ? "Optimal" : "Humid";
  const color =
    humidity < 30 ? "red" : humidity < 60 ? "green" : "blue";

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Air Humidity</Text>

      <View style={[styles.card, { borderLeftColor: color }]}>
        <Ionicons name="water" size={40} color={color} />
        <Text style={styles.value}>{humidity}%</Text>
        <Text style={[styles.status, { color }]}>{status}</Text>
      </View>

      <Text style={styles.tip}>
        {status === "Dry"
          ? "Low humidity — mist the plant daily."
          : status === "Optimal"
          ? "Humidity is perfect!"
          : "High humidity — increase airflow."}
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
