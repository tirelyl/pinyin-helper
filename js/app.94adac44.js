(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"201b":function(e,t,n){"use strict";var r=n("b7f2"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5c96"),i=n.n(a),s=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pinyin-helper-wrapper"},[n("py-helper")],1)}),o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("div",{staticClass:"ph-main"},[n("div",{staticClass:"ph-main-left"},[n("el-input",{attrs:{type:"textarea",clearable:"",autosize:{minRows:8},placeholder:"Input chinese here"},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}),e.inputValue?n("span",{staticClass:"ph-clear-btn",on:{click:function(t){e.inputValue=""}}},[n("i",{staticClass:"el-icon-circle-close"})]):e._e()],1),n("div",{staticClass:"ph-main-right"},[n("py-preview",{attrs:{inputValue:e.results}})],1)]),e.inputValue?e._e():n("div",{staticClass:"ph-history"},[n("div",{staticClass:"ph-history-header"},[e._m(1),n("span",{staticClass:"ph-history-action",on:{click:e.clearHistory}},[e._v("Clear")])]),n("div",{staticClass:"ph-history-tags"},e._l(e.history,(function(t,r){return n("el-tag",{key:r,attrs:{type:"info",closable:""},on:{close:function(t){return e.handleCloseTag(r)},click:function(n){return e.handleClickTag(t)}}},[e._v(" "+e._s(t)+" ")])})),1)])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ph-header"},[n("h1",[e._v("Pinyin Helper 🐱")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("i",{staticClass:"el-icon-alarm-clock"}),e._v(" History ")])}],u=(n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ph-preview"},[n("div",{staticClass:"ph-preview-content"},[e.isCompare?e._l(e.parsedValue,(function(t,r){return n("span",{key:r,staticClass:"compare-value"},[n("em",[e._v(e._s(t[0]))]),n("span",[e._v(e._s(e.inputValue[r]))])])})):e._l(e.parsedValue,(function(t,r){return n("span",{key:r,staticClass:"normal-value"},[e._v(e._s(t[0]))])}))],2),n("div",{staticClass:"ph-preview-footer"},[n("div",{staticClass:"ph-preview-actions"},[n("el-tooltip",{staticClass:"ph-preview-action",attrs:{content:"copy",placement:"top"}},[n("i",{staticClass:"el-icon-document-copy",on:{click:e.copy}})])],1),n("div",{staticClass:"ph-preview-actions"},[n("span",{staticClass:"ph-preview-switch"},[e._v(" Compare "),n("el-switch",{staticStyle:{"margin-left":"4px"},attrs:{"active-color":"#13ce66"},model:{value:e.isCompare,callback:function(t){e.isCompare=t},expression:"isCompare"}})],1)])])])}),p=[],f=(n("c975"),n("a15b"),n("d958"));n("d3b7");function h(e){return new Promise((function(t,n){var r=null;try{r=d(e),r.select(),document.execCommand("copy"),t(e)}catch(a){n(a)}finally{r&&r.parentNode&&r.parentNode.removeChild(r)}}))}function d(e){var t=null;return t=document.createElement("textarea"),t.style.height="0px",t.style.opacity="0",t.style.width="0px",document.body.appendChild(t),t.value=e,t}var y={name:"PinyinPreview",props:{inputValue:String},data:function(){return{parsedValue:[],isCompare:!1}},methods:{copy:function(){var e=this;h(this.parsedValue.join(" ")).then((function(){e.$message({message:"Copy Success!",type:"success"})}))},saveHistory:function(e){if("string"===typeof e){var t=JSON.parse(localStorage.getItem("ph_history"))||[];-1===t.indexOf(e)&&(t.push(e),localStorage.setItem("ph_history",JSON.stringify(t)))}}},watch:{inputValue:function(e){this.parsedValue=f(e),this.parsedValue.length&&this.saveHistory(e)}}},v=y,m=(n("b717"),n("2877")),b=Object(m["a"])(v,u,p,!1,null,"5df9758c",null),g=b.exports,_=n("1a2d"),C=n("ebb6"),w={name:"PinyinHelper",components:{"py-preview":g},props:{msg:String},data:function(){return{inputValue:"",history:Array}},methods:{getHistory:function(){return JSON.parse(localStorage.getItem("ph_history"))||[]},clearHistory:function(){localStorage.removeItem("ph_history"),this.refreshHistory()},refreshHistory:function(){this.history=this.getHistory()},handleCloseTag:function(e){this.history.splice(e,1),localStorage.setItem("ph_history",JSON.stringify(this.history))},handleClickTag:function(e){this.inputValue=e}},subscriptions:function(){return{results:this.$watchAsObservable("inputValue").pipe(Object(_["a"])(800),Object(C["a"])((function(e){return e.newValue})))}},watch:{inputValue:function(e){e||this.refreshHistory()}},mounted:function(){this.refreshHistory()}},O=w,V=(n("201b"),Object(m["a"])(O,c,l,!1,null,"646a0ce8",null)),x=V.exports,S={name:"App",components:{"py-helper":x},data:function(){return{message:"",parsedMessage:""}}},j=S,k=(n("034f"),Object(m["a"])(j,s,o,!1,null,null,null)),H=k.exports,P=n("ce19");r["default"].config.productionTip=!1,r["default"].use(i.a),r["default"].use(P["a"]),new r["default"]({render:function(e){return e(H)}}).$mount("#app")},6921:function(e,t,n){},"85ec":function(e,t,n){},b717:function(e,t,n){"use strict";var r=n("6921"),a=n.n(r);a.a},b7f2:function(e,t,n){}});
//# sourceMappingURL=app.94adac44.js.map