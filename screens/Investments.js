import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Linking, Image } from 'react-native';
import { SwitchTab } from './Index';

const Investments = () => {
 const [options] = useState(['Gold', 'Real Estate', 'Fixed Deposit']);
 const [investmentType, setInvestmentType] = useState(options[0]);
 const [descriptions] = useState({
    'Gold': "'Gold' investment involves purchasing gold bars, coins, or other forms of physical gold, or investing in gold-related financial products like ETFs or mining stocks, with the aim of potentially preserving or increasing wealth over time due to gold's historical value and perceived stability as a store of wealth.",
    'Real Estate': "'Real estate' investment involves purchasing, owning, managing, renting, or selling property with the aim of generating income, capital appreciation, or both. It's a form of investment that typically involves acquiring residential, commercial, or industrial properties for various purposes such as rental income, property flipping, or long-term appreciation.",
    'Fixed Deposit': "A 'fixed deposit' investment involves depositing a sum of money with a financial institution for a predetermined period at a fixed interest rate, offering a low-risk option with guaranteed returns upon maturity.",
 });

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
      <View style={styles.switchButton}>
        <SwitchTab
          allStates={options}
          switchState={investmentType}
          setSwitchState={setInvestmentType}
        />
      </View>

      {/* Display the description in a box */}
      <View style={styles.descriptionBox}>
        <Text style={styles.description}>{descriptions[investmentType]}</Text>
      </View>

      <View style={styles.imageContainer}>
        {investmentType === 'Gold' && (
          <Image
            style={styles.image}
            source={require('../assets/icons/gold.png')}
          />
        )}
        {investmentType === 'Real Estate' && (
          <Image
            style={styles.image}
            source={require('../assets/icons/real_estate.png')}
          />
        )}
        {investmentType === 'Fixed Deposit' && (
          <Image
            style={styles.image}
            source={require('../assets/icons/fixed_deposit.png')}
          />
        )}
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

 swtichButton: {
    marginTop: 15,
    },
 descriptionBox: {
    padding:15,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    marginTop:30,
    },
 description: {
    fontSize: 15,
    color: '#000',
    },
 videoContainer: {
    marginTop: 20,
    alignItems: 'center',
    },
 button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
    marginTop: 200,
    },
 buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    },
 imageContainer: {
    width: 100,
    height: 100,
   },
image:{
  width:400,
  height: 450
}
});

export default Investments;
