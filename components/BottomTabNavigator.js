import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
// import Ionicons from "@expo/vector-icons";

import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5, AntDesign, Ionicons, Feather } from "@expo/vector-icons";

import { Pressable } from "react-native";
import { Image } from "react-native";
import Add from "../assets/images/add.svg";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export const Icon = createIconSetFromIcoMoon(
  require("../assets/fonts/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else {
            iconName = focused ? "ios-list-box" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="PostsScreen" component={PostsScreen} />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};
