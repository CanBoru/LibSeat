import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoTaking() {

    const [image, setImage] = useState();


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

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            await setImage(result.assets[0].uri);
        }
    };



    return (
        <View style={styles.container}>
            <Button title="Pick an image from camera roll" onPress={uploadImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 200,
        height: 200,
    },
});
