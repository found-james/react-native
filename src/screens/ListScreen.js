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
    <FlatList keyExtractor={(friend)=> friend.name} data={friends} renderItem={({item})=> {
      return <Text>{item.name}</Text>
    }}/>
  )
}

const styles = StyleSheet.create({})

export default ListScreen