(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34be0595"],{1423:function(e,t,r){"use strict";var n=r("acef"),s=r.n(n);s.a},"47a1":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"manage-ens-container"},[r("h3",[e._v(e._s(e.$t("dapps.manage"))+" "+e._s(e.domainName)+"."+e._s(e.tld))]),r("div",{staticClass:"inputs-container"},[r("div",{staticClass:"form-container"},[r("form",{staticClass:"manage-form"},[r("div",{staticClass:"input-container"},[r("label",{attrs:{for:"updateResolver"}},[e._v(e._s(e.$t("dapps.updateResolver"))+":")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.locResolverAddr,expression:"locResolverAddr"}],attrs:{type:"text",name:"updateResolver",placeholder:"0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"},domProps:{value:e.locResolverAddr},on:{input:function(t){t.target.composing||(e.locResolverAddr=t.target.value)}}})]),r("div",{staticClass:"submit-container"},[r("button",{class:e.isAddress(e.locResolverAddr)?"":"disabled",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.updateResolver(e.locResolverAddr)}}},[e._v("\n            Update\n          ")])])])]),r("div",{staticClass:"form-container"},[r("form",{staticClass:"manage-form"},[r("div",{staticClass:"input-container"},[r("label",{attrs:{for:"transferEns"}},[e._v(e._s(e.$t("dapps.transferEnsTo"))+":")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.transferTo,expression:"transferTo"}],attrs:{type:"text",name:"transferEns",placeholder:"0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"},domProps:{value:e.transferTo},on:{input:function(t){t.target.composing||(e.transferTo=t.target.value)}}})]),r("div",{staticClass:"submit-container"},[r("button",{class:e.isAddress(e.transferTo)?"":"disabled",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.transferDomain(e.transferTo)}}},[e._v("\n            Transfer\n          ")])])])])]),r("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://xinfin.network"}})],1)},s=[],a=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("bd86")),o=r("539d"),i=r("b7d3"),c=r("2f62");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={components:{"interface-bottom-text":o["a"]},props:{domainName:{type:String,default:""},updateResolver:{type:Function,default:function(){}},transferDomain:{type:Function,default:function(){}},resolverAddress:{type:String,default:""},tld:{type:String,default:""}},data:function(){return{locResolverAddr:this.resolverAddress,transferTo:"",isAddress:i["a"]}},computed:l({},Object(c["b"])({web3:"web3"})),mounted:function(){""===this.domainName&&this.$router.push("/interface/dapps/register-domain")}},p=u,f=(r("1423"),r("2877")),v=Object(f["a"])(p,n,s,!1,null,"f67bda5e",null),m=v.exports;r.d(t,"default",(function(){return m}))},acef:function(e,t,r){}}]);
//# sourceMappingURL=chunk-34be0595.b58f6f58.js.map