import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../../screens/CartScreen';
import CustomStackNavigator from '../../components/CustomStackNavigator';

const Stack = createStackNavigator()

const CartScreenStack = ({navigation}) => {
    return (
        <CustomStackNavigator navigation={navigation} >
            <Stack.Screen name='My Cart' component={CartScreen} />
        </CustomStackNavigator>
    )
}

export default CartScreenStack