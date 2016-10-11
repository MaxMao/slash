function _remove(orig, searchPatter) {
  if (orig) {
    return orig.replace(searchPatter, '');
  } else {
    return '';
  }
}

function removeTrailings(orig) {
  return _remove(orig, /\/+$/);
}

function removeTrailing(orig) {
  return _remove(orig, /\/$/);
}

function prepend(orig) {
  if (orig) {
    if (orig.slice(0, 1) !== '/') {
      return '/' + orig;
    } else {
      return orig;
    }
  } else {
    return '';
  }
}

function append(orig) {
  if (orig) {
    if (orig.slice(-1) !== '/') {
      return orig + '/';
    } else {
      return orig;
    }
  } else {
    return '';
  }
}

function normalizePath(path, isHostname) {
  if (isHostname) {
    return removeTrailings(path);
  } else {
    return prepend(removeTrailings(path));
  }
}

module.exports = {
  append: append,
  removeTrailings: removeTrailings,
  removeTrailing: removeTrailing,
  prepend: prepend,
  normalizePath: normalizePath
}