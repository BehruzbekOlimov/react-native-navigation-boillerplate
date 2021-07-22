import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Button, Text} from 'react-native-paper'

const SignInScreen = () => {
    return (
        <View>
            <Text>
                SignInScreen
            </Text>
            <Button icon='login' color={'#f50'} theme={'dark'} mode={'contained'} style={{width: '50%'}} onPress={()=>console.log('Pressed')} >
                Sign In
            </Button>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({})