import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { colors, radius, shadow } from "../constants/theme";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    // Abhi nakli login. Baad mein yahan API lagegi.
    router.replace("/home");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView style={{ backgroundColor: colors.bg }} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={s.header}>
          <View style={s.logoCircle}>
            <Text style={s.logo}>امید</Text>
          </View>
          <Text style={s.brand}>Umeed</Text>
          <Text style={s.tagline}>Campus Welfare & Issue Management</Text>
        </View>

        <View style={[s.card, shadow]}>
          <Text style={s.title}>Welcome back</Text>
          <Text style={s.sub}>Apne account mein login karein</Text>

          <Input icon="mail-outline" placeholder="Email" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} />
          <Input icon="lock-closed-outline" placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

          <Button title="Login" onPress={onLogin} />

          <Text style={s.footer}>
            Account nahi hai?{" "}
            <Link href="/register" style={s.link}>Register karein</Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  header: {
    backgroundColor: colors.primary, paddingTop: 90, paddingBottom: 80,
    alignItems: "center", borderBottomLeftRadius: 40, borderBottomRightRadius: 40,
  },
  logoCircle: {
    width: 84, height: 84, borderRadius: 42, backgroundColor: colors.white,
    alignItems: "center", justifyContent: "center", borderWidth: 4, borderColor: colors.secondary,
  },
  logo: { fontSize: 30, color: colors.primary, fontWeight: "700" },
  brand: { fontSize: 30, fontWeight: "800", color: colors.white, marginTop: 14 },
  tagline: { color: colors.primarySoft, marginTop: 4, fontSize: 13 },
  card: {
    backgroundColor: colors.white, marginHorizontal: 20, marginTop: -40,
    borderRadius: radius.xl, padding: 22,
  },
  title: { fontSize: 22, fontWeight: "800", color: colors.ink },
  sub: { color: colors.muted, marginBottom: 20, marginTop: 4 },
  footer: { textAlign: "center", color: colors.muted, marginTop: 20 },
  link: { color: colors.primary, fontWeight: "700" },
});