import { Application, oakCors } from '../imports.ts'
import route from './router.ts'

const app = new Application();

// app.use();

app.use(oakCors())
app.use(route.routes())
app.use(route.allowedMethods())

try{
    await app.listen({port: 8800})
}
catch {
    console.log("Something had gone wrong!, Plase try again")
}