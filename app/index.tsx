import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from "react-native";

import LoginPage from './LoginPage';
import Deneme from './Deneme';
import MainPage from './MainPage';
import CreateAccount from './CreateAccount';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/FontAwesome';


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
            <Stack.Screen
                name='Profile'
                component={Profile}
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
