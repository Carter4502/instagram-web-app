(this["webpackJsonpig-web-app"]=this["webpackJsonpig-web-app"]||[]).push([[0],{29:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(18),a=n.n(s),i=(n(29),n(23)),o=n(24),l=n(4),u=n(1),j=function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{className:"version",children:Object(u.jsx)("span",{className:"versiontxt",children:"v1.0"})}),Object(u.jsx)("a",{className:"titleLink",href:".",children:Object(u.jsx)("h1",{className:"title-page",children:" IG Viral Content Finder"})})]}),Object(u.jsx)("head",{children:Object(u.jsx)("title",{children:"IG Viral Bot"})})]})},d=n(6),b=function(e){var t=e.account,n=e.onDelete;return Object(u.jsx)("center",{children:Object(u.jsx)("div",{class:"accountDiv",children:Object(u.jsxs)("h2",{class:"account",children:["@",t.text.toLowerCase(),Object(u.jsx)(d.c,{onClick:function(){return n(t.id)},style:{color:"#ff6961",cursor:"pointer"}})]})})})},h=function(e){var t=e.accounts,n=e.onDelete;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)(b,{onDelete:n,account:e},e.id)}))})},p=function(e){var t=e.newAccount,n=e.accountExists,r=Object(c.useState)(""),s=Object(l.a)(r,2),a=s[0],i=s[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"add-account",onSubmit:function(e){if(console.log({text:a}),e.preventDefault(),a){if(n({text:a}))return alert(a.toLowerCase()+" has already been added."),void i("");t({text:a}),i("")}else alert("Please type a username")},children:[Object(u.jsx)("input",{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"type an account name",className:"add-account-sb",value:a,type:"text",onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("input",{className:"add-account-submit",type:"submit",value:"Add"})]})})},m=n(7),x=n.n(m),O=n(10),f=n(11),v=n.n(f),g=function(e){var t=e.accounts,n=e.setForm,c=e.setLoading,r=e.setPostVisible,s=e.setViralPosts,a=e.setAccounts;function i(e){return new Promise((function(t){return setTimeout(t,e)}))}function o(e){return l.apply(this,arguments)}function l(){return(l=Object(O.a)(x.a.mark((function e(t){var n,c,r,s,a,o,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(3e3),e.next=4,fetch("https://api.allorigins.win/raw?url=https://www.instagram.com/"+t+"/channel/?__a=1");case 4:return n=e.sent,e.next=7,n.json();case 7:for(c=e.sent,r=c.graphql.user.edge_owner_to_timeline_media.edges,s=[],a=0,o=0;o<12;o++)a+=r[o].node.edge_media_preview_like.count,s.push({id:"www.instagram.com/p/"+r[o].node.shortcode,likes:r[o].node.edge_media_preview_like.count,imgURL:r[o].node.display_url,comments:r[o].node.edge_media_to_comment.count,time:r[o].node.taken_at_timestamp,user:t});for(a/=12,s=s.filter((function(e){return 1-a/e.likes>.5})),l=0;l<s.length;l++)s[l].viralScore=Math.round(100*(1-a/s[l].likes));return e.abrupt("return",s);case 18:e.prev=18,e.t0=e.catch(0),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}function j(e,t){return e.viralScore>t.viralScore?-1:e.viralScore<t.viralScore?1:0}function d(){return(d=Object(O.a)(x.a.mark((function e(){var i,l,u,d;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!1),c(!0),i=[],l=0;case 4:if(!(l<t.length)){e.next=12;break}return e.next=7,o(t[l].text.toLowerCase());case 7:u=e.sent,i=i.concat(u);case 9:l++,e.next=4;break;case 12:i.sort(j),d=0;case 14:if(!(d<i.length)){e.next=30;break}if(e.prev=15,void 0!==typeof i[d]&&i[d].hasOwnProperty("likes")&&i[d].hasOwnProperty("viralScore")&&i[d].hasOwnProperty("imgURL")&&i[d].hasOwnProperty("id")){e.next=18;break}return e.abrupt("continue",27);case 18:e.next=27;break;case 20:return e.prev=20,e.t0=e.catch(15),c(!1),v()("That wasn't supposed to happen!","One of your accounts is either private or misspelled, please re-enter the usernames and try again.","error"),a([]),n(!0),e.abrupt("return");case 27:d++,e.next=14;break;case 30:s(i),c(!1),i.length>=1?r(!0):(c(!1),a([]),n(!0),v()("uh oh","No posts found, please add more accounts or try again later.","error"));case 33:case"end":return e.stop()}}),e,null,[[15,20]])})))).apply(this,arguments)}return Object(u.jsx)("div",{className:"btnDiv",children:Object(u.jsx)("button",{id:t.length>0?"analyze1":"analyze2",onClick:function(){return function(){return d.apply(this,arguments)}()},children:"Find Content"})})},w=n(19),k=function(){return Object(u.jsx)("div",{id:"loadingDiv",class:"addMargin",children:Object(u.jsx)(w.ClipLoader,{size:"70px",color:"#35B999"})})},N=function(e){var t=e.post;return Object(u.jsx)("center",{children:Object(u.jsxs)("div",{className:"postDiv",children:[Object(u.jsxs)("div",{className:"textDiv",children:[Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("h2",{className:"postScore rowElement",children:[t.viralScore,"%"]})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("h2",{className:"userName rowElement",children:["@",t.user]})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("h2",{className:"postLikes rowElement",children:[Object(u.jsx)(d.a,{className:"iconRow"}),t.likes]})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("h2",{className:"comments rowElement",children:[Object(u.jsx)(d.b,{className:"iconRow"}),t.comments]})})]}),Object(u.jsx)("img",{className:"postIMG",alt:t.id,src:t.imgURL}),Object(u.jsx)("h2",{className:"postLink",children:Object(u.jsx)("a",{className:"link",target:"_blank",rel:"noreferrer",href:"https://"+t.id,children:"Instagram Link"})})]})})},y=function(e){var t=e.postList;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)(N,{post:e})}))})};var L=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),a=Object(l.a)(s,2),d=a[0],b=a[1],m=Object(c.useState)(!1),x=Object(l.a)(m,2),O=x[0],f=x[1],v=Object(c.useState)(!1),w=Object(l.a)(v,2),N=w[0],L=w[1],_=Object(c.useState)([]),C=Object(l.a)(_,2),S=C[0],D=C[1];return Object(u.jsxs)("div",{className:"mainDiv",children:[Object(u.jsx)(j,{}),d&&Object(u.jsx)(p,{accountExists:function(e){for(var t=0;t<n.length;t++)if(e.text.toLowerCase()===n[t].text)return!0;return!1},newAccount:function(e){var t=Math.floor(1e4*Math.random())+1;e.text=e.text.toLowerCase();var c=Object(o.a)({id:t},e);r([c].concat(Object(i.a)(n)))}}),n.length>0&&d&&Object(u.jsx)(h,{accounts:n,onDelete:function(e){r(n.filter((function(t){return t.id!==e})))}}),d&&Object(u.jsx)(g,{setAccounts:r,accounts:n,setForm:b,setLoading:f,setViralPosts:D,setPostVisible:L}),O&&Object(u.jsx)(k,{}),N&&Object(u.jsx)(y,{postList:S})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),_()}},[[54,1,2]]]);
//# sourceMappingURL=main.410cc24f.chunk.js.map