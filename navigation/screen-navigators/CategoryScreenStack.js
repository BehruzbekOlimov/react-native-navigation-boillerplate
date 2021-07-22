import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../../screens/CategoryScreen';
import CustomStackNavigator from '../../components/CustomStackNavigator';

const Stack = createStackNavigator()

const CategoryScreenStack = ({navigation}) => {
    return (
        <CustomStackNavigator navigation={navigation}>
            <Stack.Screen name='Category' component={CategoryScreen} />
        </CustomStackNavigator>
    )
}

export default CategoryScreenStack
