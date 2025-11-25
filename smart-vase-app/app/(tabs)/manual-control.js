import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ManualControl() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Manual Control</Text>

      <TouchableOpacity style={styles.btnBlue}>
        <Ionicons name="water" size={24} color="#fff" />
        <Text style={styles.btnText}>Start Watering — Line 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnBlue}>
        <Ionicons name="water" size={24} color="#fff" />
        <Text style={styles.btnText}>Start Watering — Line 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnGreen}>
        <Ionicons name="leaf" size={24} color="#fff" />
        <Text style={styles.btnText}>Start Fertilizing</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRed}>
        <Ionicons name="alert" size={24} color="#fff" />
        <Text style={styles.btnText}>STOP ALL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 20 },
  heading: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },

  btnBlue: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  btnGreen: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  btnRed: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f44336",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  btnText: { color: "#fff", marginLeft: 10, fontSize: 16, fontWeight: "bold" },
});
