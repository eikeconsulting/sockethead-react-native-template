import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Text } from '@app/components';
import { Strings } from '@app/strings';
import { useDispatch } from 'react-redux';
import { logout } from '@app/store/slices/authSlice';

const Profile = () => {

    const dispatch = useDispatch();
    const OnLogout = () => dispatch(logout());

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Text>{Strings.profile}</Text>
            </View>
            <Button label={Strings.logout} onPress={OnLogout} containerStyles={styles.buttonContainer} />
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 30,
    },
});
