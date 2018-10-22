import {createStackNavigator} from 'react-navigation';
import Main from './components/main';
import Home from './components/home';

const navigator = createStackNavigator(
    {
        Home: {screen: Home},
        Main: {screen: Main},
    },
    {
        headerMode: 'none'
    }
);

export default navigator;
