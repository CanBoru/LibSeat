import React, { useEffect } from 'react'
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, BackHandler, Alert } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import APRoom from './APRoom';
import QZRoom from './QZRoom';
import Profile from './Profile';

export default function PeriodicalPage() {
    const navigation = useNavigation();


    return (
        <ImageBackground
            source={require("../assets/images/iye_per_back.png")}
            style={styles.background}>



            <View style={{
                marginTop: 100,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }} >

                <Text style={{
                    marginTop: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: 'white',
                    textShadowColor: 'rgba(0, 0, 0, 0.9)',
                    textShadowOffset: { width: 0, height: 5 },
                    textShadowRadius: 6,

                }}>Coming Soon...</Text>

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

    }
)