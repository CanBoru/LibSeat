import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import LoginPage from './LoginPage';
import axios from 'axios';



export default function ChangePassword() {
    const navigation = useNavigation();
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [oldPasswordVisible, setOldPasswordVisible] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

    const [userMail, setUserMail] = useState('');

    const handleMail = async () => {
        const loggedUserStr = await AsyncStorage.getItem('token');
        const loggedUser = JSON.parse(loggedUserStr);
        const userEmail = loggedUser.mail;

        setUserMail(userEmail)
    }
    handleMail();



    {/* Burada Update Password handle edilecek*/ }
    const handleUpdatePassword = async () => {
        if (password === confirmPassword) {
            try {
                const response = await axios.post('http://192.168.1.49:3000/LibSeat/changePassword', { mail: userMail, oldPassword: oldPassword, password1: password, password2: confirmPassword });

                Alert.alert('Password updated successfully');
                setOldPassword('');
                setPassword('');
                setConfirmPassword('');

            } catch (error) {
                if (error.response && error.response.status === 400) {
                    alert(error.response.data.message);
                } else {
                    alert(error.message);
                }
            }
        } else {
            Alert.alert('Passwords do not match!');
        }
    };

    return (
        <ImageBackground
            source={require("../assets/images/page_background_v1.png")}
            style={styles.background}>


            <View style={styles.profile_icon} >
                <Icon name="user-circle-o" size={60} color="white" />
            </View>


            <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{
                    width: 200,
                    color: "white",
                    fontSize: 15,
                    fontWeight: "400",
                    marginLeft: 30,
                    marginTop: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>{userMail}</Text>
            </View>
            <View style={styles.ProfilePageContainer}>

                <View style={{
                    width: '70%',
                    justifyContent: 'flex-start',
                    paddingBottom: 6,
                }}>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>Set a new password</Text>
                </View>
                <View style={styles.inputs}>
                    <Icon2 name="lock-closed" size={30} color="black" />
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Current Password"
                            value={oldPassword}
                            onChangeText={setOldPassword}
                            secureTextEntry={oldPasswordVisible}
                        />
                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 25, height: 25 }} onPress={() => setOldPasswordVisible(!oldPasswordVisible)}>
                            <Icon2 name={oldPasswordVisible ? "eye-off" : "eye"} size={18} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputs}>
                    <Icon2 name="lock-closed" size={30} color="black" />
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={passwordVisible}
                        />
                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 25, height: 25 }} onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Icon2 name={passwordVisible ? "eye-off" : "eye"} size={18} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputs}>
                    <Icon2 name="lock-closed" size={30} color="black" />
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry={confirmPasswordVisible}
                        />
                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 25, height: 25 }} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                            <Icon2 name={confirmPasswordVisible ? "eye-off" : "eye"} size={18} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>


                {/* yukarı logo kısmı*/}
                {/* <View style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: 150,
                }}>
                    <Image source={require("../assets/images/libseat_logo.png")} style={styles.reg_logo} />
                    <Text style={{
                        fontSize: 12
                    }}>only for IZTECH</Text>
                </View> */}
                {/* 
                içerik buraya doldur
                */}


                {/*logout butonu*/}
                <TouchableOpacity style={[
                    styles.LogoutButton,
                    (!oldPassword || !password || !confirmPassword) ? { opacity: 0.5 } : {}
                ]}
                    onPress={() => { handleUpdatePassword() }}
                    disabled={!oldPassword || !password || !confirmPassword}>
                    <ImageBackground
                        source={require("../assets/images/btn_back.png")}
                        style={styles.signUpBack}
                        resizeMode="cover"
                        imageStyle={styles.loginImageStyle}
                    >
                        <Text style={styles.signUpText}>Update Password</Text>
                    </ImageBackground>
                </TouchableOpacity>
                {/* <View style={styles.downLinks}>
                    <TouchableOpacity onPress={() => navigation.navigate('Community')}><Text>Community</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Privacy')}><Text>Privacy</Text></TouchableOpacity>

                </View> */}
            </View>


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
    },
    profile_icon: {
        position: 'absolute',  // Position the icon absolutely
        top: 65,  // Adjust this to where you want the icon
        width: 100,  // Ensure touchable area is big enough
        height: 100, // Ensure touchable area is big enough
        justifyContent: 'center', // Center the icon
        alignItems: 'center', // Center the icon

    },
    ProfilePageContainer: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 20,
        paddingTop: 10
    },
    reg_logo: {
        width: 180,
        height: 70,
        marginBottom: 2,
    },
    LogoutButton: {
        borderRadius: 12,
        width: '70%',
        marginRight: 30,
    },
    signUpText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
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
        marginTop: 30,
        marginLeft: 20
    }, downLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 260,
        marginTop: 40,
        // top: 55,
    }, inputs: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
    },
    inputContainer: {
        width: '80%',
        height: '70%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginVertical: 6,
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
})