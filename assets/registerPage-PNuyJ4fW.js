import{r as R,j as h,i as it,s as at,c as ct,b as lt,u as ut,T as _e,L as ht,B as dt,d as ft}from"./index-buz_ekrc.js";import{a as pt,u as mt,i as gt,b as _t}from"./auth-ledN7efY.js";const bt=({onChange:t,value:e,id:n,name:r,label:s})=>{const o=({target:i})=>{if(!i.files||i.files.length===0)return;const a=i.files[0],c=window.URL.createObjectURL(a).toString();if(r)return t({target:{name:r,value:a,img:c}})};return h.jsxs("div",{className:"text-warmGray-50 p-2 m-2 z-[1] w-full max-w-[400px] mx-auto ",children:[h.jsxs("label",{className:"pb-4 flex justify-start flex-col",htmlFor:n,children:[s,h.jsx("div",{style:{backgroundImage:`url(${e})`},className:"mx-auto bg-contain bg-no-repeat bg-center w-40 h-40 flex justify-center items-center text-warmGray-50 text-4xl border border-warmGray-50 rounded-sm cursor-pointer",children:e?"":"+"})]}),h.jsx("input",{className:"hidden",accept:"image/*",onChange:i=>o(i),type:"file",name:r,id:n})]})},Et=R.memo(bt),wt=t=>it(t)?"name"in t&&typeof t.name=="string"&&"value"in t&&t.value instanceof File&&"img"in t&&typeof t.img=="string":!1,yt=()=>`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${(Math.random()+1).toString(36).substring(7)}`;var be={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},It=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],a=t[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},Be={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,g=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|l>>6,_=l&63;c||(_=64,i||(f=64)),r.push(n[g],n[d],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xe(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):It(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||l==null||d==null)throw new Rt;const f=o<<2|a>>4;if(r.push(f),l!==64){const _=a<<4&240|l>>2;if(r.push(_),d!==64){const y=l<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Rt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const At=function(t){const e=xe(t);return Be.encodeByteArray(e,!0)},G=function(t){return At(t).replace(/\./g,"")},Tt=function(t){try{return Be.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=()=>Dt().__FIREBASE_DEFAULTS__,St=()=>{if(typeof process>"u"||typeof be>"u")return;const t=be.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ct=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tt(t[1]);return e&&JSON.parse(e)},ke=()=>{try{return vt()||St()||Ct()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ot=t=>{var e,n;return(n=(e=ke())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Nt=t=>{const e=Ot(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ue=()=>{var t;return(t=ke())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[G(JSON.stringify(n)),G(JSON.stringify(i)),""].join(".")}function kt(){try{return typeof indexedDB=="object"}catch{return!1}}function Ut(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="FirebaseError";class M extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pt,Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pe.prototype.create)}}class Pe{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Lt(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new M(s,a,r)}}function Lt(t,e){return t.replace(Mt,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mt=/\{\$([^}]+)}/g;function se(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(Ee(o)&&Ee(i)){if(!se(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ee(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return t&&t._delegate?t._delegate:t}class j{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jt(e))try{this.getOrInitializeService({instanceIdentifier:x})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=x){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=x){return this.instances.has(e)}getOptions(e=x){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ft(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=x){return this.component?this.component.multipleInstances?e:x:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ft(t){return t===x?void 0:t}function jt(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $t(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(u||(u={}));const Vt={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},zt=u.INFO,Wt={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},Gt=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Wt[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kt{constructor(e){this.name=e,this._logLevel=zt,this._logHandler=Gt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in u))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...e),this._logHandler(this,u.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...e),this._logHandler(this,u.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,u.INFO,...e),this._logHandler(this,u.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,u.WARN,...e),this._logHandler(this,u.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...e),this._logHandler(this,u.ERROR,...e)}}const qt=(t,e)=>e.some(n=>t instanceof n);let we,ye;function Xt(){return we||(we=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jt(){return ye||(ye=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Le=new WeakMap,oe=new WeakMap,Me=new WeakMap,Z=new WeakMap,he=new WeakMap;function Yt(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(S(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Le.set(n,t)}).catch(()=>{}),he.set(e,t),e}function Zt(t){if(oe.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});oe.set(t,e)}let ie={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oe.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Me.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return S(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qt(t){ie=t(ie)}function en(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Q(this),e,...n);return Me.set(r,e.sort?e.sort():[e]),S(r)}:Jt().includes(t)?function(...e){return t.apply(Q(this),e),S(Le.get(this))}:function(...e){return S(t.apply(Q(this),e))}}function tn(t){return typeof t=="function"?en(t):(t instanceof IDBTransaction&&Zt(t),qt(t,Xt())?new Proxy(t,ie):t)}function S(t){if(t instanceof IDBRequest)return Yt(t);if(Z.has(t))return Z.get(t);const e=tn(t);return e!==t&&(Z.set(t,e),he.set(e,t)),e}const Q=t=>he.get(t);function nn(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=S(i);return r&&i.addEventListener("upgradeneeded",c=>{r(S(i.result),c.oldVersion,c.newVersion,S(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const rn=["get","getKey","getAll","getAllKeys","count"],sn=["put","add","delete","clear"],ee=new Map;function Ie(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ee.get(e))return ee.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rn.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ee.set(e,o),o}Qt(t=>({...t,get:(e,n,r)=>Ie(e,n)||t.get(e,n,r),has:(e,n)=>!!Ie(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(an(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function an(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ae="@firebase/app",Re="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Kt("@firebase/app"),cn="@firebase/app-compat",ln="@firebase/analytics-compat",un="@firebase/analytics",hn="@firebase/app-check-compat",dn="@firebase/app-check",fn="@firebase/auth",pn="@firebase/auth-compat",mn="@firebase/database",gn="@firebase/database-compat",_n="@firebase/functions",bn="@firebase/functions-compat",En="@firebase/installations",wn="@firebase/installations-compat",yn="@firebase/messaging",In="@firebase/messaging-compat",Rn="@firebase/performance",An="@firebase/performance-compat",Tn="@firebase/remote-config",Dn="@firebase/remote-config-compat",vn="@firebase/storage",Sn="@firebase/storage-compat",Cn="@firebase/firestore",On="@firebase/firestore-compat",Nn="firebase",xn="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="[DEFAULT]",Bn={[ae]:"fire-core",[cn]:"fire-core-compat",[un]:"fire-analytics",[ln]:"fire-analytics-compat",[dn]:"fire-app-check",[hn]:"fire-app-check-compat",[fn]:"fire-auth",[pn]:"fire-auth-compat",[mn]:"fire-rtdb",[gn]:"fire-rtdb-compat",[_n]:"fire-fn",[bn]:"fire-fn-compat",[En]:"fire-iid",[wn]:"fire-iid-compat",[yn]:"fire-fcm",[In]:"fire-fcm-compat",[Rn]:"fire-perf",[An]:"fire-perf-compat",[Tn]:"fire-rc",[Dn]:"fire-rc-compat",[vn]:"fire-gcs",[Sn]:"fire-gcs-compat",[Cn]:"fire-fst",[On]:"fire-fst-compat","fire-js":"fire-js",[Nn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=new Map,le=new Map;function kn(t,e){try{t.container.addComponent(e)}catch(n){k.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function q(t){const e=t.name;if(le.has(e))return k.debug(`There were multiple attempts to register component ${e}.`),!1;le.set(e,t);for(const n of K.values())kn(n,t);return!0}function Un(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},C=new Pe("app","Firebase",Pn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new j("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=xn;function $e(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ce,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw C.create("bad-app-name",{appName:String(s)});if(n||(n=Ue()),!n)throw C.create("no-options");const o=K.get(s);if(o){if(se(n,o.options)&&se(r,o.config))return o;throw C.create("duplicate-app",{appName:s})}const i=new Ht(s);for(const c of le.values())i.addComponent(c);const a=new Ln(n,r,i);return K.set(s,a),a}function $n(t=ce){const e=K.get(t);if(!e&&t===ce&&Ue())return $e();if(!e)throw C.create("no-app",{appName:t});return e}function L(t,e,n){var r;let s=(r=Bn[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),k.warn(a.join(" "));return}q(new j(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="firebase-heartbeat-database",jn=1,H="firebase-heartbeat-store";let te=null;function Fe(){return te||(te=nn(Fn,jn,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(H)}catch(n){console.warn(n)}}}}).catch(t=>{throw C.create("idb-open",{originalErrorMessage:t.message})})),te}async function Hn(t){try{return await(await Fe()).transaction(H).objectStore(H).get(je(t))}catch(e){if(e instanceof M)k.warn(e.message);else{const n=C.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});k.warn(n.message)}}}async function Ae(t,e){try{const r=(await Fe()).transaction(H,"readwrite");await r.objectStore(H).put(e,je(t)),await r.done}catch(n){if(n instanceof M)k.warn(n.message);else{const r=C.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});k.warn(r.message)}}}function je(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=1024,zn=30*24*60*60*1e3;class Wn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Te();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=zn}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Te(),{heartbeatsToSend:r,unsentEntries:s}=Gn(this._heartbeatsCache.heartbeats),o=G(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Te(){return new Date().toISOString().substring(0,10)}function Gn(t,e=Vn){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),De(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),De(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kt()?Ut().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hn(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ae(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ae(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function De(t){return G(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){q(new j("platform-logger",e=>new on(e),"PRIVATE")),q(new j("heartbeat",e=>new Wn(e),"PRIVATE")),L(ae,Re,t),L(ae,Re,"esm2017"),L("fire-js","")}qn("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="firebasestorage.googleapis.com",Ve="storageBucket",Xn=2*60*1e3,Jn=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m extends M{constructor(e,n,r=0){super(ne(e),`Firebase Storage: ${n} (${ne(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,m.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ne(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var p;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(p||(p={}));function ne(t){return"storage/"+t}function de(){const t="An unknown error occurred, please check the error payload for server response.";return new m(p.UNKNOWN,t)}function Yn(t){return new m(p.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Zn(t){return new m(p.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Qn(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new m(p.UNAUTHENTICATED,t)}function er(){return new m(p.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tr(t){return new m(p.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nr(){return new m(p.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rr(){return new m(p.CANCELED,"User canceled the upload/download.")}function sr(t){return new m(p.INVALID_URL,"Invalid URL '"+t+"'.")}function or(t){return new m(p.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ir(){return new m(p.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ve+"' property when initializing the app?")}function ar(){return new m(p.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function cr(){return new m(p.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lr(t){return new m(p.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ue(t){return new m(p.INVALID_ARGUMENT,t)}function ze(){return new m(p.APP_DELETED,"The Firebase app was deleted.")}function ur(t){return new m(p.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function F(t,e){return new m(p.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $(t){throw new m(p.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=A.makeFromUrl(e,n)}catch{return new A(e,"")}if(r.path==="")return r;throw or(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+s+i,"i"),c={bucket:1,path:3};function l(I){I.path_=decodeURIComponent(I.path)}const g="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${g}/b/${s}/o${f}`,"i"),y={bucket:1,path:3},b=n===He?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",P=new RegExp(`^https?://${b}/${s}/${E}`,"i"),T=[{regex:a,indices:c,postModify:o},{regex:_,indices:y,postModify:l},{regex:P,indices:{bucket:1,path:2},postModify:l}];for(let I=0;I<T.length;I++){const V=T[I],J=V.regex.exec(e);if(J){const ot=J[V.indices.bucket];let Y=J[V.indices.path];Y||(Y=""),r=new A(ot,Y),V.postModify(r);break}}if(r==null)throw sr(e);return r}}class hr{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e,n){let r=1,s=null,o=null,i=!1,a=0;function c(){return a===2}let l=!1;function g(...E){l||(l=!0,e.apply(null,E))}function d(E){s=setTimeout(()=>{s=null,t(_,c())},E)}function f(){o&&clearTimeout(o)}function _(E,...P){if(l){f();return}if(E){f(),g.call(null,E,...P);return}if(c()||i){f(),g.call(null,E,...P);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,d(T)}let y=!1;function b(E){y||(y=!0,f(),!l&&(s!==null?(E||(a=2),clearTimeout(s),d(0)):E||(a=1)))}return d(0),o=setTimeout(()=>{i=!0,b(!0)},n),b}function fr(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){return t!==void 0}function mr(t){return typeof t=="object"&&!Array.isArray(t)}function fe(t){return typeof t=="string"||t instanceof String}function ve(t){return pe()&&t instanceof Blob}function pe(){return typeof Blob<"u"}function Se(t,e,n,r){if(r<e)throw ue(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ue(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function We(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(B||(B={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r,s,o,i,a,c,l,g,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=g,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,y)=>{this.resolve_=_,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new z(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===B.NO_ERROR,c=o.getStatus();if(!a||gr(c,this.additionalRetryCodes_)&&this.retry){const g=o.getErrorCode()===B.ABORT;r(!1,new z(!1,null,g));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new z(l,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());pr(c)?o(c):o()}catch(c){i(c)}else if(a!==null){const c=de();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(s.canceled){const c=this.appDelete_?ze():rr();i(c)}else{const c=nr();i(c)}};this.canceled_?n(!1,new z(!1,null,!0)):this.backoffId_=dr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fr(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class z{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function br(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Er(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wr(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yr(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ir(t,e,n,r,s,o,i=!0){const a=We(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return wr(l,e),br(l,n),Er(l,o),yr(l,r),new _r(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ar(...t){const e=Rr();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(pe())return new Blob(t);throw new m(p.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Tr(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t){if(typeof atob>"u")throw lr("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class re{constructor(e,n){this.data=e,this.contentType=n||null}}function vr(t,e){switch(t){case D.RAW:return new re(Ge(e));case D.BASE64:case D.BASE64URL:return new re(Ke(t,e));case D.DATA_URL:return new re(Cr(e),Or(e))}throw de()}function Ge(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,i=t.charCodeAt(++n);r=65536|(o&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Sr(t){let e;try{e=decodeURIComponent(t)}catch{throw F(D.DATA_URL,"Malformed data URL.")}return Ge(e)}function Ke(t,e){switch(t){case D.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw F(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case D.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw F(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Dr(e)}catch(s){throw s.message.includes("polyfill")?s:F(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class qe{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw F(D.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Nr(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Cr(t){const e=new qe(t);return e.base64?Ke(D.BASE64,e.rest):Sr(e.rest)}function Or(t){return new qe(t).contentType}function Nr(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,n){let r=0,s="";ve(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ve(this.data_)){const r=this.data_,s=Tr(r,e,n);return s===null?null:new v(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new v(r,!0)}}static getBlob(...e){if(pe()){const n=e.map(r=>r instanceof v?r.data_:r);return new v(Ar.apply(null,n))}else{const n=e.map(i=>fe(i)?vr(D.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)s[o++]=i[a]}),new v(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){let e;try{e=JSON.parse(t)}catch{return null}return mr(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Br(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Je(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e){return e}class w{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||kr}}let W=null;function Ur(t){return!fe(t)||t.length<2?t:Je(t)}function Ye(){if(W)return W;const t=[];t.push(new w("bucket")),t.push(new w("generation")),t.push(new w("metageneration")),t.push(new w("name","fullPath",!0));function e(o,i){return Ur(i)}const n=new w("name");n.xform=e,t.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new w("size");return s.xform=r,t.push(s),t.push(new w("timeCreated")),t.push(new w("updated")),t.push(new w("md5Hash",null,!0)),t.push(new w("cacheControl",null,!0)),t.push(new w("contentDisposition",null,!0)),t.push(new w("contentEncoding",null,!0)),t.push(new w("contentLanguage",null,!0)),t.push(new w("contentType",null,!0)),t.push(new w("metadata","customMetadata",!0)),W=t,W}function Pr(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new A(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function Lr(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,e[i.server])}return Pr(r,t),r}function Ze(t,e,n){const r=Xe(e);return r===null?null:Lr(t,r,n)}function Mr(t,e,n,r){const s=Xe(e);if(s===null||!fe(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(l=>{const g=t.bucket,d=t.fullPath,f="/b/"+i(g)+"/o/"+i(d),_=me(f,n,r),y=We({alt:"media",token:l});return _+y})[0]}function $r(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class Qe{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){if(!t)throw de()}function Fr(t,e){function n(r,s){const o=Ze(t,s,e);return et(o!==null),o}return n}function jr(t,e){function n(r,s){const o=Ze(t,s,e);return et(o!==null),Mr(o,s,t.host,t._protocol)}return n}function tt(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=er():s=Qn():n.getStatus()===402?s=Zn(t.bucket):n.getStatus()===403?s=tr(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Hr(t){const e=tt(t);function n(r,s){let o=e(r,s);return r.getStatus()===404&&(o=Yn(t.path)),o.serverResponse=s.serverResponse,o}return n}function Vr(t,e,n){const r=e.fullServerUrl(),s=me(r,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new Qe(s,o,jr(t,n),i);return a.errorHandler=Hr(e),a}function zr(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Wr(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=zr(null,e)),r}function Gr(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let I=0;I<2;I++)T=T+Math.random().toString().slice(2);return T}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const l=Wr(e,r,s),g=$r(l,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",_=v.getBlob(d,r,f);if(_===null)throw ar();const y={name:l.fullPath},b=me(o,t.host,t._protocol),E="POST",P=t.maxUploadRetryTime,O=new Qe(b,E,Fr(t,n),P);return O.urlParams=y,O.headers=i,O.body=_.uploadData(),O.errorHandler=tt(e),O}class Kr{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=B.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=B.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=B.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw $("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class qr extends Kr{initXhr(){this.xhr_.responseType="text"}}function nt(){return new qr}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this._service=e,n instanceof A?this._location=n:this._location=A.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new U(e,n)}get root(){const e=new A(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Je(this._location.path)}get storage(){return this._service}get parent(){const e=xr(this._location.path);if(e===null)return null;const n=new A(this._location.bucket,e);return new U(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ur(e)}}function Xr(t,e,n){t._throwIfRoot("uploadBytes");const r=Gr(t.storage,t._location,Ye(),new v(e,!0),n);return t.storage.makeRequestWithTokens(r,nt).then(s=>({metadata:s,ref:t}))}function Jr(t){t._throwIfRoot("getDownloadURL");const e=Vr(t.storage,t._location,Ye());return t.storage.makeRequestWithTokens(e,nt).then(n=>{if(n===null)throw cr();return n})}function Yr(t,e){const n=Br(t._location.path,e),r=new A(t._location.bucket,n);return new U(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){return/^[A-Za-z]+:\/\//.test(t)}function Qr(t,e){return new U(t,e)}function rt(t,e){if(t instanceof ge){const n=t;if(n._bucket==null)throw ir();const r=new U(n,n._bucket);return e!=null?rt(r,e):r}else return e!==void 0?Yr(t,e):t}function es(t,e){if(e&&Zr(e)){if(t instanceof ge)return Qr(t,e);throw ue("To use ref(service, url), the first argument must be a Storage instance.")}else return rt(t,e)}function Ce(t,e){const n=e==null?void 0:e[Ve];return n==null?null:A.makeFromBucketSpec(n,t)}function ts(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Bt(s,t.app.options.projectId))}class ge{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=He,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Xn,this._maxUploadRetryTime=Jn,this._requests=new Set,s!=null?this._bucket=A.makeFromBucketSpec(s,this._host):this._bucket=Ce(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=A.makeFromBucketSpec(this._url,e):this._bucket=Ce(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Se("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Se("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new U(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new hr(ze());{const i=Ir(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Oe="@firebase/storage",Ne="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="storage";function ns(t,e,n){return t=X(t),Xr(t,e,n)}function rs(t){return t=X(t),Jr(t)}function ss(t,e){return t=X(t),es(t,e)}function os(t=$n(),e){t=X(t);const r=Un(t,st).getImmediate({identifier:e}),s=Nt("storage");return s&&is(r,...s),r}function is(t,e,n,r={}){ts(t,e,n,r)}function as(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ge(n,r,s,e,Mn)}function cs(){q(new j(st,as,"PUBLIC").setMultipleInstances(!0)),L(Oe,Ne,""),L(Oe,Ne,"esm2017")}cs();var ls="firebase",us="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */L(ls,us,"app");var N={BASE_URL:"/16.01.2024_project_aston/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const hs={apiKey:N.VITE_FIREBASE_API_KEY,authDomain:N.VITE_FIREBASE_AUTH_DOMAIN,projectId:N.VITE_FIREBASE_PROJECTID,storageBucket:N.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:N.VITE_FIREBASE_MESSAGING_SENDERID,appId:N.VITE_FIREBASE_APPID,measurementId:N.VITE_FIREBASE_MEASUREMENTID},ds=$e(hs),fs=os(ds),ps=async({res:t,email:e,sex:n,image:r,createUser:s,handleNavigate:o})=>{at(t);const i={_id:t.data.localId,email:e,favorites:{},sex:n,searchHistory:{}};let a;if(r){const c=r,l=Date.now().toString(),g=c+"_"+l+"_newUser",d=ss(fs,`images/${g}`);await ns(d,r),a=await rs(d)}i.image=a||yt(),s(i),o()},ms=({label:t,options:e,onChange:n,name:r,value:s})=>h.jsxs("div",{className:"text-warmGray-50 p2 m-2 w-full z-[1] mx-auto",children:[h.jsx("label",{className:"block mx-2",children:t}),h.jsx("div",{className:"flex justify-center text-center",children:e&&e.map(o=>h.jsxs("div",{children:[h.jsx("input",{className:"hidden",type:"radio",name:r,value:o.value,checked:o.value===s,id:o.name,onChange:n}),h.jsx("label",{className:ct({"border text-center border-warmGray-50 py-4 text-2xl inline-block w-[90px] cursor-pointer radio transition-all":!0,"text-green-500 rounded-l-lg":o.name==="male","text-red-500 rounded-r-lg":o.name==="female","border-red-500":o.value===s}),htmlFor:o.name,children:o.name})]},o.name))})]}),gs=R.memo(ms),_s=()=>{const[t,e]=R.useState({email:"",password:"",image:"",sex:"male"}),[n,r]=R.useState(!1),[s,o]=R.useState({}),[i,a]=R.useState(),[c]=lt.useSignUpMutation(),[l]=ut.useCreateUserMutation(),{handleNavigate:g}=pt(),d=mt(t,o),f=R.useCallback(({target:b})=>{if(b.name==="image"&&wt(b)){a(()=>b.value),e(E=>({...E,[b.name]:b.img}));return}e(E=>({...E,[b.name]:b.value}))},[]),_=Object.keys(s).length===0,y=async()=>{if(d(),!_)return;r(()=>!0);const b=await c({email:t.email,password:t.password,returnSecureToken:!0});gt(b)?await ps({res:b,email:t.email,sex:t.sex,image:i,createUser:l,handleNavigate:g}):_t(b)&&o(()=>({auth:b.error.data.error.message})),r(()=>!1)};return h.jsxs(h.Fragment,{children:[h.jsxs("form",{children:[h.jsx(_e,{onChange:f,value:R.useMemo(()=>t.email,[t.email]),placeholder:"type ur email",name:"email",id:"email",label:"Email:",error:R.useMemo(()=>s.email,[s.email])}),h.jsx(_e,{onChange:f,value:R.useMemo(()=>t.password,[t.password]),placeholder:"type ur pass",name:"password",id:"password",label:"Password:",error:R.useMemo(()=>s.password,[s.password])}),h.jsx(gs,{onChange:f,value:R.useMemo(()=>t.sex,[t.sex]),options:[{name:"male",value:"male"},{name:"female",value:"female"}],name:"sex",id:"sex",label:"Sex:"}),h.jsx(Et,{onChange:f,value:R.useMemo(()=>t.image,[t.image]),name:"image",id:"image",label:"Image:"})]}),n&&h.jsx(ht,{}),s.auth&&h.jsx("div",{className:"text-red-500",children:s.auth}),h.jsx(dt,{title:"submit form "+(_?"(active)":"(disabled)"),text:"Submit",cb:y,disabled:!_}),h.jsxs("div",{children:["already have account?",h.jsx(ft,{className:"inline-block text-center mx-2 p-1 hover:-rotate-2",to:"/login",children:"Register"})]})]})},ws=()=>h.jsx(_s,{});export{ws as RegisterPage};
