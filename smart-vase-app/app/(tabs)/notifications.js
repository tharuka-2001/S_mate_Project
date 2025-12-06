import { View, Text, StyleSheet } from "react-native";

export default function Notifications() {

  const notifications = [
    "Chamber 3 Low Level",
    "Water Tank 50%",
    "Last watering completed",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>

      {notifications.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 20 },
  heading: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
