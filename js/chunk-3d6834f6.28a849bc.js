(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d6834f6","chunk-55d286b8"],{"07ac":function(t,e,n){var r=n("23e7"),a=n("6f53").values;r({target:"Object",stat:!0},{values:function(t){return a(t)}})},"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,l,u){var d=n+t.length,f=c.length,p=s;return void 0!==l&&(l=r(l),p=o),i.call(u,p,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":o=l[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>f){var u=a(s/10);return 0===u?r:u<=f?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):r}o=c[s-1]}return void 0===o?"":o}))}},1276:function(t,e,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),o=n("1d80"),s=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,h=Math.min,_=4294967295,g=!f((function(){return!RegExp(_,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(o(this)),i=void 0===n?_:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,i);var s,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,f+"g");while(s=d.call(g,r)){if(c=g.lastIndex,c>h&&(u.push(r.slice(h,s.index)),s.length>1&&s.index<r.length&&p.apply(u,s.slice(1)),l=s[0].length,h=c,u.length>=i))break;g.lastIndex===s.index&&g.lastIndex++}return h===r.length?!l&&g.test("")||u.push(""):u.push(r.slice(h)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=o(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,n):r.call(String(a),e,n)},function(t,a){var o=n(r,t,this,a,r!==e);if(o.done)return o.value;var d=i(t),f=String(this),p=s(d,RegExp),v=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),b=new p(g?d:"^(?:"+d.source+")",m),x=void 0===a?_:a>>>0;if(0===x)return[];if(0===f.length)return null===u(b,f)?[f]:[];var E=0,y=0,w=[];while(y<f.length){b.lastIndex=g?y:0;var C,I=u(b,g?f:f.slice(y));if(null===I||(C=h(l(b.lastIndex+(g?0:y)),f.length))===E)y=c(f,y,v);else{if(w.push(f.slice(E,y)),w.length===x)return w;for(var T=1;T<=I.length-1;T++)if(w.push(I[T]),w.length===x)return w;y=E=C}}return w.push(f.slice(E)),w}]}),!g)},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),o=n("9112");for(var s in a){var c=r[s],l=c&&c.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=a("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1db7":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialogo"},[n("div",{staticClass:"dialogo__header px-3 px-lg-4 py-2 py-lg-3"},[n("div",{staticClass:"mb-1"},[t._t("nombre-actividad",(function(){return[t._v("Arrastrar y soltar")]}))],2),n("div",{staticClass:"h3 mb-0"},[t._t("titulo-actividad",(function(){return[t._v("Titulo de actividad - Completa la conversación")]}))],2)]),n("div",{staticClass:"px-2 py-3 p-lg-4"},[n("div",{staticClass:"row g-0"},[n("div",{ref:"chat-"+t.uid,staticClass:"col-md-8 dialogo__chat"},t._l(t.dialogoComputed,(function(e,r){return n("div",{staticClass:"row g-0 flex-nowrap dialogo__chat__item mb-3"},[n("div",{staticClass:"col-auto dialogo__chat__item__person"},[n("img",{attrs:{src:e.personaje.img}}),n("span",{staticClass:"text-small",domProps:{innerHTML:t._s(e.personaje.nombre)}})]),n("div",{staticClass:"col dialogo__chat__item__message__container"},[n("div",{staticClass:"dialogo__chat__item__message"},[n("div",{staticClass:"row g-0 align-items-center dialogo__chat__item__message__bubble"},[n("div",{staticClass:"col dialogo__chat__item__message__text me-2"},[n("div",{staticClass:"dialogo__chat__item__message__text__eng h5 mb-0"},[t._l(e.textoIng,(function(r,a){return["*"===r?n("div",{key:"phrase-"+e.id+"-"+a,ref:"phrase-"+e.id,refInFor:!0,staticClass:"d-inline dialogo__chat__item__message__text__drop",class:{"is-active":t.dropId===e.id},on:{drop:function(n){return n.preventDefault(),t.onDrop(e.id)},dragenter:function(n){return n.preventDefault(),t.onDragEnter(e.id)},dragleave:function(e){return e.preventDefault(),t.onDragLeave()},dragover:function(t){t.preventDefault()}}},[t.answers[e.id]?n("span",{staticClass:"dialogo__chat__item__message__text__drop__response",domProps:{innerHTML:t._s(t.answers[e.id].palabra)}}):n("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):n("span",{key:"phrase-"+e.id+"-"+a,domProps:{innerHTML:t._s(r)}})]}))],2),t.translations.includes(e.id)?n("div",{staticClass:"dialogo__chat__item__message__text__esp text-small"},[n("hr",{staticClass:"my-2"}),t._l(e.textoEsp,(function(e){return["*"===e?n("div",{staticClass:"d-inline dialogo__chat__item__message__text__drop"},[n("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):n("span",{domProps:{innerHTML:t._s(e)}})]}))],2):t._e()]),n("div",{staticClass:"col-auto dialogo__chat__item__message__audio"},[n("Audio",{attrs:{audio:e.audio},on:{"audio-hover":function(e){t.mostrarIndicadorAudio=!1}}})],1)]),n("div",{staticClass:"d-flex justify-content-end me-3"},[n("button",{staticClass:"dialogo__chat__item__message__translate-btn text-small",on:{click:function(n){return t.toggleTranslate(e.id)}}},[t._v("Ver traducción")])])])]),n("div",{staticClass:"col-1"})])})),0),t._m(0),n("div",{staticClass:"col dialogo__words"},[n("div",{staticClass:"dialogo__words__content"},[n("div",{staticClass:"dialogo__words__content__explanation"},[t._t("descripcion-actividad",(function(){return[t._v("Arrastra y suelta las palabras en la conversación")]}))],2),t.wordsToShow.length?n("div",{staticClass:"dialogo__words__content__words__container mt-md-3 mb-3 mb-md-0"},[t.touchScreen?t._l(t.wordsToShow,(function(e){return n("div",{key:"word-"+e.id,ref:"word-"+e.id,refInFor:!0,staticClass:"h5 dialogo__words__word",class:{grabbing:e.id===t.dragId},domProps:{innerHTML:t._s(e.palabra)},on:{touchstart:function(n){return n.preventDefault(),t.onTouchStart(e.id)},touchmove:function(n){return n.preventDefault(),t.onTouchMove(n,e.id)},touchend:function(n){return n.preventDefault(),t.onTouchEnd(n,e.id)},touchcancel:function(n){return n.preventDefault(),t.onTouchCancel(n,e.id)}}})})):t._l(t.wordsToShow,(function(e){return n("div",{key:"word-"+e.id,staticClass:"h5 dialogo__words__word",class:{grabbing:e.id===t.dragId},attrs:{draggable:""},domProps:{innerHTML:t._s(e.palabra)},on:{dragstart:function(n){return t.onStartDrag(e.id)},dragend:function(e){return t.onEndDrag()}}})}))],2):t._e()]),n("div",{staticClass:"dialogo__words__footer"},[t.score?n("div",{staticClass:"dialogo__score mt-3"},["approved"===t.score?n("div",{staticClass:"dialogo__score p-3 approved"},[n("div",{staticClass:"row align-items-center"},[t._m(1),n("div",{staticClass:"col"},[t._t("feedback-correcto",(function(){return[t._v("¡Muy bien!")]}))],2)])]):t._e(),"disapproved"===t.score?n("div",{staticClass:"dialogo__score px-3 py-2 disapproved"},[n("div",{staticClass:"row align-items-center"},[t._m(2),n("div",{staticClass:"col"},[t._t("feedback-incorrecto",(function(){return[t._v("Incorrecto")]}))],2)])]):t._e()]):t._e(),Object.values(t.answers).length===t.words.length?n("div",{staticClass:"dialogo__words__footer__actions text-end mt-3"},[null===t.score?n("button",{on:{click:t.onCheck}},[t._v("Comprobar")]):"disapproved"===t.score?n("button",{on:{click:t.reset}},[t._v("Prueba otra vez")]):t._e()]):t._e()])])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 d-md-none"},[n("hr",{staticClass:"mb-3 mt-4"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-2"},[r("div",{staticClass:"dialogo__score__icon"},[r("img",{attrs:{src:n("86bd")}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-2"},[r("div",{staticClass:"dialogo__score__icon"},[r("img",{attrs:{src:n("3b23")}})])])}],i=n("5530"),o=(n("d81d"),n("7db0"),n("4de4"),n("07ac"),n("caad"),n("2532"),n("ac1f"),n("1276"),n("5319"),n("b2ea")),s={name:"Dialogo",components:{Audio:o["default"]},props:{dialogo:{type:Object,default:function(){return{}}}},data:function(){return{uid:Math.floor(Math.random()*Math.pow(10,10)),touchScreen:!1,dragId:null,dropId:null,answers:{},translations:[],score:null}},computed:{dialogoComputed:function(){var t=this;return this.dialogo.dialogo?this.dialogo.dialogo.map((function(e,n){return Object(i["a"])(Object(i["a"])({},e),{},{id:t.uid+n+1,textoIng:t.splitPhrase(e.textoIng),textoEsp:t.splitPhrase(e.textoEsp),personaje:t.dialogo.personajes.find((function(t){return t.nombre===e.personaje}))})})):[]},words:function(){return this.shuffle(this.dialogoComputed.map((function(t){return{palabra:t.palabra,id:t.id}})).filter((function(t){return t.palabra})))},answerWordsIds:function(){return Object.values(this.answers).map((function(t){return t.dragId}))},wordsToShow:function(){var t=this;return this.words.filter((function(e){return!t.answerWordsIds.includes(e.id)}))}},created:function(){this.touchScreen="ontouchstart"in document.documentElement},methods:{onStartDrag:function(t){this.dragId=t},onEndDrag:function(){this.dragId=null},onDrop:function(t){var e=this;this.dragId&&(this.$set(this.answers,t,{dragId:this.dragId,dropId:t,palabra:this.words.find((function(t){return t.id===e.dragId})).palabra}),this.dropId=null)},onDragEnter:function(t){this.dropId=t},onDragLeave:function(){this.dropId=null},onTouchStart:function(t){var e=this.$refs["word-".concat(t)][0];e.classList.add("touch-drag")},onTouchMove:function(t,e){var n=this.$refs["word-".concat(e)][0],r=n.getBoundingClientRect(),a=t.touches[0];n.style.top="".concat(a.clientY-r.height/2,"px"),n.style.left="".concat(a.clientX-r.width/2,"px")},onTouchEnd:function(t,e){var n=this;if(t.changedTouches.length>1)this.resetDragElm(e);else{var r=this.$refs["chat-".concat(this.uid)],a=r.getBoundingClientRect(),i=t.changedTouches[0],o=i.clientX>a.x&&i.clientX<a.x+a.width,s=i.clientY>a.y&&i.clientY<a.y+a.height;if(o&&s){var c,l=this.words.some((function(t){var e=n.$refs["phrase-".concat(t.id)][0],r=e.getBoundingClientRect(),a=25,o=i.clientX>r.x-a&&i.clientX<r.x+r.width+a,s=i.clientY>r.y-a&&i.clientY<r.y+r.height+a;return o&&s&&(c=t.id),o&&s}));l&&this.$set(this.answers,c,{dragId:e,dropId:c,palabra:this.words.find((function(t){return t.id===e})).palabra}),this.resetDragElm(e)}else this.resetDragElm(e)}},onTouchCancel:function(t){this.resetDragElm(t)},resetDragElm:function(t){var e=this.$refs["word-".concat(t)][0];e.classList.remove("touch-drag")},toggleTranslate:function(t){this.translations.includes(t)?this.translations=this.translations.filter((function(e){return e!==t})):this.translations.push(t)},onCheck:function(){var t=Object.values(this.answers).every((function(t){return t.dragId===t.dropId}));this.score=t?"approved":"disapproved"},reset:function(){this.answers={},this.score=null},shuffle:function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=[t[n],t[e]];t[e]=r[0],t[n]=r[1]}return t},splitPhrase:function(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports},2532:function(t,e,n){"use strict";var r=n("23e7"),a=n("5a34"),i=n("1d80"),o=n("ab13");r({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(i(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},"3b23":function(t,e,n){t.exports=n.p+"img/red-x.76179c7f.svg"},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),o=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),o=n("a691"),s=n("1d80"),c=n("8aa5"),l=n("0cb2"),u=n("14c3"),d=Math.max,f=Math.min,p=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,_=r.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(n,r){var a=s(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!h&&_||"string"===typeof r&&-1===r.indexOf(g)){var s=n(e,t,this,r);if(s.done)return s.value}var v=a(t),m=String(this),b="function"===typeof r;b||(r=String(r));var x=v.global;if(x){var E=v.unicode;v.lastIndex=0}var y=[];while(1){var w=u(v,m);if(null===w)break;if(y.push(w),!x)break;var C=String(w[0]);""===C&&(v.lastIndex=c(m,i(v.lastIndex),E))}for(var I="",T=0,O=0;O<y.length;O++){w=y[O];for(var P=String(w[0]),S=d(f(o(w.index),m.length),0),D=[],j=1;j<w.length;j++)D.push(p(w[j]));var R=w.groups;if(b){var $=[P].concat(D,S,m);void 0!==R&&$.push(R);var k=String(r.apply(void 0,$))}else k=l(P,m,S,D,R,r);S>=T&&(I+=m.slice(T,S)+k,T=S+P.length)}return I+m.slice(T)}]}))},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5ccd":function(t,e,n){t.exports=n.p+"img/audio.058779f0.svg"},"6f53":function(t,e,n){var r=n("83ab"),a=n("df75"),i=n("fc6a"),o=n("d1e7").f,s=function(t){return function(e){var n,s=i(e),c=a(s),l=c.length,u=0,d=[];while(l>u)n=c[u++],r&&!o.call(s,n)||d.push(t?[n,s[n]]:s[n]);return d}};t.exports={entries:s(!0),values:s(!1)}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").find,i=n("44d2"),o="find",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},"86bd":function(t,e,n){t.exports=n.p+"img/green-check.f4a3fa01.svg"},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8fb3":function(t,e,n){"use strict";e["a"]={props:{audio:{type:String,default:""}},data:()=>({audioElement:null,audioCanPlay:!1,state:"pause"}),computed:{audioDuration(){if(!this.audioElement)return;const t=this.audioElement.buffered;return t.end(t.length-1)}},mounted(){this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=()=>{this.audioCanPlay=!0},this.audioElement.onloadedmetadata=()=>{this.audioCanPlay=!0},this.audioElement.onended=()=>{this.audioElement.currentTime=0,this.state="pause"}},beforeDestroy(){this.audioElement.remove()},methods:{createAudioElement(){const t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play(){this.state="play",this.audioElement.play()},pause(){this.state="pause",this.audioElement.pause()},stop(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(s=function(t){var e,n,a,s,d=this,f=l&&d.sticky,p=r.call(d),h=d.source,_=0,g=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,_++),n=new RegExp("^(?:"+h+")",p)),u&&(n=new RegExp("^"+h+"$(?!\\s)",p)),c&&(e=d.lastIndex),a=i.call(f?n:d,g),f?a?(a.input=a.input.slice(_),a[0]=a[0].slice(_),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:c&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),t.exports=s},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,n){var r=n("b622"),a=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b2ea:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?r("button",{staticClass:"audio__btn",on:{click:t.play}},[r("img",{attrs:{src:n("5ccd")}})]):r("button",{staticClass:"audio__btn",on:{click:t.pause}},[r("img",{attrs:{src:n("f034")}})]):r("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[r("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)},a=[],i=n("8fb3"),o={name:"Audio",mixins:[i["a"]]},s=o,c=n("2877"),l=Object(c["a"])(s,r,a,!1,null,null,null);e["default"]=l.exports},b64b:function(t,e,n){var r=n("23e7"),a=n("7b0b"),i=n("df75"),o=n("d039"),s=o((function(){i(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(t){return i(a(t))}})},caad:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9263"),s=n("9112"),c=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=i(t),_=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=_&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!_||!g||"replace"===t&&(!l||!u||f)||"split"===t&&!p){var v=/./[h],m=n(h,""[t],(function(t,e,n,r,a){return e.exec===o?_&&!a?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=m[0],x=m[1];r(String.prototype,t,b),r(RegExp.prototype,h,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&s(RegExp.prototype[h],"sham",!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").map,i=n("1dde"),o=i("map");r({target:"Array",proto:!0,forced:!o},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),i=n("56ef"),o=n("fc6a"),s=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),a=s.f,l=i(r),u={},d=0;while(l.length>d)n=a(r,e=l[d++]),void 0!==n&&c(u,e,n);return u}})},e439:function(t,e,n){var r=n("23e7"),a=n("d039"),i=n("fc6a"),o=n("06cf").f,s=n("83ab"),c=a((function(){o(1)})),l=!s||c;r({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},f034:function(t,e,n){t.exports=n.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-3d6834f6.28a849bc.js.map