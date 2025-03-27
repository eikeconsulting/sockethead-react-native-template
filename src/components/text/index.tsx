import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { fontFamily as ff } from '@app/constants';
import { Colors } from '@app/colors';

const Text = ({ children, style = {}, numberOfLines = 0, onPress }: TextProps) => {
    const defaultFontFamily = ff.regular;
    const defaultFontColor = Colors.textColor;

    const flattenedStyle = StyleSheet.flatten(style);
    const { fontFamily = defaultFontFamily, color = defaultFontColor, ...rest } = flattenedStyle;

    const textProps = {
        ...rest,
        numberOfLines,
        style: [{ fontFamily, color }, flattenedStyle],
    };

    if (onPress) {
        textProps.onPress = onPress;
    }

    return <RNText {...textProps}>{children}</RNText>;
};

export default Text;

interface TextProps {
    children: any,
    style?: any,
    numberOfLines?: number,
    onPress?: Function,
};
