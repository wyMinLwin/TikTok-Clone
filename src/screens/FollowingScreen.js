import React from 'react'
import FeedHOC from '../components/FeedHOC'
import Feed from '../components/Feed'
import { useSelector } from 'react-redux'

const FollowingScreen = (props) => {
  const profileVideo = useSelector(state => state.profileVideo)
  
  return (
    <Feed {...props} data={[...profileVideo].reverse()}/>
  )
}

export default FeedHOC(FollowingScreen)