import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import moment from 'moment';

function generateData(numDays) {
    const today = new Date();
    const data = [];

    for (let i = 0; i < numDays; i++) {
        const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
        const time = Math.floor(Math.random() * 4 + 6); // generate a random sleeping time between 6 and 9 hours
        data.push({ time, date: moment(time).format('YYYY-MM-DD')});
    }

    return data;
}

const screenWidth = Dimensions.get('window').width;

export default function SleepAnalysis() {

    const data = generateData(7);

    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: data.map((item) => item.time),
                color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                strokeWidth: 2,
            },
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        yAxisInterval: 1,
      };

    

    return (
        <LineChart
            data={chartData}
            width={screenWidth}
            height={220}
            yAxisSuffix='h'
            fromZero={true}
            chartConfig={chartConfig}
            bezier
        />
    );
};