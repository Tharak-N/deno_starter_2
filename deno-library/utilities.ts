import { Context, Middleware } from '../imports.ts';

export const getRequestBodyDetails = async (context: Context) => {
    // console.log(context.request.headers)
    return await context.request.body().value
}


// export const middleWareFn: Middleware = async (ctx: Context) => {
//     // console.log
//     console.log("ctx is",ctx)
//     ctx.response.body = "" 
// }


// export const contextFn = () => {
//     let context: Context;
//     return new context.ContextPromise
// }

