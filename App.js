import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import CameraTest from './CameraTest';
import store from './src/store';
import { fetchComponentDidMount } from './src/store/dataSlice';
import TikTokPost from './TikTokPost';


export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchComponentDidMount())
  // },[])

  return (
    // <>
      <Provider store={store}>
        <CameraTest />
      </Provider>
    // </>
    
  );
}

