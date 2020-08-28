const fs = require('../fs');
const createFile = require('../createFile');


exports.createSrc = (answers, dirname) => {

  fs.mkdirSync(`${answers.projectName}/assets`)
  fs.mkdirSync(`${answers.projectName}/components`)
  fs.mkdirSync(`${answers.projectName}/layouts`)
  fs.mkdirSync(`${answers.projectName}/pages`)
  fs.mkdirSync(`${answers.projectName}/server`)
  fs.mkdirSync(`${answers.projectName}/static`)
  fs.mkdirSync(`${answers.projectName}/store`)

  createFile.copyFile(`${dirname}/project/nuxt/components/Logo.vue`, `${answers.projectName}/components/Logo.vue`)
  createFile.copyFile(`${dirname}/project/nuxt/layouts/default.vue`, `${answers.projectName}/layouts/default.vue`)
  createFile.copyFile(`${dirname}/project/nuxt/pages/index.vue`, `${answers.projectName}/pages/index.vue`)
  createFile.copyFile(`${dirname}/project/nuxt/server/index.js`, `${answers.projectName}/server/index.js`)
  createFile.copyFile(`${dirname}/project/nuxt/static/favicon.ico`, `${answers.projectName}/static/favicon.ico`)
  createFile.copyFile(`${dirname}/project/nuxt/nuxt.config.js`, `${answers.projectName}/nuxt.config.js`)
  createFile.replaceFile(`${dirname}/project/nuxt/package.json`, `${answers.projectName}/package.json`,[
    {
      match: /#replace-projectName#/g,
      replaceStr: answers.projectName
    }
  ])
}