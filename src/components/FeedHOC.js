import React, { useRef, useEffect, useCallback } from 'react'
import { useIsFocused, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux'

const FeedHOC = (PrefrenceScreen) => {
  const VideoFeed = () => {
    const isFocused = useIsFocused();
    const route = useRoute();
   

    const data = useSelector(state => state.devTestDB);
    const mediaRefs = useRef([]);

    // This is to play the video when user scroll out of a video it pause and play new one 
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

    // This side effect work everytime user swipe taba and I would stop the current video
    useEffect(() => {
        if (!isFocused) {
        mediaRefs.current.forEach((cell) => {
            if (cell) {
            cell.pause();
            }
        });
        }
    }, [isFocused]);

    return <PrefrenceScreen mediaRefs={mediaRefs} onViewableItemsChangedRef={onViewableItemsChangedRef} data={route.name === 'Public' ? data : [...data].reverse()} />
  }
  return VideoFeed
}

export default FeedHOC