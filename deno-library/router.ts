import { Router, Context } from '../imports.ts';
import { authController } from '../controllers/Authentication.ts'
import { getRequestBodyDetails, responseBodyDetails } from './utilities.ts';
import { authorization } from '../controllers/Authorization.ts';

const router = new Router();

router.get(
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
        // let author = authorization.isAuthorized(ctx.request.headers.authorization)
        let author = authorization.isAuthorized(token)
        ctx.response.body = JSON.stringify("Tharak from Banglore")
    }
)

.post(
    '/login', 
     async (ctx: Context) => {
        let data = await getRequestBodyDetails(ctx)
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





export default router;

