import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Profile({ navigation }) {

    const handleLogout = () => {
        console.log('logged out');

        Alert.alert('Log Out !', 'Are you sure you want to log out?', [
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
                            navigation.navigate('Login');
                        }).catch(error => console.log(error));

                    }).catch(error => console.log(error));
                }
            }
        ]);
        // navigation.navigate('Login');

    }

    return (
        <ImageBackground
            source={require("../assets/images/page_background_v1.png")}
            style={styles.background}>


            <View style={styles.profile_icon} >
                <Icon name="user-circle-o" size={60} color="white" />
            </View>


            <View style={{ marginTop: 50 }}>
                <Text style={{
                    width: 200,
                    color: "white",
                    fontSize: 15,
                    fontWeight: "400",
                    marginLeft: 40,
                    marginTop: 100
                }}>student@std.iyte.edu.tr</Text>
            </View>
            <View style={styles.ProfilePageContainer}>

                {/* yukarı logo kısmı*/}
                <View style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20
                }}>
                    <Image source={require("../assets/images/libseat_logo.png")} style={styles.reg_logo} />
                    <Text style={{
                        fontSize: 12
                    }}>only for IZTECH</Text>
                </View>
                {/* 
                içerik buraya doldur
                */}

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
        width: 150,
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
    },
})