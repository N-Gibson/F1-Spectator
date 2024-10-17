import React from 'react';
import { View, Text } from 'react-native';

export default function Race(props:any) {
    return (
      <View>
        <Text>{props}</Text>
        <Text>Am I rendering?</Text>
      </View>
    );
  };
