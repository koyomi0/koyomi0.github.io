window.onload=function(){
	var mood=document.getElementById("mood");
	var moremood=document.getElementById("moremode");
	mood.onmouseover=function(){
		moremood.style.display="block";
	}
	mood.onmouseleave=function(){
		moremood.style.display="none";
	}
	moremood.onmouseover=function(){
		moremood.style.display="block";
	}
	moremood.onmouseleave=function(){
		moremood.style.display="none";
	}
	
	var moods=document.getElementsByClassName("moods");
	var img=document.querySelector("#player img");
	var body=document.getElementById("body");
	var moodp=document.querySelector("#mood p");
	h1=document.querySelector("#player h1");
	h2=document.querySelector("#player h2");
	moods[0].onclick=function(){
		img.src="img/7.2.jpg";
		h1.innerHTML="第一夜";
		h2.innerHTML="ヨルシカ"
		body.style.backgroundImage="url(./img/8.2.jpg)";
		moodp.innerHTML="随心听";
		document.querySelector("#player h2").style.right="14.2%"
	}
	moods[1].onclick=function(){
		img.src="img/7.1.jpg";
		h1.innerHTML="小美满";
		h2.innerHTML="周深"
		body.style.backgroundImage="url(./img/8.3.jpg)";
		moodp.innerHTML="新歌速递";
		document.querySelector("#player h2").style.right="14.2%"
	}
	moods[2].onclick=function(){
		img.src="img/7.3.jpg";
		h1.innerHTML="night";
		h2.innerHTML="天門"
		body.style.backgroundImage="url(./img/8.4.jpg)";
		moodp.innerHTML="猜你喜欢";
		document.querySelector("#player h2").style.right="10%"
	}
}