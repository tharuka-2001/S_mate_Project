import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="manual-control"
        options={{
          title: "Control",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Alerts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
  name="soil"
  options={{
    title: "Soil",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="leaf" size={size} color={color} />
    ),
  }}
/>

<Tabs.Screen
  name="light"
  options={{
    title: "Light",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="sunny" size={size} color={color} />
    ),
  }}
/>


<Tabs.Screen
  name="temperature"
  options={{
    title: "Temp",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="thermometer" size={size} color={color} />
    ),
  }}
/>

<Tabs.Screen
  name="humidity"
  options={{
    title: "Humidity",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="water" size={size} color={color} />
    ),
  }}
/>

    </Tabs>
  );
}
