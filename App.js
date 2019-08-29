import React from 'react';
import { Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';

import Menu from './navigators/Menu';

export default () => (
  <View style={{ flex: 1 }}>
    <Menu />
  </View>
);
