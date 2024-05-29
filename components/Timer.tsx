import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TimerProps {
    initialSeconds: number;
}

const Timer: React.FC<TimerProps> = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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
