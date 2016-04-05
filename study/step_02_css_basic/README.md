# css 이해
## css란? 
html 마크업되어져있는 내용을 꾸며주는 기능
id => #
class => .

```
<style type="text/css">
	/* 주석 */
	#box{
		color:#fa0;
		background-color:#0af;
	}
</style>
```
___
## 선택자!
> 선택자란 body에있는 코드를 선택해서 어떠한 작업을 할 수 있도록 가능한 무언가..

- .box{} : class 선택자
- #box{} : id 선택자
- div{} , p{}: element선택자
- div li{} : 자손선택자(해당 element 내부에 존재하는 element를 선택_위치는 정확하지 않는다.)
- div > ul > li{} :자식선택자(element 내부(바로하위)에 존재하는 element 선택.)
- a[href="#"] : 속성선택자(해당 element의 속성 및 속성값을 선택해서 사용)

- p.box{} : element 자신을 선택할때 그 속성이 class="box" 인것
- div#box{} : element 자신을 선택할때 그 속성이 id="box" 인것(비추)
- 가상선택자
	- a[href="http://naver.com"]{}
	- a:hover{color:#000;} /* 마우스 올렸을때 */
	- a:active{color:#fa0;} /* 마우스 누르고있을대 */
	- a:visited{}/* 방문한 페이지 */
	- a:focus{outline: 2px solid #000;}/* 활성화 되었을때 */
	- a::before{content:"앞부분"; color:#777;}/* 내용의 앞부분(content로 추가삽입) */
	-a::after{content:"뒷부분입니당."; color:#777;}/* 내용의 뒷부분(content로 추가삽입) */
___

## LAYOUT_basic

- line-height: 행간(줄간격)을 박스의 높이값 만큼 똑같이작성하면, 
해당하는 텍스의 위치는 수직정력의 가운데 배치가 된다.
(단, 한줄만 해당!!!)- 엄밀히 말하면 편법
___
## RESET.CSS


___


















