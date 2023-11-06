import { View, Image, Text, StyleSheet, SafeAreaView, Pressable, ScrollView } from "react-native";
import React from 'react'
import { Link } from "expo-router";

const Favorite = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      
        <View style={styles.icone}>
          <View style={styles.chevron}>
            <Image source={require("../../../assets/chevron-left.png")} />
          </View>
          <View style={styles.favorite}>
            <Image source={require("../../../assets/Favorite.png")} />
          </View>
        </View>

        <View style={styles.image}>
          <Image source={require("../../../assets/Plat.png")} />
        </View>
        <View style={styles.desc}>
          <Text style={styles.titre}>Veggie tomato mix</Text>
          <Text style={styles.price}>N1,900</Text>
          <View>
            <Text style={styles.soustitre}>Delivery info</Text>
            <Text style={styles.description}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
          </View>
          <View>
            <Text style={styles.soustitre}>Delivery info</Text>
            <Text style={styles.description}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
          </View>
          <View style={styles.second}>
            <Link href={'/Login/Login'} asChild>
              <Pressable style={styles.Btn}>
                <Text style={styles.textBtn}>Add to cart</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      {/* </SafeAreaView> */}
      </ScrollView>
    </View>
  );
}

export default Favorite

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 50
  },
  icone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: -10
  },
  chevron: {
    display: 'flex',
    marginLeft: 20
  },
  favorite: {
    display: 'flex',
    marginRight: 20
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 200
  },
  cart: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  desc: {
    position: 'relative',
    marginStart: 20,
    width: 350,
    marginTop: -10
  },
  titre: {
    fontSize: 28,
    fontWeight: '900',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  price: {
    color: 'red',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  soustitre: {
    fontSize: 17,
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 20,
  },
  second: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 70,
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
  },
})