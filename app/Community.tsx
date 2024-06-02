import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface CommunityProps {
    navigation: any; // Replace 'any' with your specific navigation type if available
}

const Community: React.FC<CommunityProps> = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.paragraph}>
                Welcome to the IYTE Community! This application is built on the trust and cooperation of IYTE students. It is designed to foster a sense of community and support among students, without the imposition of strict rules.
            </Text>

            <Text style={styles.paragraph}>
                Here, you can:
            </Text>

            <Text style={styles.listItem}>- Reserve study desks in the library</Text>
            <Text style={styles.listItem}>- View available study spaces in real-time</Text>

            <Text style={styles.paragraph}>
                Our goal is to create a supportive and collaborative environment where every student can efficiently use the library resources. While we do not impose strict rules, we encourage everyone to respect each other's reservations and maintain a positive and cooperative community spirit.
            </Text>

            <Text style={styles.paragraph}>
                Thank you for being a part of the IYTE LibSeat Community!
            </Text>

            <Text style={{ fontSize: 15, fontWeight: '500', alignItems: 'center', justifyContent: 'center', paddingTop: 40 }}>
                LibSeat Development Team from the IZTECH.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        padding: 40,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'justify',
    },
    listItem: {
        fontSize: 14,
        marginBottom: 5,
        marginLeft: 10,
        textAlign: 'justify',
    },
});

export default Community;
