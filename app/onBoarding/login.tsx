import {
  useForm,
  Controller,
  SubmitHandler,
  ControllerFieldState,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Colors } from "@/constants/Colors";
import MainButton from "@/src/shared/components/buttons/Button";
import SimpleHeader from "@/src/shared/components/headers/SimpleHeader";
import SecureInput from "@/src/shared/components/inputs/SecureInput";
import StandardInput from "@/src/shared/components/inputs/StandarInput";
import SafeView from "@/src/shared/SafeView";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { loginValidation } from "@/src/onBoarding/utils/onBoarding.validators";
import { ILoginInput } from "@/src/onBoarding/types/onBoarding";
import { useAppDispatch } from "@/src/shared/hooks/reduxHooks";
import { login } from "@/src/onBoarding/services/onBoarding.actions";
import { showToast } from "@/src/shared/utils/alerts/ToastAlert";
import { router } from "expo-router";

const Login = () => {
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<any> = async (fData: ILoginInput) => {
    if (loading) return;
    setLoading(true);
    try {
      await dispatch(
        login({
          inputParams: {
            phoneNumber: fData.phoneNumber,
            password: fData.password,
          },
        })
      ).unwrap();

      showToast("Sesión iniciada");

      router.navigate("(tabs)");
    } catch (error: any) {
      if (error?.response?.status === 401) {
        showToast("Credenciales invalidas", { type: "danger" });
      }
      if (error?.response?.status === 202) {
        showToast("Usuario pendiente de confirmar cuenta", { type: "danger" });
      }
      setLoading(false);

      console.log(error.response);
    }
  };

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
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <StandardInput
                label="Telefono"
                placeHolder="Introduce tu telefono"
                value={field.value?.toString()}
                onChangeText={(text) => field.onChange(text)}
                error={fieldState?.error?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <SecureInput
                label="Contraseña"
                placeHolder="Introduce tu contraseña"
                value={field.value?.toString()}
                onChangeText={(text) => field.onChange(text)}
                error={fieldState?.error?.message}
                containerStyle={{ marginTop: 20 }}
              />
            )}
          />

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
          onPress={handleSubmit(onSubmit)}
          isLoading={loading}
        />
      </ScrollView>
    </SafeView>
  );
};

export default Login;
