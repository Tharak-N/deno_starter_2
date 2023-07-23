import { Router } from '../imports.ts';
import { authController } from '../controllers/Authentication.ts'

// const auth = new Authentication()
const router = new Router();

router.get(
    '/',
    (ctx: any) => { 
        console.log("hi")
        ctx.response.body = "Hello Tharak this is from Oak Framework"
    }
)
.get(
    '/about-me',
    (ctx: any) => {
        console.log("about me section")
        ctx.response.body = "Tharak from Banglore"
    }
)
// .post(
//     '/login',
//      (ctx: any) => {
//         console.log("inside the login middleware fn")
//         let requestBody = await ctx.request.body() 
//         this.authController.login(requestBody)
//         ctx.response.body = "Login in progress"
//     }
// )


export default router;