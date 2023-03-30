import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { useListVals } from 'react-firebase-hooks/database';
import { getFirebaseAuth, getReference } from '../Firebase';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from '../config/theme';
import Reminders from './Reminders';
import Track from './Track';
import Ionicons from '@expo/vector-icons/Ionicons';
import Analysis from './Analysis';
import Calendar from './CalendarScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Account from './Account';

const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation, route }) {

    const auth = getFirebaseAuth();
    const user = route.params.user;
    const [snapshot, loading_db, error_db] = useListVals(getReference(`accounts/${user.uid}`));




    if (snapshot && snapshot[0] != undefined) {
        const user_data = { email: snapshot[0], phone: snapshot[1], username: snapshot[2], baby_data: snapshot[3], uid: user.uid };
        // console.log(snapshot)
        console.log("HOMESCREEN: ", user_data)

        /*return (
            <View style={styles.container}>
                <Image style={styles.image} source={require("../assets/BabyTrackerLogo2.png")} />
                <Pressable style={styles.Button1} onPress={() => navigation.navigate("Account", {user_data: user_data})}>
                    <Text style={styles.Text}>Account</Text>
                </Pressable>
                <Pressable style={styles.Button2} onPress={() => navigation.navigate("CreateBaby", {user_data: user_data})}>
                    <Text style={styles.Text}>Create Baby</Text>
                </Pressable>
                <Pressable style={styles.Button2} onPress={() => auth.signOut()}>
                    <Text style={styles.Text}>Log out</Text>
                </Pressable>
                <StatusBar style="auto" />
            </View>
        );*/

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

                
                <Tab.Screen name="Reminders" component={Reminders} initialParams={{ user_data: user_data }} options={
                    {
                        tabBarIcon: ({ color, size }) =>
                            (<MaterialCommunityIcons name="calendar-clock" size={size} color={color} />)
                    }}
                />

                <Tab.Screen name="Calendars" component={Calendar} initialParams={{ user_data: user_data }} options={
                    {
                        tabBarIcon: ({ color, size }) =>
                            (<Ionicons name='calendar-outline' color={color} size={size} />)
                    }}
                />

                <Tab.Screen name="Track" component={Track} initialParams={{ user_data: user_data }} options={
                    {
                        tabBarIcon: ({ color, size }) =>
                            (<Ionicons name='add-circle' color={color} size={size} />)
                    }}
                />

                <Tab.Screen name="Analysis" component={Analysis} initialParams={{ user_data: user_data }} options={
                    {
                        tabBarIcon: ({ color, size }) =>
                            (<Ionicons name='bar-chart' color={color} size={size} />)
                    }}
                />

                <Tab.Screen name="Account" component={Account} initialParams={{ user_data: user_data }} options={
                    {
                        tabBarIcon: ({ color, size }) =>
                            (<MaterialCommunityIcons name="account" size={size} color={color} />)
                    }}
                />


            </Tab.Navigator>

        );
    } else
        return null;

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D2FFB7',
    },

    Title: {
        fontSize: 60,
        fontWeight: 'bold',
    },

    Button1: {
        padding: 10,
        backgroundColor: '#7DC265',
        width: 294,
        height: 64,
        borderRadius: 6,
        marginBottom: 25,
        marginTop: 40,
    },

    image: {
        height: 200,
        width: 200,
        marginBottom: 40,
        marginLeft: 40,
    },


    Button2: {
        padding: 10,
        backgroundColor: '#82A16E',
        width: 294,
        height: 64,
        borderRadius: 6,
        marginBottom: 25,
        marginTop: 25,
    },

    Text: {
        fontSize: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});