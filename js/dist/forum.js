(()=>{var t={n:o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return t.d(r,{a:r}),r},d:(o,r)=>{for(var e in r)t.o(r,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:r[e]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const r=flarum.core.compat["forum/app"];var e=t.n(r);const n=flarum.core.compat["common/extend"],s=flarum.core.compat["forum/components/UserCard"];var a=t.n(s);function c(t,o){return c=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},c(t,o)}const u=flarum.core.compat["common/Component"];var i=t.n(u);const p=flarum.core.compat["common/utils/extract"];var l=t.n(p);const d=flarum.core.compat["common/helpers/icon"];var f=t.n(d),y=function(t){var o,r;function e(){return t.apply(this,arguments)||this}return r=t,(o=e).prototype=Object.create(r.prototype),o.prototype.constructor=o,c(o,r),e.prototype.view=function(t){var o=Object.assign({},this.attrs),r=l()(o,"icon"),e=l()(o,"displayText");return m("div",{className:"userStat"},f()(r),e)},e}(i());e().initializers.add("blomstra/usercard-stats",(function(){(0,n.extend)(a().prototype,"infoItems",(function(t){t.has("points")&&t.setPriority("points",50),t.has("best-answer-count")&&t.setPriority("best-answer-count",55);var o=this.attrs.user;t.add("discussion-count",m(y,{icon:"fas fa-comment",displayText:e().translator.trans("blomstra-usercard-stats.forum.user.discussion-count",{count:o.discussionCount()})}),70),t.add("comment-count",m(y,{icon:"fas fa-comments",displayText:e().translator.trans("blomstra-usercard-stats.forum.user.post-count",{count:o.commentCount()})}),65)}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map