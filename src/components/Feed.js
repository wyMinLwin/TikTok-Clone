import { FlatList } from 'react-native'
import React from 'react'
import PostVideo from '../components/PostVideo'
import Comments from './Comments'
import { useSelector } from 'react-redux'


const Feed = (props) => {
  const commentsShow = useSelector(state => state.commentsShow );
  return (
    <>
    {/* Video feed for user to watch */}
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
        renderItem={({item,index}) => <PostVideo user_profile={item.user_profile} video_link={item.video_link} ref={postVideoRef => (props.mediaRefs.current[index] = postVideoRef)} />}
        pagingEnabled
        onViewableItemsChanged={props.onViewableItemsChangedRef.current}
      />
      {commentsShow &&  <Comments commentsShow={commentsShow} />}
    </>
  )
}

export default Feed