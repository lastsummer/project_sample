const fs = require('../fs');
const createFile = require('../createFile');


exports.createSrc = (answers, dirname) => {

  fs.mkdirSync(`${answers.projectName}/src`)
  fs.mkdirSync(`${answers.projectName}/src/common`)
  fs.mkdirSync(`${answers.projectName}/src/dao`)
  fs.mkdirSync(`${answers.projectName}/src/middleware`)
  fs.mkdirSync(`${answers.projectName}/src/routes`)
  fs.mkdirSync(`${answers.projectName}/src/service`)
  fs.mkdirSync(`${answers.projectName}/src/swagger`)

  createFile.copyFile(`${dirname}/project/typeScript/src/index.ts`, `${answers.projectName}/src/index.ts`)
  createFile.copyFile(`${dirname}/project/typeScript/tsconfig.json`, `${answers.projectName}/tsconfig.json`)
  createFile.replaceFile(`${dirname}/project/typeScript/package.json`, `${answers.projectName}/package.json`,[
    {
      match: /#replace-projectName#/g,
      replaceStr: answers.projectName
    }
  ])
  
}