import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import BackArrow from "@app/assets/backArrow.svg";
interface Props {
  isLeftBoxImgVisible?: boolean;
  isCenterBoxVisible?: boolean;
  isCenterBoxElementType?: string;
  centerBoxElement?: React.ReactNode;
  isRightBoxVisible?: boolean;
  isRightBoxElementType?: string;
  rightBoxElement?: React.ReactNode;
}

const Header = ({
  isLeftBoxImgVisible = true,
  isCenterBoxVisible,
  isCenterBoxElementType,
  centerBoxElement,
  isRightBoxVisible,
  isRightBoxElementType,
  rightBoxElement
}: Props) => {

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.leftBox}>
        {isLeftBoxImgVisible && <BackArrow width={scale(44)} height={scale(44)} />}
      </TouchableOpacity>

      <View style={styles.centerBox}>
        {isCenterBoxVisible ? (
          isCenterBoxElementType === "image" && typeof centerBoxElement !== "string" ? (
            centerBoxElement
          ) : isCenterBoxElementType === "text" && typeof centerBoxElement === "string" ? (
            <Text numberOfLines={2}>{centerBoxElement}</Text>
          ) : null
        ) : null}
      </View>

      <View style={styles.rightBox}>
        {isRightBoxVisible ? (
          isRightBoxElementType === "image" && typeof rightBoxElement !== "string" ? (
            rightBoxElement
          ) : isRightBoxElementType === "text" && typeof rightBoxElement === "string" ? (
            <Text numberOfLines={2}>{rightBoxElement}</Text>
          ) : null
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftBox: {
    flex: 0.15,
    alignItems: "center",
  },
  centerBox: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  rightBox: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
