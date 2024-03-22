import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, LogBox,TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DatePick } from './Index';



 // Igoniring the warning becuase it does not affect the program
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]); 

const DissmissKeyboard = ({ children })=> {
  return(
  <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    { children }
  </TouchableWithoutFeedback>
)}



const AddGoal = ({ navigation, route }) => {

  // trigger handleDateChange before opening the form unless time also will be recorded
  useEffect(() => {
    handleDateChange(date);
  }, []); 
  


  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = useState(false)
  const { handleAddGoal } = route.params;
  const [dateString, setDateString] = useState(date.toString());
  

  const handleSetGoal = () => {
    if (!title || !amount || !date) {
      return;
    }
    const newGoal = { title, date: dateString, amount };
    handleAddGoal(newGoal);
    
    navigation.goBack();
  }; 

  const handleDateChange = (selectedDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Specify desired date format options
    const formattedDate = selectedDate.toLocaleDateString('en-US', options); // Format the date
    
    setDate(selectedDate);
    setDateString(formattedDate);
  };

  return (
   <DissmissKeyboard>
   
    <SafeAreaView style={styles.container}>

    
        <Image
          source={require('../assets/icons/goal.png')}
          
          style={{
            resizeMode: 'contain',
            width: "50%",
            height: "50%",
            alignSelf: 'center',
            tintColor: '#2c3763'
          }}
        />
    
     <TextInput
        placeholder='Title'
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        placeholderTextColor="#989595"
      />

      <TextInput
        placeholder='Amount'
        style={styles.input}
        keyboardType='numeric'
        onChangeText={(value) => setAmount(value)}
        placeholderTextColor="#989595"
      />


    <View style={styles.dateView}>
      <DatePick
        open={open}
        title={"Set a Deadline"}
        date={date}
        onPress={() => setOpen(true)}
        onConfirm={(date) => {
          setOpen(false)
          handleDateChange(date);
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>

    
    <TouchableOpacity style={styles.button} onPress={handleSetGoal}>
        <Text style={{color: "#FFFFFF", fontWeight: '700'}}>Set Goal</Text>
    </TouchableOpacity>

   

    </SafeAreaView>
    
    </DissmissKeyboard>
   
   
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  input:{
    backgroundColor: '#ffffff',
    width: '80%',
    height:'7%',
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginVertical: 10,
    alignSelf: 'center',
  },
  dateView:{
    alignSelf: 'center'
  },
  imageContainer:{
    alignSelf: 'center'
  },
  button:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    width: 150,
    height: 40,
    marginTop: 50,
    backgroundColor: "#1d2075"
    
}
})

export default AddGoal