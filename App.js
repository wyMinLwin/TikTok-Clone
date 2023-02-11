import { StatusBar } from 'react-native';
import { Provider} from 'react-redux';
import RootNavigator from './src/routes/RootNavigator';
// import CameraTest from './CameraTest';
import store from './src/store';
// import { fetchComponentDidMount } from './src/store/dataSlice';


export default function App() {
  
  return (
    <>
      <Provider store={store}>
        <StatusBar />
        <RootNavigator />
      </Provider>
    </>
    
  );
}

