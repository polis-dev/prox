(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{4488:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setup",function(){return r(2859)}])},2859:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return g}});var t=r(7568),o=r(603),a=r(4051),l=r.n(a),s=r(5893),i=r(7294),c=r(3156),u=r(5861),f=r(7357),h=r(460),p=r.n(h),d=r(8325),m=(r(5433),r(4277),r(2427),r(3321)),Z=r(2844),x=r(5730);function g(){var e=(0,o.Z)(i.useState(""),2),n=e[0],r=e[1],a=(0,o.Z)(i.useState(""),2),h=a[0],g=a[1],v=i.useCallback((0,t.Z)(l().mark((function e(){var n,t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,r(JSON.stringify(t,null,2)),g("");case 8:case"end":return e.stop()}}),e)}))),[]);i.useEffect((function(){v()}),[]);var y=i.useCallback((function(e){r(e)}),[]),b=i.useCallback((function(e){return(0,d.highlight)(e,d.languages.json)}),[]),k=i.useCallback(function(){var e=(0,t.Z)(l().mark((function e(r){var t,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Request("/load",{method:"POST",headers:{"Content-Type":"application/json"},body:n}),e.next=3,fetch(t);case 3:return o=e.sent,e.next=6,o.text();case 6:g("Save success!");case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(c.Z,{maxWidth:"lg",children:(0,s.jsxs)(f.Z,{sx:{my:4},children:[(0,s.jsx)(u.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"Caddy Server Load"}),(0,s.jsxs)(u.Z,{variant:"p",component:"p",gutterBottom:!0,children:[(0,s.jsx)(m.Z,{variant:"outlined",onClick:v,children:"Reset"}),"    ",(0,s.jsx)(m.Z,{variant:"contained",onClick:k,children:"Save"})]}),(0,s.jsx)(u.Z,{variant:"p",component:"p",gutterBottom:!0,children:(0,s.jsx)(p(),{onValueChange:y,value:n,highlight:b,padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:16}})}),(0,s.jsx)(u.Z,{variant:"p",component:"p",gutterBottom:!0,children:h}),(0,s.jsx)(x.Z,{})]})})]})}},2844:function(e,n,r){"use strict";r.d(n,{Z:function(){return L}});var t=r(603),o=r(7297),a=r(5944),l=r(917),s=r(7294),i=r(2293),c=r(7357),u=r(155),f=r(3946),h=r(5861),p=r(517),d=r(326),m=r(3156),Z=r(3321),x=r(5819),g=r(3960),v=r(4924),y=r(6042),b=r(9534),k=r(5893),j=r(5697),w=r.n(j),C=r(6010),N=r(1163),S=r(1664),O=r.n(S),_=r(3795),T=(0,r(948).ZP)("a")({}),A=s.forwardRef((function(e,n){var r=e.to,t=e.linkAs,o=e.replace,a=e.scroll,l=e.shallow,s=e.prefetch,i=e.locale,c=(0,b.Z)(e,["to","linkAs","replace","scroll","shallow","prefetch","locale"]);return(0,k.jsx)(O(),{href:r,prefetch:s,as:t,replace:o,scroll:a,shallow:l,passHref:!0,locale:i,children:(0,k.jsx)(T,(0,y.Z)({ref:n},c))})}));A.propTypes={href:w().any,linkAs:w().oneOfType([w().object,w().string]),locale:w().string,passHref:w().bool,prefetch:w().bool,replace:w().bool,scroll:w().bool,shallow:w().bool,to:w().oneOfType([w().object,w().string]).isRequired};var E=s.forwardRef((function(e,n){var r=e.activeClassName,t=void 0===r?"active":r,o=e.as,a=e.className,l=e.href,s=e.linkAs,i=e.locale,c=e.noLinkStyle,u=e.prefetch,f=e.replace,h=(e.role,e.scroll),p=e.shallow,d=(0,b.Z)(e,["activeClassName","as","className","href","linkAs","locale","noLinkStyle","prefetch","replace","role","scroll","shallow"]),m=(0,N.useRouter)(),Z="string"===typeof l?l:l.pathname,x=(0,C.Z)(a,(0,v.Z)({},t,m.pathname===Z&&t));if("string"===typeof l&&(0===l.indexOf("http")||0===l.indexOf("mailto:")))return c?(0,k.jsx)(T,(0,y.Z)({className:x,href:l,ref:n},d)):(0,k.jsx)(_.Z,(0,y.Z)({className:x,href:l,ref:n},d));var g={to:l,linkAs:s||o,replace:f,scroll:h,shallow:p,prefetch:u,locale:i};return c?(0,k.jsx)(A,(0,y.Z)({className:x,ref:n},g,d)):(0,k.jsx)(_.Z,(0,y.Z)({component:A,className:x,ref:n},g,d))}));E.propTypes={activeClassName:w().string,as:w().oneOfType([w().object,w().string]),className:w().string,href:w().any,linkAs:w().oneOfType([w().object,w().string]),locale:w().string,noLinkStyle:w().bool,prefetch:w().bool,replace:w().bool,role:w().string,scroll:w().bool,shallow:w().bool};var P=E;function B(){var e=(0,o.Z)(["\n                      color: inherit;\n                    "]);return B=function(){return e},e}function F(){var e=(0,o.Z)(["\n                    color: inherit;\n                  "]);return F=function(){return e},e}var G=[{name:"Upstream",href:"/upstream"},{name:"PKI",href:"/pki-view"},{name:"Load",href:"/setup"},{name:"Adapt",href:"/convert-config"},{name:"Metrics",href:"/monitor"}],L=function(){var e=(0,t.Z)(s.useState(null),2),n=e[0],r=e[1],o=function(){r(null)};return(0,a.tZ)(i.Z,{position:"static",children:(0,a.tZ)(m.Z,{maxWidth:"lg",children:(0,a.BX)(u.Z,{disableGutters:!0,children:[(0,a.tZ)(g.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),(0,a.tZ)(h.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Caddy Config"}),(0,a.BX)(c.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[(0,a.tZ)(f.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:(0,a.tZ)(d.Z,{})}),(0,a.tZ)(p.Z,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:o,sx:{display:{xs:"block",md:"none"}},children:G.map((function(e){return(0,a.tZ)(x.Z,{onClick:o,children:(0,a.tZ)(P,{href:e.href,css:(0,l.iv)(B()),children:(0,a.tZ)(h.Z,{textAlign:"center",children:e.name})})},e.name)}))})]}),(0,a.tZ)(g.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),(0,a.tZ)(h.Z,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Caddy Config"}),(0,a.tZ)(c.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:G.map((function(e){return(0,a.tZ)(Z.Z,{onClick:o,sx:{my:2,color:"white",display:"block"},children:(0,a.tZ)(P,{href:e.href,css:(0,l.iv)(F()),children:e.name})},e.name)}))})]})})})}},5730:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(5893),o=(r(7294),r(5861)),a=r(3795);function l(){return(0,t.jsxs)(o.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,t.jsx)(a.Z,{color:"inherit",href:"https://github.com/gsmlg-dev/",children:"GSMLG-DEV"})," ",(new Date).getFullYear(),"."]})}},4277:function(){Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json}},function(e){e.O(0,[960,150,774,888,179],(function(){return n=4488,e(e.s=n);var n}));var n=e.O();_N_E=n}]);