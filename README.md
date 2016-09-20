Usage
=====

```
var slash = require('slash');
slash.normalizePath('http://my.example.com/123/');

returns http://my.example.com/123

slash.normalizePath('/example/123/');

returns /example/123

slash.normalizePath('example/123/');

returns /example/123
```
