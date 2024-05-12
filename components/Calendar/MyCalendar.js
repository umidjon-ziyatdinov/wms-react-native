import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formatter } from '../../utils/helpers';
import { AntDesign } from '@expo/vector-icons';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
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
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={Formatter.formatTime(date, 'YYYY-MM-DD')}
          editable={false}
        />
       
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;