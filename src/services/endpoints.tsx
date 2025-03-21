
const urls = {
    dev: 'http://localhost:8080/',
    stg: '',
    prd: ''
}

const baseUrl = urls.dev

export const Endpoints = {
    baseUrl,
    login: `${baseUrl}Auth/login`,
}