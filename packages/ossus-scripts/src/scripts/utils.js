const fs = require('fs');

function log(message, options) {
    console.log(message);
}

function isHidden(file) {
    return file.slice(0, 1) === '.';
}

function isDir(path) {
    return fs.statSync(path).isDirectory();
}

function isFile(path) {
    return fs.statSync(path).isFile();
}

function hasIndex(path) {
    const ip = `${path}/index.json`;
    return exists(ip);
}

function exists(path) {
    return fs.existsSync(path);
}

module.exports = {
    log,
    exists,
    isHidden,
    isDir,
    isFile,
    hasIndex,
}