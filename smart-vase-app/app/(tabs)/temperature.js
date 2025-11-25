import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Temperature() {
  const temp = 18; // mock temp

  const status =
    temp < 15 ? "Cold" : temp < 30 ? "Ideal" : "Hot";
  const color =
    temp < 15 ? "blue" : temp < 30 ? "green" : "red";

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Temperature</Text>

      <View style={[styles.card, { borderLeftColor: color }]}>
        <Ionicons name="thermometer" size={40} color={color} />
        <Text style={styles.value}>{temp}°C</Text>
        <Text style={[styles.status, { color }]}>{status}</Text>
      </View>

      <Text style={styles.tip}>
        {status === "Cold"
          ? "Too cold — relocate plant to a warmer spot."
          : status === "Ideal"
          ? "Temperature is perfect!"
          : "Too hot — avoid direct sunlight."}
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
