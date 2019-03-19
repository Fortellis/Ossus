#!/usr/bin/env node

const Builder = require('./scripts/builder');
const { log, writeTocFile } = require('./utils/helpers');
const help = `
    Usage: ossus-scripts <script>

    Scripts:
        - build         runs the Ossus build steps
        - help          displays this help text

`;

function run() {
  const command = process.argv.slice(2)[0];
  switch (command) {
    case 'build':
      writeTocFile(Builder());
      break;
    case 'help':
      log(help);
      break;
    default:
      log('Thanks for using Ossus scripts 🤩');
  }
}

run();