import {createStackNavigator} from 'react-navigation';
import Main from './components/main';
import Home from './components/home';
import Chat from './components/chat';

const navigator = createStackNavigator(
    {
        Home: {screen: Home},
        Main: {screen: Main},
        Chat: {screen: Chat},
    },
    {
        headerMode: 'none'
    }
);

export default navigator;
