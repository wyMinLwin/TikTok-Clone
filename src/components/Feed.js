import { FlatList } from 'react-native'
import React from 'react'
import PostVideo from '../components/PostVideo'
import Comments from './Comments'


const Feed = (props) => {
  return (
    <>
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
        data={props.data}
        keyExtractor={(item) => item.video_id}
        renderItem={({item,index}) => <PostVideo video_link={item.video_link} ref={postVideoRef => (props.mediaRefs.current[index] = postVideoRef)} />}
        pagingEnabled
        onViewableItemsChanged={props.onViewableItemsChangedRef.current}
      />
      <Comments />
    </>
  )
}

export default Feed