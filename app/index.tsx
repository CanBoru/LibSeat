import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from "react-native";

import LoginPage from './LoginPage';
import Deneme from './Deneme';
import MainPage from './MainPage';
import CreateAccount from './CreateAccount';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import Reservation from './Reservation';
import UserSeat from './UserSeat';
import APRoom from './APRoom';
import QZRoom from './QZRoom';


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
            <Stack.Screen
                name='Reservation'
                component={Reservation}
                options={{
                    headerShown: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: '#FFFFFF',
                    headerTitle: '',
                }} />
            <Stack.Screen
                name='UserSeat'
                component={UserSeat}
                options={{
                    headerShown: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: '#FFFFFF',
                    headerTitle: '',
                }} />

            <Stack.Screen
                name='APRoom'
                component={APRoom}
                options={{
                    headerShown: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: '#FFFFFF',
                    headerTitle: 'A-P Room',
                    headerTitleAlign: 'center',
                }} />
            <Stack.Screen
                name='QZRoom'
                component={QZRoom}
                options={{
                    headerShown: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: '#FFFFFF',
                    headerTitle: 'Q-Z Room',
                    headerTitleAlign: 'center',
                }} />
        </Stack.Navigator>
    )
}
