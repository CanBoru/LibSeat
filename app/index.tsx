import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
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
import Privacy from './Privacy';
import Community from './Community';
import ChangePassword from './ChangePassword';
import HistoryPage from './HistoryPage';


export default function index() {

    const Stack = createNativeStackNavigator();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            initialRouteName={isLoggedIn ? 'MainPage' : 'Login'}
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
                options={({ navigation }) => ({
                    headerShown: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: '#FFFFFF',
                    headerTitle: 'A-P Room',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => { navigation.navigate(Profile) }}>
                            <Icon name="user-circle-o" size={35} color="white" />
                        </TouchableOpacity>
                    ),
                })} />
            <Stack.Screen
                name='QZRoom'
                component={QZRoom}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: '#FFFFFF',
                    headerTitle: 'Q-Z Room',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => { navigation.navigate(Profile) }}>
                            <Icon name="user-circle-o" size={35} color="white" />
                        </TouchableOpacity>
                    ),
                })} />
            <Stack.Screen
                name='Privacy'
                component={Privacy}
                options={{
                    headerShown: true,
                    headerShadowVisible: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: 'white',
                }} />
            <Stack.Screen
                name='Community'
                component={Community}
                options={{
                    headerShown: true,
                    headerShadowVisible: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: 'white',
                }} />
            <Stack.Screen
                name='ChangePassword'
                component={ChangePassword}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: '#FFFFFF',
                    headerTitle: '',
                    headerTitleAlign: 'left',
                    // headerRight: () => (
                    //     <TouchableOpacity onPress={() => { navigation.navigate(Profile) }}>
                    //         <Icon name="user-circle-o" size={35} color="white" />
                    //     </TouchableOpacity>
                    // ),
                })} />
            <Stack.Screen
                name='HistoryPage'
                component={HistoryPage}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerBackButtonMenuEnabled: true,
                    headerTransparent: true,
                    headerTintColor: '#FFFFFF',
                    headerTitle: ' Working History',
                    headerTitleAlign: 'left',
                    // headerRight: () => (
                    //     <TouchableOpacity onPress={() => { navigation.navigate(Profile) }}>
                    //         <Icon name="user-circle-o" size={35} color="white" />
                    //     </TouchableOpacity>
                    // ),
                })} />
        </Stack.Navigator>
    )
}
