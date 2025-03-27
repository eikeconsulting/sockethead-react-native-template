import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import Text from '@app/components/text';
import colors from '@app/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native';
import { fontFamily } from '@app/constants';

const TextField = (props: any) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(props?.password);

    const togglePassword = () => setIsPasswordVisible(!isPasswordVisible);

    return (
        <>
            <Text style={styles.label}>{props?.title}</Text>
            <TextInput
                style={styles.input}
                mode='outlined'
                theme={{ roundness: 12, colors: { background: colors.white, } }}
                textColor={colors.black}
                autoCapitalize={props?.password ? "none" : "sentences"}
                activeOutlineColor={colors.blueGrey3}
                outlineColor={colors.blueGrey3}
                placeholderTextColor={colors.textColor}
                secureTextEntry={props?.password ? isPasswordVisible : false}
                right={props.password ? <TextInput.Icon onPress={togglePassword} icon={() => isPasswordVisible ? <Ionicons name='eye-off' size={18} color={colors.blueGrey3} /> : <Ionicons name="eye" size={18} color={colors.blueGrey3} />} /> : null}
                {...props}
            />
            {props?.error && <Text style={styles.errorText}>{props?.error}</Text>}
        </>
    );
}

const styles = StyleSheet.create({
    errorText: {
        marginTop: 5,
        color: colors.primaryRed,
        marginLeft: 5,
    },
    label: {
        color: "#333",
        fontFamily: fontFamily.MontserratRegular, 
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 20,
        marginBottom:10,
    },
    input: {
        fontFamily: fontFamily.regular,
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "400",
        color: "#333",
        lineHeight: 24,
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "row",
        gap: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#EEE",
        backgroundColor: "#FFF",
    },
});

export default TextField;
