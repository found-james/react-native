import React from "react"
import {View, Text, StyleSheet, FlatList} from "react-native"

function ListScreen() {
  const friends = [
    {name: "friend one", age: "one"},
    {name: "friend two", age: "two"},
    {name: "friend three", age: "three"},
    {name: "friend four", age: "four"},
    {name: "friend five", age: "five"},
    {name: "friend six", age: "six"},
    {name: "friend seven", age: "seven"},
  ]
  return (
    <FlatList showsHorizontalScrollIndicator={false} 
      keyExtractor={(friend)=> friend.name} data={friends} 
      renderItem={({item})=> 
        (<Text style={styles.text}>
          {item.name} - Age {item.age}
         </Text>)
    }/>
  )
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 50
  }
})

export default ListScreen