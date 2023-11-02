import { StyleSheet, Text, View, TextInput, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Menu from '../../../components/Menu/Menu'

const Home = () => {
    return (

        <View style={styles.container}>
            <ScrollView>

                <View style={styles.image} >
                    <View style={styles.panier}>
                        <Image source={require('../../../assets/icons/panier.png')}
                        />

                    </View>
                </View>

                <View style={styles.form}>
                    <View style={styles.titre}>
                        <Text style={styles.textetitre}>Delicious</Text>
                        <Text style={styles.textetitre}>food for you</Text>
                    </View>

                    <View style={styles.input}>
                        <Image source={require('../../../assets/icons/icon-recherche.png')} style={styles.recherche} />
                        <TextInput placeholder='Search' style={styles.placeholder} />
                    </View>
                </View>

                {/* <View>
                    <Menu />
                </View> */}

                <View style={styles.cardImage}>
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Image source={require('../../../assets/images/thiebbouwex.jpeg')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.cardtitre}>Thiébou Dieun Bou Wékh</Text>
                            {/* <Text style={styles.texte}>tomato mix</Text> */}
                        </View>
                        <View style={styles.viewPrix}>
                            <Text style={styles.prix}>700 frc</Text>
                        </View>

                        <View style={styles.second}>

                            <Pressable style={styles.Btn}>
                                <Text style={styles.textBtn}>Add to</Text>
                                <Image
                                    source={require('../../../assets/panier.png')}
                                    style={{ width: 22, height: 22, tintColor: 'white' }}
                                />

                            </Pressable>
                        </View>

                    </View>


                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Image source={require('../../../assets/images/thieboudiene.jpg')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.cardtitre}>Thiébou Dieun Bou Khonk</Text>
                            {/* <Text style={styles.texte}>tomato mix</Text> */}
                        </View>
                        <View style={styles.viewPrix}>
                            <Text style={styles.prix}>700 frc</Text>
                        </View>
                        <View style={styles.second}>
                            <Pressable style={styles.Btn}>
                                <Text style={styles.textBtn}>Add to</Text>
                                <Image
                                    source={require('../../../assets/panier.png')}
                                    style={{ width: 22, height: 22, tintColor: 'white' }}
                                />
                            </Pressable>
                        </View>

                    </View>

                </View>

                <View style={styles.cardImage}>
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Image source={require('../../../assets/images/mafe.jpg')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.cardtitre}>Mafé</Text>
                            {/* <Text style={styles.texte}>tomato mix</Text> */}
                        </View>
                        <View style={styles.viewPrix}>
                            <Text style={styles.prix}>600 frc</Text>
                        </View>

                        <View style={styles.second}>

                            <Pressable style={styles.Btn}>
                                <Text style={styles.textBtn}>Add to</Text>
                                <Image
                                    source={require('../../../assets/panier.png')}
                                    style={{ width: 22, height: 22, tintColor: 'white' }}
                                />

                            </Pressable>
                        </View>

                    </View>


                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Image source={require('../../../assets/images/yassa.jpg')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.cardtitre}>Yassa</Text>
                            {/* <Text style={styles.texte}>tomato mix</Text> */}
                        </View>
                        <View style={styles.viewPrix}>
                            <Text style={styles.prix}>700 frc</Text>
                        </View>
                        <View style={styles.second}>
                            <Pressable style={styles.Btn}>
                                <Text style={styles.textBtn}>Add to</Text>
                                <Image
                                    source={require('../../../assets/panier.png')}
                                    style={{ width: 22, height: 22, tintColor: 'white' }}
                                />
                            </Pressable>
                        </View>

                    </View>

                </View>

                <View style={styles.cardImage}>
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Image source={require('../../../assets/images/niébé.jpeg')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.cardtitre}>Thiébou Niébé</Text>
                            {/* <Text style={styles.texte}>tomato mix</Text> */}
                        </View>
                        <View style={styles.viewPrix}>
                            <Text style={styles.prix}>700 frc</Text>
                        </View>

                        <View style={styles.second}>

                            <Pressable style={styles.Btn}>
                                <Text style={styles.textBtn}>Add to</Text>
                                <Image
                                    source={require('../../../assets/panier.png')}
                                    style={{ width: 22, height: 22, tintColor: 'white' }}
                                />

                            </Pressable>
                        </View>

                    </View>


                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Image source={require('../../../assets/images/thiebguinar.jpeg')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.cardtitre}>Thiébou Guinar</Text>
                            {/* <Text style={styles.texte}>tomato mix</Text> */}
                        </View>
                        <View style={styles.viewPrix}>
                            <Text style={styles.prix}>1000 frc</Text>
                        </View>
                        <View style={styles.second}>
                            <Pressable style={styles.Btn}>
                                <Text style={styles.textBtn}>Add to</Text>
                                <Image
                                    source={require('../../../assets/panier.png')}
                                    style={{ width: 22, height: 22, tintColor: 'white' }}
                                />
                            </Pressable>
                        </View>

                    </View>

                </View>

                <View style={styles.cardImage}>
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Image source={require('../../../assets/images/bissap.jpeg')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.cardtitre}>Thiébou Dieun Bou Wékh</Text>
                            {/* <Text style={styles.texte}>tomato mix</Text> */}
                        </View>
                        <View style={styles.viewPrix}>
                            <Text style={styles.prix}>200 frc</Text>
                        </View>

                        <View style={styles.second}>

                            <Pressable style={styles.Btn}>
                                <Text style={styles.textBtn}>Add to</Text>
                                <Image
                                    source={require('../../../assets/panier.png')}
                                    style={{ width: 22, height: 22, tintColor: 'white' }}
                                />

                            </Pressable>
                        </View>

                    </View>


                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Image source={require('../../../assets/images/bouye.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.cardtitre}>Thiébou Dieun Bou Khonk</Text>
                            {/* <Text style={styles.texte}>tomato mix</Text> */}
                        </View>
                        <View style={styles.viewPrix}>
                            <Text style={styles.prix}>200 frc</Text>
                        </View>
                        <View style={styles.second}>
                            <Pressable style={styles.Btn}>
                                <Text style={styles.textBtn}>Add to</Text>
                                <Image
                                    source={require('../../../assets/panier.png')}
                                    style={{ width: 22, height: 22, tintColor: 'white' }}
                                />
                            </Pressable>
                        </View>

                    </View>

                </View>

            </ScrollView>
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
    image: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 100,
        marginTop: -70,
    },

    panier: {
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },

    titre: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: 120,
        marginTop: -50
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textetitre: {
        fontSize: 34,
        fontWeight: '700'

    },

    input: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        border: 'none',
        marginBottom: 100,
        borderRadius: 30,
        backgroundColor: '#EFEEEE',
        padding: 10,
        marginTop: 20,
        width: 314,
        height: 60,
        marginRight: 35,
    },
    recherche: {
        marginLeft: 10,
        marginTop: 10
    },
    placeholder: {
        color: '#000000',
        marginLeft: 20,
        fontSize: 17,
        fontWeight: '600',
        width: 250
    },
    cardImage: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    
    },
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
        paddingTop: 20
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
        fontSize: 17 ,
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