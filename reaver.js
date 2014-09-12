'use strict';

var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

function notfile (file) {
  try {
    return fs.statSync(file).isDirectory();
  } catch (e) {
    return true;
  }
}

function read (file) {
  return fs.readFileSync(file, { encoding: 'utf8' });
}

function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
}

function rev (file, data) {
  var hash = md5(data).slice(0, 8);
  var dir = path.dirname(file);
  var ext = path.extname(file);
  var filename = path.basename(file, ext) + '.' + hash + ext;
  var target = path.join(dir, filename);
  return target;
}

function api (files) {
  files.forEach(move);
}

function move (file) {
  if (notfile(file)) {
    return;
  }
  fs.rename(file, rev(file, read(file)));
}

module.exports = api;
