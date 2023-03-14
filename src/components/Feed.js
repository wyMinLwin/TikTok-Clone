import { FlatList } from 'react-native'
import React, { useEffect, useRef } from 'react'
import PostVideo from '../components/PostVideo'
import { useSelector } from 'react-redux'

const Feed = (props) => {
  const navbarStatus = useSelector(state => state.navbarShow);
  
  return (
    <>
    {/* Video feed for user to watch */}
      <FlatList 
        scrollEnabled={!navbarStatus}
        showsVerticalScrollIndicator={false}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={2}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70
        }}
        decelerationRate={'normal'}
        data={props.data}
        keyExtractor={(item) => item.video_id}
        renderItem={({item,index}) => <PostVideo backButton={props.backButton} item={item} ref={postVideoRef => (props.mediaRefs.current[index] = postVideoRef)} />}
        pagingEnabled
        onViewableItemsChanged={props.onViewableItemsChangedRef.current}
      />
      
    </>
  )
}

export default Feed