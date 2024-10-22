import { StyleSheet, FlatList, Text, View, SafeAreaView } from 'react-native';

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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  }
});
