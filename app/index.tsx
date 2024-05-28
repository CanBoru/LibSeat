import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import Deneme from './Deneme';
import MainPage from './MainPage';
import CreateAccount from './CreateAccount';

const Stack = createNativeStackNavigator();


export default function index() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
        >
            <Stack.Screen
                name="Login"
                component={LoginPage}
                options={
                    {
                        headerShown: false
                    }
                } />
            <Stack.Screen
                name='MainPage'
                component={MainPage}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name='CreateAccount'
                component={CreateAccount}
                options={{
                    headerShown: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: '#FFFFFF',
                    headerTitle: '',
                }} />
        </Stack.Navigator>
    )
}
