import { Router, Context } from '../imports.ts';
import { authController } from '../controllers/Authentication.ts'
import { getRequestBodyDetails, responseBodyDetails } from './utilities.ts';
import { authorization } from '../controllers/Authorization.ts';

import { RequestDetailsExtraction } from '../controllers/req-details-extraction.ts';

const router = new Router();
const reqDetails = new RequestDetailsExtraction();

router
.get(
    '/',
    (ctx: any) => { 
        ctx.response.body = "Hello Tharak this is from Oak Framework"
    }
)
.get(
    '/about-me',
    async (ctx: Context) => {
        let data = await getRequestBodyDetails(ctx)
        let token = await ctx.request.headers.get('authorization')
        let authorizationFlag = await authorization.isAuthorized(token)
        if(authorizationFlag){
            ctx.response.body = JSON.stringify("Tharak from Banglore")
        }
        else {
            throw new Error('Token Expired')
        }
    }
)

.post(
    '/login', 
     async (ctx: Context) => {
        let data = await getRequestBodyDetails(ctx)
        // let data = await reqEx.gg(ctx)



        // console.log("the request body is", await r/eqDetails.provideCtxInstance().provideReqInstance().getBodyDetails())
        // let data = await reqEx.gg(ctx)
        let TOKEN = await authController.authenticate(data) as string
        ctx.response.body = { token: TOKEN }
    }
)

.post(
    '/register',
    async(ctx: Context) => {
        let data = await getRequestBodyDetails(ctx)
    }
)

.get(
    '',
    async (ctx: Context) => {

    }
)





export default router;

