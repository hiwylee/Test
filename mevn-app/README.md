# Vue.js Express Tutorial
## 목차
* [1. Create Directory and run npm init](#chapter1)
* [2. Add Dependencies to the project](#chapter2)
* [3. Add an index.js file](#chapter3)
* [4. Create Client The Client Directory](#chapter4)
* [5. Connecting To MongoDB With Monk](#chapter5)
* [6. Create a message model](#chapter6)
* [7. Add a route to get messages from Mongodb](#chapter7)
* [8. Add a route to create a message](#chapter8)
* [9. POST to API using Postman](#chapter9)
* [10. Consume API and Display Messages With Vue](#chapter10)
* [11. Add a Vue Form To Submit New Messages](#chapter11)
* [12. Mongo Express Vue.js Node.js Tutorial Summary](#chapter12)
* [See Next](#next)

* MEVN(mongodb-express-vuejs-nodejs 활용하는 어플리케이션
  * mongodb : 데이터 저장소
  * express : 미들웨어 (HTTP 요청 및 라이팅 처리)
  * VueJS  사용자 인터페스스
  * Node.js : 어플리케이션 서버
  * 기타 : Bootswatch theme 
* 출처 [https://vegibit.com/vue-js-express-tutorial/] 

### 1. Create Directory and run npm init <a id="chapter1"></a>
```bash
gitpod /workspace/Test $ mkdir mevn-app
gitpod /workspace/Test $ cd mevn-app/
gitpod /workspace/Test/mevn-app $ 
gitpod /workspace/Test/mevn-app $ npm init -y
```
### 2. Add Dependencies to the project <a id="chapter-2"></a>
* Dependencies 
  * [express](https://jeong-pro.tistory.com/59)
  * [morgan](https://www.npmjs.com/package/morgan)
  * [cors](https://vegibit.com/how-to-make-http-requests-in-angular-using-observables/)
  * [body-parser](http://jeonghwan-kim.github.io/series/2018/12/16/node-web-16_body-parser.html)

```bash
gitpod /workspace/Test/mevn-app $ npm install express morgan cors body-parser
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN mevn-app@1.0.0 No repository field.

+ express@4.17.1
+ morgan@1.9.1
+ cors@2.8.5
+ body-parser@1.19.0
added 55 packages from 39 contributors and audited 170 packages in 2.532s
found 0 vulnerabilities
```

### 3. Add an index.js file
```javascript {.line-numbers}
const express = require('express');
const cors = require('cors');
const bodyParser  = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'))
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
```
* run 
```bash
gitpod /workspace/Test/mevn-app $ node index.js
listening on 8080
GET / 200 36 - 4.611 ms
GET / 200 36 - 0.592 ms
```

### 4. Create Client The Client Directory

### 5. Connecting To MongoDB With Monk
### 6. Create a message model
### 7. Add a route to get messages from Mongodb
### 8. Add a route to create a message
### 9. POST to API using Postman
### 10. Consume API and Display Messages With Vue
### 11. Add a Vue Form To Submit New Messages
### 12. Mongo Express Vue.js Node.js Tutorial Summary
# See Next

* [MEVN Stack]( https://www.djamware.com/post/5a1b779f80aca75eadc12d6e/mongo-express-vue-nodejs-mevn-stack-crud-web-application)
