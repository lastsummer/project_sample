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
  { type: 'list', name: 'scriptType', message: 'Choose Script Type', choices: value.scriptTypePlain}
]

inquirer
  .prompt(questions)
  .then(function (answers) {
    fs.mkdirSync(answers.projectName)
    createFile.createProject(answers, __dirname)
    // console.log(answers);
})
