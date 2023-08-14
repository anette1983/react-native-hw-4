import React, { useState } from "react";

import { StyleSheet } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import SvgComponent from "../components/SvgComponent";
import { useNavigation } from "@react-navigation/native";

import { Image, Text, TouchableOpacity, View } from "react-native";
import { postsScreenArr } from "../data/posts";

import { FlatList } from "react-native";
import CommentsIcon from "../assets/images/shape.svg";
import LikesIcon from "../assets/images/thumbs-up.svg";
import MapIcon from "../assets/images/map-pin.svg";

import CustomImgBg from "../components/CustomImgBg";

export default function RegistrationScreen() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState(postsScreenArr);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <CustomImgBg>
          <View style={styles.content}>
            <View style={styles.avatarWrapper}>
              <TouchableOpacity>
                <SvgComponent />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Natali Romanova</Text>

            <View style={styles.listContainer}>
              <FlatList
                data={posts}
                renderItem={({ item }) => (
                  <View style={styles.itemList}>
                    <Image source={item.img} style={styles.cardImage} />
                    <Text style={styles.itemPostTitle}>{item.title}</Text>
                    <View style={styles.itemCard}>
                      <View style={styles.itemCardInfo}>
                        <TouchableOpacity
                          style={styles.wrapper}
                          onPress={() => navigation.navigate("Коментарі")}
                        >
                          <CommentsIcon size={24} color={"#FF6C00"} />

                          <Text style={styles.textStatistic}>
                            {item.comments}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{ ...styles.wrapper, marginLeft: 24 }}
                        >
                          <LikesIcon size={24} color={"#FF6C00"} />
                          <Text style={styles.textStatistic}>{item.likes}</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.wrapper}>
                        <MapIcon size={24} color="#BDBDBD" />
                        <Text
                          style={{
                            ...styles.textStatistic,
                            textDecorationLine: "underline",
                          }}
                        >
                          {item.location}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </CustomImgBg>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    marginTop: 147,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    // paddingBottom: 43,
    paddingBottom: 214,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
    resizeMode: "cover",
    // marginTop: "-30%",
    marginTop: -110,
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
  },

  title: {
    fontFamily: "Roboto_500Medium",
    color: "#212121",
    fontSize: 30,
    lineHeight: 36,
    textAlign: "center",
    marginVertical: 33,
  },

  listContainer: {
    // flex: 1,
    flexGrow: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    // backgroundColor: "#FFFFFF",
    // alignItems: "center",
  },

  itemList: {
    maxWidth: "100%",
    flexGrow: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  cardImage: {
    resizeMode: "cover",
    borderRadius: 8,
    alignSelf: "center",
    width: "100%",
  },
  itemPostTitle: {
    marginTop: 8,

    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    fontFamily: "Roboto_500Medium",
  },
  itemCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 35,
  },

  itemCardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textStatistic: {
    marginLeft: 6,
    fontSize: 16,
    lineHeight: 19,

    color: "#212121",
  },
});
