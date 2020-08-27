## 資料夾

- config: 四個環境的設定檔
  - lab
    - production.js
  - local
    - development.js
  - prod
    - production.js
  - staging
    - production.js
  default.js 預設會載入的設定檔
- doc: 開發文件
  - rule.md 開發規範
- nginx
- src
  - router : router 資料夾
    - api : 對外接口的資料夾
    - auth : 處理登入登出的資料夾
    - dc : 內網接口的資料夾
    - index.js 載入 router
  - common : 放工具的資料夾
    - 104Tool : 串接104api
    - aws : aws連線的資料夾
    - db : 有關db連線

  - dao : 資料庫連結 資料夾
    - xxx : 依資料做分類的資料夾
      - xxxDao.js
  - middleware
  - service
    - xxx : 依資料做分類的資料夾
      - xxxService.js
  - swagger
    xxx.json
    index.js

## 規則

1. 除了相同資料的 service 可以呼叫 dao，其他一律需要透過 service 呼叫
2. 需要做 transaction
3. codemetrics 不可以超過 20

## 紀錄錯誤log

- 所有的function 都要錯誤處理

- errorCode 放在src/common/constants.js
```
errorCode: {
      message: 'response to client message',
      zErrorCode: 'errorCode',
      status: 403,  // res status code
      writeLog: true  // write error code or not
    }

```


- 程式碼片段
```
function funName() {
  try {
    return await topicDao.getTopicList()
  } catch (error) {
    throw tool.handleError({...constants.ERROR_CODE.errorCode,logMessage:error}, `${serviceName} funName`)
  }
}

```