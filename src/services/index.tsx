import Api from "./api"
import { Endpoints } from "./endpoints"

export const LoginApi = ({ setIsLoading = (p0: boolean) => { }, body = {} }) => {
    return new Promise<void>(async (resolve, reject) => {
        setIsLoading(true)
        const response: any = await Api.post(Endpoints.login, body).catch(err => reject(err)).finally(() => setIsLoading(false))
        resolve(response?.data)
    })
}