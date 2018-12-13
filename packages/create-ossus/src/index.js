#!/usr/bin/env node
const fs = require('fs-extra');
const data = require('./data');

function createPackage(name) {
    return {
        "name": name,
        "version": "0.0.1",
        "description": "Built by create-ossus!",
        "main": "index.js",
        "scripts": {
          "dev": "npm run structure; node server.js",
          "build": "npm run structure; next build",
          "start": "NODE_ENV=production node server.js",
          "structure": "ossus-scripts build",
          "export": "next export"
        },
        "dependencies": data.packages.reduce((reducer, value) => ({
                ...reducer,
                [value.name]: value.version
        }), {}),
        "devDependencies": {}
    }
}

function create() {
    try {
        const cwd = process.cwd();
        const dirs = cwd.split('/');
        // Copy the template into the cwd
        fs.copySync(`${__dirname}/template`, cwd);
        console.log('Created directory structure...');
        // Create the appropriate package.json
        const name = dirs[dirs.length - 1];
        fs.writeFileSync(`${process.cwd()}/package.json`, JSON.stringify(createPackage(name), null, 2));
        console.log('Generated package.json...');
        console.log('Finishing up...');
        console.log(`Ossus documentation site built!
    
To get started:
cd /${name}
npm install
npm run dev

Thanks for using Ossus ❤️
`);
    } catch (err) {
        console.log('Failed to create directory structure... oops 😱');
    }
}

create();
