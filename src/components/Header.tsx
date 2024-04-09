import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between ">
      <Logo width={100} height={100} />

      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row h-10 px-4 border border-violet-500 rounded-lg items-center"
      >
        <Feather name="plus" color={colors.violet[500]} size={25} />

        <Text className="text-white ml-3 font-semibold text-base">Novo</Text>
      </TouchableOpacity>
    </View>
  );
}
