import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '../components/CheckBox';
import * as ImagePicker from 'expo-image-picker';


export default function CreateAccount({ navigation }) { //navigation varsa handle et

    const [StudentID, setStudentID] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState('');
    const [isGreenSelected, setIsGreenSelected] = useState(false);

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
                //save image
                await saveImage(result.assets[0].uri);
            }
        } catch (err) {
            alert("Error uploading image: " + err.message);
        }
    }

    const saveImage = async (image) => {
        try {
            //update displayed image
            setImage(image);
        } catch (err) {
            throw err;
        }
    };

    const handleSignUp = () => {
        console.log('StudentID:', StudentID);
        console.log('Email:', email);

    }


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
                }}>Create  Your Account !</Text>
            </View>

            <ScrollView style={{ width: "100%", }}>
                <View style={styles.CreatePageContainer}>
                    <Image source={require("../assets/images/libseat_logo.png")} style={styles.reg_logo} />
                    <Text style={{
                        fontSize: 12
                    }}>only for IZTECH</Text>

                    <View style={styles.largeContainer}>
                        <View style={styles.inputs}>
                            <Icon name="person" size={30} color="black" />
                            <View style={styles.inputContainer}>

                                <TextInput
                                    style={styles.input}
                                    placeholder="StudentID"
                                    value={StudentID}
                                    onChangeText={setStudentID}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>
                        <View style={styles.inputs}>
                            <Icon name="person" size={30} color="black" />
                            <View style={styles.inputContainer}>

                                <TextInput
                                    style={styles.input}
                                    placeholder="example@std.iyte.edu.tr"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
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
                                    secureTextEntry={true}
                                />
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
                                    secureTextEntry={true}
                                />
                            </View>
                        </View>
                        <View style={styles.AddPhoto}>
                            <Text style={{ paddingRight: 25 }}>Add Student ID Card</Text>
                            {image && <Image source={{ uri: image }} style={styles.image} />}
                            <TouchableOpacity onPress={uploadImage}>
                                <Icon name="camera" size={30} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                text={""}
                                isChecked={isGreenSelected}
                                onPress={() => setIsGreenSelected(!isGreenSelected)}
                                container={styles.checkBox}

                            />
                            <Text> Terms of Use and Privacy Policy</Text>

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


        </ImageBackground >

    )

}

const styles = StyleSheet.create(
    {
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
        }, loginImageStyle: {
            borderRadius: 12,

        },

        signUpBack: {
            width: '100%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 50,
            marginLeft: 20
        },
        image: {
            width: 200,
            height: 150,
        },
    }
)