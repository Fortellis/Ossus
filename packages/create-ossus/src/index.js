#!/usr/bin/env node
const fs = require('fs-extra');
const { exec } = require('child_process');
const data = require('./data');

function createPackage(name) {
    return {
        "name": name,
        "version": "0.0.1",
        "description": "Built by create-ossus!",
        "main": "index.js",
        "scripts": {
          "dev": "run-s structure start:dev",
          "start:dev": "next",
          "build": "run-s structure build:site",
          "build:site": "next build",
          "start": "NODE_ENV=production node server.js",
          "structure": "ossus-scripts build",
          "export": "next export"
        },
        "dependencies": data.packages.reduce((reducer, value) => ({
                ...reducer,
                [value.name]: value.version
        }), {}),
        "devDependencies": data.devPackages.reduce((reducer, value) => ({
            ...reducer,
            [value.name]: value.version
    }), {}),
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
        console.log('Installing Packages... (This may take a minute)');
        exec('npm install', (err, stdout, stderr) => {
            if (err) {
              // node couldn't execute the command
              console.log('Oops... something went wrong while intstalling your packages. Please try again manually!')
              console.log(stderr);
              return;
            }
          
            console.log('Finishing up...');
            console.log(`
Ossus documentation site built!
        
To get started run:
npm run dev
go to http://localhost:3000

Thanks for using Ossus ❤️`);
          });
        
    } catch (err) {
        console.log('Failed to create directory structure... oops 😱');
    }
}

create();
