# Url-Pattern-Matcher
Returns whether the url pattern is matched or not

```shell
npm i url_pattern_matcher --save
```

###### npm stats

[![npm](https://img.shields.io/npm/v/url_pattern_matcher.svg)](https://www.npmjs.org/package/url_pattern_matcher) [![NPM downloads](https://img.shields.io/npm/dm/url_pattern_matcher.svg)](https://www.npmjs.org/package/url_pattern_matcher) 



      
## Usage example(s)

```js
var matcher = require('url_pattern_matcher')

matcher.matches("/profile/:name","/profile/anyname")
=>true

matcher.matches("/profile/name","/profile/anyname")
=>false

matcher.matches("/user/:userid/message/:messageid","/user/azyeid/message/72839203784")
=>true

```


## Licenses
[![LICENSE](http://img.shields.io/npm/l/url_pattern_matcher.svg)](license)

