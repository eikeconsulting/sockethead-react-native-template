import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Text } from '@app/components'
import { Strings } from '@app/strings'
import { useDispatch } from 'react-redux'
import { logout } from '@app/store/slices/authSlice'

const Profile = () => {
    const dispatch = useDispatch()
    const OnLogout = () => dispatch(logout())
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile</Text>
            </View>
            <Button label={Strings.logout} onPress={OnLogout} containerStyles={{ margin: 30 }} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})