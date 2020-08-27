#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const value = require('./setting/value');
const fs = require('./setting/fs');
const createFile = require('./setting/createFile');

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

inquirer
  .prompt(questions)
  .then(function (answers) {
    fs.mkdirSync(answers.projectName)
    createFile.createProject(answers, __dirname)
    // console.log(answers);
})
