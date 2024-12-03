import{R as fe,b as M_,u as x_,r as Fo}from"./index-CXYANt7Y.js";var md={};function U_(n){const e=new Error(n);if(e.stack===void 0)try{throw e}catch{}return e}var F_=U_,$=F_;function V_(n){return!!n&&typeof n.then=="function"}var ce=V_;function $_(n,e){if(n!=null)return n;throw $(e??"Got unexpected null or undefined")}var de=$_;function V(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}class xs{getValue(){throw $("BaseLoadable")}toPromise(){throw $("BaseLoadable")}valueMaybe(){throw $("BaseLoadable")}valueOrThrow(){throw $(`Loadable expected value, but in "${this.state}" state`)}promiseMaybe(){throw $("BaseLoadable")}promiseOrThrow(){throw $(`Loadable expected promise, but in "${this.state}" state`)}errorMaybe(){throw $("BaseLoadable")}errorOrThrow(){throw $(`Loadable expected error, but in "${this.state}" state`)}is(e){return e.state===this.state&&e.contents===this.contents}map(e){throw $("BaseLoadable")}}class B_ extends xs{constructor(e){super(),V(this,"state","hasValue"),V(this,"contents",void 0),this.contents=e}getValue(){return this.contents}toPromise(){return Promise.resolve(this.contents)}valueMaybe(){return this.contents}valueOrThrow(){return this.contents}promiseMaybe(){}errorMaybe(){}map(e){try{const t=e(this.contents);return ce(t)?Cn(t):si(t)?t:Ir(t)}catch(t){return ce(t)?Cn(t.next(()=>this.map(e))):Us(t)}}}class W_ extends xs{constructor(e){super(),V(this,"state","hasError"),V(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return Promise.reject(this.contents)}valueMaybe(){}promiseMaybe(){}errorMaybe(){return this.contents}errorOrThrow(){return this.contents}map(e){return this}}class gd extends xs{constructor(e){super(),V(this,"state","loading"),V(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return this.contents}valueMaybe(){}promiseMaybe(){return this.contents}promiseOrThrow(){return this.contents}errorMaybe(){}map(e){return Cn(this.contents.then(t=>{const i=e(t);if(si(i)){const r=i;switch(r.state){case"hasValue":return r.contents;case"hasError":throw r.contents;case"loading":return r.contents}}return i}).catch(t=>{if(ce(t))return t.then(()=>this.map(e).contents);throw t}))}}function Ir(n){return Object.freeze(new B_(n))}function Us(n){return Object.freeze(new W_(n))}function Cn(n){return Object.freeze(new gd(n))}function vd(){return Object.freeze(new gd(new Promise(()=>{})))}function H_(n){return n.every(e=>e.state==="hasValue")?Ir(n.map(e=>e.contents)):n.some(e=>e.state==="hasError")?Us(de(n.find(e=>e.state==="hasError"),"Invalid loadable passed to loadableAll").contents):Cn(Promise.all(n.map(e=>e.contents)))}function yd(n){const t=(Array.isArray(n)?n:Object.getOwnPropertyNames(n).map(r=>n[r])).map(r=>si(r)?r:ce(r)?Cn(r):Ir(r)),i=H_(t);return Array.isArray(n)?i:i.map(r=>Object.getOwnPropertyNames(n).reduce((s,o,a)=>({...s,[o]:r[a]}),{}))}function si(n){return n instanceof xs}const z_={of:n=>ce(n)?Cn(n):si(n)?n:Ir(n),error:n=>Us(n),loading:()=>vd(),all:yd,isLoadable:si};var xn={loadableWithValue:Ir,loadableWithError:Us,loadableWithPromise:Cn,loadableLoading:vd,loadableAll:yd,isLoadable:si,RecoilLoadable:z_},j_=xn.loadableWithValue,G_=xn.loadableWithError,q_=xn.loadableWithPromise,K_=xn.loadableLoading,Y_=xn.loadableAll,Q_=xn.isLoadable,J_=xn.RecoilLoadable,br=Object.freeze({__proto__:null,loadableWithValue:j_,loadableWithError:G_,loadableWithPromise:q_,loadableLoading:K_,loadableAll:Y_,isLoadable:Q_,RecoilLoadable:J_});const da={RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED:!0,RECOIL_GKS_ENABLED:new Set(["recoil_hamt_2020","recoil_sync_external_store","recoil_suppress_rerender_in_callback","recoil_memory_managament_2020"])};function X_(n,e){var t,i;const r=(t=md[n])===null||t===void 0||(i=t.toLowerCase())===null||i===void 0?void 0:i.trim();if(r==null||r==="")return;if(!["true","false"].includes(r))throw $(`process.env.${n} value must be 'true', 'false', or empty: ${r}`);e(r==="true")}function Z_(n,e){var t;const i=(t=md[n])===null||t===void 0?void 0:t.trim();i==null||i===""||e(i.split(/\s*,\s*|\s+/))}function em(){var n;typeof process>"u"||((n=process)===null||n===void 0?void 0:n.env)!=null&&(X_("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED",e=>{da.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=e}),Z_("RECOIL_GKS_ENABLED",e=>{e.forEach(t=>{da.RECOIL_GKS_ENABLED.add(t)})}))}em();var yi=da;function Fs(n){return yi.RECOIL_GKS_ENABLED.has(n)}Fs.setPass=n=>{yi.RECOIL_GKS_ENABLED.add(n)};Fs.setFail=n=>{yi.RECOIL_GKS_ENABLED.delete(n)};Fs.clear=()=>{yi.RECOIL_GKS_ENABLED.clear()};var re=Fs;function tm(n,e,{error:t}={}){return null}var nm=tm,Za=nm,Vo,$o,Bo;const im=(Vo=fe.createMutableSource)!==null&&Vo!==void 0?Vo:fe.unstable_createMutableSource,wd=($o=fe.useMutableSource)!==null&&$o!==void 0?$o:fe.unstable_useMutableSource,Ed=(Bo=fe.useSyncExternalStore)!==null&&Bo!==void 0?Bo:fe.unstable_useSyncExternalStore;function rm(){var n;const{ReactCurrentDispatcher:e,ReactCurrentOwner:t}=fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;return((n=e==null?void 0:e.current)!==null&&n!==void 0?n:t.currentDispatcher).useSyncExternalStore!=null}function sm(){return re("recoil_transition_support")?{mode:"TRANSITION_SUPPORT",early:!0,concurrent:!0}:re("recoil_sync_external_store")&&Ed!=null?{mode:"SYNC_EXTERNAL_STORE",early:!0,concurrent:!1}:re("recoil_mutable_source")&&wd!=null&&typeof window<"u"&&!window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE?re("recoil_suppress_rerender_in_callback")?{mode:"MUTABLE_SOURCE",early:!0,concurrent:!0}:{mode:"MUTABLE_SOURCE",early:!1,concurrent:!1}:re("recoil_suppress_rerender_in_callback")?{mode:"LEGACY",early:!0,concurrent:!1}:{mode:"LEGACY",early:!1,concurrent:!1}}function om(){return!1}var Tr={createMutableSource:im,useMutableSource:wd,useSyncExternalStore:Ed,currentRendererSupportsUseSyncExternalStore:rm,reactMode:sm,isFastRefreshEnabled:om};class ec{constructor(e){V(this,"key",void 0),this.key=e}toJSON(){return{key:this.key}}}class Sd extends ec{}class Id extends ec{}function am(n){return n instanceof Sd||n instanceof Id}var Vs={AbstractRecoilValue:ec,RecoilState:Sd,RecoilValueReadOnly:Id,isRecoilValue:am},cm=Vs.AbstractRecoilValue,lm=Vs.RecoilState,um=Vs.RecoilValueReadOnly,dm=Vs.isRecoilValue,oi=Object.freeze({__proto__:null,AbstractRecoilValue:cm,RecoilState:lm,RecoilValueReadOnly:um,isRecoilValue:dm});function hm(n,e){return function*(){let t=0;for(const i of n)yield e(i,t++)}()}var $s=hm;class bd{}const fm=new bd,An=new Map,tc=new Map;function pm(n){return $s(n,e=>de(tc.get(e)))}function _m(n){if(An.has(n)){const e=`Duplicate atom key "${n}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;console.warn(e)}}function mm(n){yi.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED&&_m(n.key),An.set(n.key,n);const e=n.set==null?new oi.RecoilValueReadOnly(n.key):new oi.RecoilState(n.key);return tc.set(n.key,e),e}class Td extends Error{}function gm(n){const e=An.get(n);if(e==null)throw new Td(`Missing definition for RecoilValue: "${n}""`);return e}function vm(n){return An.get(n)}const cs=new Map;function ym(n){var e;if(!re("recoil_memory_managament_2020"))return;const t=An.get(n);if(t!=null&&(e=t.shouldDeleteConfigOnRelease)!==null&&e!==void 0&&e.call(t)){var i;An.delete(n),(i=Rd(n))===null||i===void 0||i(),cs.delete(n)}}function wm(n,e){re("recoil_memory_managament_2020")&&(e===void 0?cs.delete(n):cs.set(n,e))}function Rd(n){return cs.get(n)}var Ge={nodes:An,recoilValues:tc,registerNode:mm,getNode:gm,getNodeMaybe:vm,deleteNodeConfigIfPossible:ym,setConfigDeletionHandler:wm,getConfigDeletionHandler:Rd,recoilValuesForKeys:pm,NodeMissingError:Td,DefaultValue:bd,DEFAULT_VALUE:fm};function Em(n,e){e()}var Sm={enqueueExecution:Em};function Im(n,e){return e={exports:{}},n(e,e.exports),e.exports}var bm=Im(function(n){var e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},t={},i=5,r=Math.pow(2,i),s=r-1,o=r/2,a=r/4,c={},l=function(f){return function(){return f}},d=t.hash=function(p){var f=typeof p>"u"?"undefined":e(p);if(f==="number")return p;f!=="string"&&(p+="");for(var y=0,b=0,T=p.length;b<T;++b){var R=p.charCodeAt(b);y=(y<<5)-y+R|0}return y},u=function(f){return f-=f>>1&1431655765,f=(f&858993459)+(f>>2&858993459),f=f+(f>>4)&252645135,f+=f>>8,f+=f>>16,f&127},h=function(f,y){return y>>>f&s},m=function(f){return 1<<f},g=function(f,y){return u(f&y-1)},E=function(f,y,b,T){var R=T;if(!f){var D=T.length;R=new Array(D);for(var O=0;O<D;++O)R[O]=T[O]}return R[y]=b,R},M=function(f,y,b){var T=b.length-1,R=0,D=0,O=b;if(f)R=D=y;else for(O=new Array(T);R<y;)O[D++]=b[R++];for(++R;R<=T;)O[D++]=b[R++];return f&&(O.length=T),O},Z=function(f,y,b,T){var R=T.length;if(f){for(var D=R;D>=y;)T[D--]=T[D];return T[y]=b,T}for(var O=0,L=0,H=new Array(R+1);O<y;)H[L++]=T[O++];for(H[y]=b;O<R;)H[++L]=T[O++];return H},A=1,U=2,ne=3,Y=4,ee={__hamt_isEmpty:!0},se=function(f){return f===ee||f&&f.__hamt_isEmpty},xe=function(f,y,b,T){return{type:A,edit:f,hash:y,key:b,value:T,_modify:jn}},Ke=function(f,y,b){return{type:U,edit:f,hash:y,children:b,_modify:Gn}},ge=function(f,y,b){return{type:ne,edit:f,mask:y,children:b,_modify:q}},nt=function(f,y,b){return{type:Y,edit:f,size:y,children:b,_modify:Q}},zn=function(f){return f===ee||f.type===A||f.type===U},ve=function(f,y,b,T,R){for(var D=[],O=T,L=0,H=0;O;++H)O&1&&(D[H]=R[L++]),O>>>=1;return D[y]=b,nt(f,L+1,D)},Ye=function(f,y,b,T){for(var R=new Array(y-1),D=0,O=0,L=0,H=T.length;L<H;++L)if(L!==b){var ue=T[L];ue&&!se(ue)&&(R[D++]=ue,O|=1<<L)}return ge(f,O,R)},gn=function p(f,y,b,T,R,D){if(b===R)return Ke(f,b,[D,T]);var O=h(y,b),L=h(y,R);return ge(f,m(O)|m(L),O===L?[p(f,y+i,b,T,R,D)]:O<L?[T,D]:[D,T])},it=function(f,y,b,T,R,D,O,L){for(var H=R.length,ue=0;ue<H;++ue){var Ve=R[ue];if(b(O,Ve.key)){var Ce=Ve.value,st=D(Ce);return st===Ce?R:st===c?(--L.value,M(f,ue,R)):E(f,ue,xe(y,T,O,st),R)}}var pt=D();return pt===c?R:(++L.value,E(f,H,xe(y,T,O,pt),R))},Lt=function(f,y){return f===y.edit},jn=function(f,y,b,T,R,D,O){if(y(D,this.key)){var L=T(this.value);return L===this.value?this:L===c?(--O.value,ee):Lt(f,this)?(this.value=L,this):xe(f,R,D,L)}var H=T();return H===c?this:(++O.value,gn(f,b,this.hash,this,R,xe(f,R,D,H)))},Gn=function(f,y,b,T,R,D,O){if(R===this.hash){var L=Lt(f,this),H=it(L,f,y,this.hash,this.children,T,D,O);return H===this.children?this:H.length>1?Ke(f,this.hash,H):H[0]}var ue=T();return ue===c?this:(++O.value,gn(f,b,this.hash,this,R,xe(f,R,D,ue)))},q=function(f,y,b,T,R,D,O){var L=this.mask,H=this.children,ue=h(b,R),Ve=m(ue),Ce=g(L,Ve),st=L&Ve,pt=st?H[Ce]:ee,qn=pt._modify(f,y,b+i,T,R,D,O);if(pt===qn)return this;var Kr=Lt(f,this),Pi=L,ki=void 0;if(st&&se(qn)){if(Pi&=~Ve,!Pi)return ee;if(H.length<=2&&zn(H[Ce^1]))return H[Ce^1];ki=M(Kr,Ce,H)}else if(!st&&!se(qn)){if(H.length>=o)return ve(f,ue,qn,L,H);Pi|=Ve,ki=Z(Kr,Ce,qn,H)}else ki=E(Kr,Ce,qn,H);return Kr?(this.mask=Pi,this.children=ki,this):ge(f,Pi,ki)},Q=function(f,y,b,T,R,D,O){var L=this.size,H=this.children,ue=h(b,R),Ve=H[ue],Ce=(Ve||ee)._modify(f,y,b+i,T,R,D,O);if(Ve===Ce)return this;var st=Lt(f,this),pt=void 0;if(se(Ve)&&!se(Ce))++L,pt=E(st,ue,Ce,H);else if(!se(Ve)&&se(Ce)){if(--L,L<=a)return Ye(f,L,ue,H);pt=E(st,ue,ee,H)}else pt=E(st,ue,Ce,H);return st?(this.size=L,this.children=pt,this):nt(f,L,pt)};ee._modify=function(p,f,y,b,T,R,D){var O=b();return O===c?ee:(++D.value,xe(p,T,R,O))};function _(p,f,y,b,T){this._editable=p,this._edit=f,this._config=y,this._root=b,this._size=T}_.prototype.setTree=function(p,f){return this._editable?(this._root=p,this._size=f,this):p===this._root?this:new _(this._editable,this._edit,this._config,p,f)};var S=t.tryGetHash=function(p,f,y,b){for(var T=b._root,R=0,D=b._config.keyEq;;)switch(T.type){case A:return D(y,T.key)?T.value:p;case U:{if(f===T.hash)for(var O=T.children,L=0,H=O.length;L<H;++L){var ue=O[L];if(D(y,ue.key))return ue.value}return p}case ne:{var Ve=h(R,f),Ce=m(Ve);if(T.mask&Ce){T=T.children[g(T.mask,Ce)],R+=i;break}return p}case Y:{if(T=T.children[h(R,f)],T){R+=i;break}return p}default:return p}};_.prototype.tryGetHash=function(p,f,y){return S(p,f,y,this)};var I=t.tryGet=function(p,f,y){return S(p,y._config.hash(f),f,y)};_.prototype.tryGet=function(p,f){return I(p,f,this)};var F=t.getHash=function(p,f,y){return S(void 0,p,f,y)};_.prototype.getHash=function(p,f){return F(p,f,this)},t.get=function(p,f){return S(void 0,f._config.hash(p),p,f)},_.prototype.get=function(p,f){return I(f,p,this)};var C=t.has=function(p,f,y){return S(c,p,f,y)!==c};_.prototype.hasHash=function(p,f){return C(p,f,this)};var G=t.has=function(p,f){return C(f._config.hash(p),p,f)};_.prototype.has=function(p){return G(p,this)};var j=function(f,y){return f===y};t.make=function(p){return new _(0,0,{keyEq:p&&p.keyEq||j,hash:p&&p.hash||d},ee,0)},t.empty=t.make();var N=t.isEmpty=function(p){return p&&!!se(p._root)};_.prototype.isEmpty=function(){return N(this)};var le=t.modifyHash=function(p,f,y,b){var T={value:b._size},R=b._root._modify(b._editable?b._edit:NaN,b._config.keyEq,0,p,f,y,T);return b.setTree(R,T.value)};_.prototype.modifyHash=function(p,f,y){return le(y,p,f,this)};var Ie=t.modify=function(p,f,y){return le(p,y._config.hash(f),f,y)};_.prototype.modify=function(p,f){return Ie(f,p,this)};var te=t.setHash=function(p,f,y,b){return le(l(y),p,f,b)};_.prototype.setHash=function(p,f,y){return te(p,f,y,this)};var pe=t.set=function(p,f,y){return te(y._config.hash(p),p,f,y)};_.prototype.set=function(p,f){return pe(p,f,this)};var ft=l(c),vn=t.removeHash=function(p,f,y){return le(ft,p,f,y)};_.prototype.removeHash=_.prototype.deleteHash=function(p,f){return vn(p,f,this)};var rt=t.remove=function(p,f){return vn(f._config.hash(p),p,f)};_.prototype.remove=_.prototype.delete=function(p){return rt(p,this)};var Qe=t.beginMutation=function(p){return new _(p._editable+1,p._edit+1,p._config,p._root,p._size)};_.prototype.beginMutation=function(){return Qe(this)};var Tl=t.endMutation=function(p){return p._editable=p._editable&&p._editable-1,p};_.prototype.endMutation=function(){return Tl(this)};var T_=t.mutate=function(p,f){var y=Qe(f);return p(y),Tl(y)};_.prototype.mutate=function(p){return T_(p,this)};var Mo=function(f){return f&&Rl(f[0],f[1],f[2],f[3],f[4])},Rl=function(f,y,b,T,R){for(;b<f;){var D=y[b++];if(D&&!se(D))return Cl(D,T,[f,y,b,T,R])}return Mo(R)},Cl=function(f,y,b){switch(f.type){case A:return{value:y(f),rest:b};case U:case Y:case ne:var T=f.children;return Rl(T.length,T,0,y,b);default:return Mo(b)}},R_={done:!0};function xo(p){this.v=p}xo.prototype.next=function(){if(!this.v)return R_;var p=this.v;return this.v=Mo(p.rest),p},xo.prototype[Symbol.iterator]=function(){return this};var Uo=function(f,y){return new xo(Cl(f._root,y))},C_=function(f){return[f.key,f.value]},A_=t.entries=function(p){return Uo(p,C_)};_.prototype.entries=_.prototype[Symbol.iterator]=function(){return A_(this)};var N_=function(f){return f.key},P_=t.keys=function(p){return Uo(p,N_)};_.prototype.keys=function(){return P_(this)};var k_=function(f){return f.value},O_=t.values=_.prototype.values=function(p){return Uo(p,k_)};_.prototype.values=function(){return O_(this)};var Al=t.fold=function(p,f,y){var b=y._root;if(b.type===A)return p(f,b.value,b.key);for(var T=[b.children],R=void 0;R=T.pop();)for(var D=0,O=R.length;D<O;){var L=R[D++];L&&L.type&&(L.type===A?f=p(f,L.value,L.key):T.push(L.children))}return f};_.prototype.fold=function(p,f){return Al(p,f,this)};var L_=t.forEach=function(p,f){return Al(function(y,b,T){return p(b,T,f)},null,f)};_.prototype.forEach=function(p){return L_(p,this)};var D_=t.count=function(p){return p._size};_.prototype.count=function(){return D_(this)},Object.defineProperty(_.prototype,"size",{get:_.prototype.count}),n.exports?n.exports=t:(void 0).hamt=t});class Tm{constructor(e){V(this,"_map",void 0),this._map=new Map(e==null?void 0:e.entries())}keys(){return this._map.keys()}entries(){return this._map.entries()}get(e){return this._map.get(e)}has(e){return this._map.has(e)}set(e,t){return this._map.set(e,t),this}delete(e){return this._map.delete(e),this}clone(){return ic(this)}toMap(){return new Map(this._map)}}class nc{constructor(e){if(V(this,"_hamt",bm.empty.beginMutation()),e instanceof nc){const t=e._hamt.endMutation();e._hamt=t.beginMutation(),this._hamt=t.beginMutation()}else if(e)for(const[t,i]of e.entries())this._hamt.set(t,i)}keys(){return this._hamt.keys()}entries(){return this._hamt.entries()}get(e){return this._hamt.get(e)}has(e){return this._hamt.has(e)}set(e,t){return this._hamt.set(e,t),this}delete(e){return this._hamt.delete(e),this}clone(){return ic(this)}toMap(){return new Map(this._hamt)}}function ic(n){return re("recoil_hamt_2020")?new nc(n):new Tm(n)}var Rm={persistentMap:ic},Cm=Rm.persistentMap,Am=Object.freeze({__proto__:null,persistentMap:Cm});function Nm(n,...e){const t=new Set;e:for(const i of n){for(const r of e)if(r.has(i))continue e;t.add(i)}return t}var Ki=Nm;function Pm(n,e){const t=new Map;return n.forEach((i,r)=>{t.set(r,e(i,r))}),t}var ls=Pm;function km(){return{nodeDeps:new Map,nodeToNodeSubscriptions:new Map}}function Om(n){return{nodeDeps:ls(n.nodeDeps,e=>new Set(e)),nodeToNodeSubscriptions:ls(n.nodeToNodeSubscriptions,e=>new Set(e))}}function Wo(n,e,t,i){const{nodeDeps:r,nodeToNodeSubscriptions:s}=t,o=r.get(n);if(o&&i&&o!==i.nodeDeps.get(n))return;r.set(n,e);const a=o==null?e:Ki(e,o);for(const c of a)s.has(c)||s.set(c,new Set),de(s.get(c)).add(n);if(o){const c=Ki(o,e);for(const l of c){if(!s.has(l))return;const d=de(s.get(l));d.delete(n),d.size===0&&s.delete(l)}}}function Lm(n,e,t,i){var r,s,o,a;const c=t.getState();i===c.currentTree.version||i===((r=c.nextTree)===null||r===void 0?void 0:r.version)||((s=c.previousTree)===null||s===void 0||s.version);const l=t.getGraph(i);if(Wo(n,e,l),i===((o=c.previousTree)===null||o===void 0?void 0:o.version)){const u=t.getGraph(c.currentTree.version);Wo(n,e,u,l)}if(i===((a=c.previousTree)===null||a===void 0?void 0:a.version)||i===c.currentTree.version){var d;const u=(d=c.nextTree)===null||d===void 0?void 0:d.version;if(u!==void 0){const h=t.getGraph(u);Wo(n,e,h,l)}}}var Rr={cloneGraph:Om,graph:km,saveDepsToStore:Lm};let Dm=0;const Mm=()=>Dm++;let xm=0;const Um=()=>xm++;let Fm=0;const Vm=()=>Fm++;var Bs={getNextTreeStateVersion:Mm,getNextStoreID:Um,getNextComponentID:Vm};const{persistentMap:Nl}=Am,{graph:$m}=Rr,{getNextTreeStateVersion:Cd}=Bs;function Ad(){const n=Cd();return{version:n,stateID:n,transactionMetadata:{},dirtyAtoms:new Set,atomValues:Nl(),nonvalidatedAtoms:Nl()}}function Bm(){const n=Ad();return{currentTree:n,nextTree:null,previousTree:null,commitDepth:0,knownAtoms:new Set,knownSelectors:new Set,transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(n.version,$m()),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map}}var Nd={makeEmptyTreeState:Ad,makeEmptyStoreState:Bm,getNextTreeStateVersion:Cd};class Pd{}function Wm(){return new Pd}var Ws={RetentionZone:Pd,retentionZone:Wm};function Hm(n,e){const t=new Set(n);return t.add(e),t}function zm(n,e){const t=new Set(n);return t.delete(e),t}function jm(n,e,t){const i=new Map(n);return i.set(e,t),i}function Gm(n,e,t){const i=new Map(n);return i.set(e,t(i.get(e))),i}function qm(n,e){const t=new Map(n);return t.delete(e),t}function Km(n,e){const t=new Map(n);return e.forEach(i=>t.delete(i)),t}var kd={setByAddingToSet:Hm,setByDeletingFromSet:zm,mapBySettingInMap:jm,mapByUpdatingInMap:Gm,mapByDeletingFromMap:qm,mapByDeletingMultipleFromMap:Km};function*Ym(n,e){let t=0;for(const i of n)e(i,t++)&&(yield i)}var rc=Ym;function Qm(n,e){return new Proxy(n,{get:(i,r)=>(!(r in i)&&r in e&&(i[r]=e[r]()),i[r]),ownKeys:i=>Object.keys(i)})}var Od=Qm;const{getNode:Cr,getNodeMaybe:Jm,recoilValuesForKeys:Pl}=Ge,{RetentionZone:kl}=Ws,{setByAddingToSet:Xm}=kd,Zm=Object.freeze(new Set);class eg extends Error{}function tg(n,e,t){if(!re("recoil_memory_managament_2020"))return()=>{};const{nodesRetainedByZone:i}=n.getState().retention;function r(s){let o=i.get(s);o||i.set(s,o=new Set),o.add(e)}if(t instanceof kl)r(t);else if(Array.isArray(t))for(const s of t)r(s);return()=>{if(!re("recoil_memory_managament_2020"))return;const{retention:s}=n.getState();function o(a){const c=s.nodesRetainedByZone.get(a);c==null||c.delete(e),c&&c.size===0&&s.nodesRetainedByZone.delete(a)}if(t instanceof kl)o(t);else if(Array.isArray(t))for(const a of t)o(a)}}function sc(n,e,t,i){const r=n.getState();if(r.nodeCleanupFunctions.has(t))return;const s=Cr(t),o=tg(n,t,s.retainedBy),a=s.init(n,e,i);r.nodeCleanupFunctions.set(t,()=>{a(),o()})}function ng(n,e,t){sc(n,n.getState().currentTree,e,t)}function ig(n,e){var t;const i=n.getState();(t=i.nodeCleanupFunctions.get(e))===null||t===void 0||t(),i.nodeCleanupFunctions.delete(e)}function rg(n,e,t){return sc(n,e,t,"get"),Cr(t).get(n,e)}function Ld(n,e,t){return Cr(t).peek(n,e)}function sg(n,e,t){var i;const r=Jm(e);return r==null||(i=r.invalidate)===null||i===void 0||i.call(r,n),{...n,atomValues:n.atomValues.clone().delete(e),nonvalidatedAtoms:n.nonvalidatedAtoms.clone().set(e,t),dirtyAtoms:Xm(n.dirtyAtoms,e)}}function og(n,e,t,i){const r=Cr(t);if(r.set==null)throw new eg(`Attempt to set read-only RecoilValue: ${t}`);const s=r.set;return sc(n,e,t,"set"),s(n,e,i)}function ag(n,e,t){const i=n.getState(),r=n.getGraph(e.version),s=Cr(t).nodeType;return Od({type:s},{loadable:()=>Ld(n,e,t),isActive:()=>i.knownAtoms.has(t)||i.knownSelectors.has(t),isSet:()=>s==="selector"?!1:e.atomValues.has(t),isModified:()=>e.dirtyAtoms.has(t),deps:()=>{var o;return Pl((o=r.nodeDeps.get(t))!==null&&o!==void 0?o:[])},subscribers:()=>{var o,a;return{nodes:Pl(rc(Dd(n,e,new Set([t])),c=>c!==t)),components:$s((o=(a=i.nodeToComponentSubscriptions.get(t))===null||a===void 0?void 0:a.values())!==null&&o!==void 0?o:[],([c])=>({name:c}))}}})}function Dd(n,e,t){const i=new Set,r=Array.from(t),s=n.getGraph(e.version);for(let a=r.pop();a;a=r.pop()){var o;i.add(a);const c=(o=s.nodeToNodeSubscriptions.get(a))!==null&&o!==void 0?o:Zm;for(const l of c)i.has(l)||r.push(l)}return i}var hn={getNodeLoadable:rg,peekNodeLoadable:Ld,setNodeValue:og,initializeNode:ng,cleanUpNode:ig,setUnvalidatedAtomValue_DEPRECATED:sg,peekNodeInfo:ag,getDownstreamNodes:Dd};let Md=null;function cg(n){Md=n}function lg(){var n;(n=Md)===null||n===void 0||n()}var xd={setInvalidateMemoizedSnapshot:cg,invalidateMemoizedSnapshot:lg};const{getDownstreamNodes:ug,getNodeLoadable:Ud,setNodeValue:dg}=hn,{getNextComponentID:hg}=Bs,{getNode:fg,getNodeMaybe:Fd}=Ge,{DefaultValue:oc}=Ge,{reactMode:pg}=Tr,{AbstractRecoilValue:_g,RecoilState:mg,RecoilValueReadOnly:gg,isRecoilValue:vg}=oi,{invalidateMemoizedSnapshot:yg}=xd;function wg(n,{key:e},t=n.getState().currentTree){var i,r;const s=n.getState();t.version===s.currentTree.version||t.version===((i=s.nextTree)===null||i===void 0?void 0:i.version)||(t.version,(r=s.previousTree)===null||r===void 0||r.version);const o=Ud(n,t,e);return o.state==="loading"&&o.contents.catch(()=>{}),o}function Eg(n,e){const t=n.clone();return e.forEach((i,r)=>{i.state==="hasValue"&&i.contents instanceof oc?t.delete(r):t.set(r,i)}),t}function Sg(n,e,{key:t},i){if(typeof i=="function"){const r=Ud(n,e,t);if(r.state==="loading"){const s=`Tried to set atom or selector "${t}" using an updater function while the current state is pending, this is not currently supported.`;throw $(s)}else if(r.state==="hasError")throw r.contents;return i(r.contents)}else return i}function Ig(n,e,t){if(t.type==="set"){const{recoilValue:r,valueOrUpdater:s}=t,o=Sg(n,e,r,s),a=dg(n,e,r.key,o);for(const[c,l]of a.entries())ha(e,c,l)}else if(t.type==="setLoadable"){const{recoilValue:{key:r},loadable:s}=t;ha(e,r,s)}else if(t.type==="markModified"){const{recoilValue:{key:r}}=t;e.dirtyAtoms.add(r)}else if(t.type==="setUnvalidated"){var i;const{recoilValue:{key:r},unvalidatedValue:s}=t,o=Fd(r);o==null||(i=o.invalidate)===null||i===void 0||i.call(o,e),e.atomValues.delete(r),e.nonvalidatedAtoms.set(r,s),e.dirtyAtoms.add(r)}else Za(`Unknown action ${t.type}`)}function ha(n,e,t){t.state==="hasValue"&&t.contents instanceof oc?n.atomValues.delete(e):n.atomValues.set(e,t),n.dirtyAtoms.add(e),n.nonvalidatedAtoms.delete(e)}function Vd(n,e){n.replaceState(t=>{const i=$d(t);for(const r of e)Ig(n,i,r);return Bd(n,i),yg(),i})}function Hs(n,e){if(Yi.length){const t=Yi[Yi.length-1];let i=t.get(n);i||t.set(n,i=[]),i.push(e)}else Vd(n,[e])}const Yi=[];function bg(){const n=new Map;return Yi.push(n),()=>{for(const[e,t]of n)Vd(e,t);Yi.pop()}}function $d(n){return{...n,atomValues:n.atomValues.clone(),nonvalidatedAtoms:n.nonvalidatedAtoms.clone(),dirtyAtoms:new Set(n.dirtyAtoms)}}function Bd(n,e){const t=ug(n,e,e.dirtyAtoms);for(const s of t){var i,r;(i=Fd(s))===null||i===void 0||(r=i.invalidate)===null||r===void 0||r.call(i,e)}}function Wd(n,e,t){Hs(n,{type:"set",recoilValue:e,valueOrUpdater:t})}function Tg(n,e,t){if(t instanceof oc)return Wd(n,e,t);Hs(n,{type:"setLoadable",recoilValue:e,loadable:t})}function Rg(n,e){Hs(n,{type:"markModified",recoilValue:e})}function Cg(n,e,t){Hs(n,{type:"setUnvalidated",recoilValue:e,unvalidatedValue:t})}function Ag(n,{key:e},t,i=null){const r=hg(),s=n.getState();s.nodeToComponentSubscriptions.has(e)||s.nodeToComponentSubscriptions.set(e,new Map),de(s.nodeToComponentSubscriptions.get(e)).set(r,[i??"<not captured>",t]);const o=pg();if(o.early&&(o.mode==="LEGACY"||o.mode==="MUTABLE_SOURCE")){const a=n.getState().nextTree;a&&a.dirtyAtoms.has(e)&&t(a)}return{release:()=>{const a=n.getState(),c=a.nodeToComponentSubscriptions.get(e);c===void 0||!c.has(r)||(c.delete(r),c.size===0&&a.nodeToComponentSubscriptions.delete(e))}}}function Ng(n,e){var t;const{currentTree:i}=n.getState(),r=fg(e.key);(t=r.clearCache)===null||t===void 0||t.call(r,n,i)}var kt={RecoilValueReadOnly:gg,AbstractRecoilValue:_g,RecoilState:mg,getRecoilValueAsLoadable:wg,setRecoilValue:Wd,setRecoilValueLoadable:Tg,markRecoilValueModified:Rg,setUnvalidatedRecoilValue:Cg,subscribeToRecoilValue:Ag,isRecoilValue:vg,applyAtomValueWrites:Eg,batchStart:bg,writeLoadableToTreeState:ha,invalidateDownstreams:Bd,copyTreeState:$d,refreshRecoilValue:Ng};function Pg(n,e,t){const i=n.entries();let r=i.next();for(;!r.done;){const s=r.value;if(e.call(t,s[1],s[0],n))return!0;r=i.next()}return!1}var kg=Pg;const{cleanUpNode:Og}=hn,{deleteNodeConfigIfPossible:Lg,getNode:Hd}=Ge,{RetentionZone:zd}=Ws,Dg=12e4,jd=new Set;function Gd(n,e){const t=n.getState(),i=t.currentTree;if(t.nextTree)return;const r=new Set;for(const o of e)if(o instanceof zd)for(const a of Fg(t,o))r.add(a);else r.add(o);const s=Mg(n,r);for(const o of s)Ug(n,i,o)}function Mg(n,e){const t=n.getState(),i=t.currentTree,r=n.getGraph(i.version),s=new Set,o=new Set;return a(e),s;function a(c){const l=new Set,d=xg(n,i,c,s,o);for(const g of d){var u;if(Hd(g).retainedBy==="recoilRoot"){o.add(g);continue}if(((u=t.retention.referenceCounts.get(g))!==null&&u!==void 0?u:0)>0){o.add(g);continue}if(qd(g).some(M=>t.retention.referenceCounts.get(M))){o.add(g);continue}const E=r.nodeToNodeSubscriptions.get(g);if(E&&kg(E,M=>o.has(M))){o.add(g);continue}s.add(g),l.add(g)}const h=new Set;for(const g of l)for(const E of(m=r.nodeDeps.get(g))!==null&&m!==void 0?m:jd){var m;s.has(E)||h.add(E)}h.size&&a(h)}}function xg(n,e,t,i,r){const s=n.getGraph(e.version),o=[],a=new Set;for(;t.size>0;)c(de(t.values().next().value));return o;function c(l){if(i.has(l)||r.has(l)){t.delete(l);return}if(a.has(l))return;const d=s.nodeToNodeSubscriptions.get(l);if(d)for(const u of d)c(u);a.add(l),t.delete(l),o.push(l)}}function Ug(n,e,t){if(!re("recoil_memory_managament_2020"))return;Og(n,t);const i=n.getState();i.knownAtoms.delete(t),i.knownSelectors.delete(t),i.nodeTransactionSubscriptions.delete(t),i.retention.referenceCounts.delete(t);const r=qd(t);for(const c of r){var s;(s=i.retention.nodesRetainedByZone.get(c))===null||s===void 0||s.delete(t)}e.atomValues.delete(t),e.dirtyAtoms.delete(t),e.nonvalidatedAtoms.delete(t);const o=i.graphsByVersion.get(e.version);if(o){const c=o.nodeDeps.get(t);if(c!==void 0){o.nodeDeps.delete(t);for(const l of c){var a;(a=o.nodeToNodeSubscriptions.get(l))===null||a===void 0||a.delete(t)}}o.nodeToNodeSubscriptions.delete(t)}Lg(t)}function Fg(n,e){var t;return(t=n.retention.nodesRetainedByZone.get(e))!==null&&t!==void 0?t:jd}function qd(n){const e=Hd(n).retainedBy;return e===void 0||e==="components"||e==="recoilRoot"?[]:e instanceof zd?[e]:e}function Vg(n,e){const t=n.getState();t.nextTree?t.retention.retainablesToCheckForRelease.add(e):Gd(n,new Set([e]))}function $g(n,e,t){var i;if(!re("recoil_memory_managament_2020"))return;const r=n.getState().retention.referenceCounts,s=((i=r.get(e))!==null&&i!==void 0?i:0)+t;s===0?Kd(n,e):r.set(e,s)}function Kd(n,e){if(!re("recoil_memory_managament_2020"))return;n.getState().retention.referenceCounts.delete(e),Vg(n,e)}function Bg(n){if(!re("recoil_memory_managament_2020"))return;const e=n.getState();Gd(n,e.retention.retainablesToCheckForRelease),e.retention.retainablesToCheckForRelease.clear()}function Wg(n){return n===void 0?"recoilRoot":n}var Un={SUSPENSE_TIMEOUT_MS:Dg,updateRetainCount:$g,updateRetainCountToZero:Kd,releaseScheduledRetainablesNow:Bg,retainedByOptionWithDefault:Wg};const{unstable_batchedUpdates:Hg}=M_;var zg={unstable_batchedUpdates:Hg};const{unstable_batchedUpdates:jg}=zg;var Gg={unstable_batchedUpdates:jg};const{batchStart:qg}=kt,{unstable_batchedUpdates:Kg}=Gg;let ac=Kg||(n=>n());const Yg=n=>{ac=n},Qg=()=>ac,Jg=n=>{ac(()=>{let e=()=>{};try{e=qg(),n()}finally{e()}})};var zs={getBatcher:Qg,setBatcher:Yg,batchUpdates:Jg};function*Xg(n){for(const e of n)for(const t of e)yield t}var Yd=Xg;const Qd=typeof Window>"u"||typeof window>"u",Zg=n=>!Qd&&(n===window||n instanceof Window),ev=typeof navigator<"u"&&navigator.product==="ReactNative";var js={isSSR:Qd,isReactNative:ev,isWindow:Zg};function tv(n,e){let t;return(...i)=>{t||(t={});const r=e(...i);return Object.hasOwnProperty.call(t,r)||(t[r]=n(...i)),t[r]}}function nv(n,e){let t,i;return(...r)=>{const s=e(...r);return t===s||(t=s,i=n(...r)),i}}function iv(n,e){let t,i;return[(...o)=>{const a=e(...o);return t===a||(t=a,i=n(...o)),i},()=>{t=null}]}var rv={memoizeWithArgsHash:tv,memoizeOneWithArgsHash:nv,memoizeOneWithArgsHashAndInvalidation:iv};const{batchUpdates:fa}=zs,{initializeNode:sv,peekNodeInfo:ov}=hn,{graph:av}=Rr,{getNextStoreID:cv}=Bs,{DEFAULT_VALUE:lv,recoilValues:Ol,recoilValuesForKeys:Ll}=Ge,{AbstractRecoilValue:uv,getRecoilValueAsLoadable:dv,setRecoilValue:Dl,setUnvalidatedRecoilValue:hv}=kt,{updateRetainCount:is}=Un,{setInvalidateMemoizedSnapshot:fv}=xd,{getNextTreeStateVersion:pv,makeEmptyStoreState:_v}=Nd,{isSSR:mv}=js,{memoizeOneWithArgsHashAndInvalidation:gv}=rv;class Gs{constructor(e,t){V(this,"_store",void 0),V(this,"_refCount",1),V(this,"getLoadable",i=>(this.checkRefCount_INTERNAL(),dv(this._store,i))),V(this,"getPromise",i=>(this.checkRefCount_INTERNAL(),this.getLoadable(i).toPromise())),V(this,"getNodes_UNSTABLE",i=>{if(this.checkRefCount_INTERNAL(),(i==null?void 0:i.isModified)===!0){if((i==null?void 0:i.isInitialized)===!1)return[];const o=this._store.getState().currentTree;return Ll(o.dirtyAtoms)}const r=this._store.getState().knownAtoms,s=this._store.getState().knownSelectors;return(i==null?void 0:i.isInitialized)==null?Ol.values():i.isInitialized===!0?Ll(Yd([r,s])):rc(Ol.values(),({key:o})=>!r.has(o)&&!s.has(o))}),V(this,"getInfo_UNSTABLE",({key:i})=>(this.checkRefCount_INTERNAL(),ov(this._store,this._store.getState().currentTree,i))),V(this,"map",i=>{this.checkRefCount_INTERNAL();const r=new pa(this,fa);return i(r),r}),V(this,"asyncMap",async i=>{this.checkRefCount_INTERNAL();const r=new pa(this,fa);return r.retain(),await i(r),r.autoRelease_INTERNAL(),r}),this._store={storeID:cv(),parentStoreID:t,getState:()=>e,replaceState:i=>{e.currentTree=i(e.currentTree)},getGraph:i=>{const r=e.graphsByVersion;if(r.has(i))return de(r.get(i));const s=av();return r.set(i,s),s},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw $("Cannot subscribe to Snapshots")}};for(const i of this._store.getState().knownAtoms)sv(this._store,i,"get"),is(this._store,i,1);this.autoRelease_INTERNAL()}retain(){this._refCount<=0,this._refCount++;let e=!1;return()=>{e||(e=!0,this._release())}}autoRelease_INTERNAL(){mv||window.setTimeout(()=>this._release(),10)}_release(){if(this._refCount--,this._refCount===0){if(this._store.getState().nodeCleanupFunctions.forEach(e=>e()),this._store.getState().nodeCleanupFunctions.clear(),!re("recoil_memory_managament_2020"))return}else this._refCount<0}isRetained(){return this._refCount>0}checkRefCount_INTERNAL(){re("recoil_memory_managament_2020")&&this._refCount<=0}getStore_INTERNAL(){return this.checkRefCount_INTERNAL(),this._store}getID(){return this.checkRefCount_INTERNAL(),this._store.getState().currentTree.stateID}getStoreID(){return this.checkRefCount_INTERNAL(),this._store.storeID}}function Jd(n,e,t=!1){const i=n.getState(),r=t?pv():e.version;return{currentTree:{version:t?r:e.version,stateID:t?r:e.stateID,transactionMetadata:{...e.transactionMetadata},dirtyAtoms:new Set(e.dirtyAtoms),atomValues:e.atomValues.clone(),nonvalidatedAtoms:e.nonvalidatedAtoms.clone()},commitDepth:0,nextTree:null,previousTree:null,knownAtoms:new Set(i.knownAtoms),knownSelectors:new Set(i.knownSelectors),transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(r,n.getGraph(e.version)),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map($s(i.nodeCleanupFunctions.entries(),([s])=>[s,()=>{}]))}}function vv(n){const e=new Gs(_v());return n!=null?e.map(n):e}const[Ml,Xd]=gv((n,e)=>{var t;const i=n.getState(),r=e==="latest"?(t=i.nextTree)!==null&&t!==void 0?t:i.currentTree:de(i.previousTree);return new Gs(Jd(n,r),n.storeID)},(n,e)=>{var t,i;return String(e)+String(n.storeID)+String((t=n.getState().nextTree)===null||t===void 0?void 0:t.version)+String(n.getState().currentTree.version)+String((i=n.getState().previousTree)===null||i===void 0?void 0:i.version)});fv(Xd);function yv(n,e="latest"){const t=Ml(n,e);return t.isRetained()?t:(Xd(),Ml(n,e))}class pa extends Gs{constructor(e,t){super(Jd(e.getStore_INTERNAL(),e.getStore_INTERNAL().getState().currentTree,!0),e.getStoreID()),V(this,"_batch",void 0),V(this,"set",(i,r)=>{this.checkRefCount_INTERNAL();const s=this.getStore_INTERNAL();this._batch(()=>{is(s,i.key,1),Dl(this.getStore_INTERNAL(),i,r)})}),V(this,"reset",i=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();this._batch(()=>{is(r,i.key,1),Dl(this.getStore_INTERNAL(),i,lv)})}),V(this,"setUnvalidatedAtomValues_DEPRECATED",i=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();fa(()=>{for(const[s,o]of i.entries())is(r,s,1),hv(r,new uv(s),o)})}),this._batch=t}}var qs={Snapshot:Gs,MutableSnapshot:pa,freshSnapshot:vv,cloneSnapshot:yv},wv=qs.Snapshot,Ev=qs.MutableSnapshot,Sv=qs.freshSnapshot,Iv=qs.cloneSnapshot,Ks=Object.freeze({__proto__:null,Snapshot:wv,MutableSnapshot:Ev,freshSnapshot:Sv,cloneSnapshot:Iv});function bv(...n){const e=new Set;for(const t of n)for(const i of t)e.add(i);return e}var Tv=bv;const{useRef:Rv}=fe;function Cv(n){const e=Rv(n);return e.current===n&&typeof n=="function"&&(e.current=n()),e}var xl=Cv;const{getNextTreeStateVersion:Av,makeEmptyStoreState:Zd}=Nd,{cleanUpNode:Nv,getDownstreamNodes:Pv,initializeNode:kv,setNodeValue:Ov,setUnvalidatedAtomValue_DEPRECATED:Lv}=hn,{graph:Dv}=Rr,{cloneGraph:Mv}=Rr,{getNextStoreID:eh}=Bs,{createMutableSource:Ho,reactMode:th}=Tr,{applyAtomValueWrites:xv}=kt,{releaseScheduledRetainablesNow:nh}=Un,{freshSnapshot:Uv}=Ks,{useCallback:Fv,useContext:ih,useEffect:_a,useMemo:Vv,useRef:$v,useState:Bv}=fe;function Oi(){throw $("This component must be used inside a <RecoilRoot> component.")}const rh=Object.freeze({storeID:eh(),getState:Oi,replaceState:Oi,getGraph:Oi,subscribeToTransactions:Oi,addTransactionMetadata:Oi});let ma=!1;function Ul(n){if(ma)throw $("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");const e=n.getState();if(e.nextTree===null){re("recoil_memory_managament_2020")&&re("recoil_release_on_cascading_update_killswitch_2021")&&e.commitDepth>0&&nh(n);const t=e.currentTree.version,i=Av();e.nextTree={...e.currentTree,version:i,stateID:i,dirtyAtoms:new Set,transactionMetadata:{}},e.graphsByVersion.set(i,Mv(de(e.graphsByVersion.get(t))))}}const sh=fe.createContext({current:rh}),Ys=()=>ih(sh),oh=fe.createContext(null);function Wv(){return ih(oh)}function cc(n,e,t){const i=Pv(n,t,t.dirtyAtoms);for(const r of i){const s=e.nodeToComponentSubscriptions.get(r);if(s)for(const[o,[a,c]]of s)c(t)}}function ah(n){const e=n.getState(),t=e.currentTree,i=t.dirtyAtoms;if(i.size){for(const[r,s]of e.nodeTransactionSubscriptions)if(i.has(r))for(const[o,a]of s)a(n);for(const[r,s]of e.transactionSubscriptions)s(n);(!th().early||e.suspendedComponentResolvers.size>0)&&(cc(n,e,t),e.suspendedComponentResolvers.forEach(r=>r()),e.suspendedComponentResolvers.clear())}e.queuedComponentCallbacks_DEPRECATED.forEach(r=>r(t)),e.queuedComponentCallbacks_DEPRECATED.splice(0,e.queuedComponentCallbacks_DEPRECATED.length)}function Hv(n){const e=n.getState();e.commitDepth++;try{const{nextTree:t}=e;if(t==null)return;e.previousTree=e.currentTree,e.currentTree=t,e.nextTree=null,ah(n),e.previousTree!=null?e.graphsByVersion.delete(e.previousTree.version):Za("Ended batch with no previous state, which is unexpected","recoil"),e.previousTree=null,re("recoil_memory_managament_2020")&&t==null&&nh(n)}finally{e.commitDepth--}}function zv({setNotifyBatcherOfChange:n}){const e=Ys(),[,t]=Bv([]);return n(()=>t({})),_a(()=>(n(()=>t({})),()=>{n(()=>{})}),[n]),_a(()=>{Sm.enqueueExecution("Batcher",()=>{Hv(e.current)})}),null}function jv(n,e){const t=Zd();return e({set:(i,r)=>{const s=t.currentTree,o=Ov(n,s,i.key,r),a=new Set(o.keys()),c=s.nonvalidatedAtoms.clone();for(const l of a)c.delete(l);t.currentTree={...s,dirtyAtoms:Tv(s.dirtyAtoms,a),atomValues:xv(s.atomValues,o),nonvalidatedAtoms:c}},setUnvalidatedAtomValues:i=>{i.forEach((r,s)=>{t.currentTree=Lv(t.currentTree,s,r)})}}),t}function Gv(n){const e=Uv(n),t=e.getStore_INTERNAL().getState();return e.retain(),t.nodeCleanupFunctions.forEach(i=>i()),t.nodeCleanupFunctions.clear(),t}let Fl=0;function qv({initializeState_DEPRECATED:n,initializeState:e,store_INTERNAL:t,children:i}){let r;const s=m=>{const g=r.current.graphsByVersion;if(g.has(m))return de(g.get(m));const E=Dv();return g.set(m,E),E},o=(m,g)=>{if(g==null){const{transactionSubscriptions:E}=u.current.getState(),M=Fl++;return E.set(M,m),{release:()=>{E.delete(M)}}}else{const{nodeTransactionSubscriptions:E}=u.current.getState();E.has(g)||E.set(g,new Map);const M=Fl++;return de(E.get(g)).set(M,m),{release:()=>{const Z=E.get(g);Z&&(Z.delete(M),Z.size===0&&E.delete(g))}}}},a=m=>{Ul(u.current);for(const g of Object.keys(m))de(u.current.getState().nextTree).transactionMetadata[g]=m[g]},c=m=>{Ul(u.current);const g=de(r.current.nextTree);let E;try{ma=!0,E=m(g)}finally{ma=!1}E!==g&&(r.current.nextTree=E,th().early&&cc(u.current,r.current,E),de(l.current)())},l=$v(null),d=Fv(m=>{l.current=m},[l]),u=xl(()=>t??{storeID:eh(),getState:()=>r.current,replaceState:c,getGraph:s,subscribeToTransactions:o,addTransactionMetadata:a});t!=null&&(u.current=t),r=xl(()=>n!=null?jv(u.current,n):e!=null?Gv(e):Zd());const h=Vv(()=>Ho==null?void 0:Ho(r,()=>r.current.currentTree.version),[r]);return _a(()=>{const m=u.current;for(const g of new Set(m.getState().knownAtoms))kv(m,g,"get");return()=>{for(const g of m.getState().knownAtoms)Nv(m,g)}},[u]),fe.createElement(sh.Provider,{value:u},fe.createElement(oh.Provider,{value:h},fe.createElement(zv,{setNotifyBatcherOfChange:d}),i))}function Kv(n){const{override:e,...t}=n,i=Ys();return e===!1&&i.current!==rh?n.children:fe.createElement(qv,t)}function Yv(){return Ys().current.storeID}var zt={RecoilRoot:Kv,useStoreRef:Ys,useRecoilMutableSource:Wv,useRecoilStoreID:Yv,notifyComponents_FOR_TESTING:cc,sendEndOfBatchNotifications_FOR_TESTING:ah};function Qv(n,e){if(n===e)return!0;if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}var Jv=Qv;const{useEffect:Xv,useRef:Zv}=fe;function ey(n){const e=Zv();return Xv(()=>{e.current=n}),e.current}var ch=ey;const{useStoreRef:ty}=zt,{SUSPENSE_TIMEOUT_MS:ny}=Un,{updateRetainCount:Li}=Un,{RetentionZone:iy}=Ws,{useEffect:ry,useRef:sy}=fe,{isSSR:Vl}=js;function oy(n){if(re("recoil_memory_managament_2020"))return ay(n)}function ay(n){const t=(Array.isArray(n)?n:[n]).map(o=>o instanceof iy?o:o.key),i=ty();ry(()=>{if(!re("recoil_memory_managament_2020"))return;const o=i.current;if(r.current&&!Vl)window.clearTimeout(r.current),r.current=null;else for(const a of t)Li(o,a,1);return()=>{for(const a of t)Li(o,a,-1)}},[i,...t]);const r=sy(),s=ch(t);if(!Vl&&(s===void 0||!Jv(s,t))){const o=i.current;for(const a of t)Li(o,a,1);if(s)for(const a of s)Li(o,a,-1);r.current&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{r.current=null;for(const a of t)Li(o,a,-1)},ny)}}var lc=oy;function cy(){return"<component name not available>"}var Ar=cy;const{batchUpdates:ly}=zs,{DEFAULT_VALUE:lh}=Ge,{currentRendererSupportsUseSyncExternalStore:uy,reactMode:wi,useMutableSource:dy,useSyncExternalStore:hy}=Tr,{useRecoilMutableSource:fy,useStoreRef:Ot}=zt,{AbstractRecoilValue:ga,getRecoilValueAsLoadable:Nr,setRecoilValue:us,setUnvalidatedRecoilValue:py,subscribeToRecoilValue:ai}=kt,{useCallback:He,useEffect:ci,useMemo:uh,useRef:Qi,useState:uc}=fe,{setByAddingToSet:_y}=kd,{isSSR:my}=js;function dc(n,e,t){if(n.state==="hasValue")return n.contents;throw n.state==="loading"?new Promise(r=>{const s=t.current.getState().suspendedComponentResolvers;s.add(r),my&&ce(n.contents)&&n.contents.finally(()=>{s.delete(r)})}):n.state==="hasError"?n.contents:$(`Invalid value of loadable atom "${e.key}"`)}function gy(){const n=Ar(),e=Ot(),[,t]=uc([]),i=Qi(new Set);i.current=new Set;const r=Qi(new Set),s=Qi(new Map),o=He(c=>{const l=s.current.get(c);l&&(l.release(),s.current.delete(c))},[s]),a=He((c,l)=>{s.current.has(l)&&t([])},[]);return ci(()=>{const c=e.current;Ki(i.current,r.current).forEach(l=>{if(s.current.has(l))return;const d=ai(c,new ga(l),h=>a(h,l),n);s.current.set(l,d),c.getState().nextTree?c.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{a(c.getState(),l)}):a(c.getState(),l)}),Ki(r.current,i.current).forEach(l=>{o(l)}),r.current=i.current}),ci(()=>{const c=s.current;return Ki(i.current,new Set(c.keys())).forEach(l=>{const d=ai(e.current,new ga(l),u=>a(u,l),n);c.set(l,d)}),()=>c.forEach((l,d)=>o(d))},[n,e,o,a]),uh(()=>{function c(g){return E=>{us(e.current,g,E)}}function l(g){return()=>us(e.current,g,lh)}function d(g){var E;i.current.has(g.key)||(i.current=_y(i.current,g.key));const M=e.current.getState();return Nr(e.current,g,wi().early&&(E=M.nextTree)!==null&&E!==void 0?E:M.currentTree)}function u(g){const E=d(g);return dc(E,g,e)}function h(g){return[u(g),c(g)]}function m(g){return[d(g),c(g)]}return{getRecoilValue:u,getRecoilValueLoadable:d,getRecoilState:h,getRecoilStateLoadable:m,getSetRecoilState:c,getResetRecoilState:l}},[i,e])}const vy={current:0};function yy(n){const e=Ot(),t=Ar(),i=He(()=>{var a;const c=e.current,l=c.getState(),d=wi().early&&(a=l.nextTree)!==null&&a!==void 0?a:l.currentTree;return{loadable:Nr(c,n,d),key:n.key}},[e,n]),r=He(a=>{let c;return()=>{var l,d;const u=a();return(l=c)!==null&&l!==void 0&&l.loadable.is(u.loadable)&&((d=c)===null||d===void 0?void 0:d.key)===u.key?c:(c=u,u)}},[]),s=uh(()=>r(i),[i,r]),o=He(a=>{const c=e.current;return ai(c,n,a,t).release},[e,n,t]);return hy(o,s,s).loadable}function wy(n){const e=Ot(),t=He(()=>{var l;const d=e.current,u=d.getState(),h=wi().early&&(l=u.nextTree)!==null&&l!==void 0?l:u.currentTree;return Nr(d,n,h)},[e,n]),i=He(()=>t(),[t]),r=Ar(),s=He((l,d)=>{const u=e.current;return ai(u,n,()=>{if(!re("recoil_suppress_rerender_in_callback"))return d();const m=t();c.current.is(m)||d(),c.current=m},r).release},[e,n,r,t]),o=fy();if(o==null)throw $("Recoil hooks must be used in components contained within a <RecoilRoot> component.");const a=dy(o,i,s),c=Qi(a);return ci(()=>{c.current=a}),a}function va(n){const e=Ot(),t=Ar(),i=He(()=>{var c;const l=e.current,d=l.getState(),u=wi().early&&(c=d.nextTree)!==null&&c!==void 0?c:d.currentTree;return Nr(l,n,u)},[e,n]),r=He(()=>({loadable:i(),key:n.key}),[i,n.key]),s=He(c=>{const l=r();return c.loadable.is(l.loadable)&&c.key===l.key?c:l},[r]);ci(()=>{const c=ai(e.current,n,l=>{a(s)},t);return a(s),c.release},[t,n,e,s]);const[o,a]=uc(r);return o.key!==n.key?r().loadable:o.loadable}function Ey(n){const e=Ot(),[,t]=uc([]),i=Ar(),r=He(()=>{var a;const c=e.current,l=c.getState(),d=wi().early&&(a=l.nextTree)!==null&&a!==void 0?a:l.currentTree;return Nr(c,n,d)},[e,n]),s=r(),o=Qi(s);return ci(()=>{o.current=s}),ci(()=>{const a=e.current,c=a.getState(),l=ai(a,n,u=>{var h;if(!re("recoil_suppress_rerender_in_callback"))return t([]);const m=r();(h=o.current)!==null&&h!==void 0&&h.is(m)||t(m),o.current=m},i);if(c.nextTree)a.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{o.current=null,t([])});else{var d;if(!re("recoil_suppress_rerender_in_callback"))return t([]);const u=r();(d=o.current)!==null&&d!==void 0&&d.is(u)||t(u),o.current=u}return l.release},[i,r,n,e]),s}function hc(n){return re("recoil_memory_managament_2020")&&lc(n),{TRANSITION_SUPPORT:va,SYNC_EXTERNAL_STORE:uy()?yy:va,MUTABLE_SOURCE:wy,LEGACY:Ey}[wi().mode](n)}function dh(n){const e=Ot(),t=hc(n);return dc(t,n,e)}function Qs(n){const e=Ot();return He(t=>{us(e.current,n,t)},[e,n])}function Sy(n){const e=Ot();return He(()=>{us(e.current,n,lh)},[e,n])}function Iy(n){return[dh(n),Qs(n)]}function by(n){return[hc(n),Qs(n)]}function Ty(){const n=Ot();return(e,t={})=>{ly(()=>{n.current.addTransactionMetadata(t),e.forEach((i,r)=>py(n.current,new ga(r),i))})}}function hh(n){return re("recoil_memory_managament_2020")&&lc(n),va(n)}function fh(n){const e=Ot(),t=hh(n);return dc(t,n,e)}function Ry(n){return[fh(n),Qs(n)]}var Cy={recoilComponentGetRecoilValueCount_FOR_TESTING:vy,useRecoilInterface:gy,useRecoilState:Iy,useRecoilStateLoadable:by,useRecoilValue:dh,useRecoilValueLoadable:hc,useResetRecoilState:Sy,useSetRecoilState:Qs,useSetUnvalidatedAtomValues:Ty,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:hh,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:fh,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:Ry};function Ay(n,e){const t=new Map;for(const[i,r]of n)e(r,i)&&t.set(i,r);return t}var Ny=Ay;function Py(n,e){const t=new Set;for(const i of n)e(i)&&t.add(i);return t}var ky=Py;function Oy(...n){const e=new Map;for(let t=0;t<n.length;t++){const i=n[t].keys();let r;for(;!(r=i.next()).done;)e.set(r.value,n[t].get(r.value))}return e}var Ly=Oy;const{batchUpdates:Dy}=zs,{DEFAULT_VALUE:My,getNode:ph,nodes:xy}=Ge,{useStoreRef:fc}=zt,{AbstractRecoilValue:Uy,setRecoilValueLoadable:Fy}=kt,{SUSPENSE_TIMEOUT_MS:Vy}=Un,{cloneSnapshot:ds}=Ks,{useCallback:Js,useEffect:_h,useRef:$l,useState:$y}=fe,{isSSR:Bl}=js;function Xs(n){const e=fc();_h(()=>e.current.subscribeToTransactions(n).release,[n,e])}function Wl(n){const e=n.atomValues.toMap(),t=ls(Ny(e,(i,r)=>{const o=ph(r).persistence_UNSTABLE;return o!=null&&o.type!=="none"&&i.state==="hasValue"}),i=>i.contents);return Ly(n.nonvalidatedAtoms.toMap(),t)}function By(n){Xs(Js(e=>{let t=e.getState().previousTree;const i=e.getState().currentTree;t||(t=e.getState().currentTree);const r=Wl(i),s=Wl(t),o=ls(xy,c=>{var l,d,u,h;return{persistence_UNSTABLE:{type:(l=(d=c.persistence_UNSTABLE)===null||d===void 0?void 0:d.type)!==null&&l!==void 0?l:"none",backButton:(u=(h=c.persistence_UNSTABLE)===null||h===void 0?void 0:h.backButton)!==null&&u!==void 0?u:!1}}}),a=ky(i.dirtyAtoms,c=>r.has(c)||s.has(c));n({atomValues:r,previousAtomValues:s,atomInfo:o,modifiedAtoms:a,transactionMetadata:{...i.transactionMetadata}})},[n]))}function Wy(n){Xs(Js(e=>{const t=ds(e,"latest"),i=ds(e,"previous");n({snapshot:t,previousSnapshot:i})},[n]))}function Hy(){const n=fc(),[e,t]=$y(()=>ds(n.current)),i=ch(e),r=$l(),s=$l();if(Xs(Js(a=>t(ds(a)),[])),_h(()=>{const a=e.retain();if(r.current&&!Bl){var c;window.clearTimeout(r.current),r.current=null,(c=s.current)===null||c===void 0||c.call(s),s.current=null}return()=>{window.setTimeout(a,10)}},[e]),i!==e&&!Bl){if(r.current){var o;window.clearTimeout(r.current),r.current=null,(o=s.current)===null||o===void 0||o.call(s),s.current=null}s.current=e.retain(),r.current=window.setTimeout(()=>{var a;r.current=null,(a=s.current)===null||a===void 0||a.call(s),s.current=null},Vy)}return e}function mh(n,e){var t;const i=n.getState(),r=(t=i.nextTree)!==null&&t!==void 0?t:i.currentTree,s=e.getStore_INTERNAL().getState().currentTree;Dy(()=>{const o=new Set;for(const l of[r.atomValues.keys(),s.atomValues.keys()])for(const d of l){var a,c;((a=r.atomValues.get(d))===null||a===void 0?void 0:a.contents)!==((c=s.atomValues.get(d))===null||c===void 0?void 0:c.contents)&&ph(d).shouldRestoreFromSnapshots&&o.add(d)}o.forEach(l=>{Fy(n,new Uy(l),s.atomValues.has(l)?de(s.atomValues.get(l)):My)}),n.replaceState(l=>({...l,stateID:e.getID()}))})}function zy(){const n=fc();return Js(e=>mh(n.current,e),[n])}var gh={useRecoilSnapshot:Hy,gotoSnapshot:mh,useGotoRecoilSnapshot:zy,useRecoilTransactionObserver:Wy,useTransactionObservation_DEPRECATED:By,useTransactionSubscription_DEPRECATED:Xs};const{peekNodeInfo:jy}=hn,{useStoreRef:Gy}=zt;function qy(){const n=Gy();return({key:e})=>jy(n.current,n.current.getState().currentTree,e)}var Ky=qy;const{reactMode:Yy}=Tr,{RecoilRoot:Qy,useStoreRef:Jy}=zt,{useMemo:Xy}=fe;function Zy(){Yy().mode==="MUTABLE_SOURCE"&&console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");const n=Jy().current;return Xy(()=>{function e({children:t}){return fe.createElement(Qy,{store_INTERNAL:n},t)}return e},[n])}var ew=Zy;const{loadableWithValue:tw}=br,{initializeNode:nw}=hn,{DEFAULT_VALUE:iw,getNode:rw}=Ge,{copyTreeState:sw,getRecoilValueAsLoadable:ow,invalidateDownstreams:aw,writeLoadableToTreeState:cw}=kt;function Hl(n){return rw(n.key).nodeType==="atom"}class lw{constructor(e,t){V(this,"_store",void 0),V(this,"_treeState",void 0),V(this,"_changes",void 0),V(this,"get",i=>{if(this._changes.has(i.key))return this._changes.get(i.key);if(!Hl(i))throw $("Reading selectors within atomicUpdate is not supported");const r=ow(this._store,i,this._treeState);if(r.state==="hasValue")return r.contents;throw r.state==="hasError"?r.contents:$(`Expected Recoil atom ${i.key} to have a value, but it is in a loading state.`)}),V(this,"set",(i,r)=>{if(!Hl(i))throw $("Setting selectors within atomicUpdate is not supported");if(typeof r=="function"){const s=this.get(i);this._changes.set(i.key,r(s))}else nw(this._store,i.key,"set"),this._changes.set(i.key,r)}),V(this,"reset",i=>{this.set(i,iw)}),this._store=e,this._treeState=t,this._changes=new Map}newTreeState_INTERNAL(){if(this._changes.size===0)return this._treeState;const e=sw(this._treeState);for(const[t,i]of this._changes)cw(e,t,tw(i));return aw(this._store,e),e}}function uw(n){return e=>{n.replaceState(t=>{const i=new lw(n,t);return e(i),i.newTreeState_INTERNAL()})}}var dw={atomicUpdater:uw},hw=dw.atomicUpdater,vh=Object.freeze({__proto__:null,atomicUpdater:hw});function fw(n,e){if(!n)throw new Error(e)}var pw=fw,ji=pw;const{atomicUpdater:_w}=vh,{batchUpdates:mw}=zs,{DEFAULT_VALUE:gw}=Ge,{useStoreRef:vw}=zt,{refreshRecoilValue:yw,setRecoilValue:zl}=kt,{cloneSnapshot:ww}=Ks,{gotoSnapshot:Ew}=gh,{useCallback:Sw}=fe;class yh{}const Iw=new yh;function wh(n,e,t,i){let r=Iw,s;if(mw(()=>{const a="useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";if(typeof e!="function")throw $(a);const c=Od({...i??{},set:(d,u)=>zl(n,d,u),reset:d=>zl(n,d,gw),refresh:d=>yw(n,d),gotoSnapshot:d=>Ew(n,d),transact_UNSTABLE:d=>_w(n)(d)},{snapshot:()=>{const d=ww(n);return s=d.retain(),d}}),l=e(c);if(typeof l!="function")throw $(a);r=l(...t)}),r instanceof yh&&ji(!1),ce(r))r=r.finally(()=>{var a;(a=s)===null||a===void 0||a()});else{var o;(o=s)===null||o===void 0||o()}return r}function bw(n,e){const t=vw();return Sw((...i)=>wh(t.current,n,i),e!=null?[...e,t]:void 0)}var Eh={recoilCallback:wh,useRecoilCallback:bw};const{useStoreRef:Tw}=zt,{refreshRecoilValue:Rw}=kt,{useCallback:Cw}=fe;function Aw(n){const e=Tw();return Cw(()=>{const t=e.current;Rw(t,n)},[n,e])}var Nw=Aw;const{atomicUpdater:Pw}=vh,{useStoreRef:kw}=zt,{useMemo:Ow}=fe;function Lw(n,e){const t=kw();return Ow(()=>(...i)=>{Pw(t.current)(s=>{n(s)(...i)})},e!=null?[...e,t]:void 0)}var Dw=Lw;class Mw{constructor(e){V(this,"value",void 0),this.value=e}}var xw={WrappedValue:Mw},Uw=xw.WrappedValue,Sh=Object.freeze({__proto__:null,WrappedValue:Uw});const{isFastRefreshEnabled:Fw}=Tr;class jl extends Error{}class Vw{constructor(e){var t,i,r;V(this,"_name",void 0),V(this,"_numLeafs",void 0),V(this,"_root",void 0),V(this,"_onHit",void 0),V(this,"_onSet",void 0),V(this,"_mapNodeValue",void 0),this._name=e==null?void 0:e.name,this._numLeafs=0,this._root=null,this._onHit=(t=e==null?void 0:e.onHit)!==null&&t!==void 0?t:()=>{},this._onSet=(i=e==null?void 0:e.onSet)!==null&&i!==void 0?i:()=>{},this._mapNodeValue=(r=e==null?void 0:e.mapNodeValue)!==null&&r!==void 0?r:s=>s}size(){return this._numLeafs}root(){return this._root}get(e,t){var i;return(i=this.getLeafNode(e,t))===null||i===void 0?void 0:i.value}getLeafNode(e,t){if(this._root==null)return;let i=this._root;for(;i;){if(t==null||t.onNodeVisit(i),i.type==="leaf")return this._onHit(i),i;const r=this._mapNodeValue(e(i.nodeKey));i=i.branches.get(r)}}set(e,t,i){const r=()=>{var s,o,a,c;let l,d;for(const[M,Z]of e){var u,h,m;const A=this._root;if((A==null?void 0:A.type)==="leaf")throw this.invalidCacheError();const U=l;if(l=U?U.branches.get(d):A,l=(u=l)!==null&&u!==void 0?u:{type:"branch",nodeKey:M,parent:U,branches:new Map,branchKey:d},l.type!=="branch"||l.nodeKey!==M)throw this.invalidCacheError();U==null||U.branches.set(d,l),i==null||(h=i.onNodeVisit)===null||h===void 0||h.call(i,l),d=this._mapNodeValue(Z),this._root=(m=this._root)!==null&&m!==void 0?m:l}const g=l?(s=l)===null||s===void 0?void 0:s.branches.get(d):this._root;if(g!=null&&(g.type!=="leaf"||g.branchKey!==d))throw this.invalidCacheError();const E={type:"leaf",value:t,parent:l,branchKey:d};(o=l)===null||o===void 0||o.branches.set(d,E),this._root=(a=this._root)!==null&&a!==void 0?a:E,this._numLeafs++,this._onSet(E),i==null||(c=i.onNodeVisit)===null||c===void 0||c.call(i,E)};try{r()}catch(s){if(s instanceof jl)this.clear(),r();else throw s}}delete(e){const t=this.root();if(!t)return!1;if(e===t)return this._root=null,this._numLeafs=0,!0;let i=e.parent,r=e.branchKey;for(;i;){var s;if(i.branches.delete(r),i===t)return i.branches.size===0?(this._root=null,this._numLeafs=0):this._numLeafs--,!0;if(i.branches.size>0)break;r=(s=i)===null||s===void 0?void 0:s.branchKey,i=i.parent}for(;i!==t;i=i.parent)if(i==null)return!1;return this._numLeafs--,!0}clear(){this._numLeafs=0,this._root=null}invalidCacheError(){const e=Fw()?"Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.":"Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";throw Za(e+(this._name!=null?` - ${this._name}`:"")),new jl}}var $w={TreeCache:Vw},Bw=$w.TreeCache,Ih=Object.freeze({__proto__:null,TreeCache:Bw});class Ww{constructor(e){var t;V(this,"_maxSize",void 0),V(this,"_size",void 0),V(this,"_head",void 0),V(this,"_tail",void 0),V(this,"_map",void 0),V(this,"_keyMapper",void 0),this._maxSize=e.maxSize,this._size=0,this._head=null,this._tail=null,this._map=new Map,this._keyMapper=(t=e.mapKey)!==null&&t!==void 0?t:i=>i}head(){return this._head}tail(){return this._tail}size(){return this._size}maxSize(){return this._maxSize}has(e){return this._map.has(this._keyMapper(e))}get(e){const t=this._keyMapper(e),i=this._map.get(t);if(i)return this.set(e,i.value),i.value}set(e,t){const i=this._keyMapper(e);this._map.get(i)&&this.delete(e);const s=this.head(),o={key:e,right:s,left:null,value:t};s?s.left=o:this._tail=o,this._map.set(i,o),this._head=o,this._size++,this._maybeDeleteLRU()}_maybeDeleteLRU(){this.size()>this.maxSize()&&this.deleteLru()}deleteLru(){const e=this.tail();e&&this.delete(e.key)}delete(e){const t=this._keyMapper(e);if(!this._size||!this._map.has(t))return;const i=de(this._map.get(t)),r=i.right,s=i.left;r&&(r.left=i.left),s&&(s.right=i.right),i===this.head()&&(this._head=r),i===this.tail()&&(this._tail=s),this._map.delete(t),this._size--}clear(){this._size=0,this._head=null,this._tail=null,this._map=new Map}}var Hw={LRUCache:Ww},zw=Hw.LRUCache,bh=Object.freeze({__proto__:null,LRUCache:zw});const{LRUCache:jw}=bh,{TreeCache:Gw}=Ih;function qw({name:n,maxSize:e,mapNodeValue:t=i=>i}){const i=new jw({maxSize:e}),r=new Gw({name:n,mapNodeValue:t,onHit:s=>{i.set(s,!0)},onSet:s=>{const o=i.tail();i.set(s,!0),o&&r.size()>e&&r.delete(o.key)}});return r}var Gl=qw;function mt(n,e,t){if(typeof n=="string"&&!n.includes('"')&&!n.includes("\\"))return`"${n}"`;switch(typeof n){case"undefined":return"";case"boolean":return n?"true":"false";case"number":case"symbol":return String(n);case"string":return JSON.stringify(n);case"function":if((e==null?void 0:e.allowFunctions)!==!0)throw $("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${n.name})__`}if(n===null)return"null";if(typeof n!="object"){var i;return(i=JSON.stringify(n))!==null&&i!==void 0?i:""}if(ce(n))return"__PROMISE__";if(Array.isArray(n))return`[${n.map((r,s)=>mt(r,e,s.toString()))}]`;if(typeof n.toJSON=="function")return mt(n.toJSON(t),e,t);if(n instanceof Map){const r={};for(const[s,o]of n)r[typeof s=="string"?s:mt(s,e)]=o;return mt(r,e,t)}return n instanceof Set?mt(Array.from(n).sort((r,s)=>mt(r,e).localeCompare(mt(s,e))),e,t):Symbol!==void 0&&n[Symbol.iterator]!=null&&typeof n[Symbol.iterator]=="function"?mt(Array.from(n),e,t):`{${Object.keys(n).filter(r=>n[r]!==void 0).sort().map(r=>`${mt(r,e)}:${mt(n[r],e,r)}`).join(",")}}`}function Kw(n,e={allowFunctions:!1}){return mt(n,e)}var Zs=Kw;const{TreeCache:Yw}=Ih,Yr={equality:"reference",eviction:"keep-all",maxSize:1/0};function Qw({equality:n=Yr.equality,eviction:e=Yr.eviction,maxSize:t=Yr.maxSize}=Yr,i){const r=Jw(n);return Xw(e,t,r,i)}function Jw(n){switch(n){case"reference":return e=>e;case"value":return e=>Zs(e)}throw $(`Unrecognized equality policy ${n}`)}function Xw(n,e,t,i){switch(n){case"keep-all":return new Yw({name:i,mapNodeValue:t});case"lru":return Gl({name:i,maxSize:de(e),mapNodeValue:t});case"most-recent":return Gl({name:i,maxSize:1,mapNodeValue:t})}throw $(`Unrecognized eviction policy ${n}`)}var Zw=Qw;function eE(n){return()=>null}var tE={startPerfBlock:eE};const{isLoadable:nE,loadableWithError:Qr,loadableWithPromise:iE,loadableWithValue:zo}=br,{WrappedValue:Th}=Sh,{getNodeLoadable:Jr,peekNodeLoadable:rE,setNodeValue:sE}=hn,{saveDepsToStore:oE}=Rr,{DEFAULT_VALUE:aE,getConfigDeletionHandler:cE,getNode:lE,registerNode:ql}=Ge,{isRecoilValue:uE}=oi,{markRecoilValueModified:Kl}=kt,{retainedByOptionWithDefault:dE}=Un,{recoilCallback:hE}=Eh,{startPerfBlock:fE}=tE;class Rh{}const Di=new Rh,Mi=[],Xr=new Map,pE=(()=>{let n=0;return()=>n++})();function Ch(n){let e=null;const{key:t,get:i,cachePolicy_UNSTABLE:r}=n,s=n.set!=null?n.set:void 0,o=new Set,a=Zw(r??{equality:"reference",eviction:"keep-all"},t),c=dE(n.retainedBy_UNSTABLE),l=new Map;let d=0;function u(){return!re("recoil_memory_managament_2020")||d>0}function h(_){return _.getState().knownSelectors.add(t),d++,()=>{d--}}function m(){return cE(t)!==void 0&&!u()}function g(_,S,I,F,C){it(S,F,C),E(_,I)}function E(_,S){Ye(_,S)&&ve(_),Z(S,!0)}function M(_,S){Ye(_,S)&&(de(ge(_)).stateVersions.clear(),Z(S,!1))}function Z(_,S){const I=Xr.get(_);if(I!=null){for(const F of I)Kl(F,de(e));S&&Xr.delete(_)}}function A(_,S){let I=Xr.get(S);I==null&&Xr.set(S,I=new Set),I.add(_)}function U(_,S,I,F,C,G){return S.then(j=>{if(!u())throw ve(_),Di;const N=zo(j);return g(_,I,C,N,F),j}).catch(j=>{if(!u())throw ve(_),Di;if(ce(j))return ne(_,j,I,F,C,G);const N=Qr(j);throw g(_,I,C,N,F),j})}function ne(_,S,I,F,C,G){return S.then(j=>{if(!u())throw ve(_),Di;G.loadingDepKey!=null&&G.loadingDepPromise===S?I.atomValues.set(G.loadingDepKey,zo(j)):_.getState().knownSelectors.forEach(te=>{I.atomValues.delete(te)});const N=se(_,I);if(N&&N.state!=="loading"){if((Ye(_,C)||ge(_)==null)&&E(_,C),N.state==="hasValue")return N.contents;throw N.contents}if(!Ye(_,C)){const te=Ke(_,I);if(te!=null)return te.loadingLoadable.contents}const[le,Ie]=ee(_,I,C);if(le.state!=="loading"&&g(_,I,C,le,Ie),le.state==="hasError")throw le.contents;return le.contents}).catch(j=>{if(j instanceof Rh)throw Di;if(!u())throw ve(_),Di;const N=Qr(j);throw g(_,I,C,N,F),j})}function Y(_,S,I,F){var C,G,j,N;if(Ye(_,F)||S.version===((C=_.getState())===null||C===void 0||(G=C.currentTree)===null||G===void 0?void 0:G.version)||S.version===((j=_.getState())===null||j===void 0||(N=j.nextTree)===null||N===void 0?void 0:N.version)){var le,Ie,te;oE(t,I,_,(le=(Ie=_.getState())===null||Ie===void 0||(te=Ie.nextTree)===null||te===void 0?void 0:te.version)!==null&&le!==void 0?le:_.getState().currentTree.version)}for(const pe of I)o.add(pe)}function ee(_,S,I){const F=fE(t);let C=!0,G=!0;const j=()=>{F(),G=!1};let N,le=!1,Ie;const te={loadingDepKey:null,loadingDepPromise:null},pe=new Map;function ft({key:rt}){const Qe=Jr(_,S,rt);switch(pe.set(rt,Qe),C||(Y(_,S,new Set(pe.keys()),I),M(_,I)),Qe.state){case"hasValue":return Qe.contents;case"hasError":throw Qe.contents;case"loading":throw te.loadingDepKey=rt,te.loadingDepPromise=Qe.contents,Qe.contents}throw $("Invalid Loadable state")}const vn=rt=>(...Qe)=>{if(G)throw $("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");return e==null&&ji(!1),hE(_,rt,Qe,{node:e})};try{N=i({get:ft,getCallback:vn}),N=uE(N)?ft(N):N,nE(N)&&(N.state==="hasError"&&(le=!0),N=N.contents),ce(N)?N=U(_,N,S,pe,I,te).finally(j):j(),N=N instanceof Th?N.value:N}catch(rt){N=rt,ce(N)?N=ne(_,N,S,pe,I,te).finally(j):(le=!0,j())}return le?Ie=Qr(N):ce(N)?Ie=iE(N):Ie=zo(N),C=!1,zn(_,I,pe),Y(_,S,new Set(pe.keys()),I),[Ie,pe]}function se(_,S){let I=S.atomValues.get(t);if(I!=null)return I;const F=new Set;try{I=a.get(G=>(typeof G!="string"&&ji(!1),Jr(_,S,G).contents),{onNodeVisit:G=>{G.type==="branch"&&G.nodeKey!==t&&F.add(G.nodeKey)}})}catch(G){throw $(`Problem with cache lookup for selector "${t}": ${G.message}`)}if(I){var C;S.atomValues.set(t,I),Y(_,S,F,(C=ge(_))===null||C===void 0?void 0:C.executionID)}return I}function xe(_,S){const I=se(_,S);if(I!=null)return ve(_),I;const F=Ke(_,S);if(F!=null){var C;return((C=F.loadingLoadable)===null||C===void 0?void 0:C.state)==="loading"&&A(_,F.executionID),F.loadingLoadable}const G=pE(),[j,N]=ee(_,S,G);return j.state==="loading"?(nt(_,G,j,N,S),A(_,G)):(ve(_),it(S,j,N)),j}function Ke(_,S){const I=Yd([l.has(_)?[de(l.get(_))]:[],$s(rc(l,([C])=>C!==_),([,C])=>C)]);function F(C){for(const[G,j]of C)if(!Jr(_,S,G).is(j))return!0;return!1}for(const C of I){if(C.stateVersions.get(S.version)||!F(C.depValuesDiscoveredSoFarDuringAsyncWork))return C.stateVersions.set(S.version,!0),C;C.stateVersions.set(S.version,!1)}}function ge(_){return l.get(_)}function nt(_,S,I,F,C){l.set(_,{depValuesDiscoveredSoFarDuringAsyncWork:F,executionID:S,loadingLoadable:I,stateVersions:new Map([[C.version,!0]])})}function zn(_,S,I){if(Ye(_,S)){const F=ge(_);F!=null&&(F.depValuesDiscoveredSoFarDuringAsyncWork=I)}}function ve(_){l.delete(_)}function Ye(_,S){var I;return S===((I=ge(_))===null||I===void 0?void 0:I.executionID)}function gn(_){return Array.from(_.entries()).map(([S,I])=>[S,I.contents])}function it(_,S,I){_.atomValues.set(t,S);try{a.set(gn(I),S)}catch(F){throw $(`Problem with setting cache for selector "${t}": ${F.message}`)}}function Lt(_){if(Mi.includes(t)){const S=`Recoil selector has circular dependencies: ${Mi.slice(Mi.indexOf(t)).join(" → ")}`;return Qr($(S))}Mi.push(t);try{return _()}finally{Mi.pop()}}function jn(_,S){const I=S.atomValues.get(t);return I??a.get(F=>{var C;return typeof F!="string"&&ji(!1),(C=rE(_,S,F))===null||C===void 0?void 0:C.contents})}function Gn(_,S){return Lt(()=>xe(_,S))}function q(_){_.atomValues.delete(t)}function Q(_,S){e==null&&ji(!1);for(const F of o){var I;const C=lE(F);(I=C.clearCache)===null||I===void 0||I.call(C,_,S)}o.clear(),q(S),a.clear(),Kl(_,e)}return s!=null?e=ql({key:t,nodeType:"selector",peek:jn,get:Gn,set:(S,I,F)=>{let C=!1;const G=new Map;function j({key:te}){if(C)throw $("Recoil: Async selector sets are not currently supported.");const pe=Jr(S,I,te);if(pe.state==="hasValue")return pe.contents;if(pe.state==="loading"){const ft=`Getting value of asynchronous atom or selector "${te}" in a pending state while setting selector "${t}" is not yet supported.`;throw $(ft)}else throw pe.contents}function N(te,pe){if(C)throw $("Recoil: Async selector sets are not currently supported.");const ft=typeof pe=="function"?pe(j(te)):pe;sE(S,I,te.key,ft).forEach((rt,Qe)=>G.set(Qe,rt))}function le(te){N(te,aE)}const Ie=s({set:N,get:j,reset:le},F);if(Ie!==void 0)throw ce(Ie)?$("Recoil: Async selector sets are not currently supported."):$("Recoil: selector set should be a void function.");return C=!0,G},init:h,invalidate:q,clearCache:Q,shouldDeleteConfigOnRelease:m,dangerouslyAllowMutability:n.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:c}):e=ql({key:t,nodeType:"selector",peek:jn,get:Gn,init:h,invalidate:q,clearCache:Q,shouldDeleteConfigOnRelease:m,dangerouslyAllowMutability:n.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:c})}Ch.value=n=>new Th(n);var li=Ch;const{isLoadable:_E,loadableWithError:jo,loadableWithPromise:Go,loadableWithValue:Kn}=br,{WrappedValue:Ah}=Sh,{peekNodeInfo:mE}=hn,{DEFAULT_VALUE:En,DefaultValue:Kt,getConfigDeletionHandler:Nh,registerNode:gE,setConfigDeletionHandler:vE}=Ge,{isRecoilValue:yE}=oi,{getRecoilValueAsLoadable:wE,markRecoilValueModified:EE,setRecoilValue:Yl,setRecoilValueLoadable:SE}=kt,{retainedByOptionWithDefault:IE}=Un,xi=n=>n instanceof Ah?n.value:n;function bE(n){const{key:e,persistence_UNSTABLE:t}=n,i=IE(n.retainedBy_UNSTABLE);let r=0;function s(A){return Go(A.then(U=>(o=Kn(U),U)).catch(U=>{throw o=jo(U),U}))}let o=ce(n.default)?s(n.default):_E(n.default)?n.default.state==="loading"?s(n.default.contents):n.default:Kn(xi(n.default));o.contents;let a;const c=new Map;function l(A){return A}function d(A,U){const ne=U.then(Y=>{var ee,se;return((se=((ee=A.getState().nextTree)!==null&&ee!==void 0?ee:A.getState().currentTree).atomValues.get(e))===null||se===void 0?void 0:se.contents)===ne&&Yl(A,Z,Y),Y}).catch(Y=>{var ee,se;throw((se=((ee=A.getState().nextTree)!==null&&ee!==void 0?ee:A.getState().currentTree).atomValues.get(e))===null||se===void 0?void 0:se.contents)===ne&&SE(A,Z,jo(Y)),Y});return ne}function u(A,U,ne){var Y;r++;const ee=()=>{var ge;r--,(ge=c.get(A))===null||ge===void 0||ge.forEach(nt=>nt()),c.delete(A)};if(A.getState().knownAtoms.add(e),o.state==="loading"){const ge=()=>{var nt;((nt=A.getState().nextTree)!==null&&nt!==void 0?nt:A.getState().currentTree).atomValues.has(e)||EE(A,Z)};o.contents.finally(ge)}const se=(Y=n.effects)!==null&&Y!==void 0?Y:n.effects_UNSTABLE;if(se!=null){let ge=function(q){if(Ye&&q.key===e){const Q=ve;return Q instanceof Kt?h(A,U):ce(Q)?Go(Q.then(_=>_ instanceof Kt?o.toPromise():_)):Kn(Q)}return wE(A,q)},nt=function(q){return ge(q).toPromise()},zn=function(q){var Q;const _=mE(A,(Q=A.getState().nextTree)!==null&&Q!==void 0?Q:A.getState().currentTree,q.key);return Ye&&q.key===e&&!(ve instanceof Kt)?{..._,isSet:!0,loadable:ge(q)}:_},ve=En,Ye=!0,gn=!1,it=null;const Lt=q=>Q=>{if(Ye){const _=ge(Z),S=_.state==="hasValue"?_.contents:En;ve=typeof Q=="function"?Q(S):Q,ce(ve)&&(ve=ve.then(I=>(it={effect:q,value:I},I)))}else{if(ce(Q))throw $("Setting atoms to async values is not implemented.");typeof Q!="function"&&(it={effect:q,value:xi(Q)}),Yl(A,Z,typeof Q=="function"?_=>{const S=xi(Q(_));return it={effect:q,value:S},S}:xi(Q))}},jn=q=>()=>Lt(q)(En),Gn=q=>Q=>{var _;const{release:S}=A.subscribeToTransactions(I=>{var F;let{currentTree:C,previousTree:G}=I.getState();G||(G=C);const j=(F=C.atomValues.get(e))!==null&&F!==void 0?F:o;if(j.state==="hasValue"){var N,le,Ie,te;const pe=j.contents,ft=(N=G.atomValues.get(e))!==null&&N!==void 0?N:o,vn=ft.state==="hasValue"?ft.contents:En;((le=it)===null||le===void 0?void 0:le.effect)!==q||((Ie=it)===null||Ie===void 0?void 0:Ie.value)!==pe?Q(pe,vn,!C.atomValues.has(e)):((te=it)===null||te===void 0?void 0:te.effect)===q&&(it=null)}},e);c.set(A,[...(_=c.get(A))!==null&&_!==void 0?_:[],S])};for(const q of se)try{const Q=q({node:Z,storeID:A.storeID,parentStoreID_UNSTABLE:A.parentStoreID,trigger:ne,setSelf:Lt(q),resetSelf:jn(q),onSet:Gn(q),getPromise:nt,getLoadable:ge,getInfo_UNSTABLE:zn});if(Q!=null){var xe;c.set(A,[...(xe=c.get(A))!==null&&xe!==void 0?xe:[],Q])}}catch(Q){ve=Q,gn=!0}if(Ye=!1,!(ve instanceof Kt)){var Ke;const q=gn?jo(ve):ce(ve)?Go(d(A,ve)):Kn(xi(ve));q.contents,U.atomValues.set(e,q),(Ke=A.getState().nextTree)===null||Ke===void 0||Ke.atomValues.set(e,q)}}return ee}function h(A,U){var ne,Y;return(ne=(Y=U.atomValues.get(e))!==null&&Y!==void 0?Y:a)!==null&&ne!==void 0?ne:o}function m(A,U){if(U.atomValues.has(e))return de(U.atomValues.get(e));if(U.nonvalidatedAtoms.has(e)){if(a!=null)return a;if(t==null)return o;const ne=U.nonvalidatedAtoms.get(e),Y=t.validator(ne,En);return a=Y instanceof Kt?o:Kn(Y),a}else return o}function g(){a=void 0}function E(A,U,ne){if(U.atomValues.has(e)){const Y=de(U.atomValues.get(e));if(Y.state==="hasValue"&&ne===Y.contents)return new Map}else if(!U.nonvalidatedAtoms.has(e)&&ne instanceof Kt)return new Map;return a=void 0,new Map().set(e,Kn(ne))}function M(){return Nh(e)!==void 0&&r<=0}const Z=gE({key:e,nodeType:"atom",peek:h,get:m,set:E,init:u,invalidate:g,shouldDeleteConfigOnRelease:M,dangerouslyAllowMutability:n.dangerouslyAllowMutability,persistence_UNSTABLE:n.persistence_UNSTABLE?{type:n.persistence_UNSTABLE.type,backButton:n.persistence_UNSTABLE.backButton}:void 0,shouldRestoreFromSnapshots:!0,retainedBy:i});return Z}function pc(n){const{...e}=n,t="default"in n?n.default:new Promise(()=>{});return yE(t)?TE({...e,default:t}):bE({...e,default:t})}function TE(n){const e=pc({...n,default:En,persistence_UNSTABLE:n.persistence_UNSTABLE===void 0?void 0:{...n.persistence_UNSTABLE,validator:i=>i instanceof Kt?i:de(n.persistence_UNSTABLE).validator(i,En)},effects:n.effects,effects_UNSTABLE:n.effects_UNSTABLE}),t=li({key:`${n.key}__withFallback`,get:({get:i})=>{const r=i(e);return r instanceof Kt?n.default:r},set:({set:i},r)=>i(e,r),cachePolicy_UNSTABLE:{eviction:"most-recent"},dangerouslyAllowMutability:n.dangerouslyAllowMutability});return vE(t.key,Nh(n.key)),t}pc.value=n=>new Ah(n);var Ph=pc;class RE{constructor(e){var t;V(this,"_map",void 0),V(this,"_keyMapper",void 0),this._map=new Map,this._keyMapper=(t=e==null?void 0:e.mapKey)!==null&&t!==void 0?t:i=>i}size(){return this._map.size}has(e){return this._map.has(this._keyMapper(e))}get(e){return this._map.get(this._keyMapper(e))}set(e,t){this._map.set(this._keyMapper(e),t)}delete(e){this._map.delete(this._keyMapper(e))}clear(){this._map.clear()}}var CE={MapCache:RE},AE=CE.MapCache,NE=Object.freeze({__proto__:null,MapCache:AE});const{LRUCache:Ql}=bh,{MapCache:PE}=NE,Zr={equality:"reference",eviction:"none",maxSize:1/0};function kE({equality:n=Zr.equality,eviction:e=Zr.eviction,maxSize:t=Zr.maxSize}=Zr){const i=OE(n);return LE(e,t,i)}function OE(n){switch(n){case"reference":return e=>e;case"value":return e=>Zs(e)}throw $(`Unrecognized equality policy ${n}`)}function LE(n,e,t){switch(n){case"keep-all":return new PE({mapKey:t});case"lru":return new Ql({mapKey:t,maxSize:de(e)});case"most-recent":return new Ql({mapKey:t,maxSize:1})}throw $(`Unrecognized eviction policy ${n}`)}var kh=kE;const{setConfigDeletionHandler:DE}=Ge;function ME(n){var e,t;const i=kh({equality:(e=(t=n.cachePolicyForParams_UNSTABLE)===null||t===void 0?void 0:t.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var s,o;const a=i.get(r);if(a!=null)return a;const{cachePolicyForParams_UNSTABLE:c,...l}=n,d="default"in n?n.default:new Promise(()=>{}),u=Ph({...l,key:`${n.key}__${(s=Zs(r))!==null&&s!==void 0?s:"void"}`,default:typeof d=="function"?d(r):d,retainedBy_UNSTABLE:typeof n.retainedBy_UNSTABLE=="function"?n.retainedBy_UNSTABLE(r):n.retainedBy_UNSTABLE,effects:typeof n.effects=="function"?n.effects(r):typeof n.effects_UNSTABLE=="function"?n.effects_UNSTABLE(r):(o=n.effects)!==null&&o!==void 0?o:n.effects_UNSTABLE});return i.set(r,u),DE(u.key,()=>{i.delete(r)}),u}}var xE=ME;const{setConfigDeletionHandler:UE}=Ge;let FE=0;function VE(n){var e,t;const i=kh({equality:(e=(t=n.cachePolicyForParams_UNSTABLE)===null||t===void 0?void 0:t.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var s;let o;try{o=i.get(r)}catch(h){throw $(`Problem with cache lookup for selector ${n.key}: ${h.message}`)}if(o!=null)return o;const a=`${n.key}__selectorFamily/${(s=Zs(r,{allowFunctions:!0}))!==null&&s!==void 0?s:"void"}/${FE++}`,c=h=>n.get(r)(h),l=n.cachePolicy_UNSTABLE,d=typeof n.retainedBy_UNSTABLE=="function"?n.retainedBy_UNSTABLE(r):n.retainedBy_UNSTABLE;let u;if(n.set!=null){const h=n.set;u=li({key:a,get:c,set:(g,E)=>h(r)(g,E),cachePolicy_UNSTABLE:l,dangerouslyAllowMutability:n.dangerouslyAllowMutability,retainedBy_UNSTABLE:d})}else u=li({key:a,get:c,cachePolicy_UNSTABLE:l,dangerouslyAllowMutability:n.dangerouslyAllowMutability,retainedBy_UNSTABLE:d});return i.set(r,u),UE(u.key,()=>{i.delete(r)}),u}}var fn=VE;const $E=fn({key:"__constant",get:n=>()=>n,cachePolicyForParams_UNSTABLE:{equality:"reference"}});function BE(n){return $E(n)}var WE=BE;const HE=fn({key:"__error",get:n=>()=>{throw $(n)},cachePolicyForParams_UNSTABLE:{equality:"reference"}});function zE(n){return HE(n)}var jE=zE;function GE(n){return n}var qE=GE;const{loadableWithError:Oh,loadableWithPromise:Lh,loadableWithValue:Dh}=br;function eo(n,e){const t=Array(e.length).fill(void 0),i=Array(e.length).fill(void 0);for(const[r,s]of e.entries())try{t[r]=n(s)}catch(o){i[r]=o}return[t,i]}function KE(n){return n!=null&&!ce(n)}function to(n){return Array.isArray(n)?n:Object.getOwnPropertyNames(n).map(e=>n[e])}function ya(n,e){return Array.isArray(n)?e:Object.getOwnPropertyNames(n).reduce((t,i,r)=>({...t,[i]:e[r]}),{})}function Xn(n,e,t){const i=t.map((r,s)=>r==null?Dh(e[s]):ce(r)?Lh(r):Oh(r));return ya(n,i)}function YE(n,e){return e.map((t,i)=>t===void 0?n[i]:t)}const QE=fn({key:"__waitForNone",get:n=>({get:e})=>{const t=to(n),[i,r]=eo(e,t);return Xn(n,i,r)},dangerouslyAllowMutability:!0}),JE=fn({key:"__waitForAny",get:n=>({get:e})=>{const t=to(n),[i,r]=eo(e,t);return r.some(s=>!ce(s))?Xn(n,i,r):new Promise(s=>{for(const[o,a]of r.entries())ce(a)&&a.then(c=>{i[o]=c,r[o]=void 0,s(Xn(n,i,r))}).catch(c=>{r[o]=c,s(Xn(n,i,r))})})},dangerouslyAllowMutability:!0}),XE=fn({key:"__waitForAll",get:n=>({get:e})=>{const t=to(n),[i,r]=eo(e,t);if(r.every(o=>o==null))return ya(n,i);const s=r.find(KE);if(s!=null)throw s;return Promise.all(r).then(o=>ya(n,YE(i,o)))},dangerouslyAllowMutability:!0}),ZE=fn({key:"__waitForAllSettled",get:n=>({get:e})=>{const t=to(n),[i,r]=eo(e,t);return r.every(s=>!ce(s))?Xn(n,i,r):Promise.all(r.map((s,o)=>ce(s)?s.then(a=>{i[o]=a,r[o]=void 0}).catch(a=>{i[o]=void 0,r[o]=a}):null)).then(()=>Xn(n,i,r))},dangerouslyAllowMutability:!0}),eS=fn({key:"__noWait",get:n=>({get:e})=>{try{return li.value(Dh(e(n)))}catch(t){return li.value(ce(t)?Lh(t):Oh(t))}},dangerouslyAllowMutability:!0});var tS={waitForNone:QE,waitForAny:JE,waitForAll:XE,waitForAllSettled:ZE,noWait:eS};const{RecoilLoadable:nS}=br,{DefaultValue:iS}=Ge,{RecoilRoot:rS,useRecoilStoreID:sS}=zt,{isRecoilValue:oS}=oi,{retentionZone:aS}=Ws,{freshSnapshot:cS}=Ks,{useRecoilState:lS,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:uS,useRecoilStateLoadable:dS,useRecoilValue:hS,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:fS,useRecoilValueLoadable:pS,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:_S,useResetRecoilState:mS,useSetRecoilState:gS}=Cy,{useGotoRecoilSnapshot:vS,useRecoilSnapshot:yS,useRecoilTransactionObserver:wS}=gh,{useRecoilCallback:ES}=Eh,{noWait:SS,waitForAll:IS,waitForAllSettled:bS,waitForAny:TS,waitForNone:RS}=tS;var Ei={DefaultValue:iS,isRecoilValue:oS,RecoilLoadable:nS,RecoilEnv:yi,RecoilRoot:rS,useRecoilStoreID:sS,useRecoilBridgeAcrossReactRoots_UNSTABLE:ew,atom:Ph,selector:li,atomFamily:xE,selectorFamily:fn,constSelector:WE,errorSelector:jE,readOnlySelector:qE,noWait:SS,waitForNone:RS,waitForAny:TS,waitForAll:IS,waitForAllSettled:bS,useRecoilValue:hS,useRecoilValueLoadable:pS,useRecoilState:lS,useRecoilStateLoadable:dS,useSetRecoilState:gS,useResetRecoilState:mS,useGetRecoilValueInfo_UNSTABLE:Ky,useRecoilRefresher_UNSTABLE:Nw,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:_S,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:fS,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:uS,useRecoilCallback:ES,useRecoilTransaction_UNSTABLE:Dw,useGotoRecoilSnapshot:vS,useRecoilSnapshot:yS,useRecoilTransactionObserver_UNSTABLE:wS,snapshot_UNSTABLE:cS,useRetain:lc,retentionZone:aS},_0=Ei.RecoilRoot,m0=Ei.atom,g0=Ei.selector,v0=Ei.useRecoilValue,y0=Ei.useRecoilState,w0=Ei.useSetRecoilState;const CS=Math.pow(2,32),AS=n=>{let e=0;for(let t=0;t<n.length;t+=1){const i=n.charCodeAt(t);e=(31*e+i)%CS}return e},NS=n=>n<10?`0${n}`:n,E0=n=>{if(!n)return!1;const e=n.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/);if(!e)return!1;const t=e.slice(1);if(t.length!==3)return!1;const[i,r,s]=t.map(Number);return i&&r>=1&&r<=12&&s>=1&&s<=31},S0=()=>{const{gameId:n}=x_();let e=n;if(!e){const i=new Date;e=[i.getFullYear(),i.getMonth()+1,i.getDate()].map(NS).join("-")}const t=AS(e.split("").reverse().join(""));return{gameId:e,gameHash:t}};var Jl={};/**
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
 */const Mh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const w=function(n,e){if(!n)throw Si(e)},Si=function(n){return new Error("Firebase Database ("+Mh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const xh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},PS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),i.push(t[d],t[u],t[h],t[m])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):PS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const l=r<n.length?t[n.charAt(r)]:64;++r;const u=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||l==null||u==null)throw new kS;const h=s<<2|a>>4;if(i.push(h),l!==64){const m=a<<4&240|l>>2;if(i.push(m),u!==64){const g=l<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uh=function(n){const e=xh(n);return _c.encodeByteArray(e,!0)},hs=function(n){return Uh(n).replace(/\./g,"")},fs=function(n){try{return _c.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function OS(n){return or(void 0,n)}function or(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!LS(t)||(n[t]=or(n[t],e[t]));return n}function LS(n){return n!=="__proto__"}/**
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
 */function Fh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DS=()=>Fh().__FIREBASE_DEFAULTS__,MS=()=>{if(typeof process>"u"||typeof Jl>"u")return;const n=Jl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fs(n[1]);return e&&JSON.parse(e)},mc=()=>{try{return DS()||MS()||xS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vh=()=>{var n;return(n=mc())===null||n===void 0?void 0:n.config},US=n=>{var e;return(e=mc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Be{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function FS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hs(JSON.stringify(t)),hs(JSON.stringify(o)),""].join(".")}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function $h(){var n;const e=(n=mc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VS(){return typeof window<"u"||Bh()}function Bh(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function $S(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function no(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hh(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zh(){return Mh.NODE_ADMIN===!0}function ps(){try{return typeof indexedDB=="object"}catch{return!1}}function BS(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const WS="FirebaseError";class ze extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=WS,Object.setPrototypeOf(this,ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?HS(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ze(r,a,i)}}function HS(n,e){return n.replace(zS,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const zS=/\{\$([^}]+)}/g;/**
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
 */function ar(n){return JSON.parse(n)}function be(n){return JSON.stringify(n)}/**
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
 */const jh=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=ar(fs(s[0])||""),t=ar(fs(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},jS=function(n){const e=jh(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},GS=function(n){const e=jh(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function et(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Nn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function _s(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ms(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function wa(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Xl(s)&&Xl(o)){if(!wa(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Xl(n){return n!==null&&typeof n=="object"}/**
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
 */function Vn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Jn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Gi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class qS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^s&(o^a),d=1518500249):(l=s^o^a,d=1859775393):u<60?(l=s&o|a&(s|o),d=2400959708):(l=s^o^a,d=3395469782);const h=(r<<5|r>>>27)+l+c+d+i[u]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Gh(n,e){const t=new KS(n,e);return t.subscribe.bind(t)}class KS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");YS(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=qo),r.error===void 0&&(r.error=qo),r.complete===void 0&&(r.complete=qo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qo(){}/**
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
 */const k=function(n,e,t,i){let r;if(i<e?r="at least "+e:i>t&&(r=t===0?"none":"no more than "+t),r){const s=n+" failed: Was called with "+i+(i===1?" argument.":" arguments.")+" Expects "+r+".";throw new Error(s)}};function je(n,e){return`${n} failed: ${e} argument `}function Ne(n,e,t,i){if(!(i&&!t)&&typeof t!="function")throw new Error(je(n,e)+"must be a valid function.")}function Zl(n,e,t,i){if(t&&(typeof t!="object"||t===null))throw new Error(je(n,e)+"must be a valid context object.")}/**
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
 */const QS=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,w(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},io=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function x(n){return n&&n._delegate?n._delegate:n}class ut{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class Ea{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Be;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XS(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:JS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JS(n){return n===yn?void 0:n}function XS(n){return n.instantiationMode==="EAGER"}/**
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
 */class vc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ea(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const yc=[];var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const qh={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},ZS=X.INFO,eI={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},tI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=eI[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pr{constructor(e){this.name=e,this._logLevel=ZS,this._logHandler=tI,this._userLogHandler=null,yc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}function nI(n){yc.forEach(e=>{e.setLogLevel(n)})}function iI(n,e){for(const t of yc){let i=null;e&&e.level&&(i=qh[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(r,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(i??r.logLevel)&&n({level:X[s].toLowerCase(),message:a,args:o,type:r.name})}}}const rI=(n,e)=>e.some(t=>n instanceof t);let eu,tu;function sI(){return eu||(eu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oI(){return tu||(tu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kh=new WeakMap,Sa=new WeakMap,Yh=new WeakMap,Ko=new WeakMap,wc=new WeakMap;function aI(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Xt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Kh.set(t,n)}).catch(()=>{}),wc.set(e,n),e}function cI(n){if(Sa.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Sa.set(n,e)}let Ia={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function lI(n){Ia=n(Ia)}function uI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Yo(this),e,...t);return Yh.set(i,e.sort?e.sort():[e]),Xt(i)}:oI().includes(n)?function(...e){return n.apply(Yo(this),e),Xt(Kh.get(this))}:function(...e){return Xt(n.apply(Yo(this),e))}}function dI(n){return typeof n=="function"?uI(n):(n instanceof IDBTransaction&&cI(n),rI(n,sI())?new Proxy(n,Ia):n)}function Xt(n){if(n instanceof IDBRequest)return aI(n);if(Ko.has(n))return Ko.get(n);const e=dI(n);return e!==n&&(Ko.set(n,e),wc.set(e,n)),e}const Yo=n=>wc.get(n);function hI(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=Xt(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Xt(o.result),c.oldVersion,c.newVersion,Xt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const fI=["get","getKey","getAll","getAllKeys","count"],pI=["put","add","delete","clear"],Qo=new Map;function nu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qo.get(e))return Qo.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=pI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||fI.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),r&&c.done]))[0]};return Qo.set(e,s),s}lI(n=>({...n,get:(e,t,i)=>nu(e,t)||n.get(e,t,i),has:(e,t)=>!!nu(e,t)||n.has(e,t)}));/**
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
 */class _I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function mI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gs="@firebase/app",ba="0.10.16";/**
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
 */const $t=new Pr("@firebase/app"),gI="@firebase/app-compat",vI="@firebase/analytics-compat",yI="@firebase/analytics",wI="@firebase/app-check-compat",EI="@firebase/app-check",SI="@firebase/auth",II="@firebase/auth-compat",bI="@firebase/database",TI="@firebase/data-connect",RI="@firebase/database-compat",CI="@firebase/functions",AI="@firebase/functions-compat",NI="@firebase/installations",PI="@firebase/installations-compat",kI="@firebase/messaging",OI="@firebase/messaging-compat",LI="@firebase/performance",DI="@firebase/performance-compat",MI="@firebase/remote-config",xI="@firebase/remote-config-compat",UI="@firebase/storage",FI="@firebase/storage-compat",VI="@firebase/firestore",$I="@firebase/vertexai",BI="@firebase/firestore-compat",WI="firebase",HI="11.0.2";/**
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
 */const rn="[DEFAULT]",zI={[gs]:"fire-core",[gI]:"fire-core-compat",[yI]:"fire-analytics",[vI]:"fire-analytics-compat",[EI]:"fire-app-check",[wI]:"fire-app-check-compat",[SI]:"fire-auth",[II]:"fire-auth-compat",[bI]:"fire-rtdb",[TI]:"fire-data-connect",[RI]:"fire-rtdb-compat",[CI]:"fire-fn",[AI]:"fire-fn-compat",[NI]:"fire-iid",[PI]:"fire-iid-compat",[kI]:"fire-fcm",[OI]:"fire-fcm-compat",[LI]:"fire-perf",[DI]:"fire-perf-compat",[MI]:"fire-rc",[xI]:"fire-rc-compat",[UI]:"fire-gcs",[FI]:"fire-gcs-compat",[VI]:"fire-fst",[BI]:"fire-fst-compat",[$I]:"fire-vertex","fire-js":"fire-js",[WI]:"fire-js-all"};/**
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
 */const sn=new Map,ui=new Map,di=new Map;function cr(n,e){try{n.container.addComponent(e)}catch(t){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qh(n,e){n.container.addOrOverwriteComponent(e)}function on(n){const e=n.name;if(di.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;di.set(e,n);for(const t of sn.values())cr(t,n);for(const t of ui.values())cr(t,n);return!0}function Jh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function jI(n,e,t=rn){Jh(n,e).clearInstance(t)}function Xh(n){return n.options!==void 0}function ye(n){return n.settings!==void 0}function GI(){di.clear()}/**
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
 */const qI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lt=new Fn("app","Firebase",qI);/**
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
 */let Zh=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
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
 */class KI extends Zh{constructor(e,t,i,r){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:i,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,r);else{const a=e;super(a.options,o,r)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,vt(gs,ba,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Sc(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw lt.create("server-app-deleted")}}/**
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
 */const pn=HI;function Ec(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:rn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw lt.create("bad-app-name",{appName:String(r)});if(t||(t=Vh()),!t)throw lt.create("no-options");const s=sn.get(r);if(s){if(wa(t,s.options)&&wa(i,s.config))return s;throw lt.create("duplicate-app",{appName:r})}const o=new vc(r);for(const c of di.values())o.addComponent(c);const a=new Zh(t,i,o);return sn.set(r,a),a}function YI(n,e){if(VS()&&!Bh())throw lt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;Xh(n)?t=n.options:t=n;const i=Object.assign(Object.assign({},e),t);i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const r=l=>[...l].reduce((d,u)=>Math.imul(31,d)+u.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw lt.create("finalization-registry-not-supported",{});const s=""+r(JSON.stringify(i)),o=ui.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new vc(s);for(const l of di.values())a.addComponent(l);const c=new KI(t,e,s,a);return ui.set(s,c),c}function QI(n=rn){const e=sn.get(n);if(!e&&n===rn&&Vh())return Ec();if(!e)throw lt.create("no-app",{appName:n});return e}function JI(){return Array.from(sn.values())}async function Sc(n){let e=!1;const t=n.name;sn.has(t)?(e=!0,sn.delete(t)):ui.has(t)&&n.decRefCount()<=0&&(ui.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(i=>i.delete())),n.isDeleted=!0)}function vt(n,e,t){var i;let r=(i=zI[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}on(new ut(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function ef(n,e){if(n!==null&&typeof n!="function")throw lt.create("invalid-log-argument");iI(n,e)}function tf(n){nI(n)}/**
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
 */const XI="firebase-heartbeat-database",ZI=1,lr="firebase-heartbeat-store";let Jo=null;function nf(){return Jo||(Jo=hI(XI,ZI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(lr)}catch(t){console.warn(t)}}}}).catch(n=>{throw lt.create("idb-open",{originalErrorMessage:n.message})})),Jo}async function eb(n){try{const t=(await nf()).transaction(lr),i=await t.objectStore(lr).get(rf(n));return await t.done,i}catch(e){if(e instanceof ze)$t.warn(e.message);else{const t=lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(t.message)}}}async function iu(n,e){try{const i=(await nf()).transaction(lr,"readwrite");await i.objectStore(lr).put(e,rf(n)),await i.done}catch(t){if(t instanceof ze)$t.warn(t.message);else{const i=lt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$t.warn(i.message)}}}function rf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tb=1024,nb=30*24*60*60*1e3;class ib{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sb(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ru();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nb}),this._storage.overwrite(this._heartbeatsCache))}catch(i){$t.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ru(),{heartbeatsToSend:i,unsentEntries:r}=rb(this._heartbeatsCache.heartbeats),s=hs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return $t.warn(t),""}}}function ru(){return new Date().toISOString().substring(0,10)}function rb(n,e=tb){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),su(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),su(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class sb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ps()?BS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return iu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return iu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function su(n){return hs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ob(n){on(new ut("platform-logger",e=>new _I(e),"PRIVATE")),on(new ut("heartbeat",e=>new ib(e),"PRIVATE")),vt(gs,ba,n),vt(gs,ba,"esm2017"),vt("fire-js","")}ob("");const ab=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ze,SDK_VERSION:pn,_DEFAULT_ENTRY_NAME:rn,_addComponent:cr,_addOrOverwriteComponent:Qh,_apps:sn,_clearComponents:GI,_components:di,_getProvider:Jh,_isFirebaseApp:Xh,_isFirebaseServerApp:ye,_registerComponent:on,_removeServiceInstance:jI,_serverApps:ui,deleteApp:Sc,getApp:QI,getApps:JI,initializeApp:Ec,initializeServerApp:YI,onLog:ef,registerVersion:vt,setLogLevel:tf},Symbol.toStringTag,{value:"Module"}));/**
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
 */class cb{constructor(e,t){this._delegate=e,this.firebase=t,cr(e,new ut("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Sc(this._delegate)))}_getService(e,t=rn){var i;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((i=r.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=rn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){cr(this._delegate,e)}_addOrOverwriteComponent(e){Qh(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const lb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ou=new Fn("app-compat","Firebase",lb);/**
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
 */function ub(n){const e={},t={__esModule:!0,initializeApp:s,app:r,registerVersion:vt,setLogLevel:tf,onLog:ef,apps:null,SDK_VERSION:pn,INTERNAL:{registerComponent:a,removeApp:i,useAsService:c,modularAPIs:ab}};t.default=t,Object.defineProperty(t,"apps",{get:o});function i(l){delete e[l]}function r(l){if(l=l||rn,!et(e,l))throw ou.create("no-app",{appName:l});return e[l]}r.App=n;function s(l,d={}){const u=Ec(l,d);if(et(e,u.name))return e[u.name];const h=new n(u,t);return e[u.name]=h,h}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const d=l.name,u=d.replace("-compat","");if(on(l)&&l.type==="PUBLIC"){const h=(m=r())=>{if(typeof m[u]!="function")throw ou.create("invalid-app-argument",{appName:d});return m[u]()};l.serviceProps!==void 0&&or(h,l.serviceProps),t[u]=h,n.prototype[u]=function(...m){return this._getService.bind(this,d).apply(this,l.multipleInstances?m:[])}}return l.type==="PUBLIC"?t[u]:null}function c(l,d){return d==="serverAuth"?null:d}return t}/**
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
 */function sf(){const n=ub(cb);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:sf,extendNamespace:e,createSubscribe:Gh,ErrorFactory:Fn,deepExtend:or});function e(t){or(n,t)}return n}const db=sf();/**
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
 */const au=new Pr("@firebase/app-compat"),hb="@firebase/app-compat",fb="0.2.46";/**
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
 */function pb(n){vt(hb,fb,n)}/**
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
 */try{const n=Fh();if(n.firebase!==void 0){au.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&au.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Bt=db;pb();var _b="firebase",mb="11.0.2";/**
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
 */Bt.registerVersion(_b,mb,"app-compat");function Ic(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}const Ui={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Yn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function gb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function of(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vb=gb,yb=of,af=new Fn("auth","Firebase",of());/**
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
 */const vs=new Pr("@firebase/auth");function wb(n,...e){vs.logLevel<=X.WARN&&vs.warn(`Auth (${pn}): ${n}`,...e)}function rs(n,...e){vs.logLevel<=X.ERROR&&vs.error(`Auth (${pn}): ${n}`,...e)}/**
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
 */function Me(n,...e){throw Tc(n,...e)}function Te(n,...e){return Tc(n,...e)}function bc(n,e,t){const i=Object.assign(Object.assign({},yb()),{[e]:t});return new Fn("auth","Firebase",i).create(e,{appName:n.name})}function Oe(n){return bc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ii(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Me(n,"argument-error"),bc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return af.create(n,...e)}function v(n,e,...t){if(!n)throw Tc(e,...t)}function Rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rs(e),new Error(e)}function wt(n,e){n||Rt(e)}/**
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
 */function ur(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Rc(){return cu()==="http:"||cu()==="https:"}function cu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Eb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rc()||Wh()||"connection"in navigator)?navigator.onLine:!0}function Sb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class kr{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=gc()||no()}get(){return Eb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cc(n,e){wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cf{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ib={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bb=new kr(3e4,6e4);function we(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ee(n,e,t,i,r={}){return lf(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Vn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},s);return $S()||(l.referrerPolicy="no-referrer"),cf.fetch()(uf(n,n.config.apiHost,t,a),l)})}async function lf(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ib),e);try{const r=new Rb(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw qi(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw bc(n,d,l);Me(n,d)}}catch(r){if(r instanceof ze)throw r;Me(n,"network-request-failed",{message:String(r)})}}async function jt(n,e,t,i,r={}){const s=await Ee(n,e,t,i,r);return"mfaPendingCredential"in s&&Me(n,"multi-factor-auth-required",{_serverResponse:s}),s}function uf(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Cc(n.config,r):`${n.config.apiScheme}://${r}`}function Tb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Rb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Te(this.auth,"network-request-failed")),bb.get())})}}function qi(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Te(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */function lu(n){return n!==void 0&&n.getResponse!==void 0}function uu(n){return n!==void 0&&n.enterprise!==void 0}class df{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Tb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function Cb(n){return(await Ee(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function hf(n,e){return Ee(n,"GET","/v2/recaptchaConfig",we(n,e))}/**
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
 */async function Ab(n,e){return Ee(n,"POST","/v1/accounts:delete",e)}async function Nb(n,e){return Ee(n,"POST","/v1/accounts:update",e)}async function ff(n,e){return Ee(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ji(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pb(n,e=!1){const t=x(n),i=await t.getIdToken(e),r=ro(i);v(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ji(Xo(r.auth_time)),issuedAtTime:Ji(Xo(r.iat)),expirationTime:Ji(Xo(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xo(n){return Number(n)*1e3}function ro(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return rs("JWT malformed, contained fewer than 3 sections"),null;try{const r=fs(t);return r?JSON.parse(r):(rs("Failed to decode base64 JWT payload"),null)}catch(r){return rs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function du(n){const e=ro(n);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ze&&kb(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function kb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ob{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ta{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dr(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Wt(n,ff(t,{idToken:i}));v(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?pf(s.providerUserInfo):[],a=Db(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ta(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Lb(n){const e=x(n);await dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Db(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function pf(n){return n.map(e=>{var{providerId:t}=e,i=Ic(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Mb(n,e){const t=await lf(n,{},async()=>{const i=Vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=uf(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cf.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xb(n,e){return Ee(n,"POST","/v2/accounts:revokeToken",we(n,e))}/**
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
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):du(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){v(e.length!==0,"internal-error");const t=du(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(v(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Mb(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new Zn;return i&&(v(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(v(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(v(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function qt(n,e){v(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Ic(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ob(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ta(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Wt(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pb(this,e)}reload(){return Lb(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await dr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ye(this.auth.app))return Promise.reject(Oe(this.auth));const e=await this.getIdToken();return await Wt(this,Ab(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,c,l,d;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(r=t.email)!==null&&r!==void 0?r:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,E=(a=t.tenantId)!==null&&a!==void 0?a:void 0,M=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,Z=(l=t.createdAt)!==null&&l!==void 0?l:void 0,A=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:U,emailVerified:ne,isAnonymous:Y,providerData:ee,stsTokenManager:se}=t;v(U&&se,e,"internal-error");const xe=Zn.fromJSON(this.name,se);v(typeof U=="string",e,"internal-error"),qt(u,e.name),qt(h,e.name),v(typeof ne=="boolean",e,"internal-error"),v(typeof Y=="boolean",e,"internal-error"),qt(m,e.name),qt(g,e.name),qt(E,e.name),qt(M,e.name),qt(Z,e.name),qt(A,e.name);const Ke=new Dt({uid:U,auth:e,email:h,emailVerified:ne,displayName:u,isAnonymous:Y,photoURL:g,phoneNumber:m,tenantId:E,stsTokenManager:xe,createdAt:Z,lastLoginAt:A});return ee&&Array.isArray(ee)&&(Ke.providerData=ee.map(ge=>Object.assign({},ge))),M&&(Ke._redirectEventId=M),Ke}static async _fromIdTokenResponse(e,t,i=!1){const r=new Zn;r.updateFromServerResponse(t);const s=new Dt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await dr(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];v(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?pf(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Zn;a.updateFromIdToken(i);const c=new Dt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Ta(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
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
 */const hu=new Map;function Ze(n){wt(n instanceof Function,"Expected a class definition");let e=hu.get(n);return e?(wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hu.set(n,e),e)}/**
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
 */class _f{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_f.type="NONE";const hi=_f;/**
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
 */function bn(n,e,t){return`firebase:${n}:${e}:${t}`}class ei{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=bn(this.userKey,r.apiKey,s),this.fullPersistenceKey=bn("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ei(Ze(hi),e,i);const r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||Ze(hi);const o=bn(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const u=Dt._fromJSON(e,d);l!==s&&(a=u),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ei(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ei(s,e,i))}}/**
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
 */function fu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wf(e))return"Blackberry";if(Ef(e))return"Webos";if(gf(e))return"Safari";if((e.includes("chrome/")||vf(e))&&!e.includes("edge/"))return"Chrome";if(Or(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function mf(n=Re()){return/firefox\//i.test(n)}function gf(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vf(n=Re()){return/crios\//i.test(n)}function yf(n=Re()){return/iemobile/i.test(n)}function Or(n=Re()){return/android/i.test(n)}function wf(n=Re()){return/blackberry/i.test(n)}function Ef(n=Re()){return/webos/i.test(n)}function Lr(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ub(n=Re()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Fb(n=Re()){var e;return Lr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vb(){return Hh()&&document.documentMode===10}function Sf(n=Re()){return Lr(n)||Or(n)||Ef(n)||wf(n)||/windows phone/i.test(n)||yf(n)}/**
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
 */function If(n,e=[]){let t;switch(n){case"Browser":t=fu(Re());break;case"Worker":t=`${fu(Re())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${pn}/${i}`}/**
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
 */class $b{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Bb(n,e={}){return Ee(n,"GET","/v2/passwordPolicy",we(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Wb=6;class Hb{constructor(e){var t,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Wb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class zb{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pu(this),this.idTokenSubscription=new pu(this),this.beforeStateQueue=new $b(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=af,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ze(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await ei.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ff(this,{idToken:e}),i=await Dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ye(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ye(this.app))return Promise.reject(Oe(this));const t=e?x(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ye(this.app)?Promise.reject(Oe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ye(this.app)?Promise.reject(Oe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ze(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bb(this),t=new Hb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await xb(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ze(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ei.create(this,[Ze(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=If(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&wb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function me(n){return x(n)}class pu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gh(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jb(n){Dr=n}function Ac(n){return Dr.loadJS(n)}function Gb(){return Dr.recaptchaV2Script}function qb(){return Dr.recaptchaEnterpriseScript}function Kb(){return Dr.gapiScript}function bf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const Yb=500,Qb=6e4,es=1e12;class Jb{constructor(e){this.auth=e,this.counter=es,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new eT(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||es;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||es;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||es;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class Xb{constructor(){this.enterprise=new Zb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Zb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class eT{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;v(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=tT(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Qb)},Yb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function tT(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const nT="recaptcha-enterprise",Xi="NO_RECAPTCHA";class Tf{constructor(e){this.type=nT,this.auth=me(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{hf(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new df(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;uu(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Xi)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Xb().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&uu(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=qb();c.length!==0&&(c+=a),Ac(c).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Fi(n,e,t,i=!1,r=!1){const s=new Tf(n);let o;if(r)o=Xi;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Zt(n,e,t,i,r){var s,o;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Fi(n,e,t,t==="getOobCode");return i(n,a)}else return i(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Fi(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Fi(n,e,t);return i(n,a).catch(async c=>{var l;if(((l=n._getRecaptchaConfig())===null||l===void 0?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const d=await Fi(n,e,t,!1,!0);return i(n,d)}return Promise.reject(c)})}else{const a=await Fi(n,e,t,!1,!0);return i(n,a)}else return Promise.reject(r+" provider is not supported.")}async function iT(n){const e=me(n),t=await hf(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new df(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new Tf(e).verify()}function rT(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ze);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function sT(n,e,t){const i=me(n);v(i._canInitEmulator,i,"emulator-config-failed"),v(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=Rf(e),{host:o,port:a}=oT(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||aT()}function Rf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function oT(n){const e=Rf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:_u(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:_u(o)}}}function _u(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function aT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class bi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
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
 */async function Cf(n,e){return Ee(n,"POST","/v1/accounts:resetPassword",we(n,e))}async function cT(n,e){return Ee(n,"POST","/v1/accounts:update",e)}async function lT(n,e){return Ee(n,"POST","/v1/accounts:signUp",e)}async function uT(n,e){return Ee(n,"POST","/v1/accounts:update",we(n,e))}/**
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
 */async function dT(n,e){return jt(n,"POST","/v1/accounts:signInWithPassword",we(n,e))}async function so(n,e){return Ee(n,"POST","/v1/accounts:sendOobCode",we(n,e))}async function hT(n,e){return so(n,e)}async function fT(n,e){return so(n,e)}async function pT(n,e){return so(n,e)}async function _T(n,e){return so(n,e)}/**
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
 */async function mT(n,e){return jt(n,"POST","/v1/accounts:signInWithEmailLink",we(n,e))}async function gT(n,e){return jt(n,"POST","/v1/accounts:signInWithEmailLink",we(n,e))}/**
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
 */class hr extends bi{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new hr(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new hr(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zt(e,t,"signInWithPassword",dT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return mT(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zt(e,i,"signUpPassword",lT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return gT(e,{idToken:t,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ft(n,e){return jt(n,"POST","/v1/accounts:signInWithIdp",we(n,e))}/**
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
 */const vT="http://localhost";class At extends bi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new At(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Ic(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new At(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ft(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ft(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ft(e,t)}buildRequest(){const e={requestUri:vT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vn(t)}return e}}/**
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
 */async function mu(n,e){return Ee(n,"POST","/v1/accounts:sendVerificationCode",we(n,e))}async function yT(n,e){return jt(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,e))}async function wT(n,e){const t=await jt(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,e));if(t.temporaryProof)throw qi(n,"account-exists-with-different-credential",t);return t}const ET={USER_NOT_FOUND:"user-not-found"};async function ST(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return jt(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,t),ET)}/**
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
 */class Tn extends bi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Tn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Tn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return yT(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return wT(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ST(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!t&&!r&&!s?null:new Tn({verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
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
 */function IT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bT(n){const e=Jn(Gi(n)).link,t=e?Jn(Gi(e)).deep_link_id:null,i=Jn(Gi(n)).deep_link_id;return(i?Jn(Gi(i)).link:null)||i||t||e||n}class oo{constructor(e){var t,i,r,s,o,a;const c=Jn(Gi(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,u=IT((r=c.mode)!==null&&r!==void 0?r:null);v(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=bT(e);try{return new oo(t)}catch{return null}}}/**
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
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,t){return hr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=oo.parseLink(t);return v(i,"argument-error"),hr._fromEmailAndCode(e,i.code,i.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ti extends Gt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ti extends Ti{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return v("providerId"in t&&"signInMethod"in t,"argument-error"),At._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return v(e.idToken||e.accessToken,"argument-error"),At._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ti.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ti.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!t&&!s||!a)return null;try{return new ti(a)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class St extends Ti{constructor(){super("facebook.com")}static credential(e){return At._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
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
 */class It extends Ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return At._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return It.credential(t,i)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
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
 */class bt extends Ti{constructor(){super("github.com")}static credential(e){return At._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
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
 */const TT="http://localhost";class fi extends bi{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ft(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ft(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ft(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=t;return!i||!r||!s||i!==r?null:new fi(i,s)}static _create(e,t){return new fi(e,t)}buildRequest(){return{requestUri:TT,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const RT="saml.";class ys extends Gt{constructor(e){v(e.startsWith(RT),"argument-error"),super(e)}static credentialFromResult(e){return ys.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ys.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=fi.fromJSON(e);return v(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return fi._create(i,t)}catch{return null}}}/**
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
 */class Tt extends Ti{constructor(){super("twitter.com")}static credential(e,t){return At._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Tt.credential(t,i)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
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
 */async function Af(n,e){return jt(n,"POST","/v1/accounts:signUp",we(n,e))}/**
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
 */class dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await Dt._fromIdTokenResponse(e,i,r),o=gu(i);return new dt({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=gu(i);return new dt({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function gu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function CT(n){var e;if(ye(n.app))return Promise.reject(Oe(n));const t=me(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new dt({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Af(t,{returnSecureToken:!0}),r=await dt._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(r.user),r}/**
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
 */class ws extends ze{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,ws.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new ws(e,t,i,r)}}function Nf(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ws._fromErrorAndOperation(n,s,e,i):s})}/**
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
 */function Pf(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function AT(n,e){const t=x(n);await ao(!0,t,e);const{providerUserInfo:i}=await Nb(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=Pf(i||[]);return t.providerData=t.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Nc(n,e,t=!1){const i=await Wt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dt._forOperation(n,"link",i)}async function ao(n,e,t){await dr(e);const i=Pf(e.providerData),r=n===!1?"provider-already-linked":"no-such-provider";v(i.has(t)===n,e.auth,r)}/**
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
 */async function kf(n,e,t=!1){const{auth:i}=n;if(ye(i.app))return Promise.reject(Oe(i));const r="reauthenticate";try{const s=await Wt(n,Nf(i,r,e,n),t);v(s.idToken,i,"internal-error");const o=ro(s.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(n.uid===a,i,"user-mismatch"),dt._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Me(i,"user-mismatch"),s}}/**
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
 */async function Of(n,e,t=!1){if(ye(n.app))return Promise.reject(Oe(n));const i="signIn",r=await Nf(n,i,e),s=await dt._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function co(n,e){return Of(me(n),e)}async function Lf(n,e){const t=x(n);return await ao(!1,t,e.providerId),Nc(t,e)}async function Df(n,e){return kf(x(n),e)}/**
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
 */async function NT(n,e){return jt(n,"POST","/v1/accounts:signInWithCustomToken",we(n,e))}/**
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
 */async function PT(n,e){if(ye(n.app))return Promise.reject(Oe(n));const t=me(n),i=await NT(t,{token:e,returnSecureToken:!0}),r=await dt._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(r.user),r}/**
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
 */class Mr{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Pc._fromServerResponse(e,t):"totpInfo"in t?kc._fromServerResponse(e,t):Me(e,"internal-error")}}class Pc extends Mr{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Pc(t)}}class kc extends Mr{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new kc(t)}}/**
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
 */function lo(n,e,t){var i;v(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),v(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(v(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(v(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Oc(n){const e=me(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kT(n,e,t){const i=me(n),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&lo(i,r,t),await Zt(i,r,"getOobCode",fT,"EMAIL_PASSWORD_PROVIDER")}async function OT(n,e,t){await Cf(x(n),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Oc(n),i})}async function LT(n,e){await uT(x(n),{oobCode:e})}async function Mf(n,e){const t=x(n),i=await Cf(t,{oobCode:e}),r=i.requestType;switch(v(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":v(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":v(i.mfaInfo,t,"internal-error");default:v(i.email,t,"internal-error")}let s=null;return i.mfaInfo&&(s=Mr._fromServerResponse(me(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function DT(n,e){const{data:t}=await Mf(x(n),e);return t.email}async function MT(n,e,t){if(ye(n.app))return Promise.reject(Oe(n));const i=me(n),o=await Zt(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Af,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Oc(n),c}),a=await dt._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function xT(n,e,t){return ye(n.app)?Promise.reject(Oe(n)):co(x(n),_n.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Oc(n),i})}/**
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
 */async function UT(n,e,t){const i=me(n),r={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){v(a.handleCodeInApp,i,"argument-error"),a&&lo(i,o,a)}s(r,t),await Zt(i,r,"getOobCode",pT,"EMAIL_PASSWORD_PROVIDER")}function FT(n,e){const t=oo.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function VT(n,e,t){if(ye(n.app))return Promise.reject(Oe(n));const i=x(n),r=_n.credentialWithLink(e,t||ur());return v(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),co(i,r)}/**
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
 */async function $T(n,e){return Ee(n,"POST","/v1/accounts:createAuthUri",we(n,e))}/**
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
 */async function BT(n,e){const t=Rc()?ur():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:r}=await $T(x(n),i);return r||[]}async function WT(n,e){const t=x(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&lo(t.auth,r,e);const{email:s}=await hT(t.auth,r);s!==n.email&&await n.reload()}async function HT(n,e,t){const i=x(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&lo(i.auth,s,t);const{email:o}=await _T(i.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function zT(n,e){return Ee(n,"POST","/v1/accounts:update",e)}/**
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
 */async function jT(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=x(n),s={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Wt(i,zT(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function GT(n,e){const t=x(n);return ye(t.auth.app)?Promise.reject(Oe(t.auth)):xf(t,e,null)}function qT(n,e){return xf(x(n),null,e)}async function xf(n,e,t){const{auth:i}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Wt(n,cT(i,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function KT(n){var e,t;if(!n)return null;const{providerId:i}=n,r=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n!=null&&n.idToken)){const o=(t=(e=ro(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ni(s,a)}}if(!i)return null;switch(i){case"facebook.com":return new YT(s,r);case"github.com":return new QT(s,r);case"google.com":return new JT(s,r);case"twitter.com":return new XT(s,r,n.screenName||null);case"custom":case"anonymous":return new ni(s,null);default:return new ni(s,i,r)}}class ni{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class Uf extends ni{constructor(e,t,i,r){super(e,t,i),this.username=r}}class YT extends ni{constructor(e,t){super(e,"facebook.com",t)}}class QT extends Uf{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class JT extends ni{constructor(e,t){super(e,"google.com",t)}}class XT extends Uf{constructor(e,t,i){super(e,"twitter.com",t,i)}}function ZT(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:KT(t)}/**
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
 */class Sn{constructor(e,t,i){this.type=e,this.credential=t,this.user=i}static _fromIdtoken(e,t){return new Sn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Sn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Sn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return Sn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Lc{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=me(e),r=t.customData._serverResponse,s=(r.mfaInfo||[]).map(a=>Mr._fromServerResponse(i,a));v(r.mfaPendingCredential,i,"internal-error");const o=Sn._fromMfaPendingCredential(r.mfaPendingCredential);return new Lc(o,s,async a=>{const c=await a._process(i,o);delete r.mfaInfo,delete r.mfaPendingCredential;const l=Object.assign(Object.assign({},r),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const d=await dt._fromIdTokenResponse(i,t.operationType,l);return await i._updateCurrentUser(d.user),d;case"reauthenticate":return v(t.user,i,"internal-error"),dt._forOperation(t.user,t.operationType,l);default:Me(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function eR(n,e){var t;const i=x(n),r=e;return v(e.customData.operationType,i,"argument-error"),v((t=r.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),Lc._fromError(i,r)}/**
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
 */function vu(n,e){return Ee(n,"POST","/v2/accounts/mfaEnrollment:start",we(n,e))}function tR(n,e){return Ee(n,"POST","/v2/accounts/mfaEnrollment:finalize",we(n,e))}function nR(n,e){return Ee(n,"POST","/v2/accounts/mfaEnrollment:withdraw",we(n,e))}class Dc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Mr._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new Dc(e)}async getSession(){return Sn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,r=await this.getSession(),s=await Wt(this.user,i._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const r=await Wt(this.user,nR(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const Zo=new WeakMap;function iR(n){const e=x(n);return Zo.has(e)||Zo.set(e,Dc._fromUser(e)),Zo.get(e)}const Es="__sak";/**
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
 */class Ff{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Es,"1"),this.storage.removeItem(Es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rR=1e3,sR=10;class Vf extends Ff{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Vb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,sR):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vf.type="LOCAL";const Mc=Vf;/**
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
 */class $f extends Ff{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$f.type="SESSION";const Pn=$f;/**
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
 */function oR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class uo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new uo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await oR(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uo.receivers=[];/**
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
 */function xr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class aR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=xr("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Se(){return window}function cR(n){Se().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function xc(){return typeof Se().WorkerGlobalScope<"u"&&typeof Se().importScripts=="function"}async function lR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function dR(){return xc()?self:null}/**
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
 */const Bf="firebaseLocalStorageDb",hR=1,Ss="firebaseLocalStorage",Wf="fbase_key";class Ur{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ho(n,e){return n.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function fR(){const n=indexedDB.deleteDatabase(Bf);return new Ur(n).toPromise()}function Ra(){const n=indexedDB.open(Bf,hR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ss,{keyPath:Wf})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ss)?e(i):(i.close(),await fR(),e(await Ra()))})})}async function yu(n,e,t){const i=ho(n,!0).put({[Wf]:e,value:t});return new Ur(i).toPromise()}async function pR(n,e){const t=ho(n,!1).get(e),i=await new Ur(t).toPromise();return i===void 0?null:i.value}function wu(n,e){const t=ho(n,!0).delete(e);return new Ur(t).toPromise()}const _R=800,mR=3;class Hf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ra(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>mR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uo._getInstance(dR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await lR(),!this.activeServiceWorker)return;this.sender=new aR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ra();return await yu(e,Es,"1"),await wu(e,Es),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>yu(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>pR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ho(r,!1).getAll();return new Ur(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hf.type="LOCAL";const fr=Hf;/**
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
 */function Eu(n,e){return Ee(n,"POST","/v2/accounts/mfaSignIn:start",we(n,e))}function gR(n,e){return Ee(n,"POST","/v2/accounts/mfaSignIn:finalize",we(n,e))}/**
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
 */const ea=bf("rcb"),vR=new kr(3e4,6e4);class yR{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Se().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return v(wR(t),e,"argument-error"),this.shouldResolveImmediately(t)&&lu(Se().grecaptcha)?Promise.resolve(Se().grecaptcha):new Promise((i,r)=>{const s=Se().setTimeout(()=>{r(Te(e,"network-request-failed"))},vR.get());Se()[ea]=()=>{Se().clearTimeout(s),delete Se()[ea];const a=Se().grecaptcha;if(!a||!lu(a)){r(Te(e,"internal-error"));return}const c=a.render;a.render=(l,d)=>{const u=c(l,d);return this.counter++,u},this.hostLanguage=t,i(a)};const o=`${Gb()}?${Vn({onload:ea,render:"explicit",hl:t})}`;Ac(o).catch(()=>{clearTimeout(s),r(Te(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Se().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wR(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class ER{async load(e){return new Jb(e)}clearedOneInstance(){}}/**
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
 */const Zi="recaptcha",SR={theme:"light",type:"image"};let IR=class{constructor(e,t,i=Object.assign({},SR)){this.parameters=i,this.type=Zi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=me(e),this.isInvisible=this.parameters.size==="invisible",v(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof t=="string"?document.getElementById(t):t;v(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ER:new yR,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(r=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){v(!this.parameters.sitekey,this.auth,"argument-error"),v(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),v(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=Se()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){v(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){v(Rc()&&!xc(),this.auth,"internal-error"),await bR(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Cb(this.auth);v(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return v(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function bR(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class Uc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Tn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function TR(n,e,t){if(ye(n.app))return Promise.reject(Oe(n));const i=me(n),r=await fo(i,e,x(t));return new Uc(r,s=>co(i,s))}async function RR(n,e,t){const i=x(n);await ao(!1,i,"phone");const r=await fo(i.auth,e,x(t));return new Uc(r,s=>Lf(i,s))}async function CR(n,e,t){const i=x(n);if(ye(i.auth.app))return Promise.reject(Oe(i.auth));const r=await fo(i.auth,e,x(t));return new Uc(r,s=>Df(i,s))}async function fo(n,e,t){var i;if(!n._getRecaptchaConfig())try{await iT(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const s=r.session;if("phoneNumber"in r){v(s.type==="enroll",n,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Zt(n,o,"mfaSmsEnrollment",async(d,u)=>{if(u.phoneEnrollmentInfo.captchaResponse===Xi){v((t==null?void 0:t.type)===Zi,d,"argument-error");const h=await ta(d,u,t);return vu(d,h)}return vu(d,u)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{v(s.type==="signin",n,"internal-error");const o=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;v(o,n,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Zt(n,a,"mfaSmsSignIn",async(u,h)=>{if(h.phoneSignInInfo.captchaResponse===Xi){v((t==null?void 0:t.type)===Zi,u,"argument-error");const m=await ta(u,h,t);return Eu(u,m)}return Eu(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Zt(n,s,"sendVerificationCode",async(l,d)=>{if(d.captchaResponse===Xi){v((t==null?void 0:t.type)===Zi,l,"argument-error");const u=await ta(l,d,t);return mu(l,u)}return mu(l,d)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t==null||t._reset()}}async function AR(n,e){const t=x(n);if(ye(t.auth.app))return Promise.reject(Oe(t.auth));await Nc(t,e)}async function ta(n,e,t){v(t.type===Zi,n,"argument-error");const i=await t.verify();v(typeof i=="string",n,"argument-error");const r=Object.assign({},e);if("phoneEnrollmentInfo"in r){const s=r.phoneEnrollmentInfo.phoneNumber,o=r.phoneEnrollmentInfo.captchaResponse,a=r.phoneEnrollmentInfo.clientType,c=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:i,captchaResponse:o,clientType:a,recaptchaVersion:c}}),r}else if("phoneSignInInfo"in r){const s=r.phoneSignInInfo.captchaResponse,o=r.phoneSignInInfo.clientType,a=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:s,clientType:o,recaptchaVersion:a}}),r}else return Object.assign(r,{recaptchaToken:i}),r}/**
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
 */let kn=class ss{constructor(e){this.providerId=ss.PROVIDER_ID,this.auth=me(e)}verifyPhoneNumber(e,t){return fo(this.auth,e,x(t))}static credential(e,t){return Tn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ss.credentialFromTaggedObject(t)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?Tn._fromTokenResponse(t,i):null}};kn.PROVIDER_ID="phone";kn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function $n(n,e){return e?Ze(e):(v(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Fc extends bi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function NR(n){return Of(n.auth,new Fc(n),n.bypassAuthState)}function PR(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),kf(t,new Fc(n),n.bypassAuthState)}async function kR(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),Nc(t,new Fc(n),n.bypassAuthState)}/**
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
 */class zf{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NR;case"linkViaPopup":case"linkViaRedirect":return kR;case"reauthViaPopup":case"reauthViaRedirect":return PR;default:Me(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OR=new kr(2e3,1e4);async function LR(n,e,t){if(ye(n.app))return Promise.reject(Te(n,"operation-not-supported-in-this-environment"));const i=me(n);Ii(n,e,Gt);const r=$n(i,t);return new Mt(i,"signInViaPopup",e,r).executeNotNull()}async function DR(n,e,t){const i=x(n);if(ye(i.auth.app))return Promise.reject(Te(i.auth,"operation-not-supported-in-this-environment"));Ii(i.auth,e,Gt);const r=$n(i.auth,t);return new Mt(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function MR(n,e,t){const i=x(n);Ii(i.auth,e,Gt);const r=$n(i.auth,t);return new Mt(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class Mt extends zf{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Mt.currentPopupAction&&Mt.currentPopupAction.cancel(),Mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=xr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OR.get())};e()}}Mt.currentPopupAction=null;/**
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
 */const xR="pendingRedirect",er=new Map;class UR extends zf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=er.get(this.auth._key());if(!e){try{const i=await FR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}er.set(this.auth._key(),e)}return this.bypassAuthState||er.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FR(n,e){const t=Gf(e),i=jf(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}async function Vc(n,e){return jf(n)._set(Gf(e),"true")}function VR(){er.clear()}function $c(n,e){er.set(n._key(),e)}function jf(n){return Ze(n._redirectPersistence)}function Gf(n){return bn(xR,n.config.apiKey,n.name)}/**
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
 */function $R(n,e,t){return BR(n,e,t)}async function BR(n,e,t){if(ye(n.app))return Promise.reject(Oe(n));const i=me(n);Ii(n,e,Gt),await i._initializationPromise;const r=$n(i,t);return await Vc(r,i),r._openRedirect(i,e,"signInViaRedirect")}function WR(n,e,t){return HR(n,e,t)}async function HR(n,e,t){const i=x(n);if(Ii(i.auth,e,Gt),ye(i.auth.app))return Promise.reject(Oe(i.auth));await i.auth._initializationPromise;const r=$n(i.auth,t);await Vc(r,i.auth);const s=await qf(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function zR(n,e,t){return jR(n,e,t)}async function jR(n,e,t){const i=x(n);Ii(i.auth,e,Gt),await i.auth._initializationPromise;const r=$n(i.auth,t);await ao(!1,i,e.providerId),await Vc(r,i.auth);const s=await qf(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function GR(n,e){return await me(n)._initializationPromise,po(n,e,!1)}async function po(n,e,t=!1){if(ye(n.app))return Promise.reject(Oe(n));const i=me(n),r=$n(i,e),o=await new UR(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function qf(n){const e=xr(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const qR=10*60*1e3;class Kf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Yf(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Te(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Su(e))}saveEventToCache(e){this.cachedEventUids.add(Su(e)),this.lastProcessedEventTime=Date.now()}}function Su(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yf(n);default:return!1}}/**
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
 */async function Qf(n,e={}){return Ee(n,"GET","/v1/projects",e)}/**
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
 */const YR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QR=/^https?/;async function JR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Qf(n);for(const t of e)try{if(XR(t))return}catch{}Me(n,"unauthorized-domain")}function XR(n){const e=ur(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!QR.test(t))return!1;if(YR.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ZR=new kr(3e4,6e4);function Iu(){const n=Se().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function eC(n){return new Promise((e,t)=>{var i,r,s;function o(){Iu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iu(),t(Te(n,"network-request-failed"))},timeout:ZR.get()})}if(!((r=(i=Se().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Se().gapi)===null||s===void 0)&&s.load)o();else{const a=bf("iframefcb");return Se()[a]=()=>{gapi.load?o():t(Te(n,"network-request-failed"))},Ac(`${Kb()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw os=null,e})}let os=null;function tC(n){return os=os||eC(n),os}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const nC=new kr(5e3,15e3),iC="__/auth/iframe",rC="emulator/auth/iframe",sC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aC(n){const e=n.config;v(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cc(e,rC):`https://${n.config.authDomain}/${iC}`,i={apiKey:e.apiKey,appName:n.name,v:pn},r=oC.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Vn(i).slice(1)}`}async function cC(n){const e=await tC(n),t=Se().gapi;return v(t,n,"internal-error"),e.open({where:document.body,url:aC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sC,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Te(n,"network-request-failed"),a=Se().setTimeout(()=>{s(o)},nC.get());function c(){Se().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const lC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uC=500,dC=600,hC="_blank",fC="http://localhost";class bu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pC(n,e,t,i=uC,r=dC){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},lC),{width:i.toString(),height:r.toString(),top:s,left:o}),l=Re().toLowerCase();t&&(a=vf(l)?hC:t),mf(l)&&(e=e||fC,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[m,g])=>`${h}${m}=${g},`,"");if(Fb(l)&&a!=="_self")return _C(e||"",a),new bu(null);const u=window.open(e||"",a,d);v(u,n,"popup-blocked");try{u.focus()}catch{}return new bu(u)}function _C(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const mC="__/auth/handler",gC="emulator/auth/handler",vC=encodeURIComponent("fac");async function Ca(n,e,t,i,r,s){v(n.config.authDomain,n,"auth-domain-config-required"),v(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:pn,eventId:r};if(e instanceof Gt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",_s(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof Ti){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${vC}=${encodeURIComponent(c)}`:"";return`${yC(n)}?${Vn(a).slice(1)}${l}`}function yC({config:n}){return n.emulator?Cc(n,gC):`https://${n.authDomain}/${mC}`}/**
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
 */const na="webStorageSupport";class wC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=po,this._overrideRedirectResult=$c}async _openPopup(e,t,i,r){var s;wt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ca(e,t,i,ur(),r);return pC(e,o,xr())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await Ca(e,t,i,ur(),r);return cR(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(wt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await cC(e),i=new Kf(e);return t.register("authEvent",r=>(v(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(na,{type:na},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[na];o!==void 0&&t(!!o),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sf()||gf()||Lr()}}const EC=wC;class SC{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Rt("unexpected MultiFactorSessionType")}}}class Bc extends SC{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Bc(e)}_finalizeEnroll(e,t,i){return tR(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return gR(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Jf{constructor(){}static assertion(e){return Bc._fromCredential(e)}}Jf.FACTOR_ID="phone";var Tu="@firebase/auth",Ru="1.8.1";/**
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
 */class IC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TC(n){on(new ut("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:If(n)},l=new zb(i,r,s,c);return rT(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),on(new ut("auth-internal",e=>{const t=me(e.getProvider("auth").getImmediate());return(i=>new IC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vt(Tu,Ru,bC(n)),vt(Tu,Ru,"esm2017")}/**
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
 */const RC=5*60;US("authIdTokenMaxAge");function CC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}jb({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=Te("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",CC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TC("Browser");/**
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
 */function On(){return window}/**
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
 */const AC=2e3;async function NC(n,e,t){var i;const{BuildInfo:r}=On();wt(e.sessionId,"AuthEvent did not contain a session ID");const s=await DC(e.sessionId),o={};return Lr()?o.ibi=r.packageName:Or()?o.apn=r.packageName:Me(n,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=s,Ca(n,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,o)}async function PC(n){const{BuildInfo:e}=On(),t={};Lr()?t.iosBundleId=e.packageName:Or()?t.androidPackageName=e.packageName:Me(n,"operation-not-supported-in-this-environment"),await Qf(n,t)}function kC(n){const{cordova:e}=On();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(n):r=e.InAppBrowser.open(n,Ub()?"_blank":"_system","location=yes"),t(r)})})}async function OC(n,e,t){const{cordova:i}=On();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var u;s();const h=(u=i.plugins.browsertab)===null||u===void 0?void 0:u.close;typeof h=="function"&&h(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(Te(n,"redirect-cancelled-by-user"))},AC))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),Or()&&document.addEventListener("visibilitychange",d,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{r()}}function LC(n){var e,t,i,r,s,o,a,c,l,d;const u=On();v(typeof((e=u==null?void 0:u.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),v(typeof((t=u==null?void 0:u.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),v(typeof((s=(r=(i=u==null?void 0:u.cordova)===null||i===void 0?void 0:i.plugins)===null||r===void 0?void 0:r.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),v(typeof((c=(a=(o=u==null?void 0:u.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),v(typeof((d=(l=u==null?void 0:u.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function DC(n){const e=MC(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(r=>r.toString(16).padStart(2,"0")).join("")}function MC(n){if(wt(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return t}/**
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
 */const xC=20;class UC extends Kf{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function FC(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:BC(),postBody:null,tenantId:n.tenantId,error:Te(n,"no-auth-event")}}function VC(n,e){return Aa()._set(Na(n),e)}async function Cu(n){const e=await Aa()._get(Na(n));return e&&await Aa()._remove(Na(n)),e}function $C(n,e){var t,i;const r=HC(e);if(r.includes("/__/auth/callback")){const s=as(r),o=s.firebaseError?WC(decodeURIComponent(s.firebaseError)):null,a=(i=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],c=a?Te(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:r,postBody:null}}return null}function BC(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<xC;t++){const i=Math.floor(Math.random()*e.length);n.push(e.charAt(i))}return n.join("")}function Aa(){return Ze(Mc)}function Na(n){return bn("authEvent",n.config.apiKey,n.name)}function WC(n){try{return JSON.parse(n)}catch{return null}}function HC(n){const e=as(n),t=e.link?decodeURIComponent(e.link):void 0,i=as(t).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return as(r).link||r||i||t||n}function as(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Jn(t.join("?"))}/**
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
 */const zC=500;class jC{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=po,this._overrideRedirectResult=$c}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new UC(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){Me(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,r){LC(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),VR(),await this._originValidation(e);const o=FC(e,i,r);await VC(e,o);const a=await NC(e,o,t),c=await kC(a);return OC(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=PC(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:r,BuildInfo:s}=On(),o=setTimeout(async()=>{await Cu(e),t.onEvent(Au())},zC),a=async d=>{clearTimeout(o);const u=await Cu(e);let h=null;u&&(d!=null&&d.url)&&(h=$C(u,d.url)),t.onEvent(h||Au())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,a);const c=r,l=`${s.packageName.toLowerCase()}://`;On().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(l)&&a({url:d}),typeof c=="function")try{c(d)}catch(u){console.error(u)}}}}const GC=jC;function Au(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Te("no-auth-event")}}/**
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
 */function qC(n,e){me(n)._logFramework(e)}var KC="@firebase/auth-compat",YC="0.5.16";/**
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
 */const QC=1e3;function tr(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function JC(){return tr()==="http:"||tr()==="https:"}function Xf(n=Re()){return!!((tr()==="file:"||tr()==="ionic:"||tr()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function XC(){return no()||$h()}function ZC(){return Hh()&&(document==null?void 0:document.documentMode)===11}function eA(n=Re()){return/Edge\/\d+/.test(n)}function tA(n=Re()){return ZC()||eA(n)}function Zf(){try{const n=self.localStorage,e=xr();if(n)return n.setItem(e,"1"),n.removeItem(e),tA()?ps():!0}catch{return Wc()&&ps()}return!1}function Wc(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ia(){return(JC()||Wh()||Xf())&&!XC()&&Zf()&&!Wc()}function ep(){return Xf()&&typeof document<"u"}async function nA(){return ep()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},QC);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function iA(){return typeof window<"u"?window:null}/**
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
 */const Je={LOCAL:"local",NONE:"none",SESSION:"session"},Vi=v,tp="persistence";function rA(n,e){if(Vi(Object.values(Je).includes(e),n,"invalid-persistence-type"),no()){Vi(e!==Je.SESSION,n,"unsupported-persistence-type");return}if($h()){Vi(e===Je.NONE,n,"unsupported-persistence-type");return}if(Wc()){Vi(e===Je.NONE||e===Je.LOCAL&&ps(),n,"unsupported-persistence-type");return}Vi(e===Je.NONE||Zf(),n,"unsupported-persistence-type")}async function Pa(n){await n._initializationPromise;const e=np(),t=bn(tp,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function sA(n,e){const t=np();if(!t)return[];const i=bn(tp,n,e);switch(t.getItem(i)){case Je.NONE:return[hi];case Je.LOCAL:return[fr,Pn];case Je.SESSION:return[Pn];default:return[]}}function np(){var n;try{return((n=iA())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const oA=v;class Yt{constructor(){this.browserResolver=Ze(EC),this.cordovaResolver=Ze(GC),this.underlyingResolver=null,this._redirectPersistence=Pn,this._completeRedirectFn=po,this._overrideRedirectResult=$c}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,r)}async _openRedirect(e,t,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return ep()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return oA(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await nA();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function ip(n){return n.unwrap()}function aA(n){return n.wrapped()}/**
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
 */function cA(n){return rp(n)}function lA(n,e){var t;const i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const r=e;r.resolver=new uA(n,eR(n,e))}else if(i){const r=rp(e),s=e;r&&(s.credential=r,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}function rp(n){const{_tokenResponse:e}=n instanceof ze?n.customData:n;if(!e)return null;if(!(n instanceof ze)&&"temporaryProof"in e&&"phoneNumber"in e)return kn.credentialFromResult(n);const t=e.providerId;if(!t||t===Ui.PASSWORD)return null;let i;switch(t){case Ui.GOOGLE:i=It;break;case Ui.FACEBOOK:i=St;break;case Ui.GITHUB:i=bt;break;case Ui.TWITTER:i=Tt;break;default:const{oauthIdToken:r,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!r&&!a?null:a?t.startsWith("saml.")?fi._create(t,a):At._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:r,accessToken:s}):new ti(t).credential({idToken:r,accessToken:s,rawNonce:c})}return n instanceof ze?i.credentialFromError(n):i.credentialFromResult(n)}function $e(n,e){return e.catch(t=>{throw t instanceof ze&&lA(n,t),t}).then(t=>{const i=t.operationType,r=t.user;return{operationType:i,credential:cA(t),additionalUserInfo:ZT(t),user:xt.getOrCreate(r)}})}async function ka(n,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>$e(n,t.confirm(i))}}class uA{constructor(e,t){this.resolver=t,this.auth=aA(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return $e(ip(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class xt{constructor(e){this._delegate=e,this.multiFactor=iR(e)}static getOrCreate(e){return xt.USER_MAP.has(e)||xt.USER_MAP.set(e,new xt(e)),xt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return $e(this.auth,Lf(this._delegate,e))}async linkWithPhoneNumber(e,t){return ka(this.auth,RR(this._delegate,e,t))}async linkWithPopup(e){return $e(this.auth,MR(this._delegate,e,Yt))}async linkWithRedirect(e){return await Pa(me(this.auth)),zR(this._delegate,e,Yt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return $e(this.auth,Df(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return ka(this.auth,CR(this._delegate,e,t))}reauthenticateWithPopup(e){return $e(this.auth,DR(this._delegate,e,Yt))}async reauthenticateWithRedirect(e){return await Pa(me(this.auth)),WR(this._delegate,e,Yt)}sendEmailVerification(e){return WT(this._delegate,e)}async unlink(e){return await AT(this._delegate,e),this}updateEmail(e){return GT(this._delegate,e)}updatePassword(e){return qT(this._delegate,e)}updatePhoneNumber(e){return AR(this._delegate,e)}updateProfile(e){return jT(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return HT(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}xt.USER_MAP=new WeakMap;/**
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
 */const $i=v;class Oa{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;$i(i,"invalid-api-key",{appName:e.name}),$i(i,"invalid-api-key",{appName:e.name});const r=typeof window<"u"?Yt:void 0;this._delegate=t.initialize({options:{persistence:dA(i,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(vb),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?xt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){sT(this._delegate,e,t)}applyActionCode(e){return LT(this._delegate,e)}checkActionCode(e){return Mf(this._delegate,e)}confirmPasswordReset(e,t){return OT(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return $e(this._delegate,MT(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return BT(this._delegate,e)}isSignInWithEmailLink(e){return FT(this._delegate,e)}async getRedirectResult(){$i(ia(),this._delegate,"operation-not-supported-in-this-environment");const e=await GR(this._delegate,Yt);return e?$e(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){qC(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:r,error:s,complete:o}=Nu(e,t,i);return this._delegate.onAuthStateChanged(r,s,o)}onIdTokenChanged(e,t,i){const{next:r,error:s,complete:o}=Nu(e,t,i);return this._delegate.onIdTokenChanged(r,s,o)}sendSignInLinkToEmail(e,t){return UT(this._delegate,e,t)}sendPasswordResetEmail(e,t){return kT(this._delegate,e,t||void 0)}async setPersistence(e){rA(this._delegate,e);let t;switch(e){case Je.SESSION:t=Pn;break;case Je.LOCAL:t=await Ze(fr)._isAvailable()?fr:Mc;break;case Je.NONE:t=hi;break;default:return Me("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return $e(this._delegate,CT(this._delegate))}signInWithCredential(e){return $e(this._delegate,co(this._delegate,e))}signInWithCustomToken(e){return $e(this._delegate,PT(this._delegate,e))}signInWithEmailAndPassword(e,t){return $e(this._delegate,xT(this._delegate,e,t))}signInWithEmailLink(e,t){return $e(this._delegate,VT(this._delegate,e,t))}signInWithPhoneNumber(e,t){return ka(this._delegate,TR(this._delegate,e,t))}async signInWithPopup(e){return $i(ia(),this._delegate,"operation-not-supported-in-this-environment"),$e(this._delegate,LR(this._delegate,e,Yt))}async signInWithRedirect(e){return $i(ia(),this._delegate,"operation-not-supported-in-this-environment"),await Pa(this._delegate),$R(this._delegate,e,Yt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return DT(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Oa.Persistence=Je;function Nu(n,e,t){let i=n;typeof n!="function"&&({next:i,error:e,complete:t}=n);const r=i;return{next:o=>r(o&&xt.getOrCreate(o)),error:e,complete:t}}function dA(n,e){const t=sA(n,e);if(typeof self<"u"&&!t.includes(fr)&&t.push(fr),typeof window<"u")for(const i of[Mc,Pn])t.includes(i)||t.push(i);return t.includes(hi)||t.push(hi),t}/**
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
 */class Hc{static credential(e,t){return kn.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new kn(ip(Bt.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Hc.PHONE_SIGN_IN_METHOD=kn.PHONE_SIGN_IN_METHOD;Hc.PROVIDER_ID=kn.PROVIDER_ID;/**
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
 */const hA=v;class fA{constructor(e,t,i=Bt.app()){var r;hA((r=i.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new IR(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const pA="auth-compat";function _A(n){n.INTERNAL.registerComponent(new ut(pA,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Oa(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Yn.EMAIL_SIGNIN,PASSWORD_RESET:Yn.PASSWORD_RESET,RECOVER_EMAIL:Yn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Yn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Yn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Yn.VERIFY_EMAIL}},EmailAuthProvider:_n,FacebookAuthProvider:St,GithubAuthProvider:bt,GoogleAuthProvider:It,OAuthProvider:ti,SAMLAuthProvider:ys,PhoneAuthProvider:Hc,PhoneMultiFactorGenerator:Jf,RecaptchaVerifier:fA,TwitterAuthProvider:Tt,Auth:Oa,AuthCredential:bi,Error:ze}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(KC,YC)}_A(Bt);var Pu={};const ku="@firebase/database",Ou="1.0.10";/**
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
 */let sp="";function op(n){sp=n}/**
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
 */class mA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ar(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class gA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ap=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mA(e)}}catch{}return new gA},In=ap("localStorage"),La=ap("sessionStorage");/**
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
 */const ii=new Pr("@firebase/database"),cp=function(){let n=1;return function(){return n++}}(),lp=function(n){const e=QS(n),t=new qS;t.update(e);const i=t.digest();return _c.encodeByteArray(i)},Fr=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Fr.apply(null,i):typeof i=="object"?e+=be(i):e+=i,e+=" "}return e};let Rn=null,Lu=!0;const up=function(n,e){w(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(ii.logLevel=X.VERBOSE,Rn=ii.log.bind(ii),e&&La.set("logging_enabled",!0)):typeof n=="function"?Rn=n:(Rn=null,La.remove("logging_enabled"))},ke=function(...n){if(Lu===!0&&(Lu=!1,Rn===null&&La.get("logging_enabled")===!0&&up(!0)),Rn){const e=Fr.apply(null,n);Rn(e)}},Vr=function(n){return function(...e){ke(n,...e)}},Da=function(...n){const e="FIREBASE INTERNAL ERROR: "+Fr(...n);ii.error(e)},Nt=function(...n){const e=`FIREBASE FATAL ERROR: ${Fr(...n)}`;throw ii.error(e),new Error(e)},Ue=function(...n){const e="FIREBASE WARNING: "+Fr(...n);ii.warn(e)},vA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_o=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},yA=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},an="[MIN_NAME]",Ht="[MAX_NAME]",Bn=function(n,e){if(n===e)return 0;if(n===an||e===Ht)return-1;if(e===an||n===Ht)return 1;{const t=Du(n),i=Du(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},wA=function(n,e){return n===e?0:n<e?-1:1},Bi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+be(e))},zc=function(n){if(typeof n!="object"||n===null)return be(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=be(e[i]),t+=":",t+=zc(n[e[i]]);return t+="}",t},dp=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function Le(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const hp=function(n){w(!_o(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,o,a,c;n===0?(s=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(r?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},EA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function IA(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const bA=new RegExp("^-?(0*)\\d{1,10}$"),TA=-2147483648,RA=2147483647,Du=function(n){if(bA.test(n)){const e=Number(n);if(e>=TA&&e<=RA)return e}return null},Ri=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ue("Exception was thrown by user callback.",t),e},Math.floor(0))}},CA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},nr=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class AA{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class NA{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class ri{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ri.OWNER="owner";/**
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
 */const jc="5",fp="v",pp="s",_p="r",mp="f",gp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vp="ls",yp="p",Ma="ac",wp="websocket",Ep="long_polling";/**
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
 */class Sp{constructor(e,t,i,r,s=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=In.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&In.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function PA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ip(n,e,t){w(typeof e=="string","typeof type must == string"),w(typeof t=="object","typeof params must == object");let i;if(e===wp)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ep)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PA(n)&&(t.ns=n.namespace);const r=[];return Le(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class kA{constructor(){this.counters_={}}incrementCounter(e,t=1){et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return OS(this.counters_)}}/**
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
 */const ra={},sa={};function Gc(n){const e=n.toString();return ra[e]||(ra[e]=new kA),ra[e]}function OA(n,e){const t=n.toString();return sa[t]||(sa[t]=e()),sa[t]}/**
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
 */class LA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Ri(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Mu="start",DA="close",MA="pLPCommand",xA="pRTLPCB",bp="id",Tp="pw",Rp="ser",UA="cb",FA="seg",VA="ts",$A="d",BA="dframe",Cp=1870,Ap=30,WA=Cp-Ap,HA=25e3,zA=3e4;class Qt{constructor(e,t,i,r,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vr(e),this.stats_=Gc(t),this.urlFn=c=>(this.appCheckToken&&(c[Ma]=this.appCheckToken),Ip(t,Ep,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new LA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zA)),yA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qc((...s)=>{const[o,a,c,l,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mu)this.id=a,this.password=c;else if(o===DA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Mu]="t",i[Rp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[UA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[fp]=jc,this.transportSessionId&&(i[pp]=this.transportSessionId),this.lastSessionId&&(i[vp]=this.lastSessionId),this.applicationId&&(i[yp]=this.applicationId),this.appCheckToken&&(i[Ma]=this.appCheckToken),typeof location<"u"&&location.hostname&&gp.test(location.hostname)&&(i[_p]=mp);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qt.forceAllow_=!0}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){return Qt.forceAllow_?!0:!Qt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!EA()&&!SA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Uh(t),r=dp(i,WA);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[BA]="t",i[bp]=e,i[Tp]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=be(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class qc{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cp(),window[MA+this.uniqueCallbackIdentifier]=e,window[xA+this.uniqueCallbackIdentifier]=t,this.myIFrame=qc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ke("frame writing exception"),a.stack&&ke(a.stack),ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bp]=this.myID,e[Tp]=this.myPW,e[Rp]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ap+i.length<=Cp;){const o=this.pendingSegs.shift();i=i+"&"+FA+r+"="+o.seg+"&"+VA+r+"="+o.ts+"&"+$A+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(HA)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const jA=16384,GA=45e3;let Is=null;typeof MozWebSocket<"u"?Is=MozWebSocket:typeof WebSocket<"u"&&(Is=WebSocket);class ot{constructor(e,t,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vr(this.connId),this.stats_=Gc(t),this.connURL=ot.connectionURL_(t,o,a,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,s){const o={};return o[fp]=jc,typeof location<"u"&&location.hostname&&gp.test(location.hostname)&&(o[_p]=mp),t&&(o[pp]=t),i&&(o[vp]=i),r&&(o[Ma]=r),s&&(o[yp]=s),Ip(e,wp,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,In.set("previous_websocket_failure",!0);try{let i;zh(),this.mySock=new Is(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Is!==null&&!ot.forceDisallow_}static previouslyFailed(){return In.isInMemoryStorage||In.get("previous_websocket_failure")===!0}markConnectionHealthy(){In.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=ar(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=dp(t,jA);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(GA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
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
 */class pi{static get ALL_TRANSPORTS(){return[Qt,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ot&&ot.isAvailable();let i=t&&!ot.previouslyFailed();if(e.webSocketOnly&&(t||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ot];else{const r=this.transports_=[];for(const s of pi.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);pi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pi.globalTransportInitialized_=!1;/**
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
 */const qA=6e4,KA=5e3,YA=10*1024,QA=100*1024,oa="t",xu="d",JA="s",Uu="r",XA="e",Fu="o",Vu="a",$u="n",Bu="p",ZA="h";class eN{constructor(e,t,i,r,s,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vr("c:"+this.id+":"),this.transportManager_=new pi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=nr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(oa in e){const t=e[oa];t===Vu?this.upgradeIfSecondaryHealthy_():t===Uu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Fu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Bi("t",e),i=Bi("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$u,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Bi("t",e),i=Bi("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Bi(oa,e);if(xu in e){const i=e[xu];if(t===ZA){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===$u){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===JA?this.onConnectionShutdown_(i):t===Uu?this.onReset_(i):t===XA?Da("Server Error: "+i):t===Fu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Da("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),jc!==i&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),nr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):nr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(In.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Np{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Pp{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){w(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class bs extends Pp{static getInstance(){return new bs}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Wu=32,Hu=768;class J{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function K(){return new J("")}function B(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function cn(n){return n.pieces_.length-n.pieceNum_}function ie(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new J(n.pieces_,e)}function Kc(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function tN(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function pr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function kp(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new J(e,0)}function he(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof J)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new J(t,0)}function W(n){return n.pieceNum_>=n.pieces_.length}function Fe(n,e){const t=B(n),i=B(e);if(t===null)return e;if(t===i)return Fe(ie(n),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function nN(n,e){const t=pr(n,0),i=pr(e,0);for(let r=0;r<t.length&&r<i.length;r++){const s=Bn(t[r],i[r]);if(s!==0)return s}return t.length===i.length?0:t.length<i.length?-1:1}function Yc(n,e){if(cn(n)!==cn(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function at(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(cn(n)>cn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class iN{constructor(e,t){this.errorPrefix_=t,this.parts_=pr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=io(this.parts_[i]);Op(this)}}function rN(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=io(e),Op(n)}function sN(n){const e=n.parts_.pop();n.byteLength_-=io(e),n.parts_.length>0&&(n.byteLength_-=1)}function Op(n){if(n.byteLength_>Hu)throw new Error(n.errorPrefix_+"has a key path longer than "+Hu+" bytes ("+n.byteLength_+").");if(n.parts_.length>Wu)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wu+") or object contains a cycle "+wn(n))}function wn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Qc extends Pp{static getInstance(){return new Qc}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Wi=1e3,oN=60*5*1e3,zu=30*1e3,aN=1.3,cN=3e4,lN="server_kill",ju=3;class Vt extends Np{constructor(e,t,i,r,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Vt.nextPersistentConnectionId_++,this.log_=Vr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wi,this.maxReconnectDelay_=oN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!zh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(be(s)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new Be,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;Vt.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&et(e,"w")){const i=Nn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||GS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=jS(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Da("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cN&&(this.reconnectDelay_=Wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Vt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(u){w(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new eN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,m=>{Ue(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(lN)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Ue(u),c())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_s(this.interruptReasons_)&&(this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>zc(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new J(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){ke("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ju&&(this.reconnectDelay_=zu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ke("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ju&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+sp.replace(/\./g,"-")]=1,gc()?e["framework.cordova"]=1:no()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bs.getInstance().currentlyOnline();return _s(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
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
 */class z{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new z(e,t)}}/**
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
 */class mo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new z(an,e),r=new z(an,t);return this.compare(i,r)!==0}minPost(){return z.MIN}}/**
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
 */let ts;class Lp extends mo{static get __EMPTY_NODE(){return ts}static set __EMPTY_NODE(e){ts=e}compare(e,t){return Bn(e.name,t.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return z.MIN}maxPost(){return new z(Ht,ts)}makePost(e,t){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,ts)}toString(){return".key"}}const Ct=new Lp;/**
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
 */class ns{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??Pe.RED,this.left=r??We.EMPTY_NODE,this.right=s??We.EMPTY_NODE}copy(e,t,i,r,s){return new Pe(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class uN{copy(e,t,i,r,s){return this}insert(e,t,i){return new Pe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,t=We.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new We(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ns(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ns(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ns(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ns(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new uN;/**
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
 */function dN(n,e){return Bn(n.name,e.name)}function Jc(n,e){return Bn(n,e)}/**
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
 */let xa;function hN(n){xa=n}const Dp=function(n){return typeof n=="number"?"number:"+hp(n):"string:"+n},Mp=function(n){if(n.isLeafNode()){const e=n.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&et(e,".sv"),"Priority must be a string or number.")}else w(n===xa||n.isEmpty(),"priority of unexpected type.");w(n===xa||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Gu;class Ae{static set __childrenNodeConstructor(e){Gu=e}static get __childrenNodeConstructor(){return Gu}constructor(e,t=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mp(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:B(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=B(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(w(i!==".priority"||cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dp(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=hp(this.value_):e+=this.value_,this.lazyHash_=lp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=Ae.VALUE_TYPE_ORDER.indexOf(t),s=Ae.VALUE_TYPE_ORDER.indexOf(i);return w(r>=0,"Unknown leaf type: "+t),w(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let xp,Up;function fN(n){xp=n}function pN(n){Up=n}class _N extends mo{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?Bn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Ht,new Ae("[PRIORITY-POST]",Up))}makePost(e,t){const i=xp(e);return new z(t,new Ae("[PRIORITY-POST]",i))}toString(){return".priority"}}const ae=new _N;/**
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
 */const mN=Math.log(2);class gN{constructor(e){const t=s=>parseInt(Math.log(s)/mN,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ts=function(n,e,t,i){n.sort(e);const r=function(c,l){const d=l-c;let u,h;if(d===0)return null;if(d===1)return u=n[c],h=t?t(u):u,new Pe(h,u.node,Pe.BLACK,null,null);{const m=parseInt(d/2,10)+c,g=r(c,m),E=r(m+1,l);return u=n[m],h=t?t(u):u,new Pe(h,u.node,Pe.BLACK,g,E)}},s=function(c){let l=null,d=null,u=n.length;const h=function(g,E){const M=u-g,Z=u;u-=g;const A=r(M+1,Z),U=n[M],ne=t?t(U):U;m(new Pe(ne,U.node,E,null,A))},m=function(g){l?(l.left=g,l=g):(d=g,l=g)};for(let g=0;g<c.count;++g){const E=c.nextBitIsOne(),M=Math.pow(2,c.count-(g+1));E?h(M,Pe.BLACK):(h(M,Pe.BLACK),h(M,Pe.RED))}return d},o=new gN(n.length),a=s(o);return new We(i||e,a)};/**
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
 */let aa;const Qn={};class Ut{static get Default(){return w(Qn&&ae,"ChildrenNode.ts has not been loaded"),aa=aa||new Ut({".priority":Qn},{".priority":ae}),aa}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Nn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof We?t:null}hasIndex(e){return et(this.indexSet_,e.toString())}addIndex(e,t){w(e!==Ct,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(z.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Ts(i,e.getCompare()):a=Qn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new Ut(d,l)}addToIndexes(e,t){const i=ms(this.indexes_,(r,s)=>{const o=Nn(this.indexSet_,s);if(w(o,"Missing index implementation for "+s),r===Qn)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(z.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ts(a,o.getCompare())}else return Qn;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new z(e.name,a))),c.insert(e,e.node)}});return new Ut(i,this.indexSet_)}removeFromIndexes(e,t){const i=ms(this.indexes_,r=>{if(r===Qn)return r;{const s=t.get(e.name);return s?r.remove(new z(e.name,s)):r}});return new Ut(i,this.indexSet_)}}/**
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
 */let Hi;class P{static get EMPTY_NODE(){return Hi||(Hi=new P(new We(Jc),null,Ut.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Mp(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hi}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Hi:t}}getChild(e){const t=B(e);return t===null?this:this.getImmediateChild(t).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(w(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new z(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Hi:this.priorityNode_;return new P(r,o,s)}}updateChild(e,t){const i=B(e);if(i===null)return t;{w(B(e)!==".priority"||cn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(ie(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(ae,(o,a)=>{t[o]=a.val(e),i++,s&&P.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dp(this.getPriority().val())+":"),this.forEachChild(ae,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":lp(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new z(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new z(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new z(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,z.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$r?-1:0}withIndex(e){if(e===Ct||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ct||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ae),r=t.getIterator(ae);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ct?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vN extends P{constructor(){super(new We(Jc),P.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const $r=new vN;Object.defineProperties(z,{MIN:{value:new z(an,P.EMPTY_NODE)},MAX:{value:new z(Ht,$r)}});Lp.__EMPTY_NODE=P.EMPTY_NODE;Ae.__childrenNodeConstructor=P;hN($r);pN($r);/**
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
 */const yN=!0;function _e(n,e=null){if(n===null)return P.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ae(t,_e(e))}if(!(n instanceof Array)&&yN){const t=[];let i=!1;if(Le(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=_e(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new z(o,c)))}}),t.length===0)return P.EMPTY_NODE;const s=Ts(t,dN,o=>o.name,Jc);if(i){const o=Ts(t,ae.getCompare());return new P(s,_e(e),new Ut({".priority":o},{".priority":ae}))}else return new P(s,_e(e),Ut.Default)}else{let t=P.EMPTY_NODE;return Le(n,(i,r)=>{if(et(n,i)&&i.substring(0,1)!=="."){const s=_e(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(_e(e))}}fN(_e);/**
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
 */class Xc extends mo{constructor(e){super(),this.indexPath_=e,w(!W(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?Bn(e.name,t.name):s}makePost(e,t){const i=_e(e),r=P.EMPTY_NODE.updateChild(this.indexPath_,i);return new z(t,r)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,$r);return new z(Ht,e)}toString(){return pr(this.indexPath_,0).join("/")}}/**
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
 */class wN extends mo{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Bn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,t){const i=_e(e);return new z(t,i)}toString(){return".value"}}const Zc=new wN;/**
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
 */function Fp(n){return{type:"value",snapshotNode:n}}function _i(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function _r(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function mr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function EN(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class el{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(_r(t,a)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(_i(t,i)):o.trackChildChange(mr(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ae,(r,s)=>{t.hasChild(r)||i.trackChildChange(_r(r,s))}),t.isLeafNode()||t.forEachChild(ae,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(mr(r,s,o))}else i.trackChildChange(_i(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class gr{constructor(e){this.indexedFilter_=new el(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gr.getStartPost_(e),this.endPost_=gr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,r,s,o){return this.matches(new z(t,i))||(i=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=P.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(P.EMPTY_NODE);const s=this;return t.forEachChild(ae,(o,a)=>{s.matches(new z(o,a))||(r=r.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class SN{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new gr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new z(t,i))||(i=P.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=P.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(P.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,m)=>u(m,h)}else o=this.index_.getCompare();const a=e;w(a.numChildren()===this.limit_,"");const c=new z(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=r.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,c);if(d&&!i.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(mr(t,i,u)),a.updateImmediateChild(t,i);{s!=null&&s.trackChildChange(_r(t,u));const E=a.updateImmediateChild(t,P.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(_i(h.name,h.node)),E.updateImmediateChild(h.name,h.node)):E}}else return i.isEmpty()?e:d&&o(l,c)>=0?(s!=null&&(s.trackChildChange(_r(l.name,l.node)),s.trackChildChange(_i(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,P.EMPTY_NODE)):e}}/**
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
 */class go{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:an}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ht}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new go;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function IN(n){return n.loadsAllData()?new el(n.getIndex()):n.hasLimit()?new SN(n):new gr(n)}function bN(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function TN(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Ua(n,e,t){const i=n.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,t!=null?(i.startNameSet_=!0,i.indexStartName_=t):(i.startNameSet_=!1,i.indexStartName_=""),i}function RN(n,e,t){let i;return n.index_===Ct||t?i=Ua(n,e,t):i=Ua(n,e,Ht),i.startAfterSet_=!0,i}function Fa(n,e,t){const i=n.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,t!==void 0?(i.endNameSet_=!0,i.indexEndName_=t):(i.endNameSet_=!1,i.indexEndName_=""),i}function CN(n,e,t){let i;return n.index_===Ct||t?i=Fa(n,e,t):i=Fa(n,e,an),i.endBeforeSet_=!0,i}function vo(n,e){const t=n.copy();return t.index_=e,t}function qu(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ae?t="$priority":n.index_===Zc?t="$value":n.index_===Ct?t="$key":(w(n.index_ instanceof Xc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=be(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=be(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+be(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=be(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+be(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ku(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ae&&(e.i=n.index_.toString()),e}/**
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
 */class Rs extends Np{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Vr("p:rest:"),this.listens_={}}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Rs.getListenId_(e,i),a={};this.listens_[o]=a;const c=qu(e._queryParams);this.restRequest_(s+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(s,u,!1,i),Nn(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",r(h,null)}})}unlisten(e,t){const i=Rs.getListenId_(e,t);delete this.listens_[i]}get(e){const t=qu(e._queryParams),i=e._path.toString(),r=new Be;return this.restRequest_(i+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ar(a.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class AN{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Cs(){return{value:null,children:new Map}}function Ci(n,e,t){if(W(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=B(e);n.children.has(i)||n.children.set(i,Cs());const r=n.children.get(i);e=ie(e),Ci(r,e,t)}}function Va(n,e){if(W(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ae,(i,r)=>{Ci(n,new J(i),r)}),Va(n,e)}}else if(n.children.size>0){const t=B(e);return e=ie(e),n.children.has(t)&&Va(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function $a(n,e,t){n.value!==null?t(e,n.value):NN(n,(i,r)=>{const s=new J(e.toString()+"/"+i);$a(r,s,t)})}function NN(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class PN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Le(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
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
 */const Yu=10*1e3,kN=30*1e3,ON=5*60*1e3;class LN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new PN(e);const i=Yu+(kN-Yu)*Math.random();nr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Le(e,(r,s)=>{s>0&&et(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),nr(this.reportStats_.bind(this),Math.floor(Math.random()*2*ON))}}/**
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
 */var gt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function tl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function il(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class As{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=gt.ACK_USER_WRITE,this.source=tl()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new J(e));return new As(K(),t,this.revert)}}else return w(B(this.path)===e,"operationForChild called for unrelated child."),new As(ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class vr{constructor(e,t){this.source=e,this.path=t,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new vr(this.source,K()):new vr(this.source,ie(this.path))}}/**
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
 */class Ln{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=gt.OVERWRITE}operationForChild(e){return W(this.path)?new Ln(this.source,K(),this.snap.getImmediateChild(e)):new Ln(this.source,ie(this.path),this.snap)}}/**
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
 */class mi{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=gt.MERGE}operationForChild(e){if(W(this.path)){const t=this.children.subtree(new J(e));return t.isEmpty()?null:t.value?new Ln(this.source,K(),t.value):new mi(this.source,K(),t)}else return w(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mi(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ln{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const t=B(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class DN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function MN(n,e,t,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(EN(o.childName,o.snapshotNode))}),zi(n,r,"child_removed",e,i,t),zi(n,r,"child_added",e,i,t),zi(n,r,"child_moved",s,i,t),zi(n,r,"child_changed",e,i,t),zi(n,r,"value",e,i,t),r}function zi(n,e,t,i,r,s){const o=i.filter(a=>a.type===t);o.sort((a,c)=>UN(n,a,c)),o.forEach(a=>{const c=xN(n,a,s);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function xN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function UN(n,e,t){if(e.childName==null||t.childName==null)throw Si("Should only compare child_ events.");const i=new z(e.childName,e.snapshotNode),r=new z(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
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
 */function yo(n,e){return{eventCache:n,serverCache:e}}function ir(n,e,t,i){return yo(new ln(e,t,i),n.serverCache)}function Vp(n,e,t,i){return yo(n.eventCache,new ln(e,t,i))}function Ns(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Dn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ca;const FN=()=>(ca||(ca=new We(wA)),ca);class oe{static fromObject(e){let t=new oe(null);return Le(e,(i,r)=>{t=t.set(new J(i),r)}),t}constructor(e,t=FN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:K(),value:this.value};if(W(e))return null;{const i=B(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(ie(e),t);return s!=null?{path:he(new J(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const t=B(e),i=this.children.get(t);return i!==null?i.subtree(ie(e)):new oe(null)}}set(e,t){if(W(e))return new oe(t,this.children);{const i=B(e),s=(this.children.get(i)||new oe(null)).set(ie(e),t),o=this.children.insert(i,s);return new oe(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const t=B(e),i=this.children.get(t);if(i){const r=i.remove(ie(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new oe(null):new oe(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const t=B(e),i=this.children.get(t);return i?i.get(ie(e)):null}}setTree(e,t){if(W(e))return t;{const i=B(e),s=(this.children.get(i)||new oe(null)).setTree(ie(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new oe(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(he(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,K(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(W(e))return null;{const s=B(e),o=this.children.get(s);return o?o.findOnPath_(ie(e),he(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,K(),t)}foreachOnPath_(e,t,i){if(W(e))return this;{this.value&&i(t,this.value);const r=B(e),s=this.children.get(r);return s?s.foreachOnPath_(ie(e),he(t,r),i):new oe(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(he(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new oe(null))}}function rr(n,e,t){if(W(e))return new yt(new oe(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Fe(r,e);return s=s.updateChild(o,t),new yt(n.writeTree_.set(r,s))}else{const r=new oe(t),s=n.writeTree_.setTree(e,r);return new yt(s)}}}function Ba(n,e,t){let i=n;return Le(t,(r,s)=>{i=rr(i,he(e,r),s)}),i}function Qu(n,e){if(W(e))return yt.empty();{const t=n.writeTree_.setTree(e,new oe(null));return new yt(t)}}function Wa(n,e){return Wn(n,e)!=null}function Wn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Fe(t.path,e)):null}function Ju(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ae,(i,r)=>{e.push(new z(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new z(i,r.value))}),e}function en(n,e){if(W(e))return n;{const t=Wn(n,e);return t!=null?new yt(new oe(t)):new yt(n.writeTree_.subtree(e))}}function Ha(n){return n.writeTree_.isEmpty()}function gi(n,e){return $p(K(),n.writeTree_,e)}function $p(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(w(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=$p(he(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(he(n,".priority"),i)),t}}/**
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
 */function wo(n,e){return zp(e,n)}function VN(n,e,t,i,r){w(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=rr(n.visibleWrites,e,t)),n.lastWriteId=i}function $N(n,e,t,i){w(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Ba(n.visibleWrites,e,t),n.lastWriteId=i}function BN(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function WN(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);w(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&HN(a,i.path)?r=!1:at(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return zN(n),!0;if(i.snap)n.visibleWrites=Qu(n.visibleWrites,i.path);else{const a=i.children;Le(a,c=>{n.visibleWrites=Qu(n.visibleWrites,he(i.path,c))})}return!0}else return!1}function HN(n,e){if(n.snap)return at(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&at(he(n.path,t),e))return!0;return!1}function zN(n){n.visibleWrites=Bp(n.allWrites,jN,K()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function jN(n){return n.visible}function Bp(n,e,t){let i=yt.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const o=s.path;let a;if(s.snap)at(t,o)?(a=Fe(t,o),i=rr(i,a,s.snap)):at(o,t)&&(a=Fe(o,t),i=rr(i,K(),s.snap.getChild(a)));else if(s.children){if(at(t,o))a=Fe(t,o),i=Ba(i,a,s.children);else if(at(o,t))if(a=Fe(o,t),W(a))i=Ba(i,K(),s.children);else{const c=Nn(s.children,B(a));if(c){const l=c.getChild(ie(a));i=rr(i,K(),l)}}}else throw Si("WriteRecord should have .snap or .children")}}return i}function Wp(n,e,t,i,r){if(!i&&!r){const s=Wn(n.visibleWrites,e);if(s!=null)return s;{const o=en(n.visibleWrites,e);if(Ha(o))return t;if(t==null&&!Wa(o,K()))return null;{const a=t||P.EMPTY_NODE;return gi(o,a)}}}else{const s=en(n.visibleWrites,e);if(!r&&Ha(s))return t;if(!r&&t==null&&!Wa(s,K()))return null;{const o=function(l){return(l.visible||r)&&(!i||!~i.indexOf(l.writeId))&&(at(l.path,e)||at(e,l.path))},a=Bp(n.allWrites,o,e),c=t||P.EMPTY_NODE;return gi(a,c)}}}function GN(n,e,t){let i=P.EMPTY_NODE;const r=Wn(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ae,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){const s=en(n.visibleWrites,e);return t.forEachChild(ae,(o,a)=>{const c=gi(en(s,new J(o)),a);i=i.updateImmediateChild(o,c)}),Ju(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=en(n.visibleWrites,e);return Ju(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function qN(n,e,t,i,r){w(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=he(e,t);if(Wa(n.visibleWrites,s))return null;{const o=en(n.visibleWrites,s);return Ha(o)?r.getChild(t):gi(o,r.getChild(t))}}function KN(n,e,t,i){const r=he(e,t),s=Wn(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const o=en(n.visibleWrites,r);return gi(o,i.getNode().getImmediateChild(t))}else return null}function YN(n,e){return Wn(n.visibleWrites,e)}function QN(n,e,t,i,r,s,o){let a;const c=en(n.visibleWrites,e),l=Wn(c,K());if(l!=null)a=l;else if(t!=null)a=gi(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=h.getNext();for(;m&&d.length<r;)u(m,i)!==0&&d.push(m),m=h.getNext();return d}else return[]}function JN(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function Ps(n,e,t,i){return Wp(n.writeTree,n.treePath,e,t,i)}function rl(n,e){return GN(n.writeTree,n.treePath,e)}function Xu(n,e,t,i){return qN(n.writeTree,n.treePath,e,t,i)}function ks(n,e){return YN(n.writeTree,he(n.treePath,e))}function XN(n,e,t,i,r,s){return QN(n.writeTree,n.treePath,e,t,i,r,s)}function sl(n,e,t){return KN(n.writeTree,n.treePath,e,t)}function Hp(n,e){return zp(he(n.treePath,e),n.writeTree)}function zp(n,e){return{treePath:n,writeTree:e}}/**
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
 */class ZN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;w(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),w(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,mr(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,_r(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,_i(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,mr(i,e.snapshotNode,r.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class eP{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const jp=new eP;class ol{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ln(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sl(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Dn(this.viewCache_),s=XN(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function tP(n){return{filter:n}}function nP(n,e){w(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function iP(n,e,t,i,r){const s=new ZN;let o,a;if(t.type===gt.OVERWRITE){const l=t;l.source.fromUser?o=za(n,e,l.path,l.snap,i,r,s):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!W(l.path),o=Os(n,e,l.path,l.snap,i,r,a,s))}else if(t.type===gt.MERGE){const l=t;l.source.fromUser?o=sP(n,e,l.path,l.children,i,r,s):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ja(n,e,l.path,l.children,i,r,a,s))}else if(t.type===gt.ACK_USER_WRITE){const l=t;l.revert?o=cP(n,e,l.path,i,r,s):o=oP(n,e,l.path,l.affectedTree,i,r,s)}else if(t.type===gt.LISTEN_COMPLETE)o=aP(n,e,t.path,i,s);else throw Si("Unknown operation type: "+t.type);const c=s.getChanges();return rP(e,o,c),{viewCache:o,changes:c}}function rP(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Ns(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(Fp(Ns(e)))}}function Gp(n,e,t,i,r,s){const o=e.eventCache;if(ks(i,t)!=null)return e;{let a,c;if(W(t))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Dn(e),d=l instanceof P?l:P.EMPTY_NODE,u=rl(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const l=Ps(i,Dn(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=B(t);if(l===".priority"){w(cn(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=Xu(i,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=ie(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=Xu(i,t,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=sl(i,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,r,s):a=o.getNode()}}return ir(e,a,o.isFullyInitialized()||W(t),n.filter.filtersNodes())}}function Os(n,e,t,i,r,s,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(W(t))l=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(t,i);l=d.updateFullNode(c.getNode(),m,null)}else{const m=B(t);if(!c.isCompleteForPath(t)&&cn(t)>1)return e;const g=ie(t),M=c.getNode().getImmediateChild(m).updateChild(g,i);m===".priority"?l=d.updatePriority(c.getNode(),M):l=d.updateChild(c.getNode(),m,M,g,jp,null)}const u=Vp(e,l,c.isFullyInitialized()||W(t),d.filtersNodes()),h=new ol(r,u,s);return Gp(n,u,t,r,h,a)}function za(n,e,t,i,r,s,o){const a=e.eventCache;let c,l;const d=new ol(r,e,s);if(W(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=ir(e,l,!0,n.filter.filtersNodes());else{const u=B(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=ir(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=ie(t),m=a.getNode().getImmediateChild(u);let g;if(W(h))g=i;else{const E=d.getCompleteChild(u);E!=null?Kc(h)===".priority"&&E.getChild(kp(h)).isEmpty()?g=E:g=E.updateChild(h,i):g=P.EMPTY_NODE}if(m.equals(g))c=e;else{const E=n.filter.updateChild(a.getNode(),u,g,h,d,o);c=ir(e,E,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Zu(n,e){return n.eventCache.isCompleteForChild(e)}function sP(n,e,t,i,r,s,o){let a=e;return i.foreach((c,l)=>{const d=he(t,c);Zu(e,B(d))&&(a=za(n,a,d,l,r,s,o))}),i.foreach((c,l)=>{const d=he(t,c);Zu(e,B(d))||(a=za(n,a,d,l,r,s,o))}),a}function ed(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function ja(n,e,t,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;W(t)?l=i:l=new oe(null).setTree(t,i);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const m=e.serverCache.getNode().getImmediateChild(u),g=ed(n,m,h);c=Os(n,c,new J(u),g,r,s,o,a)}}),l.children.inorderTraversal((u,h)=>{const m=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!m){const g=e.serverCache.getNode().getImmediateChild(u),E=ed(n,g,h);c=Os(n,c,new J(u),E,r,s,o,a)}}),c}function oP(n,e,t,i,r,s,o){if(ks(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(W(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Os(n,e,t,c.getNode().getChild(t),r,s,a,o);if(W(t)){let l=new oe(null);return c.getNode().forEachChild(Ct,(d,u)=>{l=l.set(new J(d),u)}),ja(n,e,t,l,r,s,a,o)}else return e}else{let l=new oe(null);return i.foreach((d,u)=>{const h=he(t,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),ja(n,e,t,l,r,s,a,o)}}function aP(n,e,t,i,r){const s=e.serverCache,o=Vp(e,s.getNode(),s.isFullyInitialized()||W(t),s.isFiltered());return Gp(n,o,t,i,jp,r)}function cP(n,e,t,i,r,s){let o;if(ks(i,t)!=null)return e;{const a=new ol(i,e,r),c=e.eventCache.getNode();let l;if(W(t)||B(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ps(i,Dn(e));else{const u=e.serverCache.getNode();w(u instanceof P,"serverChildren would be complete if leaf node"),d=rl(i,u)}d=d,l=n.filter.updateFullNode(c,d,s)}else{const d=B(t);let u=sl(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,ie(t),a,s):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,P.EMPTY_NODE,ie(t),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ps(i,Dn(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||ks(i,K())!=null,ir(e,l,o,n.filter.filtersNodes())}}/**
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
 */class lP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new el(i.getIndex()),s=IN(i);this.processor_=tP(s);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(P.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(P.EMPTY_NODE,a.getNode(),null),d=new ln(c,o.isFullyInitialized(),r.filtersNodes()),u=new ln(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=yo(u,d),this.eventGenerator_=new DN(this.query_)}get query(){return this.query_}}function uP(n){return n.viewCache_.serverCache.getNode()}function dP(n){return Ns(n.viewCache_)}function hP(n,e){const t=Dn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!W(e)&&!t.getImmediateChild(B(e)).isEmpty())?t.getChild(e):null}function td(n){return n.eventRegistrations_.length===0}function fP(n,e){n.eventRegistrations_.push(e)}function nd(n,e,t){const i=[];if(t){w(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function id(n,e,t,i){e.type===gt.MERGE&&e.source.queryId!==null&&(w(Dn(n.viewCache_),"We should always have a full cache before handling merges"),w(Ns(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=iP(n.processor_,r,e,t,i);return nP(n.processor_,s.viewCache),w(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,qp(n,s.changes,s.viewCache.eventCache.getNode(),null)}function pP(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ae,(s,o)=>{i.push(_i(s,o))}),t.isFullyInitialized()&&i.push(Fp(t.getNode())),qp(n,i,t.getNode(),e)}function qp(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return MN(n.eventGenerator_,e,t,r)}/**
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
 */let Ls;class Kp{constructor(){this.views=new Map}}function _P(n){w(!Ls,"__referenceConstructor has already been defined"),Ls=n}function mP(){return w(Ls,"Reference.ts has not been loaded"),Ls}function gP(n){return n.views.size===0}function al(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return w(s!=null,"SyncTree gave us an op for an invalid query."),id(s,e,t,i)}else{let s=[];for(const o of n.views.values())s=s.concat(id(o,e,t,i));return s}}function Yp(n,e,t,i,r){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=Ps(t,r?i:null),c=!1;a?c=!0:i instanceof P?(a=rl(t,i),c=!1):(a=P.EMPTY_NODE,c=!1);const l=yo(new ln(a,c,!1),new ln(i,r,!1));return new lP(e,l)}return o}function vP(n,e,t,i,r,s){const o=Yp(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),fP(o,t),pP(o,t)}function yP(n,e,t,i){const r=e._queryIdentifier,s=[];let o=[];const a=un(n);if(r==="default")for(const[c,l]of n.views.entries())o=o.concat(nd(l,t,i)),td(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const c=n.views.get(r);c&&(o=o.concat(nd(c,t,i)),td(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!un(n)&&s.push(new(mP())(e._repo,e._path)),{removed:s,events:o}}function Qp(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function tn(n,e){let t=null;for(const i of n.views.values())t=t||hP(i,e);return t}function Jp(n,e){if(e._queryParams.loadsAllData())return Eo(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Xp(n,e){return Jp(n,e)!=null}function un(n){return Eo(n)!=null}function Eo(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ds;function wP(n){w(!Ds,"__referenceConstructor has already been defined"),Ds=n}function EP(){return w(Ds,"Reference.ts has not been loaded"),Ds}let SP=1;class rd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=JN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cl(n,e,t,i,r){return VN(n.pendingWriteTree_,e,t,i,r),r?Ai(n,new Ln(tl(),e,t)):[]}function IP(n,e,t,i){$N(n.pendingWriteTree_,e,t,i);const r=oe.fromObject(t);return Ai(n,new mi(tl(),e,r))}function Jt(n,e,t=!1){const i=BN(n.pendingWriteTree_,e);if(WN(n.pendingWriteTree_,e)){let s=new oe(null);return i.snap!=null?s=s.set(K(),!0):Le(i.children,o=>{s=s.set(new J(o),!0)}),Ai(n,new As(i.path,s,t))}else return[]}function Br(n,e,t){return Ai(n,new Ln(nl(),e,t))}function bP(n,e,t){const i=oe.fromObject(t);return Ai(n,new mi(nl(),e,i))}function TP(n,e){return Ai(n,new vr(nl(),e))}function RP(n,e,t){const i=ll(n,t);if(i){const r=ul(i),s=r.path,o=r.queryId,a=Fe(s,e),c=new vr(il(o),a);return dl(n,s,c)}else return[]}function Ms(n,e,t,i,r=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Xp(o,e))){const c=yP(o,e,t,i);gP(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!r){const d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(s,(h,m)=>un(m));if(d&&!u){const h=n.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=NP(h);for(let g=0;g<m.length;++g){const E=m[g],M=E.query,Z=n_(n,E);n.listenProvider_.startListening(sr(M),yr(n,M),Z.hashFn,Z.onComplete)}}}!u&&l.length>0&&!i&&(d?n.listenProvider_.stopListening(sr(e),null):l.forEach(h=>{const m=n.queryToTagMap.get(Io(h));n.listenProvider_.stopListening(sr(h),m)}))}PP(n,l)}return a}function Zp(n,e,t,i){const r=ll(n,i);if(r!=null){const s=ul(r),o=s.path,a=s.queryId,c=Fe(o,e),l=new Ln(il(a),c,t);return dl(n,o,l)}else return[]}function CP(n,e,t,i){const r=ll(n,i);if(r){const s=ul(r),o=s.path,a=s.queryId,c=Fe(o,e),l=oe.fromObject(t),d=new mi(il(a),c,l);return dl(n,o,d)}else return[]}function Ga(n,e,t,i=!1){const r=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(r,(h,m)=>{const g=Fe(h,r);s=s||tn(m,g),o=o||un(m)});let a=n.syncPointTree_.get(r);a?(o=o||un(a),s=s||tn(a,K())):(a=new Kp,n.syncPointTree_=n.syncPointTree_.set(r,a));let c;s!=null?c=!0:(c=!1,s=P.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((m,g)=>{const E=tn(g,K());E&&(s=s.updateImmediateChild(m,E))}));const l=Xp(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=Io(e);w(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=kP();n.queryToTagMap.set(h,m),n.tagToQueryMap.set(m,h)}const d=wo(n.pendingWriteTree_,r);let u=vP(a,e,t,d,s,c);if(!l&&!o&&!i){const h=Jp(a,e);u=u.concat(OP(n,e,h))}return u}function So(n,e,t){const r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Fe(o,e),l=tn(a,c);if(l)return l});return Wp(r,e,s,t,!0)}function AP(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=Fe(l,t);i=i||tn(d,u)});let r=n.syncPointTree_.get(t);r?i=i||tn(r,K()):(r=new Kp,n.syncPointTree_=n.syncPointTree_.set(t,r));const s=i!=null,o=s?new ln(i,!0,!1):null,a=wo(n.pendingWriteTree_,e._path),c=Yp(r,e,a,s?o.getNode():P.EMPTY_NODE,s);return dP(c)}function Ai(n,e){return e_(e,n.syncPointTree_,null,wo(n.pendingWriteTree_,K()))}function e_(n,e,t,i){if(W(n.path))return t_(n,e,t,i);{const r=e.get(K());t==null&&r!=null&&(t=tn(r,K()));let s=[];const o=B(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=Hp(i,o);s=s.concat(e_(a,c,l,d))}return r&&(s=s.concat(al(r,n,i,t))),s}}function t_(n,e,t,i){const r=e.get(K());t==null&&r!=null&&(t=tn(r,K()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Hp(i,o),d=n.operationForChild(o);d&&(s=s.concat(t_(d,a,c,l)))}),r&&(s=s.concat(al(r,n,i,t))),s}function n_(n,e){const t=e.query,i=yr(n,t);return{hashFn:()=>(uP(e)||P.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?RP(n,t._path,i):TP(n,t._path);{const s=IA(r,t);return Ms(n,t,null,s)}}}}function yr(n,e){const t=Io(e);return n.queryToTagMap.get(t)}function Io(n){return n._path.toString()+"$"+n._queryIdentifier}function ll(n,e){return n.tagToQueryMap.get(e)}function ul(n){const e=n.indexOf("$");return w(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new J(n.substr(0,e))}}function dl(n,e,t){const i=n.syncPointTree_.get(e);w(i,"Missing sync point for query tag that we're tracking");const r=wo(n.pendingWriteTree_,e);return al(i,t,r,null)}function NP(n){return n.fold((e,t,i)=>{if(t&&un(t))return[Eo(t)];{let r=[];return t&&(r=Qp(t)),Le(i,(s,o)=>{r=r.concat(o)}),r}})}function sr(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(EP())(n._repo,n._path):n}function PP(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const r=Io(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function kP(){return SP++}function OP(n,e,t){const i=e._path,r=yr(n,e),s=n_(n,t),o=n.listenProvider_.startListening(sr(e),r,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(i);if(r)w(!un(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!W(l)&&d&&un(d))return[Eo(d).query];{let h=[];return d&&(h=h.concat(Qp(d).map(m=>m.query))),Le(u,(m,g)=>{h=h.concat(g)}),h}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(sr(d),yr(n,d))}}return o}/**
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
 */class hl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new hl(t)}node(){return this.node_}}class fl{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=he(this.path_,e);return new fl(this.syncTree_,t)}node(){return So(this.syncTree_,this.path_)}}const LP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},sd=function(n,e,t){if(!n||typeof n!="object")return n;if(w(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return DP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return MP(n[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},DP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:w(!1,"Unexpected server value: "+n)}},MP=function(n,e,t){n.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&w(!1,"Unexpected increment value: "+i);const r=e.node();if(w(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},i_=function(n,e,t,i){return _l(e,new fl(t,n),i)},pl=function(n,e,t){return _l(n,new hl(e),t)};function _l(n,e,t){const i=n.getPriority().val(),r=sd(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=sd(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new Ae(a,_e(r)):n}else{const o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Ae(r))),o.forEachChild(ae,(a,c)=>{const l=_l(c,e.getImmediateChild(a),t);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
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
 */class ml{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function bo(n,e){let t=e instanceof J?e:new J(e),i=n,r=B(t);for(;r!==null;){const s=Nn(i.node.children,r)||{children:{},childCount:0};i=new ml(r,i,s),t=ie(t),r=B(t)}return i}function Hn(n){return n.node.value}function gl(n,e){n.node.value=e,qa(n)}function r_(n){return n.node.childCount>0}function xP(n){return Hn(n)===void 0&&!r_(n)}function To(n,e){Le(n.node.children,(t,i)=>{e(new ml(t,n,i))})}function s_(n,e,t,i){t&&!i&&e(n),To(n,r=>{s_(r,e,!0,i)}),t&&i&&e(n)}function UP(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Wr(n){return new J(n.parent===null?n.name:Wr(n.parent)+"/"+n.name)}function qa(n){n.parent!==null&&FP(n.parent,n.name,n)}function FP(n,e,t){const i=xP(t),r=et(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,qa(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,qa(n))}/**
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
 */const VP=/[\[\].#$\/\u0000-\u001F\u007F]/,$P=/[\[\].#$\u0000-\u001F\u007F]/,la=10*1024*1024,Ro=function(n){return typeof n=="string"&&n.length!==0&&!VP.test(n)},o_=function(n){return typeof n=="string"&&n.length!==0&&!$P.test(n)},BP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),o_(n)},wr=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!_o(n)||n&&typeof n=="object"&&et(n,".sv")},Pt=function(n,e,t,i){i&&e===void 0||Hr(je(n,"value"),e,t)},Hr=function(n,e,t){const i=t instanceof J?new iN(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+wn(i));if(typeof e=="function")throw new Error(n+"contains a function "+wn(i)+" with contents = "+e.toString());if(_o(e))throw new Error(n+"contains "+e.toString()+" "+wn(i));if(typeof e=="string"&&e.length>la/3&&io(e)>la)throw new Error(n+"contains a string greater than "+la+" utf8 bytes "+wn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Le(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ro(o)))throw new Error(n+" contains an invalid key ("+o+") "+wn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rN(i,o),Hr(n,a,i),sN(i)}),r&&s)throw new Error(n+' contains ".value" child '+wn(i)+" in addition to actual children.")}},WP=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const s=pr(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ro(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(nN);let r=null;for(t=0;t<e.length;t++){if(i=e[t],r!==null&&at(r,i))throw new Error(n+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},a_=function(n,e,t,i){const r=je(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];Le(e,(o,a)=>{const c=new J(o);if(Hr(r,a,he(t,c)),Kc(c)===".priority"&&!wr(a))throw new Error(r+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),WP(r,s)},vl=function(n,e,t){if(_o(e))throw new Error(je(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!wr(e))throw new Error(je(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},zr=function(n,e,t,i){if(t!==void 0&&!Ro(t))throw new Error(je(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Er=function(n,e,t,i){if(!o_(t))throw new Error(je(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HP=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Er(n,e,t)},ct=function(n,e){if(B(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},c_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ro(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!BP(t))throw new Error(je(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class zP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Co(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!Yc(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function l_(n,e,t){Co(n,t),u_(n,i=>Yc(i,e))}function tt(n,e,t){Co(n,t),u_(n,i=>at(i,e)||at(e,i))}function u_(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?(jP(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function jP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Rn&&ke("event: "+t.toString()),Ri(i)}}}/**
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
 */const d_="repo_interrupt",GP=25;class qP{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cs(),this.transactionQueueTree_=new ml,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function KP(n,e,t){if(n.stats_=Gc(n.repoInfo_),n.forceRestClient_||CA())n.server_=new Rs(n.repoInfo_,(i,r,s,o)=>{od(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ad(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Vt(n.repoInfo_,e,(i,r,s,o)=>{od(n,i,r,s,o)},i=>{ad(n,i)},i=>{YP(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=OA(n.repoInfo_,()=>new LN(n.stats_,n.server_)),n.infoData_=new AN,n.infoSyncTree_=new rd({startListening:(i,r,s,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=Br(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yl(n,"connected",!1),n.serverSyncTree_=new rd({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(a,c)=>{const l=o(a,c);tt(n.eventQueue_,i._path,l)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function h_(n){const t=n.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function jr(n){return LP({timestamp:h_(n)})}function od(n,e,t,i,r){n.dataUpdateCount++;const s=new J(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){const c=ms(t,l=>_e(l));o=CP(n.serverSyncTree_,s,c,r)}else{const c=_e(t);o=Zp(n.serverSyncTree_,s,c,r)}else if(i){const c=ms(t,l=>_e(l));o=bP(n.serverSyncTree_,s,c)}else{const c=_e(t);o=Br(n.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=vi(n,s)),tt(n.eventQueue_,a,o)}function ad(n,e){yl(n,"connected",e),e===!1&&XP(n)}function YP(n,e){Le(e,(t,i)=>{yl(n,t,i)})}function yl(n,e,t){const i=new J("/.info/"+e),r=_e(t);n.infoData_.updateSnapshot(i,r);const s=Br(n.infoSyncTree_,i,r);tt(n.eventQueue_,i,s)}function Ao(n){return n.nextWriteId_++}function QP(n,e,t){const i=AP(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(r=>{const s=_e(r).withIndex(e._queryParams.getIndex());Ga(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Br(n.serverSyncTree_,e._path,s);else{const a=yr(n.serverSyncTree_,e);o=Zp(n.serverSyncTree_,e._path,s,a)}return tt(n.eventQueue_,e._path,o),Ms(n.serverSyncTree_,e,t,null,!0),s},r=>(Ni(n,"get for query "+be(e)+" failed: "+r),Promise.reject(new Error(r))))}function wl(n,e,t,i,r){Ni(n,"set",{path:e.toString(),value:t,priority:i});const s=jr(n),o=_e(t,i),a=So(n.serverSyncTree_,e),c=pl(o,a,s),l=Ao(n),d=cl(n.serverSyncTree_,e,c,l,!0);Co(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,m)=>{const g=h==="ok";g||Ue("set at "+e+" failed: "+h);const E=Jt(n.serverSyncTree_,l,!g);tt(n.eventQueue_,e,E),dn(n,r,h,m)});const u=Sl(n,e);vi(n,u),tt(n.eventQueue_,u,[])}function JP(n,e,t,i){Ni(n,"update",{path:e.toString(),value:t});let r=!0;const s=jr(n),o={};if(Le(t,(a,c)=>{r=!1,o[a]=i_(he(e,a),_e(c),n.serverSyncTree_,s)}),r)ke("update() called with empty data.  Don't do anything."),dn(n,i,"ok",void 0);else{const a=Ao(n),c=IP(n.serverSyncTree_,e,o,a);Co(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{const u=l==="ok";u||Ue("update at "+e+" failed: "+l);const h=Jt(n.serverSyncTree_,a,!u),m=h.length>0?vi(n,e):e;tt(n.eventQueue_,m,h),dn(n,i,l,d)}),Le(t,l=>{const d=Sl(n,he(e,l));vi(n,d)}),tt(n.eventQueue_,e,[])}}function XP(n){Ni(n,"onDisconnectEvents");const e=jr(n),t=Cs();$a(n.onDisconnect_,K(),(r,s)=>{const o=i_(r,s,n.serverSyncTree_,e);Ci(t,r,o)});let i=[];$a(t,K(),(r,s)=>{i=i.concat(Br(n.serverSyncTree_,r,s));const o=Sl(n,r);vi(n,o)}),n.onDisconnect_=Cs(),tt(n.eventQueue_,K(),i)}function ZP(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&Va(n.onDisconnect_,e),dn(n,t,i,r)})}function cd(n,e,t,i){const r=_e(t);n.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&Ci(n.onDisconnect_,e,r),dn(n,i,s,o)})}function ek(n,e,t,i,r){const s=_e(t,i);n.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ci(n.onDisconnect_,e,s),dn(n,r,o,a)})}function tk(n,e,t,i){if(_s(t)){ke("onDisconnect().update() called with empty data.  Don't do anything."),dn(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(r,s)=>{r==="ok"&&Le(t,(o,a)=>{const c=_e(a);Ci(n.onDisconnect_,he(e,o),c)}),dn(n,i,r,s)})}function nk(n,e,t){let i;B(e._path)===".info"?i=Ga(n.infoSyncTree_,e,t):i=Ga(n.serverSyncTree_,e,t),l_(n.eventQueue_,e._path,i)}function Ka(n,e,t){let i;B(e._path)===".info"?i=Ms(n.infoSyncTree_,e,t):i=Ms(n.serverSyncTree_,e,t),l_(n.eventQueue_,e._path,i)}function f_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(d_)}function ik(n){n.persistentConnection_&&n.persistentConnection_.resume(d_)}function Ni(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ke(t,...e)}function dn(n,e,t,i){e&&Ri(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function rk(n,e,t,i,r,s){Ni(n,"transaction on "+e);const o={path:e,update:t,onComplete:i,status:null,order:cp(),applyLocally:s,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=El(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Hr("transaction failed: Data returned ",c,o.path),o.status=0;const l=bo(n.transactionQueueTree_,e),d=Hn(l)||[];d.push(o),gl(l,d);let u;typeof c=="object"&&c!==null&&et(c,".priority")?(u=Nn(c,".priority"),w(wr(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(So(n.serverSyncTree_,e)||P.EMPTY_NODE).getPriority().val();const h=jr(n),m=_e(c,u),g=pl(m,a,h);o.currentOutputSnapshotRaw=m,o.currentOutputSnapshotResolved=g,o.currentWriteId=Ao(n);const E=cl(n.serverSyncTree_,e,g,o.currentWriteId,o.applyLocally);tt(n.eventQueue_,e,E),No(n,n.transactionQueueTree_)}}function El(n,e,t){return So(n.serverSyncTree_,e,t)||P.EMPTY_NODE}function No(n,e=n.transactionQueueTree_){if(e||Po(n,e),Hn(e)){const t=__(n,e);w(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&sk(n,Wr(e),t)}else r_(e)&&To(e,t=>{No(n,t)})}function sk(n,e,t){const i=t.map(l=>l.currentWriteId),r=El(n,e,i);let s=r;const o=r.hash();for(let l=0;l<t.length;l++){const d=t[l];w(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Fe(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;n.server_.put(c.toString(),a,l=>{Ni(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(Jt(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();Po(n,bo(n.transactionQueueTree_,e)),No(n,n.transactionQueueTree_),tt(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)Ri(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Ue("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}vi(n,e)}},o)}function vi(n,e){const t=p_(n,e),i=Wr(t),r=__(n,t);return ok(n,r,i),i}function ok(n,e,t){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Fe(t,c.path);let d=!1,u;if(w(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,r=r.concat(Jt(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=GP)d=!0,u="maxretry",r=r.concat(Jt(n.serverSyncTree_,c.currentWriteId,!0));else{const h=El(n,c.path,o);c.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Hr("transaction failed: Data returned ",m,c.path);let g=_e(m);typeof m=="object"&&m!=null&&et(m,".priority")||(g=g.updatePriority(h.getPriority()));const M=c.currentWriteId,Z=jr(n),A=pl(g,h,Z);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=A,c.currentWriteId=Ao(n),o.splice(o.indexOf(M),1),r=r.concat(cl(n.serverSyncTree_,c.path,A,c.currentWriteId,c.applyLocally)),r=r.concat(Jt(n.serverSyncTree_,M,!0))}else d=!0,u="nodata",r=r.concat(Jt(n.serverSyncTree_,c.currentWriteId,!0))}tt(n.eventQueue_,t,r),r=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Po(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ri(i[a]);No(n,n.transactionQueueTree_)}function p_(n,e){let t,i=n.transactionQueueTree_;for(t=B(e);t!==null&&Hn(i)===void 0;)i=bo(i,t),e=ie(e),t=B(e);return i}function __(n,e){const t=[];return m_(n,e,t),t.sort((i,r)=>i.order-r.order),t}function m_(n,e,t){const i=Hn(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);To(e,r=>{m_(n,r,t)})}function Po(n,e){const t=Hn(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,gl(e,t.length>0?t:void 0)}To(e,i=>{Po(n,i)})}function Sl(n,e){const t=Wr(p_(n,e)),i=bo(n.transactionQueueTree_,e);return UP(i,r=>{ua(n,r)}),ua(n,i),s_(i,r=>{ua(n,r)}),t}function ua(n,e){const t=Hn(e);if(t){const i=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(w(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(w(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Jt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?gl(e,void 0):t.length=s+1,tt(n.eventQueue_,Wr(e),r);for(let o=0;o<i.length;o++)Ri(i[o])}}/**
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
 */function ak(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function ck(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ue(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ya=function(n,e){const t=lk(n),i=t.namespace;t.domain==="firebase.com"&&Nt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||vA();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Sp(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new J(t.pathString)}},lk=function(n){let e="",t="",i="",r="",s="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(r=ak(n.substring(d,u)));const h=ck(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const m=e.slice(0,l);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */const ld="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",uk=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=ld.charAt(t%64),t=Math.floor(t/64);w(t===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=ld.charAt(e[r]);return w(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class g_{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class v_{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Il{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let dk=class{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Be;return ZP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ct("OnDisconnect.remove",this._path);const e=new Be;return cd(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ct("OnDisconnect.set",this._path),Pt("OnDisconnect.set",e,this._path,!1);const t=new Be;return cd(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){ct("OnDisconnect.setWithPriority",this._path),Pt("OnDisconnect.setWithPriority",e,this._path,!1),vl("OnDisconnect.setWithPriority",t);const i=new Be;return ek(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){ct("OnDisconnect.update",this._path),a_("OnDisconnect.update",e,this._path);const t=new Be;return tk(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};/**
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
 */class qe{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return W(this._path)?null:Kc(this._path)}get ref(){return new ht(this._repo,this._path)}get _queryIdentifier(){const e=Ku(this._queryParams),t=zc(e);return t==="{}"?"default":t}get _queryObject(){return Ku(this._queryParams)}isEqual(e){if(e=x(e),!(e instanceof qe))return!1;const t=this._repo===e._repo,i=Yc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+tN(this._path)}}function ko(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function mn(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Ct){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==an)throw new Error(i);if(typeof e!="string")throw new Error(r)}if(n.hasEnd()){if(n.getIndexEndName()!==Ht)throw new Error(i);if(typeof t!="string")throw new Error(r)}}else if(n.getIndex()===ae){if(e!=null&&!wr(e)||t!=null&&!wr(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(w(n.getIndex()instanceof Xc||n.getIndex()===Zc,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Oo(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ht extends qe{constructor(e,t){super(e,t,new go,!1)}get parent(){const e=kp(this._path);return e===null?null:new ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Lo=class Qa{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new J(e),i=Mn(this.ref,e);return new Qa(this._node.getChild(t),i,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Qa(r,Mn(this.ref,i),ae)))}hasChild(e){const t=new J(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function y_(n,e){return n=x(n),n._checkNotDeleted("ref"),e!==void 0?Mn(n._root,e):n._root}function ud(n,e){n=x(n),n._checkNotDeleted("refFromURL");const t=Ya(e,n._repo.repoInfo_.nodeAdmin);c_("refFromURL",t);const i=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&i.host!==n._repo.repoInfo_.host&&Nt("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+n._repo.repoInfo_.host+")"),y_(n,t.path.toString())}function Mn(n,e){return n=x(n),B(n._path)===null?HP("child","path",e):Er("child","path",e),new ht(n._repo,he(n._path,e))}function hk(n,e){n=x(n),ct("push",n._path),Pt("push",e,n._path,!0);const t=h_(n._repo),i=uk(t),r=Mn(n,i),s=Mn(n,i);let o;return e!=null?o=bl(s,e).then(()=>s):o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function fk(n){return ct("remove",n._path),bl(n,null)}function bl(n,e){n=x(n),ct("set",n._path),Pt("set",e,n._path,!1);const t=new Be;return wl(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function pk(n,e){n=x(n),ct("setPriority",n._path),vl("setPriority",e);const t=new Be;return wl(n._repo,he(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function _k(n,e,t){if(ct("setWithPriority",n._path),Pt("setWithPriority",e,n._path,!1),vl("setWithPriority",t),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const i=new Be;return wl(n._repo,n._path,e,t,i.wrapCallback(()=>{})),i.promise}function mk(n,e){a_("update",e,n._path);const t=new Be;return JP(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function gk(n){n=x(n);const e=new Il(()=>{}),t=new Gr(e);return QP(n._repo,n,t).then(i=>new Lo(i,new ht(n._repo,n._path),n._queryParams.getIndex()))}class Gr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new g_("value",this,new Lo(e.snapshotNode,new ht(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new v_(this,e,t):null}matches(e){return e instanceof Gr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Do{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new v_(this,e,t):null}createEvent(e,t){w(e.childName!=null,"Child events should have a childName.");const i=Mn(new ht(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new g_(e.type,this,new Lo(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Do?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function qr(n,e,t,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const c=t,l=(d,u)=>{Ka(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new Il(t,s||void 0),a=e==="value"?new Gr(o):new Do(e,o);return nk(n._repo,n,a),()=>Ka(n._repo,n,a)}function Ja(n,e,t,i){return qr(n,"value",e,t,i)}function dd(n,e,t,i){return qr(n,"child_added",e,t,i)}function hd(n,e,t,i){return qr(n,"child_changed",e,t,i)}function fd(n,e,t,i){return qr(n,"child_moved",e,t,i)}function pd(n,e,t,i){return qr(n,"child_removed",e,t,i)}function _d(n,e,t){let i=null;const r=t?new Il(t):null;e==="value"?i=new Gr(r):e&&(i=new Do(e,r)),Ka(n._repo,n,i)}class Et{}class w_ extends Et{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){Pt("endAt",this._value,e._path,!0);const t=Fa(e._queryParams,this._value,this._key);if(Oo(t),mn(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new qe(e._repo,e._path,t,e._orderByCalled)}}function vk(n,e){return zr("endAt","key",e),new w_(n,e)}class yk extends Et{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){Pt("endBefore",this._value,e._path,!1);const t=CN(e._queryParams,this._value,this._key);if(Oo(t),mn(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new qe(e._repo,e._path,t,e._orderByCalled)}}function wk(n,e){return zr("endBefore","key",e),new yk(n,e)}class E_ extends Et{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){Pt("startAt",this._value,e._path,!0);const t=Ua(e._queryParams,this._value,this._key);if(Oo(t),mn(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new qe(e._repo,e._path,t,e._orderByCalled)}}function Ek(n=null,e){return zr("startAt","key",e),new E_(n,e)}class Sk extends Et{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){Pt("startAfter",this._value,e._path,!1);const t=RN(e._queryParams,this._value,this._key);if(Oo(t),mn(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new qe(e._repo,e._path,t,e._orderByCalled)}}function Ik(n,e){return zr("startAfter","key",e),new Sk(n,e)}class bk extends Et{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new qe(e._repo,e._path,bN(e._queryParams,this._limit),e._orderByCalled)}}function Tk(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new bk(n)}class Rk extends Et{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new qe(e._repo,e._path,TN(e._queryParams,this._limit),e._orderByCalled)}}function Ck(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Rk(n)}class Ak extends Et{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){ko(e,"orderByChild");const t=new J(this._path);if(W(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new Xc(t),r=vo(e._queryParams,i);return mn(r),new qe(e._repo,e._path,r,!0)}}function Nk(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Er("orderByChild","path",n),new Ak(n)}class Pk extends Et{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){ko(e,"orderByKey");const t=vo(e._queryParams,Ct);return mn(t),new qe(e._repo,e._path,t,!0)}}function kk(){return new Pk}class Ok extends Et{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){ko(e,"orderByPriority");const t=vo(e._queryParams,ae);return mn(t),new qe(e._repo,e._path,t,!0)}}function Lk(){return new Ok}class Dk extends Et{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){ko(e,"orderByValue");const t=vo(e._queryParams,Zc);return mn(t),new qe(e._repo,e._path,t,!0)}}function Mk(){return new Dk}class xk extends Et{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(Pt("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new w_(this._value,this._key)._apply(new E_(this._value,this._key)._apply(e))}}function Uk(n,e){return zr("equalTo","key",e),new xk(n,e)}function _t(n,...e){let t=x(n);for(const i of e)t=i._apply(t);return t}_P(ht);wP(ht);/**
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
 */const Fk="FIREBASE_DATABASE_EMULATOR_HOST",Xa={};let Vk=!1;function $k(n,e,t,i){n.repoInfo_=new Sp(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function S_(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||Nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ya(s,r),a=o.repoInfo,c,l;typeof process<"u"&&Pu&&(l=Pu[Fk]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=Ya(s,r),a=o.repoInfo):c=!o.repoInfo.secure;const d=r&&c?new ri(ri.OWNER):new NA(n.name,n.options,e);c_("Invalid Firebase Database URL",o),W(o.path)||Nt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Wk(a,n,d,new AA(n.name,t));return new Hk(u,n)}function Bk(n,e){const t=Xa[e];(!t||t[n.key]!==n)&&Nt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),f_(n),delete t[n.key]}function Wk(n,e,t,i){let r=Xa[e.name];r||(r={},Xa[e.name]=r);let s=r[n.toURLString()];return s&&Nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new qP(n,Vk,t,i),r[n.toURLString()]=s,s}let Hk=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(KP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ht(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Bk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nt("Cannot call "+e+" on a deleted database.")}};function I_(){pi.IS_TRANSPORT_INITIALIZED&&Ue("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function zk(){I_(),Qt.forceDisallow()}function jk(){I_(),ot.forceDisallow(),Qt.forceAllow()}function Gk(n,e,t,i={}){n=x(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Nt("Cannot call useEmulator() after instance has already been initialized.");const r=n._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ri(ri.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:FS(i.mockUserToken,n.app.options.projectId);s=new ri(o)}$k(r,e,t,s)}function qk(n){n=x(n),n._checkNotDeleted("goOffline"),f_(n._repo)}function Kk(n){n=x(n),n._checkNotDeleted("goOnline"),ik(n._repo)}function Yk(n,e){up(n,e)}/**
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
 */function Qk(n){op(pn),on(new ut("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return S_(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),vt(ku,Ou,n),vt(ku,Ou,"esm2017")}/**
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
 */const Jk={".sv":"timestamp"};function Xk(){return Jk}function Zk(n){return{".sv":{increment:n}}}/**
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
 */let e0=class{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function t0(n,e,t){var i;if(n=x(n),ct("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const r=(i=t==null?void 0:t.applyLocally)!==null&&i!==void 0?i:!0,s=new Be,o=(c,l,d)=>{let u=null;c?s.reject(c):(u=new Lo(d,new ht(n._repo,n._path),ae),s.resolve(new e0(l,u)))},a=Ja(n,()=>{});return rk(n._repo,n._path,e,o,a,r),s.promise}Vt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Vt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Qk();const n0="@firebase/database-compat",i0="2.0.1";/**
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
 */const r0=new Pr("@firebase/database-compat"),b_=function(n){const e="FIREBASE WARNING: "+n;r0.warn(e)};/**
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
 */const s0=function(n,e,t,i){if(t!==void 0&&typeof t!="boolean")throw new Error(je(n,e)+"must be a boolean.")},o0=function(n,e,t){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(je(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class a0{constructor(e){this._delegate=e}cancel(e){k("OnDisconnect.cancel",0,1,arguments.length),Ne("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),i=>e(i)),t}remove(e){k("OnDisconnect.remove",0,1,arguments.length),Ne("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),i=>e(i)),t}set(e,t){k("OnDisconnect.set",1,2,arguments.length),Ne("OnDisconnect.set","onComplete",t,!0);const i=this._delegate.set(e);return t&&i.then(()=>t(null),r=>t(r)),i}setWithPriority(e,t,i){k("OnDisconnect.setWithPriority",2,3,arguments.length),Ne("OnDisconnect.setWithPriority","onComplete",i,!0);const r=this._delegate.setWithPriority(e,t);return i&&r.then(()=>i(null),s=>i(s)),r}update(e,t){if(k("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,b_("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ne("OnDisconnect.update","onComplete",t,!0);const i=this._delegate.update(e);return t&&i.then(()=>t(null),r=>t(r)),i}}/**
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
 */class c0{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return k("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class nn{constructor(e,t){this._database=e,this._delegate=t}val(){return k("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return k("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return k("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return k("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return k("DataSnapshot.child",0,1,arguments.length),e=String(e),Er("DataSnapshot.child","path",e),new nn(this._database,this._delegate.child(e))}hasChild(e){return k("DataSnapshot.hasChild",1,1,arguments.length),Er("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return k("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return k("DataSnapshot.forEach",1,1,arguments.length),Ne("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new nn(this._database,t)))}hasChildren(){return k("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return k("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return k("DataSnapshot.ref",0,0,arguments.length),new Xe(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class De{constructor(e,t){this.database=e,this._delegate=t}on(e,t,i,r){var s;k("Query.on",2,4,arguments.length),Ne("Query.on","callback",t,!1);const o=De.getCancelAndContextArgs_("Query.on",i,r),a=(l,d)=>{t.call(o.context,new nn(this.database,l),d)};a.userCallback=t,a.context=o.context;const c=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return Ja(this._delegate,a,c),t;case"child_added":return dd(this._delegate,a,c),t;case"child_removed":return pd(this._delegate,a,c),t;case"child_changed":return hd(this._delegate,a,c),t;case"child_moved":return fd(this._delegate,a,c),t;default:throw new Error(je("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,i){if(k("Query.off",0,3,arguments.length),o0("Query.off",e),Ne("Query.off","callback",t,!0),Zl("Query.off","context",i),t){const r=()=>{};r.userCallback=t,r.context=i,_d(this._delegate,e,r)}else _d(this._delegate,e)}get(){return gk(this._delegate).then(e=>new nn(this.database,e))}once(e,t,i,r){k("Query.once",1,4,arguments.length),Ne("Query.once","callback",t,!0);const s=De.getCancelAndContextArgs_("Query.once",i,r),o=new Be,a=(l,d)=>{const u=new nn(this.database,l);t&&t.call(s.context,u,d),o.resolve(u)};a.userCallback=t,a.context=s.context;const c=l=>{s.cancel&&s.cancel.call(s.context,l),o.reject(l)};switch(e){case"value":Ja(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":dd(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":pd(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":hd(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":fd(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error(je("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return k("Query.limitToFirst",1,1,arguments.length),new De(this.database,_t(this._delegate,Tk(e)))}limitToLast(e){return k("Query.limitToLast",1,1,arguments.length),new De(this.database,_t(this._delegate,Ck(e)))}orderByChild(e){return k("Query.orderByChild",1,1,arguments.length),new De(this.database,_t(this._delegate,Nk(e)))}orderByKey(){return k("Query.orderByKey",0,0,arguments.length),new De(this.database,_t(this._delegate,kk()))}orderByPriority(){return k("Query.orderByPriority",0,0,arguments.length),new De(this.database,_t(this._delegate,Lk()))}orderByValue(){return k("Query.orderByValue",0,0,arguments.length),new De(this.database,_t(this._delegate,Mk()))}startAt(e=null,t){return k("Query.startAt",0,2,arguments.length),new De(this.database,_t(this._delegate,Ek(e,t)))}startAfter(e=null,t){return k("Query.startAfter",0,2,arguments.length),new De(this.database,_t(this._delegate,Ik(e,t)))}endAt(e=null,t){return k("Query.endAt",0,2,arguments.length),new De(this.database,_t(this._delegate,vk(e,t)))}endBefore(e=null,t){return k("Query.endBefore",0,2,arguments.length),new De(this.database,_t(this._delegate,wk(e,t)))}equalTo(e,t){return k("Query.equalTo",1,2,arguments.length),new De(this.database,_t(this._delegate,Uk(e,t)))}toString(){return k("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return k("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(k("Query.isEqual",1,1,arguments.length),!(e instanceof De)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,i){const r={cancel:void 0,context:void 0};if(t&&i)r.cancel=t,Ne(e,"cancel",r.cancel,!0),r.context=i,Zl(e,"context",r.context);else if(t)if(typeof t=="object"&&t!==null)r.context=t;else if(typeof t=="function")r.cancel=t;else throw new Error(je(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return r}get ref(){return new Xe(this.database,new ht(this._delegate._repo,this._delegate._path))}}class Xe extends De{constructor(e,t){super(e,new qe(t._repo,t._path,new go,!1)),this.database=e,this._delegate=t}getKey(){return k("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return k("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Xe(this.database,Mn(this._delegate,e))}getParent(){k("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Xe(this.database,e):null}getRoot(){return k("Reference.root",0,0,arguments.length),new Xe(this.database,this._delegate.root)}set(e,t){k("Reference.set",1,2,arguments.length),Ne("Reference.set","onComplete",t,!0);const i=bl(this._delegate,e);return t&&i.then(()=>t(null),r=>t(r)),i}update(e,t){if(k("Reference.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,b_("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ct("Reference.update",this._delegate._path),Ne("Reference.update","onComplete",t,!0);const i=mk(this._delegate,e);return t&&i.then(()=>t(null),r=>t(r)),i}setWithPriority(e,t,i){k("Reference.setWithPriority",2,3,arguments.length),Ne("Reference.setWithPriority","onComplete",i,!0);const r=_k(this._delegate,e,t);return i&&r.then(()=>i(null),s=>i(s)),r}remove(e){k("Reference.remove",0,1,arguments.length),Ne("Reference.remove","onComplete",e,!0);const t=fk(this._delegate);return e&&t.then(()=>e(null),i=>e(i)),t}transaction(e,t,i){k("Reference.transaction",1,3,arguments.length),Ne("Reference.transaction","transactionUpdate",e,!1),Ne("Reference.transaction","onComplete",t,!0),s0("Reference.transaction","applyLocally",i);const r=t0(this._delegate,e,{applyLocally:i}).then(s=>new c0(s.committed,new nn(this.database,s.snapshot)));return t&&r.then(s=>t(null,s.committed,s.snapshot),s=>t(s,!1,null)),r}setPriority(e,t){k("Reference.setPriority",1,2,arguments.length),Ne("Reference.setPriority","onComplete",t,!0);const i=pk(this._delegate,e);return t&&i.then(()=>t(null),r=>t(r)),i}push(e,t){k("Reference.push",0,2,arguments.length),Ne("Reference.push","onComplete",t,!0);const i=hk(this._delegate,e),r=i.then(o=>new Xe(this.database,o));t&&r.then(()=>t(null),o=>t(o));const s=new Xe(this.database,i);return s.then=r.then.bind(r),s.catch=r.catch.bind(r,void 0),s}onDisconnect(){return ct("Reference.onDisconnect",this._delegate._path),new a0(new dk(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class Sr{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:zk,forceLongPolling:jk}}useEmulator(e,t,i={}){Gk(this._delegate,e,t,i)}ref(e){if(k("database.ref",0,1,arguments.length),e instanceof Xe){const t=ud(this._delegate,e.toString());return new Xe(this,t)}else{const t=y_(this._delegate,e);return new Xe(this,t)}}refFromURL(e){k("database.refFromURL",1,1,arguments.length);const i=ud(this._delegate,e);return new Xe(this,i)}goOffline(){return k("database.goOffline",0,0,arguments.length),qk(this._delegate)}goOnline(){return k("database.goOnline",0,0,arguments.length),Kk(this._delegate)}}Sr.ServerValue={TIMESTAMP:Xk(),increment:n=>Zk(n)};function l0({app:n,url:e,version:t,customAuthImpl:i,customAppCheckImpl:r,namespace:s,nodeAdmin:o=!1}){op(t);const a=new vc("database-standalone"),c=new Ea("auth-internal",a);c.setComponent(new ut("auth-internal",()=>i,"PRIVATE"));let l;return r&&(l=new Ea("app-check-internal",a),l.setComponent(new ut("app-check-internal",()=>r,"PRIVATE"))),{instance:new Sr(S_(n,c,l,e,o),n),namespace:s}}var u0=Object.freeze({__proto__:null,initStandalone:l0});/**
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
 */const d0=Sr.ServerValue;function h0(n){n.INTERNAL.registerComponent(new ut("database-compat",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new Sr(r,i)},"PUBLIC").setServiceProps({Reference:Xe,Query:De,Database:Sr,DataSnapshot:nn,enableLogging:Yk,INTERNAL:u0,ServerValue:d0}).setMultipleInstances(!0)),n.registerVersion(n0,i0)}h0(Bt);const f0={apiKey:"AIzaSyBYTeM84x71LjRl3-a8TIOHX1tlyiy_5ik",authDomain:"stavehumle.firebaseapp.com",databaseURL:"https://stavehumle-default-rtdb.europe-west1.firebasedatabase.app",projectId:"stavehumle",storageBucket:"stavehumle.appspot.com",messagingSenderId:"852736381893",appId:"1:852736381893:web:be9b224f46ba1ed92871ac"};Bt.apps.length===0&&Bt.initializeApp(f0);const A0=()=>{const[n,e]=Fo.useState(()=>{var i;return((i=Bt.auth().currentUser)==null?void 0:i.uid)||""}),t=Fo.useCallback(i=>{e(i?i.uid:"")},[e]);return Fo.useEffect(()=>Bt.auth().onAuthStateChanged(t),[t]),{userId:n,path:n?`/users/${n}`:""}};export{_0 as R,A0 as a,m0 as b,g0 as c,w0 as d,v0 as e,Bt as f,y0 as g,E0 as i,NS as t,S0 as u};
