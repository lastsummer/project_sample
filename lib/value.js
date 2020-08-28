const colors = require('color')

const scriptType = [
  {name: 'TypeScript'},
  {name: 'JavaScript'},
  {name: 'Nuxt'}
];

exports.scriptTypePlain = scriptType.map(function(o) {
  return o.name;  // convert to one line
})

const configType = [
  {name: 'S3'},
  {name: 'Git'}
];

exports.configTypePlain = configType.map(function(o) {
  return o.name;
})