import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, } from 'react-native';
import DropdownComponent from '../components/DropDownList';



const AddTransaction = ({ navigation }) => {

  const [category, setCategory] = useState();
  const [type, setType] = useState(null);
  const [amount, setAmount] = useState();
  
  // List of Data
  const transactionType = [
    { label: 'Income', value: 'Income' },
    { label: 'Expenses', value: 'Expenses' },
  ];

  const incomeList = [
    { label: 'Salery', value: 'Salery' },
    { label: 'Business Income', value: 'Business Income'},
    { label: 'Rental Income', value: 'Rental Income'},
    { label: 'Investment Income', value: 'Investment Income'},
    { label: 'Side Hustle Income', value: 'Side Hustle Income'},
    { label: 'Pension', value: 'Pension'},
    { label: 'Interests', value: 'Interests'},
    { label: 'Child Support', value: 'Child Support'},
    { label: 'Royalities', value: 'Royalities'},
    { label: 'Bonuses', value: 'Bonuses'},
    { label: 'Tips', value: 'Tips'},
    { label: 'Commision Earnings', value: 'Commision Earnings'},
    { label: 'Gifts', value: 'gifts'},
    { label: 'Online Income (e.g., blogging, affiliate marketing) ', value: 'OnlineIncome'},
    { label: 'Part-Time Job Income', value: 'Part-Time Job'},
    { label: 'Schorlarship', value: 'Scholarship'},
    { label: 'Fellowship Stipend', value: 'Fellowship Stipend'},
    { label: 'Retirement Income', value: 'Retirement'},
    { label: 'Savings Withdrawal', value: 'Savings'},
    { label: 'Real Estate Income', value: 'Real Estate'},
    { label: 'Stock Options', value: 'Stock Options'},
    { label: 'Educational Reimburement', value: 'Educational Remburement'},
    { label: 'Money Awards', value: 'Money Awards'},
  ]

  const expenseList = [
    { label: 'Groceries', value: 'Groceries'},
    { label: 'Dning Out', value: 'Dining Out'},
    { label: 'Utilities', value: 'Utilities'},
    { label: 'Entertainment', value: 'Entertainment'},
    { label: 'Transportation', value: 'Transportation'},
    { label: 'Shopping', value: 'Shopping'},
    { label: 'Rent/ Mortgage', value: 'Rent'},
    { label: 'Healthcare', value: 'Healthcare'},
    { label: 'Insurance', value: 'Insurance'},
    { label: 'Education', value: 'Education'},
    { label: 'Clothing', value: 'Clothing'},
    { label: 'Home Maintenence', value: 'Home Maintenence'},
    { label: 'Travel', value: 'Travel'},
    { label: 'Personal Care', value: 'Personal Care'},
    { label: 'Communication (e.g., internet, phone)', value: 'Communication'},
    { label: 'Subscription Services (e.g., streaming, magazines)', value: 'Subscriptions'},
    { label: 'Gifts and Donations', value: 'Donations'},
    { label: 'Savings/ Investments', value: 'Savings'},
    { label: 'Fitness/ Wellness', value: 'Fitness'},
    { label: 'Childcare', value: 'Childcare'},
    { label: 'Pet Expenses', value: 'Pet Expenses'},
    { label: 'Taxes', value: 'Taxes'},
    { label: 'Loan Repayments', value: 'Loan Repayments'},
    { label: 'Miscellaneous', value: 'Miscellaneous'},
    { label: 'Hobbies', value: 'Hobbies'},
    { label: 'Emergency Fund', value: 'Emergency Fund'},
    { label: 'Furniture', value: 'Furniture'},
    { label: 'Technology', value: 'Technology'},
  ]

  // Check if type is income or expense
  
  let selectedList = [];

  if (type === 'Income') {
    selectedList = incomeList;
  } else if (type === 'Expenses') {
    selectedList = expenseList;
  }

  const onAddTransaction = ()=> {
    console.warn(category,type,amount)
  
  }
  
  return (
    <SafeAreaView style={styles.container}>
      
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
        disabled={!type || !category || !amount}
        onPress={onAddTransaction}
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
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: 10 
  },
  titleContainer:{
    alignSelf: 'center',
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