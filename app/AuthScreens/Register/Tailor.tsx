import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Tailor = () => {

    const selectedMood = AsyncStorage.getItem("Mood")

  return (
   <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

    <View>
        <Text>{selectedMood}</Text>
    </View>
   </SafeAreaView>
  )
}

export default Tailor

const styles = StyleSheet.create({})