# reactjs
## 1. 사전 준비 사항
* software
  * [Node.js](https://nodejs.org/)
  * [Yarn](https://yarnpkg.com/en/docs/install#windows-stable)
* code editor
  * [vscode](https://code.visualstudio.com/download)
### 1). create-react-app 설치
    npm install -g create-react-app
        or
    npm install --global yarn    
    yarn global add create-react-app

### 2). create-react-app 사용(프로젝트 생성)
    yarn create react-app phone-app

### 3). 프로젝트 실행
    cd phone-app
    yarn start


## 2. online code editor
### [gitpod.io](gitpod.io)
* workspace 생성 :<b>https://gitpod.io/#</b>https://github.com/hiwylee/reactjs
* gitpod.io 3000 port url link
```
gitpod /workspace/reactjs $ gp url 3000
https://3000-fc6623a6-8dfd-4785-99ca-09b90b5cc64a.ws-ap01.gitpod.io
```

## 3. 실습
### 1) [Phone App](PhoneApp.md)
* [강좌 출처:  https://velopert.com/3634](https://velopert.com/3634)
* [ReactJS로 시작하는 멀티플랫폼 개발하기](https://www.slideshare.net/taggon/reactjs-55995670?qid=341d02b6-c915-4364-a9ad-3338a42cd7a8&v=&b=&from_search=5)

# Vue js
## 사전 준비 사항
* Vue.js 패키지 설치
```
$ npm install vue

$ vue --version
@vue/cli 4.0.5
```
* [Vue.js CLI 설치](https://cli.vuejs.org/)
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
yarn global add @vue/cli-init

npm install -g @vue/cli-service-global
# or
yarn global add @vue/cli-service-global
```
* Vue Project 생성
```
# /home/gitpod/.config/yarn/global/node_modules/.bin/vue
vue create vue-app

vue CLI v4.0.5
✨  Creating project in /workspace/Test/vue-app.
⚙  Installing CLI plugins. This might take a while...

yarn install v1.19.1
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.9: The platform "linux" is incompatible with this module.
info "fsevents@1.2.9" is an optional dependency and failed compatibility check. Excluding it from installation.


success Saved lockfile.
Done in 15.81s.
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
Done in 7.53s.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project vue-app.
👉  Get started with the following commands:

 $ cd vue-app
 $ yarn serve

$ yarn run v1.19.1
warning ../package.json: No license field
$ vue-cli-service serve
 INFO  Starting development server...
98% after emitting CopyPlugin

 DONE  Compiled successfully in 6028ms                                                                                                                                                                   6:26:51 AM

  App running at:
  - Local:   http://localhost:8080/ 

  It seems you are running Vue CLI inside a container.
  Access the dev server via http://localhost:<your container's external mapped port>/

  Note that the development build is not optimized.
  To create a production build, run yarn build.

gitpod /workspace/Test $ 

```
## * 주의사항 (gitpod 를 사용하여 개발할 경우)
* 프로젝트 홈에서 vue.connfig.js 만들어 다음과 같이 입력
```
module.exports = {
    // options...
    devServer: {
        disableHostCheck: true,
    }
}
```

## 1. 참고자료
* [Vue.js 입문자를 위한 공개 세미나](https://www.slideshare.net/GihyoJoshuaJang/do-it-vuejs-88453012)
* [Vue.JS 2.0 강좌 목록 ](https://velopert.com/vuejs-tutorials)
* [Vue.js + Express + MySQL로 Node API 서버 구성하](https://medium.com/hivelab-dev/vue-express-mysql-part1-98f68408d444)
* [express와 vue를 이용한 개발 환경 구성 살펴보기](http://vuejs.kr/2017/02/05/express-with-vue/)

## 2.  학습자료
+ [Vue.js공식문서](https://vuejs.org/v2/guide/)
+ [Vue.js Feed](https://vuejsfeed.com/)
+ [Vue.js Developers](https://vuejsdevelopers.com/)
## 3. 강의목록
+ [Vue.js Complete Guide(영어)](https://www.udemy.com/vuejs-2-the-complete-guide/)
+ [누구나 다루기 쉬운 Vie.js(한글)](https://www.inflearn.com/course/vue-pwa-vue-js-%EA%B8%B0%EB%B3%B8/)
+ [실습 UI개발로 매워보는 순수 JS와 VieJS](https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/)

## 4. 프로젝트 및 코드
+ [Awesome Vue 리포지토리](https://github.com/vuejs/awesome-vue)
+ [Vue Material](https://github.com/vuematerial/vue-material)
+ [Scotch Vue.js 투토리얼](https://scotch.io/courses/build-an-online-shop-with-vue)
+ [Build VueTube](https://medium.com/techtrument/build-a-video-player-like-youtube-in-vuejs-webpack-and-flexbox-b51ef9bede0b)


## 5. 통계 및 기타
+ [State of Vue.js](https://www.monterail.com/state-of-vuejs-report)
+ [Vue.js 팟캐트트](https://medium.com/vue-mastery/the-official-vue-js-news-podcast-is-live-aa4052827960)
+ [Vie.js Mastery](http://www.vuemastery.com/)

## 6. Hello Vue.js Example code

```html
<script src="https://unpkg.com/marked@0.3.6"></script>
<script src="https://unpkg.com/lodash@4.16.0"></script>

<div id="editor">
  <textarea :value="input" @input="update"></textarea>
  <div v-html="compiledMarkdown"></div>
</div>
```

```javascript
new Vue({
  el: '#editor',
  data: {
    input: '# hello'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
})
```

```
./home/gitpod/.pyenv/versions/2.7.16/lib/python2.7/site-packages/notebook/static/components/codemirror/mode/vue
./home/gitpod/.pyenv/versions/3.7.4/lib/python3.7/site-packages/notebook/static/components/codemirror/mode/vue
./workspace/Test/vue-app/node_modules/vue

./home/gitpod/.config/yarn/global/node_modules/.bin/vue
./home/gitpod/.yarn/bin/vue
./home/gitpod/.cache/yarn/v6/npm-@vue-cli-4.0.5-20f3159e9c1c1d646bb1086e9387f99351fb6064-integrity/node_modules/@vue/cli/.bin/vue
./home/gitpod/.cache/yarn/v6/npm-vue-2.6.10-a72b1a42a4d82a721ea438d1b6bf55e66195c637-integrity/node_modules/vue
./home/gitpod/.pyenv/versions/2.7.16/lib/python2.7/site-packages/notebook/static/components/codemirror/mode/vue
./home/gitpod/.pyenv/versions/3.7.4/lib/python3.7/site-packages/notebook/static/components/codemirror/mode/vue
./workspace/Test/vue-app/node_modules/vue
```

