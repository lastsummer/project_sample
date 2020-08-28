const fs = require('../fs');
const createFile = require('../createFile');


exports.createSrc = (answers, dirname) => {

  fs.mkdirSync(`${answers.projectName}/src`)
  fs.mkdirSync(`${answers.projectName}/src/common`)
  fs.mkdirSync(`${answers.projectName}/src/dao`)
  fs.mkdirSync(`${answers.projectName}/src/middleware`)
  fs.mkdirSync(`${answers.projectName}/src/router`)
  fs.mkdirSync(`${answers.projectName}/src/service`)
  fs.mkdirSync(`${answers.projectName}/src/swagger`)

  createFile.copyFile(`${dirname}/project/javascript/src/index.js`, `${answers.projectName}/src/index.js`)
  createFile.copyFile(`${dirname}/project/javascript/src/start.js`, `${answers.projectName}/src/start.js`)
  createFile.replaceFile(`${dirname}/project/javascript/package.json`, `${answers.projectName}/package.json`,[
    {
      match: /#replace-projectName#/g,
      replaceStr: answers.projectName
    }
  ])
  createFile.copyFile(`${dirname}/project/javascript/webpack.config.js`, `${answers.projectName}/webpack.config.js`)
}