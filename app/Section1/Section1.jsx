import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Section1 = () => {
    const navigation = useNavigation()

    const handleLogin = () => {
        console.log('Navigating to Home');
        navigation.navigate('Home');
    };
    return (
        <View style={styles.Section1}>

            <Image style={styles.Image}
                source={require('../../assets/food1.png')}
            />
            <Text style={styles.Section}>Food for everyone </Text>

            <Image style={styles.Img}
                source={require('../../assets/Group.png')}

            />
            <TouchableOpacity style={styles.Btn} onPress={handleLogin}>
                <Text style={{ color: 'red' }}>Get started</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    Section1: {
        //   flex: 1,
        backgroundColor: '#FF4B3A',
        height: 1000,

    },

    Section: {
        color: '#fff',
        fontSize: 50,
        marginLeft: 50,
        marginTop: 80,
        justifyContent: 'center',



    },
    Image: {
        borderRadius: 100,
        backgroundColor: '#fff',
        marginLeft: 50,
        marginTop: 80,
        // marginBottom: 10,

    },
    Img: {
        width: 350,
        height: 400,
        borderRadius: 100,

    },
    Btn: {
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 30,
        marginLeft: 80,
        marginTop: -70,
    }

});

export default Section1
