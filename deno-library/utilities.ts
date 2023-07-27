import { Context } from '../imports.ts';

export const getRequestBodyDetails = async (context: Context) => {
    // console.log(context.request.headers)
    return await context.request.body().value
}


