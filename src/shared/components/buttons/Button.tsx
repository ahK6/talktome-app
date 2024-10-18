import { Colors } from "@/constants/Colors";
import React from "react";
import {
  View,
  ViewStyle,
  Text,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native";

type props = {
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
  label: string;
  isLoading?: boolean;
  disabled?: boolean;
};

const MainButton = ({
  containerStyle,
  buttonStyle,
  textStyle,
  onPress,
  label,
  isLoading,
  disabled,
}: props) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={[
          {
            backgroundColor: Colors.primary,
            height: 43,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          },
          buttonStyle,
        ]}
        onPress={() => {
          if (disabled) return;
          if (!isLoading) {
            onPress();
          }
        }}
      >
        {!isLoading ? (
          <Text
            style={[
              {
                color: Colors.white,
                fontWeight: "bold",
              },
              textStyle,
            ]}
          >
            {label}
          </Text>
        ) : (
          <ActivityIndicator size={"large"} color={"white"} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MainButton;
