import React from "react";
import { useFormik } from "formik";
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

import validationSchema from "./validationSchema";
import InputCustom from "./InputCustom";
import { TouchableOpacity } from "react-native";

const initialValues = {
  email: "",
  password: "",
};

const FormikForm = () => {
  const onSubmit = (values: any) => {
    Alert.alert(`Email: ${values.email} ---- Password: ${values.password}`);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    isSubmitting,
    isValid,
    handleSubmit,
  } = formik;

  return (
    <SafeAreaView className="flex-1 mt-6">
      <KeyboardAvoidingView
        enabled
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView keyboardShouldPersistTaps="handled" className="flex-1">
          <View className="px-4">
            <InputCustom
              placeholder="Enter e-mail"
              onChangeText={handleChange("email")}
              value={values.email}
              isTouched={touched.email ?? false}
              error={errors.email ?? ""}
            />
            <InputCustom
              placeholder="Enter password"
              onChangeText={handleChange("password")}
              value={values.password}
              isTouched={touched.password ?? false}
              error={errors.password ?? ""}
            />
            <TouchableOpacity
              onPress={handleSubmit}
              disabled={!isValid}
              className="w-full h-12 bg-cyan-500 rounded-lg my-3 flex items-center justify-center"
            >
              <Text className="text-white text-lg font-bold">Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FormikForm;
