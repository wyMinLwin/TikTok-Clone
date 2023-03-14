import { ScrollView, View,Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfileData from '../components/ProfileData'
import { Video } from 'expo-av'
import { useSelector } from 'react-redux'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [videoType,setVideoType] = useState('post')
  const profileVideo = useSelector(state => state.profileVideo);
  const [videoToRender,setVideoToRender] = useState([]);
  useEffect(() => {
    setVideoToRender(prev => {
      return profileVideo.filter(video => video.type === videoType)
    })
  },[videoType])
  
  return (
    <View className='bg-white px-2 w-full h-screen'>
        <FlatList   
          numColumns={4}
          data={videoToRender}
          keyExtractor={(item,index) => item.video_id}
          ListHeaderComponent = {
            <ProfileData setVideoType={setVideoType} />
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
    </View>
  )
}

export default ProfileScreen