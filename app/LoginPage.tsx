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



export default function LoginPage() {
    const navigation = useNavigation();

    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);

    const handleLogin = () => {
        const credentials = { mail, password }; // E-posta ve şifre bilgilerini nesne olarak toplayın
        const url = 'http://192.168.1.49:3000/LibSeat/loginStudent'; // Tam URL'yi kullanın

        axios.post(url, credentials)
            .then((response) => {
                const result = response.data;
                console.log(result);
                const { status, loggedUser } = result;

                if (status === 'success') {
                    console.log('Logged User:', loggedUser);
                    Alert.alert('Logged in successful!');
                    AsyncStorage.setItem('token', JSON.stringify(loggedUser));
                    AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
                    navigation.navigate(MainPage);
                } else {
                    console.log('Login Failed');
                    Alert.alert('Login Failed');
                }
            })
            .catch(error => {
                console.log(error);
                if (error.response && error.response.status === 401) {
                    Alert.alert(error.response.data.message);
                } else {
                    Alert.alert('Network Error', 'An error occurred while connecting to the server.');
                }
            });

        console.log('Email:', mail);
        console.log('Password:', password);
    };


    const handleForgotPassword = () => {
        // Şifre unutma işlemleri burada yapılacak
        console.log('Forgot Password Request');
    };
    const handlePress = () => {
        navigation.navigate(CreateAccount);

    };
    const handleGradPress = () => {
        Alert.alert('Button Pressed!');
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
                    <Text style={styles.text}>Welcome!</Text>
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

                    <View style={styles.inputs}>
                        <Icon name="lock-closed" size={30} color="black" />
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.input}
                                placeholder="password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={passwordVisible}
                            />
                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 25, height: 25 }} onPress={() => setPasswordVisible(!passwordVisible)}>
                                <Icon name={passwordVisible ? "eye-off" : "eye"} size={18} color="black" />
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={styles.inputContainerDown}>
                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text style={styles.forgotPassword}>Forget password?</Text>
                        </TouchableOpacity>

                        <View style={styles.den1} >
                            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                                <ImageBackground
                                    source={require("../assets/images/btn_back.png")}
                                    style={styles.den2}
                                    resizeMode="cover"
                                    imageStyle={styles.loginImageStyle}
                                >
                                    <Text style={styles.buttonText}>Login</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginLeft: 20, marginBottom: 20 }}>
                    <Text>Don't you have an account? </Text>
                    <View>
                        <TouchableOpacity onPress={handlePress}>
                            <Text style={styles.signUpText}>Register</Text>
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
        marginTop: 60,
        marginBottom: 20,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },
    text: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
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
        marginBottom: 25,
        width: 260,
        height: 200,
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 5,
    },
    inputs: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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
        fontSize: 12,
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
        width: '80%',
        height: 26,
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
        marginLeft: 20,
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
