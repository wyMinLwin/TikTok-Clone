import { FlatList, View } from 'react-native'
import React from 'react'
import PostVideo from '../components/PostVideo'
import { useSelector } from 'react-redux'


const PublicScreen = () => {
  const data = useSelector(state => state.devTestDB);
  return (
    <FlatList 
      data={data}
      keyExtractor={(item) => item.video_id}
      renderItem={({item}) => <PostVideo video_link={item.video_link}/>}
      pagingEnabled
    />
  )
}

export default PublicScreen