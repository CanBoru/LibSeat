import React from 'react'
import { ImageBackground, Text, View, StyleSheet, Image, Alert, Linking, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Profile({ navigation }) {

    const handleProfile = () => {
        navigation.navigate('Profile');
        console.log("profile button pressed 2")
    }
    return (
        <ImageBackground
            source={require("../assets/images/page_background_v1.png")}
            style={styles.background}>

            {/* <TouchableOpacity style={styles.profile_icon} onPress={handleProfile}>
                <View style={styles.profile_icon} >
                    <Icon name="user-circle-o" size={35} color="white" />
                </View>

            </TouchableOpacity> */}


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
        top: 19,  // Adjust this to where you want the icon
        right: 15,  // Adjust this to where you want the icon
        zIndex: 10, // Ensure this is above other elements
        width: 50,  // Ensure touchable area is big enough
        height: 50, // Ensure touchable area is big enough
        justifyContent: 'center', // Center the icon
        alignItems: 'center', // Center the icon

    },
})