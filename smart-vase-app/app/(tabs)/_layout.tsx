import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#838383",
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 12,
          borderRadius:24,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="monitor"
        options={{
          title: "Monitor",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "analytics" : "analytics-outline"} size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="control"
        options={{
          title: "Control",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "options" : "options-outline"} size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "settings" : "settings-outline"} size={size} color={color} />
          ),
        }}
      />

      {/* Hide old screens from tabs */}
      <Tabs.Screen
        name="dashboard"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="manual-control"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="soil"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="light"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="temperature"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="humidity"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

