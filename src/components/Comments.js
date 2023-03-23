import { View, Text, Pressable } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import { useRef } from 'react'
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';

const Comments = (props) => {
    const commentsBoxRef = useRef(null);
    const snapPoints = useMemo(() => ['50%', '70%'], []);

    const handleSheetChanges = useCallback((index) => {
        if (index === -1) {
            props.controlCommentsBoxVisibility();
        }
      }, []);
    
  return (
    
    <>
        <View className='w-screen h-screen absolute top-0 right-0 bottom-0 left-0 flex-1 z-40'>
            <Pressable className='w-screen h-screen' onPress={() => {
                commentsBoxRef.current.close();
                props.controlCommentsBoxVisibility()
                }}></Pressable>
            <BottomSheet
                enablePanDownToClose={true}
                ref={commentsBoxRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                {/* For no comment */}
                <View className='flex-1 justify-center items-center'> 
                    <Entypo name='message' size={90} color='#e4e6e3' />
                    <Text className='font-light text-xl' style={{color:'#e4e6e3'}}>Be the first comment</Text>
                </View>

                {/* Comment input and submit */}
                <View className='flex-row justify-center items-center mt-auto p-5 border-black' style={{borderTopWidth:1}}>
                    <View  className='flex-1 ml-3'> 
                        <BottomSheetTextInput placeholder='Write a comment..' />
                    </View>
                    <View className='mr-3 pl-3 border-black' style={{borderLeftWidth:1}}>
                        <FontAwesome name='send' size={20} />
                    </View>
                </View>         
            </BottomSheet>
        </View>
    </>
  )
}

export default Comments