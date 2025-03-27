import { SafeAreaView, StyleSheet, View, } from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '@app/routes';
import { Button, Image, Loader, Text, TextField } from '@app/components';
import { Strings } from '@app/strings';
import { Colors } from '@app/colors';
import { LoginApi } from '@app/services';
import { useDispatch } from 'react-redux';
import { login } from '@app/store/slices/authSlice';
import { ValidateEmail } from '@app/functions';

interface LoginScreenProps {
    navigation: NativeStackNavigationProp<RootStackParamsList, 'Login'>
}

const Login = ({ navigation }: LoginScreenProps) => {

    const dispatch = useDispatch();
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<any>({
        username: false,
        password: false,
        invalidCredentials: false
    })

    const OnClickLogin = () => {
        if (userName === '') {
            errors.username = Strings.emailRequired;
            setErrors({ ...errors });
        }
        else if (userName !== '' && !ValidateEmail(userName)) {
            errors.username = Strings.emailInValid;
            setErrors({ ...errors });
        }
        if (password == '') {
            errors.password = Strings.passwordRequired;
            setErrors({ ...errors });
        }
        else if (password != '') {
            errors.password = false;
            setErrors({ ...errors });
        }
        if (Object.values(errors).every(value => value === false)) {
            let body = {
                email: userName,
                password: password
            }
            LoginApi({ setIsLoading, body })
                .then((res: any) => {
                    const { user, accessToken } = res.data
                    dispatch(login({ user, token: accessToken }))
                    errors.invalidCredentials = false
                    setErrors({ ...errors })
                })
                .catch((error) => {
                    if (error?.response?.status == 401) {
                        errors.invalidCredentials = error?.response?.data?.detail
                        setErrors({ ...errors })
                    }
                })
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Loader animating={isLoading} />
            <View style={styles.imageContainer}>
                <Image source={{ uri: "https://knowledgemission.kerala.gov.in/img/official-login.jpg" }} style={styles.image} />
            </View>
            <TextField
                placeholder={Strings.userName}
                value={userName}
                onChangeText={(value: string) => { setUserName(value); setErrors({ username: false, invalidCredentials: false }); }}
                error={errors.username}
            />
            <TextField
                style={styles.textFieldMargin}
                placeholder={Strings.password}
                password
                value={password}
                onChangeText={(value: string) => { setPassword(value); setErrors({ password: false, invalidCredentials: false }); }}
                error={errors.password}
            />
            {errors.invalidCredentials && <Text style={styles.errorText}>{errors.invalidCredentials}</Text>}
            <View style={styles.buttonContainer}>
                <Button label={Strings.login} onPress={OnClickLogin} />
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.white,
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    image: {
        width: 200,
        height: 200,
    },
    textFieldMargin: {
        marginTop: 10,
    },
    errorText: {
        marginTop: 20,
        color: Colors.primaryRed,
    },
    buttonContainer: {
        marginTop: 40,
    },
});
