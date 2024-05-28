import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import Deneme from './Deneme';
import MainPage from './MainPage';

const Stack = createNativeStackNavigator();


export default function index() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name='MainPage' component={MainPage} />
        </Stack.Navigator>
    )
}
