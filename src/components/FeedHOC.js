import React from 'react'
import { useIsFocused, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { useRef, useEffect } from 'react'
import { useCallback } from 'react'


const FeedHOC = (PrefrenceScreen) => {
  const VideoFeed = () => {
    const isFocused = useIsFocused();
    const route = useRoute();
   

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

    return <PrefrenceScreen mediaRefs={mediaRefs} onViewableItemsChangedRef={onViewableItemsChangedRef} data={route.name === 'Public' ? data : [...data].reverse()} />
  }
  return VideoFeed
}

export default FeedHOC