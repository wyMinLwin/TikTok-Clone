import { FlatList } from 'react-native'
import React from 'react'
import PostVideo from '../components/PostVideo'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { useIsFocused } from '@react-navigation/native'

const FollowingScreen = () => {

  const isFocused = useIsFocused();
  const data = useSelector(state => state.devTestDB);
  const mediaRefs = useRef([]);
  
  const onViewableItemsChanged = useRef(({changed}) => {
    changed.forEach(element => {
      const cell = mediaRefs.current[element.index];
      if (cell) {
        if (element.isViewable && isFocused) {
          cell.play();
          cell.clearControl();   
        } else {
          cell.stop();
        }
      }
    });
  })
  
  return (
    <FlatList 
      showsVerticalScrollIndicator={false}
      windowSize={4}
      initialNumToRender={0}
      maxToRenderPerBatch={2}
      removeClippedSubviews
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70
      }}
      decelerationRate={'normal'}
      data={data}
      keyExtractor={(item) => item.video_id}
      renderItem={({item,index}) => <PostVideo video_link={item.video_link} ref={postVideoRef => (mediaRefs.current[index] = postVideoRef)} />}
      pagingEnabled
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  )
}

export default FollowingScreen