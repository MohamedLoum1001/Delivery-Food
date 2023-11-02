import React from "react";
import { Text,TextInput, View, StyleSheet, TouchableOpacity, Alert, Pressable, Image } from "react-native";
import Button from "../Utils/Button";

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';

export default function SignIn({navigation}) {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Création Utilisateur réussi !');
      Alert.alert('Inscription réussie !')
      const user = userCredential.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error);
      Alert.alert(error.message)
    })
  }
  
  return (
    <View
      style={styles.first}
    >
      <View style={styles.logo}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <View style={styles.tabContainer}>
            <Pressable onPress={() => navigation.navigate('Login')} >
              <Text style={styles.tab}>Login</Text>
            </Pressable>
            <Text style={styles.activeTab}>
             Sign-up
            </Text>
        </View>
      </View>
      <View style={styles.login}>
        <View>
          <Text style={styles.text}>Prenom et Nom</Text>
          <TextInput style={styles.input} placeholder="Enter your full name" />
        </View>
        <View>
          <Text style={styles.text}>Email address</Text>
          <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Enter your email" />
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="*  *  *  *  *  *  * " />
        </View>
      </View>

      <TouchableOpacity onPress={handleCreateAccount} style={styles.Btn}>
        <Text style={{ color: 'white', fontSize:  17, fontWeight: '600'}}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  first: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: "104%",
    paddingTop: 70,
    marginTop: -40 ,
    borderRadius: 35,
  },
  image: {
    width: 150,
    height: 162.38,
    marginBottom: 80,
    top: 50,
    // left: 136
  },
  text: {
    paddingTop: 20,
    fontWeight: "600",
    fontSize: 15,
    color: '#000000'
  },
  text1: {
    color: "#FA4A0C",
    paddingTop: 20,
    fontWeight: '600',
    fontSize: 17
  },
  second: {
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    flex: 1,
    display: "flex",
    alignItems: "space-beetwen",
    width: 300,
    paddingTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    fontSize: 17,
    fontWeight: '600'
  },
  second: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 100
  },
  Btn: {
    backgroundColor: '#FA4A0C',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 60,
    marginTop: 40,
    marginBottom: -40,
  },

  textBtn: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600'
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "baseline",
    bottom: -21,
    paddingBottom: 20,
    width: 250,
    alignItems: "center",
  },
  tab: {
    paddingEnd: 40,
    color: "black",
    fontSize: 16,
    fontWeight: "500",
    width: 120,
    paddingBottom: 15,
    alignItems: "center",
    marginLeft: 30,
    paddingBottom: 10,
  },
  activeTab: {
    marginEnd: 20,
    paddingEnd: 10,
    fontSize: 18,
    fontWeight: "500",
    borderBottomWidth: 2,
    borderColor: "#FA4A0C",
    paddingBottom: 8,
  },
});
