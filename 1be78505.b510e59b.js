(window.webpackJsonp=window.webpackJsonp||[]).push([[10,54],{108:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(121),i=n(134),l=n(24),c=n(292),s=n(2),u=n(142),d=n(397),f=n(399),h=n(400),p=n(401),m=n(398),g=n(293),v=n(341),b=n(61),y=n.n(b);const k=(e,t)=>"link"===e.type?((e,t)=>{const n=e=>e.endsWith("/")?e:e+"/";return n(e)===n(t)})(e.href,t):"category"===e.type&&e.items.some((e=>k(e,t)));function w({item:e,onItemClick:t,collapsible:n,activePath:o,...i}){const{items:l,label:c}=e,d=k(e,o),f=function(e){const t=Object(r.useRef)(e);return Object(r.useEffect)((()=>{t.current=e}),[e]),t.current}(d),[h,p]=Object(r.useState)((()=>!!n&&(!d&&e.collapsed)));Object(r.useEffect)((()=>{d&&!f&&h&&p(!1)}),[d,f,h]);const m=Object(r.useCallback)((e=>{e.preventDefault(),p((e=>!e))}),[p]);return 0===l.length?null:a.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":h}),key:c},a.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":n,"menu__link--active":n&&d,[y.a.menuLinkText]:!n}),onClick:n?m:void 0,href:n?"#!":void 0},i),c),a.a.createElement("ul",{className:"menu__list"},l.map((e=>a.a.createElement(C,{tabIndex:h?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:n,activePath:o})))))}function j({item:e,onItemClick:t,activePath:n,collapsible:r,...o}){const{href:i,label:l}=e,c=k(e,n);return a.a.createElement("li",{className:"menu__list-item",key:l},a.a.createElement(g.a,Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--active":c}),to:i},Object(v.a)(i)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function C(e){switch(e.item.type){case"category":return a.a.createElement(w,e);case"link":default:return a.a.createElement(j,e)}}var S=function({path:e,sidebar:t,sidebarCollapsible:n=!0}){const[o,l]=Object(r.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:c="",hideOnScroll:v=!1}={}}={}}={},isClient:b}=Object(i.a)(),{logoLink:k,logoLinkProps:w,logoImageUrl:j,logoAlt:S}=Object(p.a)(),{isAnnouncementBarClosed:O}=Object(d.a)(),{scrollY:x}=Object(m.a)();Object(f.a)(o);const E=Object(h.a)();return Object(r.useEffect)((()=>{E===h.b.desktop&&l(!1)}),[E]),a.a.createElement("div",{className:Object(u.a)(y.a.sidebar,{[y.a.sidebarWithHideableNavbar]:v})},v&&a.a.createElement(g.a,Object(s.a)({tabIndex:-1,className:y.a.sidebarLogo,to:k},w),null!=j&&a.a.createElement("img",{key:b,src:j,alt:S}),null!=c&&a.a.createElement("strong",null,c)),a.a.createElement("div",{className:Object(u.a)("menu","menu--responsive",y.a.menu,{"menu--show":o,[y.a.menuWithAnnouncementBar]:!O&&0===x})},a.a.createElement("button",{"aria-label":o?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{l(!o)}},o?a.a.createElement("span",{className:Object(u.a)(y.a.sidebarMenuIcon,y.a.sidebarMenuCloseIcon)},"\xd7"):a.a.createElement("svg",{"aria-label":"Menu",className:y.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},a.a.createElement("title",null,"Menu"),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.a.createElement("ul",{className:"menu__list"},t.map((t=>a.a.createElement(C,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),l(!1)},collapsible:n,activePath:e}))))))},O=n(390),x=n(394),E=n(342),N=n(332),T=n(66),R=n.n(T);function z({version:e,isLast:t}){const n=t?[e,"latest"]:[e];return a.a.createElement(N.a,null,a.a.createElement("meta",{name:"docsearch:version",content:n.join(",")}))}function L({currentDocRoute:e,versionMetadata:t,children:n}){var r,l;const{siteConfig:s,isClient:u}=Object(i.a)(),{permalinkToSidebar:d,docsSidebars:f,version:h,isLast:p}=t,m=d[e.path],g=f[m];return a.a.createElement(a.a.Fragment,null,a.a.createElement(z,{version:h,isLast:p}),a.a.createElement(c.a,{key:u},a.a.createElement("div",{className:R.a.docPage},g&&a.a.createElement("div",{className:R.a.docSidebarContainer,role:"complementary"},a.a.createElement(S,{key:m,sidebar:g,path:e.path,sidebarCollapsible:null===(r=null===(l=s.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===r||r})),a.a.createElement("main",{className:R.a.docMainContainer},a.a.createElement(o.a,{components:O.a},n)))))}t.default=function(e){const{route:{routes:t},versionMetadata:n,location:r}=e,o=t.find((e=>Object(E.matchPath)(r.pathname,e)));return o?a.a.createElement(L,{currentDocRoute:o,versionMetadata:n},Object(l.a)(t)):a.a.createElement(x.default,e)}},120:function(e,t,n){"use strict";n.d(t,"c",(function(){return r.a})),n.d(t,"e",(function(){return a.a})),n.d(t,"f",(function(){return o.a})),n.d(t,"g",(function(){return i.a})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c.a})),n.d(t,"d",(function(){return h})),n.d(t,"h",(function(){return p.a})),n.d(t,"j",(function(){return m.a})),n.d(t,"k",(function(){return g.a})),n.d(t,"l",(function(){return v.a})),n.d(t,"i",(function(){return b})),n.d(t,"m",(function(){return y.a})),n.d(t,"n",(function(){return k.a}));var r=n(150),a=n(151),o=n(304),i=n(127);function l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce((function(e,t){return t(e)}),e)}var c=n(305),s=n(125),u=n(152),d=n(126);function f(e,t,n){return{c:e.c+t,r:e.r+n}}function h(e,t,n,o){var l=e.utils.aoa_to_sheet([]),c=Object(a.a)(n)+1,h={c:0,r:0};function p(t,n){e.utils.sheet_add_aoa(l,[[t]],{origin:n})}function m(e,t,n){1===t&&1===n||(null==l["!merges"]&&(l["!merges"]=[]),l["!merges"].push({s:e,e:f(e,t-1,n-1)}))}!function(e){!function t(n,r,a){for(var o,l=f(e,r,a),u=0,d=Object(s.a)(n);!(o=d()).done;){var h,g=o.value;if(!(null===(h=g.features)||void 0===h?void 0:h.noExport)){var v=f(l,u,0);if(p(g.name,v),Object(i.a)(g))u+=1,m(v,1,c-a);else{var b=t(g.children,r+u,a+1);m(v,b,1),u+=b}}}return u}(n,0,0)}(h),function(a){var o=Object(r.a)(n,"leaf-only").filter((function(e){var t;return!(null===(t=e.features)||void 0===t?void 0:t.noExport)})),i=new u.a;!function(t,n){e.utils.sheet_add_aoa(l,t,{origin:n})}(t.map((function(e,t){return i.stripUpwards(t),o.map((function(n,r){if(i.testSkip(t,r))return null;var o,l=function(e,t,n,r){var a=1,o=1;if(e.getSpanRect){var i=d.a.safeGetValue(e,t,n),l=e.getSpanRect(i,t,n);a=null==l?1:l.right-r,o=null==l?1:l.bottom-n}else{var c=d.a.safeGetCellProps(e,t,n);null!=c.colSpan&&(a=c.colSpan),null!=c.rowSpan&&(o=c.rowSpan)}return{top:n,bottom:n+o,left:r,right:r+a}}(n,e,t,r),c=l.bottom-l.top,s=l.right-l.left;return(c>1||s>1)&&(i.add(l.top,l.left,s,c),m(f(a,l.left,l.top),s,c)),(o=d.a.safeGetValue(n,e,t))===1/0||o===-1/0||"number"==typeof o&&isNaN(o)?null:o}))})),a)}(f(h,0,c)),e.writeFile({SheetNames:["Sheet1"],Sheets:{Sheet1:l}},o)}var p=n(306),m=n(307),g=n(308),v=n(294);function b(e){return t=>function e(n,r,a){let o=0;const l=[];for(const c of n){a.push(c);const n=r+o;let s;if(Object(i.a)(c))s=t(c,{startIndex:n,endIndex:n+1,path:a.slice(),isLeaf:!0}),o+=1;else{const r=e(c.children,n,a);s=t(Object.assign(Object.assign({},c),{children:r.result}),{startIndex:n,endIndex:n+r.flatCount,path:a.slice(),isLeaf:!1}),o+=r.flatCount}Array.isArray(s)?l.push(...s):null!=s&&l.push(s),a.pop()}return{result:l,flatCount:o}}(e,0,[]).result}var y=n(309),k=n(310)},126:function(e,t,n){"use strict";function r(e,t,n){return e.getValue?e.getValue(t,n):t[e.code]}n.d(t,"a",(function(){return a}));var a={safeRenderHeader:function(e){var t;return null!==(t=e.title)&&void 0!==t?t:e.name},safeGetValue:r,safeGetRowKey:function(e,t,n){var r;return"string"==typeof e?r=t[e]:"function"==typeof e&&(r=e(t)),null==r&&(r=String(n)),r},safeGetCellProps:function(e,t,n){if(e.getCellProps){var a=r(e,t,n);return e.getCellProps(a,t,n)||{}}return{}},safeRender:function(e,t,n){var a=r(e,t,n);return e.render?e.render(a,t,n):a}}},127:function(e,t,n){"use strict";function r(e){return null==e.children||0===e.children.length}n.d(t,"a",(function(){return r}))},128:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return d}));var r=n(122);const a=20,o={artTableWrapper:"art-table-wrapper",artTable:"art-table",tableHeader:"art-table-header",tableBody:"art-table-body",tableRow:"art-table-row",tableHeaderRow:"art-table-header-row",tableCell:"art-table-cell",tableHeaderCell:"art-table-header-cell",virtualBlank:"art-virtual-blank",stickyScroll:"art-sticky-scroll",stickyScrollItem:"art-sticky-scroll-item",lockShadowMask:"art-lock-shadow-mask",lockShadow:"art-lock-shadow",leftLockShadow:"art-left-lock-shadow",rightLockShadow:"art-right-lock-shadow",emptyWrapper:"art-empty-wrapper",loadingWrapper:"art-loading-wrapper",loadingIndicatorWrapper:"art-loading-indicator-wrapper",loadingIndicator:"art-loading-indicator"},i=5,l=10,c=20,s=30,u=40,d=r.b.div`
  --row-height: 48px;
  --color: #333;
  --bgcolor: white;
  --hover-bgcolor: var(--hover-color, #f5f5f5);
  --highlight-bgcolor: #eee;

  --header-row-height: 32px;
  --header-color: #5a6c84;
  --header-bgcolor: #e9edf2;
  --header-hover-bgcolor: #ddd;
  --header-highlight-bgcolor: #e4e8ed;

  --cell-padding: 8px 12px;
  --font-size: 12px;
  --line-height: 1.28571;
  --lock-shadow: rgba(152, 152, 152, 0.5) 0 0 6px 2px;

  --border-color: #dfe3e8;
  --cell-border: 1px solid var(--border-color);
  --cell-border-horizontal: var(--cell-border);
  --cell-border-vertical: var(--cell-border);
  --header-cell-border: 1px solid var(--border-color);
  --header-cell-border-horizontal: var(--header-cell-border);
  --header-cell-border-vertical: var(--header-cell-border);

  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  cursor: default;
  color: var(--color);
  font-size: var(--font-size);
  line-height: var(--line-height);
  position: relative;

  // 表格外边框由 art-table-wrapper 提供，而不是由单元格提供
  &.use-outer-border {
    border-top: var(--cell-border-horizontal);
    border-right: var(--cell-border-vertical);
    border-bottom: var(--cell-border-horizontal);
    border-left: var(--cell-border-vertical);

    td.first,
    th.first {
      border-left: none;
    }
    td.last,
    th.last {
      border-right: none;
    }
    tr.first th,
    tr.first td {
      border-top: none;
    }
    tr.last td {
      border-bottom: none;
    }
  }

  .no-scrollbar {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .${o.tableHeader} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--header-bgcolor);
  }

  .${o.tableBody} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--bgcolor);
  }

  &.sticky .${o.tableHeader} {
    position: sticky;
    top: 0;
    z-index: ${l};
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;
    display: table;
    margin: 0;
    padding: 0;
  }

  // 在 tr 上设置 .no-hover 可以禁用鼠标悬停效果
  tr:not(.no-hover):hover > td {
    background: var(--hover-bgcolor);
  }
  // 在 tr 设置 highlight 可以为底下的 td 设置为高亮色
  // 而设置 .no-highlight 的话则可以禁用高亮效果；
  tr:not(.no-highlight).highlight > td {
    background: var(--highlight-bgcolor);
  }

  th {
    font-weight: normal;
    text-align: left;
    padding: var(--cell-padding);
    height: var(--header-row-height);
    color: var(--header-color);
    background: var(--header-bgcolor);
    border: none;
    border-right: var(--header-cell-border-vertical);
    border-bottom: var(--header-cell-border-horizontal);
  }
  tr.first th {
    border-top: var(--header-cell-border-horizontal);
  }
  th.first {
    border-left: var(--header-cell-border-vertical);
  }

  td {
    padding: var(--cell-padding);
    background: var(--bgcolor);
    height: var(--row-height);
    border: none;
    border-right: var(--cell-border-vertical);
    border-bottom: var(--cell-border-horizontal);
  }
  td.first {
    border-left: var(--cell-border-vertical);
  }
  tr.first td {
    border-top: var(--cell-border-horizontal);
  }
  &.has-header tr.first td {
    border-top: none;
  }

  .lock-left,
  .lock-right {
    z-index: ${i};
  }

  //#region 锁列阴影
  .${o.lockShadowMask} {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: ${c};
    pointer-events: none;
    overflow: hidden;

    .${o.lockShadow} {
      height: 100%;
    }

    .${o.leftLockShadow} {
      margin-right: ${a}px;
      box-shadow: none;

      &.show-shadow {
        box-shadow: var(--lock-shadow);
        border-right: var(--cell-border-vertical);
      }
    }

    .${o.rightLockShadow} {
      margin-left: ${a}px;
      box-shadow: none;

      &.show-shadow {
        box-shadow: var(--lock-shadow);
        border-left: var(--cell-border-vertical);
      }
    }
  }
  //#endregion

  //#region 空表格展现
  .${o.emptyWrapper} {
    pointer-events: none;
    color: #99a3b3;
    font-size: 12px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .empty-image {
      width: 50px;
      height: 50px;
    }

    .empty-tips {
      margin-top: 16px;
      line-height: 1.5;
    }
  }
  //#endregion

  //#region 粘性滚动条
  .${o.stickyScroll} {
    overflow: auto;
    position: sticky;
    bottom: 0;
    z-index: ${s};
    margin-top: -17px;
  }

  .${o.stickyScrollItem} {
    // 必须有高度才能出现滚动条
    height: 1px;
    visibility: hidden;
  }
  //#endregion

  //#region 加载样式
  .${o.loadingWrapper} {
    position: relative;

    .${o.loadingIndicatorWrapper} {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
    }

    .${o.loadingIndicator} {
      position: sticky;
      z-index: ${u};
      transform: translateY(-50%);
    }
  }
  //#endregion
`},130:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return c}));var r=n(0),a=n.n(r),o=n(122);const i=o.b.div`
  display: inline-flex;
  align-items: center;
`,l=Object(o.b)(i)`
  &.leaf {
    cursor: default;
  }

  .expansion-icon {
    fill: #999;
    flex: 0 0 16px;
    transition: transform 200ms;

    &.expanded {
      transform-origin: center center;
      transform: rotate(90deg);
    }
  }
`;const c={Loading:function(e){return a.a.createElement("svg",Object.assign({width:"16",height:"16",fill:"currentColor",viewBox:"0 0 1024 1024"},e),a.a.createElement("path",{d:"M512 74.667c-17.067 0-32 14.933-32 32V256c0 17.067 14.933 32 32 32s32-14.933 32-32V106.667c0-17.067-14.933-32-32-32zm181.333 288c8.534 0 17.067-2.134 23.467-8.534L821.333 249.6c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L672 309.333c-12.8 12.8-12.8 32 0 44.8 4.267 6.4 12.8 8.534 21.333 8.534zm224 117.333H768c-17.067 0-32 14.933-32 32s14.933 32 32 32h149.333c17.067 0 32-14.933 32-32s-14.933-32-32-32zM714.667 669.867c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8L774.4 819.2c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L714.667 669.867zM512 736c-17.067 0-32 14.933-32 32v149.333c0 17.067 14.933 32 32 32s32-14.933 32-32V768c0-17.067-14.933-32-32-32zm-202.667-66.133L204.8 774.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533l104.534-104.533c12.8-12.8 12.8-32 0-44.8s-36.267-12.8-46.934 0zM288 512c0-17.067-14.933-32-32-32H106.667c-17.067 0-32 14.933-32 32s14.933 32 32 32H256c17.067 0 32-14.933 32-32zm-40.533-309.333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L307.2 352c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L247.467 202.667z"}))},CaretDown:function(e){return a.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},e),a.a.createElement("path",{d:"M24 12L16 22 8 12z"}))},CaretRight:function(e){return a.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},e),a.a.createElement("path",{d:"M12 8L22 16 12 24z"}))},Info:function(e){return a.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 16 16"},e),a.a.createElement("path",{d:"M8.5 11L8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11zM8 3.5c-.4 0-.8.3-.8.8S7.6 5 8 5c.4 0 .8-.3.8-.8S8.4 3.5 8 3.5z"}),a.a.createElement("path",{d:"M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z"}))}}},132:function(e,t,n){"use strict";n.r(t),n.d(t,"BaseTable",(function(){return a.a})),n.d(t,"BaseTableProps",(function(){return a.c})),n.d(t,"PrimaryKey",(function(){return a.f})),n.d(t,"LoadingContentWrapperProps",(function(){return a.e})),n.d(t,"Classes",(function(){return a.d})),n.d(t,"BaseTableCSSVariables",(function(){return a.b})),n.d(t,"collectNodes",(function(){return o.c})),n.d(t,"getTreeDepth",(function(){return o.e})),n.d(t,"groupBy",(function(){return o.f})),n.d(t,"isLeafNode",(function(){return o.g})),n.d(t,"applyTransforms",(function(){return o.a})),n.d(t,"buildTree",(function(){return o.b})),n.d(t,"exportTableAsExcel",(function(){return o.d})),n.d(t,"layeredSort",(function(){return o.h})),n.d(t,"makeTreeDataHelper",(function(){return o.j})),n.d(t,"mergeCellProps",(function(){return o.k})),n.d(t,"proto",(function(){return o.l})),n.d(t,"makeRecursiveMapper",(function(){return o.i})),n.d(t,"smartCompare",(function(){return o.m})),n.d(t,"traverseColumn",(function(){return o.n})),n.d(t,"makeAutoRowSpanTransform",(function(){return i.i})),n.d(t,"useAutoWidthTransform",(function(){return i.u})),n.d(t,"makeBuildTreeTransform",(function(){return i.j})),n.d(t,"makeColumnHoverTransform",(function(){return i.k})),n.d(t,"ColumnHoverOptions",(function(){return i.a})),n.d(t,"useColumnHoverTransform",(function(){return i.w})),n.d(t,"makeColumnRangeHoverTransform",(function(){return i.l})),n.d(t,"ColumnRangeHoverOptions",(function(){return i.b})),n.d(t,"HoverRange",(function(){return i.d})),n.d(t,"useColumnHoverRangeTransform",(function(){return i.v})),n.d(t,"makeColumnResizeTransform",(function(){return i.m})),n.d(t,"ColumnResizeOptions",(function(){return i.c})),n.d(t,"useColumnResizeTransform",(function(){return i.x})),n.d(t,"makeFlattenTransform",(function(){return i.n})),n.d(t,"makeOrderFieldTransform",(function(){return i.o})),n.d(t,"makeSortTransform",(function(){return i.p})),n.d(t,"SortHeaderCellProps",(function(){return i.e})),n.d(t,"SortOptions",(function(){return i.f})),n.d(t,"useSortTransform",(function(){return i.y})),n.d(t,"makeTipsTransform",(function(){return i.q})),n.d(t,"TipsOptions",(function(){return i.g})),n.d(t,"makeTreeModeTransform",(function(){return i.r})),n.d(t,"treeMetaSymbol",(function(){return i.t})),n.d(t,"TreeModeOptions",(function(){return i.h})),n.d(t,"useTreeModeTransform",(function(){return i.z})),n.d(t,"makeVisibleTransform",(function(){return i.s})),n.d(t,"TablePipeline",(function(){return u})),n.d(t,"useTablePipeline",(function(){return d})),n.d(t,"features",(function(){return r})),n.d(t,"internals",(function(){return f.a}));var r={};n.r(r),n.d(r,"multiSelect",(function(){return m})),n.d(r,"MultiSelectFeatureOptions",(function(){})),n.d(r,"columnHover",(function(){return w})),n.d(r,"autoRowSpan",(function(){return C})),n.d(r,"buildTree",(function(){return O})),n.d(r,"columnRangeHover",(function(){return j})),n.d(r,"tips",(function(){return S})),n.d(r,"rowDetail",(function(){return M})),n.d(r,"RowDetailFeatureOptions",(function(){})),n.d(r,"rowGrouping",(function(){return _})),n.d(r,"RowGroupingFeatureOptions",(function(){})),n.d(r,"singleSelect",(function(){return B})),n.d(r,"SingleSelectFeatureOptions",(function(){})),n.d(r,"sort",(function(){return W})),n.d(r,"SortFeatureOptions",(function(){})),n.d(r,"treeMode",(function(){return G})),n.d(r,"TreeModeFeatureOptions",(function(){})),n.d(r,"treeSelect",(function(){return U})),n.d(r,"TreeSelectFeatureOptions",(function(){}));var a=n(144),o=n(120),i=n(141),l=n(0),c=n.n(l),s=n(308);class u{constructor({state:e,setState:t,ctx:n}){this._snapshots={},this._rowPropsGetters=[],this.ctx={components:{},indents:u.defaultIndents},this.state=e,this.setState=t,Object.assign(this.ctx,n)}appendRowPropsGetter(e){return this._rowPropsGetters.push(e),this}getDataSource(e){return null==e?this._dataSource:this._snapshots[e].dataSource}getColumns(e){return null==e?this._columns:this._snapshots[e].columns}setStateAtKey(e,t,n){this.setState(Object.assign(Object.assign({},this.state),{[e]:t}),e,t,n)}ensurePrimaryKey(e){if(null==this.ctx.primaryKey)throw new Error(e?`\u4f7f\u7528 ${e} \u4e4b\u524d\u5fc5\u987b\u5148\u8bbe\u7f6e primaryKey`:"\u5fc5\u987b\u5148\u8bbe\u7f6e primaryKey");return this.ctx.primaryKey}input(e){if(null!=this._dataSource||null!=this._columns)throw new Error("input \u4e0d\u80fd\u8c03\u7528\u4e24\u6b21");return this._dataSource=e.dataSource,this._columns=e.columns,this.snapshot("input"),this}dataSource(e){return this._dataSource=e,this}columns(e){return this._columns=e,this}primaryKey(e){return this.ctx.primaryKey=e,this}snapshot(e){return this._snapshots[e]={dataSource:this._dataSource,columns:this._columns,rowPropsGetters:this._rowPropsGetters.slice()},this}useTransform(e){const t=e({dataSource:this.getDataSource(),columns:this.getColumns()});return this.dataSource(t.dataSource).columns(t.columns)}use(e){return e(this)}mapDataSource(e){return this.dataSource(e(this.getDataSource()))}mapColumns(e){return this.columns(e(this.getColumns()))}getProps(){const e={dataSource:this._dataSource,columns:this._columns};return this.ctx.primaryKey&&(e.primaryKey=this.ctx.primaryKey),this._rowPropsGetters.length>0&&(e.getRowProps=(e,t)=>this._rowPropsGetters.reduce(((n,r)=>Object(s.a)(n,r(e,t))),{})),e}}function d(e){const[t,n]=Object(l.useState)({});return new u({state:t,setState:n,ctx:e})}u.defaultIndents={iconIndent:-8,iconWidth:16,iconGap:0,indentSize:16};var f=n(126);function h(e,t){const n=new Set(t);return e.filter((e=>!n.has(e)))}function p(e,t){const n=new Set(e);return e.concat(t.filter((e=>!n.has(e))))}function m(e={}){return function(t){var n,r,a,o,i,l,s,u,d,m,g;const v="multiSelect",b=t.ctx.components.Checkbox;if(null==b)throw new Error("\u4f7f\u7528 multiSelect \u4e4b\u524d\u9700\u8981\u8bbe\u7f6e pipeline.ctx.components.Checkbox");const y=t.ensurePrimaryKey("multiSelect"),k=null!==(n=e.isDisabled)&&void 0!==n?n:()=>!1,w=null!==(r=e.clickArea)&&void 0!==r?r:"checkbox",j=null!==(l=null!==(i=null!==(a=e.value)&&void 0!==a?a:null===(o=t.state[v])||void 0===o?void 0:o.value)&&void 0!==i?i:e.defaultValue)&&void 0!==l?l:[],C=null!==(m=null!==(d=null!==(s=e.lastKey)&&void 0!==s?s:null===(u=t.state[v])||void 0===u?void 0:u.lastKey)&&void 0!==d?d:e.defaultLastKey)&&void 0!==m?m:"",S=(n,r,a,o)=>{var i;null===(i=e.onChange)||void 0===i||i.call(e,n,r,a,o),t.setStateAtKey(v,{value:n,lastKey:r},{keys:a,action:o})},O=t.getDataSource().map(((e,t)=>k(e,t)?null:f.a.safeGetRowKey(y,e,t))).filter((e=>null!=e)),x=new Set(j),E=O.length>0&&O.every((e=>x.has(e))),N=O.some((e=>x.has(e))),T=c.a.createElement(b,{checked:E,indeterminate:!E&&N,onChange:e=>{E?S(h(j,O),"",O,"uncheck-all"):S(p(j,O),"",O,"check-all")}}),R=Object.assign(Object.assign({name:"\u662f\u5426\u9009\u4e2d",title:T,width:50,align:"center"},e.checkboxColumn),{getCellProps(e,t,n){if("cell"===w){const e=f.a.safeGetRowKey(y,t,n),r=x.has(e),a=k(t,n);return{style:{cursor:a?"not-allowed":"pointer"},onClick:a?void 0:t=>{L(r,e,t.shiftKey)}}}},render(e,t,n){const r=f.a.safeGetRowKey(y,t,n),a=x.has(r);return c.a.createElement(b,{checked:a,disabled:k(t,n),onChange:"checkbox"===w?(e,t)=>{var n;const o=null!==(n=null==t?void 0:t.nativeEvent)&&void 0!==n?n:e.nativeEvent;o&&(o.stopPropagation(),L(a,r,o.shiftKey))}:void 0})}}),z=t.getColumns().slice();return"start"===(null!==(g=e.checkboxPlacement)&&void 0!==g?g:"start")?z.unshift(R):z.push(R),t.columns(z),t.appendRowPropsGetter(((t,n)=>{const r=f.a.safeGetRowKey(y,t,n);let a,o,i={};const l=x.has(r);if(e.highlightRowWhenSelected&&l&&(a="highlight"),"row"===w){k(t,n)||(i.cursor="pointer",o=e=>{L(l,r,e.shiftKey)})}return{className:a,style:i,onClick:o}})),t;function L(e,t,n){let r=[t];if(n&&C){const e=O.indexOf(C),n=O.indexOf(t),[a,o]=e<n?[e,n]:[n,e];r=O.slice(a,o+1)}e?S(h(j,r),t,r,"uncheck"):S(p(j,r),t,r,"check")}}}var g=n(154),v=n(145),b=n(311),y=n(295),k=n(305);function w(e={}){const t="columnHover";return n=>{var r,a,o;if(!1===e)return n;const i="boolean"==typeof e?{}:e,l=null!==(r=null!==(a=null!==(o=i.hoverColIndex)&&void 0!==o?o:n.state[t])&&void 0!==a?a:i.defaultHoverColIndex)&&void 0!==r?r:-1;return n.useTransform(Object(g.b)({hoverColor:i.hoverColor,hoverColIndex:l,onChangeHoverColIndex:e=>{var r;n.setStateAtKey(t,e),null===(r=i.onChangeHoverColIndex)||void 0===r||r.call(i,e)}}))}}function j(e={}){const t="columnHover";return n=>{var r,a,o;if(!1===e)return n;const i="boolean"==typeof e?{}:e,l=null!==(r=null!==(a=null!==(o=i.hoverRange)&&void 0!==o?o:n.state[t])&&void 0!==a?a:i.defaultHoverRange)&&void 0!==r?r:{start:-1,end:-1};return n.useTransform(Object(v.c)({hoverColor:i.hoverColor,headerHoverColor:i.headerHoverColor,hoverRange:l,onChangeHoverRange:e=>{var r;n.setStateAtKey(t,e),null===(r=i.onChangeHoverRange)||void 0===r||r.call(i,e)}}))}}function C(){return e=>e.useTransform(Object(b.a)())}function S(){return e=>{const t=e.ctx.components.Balloon,n=e.ctx.components.Tooltip;if(null==t&&null==n)throw new Error("\u4f7f\u7528 tips \u4e4b\u524d\u9700\u8981\u901a\u8fc7 pipeline context \u8bbe\u7f6e components.Balloon / components.Tooltip");return e.useTransform(Object(y.b)({Balloon:t,Tooltip:n}))}}function O(e,t){return n=>n.mapDataSource((n=>Object(k.a)(e,t,n)))}var x=n(115),E=n.n(x),N=n(130),T=n(150),R=n(153);const z=Symbol("row-detail"),L=()=>c.a.createElement("div",{style:{margin:"8px 24px"}},c.a.createElement("b",{style:{color:"indianred"}},"\u8bbe\u7f6e ",c.a.createElement("code",null,"rowDetail.renderDetail")," \u6765\u81ea\u5b9a\u4e49\u8be6\u60c5\u5185\u5bb9"));function M(e={}){return function(t){var n,r,a,o,i,l,u,d;const h="rowDetail",p=t.ensurePrimaryKey("rowDetail");if("string"!=typeof p)throw new Error("rowDetail \u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u4f5c\u4e3a primaryKey");const m=null!==(n=e.rowDetailMetaKey)&&void 0!==n?n:z,g=t.ctx.indents,v=g.iconIndent+g.iconWidth+g.iconGap,b=null!==(r=e.clickArea)&&void 0!==r?r:"cell",y=null!==(a=e.getDetailKey)&&void 0!==a?a:e=>e[p]+"_detail",k=null!==(o=e.renderDetail)&&void 0!==o?o:L,w=null!==(i=e.hasDetail)&&void 0!==i?i:()=>!0,j=null!==(d=null!==(u=null!==(l=e.openKeys)&&void 0!==l?l:t.state.rowDetail)&&void 0!==u?u:e.defaultOpenAll?t.getDataSource().filter(w).map((e=>e[p])):e.defaultOpenKeys)&&void 0!==d?d:[],C=(n,r,a)=>{var o;null===(o=e.onChangeOpenKeys)||void 0===o||o.call(e,n,r,a),t.setStateAtKey(h,n,{key:r,action:a})},S=new Set(j),O=e=>{S.has(e)?C(j.filter((t=>t!==e)),e,"collapse"):C([...j,e],e,"expand")};return t.dataSource(Object(R.a)(t.getDataSource(),((e,t)=>S.has(e[p])?[e,Object.assign(Object.assign({[m]:!0},e),{[p]:y(e,t)})]:[e]))).columns(function(t){if(0===t.length)return t;const n=Object(T.a)(t,"leaf-only").length,[r,...a]=t;return[Object.assign(Object.assign({},r),{title:c.a.createElement("div",{style:{display:"inline-block",marginLeft:v}},f.a.safeRenderHeader(r)),render:(t,n,a)=>{if(n[m])return k(n,a);const o=f.a.safeRender(r,n,a);if(!w(n,a))return c.a.createElement(N.b,{style:{marginLeft:v}},o);const i=n[p],l=t=>{e.stopClickEventPropagation&&t.stopPropagation(),O(i)},s=S.has(i)?"expanded":"collapsed";return c.a.createElement(N.a,{className:E()("expansion-cell",s),style:{cursor:"content"===b?"pointer":void 0},onClick:"content"===b?l:void 0},c.a.createElement(N.c.CaretRight,{style:{cursor:"icon"===b?"pointer":void 0,marginLeft:g.iconIndent,marginRight:g.iconGap},className:E()("expansion-icon",s),onClick:"icon"===b?l:void 0}),o)},getCellProps:"cell"===b?(t,n,a)=>{var o;if(n[m])return{style:Object.assign({"--cell-padding":"0",overflow:"hidden"},e.detailCellStyle)};const i=null===(o=r.getCellProps)||void 0===o?void 0:o.call(r,t,n,a);return w(n,a)?Object(s.a)(i,{onClick(t){e.stopClickEventPropagation&&t.stopPropagation(),O(n[p])},style:{cursor:"pointer"}}):i}:void 0,getSpanRect(e,t,r){if(t[m])return{top:r,bottom:r+1,left:0,right:n}}}),...a]}(t.getColumns())).appendRowPropsGetter((e=>{if(e[m])return{className:"no-hover"}}))}}var P=n(127);const K=Symbol("row-grouping-meta");function I(e){return{[K]:{expandable:!Object(P.a)(e)},...e}}function D(e){return null==e[K]?{isGroupHeader:!1,expandable:!1}:{isGroupHeader:!0,expandable:e[K].expandable}}function H(e){if(D(e).isGroupHeader)return{className:"alternative"}}function _(e={}){return t=>{var n,r,a;const o="rowGrouping",i=t.ctx.indents,l=i.iconIndent+i.iconWidth+i.iconGap,u=t.ensurePrimaryKey("rowGrouping");if("string"!=typeof u)throw new Error("rowGrouping \u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u4f5c\u4e3a primaryKey");const d=null!==(n=null!==(r=null!==(a=e.openKeys)&&void 0!==a?a:t.state[o])&&void 0!==r?r:e.defaultOpenAll?t.getDataSource().map((e=>e[u])):e.defaultOpenKeys)&&void 0!==n?n:[],h=new Set(d),p=(n,r,a)=>{var i;null===(i=e.onChangeOpenKeys)||void 0===i||i.call(e,n,r,a),t.setStateAtKey(o,n,{key:r,action:a})};return t.mapDataSource((function(e){return Object(R.a)(e,(e=>{let t=[I(e)];return h.has(e[u])&&Array.isArray(e.children)&&(t=t.concat(e.children)),t}))})).mapColumns((function(e){if(0===e.length)return e;const t=Object(T.a)(e,"leaf-only").length,[n,...r]=e;return[{...n,title:c.a.createElement("div",{style:{display:"inline-block",marginLeft:l}},f.a.safeRenderHeader(n)),render:(e,t,r)=>{var a;const o=f.a.safeRender(n,t,r),s=D(t);if(!s.isGroupHeader||!s.expandable){var d;const e=l+(s.isGroupHeader?0:i.indentSize);return c.a.createElement(N.b,{style:{marginLeft:e}},s.isGroupHeader&&null!==(d=t.groupTitle)&&void 0!==d?d:o)}const p=h.has(t[u])?"expanded":"collapsed";return c.a.createElement(N.a,{className:E()("expansion-cell",p)},c.a.createElement(N.c.CaretRight,{className:E()("expansion-icon",p),style:{marginLeft:i.iconIndent,marginRight:i.iconGap}}),null!==(a=t.groupTitle)&&void 0!==a?a:o)},getCellProps:(e,t,r)=>{var a;const o=D(t);if(!o.isGroupHeader)return;const{expandable:i}=o,l=t[u],c=h.has(l);let f;i&&(f=c?()=>{p(d.filter((e=>e!==l)),l,"collapse")}:()=>{p([...d,l],l,"expand")});const m=null===(a=n.getCellProps)||void 0===a?void 0:a.call(n,e,t,r);return Object(s.a)(m,{onClick:f,style:{cursor:i?"pointer":void 0}})},getSpanRect(e,n,r){if(D(n).isGroupHeader)return{top:r,bottom:r+1,left:0,right:t}}},...r]})).appendRowPropsGetter(H)}}function B(e={}){return function(t){var n,r,a,o,i;const l=t.ctx.components.Radio;if(null==l)throw new Error("\u4f7f\u7528 singleSelect \u4e4b\u524d\u9700\u8981\u901a\u8fc7 pipeline context \u8bbe\u7f6e components.Radio");const s="singleSelect",u=null!==(n=e.clickArea)&&void 0!==n?n:"radio",d=null!==(r=e.isDisabled)&&void 0!==r?r:()=>!1,h=t.ensurePrimaryKey("singleSelect"),p=null!==(o=null!==(a=e.value)&&void 0!==a?a:t.state[s])&&void 0!==o?o:e.defaultValue,m=n=>{var r;null===(r=e.onChange)||void 0===r||r.call(e,n),t.setStateAtKey(s,n)},g=Object.assign(Object.assign({name:"",width:50,align:"center"},e.radioColumn),{getCellProps(e,t,n){if("cell"===u){const e=f.a.safeGetRowKey(h,t,n),r=d(t,n);return{style:{cursor:r?"not-allowed":"pointer"},onClick:r?void 0:()=>m(e)}}},render:(e,t,n)=>{const r=f.a.safeGetRowKey(h,t,n);return c.a.createElement(l,{checked:p===r,disabled:d(t,n),onChange:"radio"===u?()=>m(r):void 0})}}),v=t.getColumns().slice();return"start"===(null!==(i=e.radioPlacement)&&void 0!==i?i:"start")?v.unshift(g):v.push(g),t.columns(v),t.appendRowPropsGetter(((n,r)=>{const a=f.a.safeGetRowKey(h,n,r);let o,i,l={};return e.highlightRowWhenSelected&&p===a&&(o="highlight"),"row"!==u||d(n,r)||(l.cursor="pointer",i=()=>{var n;null===(n=e.onChange)||void 0===n||n.call(e,a),t.setStateAtKey(s,a)}),{className:o,style:l,onClick:i}})),t}}var A=n(146);function W(e){return void 0===e&&(e={}),function(t){var n,r,a,o="sort";return t.useTransform(Object(A.c)(Object.assign({},e,{sorts:null!==(n=null!==(r=null!==(a=e.sorts)&&void 0!==a?a:t.state.sort)&&void 0!==r?r:e.defaultSorts)&&void 0!==n?n:[],keepDataSource:e.keepDataSource,onChangeSorts:function(n){var r,a;null===(r=(a=e).onChangeSorts)||void 0===r||r.call(a,n),t.setStateAtKey(o,n)}})))}}var V=n(147);function G(e={}){return function(t){var n,r,a,o,i,l;const c="treeMode",s=t.ctx,u={iconIndent:null!==(n=e.iconIndent)&&void 0!==n?n:s.indents.iconIndent,iconGap:null!==(r=e.iconGap)&&void 0!==r?r:s.indents.iconGap,indentSize:null!==(a=e.indentSize)&&void 0!==a?a:s.indents.indentSize},d=t.ensurePrimaryKey("treeMode");if("string"!=typeof d)throw new Error("treeMode \u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u4f5c\u4e3a primaryKey");return t.useTransform(Object(V.b)(Object.assign(Object.assign({},u),{isLeafNode:e.isLeafNode,primaryKey:d,openKeys:null!==(l=null!==(i=null!==(o=e.openKeys)&&void 0!==o?o:t.state.treeMode)&&void 0!==i?i:e.defaultOpenKeys)&&void 0!==l?l:[],onChangeOpenKeys:(n,r,a)=>{var o;null===(o=e.onChangeOpenKeys)||void 0===o||o.call(e,n,r,a),t.setStateAtKey(c,n,{key:r,action:a})},treeMetaKey:e.treeMetaKey,clickArea:e.clickArea,stopClickEventPropagation:e.stopClickEventPropagation})))}}var $=n(307),F="treeSelect";function U(e){return function(t){var n,r,a,o,i=t.ctx.components.Checkbox;if(null==i)throw new Error("\u4f7f\u7528 treeSelect \u4e4b\u524d\u9700\u8981\u901a\u8fc7 pipeline context \u8bbe\u7f6e components.Checkbox");var l=t.ensurePrimaryKey("treeSelect");if("string"!=typeof l)throw new Error("treeSelect \u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u4f5c\u4e3a primaryKey");var s=null!==(n=null!==(r=null!==(a=e.value)&&void 0!==a?a:t.state.treeSelect)&&void 0!==r?r:e.defaultValue)&&void 0!==n?n:[],u=Object($.a)({tree:null!=e.rootKey?[(o={},o[l]=e.rootKey,o.children=e.tree,o)]:e.tree,getNodeValue:function(e){return e[l]},value:s,checkedStrategy:e.checkedStrategy,checkStrictly:e.checkStrictly}),d=function(n){return c.a.createElement(i,{checked:u.isChecked(n),indeterminate:u.isIndeterminate(n),onChange:function(){var r,a=u.getValueAfterToggle(n);t.setStateAtKey(F,a),null===(r=e.onChange)||void 0===r||r.call(e,a)}})},f=t.getColumns();return t.columns([Object.assign({name:"",width:50,align:"center"},e.checkboxColumn,{title:null!=e.rootKey?d(e.rootKey):void 0,render:function(e,t){return d(t[l])}})].concat(f)),e.highlightRowWhenSelected&&t.appendRowPropsGetter((function(e){if(u.isChecked(e[l]))return{className:"highlight"}})),t}}},141:function(e,t,n){"use strict";n.d(t,"i",(function(){return r.a})),n.d(t,"u",(function(){return v})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return k.b})),n.d(t,"a",(function(){return k.ColumnHoverOptions})),n.d(t,"w",(function(){return k.c})),n.d(t,"l",(function(){return w.c})),n.d(t,"b",(function(){return w.ColumnRangeHoverOptions})),n.d(t,"d",(function(){return w.HoverRange})),n.d(t,"v",(function(){return w.d})),n.d(t,"m",(function(){return T})),n.d(t,"c",(function(){})),n.d(t,"x",(function(){return R})),n.d(t,"n",(function(){return z})),n.d(t,"o",(function(){return L})),n.d(t,"p",(function(){return M.c})),n.d(t,"e",(function(){return M.SortHeaderCellProps})),n.d(t,"f",(function(){return M.SortOptions})),n.d(t,"y",(function(){return M.d})),n.d(t,"q",(function(){return P.b})),n.d(t,"g",(function(){return P.TipsOptions})),n.d(t,"r",(function(){return K.b})),n.d(t,"t",(function(){return K.c})),n.d(t,"h",(function(){return K.TreeModeOptions})),n.d(t,"z",(function(){return K.d})),n.d(t,"s",(function(){return I}));var r=n(311),a=n(133),o=n(0),i=n.n(o),l=n(122),c=n(128),s=n(126),u=n(310),d=n(127),f=n(308);function h(){var e=Object(a.a)(["\n  height: 100%;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n  padding: 8px 12px;\n"]);return h=function(){return e},e}var p="auto-width-wrapper",m="auto-width-expander",g=l.b.div(h());function v(e,t,n){var r=Object(o.useState)([]),a=r[0],l=r[1];Object(o.useEffect)((function(){var t=e.current.getDoms().artTable,n=Array.from(t.querySelectorAll("."+c.b.tableRow));if(0!==n.length){for(var r,o,i=[],s=0,u=n;s<u.length;s++){u[s].querySelectorAll(".auto-width-wrapper").forEach((function(e,t){var n;i[t]=Math.max(null!==(n=i[t])&&void 0!==n?n:0,e.scrollWidth)}))}o=a,(r=i).length===o.length&&r.every((function(e,t){return e===o[t]}))||l(i)}}),n);var h=0,v=Object(u.a)((function(e){var n,r,o;if(!Object(d.a)(e))return e;if(!(null===(n=e.features)||void 0===n?void 0:n.autoWidth))return e;var l=e.features.autoWidth,c=l.max,u=void 0===c?1/0:c,m=l.min,v=void 0===m?-1/0:m,b=null!==(r=null!==(o=a[h++])&&void 0!==o?o:e.width)&&void 0!==r?r:null==t?void 0:t.initColumnWidth,y=Math.max(v,Math.min(u,b));return Object.assign({},e,{width:y,getCellProps:function(t,n,r){return Object(f.a)(s.a.safeGetCellProps(e,n,r),{style:{padding:0}})},render:function(n,r,a){return i.a.createElement(g,{className:p,style:null==t?void 0:t.wrapperStyle},s.a.safeRender(e,r,a))}})}));return function(e){var n,r=v(e),a=r.columns,o=r.dataSource,i=null!==(n=null==t?void 0:t.expanderVisibility)&&void 0!==n?n:"visible";return{columns:(null==t?void 0:t.appendExpander)?a.concat([{name:"",headerCellProps:{className:m,style:{background:"hidden"===i?"var(--bgcolor)":void 0,border:"hidden"===i?"none":void 0}},getCellProps:function(){return{className:m,style:{visibility:i}}}}]):a,dataSource:o}}}var b=n(305);function y(e,t){return function(n){var r=n.columns,a=n.dataSource;return{columns:r,dataSource:Object(b.a)(e,t,a)}}}var k=n(154),w=n(145),j=n(6),C=n(592),S=n(598),O=n(363);function x(){var e=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: -5px;\n  width: 10px;\n  cursor: col-resize;\n  z-index: 1;\n"]);return x=function(){return e},e}var E="resize-expander",N=l.b.span(x());function T(e){var t=e.sizes,n=e.onChangeSizes,r=e.minSize,a=void 0===r?40:r,o=e.maxSize,l=void 0===o?1/0:o,c=e.appendExpander,f=e.expanderVisibility,h=void 0===f?"visible":f,p=e.disableUserSelectWhenResizing,m=function(e,r){var o,i=r.clientX,c=t[e],s=Object(C.a)(window,"mousemove").pipe(S.a(Object(C.a)(window,"mouseup")),O.a((function(n){var r,o,s,u=n.clientX,d=t.slice();return d[e]=(r=a,o=c+(u-i),s=l,Math.max(r,Math.min(s,o))),d}))),u="";p&&(o=document.documentElement.style,u=o.userSelect,o.userSelect="none"),s.subscribe({next:n,complete:function(){p&&(o.userSelect=u)}})},g=Object(u.a)((function(e,n){var r,a=n.range;if(!Object(d.a)(e))return e;var o=s.a.safeRenderHeader(e);return Object.assign({},e,{width:t[a.start],title:i.a.createElement(i.a.Fragment,null,o,i.a.createElement(N,{className:"resize-handle",onMouseDown:function(e){return m(a.start,e)}})),headerCellProps:Object.assign({},e.headerCellProps,{style:Object.assign({},null===(r=e.headerCellProps)||void 0===r?void 0:r.style,{overflow:"visible",position:"relative"})})})}));return function(e){var t=g(e),n=t.columns,r=t.dataSource;return{columns:c?n.concat([{name:"",headerCellProps:{className:E,style:{background:"hidden"===h?"var(--bgcolor)":void 0,border:"hidden"===h?"none":void 0}},getCellProps:function(){return{className:E,style:{visibility:h}}}}]):n,dataSource:r}}}function R(e){var t=e.defaultSizes,n=Object(j.a)(e,["defaultSizes"]),r=Object(o.useState)(t),a=r[0],i=r[1];return T(Object.assign({sizes:a,onChangeSizes:i},n))}function z(){return Object(u.a)((function(e){var t;return Object(d.a)(e)?e:(null===(t=e.features)||void 0===t?void 0:t.flatten)?e.children:e}))}function L(e){return void 0===e&&(e=1),Object(u.a)((function(t){var n,r;return(null===(n=t.features)||void 0===n?void 0:n.order)||(null===(r=t.features)||void 0===r?void 0:r.orderField)?Object.assign({},t,{getValue:function(t,n){return n+e}}):t}))}var M=n(146),P=n(295),K=n(147);function I(e){const t=new Set(e);return Object(u.a)((e=>Object(d.a)(e)?t.has(e.code)?e:Object.assign(Object.assign({},e),{hidden:!0}):e))}},143:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(0),a=n.n(r),o=n(128),i=a.a.memo((function(){return a.a.createElement("svg",{style:{margin:"auto",display:"block",width:40,height:40},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},a.a.createElement("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#23a7fa",strokeDasharray:"188 64",strokeLinecap:"round",strokeWidth:"10"},a.a.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})))}));function l(e){var t=e.children,n=e.visible;return a.a.createElement("div",{className:"art-loading-content-wrapper",style:{filter:n?"blur(1px)":"none"}},t)}function c(e){var t=e.visible,n=e.children,r=e.LoadingContentWrapper,c=void 0===r?l:r,s=e.LoadingIcon,u=void 0===s?i:s;return a.a.createElement("div",{className:o.b.loadingWrapper},t&&a.a.createElement("div",{className:o.b.loadingIndicatorWrapper},a.a.createElement("div",{className:o.b.loadingIndicator},a.a.createElement(u,null))),a.a.createElement(c,{visible:t,children:n}))}},144:function(e,t,n){"use strict";var r=n(148);n.d(t,"a",(function(){return r.a})),n.d(t,"c",(function(){return r.BaseTableProps})),n.d(t,"f",(function(){return r.PrimaryKey}));var a=n(143);n.d(t,"e",(function(){return a.LoadingContentWrapperProps}));var o=n(128);n.d(t,"d",(function(){return o.b})),n.d(t,"b",(function(){return o.BaseTableCSSVariables}))},145:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return s}));var r=n(0),a=n(310),o=n(127),i=n(308),l={start:-1,end:-1};function c(e){var t=e.hoverColor,n=void 0===t?"var(--hover-bgcolor)":t,r=e.headerHoverColor,c=void 0===r?"var(--header-hover-bgcolor)":r,s=e.hoverRange,u=e.onChangeHoverRange;return Object(a.a)((function(e,t){var r=t.range,a=r.end>s.start&&s.end>r.start;if(!Object(o.a)(e))return null==c?e:Object.assign({},e,{headerCellProps:Object(i.a)(e.headerCellProps,{onMouseEnter:function(){u(r)},onMouseLeave:function(){u(l)},style:{"--header-bgcolor":a?c:void 0}})});var d=e.getCellProps;return Object.assign({},e,{headerCellProps:Object(i.a)(e.headerCellProps,{onMouseEnter:function(){u(r)},onMouseLeave:function(){u(l)},style:{"--header-bgcolor":a?c:void 0}}),getCellProps:function(e,t,o){var c=null==d?void 0:d(e,t,o);return Object(i.a)(c,{onMouseEnter:function(){u(r)},onMouseLeave:function(){u(l)},style:{"--bgcolor":a?n:void 0}})}})}))}function s(e){var t=void 0===e?{}:e,n=t.hoverColor,a=t.headerHoverColor,o=t.defaultHoverRange,i=void 0===o?l:o,s=Object(r.useState)(i);return c({hoverColor:n,headerHoverColor:a,hoverRange:s[0],onChangeHoverRange:s[1]})}},146:function(e,t,n){"use strict";n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return k}));var r=n(6),a=n(125),o=n(133),i=n(0),l=n.n(i),c=n(122),s=n(126),u=n(127),d=n(150),f=n(306),h=n(309),p=n(308);function m(){var e=Object(o.a)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n"]);return m=function(){return e},e}function g(e){var t=e.size,n=void 0===t?32:t,r=e.style,a=e.className,o=e.order;return l.a.createElement("svg",{style:r,className:a,focusable:"false",preserveAspectRatio:"xMidYMid meet",width:n,height:n,viewBox:"0 0 32 32","aria-hidden":"true"},l.a.createElement("path",{fill:"asc"===o?"#23A3FF":"#bfbfbf",transform:"translate(0, 4)",d:"M8 8L16 0 24 8z"}),l.a.createElement("path",{fill:"desc"===o?"#23A3FF":"#bfbfbf",transform:"translate(0, -4)",d:"M24 24L16 32 8 24z "}))}function v(e){var t=e.children,n=e.column,r=e.onToggle,a=e.sortOrder,o=e.sortIndex,i=e.sortOptions,c="right"===n.align?"flex-end":"center"===n.align?"center":"flex-start";return l.a.createElement(b,{onClick:r,style:{justifyContent:c}},t,l.a.createElement(g,{style:{userSelect:"none",marginLeft:2,flexShrink:0},size:16,order:a}),"multiple"===i.mode&&-1!=o&&l.a.createElement("div",{style:{userSelect:"none",marginLeft:2,color:"#666",flex:"0 0 auto",fontSize:10,fontFamily:"monospace"}},o+1))}var b=c.b.div(m());function y(e){var t=e.sorts,n=e.onChangeSorts,r=e.orders,o=void 0===r?["desc","asc","none"]:r,i=e.mode,c=void 0===i?"multiple":i,m=e.SortHeaderCell,g=void 0===m?v:m,b=e.keepDataSource,y=e.highlightColumnWhenActive,k=t.filter((function(e){return"none"!==e.order})),w="multiple"===c?k:k.slice(0,1),j="multiple"===c?n:function(e){var t=e.length;n(e.slice(t-1))},C={sorts:w,onChangeSorts:j,orders:o,mode:c,keepDataSource:b,highlightColumnWhenActive:y},S=new Map(w.map((function(e,t){return[e.code,Object.assign({index:t},e)]})));return function(e){var t=e.dataSource,n=e.columns;return{columns:function(e){return e.map((function e(t){var n,r=Object.assign({},t),a=t.code&&((null===(n=t.features)||void 0===n?void 0:n.sortable)||S.has(t.code)),i=a&&S.has(t.code);if(a){var c=-1,d="none";if(i){var f=S.get(t.code);d=f.order,c=f.index,y&&(r.headerCellProps=Object(p.a)(t.headerCellProps,{style:{background:"var(--header-highlight-bgcolor)"}}),r.getCellProps=function(e,n,r){var a=s.a.safeGetCellProps(t,n,r);return Object(p.a)(a,{style:{background:"var(--highlight-bgcolor)"}})})}r.title=l.a.createElement(g,{onToggle:function(){return function(e){var t=S.get(e);if(null==t)j(w.concat([{code:e,order:o[0]}]));else{var n=w.findIndex((function(t){return t.code===e})),r=w.slice(0,n+1),a=function(e){var t=o.indexOf(e);return o[t===o.length-1?0:t+1]}(t.order);"none"===a?r.pop():r[n]=Object.assign({},r[n],{order:a}),j(r)}}(t.code)},sortOrder:d,column:t,sortIndex:c,sortOptions:C},s.a.safeRenderHeader(t))}Object(u.a)(t)||(r.children=t.children.map(e));return r}))}(n),dataSource:function(e){if(b)return e;var t=new Map(Object(d.a)(n,"leaf-only").filter((function(e){var t;return null!=(null===(t=e.features)||void 0===t?void 0:t.sortable)})).map((function(e){return[e.code,e]})));return Object(f.a)(e,(function(e,n){for(var r,o=Object(a.a)(w);!(r=o()).done;){var i=r.value,l=i.code,c=i.order,u=t.get(l);if(null!=u){var d=u.features.sortable,f=("function"==typeof d?d:h.a)(s.a.safeGetValue(u,e,-1),s.a.safeGetValue(u,n,-1));if(0!==f)return f*("asc"===c?1:-1)}}return 0}))}(t)}}}function k(e){var t=void 0===e?{}:e,n=t.defaultSorts,a=void 0===n?[]:n,o=Object(r.a)(t,["defaultSorts"]),l=Object(i.useState)(a),c=l[0],s=l[1];return y(Object.assign({sorts:c,onChangeSorts:s},o))}},147:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return p}));var r=n(115),a=n.n(r),o=n(0),i=n.n(o),l=n(130),c=n(126),s=n(127),u=n(308),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const f=Symbol("treeMetaSymbol");function h({onChangeOpenKeys:e,openKeys:t,primaryKey:n,iconIndent:r=-6,iconGap:o=0,indentSize:d=16,isLeafNode:h=s.a,clickArea:p="cell",treeMetaKey:m=f,stopClickEventPropagation:g}){const v=new Set(t),b=n=>{v.has(n)?e(t.filter((e=>e!==n)),n,"collapse"):e([...t,n],n,"expand")};return({columns:e,dataSource:t})=>({columns:function(e){if(0===e.length)return e;const[t,...n]=e;return[Object.assign(Object.assign({},t),{title:i.a.createElement("span",{style:{marginLeft:r+16+o}},c.a.safeRenderHeader(t)),render:(e,n,s)=>{const u=c.a.safeRender(t,n,s);if(null==n[m])return u;const{rowKey:f,depth:h,isLeaf:v,expanded:y}=n[m],k=r+h*d;if(v)return i.a.createElement(l.b,{className:"expansion-cell leaf"},i.a.createElement("span",{style:{marginLeft:k+16+o}},u));const w=e=>{g&&e.stopPropagation(),b(f)},j=y?"expanded":"collapsed";return i.a.createElement(l.a,{className:a()("expansion-cell",j),style:{cursor:"content"===p?"pointer":void 0},onClick:"content"===p?w:void 0},i.a.createElement(l.c.CaretRight,{className:a()("expansion-icon",j),style:{cursor:"icon"===p?"pointer":void 0,marginLeft:k,marginRight:o},onClick:"icon"===p?w:void 0}),u)},getCellProps:"cell"===p?(e,n,r)=>{const a=c.a.safeGetCellProps(t,n,r);if(null==n[m])return a;const{isLeaf:o,rowKey:i}=n[m];return o?a:Object(u.a)(a,{onClick(e){g&&e.stopPropagation(),b(i)},style:{cursor:"pointer"}})}:void 0}),...n]}(e),dataSource:function(e){const t=[];return function e(r,a){if(null==r)return;for(const o of r){const r=o[n],i=v.has(r),l=h(o,{depth:a,expanded:i,rowKey:r}),c={depth:a,isLeaf:l,expanded:i,rowKey:r};t.push(Object.assign({[m]:c},o)),!l&&i&&e(o.children,a+1)}}(e,0),t}(t)})}function p(e){var{defaultOpenKeys:t=[]}=e,n=d(e,["defaultOpenKeys"]);const[r,a]=Object(o.useState)(t);return h(Object.assign({openKeys:r,onChangeOpenKeys:a},n))}},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return ae}));var r=n(115),a=n.n(r),o=n(0),i=n.n(o),l=n(312),c=n(600),s=n(594),u=n(606),d=n(602),f=n(601),h=n(597),p=n(363),m=n(593),g=n(595),v=n(596),b=n(126),y=n(128),k=i.a.memo((function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{alt:"empty-image",className:"empty-image",src:"//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg"}),i.a.createElement("div",{className:"empty-tips"},"\u6ca1\u6709\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e",i.a.createElement("br",null),"\u8bf7\u4fee\u6539\u6761\u4ef6\u540e\u91cd\u65b0\u67e5\u8be2"))}));function w(e){var t=e.colgroup,n=e.colSpan,r=e.isLoading,o=e.emptyCellHeight,l=e.EmptyContent,c=void 0===l?k:l,s=!r;return i.a.createElement("table",null,t,i.a.createElement("tbody",null,i.a.createElement("tr",{className:a()(y.b.tableRow,"first","last","no-hover"),"data-rowindex":0},i.a.createElement("td",{className:a()(y.b.tableCell,"first","last"),colSpan:n,style:{height:null!=o?o:200}},s&&i.a.createElement("div",{className:y.b.emptyWrapper},i.a.createElement(c,null))))))}var j=n(127),C=n(150),S=n(604),O=n(592),x=n(409),E=n(605);const N="v3"===(null!=n(122).a?"v5":"v3")?"innerRef":"ref",T=100;function R(e){let t=0;return e.forEach((e=>{t+=e})),t}const z=Object(S.a)((()=>Object(O.a)(window,"resize").pipe(Object(E.a)(150,x.b,{leading:!0,trailing:!0}))));function L(){const e=document.createElement("div");e.style.position="absolute",e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.top="-9999px",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{width:t,height:n}}let M;function P(e,t){return null==e?void 0:e.querySelector("."+t)}function K(e,t){const n=Object.prototype.hasOwnProperty;if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let o=0;o<r.length;o++)if(!n.call(t,r[o])||!Object.is(e[r[o]],t[r[o]]))return!1;return!0}function I(e,t){return null==e||"auto"===e?t:e}let D=!1;function H(e){D||(D=!0,console.warn("[ali-react-table] column.hidden \u5df2\u7ecf\u8fc7\u65f6\uff0c\u5982\u679c\u9700\u8981\u9690\u85cf\u8be5\u5217\uff0c\u8bf7\u5c06\u5176\u4ece columns \u6570\u7ec4\u4e2d\u79fb\u9664",e))}function _(e){let t=0;for(const r of e){if(!n(r))break;t+=1}return t;function n(e){return Object(j.a)(e)?e.lock:e.lock||e.children.some(n)}}function B(e,t){const{useVirtual:n,columns:r,dataSource:a,defaultColumnWidth:o}=e,i=function(e,t){return null!=e&&Array.isArray(e)||(console.warn("[ali-react-table] <BaseTable /> props.columns \u9700\u8981\u4f20\u5165\u4e00\u4e2a\u6570\u7ec4",e),e=[]),function e(n){const r=[];for(let a of n)if(null==a.width&&null!=t&&(a={...a,width:t}),Object(j.a)(a))a.hidden?H(a):r.push(a);else{const t=e(a.children);t.length>0&&r.push({...a,children:t})}return r}(e)}(r,o),l=_(i),c=Object(C.a)(i,"leaf-only");if(l===i.length)return{flat:{left:[],right:[],full:c,center:c},nested:{left:[],right:[],full:i,center:i},useVirtual:{horizontal:!1,vertical:!1,header:!1},stickyLeftMap:new Map,stickyRightMap:new Map};const s=i.slice(0,l),u=_(i.slice().reverse()),d=i.slice(l,i.length-u),f=i.slice(i.length-u),h=c.length>=100&&c.every((e=>null!=e.width)),p=a.length>=100,m="object"!=typeof n?{horizontal:I(n,h),vertical:I(n,p),header:I(n,!1)}:{horizontal:I(n.horizontal,h),vertical:I(n.vertical,p),header:I(n.header,p)},g={left:Object(C.a)(s,"leaf-only"),full:c,right:Object(C.a)(f,"leaf-only"),center:Object(C.a)(d,"leaf-only")},v=g.full.length,b=g.left.length,y=g.right.length,k=new Map;let w=0;for(let j=0;j<b;j++)k.set(j,w),w+=g.full[j].width;const S=new Map;let O=0;for(let j=0;j<y;j++)S.set(v-1-j,O),O+=g.full[v-1-j].width;return{flat:g,nested:{left:s,full:i,right:f,center:d},useVirtual:m,stickyLeftMap:k,stickyRightMap:S}}var A=n(125),W=n(151);function V(e){for(var t=[],n=0;n<e;n++)t.push(n);return t}function G(e,t){for(var n=[],r=0;r<t;r++)n.push([]);var a=[];return function e(t,r){for(var o=0,i=0;i<t.length;i++){var l=t[i];if(Object(j.a)(l)){o+=1;var c={type:"normal",width:l.col.width,col:l.col,colIndex:l.colIndex,colSpan:1,isLeaf:!0};n[r].push(c),a.push(c)}else{var s=e(l.children,r+1);o+=s.leafCount,s.leafCount>0&&n[r].push({type:"normal",width:l.col.width,col:l.col,colIndex:l.colIndex,colSpan:s.leafCount,isLeaf:!1})}}return{leafCount:o}}(e,0),{flat:a,leveled:n}}function $(e,t){return function e(t,n){for(var r=[],a=0,o=0;o<t.length;o++){var i=t[o],l=n+a;if(Object(j.a)(i))a+=1,r.push({colIndex:l,col:i});else{var c=e(i.children,l);a+=c.leafCount,c.leafCount>0&&r.push({col:i,colIndex:l,children:c.result})}}return{result:r,leafCount:a}}(e,t).result}function F(e,t){var n=e.flat,r=e.nested,a=e.hoz;if(e.useVirtual.header){var o=G($(r.left,0),t),i=G(function(e,t,n){return function e(r,a){for(var o,i=0,l=[],c=Object(A.a)(r);!(o=c()).done;){var s=o.value,u=a+i;if(Object(j.a)(s))i+=1,n+t.leftIndex<=u&&u<n+t.rightIndex&&l.push({colIndex:u,col:s});else{var d=e(s.children,u);i+=d.leafCount,d.filtered.length>0&&l.push({colIndex:u,col:s,children:d.filtered})}}return{filtered:l,leafCount:i}}(e,n).filtered}(r.center,a,n.left.length),t),l=G($(r.right,n.left.length+n.center.length),t);return{flat:[].concat(o.flat,[{type:"blank",width:a.leftBlank,blankSide:"left"}],i.flat,[{type:"blank",width:a.rightBlank,blankSide:"right"}],l.flat),leveled:V(t).map((function(e){return[].concat(o.leveled[e],[{type:"blank",width:a.leftBlank,blankSide:"left"}],i.leveled[e],[{type:"blank",width:a.rightBlank,blankSide:"right"}],l.leveled[e])}))}}return G($(r.full,0),t)}function U(e){var t=e.nested,n=e.flat,r=e.stickyLeftMap,o=e.stickyRightMap,l=Object(W.a)(t.full)+1,c=F(e,l),s=n.full.length,u=n.left.length,d=n.right.length,f=c.leveled.map((function(e,t){var n=e.map((function(e){if("normal"===e.type){var n,c,f=e.colIndex,h=e.colSpan,p=e.isLeaf,m=e.col,g=null!==(n=m.headerCellProps)&&void 0!==n?n:{},v={};return f<u?(v.position="sticky",v.left=r.get(f)):f>=s-d&&(v.position="sticky",v.right=o.get(f)),i.a.createElement("th",Object.assign({key:f},g,{className:a()(y.b.tableHeaderCell,g.className,{first:0===f,last:f+h===s,"lock-left":f<u,"lock-right":f>=s-d}),colSpan:h,rowSpan:p?l-t:void 0,style:Object.assign({textAlign:m.align},g.style,v)}),null!==(c=m.title)&&void 0!==c?c:m.name)}return e.width>0?i.a.createElement("th",{key:e.blankSide}):null}));return i.a.createElement("tr",{key:t,className:a()(y.b.tableHeaderRow,{first:0===t,last:t===l-1})},n)}));return i.a.createElement("table",null,i.a.createElement("colgroup",null,c.flat.map((function(e){return"blank"===e.type?e.width>0?i.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):null:i.a.createElement("col",{key:e.colIndex,style:{width:e.width}})}))),i.a.createElement("thead",null,f))}class Y{constructor(e){this.cache=[],this.estimatedRowHeight=e}static getFullRenderRange(e){return{topIndex:0,topBlank:0,bottomIndex:e,bottomBlank:0}}getRenderRangeWhenBelowView(e){const t={topIndex:0,topBlank:0},n=this.getEnd(0,t,e);return Object.assign(Object.assign({},t),n)}getRenderRangeWhenAboveView(e){const t=this.getEstimatedTotalSize(e),n=this.getStart(t,e),r=this.getEnd(t,n,e);return Object.assign(Object.assign({},n),r)}getRenderRangeWhenInView(e,t,n){const r=this.getStart(e,n),a=this.getEnd(e+t,r,n);return Object.assign(Object.assign({},r),a)}binarySearchStart(e){let t=0,n=this.cache.length-1;for(;t<n;){const r=Math.ceil((t+n)/2);this.cache[r].offset<=e?t=r:n=r-1}return n}getStart(e,t){if(0===this.cache.length)return{topIndex:0,topBlank:0};const n=this.getMaxBottom();if(n<e){const r=e-n,a=t-this.cache.length,o=Math.min(Math.floor(r/this.estimatedRowHeight),a);for(let e=0,t=n;e<o;e+=1,t+=this.estimatedRowHeight)this.cache.push({offset:t,size:this.estimatedRowHeight});const i=this.cache.length-1,l=this.cache[i].offset;return this.overscanUpwards(i,l)}{const t=this.binarySearchStart(e),n=this.cache[t].offset;return this.overscanUpwards(t,n)}}overscanUpwards(e,t){let n=0,r=0;for(;r<e&&n<T;)r+=1,n+=this.getItemSize(e-r);return{topIndex:e-r,topBlank:t-n}}getEnd(e,t,n){let r=t.topIndex,a=t.topBlank;for(;r<n&&a<e;)a+=this.getItemSize(r),r+=1;const o=this.getEstimatedTotalSize(n)-a;return this.overscanDownwards(r,o,n)}overscanDownwards(e,t,n){let r=0,a=0;for(;a<n-e&&r<T;)r+=this.getItemSize(e+a),a+=1;return{bottomIndex:e+a,bottomBlank:t-r}}getItemSize(e){return e<this.cache.length?this.cache[e].size:this.estimatedRowHeight}setMaxItemCount(e){e<this.cache.length&&(this.cache.length=e)}updateItem(e,t,n){this.cache[e]={offset:t,size:n}}getEstimatedTotalSize(e){let t=0,n=0;const r=this.cache.length;if(r>0){const e=this.cache[r-1];t=e.offset+e.size,n=r}return t+(e-n)*this.estimatedRowHeight}getMaxBottom(){if(0===this.cache.length)return 0;const e=this.cache[this.cache.length-1];return e.offset+e.size}}var q=n(152),X=n(318),J=n(156),Z=n(603);function Q(e){return e===window?{left:0,top:0,bottom:window.innerHeight,right:window.innerWidth}:e.getBoundingClientRect()}function ee(e){return e===window?Object(O.a)(e,"resize"):new J.a((function(t){var n=new X.a((function(){t.next()}));return n.observe(e),function(){n.disconnect()}}))}function te(e,t){return Object(Z.a)(Object(O.a)(t,"scroll"),ee(t),ee(e)).pipe(p.a((function(){return function(e,t){var n=Q(e),r=Q(t);return{offsetY:Math.max(0,r.top-n.top),offsetX:Math.max(0,r.left-n.left),clipRect:{left:Math.max(n.left,r.left),top:Math.max(n.top,r.top),right:Math.min(n.right,r.right),bottom:Math.min(n.bottom,r.bottom)}}}(e,t)})))}var ne=n(143);let re=!1;class ae extends i.a.Component{constructor(e){super(e),this.store=new Y(this.props.estimatedRowHeight),this.artTableWrapperRef=i.a.createRef(),this.rootSubscription=new l.a,this.state=Object.assign(Object.assign({},B(e)),{hasScroll:!0,needRenderLock:!0,offsetY:0,offsetX:0,maxRenderHeight:600,maxRenderWidth:800})}getDoms(){return this.doms}updateStickyScroll(){const{stickyScroll:e,artTable:t,stickyScrollItem:n}=this.doms;if(!t)return;const r=t.querySelector(`.${y.b.tableBody} table`).offsetWidth,a=t.offsetWidth,o=(null==M&&(M=new c.a(L()),z.pipe(Object(p.a)((()=>L()))).subscribe(M)),M.value);e.style.marginTop=`-${o.height}px`,a>=r?this.state.hasScroll&&this.setState({hasScroll:!1}):!this.state.hasScroll&&o.height>5&&this.setState({hasScroll:!0}),n.style.width=r+"px"}renderTableHeader({horizontal:e}){const{stickyTop:t,hasHeader:n}=this.props,{flat:r,nested:o,useVirtual:l,stickyLeftMap:c,stickyRightMap:s}=this.state;return i.a.createElement("div",{className:a()(y.b.tableHeader,"no-scrollbar"),style:{top:0===t?void 0:t,display:n?void 0:"none"}},i.a.createElement(U,{nested:o,flat:r,hoz:e,useVirtual:l,stickyLeftMap:c,stickyRightMap:s}))}updateOffsetX(e){this.state.useVirtual.horizontal&&Math.abs(e-this.state.offsetX)>=50&&this.setState({offsetX:e})}syncHorizontalScrollFromTableBody(){this.syncHorizontalScroll(this.doms.tableBody.scrollLeft)}syncHorizontalScroll(e){this.updateOffsetX(e);const{tableBody:t,artTableWrapper:n}=this.doms,{flat:r}=this.state,a=r.left.length>0&&this.state.needRenderLock&&e>0,o=P(n,y.b.leftLockShadow);a?o.classList.add("show-shadow"):o.classList.remove("show-shadow");const i=r.right.length>0&&this.state.needRenderLock&&e<t.scrollWidth-t.clientWidth,l=P(n,y.b.rightLockShadow);i?l.classList.add("show-shadow"):l.classList.remove("show-shadow")}getVerticalRenderRange(){const{dataSource:e}=this.props,{useVirtual:t,offsetY:n,maxRenderHeight:r}=this.state,a=e.length;return t.vertical?r<=0?n<=0?this.store.getRenderRangeWhenBelowView(a):this.store.getRenderRangeWhenAboveView(a):this.store.getRenderRangeWhenInView(n,r,a):Y.getFullRenderRange(a)}getHorizontalRenderRange(){const{offsetX:e,maxRenderWidth:t,useVirtual:n,flat:r}=this.state;if(!n.horizontal)return{leftIndex:0,leftBlank:0,rightIndex:r.full.length,rightBlank:0};let a=0,o=0,i=0,l=0;const c=Math.max(0,e-T);for(;a<r.center.length;){const e=r.center[a];if(!(e.width+i<c))break;a+=1,i+=e.width}const s=t+(c-i)+200;for(;a+o<r.center.length;){const e=r.center[a+o];if(!(e.width+l<s))break;l+=e.width,o+=1}const u=r.center.length-a-o;return{leftIndex:a,leftBlank:i,rightIndex:a+o,rightBlank:R(r.center.slice(r.center.length-u).map((e=>e.width)))}}getRenderRange(){return{vertical:this.getVerticalRenderRange(),horizontal:this.getHorizontalRenderRange()}}getFlatHozWrappedCols(e){const{flat:t}=this.state;return[...t.left.map(((e,t)=>({type:"normal",col:e,colIndex:t}))),e.leftBlank>0&&{type:"blank",blankSide:"left",width:e.leftBlank},...t.center.slice(e.leftIndex,e.rightIndex).map(((n,r)=>({type:"normal",col:n,colIndex:t.left.length+e.leftIndex+r}))),e.rightBlank>0&&{type:"blank",blankSide:"right",width:e.rightBlank},...t.right.map(((e,n)=>({type:"normal",col:e,colIndex:t.full.length-t.right.length+n})))].filter(Boolean)}renderTableBody(e){const{vertical:t,horizontal:n}=e,{dataSource:r,getRowProps:o,primaryKey:l,isLoading:c,emptyCellHeight:s}=this.props,u=this.getFlatHozWrappedCols(n),d=i.a.createElement("colgroup",null,u.map((e=>"blank"===e.type?i.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):i.a.createElement("col",{key:e.colIndex,style:{width:e.col.width}}))));if(t.bottomIndex-t.topIndex==0){const{components:e,emptyContent:t}=this.props;let n=e.EmptyContent;return null==n&&null!=t&&(re||(re=!0,console.warn("[ali-react-table] BaseTable props.emptyContent \u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u4f7f\u7528 props.components.EmptyContent \u6765\u81ea\u5b9a\u4e49\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u8868\u683c\u8868\u73b0")),n=()=>t),i.a.createElement("div",{className:y.b.tableBody},i.a.createElement(w,{colgroup:d,colSpan:u.length,isLoading:c,EmptyContent:n,emptyCellHeight:s}))}const{flat:f,stickyLeftMap:h,stickyRightMap:p}=this.state,m=f.full.length,g=f.left.length,v=f.right.length,k=new q.a,j=r.slice(t.topIndex,t.bottomIndex).map((function(e,c){const s=t.topIndex+c;k.stripUpwards(s);const d=o(e,s),f=a()(y.b.tableRow,{first:0===s,last:s===r.length-1,even:s%2==0,odd:s%2==1},null==d?void 0:d.className);return i.a.createElement("tr",Object.assign({},d,{className:f,key:b.a.safeGetRowKey(l,e,s),"data-rowindex":s}),u.map((r=>"blank"===r.type?i.a.createElement("td",{key:r.blankSide}):function(e,r,o,l){var c,s;if(k.testSkip(r,l))return null;const u=b.a.safeGetValue(o,e,r),d=null!==(s=null===(c=o.getCellProps)||void 0===c?void 0:c.call(o,u,e,r))&&void 0!==s?s:{};let f=u;o.render&&(f=o.render(u,e,r));let w=1,j=1;if(o.getSpanRect){const t=o.getSpanRect(u,e,r);w=null==t?1:t.right-l,j=null==t?1:t.bottom-r}else null!=d.colSpan&&(w=d.colSpan),null!=d.rowSpan&&(j=d.rowSpan);j=Math.min(j,t.bottomIndex-r),w=Math.min(w,g+n.rightIndex-l);const C=w>1||j>1;C&&k.add(r,l,w,j);const S={};l<g?(S.position="sticky",S.left=h.get(l)):l>=m-v&&(S.position="sticky",S.right=p.get(l));return i.a.createElement("td",Object.assign(Object.assign(Object.assign(Object.assign({key:l},d),{className:a()(y.b.tableCell,d.className,{first:0===l,last:l+w===m,"lock-left":l<g,"lock-right":l>=m-v})}),C?{colSpan:w,rowSpan:j}:null),{style:Object.assign(Object.assign({textAlign:o.align},d.style),S)}),f)}(e,s,r.col,r.colIndex))))}));return i.a.createElement("div",{className:y.b.tableBody},i.a.createElement("div",{key:"top-blank",className:a()(y.b.virtualBlank,"top"),style:{height:t.topBlank}}),i.a.createElement("table",null,d,i.a.createElement("tbody",null,j)),i.a.createElement("div",{key:"bottom-blank",className:a()(y.b.virtualBlank,"bottom"),style:{height:t.bottomBlank}}))}isLock(){const{nested:e}=this.state;return e.left.length>0||e.right.length>0}render(){const{dataSource:e,className:t,style:n,hasHeader:r,useOuterBorder:o,isStickyHead:l,isLoading:c,components:s}=this.props,{flat:u}=this.state,d=this.getRenderRange();return(c=>{const s={className:a()(y.b.artTableWrapper,{"use-outer-border":o,sticky:l,empty:0===e.length,lock:this.isLock(),"has-header":r},t),style:n,[N]:this.artTableWrapperRef};return i.a.createElement(y.d,Object.assign({},s),c)})(i.a.createElement(ne.b,{visible:c,LoadingIcon:s.LoadingIcon,LoadingContentWrapper:s.LoadingContentWrapper},i.a.createElement("div",{className:y.b.artTable},this.renderTableHeader(d),this.renderTableBody(d),i.a.createElement("div",{className:y.b.lockShadowMask,style:{left:0,width:R(u.left.map((e=>e.width)))+y.c}},i.a.createElement("div",{className:a()(y.b.lockShadow,y.b.leftLockShadow)})),i.a.createElement("div",{className:y.b.lockShadowMask,style:{right:0,width:R(u.right.map((e=>e.width)))+y.c}},i.a.createElement("div",{className:a()(y.b.lockShadow,y.b.rightLockShadow)}))),i.a.createElement("div",{className:y.b.stickyScroll,style:{display:this.state.hasScroll?"block":"none",bottom:this.props.stickyBottom}},i.a.createElement("div",{className:y.b.stickyScrollItem}))))}componentDidMount(){this.updateDoms(),this.data$=new c.a({props:this.props,state:this.state,prevProps:null,prevState:null}),this.initSubscriptions(),this.didMountOrUpdate()}componentDidUpdate(e,t){this.updateDoms(),this.data$.next({props:this.props,state:this.state,prevProps:e,prevState:t}),this.didMountOrUpdate(e,t)}didMountOrUpdate(e,t){this.syncHorizontalScrollFromTableBody(),this.updateStickyScroll(),this.adjustNeedRenderLock(),this.updateItemSizeStoreAndTriggerRerenderIfNecessary(e),this.resetStickyScrollIfNecessary(t)}resetStickyScrollIfNecessary(e){null!=e&&this.state.hasScroll&&!e.hasScroll&&(this.doms.stickyScroll.scrollLeft=0)}initSubscriptions(){const{tableHeader:e,tableBody:t,stickyScroll:n}=this.doms;this.rootSubscription.add(z.subscribe((()=>{this.updateStickyScroll(),this.adjustNeedRenderLock()}))),this.rootSubscription.add(function(e,t){const n=new Set;function r(t,r){n.clear();for(const a of e)a!==t&&(a.scrollLeft=r,n.add(a))}const a=new l.a;for(const o of e){const e=()=>{if(n.has(o))return void n.delete(o);const e=o.scrollLeft;r(o,e),t(e)};o.addEventListener("scroll",e,{passive:!0}),a.add((()=>o.removeEventListener("scroll",e)))}return a}([t,n,e],(e=>{this.syncHorizontalScroll(e)})));const r=this.data$.pipe(p.a((e=>e.props.flowRoot)),m.a((e=>{const t=this.artTableWrapperRef.current;if("auto"===e){const e=getComputedStyle(t);return Object(s.a)("visible"!==e.overflowY?t:window)}return"self"===e?Object(s.a)(t):"function"==typeof e?Object(u.a)(0,d.a).pipe(p.a(e)):Object(s.a)(e)})),g.a()).pipe(m.a((e=>te(this.doms.artTable,e))));this.rootSubscription.add(Object(f.a)([r.pipe(p.a((e=>e.clipRect)),g.a(K)),this.data$.pipe(v.a((e=>{var t;return!(null===(t=e.prevProps)||void 0===t?void 0:t.isLoading)&&e.props.isLoading})))]).subscribe((([e])=>{const{artTableWrapper:t}=this.doms,n=P(t,y.b.loadingIndicator);if(!n)return;const r=e.bottom-e.top;n.style.top=r/2+"px",n.style.marginTop=r/2+"px"}))),this.rootSubscription.add(r.pipe(v.a((()=>{const{horizontal:e,vertical:t}=this.state.useVirtual;return e||t})),p.a((({clipRect:e,offsetY:t})=>({maxRenderHeight:e.bottom-e.top,maxRenderWidth:e.right-e.left,offsetY:t}))),g.a(((e,t)=>Math.abs(e.maxRenderWidth-t.maxRenderWidth)<50&&Math.abs(e.maxRenderHeight-t.maxRenderHeight)<50&&Math.abs(e.offsetY-t.offsetY)<50))).subscribe((e=>{this.setState(e)})))}componentWillUnmount(){this.rootSubscription.unsubscribe()}updateDoms(){const e=this.artTableWrapperRef.current,t=P(e,y.b.artTable);this.doms={artTableWrapper:e,artTable:t,tableHeader:P(t,y.b.tableHeader),tableBody:P(t,y.b.tableBody),stickyScroll:P(e,y.b.stickyScroll),stickyScrollItem:P(e,y.b.stickyScrollItem)}}updateItemSizeStoreAndTriggerRerenderIfNecessary(e){var t;null!=e&&e.dataSource.length!==this.props.dataSource.length&&this.store.setMaxItemCount(this.props.dataSource.length);const n=this.doms.artTable.querySelector(`.${y.b.virtualBlank}.top`),r=null!==(t=null==n?void 0:n.clientHeight)&&void 0!==t?t:0;let a=-1,o=-1;for(const c of(i=this.doms.artTable,l=y.b.tableRow,null==i?void 0:i.querySelectorAll("."+l))){const e=Number(c.dataset.rowindex);if(isNaN(e))continue;a=Math.max(a,e);const t=c.offsetTop+r,n=c.offsetHeight;o=Math.max(o,t+n),this.store.updateItem(e,t,n)}var i,l;if(-1!==a&&o<this.state.offsetY+this.state.maxRenderHeight){const{vertical:e}=this.getRenderRange();e.bottomIndex-1>a&&this.forceUpdate()}}adjustNeedRenderLock(){const{needRenderLock:e,flat:t}=this.state;if(this.isLock()){const n=R(t.full.map((e=>e.width)))>this.doms.artTable.clientWidth;e!==n&&this.setState({needRenderLock:n})}else e&&this.setState({needRenderLock:!1})}}ae.defaultProps={isStickyHead:!0,stickyTop:0,stickyBottom:0,useVirtual:"auto",estimatedRowHeight:48,hasHeader:!0,isLoading:!1,components:{},getRowProps:h.a,flowRoot:"auto"},ae.getDerivedStateFromProps=B},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(125),a=n(127);function o(e,t){var n=[];return function e(o){for(var i,l=Object(r.a)(o);!(i=l()).done;){var c=i.value;Object(a.a)(c)?n.push(c):"pre"===t?(n.push(c),e(c.children)):"post"===t?(e(c.children),n.push(c)):e(c.children)}}(e),n}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(125),a=n(127);function o(e){var t=-1;return function e(n,o){for(var i,l=Object(r.a)(n);!(i=l()).done;){var c=i.value;Object(a.a)(c)?t=Math.max(t,o):e(c.children,o+1)}}(e,0),t}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(){this.rects=[]}var t=e.prototype;return t.testSkip=function(e,t){return this.rects.some((function(n){var r=n.left,a=n.right,o=n.top,i=n.bottom;return r<=t&&t<a&&o<=e&&e<i}))},t.stripUpwards=function(e){this.rects=this.rects.filter((function(t){return t.bottom>e}))},t.add=function(e,t,n,r){this.rects.push({left:t,right:t+n,top:e,bottom:e+r})},e}()},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(125);function a(e,t){var n=[];return e.forEach((function(r,a){n.push.apply(n,t(r,a,e))})),n}function o(e){for(var t,n={},a=Object(r.a)(e);!(t=a()).done;){var o=t.value,i=o[0],l=o[1];n[i]=l}return n}},154:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c}));var r=n(0),a=n(310),o=n(127),i=n(308);function l(e){var t=e.hoverColor,n=void 0===t?"var(--hover-bgcolor)":t,r=e.hoverColIndex,l=e.onChangeHoverColIndex;return Object(a.a)((function(e,t){var a=t.range;if(!Object(o.a)(e))return e;var c=a.start<=r&&r<a.end,s=e.getCellProps;return Object.assign({},e,{getCellProps:function(e,t,r){var o=null==s?void 0:s(e,t,r);return Object(i.a)(o,{style:{"--bgcolor":c?n:void 0},onMouseEnter:function(){l(a.start)},onMouseLeave:function(){l(-1)}})}})}))}function c(e){var t=void 0===e?{}:e,n=t.hoverColor,a=t.defaultHoverColIndex,o=void 0===a?-1:a,i=Object(r.useState)(o);return l({hoverColor:n,hoverColIndex:i[0],onChangeHoverColIndex:i[1]})}},155:function(e,t,n){"use strict";n.r(t),n.d(t,"AntdBaseTable",(function(){return k})),n.d(t,"cdnData",(function(){return r})),n.d(t,"MinimumPivotTableDesigner",(function(){return K})),n.d(t,"format",(function(){return a})),n.d(t,"HippoBaseTable",(function(){return ae})),n.d(t,"biz",(function(){return o})),n.d(t,"ncov19",(function(){return i})),n.d(t,"RadioButtonGroup",(function(){return _e})),n.d(t,"BaseTableThemeContext",(function(){return Ae})),n.d(t,"FusionStyles",(function(){return Ve})),n.d(t,"AntdStyles",(function(){return We})),n.d(t,"HippoStyles",(function(){return Ge})),n.d(t,"MockTreeDataService",(function(){return Ye}));var r={};n.r(r),n.d(r,"getAppTrafficData",(function(){return x})),n.d(r,"getIncomeData",(function(){return N})),n.d(r,"getNCoV2019Data",(function(){return R}));var a={};n.r(a),n.d(a,"plain",(function(){return B})),n.d(a,"amount0",(function(){return A})),n.d(a,"amount",(function(){return W})),n.d(a,"time",(function(){return V})),n.d(a,"amount1",(function(){return G})),n.d(a,"amount2",(function(){return $})),n.d(a,"ratio",(function(){return F})),n.d(a,"lfl",(function(){return q})),n.d(a,"money",(function(){return X}));var o={};n.r(o),n.d(o,"repeat",(function(){return ce})),n.d(o,"randomPick",(function(){return se})),n.d(o,"operationCol",(function(){return de})),n.d(o,"dataSource1",(function(){return fe})),n.d(o,"columns1",(function(){return he})),n.d(o,"dataSource2",(function(){return pe})),n.d(o,"columns2",(function(){return me})),n.d(o,"dataSource3",(function(){return ge})),n.d(o,"columns3",(function(){return ve})),n.d(o,"makeChildren",(function(){return be})),n.d(o,"dataSource4",(function(){return ke})),n.d(o,"columns4",(function(){return we})),n.d(o,"dataSource5",(function(){return je})),n.d(o,"columns5",(function(){return Ce})),n.d(o,"dataSource6",(function(){return Oe})),n.d(o,"columns6",(function(){return xe}));var i={};n.r(i),n.d(i,"cols",(function(){return Pe})),n.d(i,"testProvColumns",(function(){return Ke})),n.d(i,"useAllDataSource",(function(){return Ie})),n.d(i,"useProvinceDataSource",(function(){return De})),n.d(i,"useCityDataSource",(function(){return He}));var l=n(148),c=n(128),s=n(151),u=n(599),d=n(115),f=n.n(d),h=n(0),p=n.n(h),m=n(122);const g=Object(m.b)(l.a)`
  --highlight-bgcolor: #fafafa;
  --header-highlight-bgcolor: #f5f5f5;

  --lock-shadow: rgba(0, 0, 0, 0.2) 0 0 10px 0px;
  --row-height: 32px;
  --header-row-height: 36px;
  --cell-padding: 16px;
  --color: rgba(0, 0, 0, 0.85);
  --header-color: rgba(0, 0, 0, 0.85);
  --header-bgcolor: #fafafa;
  --hover-bgcolor: #fafafa;
  --header-hover-bgcolor: #f5f5f5;
  --line-height: 1.5715;
  --font-size: 14px;
  --border-color: #f0f0f0;

  td {
    transition: background 0.3s;
  }

  .${c.b.lockShadowMask} {
    .${c.b.lockShadow} {
      transition: box-shadow 0.3s;
    }
  }

  &:not(.bordered) {
    --cell-border-vertical: none;
    --header-cell-border-vertical: none;

    thead > tr.first th {
      border-top: none;
    }
  }

  th {
    font-weight: 500;
  }

  &.compact {
    --row-height: 48px;
    --header-row-height: 48px;
    --cell-padding: 12px 8px;
  }

  //&.zebra tr.odd,
  //tr.alternative {
  //  --bgcolor: #f9f9f9;
  //  // 仍然需要 hover 效果，故 --hover-bgcolor 还是保持原样
  //}
`,v=p.a.memo((()=>p.a.createElement(p.a.Fragment,null,p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"41",className:"ant-empty-img-simple",viewBox:"0 0 64 41"},p.a.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(0 1)"},p.a.createElement("ellipse",{cx:"32",cy:"33",className:"ant-empty-img-simple-ellipse",rx:"32",ry:"7"}),p.a.createElement("g",{fillRule:"nonzero",className:"ant-empty-img-simple-g"},p.a.createElement("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),p.a.createElement("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",className:"ant-empty-img-simple-path"})))),p.a.createElement("div",{className:"empty-tips",style:{marginTop:8,color:"rgba(0,0,0,.25)",fontSize:14}},"\u6682\u65e0\u6570\u636e"))));class b extends p.a.Component{render(){const{children:e,visible:t}=this.props;return p.a.createElement("div",{className:"ant-loading-content-wrapper",style:{opacity:t?.6:void 0}},e)}}function y(){return p.a.createElement(u.a,{style:{display:"block"}})}const k=p.a.forwardRef((function(e,t){const n=Object(s.a)(e.columns);return p.a.createElement(g,Object.assign({ref:t},e,{className:f()(e.className,{"header-depth-0":0===n,"header-depth-1":1===n}),components:{EmptyContent:v,LoadingContentWrapper:b,LoadingIcon:y,...e.components}}))}));var w=n(125),j="https://gw.alipayobjects.com/os/bmw-prod/2eb02d0b-993f-4531-8424-a8df1899299e.json",C="https://gw.alipayobjects.com/os/bmw-prod/22986070-97e7-43a2-a3e4-200742c3d913.json",S="https://gw.alipayobjects.com/os/basement_prod/8e44b543-0764-411f-adfc-0dae716ef96a.csv",O=null;function x(){return O||(O=fetch(j).then((function(e){return e.json()}))),O}var E=null;function N(){return E||(E=fetch(C).then((function(e){return e.json()}))),E}var T=null;function R(){return T||(T=fetch(S).then((function(e){return e.text()})).then((function(e){for(var t,n=e.split("\n"),r=n[0],a=n.slice(1),o=r.split(","),i=[],l=function(){var e=t.value;if(""===e)return"continue";var n=e.split(","),r={};o.forEach((function(e,t){r[e]=n[t]})),i.push(r)},c=Object(w.a)(a);!(t=c()).done;)l();return i}))),T}var z=n(133),L=n(149);function M(){var e=Object(z.a)(["\n  .designer-row {\n    height: 36px;\n    display: flex;\n    align-items: center;\n\n    .label {\n      width: 160px;\n    }\n\n    .prompt {\n      color: #999;\n    }\n\n    .spare-dim {\n      text-decoration: underline;\n      margin-left: 8px;\n      cursor: pointer;\n      :hover {\n        outline: 1px dashed #ccc;\n        outline-offset: 4px;\n      }\n    }\n  }\n"]);return M=function(){return e},e}var P=m.b.div(M());function K(e){var t=e.dimensions,n=e.leftCodes,r=e.topCodes,a=e.indicatorSide,o=e.onChangeIndicatorSide,i=e.onChangeLeftCodes,l=e.onChangeTopCodes,c=e.showSubtotal,s=e.onChangeShowSubtotal,u=e.showSupportsExpandToggle,d=e.supportsExpand,f=e.onChangeSupportsExpand,h=new Map(t.map((function(e){return[e.code,e]}))),m=t.filter((function(e){return!n.includes(e.code)&&!r.includes(e.code)}));return p.a.createElement(P,null,p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u8868\u683c\u7ed3\u6784\uff1a"),p.a.createElement(L.a.Group,null,p.a.createElement(L.a,{type:"left"===a?"primary":"normal",onClick:function(){return o("left")}},"\u6307\u6807\u653e\u5728\u5de6\u4fa7"),p.a.createElement(L.a,{type:"top"===a?"primary":"normal",onClick:function(){return o("top")}},"\u6307\u6807\u653e\u5728\u4e0a\u65b9")),p.a.createElement(L.a.Group,{style:{marginLeft:16}},p.a.createElement(L.a,{onClick:function(){return s(!0)},type:c?"primary":"normal"},"\u663e\u793a\u603b\u8ba1/\u5c0f\u8ba1"),p.a.createElement(L.a,{onClick:function(){return s(!1)},type:c?"normal":"primary"},"\u9690\u85cf\u603b\u8ba1/\u5c0f\u8ba1")),u&&p.a.createElement(L.a.Group,{style:{marginLeft:16}},p.a.createElement(L.a,{onClick:function(){return f(!0)},type:d?"primary":"normal"},"\u5f00\u542f\u5c55\u5f00/\u6536\u62e2"),p.a.createElement(L.a,{onClick:function(){return f(!1)},type:d?"normal":"primary"},"\u5173\u95ed\u5c55\u5f00/\u6536\u62e2"))),p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u6e05\u7a7a\u7ef4\u5ea6\uff1a"),p.a.createElement(L.a.Group,null,p.a.createElement(L.a,{onClick:function(){return i([])},disabled:0===n.length},"\u6e05\u7a7a\u5de6\u4fa7\u7ef4\u5ea6"),p.a.createElement(L.a,{onClick:function(){return l([])},disabled:0===r.length},"\u6e05\u7a7a\u4e0a\u65b9\u7ef4\u5ea6"))),p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u5de6\u4fa7\u7684\u7ef4\u5ea6\u5e8f\u5217\uff1a"),0===n.length&&p.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),n.map((function(e,t){return p.a.createElement(p.a.Fragment,{key:t},t>0&&p.a.createElement("span",{style:{margin:"0 4px"}},">"),p.a.createElement("span",null,h.get(e).name))}))),p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u5de6\u4fa7\u7684\u53ef\u6dfb\u52a0\u7684\u7ef4\u5ea6\uff1a"),0===m.length&&p.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),m.map((function(e){return p.a.createElement("span",{key:e.code,className:"spare-dim",onClick:function(){return i(n.concat([e.code]))}},e.name)}))),p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u4e0a\u65b9\u7ef4\u5ea6\u5e8f\u5217\uff1a"),0===r.length&&p.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),r.map((function(e,t){return p.a.createElement(p.a.Fragment,{key:t},t>0&&p.a.createElement("span",{style:{margin:"0 4px"}},">"),p.a.createElement("span",null,h.get(e).name))}))),p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u4e0a\u65b9\u7684\u53ef\u6dfb\u52a0\u7684\u7ef4\u5ea6\uff1a"),0===m.length&&p.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),m.map((function(e){return p.a.createElement("span",{key:e.code,className:"spare-dim",onClick:function(){return l(r.concat([e.code]))}},e.name)}))))}var I=n(325),D=n.n(I),H=n(116),_=n.n(H);const B=e=>"-"===e||null==e?"-":String(e),A=e=>"-"===e||null==e?"-":D()(e).format("0,0"),W=A;function V(e){return _()(e,"YYYY-MM-DD HH:mm:ss.sss").format("YYYY\u5e74MM\u6708DD\u65e5 HH:mm:ss")}const G=e=>"-"===e||null==e?"-":D()(e).format("0,0.0"),$=e=>"-"===e||null==e?"-":D()(e).format("0,0.00"),F=e=>"-"===e||null==e?"-":D()(e).format("0.00%"),U=Object(h.memo)((({size:e=12,style:t})=>p.a.createElement("svg",{viewBox:"0 0 1024 1024",width:e,height:e,fill:"currentColor",style:t},p.a.createElement("path",{d:"M682.667 512v426.667H341.333V512h-256L512 0l426.667 512h-256z"})))),Y=Object(h.memo)((({size:e=12,style:t})=>p.a.createElement("svg",{viewBox:"0 0 1024 1024",width:e,height:e,fill:"currentColor",style:t},p.a.createElement("path",{d:"M682.667 426.667V0H341.333v426.667h-256l426.667 512 426.667-512h-256z"})))),q=e=>{return null==e||"-"===e||isNaN(e)||e===1/0||e===-1/0?t("-"):t((e=Number(e))>0?p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{style:{color:"#f4485c"}},D()(e).format("0.00%")),p.a.createElement(U,{style:{marginLeft:4,color:"#f4485c"}})):e<0?p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{style:{color:"#00a854"}},D()(e).format("0.00%")),p.a.createElement(Y,{style:{marginLeft:4,color:"#00a854"}})):p.a.createElement("span",{style:{color:"#838383"}},"0"));function t(e){return p.a.createElement("div",{className:"lfl-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"flex-end"}},e)}},X=e=>"-"===e||null==e?"-":(e=Number(e))<0?"-"+X(-e):0===e?String(e):e<1e4?D()(e).format("0,0"):e<1e5?D()(e/1e4).format("0.0")+"\u4e07":e<1e8?D()(e/1e4).format("0")+"\u4e07":e<1e9?D()(e/1e8).format("0.0")+"\u4ebf":D()(e/1e8).format("0")+"\u4ebf";var J=n(130);const Z=m.c`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Q=Object(m.b)(l.a)`
  --row-height: 50px;
  --header-row-height: 36px;
  --border-color: #eee;
  --lock-shadow: rgba(56, 88, 207, 0.12) 0 0 8px 4px;
  --cell-padding: 8px 20px;
  --line-height: 20px;

  --color: #666;
  --header-color: #333;
  --header-bgcolor: #f9f9f9;
  --hover-bgcolor: #eff3fb;
  --header-hover-bgcolor: #eff2fb;
  --highlight-bgcolor: #e2e6ef; // todo 该颜色需要调整
  --header-highlight-bgcolor: #e2e6ef; // todo 该颜色需要调整

  &.header-depth-1 {
    --header-row-height: 40px;
  }

  &.header-depth-0 {
    --header-row-height: 50px;
  }

  &:not(.bordered) {
    --cell-border-vertical: none;
    --header-cell-border-vertical: none;

    thead > tr.first th {
      border-top: none;
    }
    thead > tr.last th {
      border-bottom: none;
    }
  }

  th {
    font-weight: 500;
  }

  &.compact {
    --row-height: 40px;
    --header-row-height: 40px;
    --cell-padding: 8px 16px;
  }

  &.zebra tr.odd,
  tr.alternative {
    --bgcolor: #f9f9f9;
    // 仍然需要 hover 效果，故 --hover-bgcolor 还是保持原样
  }
`,ee=p.a.memo((()=>p.a.createElement(p.a.Fragment,null,p.a.createElement("img",{alt:"hippo-table-empty",width:"160",height:"160",src:"https://img.alicdn.com/tfs/TB1s7zrWeL2gK0jSZFmXXc7iXXa-240-240.svg"}),p.a.createElement("div",{className:"empty-tips",style:{marginTop:-24}},"\u6ca1\u6709\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e",p.a.createElement("br",null),"\u8bf7\u4fee\u6539\u6761\u4ef6\u540e\u91cd\u65b0\u67e5\u8be2"))));class te extends p.a.Component{constructor(){super(...arguments),this.state={warming:!1,prevVisible:!1}}static getDerivedStateFromProps(e,t){return!t.prevVisible&&e.visible?{warming:!0,prevVisible:!0}:e.visible?null:{warming:!1,prevVisible:!1}}componentDidUpdate(e){!e.visible&&this.props.visible?this.handle=setTimeout((()=>{this.setState({warming:!1})}),1e3):this.props.visible||clearTimeout(this.handle)}componentWillUnmount(){clearTimeout(this.handle)}render(){const{visible:e,children:t}=this.props,{warming:n}=this.state;return p.a.createElement("div",{className:"hippo-loading-content-wrapper",style:{filter:e?n?"blur(0.5px)":"blur(1px)":"none",transition:"filter 300ms cubic-bezier(0, 0.4, 0.6, 1)"}},t)}}const ne=Object(m.b)(J.c.Loading)`
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
  animation: 1.5s linear 0s infinite ${Z};
  opacity: 1;
  transition: opacity 300ms;
`,re=p.a.memo((()=>{const[e,t]=Object(h.useState)(!1);return Object(h.useEffect)((()=>{const e=setTimeout((()=>{t(!0)}),1e3);return()=>clearTimeout(e)}),[]),p.a.createElement(ne,{type:"loading",className:"hippo-table-loading",style:{opacity:e?1:0}})})),ae=p.a.forwardRef((function(e,t){const n=Object(s.a)(e.columns);return p.a.createElement(Q,Object.assign({ref:t},e,{className:f()(e.className,{"header-depth-0":0===n,"header-depth-1":1===n}),components:{EmptyContent:ee,LoadingContentWrapper:te,LoadingIcon:re,...e.components}}))}));var oe=n(339),ie=n(140),le=n(294);function ce(e,t){let n=[];for(let r=0;r<t;r++)n=n.concat(e);return n}function se(e){return e[Math.floor(Math.random()*e.length)]}const ue=m.b.div`
  display: flex;
  height: 20px;
  align-items: center;

  .item {
    height: 20px;
    cursor: pointer;
    color: #3858cf;
    display: flex;
    align-items: center;

    &.danger {
      color: #eb4141;
    }
  }

  .sep {
    height: 10px;
    width: 1px;
    margin-left: 12px;
    margin-right: 12px;
    background: #eeeeee;
  }
`;const de={lock:!0,name:"\u64cd\u4f5c",render:function(){return p.a.createElement(ue,null,p.a.createElement("div",{className:"item"},"\u7f16\u8f91"),p.a.createElement("div",{className:"sep"}),p.a.createElement("div",{className:"item danger"},"\u5220\u9664"),p.a.createElement("div",{className:"sep"}),p.a.createElement(oe.a,{trigger:p.a.createElement("div",{className:"item"},"\u66f4\u591a",p.a.createElement(J.c.CaretDown,{style:{color:"#A6A6A6"}})),triggerType:"click"},p.a.createElement(ie.a,null,p.a.createElement(ie.a.Item,null,"Option 1"),p.a.createElement(ie.a.Item,null,"Option 2"),p.a.createElement(ie.a.Item,null,"Option 3"),p.a.createElement(ie.a.Item,null,"Option 4"))))},width:200},fe=[{id:"1",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u62db\u5546\u94f6\u884c\u4e28\u676d\u5dde\u5206\u884c",applier:"James Collier"},{id:"2",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u5efa\u8bbe\u94f6\u884c\u4e28\u672a\u6765\u79d1\u6280\u57ce",applier:"Philip Burke"},{id:"3",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u4ea4\u901a\u94f6\u884c\u4e28\u6d59\u5927\u8def\u652f\u884c",applier:"Wesley Cruz"},{id:"4",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u62db\u5546\u94f6\u884c\u4e28\u5e86\u6625\u8def\u652f\u884c",applier:"Billy Horton"},{id:"5",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u62db\u5546\u94f6\u884c\u4e28\u6587\u4e00\u8def\u5206\u884c",applier:"Paul Tran"},{id:"6",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u519c\u4e1a\u94f6\u884c\u4e28\u676d\u5dde\u5206\u884c",applier:"Anna Poole"}],he=[{code:"name",width:220,name:"\u516c\u53f8\u540d\u79f0"},{code:"amount",width:160,align:"right",name:"\u91d1\u989d"},{code:"dept",width:160,name:"\u91d1\u878d\u673a\u6784"},{code:"applier",width:120,name:"\u7533\u8bf7\u4eba"}],pe=[{name:"\u8682\u8681\u91d1\u670d",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"South Maddison",guide:"Don Moreno"},{name:"\u963f\u91cc\u5df4\u5df4(\u4e2d\u56fd)\u6709\u9650\u516c\u53f8",dept:"\u822a\u65c5\u4e8b\u4e1a\u90e8-\u9152\u5e97\u4e1a\u52a1",dest:"Emilhaven",guide:"Douglas Richards"},{name:"\u83dc\u9e1f\u7f51\u7edc",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"},{name:"\u8682\u8681\u91d1\u670d",dept:"\u4fe1\u606f\u5e73\u53f0\u90e8-\u7528\u6237\u4f53\u9a8c\u90e8",dest:"\u676d\u5dde\u5343\u5c9b\u6e56",guide:"Eric Castillo"},{name:"\u963f\u91cc\u5df4\u5df4(\u4e2d\u56fd)\u6709\u9650\u516c\u53f8",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"East Karl",guide:"Herbert Patton"}],me=[{code:"name",name:"\u516c\u53f8\u540d\u79f0",width:200},{code:"dept",name:"\u90e8\u95e8\u540d\u79f0",width:180},{code:"dest",name:"\u56e2\u5efa\u76ee\u7684\u5730",width:160},{code:"guide",name:"\u5f53\u5730\u5bfc\u6e38",width:160}],ge=[{name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f81",entity:"\u8682\u8681\u91d1\u670d\uff08\u4e2d\u56fd\uff09",dept:"\u62db\u5546\u94f6\u884c\u4e28\u676d\u5dde\u5206\u884c",applier:"Don Moreno"},{name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f82",entity:"\u8682\u8681\u91d1\u670d\uff08\u4e2d\u56fd\uff09",dept:"\u5efa\u8bbe\u94f6\u884c\u4e28\u672a\u6765\u79d1\u6280\u57ce",applier:"Douglas Richards"},{name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f83",entity:"\u8682\u8681\u91d1\u670d\uff08\u4e2d\u56fd\uff09",dept:"\u4ea4\u901a\u94f6\u884c\u4e28\u6d59\u5927\u8def\u652f\u884c",applier:"Douglas Lee"},{name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f84",entity:"\u8682\u8681\u91d1\u670d\uff08\u4e2d\u56fd\uff09",dept:"\u62db\u5546\u94f6\u884c\u4e28\u5e86\u6625\u8def\u652f\u884c",applier:"Eric Castillo"},{name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f85",entity:"\u8682\u8681\u91d1\u670d\uff08\u4e2d\u56fd\uff09",dept:"\u62db\u5546\u94f6\u884c\u4e28\u6587\u4e00\u8def\u5206\u884c",applier:"Herbert Patton"}],ve=[{code:"name",name:"\u516c\u53f8\u540d\u79f0",width:200,features:{sortable:!0}},{code:"entity",name:"\u652f\u4ed8\u5b9e\u4f53",width:160},{code:"dept",name:"\u91d1\u878d\u673a\u6784",width:160,features:{sortable:!0}},{code:"applier",name:"\u7533\u8bf7\u4eba",width:160,features:{sortable:!0}},de];function be(e){return[{id:e+"-1",title:"\u4e8c\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee",children:[{id:e+"-1-1",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"},{id:e+"-1-2",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-\u524d\u7aef",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"}]},{id:e+"-2",title:"\u4e8c\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee",children:[{id:e+"-2-1",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"},{id:e+"-2-2",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-\u524d\u7aef",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"}]},{id:e+"-3",title:"\u4e8c\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"}]}function ye(e){return[{id:e+"-1",title:"\u4e8c\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee",children:[{id:e+"-1-1",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"},{id:e+"-1-2",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-\u524d\u7aef",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"}]},{id:e+"-2",title:"\u4e8c\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee",children:[{id:e+"-2-1",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"},{id:e+"-2-2",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-\u524d\u7aef",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"}]}]}const ke=[{id:"1",title:"\u4e00\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"South Maddison",guide:"Don Moreno",children:be("1")},{id:"2",title:"\u4e00\u7ea7\u6807\u9898",dept:"\u822a\u65c5\u4e8b\u4e1a\u90e8-\u9152\u5e97\u4e1a\u52a1",dest:"Emilhaven",guide:"Douglas Richards",children:be("2")},{id:"3",title:"\u4e00\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee",children:be("3")},{id:"4",title:"\u4e00\u7ea7\u6807\u9898",dept:"\u4fe1\u606f\u5e73\u53f0\u90e8-\u7528\u6237\u4f53\u9a8c\u90e8",dest:"\u676d\u5dde\u5343\u5c9b\u6e56",guide:"Eric Castillo",children:be("4")},{id:"5",title:"\u4e00\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"East Karl",guide:"Herbert Patton"}],we=[{code:"title",name:"\u6807\u9898",width:200},{code:"dept",name:"\u90e8\u95e8\u540d\u79f0",width:180},{code:"dest",name:"\u56e2\u5efa\u76ee\u7684\u5730",width:160},{code:"guide",name:"\u5f53\u5730\u5bfc\u6e38",width:160},de],je=[{id:"1",title:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",children:ye("1")},{id:"2",title:"\u8682\u8681\u91d1\u670d\u6709\u9650\u516c\u53f8",children:ye("2")},{id:"3",title:"\u5176\u4ed6",children:ye("3")}],Ce=[{code:"title",name:"\u6807\u9898",width:200},{code:"dept",name:"\u90e8\u95e8\u540d\u79f0",width:180},{code:"dest",name:"\u56e2\u5efa\u76ee\u7684\u5730",width:160},{code:"guide",name:"\u5f53\u5730\u5bfc\u6e38",width:160}],Se=le.a.array({align:"center",width:80,headerCellProps:{style:{textAlign:"center",padding:0}}}),Oe=["UED","\u5ba2\u670d","\u4ea7\u54c1","\u8fd0\u8425","\u524d\u7aef","\u6570\u636e"].map((e=>({occupation:e,hc_2014:104,hc_2015:168,hc_lfl:50,age_2014:30,age_2015:32,age_lfl:15,rate_2014:.3,rate_2015:.45,rate2_2014:.33,rate2_2015:.48}))),xe=Se([{lock:!0,code:"occupation",name:"\u804c\u52a1",width:120},{name:"\u4eba\u6570",children:Se([{code:"hc_2014",name:"2014\u5e74"},{code:"hc_2015",name:"2015\u5e74"},{code:"hc_lfl",name:"\u540c\u6bd4\u589e\u957f"}])},{name:"\u5e74\u9f84",children:Se([{code:"age_2014",name:"2014\u5e74"},{code:"age_2015",name:"2015\u5e74"},{code:"age_lfl",name:"\u540c\u6bd4\u589e\u957f"}])},{name:"\u5360\u6bd4",children:Se([{code:"rate_2014",name:"2014\u5e74"},{code:"rate_2015",name:"2015\u5e74"}])},{name:"\u5360\u6bd42",children:Se([{code:"rate_2014",name:"2014\u5e74"},{code:"rate_2015",name:"2015\u5e74"}])}]);var Ee=n(326),Ne=n.n(Ee);const Te={provinceName:{code:"provinceName",name:"\u7701\u4efd",width:150},cityName:{code:"cityName",name:"\u57ce\u5e02",width:150},confirmedCount:{code:"confirmedCount",name:"\u786e\u8bca",width:100,render:W,align:"right"},suspectedCount:{code:"suspectedCount",name:"\u7591\u4f3c",width:100,render:W,align:"right"},curedCount:{code:"curedCount",name:"\u6cbb\u6108",width:100,render:W,align:"right"},deadCount:{code:"deadCount",name:"\u6b7b\u4ea1",width:100,render:W,align:"right"},updateTime:{code:"updateTime",name:"\u6700\u540e\u66f4\u65b0\u65f6\u95f4",width:180,render:V}},Re={lock:!0,...Te.provinceName},ze={lock:!0,...Te.cityName},Le={lock:!0,...Te.updateTime},Me=[Te.confirmedCount,Te.curedCount,Te.deadCount],Pe={...Te,indCols:Me,lockProvCol:Re,lockCityCol:ze,lockTimeCol:Le},Ke=[Pe.provinceName,...Pe.indCols,Pe.updateTime];function Ie(){const[{dataSource:e,isLoading:t},n]=Object(h.useState)({dataSource:[],isLoading:!0});return Object(h.useEffect)((()=>{R().then((e=>{n({dataSource:Ne.a.sortBy(e.map((e=>({provinceName:e.provinceName,cityName:e.cityName,confirmedCount:Number(e.city_confirmedCount),suspectedCount:Number(e.city_suspectedCount),curedCount:Number(e.city_curedCount),deadCount:Number(e.city_deadCount),updateTime:e.updateTime}))),(e=>e.updateTime)),isLoading:!1})}))}),[]),{dataSource:e,isLoading:t}}function De(){const[{dataSource:e,isLoading:t},n]=Object(h.useState)({dataSource:[],isLoading:!0});return Object(h.useEffect)((()=>{R().then((e=>{const t=Ne.a.uniqBy(e,(e=>e.provinceName+"--"+e.updateTime)).map((e=>({provinceName:e.provinceName,confirmedCount:Number(e.province_confirmedCount),suspectedCount:Number(e.province_suspectedCount),curedCount:Number(e.province_curedCount),deadCount:Number(e.province_deadCount),updateTime:e.updateTime})));n({dataSource:Ne.a.orderBy(Object.values(Ne.a.groupBy(t,(e=>e.provinceName))).map((e=>Ne.a.maxBy(e,(e=>e.updateTime)))),(e=>-e.confirmedCount)),isLoading:!1})}))}),[]),{dataSource:e,isLoading:t}}function He(){const[{dataSource:e,isLoading:t},n]=Object(h.useState)({dataSource:[],isLoading:!0});return Object(h.useEffect)((()=>{R().then((e=>{const t=Object.values(Ne.a.groupBy(e,(e=>e.provinceName))).map((e=>{const t=Ne.a.maxBy(e,(e=>e.updateTime)),n=Object.values(Ne.a.groupBy(e,(e=>e.cityName))).map((e=>{const t=Ne.a.maxBy(e,(e=>e.updateTime));return{provinceName:t.provinceName,cityName:t.cityName,confirmedCount:Number(t.city_confirmedCount),suspectedCount:Number(t.city_suspectedCount),curedCount:Number(t.city_curedCount),deadCount:Number(t.city_deadCount),updateTime:t.updateTime}}));return{provinceName:t.provinceName,confirmedCount:Number(t.province_confirmedCount),suspectedCount:Number(t.province_suspectedCount),curedCount:Number(t.province_curedCount),deadCount:Number(t.province_deadCount),updateTime:t.updateTime,children:n}}));n({dataSource:Ne.a.sortBy(t,(e=>-e.confirmedCount)).flat(),isLoading:!1})}))}),[]),{dataSource:e,isLoading:t}}function _e({dataSource:e,value:t,onChange:n,style:r,className:a,size:o}){return p.a.createElement(L.a.Group,{style:r,className:a,size:o},e.map((e=>p.a.createElement(L.a,{key:e.value,type:e.value===t?"primary":"normal",disabled:e.disabled,onClick:()=>{e.value!==t&&n(e.value)}},e.label))))}var Be=n(313);const Ae=p.a.createContext("default"),We=()=>p.a.createElement(Be.a,null,p.a.createElement("link",{rel:"stylesheet",href:"https://gw.alipayobjects.com/os/lib/antd/4.6.6/dist/antd.css"})),Ve=()=>p.a.createElement(Be.a,null,p.a.createElement("link",{rel:"stylesheet",href:"https://gw.alipayobjects.com/os/lib/alifd/next/1.21.6/dist/next.css"})),Ge=()=>p.a.createElement(Be.a,null,p.a.createElement("link",{rel:"stylesheet",href:"https://gw.alipayobjects.com/os/lib/alife/hippo/2.12.11/dist/hippo.css"})),$e=[{key:"key:@total@",parentKey:null,name:"\u603b\u8ba1",childCount:1,a:126434.47,b:90437.96,c:86279.48,d:59811.81,lfl:.31,rate:.66},...Fe("\u676d\u5dde"),...Fe("\u4e0a\u6d77"),...Fe("\u5317\u4eac"),...Fe("\u6b66\u6c49"),...Fe("\u6210\u90fd")];function Fe(e){return[{key:"key:"+e,parentKey:"key:@total@",name:e,childCount:1,a:69665.75,b:46072.06,c:43819.82,d:30336.13,lfl:.37,rate:.65},{key:`key:${e} \u4e00\u5b63\u5ea6`,parentKey:"key:"+e,name:"\u4e00\u5b63\u5ea6",childCount:3,a:14438.76,b:9822.21,c:8724.7,d:5929.93,lfl:.39,rate:.6},{key:`key:${e} \u4e00\u5b63\u5ea6 2022-01`,parentKey:`key:${e} \u4e00\u5b63\u5ea6`,name:"2022-01",childCount:0,a:4349.64,b:3072.48,c:2412.92,d:1840.75,lfl:.44,rate:.59},{key:`key:${e} \u4e00\u5b63\u5ea6 2022-02`,parentKey:`key:${e} \u4e00\u5b63\u5ea6`,name:"2022-02",childCount:0,a:4873.01,b:3239.29,c:3072.48,d:1931.65,lfl:.36,rate:.59},{key:`key:${e} \u4e00\u5b63\u5ea6 2022-03`,parentKey:`key:${e} \u4e00\u5b63\u5ea6`,name:"2022-03",childCount:0,a:5216.1,b:3510.44,c:3239.29,d:2157.52,lfl:.37,rate:.61},{key:`key:${e} \u4e8c\u5b63\u5ea6`,parentKey:"key:"+e,name:"\u4e8c\u5b63\u5ea6",childCount:3,a:16870.42,b:10983.12,c:10585.88,d:7037.24,lfl:.37,rate:.64},{key:`key:${e} \u4e8c\u5b63\u5ea6 2022-04`,parentKey:`key:${e} \u4e8c\u5b63\u5ea6`,name:"2022-04",childCount:0,a:5214.15,b:3411.93,c:3510.44,d:2110.52,lfl:.32,rate:.61},{key:`key:${e} \u4e8c\u5b63\u5ea6 2022-05`,parentKey:`key:${e} \u4e8c\u5b63\u5ea6`,name:"2022-05",childCount:0,a:5749.32,b:3663.5,c:3411.93,d:2376.51,lfl:.4,rate:.64},{key:`key:${e} \u4e8c\u5b63\u5ea6 2022-06`,parentKey:`key:${e} \u4e8c\u5b63\u5ea6`,name:"2022-06",childCount:0,a:5906.94,b:3907.68,c:3663.5,d:2550.21,lfl:.37,rate:.65}]}function Ue(e,t){return new Promise((n=>{setTimeout(n,e,t)}))}class Ye{constructor(){this.count=0}async loadRootNodeData(){return Ue(1e3,$e.find((e=>null==e.parentKey)))}async loadNodeDataByParentKey(e){const t=$e.filter((t=>t.parentKey==e));return Ue([500,500,2e3,5e3,1e3,800,3e3][this.count++%7],t)}}},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(328),a=n(0),o=n.n(a),i=n(155);const l=n(122).a,c=l`
  // 放到 body 内增加 CSS 优先级
  body {
    a {
      &,
      :link,
      :hover,
      :visited {
        color: var(--ifm-link-color);
        text-decoration: var(--ifm-link-decoration);
      }
    }

    .menu__link {
      &,
      :link,
      :hover,
      :visited {
        color: var(--ifm-menu-color);
      }
    }

    .menu__link--active {
      &,
      :link,
      :hover,
      :visited {
        color: var(--ifm-menu-color-active);
      }
    }

    a.navbar__link {
      color: var(--ifm-navbar-link-color);
    }

    a.navbar__link:hover,
    a.navbar__link--active {
      color: var(--ifm-navbar-link-hover-color);
      text-decoration: none;
    }

    strong {
      font-weight: var(--ifm-font-weight-bold);
    }

    a.table-of-contents__link {
      color: var(--ifm-toc-link-color);
    }

    a.table-of-contents__link:hover,
    a.table-of-contents__link--active {
      color: var(--ifm-color-primary);
      text-decoration: none;
    }

    a.navbar__brand {
      color: var(--ifm-navbar-link-color);
    }

    .alert a {
      &,
      :hover,
      :link,
      :visited {
        color: var(--ifm-alert-color);
        text-decoration: underline;
      }
    }
  }

  body {
    p {
      font-size: inherit;
      line-height: inherit;
    }

    ul,
    ol {
      margin-bottom: var(--ifm-list-margin);
      margin-top: 0;
      padding-left: var(--ifm-list-left-padding);
    }

    ul {
      list-style: disc;
    }
    ol {
      list-style: decimal;
    }

    ol ul {
      list-style-type: circle;
    }

    ul,
    ol {
      margin-bottom: var(--ifm-list-margin);
      margin-top: 0;
      padding-left: var(--ifm-list-left-padding);
    }
    ol ol,
    ul ol {
      list-style-type: lower-roman;
    }
    ul ul,
    ul ol,
    ol ol,
    ol ul {
      margin-bottom: 0;
      margin-top: 0;
    }
    ul ul ol,
    ul ol ol,
    ol ul ol,
    ol ol ol {
      list-style-type: lower-alpha;
    }
  }

  html body {
    font-family: var(--ifm-font-family-base);
    color: var(--ifm-font-color-base);
    line-height: var(--ifm-line-height-base);
    font-size: var(--ifm-font-size-base);
  }
`,s=l`
  // 放到 body 内增加 CSS 优先级
  body {
    code {
      background-color: var(--ifm-code-background);
      border-radius: var(--ifm-code-border-radius);
      color: var(--ifm-code-color);
      font-family: var(--ifm-font-family-monospace);
      font-size: var(--ifm-code-font-size);
      margin: 0;
      padding: var(--ifm-code-padding-vertical) var(--ifm-code-padding-horizontal);
    }
    a code {
      color: inherit;
    }
    pre {
      background-color: var(--ifm-pre-background);
      border-radius: var(--ifm-pre-border-radius);
      color: var(--ifm-pre-color);
      font-family: var(--ifm-font-family-monospace);
      font-size: var(--ifm-code-font-size);
      line-height: var(--ifm-pre-line-height);
      margin-bottom: var(--ifm-spacing-vertical);
      margin-top: 0;
      overflow: auto;
      padding: var(--ifm-pre-padding);
      word-wrap: normal;
    }
    pre code {
      background-color: transparent;
      border: 0;
      display: inline;
      font-size: 100%;
      line-height: inherit;
      margin: 0;
      overflow: visible;
      padding: 0;
      white-space: pre;
      word-break: normal;
      word-wrap: normal;
    }
    kbd {
      background-color: var(--ifm-color-emphasis-0);
      border: 1px solid var(--ifm-color-emphasis-400);
      border-radius: 0.2rem;
      box-shadow: inset 0 -1px 0 var(--ifm-color-emphasis-400);
      color: var(--ifm-color-emphasis-800);
      font: 80% var(--ifm-font-family-monospace);
      padding: 0.15rem 0.3rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--ifm-heading-color);
      font-weight: var(--ifm-heading-font-weight);
      line-height: var(--ifm-heading-line-height);
      margin-bottom: var(--ifm-heading-margin-bottom);
      margin-top: var(--ifm-heading-margin-top);
    }
    h1 {
      font-size: var(--ifm-h1-font-size);
    }
    h2 {
      font-size: var(--ifm-h2-font-size);
    }
    h3 {
      font-size: var(--ifm-h3-font-size);
    }
    h4 {
      font-size: var(--ifm-h4-font-size);
    }
    h5 {
      font-size: var(--ifm-h5-font-size);
    }
    h6 {
      font-size: var(--ifm-h6-font-size);
    }

    strong {
      font-weight: var(--ifm-font-weight-bold);
    }
    a {
      color: var(--ifm-link-color);
      text-decoration: var(--ifm-link-decoration);
    }
    a:hover {
      color: var(--ifm-link-hover-color);
      text-decoration: var(--ifm-link-hover-decoration);
    }
    a:active,
    a:hover {
      outline-width: 0;
    }
    a:not([href]) {
      text-decoration: none;
    }
    p {
      margin-top: 0;
      margin-bottom: var(--ifm-paragraph-margin-bottom);
    }
    blockquote {
      border-left: 6px solid var(--ifm-color-emphasis-300);
      color: var(--ifm-blockquote-color);
      font-size: var(--ifm-blockquote-font-size);
      margin: 0;
      margin-bottom: var(--ifm-spacing-vertical);
      padding: var(--ifm-blockquote-padding-vertical) var(--ifm-blockquote-padding-horizontal);
    }
    blockquote > :first-child {
      margin-top: 0;
    }
    blockquote > :last-child {
      margin-bottom: 0;
    }
    hr {
      border-color: var(--ifm-hr-border-color);
      border-style: solid;
      border-width: var(--ifm-hr-border-width);
      box-sizing: content-box;
      margin: var(--ifm-hr-margin-vertical) 0;
      overflow: hidden;
      padding: 0;
    }
    hr:before {
      content: '';
      display: table;
    }
    hr:after {
      clear: both;
      content: '';
      display: table;
    }
  }
`;function u(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c,null),o.a.createElement(s,null))}function d(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,e),o.a.createElement(i.FusionStyles,null),o.a.createElement(u,null))}},294:function(e,t,n){"use strict";var r=Symbol("factory-symbol");function a(e,t){void 0===t&&(t="auto");var n=Object.keys(e);function o(t){var o=Object.assign({},t);return n.forEach((function(t){if(o[t]!==a.empty){var n,i,l=e[t];if((i=l)&&i[r])o[t]=l(o[t]);else o[t]=null!==(n=o[t])&&void 0!==n?n:l}else delete o[t]})),o}function i(e){return("auto"===t?Array.isArray(e):t)?null==e?[]:e.map(o):o(e)}return i[r]=!0,i.extends=function(e){var n=a(e,t);return function(e){return i(n(e))}},i}a.empty=Symbol("proto.empty"),a.string=function(e){if(null!=e&&"string"!=typeof e)throw new Error("must be string");return e},a.string[r]=!0,a.number=function(e){if(null!=e&&"number"!=typeof e)throw new Error("must be number");return e},a.number[r]=!0,a.notNull=function(e){if(null==e)throw new Error("must be not null");return e},a.notNull[r]=!0,a.object=function(e){return a(e,!1)},a.array=function(e){return a(e,!0)},t.a=a},295:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));var r=n(133),a=n(0),o=n.n(a),i=n(122),l=n(130),c=n(126),s=n(310);function u(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n\n  .tip-icon-wrapper {\n    margin-left: 2px;\n  }\n\n  .tip-icon {\n    display: flex;\n    fill: currentColor;\n  }\n"]);return u=function(){return e},e}var d=i.b.div(u());function f(e){var t=e.Balloon,n=e.Tooltip;return Object(s.a)((function(e){var r;if(!(null===(r=e.features)||void 0===r?void 0:r.tips))return e;var a="right"===e.align?"flex-end":"center"===e.align?"center":"flex-start";return Object.assign({},e,{title:o.a.createElement(d,{style:{justifyContent:a}},c.a.safeRenderHeader(e),t?o.a.createElement(t,{closable:!1,trigger:o.a.createElement("div",{className:"tip-icon-wrapper"},o.a.createElement(l.c.Info,{className:"tip-icon"}))},e.features.tips):o.a.createElement(n,{title:e.features.tips},o.a.createElement("div",{className:"tip-icon-wrapper"},o.a.createElement(l.c.Info,{className:"tip-icon"}))))})}))}},304:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(125);function a(e,t){for(var n,a={},o=Object(r.a)(e);!(n=o()).done;){var i=n.value,l=t(i);null==a[l]&&(a[l]=[]),a[l].push(i)}return a}},305:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(125),a=n(153);function o(e,t,n){for(var o,i=new Map,l=function(e){if(i.has(e))return i.get(e);var t={id:e,parent:null,item:null,children:[]};return i.set(e,t),t},c=Object(r.a)(n);!(o=c()).done;){var s=o.value,u=l(s[t]),d=l(s[e]);d.parent=u,u.children.push(d),d.item=s}return function e(t){for(var n,a=[],o=Object(r.a)(t);!(n=o()).done;){var i=n.value;0===i.children.length?a.push(i.item):a.push(Object.assign({},i.item,{children:e(i.children)}))}return a}(Object(a.a)(Array.from(i.values()).filter((function(e){return null==e.parent})),(function(e){return e.children})))}},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(127);function a(e,t){return function n(a){if(!Array.isArray(e))return e;return a.map((function(e){return Object(r.a)(e)?e:Object.assign({},e,{children:n(e.children)})})).sort(t)}(e)}},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(125),a=n(127);function o(e,t,n){var o=new Set(n),i={root:!0,children:[],parent:null,node:null},l=new Map;return function e(n,i,c){for(var s,u=Object(r.a)(i);!(s=u()).done;){var d=s.value,f=o.has(t(d));f&&(n.anyDescendentsChecked=!0);var h=c||f,p={parent:n,node:d,checked:h,exactChecked:f,anyAncestorsChecked:c,anyDescendentsChecked:h,allDescendentsChecked:!0};if(l.set(t(d),p),n.children.push(p),!Object(a.a)(d)&&(p.children=[],e(p,d.children,h),p.anyDescendentsChecked&&(n.anyDescendentsChecked=!0),p.allDescendentsChecked)){p.checked=!0;for(var m,g=Object(r.a)(p.children);!(m=g()).done;){m.value.anyAncestorsChecked=!0}}p.checked||(n.allDescendentsChecked=!1)}}(i,e,!1),{rootWrapper:i,wrapperMap:l}}function i(e,t,n,i){var l=o(e,t,n).rootWrapper,c=[];return function e(n){for(var o,l=Object(r.a)(n);!(o=l()).done;){var s=o.value;"all"===i?s.checked&&c.push(t(s.node)):"parent"===i?s.checked&&!s.anyAncestorsChecked&&c.push(t(s.node)):s.checked&&Object(a.a)(s)&&c.push(t(s.node)),s.anyDescendentsChecked&&!Object(a.a)(s)&&e(s.children)}}(l.children),c}function l(e,t){var n=new Set(e),r=new Set(t),a=e.filter((function(e){return r.has(e)})),o=t.filter((function(e){return!n.has(e)}));return a.concat(o)}function c(e){var t=e.tree,n=e.value,c=e.getNodeValue,s=e.checkedStrategy,u=void 0===s?"parent":s,d=e.checkStrictly,f=void 0!==d&&d,h=o(t,c,n),p=h.wrapperMap,m=h.rootWrapper;function g(e){var t=p.get(e);return f?t.exactChecked:t.checked}function v(e){var r=p.get(e).node;if(f)return g(e)?n.filter((function(t){return t!==e})):n.concat([e]);var o=n,s=p.get(c(r));if(s.checked){for(var d=s;d.anyAncestorsChecked;){var h=d.parent.children.filter((function(e){return e!==s&&!e.exactChecked}));o=o.concat(h.map((function(e){return c(e.node)}))),d=d.parent}var m=function(e){var t=new Set,n=e;for(;n.anyAncestorsChecked;)n=n.parent,t.add(c(n.node));return r(e),t;function r(e){e.checked&&t.add(c(e.node)),!Object(a.a)(e)&&e.anyDescendentsChecked&&e.children.forEach(r)}}(s);o=o.filter((function(e){return!m.has(e)}))}else o=o.concat([c(r)]);var v=i(t,c,o,u);return l(n,v)}return{isIndeterminate:function(e){if(f)return!1;var t=p.get(e);return!t.checked&&t.anyDescendentsChecked},isChecked:g,getValueAfterCheck:function(e){return g(e)?n:v(e)},getValueAfterUncheck:function(e){return g(e)?v(e):n},getValueAfterToggle:v,getValueAfterCheckAll:function(){if(f)return function(e){var t=[];return n(e),t;function n(e){for(var o,i=Object(r.a)(e);!(o=i()).done;){var l=o.value;t.push(c(l.node)),Object(a.a)(l)||n(l.children)}}}(m.children);var e=m.children.map((function(e){return c(e.node)}));return i(t,c,e,u)},getValueAfterUncheckAll:function(){return[]},getWrapper:function(e){return p.get(e)},getNode:function(e){var t;return null===(t=p.get(e))||void 0===t?void 0:t.node},getCleanValue:function(){return l(n,i(t,c,n,u))}}}},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(115),a=n.n(r);function o(e,t){return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e(r),t(r)}}function i(e,t){if(null==e)return t;if(null==t)return e;for(var n=Object.assign({},e),r=0,i=Object.keys(t);r<i.length;r++){var l=i[r],c=t[l],s=typeof c;if(null===c)n[l]=null;else if(void 0===c);else if("number"===s||"string"===s||"boolean"===s)n[l]="className"===l?a()(n[l],c):c;else if("function"===s){var u=n[l];n[l]=null==u?c:o(u,c)}else"object"===s&&(n[l]=Object.assign({},n[l],c))}return n}},309:function(e,t,n){"use strict";function r(e,t){if(null==e)return 1;if(null==t)return-1;if("number"==typeof e&&"number"==typeof t)return e-t;if("string"==typeof e&&"string"==typeof t)return e<t?-1:e>t?1:0;if(Array.isArray(e)&&Array.isArray(t)){for(var n=Math.min(e.length,t.length),a=0;a<n;a++){var o=r(e[a],t[a]);if(0!==o)return o}return e.length-t.length}return 0}n.d(t,"a",(function(){return r}))},310:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(127);function a(e){return({columns:t,dataSource:n})=>({dataSource:n,columns:function t(a,o){let i=0;const l=[];for(const s of a){const a=o+i;let u;if(Object(r.a)(s))u=e(s,{range:{start:a,end:a+1},dataSource:n}),i+=1;else{const r=t(s.children,a);u=e(Object.assign(Object.assign({},s),{children:r.result}),{range:{start:a,end:a+r.flatColCount},dataSource:n}),i+=r.flatColCount}l.push(...(c=u,null==c?[]:Array.isArray(c)?c:[c]))}var c;return{result:l,flatColCount:i}}(t,0).result})}},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(126),a=n(310),o=n(127);function i(e,t){return e===t}function l(){return Object(a.a)((function(e,t){var n,a=t.dataSource,l=t.range;if(!(null===(n=e.features)||void 0===n?void 0:n.autoRowSpan))return e;if(!Object(o.a)(e))return e;for(var c="function"==typeof e.features.autoRowSpan?e.features.autoRowSpan:i,s=[],u=0,d=null,f=null,h=0;h<a.length;h++){var p=a[h],m=r.a.safeGetValue(e,p,h);if(0===h||!c(d,m,f,p)){for(var g={top:u,bottom:h,left:l.start,right:l.end},v=u;v<h;v++)s.push(g);u=h}d=m,f=p}for(var b=u;b<a.length;b++)s.push({top:u,bottom:a.length,left:l.start,right:l.end});return Object.assign({},e,{getSpanRect:function(e,t,n){return s[n]}})}))}},324:function(e,t,n){var r={"./af":157,"./af.js":157,"./ar":158,"./ar-dz":159,"./ar-dz.js":159,"./ar-kw":160,"./ar-kw.js":160,"./ar-ly":161,"./ar-ly.js":161,"./ar-ma":162,"./ar-ma.js":162,"./ar-sa":163,"./ar-sa.js":163,"./ar-tn":164,"./ar-tn.js":164,"./ar.js":158,"./az":165,"./az.js":165,"./be":166,"./be.js":166,"./bg":167,"./bg.js":167,"./bm":168,"./bm.js":168,"./bn":169,"./bn-bd":170,"./bn-bd.js":170,"./bn.js":169,"./bo":171,"./bo.js":171,"./br":172,"./br.js":172,"./bs":173,"./bs.js":173,"./ca":174,"./ca.js":174,"./cs":175,"./cs.js":175,"./cv":176,"./cv.js":176,"./cy":177,"./cy.js":177,"./da":178,"./da.js":178,"./de":179,"./de-at":180,"./de-at.js":180,"./de-ch":181,"./de-ch.js":181,"./de.js":179,"./dv":182,"./dv.js":182,"./el":183,"./el.js":183,"./en-au":184,"./en-au.js":184,"./en-ca":185,"./en-ca.js":185,"./en-gb":186,"./en-gb.js":186,"./en-ie":187,"./en-ie.js":187,"./en-il":188,"./en-il.js":188,"./en-in":189,"./en-in.js":189,"./en-nz":190,"./en-nz.js":190,"./en-sg":191,"./en-sg.js":191,"./eo":192,"./eo.js":192,"./es":193,"./es-do":194,"./es-do.js":194,"./es-mx":195,"./es-mx.js":195,"./es-us":196,"./es-us.js":196,"./es.js":193,"./et":197,"./et.js":197,"./eu":198,"./eu.js":198,"./fa":199,"./fa.js":199,"./fi":200,"./fi.js":200,"./fil":201,"./fil.js":201,"./fo":202,"./fo.js":202,"./fr":203,"./fr-ca":204,"./fr-ca.js":204,"./fr-ch":205,"./fr-ch.js":205,"./fr.js":203,"./fy":206,"./fy.js":206,"./ga":207,"./ga.js":207,"./gd":208,"./gd.js":208,"./gl":209,"./gl.js":209,"./gom-deva":210,"./gom-deva.js":210,"./gom-latn":211,"./gom-latn.js":211,"./gu":212,"./gu.js":212,"./he":213,"./he.js":213,"./hi":214,"./hi.js":214,"./hr":215,"./hr.js":215,"./hu":216,"./hu.js":216,"./hy-am":217,"./hy-am.js":217,"./id":218,"./id.js":218,"./is":219,"./is.js":219,"./it":220,"./it-ch":221,"./it-ch.js":221,"./it.js":220,"./ja":222,"./ja.js":222,"./jv":223,"./jv.js":223,"./ka":224,"./ka.js":224,"./kk":225,"./kk.js":225,"./km":226,"./km.js":226,"./kn":227,"./kn.js":227,"./ko":228,"./ko.js":228,"./ku":229,"./ku.js":229,"./ky":230,"./ky.js":230,"./lb":231,"./lb.js":231,"./lo":232,"./lo.js":232,"./lt":233,"./lt.js":233,"./lv":234,"./lv.js":234,"./me":235,"./me.js":235,"./mi":236,"./mi.js":236,"./mk":237,"./mk.js":237,"./ml":238,"./ml.js":238,"./mn":239,"./mn.js":239,"./mr":240,"./mr.js":240,"./ms":241,"./ms-my":242,"./ms-my.js":242,"./ms.js":241,"./mt":243,"./mt.js":243,"./my":244,"./my.js":244,"./nb":245,"./nb.js":245,"./ne":246,"./ne.js":246,"./nl":247,"./nl-be":248,"./nl-be.js":248,"./nl.js":247,"./nn":249,"./nn.js":249,"./oc-lnc":250,"./oc-lnc.js":250,"./pa-in":251,"./pa-in.js":251,"./pl":252,"./pl.js":252,"./pt":253,"./pt-br":254,"./pt-br.js":254,"./pt.js":253,"./ro":255,"./ro.js":255,"./ru":256,"./ru.js":256,"./sd":257,"./sd.js":257,"./se":258,"./se.js":258,"./si":259,"./si.js":259,"./sk":260,"./sk.js":260,"./sl":261,"./sl.js":261,"./sq":262,"./sq.js":262,"./sr":263,"./sr-cyrl":264,"./sr-cyrl.js":264,"./sr.js":263,"./ss":265,"./ss.js":265,"./sv":266,"./sv.js":266,"./sw":267,"./sw.js":267,"./ta":268,"./ta.js":268,"./te":269,"./te.js":269,"./tet":270,"./tet.js":270,"./tg":271,"./tg.js":271,"./th":272,"./th.js":272,"./tk":273,"./tk.js":273,"./tl-ph":274,"./tl-ph.js":274,"./tlh":275,"./tlh.js":275,"./tr":276,"./tr.js":276,"./tzl":277,"./tzl.js":277,"./tzm":278,"./tzm-latn":279,"./tzm-latn.js":279,"./tzm.js":278,"./ug-cn":280,"./ug-cn.js":280,"./uk":281,"./uk.js":281,"./ur":282,"./ur.js":282,"./uz":283,"./uz-latn":284,"./uz-latn.js":284,"./uz.js":283,"./vi":285,"./vi.js":285,"./x-pseudo":286,"./x-pseudo.js":286,"./yo":287,"./yo.js":287,"./zh-cn":288,"./zh-cn.js":288,"./zh-hk":289,"./zh-hk.js":289,"./zh-mo":290,"./zh-mo.js":290,"./zh-tw":291,"./zh-tw.js":291};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=324},379:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n(380),i=n(142),l=n(47),c=n.n(l);t.a=function({children:e,theme:t,transformCode:n,...l}){const s=l.metastring.includes("open"),[u,d]=a.useState(s),[f,h]=a.useState(!0);return a.createElement(o.d,Object(r.a)({code:e.replace(/\n$/,""),transformCode:n||(e=>e+";"),theme:t},l),a.createElement("div",{className:Object(i.a)(c.a.playgroundHeader,c.a.playgroundEditorHeader),style:{display:"flex",cursor:"pointer",userSelect:"none"},onClick:()=>d(!u)},a.createElement("span",null,"Live Editor"),a.createElement("span",{style:{marginLeft:"auto",fontSize:"85%"}},"\u70b9\u51fb\u5c55\u5f00\u6216\u6536\u62e2")),a.createElement(o.a,{className:c.a.playgroundEditor,style:{display:u?void 0:"none"}}),a.createElement("div",{className:Object(i.a)(c.a.playgroundHeader,c.a.playgroundPreviewHeader),style:{display:"flex",cursor:"pointer",userSelect:"none"},onClick:()=>h(!f)},a.createElement("span",null,"Preview"),a.createElement("span",{style:{marginLeft:"auto",fontSize:"85%"}},"\u70b9\u51fb\u5c55\u5f00\u6216\u6536\u62e2")),a.createElement("div",{className:c.a.playgroundPreview,style:{display:f?void 0:"none"}},a.createElement(o.c,null),a.createElement(o.b,null)))}},388:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"buildRecordMatrix",(function(){return v})),n.d(r,"BuildRecordMatrixConfig",(function(){})),n.d(r,"buildRecordMap",(function(){return b})),n.d(r,"buildDrillTree",(function(){return m})),n.d(r,"BuildDrillTreeOptions",(function(){})),n.d(r,"simpleEncode",(function(){return p})),n.d(r,"RecordMatrix",(function(){})),n.d(r,"DrillNode",(function(){})),n.d(r,"convertDrillTreeToCrossTree",(function(){return O})),n.d(r,"CrossTable",(function(){return L})),n.d(r,"CrossTableProps",(function(){})),n.d(r,"buildCrossTable",(function(){return z})),n.d(r,"BuildCrossTableOptions",(function(){})),n.d(r,"ROW_KEY",(function(){return T})),n.d(r,"CrossTreeNode",(function(){})),n.d(r,"CrossTableLeftMetaColumn",(function(){})),n.d(r,"LeftCrossTreeNode",(function(){})),n.d(r,"TopCrossTreeNode",(function(){})),n.d(r,"CrossTableIndicator",(function(){})),n.d(r,"CrossTreeTable",(function(){return I})),n.d(r,"CrossTreeTableProps",(function(){})),n.d(r,"buildCrossTreeTable",(function(){return P})),n.d(r,"BuildCrossTreeTableOptions",(function(){}));var a={};n.r(a),n.d(a,"DetailDiv",(function(){return $})),n.d(a,"StyledWebsiteBaseTable",(function(){return F})),n.d(a,"Inspector",(function(){return U}));var o=n(2),i=n(0),l=n.n(i),c=n(142),s=n(132),u=n(125),d=n(127),f=n(304),h=n(153);function p(e){return 0===e.length?"key:@total@":"key:"+e.join(" ")}function m(e,t,n){var r,a=void 0===n?{}:n,o=a.encode,i=void 0===o?p:o,l=a.totalValue,c=void 0===l?"\u603b\u8ba1":l,s=a.includeTopWrapper,u=void 0!==s&&s,d=a.isExpand,h=void 0===d?function(){return!0}:d,m=a.enforceExpandTotalNode,g=void 0===m||m,v=[],b=i(v),y=!1;if(0===t.length?r=[]:g||h(b)?r=function e(n,r){for(var a=r.length,o=[],l=t[a],c=Object(f.a)(n,(function(e){return e[l]})),s=0,u=Object.keys(c);s<u.length;s++){var d=u[s];r.push(d);var p={key:i(r),value:d,path:r.slice()};o.push(p);var m=c[d];m.length>0&&a<t.length-1&&(h(p.key)?p.children=e(m,r):p.hasChild=!0),r.pop()}return o}(e,[]):(r=[],y=e.length>0),u){var k={key:b,value:c,path:v,children:r};return y&&(k.hasChild=y),[k]}return u?[{key:b,value:c,path:v,children:r}]:r}function g(e){return 1===e.length?e[0]:{}}function v(e){var t=e.data,n=e.leftCodes,r=e.topCodes,a=e.aggregate,o=void 0===a?g:a,i=e.encode,l=void 0===i?p:i,c=e.isLeftExpand,s=void 0===c?function(){return!0}:c,v=e.isTopExpand,b=void 0===v?function(){return!0}:v,y=e.prebuiltLeftTree,k=e.prebuiltTopTree,w={peculiarity:new Set},j=(null!=y?y:m(t,n,{encode:l,includeTopWrapper:!0,isExpand:s}))[0],C=(null!=k?k:m(t,r,{encode:l,includeTopWrapper:!0,isExpand:b}))[0];return function(e){var t=new Map;return function e(t,r){var a=new Map;t.set(r.leftKey,a),n(a,r.col),Object(d.a)(r)||r.children.forEach((function(n){e(t,n)}))}(t,e),t;function n(e,t){e.set(t.topKey,t.record),Object(d.a)(t)||t.children.forEach((function(t){n(e,t)}))}}(function e(t,a,i,l){var c,s=null;if(Object(d.a)(i))c=S(t,a,C,0);else{s=[];var p=n[l],m=Object(f.a)(a,(function(e){return e[p]}));t.peculiarity.add(p);for(var g,v=Object(u.a)(i.children);!(g=v()).done;){var b=g.value,y=m[b.value];y&&s.push(e(t,y,b,l+1))}t.peculiarity.delete(p),c=function(e,t){return n(e,t,C,0);function n(e,t,a,i){var l=null,c=o(t.map((function(e){return e.record})),e);if(!Object(d.a)(a)){var s=r[i];e.peculiarity.add(s);var u=Object(h.b)(a.children.map((function(e){return[e.value,e]}))),f=t.map((function(e){return Object(h.b)(e.children.map((function(e){return[e.topValue,e]})))}));l=a.children.map((function(t){var r=f.map((function(e){return e[t.value]})).filter(Boolean);return n(e,r,u[t.value],i+1)})),e.peculiarity.delete(s)}return{topKey:a.key,topValue:a.value,record:c,children:l}}}(t,s.map((function(e){return e.col})))}return{leftKey:i.key,children:s,col:c}}(w,t,j,0));function S(e,t,n,a){var i,l=null;if(Object(d.a)(n))i=o(t,e);else{l=[];var c=r[a],s=Object(f.a)(t,(function(e){return e[c]}));e.peculiarity.add(c);for(var h,p=Object(u.a)(n.children);!(h=p()).done;){var m=h.value,g=s[m.value];g&&l.push(S(e,g,m,a+1))}e.peculiarity.delete(c),i=o(l.map((function(e){return e.record})),e)}return{topKey:n.key,topValue:n.value,children:l,record:i}}}function b(e){var t=e.codes,n=e.encode,r=void 0===n?p:n,a=e.data,o=e.aggregate,i=v({data:a,leftCodes:[],topCodes:t,isTopExpand:e.isExpand,aggregate:o,encode:r}),l=r([]);return i.get(l)}var y=n(133),k=n(597),w=n(122),j=n(130);function C(){var e=Object(y.a)(["\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px 2px 0;\n  cursor: pointer;\n\n  .icon {\n    fill: #999;\n    margin-right: 4px;\n\n    &.expanded {\n      transform-origin: center center;\n      transform: rotate(90deg);\n    }\n  }\n"]);return C=function(){return e},e}var S=w.b.span(C());function O(e,t){var n=void 0===t?{}:t,r=n.indicators,a=n.encode,o=void 0===a?p:a,i=n.generateSubtotalNode,c=n.enforceExpandTotalNode,s=void 0===c||c,f=n.expandKeys,h=n.onChangeExpandKeys,m=void 0===h?k.a:h,g=n.supportsExpand,v=o([]);if(g&&null==f)throw new Error("[ali-react-table] convertDrillTreeToCrossTree(...) \u8bbe\u7f6e supportsExpand=true \u65f6\uff0cexpandKeys \u4e0d\u80fd\u4e3a null/undefined.");var b=new Set(f);return function e(t,n){for(var a,c=[],h=function(){var t=a.value,u={dataKey:t.key,dataPath:t.path};if(Object(d.a)(t)&&!t.hasChild)c.push(w(t,u));else{var h=!0,p={key:t.key,value:t.value,data:u};if(!g||s&&t.key===v?p.children=e(t.children,n+1):b.has(t.key)?(p.title=l.a.createElement(S,{onClick:function(){m(f.filter((function(e){return e!==t.key})),t,"collapse")}},l.a.createElement(j.c.CaretRight,{className:"icon expanded"}),t.value),p.children=e(t.children,n+1)):(h=!1,p.title=l.a.createElement(S,{onClick:function(){m(f.concat([t.key]),t,"expand")}},l.a.createElement(j.c.CaretRight,{className:"icon collapsed"}),t.value),null!=r&&(p.children=y(t,u))),h){var k=null==i?void 0:i(t);if(k){var C=k.position,O=void 0===C?"start":C,x=k.value,E=t.path.concat([x]),N=w({key:o(E),path:E,value:x},u);"start"===O?p.children.unshift(N):p.children.push(N)}}c.push(p)}},p=Object(u.a)(t);!(a=p()).done;)h();return c}(e,0);function y(e,t){return r.map((function(n){return Object.assign({key:o(e.path.concat([n.code])),value:n.name,data:Object.assign({},t,{indicator:n})},n)}))}function w(e,t){return null!=r?{key:e.key,value:e.value,data:t,children:y(e,t)}:{key:e.key,value:e.value,data:t}}}var x=n(6),E=n(148),N=n(151),T="rowKey",R=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function z(e){var t,n,r;const{leftTotalNode:a,topTotalNode:o}=e,i=null!==(t=e.leftTree)&&void 0!==t?t:[],l=null!==(n=e.topTree)&&void 0!==n?n:[],c=null!==(r=e.leftMetaColumns)&&void 0!==r?r:[],s=Math.max(c.length,Object(N.a)(i)+1);return{columns:function(){return[...function(){var e;const t=[];for(let i=0;i<s;i++){const l=null!==(e=c[i])&&void 0!==e?e:{},{getCellProps:s,render:u}=l,d=R(l,["getCellProps","render"]);t.push(Object.assign(Object.assign({columnType:"left",lock:!0},d),{getCellProps:n(l,i),getSpanRect:r(l,i),getValue:a(l,i),render:o(l,i)}))}return t;function n(e,t){return(n,r,a)=>{var o;const i=r.nodes[t];return null===(o=e.getCellProps)||void 0===o?void 0:o.call(e,i,t)}}function r(e,t){return(e,n)=>n.rects[t]}function a(e,t){return(e,n)=>e.nodes[t].value}function o(e,t){return(n,r,a)=>{var o;const i=r.nodes[t];return e.render?e.render(i,t):null!==(o=i.title)&&void 0!==o?o:i.value}}}(),...function(){return l.length>0?e(l,{valuePath:[],depth:0}):o?e([o],{valuePath:[],depth:0}):[];function e(n,r){const a=[];for(const o of n){if(r.valuePath.push(o.value),Object(d.a)(o))a.push(t(o,r.depth));else{const{key:t,value:n,children:i}=o,l=R(o,["key","value","children"]);a.push(Object.assign(Object.assign({columnType:"data-parent"},l),{name:n,children:e(i,{valuePath:r.valuePath,depth:r.depth+1})}))}r.valuePath.pop()}return a}}()];function t(t,n){const{key:r,value:a,children:o}=t,i=R(t,["key","value","children"]);return Object.assign(Object.assign({columnType:"data"},i),{getValue:r=>{const a=r.nodes.length-1,o=r.nodes[a];return e.getValue(o,t,a,n)},name:a,children:null,render(r,a){if(e.render){const o=a.nodes.length-1,i=a.nodes[o];return e.render(r,i,t,o,n)}return r},getCellProps(r,a){if(e.getCellProps){const o=a.nodes.length-1,i=a.nodes[o];return e.getCellProps(r,i,t,o,n)}}})}}(),dataSource:function(){const e=[],t={depth:0,nodes:[],rects:[],rowIndex:0};i.length>0?n(i,t):a&&n([a],t);return e;function n(t,r){let a=0;for(const o of t){if(o.hidden)continue;const t={top:r.rowIndex+a,bottom:-1,left:r.depth,right:-1},i={[T]:o.key,rects:[...r.rects,t],nodes:[...r.nodes,o]};if(Object(d.a)(o))t.right=s,t.bottom=t.top+1,e.push(i),a+=1;else{r.rects.push(t),r.nodes.push(o);const e=n(o.children,{nodes:r.nodes,rects:r.rects,depth:r.depth+1,rowIndex:r.rowIndex+a});r.rects.pop(),r.nodes.pop(),a+=e.count,t.right=t.left+1,t.bottom=t.top+e.count}}return{count:a}}}()}}var L=function(e){var t=e.BaseTableComponent,n=void 0===t?E.a:t,r=e.leftTree,a=e.leftTotalNode,o=e.topTree,i=e.topTotalNode,c=e.getValue,s=e.getCellProps,u=e.leftMetaColumns,d=e.render,f=e.baseTableRef,h=Object(x.a)(e,["BaseTableComponent","leftTree","leftTotalNode","topTree","topTotalNode","getValue","getCellProps","leftMetaColumns","render","baseTableRef"]),p=z({leftTree:r,topTree:o,leftTotalNode:a,topTotalNode:i,getValue:c,getCellProps:s,render:d,leftMetaColumns:u}),m=p.dataSource,g=p.columns;return l.a.createElement(n,Object.assign({ref:f},h,{primaryKey:T,dataSource:m,columns:g}))},M=n(147);function P(e){var t,n,r=e.primaryColumn,a=e.openKeys,o=e.onChangeOpenKeys,i=e.indentSize,l=e.isLeafNode,c=void 0===l?d.a:l,s=null!==(t=e.leftTree)&&void 0!==t?t:[],f=null!==(n=e.topTree)&&void 0!==n?n:[];return Object(M.b)({primaryKey:T,openKeys:a,onChangeOpenKeys:o,indentSize:i,isLeafNode:function(e,t){return c(e.node,t)}})({columns:function(){return[Object.assign({},r,{getValue:function(e){return e.node.value},getCellProps:function(e,t){if(r.getCellProps)return r.getCellProps(t.node,t.nodes.length-1)},render:function(e,t){return r.render?r.render(t.node,t.nodes.length-1):e}})].concat(function(){return e(f,{depth:0});function e(n,r){for(var a,o=[],i=Object(u.a)(n);!(a=i()).done;){var l=a.value;if(Object(d.a)(l))o.push(t(l,r.depth));else{l.key;var c=l.value,s=l.children,f=Object(x.a)(l,["key","value","children"]);o.push(Object.assign({},f,{name:c,children:e(s,{depth:r.depth+1})}))}}return o}}());function t(t,n){t.key;var r=t.value,a=(t.children,Object(x.a)(t,["key","value","children"]));return Object.assign({},a,{getValue:function(r){var a=r.nodes.length-1,o=r.node;return e.getValue(o,t,a,n)},name:r,children:null,render:function(r,a){if(e.render){var o=a.nodes.length-1,i=a.node;return e.render(r,i,t,o,n)}return r},getCellProps:function(r,a){if(e.getCellProps){var o=a.nodes.length-1,i=a.node;return e.getCellProps(r,i,t,o,n)}}})}}(),dataSource:function e(t,n){for(var r,a=[],o=Object(u.a)(t);!(r=o()).done;){var i=r.value;if(!i.hidden)if(Object(d.a)(i)){var l;a.push(((l={})[T]=i.key,l.node=i,l.nodes=[].concat(n.nodes,[i]),l))}else{var c,s=[].concat(n.nodes,[i]);n.nodes.push(i);var f=e(i.children,n);a.push(((c={})[T]=i.key,c.node=i,c.nodes=s,c.children=f,c)),n.nodes.pop()}}return a}(s,{nodes:[]})})}var K=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};class I extends l.a.Component{constructor(e){super(e),this.onChangeOpenKeys=e=>{this.props.onChangeOpenKeys(e),"openKeys"in this.props||this.setState({openKeys:e})},this.state={openKeys:e.defaultOpenKeys}}static getDerivedStateFromProps(e){return"openKeys"in e?{openKeys:e.openKeys}:null}render(){const e=this.props,{BaseTableComponent:t=E.a,leftTree:n,topTree:r,getValue:a,getCellProps:o,primaryColumn:i,render:c,openKeys:s,defaultOpenKeys:u,onChangeOpenKeys:d,indentSize:f,isLeafNode:h,baseTableRef:p}=e,m=K(e,["BaseTableComponent","leftTree","topTree","getValue","getCellProps","primaryColumn","render","openKeys","defaultOpenKeys","onChangeOpenKeys","indentSize","isLeafNode","baseTableRef"]),g=null!=s?s:this.state.openKeys,{dataSource:v,columns:b}=P({leftTree:n,topTree:r,getValue:a,getCellProps:o,render:c,primaryColumn:i,openKeys:g,onChangeOpenKeys:this.onChangeOpenKeys,indentSize:f,isLeafNode:h});return l.a.createElement(t,Object.assign({ref:p},m,{primaryKey:T,dataSource:v,columns:b}))}}I.defaultProps={defaultOpenKeys:[],onChangeOpenKeys:k.a};var D=n(386),H=n(137),_=n(155),B=n(299);function A(){var e=Object(y.a)(["\n  --bgcolor: #333;\n  --header-bgcolor: #45494f;\n  --hover-bgcolor: #46484a;\n  --header-hover-bgcolor: #606164;\n  --highlight-bgcolor: #191a1b;\n  --header-highlight-bgcolor: #191a1b;\n  --color: #dadde1;\n  --header-color: #dadde1;\n  --lock-shadow: rgb(37 37 37 / 0.5) 0 0 6px 2px;\n  --border-color: #3c4045;\n"]);return A=function(){return e},e}var W=Object(w.b)(E.a)(A()),V=l.a.forwardRef((function(e,t){var n=Object(B.a)().isDarkTheme?W:E.a;return l.a.createElement(n,Object(o.a)({ref:t},e))})),G=n(383);const $=w.b.div`
  display: flex;
  min-width: 800px;

  p:first-child {
    margin-top: 0;
  }
  p {
    margin: 0;
    line-height: 20px;
  }

  .right {
    margin-left: 48px;
  }
`,F=Object(w.b)(V)`
  tr.last-open {
    --bgcolor: rgba(128, 243, 87, 0.32);
    --hover-bgcolor: rgba(128, 243, 87, 0.32);

    .expansion-icon {
      fill: #4de247;
    }
  }

  tr.last-collapse {
    --bgcolor: rgba(253, 32, 32, 0.32);
    --hover-bgcolor: rgba(253, 32, 32, 0.32);

    .expansion-icon {
      fill: #e54950;
    }
  }
`;function U(e){const{isDarkTheme:t}=Object(B.a)();if("undefined"==typeof window)return null;const n=t?"chromeDark":"chromeLight";return l.a.createElement(G.a,Object(o.a)({theme:n},e))}const Y={React:l.a,...l.a,fusion:H,...H,styled:w.b,cx:c.a,art:s,...s,artPivot:r,...r,createAggregateFunction:D.a,assets:_,docHelpers:a,BaseTable:V,CrossTable:e=>l.a.createElement(L,Object(o.a)({BaseTableComponent:V},e)),CrossTreeTable:e=>l.a.createElement(I,Object(o.a)({BaseTableComponent:V},e))};t.a=Y},394:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(292);t.default=function(){return a.a.createElement(o.a,{title:"Page Not Found"},a.a.createElement("div",{className:"container margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col--6 col--offset-3"},a.a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.a.createElement("p",null,"We could not find what you were looking for."),a.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);