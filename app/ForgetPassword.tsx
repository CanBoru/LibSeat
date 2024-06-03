import React, { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, Image, Alert, Linking, TouchableOpacity, TextInput, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainPage from './MainPage';
import CreateAccount from './CreateAccount';



export default function ForgetPassword() {
    const navigation = useNavigation();

    const [mail, setEmail] = useState('');


    const handleForgotPassword = async () => {
        try {
            await axios.post('http://192.168.1.49:3000/LibSeat/forgetPassword', { mail: mail });
            Alert.alert('New password was sent to your email!');
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 400) {
                Alert.alert(error.response.data.message);
            } else {
                Alert.alert('Network Error', 'An error occurred while connecting to the server.');
            }
        }
    };

    return (
        <ImageBackground
            source={require("../assets/images/iztech-back.png")}
            style={styles.background}>
            <Image source={require("../assets/images/libseat_logo.png")} style={styles.logo} />
            <Text>only for IZTECH</Text>

            <View
                style={styles.container}
            >
                <View style={styles.welcome}>
                    <Text style={styles.text}>Please enter your email!</Text>
                </View>

                <View style={styles.signInContainer}>
                    <View style={styles.inputs}>
                        <Icon name="person" size={30} color="black" />
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.input}
                                placeholder="example@std.iyte.edu.tr"
                                value={mail}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                    </View>

                    <View style={styles.den1} >
                        <TouchableOpacity style={styles.loginButton} onPress={() => { handleForgotPassword() }}>
                            <ImageBackground
                                source={require("../assets/images/btn_back.png")}
                                style={styles.den2}
                                resizeMode="cover"
                                imageStyle={styles.loginImageStyle}
                            >
                                <Text style={styles.buttonText}>Send new password!</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.downLinks}>
                    <TouchableOpacity onPress={() => navigation.navigate('Community')}><Text>Community</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Privacy')}><Text>Privacy</Text></TouchableOpacity>

                </View>

            </View>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
    },
    grad: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    gradBut: {
        width: 200,
        height: 50,
        borderRadius: 25,
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 20,
        borderRadius: 10,
    },
    welcome: {
        width: 200,
        marginTop: 60,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "left",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 6,
        paddingTop: 20,
        marginTop: 80,
    },
    logo: {
        marginTop: 25,
        width: 300,
        height: 100,
        marginBottom: 2,
    },
    signInContainer: {
        marginBottom: 100,
        width: 260,
        height: 170,
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 5,
    },
    inputs: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
    },

    inputContainer: {
        width: '80%',
        height: '60%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        elevation: 5,
    },
    input: {
        flex: 1,
        fontSize: 15,

    },
    inputContainerDown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 25,
        marginTop: 10,

    },
    forgotPassword: {
        color: 'black',
        textAlign: 'left',
    },
    loginButton: {
        paddingHorizontal: 3,
        width: '90%',
        height: 35,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    downLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 260,
        marginTop: 40,
        // top: 55,
    },
    signUpButton: {
        borderRadius: 12,
        width: 200,
    },
    signUpText: {
        color: 'white',
        fontWeight: '500',
        textDecorationLine: 'underline'
    },
    den1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    den2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    loginImageStyle: {
        borderRadius: 12,

    },

});
