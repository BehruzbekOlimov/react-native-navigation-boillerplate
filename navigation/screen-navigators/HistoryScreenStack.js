import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from '../../screens/HistoryScreen';
import CustomStackNavigator from '../../components/CustomStackNavigator';

const Stack = createStackNavigator()

const HistoryScreenStack = ({navigation}) => {
    return (
        <CustomStackNavigator navigation={navigation}>
            <Stack.Screen name='History' component={HistoryScreen} />
        </CustomStackNavigator>
    )
}

export default HistoryScreenStack