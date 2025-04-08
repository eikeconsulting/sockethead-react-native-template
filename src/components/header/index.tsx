import React from "react";
import { View, StyleSheet, Text, ImageSourcePropType, ViewStyle, ImageStyle } from "react-native";
import { Colors } from "@app/colors";
import { Image } from "@app/components";
import { Assets } from "@app/assets";

interface Props {
  imageSource?: ImageSourcePropType;
  isLeftBoxImgVisible?: boolean;
  isCenterBoxVisible?: boolean;
  isCenterBoxElementType?: string;
  centerBoxElement?: ImageSourcePropType | string;
  isRightBoxVisible?: boolean;
  isRightBoxElementType?: string;
  rightBoxElement?: ImageSourcePropType | string;
}

const Header = ({
  isLeftBoxImgVisible = true,
  imageSource = Assets.headerBackArrow,
  isCenterBoxVisible,
  isCenterBoxElementType,
  centerBoxElement,
  isRightBoxVisible,
  isRightBoxElementType,
  rightBoxElement
}: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.box}>
        {isLeftBoxImgVisible ?
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
        : null}
      </View>
      
      {isCenterBoxVisible ? (
        <View style={[styles.box, styles.flexBox, styles.alignItem]}>
          {isCenterBoxElementType === "image" && typeof centerBoxElement !== "string" ? (
            <Image source={centerBoxElement} style={styles.image} resizeMode="contain" />
          ) : isCenterBoxElementType === "text" && typeof centerBoxElement === "string" ? (
            <Text>{centerBoxElement}</Text>
          ) : null}
        </View>
      ) : null}

      {isRightBoxVisible ? (
        <View style={styles.box}>
          {isRightBoxElementType === "image" && typeof rightBoxElement !== "string" ? (
            <Image source={rightBoxElement} style={styles.image} resizeMode="contain" />
          ) : isRightBoxElementType === "text" && typeof rightBoxElement === "string" ? (
            <Text>{rightBoxElement}</Text>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create<{
  row: ViewStyle;
  box: ViewStyle;
  flexBox: ViewStyle;
  alignItem: ViewStyle;
  image: ImageStyle;
}>({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    backgroundColor: Colors.white,
  },
  box: {
    padding: 20,
  },
  flexBox: {
    flex: 1,
  },
  alignItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Header;