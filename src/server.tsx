import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import { Homepg } from "../lego/home";
import staticPlugin from "@elysiajs/static";
// import React, { useState, useEffect } from 'react';

export function Hellow() {
  return (
    <h1>hellow bun</h1>
  );
}



const app = new Elysia()

.use(staticPlugin({
  assets:'./src/tailwindcss',
  prefix: '/css'
}))
.use(staticPlugin({
  assets:'./src/pkgimg',
  prefix: '/img'
}))
  .use(html())
  .get("/", () => 
      <Homepg/>
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
