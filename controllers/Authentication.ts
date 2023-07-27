import { generateSecret, SignJWT } from '../imports.ts'

class Authentication {

    public secretKey: any;

    async authenticate<T extends object | string>(_payload: T){
        // console.log("reaching the authenticate Fn")
        let JWT_TOKEN = await this.jwtTokenGeneration<T>(_payload)
        return JWT_TOKEN
    }
    
    async jwtTokenGeneration<T>(_payload: T): string{
        const payload: object = typeof _payload === 'string' ? JSON.parse(_payload as object) : _payload
        let secretKey = await generateSecret('HS512')

        this.secretKey = secretKey
        console.log("the secret key is", this.secretKey)

        let jwt_key = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS512', typ: "JWT" })
        .setIssuer('Deno')
        .setAudience('Angular')
        .setExpirationTime('2h')
        .sign(this.secretKey)

        console.log("the jwt_key is", jwt_key)
        return jwt_key
    }

    getSecretKey(){
        console.log("the key before sending is", this.secretKey)
        return this.secretKey
    }
}

export const authController = new Authentication();
// export default authController;