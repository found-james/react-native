import React from "react"
import {Text, View, StyleSheet} from "react-native"

function ComponentsScreen() {
              
    const name = "WHAT"

    return (
        <View>
              <Text style={styles.textStyle}>Getting started with React Native!</Text>
              <Text style={styles.subHeader}>My name is {name}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 20
    }
})

export default ComponentsScreen