/*! fakeBing 2015-04-10 */
"use strict";
function getDateStr(a){var b=a.getFullYear(),c=a.getMonth()+1,c=10>c?"0"+c:c,d=a.getDate(),d=10>d?"0"+d:d,e=b+"-"+c+"-"+d;return e}
function getTodayDate(){var a=new Date;return getDateStr(a)}
function getDateDiff(a,b){var c,d,e,f;return c=a.split("-"),d=new Date(c[0]+"-"+c[1]+"-"+c[2]),c=b.split("-"),e=new Date(c[0]+"-"+c[1]+"-"+c[2]),f=parseInt((d-e)/1e3/60/60/24)}
function getDiffDate(a){var b=(new Date).getTime()+24e3*a*3600,c=new Date;return c.setTime(b),getDateStr(c)}
function getDateDiffObj(a,b){var c,d,e,f,g=new Date;return c=a.split("-"),d=new Date(c[0]+"-"+c[1]+"-"+c[2]),c=b.split("-"),e=new Date(c[0]+"-"+c[1]+"-"+c[2]),f=parseInt((d-e)/1e3/60/60/24),{day:f,hour:g.getHours(),min:g.getMinutes(),sec:g.getSeconds()}}
function getMemorial(){return getDateDiffObj(getTodayDate(),"2016-01-27")}
function renderBox(){var a=getMemorial();$box.innerHTML="在一起<strong>"+a.day+"</strong> 天 "+a.hour+" 时 "+a.min+" 分 "+a.sec+" 秒 "}
function onEnterSecond(){setInterval(function(){renderBox()},1e3)}
var $box=document.querySelector("#magicbox");
renderBox(),onEnterSecond();