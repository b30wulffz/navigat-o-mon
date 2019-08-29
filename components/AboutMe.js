import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Icon, Header } from 'react-native-elements';

class AboutMe extends React.Component {
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
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={{ color: '#fff', fontSize: 30 }}>Get to know me!</Text>

          <Image
            style={{ width: 270, height: 270 }}
            resizeMode="cover"
            source={require('../assets/me.png')}
          />
          <View
            style={{
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#fff', fontSize: 20 }}>
              Developed by: Shlok Pandey
            </Text>
            <Text style={{ color: '#fff', fontSize: 20 }}>
              Linkedin: @shl0k{' '}
            </Text>
            <Text style={{ color: '#fff', fontSize: 20 }}>
              GitHub: @b30wulffz{' '}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default AboutMe;
