import { Image, StyleSheet, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { Race } from '@/components/Race'


// async function getRaces() {
//   const []
//   const currentYear = new Date().getFullYear();
//   const key = process.env.EXPO_PUBLIC_KEY

//   try {
//     const response = await fetch(`https://v1.formula-1.api-sports.io/races?season=${currentYear}`, {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "v1.formula-1.api-sports.io",
//         "x-rapidapi-key": key

//       }
//     })

//     if(!response.ok) {
//       throw new Error('No races for you!')
//     }

//     return response
//   } catch (error) {
//     console.error(error)
//   }
// }

// let races = getRaces()
// console.log(races)

const sampleData: any = [
  {
    id: 1857,
    competition: {
      id: 2,
      name: "Bahrain Grand Prix",
      location: {
      country: "Bahrain",
      city: "Sakhir",
      }
    },
    circuit: {
      id: 2,
      name: "Bahrain International Circuit",
      image: "https://media.api-sports.io/formula-1/circuits/2.png",
    },
    season: 2024,
    type: "Race",
    laps: {
    current: null,
    total: 57,
    },
    fastest_lap: {
    driver: {
    id: 25,
    },
    time: "1:32.608",
    },
    distance: "308.5 Kms",
    timezone: "utc",
    date: "2024-03-02T15:00:00+00:00",
    weather: null,
    status: "Completed",
  }
]

export default function HomeScreen() {
  const [races, setRaces] = useState()

  useEffect(() => {
    const getRaces = async () => {
      const currentYear = new Date().getFullYear();
      const key = process.env.EXPO_PUBLIC_KEY
      const data = await fetch(`https://v1.formula-1.api-sports.io/races?season=${currentYear}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "v1.formula-1.api-sports.io",
            "x-rapidapi-key": key
    
          }
        })

        const races = await data.json()
        setRaces(races.response)
    }

    getRaces()
    .catch(console.error)
  }, [])

  console.log(races)

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.reactLogo} />}>
        <Race races={races}></Race>
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
