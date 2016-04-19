# 새로운 웹의 시대~
## html5
1. 버전업~~
	> 이전 xhtml 시절의 코드에서 더욱더 전문화, div
	
2. 새로운기능 추가
	> simentic, outline, form, server
	1.sementic: div무덤으로 불리던 코드의 내용들이 의미를 가지게된다!
		- header, article, section, nav, aside, footer
		- figcaption, figure
		- hgroup
		* ie하위버전이나 구형브라우저들은 sementic구조의 코드를 모르는 경우가 많고, 	css자체를 온전히 사용하지 못하는 경우가 많다. 이러한 부분들을 해결하기위해 hack을 사용하는 경우가 있다.
		
	
3. 편리해진다!!(?????)
	> 목적에 맞게 사용함으로인해 변별역이 높아진다.
	> 접근성, 웹표준이 강화된다!
	
## css3
1. 새로운 기능 추가
	>확장된 선택자!
	1. 기존 type, id, class, 자손, 자식, 속성 선택자, 가상
	2. +(연결선택), ~(동위선택)
	3. :nth 선택자
	
	**+(연결선택자)**
```
<ul>
	<li class="lis_1">lis_1</li>
	<li class="lis_2">lis_2</li>
	<li class="lis_3">lis_3</li>
	<li class="lis_4">lis_4</li>
</ul>	 
<style>
 .lis_1:hover + li{background-color:#0af}
 .lis_2:hover ~ li{color:#fa0}
 .lis_2:hover ~ .lis_4{color:#faf}
</style>
```
	> html5와 최적화된 기능, illustrator, photoshop 에있던 기능의 코드화! => 웹의 속도가 올라간다!!
	> 애니메이션, 다양한 효과들의 표현력이 늘어남
	
2. 편리해진다!!!
	> 과거 js에서 사용하던 기능들이 css, html기본기능으로 내장

---
## 단점
1. 외울게 많아진다~~~!!
2. 디자인영역, 개발영역이 구분되기 시작
3. 브라우저 호환 아직 완성형이 아니기도하고, 
구형브라우저에서는 작동x












