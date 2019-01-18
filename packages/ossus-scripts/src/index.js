#!/usr/bin/env node

const Builder = require('./scripts/Builder');
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
      Builder();
      break;
    case 'help':
      // eslint-disable-next-line
      console.log(help);
      break;
    default:
      // eslint-disable-next-line
      console.log('Thanks for using Ossus scripts 🤩');
  }
}

run();