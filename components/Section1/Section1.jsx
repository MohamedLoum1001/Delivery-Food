import React from 'react'
import { View, StyleSheet, Text, Pressable, Image, ScrollView } from 'react-native'
import { Link } from 'expo-router';


const Section1 = () => {
    return (
        <View style={styles.Section1}>
            <ScrollView>

                <Image style={styles.Image}
                    source={require('../assets/food1.png')}
                />
                <Text style={styles.Section}>Food for everyone </Text>

                <Image style={styles.Img}
                    source={require('../assets/Group.png')}

                />

                <Link href={'/home'} style={styles.Btn} asChild>
                    <Pressable>
                        <Text style={styles.texte}>Get started</Text>
                    </Pressable>
                </Link>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    Section1: {
        flex: 1,
        backgroundColor: '#FF4B3A',
        // height: 1000,

    },

    Section: {
        color: '#fff',
        fontSize: 50,
        marginLeft: 20,
        marginTop: 50,
        fontWeight: 'bold',
        justifyContent: 'center',



    },
    Image: {
        borderRadius: 100,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginTop: 50,

    },
    Img: {
        width: 350,
        height: 400,
        borderRadius: 100,

    },
    Btn: {
        backgroundColor: 'white',
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        marginLeft: 80,
        marginTop: -30,
    },
    texte: {
        color: '#FF460A',
        fontWeight: '600',
        fontSize: 17,
        textAlign: 'center'
    }

});

export default Section1
