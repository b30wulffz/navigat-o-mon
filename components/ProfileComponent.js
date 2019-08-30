import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={
            <FontAwesome
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
            style={{ width: 250, height: 350 }}
            source={require('../assets/profile.png')}
          />

          <Text style={{ fontSize: 40, color: 'white', paddingVertical: 20 }}>
            or a Mirror!
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

export default Profile;
