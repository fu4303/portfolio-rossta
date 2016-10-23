!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){(function(t){"use strict";function e(t){p("install event in progress."),t.waitUntil(n())}function n(){return caches.open(l("offline")).then(function(t){return t.addAll(m)}).then(function(){p("installation complete!")})}function r(e){var n=e.request;return h(n)?void t.log("shouldAlwaysFetch",n.url):d(n)?(t.log("shouldFetchAndCache",n.url),void e.respondWith(o(n))):(t.log("cachedOrNetworked",n.url),void e.respondWith(u(n)))}function o(t){return i(t)["catch"](function(){return c(t)})}function i(t){return fetch(t).then(function(e){var n=e.clone();return caches.open(l("resources")).then(function(e){e.put(t,n)}),p("(network: cache write)",t.method,t.url),e})}function u(t){return caches.match(t).then(function(e){return p(e?"(cached)":"(network: cache miss)",t.method,t.url),e||i(t)["catch"](function(){return a(t)})})}function c(t){return caches.match(t).then(function(e){return e||a(t)})}function a(t){p("(offline)",t.method,t.url);var e=new URL(t.url),n=e.pathname;return n.endsWith(".html")||n.endsWith("/")||!n.endsWith(".js")?caches.match("/offline.html"):new Response("",{status:503,statusText:"Service Unavailable"})}function f(t){p("activate event in progress."),t.waitUntil(s())}function s(){return caches.keys().then(function(t){return Promise.all(t.filter(function(t){return!t.startsWith(g)}).map(function(t){return caches["delete"](t)}))}).then(function(){p("removeOldCache completed.")})}function l(){return[g].concat(Array.prototype.slice.call(arguments)).join(":")}function p(){if(y()){var e;(e=t).log.apply(e,["SW:"].concat(Array.prototype.slice.call(arguments)))}}function h(t){return"GET"!==t.method||v.some(function(e){return t.url.match(e)})}function d(t){return~t.headers.get("Accept").indexOf("text/html")}function y(){return!1}var g=1477259204966,m=["/","/offline.html","/offline-c5946202.svg"],v=[/https?:\/\/[^\/]*mixpanel[^\/]*\.com\//,/https?:\/\/[^\/]*mxpnl[^\/]*\.com\//,/https?:\/\/[^\/]*segment[^\/]*\.io\//,/https?:\/\/[^\/]*getclicky[^\/]*\.com\//,/https?:\/\/[^\/]*typekit[^\/]*\.net\//,/https?:\/\/[^\/]*sumome[^\/]*\.com\//,/https?:\/\/[^\/]*disqus[^\/]*\.com\//,/https?:\/\/[^\/]*google-analytics[^\/]*\.com\//,/https?:\/\/zenkaffe\.herokuapp\.com\//,/\/__rack\//];p("Hello from ServiceWorker land!",g),self.addEventListener("install",e),self.addEventListener("fetch",r),self.addEventListener("activate",f)}).call(e,n(1))},function(t,e,n){(function(e){function r(){}function o(){p.log.apply(p,arguments)}function i(){p.log.apply(p,arguments)}function u(){p.warn.apply(p,arguments)}function c(t){m[t]=y()}function a(t){var e=m[t];if(!e)throw new Error("No such label: "+t);var n=y()-e;p.log(t+": "+n+"ms")}function f(){var t=new Error;t.name="Trace",t.message=h.format.apply(null,arguments),p.error(t.stack)}function s(t){p.log(h.inspect(t)+"\n")}function l(t){if(!t){var e=g.call(arguments,1);d.ok(!1,h.format.apply(null,e))}}var p,h=n(2),d=n(3),y=n(4),g=Array.prototype.slice,m={};p="undefined"!=typeof e&&e.console?e.console:"undefined"!=typeof window&&window.console?window.console:{};for(var v=[[r,"log"],[o,"info"],[i,"warn"],[u,"error"],[c,"time"],[a,"timeEnd"],[f,"trace"],[s,"dir"],[l,"assert"]],b=0;b<v.length;b++){var w=v[b],E=w[0],x=w[1];p[x]||(p[x]=E)}t.exports=p}).call(e,function(){return this}())},function(t,e,n){(function(t,r,o){function i(t,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&e._extend(r,n),x(r.showHidden)&&(r.showHidden=!1),x(r.depth)&&(r.depth=2),x(r.colors)&&(r.colors=!1),x(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),f(r,t,r.depth)}function u(t,e){var n=i.styles[e];return n?"["+i.colors[n][0]+"m"+t+"["+i.colors[n][1]+"m":t}function c(t,e){return t}function a(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}function f(t,n,r){if(t.customInspect&&n&&k(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return w(o)||(o=f(t,o,r)),o}var i=s(t,n);if(i)return i;var u=Object.keys(n),c=a(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(n)),A(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return l(n);if(0===u.length){if(k(n)){var g=n.name?": "+n.name:"";return t.stylize("[Function"+g+"]","special")}if(O(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return t.stylize(Date.prototype.toString.call(n),"date");if(A(n))return l(n)}var m="",v=!1,b=["{","}"];if(y(n)&&(v=!0,b=["[","]"]),k(n)){var E=n.name?": "+n.name:"";m=" [Function"+E+"]"}if(O(n)&&(m=" "+RegExp.prototype.toString.call(n)),j(n)&&(m=" "+Date.prototype.toUTCString.call(n)),A(n)&&(m=" "+l(n)),0===u.length&&(!v||0==n.length))return b[0]+m+b[1];if(r<0)return O(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special");t.seen.push(n);var x;return x=v?p(t,n,r,c,u):u.map(function(e){return h(t,n,r,c,e,v)}),t.seen.pop(),d(x,m,b)}function s(t,e){if(x(e))return t.stylize("undefined","undefined");if(w(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return b(e)?t.stylize(""+e,"number"):g(e)?t.stylize(""+e,"boolean"):m(e)?t.stylize("null","null"):void 0}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o){for(var i=[],u=0,c=e.length;u<c;++u)B(e,String(u))?i.push(h(t,e,n,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(h(t,e,n,r,o,!0))}),i}function h(t,e,n,r,o,i){var u,c,a;if(a=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]},a.get?c=a.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):a.set&&(c=t.stylize("[Setter]","special")),B(r,o)||(u="["+o+"]"),c||(t.seen.indexOf(a.value)<0?(c=m(n)?f(t,a.value,null):f(t,a.value,n-1),c.indexOf("\n")>-1&&(c=i?c.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+c.split("\n").map(function(t){return"   "+t}).join("\n"))):c=t.stylize("[Circular]","special")),x(u)){if(i&&o.match(/^\d+$/))return c;u=JSON.stringify(""+o),u.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function d(t,e,n){var r=0,o=t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return o>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function y(t){return Array.isArray(t)}function g(t){return"boolean"==typeof t}function m(t){return null===t}function v(t){return null==t}function b(t){return"number"==typeof t}function w(t){return"string"==typeof t}function E(t){return"symbol"==typeof t}function x(t){return void 0===t}function O(t){return S(t)&&"[object RegExp]"===D(t)}function S(t){return"object"==typeof t&&null!==t}function j(t){return S(t)&&"[object Date]"===D(t)}function A(t){return S(t)&&("[object Error]"===D(t)||t instanceof Error)}function k(t){return"function"==typeof t}function T(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function D(t){return Object.prototype.toString.call(t)}function q(t){return t<10?"0"+t.toString(10):t.toString(10)}function z(){var t=new Date,e=[q(t.getHours()),q(t.getMinutes()),q(t.getSeconds())].join(":");return[t.getDate(),P[t.getMonth()],e].join(" ")}function B(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var F=/%[sdj%]/g;e.format=function(t){if(!w(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(i(arguments[n]));return e.join(" ")}for(var n=1,r=arguments,o=r.length,u=String(t).replace(F,function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}}),c=r[n];n<o;c=r[++n])u+=m(c)||!S(c)?" "+c:" "+i(c);return u},e.deprecate=function(n,i){function u(){if(!c){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?o.trace(i):o.error(i),c=!0}return n.apply(this,arguments)}if(x(t.process))return function(){return e.deprecate(n,i).apply(this,arguments)};if(r.noDeprecation===!0)return n;var c=!1;return u};var N,U={};e.debuglog=function(t){if(x(N)&&(N=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!U[t])if(new RegExp("\\b"+t+"\\b","i").test(N)){var n=r.pid;U[t]=function(){var r=e.format.apply(e,arguments);o.error("%s %d: %s",t,n,r)}}else U[t]=function(){};return U[t]},e.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=y,e.isBoolean=g,e.isNull=m,e.isNullOrUndefined=v,e.isNumber=b,e.isString=w,e.isSymbol=E,e.isUndefined=x,e.isRegExp=O,e.isObject=S,e.isDate=j,e.isError=A,e.isFunction=k,e.isPrimitive=T,e.isBuffer=n(7);var P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.log=function(){o.log("%s - %s",z(),e.format.apply(e,arguments))},e.inherits=n(6),e._extend=function(t,e){if(!e||!S(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(e,function(){return this}(),n(5),n(1))},function(t,e,n){(function(e){"use strict";/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
function r(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0}function o(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}function i(t){return Object.prototype.toString.call(t)}function u(t){return!o(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}function c(t){if(w.isFunction(t)){if(O)return t.name;var e=t.toString(),n=e.match(j);return n&&n[1]}}function a(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function f(t){if(O||!w.isFunction(t))return w.inspect(t);var e=c(t),n=e?": "+e:"";return"[Function"+n+"]"}function s(t){return a(f(t.actual),128)+" "+t.operator+" "+a(f(t.expected),128)}function l(t,e,n,r,o){throw new S.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:o})}function p(t,e){t||l(t,!0,e,"==",S.ok)}function h(t,e,n,c){if(t===e)return!0;if(o(t)&&o(e))return 0===r(t,e);if(w.isDate(t)&&w.isDate(e))return t.getTime()===e.getTime();if(w.isRegExp(t)&&w.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(u(t)&&u(e)&&i(t)===i(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===r(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(o(t)!==o(e))return!1;c=c||{actual:[],expected:[]};var a=c.actual.indexOf(t);return a!==-1&&a===c.expected.indexOf(e)||(c.actual.push(t),c.expected.push(e),y(t,e,n,c))}return n?t===e:t==e}function d(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function y(t,e,n,r){if(null===t||void 0===t||null===e||void 0===e)return!1;if(w.isPrimitive(t)||w.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=d(t),i=d(e);if(o&&!i||!o&&i)return!1;if(o)return t=x.call(t),e=x.call(e),h(t,e,n);var u,c,a=A(t),f=A(e);if(a.length!==f.length)return!1;for(a.sort(),f.sort(),c=a.length-1;c>=0;c--)if(a[c]!==f[c])return!1;for(c=a.length-1;c>=0;c--)if(u=a[c],!h(t[u],e[u],n,r))return!1;return!0}function g(t,e,n){h(t,e,!0)&&l(t,e,n,"notDeepStrictEqual",g)}function m(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(n){}return!Error.isPrototypeOf(e)&&e.call({},t)===!0}function v(t){var e;try{t()}catch(n){e=n}return e}function b(t,e,n,r){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=v(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!o&&l(o,n,"Missing expected exception"+r);var i="string"==typeof r,u=!t&&w.isError(o),c=!t&&o&&!n;if((u&&i&&m(o,n)||c)&&l(o,n,"Got unwanted exception"+r),t&&o&&n&&!m(o,n)||!t&&o)throw o}var w=n(2),E=Object.prototype.hasOwnProperty,x=Array.prototype.slice,O=function(){return"foo"===function(){}.name}(),S=t.exports=p,j=/\s*function\s+([^\(\s]*)\s*/;S.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=s(this),this.generatedMessage=!0);var e=t.stackStartFunction||l;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var n=new Error;if(n.stack){var r=n.stack,o=c(e),i=r.indexOf("\n"+o);if(i>=0){var u=r.indexOf("\n",i+1);r=r.substring(u+1)}this.stack=r}}},w.inherits(S.AssertionError,Error),S.fail=l,S.ok=p,S.equal=function(t,e,n){t!=e&&l(t,e,n,"==",S.equal)},S.notEqual=function(t,e,n){t==e&&l(t,e,n,"!=",S.notEqual)},S.deepEqual=function(t,e,n){h(t,e,!1)||l(t,e,n,"deepEqual",S.deepEqual)},S.deepStrictEqual=function(t,e,n){h(t,e,!0)||l(t,e,n,"deepStrictEqual",S.deepStrictEqual)},S.notDeepEqual=function(t,e,n){h(t,e,!1)&&l(t,e,n,"notDeepEqual",S.notDeepEqual)},S.notDeepStrictEqual=g,S.strictEqual=function(t,e,n){t!==e&&l(t,e,n,"===",S.strictEqual)},S.notStrictEqual=function(t,e,n){t===e&&l(t,e,n,"!==",S.notStrictEqual)},S["throws"]=function(t,e,n){b(!0,t,e,n)},S.doesNotThrow=function(t,e,n){b(!1,t,e,n)},S.ifError=function(t){if(t)throw t};var A=Object.keys||function(t){var e=[];for(var n in t)E.call(t,n)&&e.push(n);return e}}).call(e,function(){return this}())},function(t,e){function n(){return(new Date).getTime()}t.exports=n},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(s===setTimeout)return setTimeout(t,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch(e){try{return s.call(null,t,0)}catch(e){return s.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function u(){y&&h&&(y=!1,h.length?d=h.concat(d):g=-1,d.length&&c())}function c(){if(!y){var t=o(u);y=!0;for(var e=d.length;e;){for(h=d,d=[];++g<e;)h&&h[g].run();g=-1,e=d.length}h=null,y=!1,i(t)}}function a(t,e){this.fun=t,this.array=e}function f(){}var s,l,p=t.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(t){s=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var h,d=[],y=!1,g=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new a(t,e)),1!==d.length||y||o(c)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}}]);