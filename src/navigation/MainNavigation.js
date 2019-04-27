import React from 'react';
import { createAppContainer, createStackNavigator  } from 'react-navigation';

import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Camera from '../screens/Camera';

const MainNavigation = createStackNavigator({
	Splash,
	Home,
	Camera
}, {
    initialRouteName: "Home"
})

export default createAppContainer(MainNavigation);