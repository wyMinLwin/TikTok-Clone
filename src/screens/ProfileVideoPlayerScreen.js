import React from 'react'
import { useRoute } from '@react-navigation/native';
import FeedHOC from '../components/FeedHOC';
import Feed from '../components/Feed';

const ProfileVideoPlayerScreen = (props) => {
  const {allVideo} = useRoute().params;
    
  return (
    <>
      <Feed {...props} data={allVideo} />
    </>
  )
}

export default FeedHOC(ProfileVideoPlayerScreen,"PROFILE")