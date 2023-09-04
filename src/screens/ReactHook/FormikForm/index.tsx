import React from "react";
import { useFormik } from "formik";
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Button,
  SafeAreaView,
} from "react-native";

import validationSchema from "./validationSchema";
import InputCustom from "./InputCustom";

const initialValues = {
  email: "",
  password: "",
};

const FormikForm = () => {
  const onSubmit = (values: any) => {
    console.log("value", values);
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
    <SafeAreaView className="flex-1">
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
            <Button
              title="Sign in"
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FormikForm;
