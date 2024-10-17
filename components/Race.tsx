import React from 'react';
import { View, Text } from 'react-native';

type RaceProps = {
    circuit : object
    name: string
}

const Race = (props : RaceProps) => {
    return (
      <View>
        <Text>{props.circuit.name}</Text>
      </View>
    );
  };

export default Race
