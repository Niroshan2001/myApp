import React from 'react';

import {View, Text, Button, StyleSheet, Image, TextInput} from 'react-native';
//import MyComponent from './src/components/MyComponent';
//import CustomLabel from './src/components/CustomLabel';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from '@rneui/themed';

function LoginField() {
  return (
    <View
      style={{
        marginTop: 100,
      }}>
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
      <SignButton />
      <BottomSection />
    </View>
  );
}

function SignButton() {
  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <View
        style={{
          flex: 1,
          height: 70,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 40,
          }}>
          Sign In
        </Text>
      </View>
      <View style={{flex: 1, height: 70}}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'white',
            borderRadius: 25,
            alignSelf: 'flex-end',
            marginRight: 20,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon size={50} color="black" name="arrow-forward" type="ionican" />
        </View>
      </View>
    </View>
  );
}

function BottomSection() {
  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <View
        style={{
          flex: 1,
          height: 70,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 40,
          }}>
          Sign Up
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          height: 70,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'flex-end',
            marginRight: 20,
          }}>
          Forget Password?
        </Text>
      </View>
    </View>
  );
}

function App(): JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={sty.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        style={{flex: 1, backgroundColor: 'transparent'}}>
        <Image
          source={require('./assets/img/pexels-pixabay-235985.jpg')}
          style={{
            position: 'absolute',
            flex: 1,
            width: '100%',
            height: '100%',
          }}
        />

        <Text style={sty.text}>{'Welcome\nBack'}</Text>

        <LoginField />
      </KeyboardAwareScrollView>
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
