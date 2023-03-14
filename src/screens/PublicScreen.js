import React from 'react'
import FeedHOC from '../components/FeedHOC'
import Feed from '../components/Feed'
import { useSelector } from 'react-redux'

const PublicScreen = (props) => {
  const profileVideo = useSelector(state => state.profileVideo)
  
  return (
    <Feed {...props} data={profileVideo}/>
  )
}

export default FeedHOC(PublicScreen)