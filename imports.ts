import { Application } from 'https://deno.land/x/oak@v12.6.0/mod.ts';
import { Router } from 'https://deno.land/x/oak@v12.6.0/router.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";
// import { authsController } from './controllers/Authentication.ts'


export { 
    Application, Router,
    oakCors
}
