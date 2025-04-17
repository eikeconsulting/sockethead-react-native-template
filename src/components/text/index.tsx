import React from 'react';
import { StyleSheet, Text as RNText, TextStyle } from 'react-native';
import { fontFamily as ff } from '@app/constants';
import { Colors } from '@app/colors';
import { moderateScale } from 'react-native-size-matters';

interface TextProps {
    children: React.ReactNode;
    style?: TextStyle | TextStyle[];
    numberOfLines?: number;
    onPress?: () => void;
};

const Text = ({ children, style = {}, numberOfLines = 0, onPress }: TextProps) => {
    const defaultFontFamily = ff.regular;
    const defaultFontColor = Colors.textColor;
    const flattenedStyle = StyleSheet.flatten(style);

    const { fontFamily = defaultFontFamily, color = defaultFontColor, fontSize, ...rest } = flattenedStyle;

    const responsiveFontSize = flattenedStyle?.fontSize ? moderateScale(flattenedStyle?.fontSize) : moderateScale(12);

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
