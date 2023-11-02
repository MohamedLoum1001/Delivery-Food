import { View, StyleSheet } from 'react-native'
import Layout from '../../components/Layout/Layout';

export default function navigation() {
    return (
        <View style={styles.container}>
            <Layout />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
});
