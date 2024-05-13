import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const MenuItem = (props) => {
  return (
    <View style={styles.itemContainer} key={props?.item.name}>
      <Pressable
        onPress={() => props.navigation.navigate(props?.item.route)}
        android_ripple={{ color: "#1d7fe0" }}
        style={({ pressed }) =>
          pressed
            ? { ...styles.pressStyle, ...styles.pressedItem }
            : styles.pressStyle
        }
      >
        <Text style={styles.textStyle}>{props.item?.name}</Text>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,

    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    height: 100,
    alignItems: "center",
    backgroundColor: "#03578f",
  },
  pressedItem: {
    opacity: 0.5,
  },
  pressStyle: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  textStyle: {
    padding: 20,
    flex: 1,
    color: "white",
    fontSize: 20,
  },
});
