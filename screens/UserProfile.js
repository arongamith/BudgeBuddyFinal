import React, { useState, useEffect } from 'react';
import { Button, Image, View, SafeAreaView, StyleSheet } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfile = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        try {
          await AsyncStorage.setItem('userProfileImage', imageUri); // Save image URI to AsyncStorage
        } catch (error) {
          console.error('Error saving image URI:', error);
        }
      }
    });
  };

  // Load the saved image URI from AsyncStorage when the component mounts
  useEffect(() => {
    const loadUserProfileImage = async () => {
      try {
        const storedImageUri = await AsyncStorage.getItem('userProfileImage');
        if (storedImageUri !== null) {
          setSelectedImage(storedImageUri);
        }
      } catch (error) {
        console.error('Error loading image URI:', error);
      }
    };
    loadUserProfileImage();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      {/* Image Viewing Area */}
      <View>
        <View style={styles.imageContainer}>
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              style={styles.profileImage}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={require('../assets/icons/stockUser.png')} 
              style={styles.profileImage}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={{ marginTop: 20 }}>
          <Button title="Change Profile Image" onPress={openImagePicker} />
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden', // This ensures the image is clipped into the circle
    marginTop: 20,
    alignSelf: 'center'
  },
  profileImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default UserProfile;
