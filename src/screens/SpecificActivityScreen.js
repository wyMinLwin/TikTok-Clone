import { View } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Activities from '../components/Activities'

const SpecificAcitivityScreen = () => {
    const {activity_type} = useRoute().params;
    
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle:activity_type
        })
    });

    const activities = useSelector(state => state.activities.recent_activities)
    const SpecificAcitivities = activities.filter( activity => activity.activity_type === activity_type.toString().toLowerCase())
    
  return (
    <View className='px-2'>
      <Activities activities={SpecificAcitivities} />
    </View>
  )
}

export default SpecificAcitivityScreen