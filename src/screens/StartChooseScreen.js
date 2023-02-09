import { View, Text, SafeAreaView, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import CategoryButton from '../components/CategoryButton'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const StartChooseScreen = () => {
    const [modelVisible,setModelVisible] = useState(true);
    const categories = useSelector(state => state.categories);

    const selectedItemReducer = (state,action) => {
        switch (action.type) {
            case 'ADD_CATEGORY_ITEM':
                return [...state,action.payload];
                
            case 'REMOVE_CATEGORY_ITEM':
                return state.filter( item => item !== action.payload);
        
            default:
                return state;
        }
    }

    const [selectedItem,dispatchSelectedItem] = useReducer(selectedItemReducer,[]);
    
    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View className='h-full'>
            {/* Header */}
            <View className='p-5 pb-0'>
                <View>
                    <Text className='text-3xl font-bold whitespace-normal'>Choose your</Text>
                </View>
                <View className='mt-3'>
                    <Text className='text-3xl font-bold whitespace-normal'>Passions</Text>
                </View>
            </View>

            {/* recommendations */}
            <View className='pl-5 mt-3'>
                <View className=''>
                    <Text className='text-2xl font-extralight whitespace-normal'>For better video</Text>
                </View>
                <View className=''>
                    <Text className='text-2xl font-extralight whitespace-normal'>recommendations</Text>
                </View>
            </View>

            {/* category buttons */}
            <View className='pl-5 mt-3 flex-row flex-wrap'>
                {categories.map(item => <CategoryButton dispatchSelectedItem={dispatchSelectedItem} key={item} title={item} />)}
            </View>
            
           {/* skip and next */}
            <View className='flex-row justify-center mt-auto p-5 pb-1' style={{borderTopWidth:1,marginTop:'auto'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Swipe')} className={`${selectedItem.length > 0 ? 'w-6/12 ' :'w-4/5 '} mx-1 p-2 justify-center items-center`}  style={{borderWidth:1}}><Text className='font-normal text-lg'>Skip</Text></TouchableOpacity>
                {selectedItem.length > 0 && <TouchableOpacity onPress={() => navigation.navigate('Swipe')} className='w-6/12 mx-1 p-2 justify-center items-center' style={{borderWidth:1}}><Text className='font-normal text-lg'>Next</Text></TouchableOpacity>}
            </View>      
        </View>
        
        {/* Agree and continue model */}
        <Modal  transparent={true} visible={modelVisible}>
            <View className='justify-center items-center align-middle flex-1' style={{backgroundColor:'#000000aa'}}>
                <View className='rounded-lg m-10 p-5 ' style={{backgroundColor:'#fff'}}>
                    <View className='border-b-2 p-2'>
                        <Text className='text-lg font-light'>Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</Text>
                    </View>
                    <TouchableOpacity className='p-2 justify-center items-center' 
                    onPress={() => setModelVisible(prev => !prev)}
                    >
                        <Text className='font-semibold text-lg'>Agree & Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>   
    </SafeAreaView>
  )
}

export default StartChooseScreen