!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){(function(t){"use strict";function e(t){g("install event in progress."),t.waitUntil(n())}function n(){return caches.open(p("offline")).then(function(t){return t.addAll(v)}).then(function(){g("installation complete!")})}function r(t){var e=t.request;return h(e)?void t.respondWith(c(e)):d(e)?void t.respondWith(o(e)):void t.respondWith(u(e))}function o(t){return i(t)["catch"](function(){return a(t)})}function i(t){return fetch(t).then(function(e){var n=e.clone();return caches.open(p("resources")).then(function(e){e.put(t,n)}),g("(network: cache write)",t.method,t.url),e})}function u(t){return caches.match(t).then(function(e){return g(e?"(cached)":"(network: cache miss)",t.method,t.url),e||i(t)["catch"](function(){return s(t)})})}function c(t){return fetch(t).then(function(e){return g("(network)",t.method,t.url),e})["catch"](function(){return s(t)})}function a(t){return caches.match(t).then(function(e){return e||s(t)})}function s(t){return g("(offline)",t.method,t.url),t.url.match(/\.(jpg|png|gif|svg|jpeg)(\?.*)?$/)?caches.match("/offline-c5946202.svg"):caches.match("/offline.html")}function l(t){g("activate event in progress."),t.waitUntil(f())}function f(){return caches.keys().then(function(t){return Promise.all(t.filter(function(t){return!t.startsWith(y)}).map(function(t){return caches["delete"](t)}))}).then(function(){g("removeOldCache completed.")})}function p(){return[y].concat(Array.prototype.slice.call(arguments)).join(":")}function g(){if(m()){var e;(e=t).log.apply(e,["SW:"].concat(Array.prototype.slice.call(arguments)))}}function h(t){return"GET"!==t.method||b.some(function(e){return t.url.match(e)})}function d(t){return~t.headers.get("Accept").indexOf("text/html")}function m(){return!1}var y="v20160421",v=["/","/offline.html","/offline-c5946202.svg"],b=[/https?:\/\/api.mixpanel.com\//,/https?:\/\/api.segment.io\//,/https?:\/\/in.getclicky.com\//,/https?:\/\/zenkaffe.herokuapp.com\//,/https?:\/\/p.typekit.net\//,/\/__rack\//];g("Hello from ServiceWorker land!",y),self.addEventListener("install",e),self.addEventListener("fetch",r),self.addEventListener("activate",l)}).call(e,n(1))},function(t,e,n){(function(e){function r(){}function o(){p.log.apply(p,arguments)}function i(){p.log.apply(p,arguments)}function u(){p.warn.apply(p,arguments)}function c(t){y[t]=d()}function a(t){var e=y[t];if(!e)throw new Error("No such label: "+t);var n=d()-e;p.log(t+": "+n+"ms")}function s(){var t=new Error;t.name="Trace",t.message=g.format.apply(null,arguments),p.error(t.stack)}function l(t){p.log(g.inspect(t)+"\n")}function f(t){if(!t){var e=m.call(arguments,1);h.ok(!1,g.format.apply(null,e))}}var p,g=n(2),h=n(3),d=n(4),m=Array.prototype.slice,y={};p="undefined"!=typeof e&&e.console?e.console:"undefined"!=typeof window&&window.console?window.console:{};for(var v=[[r,"log"],[o,"info"],[i,"warn"],[u,"error"],[c,"time"],[a,"timeEnd"],[s,"trace"],[l,"dir"],[f,"assert"]],b=0;b<v.length;b++){var w=v[b],E=w[0],x=w[1];p[x]||(p[x]=E)}t.exports=p}).call(e,function(){return this}())},function(t,e,n){(function(t,r,o){function i(t,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(n)?r.showHidden=n:n&&e._extend(r,n),x(r.showHidden)&&(r.showHidden=!1),x(r.depth)&&(r.depth=2),x(r.colors)&&(r.colors=!1),x(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),s(r,t,r.depth)}function u(t,e){var n=i.styles[e];return n?"["+i.colors[n][0]+"m"+t+"["+i.colors[n][1]+"m":t}function c(t,e){return t}function a(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}function s(t,n,r){if(t.customInspect&&n&&z(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return w(o)||(o=s(t,o,r)),o}var i=l(t,n);if(i)return i;var u=Object.keys(n),c=a(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(n)),k(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return f(n);if(0===u.length){if(z(n)){var m=n.name?": "+n.name:"";return t.stylize("[Function"+m+"]","special")}if(O(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return t.stylize(Date.prototype.toString.call(n),"date");if(k(n))return f(n)}var y="",v=!1,b=["{","}"];if(d(n)&&(v=!0,b=["[","]"]),z(n)){var E=n.name?": "+n.name:"";y=" [Function"+E+"]"}if(O(n)&&(y=" "+RegExp.prototype.toString.call(n)),j(n)&&(y=" "+Date.prototype.toUTCString.call(n)),k(n)&&(y=" "+f(n)),0===u.length&&(!v||0==n.length))return b[0]+y+b[1];if(0>r)return O(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special");t.seen.push(n);var x;return x=v?p(t,n,r,c,u):u.map(function(e){return g(t,n,r,c,e,v)}),t.seen.pop(),h(x,y,b)}function l(t,e){if(x(e))return t.stylize("undefined","undefined");if(w(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return b(e)?t.stylize(""+e,"number"):m(e)?t.stylize(""+e,"boolean"):y(e)?t.stylize("null","null"):void 0}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o){for(var i=[],u=0,c=e.length;c>u;++u)T(e,String(u))?i.push(g(t,e,n,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(g(t,e,n,r,o,!0))}),i}function g(t,e,n,r,o,i){var u,c,a;if(a=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]},a.get?c=a.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):a.set&&(c=t.stylize("[Setter]","special")),T(r,o)||(u="["+o+"]"),c||(t.seen.indexOf(a.value)<0?(c=y(n)?s(t,a.value,null):s(t,a.value,n-1),c.indexOf("\n")>-1&&(c=i?c.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+c.split("\n").map(function(t){return"   "+t}).join("\n"))):c=t.stylize("[Circular]","special")),x(u)){if(i&&o.match(/^\d+$/))return c;u=JSON.stringify(""+o),u.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function h(t,e,n){var r=0,o=t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return o>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function d(t){return Array.isArray(t)}function m(t){return"boolean"==typeof t}function y(t){return null===t}function v(t){return null==t}function b(t){return"number"==typeof t}function w(t){return"string"==typeof t}function E(t){return"symbol"==typeof t}function x(t){return void 0===t}function O(t){return S(t)&&"[object RegExp]"===D(t)}function S(t){return"object"==typeof t&&null!==t}function j(t){return S(t)&&"[object Date]"===D(t)}function k(t){return S(t)&&("[object Error]"===D(t)||t instanceof Error)}function z(t){return"function"==typeof t}function A(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function D(t){return Object.prototype.toString.call(t)}function N(t){return 10>t?"0"+t.toString(10):t.toString(10)}function q(){var t=new Date,e=[N(t.getHours()),N(t.getMinutes()),N(t.getSeconds())].join(":");return[t.getDate(),F[t.getMonth()],e].join(" ")}function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var U=/%[sdj%]/g;e.format=function(t){if(!w(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(i(arguments[n]));return e.join(" ")}for(var n=1,r=arguments,o=r.length,u=String(t).replace(U,function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}}),c=r[n];o>n;c=r[++n])u+=y(c)||!S(c)?" "+c:" "+i(c);return u},e.deprecate=function(n,i){function u(){if(!c){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?o.trace(i):o.error(i),c=!0}return n.apply(this,arguments)}if(x(t.process))return function(){return e.deprecate(n,i).apply(this,arguments)};if(r.noDeprecation===!0)return n;var c=!1;return u};var R,_={};e.debuglog=function(t){if(x(R)&&(R=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!_[t])if(new RegExp("\\b"+t+"\\b","i").test(R)){var n=r.pid;_[t]=function(){var r=e.format.apply(e,arguments);o.error("%s %d: %s",t,n,r)}}else _[t]=function(){};return _[t]},e.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=m,e.isNull=y,e.isNullOrUndefined=v,e.isNumber=b,e.isString=w,e.isSymbol=E,e.isUndefined=x,e.isRegExp=O,e.isObject=S,e.isDate=j,e.isError=k,e.isFunction=z,e.isPrimitive=A,e.isBuffer=n(7);var F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.log=function(){o.log("%s - %s",q(),e.format.apply(e,arguments))},e.inherits=n(5),e._extend=function(t,e){if(!e||!S(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(e,function(){return this}(),n(6),n(1))},function(t,e,n){function r(t,e){return g.isUndefined(e)?""+e:g.isNumber(e)&&!isFinite(e)?e.toString():g.isFunction(e)||g.isRegExp(e)?e.toString():e}function o(t,e){return g.isString(t)?t.length<e?t:t.slice(0,e):t}function i(t){return o(JSON.stringify(t.actual,r),128)+" "+t.operator+" "+o(JSON.stringify(t.expected,r),128)}function u(t,e,n,r,o){throw new m.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:o})}function c(t,e){t||u(t,!0,e,"==",m.ok)}function a(t,e){if(t===e)return!0;if(g.isBuffer(t)&&g.isBuffer(e)){if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return g.isDate(t)&&g.isDate(e)?t.getTime()===e.getTime():g.isRegExp(t)&&g.isRegExp(e)?t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase:g.isObject(t)||g.isObject(e)?l(t,e):t==e}function s(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function l(t,e){if(g.isNullOrUndefined(t)||g.isNullOrUndefined(e))return!1;if(t.prototype!==e.prototype)return!1;if(g.isPrimitive(t)||g.isPrimitive(e))return t===e;var n=s(t),r=s(e);if(n&&!r||!n&&r)return!1;if(n)return t=h.call(t),e=h.call(e),a(t,e);var o,i,u=y(t),c=y(e);if(u.length!=c.length)return!1;for(u.sort(),c.sort(),i=u.length-1;i>=0;i--)if(u[i]!=c[i])return!1;for(i=u.length-1;i>=0;i--)if(o=u[i],!a(t[o],e[o]))return!1;return!0}function f(t,e){return t&&e?"[object RegExp]"==Object.prototype.toString.call(e)?e.test(t):t instanceof e?!0:e.call({},t)===!0?!0:!1:!1}function p(t,e,n,r){var o;g.isString(n)&&(r=n,n=null);try{e()}catch(i){o=i}if(r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!o&&u(o,n,"Missing expected exception"+r),!t&&f(o,n)&&u(o,n,"Got unwanted exception"+r),t&&o&&n&&!f(o,n)||!t&&o)throw o}var g=n(2),h=Array.prototype.slice,d=Object.prototype.hasOwnProperty,m=t.exports=c;m.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=i(this),this.generatedMessage=!0);var e=t.stackStartFunction||u;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var n=new Error;if(n.stack){var r=n.stack,o=e.name,c=r.indexOf("\n"+o);if(c>=0){var a=r.indexOf("\n",c+1);r=r.substring(a+1)}this.stack=r}}},g.inherits(m.AssertionError,Error),m.fail=u,m.ok=c,m.equal=function(t,e,n){t!=e&&u(t,e,n,"==",m.equal)},m.notEqual=function(t,e,n){t==e&&u(t,e,n,"!=",m.notEqual)},m.deepEqual=function(t,e,n){a(t,e)||u(t,e,n,"deepEqual",m.deepEqual)},m.notDeepEqual=function(t,e,n){a(t,e)&&u(t,e,n,"notDeepEqual",m.notDeepEqual)},m.strictEqual=function(t,e,n){t!==e&&u(t,e,n,"===",m.strictEqual)},m.notStrictEqual=function(t,e,n){t===e&&u(t,e,n,"!==",m.notStrictEqual)},m["throws"]=function(t,e,n){p.apply(this,[!0].concat(h.call(arguments)))},m.doesNotThrow=function(t,e){p.apply(this,[!1].concat(h.call(arguments)))},m.ifError=function(t){if(t)throw t};var y=Object.keys||function(t){var e=[];for(var n in t)d.call(t,n)&&e.push(n);return e}},function(t,e){function n(){return(new Date).getTime()}t.exports=n},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){function n(){s=!1,u.length?a=u.concat(a):l=-1,a.length&&r()}function r(){if(!s){var t=setTimeout(n);s=!0;for(var e=a.length;e;){for(u=a,a=[];++l<e;)u&&u[l].run();l=-1,e=a.length}u=null,s=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var u,c=t.exports={},a=[],s=!1,l=-1;c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new o(t,e)),1!==a.length||s||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=i,c.addListener=i,c.once=i,c.off=i,c.removeListener=i,c.removeAllListeners=i,c.emit=i,c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}}]);