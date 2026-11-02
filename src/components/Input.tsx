import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, radius } from "../constants/theme";

type Props = TextInputProps & { icon: keyof typeof Ionicons.glyphMap };

export default function Input({ icon, ...props }: Props) {
  const [focused, setFocused] = useState(false);
  return (
    <View style={[s.wrap, focused && { borderColor: colors.primary }]}>
      <Ionicons name={icon} size={20} color={focused ? colors.primary : colors.muted} />
      <TextInput
        {...props}
        style={s.input}
        placeholderTextColor={colors.muted}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    flexDirection: "row", alignItems: "center", gap: 10,
    backgroundColor: colors.white, borderWidth: 1.5, borderColor: colors.border,
    borderRadius: radius.lg, height: 52, paddingHorizontal: 14, marginBottom: 14,
  },
  input: { flex: 1, fontSize: 15, color: colors.ink },
});