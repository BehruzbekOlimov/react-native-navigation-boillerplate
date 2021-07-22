import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../../screens/CartScreen';

const Stack = createStackNavigator()

const CartScreenStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='My Cart' component={CartScreen} />
        </Stack.Navigator>
    )
}

export default CartScreenStack