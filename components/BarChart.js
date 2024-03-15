import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-chart-kit'

const BarChartComponent = ({data}) => {
  return (
    <View>
      <BarChart
        data={data}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel={" Rs "}
        flatColor={true}
        fromZero={true}
        withInnerLines={false}
        showBarTops={false}
        withCustomBarColorFromData={true}
        chartConfig={{
          backgroundColor: "transparent",
          backgroundGradientFrom: "#f2f2f2",
          backgroundGradientTo: "#f2f2f2",
          backgroundGradientToOpacity: 0,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          barPercentage: 0.3,
        }}
      />
    </View>
  )
}

export default BarChartComponent;