import React from 'react'
import FeedHOC from '../components/FeedHOC'
import Feed from '../components/Feed'

const PublicScreen = (props) => {

  return (
    <>
     <Feed {...props} />
    </>
  )
}

export default FeedHOC(PublicScreen)