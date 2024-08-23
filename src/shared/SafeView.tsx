import React from "react";
import { Colors } from "@/constants/Colors";
import { SafeAreaView, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeView = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "rgba(237,238,243,255)",
          flex: 1,
          paddingTop: insets.top,
        }}
      >
        <StatusBar
          backgroundColor={Colors.primary}
          barStyle={"light-content"}
        />
        {children}
      </SafeAreaView>
    </>
  );
};

export default SafeView;
