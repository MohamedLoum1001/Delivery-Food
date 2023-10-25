import React, { useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Login() {

  const [view, setView] = useState('login'); // État pour suivre la vue actuelle
  
  return (
    <View style={styles.first}>
      <View style={styles.second}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <View style={styles.tabContainer}>
          <Text
            style={view === "login" ? styles.activeTab : styles.tab}
            onPress={() => setView("login")} // Définissez la vue sur "login" lors du clic
          >
            Login
          </Text>
          <Text
            style={view === "signup" ? styles.activeTab : styles.tab} 
            
            onPress={() => setView("signup")} // Définissez la vue sur "signup" lors du clic
          >
            Sign-up
          </Text>
        </View>
      </View>
      {view === "login" ? (
        <SignIn /> // Affichez le composant SignIn lorsque view est "login"
      ) : (
        <SignUp /> // Affichez le composant SignUp lorsque view est "signup"
      )}
      
    </View>
  );
}

const handleButtonPress = (view) => {
  if (view === "login") {
    // Gérez l'action lorsque le bouton Login est pressé
    // Par exemple, vous pouvez ajouter votre logique de connexion ici
  } else if (view === "signup") {
    // Gérez l'action lorsque le bouton Sign-up est pressé
    // Par exemple, vous pouvez naviguer vers la page d'inscription ici
  }
};
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 162.38,
    marginBottom: 50,
  },
  first: {
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    resizeMode: "cover",
  },
  second: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    padding: 0,
    paddingTop: 10,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    width: 385,
  },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    paddingEnd: 40,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    width: 100,
   
    alignItems: "space-beetwen",
    marginLeft: 30,
   
  },
 
  activeTab: {
    marginEnd: 20,
    paddingEnd: 10,
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderColor: "red",
  },
});
