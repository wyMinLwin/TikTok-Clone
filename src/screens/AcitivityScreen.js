import { View, Text } from 'react-native'
import React from 'react'
import ActivitiesToolContainer from '../components/ActivitiesToolContainer'
import Activities from '../components/Activities'
import { useSelector } from 'react-redux'

const AcitivityScreen = () => {
  const recentActivities = useSelector(state => state.activities.recent_activities);

  return (
    <View className='w-full h-full bg-white px-2'>
      <ActivitiesToolContainer />
      <View className='flex-1 h-full w-full'> 
        <Text className='font-semibold text-sm'>Recent Activities</Text>
        <Activities activities={recentActivities} />
      </View>
    </View>
  )
}

export default AcitivityScreen