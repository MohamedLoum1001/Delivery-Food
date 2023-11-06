import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'

const ProductCard = ({ imageSource, title, price }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image source={imageSource} style={styles.img} />
                <Image source={imageSource} style={styles.img} />
            </View>
            <View style={styles.title}>
                <Text style={styles.cardtitre}>{title}</Text>
            </View>
            <View style={styles.viewPrix}>
                <Text style={styles.prix}>{price} frc</Text>
            </View>
            <View style={styles.second}>
                <Pressable style={styles.Btn}>
                    <Text style={styles.textBtn}>Add to</Text>
                    <Image
                        source={require('../../assets/panier.png')}
                        style={{ width: 22, height: 22, tintColor: 'white' }}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 30,
        position: 'relative',
        zIndex: 1,
        marginLeft: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
        position: 'relative',
        zIndex: 1
    },
    cardHeader: {
        elevation: 5,
        position: 'absolute',
        zIndex: 300,
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    img: {
        borderRadius: 50,
        marginTop: -160,
        width: 100,
        height: 100,
        display: 'flex'
    },
    title: {
        paddingTop: 100
    },
    cardtitre: {
        fontWeight: '600',
        fontSize: 17,
        textAlign: 'center'
    },
    texte: {
        fontWeight: '600',
        fontSize: 22,
        textAlign: 'center'
    },
    viewPrix: {
        marginTop: 20,
    },
    prix: {
        color: '#FA4A0C',
        fontSize: 17,
        fontWeight: '700',
        textAlign: 'center'
    },
    second: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        // marginHorizontal: 70,
        marginVertical: 25
    },
    Btn: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: '#FA4A0C',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 125,
        height: 50,

    },
    textBtn: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600'
    },
})