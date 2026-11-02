import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Link, useRouter } from "expo-router";
import { colors } from "../constants/theme";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", studentId: "", department: "", phone: "" });
  const set = (key: string) => (value: string) => setForm((f) => ({ ...f, [key]: value }));

  const onRegister = () => {
    // Abhi nakli. Baad mein POST /auth/register lagega.
    router.replace("/home");
  };

  return (
    <ScrollView style={{ backgroundColor: colors.bg }} contentContainerStyle={s.container} keyboardShouldPersistTaps="handled">
      <Text style={s.title}>Account banayein</Text>
      <Text style={s.sub}>Student ke taur par register karein</Text>

      <Input icon="person-outline" placeholder="Poora naam" value={form.name} onChangeText={set("name")} />
      <Input icon="mail-outline" placeholder="Email" autoCapitalize="none" keyboardType="email-address" value={form.email} onChangeText={set("email")} />
      <Input icon="lock-closed-outline" placeholder="Password" secureTextEntry value={form.password} onChangeText={set("password")} />
      <Input icon="card-outline" placeholder="Student ID" value={form.studentId} onChangeText={set("studentId")} />
      <Input icon="school-outline" placeholder="Department" value={form.department} onChangeText={set("department")} />
      <Input icon="call-outline" placeholder="Phone" keyboardType="phone-pad" value={form.phone} onChangeText={set("phone")} />

      <Button title="Register" onPress={onRegister} />

      <Text style={s.footer}>
        Pehle se account hai? <Link href="/login" style={s.link}>Login karein</Link>
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { padding: 24, paddingTop: 70 },
  title: { fontSize: 26, fontWeight: "800", color: colors.ink },
  sub: { color: colors.muted, marginTop: 4, marginBottom: 24 },
  footer: { textAlign: "center", color: colors.muted, marginTop: 20 },
  link: { color: colors.primary, fontWeight: "700" },
});