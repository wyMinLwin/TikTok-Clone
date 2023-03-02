import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useEffect } from 'react'


const BottomContentContainer = (props) => {
    const insets = useSafeAreaInsets();
    const [showFullText,setShowFullText] = useState(false);
    const [showButton,setShowButton] = useState(false);
    const [numberOfLines,setNumberOfLines] = useState(null)
    useEffect(() => {
        if (numberOfLines) {
            setShowButton(true)
        }
    },[numberOfLines])
    
  return (
    <View className='absolute left-2 right-2' style={{bottom:(60+insets.bottom)}}>
        <View>
            <Text className='text-base font-bold text-white'>{props.user_name}</Text>
        </View>
        {/* Video caption container and rounded music */}
      <View className='w-full d-flex flex-row justify-between items-baseline'>
        <Text
            onTextLayout={event => {
                const { lines } = event.nativeEvent;
                if (lines.length > 2) {
                    setNumberOfLines(2)
                }
              }}
         numberOfLines= {showFullText ? null : numberOfLines} ellipsizeMode='tail' className='w-9/12 text-base text-white font-semibold'
        >
       {props.video_title}
        </Text>
        <Image source={{uri:props.user_profile}} className='w-12 h-12 rounded-full' />
      </View>
      {showButton && <Pressable onPress={() => setShowFullText(prev => !prev)} ><Text className='text-base font-semibold text-gray-400'>{!showFullText ? 'See more' :'See less'}</Text></Pressable>}
    </View>
  )
}

export default BottomContentContainer