import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  ViewStyle,
  TextInput,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  TextStyle,
} from "react-native";
import { Text } from "react-native";
import { IoniIcon } from "../icons/TabBarIcon";

type props = {
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  showPassword?: boolean;
  placeHolder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText: (text: string) => void;
  onPressIcon?: () => void;
  value: string | undefined;
  error?: string;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  label?: string;
  labelStyle?: TextStyle;
};

const SecureInput = ({
  containerStyle,
  inputStyle,
  placeHolder,
  onFocus,
  onBlur,
  onChangeText,
  value,
  error,
  onSubmitEditing,
  label,
  labelStyle,
}: props) => {
  const [showPassword, setShowPassword] = useState(false);

  const onPressIcon = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <View
        style={[
          containerStyle,
          {
            justifyContent: "center",
          },
        ]}
      >
        {label && (
          <Text
            style={[
              {
                color: Colors.primary,
                fontSize: 16,
                lineHeight: 24,
                fontWeight: "bold",
              },
              labelStyle,
            ]}
          >
            {label}
          </Text>
        )}
        <TextInput
          value={value}
          placeholder={placeHolder}
          secureTextEntry={showPassword ? false : true}
          cursorColor={Colors.primary}
          selectionColor={Colors.primary}
          placeholderTextColor={Colors.gray}
          style={[
            inputStyle,
            {
              borderWidth: 1,
              borderColor: Colors.primary,
              borderRadius: 5,
              borderTopEndRadius: 5,
              borderTopStartRadius: 5,
              height: 45,
              fontSize: 16,
              paddingLeft: 15,
              paddingRight: 60,
              color: Colors.primary,
            },
          ]}
          onFocus={onFocus}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize="none"
          autoComplete="off"
          onSubmitEditing={onSubmitEditing}
        />
        <TouchableOpacity
          style={{ position: "absolute", right: 20 }}
          onPress={onPressIcon}
        >
          <IoniIcon
            name={!showPassword ? "eye-off-outline" : "eye-outline"}
            size={19}
            color={Colors.text}
          />
        </TouchableOpacity>
      </View>
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </>
  );
};

export default SecureInput;
