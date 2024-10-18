import { Colors } from "@/constants/Colors";
import React from "react";
import {
  Text,
  View,
  ViewStyle,
  TextInput,
  TextStyle,
  KeyboardTypeOptions,
} from "react-native";

export type standarInputProps = {
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  showPassword?: boolean;
  placeHolder?: string;
  label?: string | undefined;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText: (text: string) => void;
  onPressIcon?: () => void;
  value: string | undefined;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  labelStyle?: TextStyle;
  multiline?: boolean;
  numberOfLines?: number;
};

const StandardInput = ({
  containerStyle,
  inputStyle,
  placeHolder,
  label,
  onFocus,
  onBlur,
  onChangeText,
  disabled,
  value,
  error,
  keyboardType,
  labelStyle,
  multiline,
  numberOfLines,
}: standarInputProps) => {
  return (
    <View style={containerStyle}>
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
        textAlignVertical={multiline ? "top" : "center"}
        value={value}
        placeholder={placeHolder}
        editable={!disabled}
        keyboardType={keyboardType ? keyboardType : "default"}
        cursorColor={Colors.primary}
        selectionColor={Colors.primary}
        placeholderTextColor={Colors.textSecundary}
        style={[
          inputStyle,
          {
            borderWidth: 1,
            borderColor: Colors.primary,
            borderRadius: 5,
            borderTopEndRadius: 5,
            borderTopStartRadius: 5,
            fontSize: 16,
            maxHeight: 100,
            paddingVertical: multiline ? 10 : 0,
            paddingLeft: 15,
            paddingRight: 15,
            height: !multiline ? 45 : 65,
            color: Colors.text,
          },
        ]}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        autoCapitalize="none"
        autoComplete="off"
      />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
};

export default StandardInput;
