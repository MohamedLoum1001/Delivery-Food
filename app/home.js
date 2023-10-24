import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'


const home = () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text>home</Text>
            
                <Pressable onPress={()=>router.back()}>
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
    texte: {
        fontSize: 20,
        fontWeight: '900'
    }
})