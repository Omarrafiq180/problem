import { Pressable, View } from "react-native";
import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/theme";
import React from "react";

export default function TabsLayout() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.muted,
          tabBarStyle: { height: 64, paddingBottom: 8, paddingTop: 6, backgroundColor: colors.white, borderTopColor: colors.border },
          tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
        }}
      >
        <Tabs.Screen 
          name="home" 
          options={{ 
            title: "Home", 
            tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> 
          }} 
        />
        <Tabs.Screen 
          name="my-issues" 
          options={{ 
            title: "My Issues", 
            tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} /> 
          }} 
        />
        <Tabs.Screen 
          name="welfare" 
          options={{ 
            title: "Welfare", 
            tabBarIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} /> 
          }} 
        />
        <Tabs.Screen 
          name="alerts" 
          options={{ 
            title: "Alerts", 
            tabBarIcon: ({ color, size }) => <Ionicons name="notifications" size={size} color={color} /> 
          }} 
        />
        <Tabs.Screen 
          name="profile" 
          options={{ 
            title: "Profile", 
            tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} /> 
          }} 
        />
      </Tabs>

      <Pressable
        onPress={() => router.push("/report")}
        style={{
          position: "absolute", alignSelf: "center", bottom: 28,
          width: 62, height: 62, borderRadius: 31,
          backgroundColor: colors.secondary, alignItems: "center", justifyContent: "center",
          borderWidth: 4, borderColor: colors.white,
          elevation: 8, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 6,
        }}
      >
        <Ionicons name="add" size={32} color={colors.ink} />
      </Pressable>
    </View>
  );
}