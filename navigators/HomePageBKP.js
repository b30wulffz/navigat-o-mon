import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Home from '../components/HomeComponent';
import Search from '../components/SearchComponent';
import Profile from '../components/ProfileComponent';
import Manager from '../components/ManagerComponent';
import Notification from '../components/NotificationComponent';
import Top from '../components/TopComponent';

import { Icon } from 'react-native-elements';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `md-home`;
  } else if (routeName === 'Search') {
    iconName = `md-search`;
  } else if (routeName === 'Profile') {
    iconName = `ios-person`;
  } else if (routeName === 'Manager') {
    iconName = `ios-paper-plane`;
  } else if (routeName === 'Notification') {
    iconName = `ios-notifications`;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const AppContainer = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Search: { screen: Top },
    Profile: { screen: Profile },
    Manager: { screen: Manager },
    Notification: { screen: Notification },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'rgba(0,0,0,0.1)',
      },
    },
  }
);

export default AppContainer;
