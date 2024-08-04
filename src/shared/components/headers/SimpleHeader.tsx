import { Colors } from "@/constants/Colors";
import { IoniIcon } from "@/src/shared/components/icons/TabBarIcon";
import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type props = {
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: ViewStyle;
  title: string;
  onBackButtonPress?: () => void;
  showBackButton?: boolean;
};

const SimpleHeader = ({
  title,
  containerStyle,
  buttonStyle,
  textStyle,
  onBackButtonPress,
  showBackButton = true,
}: props) => {
  const onBackPress = useCallback(() => {}, []);

  const onPropsBackButtonPress = useCallback(() => {
    requestAnimationFrame(() => {
      if (onBackButtonPress) {
        onBackButtonPress();
      } else {
        onBackPress();
      }
    });
  }, [onBackButtonPress, onBackPress]);

  return (
    <View style={[containerStyle, styles.headerContainer]}>
      {/*  {props.buttonType == "back" && ( */}
      {showBackButton && (
        <TouchableOpacity
          style={[buttonStyle, styles.button]}
          onPress={onPropsBackButtonPress}
          activeOpacity={0.8}
        >
          <IoniIcon name="arrow-back-outline" color={"white"} />
        </TouchableOpacity>
      )}
      {/*           )}
       */}
      <Text style={[textStyle, styles.title]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    backgroundColor: Colors.primary,
    flexDirection: "row",
  },

  title: {
    color: "white",
    fontSize: 16,
  },
  button: {
    position: "absolute",
    left: 25,
  },
});

export default SimpleHeader;
