import { FlatList } from 'react-native'
import React from 'react'
import PostVideo from '../components/PostVideo'
import { useSelector } from 'react-redux'
import { useRef, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { useCallback } from 'react'

const FollowingScreen = () => {

  const isFocused = useIsFocused();

  const data = useSelector(state => state.devTestDB);
  const mediaRefs = useRef([]);
  
  const onViewableItemsChanged = useCallback(({changed}) => {
    changed.forEach(element => {
      const cell = mediaRefs.current[element.index];
      if (cell) {
        if (element.isViewable) {
          cell.play();
          cell.clearControl();
        } else {
          cell.stop();
        }
      }
    });
  },[data]);
  const onViewableItemsChangedRef = useRef(onViewableItemsChanged)

  useEffect(() => {
    if (!isFocused) {
      mediaRefs.current.forEach((cell) => {
        if (cell) {
          cell.pause();
        }
      });
    }
  }, [isFocused]);

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
      onViewableItemsChanged={onViewableItemsChangedRef.current}
    />
  )
}

export default FollowingScreen