!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=48)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t,r){e.exports=r(25)()},function(e,t,r){"use strict";r.d(t,"f",function(){return n}),r.d(t,"c",function(){return o}),r.d(t,"e",function(){return a}),r.d(t,"d",function(){return i}),r.d(t,"g",function(){return c}),r.d(t,"b",function(){return l}),r.d(t,"a",function(){return u});var n=6,o=72,a=1200,i=1e6,c=1,l="select-file-type-error",u="select-file-size-error"},function(e,t){!function(){e.exports=this.lodash}()},,,,function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},,function(e,t,r){"use strict";var n=r(11),o=r.n(n),a=r(0),i=(r(5),r(1)),c=r(2),l=r(4),u=r(3),s=["core/paragraph","core/heading","core/code","core/quote","core/subhead"],b=["core/image","core/video"],m=r(6);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}r.d(t,"a",function(){return d}),r.d(t,"d",function(){return O}),r.d(t,"b",function(){return j}),r.d(t,"c",function(){return v}),r.d(t,"e",function(){return F});var p=[{value:"nodisplay",label:Object(i.__)("No Display","amp"),notAvailable:["core-embed/vimeo","core-embed/dailymotion","core-embed/hulu","core-embed/reddit","core-embed/soundcloud"]},{value:"fixed",label:Object(i.__)("Fixed","amp"),notAvailable:["core-embed/soundcloud"]},{value:"responsive",label:Object(i.__)("Responsive","amp"),notAvailable:["core-embed/soundcloud"]},{value:"fixed-height",label:Object(i.__)("Fixed Height","amp"),notAvailable:[]},{value:"fill",label:Object(i.__)("Fill","amp"),notAvailable:["core-embed/soundcloud"]},{value:"flex-item",label:Object(i.__)("Flex Item","amp"),notAvailable:["core-embed/soundcloud"]},{value:"intrinsic",label:Object(i.__)("Intrinsic","amp"),notAvailable:["core/video","core-embed/youtube","core-embed/facebook","core-embed/instagram","core-embed/vimeo","core-embed/dailymotion","core-embed/hulu","core-embed/reddit","core-embed/soundcloud"]}],d=function(e,t){return"core/shortcode"!==t&&"core/gallery"!==t||(e.attributes||(e.attributes={}),e.attributes.ampCarousel={type:"boolean"},e.attributes.ampLightbox={type:"boolean"}),"core/image"===t&&(e.attributes||(e.attributes={}),e.attributes.ampLightbox={type:"boolean"}),s.includes(t)&&(e.attributes||(e.attributes={}),e.attributes.ampFitText={default:!1},e.attributes.minFont={default:m.f,source:"attribute",selector:"amp-fit-text",attribute:"min-font-size"},e.attributes.maxFont={default:m.c,source:"attribute",selector:"amp-fit-text",attribute:"max-font-size"},e.attributes.height={default:"core/image"===t?200:10*Math.ceil(m.c/10),source:"attribute",selector:"amp-fit-text",attribute:"height"}),(0===t.indexOf("core-embed")||b.includes(t))&&(e.attributes||(e.attributes={}),e.attributes.ampLayout={type:"string"},e.attributes.ampNoLoading={type:"boolean"}),e},O=function(e,t,r){var n=r.text||"",o="",i={layout:"fixed-height"};if("core/shortcode"===t.name&&C(r)){if(r.ampLightbox||I(r.text||"")&&(n=L(r.text)),r.ampCarousel){if(D(n)&&(n=T(n)),!r.ampLightbox)return r.text!==n?Object(a.createElement)(a.RawHTML,null,n):e}else n=D(r.text||"")?r.text:r.text.replace("[gallery","[gallery amp-carousel=false");if(r.ampLightbox&&!I(n)&&(n=n.replace("[gallery","[gallery amp-lightbox=true")),r.text!==n)return Object(a.createElement)(a.RawHTML,null,n)}else if("core/paragraph"!==t.name||r.ampFitText){if(s.includes(t.name)&&r.ampFitText){if(r.minFont&&(i["min-font-size"]=r.minFont),r.maxFont&&(i["max-font-size"]=r.maxFont),r.height&&(i.height=r.height),"core/paragraph"===t.name){var c="<amp-fit-text";for(var l in i){c+=" "+l+'="'+i[l]+'"'}return c+=">"+h(r.content)+"</amp-fit-text>",Object(a.cloneElement)(e,{key:"new",value:c})}return i.children=e,Object(a.createElement)("amp-fit-text",i)}}else if((o=h(r.content))!==r.content)return Object(a.cloneElement)(e,{key:"new",value:o});return e},h=function(e){var t=/<amp-fit-text\b[^>]*>(.*?)<\/amp-fit-text>/.exec(e),r=e;return t&&t[1]&&(r=t[1]),r},g=function(e){for(var t=[{value:"",label:Object(i.__)("Default","amp")}],r=0,n=p;r<n.length;r++){var o=n[r];!o.notAvailable.includes(e)&&t.push({value:o.value,label:o.label})}return t},j=function(e,t,r){var n={};return"core/shortcode"===t.name?e:"amp/"===t.name.substr(0,4)?e:(r.ampLayout&&(n["data-amp-layout"]=r.ampLayout),r.ampNoLoading&&(n["data-amp-noloading"]=r.ampNoLoading),r.ampLightbox&&(n["data-amp-lightbox"]=r.ampLightbox),r.ampCarousel&&(n["data-amp-carousel"]=r.ampCarousel),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach(function(t){o()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},n,{},e))},v=function(e){return function(t){var r,n=t.attributes,o=n.text,i=n.ampLayout,c=t.setAttributes,l=t.name;if("core/shortcode"===l){if(D(o||"")&&c({text:T(o)}),I(o||"")&&c({text:L(o)}),""===(r=w(t)))return Object(a.createElement)(e,t)}else"core/gallery"===l?r=A(t):"core/image"===l?r=S(t):b.includes(l)||0===l.indexOf("core-embed/")?r=y(t):s.includes(l)&&(r=x(t));return i&&"nodisplay"===i?[r]:Object(a.createElement)(a.Fragment,null,Object(a.createElement)(e,t),r)}},y=function(e){return e.isSelected?Object(a.createElement)(l.InspectorControls,null,Object(a.createElement)(c.PanelBody,{title:Object(i.__)("AMP Settings","amp")},Object(a.createElement)(_,e),Object(a.createElement)(E,e))):null},_=function(e){var t=e.name,r=e.attributes.ampLayout,n=e.setAttributes,o=Object(i.__)("AMP Layout","amp");return"core/image"===t&&(o=Object(i.__)("AMP Layout (modifies width/height)","amp")),Object(a.createElement)(c.SelectControl,{label:o,value:r,options:g(t),onChange:function(t){n({ampLayout:t}),"core/image"===e.name&&function(e,t){var r=e.attributes,n=e.setAttributes;switch(t){case"fixed-height":r.height||n({height:400}),r.ampLightbox&&n({ampLightbox:!1});break;case"fixed":r.height||n({height:400}),r.width||n({width:608})}}(e,t)}})},E=function(e){var t=e.attributes.ampNoLoading,r=e.setAttributes,n=Object(i.__)("AMP Noloading","amp");return Object(a.createElement)(c.ToggleControl,{label:n,checked:t,onChange:function(){return r({ampNoLoading:!t})}})},x=function(e){var t=e.isSelected,r=e.attributes,n=e.setAttributes,o=r.ampFitText,u=r.minFont,s=r.maxFont,b=r.height,f=[{name:"small",shortName:Object(i._x)("S","font size","amp"),size:14},{name:"regular",shortName:Object(i._x)("M","font size","amp"),size:16},{name:"large",shortName:Object(i._x)("L","font size","amp"),size:36},{name:"larger",shortName:Object(i._x)("XL","font size","amp"),size:48}];if(!t)return null;var p=Object(i.__)("Automatically fit text to container","amp");return o&&(s=parseInt(s,10),b=parseInt(b,10),u=parseInt(u,10)),Object(a.createElement)(l.InspectorControls,null,Object(a.createElement)(c.PanelBody,{title:Object(i.__)("AMP Settings","amp"),className:o?"is-amp-fit-text":""},Object(a.createElement)(c.ToggleControl,{label:p,checked:o,onChange:function(){return n({ampFitText:!o})}})),o&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)(c.TextControl,{label:Object(i.__)("Height","amp"),value:b,min:1,onChange:function(e){n({height:e})}}),s>b&&Object(a.createElement)(c.Notice,{status:"error",isDismissible:!1},Object(i.__)("The height must be greater than the max font size.","amp")),Object(a.createElement)(c.PanelBody,{title:Object(i.__)("Minimum font size","amp")},Object(a.createElement)(c.FontSizePicker,{fallbackFontSize:14,value:u,fontSizes:f,onChange:function(e){e||(e=m.f),parseInt(e,10)<=s&&n({minFont:e})}})),u>s&&Object(a.createElement)(c.Notice,{status:"error",isDismissible:!1},Object(i.__)("The min font size must less than the max font size.","amp")),Object(a.createElement)(c.PanelBody,{title:Object(i.__)("Maximum font size","amp")},Object(a.createElement)(c.FontSizePicker,{fallbackFontSize:48,value:s,fontSizes:f,onChange:function(e){e||(e=m.c),n({maxFont:e,height:Math.max(e,b)})}}))))},w=function(e){var t=e.isSelected;if(!C(e.attributes)||!t)return null;var r=Object(u.select)("amp/block-editor").hasThemeSupport();return Object(a.createElement)(l.InspectorControls,null,Object(a.createElement)(c.PanelBody,{title:Object(i.__)("AMP Settings","amp")},r&&Object(a.createElement)(k,e),Object(a.createElement)(P,e)))},P=function(e){var t=e.attributes,r=t.ampLightbox,n=t.linkTo,o=t.ampLayout,l=e.setAttributes;return Object(a.createElement)(c.ToggleControl,{label:Object(i.__)("Add lightbox effect","amp"),checked:r,onChange:function(e){l({ampLightbox:!r}),e&&("fixed-height"===o&&l({ampLayout:"fixed"}),n&&"none"!==n&&l({linkTo:"none"}))}})},k=function(e){var t=e.attributes.ampCarousel,r=e.setAttributes;return Object(a.createElement)(c.ToggleControl,{label:Object(i.__)("Display as carousel","amp"),checked:t,onChange:function(){return r({ampCarousel:!t})}})},S=function(e){return e.isSelected?Object(a.createElement)(l.InspectorControls,null,Object(a.createElement)(c.PanelBody,{title:Object(i.__)("AMP Settings","amp")},Object(a.createElement)(_,e),Object(a.createElement)(E,e),Object(a.createElement)(P,e))):null},A=function(e){if(!e.isSelected)return null;var t=Object(u.select)("amp/block-editor").hasThemeSupport();return Object(a.createElement)(l.InspectorControls,null,Object(a.createElement)(c.PanelBody,{title:Object(i.__)("AMP Settings","amp")},t&&Object(a.createElement)(k,e),Object(a.createElement)(P,e)))},T=function(e){return e.replace(" amp-carousel=false","")},L=function(e){return e.replace(" amp-lightbox=true","")},D=function(e){return-1!==e.indexOf("amp-carousel=false")},I=function(e){return-1!==e.indexOf("amp-lightbox=true")},C=function(e){return e.text&&-1!==e.text.indexOf("gallery")},F=function(){var e=Object(u.select)("amp/block-editor"),t=e.getDefaultStatus,r=e.getPossibleStatuses,n=Object(u.select)("core/editor").getEditedPostAttribute;if("amp_story"===n("type"))return!0;var o=n("meta");return o&&o.amp_status&&r().includes(o.amp_status)?"enabled"===o.amp_status:"enabled"===t()}},function(e,t){!function(){e.exports=this.wp.hooks}()},function(e,t){!function(){e.exports=this.wp.compose}()},,,,,,,,,,function(e,t,r){"use strict";var n=r(26);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"hasThemeSupport",function(){return c}),r.d(n,"isStandardMode",function(){return l}),r.d(n,"isWebsiteEnabled",function(){return u}),r.d(n,"isStoriesEnabled",function(){return s}),r.d(n,"getDefaultStatus",function(){return b}),r.d(n,"getPossibleStatuses",function(){return m});var o=r(11),a=r.n(o),i=r(3);function c(e){return Boolean(e.hasThemeSupport)}function l(e){return Boolean(e.isStandardMode)}function u(e){return Boolean(e.isWebsiteEnabled)}function s(e){return Boolean(e.isStoriesEnabled)}function b(e){return e.defaultStatus}function m(e){return e.possibleStatuses}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object(i.registerStore)("amp/block-editor",{reducer:function(e){return e},selectors:n,initialState:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach(function(t){a()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},window.ampBlockEditor)})},,,,,,,function(e,t,r){var n=r(45),o=r(46),a=r(47);e.exports=function(e){return n(e)||o(e)||a()}},,,,,,,,,,,function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"addValidationError",function(){return w}),r.d(n,"resetValidationErrors",function(){return P}),r.d(n,"updateReviewLink",function(){return k});var o={};r.r(o),r.d(o,"getValidationErrors",function(){return S}),r.d(o,"getBlockValidationErrors",function(){return A}),r.d(o,"getReviewLink",function(){return T}),r.d(o,"isSanitizationAutoAccepted",function(){return L});var a=r(14),i=r(3),c=r(7),l=r(1),u=function(){var e=Object(i.select)("core/notices").getNotices,t=Object(i.dispatch)("core/notices").removeNotice;e().filter(function(e){return"amp-errors-notice"===e.id})&&t("amp-errors-notice")},s=[],b=function(){var e,t=Object(i.select)("amp/block-validation"),r=t.getValidationErrors,n=t.isSanitizationAutoAccepted,o=t.getReviewLink,a=Object(i.dispatch)("core/notices").createWarningNotice,c=Object(i.select)("core/editor").getCurrentPost,u=r(),s=u.length;e=Object(l.sprintf)(
/* translators: %s: number of issues */
Object(l._n)("There is %s issue from AMP validation which needs review.","There are %s issues from AMP validation which need review.",s,"amp"),s);var b=u.filter(function(e){return e.clientId}),m=b.length;if("amp_story"!==c().type)if(m>0?e+=" "+Object(l.sprintf)(
/* translators: %s: number of block errors. */
Object(l._n)("%s issue is directly due to content here.","%s issues are directly due to content here.",m,"amp"),m):1===u.length?e+=" "+Object(l.__)("The issue is not directly due to content here.","amp"):e+=" "+Object(l.__)("The issues are not directly due to content here.","amp"),e+=" ",n()){var f=b.filter(function(e){return 0===e.status||2===e.status}),p=u.filter(function(e){return 0===e.status||2===e.status});e+=0===f.length+p.length?Object(l.__)("However, your site is configured to automatically accept sanitization of the offending markup.","amp"):Object(l._n)("Your site is configured to automatically accept sanitization errors, but this error could be from when auto-acceptance was not selected, or from manually rejecting an error.","Your site is configured to automatically accept sanitization errors, but these errors could be from when auto-acceptance was not selected, or from manually rejecting an error.",u.length,"amp")}else e+=Object(l.__)("Non-accepted validation errors prevent AMP from being served, and the user will be redirected to the non-AMP version.","amp");var d={id:"amp-errors-notice"},O=o();O&&(d.actions=[{label:Object(l.__)("Review issues","amp"),url:O}]),a(e,d)},m=r(13),f=r(0),p=(r(5),function(e){var t=e.message,r=e.code,n=e.node_name,o=e.parent_name;return t?Object(f.createElement)(f.Fragment,null,t):"invalid_element"===r&&n?Object(f.createElement)(f.Fragment,null,Object(l.__)("Invalid element: ","amp"),Object(f.createElement)("code",null,n)):"invalid_attribute"===r&&n?Object(f.createElement)(f.Fragment,null,Object(l.__)("Invalid attribute: ","amp"),Object(f.createElement)("code",null,o?Object(l.sprintf)("%s[%s]",o,n):n)):Object(f.createElement)(f.Fragment,null,Object(l.__)("Error code: ","amp"),Object(f.createElement)("code",null,r||Object(l.__)("unknown","amp")))}),d=r(2),O=r(15),h=Object(i.withSelect)(function(e,t){var r=t.clientId;return{blockValidationErrors:(0,e("amp/block-validation").getBlockValidationErrors)(r)}}),g=Object(O.createHigherOrderComponent)(function(e){return h(function(t){var r=t.blockValidationErrors,n=t.onReplace,o=r.length;if(0===o)return Object(f.createElement)(e,t);var a=[{label:Object(l.__)("Remove Element","amp"),onClick:function(){return n([])}}];return Object(f.createElement)(f.Fragment,null,Object(f.createElement)(d.Notice,{status:"warning",isDismissible:!1,actions:a},Object(f.createElement)("details",{className:"amp-block-validation-errors"},Object(f.createElement)("summary",{className:"amp-block-validation-errors__summary"},Object(l.sprintf)(Object(l._n)("There is %s issue from AMP validation.","There are %s issues from AMP validation.",o,"amp"),o)),Object(f.createElement)("ul",{className:"amp-block-validation-errors__list"},r.map(function(e,t){return Object(f.createElement)("li",{key:t},Object(f.createElement)(p,e))})))),Object(f.createElement)(e,t))})},"withValidationErrorNotice"),j=r(11),v=r.n(j),y=r(34),_=r.n(y);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(r,!0).forEach(function(t){v()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function w(e,t){return{type:"ADD_VALIDATION_ERROR",error:e,clientId:t}}function P(){return{type:"RESET_VALIDATION_ERRORS"}}function k(e){return{type:"UPDATE_REVIEW_LINK",url:e}}function S(e){return e.errors}function A(e,t){return e.errors.filter(function(e){return e.clientId===t})}function T(e){return e.reviewLink}function L(e){return Boolean(e.isSanitizationAutoAccepted)}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object(i.registerStore)("amp/block-validation",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.url,o=t.error,a=t.clientId;switch(r){case"ADD_VALIDATION_ERROR":var i=e?e.errors:[],c=x({},o,{clientId:a});return x({},e,{errors:[].concat(_()(i),[c])});case"RESET_VALIDATION_ERRORS":return x({},e,{errors:[]});case"UPDATE_REVIEW_LINK":return x({},e,{reviewLink:n})}return e},selectors:o,actions:n,initialState:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(r,!0).forEach(function(t){v()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},window.ampBlockValidation,{errors:[],reviewLink:void 0})}),r(27);var I=Object(i.select)("core/editor").isEditedPostDirty;Object(i.subscribe)(function(){var e,t;I()||(Object(m.e)()?function(){var e=Object(i.select)("core/block-editor"),t=e.getBlockCount,r=e.getClientIdsWithDescendants,n=e.getBlock,o=Object(i.select)("core/editor").getCurrentPost,a=Object(i.dispatch)("amp/block-validation"),l=a.resetValidationErrors,m=a.addValidationError,f=a.updateReviewLink;if(0!==t()){var p=o(),d=p.amp_validity||{};if(d.results&&d.review_link){var O=d.results.filter(function(e){return 3!==e.term_status}).map(function(e){return e.error});if(!Object(c.isEqual)(O,s))if(s=O,l(),0!==O.length){f(d.review_link);var h=r(),g=!0,j=!1,v=void 0;try{for(var y,_=O[Symbol.iterator]();!(g=(y=_.next()).done);g=!0){var E=y.value;if(!E.sources){m(E);break}var x=void 0,w=!0,P=!1,k=void 0;try{for(var S,A=E.sources[Symbol.iterator]();!(w=(S=A.next()).done);w=!0){var T=S.value;if(T.block_name&&void 0!==T.block_content_index&&p.id===T.post_id){var L=h[T.block_content_index];if(L){var D=n(L);D&&D.name===T.block_name&&(x=L)}}}}catch(e){P=!0,k=e}finally{try{w||null==A.return||A.return()}finally{if(P)throw k}}m(E,x)}}catch(e){j=!0,v=e}finally{try{g||null==_.return||_.return()}finally{if(j)throw v}}b()}else u()}}}():(e=Object(i.select)("amp/block-validation").getValidationErrors,t=Object(i.dispatch)("amp/block-validation").resetValidationErrors,e().length>0&&(t(),u(),s=[])))}),Object(a.addFilter)("editor.BlockEdit","amp/add-notice",g,99)}]);