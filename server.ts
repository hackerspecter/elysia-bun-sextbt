import { Elysia } from "elysia";
import { html } from '@elysiajs/html' 

import { Database } from "bun:sqlite";
import {tabelas} from '../dashboard/schema';
const { setores, prateleiras } = tabelas;






const db = new Database("./dashboard/dashboard.sqlite");
db.exec(prateleiras);
  
new Elysia()
    .use(html())
    .get(
        '/html',
        () => `
            <html lang='en'>
                <head>
                    <title>Hello World</title>
                </head>
                <body>
                    <h1>Hello World</h1>
                </body>
            </html>`
    )
    .get('/jsx', () => (
        <html lang='en'>
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    ))
    .listen(3000)


