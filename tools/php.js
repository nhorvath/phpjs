/*
 * This package built from phpjscompile.php > ../build/php.js in the tools directory of the PHPJS project.
 * You should update PHPJS from git before you build a new php.js with "git pull".
 *
 * Functions in this package: Array
(
    [0] => array_diff
    [1] => array_keys
    [2] => array_merge
    [3] => array_unique
    [4] => array_values
    [5] => in_array
    [6] => is_numeric
    [7] => base64_decode
    [8] => base64_encode
    [9] => date
    [10] => date_parse
    [11] => number_format
    [12] => parse_url
    [13] => preg_grep
    [14] => preg_quote
    [15] => sprintf
    [16] => strtotime
    [17] => trim
    [18] => uniqid
    [19] => urldecode
    [20] => urlencode
    [21] => utf8_decode
    [22] => utf8_encode
    [23] => min
    [24] => max
    [25] => log10
)
 */
/* 
 * More info at: http://phpjs.org
 * 
 * This is version: 2015-02-27
 * php.js is copyright 2015 Kevin van Zonneveld.
 * 
 * Portions copyright lmeyrick (https://sourceforge.net/projects/bcmath-js/),
 * Brett Zamir (http://brett-zamir.me)
 * 
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */ 


// Compression: minified


(function(){if(typeof(this.PHP_JS)==="undefined"){var PHP_JS=function(cfgObj){if(!(this instanceof PHP_JS)){return new PHP_JS(cfgObj);}
this.window=cfgObj&&cfgObj.window?cfgObj.window:window;this.php_js={};this.php_js.ini={};if(cfgObj){for(var ini in cfgObj.ini){this.php_js.ini[ini]={};this.php_js.ini[ini].local_value=cfgObj.ini[ini];this.php_js.ini[ini].global_value=cfgObj.ini[ini];}}};}
var php_js_shared={};PHP_JS.prototype={constructor:PHP_JS,array_diff:function(arr1){var retArr={},argl=arguments.length,k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;},array_keys:function(input,search_value,argStrict){var search=typeof search_value!=='undefined',tmp_arr=[],strict=!!argStrict,include=true,key='';if(input&&typeof input==='object'&&input.change_key_case){return input.keys(search_value,argStrict);}
for(key in input){if(input.hasOwnProperty(key)){include=true;if(search){if(strict&&input[key]!==search_value){include=false;}else if(input[key]!=search_value){include=false;}}
if(include){tmp_arr[tmp_arr.length]=key;}}}
return tmp_arr;},array_merge:function(){var args=Array.prototype.slice.call(arguments),argl=args.length,arg,retObj={},k='',argil=0,j=0,i=0,ct=0,toStr=Object.prototype.toString,retArr=true;for(i=0;i<argl;i++){if(toStr.call(args[i])!=='[object Array]'){retArr=false;break;}}
if(retArr){retArr=[];for(i=0;i<argl;i++){retArr=retArr.concat(args[i]);}
return retArr;}
for(i=0,ct=0;i<argl;i++){arg=args[i];if(toStr.call(arg)==='[object Array]'){for(j=0,argil=arg.length;j<argil;j++){retObj[ct++]=arg[j];}}else{for(k in arg){if(arg.hasOwnProperty(k)){if(parseInt(k,10)+''===k){retObj[ct++]=arg[k];}else{retObj[k]=arg[k];}}}}}
return retObj;},array_unique:function(inputArr){var key='',tmp_arr2={},val='';var __array_search=function(needle,haystack){var fkey='';for(fkey in haystack){if(haystack.hasOwnProperty(fkey)){if((haystack[fkey]+'')===(needle+'')){return fkey;}}}
return false;};for(key in inputArr){if(inputArr.hasOwnProperty(key)){val=inputArr[key];if(false===__array_search(val,tmp_arr2)){tmp_arr2[key]=val;}}}
return tmp_arr2;},array_values:function(input){var tmp_arr=[],key='';if(input&&typeof input==='object'&&input.change_key_case){return input.values();}
for(key in input){tmp_arr[tmp_arr.length]=input[key];}
return tmp_arr;},in_array:function(needle,haystack,argStrict){var key='',strict=!!argStrict;if(strict){for(key in haystack){if(haystack[key]===needle){return true;}}}else{for(key in haystack){if(haystack[key]==needle){return true;}}}
return false;},is_numeric:function(mixed_var){var whitespace=" \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";return(typeof mixed_var==='number'||(typeof mixed_var==='string'&&whitespace.indexOf(mixed_var.slice(-1))===-
1))&&mixed_var!==''&&!isNaN(mixed_var);},base64_decode:function(data){var b64='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,dec='',tmp_arr=[];if(!data){return data;}
data+='';do{h1=b64.indexOf(data.charAt(i++));h2=b64.indexOf(data.charAt(i++));h3=b64.indexOf(data.charAt(i++));h4=b64.indexOf(data.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;o1=bits>>16&0xff;o2=bits>>8&0xff;o3=bits&0xff;if(h3==64){tmp_arr[ac++]=String.fromCharCode(o1);}else if(h4==64){tmp_arr[ac++]=String.fromCharCode(o1,o2);}else{tmp_arr[ac++]=String.fromCharCode(o1,o2,o3);}}while(i<data.length);dec=tmp_arr.join('');return decodeURIComponent(escape(dec.replace(/\0+$/,'')));},base64_encode:function(data){var b64='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,enc='',tmp_arr=[];if(!data){return data;}
data=unescape(encodeURIComponent(data));do{o1=data.charCodeAt(i++);o2=data.charCodeAt(i++);o3=data.charCodeAt(i++);bits=o1<<16|o2<<8|o3;h1=bits>>18&0x3f;h2=bits>>12&0x3f;h3=bits>>6&0x3f;h4=bits&0x3f;tmp_arr[ac++]=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4);}while(i<data.length);enc=tmp_arr.join('');var r=data.length%3;return(r?enc.slice(0,r-3):enc)+'==='.slice(r||3);},date:function(format,timestamp){var that=this;var jsdate,f;var txt_words=['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur','January','February','March','April','May','June','July','August','September','October','November','December'];var formatChr=/\\?(.?)/gi;var formatChrCb=function(t,s){return f[t]?f[t]():s;};var _pad=function(n,c){n=String(n);while(n.length<c){n='0'+n;}
return n;};f={d:function(){return _pad(f.j(),2);},D:function(){return f.l().slice(0,3);},j:function(){return jsdate.getDate();},l:function(){return txt_words[f.w()]+'day';},N:function(){return f.w()||7;},S:function(){var j=f.j();var i=j%10;if(i<=3&&parseInt((j%100)/10,10)==1){i=0;}
return['st','nd','rd'][i-1]||'th';},w:function(){return jsdate.getDay();},z:function(){var a=new Date(f.Y(),f.n()-1,f.j());var b=new Date(f.Y(),0,1);return Math.round((a-b)/864e5);},W:function(){var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3);var b=new Date(a.getFullYear(),0,4);return _pad(1+Math.round((a-b)/864e5/7),2);},F:function(){return txt_words[6+f.n()];},m:function(){return _pad(f.n(),2);},M:function(){return f.F().slice(0,3);},n:function(){return jsdate.getMonth()+1;},t:function(){return(new Date(f.Y(),f.n(),0)).getDate();},L:function(){var j=f.Y();return j%4===0&j%100!==0|j%400===0;},o:function(){var n=f.n();var W=f.W();var Y=f.Y();return Y+(n===12&&W<9?1:n===1&&W>9?-1:0);},Y:function(){return jsdate.getFullYear();},y:function(){return f.Y().toString().slice(-2);},a:function(){return jsdate.getHours()>11?'pm':'am';},A:function(){return f.a().toUpperCase();},B:function(){var H=jsdate.getUTCHours()*36e2;var i=jsdate.getUTCMinutes()*60;var s=jsdate.getUTCSeconds();return _pad(Math.floor((H+i+s+36e2)/86.4)%1e3,3);},g:function(){return f.G()%12||12;},G:function(){return jsdate.getHours();},h:function(){return _pad(f.g(),2);},H:function(){return _pad(f.G(),2);},i:function(){return _pad(jsdate.getMinutes(),2);},s:function(){return _pad(jsdate.getSeconds(),2);},u:function(){return _pad(jsdate.getMilliseconds()*1000,6);},e:function(){throw'Not supported (see source code of date() for timezone on how to add support)';},I:function(){var a=new Date(f.Y(),0);var c=Date.UTC(f.Y(),0);var b=new Date(f.Y(),6);var d=Date.UTC(f.Y(),6);return((a-c)!==(b-d))?1:0;},O:function(){var tzo=jsdate.getTimezoneOffset();var a=Math.abs(tzo);return(tzo>0?'-':'+')+_pad(Math.floor(a/60)*100+a%60,4);},P:function(){var O=f.O();return(O.substr(0,3)+':'+O.substr(3,2));},T:function(){return'UTC';},Z:function(){return-jsdate.getTimezoneOffset()*60;},c:function(){return'Y-m-d\\TH:i:sP'.replace(formatChr,formatChrCb);},r:function(){return'D, d M Y H:i:s O'.replace(formatChr,formatChrCb);},U:function(){return jsdate/1000|0;}};this.date=function(format,timestamp){that=this;jsdate=(timestamp===undefined?new Date():(timestamp instanceof Date)?new Date(timestamp):new Date(timestamp*1000));return format.replace(formatChr,formatChrCb);};return this.date(format,timestamp);},date_parse:function(date){this.php_js=this.php_js||{};var ts,warningsOffset=this.php_js.warnings?this.php_js.warnings.length:null,errorsOffset=this.php_js.errors?this.php_js.errors.length:null;try{this.php_js.date_parse_state=true;ts=this.strtotime(date);this.php_js.date_parse_state=false;}finally{if(!ts){return false;}}
var dt=new Date(ts*1000);var retObj={warning_count:warningsOffset!==null?this.php_js.warnings.slice(warningsOffset).length:0,warnings:warningsOffset!==null?this.php_js.warnings.slice(warningsOffset):[],error_count:errorsOffset!==null?this.php_js.errors.slice(errorsOffset).length:0,errors:errorsOffset!==null?this.php_js.errors.slice(errorsOffset):[]};retObj.year=dt.getFullYear();retObj.month=dt.getMonth()+1;retObj.day=dt.getDate();retObj.hour=dt.getHours();retObj.minute=dt.getMinutes();retObj.second=dt.getSeconds();retObj.fraction=parseFloat('0.'+dt.getMilliseconds());retObj.is_localtime=dt.getTimezoneOffset()!==0;return retObj;},number_format:function(number,decimals,dec_point,thousands_sep){number=(number+'').replace(/[^0-9+\-Ee.]/g,'');var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),sep=(typeof thousands_sep==='undefined')?',':thousands_sep,dec=(typeof dec_point==='undefined')?'.':dec_point,s='',toFixedFix=function(n,prec){var k=Math.pow(10,prec);return''+(Math.round(n*k)/k).toFixed(prec);};s=(prec?toFixedFix(n,prec):''+Math.round(n)).split('.');if(s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep);}
if((s[1]||'').length<prec){s[1]=s[1]||'';s[1]+=new Array(prec-s[1].length+1).join('0');}
return s.join(dec);},parse_url:function(str,component){try{this.php_js=this.php_js||{};}catch(e){this.php_js={};}
var query;var ini=(this.php_js&&this.php_js.ini)||{};var mode=(ini['phpjs.parse_url.mode']&&ini['phpjs.parse_url.mode'].local_value)||'php';var key=['source','scheme','authority','userInfo','user','pass','host','port','relative','path','directory','file','query','fragment'];var parser={php:/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/};var m=parser[mode].exec(str);var uri={};var i=14;while(i--){if(m[i]){uri[key[i]]=m[i];}}
if(component){return uri[component.replace('PHP_URL_','').toLowerCase()];}
if(mode!=='php'){var name=(ini['phpjs.parse_url.queryKey']&&ini['phpjs.parse_url.queryKey'].local_value)||'queryKey';parser=/(?:^|&)([^&=]*)=?([^&]*)/g;uri[name]={};query=uri[key[12]]||'';query.replace(parser,function($0,$1,$2){if($1){uri[name][$1]=$2;}});}
delete uri.source;return uri;},preg_grep:function(pattern,input,flags){var p='';var retObj={};var invert=(flags===1||flags==='PREG_GREP_INVERT');if(typeof pattern==='string'){pattern=eval(pattern);}
if(invert){for(p in input){if((input[p]+'').search(pattern)===-1){retObj[p]=input[p];}}}else{for(p in input){if((input[p]+'').search(pattern)!==-1){retObj[p]=input[p];}}}
return retObj;},preg_quote:function(str,delimiter){return String(str).replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\'+(delimiter||'')+'-]','g'),'\\$&');},sprintf:function(){var regex=/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;var a=arguments;var i=0;var format=a[i++];var pad=function(str,len,chr,leftJustify){if(!chr){chr=' ';}
var padding=(str.length>=len)?'':new Array(1+len-str.length>>>0).join(chr);return leftJustify?str+padding:padding+str;};var justify=function(value,prefix,leftJustify,minWidth,zeroPad,customPadChar){var diff=minWidth-value.length;if(diff>0){if(leftJustify||!zeroPad){value=pad(value,minWidth,customPadChar,leftJustify);}else{value=value.slice(0,prefix.length)+pad('',diff,'0',true)+value.slice(prefix.length);}}
return value;};var formatBaseX=function(value,base,prefix,leftJustify,minWidth,precision,zeroPad){var number=value>>>0;prefix=prefix&&number&&{'2':'0b','8':'0','16':'0x'}[base]||'';value=prefix+pad(number.toString(base),precision||0,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);};var formatString=function(value,leftJustify,minWidth,precision,zeroPad,customPadChar){if(precision!=null){value=value.slice(0,precision);}
return justify(value,'',leftJustify,minWidth,zeroPad,customPadChar);};var doFormat=function(substring,valueIndex,flags,minWidth,_,precision,type){var number,prefix,method,textTransform,value;if(substring==='%%'){return'%';}
var leftJustify=false;var positivePrefix='';var zeroPad=false;var prefixBaseX=false;var customPadChar=' ';var flagsl=flags.length;for(var j=0;flags&&j<flagsl;j++){switch(flags.charAt(j)){case' ':positivePrefix=' ';break;case'+':positivePrefix='+';break;case'-':leftJustify=true;break;case"'":customPadChar=flags.charAt(j+1);break;case'0':zeroPad=true;customPadChar='0';break;case'#':prefixBaseX=true;break;}}
if(!minWidth){minWidth=0;}else if(minWidth==='*'){minWidth=+a[i++];}else if(minWidth.charAt(0)=='*'){minWidth=+a[minWidth.slice(1,-1)];}else{minWidth=+minWidth;}
if(minWidth<0){minWidth=-minWidth;leftJustify=true;}
if(!isFinite(minWidth)){throw new Error('sprintf: (minimum-)width must be finite');}
if(!precision){precision='fFeE'.indexOf(type)>-1?6:(type==='d')?0:undefined;}else if(precision==='*'){precision=+a[i++];}else if(precision.charAt(0)=='*'){precision=+a[precision.slice(1,-1)];}else{precision=+precision;}
value=valueIndex?a[valueIndex.slice(0,-1)]:a[i++];switch(type){case's':return formatString(String(value),leftJustify,minWidth,precision,zeroPad,customPadChar);case'c':return formatString(String.fromCharCode(+value),leftJustify,minWidth,precision,zeroPad);case'b':return formatBaseX(value,2,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'o':return formatBaseX(value,8,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'x':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'X':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad).toUpperCase();case'u':return formatBaseX(value,10,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'i':case'd':number=+value||0;number=Math.round(number-number%1);prefix=number<0?'-':positivePrefix;value=prefix+pad(String(Math.abs(number)),precision,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);case'e':case'E':case'f':case'F':case'g':case'G':number=+value;prefix=number<0?'-':positivePrefix;method=['toExponential','toFixed','toPrecision']['efg'.indexOf(type.toLowerCase())];textTransform=['toString','toUpperCase']['eEfFgG'.indexOf(type)%2];value=prefix+Math.abs(number)[method](precision);return justify(value,prefix,leftJustify,minWidth,zeroPad)[textTransform]();default:return substring;}};return format.replace(regex,doFormat);},strtotime:function(text,now){var parsed,match,today,year,date,days,ranges,len,times,regex,i,fail=false;if(!text){return fail;}
text=text.replace(/^\s+|\s+$/g,'').replace(/\s{2,}/g,' ').replace(/[\t\r\n]/g,'').toLowerCase();match=text.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/);if(match&&match[2]===match[4]){if(match[1]>1901){switch(match[2]){case'-':{if(match[3]>12||match[5]>31){return fail;}
return new Date(match[1],parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;}
case'.':{return fail;}
case'/':{if(match[3]>12||match[5]>31){return fail;}
return new Date(match[1],parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;}}}else if(match[5]>1901){switch(match[2]){case'-':{if(match[3]>12||match[1]>31){return fail;}
return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;}
case'.':{if(match[3]>12||match[1]>31){return fail;}
return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;}
case'/':{if(match[1]>12||match[3]>31){return fail;}
return new Date(match[5],parseInt(match[1],10)-1,match[3],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;}}}else{switch(match[2]){case'-':{if(match[3]>12||match[5]>31||(match[1]<70&&match[1]>38)){return fail;}
year=match[1]>=0&&match[1]<=38?+match[1]+2000:match[1];return new Date(year,parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;}
case'.':{if(match[5]>=70){if(match[3]>12||match[1]>31){return fail;}
return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;}
if(match[5]<60&&!match[6]){if(match[1]>23||match[3]>59){return fail;}
today=new Date();return new Date(today.getFullYear(),today.getMonth(),today.getDate(),match[1]||0,match[3]||0,match[5]||0,match[9]||0)/1000;}
return fail;}
case'/':{if(match[1]>12||match[3]>31||(match[5]<70&&match[5]>38)){return fail;}
year=match[5]>=0&&match[5]<=38?+match[5]+2000:match[5];return new Date(year,parseInt(match[1],10)-1,match[3],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;}
case':':{if(match[1]>23||match[3]>59||match[5]>59){return fail;}
today=new Date();return new Date(today.getFullYear(),today.getMonth(),today.getDate(),match[1]||0,match[3]||0,match[5]||0)/1000;}}}}
if(text==='now'){return now===null||isNaN(now)?new Date().getTime()/1000|0:now|0;}
if(!isNaN(parsed=Date.parse(text))){return parsed/1000|0;}
date=now?new Date(now*1000):new Date();days={'sun':0,'mon':1,'tue':2,'wed':3,'thu':4,'fri':5,'sat':6};ranges={'yea':'FullYear','mon':'Month','day':'Date','hou':'Hours','min':'Minutes','sec':'Seconds'};function lastNext(type,range,modifier){var diff,day=days[range];if(typeof day!=='undefined'){diff=day-date.getDay();if(diff===0){diff=7*modifier;}else if(diff>0&&type==='last'){diff-=7;}else if(diff<0&&type==='next'){diff+=7;}
date.setDate(date.getDate()+diff);}}
function process(val){var splt=val.split(' '),type=splt[0],range=splt[1].substring(0,3),typeIsNumber=/\d+/.test(type),ago=splt[2]==='ago',num=(type==='last'?-1:1)*(ago?-1:1);if(typeIsNumber){num*=parseInt(type,10);}
if(ranges.hasOwnProperty(range)&&!splt[1].match(/^mon(day|\.)?$/i)){return date['set'+ranges[range]](date['get'+ranges[range]]()+num);}
if(range==='wee'){return date.setDate(date.getDate()+(num*7));}
if(type==='next'||type==='last'){lastNext(type,range,num);}else if(!typeIsNumber){return false;}
return true;}
times='(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec'+'|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?'+'|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)';regex='([+-]?\\d+\\s'+times+'|'+'(last|next)\\s'+times+')(\\sago)?';match=text.match(new RegExp(regex,'gi'));if(!match){return fail;}
for(i=0,len=match.length;i<len;i++){if(!process(match[i])){return fail;}}
return(date.getTime()/1000);},trim:function(str,charlist){var whitespace,l=0,i=0;str+='';if(!charlist){whitespace=' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';}else{charlist+='';whitespace=charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1');}
l=str.length;for(i=0;i<l;i++){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(i);break;}}
l=str.length;for(i=l-1;i>=0;i--){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(0,i+1);break;}}
return whitespace.indexOf(str.charAt(0))===-1?str:'';},uniqid:function(prefix,more_entropy){if(typeof prefix==='undefined'){prefix='';}
var retId;var formatSeed=function(seed,reqWidth){seed=parseInt(seed,10).toString(16);if(reqWidth<seed.length){return seed.slice(seed.length-reqWidth);}
if(reqWidth>seed.length){return Array(1+(reqWidth-seed.length)).join('0')+seed;}
return seed;};if(!this.php_js){this.php_js={};}
if(!this.php_js.uniqidSeed){this.php_js.uniqidSeed=Math.floor(Math.random()*0x75bcd15);}
this.php_js.uniqidSeed++;retId=prefix;retId+=formatSeed(parseInt(new Date().getTime()/1000,10),8);retId+=formatSeed(this.php_js.uniqidSeed,5);if(more_entropy){retId+=(Math.random()*10).toFixed(8).toString();}
return retId;},urldecode:function(str){return decodeURIComponent((str+'').replace(/%(?![\da-f]{2})/gi,function(){return'%25';}).replace(/\+/g,'%20'));},urlencode:function(str){str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');},utf8_decode:function(str_data){var tmp_arr=[],i=0,c1=0,seqlen=0;str_data+='';while(i<str_data.length){c1=str_data.charCodeAt(i)&0xFF;seqlen=0;if(c1<=0xBF){c1=(c1&0x7F);seqlen=1;}else if(c1<=0xDF){c1=(c1&0x1F);seqlen=2;}else if(c1<=0xEF){c1=(c1&0x0F);seqlen=3;}else{c1=(c1&0x07);seqlen=4;}
for(var ai=1;ai<seqlen;++ai){c1=((c1<<0x06)|(str_data.charCodeAt(ai+i)&0x3F));}
if(seqlen==4){c1-=0x10000;tmp_arr.push(String.fromCharCode(0xD800|((c1>>10)&0x3FF)),String.fromCharCode(0xDC00|(c1&0x3FF)));}else{tmp_arr.push(String.fromCharCode(c1));}
i+=seqlen;}
return tmp_arr.join("");},utf8_encode:function(argString){if(argString===null||typeof argString==='undefined'){return'';}
var string=(argString+'');var utftext='',start,end,stringl=0;start=end=0;stringl=string.length;for(var n=0;n<stringl;n++){var c1=string.charCodeAt(n);var enc=null;if(c1<128){end++;}else if(c1>127&&c1<2048){enc=String.fromCharCode((c1>>6)|192,(c1&63)|128);}else if((c1&0xF800)!=0xD800){enc=String.fromCharCode((c1>>12)|224,((c1>>6)&63)|128,(c1&63)|128);}else{if((c1&0xFC00)!=0xD800){throw new RangeError('Unmatched trail surrogate at '+n);}
var c2=string.charCodeAt(++n);if((c2&0xFC00)!=0xDC00){throw new RangeError('Unmatched lead surrogate at '+(n-1));}
c1=((c1&0x3FF)<<10)+(c2&0x3FF)+0x10000;enc=String.fromCharCode((c1>>18)|240,((c1>>12)&63)|128,((c1>>6)&63)|128,(c1&63)|128);}
if(enc!==null){if(end>start){utftext+=string.slice(start,end);}
utftext+=enc;start=end=n+1;}}
if(end>start){utftext+=string.slice(start,stringl);}
return utftext;},min:function(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(Object.prototype.toString.call(obj)==='[object Array]'){return obj;}
var ar=[];for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i]);}}
return ar;},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next){return 0;}else if(typeof current==='object'){if(typeof next==='object'){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1;}else if(nl<cl){return-1;}
for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1;}else if(tmp==-1){return-1;}}
return 0;}
return-1;}else if(typeof next==='object'){return 1;}else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0;}
return(current<0?1:-1);}else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0;}
return(next>0?1:-1);}
if(next==current){return 0;}
return(next>current?1:-1);};if(argc===0){throw new Error('At least one value should be passed to min()');}else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0]);}else{throw new Error('Wrong parameter count for min()');}
if(ar.length===0){throw new Error('Array must contain at least one element for min()');}}else{ar=argv;}
retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==-1){retVal=ar[i];}}
return retVal;},max:function(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(Object.prototype.toString.call(obj)==='[object Array]'){return obj;}else{var ar=[];for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i]);}}
return ar;}},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next){return 0;}else if(typeof current==='object'){if(typeof next==='object'){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1;}else if(nl<cl){return-1;}
for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1;}else if(tmp==-1){return-1;}}
return 0;}
return-1;}else if(typeof next==='object'){return 1;}else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0;}
return(current<0?1:-1);}else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0;}
return(next>0?1:-1);}
if(next==current){return 0;}
return(next>current?1:-1);};if(argc===0){throw new Error('At least one value should be passed to max()');}else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0]);}else{throw new Error('Wrong parameter count for max()');}
if(ar.length===0){throw new Error('Array must contain at least one element for max()');}}else{ar=argv;}
retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==1){retVal=ar[i];}}
return retVal;},log10:function(arg){return Math.log(arg)/2.302585092994046;}};this.PHP_JS=PHP_JS;}());

//=====When updating leave this last line=====
window.php = new PHP_JS();
