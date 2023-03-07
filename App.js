import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
//import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import themeContext from './config/themeContext';
import theme from './config/theme';
import { EventRegister } from 'react-native-event-listeners';
import React, { useState, useEffect } from 'react';

import HomeScreen from './screens/HomeScreen';
import RegistrationScreen from './screens/Registration';
import LoginScreen from './screens/Login';
import CreateBaby from './screens/CreateBaby';
import Calendar from './screens/CalendarScreen';
import Account from './screens/Account';
import Reminders from './screens/Reminders';
import Track from './screens/Track';
import Analysis from './screens/Analysis';
import { getFirebaseApp, getFirebaseAuth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import MainHomeScreen from './screens/MainHomeScreen';

//stack variable for page navigation in app

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CalendarTab() {
  return (

    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#7DC265',
      tabBarLabelStyle: {
        fontSize: 15,
      },

      tabBarStyle: {
        flex: 1,
        position: 'absolute',
        botttom: 25,
        elevation: 0,
        background: { backgroundColor: theme.background },
        height: 90,
      },
    }}>


      <Tab.Screen name="Reminders" component={Reminders} options={
        {
          tabBarIcon: ({ color, size }) =>
            (<MaterialCommunityIcons name="calendar-clock" size={size} color={color} />)
        }}
      />

      <Tab.Screen name="Calendars" component={Calendar} options={
        {
          tabBarIcon: ({ color, size }) =>
            (<Ionicons name='calendar-outline' color={color} size={size} />)
        }}
      />

      <Tab.Screen name="Track" component={Track} options={
        {
          tabBarIcon: ({ color, size }) =>
            (<Ionicons name='add-circle' color={color} size={size} />)
        }}
      />

      <Tab.Screen name="Analysis" component={Analysis} options={
        {
          tabBarIcon: ({ color, size }) =>
            (<Ionicons name='bar-chart' color={color} size={size} />)
        }}
      />

      <Tab.Screen name="Account" component={Account} options={
        {
          tabBarIcon: ({ color, size }) =>
            (<MaterialCommunityIcons name="account" size={size} color={color} />)
        }}
      />


    </Tab.Navigator>

  );
}



export default function App() {
  const [mode, setMode] = useState(false);
  const fb_app = getFirebaseApp();
  const fb_auth = getFirebaseAuth();

  

  useEffect(() => {

    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
      //console.log(data);
    }
    );
    return () => {

      EventRegister.removeEventListener(eventListener);
    };
  }
  );

  

  const [user, loading, error] = useAuthState(fb_auth);



  if (loading) {

  }

  if (error) {
    
  }

  if (user) {
    console.log("LOGGED IN APP")

    return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={mode === true ? DarkTheme : DefaultTheme}>

        <Stack.Navigator>

          <Stack.Screen name="MainHomeScreen" component={MainHomeScreen} initialParams={{user: user}} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="CreateBaby" component={CreateBaby} />
          <Stack.Screen name="Calendar" component={CalendarTab} options={{ headerShown: false }} />

        </Stack.Navigator>

      </NavigationContainer>
    </themeContext.Provider>
    );
  }

  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={mode === true ? DarkTheme : DefaultTheme}>

        <Stack.Navigator>

          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Create Baby" component={CreateBaby} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Calendar" component={CalendarTab} options={{ headerShown: false }} />

        </Stack.Navigator>

      </NavigationContainer>
    </themeContext.Provider>
  );
}



/* the bottom stuff was what originally was here but I just commented it out so that you guys can see
app.js working with the rest of the pages (w/o firebase)
*/
////////////////////////////////////////////////////////////////////////////////////////////////
/*
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import RegistrationScreen from './screens/Registration';
import LoginScreen from './screens/Login';
import CreateBaby from './screens/CreateBaby';
import { getFirebaseApp } from './Firebase';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'

//stack variable for page navigation in app
const Stack = createNativeStackNavigator();

export default function App() {

  const fb_app = getFirebaseApp();
  const fb_auth = getAuth(fb_app);

  const [user, loading, error] = useAuthState(fb_auth);



  if (loading) {

  }

  if (error) {

  }

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          />
          <Stack.Screen
          name="Create Baby"
          component={CreateBaby}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
*/

/* This is breaking the navigation container for some reason, so
   we'll fix this later

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
    */
//}


