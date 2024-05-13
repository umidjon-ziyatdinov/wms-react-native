import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ScrollView, // import ScrollView
} from "react-native";
import MyButton from "../../components/MyButton/MyButton.js";
import Input from "../../components/MyInput/Input.js";
import MyCalendar from "../../components/Calendar/MyCalendar.js";

const WarehousingDisplayScreen = ({ navigation }) => {
  const [state, setState] = useState({
    expiryDate: new Date(),
    quantity: 0,
    location: "",
  });

  // Add error states
  const [errors, setErrors] = useState({
    location: "",
    quantity: "",
  });

  // Function to handle input changes
  const handleChangeInput = (name, value) => {
    console.log("name", name, value);
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error when user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Function to handle registration
  const handleRegister = async () => {
    console.log("State:", state); // Logging state to console

    // Validate fields
    let newErrors = {};
    if (!state.location) {
      newErrors.location = "Location is required";
    }
    if (!state.quantity) {
      newErrors.quantity = "Quantity is required";
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, update the error state and stop the function
      setErrors(newErrors);
      return;
    }

    // Simulating API call
    try {
      // Simulating a delay to mimic API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Mocking response data
      const response = {
        success: true,
        message: "Product registered successfully!",
      };
      // Alerting the response to the user
      alert(response.message);
    } catch (error) {
      // Handling error
      console.error("Error:", error);
      alert("Failed to register product. Please try again later.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <MyButton title="Add product manually" />
          <View style={styles.imageArea}>
            <Image
              source={{
                uri: "https://t4.ftcdn.net/jpg/02/96/15/67/360_F_296156723_tw7WRQTa80yfT3B2LL1fcOKP9jtHRr4B.jpg",
              }}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </View>
          <View style={styles.inputArea}>
            <Input
              label="Location"
              placeholder="Enter the location or scan the location"
              required
              onChangeText={(value) => handleChangeInput("location", value)}
              errMsg={errors.location}
            />
          </View>
          <View style={styles.inputArea}>
            <Input
              label="Quantity"
              required
              errMsg={errors.quantity}
              onChangeText={(value) => handleChangeInput("quantity", value)}
            />
            <MyCalendar
              date={state?.expiryDate}
              setDate={(selectedDate) =>
                handleChangeInput("expiryDate", selectedDate)
              }
            />
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MyButton title="Register product" onPress={handleRegister} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default WarehousingDisplayScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Add flexGrow for ScrollView
    paddingHorizontal: 18,
    paddingVertical: 15,
  },
  imageArea: {
    width: "100%",
    flex: 2,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
    borderWidth: 2,
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
