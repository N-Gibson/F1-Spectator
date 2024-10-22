import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState,} from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme, FlatList, Text, View, SafeAreaView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function Race({races}: any) {

  type RaceProps = { raceName: string }

  const Race = ({ raceName }: RaceProps ) => (
    <View>
      <Text style={styles.container}>{raceName}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList data={races} renderItem={({ item }) => <Race raceName={item.competition.name}/>}/>
    </SafeAreaView>

    // <Text style={styles.container}>{races[6].competition.name}</Text>
    // <Text>{races.map((race: { competition: { name: any; }; }) => race.competition.name)}</Text>
  );
}

const styles = StyleSheet.create({
headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
    },
  container: {
    backgroundColor: 'white',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    color: '#808080',
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
  color: {
    color: 'white',
  }
});
