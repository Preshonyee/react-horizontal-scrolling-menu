!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=void 0},function(e,t,n){e.exports=n(5)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={alignCenter:!0,arrowClass:"scroll-menu-arrow",clickWhenDrag:!1,dragging:!0,data:[],firstPageOffset:0,innerWrapperClass:"menu-wrapper--inner",itemClass:"menu-item-wrapper",itemClassActive:"active",hideArrows:!1,hideSingleArrow:!1,lastPageOffset:0,menuItems:[],menuPos:0,menuWidth:0,menuClass:"horizontal-menu",scrollToSelected:!1,selected:0,startDragTranslate:null,translate:0,transition:.4,wrapperClass:"menu-wrapper",wheel:!0,xPoint:0,xDraggedDistance:null},i={alignCenter:r.alignCenter,arrowClass:r.arrowClass,innerWrapperClass:r.innerWrapperClass,itemClass:r.itemClass,itemClassActive:r.itemClassActive,hideArrows:r.hideArrows,hideSingleArrow:r.hideSingleArrow,clickWhenDrag:r.clickWhenDrag,data:r.data,dragging:r.dragging,scrollToSelected:r.scrollToSelected,selected:r.selected,transition:r.transition,translate:r.translate,menuClass:r.menuClass,wheel:r.wheel,wrapperClass:r.wrapperClass};t.defaultSetting=r,t.defaultProps=i,t.defaultMenuStyle={display:"flex",alignItems:"center",userSelect:"none"},t.defaultWrapperStyle={overflow:"hidden",userSelect:"none"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.propTypes=t.ScrollMenu=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=f(n(0)),s=f(n(1)),l=n(7),o=n(2),u=n(8);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var c=t.ScrollMenu=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={dragging:!1,xPoint:o.defaultSetting.xPoint,translate:n.props.translate||o.defaultSetting.translate,startDragTranslate:o.defaultSetting.startDragTranslate,xDraggedDistance:o.defaultSetting.xDraggedDistance,leftArrowVisible:!1,rightArrowVisible:!0},n.setRef=function(e){n.ref=e},n.setWrapperRef=function(e){n.ref.menuWrapper=e},n.checkSingleArrowVisibility=function(e){var t=e.translate,r=void 0===t?n.state.translate:t,i=n.props.hideSingleArrow,a=!0,s=!0,l=n.menuItems;if(i&&l){var o=n.getVisibleItems({offset:r});a=!o.includes(l[0]),s=!o.includes(l.slice(-1)[0])}return{leftArrowVisible:a,rightArrowVisible:s}},n.setSingleArrowVisibility=function(){var e=n.state,t=e.leftArrowVisible,r=e.rightArrowVisible,i=n.checkSingleArrowVisibility({}),a=i.leftArrowVisible,s=i.rightArrowVisible;t===a&&r===s||n.setState({leftArrowVisible:a,rightArrowVisible:s})},n.onLoad=function(){n.mounted=!0,n.setInitial()},n.setInitial=function(){var e=n.props,t=e.selected,i=e.data,a=e.translate,s=e.scrollToSelected;if(!i||!i.length)return!1;var l=n.getMenuItems(i.length),u=i.find(function(e){return e.key===t}),f={menuItems:l,selected:u&&-1!==u?u.key:o.defaultSetting.selected};for(var c in f)n[c]=f[c];var g=n.updateWidth({items:l,offset:0,translate:0}),p=(g.translate,d(g,["translate"]));for(var m in p)n[m]=p[m];var h=n.getAlignItemsOffset(),v="number"==typeof h&&+h.toFixed(3),w=r({},n.state),b=n.checkSingleArrowVisibility({translate:v}),y=b.leftArrowVisible,C=b.rightArrowVisible;(w.leftArrowVisible=y,w.rightArrowVisible=C,"number"!=typeof a&&(w.translate=v),s)&&(n.isScrollNeeded({itemId:t,translate:w.translate})&&(w.translate=+n.getOffsetToItemByKey(t).toFixed(3)));n.setState(r({},w))},n.isScrollNeeded=function(e){var t=e.itemId,r=e.translate,i=void 0===r?n.state.translate:r,a=n.getItemIndexByKey(t);if(-1===a)return!1;var s=n.menuItems,l=n.getVisibleItems({items:s,offset:i}),o=s[a];return!l.includes(o)},n.scrollTo=function(e){var t=n.state.translate,r=n.getOffsetToItemByKey(e);if(n.selected=e,t===r)return!1;n.setState({translate:r})},n.getMenuItems=function(e){return Object.entries(n.ref).filter(function(e){return e[0].includes("menuitem")}).slice(0,e).filter(Boolean)},n.getItemsWidth=function(e){var t=e.items,r=void 0===t?n.menuItems:t;return(r&&r.items||r).map(function(e){return e[1]}).filter(Boolean).reduce(function(e,t){return e+(0,l.getClientRect)(t).width},0)},n.getWidth=function(e){var t=e.items,r=window&&window.innerWidth,i=(0,l.getClientRect)(n.ref.menuWrapper);return{wWidth:r,menuPos:i.x,menuWidth:i.width,allItemsWidth:n.getItemsWidth({items:t})}},n.updateWidth=function(e){var t=e.items,i=void 0===t?n.menuItems:t,a=d(e,["items"]),s=n.props.alignCenter,l=n.getWidth({items:i});return r({},l,s?n.getPagesOffsets(r({items:i},l,a)):{})},n.getPagesOffsets=function(e){var t=e.items,r=void 0===t?n.menuItems:t,i=e.allItemsWidth,a=void 0===i?n.allItemsWidth:i,s=e.wWidth,l=void 0===s?n.wWidth:s,o=e.menuPos,u=void 0===o?n.menuPos:o,f=e.menuWidth,d=void 0===f?n.menuWidth:f,c=e.translate,g=void 0===c?n.state.translate:c,p=e.offset,m=void 0===p?n.state.translate:p,h=n.props.alignCenter,v=n.getVisibleItems({offset:m,items:r,wWidth:l,menuPos:u,menuWidth:d}),w=+n.getCenterOffset({items:v,menuWidth:d}).toFixed(3),b=n.getVisibleItems({items:r,offset:-a+d,wWidth:l,menuPos:u,menuWidth:d}),y=+n.getCenterOffset({items:b,menuWidth:d}).toFixed(3),C=0===g&&h?w:g;return n.firstPageOffset=w,n.lastPageOffset=y,{firstPageOffset:w,lastPageOffset:y,translate:+C.toFixed(3)}},n.onItemClick=function(e){var t=n.props,r=t.clickWhenDrag,i=t.onSelect;if(n.state.xDraggedDistance>5&&!r)return!1;n.selected=e,i&&i(e)},n.getVisibleItems=function(e){var t=e.items,r=void 0===t?n.menuItems:t,i=e.wWidth,a=void 0===i?n.wWidth:i,s=e.menuPos,o=void 0===s?n.menuPos:s,u=e.menuWidth,f=void 0===u?n.menuWidth:u,d=e.offset,c=void 0===d?n.state.translate:d,g=e.translate,p=void 0===g?n.state.translate:g;return(r.items||r).filter(function(e){var t=(0,l.getClientRect)(e[1]).width,i=n.getItemInd(r,e),s=n.getOffsetToItemByIndex({index:i,menuItems:r,translate:p});return n.elemVisible({x:s,elWidth:t,wWidth:a,menuPos:o,menuWidth:f,offset:c})})},n.elemVisible=function(e){var t=e.x,r=e.offset,i=void 0===r?0:r,a=e.elWidth,s=e.wWidth,l=void 0===s?n.wWidth:s,o=e.menuPos,u=void 0===o?n.menuPos:o,f=e.menuWidth,d=void 0===f?n.menuWidth:f,c=t+i;return c>=u-1&&c+a<=l-(l-(u+d))+1},n.getItemInd=function(e,t){return e&&t?e.findIndex(function(e){return e[0]===t[0]}):0},n.getNextItemInd=function(e,t){var r=n.menuItems;if(e){if(!t.length)return 0}else if(!t.length)return r.length;var i=e?n.getItemInd(r,t[0])-1:n.getItemInd(r,t.slice(-1)[0])+1;return i<0?0:i},n.getOffsetToItemByKey=function(e){var t=n.state.translate;if(!e)return t;var r=n.getItemIndexByKey(e);if(-1===r)return t;var i=n.menuPos,a=n.props.alignCenter;t=n.getOffsetToItemByIndex({index:r});var s=n.getVisibleItems({offset:-t});return t=-(t-i-(a?n.getCenterOffset({items:s}):o.defaultSetting.translate)),n.itBeforeStart(t)&&(t=n.getOffsetAtStart()),n.itAfterEnd(t)&&(t=n.getOffsetAtEnd()),+t.toFixed(3)},n.getItemIndexByKey=function(e){return e?n.props.data.findIndex(function(t){return t.key===e}):-1},n.getOffsetToItemByIndex=function(e){var t=e.index,r=e.menuItems,i=void 0===r?n.menuItems:r,a=e.translate,s=void 0===a?n.state.translate:a;if(!i.length)return 0;var o=t>=i.length?i.length-1:t;return+(0,l.getClientRect)(i[o][1]).x-s},n.getScrollRightOffset=function(e,t){var r=n.props.alignCenter,i=n.menuPos,a=n.lastPageOffset,s=n.getNextItem(e&&e.slice(-1)[0]?e.slice(-1)[0][0]:t.slice(-1)[0][0]),l=t.findIndex(function(e){return e[0]===s[0]}),o=n.getOffsetToItemByIndex({index:l,menuItems:t})-i,u=n.getVisibleItems({items:t,offset:-o});if(u.includes(t.slice(-1)[0]))return r?o+a:o;return r?o-n.getCenterOffset({items:u}):o},n.getScrollLeftOffset=function(e,t){var r=n.props.alignCenter,i=n.menuPos,a=n.menuWidth,s=n.firstPageOffset,l=n.getPrevItem(e&&e[0]?e[0][0]:t[0][0]),o=t.findIndex(function(e){return e[0]===l[0]}),u=n.getOffsetToItemByIndex({index:o,menuItems:t})-i-(a-n.getItemsWidth({items:[l]})),f=n.getVisibleItems({items:t,offset:-u});if(f.includes(t[0]))return r?-s:0;return r?u+n.getCenterOffset({items:f}):u},n.getAlignItemsOffset=function(){var e=n.menuWidth,t=n.allItemsWidth,r=n.menuItems,i=n.firstPageOffset,a=n.lastPageOffset,s=n.props.alignCenter,l=n.state.translate;if(t<e)return n.handleArrowClick(!s);var u=n.getVisibleItems({})||[],f=u.includes(r[0]),d=u.includes(r.slice(-1)[0]);if(!f&&!d)return+l.toFixed(3);if(f)return+(s?i:o.defaultSetting.translate).toFixed(3);var c=t-e;return+(s?-c-a:-c).toFixed(3)},n.getNextItem=function(e){var t=n.menuItems;return t[t.findIndex(function(t){return t[0]===e})+1]||t.slice(-1)[0]},n.getPrevItem=function(e){var t=n.menuItems;return t[t.findIndex(function(t){return t[0]===e})-1]||t[0]},n.getOffset=function(e){var t=n.menuItems,r=n.getVisibleItems({items:t});return e?n.getScrollLeftOffset(r,t):n.getScrollRightOffset(r,t)},n.getCenterOffset=function(e){var t=e.items,r=void 0===t?n.menuItems:t,i=e.menuWidth,a=void 0===i?n.menuWidth:i;return r.length?+((a-n.getItemsWidth({items:r}))/2).toFixed(3):0},n.handleWheel=function(e){if(!n.props.wheel)return!1;e.deltaY<0?n.handleArrowClick():n.handleArrowClick(!1)},n.handleArrowClickRight=function(){n.handleArrowClick(!1)},n.getOffsetAtStart=function(){var e=n.firstPageOffset;return n.props.alignCenter?e:o.defaultSetting.translate},n.getOffsetAtEnd=function(){var e=n.props.alignCenter,t=n.allItemsWidth,r=n.menuWidth,i=n.lastPageOffset,a=t-r;return e?-a-i:-a},n.handleArrowClick=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=n.props.alignCenter,r=n.allItemsWidth,i=n.menuWidth;if(!t&&!e&&i>r)return!1;var a=-n.getOffset(e);e&&n.itBeforeStart(a)&&(a=n.getOffsetAtStart()),!e&&n.itAfterEnd(a)&&(a=n.getOffsetAtEnd());var s=+a.toFixed(3);n.setState({translate:s,xPoint:o.defaultSetting.xPoint,startDragTranslate:null,xDraggedDistance:null})},n.itBeforeStart=function(e){var t=n.props.alignCenter,r=n.firstPageOffset;return t?e>r:e>o.defaultSetting.translate},n.itAfterEnd=function(e){var t=n.props.alignCenter,r=n.menuWidth,i=n.allItemsWidth,a=n.lastPageOffset;return t?e<o.defaultSetting.translate&&Math.abs(e)>i-r+a:e<o.defaultSetting.translate&&Math.abs(e)>i-r},n.getPoint=function(e){return e.touches&&e.touches.length?e.touches[0].clientX:e.clientX},n.handleDragStart=function(e){if(e&&2===e.buttons)return!1;if(!n.props.dragging)return!1;var t=n.state.translate;n.setState({dragging:!0,xPoint:0,startDragTranslate:t,xDraggedDistance:0})},n.handleDrag=function(e){var t=n.props.dragging,r=n.state,i=r.translate,a=r.dragging,s=r.xPoint,l=r.xDraggedDistance;if(!t||!a)return!1;var u=n.getPoint(e),f=s===o.defaultSetting.xPoint?o.defaultSetting.xPoint:s-u,d=i-f;n.itBeforeStart(d)&&(d-=Math.abs(f)/2),n.itAfterEnd(d)&&(d+=Math.abs(f)/2);var c=+d.toFixed(3);n.setState({xPoint:u,translate:c,xDraggedDistance:l+Math.abs(f)})},n.handleDragStop=function(e){var t=n.allItemsWidth,r=n.menuWidth,i=n.firstPageOffset,a=n.lastPageOffset,s=n.state,l=s.dragging,u=s.xPoint,f=void 0===u?n.getPoint(e):u,d=s.translate,c=s.startDragTranslate,g=n.props,p=g.dragging,m=g.alignCenter;if(!p||!l)return!1;var h=d;if(n.itBeforeStart(d)&&(h=m?i:o.defaultSetting.translate,f=o.defaultSetting.xPoint),n.itAfterEnd(d)){var v=t-r;h=m?-v-a:-v,f=o.defaultSetting.xPoint}!m&&r>=t&&(h=o.defaultSetting.translate,f=o.defaultSetting.xPoint),h=+h.toFixed(3),n.setState({dragging:!1,xPoint:f,translate:h},function(){return n.onUpdate({translate:h,translateOld:c})})},n.isArrowsVisible=function(){var e=n.allItemsWidth,t=n.menuWidth,r=n.props.hideArrows;return!Boolean(r&&e<=t)},n.onUpdate=function(e){var t=e.translate,r=void 0===t?n.state.translate:t,i=e.translateOld,a=void 0===i?n.state.translate:i,s=n.props.onUpdate,l=n.lastTranslateUpdate;s&&r!==a&&r!==l&&(n.lastTranslateUpdate=r,s({translate:r}))},n.ref={},n.mounted=!1,n.needUpdate=!1,n.allItemsWidth=0,n.menuPos=0,n.menuWidth=0,n.wWidth=0,n.firstPageOffset=0,n.lastPageOffset=0,n.lastTranslateUpdate=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),i(t,[{key:"componentDidMount",value:function(){var e=this;this.setInitial(),window.requestAnimationFrame=window.requestAnimationFrame||function(){};var t=(0,l.testPassiveEventSupport)(),n=!t||{passive:!0,capture:!0},r=!!t&&{passive:!0,capture:!1};window.addEventListener("load",this.onLoad,r),window.addEventListener("resize",this.setInitial,r),document.addEventListener("mousemove",this.handleDrag,n),document.addEventListener("mouseup",this.handleDragStop,n),setTimeout(function(){return e.onLoad()},0)}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.state,r=n.selected,i=n.translate,a=n.dragging,s=n.leftArrowVisible,o=n.rightArrowVisible,u=t.selected,f=t.translate,d=t.dragging,c=t.leftArrowVisible,g=t.rightArrowVisible,p=this.props,m=p.translate,h=p.selected,v=p.scrollToSelected,w=e.translate,b=e.selected,y=(0,l.notUndefOrNull)(w)&&m!==w,C=w!==f&&(i!==f||y),S=(0,l.notUndefOrNull)(b)&&h!==b,I=C||b!==u&&(S||r!==u),O=s!==c,P=o!==g,W=f,x=this.props.data!==e.data||this.props.data.length!==e.data.length,A="number"==typeof w&&y&&!x;return(x||v&&S)&&(this.needUpdate=!0),I&&(S&&(this.selected=b),A&&(W=w)),A&&this.setState({translate:+W.toFixed(3)}),x||C||a!==d||I||O||P}},{key:"componentDidUpdate",value:function(e,t){var n=this;this.needUpdate&&(this.needUpdate=!1,this.onLoad());var r=t.translate,i=this.state,a=i.translate;i.dragging||r===a||this.onUpdate({translate:a,translateOld:r});var s=this.props,l=s.hideSingleArrow,o=s.transition;l&&(requestAnimationFrame(this.setSingleArrowVisibility),setTimeout(function(){return requestAnimationFrame(n.setSingleArrowVisibility)},1e3*o+10))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setInitial),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragStop)}},{key:"render",value:function(){var e=this.props,t=e.arrowClass,n=e.arrowDisabledClass,i=e.arrowLeft,s=e.arrowRight,l=e.data,f=e.innerWrapperClass,d=e.itemClass,c=e.itemClassActive,g=e.hideArrows,p=e.menuStyle,m=e.menuClass,h=e.transition,v=e.wrapperClass,w=e.wrapperStyle,b=e.forwardClick,y=this.state,C=y.translate,S=y.dragging,I=y.leftArrowVisible,O=y.rightArrowVisible,P=this.selected,W=this.mounted;if(!l||!l.length)return null;var x=!W||this.isArrowsVisible(),A=r({},o.defaultMenuStyle,p),k=r({},o.defaultWrapperStyle,w);return a.default.createElement("div",{className:m,style:A,onWheel:this.handleWheel},i&&a.default.createElement(u.ArrowWrapper,{className:t,isDisabled:!x||!I,hideArrows:g,onClick:this.handleArrowClick,disabledClass:n,forwardClick:b},i),a.default.createElement("div",{className:v,style:k,ref:this.setWrapperRef,onMouseDown:this.handleDragStart,onTouchStart:this.handleDragStart,onTouchEnd:this.handleDragStop,onMouseMove:this.handleDrag,onTouchMove:this.handleDrag},a.default.createElement(u.InnerWrapper,{data:l,translate:C,dragging:S,mounted:W,transition:h,selected:P,setRef:this.setRef,onClick:this.onItemClick,innerWrapperClass:f,itemClass:d,itemClassActive:c,forwardClick:b})),s&&a.default.createElement(u.ArrowWrapper,{className:t,isDisabled:!x||!O,hideArrows:g,onClick:this.handleArrowClickRight,disabledClass:n,forwardClick:b},s))}}]),t}(),g=t.propTypes={alignCenter:s.default.bool,arrowClass:s.default.string,arrowDisabledClass:s.default.string,arrowLeft:s.default.object,arrowRight:s.default.object,clickWhenDrag:s.default.bool,data:s.default.array.isRequired,dragging:s.default.bool,innerWrapperClass:s.default.string,itemClass:s.default.string,itemClassActive:s.default.string,hideArrows:s.default.bool,hideSingleArrow:s.default.bool,onSelect:s.default.func,onClick:s.default.func,selected:s.default.oneOfType([s.default.number,s.default.string]),translate:s.default.number,transition:s.default.number,onUpdate:s.default.func,menuClass:s.default.string,menuStyle:s.default.object,scrollToSelected:s.default.bool,wrapperStyle:s.default.object,wheel:s.default.bool,wrapperClass:s.default.string,forwardClick:s.default.bool};c.defaultProps=o.defaultProps,c.propTypes=g,t.default=c},function(e,t,n){"use strict";n.r(t);var r=n(3);t.default=r},function(e,t,n){"use strict";var r=n(6);function i(){}e.exports=function(){function e(e,t,n,i,a,s){if(s!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=i,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.notUndefOrNull=function(e){return void 0!==e&&null!==e},t.getClientRect=function(e){var t=e.getBoundingClientRect(),n=t.x,r=t.left;return{width:t.width,x:isNaN(n)?+r:+n}},t.testPassiveEventSupport=function(){var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("testPassiveEventSupport",t,t),window.removeEventListener("testPassiveEventSupport",t,t)}catch(t){e=!1}return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InnerWrapper=t.innerStyle=t.ArrowWrapper=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n(0)),s=o(n(1)),l=n(2);function o(e){return e&&e.__esModule?e:{default:e}}(t.ArrowWrapper=function(e){var t=e.className,n=e.onClick,r=e.children,s=e.isDisabled,l=e.hideArrows,o=e.disabledClass,u=e.forwardClick,f=t+" "+(l?s?o||t+"--disabled":"":""),d=i({},r.props,{onClick:function(){return u?n():null}});return a.default.createElement("div",{className:f,onClick:u?null:n},a.default.cloneElement(r,d))}).propTypes={children:s.default.object.isRequired,className:s.default.string,disabledClass:s.default.string,forwardClick:s.default.bool,hideArrows:s.default.bool,isDisabled:s.default.bool,onClick:s.default.func.isRequired};var u=t.innerStyle=function(e){var t=e.translate,n=e.dragging,r=e.mounted,i=e.transition;return{width:"9900px",transform:"translate3d("+t+"px, 0px, 0px)",transition:"transform "+(n||!r?"0":i)+"s",whiteSpace:"nowrap",textAlign:"left",userSelect:"none"}},f=t.InnerWrapper=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e,t){var r=n.props.setRef;n.ref[e]=t,r(n.ref)},n.ref={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.translate,i=t.dragging,s=t.mounted,l=t.transition,o=t.selected,f=t.innerWrapperClass,d=t.itemClass,c=t.onClick,g=t.itemClassActive,p=t.forwardClick,m=function(e,t){return String(e)===String(t)},h=n.map(function(e){var t={selected:m(e.key,o),onClick:function(){return p?c(e.key):null}};return a.default.cloneElement(e,t)});return a.default.createElement("div",{className:f,style:u({translate:r,dragging:i,mounted:s,transition:l}),ref:function(t){return e.setRef("menuInner",t)}},h.map(function(t,n){return a.default.createElement("div",{ref:function(t){return e.setRef("menuitem-"+n,t)},className:d+" "+(m(t.key,o)?g:""),key:"menuItem-"+t.key,style:{display:"inline-block"},onClick:function(){return p?null:c(t.key)}},t)}))}}]),t}();f.propTypes={data:s.default.arrayOf(s.default.object).isRequired,setRef:s.default.func.isRequired,onClick:s.default.func.isRequired,translate:s.default.number,dragging:s.default.bool,mounted:s.default.bool,transition:s.default.number,selected:s.default.oneOfType([s.default.string,s.default.number]),innerWrapperClass:s.default.string,itemClass:s.default.string,itemClassActive:s.default.string,forwardClick:s.default.bool},f.defaultProps={data:[],translate:l.defaultSetting.translate,dragging:!0,mounted:!1,transition:l.defaultSetting.transition,selected:l.defaultSetting.selected}}]);