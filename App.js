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
}


