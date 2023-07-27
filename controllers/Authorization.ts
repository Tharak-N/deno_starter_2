import { jwtVerify, jwtDecrypt, importJWK } from '../imports.ts';
import { authController } from './Authentication.ts';

class Authorization {

    // private key = authController.getSecretKey();

    isAuthorized = async (jwt: any) => {

        const { payload, header} = await jwtVerify(jwt,authController.getSecretKey())
        console.log("the verified jwt is", payload)
        
    }

}

export const authorization = new Authorization()