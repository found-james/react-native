import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>DeKabra</Text>
      <Button title="Go to components demo" onPress={()=> console.log("pressed")}/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
