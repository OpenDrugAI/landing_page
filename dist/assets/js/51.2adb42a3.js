(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{296:function(o,n,t){},470:function(o,n,t){"use strict";var e=t(296);t.n(e).a},736:function(o,n,t){"use strict";t.r(n);var e={data:function(){return{colorLoading:"#7d0c3f"}},methods:{openLoadingColor:function(){var o=this;this.$vs.loading({color:this.colorLoading}),setTimeout(function(){o.$vs.loading.close()},2e3)}}},a=(t(470),t(1)),i=Object(a.a)(e,function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{staticClass:"centerx"},[t("input",{directives:[{name:"model",rawName:"v-model",value:o.colorLoading,expression:"colorLoading"}],attrs:{type:"color",name:"",value:""},domProps:{value:o.colorLoading},on:{input:function(n){n.target.composing||(o.colorLoading=n.target.value)}}}),o._v(" "),t("vs-button",{attrs:{"vs-type":"gradient","vs-color":"danger"},on:{click:o.openLoadingColor}},[o._v("Danger")])],1)},[],!1,null,null,null);i.options.__file="Color.vue";n.default=i.exports}}]);