import React from "react";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

// import Button from "../Utils/Button";
// import { useNavigation } from '@react-navigation/native';


function SignIn() {

  // const navigation = useNavigation()

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

      {/* <View
        style={styles.second}
      >
        <Button title="Login"
          onPress={handleLogin} />
      </View> */}
      <View style={styles.second}>
        <Link href={'/DrawerNavigation/Home'} asChild>
          <Pressable style={styles.Btn}>
            <Text style={styles.textBtn}>Login</Text>
          </Pressable>
        </Link>
      </View>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    marginLeft: 50,
    marginTop: -70,
  },
  textBtn: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600'
  }

});
