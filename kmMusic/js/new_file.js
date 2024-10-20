window.onload=function(){
	
	var imgs=document.getElementsByClassName("imgs");
	var point=document.getElementsByClassName("point");
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var content=document.querySelector('.content');
	var index=0;
	var timer=null;
	var singers=document.querySelectorAll(".singer img")
	var names=document.querySelectorAll(".singer p")
	var region=document.querySelectorAll("#regions p")
	
	
	var clearclass=function(){
		for(let i=0;i<imgs.length;i++){
			imgs[i].className="imgs";
			point[i].className="point";
			point[i].setAttribute("num",i);
		}
	}
	
	function move(){
		clearclass();
		imgs[index].className="imgs active";
		point[index].className="point white";
	}
	
	right.onclick=function(){
		if(index<imgs.length-1){
			index++;
		}
		else{
			index=0;
		}
		move();
	}
	
	left.onclick=function(){
		if(index>0){
			index--;
		}
		else{
			index=imgs.length-1;
		}
		move();
	}
	
	timer=setInterval(function(){
		right.onclick();
	},1700)
	for(var i=0;i<point.length;i++){
		point[i].addEventListener("click",function(){
			var point_index=this.getAttribute("num");
			index=point_index;
			move();
		})
	}
	
	content.onmouseover=function(){
		clearInterval(timer);
			timer=setInterval(function(){
				right.onclick();
			},3000)
	}
	
	content.onmouseleave=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			right.onclick();
		},1700)
	}
	
	function clearregion(){
		for(let j=0;j<region.length;j++){
			region[j].className="region"
		}
	}
	region[0].onmouseover=function(){
		singers[0].src="./img/6.11.jpg"
		singers[1].src="./img/6.12.jpg"
		singers[2].src="./img/6.13.jpg"
		singers[3].src="./img/6.14.jpg"
		singers[4].src="./img/6.15.jpg"
		names[0].innerHTML="周杰伦"
		names[1].innerHTML="陈奕迅"
		names[2].innerHTML="薛之谦"
		names[3].innerHTML="凤凰传奇"
		names[4].innerHTML="邓紫棋"
		clearregion();
		region[0].className="regionActive"
	}
	region[1].onmouseover=function(){
		singers[0].src="./img/6.21.jpg"
		singers[1].src="./img/6.22.jpg"
		singers[2].src="./img/6.23.jpg"
		singers[3].src="./img/6.24.jpg"
		singers[4].src="./img/6.25.jpg"
		names[0].innerHTML="EGOIST"
		names[1].innerHTML="天門"
		names[2].innerHTML="Yoohsic"
		names[3].innerHTML="原田ひとみ"
		names[4].innerHTML="花譜"
		clearregion();
		region[1].className="regionActive"
	}
	region[2].onmouseover=function(){
		singers[0].src="./img/6.31.jpg"
		singers[1].src="./img/6.32.jpg"
		singers[2].src="./img/6.33.jpg"
		singers[3].src="./img/6.34.jpg"
		singers[4].src="./img/6.35.jpg"
		names[0].innerHTML="Adele"
		names[1].innerHTML="Jackson"
		names[2].innerHTML="Smile"
		names[3].innerHTML="Avicii"
		names[4].innerHTML="DNF"
		clearregion();
		region[2].className="regionActive"
	}
}