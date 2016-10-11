var assert = require('assert');
var slash = require('../index');

describe('removeTrailings', function () {
  it('should remove trailing slashes', function(done) {
    assert.equal(slash.removeTrailings('abc/'), 'abc');
    assert.equal(slash.removeTrailings('abc///'), 'abc');
    assert.equal(slash.removeTrailings('/'), '');
    done();
  });
  
  it('should handle empty string or undefined', function(done) {
    assert.equal(slash.removeTrailings(''), '');
    assert.equal(slash.removeTrailings(), '');
    assert.equal(slash.removeTrailings(undefined), '');
    done();
  });
});

describe('removeTrailing', function () {
  it('should remove one trailing slash', function(done) {
    assert.equal(slash.removeTrailing('abc/'), 'abc');
    assert.equal(slash.removeTrailing('abc//'), 'abc/');
    assert.equal(slash.removeTrailing('/'), '');
    assert.equal(slash.removeTrailing('//'), '/');
    done();
  });
  
  it('should handle empty string or undefined', function(done) {
    assert.equal(slash.removeTrailing(''), '');
    assert.equal(slash.removeTrailing(), '');
    assert.equal(slash.removeTrailing(undefined), '');
    done();
  });
});

describe('prepend', function () {
  it('should prepend a slash', function(done) {
    assert.equal(slash.prepend('abc/'), '/abc/');
    assert.equal(slash.prepend('/abc'), '/abc');
    assert.equal(slash.prepend('/'), '/');
    done();
  });
  
  it('should handle empty string or undefined', function(done) {
    assert.equal(slash.prepend(''), '');
    assert.equal(slash.prepend(), '');
    assert.equal(slash.prepend(undefined), '');
    done();
  });
});

describe('append', function () {
  it('should append a slash', function(done) {
    assert.equal(slash.append('abc'), 'abc/');
    assert.equal(slash.append('abc/'), 'abc/');
    assert.equal(slash.append('/'), '/');
    done();
  });
  
  it('should handle empty string or undefined', function(done) {
    assert.equal(slash.append(''), '');
    assert.equal(slash.append(), '');
    assert.equal(slash.append(undefined), '');
    done();
  });
});

describe('normalizePath', function () {
  it('should remove trailing slashed and prepend a slash', function(done) {
    assert.equal(slash.normalizePath('abc/'), '/abc');
    assert.equal(slash.normalizePath('abc'), '/abc');
    assert.equal(slash.normalizePath('/abc'), '/abc');
    done();
  });
  
  it('should remove trailing slashed for a host name', function(done) {
    assert.equal(slash.normalizePath('http://abc/', true), 'http://abc');
    assert.equal(slash.normalizePath('http://abc', true), 'http://abc');
    assert.equal(slash.normalizePath('http://abc//', true), 'http://abc');
    done();
  });
  
  it('should handle empty string or undefined', function(done) {
    assert.equal(slash.normalizePath(''), '');
    assert.equal(slash.normalizePath(), '');
    assert.equal(slash.normalizePath(undefined), '');
    done();
  });
});