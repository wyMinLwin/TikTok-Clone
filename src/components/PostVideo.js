import { View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'
import { useState } from 'react'
import { useRef } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useEffect } from 'react'
import ToolsContainer from './ToolsContainer'
import { forwardRef } from 'react'
import { useImperativeHandle } from 'react'

const PostVideo = forwardRef((props,parentRef) => {
  
  const [paused,setPaused] = useState(false);
  const videoRef = useRef(null);
  
  // function to play the video
  const play = async () => {
    if (videoRef.current === null) {
      return
    }
    const status = await videoRef.current.getStatusAsync();

    if (status?.isPlaying) return;

    try {
      await videoRef.current.playAsync();
    } catch (err) {
      console.log(err)
    }
  }

  //function to stop the video
  const stop = async () => {
    if (videoRef.current === null) {
      return
    }
    const status = await videoRef.current.getStatusAsync();

    if (!status?.isPlaying) return;

    try {
      await videoRef.current.stopAsync();

    } catch (err) {
      console.log(err)
    }
  }

    //function to unload the video
    const unload = async () => {
    if (videoRef.current === null) {
      return
    }
    
    try {
      await videoRef.current.unloadAsync();

    } catch (err) {
      console.log(err)
    }
  }
  const clearControl = () => {
    setPaused(false);
  }

  useImperativeHandle(parentRef, () => ({
    play,
    stop,
    unload,
    clearControl
  }))
  
  const controlVideo = () => {
    !paused ? videoRef.current.pauseAsync() : videoRef.current.playAsync();
    setPaused(prev => !prev);
  }
  
  useEffect(() => {
    return () => unload();
  },[])
  
  return (
    <Pressable  onPress={() => controlVideo()} >      
      <View style={{width:'100%',height:Dimensions.get('window').height}}>
        {/* pause button */}
        {!paused ? <></> 
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
          source={props.video_link}
          resizeMode='stretch'
          shouldPlay={false}
          // onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <ToolsContainer />
      </View>
    </Pressable>
  )
})

export default PostVideo