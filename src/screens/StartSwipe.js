import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import firstTimeSlice from '../store/firstTimeSlice'



const StartSwipe = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
        <View className='h-full'>
          {/* header */}
          <View className='p-5 pb-0'>
              <View className=''>
                  <Text className='text-3xl font-bold whitespace-normal'>Swipe Up & Down</Text>
              </View>
              <View className='mt-3'>
                  <Text className='text-3xl font-bold whitespace-normal'>to watch </Text>
              </View>
          </View>

          <View className='pl-5 mt-3'>
            <View className=''>
                <Text className='text-2xl font-extralight whitespace-normal'>Video recommendations are based on your watch, Like & Share</Text>
            </View>
          </View>
          
          {/* swipe animation */}
          <View className='w-screen h-full justify-center items-center'>
            <Image className='mb-20 z-0' source={require('../assets/images/device-01.png')} />
            <Image className='absolue bottom-96 rotate-180 h-36 w-36 z-10' source={require('../assets/images/swipe.gif')} />
          </View>
          
          <View className='py-3 px-5 mx-5 mt-auto' style={{backgroundColor:'#00008B'}} >
            <TouchableOpacity className='justify-center items-center' onPress={() => dispatch(firstTimeSlice.actions.changeNotFirstTime())}>
              <Text className='text-lg ' style={{color:'#fff'}}>Start Watching</Text>
            </TouchableOpacity>
          </View>
        </View>       
    </SafeAreaView>
  )
}

export default StartSwipe