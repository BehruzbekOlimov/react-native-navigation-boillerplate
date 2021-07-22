import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator()

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'SignIn'} component={SignInScreen} />
            <Stack.Screen name={'SignUp'} component={SignUpScreen} />
        </Stack.Navigator>
    )
}

export default AuthStackNavigator