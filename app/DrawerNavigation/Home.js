import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
    return (
        
        <View style={styles.container}>

            <Text>Home</Text>
            <View style={styles.second}>
                <Link href={'/Login/Login'} asChild>
                    <Pressable style={styles.Btn}>
                        <Text style={styles.textBtn}>Login</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    second: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 70,
        marginVertical: 25
    },
    Btn: {
        backgroundColor: '#FA4A0C',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,

    },
    textBtn: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600'
    }
})