/*
* @Author: Administrator
* @Date:   2017-11-12 16:03:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-16 23:20:12
*/
window.onload=function(){
	// banner图开始编写
	let banner=document.getElementsByClassName('banner')[0];
	let banner_tu=banner.getElementsByClassName('tu1');
	let t=setInterval(fn_banner, 3000);
	let zuobashou_ban=banner.getElementsByClassName('zuobashou')[0];
	let youbashou_ban=banner.getElementsByClassName('youbashou')[0];
	let indicator=banner.getElementsByClassName('indicator')[0];
	let indicator_li=indicator.getElementsByTagName('li');
	let num=0;
	let flag=true;
	console.log(zuobashou_ban,youbashou_ban);
	zuobashou_ban.onclick=function(){
		if (flag) {
		  flag=false;
		  fn_banner1();
		}
	}
	youbashou_ban.onclick=function(){
       if (flag) {
       	 flag=false;
       	 fn_banner();
       }
	}
	for(let i=0;i<indicator_li.length;i++){
		indicator_li[i].onclick=function(){
			indicator_li[i].style.background='#e80375';
			banner_tu[i].style.opacity='1';
			indicator_li[num].style.background='#7b6a71';
			banner_tu[num].style.opacity='0';
			num=i;
		}
	}

	function fn_banner(){
       num++;
       if (num==banner_tu.length) {
      		num=0;
       }
       for(let i=0;i<banner_tu.length;i++){
       	banner_tu[i].style.opacity='0';
       	indicator_li[i].style.background='#7b6a71';
       }
       banner_tu[num].style.opacity='1';
       indicator_li[num].style.background='#e80375';
       flag=true;
	}
	function fn_banner1(){
       num--;
       if (num==-1) {
      		num=banner_tu.length-1;
       }
       for(let i=0;i<banner_tu.length;i++){
       	banner_tu[i].style.opacity='0';
       	indicator_li[i].style.background='#7b6a71';
       }
       banner_tu[num].style.opacity='1';
       indicator_li[num].style.background='#e80375';
       flag=true;
	}
    // 分类栏开始编写
    let navbar=document.getElementsByClassName('navbar')[0];
    let nav_li=navbar.getElementsByTagName('li');
    let ydsc=navbar.getElementsByClassName('ydsc');

    console.log(navbar,nav_li,ydsc);
    for(let i=1;i<nav_li.length;i++){
    	nav_li[i].onmouseover=function(){
    		let ydsc_item=nav_li[i].getElementsByClassName('ydsc')[0];
    		ydsc_item.style.display='block';
    	}
    	nav_li[i].onmouseout=function(){
    		let ydsc_item=nav_li[i].getElementsByClassName('ydsc')[0];
    		ydsc_item.style.display='none';
    	}
    }


    // 底部动图开始编写
    
    let dongtu=document.getElementsByClassName('dongtu')[0];
    let allbox=dongtu.getElementsByClassName('allbox')[0];
    let dt_zuoba=dongtu.getElementsByClassName('zuobashou2')[0];
    let dt_youba=dongtu.getElementsByClassName('youbashou2')[0];
    console.log(dt_zuoba,dt_youba,allbox);
    let num_dt=0;
    let dongtu_time=setInterval(fnDongtu, 2500);

    dt_youba.onclick=function(){
    	if (num_dt==12) {
    		num_dt=0;
        allbox.style.transition='none';
    	}
        num_dt++;
      
    	allbox.style.transform=`translateX(-${num_dt*295}px)`;
      allbox.style.transition='all 1s';
    }
     dt_zuoba.onclick=function(){
     	if (num_dt==0) {
     		num_dt=12;
        allbox.style.transition='none';
     	}
        num_dt--;
        console.log(num_dt);
    	allbox.style.transform=`translateX(-${num_dt*295}px)`;
      allbox.style.transition='all 1s';
    }
    dongtu.onmouseover=function(){
    	clearInterval(dongtu_time);
    }
    dongtu.onmouseout=function(){
    	dongtu_time=setInterval(fnDongtu, 2500);
    }
    function fnDongtu(){
    	console.log(num_dt)
    	if (num_dt>=11) {
       
    		num_dt=0;
         allbox.style.transition='none';

    	}

        num_dt++;

        allbox.style.transform=`translateX(-${num_dt*295}px)`;
        allbox.style.transition='all 1s';
    }
}