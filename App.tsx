import React from 'react';

import {View, Text, Button, StyleSheet, Image, TextInput} from 'react-native';
import MyComponent from './src/components/MyComponent';
import CustomLabel from './src/components/CustomLabel';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {Icon} from '@rneui/themed';

function LoginField() {
  return (
    <View
      style={{
        marginTop: 100,
      }}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginTop: 30,
            height: 50,
          }}>
          <TextInput
            style={{
              height: 50,
              width: '100%',
              paddingLeft: 20,
              fontSize: 20,
            }}
            placeholder="Your Email"
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginTop: 30,
            height: 50,
          }}>
          <TextInput
            style={{
              height: 50,
              width: '100%',
              paddingLeft: 20,
              fontSize: 20,
            }}
            placeholder="Password"
            placeholderTextColor="black"
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

function App(): JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={sty.container}>
      <Image
        source={require('./assets/img/pexels-pixabay-235985.jpg')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <Text style={sty.text}>{'Welcome\nBack'}</Text>
      <Icon size={60} color="white" name="arrow-forward" type="ionican" />
      <LoginField />
    </View>
  );
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 100,
  },
});

export default App;
