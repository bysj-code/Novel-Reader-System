(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-detail/forum-detail"],{"174e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,u,a,o){try{var c=t[a](o),i=c.value}catch(f){return void n(f)}c.done?e(i):Promise.resolve(i).then(r,u)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,u){var o=t.apply(e,n);function c(t){a(o,r,u,c,i,"next",t)}function i(t){a(o,r,u,c,i,"throw",t)}c(void 0)}))}}var c=function(){n.e("components/forum-reply/forum-reply").then(function(){return resolve(n("c655"))}.bind(null,n)).catch(n.oe)},i={components:{userReply:c},data:function(){return{commentData:[],forum:{},id:""}},onLoad:function(t){var e=this;return o(r.default.mark((function n(){var u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.id=t.id,n.next=3,e.$api.forumDetail(t.id);case 3:u=n.sent,e.commentData=u.data.childs,e.forum=u.data,console.log(e.commentData);case 7:case"end":return n.stop()}}),n)})))()},onShow:function(){var t=this;return o(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.forumDetail(t.id);case 2:n=e.sent,t.commentData=n.data.childs,t.forum=n.data;case 5:case"end":return e.stop()}}),e)})))()},methods:{onReplyTap:function(t){this.$utils.jump("../forum-reply/forum-reply?pid=".concat(t))}}};e.default=i},"1e68":function(t,e,n){},"3e8d":function(t,e,n){"use strict";n.r(e);var r=n("b7da"),u=n("d787");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("91ee");var o,c=n("f0c5"),i=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"444c0513",null,!1,r["a"],o);e["default"]=i.exports},"91ee":function(t,e,n){"use strict";var r=n("1e68"),u=n.n(r);u.a},"9f59":function(t,e,n){"use strict";(function(t){n("6e31");r(n("66fd"));var e=r(n("3e8d"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},b7da:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var u=function(){var t=this,e=t.$createElement;t._self._c},a=[]},d787:function(t,e,n){"use strict";n.r(e);var r=n("174e"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a}},[["9f59","common/runtime","common/vendor"]]]);