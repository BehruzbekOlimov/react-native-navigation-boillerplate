import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

const HistoryScreen = ({navigation}) => {
    return (
        <View>
            <Text>
                History Screen
            </Text>
            <Button mode='contained' onPress={()=>navigation.toggleDrawer()} >
                Toggle
            </Button>
        </View>
    )
}

export default HistoryScreen

const styles = StyleSheet.create({})
