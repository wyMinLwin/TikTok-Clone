import { StyleSheet, Text, TouchableOpacity, View, Platform, StatusBar, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Camera } from 'expo-camera';
import {Audio} from 'expo-av'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useIsFocused, useNavigation } from '@react-navigation/native';

const CameraTest = () => {
    const [hasCameraPermissions,setHasCameraPermissions] = useState(false);
    const [hasAudioPermissions,setHasAudioPermissions] = useState(false);
    const [hasGalleryPermissions,setHasGalleryPermissions] = useState(false);

    const [galleryItems,setGalleryItems] = useState([]);

    const cameraRef = useRef(null);
    const [cameraType,setCameraType] = useState(Camera.Constants.Type.back);
    const [cameraFlash,setCameraFlash] = useState(Camera.Constants.FlashMode.off);
    const [isCameraReady,setIsCameraReady] = useState(false);

    useEffect(() => {
        (
          async () => {
          const cameraStatus = await Camera.requestCameraPermissionsAsync();
          setHasCameraPermissions(cameraStatus.status == 'granted');

                const audioStatus = await Audio.requestPermissionsAsync();
                setHasAudioPermissions(audioStatus.status == 'granted');

                const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
                setHasGalleryPermissions(galleryStatus.status == 'granted');

                if (galleryStatus.status == 'granted') {
                    const userMediaLibrary = await MediaLibrary.getAssetsAsync({
                        sortBy: ['creationTime'],
                        mediaType: ['video']
                    });
                    setGalleryItems(prev => prev = userMediaLibrary.assets);
                }
             }
            
        )();
    },[])
    const recordVideo = async () => {
      if (cameraRef) {
        const options = { maxDuration: 120, quality: Camera.Constants.VideoQuality['720'] }
        const videoRecordPromise = cameraRef.recordAsync(options);
        try {
          if (videoRecordPromise) {
            const data = await videoRecordPromise;
            const source = data.uri;
          }
        } catch (error) {
          console.warn(error)
        }
      }
    }
    const stopVideo = async () => {
      if (cameraRef) {
        cameraRef.stopRecording()
    }}

    if (!hasAudioPermissions || !hasCameraPermissions || !hasGalleryPermissions) {
      return (
        <View><Text>Hi</Text></View>
      )
    }

    const pickFromGallery = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [16,9],
        quality: 1,
      })
    }
    // console.log(galleryItems)

  return (
    <>
      <View style={styles.container}>
        
        <Camera 
          ref={cameraRef}
          style={styles.camera}
          ratio={'16:9'}
          type={cameraType}
          flashMode={cameraFlash}
          onCameraReady={() => (prev) => prev = true}
        />   
        <View style={styles.toolsContainer}>
          <TouchableOpacity 
          style={{alignItems:'center',justifyContent: 'center',marginVertical:5}}
                onPress={() => {
                  {
                    cameraType === 1
                    ? setCameraType(Camera.Constants.Type.front)
                    : setCameraType(Camera.Constants.Type.back)
                  }
                }}
              >
                <Feather name='refresh-ccw' size={24} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity 
            style={{alignItems:'center',justifyContent: 'center',marginVertical:5}}
                onPress={() => {
                  {console.log(cameraFlash)
                    cameraFlash === 0
                    ? setCameraFlash(Camera.Constants.FlashMode.on)
                    : setCameraType(Camera.Constants.FlashMode.off)
                  }
                }}
              >
                <FontAwesome name='bolt' size={24} color={'#fff'} />
            </TouchableOpacity>
        </View>
        <View style={styles.buttomBarContainer}>
          <View style={styles.recordButtonContainer}>
            
            <TouchableOpacity
            disabled={!isCameraReady}
            style={styles.recordButton}
            onLongPress={() => recordVideo()}
            onPressOut={() => stopVideo()}
            />
            <TouchableOpacity 
              style={styles.galleryButton}
              onPress={() => pickFromGallery()}
            >
              { galleryItems[0] == undefined ? <></>
              : <Image style={styles.galleryButtonImage} source={{uri: galleryItems[0].uri}} />
              }
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </>
  )
}

export default CameraTest

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    // paddingBottom: use
  },
  camera:{
    flex:1,
    backgroundColor: 'black',
    aspectRatio: 9/16,
  },
  buttomBarContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    marginBottom: 15,    
    
  },
  recordButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  recordButton: {
    marginHorizontal: 20,
    backgroundColor: '#ff4040',
    borderWidth: 5,
    borderRadius: '50%',
    borderColor: '#ed5f5f',
    width: 80,
    height: 80,
  },
  galleryButton: {
    // backgroundColor: '#ccc',
    borderWidth: 3,
    borderRadius: '5%',
    borderColor: '#ccc',
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
  galleryButtonImage: {
    // backgroundColor: '#ccc',
    width: 50,
    height: 50,
  },
  swapCameraButton: {
    // backgroundColor: '#ccc',
    borderWidth: 3,
    borderRadius: '50%',
    borderColor: '#ccc',
    width: 50,
    height: 50,
    
  },
  toolsContainer: {
    position: 'absolute',
    top: 70,
    right: 0,
    marginHorizontal: 15
  }
})