#!/usr/bin/env node
const { loadConfig } = require('ossus');
const { log, writeTocFile } = require('./utils/helpers');
const help = `
    Usage: ossus-scripts <script>

    Scripts:
        - build         runs the Ossus build steps
        - help          displays this help text
`;

function run() {
  const config = loadConfig(process.cwd());
  const command = process.argv.slice(2)[0];

  let toc = {};
  switch (command) {
    case 'build':
      if (config.documents) {
        config.documents.forEach(({ builder, ...options }) => {
          try {
            const tocDefinition = builder(options);
            toc[options.route] = tocDefinition;
          } catch (err) {
            log(err);
          }
        });
      }
      writeTocFile(toc);
      break;
    case 'help':
      log(help);
      break;
    default:
      log('Thanks for using Ossus scripts 🤩');
  }
}

run();
