import React, { useState } from 'react'
import { ImageBackground, Text, View, StyleSheet, Image, Alert, Linking, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Timer from '../components/Timer';

export default function UserSeat({ route, navigation }) {

    const { seatId, roomName } = route.params;

    console.log('userseat :', seatId, roomName);

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
                {/* seat a number*/}
                <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 30 }}>
                    <Text style={{
                        width: 200,
                        fontSize: 40,
                        fontWeight: "400",
                    }}>You are currently sitting in
                        this seat...</Text>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                            marginVertical: 8,
                            fontSize: 30,
                            fontWeight: "400",
                            color: '#B61938',
                            textShadowColor: 'rgba(0, 0, 0, 0.3)',
                            textShadowOffset: { width: 0, height: 2 },
                            textShadowRadius: 6,
                        }}>{roomName}</Text>
                        <View style={{ borderWidth: 1, borderColor: '#B61938', }}>
                            <Text style={{
                                marginHorizontal: 15,
                                fontSize: 40,
                                fontWeight: "400",
                                color: '#B61938',
                                textShadowColor: 'rgba(0, 0, 0, 0.35)',
                                textShadowOffset: { width: 0, height: 2 },
                                textShadowRadius: 6,
                            }}>{seatId}</Text>
                        </View>
                    </View>
                </View>


                {/*Timer*/}
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 280,
                    marginTop: 20,
                    marginBottom: 20,

                }}>
                    <View style={{ flexDirection: 'row', marginBottom: 2 }}>
                        <Text style={{ marginRight: 20 }}>Hours:</Text>
                        <Text style={{ marginRight: 18 }}>Minutes:</Text>
                        <Text style={{}}>Seconds:</Text>
                    </View>

                    <Text style={{
                        fontSize: 40,
                        fontWeight: "500",
                    }}>
                        <Timer initialSeconds={0} />
                    </Text>
                </View>
                {/* Leave button*/}

                <View >
                    <TouchableOpacity style={styles.seatBtn} onPress={() => Alert.alert('Are you sure?', 'Do you want to leave this seat?\nYour timer will be reset!', [
                        {
                            text: "Yes",
                            onPress: () => navigation.navigate('MainPage')
                        },
                        {
                            text: "No",
                            onPress: () => console.log("No")
                        }
                    ])}>

                        <ImageBackground
                            source={require("../assets/images/btn_back.png")}
                            style={styles.signUpBack}
                            resizeMode="cover"
                            imageStyle={styles.loginImageStyle}
                        >
                            <Text style={styles.signUpText}>LEAVE</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>

                {/* aşağı logo kısmı*/}
                <View style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 20
                }}>
                    <Image source={require("../assets/images/libseat_logo.png")} style={styles.reg_logo} />
                    <Text style={{
                        fontSize: 12
                    }}>only for IZTECH</Text>
                </View>

            </View>


        </ImageBackground >
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
        justifyContent: "flex-start",
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
    seatBtn: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
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
        marginTop: 0,
    },
})