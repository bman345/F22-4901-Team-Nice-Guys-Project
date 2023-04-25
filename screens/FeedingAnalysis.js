import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import moment from 'moment';

const FeedingAnalysis = () => {

  const feedData = [
    { time: '2022-04-24T01:00:00.000Z', date: '2023-04-24' },
    { time: '2022-04-24T02:30:00.000Z', date: '2023-04-24' },
    { time: '2022-04-24T04:45:00.000Z', date: '2023-04-24' },
    { time: '2022-04-24T06:15:00.000Z', date: '2023-04-24' },
    { time: '2022-04-24T20:00:00.000Z', date: '2023-04-24' },
    { time: '2022-04-24T22:30:00.000Z', date: '2023-04-24' },
    { time: '2022-04-25T01:15:00.000Z', date: '2022-04-25' },
    { time: '2022-04-25T03:30:00.000Z', date: '2022-04-25' },
    { time: '2022-04-25T06:00:00.000Z', date: '2022-04-25' },
    { time: '2022-04-25T08:45:00.000Z', date: '2022-04-25' },
    { time: '2022-04-25T11:15:00.000Z', date: '2022-04-25' },
    { time: '2022-04-25T13:30:00.000Z', date: '2022-04-25' },
    { time: '2022-04-25T16:00:00.000Z', date: '2022-04-25' },
    { time: '2022-04-25T18:30:00.000Z', date: '2022-04-25' },
    { time: '2022-04-25T21:00:00.000Z', date: '2022-04-25' },
    { time: '2022-04-25T23:15:00.000Z', date: '2022-04-25' }
  ];

  const getChartData = (feedData) => {
    // Create an array with empty objects for each day of the week
    const chartData = [...Array(7)].map(() => ({ date: '', count: 0 }));

    // Loop through the feedData array and increment the count for the appropriate day
    feedData.forEach((feed) => {
      const dayOfWeek = new Date(feed.time).getDay();

      chartData[dayOfWeek].date = moment(feed.time).format('MMM DD');
      chartData[dayOfWeek].count++;
    });

    return chartData;
  };

  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: getChartData(feedData).map((item) => item.count),
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // blue color for bars
      },
    ],
  };

  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  return (
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        yAxisSuffix=' meals'
        chartConfig={chartConfig}
        style={{ marginVertical: 8 }}
      />
  )
};

export default FeedingAnalysis;




