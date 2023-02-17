import { View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'
import { useState } from 'react'
import { useRef } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useEffect } from 'react'
import ToolsContainer from './ToolsContainer'

const PostVideo = ({video_link}) => {
  
  const [status,setStatus] = useState({});
  const videoRef = useRef();
  const controlVideo = () => {
    status.isPlaying ? videoRef.current.pauseAsync() : videoRef.current.playAsync();
  }

  return (
    <Pressable onPress={() => controlVideo()}>      
      <View style={{width:'100%',height:Dimensions.get('window').height}}>
        {/* pause button */}
        {status.isPlaying ? <></> 
        : <View 
        style={{shadowColor: "#000000",shadowOffset: {width: 2,height: 3,},shadowOpacity:  0.76,shadowRadius: 3.51,elevation: 3}}
        className='flex-1 justify-center items-center z-20 opacity-25'><Ionicon name='play' size={90} color='#fff' /></View> 
        }
        
        {/* video for user */}
        <Video 
          audioPan={1}
          ref={videoRef}
          style={{position:'absolute',top:0,right:0,bottom:0,left:0,aspectRatio:16/9}}
          isLooping
          source={video_link}
          resizeMode='stretch'
          shouldPlay={true}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <ToolsContainer />
      </View>
    </Pressable>
  )
}

export default PostVideo