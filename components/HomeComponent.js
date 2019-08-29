import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Button, Icon, Header } from 'react-native-elements';
import {
  createStackNavigator,
  createNavigationContainer,
} from 'react-navigation';
import TopComponent from './TopComponent';
import Layer1 from './stackComponents/Layer1Component';
import Layer2 from './stackComponents/Layer2Component';

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onPress = () => {
    this.props.navigation.push('Layer1');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
          centerComponent={{ text: 'Navigat-o-mon', style: { color: '#fff' } }}
          containerStyle={{
            backgroundColor: '#4359CF',
            justifyContent: 'space-around',
            zIndex: 1,
          }}
        />

        <ImageBackground
          source={require('../assets/bg.png')}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{ width: 250, height: 230 }}
            source={require('../assets/pikaWelcome.png')}
          />

          <Text style={{ fontSize: 40, color: 'white', paddingVertical: 20 }}>
            Welcome Nerds!
          </Text>
          <View style={[{ width: '90%', margin: 10 }]}>
            <Button
              onPress={this.onPress}
              icon={
                <Icon
                  name="hand-pointer-o"
                  type="font-awesome"
                  color="#ffffff"
                />
              }
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 30,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title=" TAP HERE TO SEE THE MAGIC"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const MainStackNavigator = createStackNavigator(
  {
    Home: Home,
    Layer1: Layer1,
    Layer2: Layer2,
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default MainStackNavigator;