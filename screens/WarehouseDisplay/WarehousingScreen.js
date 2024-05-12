import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import MyButton from "../../components/MyButton/MyButton.js";
import Input from "../../components/MyInput/Input.js";
import DateTimePicker from "@react-native-community/datetimepicker";

const WarehousingScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <MyButton title="Add product manually" />
          <View style={styles.imageArea}>
            <Text style={styles.imgText}>Scan the product barcode</Text>
          </View>

          <View style={styles.inputArea}>
            <Input label="quantity" />

            {/* <DateTimePicker mode='date' value={new Date()} /> */}
          </View>
          <View
            style={{
              width: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MyButton title="register product" disabled />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default WarehousingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 15,
  },
  imageArea: {
    width: "100%",
    flex: 1,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "grey",
    shadowColor: "grey",
    shadowRadius: 6,
    shadowOffset: 1,
  },
  imgText: {
    color: "black",
    fontSize: 24,
  },
});
