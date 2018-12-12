const fs = require('fs-extra');
const data = require('./data');
const pckg = {
    "name": dirName,
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
};

const args = process.argv.slice(2);
const dirName = args[0]; // This should be given by user not constant

// Check if the directory exists and create if not
if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
}

try {
    fs.copySync(`${__dirname}/template`, dirName);
    console.log('Created directory structure...');
    fs.writeFileSync(`${dirName}/package.json`, JSON.stringify(pckg, null, 4));
    console.log('Generated package.json...');
    console.log('Finishing up...');
    console.log(`Ossus documentation site built!

To get started:
cd ${dirName}
npm install
npm run dev

Thanks for using Ossus ❤️`);

} catch (err) {
    console.log('Failed to create directory structure... oops 😱');
}
