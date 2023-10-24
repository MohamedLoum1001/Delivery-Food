import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'


const home = () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text>home</Text>

            <Pressable style={styles.btn} onPress={() => router.back()}>
                <Text style={styles.texte}>Go back home</Text>
            </Pressable>
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        borderRadius: 30,
        backgroundColor: 'blue',
        padding: 10,
        width: 200,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    texte: {
        fontSize: 15,
        fontWeight: '900',
        color: '#fff',
    },

})