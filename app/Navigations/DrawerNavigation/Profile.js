import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react'

// const chevron = require("../../../assets/chevron-left.png")
const profile = require('../../../assets/Profil.png')
const card = require('../../../assets/Card.png')
const bank = require('../../../assets/Bank.png')
const paypal = require('../../../assets/Paypal.png')

const  Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.entete}>
        {/* <Image source={chevron} /> */}
        <View style={styles.texte}>
        {/* <Text style={styles.title}>My Profil</Text> */}
        </View>
      </View>

      <View style={styles.information}>
        <View>
          <Text style={styles.titre}>Information</Text>
          <View style={styles.divContainer}>
            <Image style={styles.image}
              source={profile}
            />
            <View style={styles.column}>
              <Text style={styles.p}>Marvis Ighedosa</Text>
              <Text style={styles.para}>dosamarvis@gmail.com</Text>
              <Text style={styles.paraTexte}>No 15 uti street off ovie palace road effurun delta state</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.titre}>Payment Method</Text>
          <View style={styles.div}>
            <View style={styles.option}>

              <View style={styles.right}>
                <View style={styles.logo}>
                  <Image style={styles.icons} source={card} />
                </View>
                <Text style={styles.libele}>Card</Text>
              </View>
            </View>

            <View style={styles.option}>
              <View style={styles.right}>
                <View style={styles.logo2}>
                  <Image source={bank} />
                </View>
                <Text style={styles.libele}>Bank account</Text>
              </View>
            </View>

            <View style={styles.option}>

              <View style={styles.right}>
                <View style={styles.logo3}>
                  <Image style={styles.icons3} source={paypal} />
                </View>
                <Text style={styles.libele}>Paypal</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.Bouton}>
        <Text style={styles.buttonText}>Start ordering</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Profile 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    position: "relative",
    display: 'flex',
    height: 500,
  },
  titre: {
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 10,
    marginTop: 10,
  },
  information: {
    display: 'flex',
    top: 0,
    alignItems: 'center'
  },
  divContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    display: "flex",
    left: 0,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    marginBottom: 30,
  },
  div: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  p: {
    fontSize: 16,
    fontWeight: '900',
  },
  para: {
    fontSize: 13,
    marginTop: 6,
  },
  paraTexte: {
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center',
    color: 'grey',
    position: "relative",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 150,
  },
  image: {
    marginRight: 10,
  },
  column: {
    margin: 10,
    marginRight: 50,
    paddingRight: 15,
  },
  option: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 10,
    width: 300,
  },
  logo: {
    backgroundColor: '#F47B0A',
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo2: {
    backgroundColor: '#EB4796',
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo3: {
    backgroundColor: '#0038FF',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  icons: {
    width: 18,
    height: 18,
  },
  icons3: {
    width: 12,
    height: 12,
  },
  libele: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
  },
  right: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderColor: 'grey',
    width: 220,
  },
  Bouton: {
    backgroundColor: '#FA4A0C',
    borderRadius: 50,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 70,
    marginVertical: 25,
    width: 200,
    height: 50,
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
  },
  entete: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    marginBottom: 40,
  },
  texte: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: '900'
  }
});