var svgNS="http://www.w3.org/2000/svg";var xlinkNS="http://www.w3.org/1999/xlink";var cartoNS="http://www.carto.net/attrib";var attribNS="http://www.carto.net/attrib";var batikNS="http://xml.apache.org/batik/ext";function toPolarDir(e,f){var d=(Math.atan2(f,e));return(d)}function toPolarDist(e,d){var f=Math.sqrt(e*e+d*d);return(f)}function toRectX(d,f){var e=f*Math.cos(d);return(e)}function toRectY(d,c){y=c*Math.sin(d);return(y)}function DegToRad(b){return(b/180*Math.PI)}function RadToDeg(b){return(b/Math.PI*180)}function dd2dms(f){var e=(Math.abs(f)-Math.floor(Math.abs(f)))*60;var g=(e-Math.floor(e))*60;var e=Math.floor(e);if(f>=0){var j=Math.floor(f)}else{var j=Math.ceil(f)}return{deg:j,min:e,sec:g}}function dms2dd(f,e,d){if(f<0){return f-(e/60)-(d/3600)}else{return f+(e/60)+(d/3600)}}function log(d,b){if(b==null){b=Math.E}return Math.log(d)/Math.log(b)}function intBilinear(A,C,E,G,x,H,I,J,K){var f=(x-I)/K;var w=(H-J)/K;var z=(1-f)*(1-w);var B=f*(1-w);var D=f*w;var F=w*(1-f);var e=z*E+B*G+D*A+F*C;return e}function leftOfTest(k,m,q,n,r,o){var l=(n-m)*(r-q)-(q-k)*(o-n);if(l<0){var p=1}else{var p=0}return p}function distFromLine(p,o,q,u,r,m){var l=r-q;var n=m-u;var t=(n*(p-q)-l*(o-u))/Math.sqrt(Math.pow(l,2)+Math.pow(n,2));return t}function angleBetwTwoLines(f,g,j,l){var k=Math.acos((f*j+g*l)/(Math.sqrt(Math.pow(f,2)+Math.pow(g,2))*Math.sqrt(Math.pow(j,2)+Math.pow(l,2))));return k}function calcBisectorVector(c,k,m,o){var n=Math.sqrt(Math.pow(c,2)+Math.pow(k,2));var p=Math.sqrt(Math.pow(m,2)+Math.pow(o,2));var l=new Array();l[0]=c/n+m/p;l[1]=k/n+o/p;return l}function calcBisectorAngle(u,l,m,n){var r=Math.sqrt(Math.pow(u,2)+Math.pow(l,2));var t=Math.sqrt(Math.pow(m,2)+Math.pow(n,2));var o=u/r+m/t;var p=l/r+n/t;var q=toPolarDir(o,p);return q}function intersect2lines(q,w,r,x,o,t,p,u){var A=new Object();var z=(u-t)*(r-q)-(p-o)*(x-w);if(z==0){alert("lines are parallel")}else{var B=((p-o)*(w-t)-(u-t)*(q-o))/z;var C=((r-q)*(w-t)-(x-w)*(q-o))/z}A.x=q+B*(r-q);A.y=w+B*(x-w);return A}function formatNumberString(j,l){if(typeof(j)=="Number"){var n=j.toString()}else{var n=j}var g="";var m=n.split(".");var k=m[0].length;if(k>3){while(k>0){if(k>3){g=l+m[0].substr(k-3,3)+g}else{g=m[0].substr(0,k)+g}k-=3}}else{g=m[0]}if(m[1]){g=g+"."+m[1]}return g}function statusChange(b){document.getElementById("statusText").firstChild.nodeValue="Statusbar: "+b}function scaleObject(j,l){var m=j.currentTarget;var n=m.getAttributeNS(null,"x");var g=m.getAttributeNS(null,"y");var k="scale("+l+") translate("+(n*1/l-n)+" "+(g*1/l-g)+")";m.setAttributeNS(null,"transform",k)}function getTransformToRootElement(d){try{var f=d.getTransformToElement(document.documentElement)}catch(e){var f=d.getCTM();while((d=d.parentNode)!=document){f=d.getCTM().multiply(f)}}return f}function getTransformToElement(e,j){try{var g=e.getTransformToElement(j)}catch(f){var g=e.getCTM();while((e=e.parentNode)!=j){g=e.getCTM().multiply(g)}}return g}function hsv2rgb(n,r,t){var f=new Object();if(r==0){f.red=Math.round(t*255);f.green=Math.round(t*255);f.blue=Math.round(t*255)}else{var o=n/60;var p=Math.floor(o);var m=o-p;if(p%2==0){m=1-m}var q=t*(1-r);var u=t*(1-r*m);switch(p){case 0:f.red=t;f.green=u;f.blue=q;break;case 1:f.red=u;f.green=t;f.blue=q;break;case 2:f.red=q;f.green=t;f.blue=u;break;case 3:f.red=q;f.green=u;f.blue=t;break;case 4:f.red=u;f.green=q;f.blue=t;break;case 5:f.red=t;f.green=q;f.blue=u;break;case 6:f.red=t;f.green=u;f.blue=q;break}f.red=Math.round(f.red*255);f.green=Math.round(f.green*255);f.blue=Math.round(f.blue*255)}return f}function rgb2hsv(j,e,f){var g=new Object();j=j/255;e=e/255;f=f/255;myMax=Math.max(j,Math.max(e,f));myMin=Math.min(j,Math.min(e,f));v=myMax;if(myMax>0){s=(myMax-myMin)/myMax}else{s=0}if(s>0){myDiff=myMax-myMin;rc=(myMax-j)/myDiff;gc=(myMax-e)/myDiff;bc=(myMax-f)/myDiff;if(j==myMax){h=(bc-gc)/6}if(e==myMax){h=(2+rc-bc)/6}if(f==myMax){h=(4+gc-rc)/6}}else{h=0}if(h<0){h+=1}g.hue=Math.round(h*360);g.sat=s;g.val=v;return g}function arrayPopulate(e,d){var f=new Array();if(e.length!=d.length){alert("error: arrays do not have the same length!")}else{for(i=0;i<e.length;i++){f[e[i]]=d[i]}}return f}function getData(m,n,l,k,g,j){this.url=m;this.callBackFunction=n;this.returnFormat=l;this.method=k;this.additionalParams=j;if(k!="get"&&k!="post"){alert("Error in network request: parameter 'method' must be 'get' or 'post'")}this.postText=g;this.xmlRequest=null}getData.prototype.getData=function(){if(window.getURL){if(this.method=="get"){getURL(this.url,this)}if(this.method=="post"){postURL(this.url,this.postText,this)}}else{if(window.XMLHttpRequest){var c=this;this.xmlRequest=new XMLHttpRequest();if(this.method=="get"){if(this.returnFormat=="xml"){this.xmlRequest.overrideMimeType("text/xml")}this.xmlRequest.open("GET",this.url,true)}if(this.method=="post"){this.xmlRequest.open("POST",this.url,true)}this.xmlRequest.onreadystatechange=function(){c.handleEvent()};if(this.method=="get"){this.xmlRequest.send(null)}if(this.method=="post"){var d=true;if(!this.postText){d=false;alert("Error in network post request: missing parameter 'postText'!")}if(typeof(this.postText)!="string"){d=false;alert("Error in network post request: parameter 'postText' has to be of type 'string')")}if(d){this.xmlRequest.send(this.postText)}}}else{alert("your browser/svg viewer neither supports window.getURL nor window.XMLHttpRequest!")}}};getData.prototype.operationComplete=function(c){if(c.success){if(this.returnFormat=="xml"){var d=parseXML(c.content,document);if(typeof(this.callBackFunction)=="function"){this.callBackFunction(d.firstChild,this.additionalParams)}if(typeof(this.callBackFunction)=="object"){this.callBackFunction.receiveData(d.firstChild,this.additionalParams)}}if(this.returnFormat=="json"){if(typeof(this.callBackFunction)=="function"){this.callBackFunction(c.content,this.additionalParams)}if(typeof(this.callBackFunction)=="object"){this.callBackFunction.receiveData(c.content,this.additionalParams)}}}else{alert("something went wrong with dynamic loading of geometry!")}};getData.prototype.handleEvent=function(){if(this.xmlRequest.readyState==4){if(this.returnFormat=="xml"){var b=document.importNode(this.xmlRequest.responseXML.documentElement,true);if(typeof(this.callBackFunction)=="function"){this.callBackFunction(b,this.additionalParams)}if(typeof(this.callBackFunction)=="object"){this.callBackFunction.receiveData(b,this.additionalParams)}}if(this.returnFormat=="json"){if(typeof(this.callBackFunction)=="function"){this.callBackFunction(this.xmlRequest.responseText,this.additionalParams)}if(typeof(this.callBackFunction)=="object"){this.callBackFunction.receiveData(this.xmlRequest.responseText,this.additionalParams)}}}};function serializeNode(d){if(typeof XMLSerializer!="undefined"){return new XMLSerializer().serializeToString(d)}else{if(typeof d.xml!="undefined"){return d.xml}else{if(typeof printNode!="undefined"){return printNode(d)}else{if(typeof Packages!="undefined"){try{var e=new java.io.StringWriter();Packages.org.apache.batik.dom.util.DOMUtilities.writeNode(d,e);return e.toString()}catch(f){alert("Sorry, your SVG viewer does not support the printNode/serialize function.");return""}}else{alert("Sorry, your SVG viewer does not support the printNode/serialize function.");return""}}}}}function startAnimation(b){document.getElementById(b).beginElement()};