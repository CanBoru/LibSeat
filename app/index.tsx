import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';


import LoginPage from './LoginPage';
import MainPage from './MainPage';
import CreateAccount from './CreateAccount';
import Profile from './Profile';
import Reservation from './Reservation';
import UserSeat from './UserSeat';
import APRoom from './APRoom';
import QZRoom from './QZRoom';
import PhotoTaking from './PhotoTaking';
import { SplashScreen } from 'expo-router';



const Stack = createNativeStackNavigator();


export default function index() {

    const { isLoggedIn, setIsLoggedIn } = useState(false);

    async function getData() {
        const data = await AsyncStorage.getItem('isLoggedIn');
        console.log('Data:', data, 'at index.tsx');
        setIsLoggedIn(data);
    }


    useEffect(() => {
        getData();
        setTimeout(() => {
            SplashScreen.hideAsync();
        }, 900);
    }, []);


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
                    headerRight: () => <TouchableOpacity onPress={() => alert('Hello')}><Icon name='camera' size={30} color='#FFFFFF' style={{ marginRight: 10 }} /></TouchableOpacity>
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
            <Stack.Screen
                name='PhotoTaking'
                component={PhotoTaking}
                options={{
                    headerShown: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: '#FFFFFF',
                    headerTitle: 'PhotoTaking',
                    headerTitleAlign: 'center',
                    fullScreenGestureEnabled: true,
                }} />
        </Stack.Navigator>
    )
}
