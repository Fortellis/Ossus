const express = require('express');
const next = require('next');
const { Routes } = require('ossus');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = Routes.getRequestHandler(app);

const port = 3000;

app.prepare()
    .then(() => {
        const server = express();
        server.use(handler);
        server.listen(port, (err) => {
            if (err) {
                throw err;
            }
            console.log(`> Ready on port: ${port}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });