import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserInfo from "../components/UserInfo";
import { postsScreenArr } from "../data/posts";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import CommentsIcon from "../assets/images/shape.svg";
import LikesIcon from "../assets/images/thumbs-up.svg";
import MapIcon from "../assets/images/map-pin.svg";

export default function PostsScreen() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState(postsScreenArr);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<UserInfo />}
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

                  <Text style={styles.textStatistic}>{item.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.wrapper, marginLeft: 24 }}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },

  itemList: {
    maxWidth: "100%",
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
    color: "#BDBDBD",

    // color: "#212121",
  },
});
