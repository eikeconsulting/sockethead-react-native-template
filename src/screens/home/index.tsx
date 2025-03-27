import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '@app/components';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});
