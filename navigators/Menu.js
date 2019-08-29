import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import { Icon } from 'react-native-elements';
import Home from './HomePage';
import AboutMe from '../components/AboutMe';
import Bla from '../components/BlaComponent';
import BlaBla from '../components/BlaBlaComponent';

const MainNavigator = createAppContainer(
  createDrawerNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor }) => (
            <Icon name="home" type="font-awesome" size={24} color={tintColor} />
          ),
        },
      },
      About: {
        screen: AboutMe,
        navigationOptions: {
          title: 'About Me',
          drawerLabel: 'About Me',
          drawerIcon: ({ tintColor }) => (
            <Icon
              name="hand-peace-o"
              type="font-awesome"
              size={24}
              color={tintColor}
            />
          ),
        },
      },
      Bla: {
        screen: Bla,
        navigationOptions: {
          title: 'Bla',
          drawerLabel: 'Bla',
          drawerIcon: ({ tintColor }) => (
            <Icon
              name="optin-monster"
              type="font-awesome"
              size={24}
              color={tintColor}
            />
          ),
        },
      },
      BlaBla: {
        screen: BlaBla,
        navigationOptions: {
          title: 'Bla Bla',
          drawerLabel: 'Bla Bla',
          drawerIcon: ({ tintColor }) => (
            <Icon
              name="user-secret"
              type="font-awesome"
              size={24}
              color={tintColor}
            />
          ),
        },
      },
    },
    {
      initialRouteName: 'Home',
      style: {
        backgroundColor: 'white',
      },
    }
  )
);

export default MainNavigator;