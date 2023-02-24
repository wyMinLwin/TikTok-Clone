import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useEffect, useCallback } from 'react'
import commentsShowSlice from '../store/commentsShowSlice'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useDispatch } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'


const Comments = () => {
    
    const dispatch = useDispatch();
    const popup = useSharedValue(50);
    
    // This function to control comments box visibility
    const controlCommentsVisibility = useCallback(() => {    
        popup.value = withTiming(50,{duration:100});
        dispatch(commentsShowSlice.actions.controlCommentsShow());
    },[])

    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateY:popup.value}]
        }
    },[]);

    useEffect(() => {
        popup.value = withTiming(0,{duration:120});
    },[])
    
  return (
    
    <>
        <Animated.View className=' w-screen h-screen absolute top-0 right-0 bottom-0 left-0' style={[{flex:1},reanimatedStyle]} >
                <Pressable className='z-30 w-screen h-screen' onPress={() => controlCommentsVisibility()} >
                </Pressable>
                <View className = 'z-40 w-screen h-2/3 bg-white absolute bottom-0 left-0 right-0 rounded-t-3xl'>
                    {/* If the is no comments show this */}

                    <View className='flex-1 justify-center items-center'> 
                        <Entypo name='message' size={90} color='#e4e6e3' />
                        <Text className='font-light text-xl' style={{color:'#e4e6e3'}}>Be the first comment</Text>
                    </View>

                    <View className='flex-row justify-center items-center mt-auto p-5 border-black' style={{borderTopWidth:1}}>
                        <TextInput 
                        className='flex-1 ml-3'
                        placeholder='Write a comment..'
                        />
                        <View className='mr-3 pl-3 border-black' style={{borderLeftWidth:1}}>
                            <FontAwesome name='send' size={20} />
                        </View>
                    </View>
                </View>
        </Animated.View> 
    </>
  )
}

export default Comments