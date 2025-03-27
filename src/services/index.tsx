import Api from "@app/services/api";
import { Endpoints } from "@app/services/endpoints";

export const LoginApi = ({ setIsLoading = (p0: boolean) => { }, body = {} }) => {
    return new Promise<void>(async (resolve, reject) => {
        setIsLoading(true);
        const response: any = await Api.post(Endpoints.login, body).catch(err => reject(err)).finally(() => setIsLoading(false));
        resolve(response?.data);
    });
};
