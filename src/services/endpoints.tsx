import { Platform } from "react-native";
import DeviceInfo from 'react-native-device-info';

const PORT = 8080;

const getApiUrl = () => {
    if (Platform.OS === 'android') {
        // Android Emulator
        return `http://10.0.2.2:${PORT}/`;
    } else if (Platform.OS === 'ios') {
        // iOS Simulator
        return `http://127.0.0.1:${PORT}/`;
    } else {
        // Physical Device
        return `http://${DeviceInfo.getIpAddressSync()}:${PORT}/`;
    }
};

const urls = {
    dev: getApiUrl(),
    stg: '',
    prd: ''
}

const baseUrl = urls.dev

export const Endpoints = {
    baseUrl,
    login: `${baseUrl}Auth/login`,
}