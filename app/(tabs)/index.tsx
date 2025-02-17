import { Image, StyleSheet, Platform, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { Race } from '@/components/Race'

export default function HomeScreen() {
  const [races, setRaces] = useState()

  useEffect(() => {
    const getRaces = async () => {
      const currentYear = new Date().getFullYear();
      const key:any = process.env.EXPO_PUBLIC_KEY
      const data = await fetch(`https://v1.formula-1.api-sports.io/races?season=${2022}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "v1.formula-1.api-sports.io",
            "x-rapidapi-key": key
    
          }
        })

        const races = await data.json()
        console.log(races)
        setRaces(races.response)
    }

    getRaces()
    .catch(console.error)
  }, [])

  return (
    <ScrollView>
        <Race style={styles.container} races={races}></Race>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});
