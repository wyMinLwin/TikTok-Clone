import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const FeedScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text className ='font-bold text-3xl'>Process in Deveopement</Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Camera')}
      ><Text>Camera</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default FeedScreen