import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator()

const AppStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='AppHome'>
            <Stack.Screen name={'AppHome'} component={DrawerNavigator} />
        </Stack.Navigator>
    )
}

export default AppStackNavigator
