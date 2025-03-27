import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Text from '@app/components/text';
import Loader from '@app/components/loader';
import { Colors } from '@app/colors';

const Button = ({
    label = 'Default Label',
    onPress = () => { },
    disabled = false,
    containerStyles = {},
    textStyles = {},
    loading = false
}: ButtonProps) => {
    if (loading) {
        return (
            <View style={[styles.loaderContainer, containerStyles]}>
                <Loader animating />
            </View>
        );
    }
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={() => onPress()}
            style={[
                styles.button,
                disabled ? styles.disabledButton : styles.enabledButton,
                containerStyles
            ]}
        >
            <Text style={[styles.text, textStyles]}>{label}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    loaderContainer: {
        borderRadius: 12,
        paddingVertical: 20,
    },
    button: {
        borderRadius: 12,
        paddingVertical: 20,
    },
    enabledButton: {
        backgroundColor: Colors.primaryColor,
    },
    disabledButton: {
        backgroundColor: Colors.blueGrey,
    },
    text: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 14,
    },
});

interface ButtonProps {
    label: string,
    onPress: Function,
    disabled?: boolean,
    containerStyles?: object,
    textStyles?: object,
    loading?: boolean
};
