import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator()

const RootStackNavigator = ({ isLoggedIn }) => {
    return (
        <Stack.Navigator headerMode={'none'}>
            {
                isLoggedIn ?
                     <Stack.Screen name={'App'} component={DrawerNavigator} options={{
                         animationEnabled: false
                     }} /> :
                    <Stack.Screen name={'Auth'} component={AuthStackNavigator} options={{
                        animationEnabled: false
                    }} />
            }
        </Stack.Navigator>
    )
}

export default RootStackNavigator
