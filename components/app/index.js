import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Button from "./Utils/Button";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.Section1}>
      <Image style={styles.Image} source={require("../assets/food1.png")} />
      <Text style={styles.Section}>Food for everyone </Text>

      <Image style={styles.Img} source={require("../assets/Group.png")} />
      <Link href="/login/Login">
        <Pressable style={styles.Btn}>
          <Text style={styles.textbtn}>Get started</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  Section1: {
    flex: 1,
    backgroundColor: "#FF4B3A",
    height: 1000,
  },

  Section: {
    color: "#fff",
    fontSize: 50,
    marginLeft: 50,
    marginTop: 20,
    justifyContent: "center",
  },
  Image: {
    borderRadius: 40,
    backgroundColor: "#fff",
    marginLeft: 30,
    padding: 5,
    paddingleft: 20,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 10,
    width: 47,
    height: 51,
  },
  Img: {
    width: 350,
    height: 400,
    borderRadius: 100,
  },
  Btn: {
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 30,
    marginLeft: 80,
    marginTop: -70,
  },
  textbtn:{
    color: 'red'
  }
});
