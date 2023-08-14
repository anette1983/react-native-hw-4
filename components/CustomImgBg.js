import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomImgBg = ({
  children,
  image = require("../assets/images/bg-image.png"),
  resizeMode = "cover",
  imageStyle,
}) => {
  return (
    <ImageBackground
      source={image}
      style={imageStyle ? imageStyle : styles.image}
      resizeMode={resizeMode}
    >
      {children}
    </ImageBackground>
  );
};

export default CustomImgBg;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
