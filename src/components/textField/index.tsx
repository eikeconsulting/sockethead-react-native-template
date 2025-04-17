import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import Text from '@app/components/text';
import { Colors } from '@app/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native';
import { fontFamily as ff } from '@app/constants';
import { moderateScale } from 'react-native-size-matters';

const TextField = (props: any) => {

    const defaultFontFamily = ff.regular;
    const defaultFontColor = Colors.textColor;
    const flattenedStyle = StyleSheet.flatten(props?.style) || {};
    const { fontFamily = defaultFontFamily, color = defaultFontColor, fontSize, ...rest } = flattenedStyle;
    const responsiveFontSize = flattenedStyle?.fontSize ? moderateScale(flattenedStyle?.fontSize) : moderateScale(12);
    const textStyle = { fontFamily, color, fontSize: responsiveFontSize, ...rest, };

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(props?.password);

    const togglePassword = () => setIsPasswordVisible(!isPasswordVisible);

    return (
        <>
            <TextInput
                {...props}
                mode='outlined'
                theme={{ roundness: 12, colors: { background: Colors.white, }, fonts: { bodyLarge: { fontFamily: fontFamily } } }}
                textColor={color ?? Colors.black}
                autoCapitalize={props?.password ? "none" : "sentences"}
                activeOutlineColor={Colors.blueGrey3}
                outlineColor={Colors.blueGrey3}
                placeholderTextColor={Colors.textColor}
                secureTextEntry={props?.password ? isPasswordVisible : false}
                right={props.password ? <TextInput.Icon onPress={togglePassword} icon={() => isPasswordVisible ? <Ionicons name='eye-off' size={18} color={Colors.blueGrey3} /> : <Ionicons name="eye" size={18} color={Colors.blueGrey3} />} /> : null}
                maxFontSizeMultiplier={1.2}
                style={{ ...textStyle }}
            />
            {props?.error && <Text style={styles.errorText}>{props?.error}</Text>}
        </>
    );
}

const styles = StyleSheet.create({
    errorText: {
        marginTop: 5,
        color: Colors.primaryRed,
        marginLeft: 5,
    },
});

export default TextField;
