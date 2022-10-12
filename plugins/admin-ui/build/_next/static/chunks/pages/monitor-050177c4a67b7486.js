(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{809:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/monitor",function(){return r(930)}])},930:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return P}});var t=r(7568),l=r(6042),a=r(9396),i=r(9534),o=r(603),c=r(4051),s=r.n(c),h=r(5893),d=r(7294),u=r(3156),f=r(5861),p=r(7357),x=r(1703),m=r(44),Z=r(2844),v=r(7058),b=r(3841),j=r(5819),g=r(4054),y=r(9560),w=r(7918),k=r(7906),C=r(295),N=r(3252),S=r(3184),O=r(3816),_=function(e){var n=e.split(/\n|\r\n/),r={};return n.forEach((function(e){if(!/(^\s+)?#/.test(e)){var n=(0,o.Z)(e.split(/\s+/),2),t=n[0],l=n[1];t&&(r[t]=Number(l))}})),r};function W(e){var n=e.children,r=e.value,t=e.index,o=(0,i.Z)(e,["children","value","index"]);return(0,h.jsx)("div",(0,a.Z)((0,l.Z)({role:"tabpanel",hidden:r!==t,id:"vertical-tabpanel-".concat(t),"aria-labelledby":"vertical-tab-".concat(t)},o),{children:r===t&&(0,h.jsx)(p.Z,{sx:{p:3},children:(0,h.jsx)(f.Z,{children:n})})}))}function A(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}var T={PaperProps:{style:{maxHeight:224,width:1e3}}};function E(e,n){return{fontWeight:-1===n.indexOf(e)?"normal":"500"}}function P(){var e=(0,o.Z)(d.useState(""),2),n=e[0],r=e[1],a=(0,o.Z)(d.useState([]),2),i=a[0],c=a[1],P=(0,o.Z)(d.useState(0),2),M=P[0],R=P[1],G=d.useCallback((0,t.Z)(s().mark((function e(){var n,t,l,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/metrics");case 2:return n=e.sent,e.next=5,n.text();case 5:t=e.sent,r(t),l=_(t),a=[{time:Date.now(),data:l}].concat(i).slice(0,240),c(a);case 10:case"end":return e.stop()}}),e)}))),[i]);d.useEffect((function(){G();var e=setInterval((function(){G()}),3e4);return function(){return clearInterval(e)}}),[]);var I,B=(0,o.Z)(d.useState([]),2),D=B[0],L=B[1],X=i[0],z=Object.keys(null!==(I=null===X||void 0===X?void 0:X.data)&&void 0!==I?I:{});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Z.Z,{}),(0,h.jsx)(u.Z,{maxWidth:"lg",children:(0,h.jsxs)(p.Z,{sx:{my:4},children:[(0,h.jsx)(f.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"Caddy Server Metrics"}),(0,h.jsxs)(p.Z,{sx:{flexGrow:1,bgcolor:"background.paper",display:"flex",height:224},children:[(0,h.jsxs)(x.Z,{orientation:"vertical",variant:"scrollable",value:M,onChange:function(e,n){R(n)},"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider",minWidth:100},children:[(0,h.jsx)(m.Z,(0,l.Z)({label:"Raw"},A(0))),(0,h.jsx)(m.Z,(0,l.Z)({label:"Parsed"},A(1))),(0,h.jsx)(m.Z,(0,l.Z)({label:"Metric"},A(2)))]}),(0,h.jsx)(W,{value:M,index:0,children:(0,h.jsx)("pre",{children:n})}),(0,h.jsx)(W,{value:M,index:1,children:(0,h.jsx)("pre",{children:JSON.stringify(i[0],null,4)})}),(0,h.jsxs)(W,{value:M,index:2,children:[(0,h.jsx)("div",{children:(0,h.jsxs)(g.Z,{sx:{m:1,width:800},children:[(0,h.jsx)(b.Z,{id:"demo-multiple-chip-label",children:"Select Metric"}),(0,h.jsx)(y.Z,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,value:D,onChange:function(e){var n=e.target.value;L("string"===typeof n?n.split(","):n)},input:(0,h.jsx)(v.Z,{id:"select-multiple-chip",label:"Chip"}),renderValue:function(e){return(0,h.jsx)(p.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return(0,h.jsx)(w.Z,{label:e},e)}))})},MenuProps:T,children:z.map((function(e){return(0,h.jsx)(j.Z,{value:e,style:E(e,D),children:e},e)}))})]})}),(0,h.jsxs)(k.Z,{sx:{minWidth:800},"aria-label":"simple table",children:[(0,h.jsx)(S.Z,{children:(0,h.jsxs)(O.Z,{children:[(0,h.jsx)(N.Z,{children:"time"}),D.map((function(e){return(0,h.jsx)(N.Z,{children:e},"m-".concat(e))}))]})}),(0,h.jsx)(C.Z,{children:i.map((function(e){return(0,h.jsxs)(O.Z,{children:[(0,h.jsx)(N.Z,{children:new Date(e.time).toISOString()}),D.map((function(n){return(0,h.jsx)(N.Z,{children:e.data[n]},"t-".concat(e.time,"-").concat(n))}))]},"t-".concat(e.time))}))})]})]})]})]})})]})}},2844:function(e,n,r){"use strict";r.d(n,{Z:function(){return G}});var t=r(603),l=r(7297),a=r(5944),i=r(917),o=r(7294),c=r(2293),s=r(7357),h=r(155),d=r(3946),u=r(5861),f=r(517),p=r(326),x=r(3156),m=r(3321),Z=r(5819),v=r(3960),b=r(4924),j=r(6042),g=r(9534),y=r(5893),w=r(5697),k=r.n(w),C=r(6010),N=r(1163),S=r(1664),O=r.n(S),_=r(3795),W=(0,r(948).ZP)("a")({}),A=o.forwardRef((function(e,n){var r=e.to,t=e.linkAs,l=e.replace,a=e.scroll,i=e.shallow,o=e.prefetch,c=e.locale,s=(0,g.Z)(e,["to","linkAs","replace","scroll","shallow","prefetch","locale"]);return(0,y.jsx)(O(),{href:r,prefetch:o,as:t,replace:l,scroll:a,shallow:i,passHref:!0,locale:c,children:(0,y.jsx)(W,(0,j.Z)({ref:n},s))})}));A.propTypes={href:k().any,linkAs:k().oneOfType([k().object,k().string]),locale:k().string,passHref:k().bool,prefetch:k().bool,replace:k().bool,scroll:k().bool,shallow:k().bool,to:k().oneOfType([k().object,k().string]).isRequired};var T=o.forwardRef((function(e,n){var r=e.activeClassName,t=void 0===r?"active":r,l=e.as,a=e.className,i=e.href,o=e.linkAs,c=e.locale,s=e.noLinkStyle,h=e.prefetch,d=e.replace,u=(e.role,e.scroll),f=e.shallow,p=(0,g.Z)(e,["activeClassName","as","className","href","linkAs","locale","noLinkStyle","prefetch","replace","role","scroll","shallow"]),x=(0,N.useRouter)(),m="string"===typeof i?i:i.pathname,Z=(0,C.Z)(a,(0,b.Z)({},t,x.pathname===m&&t));if("string"===typeof i&&(0===i.indexOf("http")||0===i.indexOf("mailto:")))return s?(0,y.jsx)(W,(0,j.Z)({className:Z,href:i,ref:n},p)):(0,y.jsx)(_.Z,(0,j.Z)({className:Z,href:i,ref:n},p));var v={to:i,linkAs:o||l,replace:d,scroll:u,shallow:f,prefetch:h,locale:c};return s?(0,y.jsx)(A,(0,j.Z)({className:Z,ref:n},v,p)):(0,y.jsx)(_.Z,(0,j.Z)({component:A,className:Z,ref:n},v,p))}));T.propTypes={activeClassName:k().string,as:k().oneOfType([k().object,k().string]),className:k().string,href:k().any,linkAs:k().oneOfType([k().object,k().string]),locale:k().string,noLinkStyle:k().bool,prefetch:k().bool,replace:k().bool,role:k().string,scroll:k().bool,shallow:k().bool};var E=T;function P(){var e=(0,l.Z)(["\n                      color: inherit;\n                    "]);return P=function(){return e},e}function M(){var e=(0,l.Z)(["\n                    color: inherit;\n                  "]);return M=function(){return e},e}var R=[{name:"Upstream",href:"/upstream"},{name:"PKI",href:"/pki-view"},{name:"Load",href:"/setup"},{name:"Adapt",href:"/convert-config"},{name:"Metrics",href:"/monitor"}],G=function(){var e=(0,t.Z)(o.useState(null),2),n=e[0],r=e[1],l=function(){r(null)};return(0,a.tZ)(c.Z,{position:"static",children:(0,a.tZ)(x.Z,{maxWidth:"lg",children:(0,a.BX)(h.Z,{disableGutters:!0,children:[(0,a.tZ)(v.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),(0,a.tZ)(u.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Caddy Config"}),(0,a.BX)(s.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[(0,a.tZ)(d.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:(0,a.tZ)(p.Z,{})}),(0,a.tZ)(f.Z,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:l,sx:{display:{xs:"block",md:"none"}},children:R.map((function(e){return(0,a.tZ)(Z.Z,{onClick:l,children:(0,a.tZ)(E,{href:e.href,css:(0,i.iv)(P()),children:(0,a.tZ)(u.Z,{textAlign:"center",children:e.name})})},e.name)}))})]}),(0,a.tZ)(v.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),(0,a.tZ)(u.Z,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Caddy Config"}),(0,a.tZ)(s.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:R.map((function(e){return(0,a.tZ)(m.Z,{onClick:l,sx:{my:2,color:"white",display:"block"},children:(0,a.tZ)(E,{href:e.href,css:(0,i.iv)(M()),children:e.name})},e.name)}))})]})})})}}},function(e){e.O(0,[960,76,774,888,179],(function(){return n=809,e(e.s=n);var n}));var n=e.O();_N_E=n}]);