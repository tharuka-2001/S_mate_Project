import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Dashboard() {
  const waterLevel = 75;
  const fertilizer = { c1: 3, c2: 2, c3: 1 };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Smart Vase Dashboard</Text>

      {/* Water Level Card */}
      <View style={[styles.card, { borderLeftColor: "#2196F3" }]}>
        <Ionicons name="water" size={32} color="#2196F3" />
        <Text style={styles.cardTitle}>Water Level</Text>
        <Text style={styles.cardValue}>{waterLevel}%</Text>
      </View>

      {/* Fertilizer Card */}
      <View style={[styles.card, { borderLeftColor: "#FF9800" }]}>
        <Ionicons name="leaf" size={32} color="#FF9800" />
        <Text style={styles.cardTitle}>Fertilizer Status</Text>
        <Text>Chamber 1: {fertilizer.c1}/3</Text>
        <Text>Chamber 2: {fertilizer.c2}/3</Text>
        <Text>Chamber 3: {fertilizer.c3}/3</Text>
      </View>

      {/* System Health */}
      <View style={[styles.card, { borderLeftColor: "#4CAF50" }]}>
        <Ionicons name="pulse" size={32} color="#4CAF50" />
        <Text style={styles.cardTitle}>System Health</Text>
        <Text style={{ color: "green", fontWeight: "bold" }}>Good</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 10 },
  heading: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    borderLeftWidth: 8,
  },

  cardTitle: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  cardValue: { fontSize: 24, fontWeight: "bold", marginTop: 5 },
});
