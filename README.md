# zip2geo
A zipcode geocode loookup for NodeJS. It uses the data from https://public.opendatasoft.com/explore/dataset/us-zip-code-latitude-and-longitude/table/ and provides a stripped down wrapper for it.

# Install
```
npm install zip2geo
```

# Usage
```
const zg = require('zip2geo');
const loc = zg.zip2geo('12345');
```
