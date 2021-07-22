import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen'
import CustomStackNavigator from '../../components/CustomStackNavigator';

const Stack = createStackNavigator()

const HomeScreenStack = ({navigation}) => {
    return (
        <CustomStackNavigator navigation={navigation}>
            <Stack.Screen name='Home' component={HomeScreen} />
        </CustomStackNavigator>
    )
}

export default HomeScreenStack
