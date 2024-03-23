import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import { SwitchTab } from './Index';

const Investments = () => {
 const [options] = useState(['Gold', 'Real Estate', 'Fixed Deposit']);
 const [investmentType, setInvestmentType] = useState(options[0]);

 const openYouTubeLink = () => {
    const url = 'https://youtu.be/WF4FwxnLECE?si=gjCT_-8GVk-4hEFV'; // Add gold YouTube video URL
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        console.log(`Don't know how to open this URL: ${url}`);
      }
    });
  }

  const openYouTubeLink2 = () => {
    const url = 'https://youtu.be/OzOLWE4nTXo?si=Yaohwnfs0BPvPuJ1'; // Add Real Estate YouTube video URL
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        console.log(`Don't know how to open this URL: ${url}`);
      }
    });
  }

  const openYouTubeLink3 = () => {
    const url = 'https://youtu.be/g-CTLvjpvRY?si=WxMobg9G4CplVVnC'; // Add Fixed Deposit YouTube video URL
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        console.log(`Don't know how to open this URL: ${url}`);
      }
    });
  }

 return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstLayer}>
            <Text style={styles.title}>Investments</Text>
      </View>
      <View style={styles.swtichButton}>
      <View style={styles.swtichButton}>
        <SwitchTab
          allStates={options}
          switchState={investmentType}
          setSwitchState={setInvestmentType}
        />
      </View>
      </View>

      {investmentType === 'Gold' && (
        <View style={styles.videoContainer}>
          <TouchableOpacity onPress={openYouTubeLink} style={styles.button}>
            <Text style={styles.buttonText}>Watch 'Gold' Video</Text>
          </TouchableOpacity>
        </View>
      )}

      {investmentType === 'Real Estate' && (
        <View style={styles.videoContainer}>
          <TouchableOpacity onPress={openYouTubeLink2} style={styles.button}>
            <Text style={styles.buttonText}>Watch 'Real Estate' Video</Text>
          </TouchableOpacity>
        </View>
      )}

        {investmentType === 'Fixed Deposit' && (
        <View style={styles.videoContainer}>
          <TouchableOpacity onPress={openYouTubeLink3} style={styles.button}>
            <Text style={styles.buttonText}>Watch 'Fixed Deposit' Video</Text>
          </TouchableOpacity>
        </View>
      )}

    </SafeAreaView>
 );
};



const styles = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: '#C4C5DA',
    },
 firstLayer: {
        flexDirection: 'row',
    paddingHorizontal: 25,
    marginBottom: 12,
        paddingTop: 20,
    },
 title: {
    fontSize: 33,
    fontWeight: '700',
    color: '#1d1d1d',
        marginBottom: 7,
    },
 title: {
    fontSize: 33,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 7,
    },
 swtichButton: {
    marginTop: 15,
    },
 videoContainer: {
    marginTop: 20,
    alignItems: 'center',
    },
 button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    },
 buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    },
});

export default Investments;