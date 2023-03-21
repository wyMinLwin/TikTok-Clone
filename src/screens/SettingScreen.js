import { View, Text, Pressable } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useDispatch } from 'react-redux'
import navbarShowSlice from '../store/navbarShow'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import BottomSheet from '@gorhom/bottom-sheet';
import ShareProfile from '../components/ShareProfile'


const SettingScreen = () => {
    const insets = useSafeAreaInsets();
    const modelRef = useRef(null);
    const snapPoints = useMemo(() => ['40%%'], []);
    const [modelIndex,setModelIndex] = useState(-1)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleSheetChanges = useCallback((index) => {
        if (index === -1) {
          closeModel();
        }
      }, []);
   useEffect(() => {
    dispatch(navbarShowSlice.actions.hideNavbarShow())
    return(() => {
        dispatch(navbarShowSlice.actions.showNavbarShow())
    })
   },[])
   const closeModel = useCallback(() => {
    modelRef.current.close();
    setModelIndex(prev => prev = -1);
   },[])
  return (
    <View className='h-full'>
        {/* Account */}
        <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Account</Text>
        <View>
            {/* Profile */}
            <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'
            onPress={() => navigation.navigate('EditProfileDataStack')}
            >
                <View className='flex-row justify-start items-center'>
                    <Ionicon name='person' size={18} />
                    <Text className='ml-3 font-semibold text-sm'>Profile</Text>
                </View>
                <Entypo name='chevron-right' size={24} />
            </Pressable>
            {/* Password */}
            <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'
            onPress={() => navigation.navigate('EditPasswordStack')}
            >
                <View className='flex-row justify-start items-center'>
                    <Ionicon name='ios-lock-closed' size={18} />
                    <Text className='ml-3 font-semibold text-sm'>Password</Text>
                </View>
                <Entypo name='chevron-right' size={24} />
            </Pressable>
            {/* Share Profile */}
            <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'
            onPress={() => {setModelIndex(prev => prev = 0)}}
            >
                <View className='flex-row justify-start items-center'>
                    <Ionicon name='ios-arrow-redo-sharp' size={18} />
                    <Text className='ml-3 font-semibold text-sm'>Share Profile</Text>
                </View>
                <Entypo name='chevron-right' size={24} />
            </Pressable>
        </View>
        {/* Display */}
        <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Display</Text>
        <View>
            {/* Language */}
            <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'
            onPress={() => navigation.navigate('LanguageStack')}
            >
                <View className='flex-row justify-start items-center'>
                    <Fontisto name='language' size={18} />
                    <Text className='ml-3 font-semibold text-sm'>Language</Text>
                </View>
                <Entypo name='chevron-right' size={24} />
            </Pressable>
            {/* Dark Mode */}
            <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'
            onPress={() => navigation.navigate('DarkModeStack')}
            >
                <View className='flex-row justify-start items-center'>
                    <MaterialCommunityIcons name='circle-half-full' size={18} />
                    <Text className='ml-3 font-semibold text-sm'>Dark Mode</Text>
                </View>
                <Entypo name='chevron-right' size={24} />
            </Pressable>
        </View>
        {/* Support & About */}
        <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Support & About</Text>
        <View>
            {/* FAQ */}
            <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'>
                <View className='flex-row justify-start items-center'>
                    <Fontisto name='question' size={18} />
                    <Text className='ml-3 font-semibold text-sm'>FAQ</Text>
                </View>
                <Entypo name='chevron-right' size={24} />
            </Pressable>
            {/* Terms & Policies */}
            <Pressable className='px-5 flex-row justify-between items-center bg-white rounded-md py-2'>
                <View className='flex-row justify-start items-center'>
                    <Fontisto name='info' size={18} />
                    <Text className='ml-3 font-semibold text-sm'>Terms & Policies</Text>
                </View>
                <Entypo name='chevron-right' size={24} />
            </Pressable>
        </View>
        <BottomSheet 
            ref={modelRef}
            index={modelIndex}
            enablePanDownToClose={true}
            snapPoints = {snapPoints}
            onClose = {() => {
                setModelIndex(prev => prev = -1)
            }}
        >
            <ShareProfile closeModel={closeModel} />
        </BottomSheet>

    </View>
  )
}

export default SettingScreen