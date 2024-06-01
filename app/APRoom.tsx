import React, { useState, useEffect } from 'react';
import { ImageBackground, Image, View, StyleSheet, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';
import axios from 'axios';

export default function APRoom({ navigation }) {

    const [seats, setSeats] = useState([
        { id: 1, reserved: true }, { id: 2, reserved: true }, { id: 3, reserved: true }, { id: 4, reserved: true }, { id: 5, reserved: true },
        { id: 6, reserved: true }, { id: 7, reserved: true }, { id: 8, reserved: true }, { id: 9, reserved: true }, { id: 10, reserved: true },
        { id: 11, reserved: true }, { id: 12, reserved: true }, { id: 13, reserved: true }, { id: 14, reserved: true }, { id: 15, reserved: true },
        { id: 16, reserved: true }, { id: 17, reserved: true }, { id: 18, reserved: true }, { id: 19, reserved: true }, { id: 20, reserved: true },
        { id: 21, reserved: true }, { id: 22, reserved: true }, { id: 23, reserved: true }, { id: 24, reserved: true }, { id: 25, reserved: true },
        { id: 26, reserved: true }, { id: 27, reserved: true }, { id: 28, reserved: true }, { id: 29, reserved: true }, { id: 30, reserved: true },
        { id: 31, reserved: true }, { id: 32, reserved: true }, { id: 33, reserved: true }, { id: 34, reserved: true }, { id: 35, reserved: true },
        { id: 36, reserved: true }, { id: 37, reserved: true }, { id: 38, reserved: true }, { id: 39, reserved: true }, { id: 40, reserved: true },
        { id: 41, reserved: true }, { id: 42, reserved: true }, { id: 43, reserved: true }, { id: 44, reserved: true }, { id: 45, reserved: true },
        { id: 46, reserved: true }, { id: 47, reserved: true }, { id: 48, reserved: true }, { id: 49, reserved: true }, { id: 50, reserved: true },
        { id: 51, reserved: true }, { id: 52, reserved: true }, { id: 53, reserved: true }, { id: 54, reserved: true }, { id: 55, reserved: true },
        { id: 56, reserved: true }, { id: 57, reserved: true }, { id: 58, reserved: true }, { id: 59, reserved: true }, { id: 60, reserved: true },
        { id: 61, reserved: true }, { id: 62, reserved: true }, { id: 63, reserved: true }, { id: 64, reserved: true }, { id: 65, reserved: true },
        { id: 66, reserved: true }, { id: 67, reserved: true }, { id: 68, reserved: true }, { id: 69, reserved: true }, { id: 70, reserved: true },
        { id: 71, reserved: true }, { id: 72, reserved: true }, { id: 73, reserved: true }, { id: 74, reserved: true }, { id: 75, reserved: true },
        { id: 76, reserved: true }, { id: 77, reserved: true }, { id: 78, reserved: true }, { id: 79, reserved: true }, { id: 80, reserved: true },
        { id: 81, reserved: true }, { id: 82, reserved: true }, { id: 83, reserved: true }, { id: 84, reserved: true }, { id: 85, reserved: true },
        { id: 86, reserved: true }, { id: 87, reserved: true }, { id: 88, reserved: true }, { id: 89, reserved: true }, { id: 90, reserved: true },
        { id: 91, reserved: true }, { id: 92, reserved: true }
    ]);

    useEffect(() => {
        axios.post('http://192.168.1.46:3000/LibSeat/getSeats', { roomName: 'A-P Room' })
            .then(response => {
                const data = response.data;
                const updatedSeats = seats.map(seat => {
                    const seatData = data[seat.id];
                    return {
                        ...seat,
                        reserved: seatData ? seatData.seatStatus !== 'Empty' : false,
                    };
                });
                setSeats(updatedSeats);
            })
            .catch(error => {
                console.error('Error fetching seats:', error);
            });
    }, []);

    const [reservedSeat, setReservedSeat] = useState<number | null>(null);

    const [showAlert, setShowAlert] = useState(false);
    const [selectedSeatId, setSelectedSeatId] = useState<number | null>(null);

    const handleSeatPress = (seatId: number) => {

        if (seats[seatId - 1].reserved === true) {
            alert('This seat is already reserved.');
            return;
        }

        if (reservedSeat === seatId) {
            // alert('You have already reserved this seat.');
            navigation.navigate('UserSeat', { seatId: seatId, roomName: 'A-P Room' });
            return;
        }
        if (reservedSeat !== null) {
            alert('You cannot reserve more than one seat.');
            return;
        }
        setSelectedSeatId(seatId);
        setShowAlert(true);
    }

    const handleConfirm = () => {
        if (selectedSeatId !== null) {
            setSeats((prevSeats) =>
                prevSeats.map((seat) =>
                    seat.id === selectedSeatId ? { ...seat, reserved: true } : seat
                )
            );
            setReservedSeat(selectedSeatId);
            setShowAlert(false);

            navigation.navigate('UserSeat', { seatId: selectedSeatId, roomName: 'A-P Room' })
        }
    };

    const handleCancel = () => {
        setShowAlert(false);
    };

    return (
        <ImageBackground
            source={require("../assets/images/page_background_v1.png")}
            style={styles.background}>


            <View style={styles.profile_icon} >
                <Icon name="user-circle-o" size={35} color="white" />
            </View>

            {/*SEATS*/}
            <ScrollView style={styles.ProfilePageContainer} >
                {/*********************************************** */}
                <View style={styles.twelveSeats}>
                    <View style={styles.row}>
                        {seats.slice(88, 92).map((seat) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.id === reservedSeat ? styles.userReservedSeat :
                                        seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.id === reservedSeat ? styles.userReservedText :
                                        seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.row}>
                        {seats.slice(84, 88).map((seat) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/******************73-84************************ */}
                <View style={styles.twelveSeats}>
                    <View style={styles.row}>
                        {seats.slice(78, 84).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.row}>
                        {seats.slice(72, 78).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/*******************61-72************************* */}
                <View style={styles.twelveSeats}>
                    <View style={styles.row}>
                        {seats.slice(66, 72).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.row}>
                        {seats.slice(60, 66).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/*******************49-60************************* */}
                <View style={styles.twelveSeats}>
                    <View style={styles.row}>
                        {seats.slice(54, 60).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.row}>
                        {seats.slice(48, 54).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/*******************37-48************************* */}
                <View style={styles.twelveSeats}>
                    <View style={styles.row}>
                        {seats.slice(42, 48).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 15 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.row}>
                        {seats.slice(36, 42).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 15 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/*******************25-36************************* */}
                <View style={styles.twelveSeats}>
                    <View style={styles.row}>
                        {seats.slice(30, 36).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.row}>
                        {seats.slice(24, 30).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/******************13-24************************* */}
                <View style={styles.twelveSeats}>
                    <View style={styles.row}>
                        {seats.slice(18, 24).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.row}>
                        {seats.slice(12, 18).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/*****************1-12************************** */}
                <View style={styles.twelveSeats}>
                    <View style={styles.row}>
                        {seats.slice(6, 12).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.row}>
                        {seats.slice(0, 6).map((seat, index) => (
                            <TouchableOpacity
                                key={seat.id}
                                style={[
                                    styles.seat,
                                    seat.reserved ? styles.reservedSeat : styles.availableSeat,
                                    (index === 2) && { marginRight: 50 },
                                ]}
                                onPress={() => handleSeatPress(seat.id)}
                            >
                                <Text style={[
                                    seat.reserved ? styles.reservedText : styles.seatText]}>
                                    {seat.id}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/******************************************* */}
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 5,
                        width: 100,
                    }}>
                        <Text style={{ color: '#B61938' }}>Entrance</Text>
                    </View>

                </View>

            </ScrollView>
            {selectedSeatId !== null && (
                <AwesomeAlert
                    show={showAlert}
                    showCancelButton={true}
                    cancelText={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            color: '#B61938',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginRight: 10
                        }}>Cancel</Text>
                        <Icon name="remove" size={25} color="red" />
                    </View>}
                    cancelButtonStyle={{
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    onCancelPressed={() => {
                        handleCancel()
                    }}

                    showConfirmButton={true}
                    confirmText={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            color: '#B61938',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginRight: 10
                        }}>Occupy</Text>
                        <Icon name="check" size={25} color="green" />
                    </View>}
                    confirmButtonStyle={{
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    onConfirmPressed={() => {
                        handleConfirm()
                    }}

                    customView={
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    fontSize: 30,
                                    fontWeight: "400",
                                }}>Seat</Text>
                                <View style={{ marginLeft: 30, borderWidth: 1, borderColor: '#B61938', }}><Text style={{
                                    marginHorizontal: 15,
                                    fontSize: 30,
                                    fontWeight: "400",
                                    color: '#B61938',
                                    textShadowColor: 'rgba(0, 0, 0, 0.35)',
                                    textShadowOffset: { width: 2, height: 2 },
                                    textShadowRadius: 6,
                                }}>{selectedSeatId}</Text></View>

                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    fontSize: 30,
                                    fontWeight: "400",
                                }}>in</Text>
                                <View style={{ marginLeft: 5, }}><Text style={{
                                    marginHorizontal: 15,
                                    fontSize: 30,
                                    fontWeight: "400",
                                    color: '#B61938',
                                    textShadowColor: 'rgba(0, 0, 0, 0.3)',
                                    textShadowOffset: { width: 0, height: 2 },
                                    textShadowRadius: 6,
                                }}>A-P Room.</Text></View>

                            </View>

                            <View style={{
                                width: 280,
                                marginTop: 20,
                                marginBottom: 20,
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 30,
                                    fontWeight: "500",
                                }}>
                                    Your are about to occupy this seat...
                                </Text>
                            </View>
                        </View>

                    }
                    closeOnHardwareBackPress={false}
                />
            )}

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
        top: 10,
        right: 10,
        width: 100,  // Ensure touchable area is big enough
        height: 100, // Ensure touchable area is big enough
        justifyContent: 'center', // Center the icon
        alignItems: 'center', // Center the icon

    },
    ProfilePageContainer: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 90,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    seat: {
        width: 40,
        height: 40,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    availableSeat: {
        backgroundColor: '#A6A6A6',
    },
    reservedSeat: {
        backgroundColor: '#B61938',
    },
    seatText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    reservedText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    twelveSeats: {
        marginVertical: 15,
    },
    userReservedSeat: {
        backgroundColor: '#3E9728',
    },
    userReservedText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },

})