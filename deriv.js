// Generated by js_of_ocaml 3.5.2
(function(c){"use strict";var
at=" : flags Open_text and Open_binary are not compatible",aB=154,aW=-16,au="Sys_error",aZ="Invalid_argument",aH=0xf0,aN=180,aI=-15,ao=141,i=255,aA=0x800,aG=171,aM=0xffff,Q="jsError",aV=108,az="End_of_file",aU=127,z=1024,l=0x80,ay="Failure",an="Undefined_recursive_module",aT=" : flags Open_rdonly and Open_wronly are not compatible",aS="([^/]*)",P=512,ar="Stack_overflow",e="",ax=247,S="^",aE=0xe0,aQ=216,aR=" : file already exists",w=0x3f,aq="Not_found",aD=0xdfff,aC="Assert_failure",q="/",y=128,aw=0xdc00,aX="Sys_blocked_io",aY="fd ",aP="Out_of_memory",aL="Match_failure",h=248,aO="index out of bounds",ap="static/",av="Division_by_zero",aK=-10,aJ=252;function
bt(e,f,d){var
a=new
Array(d+1);a[0]=0;for(var
b=1,c=f+1;b<=d;b++,c++)a[b]=e[c];return a}function
$(d,e,c){var
b=new
Array(c);for(var
a=0;a<c;a++)b[a]=d[e+a];return b}function
Z(b,c,a){var
d=String.fromCharCode;if(c==0&&a<=4096&&a==b.length)return d.apply(null,b);var
f=e;for(;0<a;c+=z,a-=z)f+=d.apply(null,$(b,c,Math.min(a,z)));return f}function
G(b){if(c.Uint8Array)var
d=new(c.Uint8Array)(b.l);else
var
d=new
Array(b.l);var
f=b.c,e=f.length,a=0;for(;a<e;a++)d[a]=f.charCodeAt(a);for(e=b.l;a<e;a++)d[a]=0;b.c=d;b.t=4;return d}function
H(d,e,b,f,c){if(c==0)return 0;if(f==0&&(c>=b.l||b.t==2&&c>=b.c.length)){b.c=d.t==4?Z(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else
if(b.t==2&&f==b.c.length){b.c+=d.t==4?Z(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else{if(b.t!=4)G(b);var
g=d.c,h=b.c;if(d.t==4)if(f<=e)for(var
a=0;a<c;a++)h[f+a]=g[e+a];else
for(var
a=c-1;a>=0;a--)h[f+a]=g[e+a];else{var
i=Math.min(c,g.length-e);for(var
a=0;a<i;a++)h[f+a]=g.charCodeAt(e+a);for(;a<c;a++)h[f+a]=0}}return 0}function
bL(b,a){throw[0,b,a]}function
ba(a,b){if(a==0)return e;if(b.repeat)return b.repeat(a);var
c=e,d=0;if(a==0)return c;for(;;){if(a&1)c+=b;a>>=1;if(a==0)return c;b+=b;d++;if(d==9)b.slice(0,1)}}function
a2(a){if(a.t==2)a.c+=ba(a.l-a.c.length,"\0");else
a.c=Z(a.c,0,a.c.length);a.t=0}function
a4(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>aU)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
_(f){for(var
k=e,c=e,h,g,i,a,b=0,j=f.length;b<j;b++){g=f.charCodeAt(b);if(g<l){for(var
d=b+1;d<j&&(g=f.charCodeAt(d))<l;d++);if(d-b>P){c.substr(0,1);k+=c;c=e;k+=f.slice(b,d)}else
c+=f.slice(b,d);if(d==j)break;b=d}a=1;if(++b<j&&((i=f.charCodeAt(b))&-64)==y){h=i+(g<<6);if(g<aE){a=h-0x3080;if(a<l)a=1}else{a=2;if(++b<j&&((i=f.charCodeAt(b))&-64)==y){h=i+(h<<6);if(g<aH){a=h-0xe2080;if(a<aA||a>=0xd7ff&&a<0xe000)a=2}else{a=3;if(++b<j&&((i=f.charCodeAt(b))&-64)==y&&g<0xf5){a=i-0x3c82080+(h<<6);if(a<0x10000||a>0x10ffff)a=3}}}}}if(a<4){b-=a;c+="\ufffd"}else
if(a>aM)c+=String.fromCharCode(0xd7c0+(a>>10),aw+(a&0x3FF));else
c+=String.fromCharCode(a);if(c.length>z){c.substr(0,1);k+=c;c=e}}return k+c}function
bR(a){switch(a.t){case
9:return a.c;default:a2(a);case
0:if(a4(a.c)){a.t=9;return a.c}a.t=8;case
8:return _(a.c)}}function
m(c,a,b){this.t=c;this.c=a;this.l=b}m.prototype.toString=function(){return bR(this)};m.prototype.slice=function(){var
a=this.t==4?this.c.slice():this.c;return new
m(this.t,a,this.l)};function
f(a){return new
m(0,a,a.length)}function
X(b,a){bL(b,f(a))}var
d=[0];function
W(a){X(d.Invalid_argument,a)}function
bb(){W(aO)}function
bw(a,c,b){b&=0xff;if(a.t!=4){if(c==a.c.length){a.c+=String.fromCharCode(b);if(c+1==a.l)a.t=0;return 0}G(a)}a.c[c]=b;return 0}function
aa(b,a,c){if(a>>>0>=b.l)bb();return bw(b,a,c)}function
bX(c,e){var
d=c.length,b=new
Array(d+1),a=0;for(;a<d;a++)b[a]=c[a];b[a]=e;return b}function
F(b,a){if(b.fun)return F(b.fun,a);var
c=b.length,d=a.length,e=c-d;if(e==0)return b.apply(null,a);else
if(e<0)return F(b.apply(null,$(a,0,c)),$(a,c,d-c));else
return function(c){return F(b,bX(a,c))}}function
t(a){if(a<0)W("Bytes.create");return new
m(a?2:9,e,a)}function
by(a,c,b,d){if(b>0)if(c==0&&(b>=a.l||a.t==2&&b>=a.c.length))if(d==0){a.c=e;a.t=2}else{a.c=ba(b,String.fromCharCode(d));a.t=b==a.l?0:2}else{if(a.t!=4)G(a);for(b+=c;c<b;c++)a.c[c]=d}return 0}var
bI=0;function
B(){return bI++}function
bx(a){X(d.Failure,a)}if(c.process&&c.process.cwd)var
A=c.process.cwd().replace(/\\/g,q);else
var
A="/static";if(A.slice(-1)!==q)A+=q;function
bC(a){a=a
instanceof
m?a.toString():a;if(a.charCodeAt(0)!=47)a=A+a;var
d=a.split(q),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(e);break;default:b.push(d[c]);break}b.orig=a;return b}function
n(a){X(d.Sys_error,a)}function
bK(a){a=a
instanceof
m?a.toString():a;n(a+": No such file or directory")}function
bO(a){return new
m(4,a,a.length)}function
bv(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
bu(b,a){if(a>>>0>=b.l)bb();return bv(b,a)}function
a5(a){return a.l}function
a0(){}function
g(a){this.data=a}g.prototype=new
a0();g.prototype.truncate=function(a){var
b=this.data;this.data=t(a|0);H(b,0,this.data,0,a)};g.prototype.length=function(){return a5(this.data)};g.prototype.write=function(b,d,g,a){var
c=this.length();if(b+a>=c){var
e=t(b+a),f=this.data;this.data=e;H(f,0,this.data,0,c)}H(d,g,this.data,b,a);return 0};g.prototype.read=function(c,a,d,b){var
e=this.length();H(this.data,c,a,d,b);return 0};g.prototype.read_one=function(a){return bu(this.data,a)};g.prototype.close=function(){};g.prototype.constructor=g;function
j(b,a){this.content={};this.root=b;this.lookupFun=a}j.prototype.nm=function(a){return this.root+a};j.prototype.lookup=function(a){if(!this.content[a]&&this.lookupFun){var
b=this.lookupFun(f(this.root),f(a));if(b!==0)this.content[a]=new
g(b[1])}};j.prototype.exists=function(a){if(a==e)return 1;var
c=a+q,d=new
RegExp(S+c);for(var
b
in
this.content)if(b.match(d))return 1;this.lookup(a);return this.content[a]?1:0};j.prototype.readdir=function(c){var
g=c==e?e:c+q,h=new
RegExp(S+g+aS),d={},b=[];for(var
f
in
this.content){var
a=f.match(h);if(a&&!d[a[1]]){d[a[1]]=true;b.push(a[1])}}return b};j.prototype.is_dir=function(a){var
d=a==e?e:a+q,f=new
RegExp(S+d+aS),g=[];for(var
c
in
this.content){var
b=c.match(f);if(b)return 1}return 0};j.prototype.unlink=function(a){var
b=this.content[a]?true:false;delete
this.content[a];return b};j.prototype.open=function(a,b){if(b.rdonly&&b.wronly)n(this.nm(a)+aT);if(b.text&&b.binary)n(this.nm(a)+at);this.lookup(a);if(this.content[a]){if(this.is_dir(a))n(this.nm(a)+" : is a directory");if(b.create&&b.excl)n(this.nm(a)+aR);var
c=this.content[a];if(b.truncate)c.truncate();return c}else
if(b.create){this.content[a]=new
g(t(0));return this.content[a]}else
bK(this.nm(a))};j.prototype.register=function(b,a){if(this.content[b])n(this.nm(b)+aR);if(a
instanceof
m)this.content[b]=new
g(a);else
if(a
instanceof
Array)this.content[b]=new
g(bO(a));else
if(a.toString){var
c=f(a.toString());this.content[b]=new
g(c)}};j.prototype.constructor=j;function
a1(a){if(a.t!=4)G(a);return a.c}var
V=c.Buffer;function
p(a){this.fs=require("fs");this.fd=a}p.prototype=new
a0();p.prototype.truncate=function(a){this.fs.ftruncateSync(this.fd,a|0)};p.prototype.length=function(){return this.fs.fstatSync(this.fd).size};p.prototype.write=function(g,b,d,f){var
a=a1(b);if(!(a
instanceof
c.Uint8Array))a=new(c.Uint8Array)(a);var
e=V.from(a);this.fs.writeSync(this.fd,e,d,f,g);return 0};p.prototype.read=function(h,e,d,g){var
a=a1(e);if(!(a
instanceof
c.Uint8Array))a=new(c.Uint8Array)(a);var
f=V.from(a);this.fs.readSync(this.fd,f,d,g,h);for(var
b=0;b<g;b++)aa(e,d+b,f[d+b]);return 0};p.prototype.read_one=function(d){var
b=new(c.Uint8Array)(1),a=V.from(b);this.fs.readSync(this.fd,a,0,1,d);return a[0]};p.prototype.close=function(){this.fs.closeSync(this.fd)};p.prototype.constructor=p;function
o(a){this.fs=require("fs");this.root=a}o.prototype.nm=function(a){return this.root+a};o.prototype.exists=function(a){return this.fs.existsSync(this.nm(a))?1:0};o.prototype.readdir=function(a){return this.fs.readdirSync(this.nm(a))};o.prototype.is_dir=function(a){return this.fs.statSync(this.nm(a)).isDirectory()?1:0};o.prototype.unlink=function(a){var
b=this.fs.existsSync(this.nm(a))?1:0;this.fs.unlinkSync(this.nm(a));return b};o.prototype.open=function(f,c){var
a=require("constants"),b=0;for(var
e
in
c)switch(e){case"rdonly":b|=a.O_RDONLY;break;case"wronly":b|=a.O_WRONLY;break;case"append":b|=a.O_WRONLY|a.O_APPEND;break;case"create":b|=a.O_CREAT;break;case"truncate":b|=a.O_TRUNC;break;case"excl":b|=a.O_EXCL;break;case"binary":b|=a.O_BINARY;break;case"text":b|=a.O_TEXT;break;case"nonblock":b|=a.O_NONBLOCK;break}var
d=this.fs.openSync(this.nm(f),b);return new
p(d)};o.prototype.rename=function(b,a){this.fs.renameSync(this.nm(b),this.nm(a))};o.prototype.constructor=o;var
x=A.match(/[^\/]*\//)[0];function
bU(){return typeof
c.process!=="undefined"&&typeof
c.process.versions!=="undefined"&&typeof
c.process.versions.node!=="undefined"&&c.process.platform!=="browser"}var
C=[];if(bU())C.push({path:x,device:new
o(x)});else
C.push({path:x,device:new
j(x)});C.push({path:x+ap,device:new
j(x+ap)});function
bc(b){var
f=bC(b),b=f.join(q),e=b+q,c;for(var
d=0;d<C.length;d++){var
a=C[d];if(e.search(a.path)==0&&(!c||c.path.length<a.path.length))c={path:a.path,device:a.device,rest:b.substring(a.path.length,b.length)}}return c}function
a3(c,b){var
a=bc(c);if(!a.device.register)bx("cannot register file");a.device.register(a.rest,b);return 0}function
bz(){var
b=c.caml_fs_tmp;if(b)for(var
a=0;a<b.length;a++)a3(b[a].name,b[a].content);c.caml_create_file=a3;c.caml_fs_tmp=[];return 0}function
bA(){return typeof
module!=="undefined"&&module&&module.exports?module.exports:c}function
bS(f){for(var
g=e,b=g,a,i,c=0,h=f.length;c<h;c++){a=f.charCodeAt(c);if(a<l){for(var
d=c+1;d<h&&(a=f.charCodeAt(d))<l;d++);if(d-c>P){b.substr(0,1);g+=b;b=e;g+=f.slice(c,d)}else
b+=f.slice(c,d);if(d==h)break;c=d}if(a<aA){b+=String.fromCharCode(0xc0|a>>6);b+=String.fromCharCode(l|a&w)}else
if(a<0xd800||a>=aD)b+=String.fromCharCode(aE|a>>12,l|a>>6&w,l|a&w);else
if(a>=0xdbff||c+1==h||(i=f.charCodeAt(c+1))<aw||i>aD)b+="\xef\xbf\xbd";else{c++;a=(a<<10)+i-0x35fdc00;b+=String.fromCharCode(aH|a>>18,l|a>>12&w,l|a>>6&w,l|a&w)}if(b.length>z){b.substr(0,1);g+=b;b=e}}return g+b}function
T(a){var
b=9;if(!a4(a))b=8,a=bS(a);return new
m(b,a,a.length)}function
bs(){W(aO)}function
u(a,d){if(a<0)bs();var
a=a+1|0,b=new
Array(a);b[0]=0;for(var
c=1;c<a;c++)b[c]=d;return b}var
r=new
Array();function
bD(c){var
a=r[c];if(!a.opened)n("Cannot flush a closed channel");if(!a.buffer||a.buffer==e)return 0;if(a.fd&&d.fds[a.fd]&&d.fds[a.fd].output){var
b=d.fds[a.fd].output;switch(b.length){case
2:b(c,a.buffer);break;default:b(a.buffer)}}a.buffer=e;return 0}function
a7(a){return a.l}function
a$(d,e){var
a=r[d],c=f(e),b=a7(c);a.file.write(a.offset,c,0,b);a.offset+=b;return 0}function
bV(a){var
a=_(a),b=c;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stderr.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
d=b.console;d&&d.error&&d.error(a)}}function
bW(a){var
a=_(a),b=c;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stdout.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
d=b.console;d&&d.log&&d.log(a)}}function
I(c,f,e,a){if(d.fds===undefined)d.fds=new
Array();a=a?a:{};var
b={};b.file=e;b.offset=a.append?e.length():0;b.flags=a;b.output=f;d.fds[c]=b;if(!d.fd_last_idx||c>d.fd_last_idx)d.fd_last_idx=c;return c}function
bY(c,b,h){var
a={};while(b){switch(b[1]){case
0:a.rdonly=1;break;case
1:a.wronly=1;break;case
2:a.append=1;break;case
3:a.create=1;break;case
4:a.truncate=1;break;case
5:a.excl=1;break;case
6:a.binary=1;break;case
7:a.text=1;break;case
8:a.nonblock=1;break}b=b[2]}if(a.rdonly&&a.wronly)n(c.toString()+aT);if(a.text&&a.binary)n(c.toString()+at);var
e=bc(c),f=e.device.open(e.rest,a),g=d.fd_last_idx?d.fd_last_idx:0;return I(g+1,a$,f,a)}I(0,a$,new
g(t(0)));I(1,bW,new
g(t(0)));I(2,bV,new
g(t(0)));function
bE(c){var
b=d.fds[c];if(b.flags.wronly)n(aY+c+" is writeonly");var
a={file:b.file,offset:b.offset,fd:c,opened:true,out:false,refill:null};r[a.fd]=a;return a.fd}function
a6(c){var
b=d.fds[c];if(b.flags.rdonly)n(aY+c+" is readonly");var
a={file:b.file,offset:b.offset,fd:c,opened:true,out:true,buffer:e};r[a.fd]=a;return a.fd}function
bF(){var
b=0;for(var
a=0;a<r.length;a++)if(r[a]&&r[a].opened&&r[a].out)b=[0,r[a].fd,b];return b}function
bJ(a){throw a}function
bM(){bJ(d.Division_by_zero)}function
bG(b,a){if(a==0)bM();return b%a}if(!Math.imul)Math.imul=function(b,a){a|=0;return((b>>16)*a<<16)+(b&aM)*a|0};var
ab=Math.imul;function
bH(a){if(a
instanceof
Array&&a[0]==a[0]>>>0)return a[0];else
if(a
instanceof
m)return aJ;else
if(a
instanceof
Function||typeof
a=="function")return ax;else
if(a&&a.caml_custom)return i;else
return 1000}function
k(b,e,a){if(a&&c.toplevelReloc)b=c.toplevelReloc(a);d[b+1]=e;if(a)d[a]=e}var
a9={};function
bB(a){if((a.t&6)!=0)a2(a);return a.c}function
bN(a,b){a9[bB(a)]=b;return 0}function
bP(a){return a}function
bQ(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
a_(a){return a}function
a8(a){return a9[a]}function
bT(a){if(a
instanceof
Array)return a;if(c.RangeError&&a
instanceof
c.RangeError&&a.message&&a.message.match(/maximum call stack/i))return a_(d.Stack_overflow);if(c.InternalError&&a
instanceof
c.InternalError&&a.message&&a.message.match(/too much recursion/i))return a_(d.Stack_overflow);if(a
instanceof
c.Error&&a8(Q))return[0,a8(Q),a];return[0,d.Failure,T(String(a))]}function
am(a,b){return a.length==1?a(b):F(a,[b])}bz();var
ae=[h,f(au),-2],ac=[h,f(aZ),-4];k(11,[h,f(an),-12],an);k(10,[h,f(aC),-11],aC);k(9,[h,f(aX),aK],aX);k(8,[h,f(ar),-9],ar);k(7,[h,f(aL),-8],aL);k(6,[h,f(aq),-7],aq);k(5,[h,f(av),-6],av);k(4,[h,f(az),-5],az);k(3,ac,aZ);k(2,[h,f(ay),-3],ay);k(1,ae,au);k(0,[h,f(aP),-1],aP);var
be=f("Char.chr"),bf=f("Array.init"),bi=f("Js_of_ocaml__Js.Error"),bj=[0,1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],bl=[0,1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],bm=[0,99,124,119,123,242,107,111,197,48,1,103,43,254,215,aG,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,ax,204,52,165,229,241,113,aQ,49,21,4,199,35,195,24,150,5,aB,7,18,y,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,aJ,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,aU,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,i,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,ao,213,78,169,aV,86,244,234,101,122,174,8,186,120,37,46,28,166,aN,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,h,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],bn=[0,ao,1,2,4,8,16,32,64,y,27,54,aV,aQ,aG,77,aB];function
ad(a){throw[0,ac,a]}B(0);bE(0);a6(1);a6(2);B(0);function
s(b,c){if(0===b)return[0];if(0<=b){var
d=u(b,am(c,0)),e=b-1|0,f=1;if(!(e<1)){var
a=f;for(;;){d[1+a]=am(c,a);var
g=a+1|0;if(e!==a){var
a=g;continue}break}}return d}return ad(bf)}function
af(a){var
b=a.length-1;return 0===b?[0]:bt(a,0,b)}B(0);B(0);var
ag=[0,0];function
ah(a){ag[1]=[0,a,ag[1]];return 0}var
bh=c.Array,ai=[h,bi,B(0)],J=[0,ai,{}],bg=bH(J)===h?J:J[1];bN(f(Q),bg);(function(a){throw a});ah(function(a){return a[1]===ai?[0,T(a[2].toString())]:0});ah(function(a){return a
instanceof
bh?0:[0,T(a.toString())]});function
E(b,a){return(b>>>(a*8|0)|0)&i}function
a(b,a){return b[1+a]&i}function
b(c,b,a){c[1+b]=a&i;return 0}function
U(d,c,a){var
e=E(a,0),f=E(a,1),g=E(a,2);b(d,c|0,E(a,3));b(d,c+1|0,g);b(d,c+2|0,f);return b(d,c+3|0,e)}var
aj=bl.slice(),D=bm.slice(),bk=bj.slice(),bo=bn.slice();function
Y(f,d,e){var
c=0,g=(e&i)<<4;for(;;){var
h=a(f,g+c|0);b(d,c,a(d,c)^h);var
j=c+1|0;if(15!==c){var
c=j;continue}return 0}}function
as(c){var
d=0;for(;;){b(c,d,D[1+a(c,d)]);var
k=d+1|0;if(15!==d){var
d=k;continue}var
e=a(c,1);b(c,1,a(c,5));b(c,5,a(c,9));var
f=a(c,13);b(c,13,e);var
g=a(c,2);b(c,9,f);b(c,2,a(c,10));b(c,10,g);var
h=a(c,6);b(c,6,a(c,14));b(c,14,h);var
i=a(c,3);b(c,3,a(c,15));b(c,15,a(c,11));var
j=a(c,7);b(c,7,i);return b(c,11,j)}}var
R=u(P,0),v=0;a:for(;;){var
M=0,L=v,K=0;for(;;){var
ak=K>>>1|0,al=L>>>1|0|(K&1)<<31;if(0===(L&1))var
O=al,N=ak;else
var
O=al^-679014590,N=ak^-915646571;var
br=M+1|0;if(7!==M){var
M=br,L=O,K=N;continue}R[1+(2*v|0|0)]=N;R[1+((2*v|0)+1|0)]=O;var
bq=v+1|0;if(i!==v){var
v=bq;continue a}var
aF=function(a){var
b=9<a?(97+a|0)+aK|0:48+a|0;if(0<=b)if(!(i<b))return b;return ad(be)},bp=function(bi){var
aG=T(bi),l=u(64,0),C=0,bj=s(a7(aG),function(a){return bQ(aG,a)});for(;;){b(l,C,bj[1+C]);var
a1=C+1|0;if(9!==C){var
C=a1;continue}b(l,10,y);b(l,63,80);var
m=u(64,0),B=0;for(;;){var
I=B*4|0,aJ=a(l,I|0),aK=a(l,I+1|0),aL=a(l,I+2|0);m[1+B]=aJ<<24|aK<<16|aL<<8|a(l,I+3|0);var
a0=B+1|0;if(15!==B){var
B=a0;continue}var
g=function(a,c,b){return a<<c|a>>>b|0},j=16;for(;;){var
W=m[1+(j+aI|0)],X=m[1+(j-2|0)],aU=g(W,14,18),aV=g(W,25,7),aX=g(X,15,17),aY=aX^g(X,13,19)^(X>>>10|0);m[1+j]=(((m[1+(j-7|0)]+(aU^aV^(W>>>3|0))|0)+m[1+(j+aW|0)]|0)+aY|0)&-1;var
aZ=j+1|0;if(63!==j){var
j=aZ;continue}var
c=af(aj),A=0;for(;;){var
ae=c[7],ag=c[6],r=c[5],aO=g(r,26,6),aP=g(r,7,25),aQ=g(r,21,11)^aP^aO,ah=((((bk[1+A]+m[1+A]|0)+c[8]|0)+((r^-1)&ae^ag&r)|0)+aQ|0)&-1;c[8]=ae;c[7]=ag;c[6]=r;c[5]=(c[4]+ah|0)&-1;var
v=c[1],V=c[2],ai=c[3];c[4]=ai;c[3]=V;c[2]=v;var
aR=g(v,30,2),aS=g(v,10,22);c[1]=(((g(v,19,13)^aS^aR)+((V^v)&ai^V&v)|0)+ah|0)&-1;var
aT=A+1|0;if(63!==A){var
A=aT;continue}var
n=u(32,0),q=0;for(;;){U(n,q*4|0,c[1+q]+aj[1+q]|0);var
aM=q+1|0;if(7!==q){var
q=aM;continue}var
a2=n.length-1,a3=n[10]&15,a4=s(16,function(a){return n[1+bG(ab(a,(a3*2|0)+1|0),a2)]}),h=s(16,function(b){var
a=0,c=0,e=b>>>2|0,f=b&3;for(;;){var
d=c+ab(n[1+((e*8|0)+a|0)],n[1+((a*4|0)+f|0)])|0,g=a+1|0;if(7!==a){var
a=g,c=d;continue}return d&i}}),at=n[9]%6|0;if(4<at>>>0){var
ao=u(16,0),F=0;b:for(;;){var
K=0,aq=0;for(;;){var
ar=aq^h[1+((4*K|0)+F|0)],a_=K+1|0;if(3!==K){var
K=a_,aq=ar;continue}var
J=0;for(;;){var
ap=(4*J|0)+F|0;ao[1+ap]=ab(h[1+ap],ar)&i;var
a9=J+1|0;if(3!==J){var
J=a9;continue}var
a8=F+1|0;if(3!==F){var
F=a8;continue b}var
w=ao;break}break}break}}else
switch(at){case
0:var
w=s(16,function(a){return h[1+(((a&3)*4|0)+(3-(a>>>2|0)|0)|0)]});break;case
1:var
w=s(16,function(a){return h[1+(((3-(a&3)|0)*4|0)+(a>>>2|0)|0)]});break;case
2:var
w=s(16,function(b){var
a=b>>>2|0;return(h[1+((((b&3)+a|0)&3)+(a*4|0)|0)]+a|0)&i});break;case
3:var
E=0,al=0,ak=0;for(;;){var
am=ak^h[1+(E*5|0)],an=al^h[1+((E*3|0)+3|0)],a6=E+1|0;if(3!==E){var
E=a6,al=an,ak=am;continue}var
w=s(16,function(a){var
b=0===(a&1)?am:an;return h[1+a]^b});break}break;default:var
w=s(16,function(a){var
b=h[1+a],c=h[1+((a+1|0)&15)],d=c<b?c:i;return b^d})}var
d=u(aN,0),G=0;for(;;){b(d,G,w[1+G]);var
bg=G+1|0;if(15!==G){var
G=bg;continue}var
Q=4;for(;;){var
f=Q*4|0,au=a(d,f-4|0),av=a(d,f-3|0),aw=a(d,f-2|0),ax=a(d,f-1|0);if(0===(f&12))var
bb=a(D,au),bc=a(D,ax),bd=a(D,aw),be=a(bo,f/16|0),aB=bb,aA=bc,az=bd,ay=a(D,av)^be;else
var
aB=ax,aA=aw,az=av,ay=au;b(d,f|0,a(d,f+aW|0)^ay);b(d,f+1|0,a(d,f+aI|0)^az);b(d,f+2|0,a(d,f-14|0)^aA);b(d,f+3|0,a(d,f-13|0)^aB);var
bf=Q+1|0;if(43!==Q){var
Q=bf;continue}var
e=af(a4);Y(d,e,0);var
L=1;c:for(;;){as(e);var
M=0;for(;;){var
k=M*4|0,o=a(e,k|0),p=a(e,k+1|0),N=a(e,k+2|0),O=a(e,k+3|0),P=N^O;b(e,k|0,(-((o^p)>>>7|0)|0)&27^((o^p)*2|0)^p^P);b(e,k+1|0,(-((N^p)>>>7|0)|0)&27^((N^p)*2|0)^o^P);b(e,k+2|0,(-(P>>>7|0)|0)&27^(P*2|0)^o^p^O);b(e,k+3|0,(-((O^o)>>>7|0)|0)&27^((O^o)*2|0)^o^p^N);var
ba=M+1|0;if(3!==M){var
M=ba;continue}Y(d,e,L);var
a$=L+1|0;if(9!==L){var
L=a$;continue c}as(e);Y(d,e,10);var
S=0,$=0,_=0;for(;;){var
aC=$&i^e[1+S],aD=(_>>>8|0)^R[1+(aC*2|0|0)],aE=($>>>8|0|(_&i)<<24)^R[1+((aC*2|0)+1|0)],bh=S+1|0;if(15!==S){var
S=bh,$=aE,_=aD;continue}var
Z=u(8,0);U(Z,0,aD);U(Z,4,aE);var
z=t(16);by(z,0,16,0);var
x=0;for(;;){var
aH=Z[1+x];aa(z,2*x|0|0,aF(aH>>>4|0));aa(z,(2*x|0)+1|0,aF(aH&15));var
bl=x+1|0;if(7!==x){var
x=bl;continue}var
ac=a5(z),ad=t(ac);H(z,0,ad,0,ac);return bP(ad).toString()}}}}}}}}}}}};bA(0).unlock=bp;var
bd=function(b){var
a=b;for(;;){if(a){var
c=a[2],d=a[1];try{bD(d)}catch(a){a=bT(a);if(a[1]!==ae)throw a;var
e=a}var
a=c;continue}return 0}};bd(bF(0));return}}}(function(){return this}()));
