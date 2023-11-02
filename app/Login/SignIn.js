import React, { useState } from "react";
import { Image,Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, Pressable } from "react-native";
import Button from "../Utils/Button";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';

// const navigation = useNavigation()
function SignIn({navigation}) {

  // const navigation = useNavigation()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Connecté !');
      Alert.alert("Connexion reussi !");
      navigation.navigate('Home');
      const user = userCredential.user;
    })
    .catch(error => {
      console.log(error);
    })
  }


  // const handleForgetPassword = () => {
  //   // Alert.alert(email)
    
  //   sendSignInLinkToEmail(auth, email)
  //     .then(() => {
  //       // The link was successfully sent. Inform the user.
  //       Alert.alert('Vérifier dans votre boite email, nous vous avons envoyé un lien.')
        
  //       // Save the email locally so you don't need to ask the user for it again
  //       // if they open the link on the same device.
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ...
  //       console.log({error});
  //     });
  //     // Alert.alert("jer")
  // } Link

  const forgotPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Succès : l'e-mail de réinitialisation du mot de passe a été envoyé
        alert("l'e-mail de réinitialisation du mot de passe a été envoyé");
        // navigate("/")
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // Erreur : échec de l'envoi de l'e-mail de réinitialisation du mot de passe
        console.error("Erreur lors de l'envoi de l'e-mail de réinitialisation du mot de passe", error);
        if (error.code === "auth/missing-email") {
          alert('il faut saisir un email valide')
        }
        if (error.code === "auth/user-not-found") {
          alert("l'utilisateur n'existe pas")
        }

      });
    
    // Réinitialisez les champs du formulaire
    setEmail("")
  };

  // const handleLogin = () => {
  //   console.log('Navigating to Home');
  //   navigation.navigate('Home');
  // };

  return (
    <View
      style={styles.first}
    >
      <View style={styles.logo}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <View style={styles.tabContainer}>
            <Text style={styles.activeTab}>
              Login
            </Text>
            <Pressable onPress={() => navigation.navigate('Signup')} >
              <Text style={styles.tab}>Sign-up</Text>
            </Pressable>
        </View>
      </View>
      <View>
        <View style={styles.login}>
          <View>
            <Text style={styles.text}>Email address</Text>
            <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Enter your email" />
          </View>
          <View>
            <Text style={styles.text}>Password</Text>
            <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="*  *  *  *  *  *  * " />
          </View>
          <TouchableOpacity onPress={forgotPassword}>
            <Text style={styles.text1}>
              Forgot password ?
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.second}>
          <Button title="Login"
            onPress={handleLogin} />
        </View> */}
        <TouchableOpacity style={styles.Btn} onPress={handleSingIn}>
          <Text style={{ color: 'white', fontSize:  17, fontWeight: '600'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignIn;

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
    margin: 0,
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
    fontSize: 17,
    marginBottom: 50,
  },
  second: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 100
  },
  login: {
    display: 'flex',
   flexDirection: 'column',
    alignItems: "space-beetwen",
    paddingTop: 10,
    width: 300,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    fontSize: 17,
    fontWeight: '600'
  },
  Btn: {
    backgroundColor: '#FA4A0C',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 60,
    marginTop: 70,
    marginLeft: 15,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "baseline",
    bottom: -21,
    paddingBottom: 20,
    width: 200,
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
