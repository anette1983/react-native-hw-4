import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Pressable,
  Button,
} from "react-native";


import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";



export default function App() {
  // const [isShownKeyboard, setIsShownKeyboard] = useState(false);

  // const onPressWithoutFeedback = () => {
  //   setIsShownKeyboard(false);
  //   Keyboard.dismiss();
  // };
  const MainStack = createStackNavigator();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    IcoMoon: require("./assets/fonts/icomoon.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Registration"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />

        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: "Start screen" }}
          options={{
            title: "Home screen",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Press me"
                color="#fff"
              />
            ),
          }}
        />
        {/* <TouchableWithoutFeedback
            style={styles.mainContainer}
            onPress={onPressWithoutFeedback}
          >
            <ImageBackground
              source={require("./assets/images/bg-image.png")}
              style={styles.image}
              resizeMode="cover"
            > */}
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}

        {/* <LoginScreen
                isShownKeyboard={isShownKeyboard}
                setIsShownKeyboard={setIsShownKeyboard}
              /> */}

        {/* <PostsScreen /> */}
        {/* </ImageBackground>
          </TouchableWithoutFeedback> */}
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   image: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },

// homeIndicator: {
//   width: 134,
//   height: 5,
//   borderRadius: 100,
//   background: "black",
//   marginBottom: 8,
// },
// });
