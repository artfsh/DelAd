// ==UserScript==
// @name         IDCLASS注册制广告屏蔽插件
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Artfsh
// @match        http://*/*
// @include      https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//UI层
var DelAd = document.createElement("div");
DelAd.style = 'position:fixed;right:10px;top:120px;height:36px;width:36px;z-index:9999;display:block;background:rgba(255, 255, 255, 0.35);border: 6px solid rgba(51, 51, 51, 0.35);border-radius: 99px;box-sizing:border-box;backdrop-filter:blur(1.5px);';
DelAd.id = 'DelAd';
document.body.appendChild(DelAd);
document.getElementById('DelAd').onclick = function(){
	if(document.getElementById('AdInputBox').style.display == 'none'){
		document.getElementById('AdInputBox').style.display = 'block';
		document.getElementById('AdInputBox').focus();
	}else{
		document.getElementById('AdInputBox').style.display = 'none';
		if(document.getElementById('AdInputBox').value != ''){//input中有值才执行此代码
			for(var i=1 ; eval("localStorage.hasOwnProperty('AdName"+i+"')") ; i++){}
			eval("localStorage.AdName"+i+"=document.getElementById('AdInputBox').value");//将input中的内容作为AdNamei的值存入localStorage
			if(document.getElementById(document.getElementById('AdInputBox').value)){//将这个广告隐藏
				document.getElementById(document.getElementById('AdInputBox').value).style.display = 'none';
			}else if(document.getElementsByClassName(document.getElementById('AdInputBox').value)[0]){
				document.getElementsByClassName(document.getElementById('AdInputBox').value)[0].style.display = 'none';
			}
			document.getElementById('AdInputBox').value = '';//重置input内容
		}
	}
}
var AdInputBox = document.createElement("input");
AdInputBox.id = 'AdInputBox';
AdInputBox.style = 'position:fixed;right:56px;top:120px;height:36px;width:200px;z-index:9998;display:none;outline:none;border:none;background:#FFFFFF;box-shadow: 0px 3px 14px 2px rgba(0, 0, 0, 0.05), 0px 8px 10px 1px rgba(0, 0, 0, 0.06), 0px 5px 5px -3px rgba(0, 0, 0, 0.1);border-radius: 2px;padding:0px 0px 0px 12px;';
document.body.appendChild(AdInputBox);


//程序层
//localStorage.AdName1、2、3...所对应的值就是要隐藏的元素的id/class。
function DelAds(){
	for(var i=1 ; eval("localStorage.hasOwnProperty('AdName"+i+"')") ; i++){
		if(eval("document.getElementById(localStorage.AdName"+i+")")){
			eval("document.getElementById(localStorage.AdName"+i+").style.display='none'");
		}else if(eval("document.getElementsByClassName(localStorage.AdName"+i+")[0]")){
			eval("document.getElementsByClassName(localStorage.AdName"+i+")[0].style.display='none'");
		}
	}
}
DelAds();
setTimeout(function() {//网站可能在页面加载完成后短暂延迟才加载广告，如此就会避开插件的屏蔽。因此删除方法也需要额外进行几次延迟运行。
	DelAds();
}, 500);
setTimeout(function() {
	DelAds();
}, 1000);
setTimeout(function() {
	DelAds();
}, 2000);
var target = window.location.href;
setInterval(function () {//解决无刷新渲染导致脚本在“新”页面没有运作
	if(window.location.href != target){
		DelAds();
		target = window.location.href;
		setTimeout(function() {//网站可能在页面加载完成后短暂延迟才加载广告，如此就会避开插件的屏蔽。因此删除方法也需要额外进行几次延迟运行。
			DelAds();
		}, 500);
		setTimeout(function() {
			DelAds();
		}, 1000);
		setTimeout(function() {
			DelAds();
		}, 2000);
	}
}, 2000);

})();
