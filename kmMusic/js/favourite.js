window.onload=function(){
	var hang=document.getElementsByClassName("hang");
	var img=document.getElementsByTagName("img");
	var p1=document.getElementById("p1");
	var p2=document.getElementById("p2");
	
	
	hang[0].onmousemove=function(){
		img[1].src="./img/4.1.jpg";
		p1.innerHTML="仰望梦想的脚步";
		p2.innerHTML="松本文纪"
	}
	hang[1].onmousemove=function(){
		img[1].src="./img/4.2.jpg";
		p1.innerHTML="Free and easy";
		p2.innerHTML="天門"
	}
	hang[2].onmousemove=function(){
		img[1].src="./img/4.3.jpg";
		p1.innerHTML="水仙";
		p2.innerHTML="松本文纪"
	}
	hang[3].onmousemove=function(){
		img[1].src="./img/4.4.jpg";
		p1.innerHTML="東方萃夢想";
		p2.innerHTML="TAMUSIC"
	}
	hang[4].onmousemove=function(){
		img[1].src="./img/4.5.jpg";
		p1.innerHTML="忘れてしまえ ";
		p2.innerHTML="花譜"
	}
	hang[5].onmousemove=function(){
		img[1].src="./img/4.6.jpg";
		p1.innerHTML="A Moon Filled Sky";
		p2.innerHTML="天門"
	}
	hang[6].onmousemove=function(){
		img[1].src="./img/4.7.jpg";
		p1.innerHTML="Piano Serenada";
		p2.innerHTML="天門"
	}
}