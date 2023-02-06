import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { fetchComponentDidMount } from './src/store/dataSlice';

import { Provider, useDispatch, useSelector } from 'react-redux';


const TikTokPost = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComponentDidMount())
  },[])

  const postToRender = useSelector( state => state.data.postToRender);

  return (
    <View>
      <Text>{typeof postToRender}</Text>
    </View>
  )
}

export default TikTokPost