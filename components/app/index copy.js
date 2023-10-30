import { Link } from 'expo-router';
import { View, StyleSheet, Text, Pressable, Image, ScrollView } from 'react-native'

export default function Page() {
  return (
    <View style={styles.container}>
      <View >
        <ScrollView>
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
