import React from 'react';
import { View, ImageBackground, Image, Button } from 'react-native';

class Layer2 extends React.Component {
  static navigationOptions = {
    title: 'Second Layer',
  };

  onPressGoBack = () => {
    this.props.navigation.pop();
  };

  onPressToTop = () => {
    this.props.navigation.popToTop();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../../assets/bg.png')}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={[
              {
                width: '90%',
                margin: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
                flex: 1,
              },
            ]}>
            <Button
              onPress={this.onPressGoBack}
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Go Back To Previous Layer"
            />

            <Image
              style={{ width: 250, height: 230 }}
              source={require('../../assets/layer2.png')}
            />

            <Button
              onPress={this.onPressToTop}
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Directly Go Back To Home"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Layer2;
