# 104z-node-init

## 安裝步驟
- npm install
- npm link

## 執行
- 104z-node

## 做的事情
- 建立 travis
- 建立 .vscode
- 建立 bin
- 建立 config
- 建立 doc
- 建立 nginx
- 依照選擇的Script Type 建立專案

## Script Type有分三種
- Javascript
- Typescript
- Nuxt

## CI bucket name
- lab： < your-project-name > -dev-api
- staging： < your-project-name > -staging-api
- 正式機： < your-project-name > -prod-api

## 環境變數放置位置
### S3，顯示為bucket name
- lab： < your-project-name > -dev-env-config
- staging： < your-project-name > -staging-env-config
- 正式機： < your-project-name > -prod-env-config
### Git，顯示為file name
- local 環境，設定檔在config/.env.development
- lab 環境，設定檔在config/.env.lab
- staging 環境，設定檔在config/.env.staging
- 正式機環境，設定檔在config/.env.production


## server port (預設)
- local：6565
- lab：3000
- staging：3000
- 正式機：3000

