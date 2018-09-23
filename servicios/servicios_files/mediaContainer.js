define("mediaContainer",["lodash","core","santaProps","prop-types","components","backgroundCommon"],function(e,t,n,i,o,r){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1516)}({0:function(t,n){t.exports=e},1516:function(e,t,n){var i,o;i=[n(1517),n(2)],void 0===(o=function(e,t){"use strict";var n=e.createMediaContainer({displayName:"MediaContainer",useBackgroundDetectionMixin:!1}),i=e.createMediaContainer({displayName:"HoverBox",useBackgroundDetectionMixin:!1}),o=e.createMediaContainer({displayName:"Column",useBackgroundDetectionMixin:!0,isDomOnlyUpdateAllowed:!1}),r=e.createMediaContainer({displayName:"MediaBox",useBackgroundDetectionMixin:!0});return t.compRegistrar.register("wysiwyg.viewer.components.MediaBox",r).register("wysiwyg.viewer.components.HoverBox",i).register("wysiwyg.viewer.components.Column",o).register("wysiwyg.viewer.components.MediaContainer",n),{hoverBox:i,column:o,mediaContainer:n}}.apply(t,i))||(e.exports=o)},1517:function(e,t,n){var i,o;i=[n(5),n(0),n(2),n(74),n(3),n(24)],void 0===(o=function(e,t,n,i,o,r){"use strict";var s=r.mediaCommon;return{createMediaContainer:function(r){r=r||{};var a=[s.mediaLogicMixins.fill,n.compMixins.skinBasedComp,n.compMixins.createChildComponentMixin,n.compMixins.inlineContentMixin];return r.useBackgroundDetectionMixin&&a.push(i.mixins.backgroundDetectionMixin),{displayName:r.displayName||"MediaContainer",mixins:a,propTypes:{style:o.Types.Component.style.isRequired,compDesign:o.Types.Component.compDesign,compProp:o.Types.Component.compProp,isMeshLayoutMechanism:o.Types.Layout.isMeshLayoutMechanism,containerStyle:o.Types.CompDesign.containerStyle,bgStyle:e.object,rootStyle:e.object,inlineParentStyle:e.object,inlineStyle:e.object,isMobileResponsive:e.bool},statics:{compSpecificIsDomOnlyOverride:function(){return t.get(r,"isDomOnlyUpdateAllowed",!0)},behaviors:s.mediaBehaviors.fill},getDefaultSkinName:function(){return"wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"},getSkinProperties:function(){var e=(this.props.rootStyle||this.props.style).width,n=this.props.bgStyle||s.defaultMediaStyle,i=this.props.inlineParentStyle||n,o=this.props.inlineStyle||{width:e,position:"absolute",top:0,bottom:0},r=Boolean(this.props.isMobileResponsive),a=this.props.containerStyle;return this.props.isMeshLayoutMechanism&&(t.assign(o,{position:"relative"}),t.assign(i,{position:"relative"}),t.assign(a,{position:"relative",height:"100%"})),{"":t.assign({},this.props.rootStyle&&{style:this.props.rootStyle},this.props.contentArea&&{"data-content-width":this.props.contentArea.width},r&&{"data-mobile-responsive":!0}),background:this.createFillLayers(),container:{style:a},inlineContentParent:{style:i},inlineContent:{children:this.getChildrenRenderer({contentArea:this.props.contentArea}),style:o}}}}}}}.apply(t,i))||(e.exports=o)},2:function(e,n){e.exports=t},24:function(e,t){e.exports=o},3:function(e,t){e.exports=n},5:function(e,t){e.exports=i},74:function(e,t){e.exports=r}})});
//# sourceMappingURL=mediaContainer.min.js.map