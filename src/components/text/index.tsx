import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { fontFamily as ff } from '@app/constants';
import { Colors } from '@app/colors';
import { RFValue } from "react-native-responsive-fontsize";

interface TextProps {
    children: any;
    style?: any;
    numberOfLines?: number;
    onPress?: () => void;
};

const Text = ({ children, style = {}, numberOfLines = 0, onPress }: TextProps) => {
    const defaultFontFamily = ff.regular;
    const defaultFontColor = Colors.textColor;
    const flattenedStyle = StyleSheet.flatten(style);

    const { fontFamily = defaultFontFamily, color = defaultFontColor, fontSize, ...rest } = flattenedStyle;

    const responsiveFontSize = flattenedStyle?.fontSize ? RFValue(flattenedStyle?.fontSize) : RFValue(12);

    const textStyle = {
        fontFamily,
        color,
        fontSize: responsiveFontSize,
        ...rest,
    };

    const textProps: any = {
        numberOfLines,
        style: textStyle
    };

    if (onPress) {
        textProps.onPress = onPress;
    }

    return <RNText maxFontSizeMultiplier={1.5} {...textProps}>{children}</RNText>;
};

export default Text;
