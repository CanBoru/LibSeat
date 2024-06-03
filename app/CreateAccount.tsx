import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckBox from '../components/CheckBox';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function CreateAccount() {
    const navigation = useNavigation();

    const [StudentID, setStudentID] = useState('');
    const [StudentName, setStudentName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [image, setImage] = useState(null); // Updated to null initially

    const [passwordVisible, setPasswordVisible] = useState(true);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
    const [isGreenSelected, setIsGreenSelected] = useState(false);
    //const [isSavedImage, setIsSavedImage] = useState(false); // Updated to false initially

    const uploadImage = async () => {
        try {
            await ImagePicker.requestCameraPermissionsAsync();

            let result = await ImagePicker.launchCameraAsync({
                cameraType: ImagePicker.CameraType.back,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                await saveImage(result.assets[0].uri);
            }
        } catch (err) {
            alert("Error uploading image: " + err.message);
        }
    };

    const saveImage = async (imageUri) => {
        try {
            setImage(imageUri);
            setIsSavedImage(true);
        } catch (err) {
            throw err;
        }
    };

    const handleSignUp = async () => {
        console.log('StudentID:', StudentID);
        console.log('Email:', mail);

        const studentInfos = { mail, studentName: StudentName, studentNumber: StudentID, phoneNumber, password };
        const url = 'http://192.168.1.49:3000/LibSeat/createStudent';
        //const urlImage = `http://192.168.1.49:3000/LibSeat/uploadPhoto`;

        if (password.length < 8 || confirmPassword.length < 8) {
            Alert.alert("Passwords must be at least 8 characters long!");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match!");
            return;
        }

        if (isGreenSelected === false) {
            Alert.alert("Please accept the terms of use and privacy policy!");
            return;
        }
        // if (isSavedImage === true) {
        try {
            await axios.post(url, studentInfos);
            // const formData = new FormData();
            // formData.append('file', {
            //     uri: image,
            //     type: 'image/jpeg',
            //     name: `${mail}.jpg`,

            // });
            // formData.append('mail', mail);
            // console.log(formData);
            // await axios.post(urlImage, formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //     },
            // });

            Alert.alert("Verify link sent! Please check your email and verify .");
            navigation.goBack(); // Navigate to the login page after successful sign-up

        } catch (error) {
            if (error.response && error.response.status === 400) {
                Alert.alert(error.response.data.message);
            } else {
                Alert.alert("An error occurred. Please try again.");
            }
        }
        // } else {
        //     Alert.alert("Please upload your student ID card!");
        // }
    };

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
                    marginTop: 50
                }}>Create Your Account!</Text>
            </View>

            <ScrollView style={{ width: "100%" }}>
                <View style={styles.CreatePageContainer}>
                    <Image source={require("../assets/images/libseat_logo.png")} style={styles.reg_logo} />
                    <Text style={{ fontSize: 12 }}>only for IZTECH</Text>

                    <View style={styles.largeContainer}>
                        <View style={styles.inputs}>
                            <Icon name="person" size={30} color="black" />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Student ID"
                                    value={StudentID}
                                    onChangeText={setStudentID}
                                    keyboardType="numeric"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>
                        <View style={styles.inputs}>
                            <Icon name="person" size={30} color="black" />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Student Name"
                                    value={StudentName}
                                    onChangeText={setStudentName}
                                    keyboardType="default"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>
                        <View style={styles.inputs}>
                            <Icon name="mail" size={30} color="black" />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="example@std.iyte.edu.tr"
                                    value={mail}
                                    onChangeText={setMail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>
                        <View style={styles.inputs}>
                            <Icon name="call" size={30} color="black" />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="05051112233"
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                    keyboardType="phone-pad"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>
                        <View style={styles.inputs}>
                            <Icon name="lock-closed" size={30} color="black" />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={passwordVisible}
                                />
                                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 25, height: 25 }} onPress={() => setPasswordVisible(!passwordVisible)}>
                                    <Icon name={passwordVisible ? "eye-off" : "eye"} size={18} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputs}>
                            <Icon name="lock-closed" size={30} color="black" />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry={confirmPasswordVisible}
                                />
                                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 25, height: 25 }} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                                    <Icon name={confirmPasswordVisible ? "eye-off" : "eye"} size={18} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* <View style={styles.AddPhoto}>
                            <Text style={{ paddingRight: 25 }}>Add Student ID Card</Text>
                            {image && <Image source={{ uri: image }} style={styles.image} />}
                            <TouchableOpacity onPress={uploadImage}>
                                <Icon name="camera" size={30} color="black" />
                            </TouchableOpacity>
                        </View> */}
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                text={""}
                                isChecked={isGreenSelected}
                                onPress={() => setIsGreenSelected(!isGreenSelected)}
                                container={styles.checkBox}
                            />
                            <TouchableOpacity onPress={() => { navigation.navigate('Privacy') }}><Text style={{
                                fontSize: 13,
                                textDecorationLine: 'underline',
                                color: '#B61938',

                            }}> Terms of Use and Privacy Policy</Text></TouchableOpacity>

                        </View>
                        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                            <ImageBackground
                                source={require("../assets/images/btn_back.png")}
                                style={styles.signUpBack}
                                resizeMode="cover"
                                imageStyle={styles.loginImageStyle}
                            >
                                <Text style={styles.signUpText}>SIGN UP</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
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
    largeContainer: {
        flex: 1,
        width: "75%",
    },
    CreatePageContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 25,
    },
    inputs: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer: {
        width: '80%',
        height: '60%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        elevation: 5,
    },
    input: {
        flex: 1,
        fontSize: 12,
    },
    reg_logo: {
        width: 180,
        height: 70,
        marginBottom: 2,
    },
    AddPhoto: {
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 8,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: 25,
        marginTop: 10,
        width: "86%",
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginLeft: 22,
        alignItems: 'center',
        marginTop: 20,
    },
    checkbox: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    signUpButton: {
        borderRadius: 12,
        width: 200,
        marginLeft: 33,
        marginBottom: 25,
    },
    signUpText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loginImageStyle: {
        borderRadius: 12,
    },
    signUpBack: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 50,
        marginLeft: 20,
    },
    image: {
        width: 200,
        height: 150,
    },
});
