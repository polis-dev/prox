(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{6242:function(e,n,r){"use strict";r.d(n,{Z:function(){return Z}});var t=r(7462),o=r(3366),a=r(7294),i=r(6010),s=r(4780),c=r(948),l=r(1657),d=r(5113),f=r(4867);function u(e){return(0,f.Z)("MuiCard",e)}(0,r(1588).Z)("MuiCard",["root"]);var p=r(5893);const m=["className","raised"],h=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"})));var Z=a.forwardRef((function(e,n){const r=(0,l.Z)({props:e,name:"MuiCard"}),{className:a,raised:c=!1}=r,d=(0,o.Z)(r,m),f=(0,t.Z)({},r,{raised:c}),Z=(e=>{const{classes:n}=e;return(0,s.Z)({root:["root"]},u,n)})(f);return(0,p.jsx)(h,(0,t.Z)({className:(0,i.Z)(Z.root,a),elevation:c?8:void 0,ref:n,ownerState:f},d))}))},4267:function(e,n,r){"use strict";r.d(n,{Z:function(){return h}});var t=r(7462),o=r(3366),a=r(7294),i=r(6010),s=r(4780),c=r(948),l=r(1657),d=r(4867);function f(e){return(0,d.Z)("MuiCardContent",e)}(0,r(1588).Z)("MuiCardContent",["root"]);var u=r(5893);const p=["className","component"],m=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var h=a.forwardRef((function(e,n){const r=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:a,component:c="div"}=r,d=(0,o.Z)(r,p),h=(0,t.Z)({},r,{component:c}),Z=(e=>{const{classes:n}=e;return(0,s.Z)({root:["root"]},f,n)})(h);return(0,u.jsx)(m,(0,t.Z)({as:c,className:(0,i.Z)(Z.root,a),ownerState:h,ref:n},d))}))},7296:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pki-view",function(){return r(6028)}])},6028:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return A}});var t=r(7568),o=r(6042),a=r(603),i=r(4051),s=r.n(i),c=r(5893),l=r(7294),d=r(3156),f=r(5861),u=r(7357),p=r(2844),m=r(5730),h=r(6242),Z=r(3366),x=r(7462),v=r(6010),g=r(4780),b=r(948),j=r(1657),y=r(4867);function w(e){return(0,y.Z)("MuiCardActions",e)}(0,r(1588).Z)("MuiCardActions",["root","spacing"]);const C=["disableSpacing","className"],k=(0,b.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,!r.disableSpacing&&n.spacing]}})((({ownerState:e})=>(0,x.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var N=l.forwardRef((function(e,n){const r=(0,j.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:t=!1,className:o}=r,a=(0,Z.Z)(r,C),i=(0,x.Z)({},r,{disableSpacing:t}),s=(e=>{const{classes:n,disableSpacing:r}=e,t={root:["root",!r&&"spacing"]};return(0,g.Z)(t,w,n)})(i);return(0,c.jsx)(k,(0,x.Z)({className:(0,v.Z)(s.root,o),ownerState:i,ref:n},a))})),S=r(4267),_=r(3321),M=r(7195);function R(e){var n=e.id,r=e.name,t=e.root_common_name,o=e.intermediate_common_name,i=e.root_certificate,s=e.intermediate_certificate,d=(0,a.Z)(l.useState(!1),2),p=d[0],m=d[1],Z=function(e){return function(){return m(e)}};return(0,c.jsxs)(h.Z,{sx:{minWidth:275},children:[(0,c.jsxs)(S.Z,{children:[(0,c.jsxs)(f.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:["ID: ",n]}),(0,c.jsxs)(f.Z,{variant:"h5",component:"div",children:["Name: ",r]}),(0,c.jsxs)(f.Z,{variant:"body2",children:["Root CommonName:",(0,c.jsx)("br",{}),t]}),(0,c.jsxs)(f.Z,{variant:"body2",children:["Intermediate CommonName:",(0,c.jsx)("br",{}),o]})]}),(0,c.jsxs)(N,{children:[(0,c.jsx)(_.Z,{size:"small",onClick:Z("root"),children:"Show Root"}),(0,c.jsx)(_.Z,{size:"small",onClick:Z("intermediate"),children:"Show Intermediate"})]}),(0,c.jsx)(M.Z,{open:!1!==p,onClose:function(){return m(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,c.jsxs)(u.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:720,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[(0,c.jsx)(f.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:p}),(0,c.jsx)(f.Z,{id:"modal-modal-description",sx:{mt:2},component:"pre",children:"root"===p?i:s})]})})]})}function A(){var e=(0,a.Z)(l.useState([]),2),n=e[0],r=e[1];return l.useEffect((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n,t,o,a,i,c,l,d;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/apps/pki/certificate_authorities");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,o=Object.keys(t),a=[],i=0;case 9:if(!(i<o.length)){e.next=21;break}return c=o[i],e.next=13,fetch("/pki/ca/".concat(c));case 13:return l=e.sent,e.next=16,l.json();case 16:d=e.sent,a.push(d);case 18:i+=1,e.next=9;break;case 21:r(a);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p.Z,{}),(0,c.jsx)(d.Z,{maxWidth:"lg",children:(0,c.jsxs)(u.Z,{sx:{my:4},children:[(0,c.jsx)(f.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"Caddy Server PKI"}),(0,c.jsx)(f.Z,{variant:"p",component:"p",gutterBottom:!0,children:n.map((function(e){return(0,c.jsx)(R,(0,o.Z)({},e))}))}),(0,c.jsx)(m.Z,{})]})})]})}},2844:function(e,n,r){"use strict";r.d(n,{Z:function(){return W}});var t=r(603),o=r(7297),a=r(5944),i=r(917),s=r(7294),c=r(2293),l=r(7357),d=r(155),f=r(3946),u=r(5861),p=r(517),m=r(326),h=r(3156),Z=r(3321),x=r(5819),v=r(3960),g=r(4924),b=r(6042),j=r(9534),y=r(5893),w=r(5697),C=r.n(w),k=r(6010),N=r(1163),S=r(1664),_=r.n(S),M=r(3795),R=(0,r(948).ZP)("a")({}),A=s.forwardRef((function(e,n){var r=e.to,t=e.linkAs,o=e.replace,a=e.scroll,i=e.shallow,s=e.prefetch,c=e.locale,l=(0,j.Z)(e,["to","linkAs","replace","scroll","shallow","prefetch","locale"]);return(0,y.jsx)(_(),{href:r,prefetch:s,as:t,replace:o,scroll:a,shallow:i,passHref:!0,locale:c,children:(0,y.jsx)(R,(0,b.Z)({ref:n},l))})}));A.propTypes={href:C().any,linkAs:C().oneOfType([C().object,C().string]),locale:C().string,passHref:C().bool,prefetch:C().bool,replace:C().bool,scroll:C().bool,shallow:C().bool,to:C().oneOfType([C().object,C().string]).isRequired};var O=s.forwardRef((function(e,n){var r=e.activeClassName,t=void 0===r?"active":r,o=e.as,a=e.className,i=e.href,s=e.linkAs,c=e.locale,l=e.noLinkStyle,d=e.prefetch,f=e.replace,u=(e.role,e.scroll),p=e.shallow,m=(0,j.Z)(e,["activeClassName","as","className","href","linkAs","locale","noLinkStyle","prefetch","replace","role","scroll","shallow"]),h=(0,N.useRouter)(),Z="string"===typeof i?i:i.pathname,x=(0,k.Z)(a,(0,g.Z)({},t,h.pathname===Z&&t));if("string"===typeof i&&(0===i.indexOf("http")||0===i.indexOf("mailto:")))return l?(0,y.jsx)(R,(0,b.Z)({className:x,href:i,ref:n},m)):(0,y.jsx)(M.Z,(0,b.Z)({className:x,href:i,ref:n},m));var v={to:i,linkAs:s||o,replace:f,scroll:u,shallow:p,prefetch:d,locale:c};return l?(0,y.jsx)(A,(0,b.Z)({className:x,ref:n},v,m)):(0,y.jsx)(M.Z,(0,b.Z)({component:A,className:x,ref:n},v,m))}));O.propTypes={activeClassName:C().string,as:C().oneOfType([C().object,C().string]),className:C().string,href:C().any,linkAs:C().oneOfType([C().object,C().string]),locale:C().string,noLinkStyle:C().bool,prefetch:C().bool,replace:C().bool,role:C().string,scroll:C().bool,shallow:C().bool};var T=O;function E(){var e=(0,o.Z)(["\n                      color: inherit;\n                    "]);return E=function(){return e},e}function P(){var e=(0,o.Z)(["\n                    color: inherit;\n                  "]);return P=function(){return e},e}var B=[{name:"Upstream",href:"/upstream"},{name:"PKI",href:"/pki-view"},{name:"Load",href:"/setup"},{name:"Adapt",href:"/convert-config"},{name:"Metrics",href:"/monitor"}],W=function(){var e=(0,t.Z)(s.useState(null),2),n=e[0],r=e[1],o=function(){r(null)};return(0,a.tZ)(c.Z,{position:"static",children:(0,a.tZ)(h.Z,{maxWidth:"lg",children:(0,a.BX)(d.Z,{disableGutters:!0,children:[(0,a.tZ)(v.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),(0,a.tZ)(u.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Caddy Config"}),(0,a.BX)(l.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[(0,a.tZ)(f.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:(0,a.tZ)(m.Z,{})}),(0,a.tZ)(p.Z,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:o,sx:{display:{xs:"block",md:"none"}},children:B.map((function(e){return(0,a.tZ)(x.Z,{onClick:o,children:(0,a.tZ)(T,{href:e.href,css:(0,i.iv)(E()),children:(0,a.tZ)(u.Z,{textAlign:"center",children:e.name})})},e.name)}))})]}),(0,a.tZ)(v.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),(0,a.tZ)(u.Z,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Caddy Config"}),(0,a.tZ)(l.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:B.map((function(e){return(0,a.tZ)(Z.Z,{onClick:o,sx:{my:2,color:"white",display:"block"},children:(0,a.tZ)(T,{href:e.href,css:(0,i.iv)(P()),children:e.name})},e.name)}))})]})})})}},5730:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(5893),o=(r(7294),r(5861)),a=r(3795);function i(){return(0,t.jsxs)(o.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,t.jsx)(a.Z,{color:"inherit",href:"https://github.com/gsmlg-dev/",children:"GSMLG-DEV"})," ",(new Date).getFullYear(),"."]})}}},function(e){e.O(0,[960,774,888,179],(function(){return n=7296,e(e.s=n);var n}));var n=e.O();_N_E=n}]);