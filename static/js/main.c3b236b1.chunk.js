(this["webpackJsonpig-web-app"]=this["webpackJsonpig-web-app"]||[]).push([[0],{25:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(13),s=n.n(a),i=(n(25),n(19)),o=n(20),u=n(4),l=n(1),j=function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h3",{className:"version",children:Object(l.jsx)("span",{className:"versiontxt",children:"v1.0"})}),Object(l.jsx)("h1",{className:"title-page",children:" IG Viral Content Finder"})]}),Object(l.jsx)("head",{children:Object(l.jsx)("title",{children:"IG Viral Bot"})})]})},d=n(18),b=function(e){var t=e.account,n=e.onDelete;return Object(l.jsx)("center",{children:Object(l.jsx)("div",{class:"accountDiv",children:Object(l.jsxs)("h2",{class:"account",children:["@",t.text.toLowerCase(),Object(l.jsx)(d.a,{onClick:function(){return n(t.id)},style:{color:"#ff6961",cursor:"pointer"}})]})})})},p=function(e){var t=e.accounts,n=e.onDelete;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)(b,{onDelete:n,account:e},e.id)}))})},h=function(e){var t=e.newAccount,n=e.accountExists,c=Object(r.useState)(""),a=Object(u.a)(c,2),s=a[0],i=a[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{class:"add-account",onSubmit:function(e){if(console.log({text:s}),e.preventDefault(),s){if(n({text:s}))return alert(s.toLowerCase()+" has already been added."),void i("");t({text:s}),i("")}else alert("Please type a username")},children:[Object(l.jsx)("input",{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"type an account name",className:"add-account-sb",value:s,type:"text",onChange:function(e){return i(e.target.value)}}),Object(l.jsx)("input",{className:"add-account-submit",type:"submit",value:"Add"})]})})},f=n(6),x=n.n(f),O=n(9),v=function(e){var t=e.accounts,n=e.setForm,r=e.setLoading,c=e.setPostVisible,a=e.setViralPosts,s=e.setAccounts;function i(e){return o.apply(this,arguments)}function o(){return(o=Object(O.a)(x.a.mark((function e(t){var n,r,c,a,s,i,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mycorsproxy-112.herokuapp.com/https://www.instagram.com/"+t+"/channel/?__a=1");case 3:return n=e.sent,e.next=6,n.json();case 6:for(r=e.sent,c=r.graphql.user.edge_owner_to_timeline_media.edges,a=[],s=0,i=0;i<12;i++)s+=c[i].node.edge_media_preview_like.count,a.push({id:"www.instagram.com/p/"+c[i].node.shortcode,likes:c[i].node.edge_media_preview_like.count,imgURL:c[i].node.display_url});for(s/=12,a=a.filter((function(e){return 1-s/e.likes>.5})),o=0;o<a.length;o++)a[o].viralScore=Math.round(100*(1-s/a[o].likes));return e.abrupt("return",a);case 17:e.prev=17,e.t0=e.catch(0),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}function u(e,t){return e.viralScore>t.viralScore?-1:e.viralScore<t.viralScore?1:0}function j(){return(j=Object(O.a)(x.a.mark((function e(){var o,l,j,d;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!1),r(!0),o=[],l=0;case 4:if(!(l<t.length)){e.next=12;break}return e.next=7,i(t[l].text.toLowerCase());case 7:j=e.sent,o=o.concat(j);case 9:l++,e.next=4;break;case 12:o.sort(u),d=0;case 14:if(!(d<o.length)){e.next=30;break}if(e.prev=15,void 0!==typeof o[d]&&o[d].hasOwnProperty("likes")&&o[d].hasOwnProperty("viralScore")&&o[d].hasOwnProperty("imgURL")&&o[d].hasOwnProperty("id")){e.next=18;break}return e.abrupt("continue",27);case 18:e.next=27;break;case 20:return e.prev=20,e.t0=e.catch(15),r(!1),alert("One of your accounts is either private or misspelled, please re-enter the usernames and try again."),s([]),n(!0),e.abrupt("return");case 27:d++,e.next=14;break;case 30:a(o),r(!1),c(!0);case 33:case"end":return e.stop()}}),e,null,[[15,20]])})))).apply(this,arguments)}return Object(l.jsx)("div",{class:"btnDiv",children:Object(l.jsx)("button",{id:t.length>0?"analyze1":"analyze2",onClick:function(){return function(){return j.apply(this,arguments)}()},children:"Find Content"})})},m=n(14),g=function(){return Object(l.jsx)("div",{id:"loadingDiv",class:"addMargin",children:Object(l.jsx)(m.ClipLoader,{size:"70px",color:"#35B999"})})},w=function(e){var t=e.post;return Object(l.jsx)("center",{children:Object(l.jsxs)("div",{className:"postDiv",children:[Object(l.jsx)("img",{className:"postIMG",alt:t.id,src:t.imgURL}),Object(l.jsx)("h2",{className:"post",children:t.viralScore}),Object(l.jsx)("a",{className:"postLink",target:"_blank",rel:"noreferrer",href:"https://"+t.id,children:"Link"}),Object(l.jsx)("h2",{className:"postLikes",children:t.likes})]})})},k=function(e){var t=e.postList;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)(w,{post:e})}))})};var y=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!0),s=Object(u.a)(a,2),d=s[0],b=s[1],f=Object(r.useState)(!1),x=Object(u.a)(f,2),O=x[0],m=x[1],w=Object(r.useState)(!1),y=Object(u.a)(w,2),C=y[0],L=y[1],S=Object(r.useState)([]),_=Object(u.a)(S,2),D=_[0],P=_[1];return Object(l.jsxs)("div",{class:"mainDiv",children:[Object(l.jsx)(j,{}),d&&Object(l.jsx)(h,{accountExists:function(e){for(var t=0;t<n.length;t++)if(e.text.toLowerCase()===n[t].text)return!0;return!1},newAccount:function(e){var t=Math.floor(1e4*Math.random())+1;e.text=e.text.toLowerCase();var r=Object(o.a)({id:t},e);c([r].concat(Object(i.a)(n)))}}),n.length>0&&d&&Object(l.jsx)(p,{accounts:n,onDelete:function(e){c(n.filter((function(t){return t.id!==e})))}}),d&&Object(l.jsx)(v,{setAccounts:c,accounts:n,setForm:b,setLoading:m,setViralPosts:P,setPostVisible:L}),O&&Object(l.jsx)(g,{}),C&&Object(l.jsx)(k,{postList:D})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.c3b236b1.chunk.js.map