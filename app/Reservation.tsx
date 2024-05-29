import React from 'react'
import { ImageBackground, Text, View, StyleSheet, Image, Alert, Linking, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Reservation({ navigation }) {

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
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: "400",
                    }}>Seat</Text>
                    <View style={{ marginLeft: 30, borderWidth: 1, borderColor: '#B61938', }}><Text style={{
                        marginHorizontal: 15,
                        fontSize: 40,
                        fontWeight: "400",
                        color: '#B61938',
                        textShadowColor: 'rgba(0, 0, 0, 0.35)',
                        textShadowOffset: { width: 2, height: 2 },
                        textShadowRadius: 6,
                    }}>4</Text></View>

                </View>
                {/* room*/}
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: "400",
                    }}>in</Text>
                    <View style={{ marginLeft: 5, }}><Text style={{
                        marginHorizontal: 15,
                        fontSize: 40,
                        fontWeight: "400",
                        color: '#B61938',
                        textShadowColor: 'rgba(0, 0, 0, 0.3)',
                        textShadowOffset: { width: 0, height: 2 },
                        textShadowRadius: 6,
                    }}>A-P Room.</Text></View>

                </View>
                {/* about occupy*/}
                <View style={{
                    width: 280,
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: "500",
                    }}>
                        Your are about to occupy this seat...
                    </Text>
                </View>
                {/* buttons*/}

                <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 90, }}>
                    <TouchableOpacity style={styles.seatBtn} onPress={() => navigation.navigate('MainPage')}>
                        <Text style={{
                            color: '#B61938',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginRight: 10
                        }}>Cancel</Text>
                        <Icon name="remove" size={25} color="red" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.seatBtn} onPress={() => Alert.alert('Are you sure?', '', [
                        {
                            text: "Yes",
                            onPress: () => navigation.navigate('UserSeat')
                        },
                        {
                            text: "No",
                            onPress: () => console.log("No")
                        }
                    ])}>
                        <Text style={{
                            color: '#B61938',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginRight: 10
                        }}>Occupy</Text>
                        <Icon name="check" size={25} color="green" />
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
    seatBtn: {
        flexDirection: 'row',
        width: 150,
        height: 50,
        borderWidth: 1,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    }
})