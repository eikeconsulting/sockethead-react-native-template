import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fontFamily as ff, DEFAULT_FONT_SIZE } from '@app/constants';
import { Colors } from '@app/colors';

export const getTextStyle = (style: any) => {
    const defaultFontFamily = ff.regular;
    const defaultFontColor = Colors.textColor;
    const flattenedStyle = StyleSheet.flatten(style) || {};

    const { fontFamily = defaultFontFamily, color = defaultFontColor, fontSize, ...rest } = flattenedStyle;

    const responsiveFontSize = fontSize
        ? moderateScale(fontSize)
        : moderateScale(DEFAULT_FONT_SIZE);

    return {
        fontFamily,
        color,
        fontSize: responsiveFontSize,
        ...rest,
    };
};
