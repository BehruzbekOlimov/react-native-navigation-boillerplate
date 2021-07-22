import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import HomeScreenStack from './screen-navigators/HomeScreenStack';
import CategoryScreenStack from './screen-navigators/CategoryScreenStack';
import CartScreenStack from './screen-navigators/CartScreenStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen name='Home' component={HomeScreenStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="home" color={color} size={size} />
                )
            }} />
            <Tab.Screen name='Category' component={CategoryScreenStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="category" color={color} size={size} />
                ),
                title: 'Category'
            }} />
            <Tab.Screen name='My Cart' component={CartScreenStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="shopping-cart" color={color} size={size} />
                ),
                title: 'My Cart'
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator
