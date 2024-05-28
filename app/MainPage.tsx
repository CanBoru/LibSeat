import React from 'react'
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MainPage({ navigation }) {

    const handleAP = () => {
        console.log("AP Pressed")
        navigation.navigate('CreateAccount');
    }

    return (
        <ImageBackground
            source={require("../assets/images/page_background_v1.png")}
            style={styles.background}>

            <View style={styles.pageUp}>
                <Text style={{
                    width: 200,
                    color: "white",
                    fontSize: 35,
                    fontWeight: "500",
                    marginLeft: 10,
                }}>Choose a Study Room</Text>
                <View style={styles.dummyProfile}>
                    <Icon name="user-circle-o" size={45} color="white" />
                </View>
            </View>

            <View style={styles.topFloor}>
                <Text style={{
                    fontSize: 20,
                    color: "white",
                }}>Top Floor</Text>
                <TouchableOpacity style={styles.floorBtn} onPress={handleAP}>
                    <Text style={{ fontSize: 20, paddingLeft: 20, }}>A-P</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.floorBtn}>
                    <Text style={{ fontSize: 20, paddingLeft: 20, }}>Q-Z</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.groundFloor}>
                <Text style={{
                    fontSize: 20,
                    color: "white",
                }}>Ground Floor</Text>
                <TouchableOpacity style={styles.floorBtn}>
                    <Text style={{ fontSize: 20, paddingLeft: 20, }}>Periodical Publication</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>

    )
}

const styles = StyleSheet.create(
    {
        background: {
            flex: 1,
            flexDirection: 'column',
            alignItems: "flex-start",

        },
        pageUp: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 25,
            marginLeft: 25,
            width: "80%",
        },
        dummyProfile: {
            width: 50,
            height: 50,
            borderRadius: 50,
            marginLeft: 60,
        },
        topFloor: {
            flexDirection: "column",
            alignItems: "flex-start",
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 10,
            width: "80%",
            height: 200,
            marginTop: 55,
            paddingLeft: 15,
            paddingTop: 15,
            marginLeft: 35,
        },
        floorBtn: {
            width: "90%",
            height: 50,
            backgroundColor: "white",
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 10,
        },
        groundFloor: {
            flexDirection: "column",
            alignItems: "flex-start",
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 10,
            width: "80%",
            height: 135,
            marginTop: 55,
            paddingLeft: 15,
            paddingTop: 15,
            marginLeft: 35,

        }
    }
)