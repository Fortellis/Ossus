#!/usr/bin/env node
const Builder = require('./scripts/Builder');
const help = `
    Usage: ossus-scripts <script>

    Scripts:
        - build         runs the Ossus build steps
        - help          displays this help text

`;

function run() {
    const [command, ...args] = process.argv.slice(2);
    switch (command) {
        case 'build':
            Builder();
            break;
        case 'help':
            console.log(help)
            break;
        default:
            console.log('Thanks for using Ossus scripts 🤩');
    }
}

run();