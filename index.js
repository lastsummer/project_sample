#!/usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')

const value = require('./lib/value')
const fs = require('./lib/fs');
const createFile = require('./lib/createFile')

const questions = [
  { type: 'input', name: 'projectName', message: 'Project Name'},
  { type: 'input', name: 'labBranch', default: 'develop' ,message: 'lab Branch Name'},
  { type: 'input', name: 'stagingBranch', default: 'staging' ,message: 'staging Branch Name'},
  { type: 'input', name: 'prodBranch', default: 'master' ,message: 'prod Branch Name'},
  { type: 'list', name: 'scriptType', message: 'Choose Script Type', choices: value.scriptTypePlain},
  { type: 'list', name: 'configType', message: '選擇設定欓放置位置', choices: value.configTypePlain},
  { type: 'input', name: 'configBucketName', message: 'S3設定檔的bucket name', when: (answers) => answers.configType === 'S3'},
  { type: 'input', name: 'configName', message: 'S3設定檔的資料夾名稱', when: (answers) => answers.configType === 'S3'}
]

/*
inquirer
  .prompt(questions)
  .then(function (answers) {
    fs.mkdirSync(answers.projectName)
    createFile.createProject(answers, __dirname)
    console.log(answers)
})
*/

async function createProject(){
  const askEmoji = await inquirer
  .prompt(questions)
  fs.mkdirSync(askEmoji.projectName)
  await createFile.createProject(askEmoji, __dirname)
}
// main()

const version = '1.0.0'
async function main(){
  program.version(version)
  .usage('[options]')
  .parse(process.argv)
  if(process.argv[2]==='v'){
    console.log(version)
  }else{
    createProject()
  }
}

main()



