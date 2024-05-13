import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  required = false,
  errMsg,
  ...rest
}) => {
  const { containerStyle, inputStyle, labelStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
        {required && <Text style={{ color: "red" }}>*</Text>}
      </Text>

      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={{
          ...inputStyle,
          borderColor: required && errMsg ? "red" : "grey",
        }}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      {required && errMsg && (
        <Text style={{ ...labelStyle, color: "red", fontSize: 12 }}>
          {errMsg}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  containerStyle: {
    minHeight: 60,
    flexDirection: "column",
    marginVertical: 8,
  },
  labelStyle: {
    fontSize: 14,
    height: 18,
    marginBottom: 4,
    marginLeft: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    color: "#111",
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
  },
});
