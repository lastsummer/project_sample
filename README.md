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

## CI bucket name
- lab： < your-project-name > -dev-api
- staging： < your-project-name > -staging-api
- 正式機： < your-project-name > -prod-api

## 環境變數 bucket name （選擇設定欓放在s3)
- lab： < your-project-name > -dev-env-config
- staging： < your-project-name > -staging-env-config
- 正式機： < your-project-name > -prod-env-config

## 環境變數（選擇設定欓放在git)
- local 環境，設定檔在config/local/development.js
- lab 環境，設定檔在config/lab/production.js
- staging 環境，設定檔在config/staging/production.js
- 正式機環境，設定檔在config/prod/production.js

## server port (預設)
- local：6565
- lab：3000
- staging：3000
- 正式機：3000

