import React from "react"
import {Text, View, StyleSheet} from "react-native"

function ComponentsScreen() {
              
    const subHeader = <Text style={styles.subHeader}>My name is WHAT</Text>

    return (
        <View>
              <Text style={styles.textStyle}>Getting started with React Native!</Text>
              {subHeader}
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