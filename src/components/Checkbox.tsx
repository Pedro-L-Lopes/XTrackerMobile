import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function Checkbox({ title, checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {checked ? (
        <View className="w-10 h-10 rounded-lg bg-green-600 items-center justify-center">
          <Feather name="check" size={20} color={colors.white} />
        </View>
      ) : (
        <View className="h-10 w-10 bg-zinc-900 rounded-lg border border-zinc-800" />
      )}

      <Text className="text-white text-base ml-3 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
