import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios'; // Import axios for API requests

interface TimerProps {
    seatId: number;
    roomName: string;
}

const Timer: React.FC<TimerProps> = ({ seatId, roomName }) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Fetch the allocation time from the backend
        const fetchAllocationTime = async () => {
            try {
                const response = await axios.post(`http://192.168.1.46:3000/LibSeat/getSeat`, { seatId: seatId, roomName: roomName });
                const allocatedAt = new Date(response.data.allocationTime);
                const now = new Date();
                const initialSeconds = Math.floor((now.getTime() - allocatedAt.getTime()) / 1000);
                setSeconds(initialSeconds);
            } catch (error) {
                console.error('Error fetching allocation time:', error);
            }
        };

        fetchAllocationTime();

        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [seatId]);

    const formatTime = (time: number) => {
        const hrs = Math.floor(time / 3600);
        const mins = Math.floor((time % 3600) / 60);
        const secs = time % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{formatTime(seconds)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
});

export default Timer;
