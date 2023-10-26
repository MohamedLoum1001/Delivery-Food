import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../Utils/Button";
import { useNavigation } from '@react-navigation/native';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';


function SignIn() {

  // const navigation = useNavigation()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Connecté !');
      const user = userCredential.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })
  }

  // const handleLogin = () => {
  //   console.log('Navigating to Home');
  //   navigation.navigate('Home');
  // };

  return (
    <View
      style={styles.first}
    >
      <View style={styles.login}>
        <View>
          <Text style={styles.text}>Email address</Text>
          <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Enter your email" />
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="*  *  *  *  *  *  * " />
        </View>
        <Text style={styles.text1}>
          Forgot password ?
        </Text>
      </View>

      <View style={styles.second}>
        {/* <Button title="Login"
          onPress={handleLogin} /> */}
      </View>
      <TouchableOpacity style={styles.Btn} onPress={handleSingIn}>
        <Text style={{ color: 'white', fontSize:  17, fontWeight: '600'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  first: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingBottom: 80,
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
    paddingBottom: 60,
  },
  login: {
    flex: 1,
    display: "flex",
    alignItems: "space-beetwen",
    paddingTop: 10,
    width: 300,
    marginLeft: 25
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    marginLeft: 80,
    marginTop: -70,
  }

});
