import { Application, Context, type Middleware } from 'https://deno.land/x/oak@v12.6.0/mod.ts';
import { Router } from 'https://deno.land/x/oak@v12.6.0/router.ts';
// import { RouterMiddleware } from 'https://deno.land/x/oak@v12.6.0/mod.ts'
import { oakCors } from "https://deno.land/x/cors/mod.ts";
// import { authsController } from './controllers/Authentication.ts'
import { MongoClient } from 'https://deno.land/x/mongo@v0.31.2/mod.ts';
// import { create } from 'https://deno.land/x/djwt@v2.9.1/mod.ts'

/**jose JWT Packages */
import { generateSecret } from 'https://deno.land/x/jose@v4.14.4/key/generate_secret.ts';
import { SignJWT } from 'https://deno.land/x/jose@v4.14.4/jwt/sign.ts';
import { jwtVerify } from 'https://deno.land/x/jose@v4.14.4/jwt/verify.ts';
import { jwtDecrypt } from 'https://deno.land/x/jose@v4.14.4/jwt/decrypt.ts';

// import { parseJwk } from "https://deno.land/x/jose@4.14.4/jwk/parse.ts";
import { importJWK } from 'https://deno.land/x/jose@v4.14.4/key/import.ts';

// import { type Middleware } from "https://deno.land/x/oak@v12.6.0/mod.ts";

export { 
    Application, Router, Context, Middleware,
    oakCors, MongoClient,
    generateSecret, SignJWT, jwtVerify, jwtDecrypt, importJWK
}
