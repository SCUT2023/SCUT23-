window.onload = function(){
var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var date = new Date().getDate();
var hour = new Date().getHours();
var minute = new Date().getMinutes();
var day = new Date().getDay();
var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
console.log('今天是 '+ year + '年' + month + '月' + date + '日 ' + hour +':' + minute + ' ' + arr[day]);
document.getElementById("time").innerHTML = '今天是 '+ year + '年' + month + '月' + date + '日 ' + hour +':' + minute + ' ' + arr[day];
}