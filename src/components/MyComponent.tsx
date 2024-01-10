import {View, Text, Button} from 'react-native';
import React from 'react';

const MyComponent = () => {
  return (
    <View>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: 'red',
        }}>
        Hello
      </Text>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: 'green',
          //marginLeft: 10,
        }}>
        React Native
      </Text>
      <Button title="Click me" />
    </View>
  );
};

export default MyComponent;
