import { Colors } from "@/constants/Colors";
import SimpleHeader from "@/src/shared/components/headers/SimpleHeader";
import SecureInput from "@/src/shared/components/inputs/SecureInput";
import StandardInput from "@/src/shared/components/inputs/StandarInput";
import SafeView from "@/src/shared/SafeView";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Login = () => {
  return (
    <SafeView>
      <SimpleHeader title="Iniciar sesion" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          flex: 1,
          paddingTop: 70,
        }}
      >
        <View
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >
          <StandardInput label="Telefono" />
          <SecureInput label="Contraseña" containerStyle={{ marginTop: 20 }} />
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default Login;
