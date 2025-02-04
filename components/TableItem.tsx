import { StyleSheet, Text, View, ScrollView } from 'react-native';

export function TableItem({item}: any) {

  type TableItemProps = { item: string }

  const TableItem = ({ item }: TableItemProps ) => (
    <View>
      <Text style={styles.content}>{item}</Text>
    </View>
  );

  return (
    <ScrollView>
        <p>Max Verstappen</p>
        <p>Position: 1</p>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    color: 'black',
  }
});
