import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../../screens/CategoryScreen';

const Stack = createStackNavigator()

const CategoryScreenStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Category' component={CategoryScreen} />
        </Stack.Navigator>
    )
}

export default CategoryScreenStack
