import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

  return (
    <View>
      <Text style={styles.text}>DeKabra</Text>
      <Button title="Go to components demo" onPress={()=> props.navigation.navigate("Components")}/>
      <TouchableOpacity onPress={()=> console.log("touchableOpButton")}>
          <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
