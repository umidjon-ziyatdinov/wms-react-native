import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Formatter } from "../../utils/helpers";

const MyCalendar = (props) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    console.log("calendar change", event, selectedDate);
    const currentDate = selectedDate;
    if (props.setDate) {
      props.setDate(selectedDate);
    }
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatepicker}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            paddingHorizontal: 10,
            borderRadius: 5,
            color: "black",
            textDecorationLine: "underline",
          }}
          value={Formatter.formatTime(date, "YYYY-MM-DD")}
          editable={false}
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date || date}
          mode={"date"}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default MyCalendar;
