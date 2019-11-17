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
* client/src/components/Home.vue 
  * template part (UI)
```html
<template>
  <div>
    <hr>
    <div class="list-unstyled" v-for="message in messages" :key="message._id">
      <li class="media">
        <img v-if="message.imageURL" class="mr-3" :src="message.imageURL" :alt="message.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">{{message.username}}</h4>
          <h5 class="mt-0 mb-1">{{message.subject}}</h5>
          {{message.message}}
          <br />
          <small>{{message.created}}</small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>
```
  * script part (Logic)
```javascript
<script>
const API_URL = "http://localhost:4000/messages";
 
export default {
  name: "home",
  data: () => ({
    error: "",
    messages: []
  }),
 
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.messages = result;
      });
  },
  methods: {}
};
</script>
```
### 11. Add a Vue Form To Submit New Messages
* client/src/components/Home.vue 
  * template part (UI)
```html
   <form @submit.prevent="addMessage" class="mb-3">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-0">{{error}}</p>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          v-model="message.username"
          type="text"
          class="form-control"
          id="username" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input
          v-model="message.subject"
          type="text"
          class="form-control"
          id="subject"
          placeholder="Enter a subject" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          v-model="message.message"
          class="form-control"
          id="message"
          rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="imageURL">Image URL</label>
        <input
          v-model="message.imageURL"
          type="url"
          class="form-control"
          id="imageURL"
          placeholder="Enter URL to an image">
      </div>
      <button type="submit" class="btn btn-primary">Add Message</button>
    </form>
```    
  * script part (Logic)
```javascript
export default {
  name: "home",
  data: () => ({
    error: "",
    messages: [],
    message: {
      username: "Enter a screen name",
      subject: "",
      message: "",
      imageURL: ""
    }
  }),
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    }
  },
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.messages = result;
      });
  },
  methods: {
    addMessage() {
      console.log(this.message);
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.message),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map(detail => detail.message)
              .join(". ");
            this.error = error;
          } else {
            this.error = "";
            this.showMessageForm = false;
            this.messages.push(result);
          }
        });
    }
  }
};
</script>
```

### 12. Mongo Express Vue.js Node.js Tutorial Summary

# See Next

* [MEVN Stack]( https://www.djamware.com/post/5a1b779f80aca75eadc12d6e/mongo-express-vue-nodejs-mevn-stack-crud-web-application)
* [Bootswatch Theme] (https://bootswatch.com/sketchy/)
* [Monk : MongoDB Interface](https://www.npmjs.com/package/monk)
* {Joi : Input Validation](https://vegibit.com/node-js-express-rest-api-tutorial/)
* [Promise:  비동기 처리](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
* [Vue.js 2.0 라이프사이클 이해하기](https://medium.com/witinweb/vue-js-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-7780cdd97dd4)
* [[React Native] 인스타그램 UI 만들기 #1](https://velog.io/@anpigon/React-Native-UI-%EB%A7%8C%EB%93%A4%EA%B8%B0-1)
  * [Github](https://github.com/anpigon/rn_instagram_clone)