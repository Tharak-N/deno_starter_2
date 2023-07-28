import { Context } from '../imports.ts';

export class RequestDetailsExtraction {
    private context: Context | null = null;
    private ctxInstance: Context;
    private reqInstance: any;
    private headerInstance: any;

    constructor(){}

    async provideCtxInstance(_context: Context){
        this.ctxInstance = await _context    
        return this
    }

     provideReqInstance(){
        console.log("the ctx instance is", this.ctxInstance)
        this.reqInstance =  this.ctxInstance.request
        return this
    }

    provideHeaderInstance(){
        this.headerInstance = this.reqInstance.header
        return this
    }

    async getHost(){
        return await this.headerInstance.host
    }

    async getOrigin(){
        return await this.headerInstance.origin
    }

    async getAuthorization(){
        return await this.headerInstance.authorization
    }

    async getUrl(){
        return await this.reqInstance.url
    }

    async getBodyDetails(_context?: Context){
        // if(!(!!this.context)) this.context = _context
        let body = await this.reqInstance.request.body().value
        return body
    }


}

// export const reqDetails = new RequestDetailsExtraction();