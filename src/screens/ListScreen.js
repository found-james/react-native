import React from "react"
import {View, Text, StyleSheet, FlatList} from "react-native"

function ListScreen() {
  const friends = [
    {name: "friend one"},
    {name: "friend two"},
    {name: "friend three"},
    {name: "friend four"},
    {name: "friend five"},
    {name: "friend six"},
    {name: "friend seven"},
  ]
  return (
    <FlatList horizontal showsHorizontalScrollIndicator={false} 
      keyExtractor={(friend)=> friend.name} data={friends} 
      renderItem={({item})=> (<Text style={styles.text}>{item.name}</Text>)
    }/>
  )
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 50
  }
})

export default ListScreen