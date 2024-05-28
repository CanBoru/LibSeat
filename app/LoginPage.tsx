import React, { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, Image, Alert, Linking, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';


export default function LoginPage({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Giriş işlemleri burada yapılacak
        console.log('Email:', email);
        console.log('Password:', password);

        navigation.navigate('MainPage');
    };

    const handleForgotPassword = () => {
        // Şifre unutma işlemleri burada yapılacak
        console.log('Forgot Password Request');
    };
    const handlePress = () => {
        // useNavigation.navigate('LoginPage');


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
                    <Text style={styles.text} >Hello</Text>
                    <Text style={styles.text}>Sign in!</Text>
                </View>



                <View style={styles.signInContainer}>
                    <View style={styles.inputs}>
                        <Icon name="person" size={30} color="black" />
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.input}
                                placeholder="example@std.iyte.edu.tr"
                                value={email}
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
                                secureTextEntry={true}
                            />
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

                <TouchableOpacity style={styles.signUpButton} onPress={handlePress}>
                    <ImageBackground
                        source={require("../assets/images/btn_back.png")}
                        style={styles.signUpBack}
                        resizeMode="cover"
                        imageStyle={styles.loginImageStyle}
                    >
                        <Text style={styles.signUpText}>SIGN UP</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <View style={styles.downLinks}>
                    <Text>Community</Text>
                    <Text>Privacy</Text>
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
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    text: {
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 6,
    },
    logo: {
        marginTop: 25,
        width: 300,
        height: 100,
        marginBottom: 2,
    },
    signInContainer: {
        marginBottom: 45,
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
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        width: 260,
        top: 55,
    },
    signUpButton: {
        borderRadius: 12,
        width: 200,
        marginLeft: 33,
    },
    signUpText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
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

    signUpBack: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
});
