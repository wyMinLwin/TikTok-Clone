import { Provider} from 'react-redux';
import RootNavigator from './src/routes/RootNavigator';
// import CameraTest from './CameraTest';
import StartChooseScreen from './src/screens/StartChooseScreen';
import StartScreen from './src/screens/StartScreen';
import StartSwipe from './src/screens/StartSwipe';
import store from './src/store';
import { fetchComponentDidMount } from './src/store/dataSlice';


export default function App() {
  
  return (
    <>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </>
    
  );
}

