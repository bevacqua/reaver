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

function api (files, options) {
  var manifest = {};

  files.forEach(move);

  function move (file) {
    var absolute = path.resolve(file);
    if (notfile(absolute)) {
      return;
    }
    rename(absolute, rev(absolute, read(absolute)));
  }

  function rename (from, to) {
    manifest[from] = to;
    fs.renameSync(from, to);
  }

  return options && options.manifest ? manifest : null;
}

api.rev = rev;

module.exports = api;
