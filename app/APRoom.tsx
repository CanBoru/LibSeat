import React, { useState } from 'react';
import { ImageBackground, Image, View, StyleSheet, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function APRoom({ navigation }) {
    const seats = [
        { id: 1, reserved: false }, { id: 2, reserved: false }, { id: 3, reserved: false }, { id: 4, reserved: false }, { id: 5, reserved: false }, { id: 6, reserved: false },
        { id: 7, reserved: false }, { id: 8, reserved: false }, { id: 9, reserved: false }, { id: 10, reserved: false }, { id: 11, reserved: false }, { id: 12, reserved: false },
        { id: 13, reserved: false }, { id: 14, reserved: true }, { id: 15, reserved: false }, { id: 16, reserved: true }, { id: 17, reserved: false }, { id: 18, reserved: false },
        { id: 19, reserved: false }, { id: 20, reserved: false }, { id: 21, reserved: false }, { id: 22, reserved: false }, { id: 23, reserved: true }, { id: 24, reserved: false },
        { id: 25, reserved: false }, { id: 26, reserved: false }, { id: 27, reserved: false }, { id: 28, reserved: false }, { id: 29, reserved: false }, { id: 30, reserved: false },
        { id: 31, reserved: false }, { id: 32, reserved: false }, { id: 33, reserved: false }, { id: 34, reserved: false }, { id: 35, reserved: false }, { id: 36, reserved: false },
        { id: 37, reserved: false }, { id: 38, reserved: false }, { id: 39, reserved: false }, { id: 40, reserved: false }, { id: 41, reserved: false }, { id: 42, reserved: false },
        { id: 43, reserved: false }, { id: 44, reserved: false }, { id: 45, reserved: false }, { id: 46, reserved: false }, { id: 47, reserved: false }, { id: 48, reserved: false },
        { id: 49, reserved: false }, { id: 50, reserved: false }, { id: 51, reserved: false }, { id: 52, reserved: false }, { id: 53, reserved: false }, { id: 54, reserved: false },
        { id: 55, reserved: false }, { id: 56, reserved: false }, { id: 57, reserved: false }, { id: 58, reserved: false }, { id: 59, reserved: false }, { id: 60, reserved: false },
        { id: 61, reserved: false }, { id: 62, reserved: false }, { id: 63, reserved: false }, { id: 64, reserved: false }, { id: 65, reserved: false }, { id: 66, reserved: false },
        { id: 67, reserved: false }, { id: 68, reserved: false }, { id: 69, reserved: false }, { id: 70, reserved: false }, { id: 71, reserved: false }, { id: 72, reserved: false },
        { id: 73, reserved: false }, { id: 74, reserved: false }, { id: 75, reserved: false }, { id: 76, reserved: false }, { id: 77, reserved: false }, { id: 78, reserved: false },
        { id: 79, reserved: false }, { id: 80, reserved: false }, { id: 81, reserved: false }, { id: 82, reserved: false }, { id: 83, reserved: false }, { id: 84, reserved: false },
        { id: 85, reserved: false }, { id: 86, reserved: false }, { id: 87, reserved: false }, { id: 88, reserved: false }, { id: 89, reserved: false }, { id: 90, reserved: false },
        { id: 91, reserved: false }, { id: 92, reserved: false }
    ];

    const [seatState, setSeatState] = useState(seats);
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
            navigation.navigate('UserSeat');
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
            setSeatState((prevSeats) =>
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
                        {seatState.slice(88, 92).map((seat) => (
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
                        {seatState.slice(84, 88).map((seat) => (
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
                        {seatState.slice(78, 84).map((seat, index) => (
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
                        {seatState.slice(72, 78).map((seat, index) => (
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
                        {seatState.slice(66, 72).map((seat, index) => (
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
                        {seatState.slice(60, 66).map((seat, index) => (
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
                        {seatState.slice(54, 60).map((seat, index) => (
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
                        {seatState.slice(48, 54).map((seat, index) => (
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
                        {seatState.slice(42, 48).map((seat, index) => (
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
                        {seatState.slice(36, 42).map((seat, index) => (
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
                        {seatState.slice(30, 36).map((seat, index) => (
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
                        {seatState.slice(24, 30).map((seat, index) => (
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
                        {seatState.slice(18, 24).map((seat, index) => (
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
                        {seatState.slice(12, 18).map((seat, index) => (
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
                        {seatState.slice(6, 12).map((seat, index) => (
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
                        {seatState.slice(0, 6).map((seat, index) => (
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