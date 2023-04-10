import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { EventRegister } from "react-native-event-listeners";
import themeContext from '../config/themeContext';
import { getFirebaseAuth } from '../Firebase';


//creating rows/ sections for each option
const SECTIONS = [
  {
    header: 'Preferences',
    icon: 'settings',
    items: [

      { icon: 'user', color: '#32c759', label: 'Account Information', type: 'link' },
      { icon: 'phone', color: '#fd2d54', label: 'Emergency Contact', type: 'link' },
      { icon: 'users', color: '#fe9400', label: 'Manage Accounts', type: 'link' },
      {
        //id: 'darkMode',
        icon: 'moon',
        color: '#007afe',
        label: 'Dark Mode',
        //setForm: false,
        type: 'toggle',
      },

    ],
  },
  {
    header: 'Help',
    icon: 'help-circle',
    items: [
      { icon: 'flag', color: '#8e8d91', label: 'Report Bug', type: 'link' },
      { icon: 'mail', color: '#007afe', label: 'Contact Us', type: 'link' },
    ],
  },

];


export default function AccountScreen({navigation, route}) {

  //const to witch between light and dark mode in togggle
  const theme = useContext(themeContext);
  const auth = getFirebaseAuth();
  const [mode, setMode] = useState(false);
  const user_account = route.params.user_account;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
        <View style={[styles.profile, { backgroundColor: theme.background }]}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={[styles.profileAvatarWrapper, { backgroundColor: theme.background }]}>
              <Image
                alt=""
                source={require("../assets/BabyTrackerLogo.png")}
                style={styles.profileAvatar}
              />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.profileAction}>
                  <FeatherIcon color="#fff" name="edit-3" size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View style={styles.profileBody}>
            <Text style={[styles.profileName, { color: theme.color }]}> {user_account.username} </Text>

            <Text style={[styles.Role, { color: theme.color }]}>
              Admin: Parent
            </Text>
          </View>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={[styles.section, { backgroundColor: theme.background }]} key={header}>
            <Text style={[styles.sectionHeader, { color: theme.color }]}>{header}</Text>
            {items.map(({ label, icon, type, value, color }, index) => {
              return (
                <TouchableOpacity
                  key={label}
                  onPress={() => {
                    {
                      console.log("This is the account button");
                      auth.signOut();

                    }
                  }}>
                  <View style={[styles.row, { backgroundColor: theme.background }]}>
                    <View style={[styles.rowIcon, { backgroundColor: color }]}>
                      <FeatherIcon color="#fff" name={icon} size={18} />
                    </View>

                    <Text style={[styles.rowLabel, { color: theme.color }]}>{label}</Text>

                    <View style={[styles.rowSpacer, { color: theme.color }]} />

                     
                    {type === 'toggle' && (
                      <Switch
                        value={mode}
                        onValueChange={(value) => {
                          setMode(value);
                          EventRegister.emit("changeTheme", value);

                        }
                        }

                      />
                    )}

                    {type === 'link' && (
                      <FeatherIcon
                        //color="#0c0c0c" //original color
                        color={theme.color}
                        name="chevron-right"
                        size={22}


                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  profile: {
    padding: 24,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatar: {
    width: 90,
    height: 90,
    borderRadius: 9999,
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  profileRole: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
