import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Alert } from 'react-native';

interface PrivacyProps {
    navigation: any; // Replace 'any' with your specific navigation type if available
}

const Privacy: React.FC<PrivacyProps> = ({ navigation }) => {
    // const handleAccept = () => {
    //     // Handle the accept action (e.g., save consent to storage or send to server)
    //     Alert.alert('Consent Accepted');
    //     // You can navigate to another screen if needed
    //     // navigation.navigate('NextScreen');
    // };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Library Application Personal Data Protection Consent Form</Text>
            <Text style={styles.sectionHeading}>Purpose:</Text>
            <Text style={styles.paragraph}>
                This document outlines the consent for the collection, storage, and use of personal data in accordance with the Personal Data Protection Law (KVKK).
            </Text>

            <Text style={styles.sectionHeading}>Data Collected:</Text>
            <Text style={styles.subSectionHeading}>1. Student Information:</Text>
            <Text style={styles.listItem}>- Student ID Number</Text>
            <Text style={styles.listItem}>- Full Name</Text>
            <Text style={styles.listItem}>- Email Address</Text>
            <Text style={styles.listItem}>- Phone Number</Text>


            <Text style={styles.subSectionHeading}>2. Library Usage Data:</Text>
            <Text style={styles.listItem}>- Reservation History</Text>
            <Text style={styles.listItem}>- Library Visit Logs</Text>

            <Text style={styles.sectionHeading}>Purpose of Data Collection:</Text>
            <Text style={styles.listItem}>1. To maintain an accurate record of borrowed and returned books.</Text>
            <Text style={styles.listItem}>2. To send notifications regarding due dates, fines, and reservations.</Text>
            <Text style={styles.listItem}>3. To provide access to library services and resources.</Text>
            <Text style={styles.listItem}>4. To improve library services based on usage patterns and feedback.</Text>
            <Text style={styles.listItem}>5. To contact students for library-related announcements and updates.</Text>

            <Text style={styles.sectionHeading}>Data Storage and Security:</Text>
            <Text style={styles.listItem}>
                1. All personal data will be stored securely in our database with appropriate technical and organizational measures in place to protect against unauthorized access, alteration, disclosure, or destruction.
            </Text>
            <Text style={styles.listItem}>
                2. Personal data will be retained for the duration of the student’s enrollment at the school/university and for an additional period as required by relevant regulations.
            </Text>

            <Text style={styles.sectionHeading}>Data Sharing:</Text>
            <Text style={styles.listItem}>
                1. Personal data will not be shared with third parties without the explicit consent of the student, except as required by law.
            </Text>
            <Text style={styles.listItem}>
                2. Data may be shared with school/university administration for academic and administrative purposes.
            </Text>

            <Text style={styles.sectionHeading}>Rights of the Data Subject:</Text>
            <Text style={styles.listItem}>1. Students have the right to access, correct, and delete their personal data.</Text>
            <Text style={styles.listItem}>2. Students can withdraw their consent for the processing of their personal data at any time.</Text>
            <Text style={styles.listItem}>
                3. Requests for access, correction, deletion, or withdrawal of consent should be made in writing to the library administration.
            </Text>

            <Text style={styles.sectionHeading}>Consent:</Text>
            <Text style={{
                fontSize: 14,
                marginBottom: 200,
                textAlign: 'justify',
            }}>
                By signing this form, you acknowledge that you have read and understood the terms regarding the collection, storage, and use of your personal data. You agree to the processing of your personal data as described above.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        padding: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    sectionHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    subSectionHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
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
    signatureBlock: {
        marginTop: 20,
        marginBottom: 20,
    },
    signatureText: {
        fontSize: 14,
        marginBottom: 10,
    },
});

export default Privacy;
