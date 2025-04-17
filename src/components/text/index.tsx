import React from 'react';
import { StyleSheet, Text as RNText, TextStyle } from 'react-native';
import { fontFamily as ff } from '@app/constants';
import { Colors } from '@app/colors';
import { getTextStyle } from '@app/utils/styleUtils';

interface TextProps {
    children: React.ReactNode;
    style?: TextStyle | TextStyle[];
    numberOfLines?: number;
    onPress?: () => void;
};

const Text = ({ children, style = {}, numberOfLines = 0, onPress }: TextProps) => {
    const flattenedStyle = StyleSheet.flatten(style);
    const textStyle = getTextStyle(flattenedStyle);

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
