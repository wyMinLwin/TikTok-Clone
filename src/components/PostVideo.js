import { View, Dimensions, Pressable, } from 'react-native'
import React,{ useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { Video, Audio } from 'expo-av'
import Ionicon from 'react-native-vector-icons/Ionicons'
import ToolsContainer from './ToolsContainer'
import Comments from './Comments'
import navbarShowSlice from '../store/navbarShow'
import { useDispatch, useSelector } from 'react-redux'
import BottomContentContainer from './BottomContentContainer'
import { useNavigation } from '@react-navigation/native'


const PostVideo = forwardRef((props,parentRef) => {
  const navbarStatus = useSelector(state => state.navbarShow);
  const naviagtion = useNavigation();
  const dispatch = useDispatch();
  const [commentsBoxVisibility,setCommentsBoxVisibility] = useState(navbarStatus);
  const controlCommentsBoxVisibility = () => {
    setCommentsBoxVisibility(prev => !prev);
    dispatch(navbarShowSlice.actions.controlNavbarShow());
  }
  
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

  // function to pause the video when user swipe tab
  const pause = async () => {
    if (videoRef.current === null) {
      return
    }
    const status = await videoRef.current.getStatusAsync();

    if (!status?.isPlaying) return;

    try {
      await videoRef.current.pauseAsync();
      setPaused(prev => prev = true);

    } catch (err) {
      console.log(err)
    }
  }
  
  //funtion to control pause and resume on press 
  const controlVideo = () => {
    !paused ? videoRef.current.pauseAsync() : videoRef.current.playAsync();
    setPaused(prev => !prev);
  }
  
  // to handle video from feed
  useImperativeHandle(parentRef, () => ({
    play,
    stop,
    unload,
    clearControl,
    pause,
  }))

  useEffect(() => {
    return () => unload();
  },[])
  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);
  return (
    <>
      <Pressable  onPress={() => controlVideo()} >      
        <View className='bg-black' style={{width:'100%',height:Dimensions.get('window').height}}>

          {
            props.backButton ? 
            <Pressable className='absolute top-12 left-0 p-1 z-30'
            onPress={() => naviagtion.goBack()}
            >
              <Ionicon name='chevron-back' size={30} color="#fff"/>
            </Pressable>
            : <></>
          }
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
            source={props.item.video_link}
            resizeMode={props.item.size}
            shouldPlay={false}
          />

          {commentsBoxVisibility &&  <Comments controlCommentsBoxVisibility={controlCommentsBoxVisibility} commentsBoxVisibility={commentsBoxVisibility} />}
          <ToolsContainer controlCommentsBoxVisibility={controlCommentsBoxVisibility} user_profile={props.item.user_profile} />
          <BottomContentContainer video_title={props.item.video_title} user_name={props.item.user_name} user_profile={props.item.user_profile} />
        </View>
      </Pressable>
    </>
  )
})

export default PostVideo