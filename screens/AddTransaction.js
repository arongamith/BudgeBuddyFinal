import React, {useState} from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import {useForm} from 'react-hook-form';
import { CustomInput,CustomAmountInput, CustomButton } from './Index';
import DropdownComponent from '../components/DropDownList';






const AddTransaction = ({ navigation }) => {

  const {control, handleSubmit} = useForm();
  const [category, setCategory] = useState();
  const [type, setType] = useState(null);
  

  const transactionType = [
    { label: 'Income', value: '1' },
    { label: 'Expense', value: '2' },
  ];

  const incomeList = [
    { label: 'Salery', value: 'salery' },
    { label: 'Business Income', value: 'business'},
    { label: 'Rental Income', value: 'rental'},
    { label: 'Investment Income', value: 'investment'},
    { label: 'Side Hustle Income', value: 'sideHustle'},
    { label: 'Pension', value: 'pension'},
    { label: 'Interest', value: 'interest'},
    { label: 'Child Support', value: 'childSupport'},
    { label: 'Royalities', value: 'royalities'},
    { label: 'Bonuses', value: 'bonuses'},
    { label: 'Tips', value: 'tips'},
    { label: 'Commision Earnings', value: 'commision'},
    { label: 'Gifts', value: 'gifts'},
    { label: 'Online Income (e.g., blogging, affiliate marketing) ', value: 'onlineIncome'},
    { label: 'Part-Time Job Income', value: 'partTimeJob'},
    { label: 'Schorlarship', value: 'scholarship'},
    { label: 'Fellowship Stipend', value: 'fellowshipStipend'},
    { label: 'Retirement Income', value: 'retirement'},
    { label: 'Savings Withdrawal', value: 'savings'},
    { label: 'Real Estate Income', value: 'realEstate'},
    { label: 'Stock Options', value: 'stockOptions'},
    { label: 'Educational Reimburement', value: 'educationalRemburement'},
    { label: 'Money Awards', value: 'moneyAwards'},
    
  ]

  const expenseList = [
    { label: 'Groceries', value: 'groceries'},
    { label: 'Dning Out', value: 'diningOut'},
    { label: 'Utilities', value: 'utilities'},
    { label: 'Entertainment', value: 'entertainment'},
    { label: 'Transportation', value: 'transportation'},
    { label: 'Shopping', value: 'shopping'},
    { label: 'Rent/ Mortgage', value: 'rent'},
    { label: 'Healthcare', value: 'healthcare'},
    { label: 'Insurance', value: 'insurance'},
    { label: 'Education', value: 'education'},
    { label: 'Clothing', value: 'clothing'},
    { label: 'Home Maintenence', value: 'homeMaintenence'},
    { label: 'Travel', value: 'travel'},
    { label: 'Personal Care', value: 'personalCare'},
    { label: 'Communication (e.g., internet, phone)', value: 'communication'},
    { label: 'Subscription Services (e.g., streaming, magazines)', value: 'groceries'},
    { label: 'Gifts and Donations', value: 'donations'},
    { label: 'Savings/ Investments', value: 'savings'},
    { label: 'Fitness/ Wellness', value: 'fitness'},
    { label: 'Childcare', value: 'childcare'},
    { label: 'Pet Expenses', value: 'petExpenses'},
    { label: 'Taxes', value: 'taxes'},
    { label: 'Loan Repayments', value: 'loanRepayments'},
    { label: 'Miscellaneous', value: 'miscellaneous'},
    { label: 'Hobbies', value: 'hobbies'},
    { label: 'Emergency Fund', value: 'emergencyFund'},
    { label: 'Furniture', value: 'furniture'},
    { label: 'Technology', value: 'technology'},
  ]

  
  // Check if type is income or expense
  
  let selectedList = [];

  if (type === '1') {
    selectedList = incomeList;
  } else if (type === '2') {
    selectedList = expenseList;
  }

  const [amount, setAmount] = useState();

  const onCreateCategory = async()=> {
    
  }

  const onAddTransaction = (data)=> {
    
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Go Back Button */}
      <TouchableOpacity style={styles.goBackButton} onPress={ ()=> navigation.navigate('HomeScreen') }>
          <Image
          source={require('../assets/icons/backButton.png')}
          resizeMode='contain'
          style={{
            width: 20,
            height: 20,
          }}
          />  
      </TouchableOpacity>
      
      {/* Title View */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add a Transaction</Text>
      </View>

      
      {/* Input Area */}
      <DropdownComponent
        data={transactionType}
        value={type}
        setValue={setType}
        placeholder={"Select Transaction Type"}
      />

      <DropdownComponent
        data={selectedList}
        value={category}
        setValue={setCategory}
        placeholder={"Select Category"}
      />

      <TextInput
        placeholder='Amount'
        style={styles.input}
        keyboardType='numeric'
        onChangeText={(value)=>setAmount(value)}
      />

      <TouchableOpacity 
      style={styles.button}
      disabled={!type || !amount}
      >
        <Text>Add Transaction</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginBottom: 90
    
  },
  goBackButton:{
    width: 80,
    height: 35,
    borderRadius: 27,
    backgroundColor: 'rgba(201,201,201,0.4)',
    right: 130,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  titleContainer:{
    left: 10,
    marginVertical: 20
  },
  title:{
    fontSize: 25,
    fontWeight: "700",
    color: "#2b2a2a"
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
    alignSelf: 'center'
  },
  button:{
    paddingVertical: 15,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d5d1d1',
    width: '80%',
    marginVertical: 8,
    borderRadius: 40,
    top: 10,
    alignSelf: 'center'
}
})




export default AddTransaction;