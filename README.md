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

# Vue js
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