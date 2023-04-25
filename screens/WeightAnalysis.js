import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import moment from 'moment';
import { Dimensions } from 'react-native';

const formatLabel = (date) => {
  const month = moment(date).format("MMM");
  const week = Math.floor(date.getDate() / 7) + 1;
  return `${month}W${week}`;
};

const generatePlaceholderData = () => {
  const data = [];
  const now = new Date();
  for (let i = 0; i < 12; i++) {
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i * 7);
    const weight = Math.round(Math.random() * + 7) + i;
    data.push({ weight, date: moment(date).format("YYYY-MM-DD") });
  }
  return data.reverse();
};

const placeholderData = generatePlaceholderData();

const chartData = {
  labels: placeholderData.map((item) => new Date(item.date)),
  datasets: [
    {
      data: placeholderData.map((item) => item.weight).reverse(),
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

export default function WeightAnalysis() {
  // show only last 7 weeks of data
  const chartDataLast7Weeks = {
    labels: chartData.labels.slice(-7),
    datasets: [
      {
        data: chartData.datasets[0].data.slice(-7),
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <LineChart
        data={chartDataLast7Weeks}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={styles.chart}
        yAxisSuffix=' lbs'
        formatXLabel={(value) => formatLabel(value)}
        contentInset={{ left: 0, right: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  chart: {
    marginLeft: 16,
  },
});