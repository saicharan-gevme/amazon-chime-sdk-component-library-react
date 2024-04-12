/*! For license information please see components-ui-icons-Dock-Dock-stories.b5b08f15.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[9087],{"./src/components/ui/icons/Dock/Dock.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Dock:()=>_Dock,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Dock/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\nimport Dock from '.';\n\nexport default {\n  title: 'UI Components/Icons/Dock',\n  component: Dock,\n};\n\nexport const _Dock = (args) => <Dock {...args} />;\n\n_Dock.argTypes = {\n  width: { control: 'text' },\n  undock: { control: 'boolean' },\n};\n\n_Dock.args = {\n  width: '2rem',\n  undock: false,\n};\n\n_Dock.story = {\n  name: 'Dock',\n};\n",locationsMap:{dock:{startLoc:{col:21,line:12},endLoc:{col:49,line:12},startBody:{col:21,line:12},endBody:{col:49,line:12}}}}},title:"UI Components/Icons/Dock",component:___WEBPACK_IMPORTED_MODULE_1__.A},_Dock=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args});_Dock.displayName="_Dock",_Dock.argTypes={width:{control:"text"},undock:{control:"boolean"}},_Dock.args={width:"2rem",undock:!1},_Dock.story={name:"Dock"},_Dock.parameters={..._Dock.parameters,docs:{..._Dock.parameters?.docs,source:{originalSource:"args => <Dock {...args} />",..._Dock.parameters?.docs?.source}}};const __namedExportsOrder=["_Dock"];try{_Dock.displayName="_Dock",_Dock.__docgenInfo={description:"",displayName:"_Dock",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Dock/Dock.stories.tsx#_Dock"]={docgenInfo:_Dock.__docgenInfo,name:"_Dock",path:"src/components/ui/icons/Dock/Dock.stories.tsx#_Dock"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/Dock/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Svg.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dock=({undock,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Svg__WEBPACK_IMPORTED_MODULE_1__.A,{...rest,children:undock?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M11.434 5c.276 0 .5.223.5.5 0 .276-.224.5-.5.5H8.967C7.331 6 6 7.331 6 8.966v6.067C6 16.67 7.331 18 8.967 18h6.066C16.669 18 18 16.67 18 15.033v-2.467c0-.276.224-.5.5-.5s.5.224.5.5v2.467C19 17.22 17.221 19 15.033 19H8.967C6.779 19 5 17.22 5 15.033V8.966C5 6.78 6.779 5 8.967 5zM18.5 5c.066 0 .13.014.19.038.124.05.22.149.272.27.024.063.038.127.038.192v4c0 .277-.224.5-.5.5s-.5-.223-.5-.5V6.707l-6.121 6.122c-.098.097-.226.146-.354.146-.127 0-.255-.05-.353-.146-.195-.196-.195-.512 0-.708L17.292 6H14.5c-.276 0-.5-.223-.5-.5 0-.276.224-.5.5-.5z"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M11.434 5c.276 0 .5.223.5.5 0 .276-.224.5-.5.5H8.967C7.331 6 6 7.331 6 8.966v6.067C6 16.67 7.331 18 8.967 18h6.066C16.669 18 18 16.67 18 15.033v-2.467c0-.276.224-.5.5-.5s.5.224.5.5v2.467C19 17.22 17.221 19 15.033 19H8.967C6.779 19 5 17.22 5 15.033V8.966C5 6.78 6.779 5 8.967 5zm6.067 1c.127 0 .255.049.353.146.195.196.195.512 0 .708l-6.121 6.12h2.793c.276 0 .5.224.5.5 0 .277-.224.5-.5.5h-4c-.066 0-.13-.013-.191-.037-.123-.051-.22-.15-.271-.271-.024-.062-.038-.126-.038-.191v-4c0-.277.224-.5.5-.5s.5.223.5.5v2.793l6.12-6.122c.099-.097.227-.146.355-.146z"})});Dock.displayName="Dock",Dock.displayName="Dock";const __WEBPACK_DEFAULT_EXPORT__=Dock;try{Dock.displayName="Dock",Dock.__docgenInfo={description:"",displayName:"Dock",props:{undock:{defaultValue:null,description:"Whether or not should show a undock icon.",name:"undock",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:null,description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Dock/index.tsx#Dock"]={docgenInfo:Dock.__docgenInfo,name:"Dock",path:"src/components/ui/icons/Dock/index.tsx#Dock"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/Svg.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Svg=({className,children,viewBox="0 0 24 24",xmlns="http://www.w3.org/2000/svg",width,height,title,...otherProps})=>{const styles={width,height};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns,className:`Svg ${className||""}`,height,style:styles,viewBox,width,...otherProps,children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title",{children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{fillRule:"evenodd",fill:"currentColor",children})]})};Svg.displayName="Svg";const __WEBPACK_DEFAULT_EXPORT__=Svg;try{Svg.displayName="Svg",Svg.__docgenInfo={description:"",displayName:"Svg",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:{value:"0 0 24 24"},description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Svg.tsx#Svg"]={docgenInfo:Svg.__docgenInfo,name:"Svg",path:"src/components/ui/icons/Svg.tsx#Svg"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);