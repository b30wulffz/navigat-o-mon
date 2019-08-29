import React from 'react';
import { View, ImageBackground, Image, Button, Icon } from 'react-native';

class Layer1 extends React.Component {
  static navigationOptions = {
    title: 'First Layer',
  };

  onPressBack = () => {
    this.props.navigation.pop();
  };

  onPressNext = () => {
    this.props.navigation.push('Layer2', {});
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
              onPress={this.onPressBack}
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Go back to Home Screen"
            />

            <Image
              style={{ width: 250, height: 230 }}
              source={require('../../assets/layer1.png')}
            />

            <Button
              onPress={this.onPressNext}
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Go to Second Layer"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Layer1;
