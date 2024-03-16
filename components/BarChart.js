import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-chart-kit'

const BarChartComponent = ({data}) => {
  return (
    <View>
      <BarChart
        data={data}
        width={Dimensions.get("window").width -20}
        height={280}
        yAxisLabel="Rs "
        flatColor={true}
        fromZero={true}
        withInnerLines={true}
        showBarTops={false}
        withCustomBarColorFromData={true}
        verticalLabelRotation={30}
        chartConfig={{
          backgroundColor: "transparent",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          backgroundGradientToOpacity: 0,
          decimalPlaces: 0, 
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          barPercentage: 0.3,
        
        }}
        style={{
          borderRadius: 16,
          shadowColor: '#171717',
          shadowOffset: {width: 2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
        
        
      />
    </View>
  )
}

export default BarChartComponent;