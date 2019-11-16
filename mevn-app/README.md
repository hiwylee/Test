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
```bash
gitpod /workspace/Test/mevn-app $ vue create client


Vue CLI v4.0.5
? Please pick a preset: Manually select features
? Check the features needed for your project: 
❯◯ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◯ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
 ```
 ```bash
 Vue CLI v4.0.5
? Please pick a preset: Manually select features
? Check the features needed for your project: Router, Linter
? Use history mode for router? (Requires proper server setup for index fallback in productio
n) Yes
? Pick a linter / formatter config: 
  ESLint with error prevention only 
❯ ESLint + Airbnb config 
  ESLint + Standard config 
  ESLint + Prettier 
 ```
 ```bash
 Vue CLI v4.0.5
? Please pick a preset: Manually select features
? Check the features needed for your project: Router, Linter
? Use history mode for router? (Requires proper server setup for index fallback in productio
n) Yes
? Pick a linter / formatter config: Airbnb
? Pick additional lint features: 
 ◉ Lint on save
❯◉ Lint and fix on commit
 ```
 ```bash
 Vue CLI v4.0.5
? Please pick a preset: Manually select features
? Check the features needed for your project: Router, Linter
? Use history mode for router? (Requires proper server setup for index fallback in productio
n) Yes
? Pick a linter / formatter config: Airbnb
? Pick additional lint features: Lint on save, Lint and fix on commit
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? 
  In dedicated config files 
❯ In package.json 
 ```
 ```bash
Vue CLI v4.0.5
? Please pick a preset: Manually select features
? Check the features needed for your project: Router, Linter
? Use history mode for router? (Requires proper server setup for index fallback in productio
n) Yes
? Pick a linter / formatter config: Airbnb
? Pick additional lint features: Lint on save, Lint and fix on commit
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In package.json
? Save this as a preset for future projects? No
? Pick the package manager to use when installing dependencies: (Use arrow keys)
❯ Use Yarn 
  Use NPM
 ```

 ```bash
Vue CLI v4.0.5
✨  Creating project in /workspace/Test/mevn-app/client.
⚙  Installing CLI plugins. This might take a while...

yarn install v1.19.1
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.9: The platform "linux" is incompatible with this module.
info "fsevents@1.2.9" is an optional dependency and failed compatibility check. Excluding it
 from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 20.05s.
🚀  Invoking generators...
📦  Installing additional dependencies...

yarn install v1.19.1
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.9: The platform "linux" is incompatible with this module.
info "fsevents@1.2.9" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 12.72s.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project client.
👉  Get started with the following commands:

 $ cd client
 $ yarn serve

gitpod /workspace/Test/mevn-app $ 
```
* client: public/index.html에  [Bootswat Sketchy](https://bootswatch.com/sketchy/) themecss) 추가
```html
<link rel="stylesheets" href="https://bootswatch.com/sketchy/bootstrap.min.css" />
```
### 5. Connecting To MongoDB With Monk
```bash
gitpod /workspace/Test/mevn-app $ yarn add monk @hapi/joi
yarn add v1.19.1
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 7 new dependencies.
info Direct dependencies
├─ @hapi/joi@16.1.7
└─ monk@7.1.1
info All dependencies
├─ @hapi/address@2.1.2
├─ @hapi/formula@1.2.0
├─ @hapi/hoek@8.5.0
├─ @hapi/joi@16.1.7
├─ @hapi/pinpoint@1.0.2
├─ @hapi/topo@3.1.6
└─ monk@7.1.1
Done in 2.34s.
```

### 6. Create a message model
```bash
gitpod /workspace/Test/mevn-app/client $ cd ..
gitpod /workspace/Test/mevn-app $ pwd
/workspace/Test/mevn-app
gitpod /workspace/Test/mevn-app $ mkdir db
gitpod /workspace/Test/mevn-app $ cd db
gitpod /workspace/Test/mevn-app/db $ touch connection.js
gitpod /workspace/Test/mevn-app/db $ touch messages.js
```
### 7. Add a route to get messages from Mongodb
#### 7-1. connection.js
```javascript (.line-numbers)
// db/connection.js
const monk = require('monk');
// https://cloud.mongodb.com/
const constr = process.MONGODB_URI ||  'mongodb+srv://admin:Oraclewelcome1@mongodb-uj5w8.mongodb.net/test?retryWrites=true&w=majority';
const db = monk(constr);

module.exports = db;
```
#### 7-2. messages.js
```javascript (.line-numbers)
// db/messages.js
const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required(),
    imageURL: Joi.string().uri({
        scheme: [
            /https?/,
        ],
    }) 
});
 
const messages = db.get("messages");

function getAll() {
    return messages.find();
}

function create(message) {
    if(message.username) message.username = 'Anonymous';

    const result = Joi.validate(message, schema);
    if(result.error == null) {
        message.created = new Date();
        return messages.insert(message);
    }
    else {
        return Promise.reject(result.error)
    }
}

module.exports = {
    create,
    getAll
}
```
### 8. Add a route to create a message
* index.js (mevn-app/index.js)
```javascript (.line-numbers)
// index.js
const express = require('express');
const cors = require('cors');
const bodyParser  = require('body-parser');
const morgan = require('morgan');
const messages = require('./db/messages');

const app = express();

app.use(morgan('tiny'))
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

app.get('/messages',(req, res) => {
    messages.getAll().then((messages) => {    
        res.json(messages);
    });
});

app.post('/messages',(req, res) => {
    console.log(req.body);
    messages.create(req.body).then((message) => {
        res.json(message)
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
```
### 9. POST to API using Postman
* public/msg1.json
```json
{
    "username": "Jeff",
    "subject": "Movie",
    "message": "I like movies",
    "imageURL": "https://ucarecdn.com/85b5644f-e692-4855-9db0-8c5a83096e25/"
}
```
* load json data (POST)
``` bash
curl -X POST -H "User-Agent: Chrome 74 on Windows 10" -H "Content-Type: application/json" \
--data @./public/msg1.json http://localhost:8080/messages
```
* server log
```bash
listening on 8080
{ username: 'Jeff',
  subject: 'Movie',
  message: 'I like movies',
  imageURL: 'https://ucarecdn.com/85b5644f-e692-4855-9db0-8c5a83096e25/' }
## WY create:[object Object]
POST /messages 500 - - 19.777 ms

```
### 10. Consume API and Display Messages With Vue
### 11. Add a Vue Form To Submit New Messages
### 12. Mongo Express Vue.js Node.js Tutorial Summary
# See Next

* [MEVN Stack]( https://www.djamware.com/post/5a1b779f80aca75eadc12d6e/mongo-express-vue-nodejs-mevn-stack-crud-web-application)
* [Bootswatch Theme] (https://bootswatch.com/sketchy/)
* [Monk : MongoDB Interface](https://www.npmjs.com/package/monk)
* {Joi : Input Validation](https://vegibit.com/node-js-express-rest-api-tutorial/)
* [Promise:  비동기 처리](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)

'''html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>TypeError: Cannot set property &#39;error&#39; of null<br> &nbsp; &nbsp;at Object.create (/workspace/Test/mevn-app/db/messages.js:26:18)<br> &nbsp; &nbsp;at app.post (/workspace/Test/mevn-app/index.js:34:14)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/workspace/Test/mevn-app/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/workspace/Test/mevn-app/node_modules/express/lib/router/route.js:137:13)<br> &nbsp; &nbsp;at Route.dispatch (/workspace/Test/mevn-app/node_modules/express/lib/router/route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/workspace/Test/mevn-app/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at /workspace/Test/mevn-app/node_modules/express/lib/router/index.js:281:22<br> &nbsp; &nbsp;at Function.process_params (/workspace/Test/mevn-app/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/workspace/Test/mevn-app/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at /workspace/Test/mevn-app/node_modules/body-parser/lib/read.js:130:5</pre>
</body>
</html>
```