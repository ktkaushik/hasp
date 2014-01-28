#Hasp

Before and After filters/hooks for Controllers in [Rendr](https://github.com/airbnb/rendr), a framework by Airbnb

##Installation

```
npm install hasp
```

##Usage

In your **Controller**,

```
var hasp = require('hasp');

module.exports = {

  index: filters([ beforeFilter1, beforeFilter2 ], [ afterFilter1, afterFilter2 ], function(params, callback) {
    callback(null, {});
  })

};

```

