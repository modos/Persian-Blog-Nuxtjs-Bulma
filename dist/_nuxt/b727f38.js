(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{294:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("8b7c789a",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";var r=n(5),o=n(143).charAt,c=n(19),l=n(53),v=n(12);r({target:"String",proto:!0,forced:!0},{at:function(t){var e=v(c(this)),n=e.length,r=l(t),d=r>=0?r:n+r;return d<0||d>=n?void 0:o(e,d)}})},305:function(t,e,n){"use strict";n(294)},306:function(t,e,n){var r=n(107)(!1);r.push([t.i,".nuxt-content p,h1,h2,h3,h4,h5,h6{direction:rtl;text-align:justify}.nuxt-content img{margin:auto;display:block}",""]),t.exports=r},325:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(8),c=(n(52),n(304),n(26),n(145),n(11),n(81),n(33),n(44),{name:"SinglePostPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,v,d,h,_,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,c=t.route,l=c.fullPath.toString().split("/").at(-2),e.next=4,n("blog/categories/".concat(l),{deep:!0},o.slug).fetch();case 4:return v=e.sent,e.next=7,n("blog",{deep:!0}).only(["title","slug"]).sortBy("createdAt","asc").surround(v.path).fetch();case 7:return d=e.sent,h=Object(r.a)(d,2),_=h[0],f=h[1],e.abrupt("return",{doc:v,prev:_,next:f});case 12:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.doc.title,meta:[{hid:this.doc.title,name:"description",content:this.doc.description}]}}}),l=(n(305),n(25)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("div",{staticClass:"columns mt-4"},[n("div",{staticClass:"column"}),t._v(" "),n("div",{staticClass:"column  is-three-quarters"},[n("nuxt-content",{attrs:{document:t.doc}}),t._v(" "),n("span",[t._v("برچسب ها:")]),t._v(" "),t._l(t.doc.tags,(function(e,r){return n("NuxtLink",{key:r,attrs:{to:"/blog/tags/"+e}},[n("span",{staticClass:"tag is-warning mr-3"},[t._v(t._s(e))])])})),t._v(" "),n("div",{staticClass:"has-text-centered"},[null!==t.next?n("span",[t._v("مطلب بعدی:")]):t._e(),t._v(" "),n("NuxtLink",{attrs:{to:null===t.next?"#":t.next.path}},[n("span",[t._v(t._s(null===t.next?"":t.next.title))])]),t._v(" "),null!==t.prev?n("span",[t._v("مطلب قبلی:")]):t._e(),t._v(" "),n("NuxtLink",{attrs:{to:null===t.prev?"#":t.prev.path}},[n("span",[t._v(t._s(null===t.prev?"":t.prev.title))])])],1)],2),t._v(" "),n("div",{staticClass:"column"})]),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(208).default,Footer:n(142).default})}}]);