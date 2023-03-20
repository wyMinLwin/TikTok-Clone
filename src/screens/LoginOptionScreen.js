import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import CreateAccountButton from '../components/CreateAccountButton'
import { useNavigation } from '@react-navigation/native'

const LoginOptionScreen = () => {
    const loginOption = useSelector(state => state.loginOption);
    const navigatin = useNavigation()
  return (
    <SafeAreaView>
      <View className='w-full h-full'>
        <View className='mx-auto my-auto'>
            <Text className=' mx-auto font-bold text-2xl'>Welcome To TapTok</Text>

            {/* Create account buttons */}
            <FlatList 
            ListHeaderComponent={() => (
                <Text className='font-light text-sm mx-auto mt-10 mb-3'>Create your Account</Text>
            )}
            data={loginOption}
            keyExtractor={(item,index) => item.name}
            renderItem={(item) => <CreateAccountButton data={item.item} />}
            ListFooterComponent={() => (
                <View className='mx-auto w-full'>
                    <Text className='font-light text-sm mx-auto mt-3 mb-3'>OR</Text>
                    <TouchableOpacity className='w-full p-1 border-2 mb-3 mx-auto rounded-sm'
                    onPress={() => navigatin.navigate('Choose Categories')}
                    style= {{
                        borderColor:'#9f9f9f',
                    }}
                    >
                        <Text style={{color:'#9f9f9f'}} className='font-semibold mx-auto text-lg'>Continue as Guest</Text>
                    </TouchableOpacity>
                    <Text className='w-10/12 text-center font-extralight text-sm mx-auto'>blah blah blah blah blah blah blah blah blah blah blah blah</Text>
                </View>
            )}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginOptionScreen