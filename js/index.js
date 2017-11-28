/*
* @Author: Administrator
* @Date:   2017-11-12 16:03:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-22 19:02:03
*/
window.onload=function(){
	// banner图开始编写
	let banner=document.getElementsByClassName('banner')[0];
	let banner_tu=banner.getElementsByClassName('tu1');
	let t=setInterval(fn_banner, 2000);
	let zuobashou_ban=banner.getElementsByClassName('zuobashou')[0];
	let youbashou_ban=banner.getElementsByClassName('youbashou')[0];
	let indicator=banner.getElementsByClassName('indicator')[0];
	let indicator_li=indicator.getElementsByTagName('li');
	// let num=0;
  let now=next=0; 
	// let flag=true;
  let kaiguan=true; 
	console.log(zuobashou_ban,youbashou_ban);
  for(let i=0;i<indicator_li.length;i++){
     indicator_li[i].onclick=function(){
      if (now==i) {
        return;
      }else
      if (now<i) {
         banner_tu[i].style.left="740px";
         animate(banner_tu[now],{left:-740},indicaFun);
         animate(banner_tu[i],{left:0},indicaFun);
      }else if (now>i) {
         banner_tu[i].style.left="-740px";
         animate(banner_tu[now],{left:740},indicaFun);
         animate(banner_tu[i],{left:0},indicaFun);
      }
      for(let j=0;j<indicator_li.length;j++){
          indicator_li[i].className="";
      }
      indicator_li[i].className="dot";
      now=next=i;
     }
  }
  banner.onmouseover=function(){
    clearInterval(t);
  }
  banner.onmouseout=function(){
    t=setInterval(fn_banner, 2000);
  }
  zuobashou_ban.onclick=function(){
    if (kaiguan) {
      fn_banner1();
    }
    kaiguan=false;
  }
  youbashou_ban.onclick=function(){
    if (kaiguan) {
      fn_banner();
    }
    kaiguan=false;
  };

  function fn_banner(){
     next++;
     if (next==banner_tu.length) {
       next=0;
     }
     banner_tu[next].style.left="740px";
     animate(banner_tu[now],{left:-740},indicaFun);
     animate(banner_tu[next],{left:0},indicaFun);

     now=next;
     // console.log(now);
  }
   function fn_banner1(){
     next--;
     if (next==-1) {
       next=banner_tu.length-1;
     }
     banner_tu[next].style.left="-740px";
     animate(banner_tu[now],{left:740},indicaFun);
     animate(banner_tu[next],{left:0},indicaFun);
    
     now=next;
     console.log(now);
  }
  
  function indicaFun(){
      for(let i=0;i<indicator_li.length;i++){
          indicator_li[i].className="";
      }
      indicator_li[now].className="dot";
       kaiguan=true;
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
    let dt_zuoba=dongtu.getElementsByClassName('zuobashou')[0];
    let dt_youba=dongtu.getElementsByClassName('youbashou')[0];
    let indexbox=allbox.querySelectorAll('.indexbox');
    let width=indexbox[0].offsetWidth;
    console.log(dt_zuoba,dt_youba,allbox,indexbox,width);
    let num_dt=0;
     let flag1=true;
    // let dongtu_time=setInterval(fnDongtu, 2500);
    let dongtu_time1=setInterval(R_Ldong,2000);
    dongtu.onmouseenter=function(){
        clearInterval(dongtu_time1);
       }
     dongtu.onmouseleave=function(){
        clearInterval(dongtu_time1);
        dongtu_time1=setInterval(R_Ldong, 2000);
     }
    function  R_Ldong(){
       animate(allbox,{left:-width},1000,()=>{
        let firstIndex=allbox.firstElementChild;
        allbox.appendChild(firstIndex);
        allbox.style.left=0+'px';
        flag1=true;
       });
    }
    function  L_Rdong(){
       let lastIndex=allbox.lastElementChild;
       let firstIndex=allbox.firstElementChild;
       allbox.insertBefore(lastIndex,firstIndex);
       allbox.style.left=-width+'px';
       animate(allbox,{left:0},1000,()=>{flag1=true})
    }
    dt_zuoba.onclick=function(){
       if (!flag1) {
          return;
        }
        flag1=false;
         L_Rdong();
    }
    dt_youba.onclick=function(){
        if (!flag1) {
          return;
        }
        flag1=false;
        R_Ldong();
    }
    
    // 顶部二维码的显示和消失
    let topright=document.querySelector('.topright');
    let topright_li=topright.querySelectorAll('li');
    let erweima=topright_li[1].querySelector('.hezi_erweima');
    let erweima_content=erweima.querySelector('.client_erweima');
    console.log(erweima,topright_li,erweima_content);
    erweima.onmouseover=function(){
       erweima_content.style.display='block'
        erweima_content.style.display='flex'

    }
    erweima.onmouseout=function(){
       erweima_content.style.display='none'
    }
   

   // 底部公告开始编写
   let middle=document.querySelector('.middle');
   let gonggao=document.querySelector('.middle_box');
   let gonggao_li=gonggao.querySelectorAll('li');
   let rbtn=document.querySelector('.rbtn');
   let rbtn_left=rbtn.querySelector('.left');
   let rbtn_right=rbtn.querySelector('.right');
   console.log(gonggao,gonggao_li,rbtn_left,rbtn_right);
   let gonggao_tt=setInterval(gonggaoFun, 4000);
   let gonggao_width=gonggao_li[0].offsetWidth;
   console.log(gonggao_width,middle)
   let flag2=true;
   function gonggaoFun(){
     /*gonggao.style.left=-gonggao_width+'px';
     let gonggao_first=gonggao_li.firstElementChild;
     gonggao.appendChild(gonggao_first);
     gonggao.style.left=0;*/
     animate(gonggao,{left:-gonggao_width}, 10,()=>{
         let gonggao_first=gonggao.firstElementChild;
         console.log(gonggao_first);
         gonggao.appendChild(gonggao_first);
         gonggao.style.left=0;
         flag2=true;
     })
   }
    function gonggaoFun1(){
       let gonggao_last=gonggao.lastElementChild;
       let gonggao_first=gonggao.firstElementChild;
       gonggao.insertBefore(gonggao_last,gonggao_first);
       gonggao.style.left=-gonggao_width+'px';
       animate(gonggao,{left:0},10,()=>{flag2=true})
   }
    rbtn_left.onclick=function(){
       if (!flag2) {
          return;
        }
        flag2=false;
         gonggaoFun1();
    }
    rbtn_right.onclick=function(){
        if (!flag2) {
          return;
        }
        flag2=false;
        gonggaoFun();
    }
     middle.onmouseenter=function(){
        clearInterval(gonggao_tt);
       }
     middle.onmouseleave=function(){
        clearInterval(gonggao_tt);
        gonggao_tt=setInterval(gonggaoFun, 4000);
     }
}