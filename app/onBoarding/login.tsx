import { Colors } from "@/constants/Colors";
import MainButton from "@/src/shared/components/buttons/Button";
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
          paddingTop: 40,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "center",
            marginBottom: 40,
            fontSize: 20,
          }}
        >
          Inicia sesion para poder publicar o responder a otros
        </Text>
        <View
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >
          <StandardInput label="Telefono" />
          <SecureInput label="Contraseña" containerStyle={{ marginTop: 20 }} />
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Aun no tienes cuenta?{" "}
            <Text
              style={{ color: Colors.primary, textDecorationLine: "underline" }}
            >
              Registrate
            </Text>
          </Text>
        </View>
        <MainButton
          label="Entrar"
          containerStyle={{ marginTop: 20, width: "90%", alignSelf: "center" }}
        />
      </ScrollView>
    </SafeView>
  );
};

export default Login;
