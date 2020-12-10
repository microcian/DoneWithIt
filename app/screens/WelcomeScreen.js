import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Colors from "../config/Colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What you don't need</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </View>

      <View style={styles.registerButton}>
        <Text style={styles.registerText}>Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.loginColor,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 18,
    color: Colors.white,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.registerColor,
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    fontSize: 18,
    color: Colors.white,
  },
});

export default WelcomeScreen;
