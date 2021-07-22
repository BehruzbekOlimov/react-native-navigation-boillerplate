import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacity, View } from 'react-native';

const Stack = createStackNavigator()

const CustomStackNavigator = ({ children, navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}
                    style={{
                        paddingHorizontal: 16
                    }} >
                    <Icon name='menu' size={24} />
                </TouchableOpacity>
            ),
        }} >
            {children}
        </Stack.Navigator>
    )
}

export default CustomStackNavigator

