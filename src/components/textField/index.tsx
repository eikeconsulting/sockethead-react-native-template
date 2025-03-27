import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import Text from '@app/components/text';
import { Colors } from '@app/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native';

const TextField = (props: any) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(props?.password);

    const togglePassword = () => setIsPasswordVisible(!isPasswordVisible);

    return (
        <>
            <TextInput
                mode='outlined'
                theme={{ roundness: 12, colors: { background: Colors.white, } }}
                textColor={Colors.black}
                autoCapitalize={props?.password ? "none" : "sentences"}
                activeOutlineColor={Colors.blueGrey3}
                outlineColor={Colors.blueGrey3}
                placeholderTextColor={Colors.textColor}
                secureTextEntry={props?.password ? isPasswordVisible : false}
                right={props.password ? <TextInput.Icon onPress={togglePassword} icon={() => isPasswordVisible ? <Ionicons name='eye-off' size={18} color={Colors.blueGrey3} /> : <Ionicons name="eye" size={18} color={Colors.blueGrey3} />} /> : null}
                {...props}
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
