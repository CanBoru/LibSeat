import React, { useEffect } from 'react'
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import APRoom from './APRoom';
import QZRoom from './QZRoom';
import Profile from './Profile';

export default function HistoryPage() {
    const navigation = useNavigation();


    return (
        <ImageBackground
            source={require("../assets/images/page_background_v1.png")}
            style={styles.background}>

            <ScrollView style={styles.pageContent}>
                <Text style={{
                    width: 200,
                    color: "white",
                    fontSize: 35,
                    fontWeight: "500",
                    marginLeft: 10,
                    marginTop: 10
                }}>History</Text>

            </ScrollView>
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
        pageContent: {
            flex: 1,

            marginLeft: 30,
            marginTop: 80
        }
    }
)