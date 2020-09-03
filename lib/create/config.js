const fs = require('../fs');
const createFile = require('../createFile');


exports.createConfig = (answers, dirname) => {
  fs.mkdirSync(`${answers.projectName}/config`)
  createFile.copyFile(`${dirname}/project/config/default.js`, `${answers.projectName}/config/default.js`)

  if(answers.configType==='Git'){
    
    createFile.copyFile(`${dirname}/project/config/.env.development`, `${answers.projectName}/config/.env.development`)
    createFile.copyFile(`${dirname}/project/config/.env.lab`, `${answers.projectName}/config/.env.lab`)
    createFile.copyFile(`${dirname}/project/config/.env.production`, `${answers.projectName}/config/.env.production`)
    createFile.copyFile(`${dirname}/project/config/.env.staging`, `${answers.projectName}/config/.env.staging`)
  }
}