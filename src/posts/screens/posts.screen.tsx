import { Colors } from "@/constants/Colors";
import SimpleHeader from "@/src/shared/components/headers/SimpleHeader";
import { IoniIcon, TabBarIcon } from "@/src/shared/components/icons/TabBarIcon";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.background,
        flex: 1,
        paddingTop: insets.top,
      }}
    >
      <SimpleHeader title="Publicaciones" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
