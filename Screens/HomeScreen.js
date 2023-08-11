import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigator } from "../components/BottomTabNavigator";


export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <>
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View> */}
      <BottomTabNavigator style={{ flex: 1 }} />
     
    </>
  );
}
