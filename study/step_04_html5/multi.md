# multimedia
> 과거 웹브라우저에서 동영상, 오디오파일 재생하려면, 플래시 or 플러그인설치후 가능하였다.
현재 html5로 넘어오면서 다양한 오디오, 동영상 파일들이 재생이 가능하게 되었다.

## audio
```
	<audio src="./multi/exam.mp3" />
```
```
<audio controls="controls" autoplay="autoplay" muted >
	<source src="./multi/exam.ogg" type="audio/ogg" />
	<source src="./multi/exam.mp3" type="audio/mp3" />
</audio>
```
## video
```
	<video src="./multi/piki.mp4" />
	<video poster="">
		<source src="" type="" />
	</video>
```

## etc
1. iframe: 웹문서를 포함한 외부파일등을 브라우저화면일부에 구현하기위한 코드
2. embed: iframe과 동일한 기능을 하지만 주로 플래시파일을 가져온다!!
```
<iframe src="" frameborder="0" allowfullscreen></iframe>
<embed src="" type="" />
```
	
	
	
	
	
	
	
	
	
	
	
	




