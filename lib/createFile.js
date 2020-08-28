const fs = require('fs')
const ora = require('ora')
const { exec } = require('child_process')
const emojis = require('node-emoji')
const chalk = require('chalk')

const travis = require('./create/travis')
const config = require('./create/config')
const javascript = require('./create/javascript')
const typeScript = require('./create/typeScript')

function replaceString (mainStr, match, replaceStr) {
  return mainStr.replace(match, replaceStr)
}

exports.replaceString = replaceString

function replaceFile (fromFile, toFile, replaceArr) {
  fs.readFile(fromFile,'utf-8', function(err,data){
    if(data){
      let result = data
      for(replace of replaceArr){
        result = replaceString(result, replace.match, replace.replaceStr)
      }
      fs.writeFile(toFile, result, 'utf8', function (err) {
        if (err) return console.log(err)
     })
    }
  })
}

exports.replaceFile = replaceFile

function copyFile (fromFile, toFile) {
  fs.readFile(fromFile,'utf-8', function(err,data){
    if(data){
      fs.writeFile(toFile, data, 'utf8', function (err) {
        if (err) return console.log(err)
     })
    }
  })
}
exports.copyFile = copyFile


exports.createProject = (answers, dirname) => {
  const spinnerFolder = ora(chalk.blue('Create Folder.....')).start();
  // 建立 .travis資料夾
  
  travis.createTravis(answers, dirname)
  

  // 建立 .vscode資料夾
  fs.mkdirSync(`${answers.projectName}/.vscode`)
  copyFile(`${dirname}/project/.vscode/extensions.json`, `${answers.projectName}/.vscode/extensions.json`)
  copyFile(`${dirname}/project/.vscode/settings.json`, `${answers.projectName}/.vscode/settings.json`)

  // 建立 bin資料夾
  fs.mkdirSync(`${answers.projectName}/bin`)
  copyFile(`${dirname}/project/bin/install-modules`, `${answers.projectName}/bin/install-modules`)
  copyFile(`${dirname}/project/bin/start`, `${answers.projectName}/bin/start`)

  // 建立 config資料夾
  config.createConfig(answers, dirname)

  // 建立 doc資料夾
  fs.mkdirSync(`${answers.projectName}/doc`)
  copyFile(`${dirname}/project/doc/rule.md`, `${answers.projectName}/doc/rule.md`)

  // 建立nginx
  fs.mkdirSync(`${answers.projectName}/nginx`)
  copyFile(`${dirname}/project/nginx/web.conf`, `${answers.projectName}/nginx/web.conf`)
  
  // 建立 src
  if(answers.scriptType === 'JavaScript'){
    javascript.createSrc(answers, dirname)
  }else if(answers.scriptType === 'TypeScript'){
    typeScript.createSrc(answers, dirname)
  }
  // spinnerFolder.succeed();
  spinnerFolder.stop()
  console.log(`${emojis.get('white_check_mark')} Folder has been created`)
  
  // 安裝package
  
  const spinner = ora({text: chalk.blue('Install package...'), spinner: 'bouncingBall'}).start();
  exec(`cd ${answers.projectName} && npm install`, (error, stdout, stderr) => {
    spinner.stop()
    console.log(`${emojis.get('white_check_mark')} Package has been installed`)
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    // console.log(`stdout: ${stdout}`);
    // console.error(`stderr: ${stderr}`);
    console.log(`${emojis.get('sparkles')} ${emojis.get('sparkles')} ${answers.projectName} project create done ${emojis.get('stars')} ${emojis.get('stars')}`)
  })
  

}