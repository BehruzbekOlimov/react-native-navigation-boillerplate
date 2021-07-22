import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

const HomeScreen = ({navigation}) => {

    return (
        <View>
            <Text>
                Home Screen
            </Text>
            <Button mode='contained' onPress={()=>navigation.toggleDrawer()} >
                Toggle
            </Button>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
