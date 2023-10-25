import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet,  TouchableOpacity } from "react-native";
import Button from "../Utils/Button";
import { useNavigation } from '@react-navigation/native';


function SignIn() {

  const navigation = useNavigation()

  const handleLogin = () => {
    console.log('Navigating to Home');
    navigation.navigate('Home');
  };

  return (
    <View
      style={styles.first}
    >
      <View style={styles.login}>
        <View>
          <Text style={styles.text}>Email address</Text>
          <TextInput style={styles.input} placeholder="Enter your email" />
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput style={styles.input} placeholder="*  *  *  *  *  *  * " />
        </View>
        <Text style={styles.text1}>
          Forgot password ?
        </Text>
      </View>

      <View
        style={styles.second}
      >
        <Button title="Login"
          onPress={handleLogin} />
      </View>
      <TouchableOpacity style={styles.Btn} onPress={handleLogin}>
                <Text style={{ color: 'white' }}>Get started</Text>
            </TouchableOpacity>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  first: {
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingBottom: 80,
  },
  text: {
    paddingTop: 20
  },
  text1: {
    color: "#FA4A0C",
    paddingTop: 20
  },
  second: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  login: {
    display: "flex",
    alignItems: "space-beetwen",
    paddingTop: 10,
    width: 300,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
  },
  Btn: {
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 30,
    marginLeft: 80,
    marginTop: -70,
}

});
