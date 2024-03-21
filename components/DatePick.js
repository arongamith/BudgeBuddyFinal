import { View, Text, Button, } from 'react-native'
import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker'

const DatePick = ({open,title,date, onPress, onConfirm, onCancel}) => {

  return (
    <View>
      <Button title={title} onPress={onPress} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={onConfirm}
        onCancel={onCancel}
        mode="date"
        androidVariant='iosClone'
       
        
      />
    </View>
  )
}

export default DatePick