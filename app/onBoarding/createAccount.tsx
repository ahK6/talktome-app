import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MainButton from "@/src/shared/components/buttons/Button";
import SimpleHeader from "@/src/shared/components/headers/SimpleHeader";
import SecureInput from "@/src/shared/components/inputs/SecureInput";
import StandardInput from "@/src/shared/components/inputs/StandarInput";
import SafeView from "@/src/shared/SafeView";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { signUpValidation } from "@/src/onBoarding/utils/onBoarding.validators";
import { ICreateAccountInput } from "@/src/onBoarding/types/onBoarding";
import { useAppDispatch } from "@/src/shared/hooks/reduxHooks";
import { createAccount } from "@/src/onBoarding/services/onBoarding.actions";
import { showToast } from "@/src/shared/utils/alerts/ToastAlert";
import { router } from "expo-router";

const CreateAccount = () => {
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signUpValidation),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<any> = async (fData: ICreateAccountInput) => {
    if (loading) return;
    setLoading(true);
    try {
      await dispatch(
        createAccount({
          inputParams: {
            email: fData.email,
            nickName: fData.nickName,
            phoneNumber: fData.phoneNumber,
            password: fData.password,
          },
        })
      ).unwrap();

      showToast("Cuenta creada, un email de confirmacion ha sido enviado");

      router.navigate("/(tabs)");
    } catch (error: any) {
      if (error.response.status === 409) {
        showToast("Email o numero de telefono ya registrados", {
          type: "danger",
        });
      }
      setLoading(false);

      console.log(error.response);
    }
  };

  return (
    <SafeView>
      <SimpleHeader title="Crear cuenta" />
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
          Registrate para poder publicar o responder a otros
        </Text>
        <View
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <StandardInput
                label="Correo electronico"
                placeHolder="Introduce tu email"
                value={field.value?.toString()}
                onChangeText={(text) => field.onChange(text)}
                error={fieldState?.error?.message}
              />
            )}
          />
          <Controller
            name="nickName"
            control={control}
            render={({ field, fieldState }) => (
              <StandardInput
                label="Usuario"
                placeHolder="Como quieres que te llamemos?"
                value={field.value?.toString()}
                onChangeText={(text) => field.onChange(text)}
                error={fieldState?.error?.message}
                containerStyle={{ marginTop: 10 }}
              />
            )}
          />
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
                containerStyle={{ marginTop: 10 }}
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
                containerStyle={{ marginTop: 10 }}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState }) => (
              <SecureInput
                label="Confirmar contraseña"
                placeHolder="Confirma tu contraseña"
                value={field.value?.toString()}
                onChangeText={(text) => field.onChange(text)}
                error={fieldState?.error?.message}
                containerStyle={{ marginTop: 10 }}
              />
            )}
          />
        </View>
        <MainButton
          label="Registrarme"
          containerStyle={{ marginTop: 20, width: "90%", alignSelf: "center" }}
          onPress={handleSubmit(onSubmit)}
          isLoading={loading}
        />
      </ScrollView>
    </SafeView>
  );
};

export default CreateAccount;
