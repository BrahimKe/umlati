import React from 'react';
import { createAppContainer, createStackNavigator  } from 'react-navigation';

import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Camera from '../screens/Camera';
import Screen from '../screens/Screen';

const MainNavigation = createStackNavigator({
	Splash,
	Home,
	Camera,
	Screen
}, {
    initialRouteName: "Splash"
})

export default createAppContainer(MainNavigation);