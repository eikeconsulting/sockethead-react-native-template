import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Text } from '@app/components';
import { Colors } from '@app/colors';
import { fontFamily } from '@app/constants';
import { Strings } from '@app/strings';

interface props {
    error: Error,
    resetError: Function
};

const ErrorFallback = ({ error, resetError }: props) => {
    return (
        <>
            <View style={styles.main}>
                <Text style={styles.heading}>{Strings.oops}</Text>
                <Text style={styles.subheading}>{Strings.anError}</Text>
                <Text>{error.toString()}</Text>
            </View>
            <View style={styles.buttonMain}>
                <Button label="Try again" onPress={resetError} />
            </View>
        </>
    );
}

export default ErrorFallback;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        padding: 20
    },
    heading: {
        fontFamily: fontFamily.regular,
        fontSize: 18
    },
    subheading: {
        fontFamily: fontFamily.bold,
        fontSize: 16,
        marginBottom: 10
    },
    buttonMain: {
        margin: 20
    }
});
