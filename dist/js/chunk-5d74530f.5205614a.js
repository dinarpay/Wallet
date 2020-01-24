(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d74530f"],{"0355":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"send-offline-container"},[n("interface-container-title",{attrs:{title:e.$t("common.offline")}}),n("div",{staticClass:"generate-tx"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"send-form"},[n("div",{staticClass:"form-block amount-to-address"},[n("ul",{staticClass:"type-amount"},[n("li",{staticClass:"type"},[n("div",{staticClass:"title"},[n("h4",[e._v(e._s(e.$t("interface.sendTxType")))])]),n("currency-picker",{attrs:{currency:e.allTokens,token:!0,page:"sendOfflineGenTx"},on:{selectedCurrency:e.setSelectedCurrency}})],1),n("li",{staticClass:"amount"},[n("div",{staticClass:"title"},[n("h4",[e._v(e._s(e.$t("interface.sendTxAmount")))])]),n("div",{staticClass:"the-form amount-number"},[n("input",{attrs:{placeholder:e.$t("interface.depAmount"),type:"number",name:""},domProps:{value:e.toAmt},on:{input:e.debouncedAmount}})])])]),n("div",{staticClass:"to-address"},[n("div",{staticClass:"title"},[n("h4",[e._v(e._s(e.$t("interface.sendTxToAddr"))+"  ")]),n("blockie",{directives:[{name:"show",rawName:"v-show",value:""!==e.address&&e.validAddress,expression:"address !== '' && validAddress"}],staticClass:"blockie-image-icon",attrs:{address:e.address,width:"32px",height:"32px"}}),n("button",{staticClass:"title-button copy-button prevent-user-select",on:{click:e.copyToAddress}},[e._v("\n                "+e._s(e.$t("common.copy"))+"\n              ")])],1),n("div",{staticClass:"the-form address-block"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],ref:"toaddress",attrs:{name:"name",placeholder:"Please Enter The Address"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),n("i",{class:[e.validAddress?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])])]),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-helper"},[n("h4",[e._v(e._s(e.$t("common.data")))])])])]),n("div",{staticClass:"the-form gas-amount"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.toData,expression:"toData"}],attrs:{disabled:"ETH"!==e.selectedCoinType.symbol,type:"string",placeholder:"e.g. 0x65746865726d696e652d657531"},domProps:{value:e.toData},on:{input:function(t){t.target.composing||(e.toData=t.target.value)}}}),n("div",{staticClass:"good-button-container"},[n("i",{class:[""!==e.toData?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])]),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-helper"},[n("h4",[e._v(e._s(e.$t("common.gasLimit")))]),n("popover",{attrs:{popcontent:e.$t("popover.gasLimit")}})],1)])]),n("div",{staticClass:"the-form gas-amount"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.gasLimit,expression:"gasLimit"}],attrs:{placeholder:e.$t("common.gasLimit"),type:"number"},domProps:{value:e.gasLimit},on:{input:function(t){t.target.composing||(e.gasLimit=t.target.value)}}}),n("div",{staticClass:"good-button-container"},[n("i",{class:["fa fa-check-circle good-button",e.gasLimit>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-helper"},[n("h4",[e._v(e._s(e.$t("common.nonce")))]),n("popover",{attrs:{popcontent:e.$t("popover.nonce")}})],1)])]),n("div",{staticClass:"the-form gas-amount"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.nonce,expression:"nonce"}],attrs:{placeholder:e.$t("common.nonce"),type:"number"},domProps:{value:e.nonce},on:{input:function(t){t.target.composing||(e.nonce=t.target.value)}}}),n("div",{staticClass:"good-button-container"},[n("i",{class:["fa fa-check-circle good-button",e.nonce>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-helper"},[n("h4",[e._v(e._s(e.$t("common.gasPrice")))]),n("popover",{attrs:{popcontent:e.$t("popover.gasPrice")}})],1)])]),n("div",{staticClass:"the-form gas-amount"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.localGasPrice,expression:"localGasPrice"}],attrs:{placeholder:e.$t("common.gasPrice"),type:"number"},domProps:{value:e.localGasPrice},on:{input:function(t){t.target.composing||(e.localGasPrice=t.target.value)}}}),n("div",{staticClass:"good-button-container"},[n("i",{class:["fa fa-check-circle good-button",e.gasPrice>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),n("div",{staticClass:"submit-button-container"},[n("input",{ref:"jsonInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:e.uploadFile}}),n("div",{staticClass:"submit-button large-round-button-green-border",on:{click:e.uploadClick}},[e._v("\n          Import JSON\n        ")]),n("div",{class:[e.isAllInputValid?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.generateTx}},[e._v("\n          "+e._s(e.$t("interface.generateTx"))+"\n        ")]),n("interface-bottom-text",{attrs:{link:"https://xinfin.network",question:"Have issues?","link-text":"Help Center"}})],1)]),n("signed-tx-modal",{ref:"signedTxModal",attrs:{"signed-tx":e.signed,"raw-tx":e.raw}})],1)],1)},a=[],i=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("d25f"),n("ac6a"),n("456d"),n("6b54"),n("87b3"),n("96cf"),n("3b8d")),o=(n("55dd"),n("7f7f"),n("bd86")),r=n("55c1"),c=n("539d"),l=n("d7a2"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"signedTx",staticClass:"bootstrap-modal signed-tx-modal",attrs:{title:e.$t("interface.signedTx"),"hide-footer":""}},[n("div",{staticClass:"d-block"},[n("div",{staticClass:"title-block"},[n("h4",{staticClass:"block-title"},[e._v(e._s(e.$t("interface.signedTx")))])]),n("div",{staticClass:"signed-tx-container"},[n("code",[e._v(e._s(JSON.parse(e.signedTx).rawTransaction))]),n("input",{ref:"signedTxInput",staticStyle:{position:"absolute",top:"0",opacity:"0"},attrs:{autocomplete:"off"},domProps:{value:e.signedTx}})]),n("div",{staticClass:"scan-download-container"},[n("h4",{staticClass:"block-title"},[e._v("Scan QR code")]),""!==e.signedTx?n("div",{staticClass:"scan-download-items"},[n("qrcode",{attrs:{value:JSON.parse(e.signedTx).rawTransaction,options:{size:200}}}),e._v("or "),n("a",{attrs:{href:e.jsonFile,download:e.jsonFileName}},[e._v("Download JSON")])],1):e._e()]),n("div",{staticClass:"raw"},[n("div",{staticClass:"title-block"},[n("h4",{staticClass:"block-title"},[e._v(e._s(e.$t("interface.raw")))]),n("div",{staticClass:"sliding-switch-white"},[n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"},on:{click:function(t){e.showRaw=!e.showRaw}}}),n("span",{staticClass:"slider round"})])])]),e.showRaw?n("div",{staticClass:"raw-tx-container"},[n("code",[e._v(e._s(e.rawTx))])]):e._e()])]),n("div",{staticClass:"button-container"},[n("b-btn",{staticClass:"mid-round-button-green-filled close-button",on:{click:e.copyAndContinue}},[e._v(e._s(e.$t("interface.copyAndCont")))])],1)])},u=[],p={name:"SignedTxModal",props:{signedTx:{type:String,default:""},rawTx:{type:Object,default:function(){return{}}},pathUpdate:{type:Function,default:function(){}}},data:function(){return{showRaw:!1,jsonFile:"",jsonFileName:"signedTransactionObject-".concat(+new Date,".json")}},watch:{signedTx:function(e){var t=JSON.parse(e),n=this.rawTx;delete n["generateOnly"];var s=Object.assign({},t.tx,n);delete t["tx"],t["tx"]=s;var a=JSON.stringify(t),i=new Blob([a],{type:"mime"});this.jsonFileName="signedTransactionObject-".concat(+new Date,".json"),this.jsonFile=window.URL.createObjectURL(i)}},methods:{copyAndContinue:function(){this.$refs.signedTxInput.select(),document.execCommand("copy"),this.$refs.signedTx.hide()}}},m=p,f=(n("f762"),n("2877")),h=Object(f["a"])(m,d,u,!1,null,null,null),v=h.exports,b=n("c8e5"),g=n("901e"),w=n.n(g),y=n("70c1"),C=n("2f62"),k=n("b7d3"),x=n("8ded"),O=n.n(x),_=n("ce96"),T=n("1131"),j=n.n(T);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={components:{"interface-bottom-text":c["a"],blockie:b["a"],"signed-tx-modal":v,"currency-picker":l["a"],"interface-container-title":r["a"]},props:{tokens:{type:Array,default:function(){return[]}}},data:function(){return{toAmt:0,address:"",toData:"0x",gasLimit:21e3,selectedCoinType:{},raw:{},signed:"{}",nonce:0,file:"",localGasPrice:this.gasPrice}},computed:D({},Object(C["b"])({wallet:"wallet",network:"network",web3:"web3",gasPrice:"gasPrice"}),{validAddress:function(){return Object(k["a"])(this.address)},allTokens:function(){var e=O.a.get("customTokens"),t=this.tokens.concat(e[this.network.type.name]),n=t.sort((function(e,t){return e.symbol.toUpperCase()<t.symbol.toUpperCase()?-1:e.symbol.toUpperCase()>t.symbol.toUpperCase()?1:0}));return n},isAllInputValid:function(){return this.toData.length>=2&&this.address.length>0&&this.validAddress&&this.toAmt>=0&&this.gasLimit>0&&this.nonce>0&&this.localGasPrice}}),watch:{toData:function(e){_["d"].validateHexString(e)?this.toData=e:this.toData="0x"},toAmt:function(e){this.createDataHex(e,null,null)},address:function(e){this.validAddress&&this.createDataHex(null,e,null)},selectedCoinType:function(e){this.createDataHex(null,null,e)}},methods:{debouncedAmount:j.a._.debounce((function(e){var t=this.selectedCoinType.symbol===this.network.type.name?18:this.selectedCoinType.decimals;this.toAmt=new w.a(e.target.value).decimalPlaces(t).toFixed(),e.target.value=this.toAmt}),300),createDataHex:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,s){var a,i,o,r,c,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=null!==t?t:this.toAmt,i=null!==n?n:this.address,o=null!==s?s:this.selectedCoinType,r=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],o.symbol!==this.network.type.name&&""!==i&&(c=""===a||null===a?"0":a,l=new this.web3.eth.Contract(r,o.address),d=new w.a(c).times(new w.a(10).pow(o.decimals)),this.toData=l.methods.transfer(i,d.toFixed()).encodeABI());case 5:case"end":return e.stop()}}),e,this)})));function t(t,n,s){return e.apply(this,arguments)}return t}(),copyToAddress:function(){var e=this.$refs.toaddress;e.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},uploadClick:function(){var e=this.$refs.jsonInput;e.value="",e.click()},uploadFile:function(e){var t=this,n=new FileReader;n.onloadend=function(n){try{var s=JSON.parse(n.target.result);t.localGasPrice=y["fromWei"](s.gasPrice,"gwei"),t.nonce=s.nonce}catch(e){_["e"].responseHandler(e,_["e"].WARN)}},n.readAsBinaryString(e.target.files[0])},generateTx:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.selectedCoinType.symbol!==this.network.type.name,n=y["toWei"](this.toAmt,"ether"),s={nonce:_["d"].sanitizeHex(new w.a(this.nonce).toString(16)),gasLimit:_["d"].sanitizeHex(new w.a(this.gasLimit).toString(16)),gasPrice:_["d"].sanitizeHex(new w.a(y["toWei"](this.gasPrice,"gwei")).toString(16)),to:t?this.selectedCoinType.address:this.address,value:t?0:n,data:this.toData,chainId:this.network.type.chainID},this.raw=s,e.next=6,this.wallet.signTransaction(this.raw);case 6:a=e.sent,this.signed=JSON.stringify(a),this.$refs.signedTxModal.$refs.signedTx.show(),window.scrollTo(0,0);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setSelectedCurrency:function(e){this.selectedCoinType=e,e.symbol===this.network.type.name&&(this.toData="0x")}}},$=A,S=(n("7a3b"),Object(f["a"])($,s,a,!1,null,"36c99b2c",null)),N=S.exports;n.d(t,"default",(function(){return N}))},"772e":function(e,t,n){},"7a3b":function(e,t,n){"use strict";var s=n("ccb7"),a=n.n(s);a.a},a809:function(e,t,n){},b5cb:function(e,t,n){"use strict";var s=n("a809"),a=n.n(s);a.a},ccb7:function(e,t,n){},d7a2:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.openDropdown,expression:"openDropdown"}],staticClass:"currency-picker-container"},[n("div",[n("div",{class:[e.open?"open":"","dropdown-container",e.token?"dropdown-text-container":"dropdown-text-container-white"],on:{click:e.openDropdown}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.token,expression:"token"}]},[e._v("\n        "+e._s(e.selectedCurrency.symbol)+"\n        "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.selectedCurrency.name))])]),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.token,expression:"!token"}]},[e._v(e._s(e.selectedCurrency.name))]),n("i",{class:["fa",e.open?"fa-angle-up":"fa-angle-down"]})]),n("div",{class:[e.open?"open":"hide","dropdown-item-container"]},[n("div",{staticClass:"dropdown-search-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{placeholder:"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),n("i",{staticClass:"fa fa-search"})]),n("div",{staticClass:"item-container"},e._l(e.localCurrency,(function(t,s){return n("div",{key:e.token?t.name+s+t.symbol+e.page:t.name+e.page+s,class:[e.token?e.selectedCurrency.symbol===t.symbol?"selected":"":e.selectedCurrency.name===t.name?"selected":"","item"],on:{click:function(n){return e.selectCurrency(t)}}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.token,expression:"token"}]},[e._v("\n            "+e._s(t.symbol)),n("span",{staticClass:"subname"},[e._v(" - "+e._s(t.name))])]),n("p"),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.token,expression:"!token"}]},[e._v(e._s(t.name))])])})),0)])])])},a=[],i=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("ac6a"),n("456d"),n("75fc")),o=(n("6762"),n("2fdb"),n("d25f"),n("386d"),n("7f7f"),n("bd86")),r=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={props:{currency:{type:Array,default:function(){return[]}},page:{type:String,default:""},token:{type:Boolean,default:!0}},data:function(){return{selectedCurrency:{name:"Select an item",abi:"",address:""},open:!1,search:"",abi:"",address:""}},computed:l({},Object(r["b"])({network:"network"}),{networkToken:function(){return{name:this.network.type.name_long,symbol:this.network.type.name}},localCurrency:function(){var e=this;return""!==this.search?this.currency.filter((function(t){if(t.name.toLowerCase().includes(e.search.toLowerCase()))return t})):this.token?[this.networkToken].concat(Object(i["a"])(this.currency)):[{name:"Select an item",abi:"",address:""}].concat(Object(i["a"])(this.currency))}}),watch:{networkToken:function(){this.token&&(this.selectedCurrency=this.networkToken)},selectedCurrency:function(e){this.$emit("selectedCurrency",e)}},mounted:function(){this.selectedCurrency=!0===this.token?this.networkToken:{name:"Select an item",abi:"",address:""}},methods:{openDropdown:function(){this.open=!this.open},selectCurrency:function(e){this.openDropdown(),this.selectedCurrency=e}}},u=d,p=(n("b5cb"),n("2877")),m=Object(p["a"])(u,s,a,!1,null,"7f812414",null),f=m.exports;n.d(t,"a",(function(){return f}))},f762:function(e,t,n){"use strict";var s=n("772e"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-5d74530f.5205614a.js.map