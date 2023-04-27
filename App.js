import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
//import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import themeContext from './config/themeContext';
import theme from './config/theme';
import { EventRegister } from 'react-native-event-listeners';
import React, { useState, useEffect } from 'react';

import InitialScreen from './screens/InitialScreen';
import RegistrationScreen from './screens/Registration';
import LoginScreen from './screens/Login';
import CreateBaby from './screens/CreateBaby';
import Feeding from './screens/Feeding';
import Track from './screens/Track';
import Doctor from './screens/Doctor';
import Medication from './screens/Medication';
import Diaper from './screens/Diaper';
import Sleep from './screens/Sleep';




import { getFirebaseApp, getFirebaseAuth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import HomeScreen from './screens/HomeScreen';
import AccInfoScreen from './screens/AccInfo';
import EmergencyContactScreen from './screens/Econtact';

//stack variable for page navigation in app

const Stack = createNativeStackNavigator();
/*
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

*/

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

          <Stack.Screen name="HomeScreen" component={HomeScreen} initialParams={{user: user}} />
          <Stack.Screen name="Feedings" component={Feeding}/>
          <Stack.Screen name="Tracks" component={Track}/>
          <Stack.Screen name="Doc" component={Doctor} />
          <Stack.Screen name="Sleeps" component={Sleep} />
          <Stack.Screen name="Meds" component={Medication} />
          <Stack.Screen name="Diapers" component={Diaper} />
          

        </Stack.Navigator>

      </NavigationContainer>
    </themeContext.Provider>
    );
  }

  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={mode === true ? DarkTheme : DefaultTheme}>

        <Stack.Navigator>

          <Stack.Screen name="Initial" component={InitialScreen} />
          <Stack.Screen name="Create Baby" component={CreateBaby} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="AccInfo" component={AccInfoScreen} />
          <Stack.Screen name="Emergency Contact" component={EmergencyContactScreen} />
          

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


