import { Colors } from "@/constants/Colors";
import { IoniIcon } from "@/src/shared/components/icons/TabBarIcon";
import { router } from "expo-router";
import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useAppSelector } from "../../hooks/reduxHooks";

type props = {
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: ViewStyle;
  title: string;
  onBackButtonPress?: () => void;
  showBackButton?: boolean;
  rightButtonStyle?: ViewStyle;
};

const SimpleHeader = ({
  title,
  containerStyle,
  buttonStyle,
  textStyle,
  onBackButtonPress,
  showBackButton = true,
  rightButtonStyle,
}: props) => {
  const onBackPress = useCallback(() => {
    router.back();
  }, []);

  const { loginInfo } = useAppSelector((state) => state.onBoarding);

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
          style={[styles.leftButton, buttonStyle]}
          onPress={onPropsBackButtonPress}
          activeOpacity={0.8}
        >
          <IoniIcon name="arrow-back-outline" color={"white"} />
        </TouchableOpacity>
      )}
      {/*           )}
       */}
      <Text style={[textStyle, styles.title]}>{title}</Text>

      {loginInfo?.token ? (
        <TouchableOpacity
          style={[styles.rightButton, rightButtonStyle]}
          onPress={() => {
            router.navigate("/account/myProfile");
          }}
          activeOpacity={0.8}
        >
          <IoniIcon name="person-circle-sharp" color={"white"} size={35} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.rightButton, rightButtonStyle]}
          onPress={() => {
            router.navigate("/onBoarding/login");
          }}
          activeOpacity={0.8}
        >
          <IoniIcon name="log-in-outline" color={"white"} />
        </TouchableOpacity>
      )}
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
  leftButton: {
    position: "absolute",
    left: 25,
  },
  rightButton: {
    position: "absolute",
    right: 25,
  },
});

export default SimpleHeader;
