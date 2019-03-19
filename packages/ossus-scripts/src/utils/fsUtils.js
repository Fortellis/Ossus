const fs = require('fs');
const path = require('path');

function isDir(pth) {
  return fs.statSync(pth).isDirectory();
}

function isFile(pth) {
  return fs.statSync(pth).isFile();
}

function isFileHidden(file) {
  return file.slice(0, 1) === '.';
}

function getFullPath(pth) {
  return path.resolve(process.cwd(), ...pth.split(path.sep));
}

function pathExists(pth) {
  return fs.existsSync(pth);
}

function containsIndex(pth) {
  return pathExists(joinPaths(pth, 'index.json'));
}

function writeOut(pth, content) {
  return fs.writeFileSync(pth, content);
}

function readFile(pth) {
  return fs.readFileSync(pth, 'utf8');
}

function readDir(pth) {
  return fs.readdirSync(pth);
}

function readJsonFile(pth) {
  return JSON.parse(readFile(pth));
}

function joinPaths(...paths) {
  return path.join(...paths);
}

module.exports = {
  isDir,
  isFile,
  readDir,
  writeOut,
  readFile,
  joinPaths,
  pathExists,
  getFullPath,
  isFileHidden,
  readJsonFile,
  containsIndex,
};