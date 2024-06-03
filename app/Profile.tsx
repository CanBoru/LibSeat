import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import LoginPage from './LoginPage';



export default function Profile() {
    const navigation = useNavigation();

    const [userMail, setUserMail] = useState('');

    const handleMail = async () => {
        const loggedUserStr = await AsyncStorage.getItem('token');
        const loggedUser = JSON.parse(loggedUserStr);
        const userEmail = loggedUser.mail;

        setUserMail(userEmail)
    }

    handleMail();

    const handleLogout = () => {
        Alert.alert('Log Out!', 'Are you sure you want to log out?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {
                text: 'OK',
                onPress: () => {

                    AsyncStorage.removeItem('token').then(() => {
                        AsyncStorage.removeItem('isLoggedIn').then(() => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            });
                        }).catch(error => console.log(error));

                    }).catch(error => console.log(error));
                }
            }
        ]);

    }

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



                {/* yukarı logo kısmı*/}
                <View style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: 150,
                }}>
                    <Image source={require("../assets/images/libseat_logo.png")} style={styles.reg_logo} />
                    <Text style={{
                        fontSize: 12
                    }}>only for IZTECH</Text>
                </View>
                {/* 
                içerik buraya doldur
                */}
                <TouchableOpacity style={{
                    width: 225,
                    height: 50,
                    borderWidth: 1,
                    borderRadius: 22,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                    flexDirection: 'row'

                }} onPress={() => { navigation.navigate('HistoryPage') }}>
                    <Text style={{ marginRight: 30 }}> See Working History</Text>
                    <Icon2 name="chevron-forward-circle" size={25} color='#B61938' />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: 225,
                    height: 50,
                    borderWidth: 1,
                    borderRadius: 22,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                    flexDirection: 'row',
                }} onPress={() => { navigation.navigate('ChangePassword') }}>
                    <Text style={{ marginRight: 44 }}> Change Password</Text>
                    <Icon2 name="chevron-forward-circle" size={25} color='#B61938' />
                </TouchableOpacity>

                {/*logout butonu*/}
                <TouchableOpacity style={styles.LogoutButton} onPress={handleLogout}>
                    <ImageBackground
                        source={require("../assets/images/btn_back.png")}
                        style={styles.signUpBack}
                        resizeMode="cover"
                        imageStyle={styles.loginImageStyle}
                    >
                        <Text style={styles.signUpText}>LOG OUT</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={styles.downLinks}>
                    <TouchableOpacity onPress={() => navigation.navigate('Community')}><Text style={styles.linkText}>Community</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Privacy')}><Text style={styles.linkText}>Privacy</Text></TouchableOpacity>

                </View>
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
    },
    reg_logo: {
        width: 180,
        height: 70,
        marginBottom: 2,
    },
    LogoutButton: {
        borderRadius: 12,
        width: '57%',
        marginRight: 30,
    },
    signUpText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loginImageStyle: {
        borderRadius: 12,

    },

    signUpBack: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 50,
        marginLeft: 20
    }, downLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 260,
        marginTop: 40,
        // top: 55,
    }, linkText: {
        color: '#B61938',
        fontSize: 14,
        textAlign: 'center',
    }
})