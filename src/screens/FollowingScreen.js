import React from 'react'
import FeedHOC from '../components/FeedHOC'
import Feed from '../components/Feed'

const FollowingScreen = (props) => {
  
  
  return (
    <Feed {...props} />
  )
}

export default FeedHOC(FollowingScreen)