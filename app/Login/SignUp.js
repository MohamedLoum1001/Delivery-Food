import React from "react";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function SignIn() {

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

      <View style={styles.second}>
        <Link href={'/Login/Login'} asChild>
          <Pressable style={styles.Btn}>
            <Text style={styles.textBtn}>Register</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
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
  second: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 70,
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
  }
});
