import { Image, StyleSheet, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const key = process.env.EXPO_PUBLIC_KEY
const currentYear = new Date().getFullYear();

async function getRaces() {
  try {
    const response = await fetch(`https://v1.formula-1.api-sports.io/races?season=${currentYear}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v1.formula-1.api-sports.io",
        "x-rapidapi-key": key

      }
    })

    if(!response.ok) {
      throw new Error('No races for you!')
    }

    const races = await response.json();
    console.log(races.response)
    return races.response
  } catch (error) {
    console.error(error)
  }
}

const races = getRaces()

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.reactLogo} />}>
        <ThemedText>Races</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
