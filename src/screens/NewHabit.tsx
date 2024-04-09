import { View, Text, ScrollView, TextInput } from "react-native";
import { BackButton } from "../components/Backbutton";

export function NewHabit() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base  ">
          Qual seu compromentimento?
        </Text>

        <TextInput className="h-14 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 border-green-600" />
      </ScrollView>
    </View>
  );
}
