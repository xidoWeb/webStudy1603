# gulp
> 자동화툴 : 압축, 축소, 병합, 변환 손쉽게 처리하는 프론트앤드 기술

## 기본조건
1. [node.js설치](http://nodejs.org)
2. [git설치](http://git-scm.com)
3. 컴퓨터 기본 세팅(폴더세팅)
4. [걸프사이트](http://gulpjs.com)
5. [npm사이트](https://www.npmjs.com) :모듈자료 있는곳
6. [bower사이트](https://bower.io)
    - npm-서버사이드쪽 / bower-프론트쪽(부트스트랩, jQuery)
___
1. [yeoman](http://yeoman.io/) : 자동화기능을 손쉽게 설치하는 툴

## 사용법
1. 컴퓨터 전역에 gulp설치
    `$ sudo npm install gulp -g `
2. 폴더에 직접 gulp설치(node-moduls)
    `$ sudo npm install gulp --save-dev`
3. 파일 생성 `gulpfile.js`생성
4. gulp컨트롤할 모듈 생성 또는 내용을 정의!(package.json)
    `$ sudo npm init -y`
5. gulpfile.js를 직접 사용(모듈설치와 함께)
___

## 테스트
### gulpfile.js
```javascript
 var gulp = require('gulp');

 gulp.task('hello' , function(){
    console.log('-------------------------------------------------');
    console.log('\> gulp시작');
    console.log('-------------------------------------------------');
 });

 gulp.task('default', ['hello']);
```
` $ gulp `

## sass 실행
` $ sudo npm install gulp-sass --save-dev `