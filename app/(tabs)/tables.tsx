import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';
import { Stack, Tabs } from 'expo-router'

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ScrollView } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

export default function Tables() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.titleContainer}>
      <Link style={styles.tableButton} href="/constructors">Constructors</Link>
      <Link style={styles.tableButton} href="/champions">Champions</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    height: 50,
  },
  tableButton: {
    backgroundColor: 'red',
  },
});
