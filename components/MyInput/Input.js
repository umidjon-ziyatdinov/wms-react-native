 import { StyleSheet, Text, TextInput, View } from 'react-native'
 import React from 'react'
 
 const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    const {containerStyle, inputStyle, labelStyle} = styles
   return (
     <View style={containerStyle}>
      
            <Text style={labelStyle}>{label}</Text>

       <TextInput 
       secureTextEntry={secureTextEntry}
       placeholder={placeholder}
       autoCorrect={false}
       style={inputStyle}
       value={value}
       onChangeText={onChangeText}
       />
     </View>
   )
 }
 
 export default Input
 
 const styles = StyleSheet.create({
    containerStyle: {
        height: 60,
        flexDirection: 'column',
        marginVertical: 8
        
    },
    labelStyle: {
        fontSize: 14,
        height: 18,
        marginBottom: 4,
        marginLeft: 4
    },
    inputStyle: {
        color: '#111',
        fontSize: 14,
        padding: 5,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
    }
 })