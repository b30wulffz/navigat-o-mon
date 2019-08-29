import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Icon, Header } from 'react-native-elements';

class Bla extends React.Component {
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
            style={{ width: 260, height: 350 }}
            source={require('../assets/bla.png')}
          />

          <Text style={{ fontSize: 40, color: 'white', paddingVertical: 20 }}>
            Bla.
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

export default Bla;
