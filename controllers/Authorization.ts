import { jwtVerify, jwtDecrypt, importJWK } from '../imports.ts';
import { authController } from './Authentication.ts';

class Authorization {

    // private key = authController.getSecretKey();
    private payloadDetails;

    isAuthorized = async (jwt: any) => {
        try {
            const { payload, header} = await jwtVerify(jwt,authController.getSecretKey())
            this.payloadDetails = payload
            if(!!payload) return true
        }
        catch {
            throw new Error("Token Expired")
            return false
        }
        // console.log("the verified jwt is", payload)
    }

}

export const authorization = new Authorization()