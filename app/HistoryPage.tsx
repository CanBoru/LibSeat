import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryPage() {
    const navigation = useNavigation();
    const [historyData, setHistoryData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const loggedUserStr = await AsyncStorage.getItem('token');
                const loggedUser = JSON.parse(loggedUserStr);
                const userEmail = loggedUser.mail;

                const response = await axios.post('http://192.168.1.49:3000/LibSeat/getStudentsLog', { mail: userEmail });
                const data = response.data.Students.map(item => {
                    const allocationTime = new Date(item.allocationTime);
                    const deallocationTime = item.deallocationTime !== null ? new Date(item.deallocationTime) : allocationTime;
                    const diffMs = deallocationTime - allocationTime;
                    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
                    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
                    const hourInfo = diffMs !== 0 ? `${diffHrs} h  ${diffMins} m` : 'Active';
                    const date = allocationTime.toISOString().split('T')[0];
                    return { ...item, hourInfo, date, allocationTime };
                });
                setHistoryData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#B61938" />
            </View>
        );
    }

    return (
        <ImageBackground
            source={require("../assets/images/page_background_v1.png")}
            style={styles.background}
        >
            <ScrollView style={styles.pageContent}>
                {historyData.sort((a, b) => new Date(b.allocationTime) - new Date(a.allocationTime)).map((item) => (
                    <View key={item.id} style={styles.blockContent}>
                        <Icon name="library" size={30} color="white" style={{ marginLeft: 20 }} />
                        <View style={styles.infoBlock}>
                            <View style={{ marginLeft: 16, marginRight: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.infoContentText}>Room: </Text>
                                    <Text style={styles.infoText}>{item.roomName || 'N/A'}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.infoContentText}>Seat: </Text>
                                    <Text style={styles.infoText}>{item.seatId}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.infoContentText}>Date: </Text>
                                    <Text>{item.date}</Text>
                                </View>
                                <View style={styles.hourInfo}>
                                    <Text style={styles.infoText}>{item.hourInfo}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    pageContent: {
        flex: 1,
        marginLeft: 6,
        marginTop: 100,
    },
    blockContent: {
        width: '98%',
        height: 95,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 11,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    infoBlock: {
        width: '82%',
        height: 80,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    infoContentText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    hourInfo: {
        width: '100%',
        height: 30,
        marginTop: 3,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#B61938',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
