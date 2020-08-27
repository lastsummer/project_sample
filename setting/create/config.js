const fs = require('../fs');
const createFile = require('../createFile');


exports.createConfig = (answers, dirname) => {
  fs.mkdirSync(`${answers.projectName}/config`)
  createFile.copyFile(`${dirname}/project/config/default.js`, `${answers.projectName}/config/default.js`)

  if(answers.configType==='Git'){
    fs.mkdirSync(`${answers.projectName}/config/lab`)
    fs.mkdirSync(`${answers.projectName}/config/local`)
    fs.mkdirSync(`${answers.projectName}/config/prod`)
    fs.mkdirSync(`${answers.projectName}/config/staging`)
    
    createFile.copyFile(`${dirname}/project/config/lab/production.js`, `${answers.projectName}/config/lab/production.js`)
    createFile.copyFile(`${dirname}/project/config/local/development.js`, `${answers.projectName}/config/local/development.js`)
    createFile.copyFile(`${dirname}/project/config/prod/production.js`, `${answers.projectName}/config/prod/production.js`)
    createFile.copyFile(`${dirname}/project/config/staging/production.js`, `${answers.projectName}/config/staging/production.js`)
  }
}