import { View, Text, Pressable } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useDispatch } from 'react-redux'
import navbarShowSlice from '../store/navbarShow'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import BottomSheet from '@gorhom/bottom-sheet';
import ShareProfile from '../components/ShareProfile'
import EditMenuButton from '../components/EditMenuButton'


const SettingScreen = () => {
    const modelRef = useRef(null);
    const snapPoints = useMemo(() => ['40%%'], []);
    const [modelIndex,setModelIndex] = useState(-1)
    const dispatch = useDispatch();
    const navigation = useNavigation();
   
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
            <EditMenuButton 
            onPress={() => navigation.navigate('EditProfileDataStack')}
            leftIcon={() => <Ionicon name='person' size={18} />}
            leftLabel={'Profile'}
            rightIcon={() => <Entypo name='chevron-right' size={24} /> }
            />
            
            {/* Password */}
            <EditMenuButton 
            onPress={() => navigation.navigate('EditPasswordStack')}
            leftIcon={() => <Ionicon name='ios-lock-closed' size={18} />}
            leftLabel={'Password'}
            rightIcon={() => <Entypo name='chevron-right' size={24} /> }
            />
            {/* Share Profile */}
            <EditMenuButton 
            onPress={() => setModelIndex(prev => prev = 0)}
            leftIcon={() => <Ionicon name='ios-arrow-redo-sharp' size={18} />}
            leftLabel={'Share Profile'}
            rightIcon={() => <Entypo name='chevron-right' size={24} /> }
            />
        </View>
        {/* Display */}
        <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Display</Text>
        <View>
            {/* Language */}
            <EditMenuButton 
            onPress={() => navigation.navigate('LanguageStack')}
            leftIcon={() => <Fontisto name='language' size={18} />}
            leftLabel={'Language'}
            rightIcon={() => <Entypo name='chevron-right' size={24} /> }
            />
            {/* Dark Mode */}
            <EditMenuButton 
            onPress={() => navigation.navigate('DarkModeStack')}
            leftIcon={() =>  <MaterialCommunityIcons name='circle-half-full' size={18} />}
            leftLabel={'Dark Mode'}
            rightIcon={() => <Entypo name='chevron-right' size={24} /> }
            />
            
        </View>
        {/* Support & About */}
        <Text className='font-bold text-md text-gray-500 p-2 mt-1'>Support & About</Text>
        <View>
            {/* FAQ */}
            <EditMenuButton 
            leftIcon={() =>  <Fontisto name='question' size={18} />}
            leftLabel={'FAQ'}
            rightIcon={() => <Entypo name='chevron-right' size={24} /> }
            />
            
            {/* Terms & Policies */}
            <EditMenuButton 
            leftIcon={() =>  <Fontisto name='info' size={18} />}
            leftLabel={'Terms & Policies'}
            rightIcon={() => <Entypo name='chevron-right' size={24} /> }
            />
            
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