const fs = require('../fs');
const createFile = require('../createFile');


exports.createTravis = (answers, dirname) => {
  let devConfig = null
  let stagingConfig = null
  let prodConfig = null
  if(answers.configType==='Git'){
    devConfig = 'cp ./config/.env.lab ./config/production.js'
    stagingConfig = 'cp ./config/.env.staging ./config/production.js'
    prodConfig = 'cp ./config/.env.production ./config/production.js'
  }else if(answers.configType==='S3'){
    devConfig = `aws s3 cp s3://${answers.configBucketName}-dev-env-config/${answers.configName}/ ./config --recursive`
    stagingConfig = `aws s3 cp s3://${answers.configBucketName}-staging-env-config/${answers.configName}/ ./config --recursive`
    prodConfig = `aws s3 cp s3://${answers.configBucketName}-prod-env-config/${answers.configName}/ ./config --recursive`
  }
  fs.mkdirSync(`${answers.projectName}/.travis`)
  createFile.replaceFile(`${dirname}/project/.travis/setup.sh`, `${answers.projectName}/.travis/setup.sh`, 
  [{
    match: /#replace-bucketName#/g,
    replaceStr: answers.projectName
  },
  {
    match: /#replace-labBranch#/g,
    replaceStr: answers.labBranch
  },
  {
    match: /#replace-stagingBranch#/g,
    replaceStr: answers.stagingBranch
  },
  {
    match: /#replace-prodBranch#/g,
    replaceStr: answers.prodBranch
  },
  {
    match: /#replace-config-dev#/g,
    replaceStr: devConfig
  },
  {
    match: /#replace-config-staging#/g,
    replaceStr: stagingConfig
  },
  {
    match: /#replace-config-prod#/g,
    replaceStr: prodConfig
  }] )
}