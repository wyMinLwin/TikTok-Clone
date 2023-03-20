import { View,Pressable, FlatList } from 'react-native'
import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import ProfileData from '../components/ProfileData'
import { Video } from 'expo-av'
import { useDispatch, useSelector } from 'react-redux'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import ProfilePicVidUpload from '../components/ProfilePicVidUpload'
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import navbarShowSlice from '../store/navbarShow'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const uploadModelRef = useRef(null);
  const [videoType,setVideoType] = useState('post')
  const profileVideo = useSelector(state => state.profileVideo);
  const [videoToRender,setVideoToRender] = useState([]);
  const snapPoints = useMemo(() => ['30%%'], []);
  const [profilePicVidUpload,setProfilePicVidUpload] = useState(false);
  const closeModel = useCallback(() => {
    setProfilePicVidUpload(prev => prev=false)
    dispatch(navbarShowSlice.actions.showNavbarShow())
  },[])
  const handleSheetChanges = useCallback((index) => {
    if (index === -1) {
      closeModel();
    } 
  }, []);
  
  useEffect(() => {
    setVideoToRender(prev => {
      return profileVideo.filter(video => video.type === videoType)
    })
  },[videoType])

  
  return (
    <View className='w-full flex-1'>
        <FlatList   
          numColumns={4}
          data={videoToRender}
          keyExtractor={(item,index) => item.video_id}
          ListHeaderComponent = {
            <ProfileData videoType={videoType} setVideoType={setVideoType} setProfilePicVidUpload={setProfilePicVidUpload} />
          }
          renderItem={(item,index) => (
          <>
              <Pressable 
              onPress={() => navigation.navigate('ProfileVideoPlayerStack',{
                allVideo:[{...item.item,video_id:Date()},...videoToRender]
              })}
              className='relative w-1/4 h-fit bg-black backdrop-blur-2xl ' key={item.item.video_id}>
                <Video 
                  isMuted
                  shouldPlay
                  isLooping
                  className='w-full'
                  style={{aspectRatio:9/16}}
                  source={item.item.video_link}
                  />
                  <View className='bottom-2 right-1 absolute rotate-90'>
                    <Feather name='triangle' size={14} color='white' />
                  </View>
              </Pressable>      
          </>
          )}
        />
        {
          profilePicVidUpload &&
          <BottomSheet
          enablePanDownToClose={true}
          index={0}
          ref = {uploadModelRef}
          snapPoints = {snapPoints}
          onChange= {handleSheetChanges}
          >
            <ProfilePicVidUpload closeModel={closeModel} />
          </BottomSheet>
        }
    </View>
  )
}

export default ProfileScreen