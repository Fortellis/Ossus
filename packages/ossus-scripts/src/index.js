#!/usr/bin/env node
const Builder = require('./scripts/Builder');
const args = process.argv.slice(2);

switch (args[0]) {
    case 'build':
        Builder();
        break;
    default:
        console.log('Thanks for using Ossus scripts 🤩');
}