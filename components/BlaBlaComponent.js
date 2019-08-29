import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Icon, Header } from 'react-native-elements';

class BlaBla extends React.Component {
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
            style={{ width: 300, height: 480 }}
            source={require('../assets/blabla.png')}
          />

          <Text style={{ fontSize: 40, color: 'white', paddingVertical: 20 }}>
            Bla Bla.
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

export default BlaBla;
