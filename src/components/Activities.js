import { View, FlatList } from 'react-native'
import React from 'react'
import Noti from './Noti';

const Activities = (props) => {
    
  return (
    <View className='w-full h-full'>
      <FlatList 
      showsVerticalScrollIndicator={false}
      data={props.activities}
      keyExtractor={(item) => item._id}
      renderItem={(item) => {    
        return (
            <Noti data={item.item} />
        )
      }}
      />
    </View>
  )
}

export default Activities