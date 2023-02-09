import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


const StartScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Choose Categories');
        },1500);
        return () => {
            clearTimeout(timer);
        }
    },[])
    
  return (
    <SafeAreaView>
        <View className='p-5 h-screen'>
            <View className=''>
                <Text className='text-3xl font-bold whitespace-normal'>Start your Journey</Text>
            </View>
            <View className='mt-3'>
                <Text className='text-3xl font-bold whitespace-normal'>With Creations!!!</Text>
            </View>
        </View>
            <View className="absolute bottom-40 left-5 justify-center items-center rounded-full" style={{backgroundColor:'#00008B',width:100,height:100}}>
                <Ionicon name='ios-musical-note' size={90} color='#fff' />
            </View>
        
    </SafeAreaView>
  )
}

export default StartScreen