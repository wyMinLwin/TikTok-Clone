import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import commentsShowSlice from '../store/commentsShowSlice'
import { useDispatch } from 'react-redux'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react'

const Comments = () => {
    const dispatch = useDispatch();
    const commentsShow = useSelector(state => state.commentsShow );
    const popup = useSharedValue(10000);

    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateY:popup.value}]
        }
    });

    useEffect(() => {
        popup.value = withTiming(1,{duration:2000});
        return () => {
            popup.value = withTiming(10000, {duration:2000})
        }
    })
    
  return (
    commentsShow && 
    <>
   <Animated.View className=' w-screen h-screen absolute top-0 right-0 bottom-0 left-0' style={[{flex:1},reanimatedStyle]} >
        <Pressable className='z-30 w-screen h-screen' onPress={() => dispatch(commentsShowSlice.actions.controlCommentsShow())} >
        </Pressable>
        <View className = 'z-40 w-screen h-2/3 bg-white absolute bottom-0 left-0 right-0 rounded-t-3xl'>
        </View>
   </Animated.View>
    
    </>
  )
}

export default Comments