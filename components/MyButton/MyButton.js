import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyButton =  ({
    onPress,
    onLongPress,
    title,
    iconLeft,
    iconRight,
    style,
    textStyle,
    disabled,
    activeOpacity,
    loading,
  }) => {
  return (
    <Pressable
    onPress={onPress}
    onLongPress={onLongPress}
    disabled={disabled}
    android_ripple={{color: 'grey'}}
    style={[disabled ? styles.disabledButton : styles.button, style]}
  >
    {iconLeft}
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    )}
    {iconRight}
  </Pressable>
  )
}

export default MyButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#42a5f5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: 'grey',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        // Add any additional styles or override default styles here
      },
})