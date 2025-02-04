import { StyleSheet, FlatList, Text, View, SafeAreaView, ScrollView } from 'react-native';

export function Race({races}: any) {

  type RaceProps = { raceName: string }

  const Race = ({ raceName }: RaceProps ) => (
    <View>
      <Text style={styles.content}>{raceName}</Text>
    </View>
  );

  return (
    <ScrollView>
      <FlatList data={races} renderItem={({ item }) => <Race raceName={item.competition.name}/>}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    color: 'black',
  }
});
