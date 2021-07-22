import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import HistoryScreenStack from './screen-navigators/HistoryScreenStack';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName='Shop' >
            <Drawer.Screen name='Shop' component={BottomTabNavigator} />
            <Drawer.Screen name='History' component={HistoryScreenStack} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
