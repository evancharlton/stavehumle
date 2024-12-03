import{c as fe,R as D_}from"./index-BBXoJzDt.js";var _d={};function M_(n){const e=new Error(n);if(e.stack===void 0)try{throw e}catch{}return e}var x_=M_,$=x_;function U_(n){return!!n&&typeof n.then=="function"}var ce=U_;function F_(n,e){if(n!=null)return n;throw $(e??"Got unexpected null or undefined")}var de=F_;function V(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}class xs{getValue(){throw $("BaseLoadable")}toPromise(){throw $("BaseLoadable")}valueMaybe(){throw $("BaseLoadable")}valueOrThrow(){throw $(`Loadable expected value, but in "${this.state}" state`)}promiseMaybe(){throw $("BaseLoadable")}promiseOrThrow(){throw $(`Loadable expected promise, but in "${this.state}" state`)}errorMaybe(){throw $("BaseLoadable")}errorOrThrow(){throw $(`Loadable expected error, but in "${this.state}" state`)}is(e){return e.state===this.state&&e.contents===this.contents}map(e){throw $("BaseLoadable")}}class V_ extends xs{constructor(e){super(),V(this,"state","hasValue"),V(this,"contents",void 0),this.contents=e}getValue(){return this.contents}toPromise(){return Promise.resolve(this.contents)}valueMaybe(){return this.contents}valueOrThrow(){return this.contents}promiseMaybe(){}errorMaybe(){}map(e){try{const t=e(this.contents);return ce(t)?Rn(t):si(t)?t:Ir(t)}catch(t){return ce(t)?Rn(t.next(()=>this.map(e))):Us(t)}}}class $_ extends xs{constructor(e){super(),V(this,"state","hasError"),V(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return Promise.reject(this.contents)}valueMaybe(){}promiseMaybe(){}errorMaybe(){return this.contents}errorOrThrow(){return this.contents}map(e){return this}}class md extends xs{constructor(e){super(),V(this,"state","loading"),V(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return this.contents}valueMaybe(){}promiseMaybe(){return this.contents}promiseOrThrow(){return this.contents}errorMaybe(){}map(e){return Rn(this.contents.then(t=>{const i=e(t);if(si(i)){const r=i;switch(r.state){case"hasValue":return r.contents;case"hasError":throw r.contents;case"loading":return r.contents}}return i}).catch(t=>{if(ce(t))return t.then(()=>this.map(e).contents);throw t}))}}function Ir(n){return Object.freeze(new V_(n))}function Us(n){return Object.freeze(new $_(n))}function Rn(n){return Object.freeze(new md(n))}function gd(){return Object.freeze(new md(new Promise(()=>{})))}function B_(n){return n.every(e=>e.state==="hasValue")?Ir(n.map(e=>e.contents)):n.some(e=>e.state==="hasError")?Us(de(n.find(e=>e.state==="hasError"),"Invalid loadable passed to loadableAll").contents):Rn(Promise.all(n.map(e=>e.contents)))}function vd(n){const t=(Array.isArray(n)?n:Object.getOwnPropertyNames(n).map(r=>n[r])).map(r=>si(r)?r:ce(r)?Rn(r):Ir(r)),i=B_(t);return Array.isArray(n)?i:i.map(r=>Object.getOwnPropertyNames(n).reduce((s,o,a)=>({...s,[o]:r[a]}),{}))}function si(n){return n instanceof xs}const W_={of:n=>ce(n)?Rn(n):si(n)?n:Ir(n),error:n=>Us(n),loading:()=>gd(),all:vd,isLoadable:si};var xn={loadableWithValue:Ir,loadableWithError:Us,loadableWithPromise:Rn,loadableLoading:gd,loadableAll:vd,isLoadable:si,RecoilLoadable:W_},H_=xn.loadableWithValue,z_=xn.loadableWithError,j_=xn.loadableWithPromise,G_=xn.loadableLoading,q_=xn.loadableAll,K_=xn.isLoadable,Y_=xn.RecoilLoadable,br=Object.freeze({__proto__:null,loadableWithValue:H_,loadableWithError:z_,loadableWithPromise:j_,loadableLoading:G_,loadableAll:q_,isLoadable:K_,RecoilLoadable:Y_});const ua={RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED:!0,RECOIL_GKS_ENABLED:new Set(["recoil_hamt_2020","recoil_sync_external_store","recoil_suppress_rerender_in_callback","recoil_memory_managament_2020"])};function Q_(n,e){var t,i;const r=(t=_d[n])===null||t===void 0||(i=t.toLowerCase())===null||i===void 0?void 0:i.trim();if(r==null||r==="")return;if(!["true","false"].includes(r))throw $(`process.env.${n} value must be 'true', 'false', or empty: ${r}`);e(r==="true")}function J_(n,e){var t;const i=(t=_d[n])===null||t===void 0?void 0:t.trim();i==null||i===""||e(i.split(/\s*,\s*|\s+/))}function X_(){var n;typeof process>"u"||((n=process)===null||n===void 0?void 0:n.env)!=null&&(Q_("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED",e=>{ua.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=e}),J_("RECOIL_GKS_ENABLED",e=>{e.forEach(t=>{ua.RECOIL_GKS_ENABLED.add(t)})}))}X_();var yi=ua;function Fs(n){return yi.RECOIL_GKS_ENABLED.has(n)}Fs.setPass=n=>{yi.RECOIL_GKS_ENABLED.add(n)};Fs.setFail=n=>{yi.RECOIL_GKS_ENABLED.delete(n)};Fs.clear=()=>{yi.RECOIL_GKS_ENABLED.clear()};var re=Fs;function Z_(n,e,{error:t}={}){return null}var em=Z_,Xa=em,Fo,Vo,$o;const tm=(Fo=fe.createMutableSource)!==null&&Fo!==void 0?Fo:fe.unstable_createMutableSource,yd=(Vo=fe.useMutableSource)!==null&&Vo!==void 0?Vo:fe.unstable_useMutableSource,wd=($o=fe.useSyncExternalStore)!==null&&$o!==void 0?$o:fe.unstable_useSyncExternalStore;function nm(){var n;const{ReactCurrentDispatcher:e,ReactCurrentOwner:t}=fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;return((n=e==null?void 0:e.current)!==null&&n!==void 0?n:t.currentDispatcher).useSyncExternalStore!=null}function im(){return re("recoil_transition_support")?{mode:"TRANSITION_SUPPORT",early:!0,concurrent:!0}:re("recoil_sync_external_store")&&wd!=null?{mode:"SYNC_EXTERNAL_STORE",early:!0,concurrent:!1}:re("recoil_mutable_source")&&yd!=null&&typeof window<"u"&&!window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE?re("recoil_suppress_rerender_in_callback")?{mode:"MUTABLE_SOURCE",early:!0,concurrent:!0}:{mode:"MUTABLE_SOURCE",early:!1,concurrent:!1}:re("recoil_suppress_rerender_in_callback")?{mode:"LEGACY",early:!0,concurrent:!1}:{mode:"LEGACY",early:!1,concurrent:!1}}function rm(){return!1}var Tr={createMutableSource:tm,useMutableSource:yd,useSyncExternalStore:wd,currentRendererSupportsUseSyncExternalStore:nm,reactMode:im,isFastRefreshEnabled:rm};class Za{constructor(e){V(this,"key",void 0),this.key=e}toJSON(){return{key:this.key}}}class Ed extends Za{}class Sd extends Za{}function sm(n){return n instanceof Ed||n instanceof Sd}var Vs={AbstractRecoilValue:Za,RecoilState:Ed,RecoilValueReadOnly:Sd,isRecoilValue:sm},om=Vs.AbstractRecoilValue,am=Vs.RecoilState,cm=Vs.RecoilValueReadOnly,lm=Vs.isRecoilValue,oi=Object.freeze({__proto__:null,AbstractRecoilValue:om,RecoilState:am,RecoilValueReadOnly:cm,isRecoilValue:lm});function um(n,e){return function*(){let t=0;for(const i of n)yield e(i,t++)}()}var $s=um;class Id{}const dm=new Id,Cn=new Map,ec=new Map;function hm(n){return $s(n,e=>de(ec.get(e)))}function fm(n){if(Cn.has(n)){const e=`Duplicate atom key "${n}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;console.warn(e)}}function pm(n){yi.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED&&fm(n.key),Cn.set(n.key,n);const e=n.set==null?new oi.RecoilValueReadOnly(n.key):new oi.RecoilState(n.key);return ec.set(n.key,e),e}class bd extends Error{}function _m(n){const e=Cn.get(n);if(e==null)throw new bd(`Missing definition for RecoilValue: "${n}""`);return e}function mm(n){return Cn.get(n)}const cs=new Map;function gm(n){var e;if(!re("recoil_memory_managament_2020"))return;const t=Cn.get(n);if(t!=null&&(e=t.shouldDeleteConfigOnRelease)!==null&&e!==void 0&&e.call(t)){var i;Cn.delete(n),(i=Td(n))===null||i===void 0||i(),cs.delete(n)}}function vm(n,e){re("recoil_memory_managament_2020")&&(e===void 0?cs.delete(n):cs.set(n,e))}function Td(n){return cs.get(n)}var Ge={nodes:Cn,recoilValues:ec,registerNode:pm,getNode:_m,getNodeMaybe:mm,deleteNodeConfigIfPossible:gm,setConfigDeletionHandler:vm,getConfigDeletionHandler:Td,recoilValuesForKeys:hm,NodeMissingError:bd,DefaultValue:Id,DEFAULT_VALUE:dm};function ym(n,e){e()}var wm={enqueueExecution:ym};function Em(n,e){return e={exports:{}},n(e,e.exports),e.exports}var Sm=Em(function(n){var e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},t={},i=5,r=Math.pow(2,i),s=r-1,o=r/2,a=r/4,c={},l=function(f){return function(){return f}},d=t.hash=function(p){var f=typeof p>"u"?"undefined":e(p);if(f==="number")return p;f!=="string"&&(p+="");for(var y=0,b=0,T=p.length;b<T;++b){var R=p.charCodeAt(b);y=(y<<5)-y+R|0}return y},u=function(f){return f-=f>>1&1431655765,f=(f&858993459)+(f>>2&858993459),f=f+(f>>4)&252645135,f+=f>>8,f+=f>>16,f&127},h=function(f,y){return y>>>f&s},m=function(f){return 1<<f},g=function(f,y){return u(f&y-1)},E=function(f,y,b,T){var R=T;if(!f){var D=T.length;R=new Array(D);for(var O=0;O<D;++O)R[O]=T[O]}return R[y]=b,R},M=function(f,y,b){var T=b.length-1,R=0,D=0,O=b;if(f)R=D=y;else for(O=new Array(T);R<y;)O[D++]=b[R++];for(++R;R<=T;)O[D++]=b[R++];return f&&(O.length=T),O},Z=function(f,y,b,T){var R=T.length;if(f){for(var D=R;D>=y;)T[D--]=T[D];return T[y]=b,T}for(var O=0,L=0,H=new Array(R+1);O<y;)H[L++]=T[O++];for(H[y]=b;O<R;)H[++L]=T[O++];return H},A=1,U=2,ne=3,Y=4,ee={__hamt_isEmpty:!0},se=function(f){return f===ee||f&&f.__hamt_isEmpty},xe=function(f,y,b,T){return{type:A,edit:f,hash:y,key:b,value:T,_modify:jn}},Ke=function(f,y,b){return{type:U,edit:f,hash:y,children:b,_modify:Gn}},ge=function(f,y,b){return{type:ne,edit:f,mask:y,children:b,_modify:q}},nt=function(f,y,b){return{type:Y,edit:f,size:y,children:b,_modify:Q}},zn=function(f){return f===ee||f.type===A||f.type===U},ve=function(f,y,b,T,R){for(var D=[],O=T,L=0,H=0;O;++H)O&1&&(D[H]=R[L++]),O>>>=1;return D[y]=b,nt(f,L+1,D)},Ye=function(f,y,b,T){for(var R=new Array(y-1),D=0,O=0,L=0,H=T.length;L<H;++L)if(L!==b){var ue=T[L];ue&&!se(ue)&&(R[D++]=ue,O|=1<<L)}return ge(f,O,R)},mn=function p(f,y,b,T,R,D){if(b===R)return Ke(f,b,[D,T]);var O=h(y,b),L=h(y,R);return ge(f,m(O)|m(L),O===L?[p(f,y+i,b,T,R,D)]:O<L?[T,D]:[D,T])},it=function(f,y,b,T,R,D,O,L){for(var H=R.length,ue=0;ue<H;++ue){var Ve=R[ue];if(b(O,Ve.key)){var Ce=Ve.value,st=D(Ce);return st===Ce?R:st===c?(--L.value,M(f,ue,R)):E(f,ue,xe(y,T,O,st),R)}}var pt=D();return pt===c?R:(++L.value,E(f,H,xe(y,T,O,pt),R))},Lt=function(f,y){return f===y.edit},jn=function(f,y,b,T,R,D,O){if(y(D,this.key)){var L=T(this.value);return L===this.value?this:L===c?(--O.value,ee):Lt(f,this)?(this.value=L,this):xe(f,R,D,L)}var H=T();return H===c?this:(++O.value,mn(f,b,this.hash,this,R,xe(f,R,D,H)))},Gn=function(f,y,b,T,R,D,O){if(R===this.hash){var L=Lt(f,this),H=it(L,f,y,this.hash,this.children,T,D,O);return H===this.children?this:H.length>1?Ke(f,this.hash,H):H[0]}var ue=T();return ue===c?this:(++O.value,mn(f,b,this.hash,this,R,xe(f,R,D,ue)))},q=function(f,y,b,T,R,D,O){var L=this.mask,H=this.children,ue=h(b,R),Ve=m(ue),Ce=g(L,Ve),st=L&Ve,pt=st?H[Ce]:ee,qn=pt._modify(f,y,b+i,T,R,D,O);if(pt===qn)return this;var Kr=Lt(f,this),ki=L,Pi=void 0;if(st&&se(qn)){if(ki&=~Ve,!ki)return ee;if(H.length<=2&&zn(H[Ce^1]))return H[Ce^1];Pi=M(Kr,Ce,H)}else if(!st&&!se(qn)){if(H.length>=o)return ve(f,ue,qn,L,H);ki|=Ve,Pi=Z(Kr,Ce,qn,H)}else Pi=E(Kr,Ce,qn,H);return Kr?(this.mask=ki,this.children=Pi,this):ge(f,ki,Pi)},Q=function(f,y,b,T,R,D,O){var L=this.size,H=this.children,ue=h(b,R),Ve=H[ue],Ce=(Ve||ee)._modify(f,y,b+i,T,R,D,O);if(Ve===Ce)return this;var st=Lt(f,this),pt=void 0;if(se(Ve)&&!se(Ce))++L,pt=E(st,ue,Ce,H);else if(!se(Ve)&&se(Ce)){if(--L,L<=a)return Ye(f,L,ue,H);pt=E(st,ue,ee,H)}else pt=E(st,ue,Ce,H);return st?(this.size=L,this.children=pt,this):nt(f,L,pt)};ee._modify=function(p,f,y,b,T,R,D){var O=b();return O===c?ee:(++D.value,xe(p,T,R,O))};function _(p,f,y,b,T){this._editable=p,this._edit=f,this._config=y,this._root=b,this._size=T}_.prototype.setTree=function(p,f){return this._editable?(this._root=p,this._size=f,this):p===this._root?this:new _(this._editable,this._edit,this._config,p,f)};var S=t.tryGetHash=function(p,f,y,b){for(var T=b._root,R=0,D=b._config.keyEq;;)switch(T.type){case A:return D(y,T.key)?T.value:p;case U:{if(f===T.hash)for(var O=T.children,L=0,H=O.length;L<H;++L){var ue=O[L];if(D(y,ue.key))return ue.value}return p}case ne:{var Ve=h(R,f),Ce=m(Ve);if(T.mask&Ce){T=T.children[g(T.mask,Ce)],R+=i;break}return p}case Y:{if(T=T.children[h(R,f)],T){R+=i;break}return p}default:return p}};_.prototype.tryGetHash=function(p,f,y){return S(p,f,y,this)};var I=t.tryGet=function(p,f,y){return S(p,y._config.hash(f),f,y)};_.prototype.tryGet=function(p,f){return I(p,f,this)};var F=t.getHash=function(p,f,y){return S(void 0,p,f,y)};_.prototype.getHash=function(p,f){return F(p,f,this)},t.get=function(p,f){return S(void 0,f._config.hash(p),p,f)},_.prototype.get=function(p,f){return I(f,p,this)};var C=t.has=function(p,f,y){return S(c,p,f,y)!==c};_.prototype.hasHash=function(p,f){return C(p,f,this)};var G=t.has=function(p,f){return C(f._config.hash(p),p,f)};_.prototype.has=function(p){return G(p,this)};var j=function(f,y){return f===y};t.make=function(p){return new _(0,0,{keyEq:p&&p.keyEq||j,hash:p&&p.hash||d},ee,0)},t.empty=t.make();var N=t.isEmpty=function(p){return p&&!!se(p._root)};_.prototype.isEmpty=function(){return N(this)};var le=t.modifyHash=function(p,f,y,b){var T={value:b._size},R=b._root._modify(b._editable?b._edit:NaN,b._config.keyEq,0,p,f,y,T);return b.setTree(R,T.value)};_.prototype.modifyHash=function(p,f,y){return le(y,p,f,this)};var Ie=t.modify=function(p,f,y){return le(p,y._config.hash(f),f,y)};_.prototype.modify=function(p,f){return Ie(f,p,this)};var te=t.setHash=function(p,f,y,b){return le(l(y),p,f,b)};_.prototype.setHash=function(p,f,y){return te(p,f,y,this)};var pe=t.set=function(p,f,y){return te(y._config.hash(p),p,f,y)};_.prototype.set=function(p,f){return pe(p,f,this)};var ft=l(c),gn=t.removeHash=function(p,f,y){return le(ft,p,f,y)};_.prototype.removeHash=_.prototype.deleteHash=function(p,f){return gn(p,f,this)};var rt=t.remove=function(p,f){return gn(f._config.hash(p),p,f)};_.prototype.remove=_.prototype.delete=function(p){return rt(p,this)};var Qe=t.beginMutation=function(p){return new _(p._editable+1,p._edit+1,p._config,p._root,p._size)};_.prototype.beginMutation=function(){return Qe(this)};var bl=t.endMutation=function(p){return p._editable=p._editable&&p._editable-1,p};_.prototype.endMutation=function(){return bl(this)};var b_=t.mutate=function(p,f){var y=Qe(f);return p(y),bl(y)};_.prototype.mutate=function(p){return b_(p,this)};var Mo=function(f){return f&&Tl(f[0],f[1],f[2],f[3],f[4])},Tl=function(f,y,b,T,R){for(;b<f;){var D=y[b++];if(D&&!se(D))return Rl(D,T,[f,y,b,T,R])}return Mo(R)},Rl=function(f,y,b){switch(f.type){case A:return{value:y(f),rest:b};case U:case Y:case ne:var T=f.children;return Tl(T.length,T,0,y,b);default:return Mo(b)}},T_={done:!0};function xo(p){this.v=p}xo.prototype.next=function(){if(!this.v)return T_;var p=this.v;return this.v=Mo(p.rest),p},xo.prototype[Symbol.iterator]=function(){return this};var Uo=function(f,y){return new xo(Rl(f._root,y))},R_=function(f){return[f.key,f.value]},C_=t.entries=function(p){return Uo(p,R_)};_.prototype.entries=_.prototype[Symbol.iterator]=function(){return C_(this)};var A_=function(f){return f.key},N_=t.keys=function(p){return Uo(p,A_)};_.prototype.keys=function(){return N_(this)};var k_=function(f){return f.value},P_=t.values=_.prototype.values=function(p){return Uo(p,k_)};_.prototype.values=function(){return P_(this)};var Cl=t.fold=function(p,f,y){var b=y._root;if(b.type===A)return p(f,b.value,b.key);for(var T=[b.children],R=void 0;R=T.pop();)for(var D=0,O=R.length;D<O;){var L=R[D++];L&&L.type&&(L.type===A?f=p(f,L.value,L.key):T.push(L.children))}return f};_.prototype.fold=function(p,f){return Cl(p,f,this)};var O_=t.forEach=function(p,f){return Cl(function(y,b,T){return p(b,T,f)},null,f)};_.prototype.forEach=function(p){return O_(p,this)};var L_=t.count=function(p){return p._size};_.prototype.count=function(){return L_(this)},Object.defineProperty(_.prototype,"size",{get:_.prototype.count}),n.exports?n.exports=t:(void 0).hamt=t});class Im{constructor(e){V(this,"_map",void 0),this._map=new Map(e==null?void 0:e.entries())}keys(){return this._map.keys()}entries(){return this._map.entries()}get(e){return this._map.get(e)}has(e){return this._map.has(e)}set(e,t){return this._map.set(e,t),this}delete(e){return this._map.delete(e),this}clone(){return nc(this)}toMap(){return new Map(this._map)}}class tc{constructor(e){if(V(this,"_hamt",Sm.empty.beginMutation()),e instanceof tc){const t=e._hamt.endMutation();e._hamt=t.beginMutation(),this._hamt=t.beginMutation()}else if(e)for(const[t,i]of e.entries())this._hamt.set(t,i)}keys(){return this._hamt.keys()}entries(){return this._hamt.entries()}get(e){return this._hamt.get(e)}has(e){return this._hamt.has(e)}set(e,t){return this._hamt.set(e,t),this}delete(e){return this._hamt.delete(e),this}clone(){return nc(this)}toMap(){return new Map(this._hamt)}}function nc(n){return re("recoil_hamt_2020")?new tc(n):new Im(n)}var bm={persistentMap:nc},Tm=bm.persistentMap,Rm=Object.freeze({__proto__:null,persistentMap:Tm});function Cm(n,...e){const t=new Set;e:for(const i of n){for(const r of e)if(r.has(i))continue e;t.add(i)}return t}var Ki=Cm;function Am(n,e){const t=new Map;return n.forEach((i,r)=>{t.set(r,e(i,r))}),t}var ls=Am;function Nm(){return{nodeDeps:new Map,nodeToNodeSubscriptions:new Map}}function km(n){return{nodeDeps:ls(n.nodeDeps,e=>new Set(e)),nodeToNodeSubscriptions:ls(n.nodeToNodeSubscriptions,e=>new Set(e))}}function Bo(n,e,t,i){const{nodeDeps:r,nodeToNodeSubscriptions:s}=t,o=r.get(n);if(o&&i&&o!==i.nodeDeps.get(n))return;r.set(n,e);const a=o==null?e:Ki(e,o);for(const c of a)s.has(c)||s.set(c,new Set),de(s.get(c)).add(n);if(o){const c=Ki(o,e);for(const l of c){if(!s.has(l))return;const d=de(s.get(l));d.delete(n),d.size===0&&s.delete(l)}}}function Pm(n,e,t,i){var r,s,o,a;const c=t.getState();i===c.currentTree.version||i===((r=c.nextTree)===null||r===void 0?void 0:r.version)||((s=c.previousTree)===null||s===void 0||s.version);const l=t.getGraph(i);if(Bo(n,e,l),i===((o=c.previousTree)===null||o===void 0?void 0:o.version)){const u=t.getGraph(c.currentTree.version);Bo(n,e,u,l)}if(i===((a=c.previousTree)===null||a===void 0?void 0:a.version)||i===c.currentTree.version){var d;const u=(d=c.nextTree)===null||d===void 0?void 0:d.version;if(u!==void 0){const h=t.getGraph(u);Bo(n,e,h,l)}}}var Rr={cloneGraph:km,graph:Nm,saveDepsToStore:Pm};let Om=0;const Lm=()=>Om++;let Dm=0;const Mm=()=>Dm++;let xm=0;const Um=()=>xm++;var Bs={getNextTreeStateVersion:Lm,getNextStoreID:Mm,getNextComponentID:Um};const{persistentMap:Al}=Rm,{graph:Fm}=Rr,{getNextTreeStateVersion:Rd}=Bs;function Cd(){const n=Rd();return{version:n,stateID:n,transactionMetadata:{},dirtyAtoms:new Set,atomValues:Al(),nonvalidatedAtoms:Al()}}function Vm(){const n=Cd();return{currentTree:n,nextTree:null,previousTree:null,commitDepth:0,knownAtoms:new Set,knownSelectors:new Set,transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(n.version,Fm()),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map}}var Ad={makeEmptyTreeState:Cd,makeEmptyStoreState:Vm,getNextTreeStateVersion:Rd};class Nd{}function $m(){return new Nd}var Ws={RetentionZone:Nd,retentionZone:$m};function Bm(n,e){const t=new Set(n);return t.add(e),t}function Wm(n,e){const t=new Set(n);return t.delete(e),t}function Hm(n,e,t){const i=new Map(n);return i.set(e,t),i}function zm(n,e,t){const i=new Map(n);return i.set(e,t(i.get(e))),i}function jm(n,e){const t=new Map(n);return t.delete(e),t}function Gm(n,e){const t=new Map(n);return e.forEach(i=>t.delete(i)),t}var kd={setByAddingToSet:Bm,setByDeletingFromSet:Wm,mapBySettingInMap:Hm,mapByUpdatingInMap:zm,mapByDeletingFromMap:jm,mapByDeletingMultipleFromMap:Gm};function*qm(n,e){let t=0;for(const i of n)e(i,t++)&&(yield i)}var ic=qm;function Km(n,e){return new Proxy(n,{get:(i,r)=>(!(r in i)&&r in e&&(i[r]=e[r]()),i[r]),ownKeys:i=>Object.keys(i)})}var Pd=Km;const{getNode:Cr,getNodeMaybe:Ym,recoilValuesForKeys:Nl}=Ge,{RetentionZone:kl}=Ws,{setByAddingToSet:Qm}=kd,Jm=Object.freeze(new Set);class Xm extends Error{}function Zm(n,e,t){if(!re("recoil_memory_managament_2020"))return()=>{};const{nodesRetainedByZone:i}=n.getState().retention;function r(s){let o=i.get(s);o||i.set(s,o=new Set),o.add(e)}if(t instanceof kl)r(t);else if(Array.isArray(t))for(const s of t)r(s);return()=>{if(!re("recoil_memory_managament_2020"))return;const{retention:s}=n.getState();function o(a){const c=s.nodesRetainedByZone.get(a);c==null||c.delete(e),c&&c.size===0&&s.nodesRetainedByZone.delete(a)}if(t instanceof kl)o(t);else if(Array.isArray(t))for(const a of t)o(a)}}function rc(n,e,t,i){const r=n.getState();if(r.nodeCleanupFunctions.has(t))return;const s=Cr(t),o=Zm(n,t,s.retainedBy),a=s.init(n,e,i);r.nodeCleanupFunctions.set(t,()=>{a(),o()})}function eg(n,e,t){rc(n,n.getState().currentTree,e,t)}function tg(n,e){var t;const i=n.getState();(t=i.nodeCleanupFunctions.get(e))===null||t===void 0||t(),i.nodeCleanupFunctions.delete(e)}function ng(n,e,t){return rc(n,e,t,"get"),Cr(t).get(n,e)}function Od(n,e,t){return Cr(t).peek(n,e)}function ig(n,e,t){var i;const r=Ym(e);return r==null||(i=r.invalidate)===null||i===void 0||i.call(r,n),{...n,atomValues:n.atomValues.clone().delete(e),nonvalidatedAtoms:n.nonvalidatedAtoms.clone().set(e,t),dirtyAtoms:Qm(n.dirtyAtoms,e)}}function rg(n,e,t,i){const r=Cr(t);if(r.set==null)throw new Xm(`Attempt to set read-only RecoilValue: ${t}`);const s=r.set;return rc(n,e,t,"set"),s(n,e,i)}function sg(n,e,t){const i=n.getState(),r=n.getGraph(e.version),s=Cr(t).nodeType;return Pd({type:s},{loadable:()=>Od(n,e,t),isActive:()=>i.knownAtoms.has(t)||i.knownSelectors.has(t),isSet:()=>s==="selector"?!1:e.atomValues.has(t),isModified:()=>e.dirtyAtoms.has(t),deps:()=>{var o;return Nl((o=r.nodeDeps.get(t))!==null&&o!==void 0?o:[])},subscribers:()=>{var o,a;return{nodes:Nl(ic(Ld(n,e,new Set([t])),c=>c!==t)),components:$s((o=(a=i.nodeToComponentSubscriptions.get(t))===null||a===void 0?void 0:a.values())!==null&&o!==void 0?o:[],([c])=>({name:c}))}}})}function Ld(n,e,t){const i=new Set,r=Array.from(t),s=n.getGraph(e.version);for(let a=r.pop();a;a=r.pop()){var o;i.add(a);const c=(o=s.nodeToNodeSubscriptions.get(a))!==null&&o!==void 0?o:Jm;for(const l of c)i.has(l)||r.push(l)}return i}var dn={getNodeLoadable:ng,peekNodeLoadable:Od,setNodeValue:rg,initializeNode:eg,cleanUpNode:tg,setUnvalidatedAtomValue_DEPRECATED:ig,peekNodeInfo:sg,getDownstreamNodes:Ld};let Dd=null;function og(n){Dd=n}function ag(){var n;(n=Dd)===null||n===void 0||n()}var Md={setInvalidateMemoizedSnapshot:og,invalidateMemoizedSnapshot:ag};const{getDownstreamNodes:cg,getNodeLoadable:xd,setNodeValue:lg}=dn,{getNextComponentID:ug}=Bs,{getNode:dg,getNodeMaybe:Ud}=Ge,{DefaultValue:sc}=Ge,{reactMode:hg}=Tr,{AbstractRecoilValue:fg,RecoilState:pg,RecoilValueReadOnly:_g,isRecoilValue:mg}=oi,{invalidateMemoizedSnapshot:gg}=Md;function vg(n,{key:e},t=n.getState().currentTree){var i,r;const s=n.getState();t.version===s.currentTree.version||t.version===((i=s.nextTree)===null||i===void 0?void 0:i.version)||(t.version,(r=s.previousTree)===null||r===void 0||r.version);const o=xd(n,t,e);return o.state==="loading"&&o.contents.catch(()=>{}),o}function yg(n,e){const t=n.clone();return e.forEach((i,r)=>{i.state==="hasValue"&&i.contents instanceof sc?t.delete(r):t.set(r,i)}),t}function wg(n,e,{key:t},i){if(typeof i=="function"){const r=xd(n,e,t);if(r.state==="loading"){const s=`Tried to set atom or selector "${t}" using an updater function while the current state is pending, this is not currently supported.`;throw $(s)}else if(r.state==="hasError")throw r.contents;return i(r.contents)}else return i}function Eg(n,e,t){if(t.type==="set"){const{recoilValue:r,valueOrUpdater:s}=t,o=wg(n,e,r,s),a=lg(n,e,r.key,o);for(const[c,l]of a.entries())da(e,c,l)}else if(t.type==="setLoadable"){const{recoilValue:{key:r},loadable:s}=t;da(e,r,s)}else if(t.type==="markModified"){const{recoilValue:{key:r}}=t;e.dirtyAtoms.add(r)}else if(t.type==="setUnvalidated"){var i;const{recoilValue:{key:r},unvalidatedValue:s}=t,o=Ud(r);o==null||(i=o.invalidate)===null||i===void 0||i.call(o,e),e.atomValues.delete(r),e.nonvalidatedAtoms.set(r,s),e.dirtyAtoms.add(r)}else Xa(`Unknown action ${t.type}`)}function da(n,e,t){t.state==="hasValue"&&t.contents instanceof sc?n.atomValues.delete(e):n.atomValues.set(e,t),n.dirtyAtoms.add(e),n.nonvalidatedAtoms.delete(e)}function Fd(n,e){n.replaceState(t=>{const i=Vd(t);for(const r of e)Eg(n,i,r);return $d(n,i),gg(),i})}function Hs(n,e){if(Yi.length){const t=Yi[Yi.length-1];let i=t.get(n);i||t.set(n,i=[]),i.push(e)}else Fd(n,[e])}const Yi=[];function Sg(){const n=new Map;return Yi.push(n),()=>{for(const[e,t]of n)Fd(e,t);Yi.pop()}}function Vd(n){return{...n,atomValues:n.atomValues.clone(),nonvalidatedAtoms:n.nonvalidatedAtoms.clone(),dirtyAtoms:new Set(n.dirtyAtoms)}}function $d(n,e){const t=cg(n,e,e.dirtyAtoms);for(const s of t){var i,r;(i=Ud(s))===null||i===void 0||(r=i.invalidate)===null||r===void 0||r.call(i,e)}}function Bd(n,e,t){Hs(n,{type:"set",recoilValue:e,valueOrUpdater:t})}function Ig(n,e,t){if(t instanceof sc)return Bd(n,e,t);Hs(n,{type:"setLoadable",recoilValue:e,loadable:t})}function bg(n,e){Hs(n,{type:"markModified",recoilValue:e})}function Tg(n,e,t){Hs(n,{type:"setUnvalidated",recoilValue:e,unvalidatedValue:t})}function Rg(n,{key:e},t,i=null){const r=ug(),s=n.getState();s.nodeToComponentSubscriptions.has(e)||s.nodeToComponentSubscriptions.set(e,new Map),de(s.nodeToComponentSubscriptions.get(e)).set(r,[i??"<not captured>",t]);const o=hg();if(o.early&&(o.mode==="LEGACY"||o.mode==="MUTABLE_SOURCE")){const a=n.getState().nextTree;a&&a.dirtyAtoms.has(e)&&t(a)}return{release:()=>{const a=n.getState(),c=a.nodeToComponentSubscriptions.get(e);c===void 0||!c.has(r)||(c.delete(r),c.size===0&&a.nodeToComponentSubscriptions.delete(e))}}}function Cg(n,e){var t;const{currentTree:i}=n.getState(),r=dg(e.key);(t=r.clearCache)===null||t===void 0||t.call(r,n,i)}var Pt={RecoilValueReadOnly:_g,AbstractRecoilValue:fg,RecoilState:pg,getRecoilValueAsLoadable:vg,setRecoilValue:Bd,setRecoilValueLoadable:Ig,markRecoilValueModified:bg,setUnvalidatedRecoilValue:Tg,subscribeToRecoilValue:Rg,isRecoilValue:mg,applyAtomValueWrites:yg,batchStart:Sg,writeLoadableToTreeState:da,invalidateDownstreams:$d,copyTreeState:Vd,refreshRecoilValue:Cg};function Ag(n,e,t){const i=n.entries();let r=i.next();for(;!r.done;){const s=r.value;if(e.call(t,s[1],s[0],n))return!0;r=i.next()}return!1}var Ng=Ag;const{cleanUpNode:kg}=dn,{deleteNodeConfigIfPossible:Pg,getNode:Wd}=Ge,{RetentionZone:Hd}=Ws,Og=12e4,zd=new Set;function jd(n,e){const t=n.getState(),i=t.currentTree;if(t.nextTree)return;const r=new Set;for(const o of e)if(o instanceof Hd)for(const a of xg(t,o))r.add(a);else r.add(o);const s=Lg(n,r);for(const o of s)Mg(n,i,o)}function Lg(n,e){const t=n.getState(),i=t.currentTree,r=n.getGraph(i.version),s=new Set,o=new Set;return a(e),s;function a(c){const l=new Set,d=Dg(n,i,c,s,o);for(const g of d){var u;if(Wd(g).retainedBy==="recoilRoot"){o.add(g);continue}if(((u=t.retention.referenceCounts.get(g))!==null&&u!==void 0?u:0)>0){o.add(g);continue}if(Gd(g).some(M=>t.retention.referenceCounts.get(M))){o.add(g);continue}const E=r.nodeToNodeSubscriptions.get(g);if(E&&Ng(E,M=>o.has(M))){o.add(g);continue}s.add(g),l.add(g)}const h=new Set;for(const g of l)for(const E of(m=r.nodeDeps.get(g))!==null&&m!==void 0?m:zd){var m;s.has(E)||h.add(E)}h.size&&a(h)}}function Dg(n,e,t,i,r){const s=n.getGraph(e.version),o=[],a=new Set;for(;t.size>0;)c(de(t.values().next().value));return o;function c(l){if(i.has(l)||r.has(l)){t.delete(l);return}if(a.has(l))return;const d=s.nodeToNodeSubscriptions.get(l);if(d)for(const u of d)c(u);a.add(l),t.delete(l),o.push(l)}}function Mg(n,e,t){if(!re("recoil_memory_managament_2020"))return;kg(n,t);const i=n.getState();i.knownAtoms.delete(t),i.knownSelectors.delete(t),i.nodeTransactionSubscriptions.delete(t),i.retention.referenceCounts.delete(t);const r=Gd(t);for(const c of r){var s;(s=i.retention.nodesRetainedByZone.get(c))===null||s===void 0||s.delete(t)}e.atomValues.delete(t),e.dirtyAtoms.delete(t),e.nonvalidatedAtoms.delete(t);const o=i.graphsByVersion.get(e.version);if(o){const c=o.nodeDeps.get(t);if(c!==void 0){o.nodeDeps.delete(t);for(const l of c){var a;(a=o.nodeToNodeSubscriptions.get(l))===null||a===void 0||a.delete(t)}}o.nodeToNodeSubscriptions.delete(t)}Pg(t)}function xg(n,e){var t;return(t=n.retention.nodesRetainedByZone.get(e))!==null&&t!==void 0?t:zd}function Gd(n){const e=Wd(n).retainedBy;return e===void 0||e==="components"||e==="recoilRoot"?[]:e instanceof Hd?[e]:e}function Ug(n,e){const t=n.getState();t.nextTree?t.retention.retainablesToCheckForRelease.add(e):jd(n,new Set([e]))}function Fg(n,e,t){var i;if(!re("recoil_memory_managament_2020"))return;const r=n.getState().retention.referenceCounts,s=((i=r.get(e))!==null&&i!==void 0?i:0)+t;s===0?qd(n,e):r.set(e,s)}function qd(n,e){if(!re("recoil_memory_managament_2020"))return;n.getState().retention.referenceCounts.delete(e),Ug(n,e)}function Vg(n){if(!re("recoil_memory_managament_2020"))return;const e=n.getState();jd(n,e.retention.retainablesToCheckForRelease),e.retention.retainablesToCheckForRelease.clear()}function $g(n){return n===void 0?"recoilRoot":n}var Un={SUSPENSE_TIMEOUT_MS:Og,updateRetainCount:Fg,updateRetainCountToZero:qd,releaseScheduledRetainablesNow:Vg,retainedByOptionWithDefault:$g};const{unstable_batchedUpdates:Bg}=D_;var Wg={unstable_batchedUpdates:Bg};const{unstable_batchedUpdates:Hg}=Wg;var zg={unstable_batchedUpdates:Hg};const{batchStart:jg}=Pt,{unstable_batchedUpdates:Gg}=zg;let oc=Gg||(n=>n());const qg=n=>{oc=n},Kg=()=>oc,Yg=n=>{oc(()=>{let e=()=>{};try{e=jg(),n()}finally{e()}})};var zs={getBatcher:Kg,setBatcher:qg,batchUpdates:Yg};function*Qg(n){for(const e of n)for(const t of e)yield t}var Kd=Qg;const Yd=typeof Window>"u"||typeof window>"u",Jg=n=>!Yd&&(n===window||n instanceof Window),Xg=typeof navigator<"u"&&navigator.product==="ReactNative";var js={isSSR:Yd,isReactNative:Xg,isWindow:Jg};function Zg(n,e){let t;return(...i)=>{t||(t={});const r=e(...i);return Object.hasOwnProperty.call(t,r)||(t[r]=n(...i)),t[r]}}function ev(n,e){let t,i;return(...r)=>{const s=e(...r);return t===s||(t=s,i=n(...r)),i}}function tv(n,e){let t,i;return[(...o)=>{const a=e(...o);return t===a||(t=a,i=n(...o)),i},()=>{t=null}]}var nv={memoizeWithArgsHash:Zg,memoizeOneWithArgsHash:ev,memoizeOneWithArgsHashAndInvalidation:tv};const{batchUpdates:ha}=zs,{initializeNode:iv,peekNodeInfo:rv}=dn,{graph:sv}=Rr,{getNextStoreID:ov}=Bs,{DEFAULT_VALUE:av,recoilValues:Pl,recoilValuesForKeys:Ol}=Ge,{AbstractRecoilValue:cv,getRecoilValueAsLoadable:lv,setRecoilValue:Ll,setUnvalidatedRecoilValue:uv}=Pt,{updateRetainCount:is}=Un,{setInvalidateMemoizedSnapshot:dv}=Md,{getNextTreeStateVersion:hv,makeEmptyStoreState:fv}=Ad,{isSSR:pv}=js,{memoizeOneWithArgsHashAndInvalidation:_v}=nv;class Gs{constructor(e,t){V(this,"_store",void 0),V(this,"_refCount",1),V(this,"getLoadable",i=>(this.checkRefCount_INTERNAL(),lv(this._store,i))),V(this,"getPromise",i=>(this.checkRefCount_INTERNAL(),this.getLoadable(i).toPromise())),V(this,"getNodes_UNSTABLE",i=>{if(this.checkRefCount_INTERNAL(),(i==null?void 0:i.isModified)===!0){if((i==null?void 0:i.isInitialized)===!1)return[];const o=this._store.getState().currentTree;return Ol(o.dirtyAtoms)}const r=this._store.getState().knownAtoms,s=this._store.getState().knownSelectors;return(i==null?void 0:i.isInitialized)==null?Pl.values():i.isInitialized===!0?Ol(Kd([r,s])):ic(Pl.values(),({key:o})=>!r.has(o)&&!s.has(o))}),V(this,"getInfo_UNSTABLE",({key:i})=>(this.checkRefCount_INTERNAL(),rv(this._store,this._store.getState().currentTree,i))),V(this,"map",i=>{this.checkRefCount_INTERNAL();const r=new fa(this,ha);return i(r),r}),V(this,"asyncMap",async i=>{this.checkRefCount_INTERNAL();const r=new fa(this,ha);return r.retain(),await i(r),r.autoRelease_INTERNAL(),r}),this._store={storeID:ov(),parentStoreID:t,getState:()=>e,replaceState:i=>{e.currentTree=i(e.currentTree)},getGraph:i=>{const r=e.graphsByVersion;if(r.has(i))return de(r.get(i));const s=sv();return r.set(i,s),s},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw $("Cannot subscribe to Snapshots")}};for(const i of this._store.getState().knownAtoms)iv(this._store,i,"get"),is(this._store,i,1);this.autoRelease_INTERNAL()}retain(){this._refCount<=0,this._refCount++;let e=!1;return()=>{e||(e=!0,this._release())}}autoRelease_INTERNAL(){pv||window.setTimeout(()=>this._release(),10)}_release(){if(this._refCount--,this._refCount===0){if(this._store.getState().nodeCleanupFunctions.forEach(e=>e()),this._store.getState().nodeCleanupFunctions.clear(),!re("recoil_memory_managament_2020"))return}else this._refCount<0}isRetained(){return this._refCount>0}checkRefCount_INTERNAL(){re("recoil_memory_managament_2020")&&this._refCount<=0}getStore_INTERNAL(){return this.checkRefCount_INTERNAL(),this._store}getID(){return this.checkRefCount_INTERNAL(),this._store.getState().currentTree.stateID}getStoreID(){return this.checkRefCount_INTERNAL(),this._store.storeID}}function Qd(n,e,t=!1){const i=n.getState(),r=t?hv():e.version;return{currentTree:{version:t?r:e.version,stateID:t?r:e.stateID,transactionMetadata:{...e.transactionMetadata},dirtyAtoms:new Set(e.dirtyAtoms),atomValues:e.atomValues.clone(),nonvalidatedAtoms:e.nonvalidatedAtoms.clone()},commitDepth:0,nextTree:null,previousTree:null,knownAtoms:new Set(i.knownAtoms),knownSelectors:new Set(i.knownSelectors),transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(r,n.getGraph(e.version)),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map($s(i.nodeCleanupFunctions.entries(),([s])=>[s,()=>{}]))}}function mv(n){const e=new Gs(fv());return n!=null?e.map(n):e}const[Dl,Jd]=_v((n,e)=>{var t;const i=n.getState(),r=e==="latest"?(t=i.nextTree)!==null&&t!==void 0?t:i.currentTree:de(i.previousTree);return new Gs(Qd(n,r),n.storeID)},(n,e)=>{var t,i;return String(e)+String(n.storeID)+String((t=n.getState().nextTree)===null||t===void 0?void 0:t.version)+String(n.getState().currentTree.version)+String((i=n.getState().previousTree)===null||i===void 0?void 0:i.version)});dv(Jd);function gv(n,e="latest"){const t=Dl(n,e);return t.isRetained()?t:(Jd(),Dl(n,e))}class fa extends Gs{constructor(e,t){super(Qd(e.getStore_INTERNAL(),e.getStore_INTERNAL().getState().currentTree,!0),e.getStoreID()),V(this,"_batch",void 0),V(this,"set",(i,r)=>{this.checkRefCount_INTERNAL();const s=this.getStore_INTERNAL();this._batch(()=>{is(s,i.key,1),Ll(this.getStore_INTERNAL(),i,r)})}),V(this,"reset",i=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();this._batch(()=>{is(r,i.key,1),Ll(this.getStore_INTERNAL(),i,av)})}),V(this,"setUnvalidatedAtomValues_DEPRECATED",i=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();ha(()=>{for(const[s,o]of i.entries())is(r,s,1),uv(r,new cv(s),o)})}),this._batch=t}}var qs={Snapshot:Gs,MutableSnapshot:fa,freshSnapshot:mv,cloneSnapshot:gv},vv=qs.Snapshot,yv=qs.MutableSnapshot,wv=qs.freshSnapshot,Ev=qs.cloneSnapshot,Ks=Object.freeze({__proto__:null,Snapshot:vv,MutableSnapshot:yv,freshSnapshot:wv,cloneSnapshot:Ev});function Sv(...n){const e=new Set;for(const t of n)for(const i of t)e.add(i);return e}var Iv=Sv;const{useRef:bv}=fe;function Tv(n){const e=bv(n);return e.current===n&&typeof n=="function"&&(e.current=n()),e}var Ml=Tv;const{getNextTreeStateVersion:Rv,makeEmptyStoreState:Xd}=Ad,{cleanUpNode:Cv,getDownstreamNodes:Av,initializeNode:Nv,setNodeValue:kv,setUnvalidatedAtomValue_DEPRECATED:Pv}=dn,{graph:Ov}=Rr,{cloneGraph:Lv}=Rr,{getNextStoreID:Zd}=Bs,{createMutableSource:Wo,reactMode:eh}=Tr,{applyAtomValueWrites:Dv}=Pt,{releaseScheduledRetainablesNow:th}=Un,{freshSnapshot:Mv}=Ks,{useCallback:xv,useContext:nh,useEffect:pa,useMemo:Uv,useRef:Fv,useState:Vv}=fe;function Oi(){throw $("This component must be used inside a <RecoilRoot> component.")}const ih=Object.freeze({storeID:Zd(),getState:Oi,replaceState:Oi,getGraph:Oi,subscribeToTransactions:Oi,addTransactionMetadata:Oi});let _a=!1;function xl(n){if(_a)throw $("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");const e=n.getState();if(e.nextTree===null){re("recoil_memory_managament_2020")&&re("recoil_release_on_cascading_update_killswitch_2021")&&e.commitDepth>0&&th(n);const t=e.currentTree.version,i=Rv();e.nextTree={...e.currentTree,version:i,stateID:i,dirtyAtoms:new Set,transactionMetadata:{}},e.graphsByVersion.set(i,Lv(de(e.graphsByVersion.get(t))))}}const rh=fe.createContext({current:ih}),Ys=()=>nh(rh),sh=fe.createContext(null);function $v(){return nh(sh)}function ac(n,e,t){const i=Av(n,t,t.dirtyAtoms);for(const r of i){const s=e.nodeToComponentSubscriptions.get(r);if(s)for(const[o,[a,c]]of s)c(t)}}function oh(n){const e=n.getState(),t=e.currentTree,i=t.dirtyAtoms;if(i.size){for(const[r,s]of e.nodeTransactionSubscriptions)if(i.has(r))for(const[o,a]of s)a(n);for(const[r,s]of e.transactionSubscriptions)s(n);(!eh().early||e.suspendedComponentResolvers.size>0)&&(ac(n,e,t),e.suspendedComponentResolvers.forEach(r=>r()),e.suspendedComponentResolvers.clear())}e.queuedComponentCallbacks_DEPRECATED.forEach(r=>r(t)),e.queuedComponentCallbacks_DEPRECATED.splice(0,e.queuedComponentCallbacks_DEPRECATED.length)}function Bv(n){const e=n.getState();e.commitDepth++;try{const{nextTree:t}=e;if(t==null)return;e.previousTree=e.currentTree,e.currentTree=t,e.nextTree=null,oh(n),e.previousTree!=null?e.graphsByVersion.delete(e.previousTree.version):Xa("Ended batch with no previous state, which is unexpected","recoil"),e.previousTree=null,re("recoil_memory_managament_2020")&&t==null&&th(n)}finally{e.commitDepth--}}function Wv({setNotifyBatcherOfChange:n}){const e=Ys(),[,t]=Vv([]);return n(()=>t({})),pa(()=>(n(()=>t({})),()=>{n(()=>{})}),[n]),pa(()=>{wm.enqueueExecution("Batcher",()=>{Bv(e.current)})}),null}function Hv(n,e){const t=Xd();return e({set:(i,r)=>{const s=t.currentTree,o=kv(n,s,i.key,r),a=new Set(o.keys()),c=s.nonvalidatedAtoms.clone();for(const l of a)c.delete(l);t.currentTree={...s,dirtyAtoms:Iv(s.dirtyAtoms,a),atomValues:Dv(s.atomValues,o),nonvalidatedAtoms:c}},setUnvalidatedAtomValues:i=>{i.forEach((r,s)=>{t.currentTree=Pv(t.currentTree,s,r)})}}),t}function zv(n){const e=Mv(n),t=e.getStore_INTERNAL().getState();return e.retain(),t.nodeCleanupFunctions.forEach(i=>i()),t.nodeCleanupFunctions.clear(),t}let Ul=0;function jv({initializeState_DEPRECATED:n,initializeState:e,store_INTERNAL:t,children:i}){let r;const s=m=>{const g=r.current.graphsByVersion;if(g.has(m))return de(g.get(m));const E=Ov();return g.set(m,E),E},o=(m,g)=>{if(g==null){const{transactionSubscriptions:E}=u.current.getState(),M=Ul++;return E.set(M,m),{release:()=>{E.delete(M)}}}else{const{nodeTransactionSubscriptions:E}=u.current.getState();E.has(g)||E.set(g,new Map);const M=Ul++;return de(E.get(g)).set(M,m),{release:()=>{const Z=E.get(g);Z&&(Z.delete(M),Z.size===0&&E.delete(g))}}}},a=m=>{xl(u.current);for(const g of Object.keys(m))de(u.current.getState().nextTree).transactionMetadata[g]=m[g]},c=m=>{xl(u.current);const g=de(r.current.nextTree);let E;try{_a=!0,E=m(g)}finally{_a=!1}E!==g&&(r.current.nextTree=E,eh().early&&ac(u.current,r.current,E),de(l.current)())},l=Fv(null),d=xv(m=>{l.current=m},[l]),u=Ml(()=>t??{storeID:Zd(),getState:()=>r.current,replaceState:c,getGraph:s,subscribeToTransactions:o,addTransactionMetadata:a});t!=null&&(u.current=t),r=Ml(()=>n!=null?Hv(u.current,n):e!=null?zv(e):Xd());const h=Uv(()=>Wo==null?void 0:Wo(r,()=>r.current.currentTree.version),[r]);return pa(()=>{const m=u.current;for(const g of new Set(m.getState().knownAtoms))Nv(m,g,"get");return()=>{for(const g of m.getState().knownAtoms)Cv(m,g)}},[u]),fe.createElement(rh.Provider,{value:u},fe.createElement(sh.Provider,{value:h},fe.createElement(Wv,{setNotifyBatcherOfChange:d}),i))}function Gv(n){const{override:e,...t}=n,i=Ys();return e===!1&&i.current!==ih?n.children:fe.createElement(jv,t)}function qv(){return Ys().current.storeID}var Ht={RecoilRoot:Gv,useStoreRef:Ys,useRecoilMutableSource:$v,useRecoilStoreID:qv,notifyComponents_FOR_TESTING:ac,sendEndOfBatchNotifications_FOR_TESTING:oh};function Kv(n,e){if(n===e)return!0;if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}var Yv=Kv;const{useEffect:Qv,useRef:Jv}=fe;function Xv(n){const e=Jv();return Qv(()=>{e.current=n}),e.current}var ah=Xv;const{useStoreRef:Zv}=Ht,{SUSPENSE_TIMEOUT_MS:ey}=Un,{updateRetainCount:Li}=Un,{RetentionZone:ty}=Ws,{useEffect:ny,useRef:iy}=fe,{isSSR:Fl}=js;function ry(n){if(re("recoil_memory_managament_2020"))return sy(n)}function sy(n){const t=(Array.isArray(n)?n:[n]).map(o=>o instanceof ty?o:o.key),i=Zv();ny(()=>{if(!re("recoil_memory_managament_2020"))return;const o=i.current;if(r.current&&!Fl)window.clearTimeout(r.current),r.current=null;else for(const a of t)Li(o,a,1);return()=>{for(const a of t)Li(o,a,-1)}},[i,...t]);const r=iy(),s=ah(t);if(!Fl&&(s===void 0||!Yv(s,t))){const o=i.current;for(const a of t)Li(o,a,1);if(s)for(const a of s)Li(o,a,-1);r.current&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{r.current=null;for(const a of t)Li(o,a,-1)},ey)}}var cc=ry;function oy(){return"<component name not available>"}var Ar=oy;const{batchUpdates:ay}=zs,{DEFAULT_VALUE:ch}=Ge,{currentRendererSupportsUseSyncExternalStore:cy,reactMode:wi,useMutableSource:ly,useSyncExternalStore:uy}=Tr,{useRecoilMutableSource:dy,useStoreRef:Ot}=Ht,{AbstractRecoilValue:ma,getRecoilValueAsLoadable:Nr,setRecoilValue:us,setUnvalidatedRecoilValue:hy,subscribeToRecoilValue:ai}=Pt,{useCallback:He,useEffect:ci,useMemo:lh,useRef:Qi,useState:lc}=fe,{setByAddingToSet:fy}=kd,{isSSR:py}=js;function uc(n,e,t){if(n.state==="hasValue")return n.contents;throw n.state==="loading"?new Promise(r=>{const s=t.current.getState().suspendedComponentResolvers;s.add(r),py&&ce(n.contents)&&n.contents.finally(()=>{s.delete(r)})}):n.state==="hasError"?n.contents:$(`Invalid value of loadable atom "${e.key}"`)}function _y(){const n=Ar(),e=Ot(),[,t]=lc([]),i=Qi(new Set);i.current=new Set;const r=Qi(new Set),s=Qi(new Map),o=He(c=>{const l=s.current.get(c);l&&(l.release(),s.current.delete(c))},[s]),a=He((c,l)=>{s.current.has(l)&&t([])},[]);return ci(()=>{const c=e.current;Ki(i.current,r.current).forEach(l=>{if(s.current.has(l))return;const d=ai(c,new ma(l),h=>a(h,l),n);s.current.set(l,d),c.getState().nextTree?c.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{a(c.getState(),l)}):a(c.getState(),l)}),Ki(r.current,i.current).forEach(l=>{o(l)}),r.current=i.current}),ci(()=>{const c=s.current;return Ki(i.current,new Set(c.keys())).forEach(l=>{const d=ai(e.current,new ma(l),u=>a(u,l),n);c.set(l,d)}),()=>c.forEach((l,d)=>o(d))},[n,e,o,a]),lh(()=>{function c(g){return E=>{us(e.current,g,E)}}function l(g){return()=>us(e.current,g,ch)}function d(g){var E;i.current.has(g.key)||(i.current=fy(i.current,g.key));const M=e.current.getState();return Nr(e.current,g,wi().early&&(E=M.nextTree)!==null&&E!==void 0?E:M.currentTree)}function u(g){const E=d(g);return uc(E,g,e)}function h(g){return[u(g),c(g)]}function m(g){return[d(g),c(g)]}return{getRecoilValue:u,getRecoilValueLoadable:d,getRecoilState:h,getRecoilStateLoadable:m,getSetRecoilState:c,getResetRecoilState:l}},[i,e])}const my={current:0};function gy(n){const e=Ot(),t=Ar(),i=He(()=>{var a;const c=e.current,l=c.getState(),d=wi().early&&(a=l.nextTree)!==null&&a!==void 0?a:l.currentTree;return{loadable:Nr(c,n,d),key:n.key}},[e,n]),r=He(a=>{let c;return()=>{var l,d;const u=a();return(l=c)!==null&&l!==void 0&&l.loadable.is(u.loadable)&&((d=c)===null||d===void 0?void 0:d.key)===u.key?c:(c=u,u)}},[]),s=lh(()=>r(i),[i,r]),o=He(a=>{const c=e.current;return ai(c,n,a,t).release},[e,n,t]);return uy(o,s,s).loadable}function vy(n){const e=Ot(),t=He(()=>{var l;const d=e.current,u=d.getState(),h=wi().early&&(l=u.nextTree)!==null&&l!==void 0?l:u.currentTree;return Nr(d,n,h)},[e,n]),i=He(()=>t(),[t]),r=Ar(),s=He((l,d)=>{const u=e.current;return ai(u,n,()=>{if(!re("recoil_suppress_rerender_in_callback"))return d();const m=t();c.current.is(m)||d(),c.current=m},r).release},[e,n,r,t]),o=dy();if(o==null)throw $("Recoil hooks must be used in components contained within a <RecoilRoot> component.");const a=ly(o,i,s),c=Qi(a);return ci(()=>{c.current=a}),a}function ga(n){const e=Ot(),t=Ar(),i=He(()=>{var c;const l=e.current,d=l.getState(),u=wi().early&&(c=d.nextTree)!==null&&c!==void 0?c:d.currentTree;return Nr(l,n,u)},[e,n]),r=He(()=>({loadable:i(),key:n.key}),[i,n.key]),s=He(c=>{const l=r();return c.loadable.is(l.loadable)&&c.key===l.key?c:l},[r]);ci(()=>{const c=ai(e.current,n,l=>{a(s)},t);return a(s),c.release},[t,n,e,s]);const[o,a]=lc(r);return o.key!==n.key?r().loadable:o.loadable}function yy(n){const e=Ot(),[,t]=lc([]),i=Ar(),r=He(()=>{var a;const c=e.current,l=c.getState(),d=wi().early&&(a=l.nextTree)!==null&&a!==void 0?a:l.currentTree;return Nr(c,n,d)},[e,n]),s=r(),o=Qi(s);return ci(()=>{o.current=s}),ci(()=>{const a=e.current,c=a.getState(),l=ai(a,n,u=>{var h;if(!re("recoil_suppress_rerender_in_callback"))return t([]);const m=r();(h=o.current)!==null&&h!==void 0&&h.is(m)||t(m),o.current=m},i);if(c.nextTree)a.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{o.current=null,t([])});else{var d;if(!re("recoil_suppress_rerender_in_callback"))return t([]);const u=r();(d=o.current)!==null&&d!==void 0&&d.is(u)||t(u),o.current=u}return l.release},[i,r,n,e]),s}function dc(n){return re("recoil_memory_managament_2020")&&cc(n),{TRANSITION_SUPPORT:ga,SYNC_EXTERNAL_STORE:cy()?gy:ga,MUTABLE_SOURCE:vy,LEGACY:yy}[wi().mode](n)}function uh(n){const e=Ot(),t=dc(n);return uc(t,n,e)}function Qs(n){const e=Ot();return He(t=>{us(e.current,n,t)},[e,n])}function wy(n){const e=Ot();return He(()=>{us(e.current,n,ch)},[e,n])}function Ey(n){return[uh(n),Qs(n)]}function Sy(n){return[dc(n),Qs(n)]}function Iy(){const n=Ot();return(e,t={})=>{ay(()=>{n.current.addTransactionMetadata(t),e.forEach((i,r)=>hy(n.current,new ma(r),i))})}}function dh(n){return re("recoil_memory_managament_2020")&&cc(n),ga(n)}function hh(n){const e=Ot(),t=dh(n);return uc(t,n,e)}function by(n){return[hh(n),Qs(n)]}var Ty={recoilComponentGetRecoilValueCount_FOR_TESTING:my,useRecoilInterface:_y,useRecoilState:Ey,useRecoilStateLoadable:Sy,useRecoilValue:uh,useRecoilValueLoadable:dc,useResetRecoilState:wy,useSetRecoilState:Qs,useSetUnvalidatedAtomValues:Iy,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:dh,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:hh,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:by};function Ry(n,e){const t=new Map;for(const[i,r]of n)e(r,i)&&t.set(i,r);return t}var Cy=Ry;function Ay(n,e){const t=new Set;for(const i of n)e(i)&&t.add(i);return t}var Ny=Ay;function ky(...n){const e=new Map;for(let t=0;t<n.length;t++){const i=n[t].keys();let r;for(;!(r=i.next()).done;)e.set(r.value,n[t].get(r.value))}return e}var Py=ky;const{batchUpdates:Oy}=zs,{DEFAULT_VALUE:Ly,getNode:fh,nodes:Dy}=Ge,{useStoreRef:hc}=Ht,{AbstractRecoilValue:My,setRecoilValueLoadable:xy}=Pt,{SUSPENSE_TIMEOUT_MS:Uy}=Un,{cloneSnapshot:ds}=Ks,{useCallback:Js,useEffect:ph,useRef:Vl,useState:Fy}=fe,{isSSR:$l}=js;function Xs(n){const e=hc();ph(()=>e.current.subscribeToTransactions(n).release,[n,e])}function Bl(n){const e=n.atomValues.toMap(),t=ls(Cy(e,(i,r)=>{const o=fh(r).persistence_UNSTABLE;return o!=null&&o.type!=="none"&&i.state==="hasValue"}),i=>i.contents);return Py(n.nonvalidatedAtoms.toMap(),t)}function Vy(n){Xs(Js(e=>{let t=e.getState().previousTree;const i=e.getState().currentTree;t||(t=e.getState().currentTree);const r=Bl(i),s=Bl(t),o=ls(Dy,c=>{var l,d,u,h;return{persistence_UNSTABLE:{type:(l=(d=c.persistence_UNSTABLE)===null||d===void 0?void 0:d.type)!==null&&l!==void 0?l:"none",backButton:(u=(h=c.persistence_UNSTABLE)===null||h===void 0?void 0:h.backButton)!==null&&u!==void 0?u:!1}}}),a=Ny(i.dirtyAtoms,c=>r.has(c)||s.has(c));n({atomValues:r,previousAtomValues:s,atomInfo:o,modifiedAtoms:a,transactionMetadata:{...i.transactionMetadata}})},[n]))}function $y(n){Xs(Js(e=>{const t=ds(e,"latest"),i=ds(e,"previous");n({snapshot:t,previousSnapshot:i})},[n]))}function By(){const n=hc(),[e,t]=Fy(()=>ds(n.current)),i=ah(e),r=Vl(),s=Vl();if(Xs(Js(a=>t(ds(a)),[])),ph(()=>{const a=e.retain();if(r.current&&!$l){var c;window.clearTimeout(r.current),r.current=null,(c=s.current)===null||c===void 0||c.call(s),s.current=null}return()=>{window.setTimeout(a,10)}},[e]),i!==e&&!$l){if(r.current){var o;window.clearTimeout(r.current),r.current=null,(o=s.current)===null||o===void 0||o.call(s),s.current=null}s.current=e.retain(),r.current=window.setTimeout(()=>{var a;r.current=null,(a=s.current)===null||a===void 0||a.call(s),s.current=null},Uy)}return e}function _h(n,e){var t;const i=n.getState(),r=(t=i.nextTree)!==null&&t!==void 0?t:i.currentTree,s=e.getStore_INTERNAL().getState().currentTree;Oy(()=>{const o=new Set;for(const l of[r.atomValues.keys(),s.atomValues.keys()])for(const d of l){var a,c;((a=r.atomValues.get(d))===null||a===void 0?void 0:a.contents)!==((c=s.atomValues.get(d))===null||c===void 0?void 0:c.contents)&&fh(d).shouldRestoreFromSnapshots&&o.add(d)}o.forEach(l=>{xy(n,new My(l),s.atomValues.has(l)?de(s.atomValues.get(l)):Ly)}),n.replaceState(l=>({...l,stateID:e.getID()}))})}function Wy(){const n=hc();return Js(e=>_h(n.current,e),[n])}var mh={useRecoilSnapshot:By,gotoSnapshot:_h,useGotoRecoilSnapshot:Wy,useRecoilTransactionObserver:$y,useTransactionObservation_DEPRECATED:Vy,useTransactionSubscription_DEPRECATED:Xs};const{peekNodeInfo:Hy}=dn,{useStoreRef:zy}=Ht;function jy(){const n=zy();return({key:e})=>Hy(n.current,n.current.getState().currentTree,e)}var Gy=jy;const{reactMode:qy}=Tr,{RecoilRoot:Ky,useStoreRef:Yy}=Ht,{useMemo:Qy}=fe;function Jy(){qy().mode==="MUTABLE_SOURCE"&&console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");const n=Yy().current;return Qy(()=>{function e({children:t}){return fe.createElement(Ky,{store_INTERNAL:n},t)}return e},[n])}var Xy=Jy;const{loadableWithValue:Zy}=br,{initializeNode:ew}=dn,{DEFAULT_VALUE:tw,getNode:nw}=Ge,{copyTreeState:iw,getRecoilValueAsLoadable:rw,invalidateDownstreams:sw,writeLoadableToTreeState:ow}=Pt;function Wl(n){return nw(n.key).nodeType==="atom"}class aw{constructor(e,t){V(this,"_store",void 0),V(this,"_treeState",void 0),V(this,"_changes",void 0),V(this,"get",i=>{if(this._changes.has(i.key))return this._changes.get(i.key);if(!Wl(i))throw $("Reading selectors within atomicUpdate is not supported");const r=rw(this._store,i,this._treeState);if(r.state==="hasValue")return r.contents;throw r.state==="hasError"?r.contents:$(`Expected Recoil atom ${i.key} to have a value, but it is in a loading state.`)}),V(this,"set",(i,r)=>{if(!Wl(i))throw $("Setting selectors within atomicUpdate is not supported");if(typeof r=="function"){const s=this.get(i);this._changes.set(i.key,r(s))}else ew(this._store,i.key,"set"),this._changes.set(i.key,r)}),V(this,"reset",i=>{this.set(i,tw)}),this._store=e,this._treeState=t,this._changes=new Map}newTreeState_INTERNAL(){if(this._changes.size===0)return this._treeState;const e=iw(this._treeState);for(const[t,i]of this._changes)ow(e,t,Zy(i));return sw(this._store,e),e}}function cw(n){return e=>{n.replaceState(t=>{const i=new aw(n,t);return e(i),i.newTreeState_INTERNAL()})}}var lw={atomicUpdater:cw},uw=lw.atomicUpdater,gh=Object.freeze({__proto__:null,atomicUpdater:uw});function dw(n,e){if(!n)throw new Error(e)}var hw=dw,ji=hw;const{atomicUpdater:fw}=gh,{batchUpdates:pw}=zs,{DEFAULT_VALUE:_w}=Ge,{useStoreRef:mw}=Ht,{refreshRecoilValue:gw,setRecoilValue:Hl}=Pt,{cloneSnapshot:vw}=Ks,{gotoSnapshot:yw}=mh,{useCallback:ww}=fe;class vh{}const Ew=new vh;function yh(n,e,t,i){let r=Ew,s;if(pw(()=>{const a="useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";if(typeof e!="function")throw $(a);const c=Pd({...i??{},set:(d,u)=>Hl(n,d,u),reset:d=>Hl(n,d,_w),refresh:d=>gw(n,d),gotoSnapshot:d=>yw(n,d),transact_UNSTABLE:d=>fw(n)(d)},{snapshot:()=>{const d=vw(n);return s=d.retain(),d}}),l=e(c);if(typeof l!="function")throw $(a);r=l(...t)}),r instanceof vh&&ji(!1),ce(r))r=r.finally(()=>{var a;(a=s)===null||a===void 0||a()});else{var o;(o=s)===null||o===void 0||o()}return r}function Sw(n,e){const t=mw();return ww((...i)=>yh(t.current,n,i),e!=null?[...e,t]:void 0)}var wh={recoilCallback:yh,useRecoilCallback:Sw};const{useStoreRef:Iw}=Ht,{refreshRecoilValue:bw}=Pt,{useCallback:Tw}=fe;function Rw(n){const e=Iw();return Tw(()=>{const t=e.current;bw(t,n)},[n,e])}var Cw=Rw;const{atomicUpdater:Aw}=gh,{useStoreRef:Nw}=Ht,{useMemo:kw}=fe;function Pw(n,e){const t=Nw();return kw(()=>(...i)=>{Aw(t.current)(s=>{n(s)(...i)})},e!=null?[...e,t]:void 0)}var Ow=Pw;class Lw{constructor(e){V(this,"value",void 0),this.value=e}}var Dw={WrappedValue:Lw},Mw=Dw.WrappedValue,Eh=Object.freeze({__proto__:null,WrappedValue:Mw});const{isFastRefreshEnabled:xw}=Tr;class zl extends Error{}class Uw{constructor(e){var t,i,r;V(this,"_name",void 0),V(this,"_numLeafs",void 0),V(this,"_root",void 0),V(this,"_onHit",void 0),V(this,"_onSet",void 0),V(this,"_mapNodeValue",void 0),this._name=e==null?void 0:e.name,this._numLeafs=0,this._root=null,this._onHit=(t=e==null?void 0:e.onHit)!==null&&t!==void 0?t:()=>{},this._onSet=(i=e==null?void 0:e.onSet)!==null&&i!==void 0?i:()=>{},this._mapNodeValue=(r=e==null?void 0:e.mapNodeValue)!==null&&r!==void 0?r:s=>s}size(){return this._numLeafs}root(){return this._root}get(e,t){var i;return(i=this.getLeafNode(e,t))===null||i===void 0?void 0:i.value}getLeafNode(e,t){if(this._root==null)return;let i=this._root;for(;i;){if(t==null||t.onNodeVisit(i),i.type==="leaf")return this._onHit(i),i;const r=this._mapNodeValue(e(i.nodeKey));i=i.branches.get(r)}}set(e,t,i){const r=()=>{var s,o,a,c;let l,d;for(const[M,Z]of e){var u,h,m;const A=this._root;if((A==null?void 0:A.type)==="leaf")throw this.invalidCacheError();const U=l;if(l=U?U.branches.get(d):A,l=(u=l)!==null&&u!==void 0?u:{type:"branch",nodeKey:M,parent:U,branches:new Map,branchKey:d},l.type!=="branch"||l.nodeKey!==M)throw this.invalidCacheError();U==null||U.branches.set(d,l),i==null||(h=i.onNodeVisit)===null||h===void 0||h.call(i,l),d=this._mapNodeValue(Z),this._root=(m=this._root)!==null&&m!==void 0?m:l}const g=l?(s=l)===null||s===void 0?void 0:s.branches.get(d):this._root;if(g!=null&&(g.type!=="leaf"||g.branchKey!==d))throw this.invalidCacheError();const E={type:"leaf",value:t,parent:l,branchKey:d};(o=l)===null||o===void 0||o.branches.set(d,E),this._root=(a=this._root)!==null&&a!==void 0?a:E,this._numLeafs++,this._onSet(E),i==null||(c=i.onNodeVisit)===null||c===void 0||c.call(i,E)};try{r()}catch(s){if(s instanceof zl)this.clear(),r();else throw s}}delete(e){const t=this.root();if(!t)return!1;if(e===t)return this._root=null,this._numLeafs=0,!0;let i=e.parent,r=e.branchKey;for(;i;){var s;if(i.branches.delete(r),i===t)return i.branches.size===0?(this._root=null,this._numLeafs=0):this._numLeafs--,!0;if(i.branches.size>0)break;r=(s=i)===null||s===void 0?void 0:s.branchKey,i=i.parent}for(;i!==t;i=i.parent)if(i==null)return!1;return this._numLeafs--,!0}clear(){this._numLeafs=0,this._root=null}invalidCacheError(){const e=xw()?"Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.":"Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";throw Xa(e+(this._name!=null?` - ${this._name}`:"")),new zl}}var Fw={TreeCache:Uw},Vw=Fw.TreeCache,Sh=Object.freeze({__proto__:null,TreeCache:Vw});class $w{constructor(e){var t;V(this,"_maxSize",void 0),V(this,"_size",void 0),V(this,"_head",void 0),V(this,"_tail",void 0),V(this,"_map",void 0),V(this,"_keyMapper",void 0),this._maxSize=e.maxSize,this._size=0,this._head=null,this._tail=null,this._map=new Map,this._keyMapper=(t=e.mapKey)!==null&&t!==void 0?t:i=>i}head(){return this._head}tail(){return this._tail}size(){return this._size}maxSize(){return this._maxSize}has(e){return this._map.has(this._keyMapper(e))}get(e){const t=this._keyMapper(e),i=this._map.get(t);if(i)return this.set(e,i.value),i.value}set(e,t){const i=this._keyMapper(e);this._map.get(i)&&this.delete(e);const s=this.head(),o={key:e,right:s,left:null,value:t};s?s.left=o:this._tail=o,this._map.set(i,o),this._head=o,this._size++,this._maybeDeleteLRU()}_maybeDeleteLRU(){this.size()>this.maxSize()&&this.deleteLru()}deleteLru(){const e=this.tail();e&&this.delete(e.key)}delete(e){const t=this._keyMapper(e);if(!this._size||!this._map.has(t))return;const i=de(this._map.get(t)),r=i.right,s=i.left;r&&(r.left=i.left),s&&(s.right=i.right),i===this.head()&&(this._head=r),i===this.tail()&&(this._tail=s),this._map.delete(t),this._size--}clear(){this._size=0,this._head=null,this._tail=null,this._map=new Map}}var Bw={LRUCache:$w},Ww=Bw.LRUCache,Ih=Object.freeze({__proto__:null,LRUCache:Ww});const{LRUCache:Hw}=Ih,{TreeCache:zw}=Sh;function jw({name:n,maxSize:e,mapNodeValue:t=i=>i}){const i=new Hw({maxSize:e}),r=new zw({name:n,mapNodeValue:t,onHit:s=>{i.set(s,!0)},onSet:s=>{const o=i.tail();i.set(s,!0),o&&r.size()>e&&r.delete(o.key)}});return r}var jl=jw;function mt(n,e,t){if(typeof n=="string"&&!n.includes('"')&&!n.includes("\\"))return`"${n}"`;switch(typeof n){case"undefined":return"";case"boolean":return n?"true":"false";case"number":case"symbol":return String(n);case"string":return JSON.stringify(n);case"function":if((e==null?void 0:e.allowFunctions)!==!0)throw $("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${n.name})__`}if(n===null)return"null";if(typeof n!="object"){var i;return(i=JSON.stringify(n))!==null&&i!==void 0?i:""}if(ce(n))return"__PROMISE__";if(Array.isArray(n))return`[${n.map((r,s)=>mt(r,e,s.toString()))}]`;if(typeof n.toJSON=="function")return mt(n.toJSON(t),e,t);if(n instanceof Map){const r={};for(const[s,o]of n)r[typeof s=="string"?s:mt(s,e)]=o;return mt(r,e,t)}return n instanceof Set?mt(Array.from(n).sort((r,s)=>mt(r,e).localeCompare(mt(s,e))),e,t):Symbol!==void 0&&n[Symbol.iterator]!=null&&typeof n[Symbol.iterator]=="function"?mt(Array.from(n),e,t):`{${Object.keys(n).filter(r=>n[r]!==void 0).sort().map(r=>`${mt(r,e)}:${mt(n[r],e,r)}`).join(",")}}`}function Gw(n,e={allowFunctions:!1}){return mt(n,e)}var Zs=Gw;const{TreeCache:qw}=Sh,Yr={equality:"reference",eviction:"keep-all",maxSize:1/0};function Kw({equality:n=Yr.equality,eviction:e=Yr.eviction,maxSize:t=Yr.maxSize}=Yr,i){const r=Yw(n);return Qw(e,t,r,i)}function Yw(n){switch(n){case"reference":return e=>e;case"value":return e=>Zs(e)}throw $(`Unrecognized equality policy ${n}`)}function Qw(n,e,t,i){switch(n){case"keep-all":return new qw({name:i,mapNodeValue:t});case"lru":return jl({name:i,maxSize:de(e),mapNodeValue:t});case"most-recent":return jl({name:i,maxSize:1,mapNodeValue:t})}throw $(`Unrecognized eviction policy ${n}`)}var Jw=Kw;function Xw(n){return()=>null}var Zw={startPerfBlock:Xw};const{isLoadable:eE,loadableWithError:Qr,loadableWithPromise:tE,loadableWithValue:Ho}=br,{WrappedValue:bh}=Eh,{getNodeLoadable:Jr,peekNodeLoadable:nE,setNodeValue:iE}=dn,{saveDepsToStore:rE}=Rr,{DEFAULT_VALUE:sE,getConfigDeletionHandler:oE,getNode:aE,registerNode:Gl}=Ge,{isRecoilValue:cE}=oi,{markRecoilValueModified:ql}=Pt,{retainedByOptionWithDefault:lE}=Un,{recoilCallback:uE}=wh,{startPerfBlock:dE}=Zw;class Th{}const Di=new Th,Mi=[],Xr=new Map,hE=(()=>{let n=0;return()=>n++})();function Rh(n){let e=null;const{key:t,get:i,cachePolicy_UNSTABLE:r}=n,s=n.set!=null?n.set:void 0,o=new Set,a=Jw(r??{equality:"reference",eviction:"keep-all"},t),c=lE(n.retainedBy_UNSTABLE),l=new Map;let d=0;function u(){return!re("recoil_memory_managament_2020")||d>0}function h(_){return _.getState().knownSelectors.add(t),d++,()=>{d--}}function m(){return oE(t)!==void 0&&!u()}function g(_,S,I,F,C){it(S,F,C),E(_,I)}function E(_,S){Ye(_,S)&&ve(_),Z(S,!0)}function M(_,S){Ye(_,S)&&(de(ge(_)).stateVersions.clear(),Z(S,!1))}function Z(_,S){const I=Xr.get(_);if(I!=null){for(const F of I)ql(F,de(e));S&&Xr.delete(_)}}function A(_,S){let I=Xr.get(S);I==null&&Xr.set(S,I=new Set),I.add(_)}function U(_,S,I,F,C,G){return S.then(j=>{if(!u())throw ve(_),Di;const N=Ho(j);return g(_,I,C,N,F),j}).catch(j=>{if(!u())throw ve(_),Di;if(ce(j))return ne(_,j,I,F,C,G);const N=Qr(j);throw g(_,I,C,N,F),j})}function ne(_,S,I,F,C,G){return S.then(j=>{if(!u())throw ve(_),Di;G.loadingDepKey!=null&&G.loadingDepPromise===S?I.atomValues.set(G.loadingDepKey,Ho(j)):_.getState().knownSelectors.forEach(te=>{I.atomValues.delete(te)});const N=se(_,I);if(N&&N.state!=="loading"){if((Ye(_,C)||ge(_)==null)&&E(_,C),N.state==="hasValue")return N.contents;throw N.contents}if(!Ye(_,C)){const te=Ke(_,I);if(te!=null)return te.loadingLoadable.contents}const[le,Ie]=ee(_,I,C);if(le.state!=="loading"&&g(_,I,C,le,Ie),le.state==="hasError")throw le.contents;return le.contents}).catch(j=>{if(j instanceof Th)throw Di;if(!u())throw ve(_),Di;const N=Qr(j);throw g(_,I,C,N,F),j})}function Y(_,S,I,F){var C,G,j,N;if(Ye(_,F)||S.version===((C=_.getState())===null||C===void 0||(G=C.currentTree)===null||G===void 0?void 0:G.version)||S.version===((j=_.getState())===null||j===void 0||(N=j.nextTree)===null||N===void 0?void 0:N.version)){var le,Ie,te;rE(t,I,_,(le=(Ie=_.getState())===null||Ie===void 0||(te=Ie.nextTree)===null||te===void 0?void 0:te.version)!==null&&le!==void 0?le:_.getState().currentTree.version)}for(const pe of I)o.add(pe)}function ee(_,S,I){const F=dE(t);let C=!0,G=!0;const j=()=>{F(),G=!1};let N,le=!1,Ie;const te={loadingDepKey:null,loadingDepPromise:null},pe=new Map;function ft({key:rt}){const Qe=Jr(_,S,rt);switch(pe.set(rt,Qe),C||(Y(_,S,new Set(pe.keys()),I),M(_,I)),Qe.state){case"hasValue":return Qe.contents;case"hasError":throw Qe.contents;case"loading":throw te.loadingDepKey=rt,te.loadingDepPromise=Qe.contents,Qe.contents}throw $("Invalid Loadable state")}const gn=rt=>(...Qe)=>{if(G)throw $("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");return e==null&&ji(!1),uE(_,rt,Qe,{node:e})};try{N=i({get:ft,getCallback:gn}),N=cE(N)?ft(N):N,eE(N)&&(N.state==="hasError"&&(le=!0),N=N.contents),ce(N)?N=U(_,N,S,pe,I,te).finally(j):j(),N=N instanceof bh?N.value:N}catch(rt){N=rt,ce(N)?N=ne(_,N,S,pe,I,te).finally(j):(le=!0,j())}return le?Ie=Qr(N):ce(N)?Ie=tE(N):Ie=Ho(N),C=!1,zn(_,I,pe),Y(_,S,new Set(pe.keys()),I),[Ie,pe]}function se(_,S){let I=S.atomValues.get(t);if(I!=null)return I;const F=new Set;try{I=a.get(G=>(typeof G!="string"&&ji(!1),Jr(_,S,G).contents),{onNodeVisit:G=>{G.type==="branch"&&G.nodeKey!==t&&F.add(G.nodeKey)}})}catch(G){throw $(`Problem with cache lookup for selector "${t}": ${G.message}`)}if(I){var C;S.atomValues.set(t,I),Y(_,S,F,(C=ge(_))===null||C===void 0?void 0:C.executionID)}return I}function xe(_,S){const I=se(_,S);if(I!=null)return ve(_),I;const F=Ke(_,S);if(F!=null){var C;return((C=F.loadingLoadable)===null||C===void 0?void 0:C.state)==="loading"&&A(_,F.executionID),F.loadingLoadable}const G=hE(),[j,N]=ee(_,S,G);return j.state==="loading"?(nt(_,G,j,N,S),A(_,G)):(ve(_),it(S,j,N)),j}function Ke(_,S){const I=Kd([l.has(_)?[de(l.get(_))]:[],$s(ic(l,([C])=>C!==_),([,C])=>C)]);function F(C){for(const[G,j]of C)if(!Jr(_,S,G).is(j))return!0;return!1}for(const C of I){if(C.stateVersions.get(S.version)||!F(C.depValuesDiscoveredSoFarDuringAsyncWork))return C.stateVersions.set(S.version,!0),C;C.stateVersions.set(S.version,!1)}}function ge(_){return l.get(_)}function nt(_,S,I,F,C){l.set(_,{depValuesDiscoveredSoFarDuringAsyncWork:F,executionID:S,loadingLoadable:I,stateVersions:new Map([[C.version,!0]])})}function zn(_,S,I){if(Ye(_,S)){const F=ge(_);F!=null&&(F.depValuesDiscoveredSoFarDuringAsyncWork=I)}}function ve(_){l.delete(_)}function Ye(_,S){var I;return S===((I=ge(_))===null||I===void 0?void 0:I.executionID)}function mn(_){return Array.from(_.entries()).map(([S,I])=>[S,I.contents])}function it(_,S,I){_.atomValues.set(t,S);try{a.set(mn(I),S)}catch(F){throw $(`Problem with setting cache for selector "${t}": ${F.message}`)}}function Lt(_){if(Mi.includes(t)){const S=`Recoil selector has circular dependencies: ${Mi.slice(Mi.indexOf(t)).join(" → ")}`;return Qr($(S))}Mi.push(t);try{return _()}finally{Mi.pop()}}function jn(_,S){const I=S.atomValues.get(t);return I??a.get(F=>{var C;return typeof F!="string"&&ji(!1),(C=nE(_,S,F))===null||C===void 0?void 0:C.contents})}function Gn(_,S){return Lt(()=>xe(_,S))}function q(_){_.atomValues.delete(t)}function Q(_,S){e==null&&ji(!1);for(const F of o){var I;const C=aE(F);(I=C.clearCache)===null||I===void 0||I.call(C,_,S)}o.clear(),q(S),a.clear(),ql(_,e)}return s!=null?e=Gl({key:t,nodeType:"selector",peek:jn,get:Gn,set:(S,I,F)=>{let C=!1;const G=new Map;function j({key:te}){if(C)throw $("Recoil: Async selector sets are not currently supported.");const pe=Jr(S,I,te);if(pe.state==="hasValue")return pe.contents;if(pe.state==="loading"){const ft=`Getting value of asynchronous atom or selector "${te}" in a pending state while setting selector "${t}" is not yet supported.`;throw $(ft)}else throw pe.contents}function N(te,pe){if(C)throw $("Recoil: Async selector sets are not currently supported.");const ft=typeof pe=="function"?pe(j(te)):pe;iE(S,I,te.key,ft).forEach((rt,Qe)=>G.set(Qe,rt))}function le(te){N(te,sE)}const Ie=s({set:N,get:j,reset:le},F);if(Ie!==void 0)throw ce(Ie)?$("Recoil: Async selector sets are not currently supported."):$("Recoil: selector set should be a void function.");return C=!0,G},init:h,invalidate:q,clearCache:Q,shouldDeleteConfigOnRelease:m,dangerouslyAllowMutability:n.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:c}):e=Gl({key:t,nodeType:"selector",peek:jn,get:Gn,init:h,invalidate:q,clearCache:Q,shouldDeleteConfigOnRelease:m,dangerouslyAllowMutability:n.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:c})}Rh.value=n=>new bh(n);var li=Rh;const{isLoadable:fE,loadableWithError:zo,loadableWithPromise:jo,loadableWithValue:Kn}=br,{WrappedValue:Ch}=Eh,{peekNodeInfo:pE}=dn,{DEFAULT_VALUE:wn,DefaultValue:qt,getConfigDeletionHandler:Ah,registerNode:_E,setConfigDeletionHandler:mE}=Ge,{isRecoilValue:gE}=oi,{getRecoilValueAsLoadable:vE,markRecoilValueModified:yE,setRecoilValue:Kl,setRecoilValueLoadable:wE}=Pt,{retainedByOptionWithDefault:EE}=Un,xi=n=>n instanceof Ch?n.value:n;function SE(n){const{key:e,persistence_UNSTABLE:t}=n,i=EE(n.retainedBy_UNSTABLE);let r=0;function s(A){return jo(A.then(U=>(o=Kn(U),U)).catch(U=>{throw o=zo(U),U}))}let o=ce(n.default)?s(n.default):fE(n.default)?n.default.state==="loading"?s(n.default.contents):n.default:Kn(xi(n.default));o.contents;let a;const c=new Map;function l(A){return A}function d(A,U){const ne=U.then(Y=>{var ee,se;return((se=((ee=A.getState().nextTree)!==null&&ee!==void 0?ee:A.getState().currentTree).atomValues.get(e))===null||se===void 0?void 0:se.contents)===ne&&Kl(A,Z,Y),Y}).catch(Y=>{var ee,se;throw((se=((ee=A.getState().nextTree)!==null&&ee!==void 0?ee:A.getState().currentTree).atomValues.get(e))===null||se===void 0?void 0:se.contents)===ne&&wE(A,Z,zo(Y)),Y});return ne}function u(A,U,ne){var Y;r++;const ee=()=>{var ge;r--,(ge=c.get(A))===null||ge===void 0||ge.forEach(nt=>nt()),c.delete(A)};if(A.getState().knownAtoms.add(e),o.state==="loading"){const ge=()=>{var nt;((nt=A.getState().nextTree)!==null&&nt!==void 0?nt:A.getState().currentTree).atomValues.has(e)||yE(A,Z)};o.contents.finally(ge)}const se=(Y=n.effects)!==null&&Y!==void 0?Y:n.effects_UNSTABLE;if(se!=null){let ge=function(q){if(Ye&&q.key===e){const Q=ve;return Q instanceof qt?h(A,U):ce(Q)?jo(Q.then(_=>_ instanceof qt?o.toPromise():_)):Kn(Q)}return vE(A,q)},nt=function(q){return ge(q).toPromise()},zn=function(q){var Q;const _=pE(A,(Q=A.getState().nextTree)!==null&&Q!==void 0?Q:A.getState().currentTree,q.key);return Ye&&q.key===e&&!(ve instanceof qt)?{..._,isSet:!0,loadable:ge(q)}:_},ve=wn,Ye=!0,mn=!1,it=null;const Lt=q=>Q=>{if(Ye){const _=ge(Z),S=_.state==="hasValue"?_.contents:wn;ve=typeof Q=="function"?Q(S):Q,ce(ve)&&(ve=ve.then(I=>(it={effect:q,value:I},I)))}else{if(ce(Q))throw $("Setting atoms to async values is not implemented.");typeof Q!="function"&&(it={effect:q,value:xi(Q)}),Kl(A,Z,typeof Q=="function"?_=>{const S=xi(Q(_));return it={effect:q,value:S},S}:xi(Q))}},jn=q=>()=>Lt(q)(wn),Gn=q=>Q=>{var _;const{release:S}=A.subscribeToTransactions(I=>{var F;let{currentTree:C,previousTree:G}=I.getState();G||(G=C);const j=(F=C.atomValues.get(e))!==null&&F!==void 0?F:o;if(j.state==="hasValue"){var N,le,Ie,te;const pe=j.contents,ft=(N=G.atomValues.get(e))!==null&&N!==void 0?N:o,gn=ft.state==="hasValue"?ft.contents:wn;((le=it)===null||le===void 0?void 0:le.effect)!==q||((Ie=it)===null||Ie===void 0?void 0:Ie.value)!==pe?Q(pe,gn,!C.atomValues.has(e)):((te=it)===null||te===void 0?void 0:te.effect)===q&&(it=null)}},e);c.set(A,[...(_=c.get(A))!==null&&_!==void 0?_:[],S])};for(const q of se)try{const Q=q({node:Z,storeID:A.storeID,parentStoreID_UNSTABLE:A.parentStoreID,trigger:ne,setSelf:Lt(q),resetSelf:jn(q),onSet:Gn(q),getPromise:nt,getLoadable:ge,getInfo_UNSTABLE:zn});if(Q!=null){var xe;c.set(A,[...(xe=c.get(A))!==null&&xe!==void 0?xe:[],Q])}}catch(Q){ve=Q,mn=!0}if(Ye=!1,!(ve instanceof qt)){var Ke;const q=mn?zo(ve):ce(ve)?jo(d(A,ve)):Kn(xi(ve));q.contents,U.atomValues.set(e,q),(Ke=A.getState().nextTree)===null||Ke===void 0||Ke.atomValues.set(e,q)}}return ee}function h(A,U){var ne,Y;return(ne=(Y=U.atomValues.get(e))!==null&&Y!==void 0?Y:a)!==null&&ne!==void 0?ne:o}function m(A,U){if(U.atomValues.has(e))return de(U.atomValues.get(e));if(U.nonvalidatedAtoms.has(e)){if(a!=null)return a;if(t==null)return o;const ne=U.nonvalidatedAtoms.get(e),Y=t.validator(ne,wn);return a=Y instanceof qt?o:Kn(Y),a}else return o}function g(){a=void 0}function E(A,U,ne){if(U.atomValues.has(e)){const Y=de(U.atomValues.get(e));if(Y.state==="hasValue"&&ne===Y.contents)return new Map}else if(!U.nonvalidatedAtoms.has(e)&&ne instanceof qt)return new Map;return a=void 0,new Map().set(e,Kn(ne))}function M(){return Ah(e)!==void 0&&r<=0}const Z=_E({key:e,nodeType:"atom",peek:h,get:m,set:E,init:u,invalidate:g,shouldDeleteConfigOnRelease:M,dangerouslyAllowMutability:n.dangerouslyAllowMutability,persistence_UNSTABLE:n.persistence_UNSTABLE?{type:n.persistence_UNSTABLE.type,backButton:n.persistence_UNSTABLE.backButton}:void 0,shouldRestoreFromSnapshots:!0,retainedBy:i});return Z}function fc(n){const{...e}=n,t="default"in n?n.default:new Promise(()=>{});return gE(t)?IE({...e,default:t}):SE({...e,default:t})}function IE(n){const e=fc({...n,default:wn,persistence_UNSTABLE:n.persistence_UNSTABLE===void 0?void 0:{...n.persistence_UNSTABLE,validator:i=>i instanceof qt?i:de(n.persistence_UNSTABLE).validator(i,wn)},effects:n.effects,effects_UNSTABLE:n.effects_UNSTABLE}),t=li({key:`${n.key}__withFallback`,get:({get:i})=>{const r=i(e);return r instanceof qt?n.default:r},set:({set:i},r)=>i(e,r),cachePolicy_UNSTABLE:{eviction:"most-recent"},dangerouslyAllowMutability:n.dangerouslyAllowMutability});return mE(t.key,Ah(n.key)),t}fc.value=n=>new Ch(n);var Nh=fc;class bE{constructor(e){var t;V(this,"_map",void 0),V(this,"_keyMapper",void 0),this._map=new Map,this._keyMapper=(t=e==null?void 0:e.mapKey)!==null&&t!==void 0?t:i=>i}size(){return this._map.size}has(e){return this._map.has(this._keyMapper(e))}get(e){return this._map.get(this._keyMapper(e))}set(e,t){this._map.set(this._keyMapper(e),t)}delete(e){this._map.delete(this._keyMapper(e))}clear(){this._map.clear()}}var TE={MapCache:bE},RE=TE.MapCache,CE=Object.freeze({__proto__:null,MapCache:RE});const{LRUCache:Yl}=Ih,{MapCache:AE}=CE,Zr={equality:"reference",eviction:"none",maxSize:1/0};function NE({equality:n=Zr.equality,eviction:e=Zr.eviction,maxSize:t=Zr.maxSize}=Zr){const i=kE(n);return PE(e,t,i)}function kE(n){switch(n){case"reference":return e=>e;case"value":return e=>Zs(e)}throw $(`Unrecognized equality policy ${n}`)}function PE(n,e,t){switch(n){case"keep-all":return new AE({mapKey:t});case"lru":return new Yl({mapKey:t,maxSize:de(e)});case"most-recent":return new Yl({mapKey:t,maxSize:1})}throw $(`Unrecognized eviction policy ${n}`)}var kh=NE;const{setConfigDeletionHandler:OE}=Ge;function LE(n){var e,t;const i=kh({equality:(e=(t=n.cachePolicyForParams_UNSTABLE)===null||t===void 0?void 0:t.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var s,o;const a=i.get(r);if(a!=null)return a;const{cachePolicyForParams_UNSTABLE:c,...l}=n,d="default"in n?n.default:new Promise(()=>{}),u=Nh({...l,key:`${n.key}__${(s=Zs(r))!==null&&s!==void 0?s:"void"}`,default:typeof d=="function"?d(r):d,retainedBy_UNSTABLE:typeof n.retainedBy_UNSTABLE=="function"?n.retainedBy_UNSTABLE(r):n.retainedBy_UNSTABLE,effects:typeof n.effects=="function"?n.effects(r):typeof n.effects_UNSTABLE=="function"?n.effects_UNSTABLE(r):(o=n.effects)!==null&&o!==void 0?o:n.effects_UNSTABLE});return i.set(r,u),OE(u.key,()=>{i.delete(r)}),u}}var DE=LE;const{setConfigDeletionHandler:ME}=Ge;let xE=0;function UE(n){var e,t;const i=kh({equality:(e=(t=n.cachePolicyForParams_UNSTABLE)===null||t===void 0?void 0:t.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var s;let o;try{o=i.get(r)}catch(h){throw $(`Problem with cache lookup for selector ${n.key}: ${h.message}`)}if(o!=null)return o;const a=`${n.key}__selectorFamily/${(s=Zs(r,{allowFunctions:!0}))!==null&&s!==void 0?s:"void"}/${xE++}`,c=h=>n.get(r)(h),l=n.cachePolicy_UNSTABLE,d=typeof n.retainedBy_UNSTABLE=="function"?n.retainedBy_UNSTABLE(r):n.retainedBy_UNSTABLE;let u;if(n.set!=null){const h=n.set;u=li({key:a,get:c,set:(g,E)=>h(r)(g,E),cachePolicy_UNSTABLE:l,dangerouslyAllowMutability:n.dangerouslyAllowMutability,retainedBy_UNSTABLE:d})}else u=li({key:a,get:c,cachePolicy_UNSTABLE:l,dangerouslyAllowMutability:n.dangerouslyAllowMutability,retainedBy_UNSTABLE:d});return i.set(r,u),ME(u.key,()=>{i.delete(r)}),u}}var hn=UE;const FE=hn({key:"__constant",get:n=>()=>n,cachePolicyForParams_UNSTABLE:{equality:"reference"}});function VE(n){return FE(n)}var $E=VE;const BE=hn({key:"__error",get:n=>()=>{throw $(n)},cachePolicyForParams_UNSTABLE:{equality:"reference"}});function WE(n){return BE(n)}var HE=WE;function zE(n){return n}var jE=zE;const{loadableWithError:Ph,loadableWithPromise:Oh,loadableWithValue:Lh}=br;function eo(n,e){const t=Array(e.length).fill(void 0),i=Array(e.length).fill(void 0);for(const[r,s]of e.entries())try{t[r]=n(s)}catch(o){i[r]=o}return[t,i]}function GE(n){return n!=null&&!ce(n)}function to(n){return Array.isArray(n)?n:Object.getOwnPropertyNames(n).map(e=>n[e])}function va(n,e){return Array.isArray(n)?e:Object.getOwnPropertyNames(n).reduce((t,i,r)=>({...t,[i]:e[r]}),{})}function Xn(n,e,t){const i=t.map((r,s)=>r==null?Lh(e[s]):ce(r)?Oh(r):Ph(r));return va(n,i)}function qE(n,e){return e.map((t,i)=>t===void 0?n[i]:t)}const KE=hn({key:"__waitForNone",get:n=>({get:e})=>{const t=to(n),[i,r]=eo(e,t);return Xn(n,i,r)},dangerouslyAllowMutability:!0}),YE=hn({key:"__waitForAny",get:n=>({get:e})=>{const t=to(n),[i,r]=eo(e,t);return r.some(s=>!ce(s))?Xn(n,i,r):new Promise(s=>{for(const[o,a]of r.entries())ce(a)&&a.then(c=>{i[o]=c,r[o]=void 0,s(Xn(n,i,r))}).catch(c=>{r[o]=c,s(Xn(n,i,r))})})},dangerouslyAllowMutability:!0}),QE=hn({key:"__waitForAll",get:n=>({get:e})=>{const t=to(n),[i,r]=eo(e,t);if(r.every(o=>o==null))return va(n,i);const s=r.find(GE);if(s!=null)throw s;return Promise.all(r).then(o=>va(n,qE(i,o)))},dangerouslyAllowMutability:!0}),JE=hn({key:"__waitForAllSettled",get:n=>({get:e})=>{const t=to(n),[i,r]=eo(e,t);return r.every(s=>!ce(s))?Xn(n,i,r):Promise.all(r.map((s,o)=>ce(s)?s.then(a=>{i[o]=a,r[o]=void 0}).catch(a=>{i[o]=void 0,r[o]=a}):null)).then(()=>Xn(n,i,r))},dangerouslyAllowMutability:!0}),XE=hn({key:"__noWait",get:n=>({get:e})=>{try{return li.value(Lh(e(n)))}catch(t){return li.value(ce(t)?Oh(t):Ph(t))}},dangerouslyAllowMutability:!0});var ZE={waitForNone:KE,waitForAny:YE,waitForAll:QE,waitForAllSettled:JE,noWait:XE};const{RecoilLoadable:eS}=br,{DefaultValue:tS}=Ge,{RecoilRoot:nS,useRecoilStoreID:iS}=Ht,{isRecoilValue:rS}=oi,{retentionZone:sS}=Ws,{freshSnapshot:oS}=Ks,{useRecoilState:aS,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:cS,useRecoilStateLoadable:lS,useRecoilValue:uS,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:dS,useRecoilValueLoadable:hS,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:fS,useResetRecoilState:pS,useSetRecoilState:_S}=Ty,{useGotoRecoilSnapshot:mS,useRecoilSnapshot:gS,useRecoilTransactionObserver:vS}=mh,{useRecoilCallback:yS}=wh,{noWait:wS,waitForAll:ES,waitForAllSettled:SS,waitForAny:IS,waitForNone:bS}=ZE;var Ei={DefaultValue:tS,isRecoilValue:rS,RecoilLoadable:eS,RecoilEnv:yi,RecoilRoot:nS,useRecoilStoreID:iS,useRecoilBridgeAcrossReactRoots_UNSTABLE:Xy,atom:Nh,selector:li,atomFamily:DE,selectorFamily:hn,constSelector:$E,errorSelector:HE,readOnlySelector:jE,noWait:wS,waitForNone:bS,waitForAny:IS,waitForAll:ES,waitForAllSettled:SS,useRecoilValue:uS,useRecoilValueLoadable:hS,useRecoilState:aS,useRecoilStateLoadable:lS,useSetRecoilState:_S,useResetRecoilState:pS,useGetRecoilValueInfo_UNSTABLE:Gy,useRecoilRefresher_UNSTABLE:Cw,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:fS,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:dS,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:cS,useRecoilCallback:yS,useRecoilTransaction_UNSTABLE:Ow,useGotoRecoilSnapshot:mS,useRecoilSnapshot:gS,useRecoilTransactionObserver_UNSTABLE:vS,snapshot_UNSTABLE:oS,useRetain:cc,retentionZone:sS},u0=Ei.RecoilRoot,d0=Ei.atom,h0=Ei.selector,f0=Ei.useRecoilValue,p0=Ei.useRecoilState,_0=Ei.useSetRecoilState,Ql={};/**
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
 */const Dh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const w=function(n,e){if(!n)throw Si(e)},Si=function(n){return new Error("Firebase Database ("+Dh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Mh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},TS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),i.push(t[d],t[u],t[h],t[m])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Mh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):TS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const l=r<n.length?t[n.charAt(r)]:64;++r;const u=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||l==null||u==null)throw new RS;const h=s<<2|a>>4;if(i.push(h),l!==64){const m=a<<4&240|l>>2;if(i.push(m),u!==64){const g=l<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class RS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xh=function(n){const e=Mh(n);return pc.encodeByteArray(e,!0)},hs=function(n){return xh(n).replace(/\./g,"")},fs=function(n){try{return pc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function CS(n){return or(void 0,n)}function or(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!AS(t)||(n[t]=or(n[t],e[t]));return n}function AS(n){return n!=="__proto__"}/**
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
 */function Uh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const NS=()=>Uh().__FIREBASE_DEFAULTS__,kS=()=>{if(typeof process>"u"||typeof Ql>"u")return;const n=Ql.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},PS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fs(n[1]);return e&&JSON.parse(e)},_c=()=>{try{return NS()||kS()||PS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fh=()=>{var n;return(n=_c())===null||n===void 0?void 0:n.config},OS=n=>{var e;return(e=_c())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function LS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hs(JSON.stringify(t)),hs(JSON.stringify(o)),""].join(".")}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Vh(){var n;const e=(n=_c())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DS(){return typeof window<"u"||$h()}function $h(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function MS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function no(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wh(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hh(){return Dh.NODE_ADMIN===!0}function ps(){try{return typeof indexedDB=="object"}catch{return!1}}function xS(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const US="FirebaseError";class ze extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=US,Object.setPrototypeOf(this,ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?FS(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ze(r,a,i)}}function FS(n,e){return n.replace(VS,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const VS=/\{\$([^}]+)}/g;/**
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
 */const zh=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=ar(fs(s[0])||""),t=ar(fs(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},$S=function(n){const e=zh(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},BS=function(n){const e=zh(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function et(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function An(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function _s(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ms(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function ya(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Jl(s)&&Jl(o)){if(!ya(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Jl(n){return n!==null&&typeof n=="object"}/**
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
 */class WS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^s&(o^a),d=1518500249):(l=s^o^a,d=1859775393):u<60?(l=s&o|a&(s|o),d=2400959708):(l=s^o^a,d=3395469782);const h=(r<<5|r>>>27)+l+c+d+i[u]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function jh(n,e){const t=new HS(n,e);return t.subscribe.bind(t)}class HS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");zS(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Go),r.error===void 0&&(r.error=Go),r.complete===void 0&&(r.complete=Go);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Go(){}/**
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
 */const P=function(n,e,t,i){let r;if(i<e?r="at least "+e:i>t&&(r=t===0?"none":"no more than "+t),r){const s=n+" failed: Was called with "+i+(i===1?" argument.":" arguments.")+" Expects "+r+".";throw new Error(s)}};function je(n,e){return`${n} failed: ${e} argument `}function Ne(n,e,t,i){if(!(i&&!t)&&typeof t!="function")throw new Error(je(n,e)+"must be a valid function.")}function Xl(n,e,t,i){if(t&&(typeof t!="object"||t===null))throw new Error(je(n,e)+"must be a valid context object.")}/**
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
 */const jS=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,w(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},io=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const vn="[DEFAULT]";/**
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
 */class wa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Be;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qS(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:GS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GS(n){return n===vn?void 0:n}function qS(n){return n.instantiationMode==="EAGER"}/**
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
 */class gc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const vc=[];var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Gh={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},KS=X.INFO,YS={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},QS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=YS[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kr{constructor(e){this.name=e,this._logLevel=KS,this._logHandler=QS,this._userLogHandler=null,vc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}function JS(n){vc.forEach(e=>{e.setLogLevel(n)})}function XS(n,e){for(const t of vc){let i=null;e&&e.level&&(i=Gh[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(r,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(i??r.logLevel)&&n({level:X[s].toLowerCase(),message:a,args:o,type:r.name})}}}const ZS=(n,e)=>e.some(t=>n instanceof t);let Zl,eu;function eI(){return Zl||(Zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tI(){return eu||(eu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qh=new WeakMap,Ea=new WeakMap,Kh=new WeakMap,qo=new WeakMap,yc=new WeakMap;function nI(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Jt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&qh.set(t,n)}).catch(()=>{}),yc.set(e,n),e}function iI(n){if(Ea.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ea.set(n,e)}let Sa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ea.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Kh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rI(n){Sa=n(Sa)}function sI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ko(this),e,...t);return Kh.set(i,e.sort?e.sort():[e]),Jt(i)}:tI().includes(n)?function(...e){return n.apply(Ko(this),e),Jt(qh.get(this))}:function(...e){return Jt(n.apply(Ko(this),e))}}function oI(n){return typeof n=="function"?sI(n):(n instanceof IDBTransaction&&iI(n),ZS(n,eI())?new Proxy(n,Sa):n)}function Jt(n){if(n instanceof IDBRequest)return nI(n);if(qo.has(n))return qo.get(n);const e=oI(n);return e!==n&&(qo.set(n,e),yc.set(e,n)),e}const Ko=n=>yc.get(n);function aI(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=Jt(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Jt(o.result),c.oldVersion,c.newVersion,Jt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const cI=["get","getKey","getAll","getAllKeys","count"],lI=["put","add","delete","clear"],Yo=new Map;function tu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yo.get(e))return Yo.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=lI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||cI.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),r&&c.done]))[0]};return Yo.set(e,s),s}rI(n=>({...n,get:(e,t,i)=>tu(e,t)||n.get(e,t,i),has:(e,t)=>!!tu(e,t)||n.has(e,t)}));/**
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
 */class uI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function dI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gs="@firebase/app",Ia="0.10.16";/**
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
 */const $t=new kr("@firebase/app"),hI="@firebase/app-compat",fI="@firebase/analytics-compat",pI="@firebase/analytics",_I="@firebase/app-check-compat",mI="@firebase/app-check",gI="@firebase/auth",vI="@firebase/auth-compat",yI="@firebase/database",wI="@firebase/data-connect",EI="@firebase/database-compat",SI="@firebase/functions",II="@firebase/functions-compat",bI="@firebase/installations",TI="@firebase/installations-compat",RI="@firebase/messaging",CI="@firebase/messaging-compat",AI="@firebase/performance",NI="@firebase/performance-compat",kI="@firebase/remote-config",PI="@firebase/remote-config-compat",OI="@firebase/storage",LI="@firebase/storage-compat",DI="@firebase/firestore",MI="@firebase/vertexai",xI="@firebase/firestore-compat",UI="firebase",FI="11.0.2";/**
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
 */const nn="[DEFAULT]",VI={[gs]:"fire-core",[hI]:"fire-core-compat",[pI]:"fire-analytics",[fI]:"fire-analytics-compat",[mI]:"fire-app-check",[_I]:"fire-app-check-compat",[gI]:"fire-auth",[vI]:"fire-auth-compat",[yI]:"fire-rtdb",[wI]:"fire-data-connect",[EI]:"fire-rtdb-compat",[SI]:"fire-fn",[II]:"fire-fn-compat",[bI]:"fire-iid",[TI]:"fire-iid-compat",[RI]:"fire-fcm",[CI]:"fire-fcm-compat",[AI]:"fire-perf",[NI]:"fire-perf-compat",[kI]:"fire-rc",[PI]:"fire-rc-compat",[OI]:"fire-gcs",[LI]:"fire-gcs-compat",[DI]:"fire-fst",[xI]:"fire-fst-compat",[MI]:"fire-vertex","fire-js":"fire-js",[UI]:"fire-js-all"};/**
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
 */const rn=new Map,ui=new Map,di=new Map;function cr(n,e){try{n.container.addComponent(e)}catch(t){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Yh(n,e){n.container.addOrOverwriteComponent(e)}function sn(n){const e=n.name;if(di.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;di.set(e,n);for(const t of rn.values())cr(t,n);for(const t of ui.values())cr(t,n);return!0}function Qh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $I(n,e,t=nn){Qh(n,e).clearInstance(t)}function Jh(n){return n.options!==void 0}function ye(n){return n.settings!==void 0}function BI(){di.clear()}/**
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
 */const WI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lt=new Fn("app","Firebase",WI);/**
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
 */let Xh=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}};/**
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
 */class HI extends Xh{constructor(e,t,i,r){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:i,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,r);else{const a=e;super(a.options,o,r)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,vt(gs,Ia,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ec(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw lt.create("server-app-deleted")}}/**
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
 */const fn=FI;function wc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:nn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw lt.create("bad-app-name",{appName:String(r)});if(t||(t=Fh()),!t)throw lt.create("no-options");const s=rn.get(r);if(s){if(ya(t,s.options)&&ya(i,s.config))return s;throw lt.create("duplicate-app",{appName:r})}const o=new gc(r);for(const c of di.values())o.addComponent(c);const a=new Xh(t,i,o);return rn.set(r,a),a}function zI(n,e){if(DS()&&!$h())throw lt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;Jh(n)?t=n.options:t=n;const i=Object.assign(Object.assign({},e),t);i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const r=l=>[...l].reduce((d,u)=>Math.imul(31,d)+u.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw lt.create("finalization-registry-not-supported",{});const s=""+r(JSON.stringify(i)),o=ui.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new gc(s);for(const l of di.values())a.addComponent(l);const c=new HI(t,e,s,a);return ui.set(s,c),c}function jI(n=nn){const e=rn.get(n);if(!e&&n===nn&&Fh())return wc();if(!e)throw lt.create("no-app",{appName:n});return e}function GI(){return Array.from(rn.values())}async function Ec(n){let e=!1;const t=n.name;rn.has(t)?(e=!0,rn.delete(t)):ui.has(t)&&n.decRefCount()<=0&&(ui.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(i=>i.delete())),n.isDeleted=!0)}function vt(n,e,t){var i;let r=(i=VI[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}sn(new ut(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function Zh(n,e){if(n!==null&&typeof n!="function")throw lt.create("invalid-log-argument");XS(n,e)}function ef(n){JS(n)}/**
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
 */const qI="firebase-heartbeat-database",KI=1,lr="firebase-heartbeat-store";let Qo=null;function tf(){return Qo||(Qo=aI(qI,KI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(lr)}catch(t){console.warn(t)}}}}).catch(n=>{throw lt.create("idb-open",{originalErrorMessage:n.message})})),Qo}async function YI(n){try{const t=(await tf()).transaction(lr),i=await t.objectStore(lr).get(nf(n));return await t.done,i}catch(e){if(e instanceof ze)$t.warn(e.message);else{const t=lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(t.message)}}}async function nu(n,e){try{const i=(await tf()).transaction(lr,"readwrite");await i.objectStore(lr).put(e,nf(n)),await i.done}catch(t){if(t instanceof ze)$t.warn(t.message);else{const i=lt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$t.warn(i.message)}}}function nf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const QI=1024,JI=30*24*60*60*1e3;class XI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new eb(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=iu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=JI}),this._storage.overwrite(this._heartbeatsCache))}catch(i){$t.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=iu(),{heartbeatsToSend:i,unsentEntries:r}=ZI(this._heartbeatsCache.heartbeats),s=hs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return $t.warn(t),""}}}function iu(){return new Date().toISOString().substring(0,10)}function ZI(n,e=QI){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ru(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),ru(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class eb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ps()?xS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return nu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return nu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ru(n){return hs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function tb(n){sn(new ut("platform-logger",e=>new uI(e),"PRIVATE")),sn(new ut("heartbeat",e=>new XI(e),"PRIVATE")),vt(gs,Ia,n),vt(gs,Ia,"esm2017"),vt("fire-js","")}tb("");const nb=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ze,SDK_VERSION:fn,_DEFAULT_ENTRY_NAME:nn,_addComponent:cr,_addOrOverwriteComponent:Yh,_apps:rn,_clearComponents:BI,_components:di,_getProvider:Qh,_isFirebaseApp:Jh,_isFirebaseServerApp:ye,_registerComponent:sn,_removeServiceInstance:$I,_serverApps:ui,deleteApp:Ec,getApp:jI,getApps:GI,initializeApp:wc,initializeServerApp:zI,onLog:Zh,registerVersion:vt,setLogLevel:ef},Symbol.toStringTag,{value:"Module"}));/**
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
 */class ib{constructor(e,t){this._delegate=e,this.firebase=t,cr(e,new ut("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ec(this._delegate)))}_getService(e,t=nn){var i;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((i=r.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=nn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){cr(this._delegate,e)}_addOrOverwriteComponent(e){Yh(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const rb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},su=new Fn("app-compat","Firebase",rb);/**
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
 */function sb(n){const e={},t={__esModule:!0,initializeApp:s,app:r,registerVersion:vt,setLogLevel:ef,onLog:Zh,apps:null,SDK_VERSION:fn,INTERNAL:{registerComponent:a,removeApp:i,useAsService:c,modularAPIs:nb}};t.default=t,Object.defineProperty(t,"apps",{get:o});function i(l){delete e[l]}function r(l){if(l=l||nn,!et(e,l))throw su.create("no-app",{appName:l});return e[l]}r.App=n;function s(l,d={}){const u=wc(l,d);if(et(e,u.name))return e[u.name];const h=new n(u,t);return e[u.name]=h,h}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const d=l.name,u=d.replace("-compat","");if(sn(l)&&l.type==="PUBLIC"){const h=(m=r())=>{if(typeof m[u]!="function")throw su.create("invalid-app-argument",{appName:d});return m[u]()};l.serviceProps!==void 0&&or(h,l.serviceProps),t[u]=h,n.prototype[u]=function(...m){return this._getService.bind(this,d).apply(this,l.multipleInstances?m:[])}}return l.type==="PUBLIC"?t[u]:null}function c(l,d){return d==="serverAuth"?null:d}return t}/**
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
 */function rf(){const n=sb(ib);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:rf,extendNamespace:e,createSubscribe:jh,ErrorFactory:Fn,deepExtend:or});function e(t){or(n,t)}return n}const ob=rf();/**
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
 */const ou=new kr("@firebase/app-compat"),ab="@firebase/app-compat",cb="0.2.46";/**
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
 */function lb(n){vt(ab,cb,n)}/**
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
 */try{const n=Uh();if(n.firebase!==void 0){ou.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&ou.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Nn=ob;lb();var ub="firebase",db="11.0.2";/**
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
 */Nn.registerVersion(ub,db,"app-compat");function Sc(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}const Ui={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Yn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function hb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function sf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fb=hb,pb=sf,of=new Fn("auth","Firebase",sf());/**
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
 */const vs=new kr("@firebase/auth");function _b(n,...e){vs.logLevel<=X.WARN&&vs.warn(`Auth (${fn}): ${n}`,...e)}function rs(n,...e){vs.logLevel<=X.ERROR&&vs.error(`Auth (${fn}): ${n}`,...e)}/**
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
 */function Me(n,...e){throw bc(n,...e)}function Te(n,...e){return bc(n,...e)}function Ic(n,e,t){const i=Object.assign(Object.assign({},pb()),{[e]:t});return new Fn("auth","Firebase",i).create(e,{appName:n.name})}function Oe(n){return Ic(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ii(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Me(n,"argument-error"),Ic(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return of.create(n,...e)}function v(n,e,...t){if(!n)throw bc(e,...t)}function Rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rs(e),new Error(e)}function wt(n,e){n||Rt(e)}/**
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
 */function ur(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Tc(){return au()==="http:"||au()==="https:"}function au(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function mb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tc()||Bh()||"connection"in navigator)?navigator.onLine:!0}function gb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=mc()||no()}get(){return mb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rc(n,e){wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class af{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yb=new Pr(3e4,6e4);function we(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ee(n,e,t,i,r={}){return cf(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Vn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},s);return MS()||(l.referrerPolicy="no-referrer"),af.fetch()(lf(n,n.config.apiHost,t,a),l)})}async function cf(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},vb),e);try{const r=new Eb(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw qi(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ic(n,d,l);Me(n,d)}}catch(r){if(r instanceof ze)throw r;Me(n,"network-request-failed",{message:String(r)})}}async function zt(n,e,t,i,r={}){const s=await Ee(n,e,t,i,r);return"mfaPendingCredential"in s&&Me(n,"multi-factor-auth-required",{_serverResponse:s}),s}function lf(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Rc(n.config,r):`${n.config.apiScheme}://${r}`}function wb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Eb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Te(this.auth,"network-request-failed")),yb.get())})}}function qi(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Te(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */function cu(n){return n!==void 0&&n.getResponse!==void 0}function lu(n){return n!==void 0&&n.enterprise!==void 0}class uf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return wb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function Sb(n){return(await Ee(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function df(n,e){return Ee(n,"GET","/v2/recaptchaConfig",we(n,e))}/**
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
 */async function Ib(n,e){return Ee(n,"POST","/v1/accounts:delete",e)}async function bb(n,e){return Ee(n,"POST","/v1/accounts:update",e)}async function hf(n,e){return Ee(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ji(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tb(n,e=!1){const t=x(n),i=await t.getIdToken(e),r=ro(i);v(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ji(Jo(r.auth_time)),issuedAtTime:Ji(Jo(r.iat)),expirationTime:Ji(Jo(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jo(n){return Number(n)*1e3}function ro(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return rs("JWT malformed, contained fewer than 3 sections"),null;try{const r=fs(t);return r?JSON.parse(r):(rs("Failed to decode base64 JWT payload"),null)}catch(r){return rs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function uu(n){const e=ro(n);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ze&&Rb(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Rb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Cb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ba{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dr(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Bt(n,hf(t,{idToken:i}));v(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ff(s.providerUserInfo):[],a=Nb(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ba(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Ab(n){const e=x(n);await dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nb(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function ff(n){return n.map(e=>{var{providerId:t}=e,i=Sc(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function kb(n,e){const t=await cf(n,{},async()=>{const i=Vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=lf(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",af.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pb(n,e){return Ee(n,"POST","/v2/accounts:revokeToken",we(n,e))}/**
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
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){v(e.length!==0,"internal-error");const t=uu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(v(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await kb(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new Zn;return i&&(v(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(v(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(v(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Gt(n,e){v(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Cb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ba(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Bt(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Tb(this,e)}reload(){return Ab(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await dr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ye(this.auth.app))return Promise.reject(Oe(this.auth));const e=await this.getIdToken();return await Bt(this,Ib(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,c,l,d;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(r=t.email)!==null&&r!==void 0?r:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,E=(a=t.tenantId)!==null&&a!==void 0?a:void 0,M=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,Z=(l=t.createdAt)!==null&&l!==void 0?l:void 0,A=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:U,emailVerified:ne,isAnonymous:Y,providerData:ee,stsTokenManager:se}=t;v(U&&se,e,"internal-error");const xe=Zn.fromJSON(this.name,se);v(typeof U=="string",e,"internal-error"),Gt(u,e.name),Gt(h,e.name),v(typeof ne=="boolean",e,"internal-error"),v(typeof Y=="boolean",e,"internal-error"),Gt(m,e.name),Gt(g,e.name),Gt(E,e.name),Gt(M,e.name),Gt(Z,e.name),Gt(A,e.name);const Ke=new Dt({uid:U,auth:e,email:h,emailVerified:ne,displayName:u,isAnonymous:Y,photoURL:g,phoneNumber:m,tenantId:E,stsTokenManager:xe,createdAt:Z,lastLoginAt:A});return ee&&Array.isArray(ee)&&(Ke.providerData=ee.map(ge=>Object.assign({},ge))),M&&(Ke._redirectEventId=M),Ke}static async _fromIdTokenResponse(e,t,i=!1){const r=new Zn;r.updateFromServerResponse(t);const s=new Dt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await dr(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];v(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?ff(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Zn;a.updateFromIdToken(i);const c=new Dt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new ba(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
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
 */const du=new Map;function Ze(n){wt(n instanceof Function,"Expected a class definition");let e=du.get(n);return e?(wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,du.set(n,e),e)}/**
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
 */class pf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pf.type="NONE";const hi=pf;/**
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
 */function In(n,e,t){return`firebase:${n}:${e}:${t}`}class ei{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=In(this.userKey,r.apiKey,s),this.fullPersistenceKey=In("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ei(Ze(hi),e,i);const r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||Ze(hi);const o=In(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const u=Dt._fromJSON(e,d);l!==s&&(a=u),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ei(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ei(s,e,i))}}/**
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
 */function hu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_f(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yf(e))return"Blackberry";if(wf(e))return"Webos";if(mf(e))return"Safari";if((e.includes("chrome/")||gf(e))&&!e.includes("edge/"))return"Chrome";if(Or(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _f(n=Re()){return/firefox\//i.test(n)}function mf(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gf(n=Re()){return/crios\//i.test(n)}function vf(n=Re()){return/iemobile/i.test(n)}function Or(n=Re()){return/android/i.test(n)}function yf(n=Re()){return/blackberry/i.test(n)}function wf(n=Re()){return/webos/i.test(n)}function Lr(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ob(n=Re()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Lb(n=Re()){var e;return Lr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Db(){return Wh()&&document.documentMode===10}function Ef(n=Re()){return Lr(n)||Or(n)||wf(n)||yf(n)||/windows phone/i.test(n)||vf(n)}/**
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
 */function Sf(n,e=[]){let t;switch(n){case"Browser":t=hu(Re());break;case"Worker":t=`${hu(Re())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fn}/${i}`}/**
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
 */class Mb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function xb(n,e={}){return Ee(n,"GET","/v2/passwordPolicy",we(n,e))}/**
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
 */const Ub=6;class Fb{constructor(e){var t,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Ub,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Vb{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fu(this),this.idTokenSubscription=new fu(this),this.beforeStateQueue=new Mb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=of,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ze(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await ei.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await hf(this,{idToken:e}),i=await Dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ye(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ye(this.app))return Promise.reject(Oe(this));const t=e?x(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ye(this.app)?Promise.reject(Oe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ye(this.app)?Promise.reject(Oe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ze(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xb(this),t=new Fb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Pb(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ze(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ei.create(this,[Ze(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_b(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function me(n){return x(n)}class fu{constructor(e){this.auth=e,this.observer=null,this.addObserver=jh(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $b(n){Dr=n}function Cc(n){return Dr.loadJS(n)}function Bb(){return Dr.recaptchaV2Script}function Wb(){return Dr.recaptchaEnterpriseScript}function Hb(){return Dr.gapiScript}function If(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const zb=500,jb=6e4,es=1e12;class Gb{constructor(e){this.auth=e,this.counter=es,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new Yb(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||es;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||es;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||es;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class qb{constructor(){this.enterprise=new Kb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Kb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Yb{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;v(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Qb(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},jb)},zb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Qb(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const Jb="recaptcha-enterprise",Xi="NO_RECAPTCHA";class bf{constructor(e){this.type=Jb,this.auth=me(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{df(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new uf(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;lu(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Xi)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qb().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&lu(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Wb();c.length!==0&&(c+=a),Cc(c).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Fi(n,e,t,i=!1,r=!1){const s=new bf(n);let o;if(r)o=Xi;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Xt(n,e,t,i,r){var s,o;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Fi(n,e,t,t==="getOobCode");return i(n,a)}else return i(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Fi(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Fi(n,e,t);return i(n,a).catch(async c=>{var l;if(((l=n._getRecaptchaConfig())===null||l===void 0?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const d=await Fi(n,e,t,!1,!0);return i(n,d)}return Promise.reject(c)})}else{const a=await Fi(n,e,t,!1,!0);return i(n,a)}else return Promise.reject(r+" provider is not supported.")}async function Xb(n){const e=me(n),t=await df(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new uf(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new bf(e).verify()}function Zb(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ze);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function eT(n,e,t){const i=me(n);v(i._canInitEmulator,i,"emulator-config-failed"),v(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=Tf(e),{host:o,port:a}=tT(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||nT()}function Tf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function tT(n){const e=Tf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:pu(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:pu(o)}}}function pu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function nT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */async function Rf(n,e){return Ee(n,"POST","/v1/accounts:resetPassword",we(n,e))}async function iT(n,e){return Ee(n,"POST","/v1/accounts:update",e)}async function rT(n,e){return Ee(n,"POST","/v1/accounts:signUp",e)}async function sT(n,e){return Ee(n,"POST","/v1/accounts:update",we(n,e))}/**
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
 */async function oT(n,e){return zt(n,"POST","/v1/accounts:signInWithPassword",we(n,e))}async function so(n,e){return Ee(n,"POST","/v1/accounts:sendOobCode",we(n,e))}async function aT(n,e){return so(n,e)}async function cT(n,e){return so(n,e)}async function lT(n,e){return so(n,e)}async function uT(n,e){return so(n,e)}/**
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
 */async function dT(n,e){return zt(n,"POST","/v1/accounts:signInWithEmailLink",we(n,e))}async function hT(n,e){return zt(n,"POST","/v1/accounts:signInWithEmailLink",we(n,e))}/**
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
 */class hr extends bi{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new hr(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new hr(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xt(e,t,"signInWithPassword",oT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return dT(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xt(e,i,"signUpPassword",rT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hT(e,{idToken:t,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ft(n,e){return zt(n,"POST","/v1/accounts:signInWithIdp",we(n,e))}/**
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
 */const fT="http://localhost";class At extends bi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new At(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Sc(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new At(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ft(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ft(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ft(e,t)}buildRequest(){const e={requestUri:fT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vn(t)}return e}}/**
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
 */async function _u(n,e){return Ee(n,"POST","/v1/accounts:sendVerificationCode",we(n,e))}async function pT(n,e){return zt(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,e))}async function _T(n,e){const t=await zt(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,e));if(t.temporaryProof)throw qi(n,"account-exists-with-different-credential",t);return t}const mT={USER_NOT_FOUND:"user-not-found"};async function gT(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return zt(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,t),mT)}/**
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
 */class bn extends bi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new bn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new bn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return pT(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return _T(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return gT(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!t&&!r&&!s?null:new bn({verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
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
 */function vT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yT(n){const e=Jn(Gi(n)).link,t=e?Jn(Gi(e)).deep_link_id:null,i=Jn(Gi(n)).deep_link_id;return(i?Jn(Gi(i)).link:null)||i||t||e||n}class oo{constructor(e){var t,i,r,s,o,a;const c=Jn(Gi(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,u=vT((r=c.mode)!==null&&r!==void 0?r:null);v(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=yT(e);try{return new oo(t)}catch{return null}}}/**
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
 */class pn{constructor(){this.providerId=pn.PROVIDER_ID}static credential(e,t){return hr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=oo.parseLink(t);return v(i,"argument-error"),hr._fromEmailAndCode(e,i.code,i.tenantId)}}pn.PROVIDER_ID="password";pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ti extends jt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ti extends Ti{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return v("providerId"in t&&"signInMethod"in t,"argument-error"),At._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return v(e.idToken||e.accessToken,"argument-error"),At._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ti.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ti.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!t&&!s||!a)return null;try{return new ti(a)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */const wT="http://localhost";class fi extends bi{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ft(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ft(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ft(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=t;return!i||!r||!s||i!==r?null:new fi(i,s)}static _create(e,t){return new fi(e,t)}buildRequest(){return{requestUri:wT,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const ET="saml.";class ys extends jt{constructor(e){v(e.startsWith(ET),"argument-error"),super(e)}static credentialFromResult(e){return ys.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ys.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=fi.fromJSON(e);return v(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return fi._create(i,t)}catch{return null}}}/**
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
 */async function Cf(n,e){return zt(n,"POST","/v1/accounts:signUp",we(n,e))}/**
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
 */class dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await Dt._fromIdTokenResponse(e,i,r),o=mu(i);return new dt({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=mu(i);return new dt({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function mu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function ST(n){var e;if(ye(n.app))return Promise.reject(Oe(n));const t=me(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new dt({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Cf(t,{returnSecureToken:!0}),r=await dt._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(r.user),r}/**
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
 */class ws extends ze{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,ws.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new ws(e,t,i,r)}}function Af(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ws._fromErrorAndOperation(n,s,e,i):s})}/**
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
 */function Nf(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function IT(n,e){const t=x(n);await ao(!0,t,e);const{providerUserInfo:i}=await bb(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=Nf(i||[]);return t.providerData=t.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Ac(n,e,t=!1){const i=await Bt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dt._forOperation(n,"link",i)}async function ao(n,e,t){await dr(e);const i=Nf(e.providerData),r=n===!1?"provider-already-linked":"no-such-provider";v(i.has(t)===n,e.auth,r)}/**
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
 */async function kf(n,e,t=!1){const{auth:i}=n;if(ye(i.app))return Promise.reject(Oe(i));const r="reauthenticate";try{const s=await Bt(n,Af(i,r,e,n),t);v(s.idToken,i,"internal-error");const o=ro(s.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(n.uid===a,i,"user-mismatch"),dt._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Me(i,"user-mismatch"),s}}/**
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
 */async function Pf(n,e,t=!1){if(ye(n.app))return Promise.reject(Oe(n));const i="signIn",r=await Af(n,i,e),s=await dt._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function co(n,e){return Pf(me(n),e)}async function Of(n,e){const t=x(n);return await ao(!1,t,e.providerId),Ac(t,e)}async function Lf(n,e){return kf(x(n),e)}/**
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
 */async function bT(n,e){return zt(n,"POST","/v1/accounts:signInWithCustomToken",we(n,e))}/**
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
 */async function TT(n,e){if(ye(n.app))return Promise.reject(Oe(n));const t=me(n),i=await bT(t,{token:e,returnSecureToken:!0}),r=await dt._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(r.user),r}/**
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
 */class Mr{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Nc._fromServerResponse(e,t):"totpInfo"in t?kc._fromServerResponse(e,t):Me(e,"internal-error")}}class Nc extends Mr{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Nc(t)}}class kc extends Mr{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new kc(t)}}/**
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
 */async function Pc(n){const e=me(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RT(n,e,t){const i=me(n),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&lo(i,r,t),await Xt(i,r,"getOobCode",cT,"EMAIL_PASSWORD_PROVIDER")}async function CT(n,e,t){await Rf(x(n),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Pc(n),i})}async function AT(n,e){await sT(x(n),{oobCode:e})}async function Df(n,e){const t=x(n),i=await Rf(t,{oobCode:e}),r=i.requestType;switch(v(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":v(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":v(i.mfaInfo,t,"internal-error");default:v(i.email,t,"internal-error")}let s=null;return i.mfaInfo&&(s=Mr._fromServerResponse(me(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function NT(n,e){const{data:t}=await Df(x(n),e);return t.email}async function kT(n,e,t){if(ye(n.app))return Promise.reject(Oe(n));const i=me(n),o=await Xt(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Cf,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Pc(n),c}),a=await dt._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function PT(n,e,t){return ye(n.app)?Promise.reject(Oe(n)):co(x(n),pn.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Pc(n),i})}/**
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
 */async function OT(n,e,t){const i=me(n),r={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){v(a.handleCodeInApp,i,"argument-error"),a&&lo(i,o,a)}s(r,t),await Xt(i,r,"getOobCode",lT,"EMAIL_PASSWORD_PROVIDER")}function LT(n,e){const t=oo.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function DT(n,e,t){if(ye(n.app))return Promise.reject(Oe(n));const i=x(n),r=pn.credentialWithLink(e,t||ur());return v(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),co(i,r)}/**
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
 */async function MT(n,e){return Ee(n,"POST","/v1/accounts:createAuthUri",we(n,e))}/**
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
 */async function xT(n,e){const t=Tc()?ur():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:r}=await MT(x(n),i);return r||[]}async function UT(n,e){const t=x(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&lo(t.auth,r,e);const{email:s}=await aT(t.auth,r);s!==n.email&&await n.reload()}async function FT(n,e,t){const i=x(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&lo(i.auth,s,t);const{email:o}=await uT(i.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function VT(n,e){return Ee(n,"POST","/v1/accounts:update",e)}/**
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
 */async function $T(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=x(n),s={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Bt(i,VT(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function BT(n,e){const t=x(n);return ye(t.auth.app)?Promise.reject(Oe(t.auth)):Mf(t,e,null)}function WT(n,e){return Mf(x(n),null,e)}async function Mf(n,e,t){const{auth:i}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Bt(n,iT(i,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function HT(n){var e,t;if(!n)return null;const{providerId:i}=n,r=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n!=null&&n.idToken)){const o=(t=(e=ro(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ni(s,a)}}if(!i)return null;switch(i){case"facebook.com":return new zT(s,r);case"github.com":return new jT(s,r);case"google.com":return new GT(s,r);case"twitter.com":return new qT(s,r,n.screenName||null);case"custom":case"anonymous":return new ni(s,null);default:return new ni(s,i,r)}}class ni{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class xf extends ni{constructor(e,t,i,r){super(e,t,i),this.username=r}}class zT extends ni{constructor(e,t){super(e,"facebook.com",t)}}class jT extends xf{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class GT extends ni{constructor(e,t){super(e,"google.com",t)}}class qT extends xf{constructor(e,t,i){super(e,"twitter.com",t,i)}}function KT(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:HT(t)}/**
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
 */class En{constructor(e,t,i){this.type=e,this.credential=t,this.user=i}static _fromIdtoken(e,t){return new En("enroll",e,t)}static _fromMfaPendingCredential(e){return new En("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return En._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return En._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Oc{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=me(e),r=t.customData._serverResponse,s=(r.mfaInfo||[]).map(a=>Mr._fromServerResponse(i,a));v(r.mfaPendingCredential,i,"internal-error");const o=En._fromMfaPendingCredential(r.mfaPendingCredential);return new Oc(o,s,async a=>{const c=await a._process(i,o);delete r.mfaInfo,delete r.mfaPendingCredential;const l=Object.assign(Object.assign({},r),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const d=await dt._fromIdTokenResponse(i,t.operationType,l);return await i._updateCurrentUser(d.user),d;case"reauthenticate":return v(t.user,i,"internal-error"),dt._forOperation(t.user,t.operationType,l);default:Me(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function YT(n,e){var t;const i=x(n),r=e;return v(e.customData.operationType,i,"argument-error"),v((t=r.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),Oc._fromError(i,r)}/**
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
 */function gu(n,e){return Ee(n,"POST","/v2/accounts/mfaEnrollment:start",we(n,e))}function QT(n,e){return Ee(n,"POST","/v2/accounts/mfaEnrollment:finalize",we(n,e))}function JT(n,e){return Ee(n,"POST","/v2/accounts/mfaEnrollment:withdraw",we(n,e))}class Lc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Mr._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new Lc(e)}async getSession(){return En._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,r=await this.getSession(),s=await Bt(this.user,i._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const r=await Bt(this.user,JT(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const Xo=new WeakMap;function XT(n){const e=x(n);return Xo.has(e)||Xo.set(e,Lc._fromUser(e)),Xo.get(e)}const Es="__sak";/**
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
 */class Uf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Es,"1"),this.storage.removeItem(Es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZT=1e3,eR=10;class Ff extends Uf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ef(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Db()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,eR):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ff.type="LOCAL";const Dc=Ff;/**
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
 */class Vf extends Uf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vf.type="SESSION";const kn=Vf;/**
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
 */function tR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class uo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new uo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await tR(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uo.receivers=[];/**
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
 */class nR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=xr("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Se(){return window}function iR(n){Se().location.href=n}/**
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
 */function Mc(){return typeof Se().WorkerGlobalScope<"u"&&typeof Se().importScripts=="function"}async function rR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function oR(){return Mc()?self:null}/**
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
 */const $f="firebaseLocalStorageDb",aR=1,Ss="firebaseLocalStorage",Bf="fbase_key";class Ur{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ho(n,e){return n.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function cR(){const n=indexedDB.deleteDatabase($f);return new Ur(n).toPromise()}function Ta(){const n=indexedDB.open($f,aR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ss,{keyPath:Bf})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ss)?e(i):(i.close(),await cR(),e(await Ta()))})})}async function vu(n,e,t){const i=ho(n,!0).put({[Bf]:e,value:t});return new Ur(i).toPromise()}async function lR(n,e){const t=ho(n,!1).get(e),i=await new Ur(t).toPromise();return i===void 0?null:i.value}function yu(n,e){const t=ho(n,!0).delete(e);return new Ur(t).toPromise()}const uR=800,dR=3;class Wf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ta(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>dR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uo._getInstance(oR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rR(),!this.activeServiceWorker)return;this.sender=new nR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ta();return await vu(e,Es,"1"),await yu(e,Es),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>vu(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>lR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>yu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ho(r,!1).getAll();return new Ur(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wf.type="LOCAL";const fr=Wf;/**
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
 */function wu(n,e){return Ee(n,"POST","/v2/accounts/mfaSignIn:start",we(n,e))}function hR(n,e){return Ee(n,"POST","/v2/accounts/mfaSignIn:finalize",we(n,e))}/**
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
 */const Zo=If("rcb"),fR=new Pr(3e4,6e4);class pR{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Se().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return v(_R(t),e,"argument-error"),this.shouldResolveImmediately(t)&&cu(Se().grecaptcha)?Promise.resolve(Se().grecaptcha):new Promise((i,r)=>{const s=Se().setTimeout(()=>{r(Te(e,"network-request-failed"))},fR.get());Se()[Zo]=()=>{Se().clearTimeout(s),delete Se()[Zo];const a=Se().grecaptcha;if(!a||!cu(a)){r(Te(e,"internal-error"));return}const c=a.render;a.render=(l,d)=>{const u=c(l,d);return this.counter++,u},this.hostLanguage=t,i(a)};const o=`${Bb()}?${Vn({onload:Zo,render:"explicit",hl:t})}`;Cc(o).catch(()=>{clearTimeout(s),r(Te(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Se().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _R(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class mR{async load(e){return new Gb(e)}clearedOneInstance(){}}/**
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
 */const Zi="recaptcha",gR={theme:"light",type:"image"};let vR=class{constructor(e,t,i=Object.assign({},gR)){this.parameters=i,this.type=Zi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=me(e),this.isInvisible=this.parameters.size==="invisible",v(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof t=="string"?document.getElementById(t):t;v(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new mR:new pR,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(r=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){v(!this.parameters.sitekey,this.auth,"argument-error"),v(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),v(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=Se()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){v(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){v(Tc()&&!Mc(),this.auth,"internal-error"),await yR(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Sb(this.auth);v(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return v(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function yR(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class xc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=bn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function wR(n,e,t){if(ye(n.app))return Promise.reject(Oe(n));const i=me(n),r=await fo(i,e,x(t));return new xc(r,s=>co(i,s))}async function ER(n,e,t){const i=x(n);await ao(!1,i,"phone");const r=await fo(i.auth,e,x(t));return new xc(r,s=>Of(i,s))}async function SR(n,e,t){const i=x(n);if(ye(i.auth.app))return Promise.reject(Oe(i.auth));const r=await fo(i.auth,e,x(t));return new xc(r,s=>Lf(i,s))}async function fo(n,e,t){var i;if(!n._getRecaptchaConfig())try{await Xb(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const s=r.session;if("phoneNumber"in r){v(s.type==="enroll",n,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Xt(n,o,"mfaSmsEnrollment",async(d,u)=>{if(u.phoneEnrollmentInfo.captchaResponse===Xi){v((t==null?void 0:t.type)===Zi,d,"argument-error");const h=await ea(d,u,t);return gu(d,h)}return gu(d,u)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{v(s.type==="signin",n,"internal-error");const o=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;v(o,n,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Xt(n,a,"mfaSmsSignIn",async(u,h)=>{if(h.phoneSignInInfo.captchaResponse===Xi){v((t==null?void 0:t.type)===Zi,u,"argument-error");const m=await ea(u,h,t);return wu(u,m)}return wu(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Xt(n,s,"sendVerificationCode",async(l,d)=>{if(d.captchaResponse===Xi){v((t==null?void 0:t.type)===Zi,l,"argument-error");const u=await ea(l,d,t);return _u(l,u)}return _u(l,d)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t==null||t._reset()}}async function IR(n,e){const t=x(n);if(ye(t.auth.app))return Promise.reject(Oe(t.auth));await Ac(t,e)}async function ea(n,e,t){v(t.type===Zi,n,"argument-error");const i=await t.verify();v(typeof i=="string",n,"argument-error");const r=Object.assign({},e);if("phoneEnrollmentInfo"in r){const s=r.phoneEnrollmentInfo.phoneNumber,o=r.phoneEnrollmentInfo.captchaResponse,a=r.phoneEnrollmentInfo.clientType,c=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:i,captchaResponse:o,clientType:a,recaptchaVersion:c}}),r}else if("phoneSignInInfo"in r){const s=r.phoneSignInInfo.captchaResponse,o=r.phoneSignInInfo.clientType,a=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:s,clientType:o,recaptchaVersion:a}}),r}else return Object.assign(r,{recaptchaToken:i}),r}/**
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
 */let Pn=class ss{constructor(e){this.providerId=ss.PROVIDER_ID,this.auth=me(e)}verifyPhoneNumber(e,t){return fo(this.auth,e,x(t))}static credential(e,t){return bn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ss.credentialFromTaggedObject(t)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?bn._fromTokenResponse(t,i):null}};Pn.PROVIDER_ID="phone";Pn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */class Uc extends bi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bR(n){return Pf(n.auth,new Uc(n),n.bypassAuthState)}function TR(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),kf(t,new Uc(n),n.bypassAuthState)}async function RR(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),Ac(t,new Uc(n),n.bypassAuthState)}/**
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
 */class Hf{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bR;case"linkViaPopup":case"linkViaRedirect":return RR;case"reauthViaPopup":case"reauthViaRedirect":return TR;default:Me(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CR=new Pr(2e3,1e4);async function AR(n,e,t){if(ye(n.app))return Promise.reject(Te(n,"operation-not-supported-in-this-environment"));const i=me(n);Ii(n,e,jt);const r=$n(i,t);return new Mt(i,"signInViaPopup",e,r).executeNotNull()}async function NR(n,e,t){const i=x(n);if(ye(i.auth.app))return Promise.reject(Te(i.auth,"operation-not-supported-in-this-environment"));Ii(i.auth,e,jt);const r=$n(i.auth,t);return new Mt(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function kR(n,e,t){const i=x(n);Ii(i.auth,e,jt);const r=$n(i.auth,t);return new Mt(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class Mt extends Hf{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Mt.currentPopupAction&&Mt.currentPopupAction.cancel(),Mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=xr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CR.get())};e()}}Mt.currentPopupAction=null;/**
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
 */const PR="pendingRedirect",er=new Map;class OR extends Hf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=er.get(this.auth._key());if(!e){try{const i=await LR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}er.set(this.auth._key(),e)}return this.bypassAuthState||er.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LR(n,e){const t=jf(e),i=zf(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}async function Fc(n,e){return zf(n)._set(jf(e),"true")}function DR(){er.clear()}function Vc(n,e){er.set(n._key(),e)}function zf(n){return Ze(n._redirectPersistence)}function jf(n){return In(PR,n.config.apiKey,n.name)}/**
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
 */function MR(n,e,t){return xR(n,e,t)}async function xR(n,e,t){if(ye(n.app))return Promise.reject(Oe(n));const i=me(n);Ii(n,e,jt),await i._initializationPromise;const r=$n(i,t);return await Fc(r,i),r._openRedirect(i,e,"signInViaRedirect")}function UR(n,e,t){return FR(n,e,t)}async function FR(n,e,t){const i=x(n);if(Ii(i.auth,e,jt),ye(i.auth.app))return Promise.reject(Oe(i.auth));await i.auth._initializationPromise;const r=$n(i.auth,t);await Fc(r,i.auth);const s=await Gf(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function VR(n,e,t){return $R(n,e,t)}async function $R(n,e,t){const i=x(n);Ii(i.auth,e,jt),await i.auth._initializationPromise;const r=$n(i.auth,t);await ao(!1,i,e.providerId),await Fc(r,i.auth);const s=await Gf(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function BR(n,e){return await me(n)._initializationPromise,po(n,e,!1)}async function po(n,e,t=!1){if(ye(n.app))return Promise.reject(Oe(n));const i=me(n),r=$n(i,e),o=await new OR(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function Gf(n){const e=xr(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const WR=10*60*1e3;class qf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Kf(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Te(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eu(e))}saveEventToCache(e){this.cachedEventUids.add(Eu(e)),this.lastProcessedEventTime=Date.now()}}function Eu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Kf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kf(n);default:return!1}}/**
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
 */async function Yf(n,e={}){return Ee(n,"GET","/v1/projects",e)}/**
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
 */const zR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jR=/^https?/;async function GR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Yf(n);for(const t of e)try{if(qR(t))return}catch{}Me(n,"unauthorized-domain")}function qR(n){const e=ur(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!jR.test(t))return!1;if(zR.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const KR=new Pr(3e4,6e4);function Su(){const n=Se().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function YR(n){return new Promise((e,t)=>{var i,r,s;function o(){Su(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Su(),t(Te(n,"network-request-failed"))},timeout:KR.get()})}if(!((r=(i=Se().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Se().gapi)===null||s===void 0)&&s.load)o();else{const a=If("iframefcb");return Se()[a]=()=>{gapi.load?o():t(Te(n,"network-request-failed"))},Cc(`${Hb()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw os=null,e})}let os=null;function QR(n){return os=os||YR(n),os}/**
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
 */const JR=new Pr(5e3,15e3),XR="__/auth/iframe",ZR="emulator/auth/iframe",eC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nC(n){const e=n.config;v(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rc(e,ZR):`https://${n.config.authDomain}/${XR}`,i={apiKey:e.apiKey,appName:n.name,v:fn},r=tC.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Vn(i).slice(1)}`}async function iC(n){const e=await QR(n),t=Se().gapi;return v(t,n,"internal-error"),e.open({where:document.body,url:nC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eC,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Te(n,"network-request-failed"),a=Se().setTimeout(()=>{s(o)},JR.get());function c(){Se().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const rC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sC=500,oC=600,aC="_blank",cC="http://localhost";class Iu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lC(n,e,t,i=sC,r=oC){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},rC),{width:i.toString(),height:r.toString(),top:s,left:o}),l=Re().toLowerCase();t&&(a=gf(l)?aC:t),_f(l)&&(e=e||cC,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[m,g])=>`${h}${m}=${g},`,"");if(Lb(l)&&a!=="_self")return uC(e||"",a),new Iu(null);const u=window.open(e||"",a,d);v(u,n,"popup-blocked");try{u.focus()}catch{}return new Iu(u)}function uC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const dC="__/auth/handler",hC="emulator/auth/handler",fC=encodeURIComponent("fac");async function Ra(n,e,t,i,r,s){v(n.config.authDomain,n,"auth-domain-config-required"),v(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:fn,eventId:r};if(e instanceof jt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",_s(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof Ti){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${fC}=${encodeURIComponent(c)}`:"";return`${pC(n)}?${Vn(a).slice(1)}${l}`}function pC({config:n}){return n.emulator?Rc(n,hC):`https://${n.authDomain}/${dC}`}/**
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
 */const ta="webStorageSupport";class _C{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kn,this._completeRedirectFn=po,this._overrideRedirectResult=Vc}async _openPopup(e,t,i,r){var s;wt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ra(e,t,i,ur(),r);return lC(e,o,xr())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await Ra(e,t,i,ur(),r);return iR(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(wt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await iC(e),i=new qf(e);return t.register("authEvent",r=>(v(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ta,{type:ta},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[ta];o!==void 0&&t(!!o),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=GR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ef()||mf()||Lr()}}const mC=_C;class gC{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Rt("unexpected MultiFactorSessionType")}}}class $c extends gC{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new $c(e)}_finalizeEnroll(e,t,i){return QT(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return hR(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Qf{constructor(){}static assertion(e){return $c._fromCredential(e)}}Qf.FACTOR_ID="phone";var bu="@firebase/auth",Tu="1.8.1";/**
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
 */class vC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wC(n){sn(new ut("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sf(n)},l=new Vb(i,r,s,c);return Zb(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),sn(new ut("auth-internal",e=>{const t=me(e.getProvider("auth").getImmediate());return(i=>new vC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vt(bu,Tu,yC(n)),vt(bu,Tu,"esm2017")}/**
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
 */const EC=5*60;OS("authIdTokenMaxAge");function SC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}$b({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=Te("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",SC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wC("Browser");/**
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
 */const IC=2e3;async function bC(n,e,t){var i;const{BuildInfo:r}=On();wt(e.sessionId,"AuthEvent did not contain a session ID");const s=await NC(e.sessionId),o={};return Lr()?o.ibi=r.packageName:Or()?o.apn=r.packageName:Me(n,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=s,Ra(n,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,o)}async function TC(n){const{BuildInfo:e}=On(),t={};Lr()?t.iosBundleId=e.packageName:Or()?t.androidPackageName=e.packageName:Me(n,"operation-not-supported-in-this-environment"),await Yf(n,t)}function RC(n){const{cordova:e}=On();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(n):r=e.InAppBrowser.open(n,Ob()?"_blank":"_system","location=yes"),t(r)})})}async function CC(n,e,t){const{cordova:i}=On();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var u;s();const h=(u=i.plugins.browsertab)===null||u===void 0?void 0:u.close;typeof h=="function"&&h(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(Te(n,"redirect-cancelled-by-user"))},IC))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),Or()&&document.addEventListener("visibilitychange",d,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{r()}}function AC(n){var e,t,i,r,s,o,a,c,l,d;const u=On();v(typeof((e=u==null?void 0:u.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),v(typeof((t=u==null?void 0:u.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),v(typeof((s=(r=(i=u==null?void 0:u.cordova)===null||i===void 0?void 0:i.plugins)===null||r===void 0?void 0:r.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),v(typeof((c=(a=(o=u==null?void 0:u.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),v(typeof((d=(l=u==null?void 0:u.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function NC(n){const e=kC(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(r=>r.toString(16).padStart(2,"0")).join("")}function kC(n){if(wt(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return t}/**
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
 */const PC=20;class OC extends qf{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function LC(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:xC(),postBody:null,tenantId:n.tenantId,error:Te(n,"no-auth-event")}}function DC(n,e){return Ca()._set(Aa(n),e)}async function Ru(n){const e=await Ca()._get(Aa(n));return e&&await Ca()._remove(Aa(n)),e}function MC(n,e){var t,i;const r=FC(e);if(r.includes("/__/auth/callback")){const s=as(r),o=s.firebaseError?UC(decodeURIComponent(s.firebaseError)):null,a=(i=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],c=a?Te(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:r,postBody:null}}return null}function xC(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<PC;t++){const i=Math.floor(Math.random()*e.length);n.push(e.charAt(i))}return n.join("")}function Ca(){return Ze(Dc)}function Aa(n){return In("authEvent",n.config.apiKey,n.name)}function UC(n){try{return JSON.parse(n)}catch{return null}}function FC(n){const e=as(n),t=e.link?decodeURIComponent(e.link):void 0,i=as(t).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return as(r).link||r||i||t||n}function as(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Jn(t.join("?"))}/**
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
 */const VC=500;class $C{constructor(){this._redirectPersistence=kn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=po,this._overrideRedirectResult=Vc}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new OC(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){Me(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,r){AC(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),DR(),await this._originValidation(e);const o=LC(e,i,r);await DC(e,o);const a=await bC(e,o,t),c=await RC(a);return CC(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TC(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:r,BuildInfo:s}=On(),o=setTimeout(async()=>{await Ru(e),t.onEvent(Cu())},VC),a=async d=>{clearTimeout(o);const u=await Ru(e);let h=null;u&&(d!=null&&d.url)&&(h=MC(u,d.url)),t.onEvent(h||Cu())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,a);const c=r,l=`${s.packageName.toLowerCase()}://`;On().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(l)&&a({url:d}),typeof c=="function")try{c(d)}catch(u){console.error(u)}}}}const BC=$C;function Cu(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Te("no-auth-event")}}/**
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
 */function WC(n,e){me(n)._logFramework(e)}var HC="@firebase/auth-compat",zC="0.5.16";/**
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
 */const jC=1e3;function tr(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function GC(){return tr()==="http:"||tr()==="https:"}function Jf(n=Re()){return!!((tr()==="file:"||tr()==="ionic:"||tr()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function qC(){return no()||Vh()}function KC(){return Wh()&&(document==null?void 0:document.documentMode)===11}function YC(n=Re()){return/Edge\/\d+/.test(n)}function QC(n=Re()){return KC()||YC(n)}function Xf(){try{const n=self.localStorage,e=xr();if(n)return n.setItem(e,"1"),n.removeItem(e),QC()?ps():!0}catch{return Bc()&&ps()}return!1}function Bc(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function na(){return(GC()||Bh()||Jf())&&!qC()&&Xf()&&!Bc()}function Zf(){return Jf()&&typeof document<"u"}async function JC(){return Zf()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},jC);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function XC(){return typeof window<"u"?window:null}/**
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
 */const Je={LOCAL:"local",NONE:"none",SESSION:"session"},Vi=v,ep="persistence";function ZC(n,e){if(Vi(Object.values(Je).includes(e),n,"invalid-persistence-type"),no()){Vi(e!==Je.SESSION,n,"unsupported-persistence-type");return}if(Vh()){Vi(e===Je.NONE,n,"unsupported-persistence-type");return}if(Bc()){Vi(e===Je.NONE||e===Je.LOCAL&&ps(),n,"unsupported-persistence-type");return}Vi(e===Je.NONE||Xf(),n,"unsupported-persistence-type")}async function Na(n){await n._initializationPromise;const e=tp(),t=In(ep,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function eA(n,e){const t=tp();if(!t)return[];const i=In(ep,n,e);switch(t.getItem(i)){case Je.NONE:return[hi];case Je.LOCAL:return[fr,kn];case Je.SESSION:return[kn];default:return[]}}function tp(){var n;try{return((n=XC())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const tA=v;class Kt{constructor(){this.browserResolver=Ze(mC),this.cordovaResolver=Ze(BC),this.underlyingResolver=null,this._redirectPersistence=kn,this._completeRedirectFn=po,this._overrideRedirectResult=Vc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,r)}async _openRedirect(e,t,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Zf()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return tA(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await JC();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function np(n){return n.unwrap()}function nA(n){return n.wrapped()}/**
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
 */function iA(n){return ip(n)}function rA(n,e){var t;const i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const r=e;r.resolver=new sA(n,YT(n,e))}else if(i){const r=ip(e),s=e;r&&(s.credential=r,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}function ip(n){const{_tokenResponse:e}=n instanceof ze?n.customData:n;if(!e)return null;if(!(n instanceof ze)&&"temporaryProof"in e&&"phoneNumber"in e)return Pn.credentialFromResult(n);const t=e.providerId;if(!t||t===Ui.PASSWORD)return null;let i;switch(t){case Ui.GOOGLE:i=It;break;case Ui.FACEBOOK:i=St;break;case Ui.GITHUB:i=bt;break;case Ui.TWITTER:i=Tt;break;default:const{oauthIdToken:r,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!r&&!a?null:a?t.startsWith("saml.")?fi._create(t,a):At._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:r,accessToken:s}):new ti(t).credential({idToken:r,accessToken:s,rawNonce:c})}return n instanceof ze?i.credentialFromError(n):i.credentialFromResult(n)}function $e(n,e){return e.catch(t=>{throw t instanceof ze&&rA(n,t),t}).then(t=>{const i=t.operationType,r=t.user;return{operationType:i,credential:iA(t),additionalUserInfo:KT(t),user:xt.getOrCreate(r)}})}async function ka(n,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>$e(n,t.confirm(i))}}class sA{constructor(e,t){this.resolver=t,this.auth=nA(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return $e(np(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class xt{constructor(e){this._delegate=e,this.multiFactor=XT(e)}static getOrCreate(e){return xt.USER_MAP.has(e)||xt.USER_MAP.set(e,new xt(e)),xt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return $e(this.auth,Of(this._delegate,e))}async linkWithPhoneNumber(e,t){return ka(this.auth,ER(this._delegate,e,t))}async linkWithPopup(e){return $e(this.auth,kR(this._delegate,e,Kt))}async linkWithRedirect(e){return await Na(me(this.auth)),VR(this._delegate,e,Kt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return $e(this.auth,Lf(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return ka(this.auth,SR(this._delegate,e,t))}reauthenticateWithPopup(e){return $e(this.auth,NR(this._delegate,e,Kt))}async reauthenticateWithRedirect(e){return await Na(me(this.auth)),UR(this._delegate,e,Kt)}sendEmailVerification(e){return UT(this._delegate,e)}async unlink(e){return await IT(this._delegate,e),this}updateEmail(e){return BT(this._delegate,e)}updatePassword(e){return WT(this._delegate,e)}updatePhoneNumber(e){return IR(this._delegate,e)}updateProfile(e){return $T(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return FT(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}xt.USER_MAP=new WeakMap;/**
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
 */const $i=v;class Pa{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;$i(i,"invalid-api-key",{appName:e.name}),$i(i,"invalid-api-key",{appName:e.name});const r=typeof window<"u"?Kt:void 0;this._delegate=t.initialize({options:{persistence:oA(i,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(fb),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?xt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){eT(this._delegate,e,t)}applyActionCode(e){return AT(this._delegate,e)}checkActionCode(e){return Df(this._delegate,e)}confirmPasswordReset(e,t){return CT(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return $e(this._delegate,kT(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return xT(this._delegate,e)}isSignInWithEmailLink(e){return LT(this._delegate,e)}async getRedirectResult(){$i(na(),this._delegate,"operation-not-supported-in-this-environment");const e=await BR(this._delegate,Kt);return e?$e(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){WC(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:r,error:s,complete:o}=Au(e,t,i);return this._delegate.onAuthStateChanged(r,s,o)}onIdTokenChanged(e,t,i){const{next:r,error:s,complete:o}=Au(e,t,i);return this._delegate.onIdTokenChanged(r,s,o)}sendSignInLinkToEmail(e,t){return OT(this._delegate,e,t)}sendPasswordResetEmail(e,t){return RT(this._delegate,e,t||void 0)}async setPersistence(e){ZC(this._delegate,e);let t;switch(e){case Je.SESSION:t=kn;break;case Je.LOCAL:t=await Ze(fr)._isAvailable()?fr:Dc;break;case Je.NONE:t=hi;break;default:return Me("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return $e(this._delegate,ST(this._delegate))}signInWithCredential(e){return $e(this._delegate,co(this._delegate,e))}signInWithCustomToken(e){return $e(this._delegate,TT(this._delegate,e))}signInWithEmailAndPassword(e,t){return $e(this._delegate,PT(this._delegate,e,t))}signInWithEmailLink(e,t){return $e(this._delegate,DT(this._delegate,e,t))}signInWithPhoneNumber(e,t){return ka(this._delegate,wR(this._delegate,e,t))}async signInWithPopup(e){return $i(na(),this._delegate,"operation-not-supported-in-this-environment"),$e(this._delegate,AR(this._delegate,e,Kt))}async signInWithRedirect(e){return $i(na(),this._delegate,"operation-not-supported-in-this-environment"),await Na(this._delegate),MR(this._delegate,e,Kt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return NT(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Pa.Persistence=Je;function Au(n,e,t){let i=n;typeof n!="function"&&({next:i,error:e,complete:t}=n);const r=i;return{next:o=>r(o&&xt.getOrCreate(o)),error:e,complete:t}}function oA(n,e){const t=eA(n,e);if(typeof self<"u"&&!t.includes(fr)&&t.push(fr),typeof window<"u")for(const i of[Dc,kn])t.includes(i)||t.push(i);return t.includes(hi)||t.push(hi),t}/**
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
 */class Wc{static credential(e,t){return Pn.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Pn(np(Nn.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Wc.PHONE_SIGN_IN_METHOD=Pn.PHONE_SIGN_IN_METHOD;Wc.PROVIDER_ID=Pn.PROVIDER_ID;/**
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
 */const aA=v;class cA{constructor(e,t,i=Nn.app()){var r;aA((r=i.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new vR(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const lA="auth-compat";function uA(n){n.INTERNAL.registerComponent(new ut(lA,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Pa(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Yn.EMAIL_SIGNIN,PASSWORD_RESET:Yn.PASSWORD_RESET,RECOVER_EMAIL:Yn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Yn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Yn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Yn.VERIFY_EMAIL}},EmailAuthProvider:pn,FacebookAuthProvider:St,GithubAuthProvider:bt,GoogleAuthProvider:It,OAuthProvider:ti,SAMLAuthProvider:ys,PhoneAuthProvider:Wc,PhoneMultiFactorGenerator:Qf,RecaptchaVerifier:cA,TwitterAuthProvider:Tt,Auth:Pa,AuthCredential:bi,Error:ze}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(HC,zC)}uA(Nn);var Nu={};const ku="@firebase/database",Pu="1.0.10";/**
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
 */let rp="";function sp(n){rp=n}/**
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
 */class dA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ar(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class hA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const op=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dA(e)}}catch{}return new hA},Sn=op("localStorage"),Oa=op("sessionStorage");/**
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
 */const ii=new kr("@firebase/database"),ap=function(){let n=1;return function(){return n++}}(),cp=function(n){const e=jS(n),t=new WS;t.update(e);const i=t.digest();return pc.encodeByteArray(i)},Fr=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Fr.apply(null,i):typeof i=="object"?e+=be(i):e+=i,e+=" "}return e};let Tn=null,Ou=!0;const lp=function(n,e){w(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(ii.logLevel=X.VERBOSE,Tn=ii.log.bind(ii),e&&Oa.set("logging_enabled",!0)):typeof n=="function"?Tn=n:(Tn=null,Oa.remove("logging_enabled"))},Pe=function(...n){if(Ou===!0&&(Ou=!1,Tn===null&&Oa.get("logging_enabled")===!0&&lp(!0)),Tn){const e=Fr.apply(null,n);Tn(e)}},Vr=function(n){return function(...e){Pe(n,...e)}},La=function(...n){const e="FIREBASE INTERNAL ERROR: "+Fr(...n);ii.error(e)},Nt=function(...n){const e=`FIREBASE FATAL ERROR: ${Fr(...n)}`;throw ii.error(e),new Error(e)},Ue=function(...n){const e="FIREBASE WARNING: "+Fr(...n);ii.warn(e)},fA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_o=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},pA=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},on="[MIN_NAME]",Wt="[MAX_NAME]",Bn=function(n,e){if(n===e)return 0;if(n===on||e===Wt)return-1;if(e===on||n===Wt)return 1;{const t=Lu(n),i=Lu(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},_A=function(n,e){return n===e?0:n<e?-1:1},Bi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+be(e))},Hc=function(n){if(typeof n!="object"||n===null)return be(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=be(e[i]),t+=":",t+=Hc(n[e[i]]);return t+="}",t},up=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function Le(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const dp=function(n){w(!_o(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,o,a,c;n===0?(s=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(r?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},mA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vA(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const yA=new RegExp("^-?(0*)\\d{1,10}$"),wA=-2147483648,EA=2147483647,Lu=function(n){if(yA.test(n)){const e=Number(n);if(e>=wA&&e<=EA)return e}return null},Ri=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ue("Exception was thrown by user callback.",t),e},Math.floor(0))}},SA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},nr=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class IA{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class bA{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class ri{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ri.OWNER="owner";/**
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
 */const zc="5",hp="v",fp="s",pp="r",_p="f",mp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gp="ls",vp="p",Da="ac",yp="websocket",wp="long_polling";/**
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
 */class Ep{constructor(e,t,i,r,s=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function TA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Sp(n,e,t){w(typeof e=="string","typeof type must == string"),w(typeof t=="object","typeof params must == object");let i;if(e===yp)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===wp)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TA(n)&&(t.ns=n.namespace);const r=[];return Le(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class RA{constructor(){this.counters_={}}incrementCounter(e,t=1){et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return CS(this.counters_)}}/**
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
 */const ia={},ra={};function jc(n){const e=n.toString();return ia[e]||(ia[e]=new RA),ia[e]}function CA(n,e){const t=n.toString();return ra[t]||(ra[t]=e()),ra[t]}/**
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
 */class AA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Ri(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Du="start",NA="close",kA="pLPCommand",PA="pRTLPCB",Ip="id",bp="pw",Tp="ser",OA="cb",LA="seg",DA="ts",MA="d",xA="dframe",Rp=1870,Cp=30,UA=Rp-Cp,FA=25e3,VA=3e4;class Yt{constructor(e,t,i,r,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vr(e),this.stats_=jc(t),this.urlFn=c=>(this.appCheckToken&&(c[Da]=this.appCheckToken),Sp(t,wp,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new AA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(VA)),pA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gc((...s)=>{const[o,a,c,l,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Du)this.id=a,this.password=c;else if(o===NA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Du]="t",i[Tp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[OA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[hp]=zc,this.transportSessionId&&(i[fp]=this.transportSessionId),this.lastSessionId&&(i[gp]=this.lastSessionId),this.applicationId&&(i[vp]=this.applicationId),this.appCheckToken&&(i[Da]=this.appCheckToken),typeof location<"u"&&location.hostname&&mp.test(location.hostname)&&(i[pp]=_p);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yt.forceAllow_=!0}static forceDisallow(){Yt.forceDisallow_=!0}static isAvailable(){return Yt.forceAllow_?!0:!Yt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mA()&&!gA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=xh(t),r=up(i,UA);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[xA]="t",i[Ip]=e,i[bp]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=be(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Gc{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ap(),window[kA+this.uniqueCallbackIdentifier]=e,window[PA+this.uniqueCallbackIdentifier]=t,this.myIFrame=Gc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Pe("frame writing exception"),a.stack&&Pe(a.stack),Pe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ip]=this.myID,e[bp]=this.myPW,e[Tp]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cp+i.length<=Rp;){const o=this.pendingSegs.shift();i=i+"&"+LA+r+"="+o.seg+"&"+DA+r+"="+o.ts+"&"+MA+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(FA)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const $A=16384,BA=45e3;let Is=null;typeof MozWebSocket<"u"?Is=MozWebSocket:typeof WebSocket<"u"&&(Is=WebSocket);class ot{constructor(e,t,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vr(this.connId),this.stats_=jc(t),this.connURL=ot.connectionURL_(t,o,a,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,s){const o={};return o[hp]=zc,typeof location<"u"&&location.hostname&&mp.test(location.hostname)&&(o[pp]=_p),t&&(o[fp]=t),i&&(o[gp]=i),r&&(o[Da]=r),s&&(o[vp]=s),Sp(e,yp,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sn.set("previous_websocket_failure",!0);try{let i;Hh(),this.mySock=new Is(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Is!==null&&!ot.forceDisallow_}static previouslyFailed(){return Sn.isInMemoryStorage||Sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=ar(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=up(t,$A);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
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
 */class pi{static get ALL_TRANSPORTS(){return[Yt,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ot&&ot.isAvailable();let i=t&&!ot.previouslyFailed();if(e.webSocketOnly&&(t||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ot];else{const r=this.transports_=[];for(const s of pi.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);pi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pi.globalTransportInitialized_=!1;/**
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
 */const WA=6e4,HA=5e3,zA=10*1024,jA=100*1024,sa="t",Mu="d",GA="s",xu="r",qA="e",Uu="o",Fu="a",Vu="n",$u="p",KA="h";class YA{constructor(e,t,i,r,s,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vr("c:"+this.id+":"),this.transportManager_=new pi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=nr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sa in e){const t=e[sa];t===Fu?this.upgradeIfSecondaryHealthy_():t===xu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Uu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Bi("t",e),i=Bi("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$u,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Bi("t",e),i=Bi("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Bi(sa,e);if(Mu in e){const i=e[Mu];if(t===KA){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Vu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===GA?this.onConnectionShutdown_(i):t===xu?this.onReset_(i):t===qA?La("Server Error: "+i):t===Uu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):La("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),zc!==i&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),nr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):nr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$u,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ap{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Np{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){w(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class bs extends Np{static getInstance(){return new bs}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Bu=32,Wu=768;class J{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function K(){return new J("")}function B(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function an(n){return n.pieces_.length-n.pieceNum_}function ie(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new J(n.pieces_,e)}function qc(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function QA(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function pr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function kp(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new J(e,0)}function he(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof J)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new J(t,0)}function W(n){return n.pieceNum_>=n.pieces_.length}function Fe(n,e){const t=B(n),i=B(e);if(t===null)return e;if(t===i)return Fe(ie(n),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function JA(n,e){const t=pr(n,0),i=pr(e,0);for(let r=0;r<t.length&&r<i.length;r++){const s=Bn(t[r],i[r]);if(s!==0)return s}return t.length===i.length?0:t.length<i.length?-1:1}function Kc(n,e){if(an(n)!==an(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function at(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(an(n)>an(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class XA{constructor(e,t){this.errorPrefix_=t,this.parts_=pr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=io(this.parts_[i]);Pp(this)}}function ZA(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=io(e),Pp(n)}function eN(n){const e=n.parts_.pop();n.byteLength_-=io(e),n.parts_.length>0&&(n.byteLength_-=1)}function Pp(n){if(n.byteLength_>Wu)throw new Error(n.errorPrefix_+"has a key path longer than "+Wu+" bytes ("+n.byteLength_+").");if(n.parts_.length>Bu)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bu+") or object contains a cycle "+yn(n))}function yn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Yc extends Np{static getInstance(){return new Yc}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Wi=1e3,tN=60*5*1e3,Hu=30*1e3,nN=1.3,iN=3e4,rN="server_kill",zu=3;class Vt extends Ap{constructor(e,t,i,r,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Vt.nextPersistentConnectionId_++,this.log_=Vr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wi,this.maxReconnectDelay_=tN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Hh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(be(s)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new Be,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;Vt.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&et(e,"w")){const i=An(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||BS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=$S(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):La("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iN&&(this.reconnectDelay_=Wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Vt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(u){w(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new YA(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,m=>{Ue(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(rN)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Ue(u),c())}}}interrupt(e){Pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_s(this.interruptReasons_)&&(this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>Hc(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new J(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){Pe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zu&&(this.reconnectDelay_=Hu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Pe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+rp.replace(/\./g,"-")]=1,mc()?e["framework.cordova"]=1:no()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bs.getInstance().currentlyOnline();return _s(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
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
 */class mo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new z(on,e),r=new z(on,t);return this.compare(i,r)!==0}minPost(){return z.MIN}}/**
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
 */let ts;class Op extends mo{static get __EMPTY_NODE(){return ts}static set __EMPTY_NODE(e){ts=e}compare(e,t){return Bn(e.name,t.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return z.MIN}maxPost(){return new z(Wt,ts)}makePost(e,t){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,ts)}toString(){return".key"}}const Ct=new Op;/**
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
 */class ns{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??ke.RED,this.left=r??We.EMPTY_NODE,this.right=s??We.EMPTY_NODE}copy(e,t,i,r,s){return new ke(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class sN{copy(e,t,i,r,s){return this}insert(e,t,i){return new ke(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,t=We.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new We(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ns(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ns(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ns(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ns(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new sN;/**
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
 */function oN(n,e){return Bn(n.name,e.name)}function Qc(n,e){return Bn(n,e)}/**
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
 */let Ma;function aN(n){Ma=n}const Lp=function(n){return typeof n=="number"?"number:"+dp(n):"string:"+n},Dp=function(n){if(n.isLeafNode()){const e=n.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&et(e,".sv"),"Priority must be a string or number.")}else w(n===Ma||n.isEmpty(),"priority of unexpected type.");w(n===Ma||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ju;class Ae{static set __childrenNodeConstructor(e){ju=e}static get __childrenNodeConstructor(){return ju}constructor(e,t=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Dp(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:B(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=B(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(w(i!==".priority"||an(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lp(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=dp(this.value_):e+=this.value_,this.lazyHash_=cp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=Ae.VALUE_TYPE_ORDER.indexOf(t),s=Ae.VALUE_TYPE_ORDER.indexOf(i);return w(r>=0,"Unknown leaf type: "+t),w(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Mp,xp;function cN(n){Mp=n}function lN(n){xp=n}class uN extends mo{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?Bn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Wt,new Ae("[PRIORITY-POST]",xp))}makePost(e,t){const i=Mp(e);return new z(t,new Ae("[PRIORITY-POST]",i))}toString(){return".priority"}}const ae=new uN;/**
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
 */const dN=Math.log(2);class hN{constructor(e){const t=s=>parseInt(Math.log(s)/dN,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ts=function(n,e,t,i){n.sort(e);const r=function(c,l){const d=l-c;let u,h;if(d===0)return null;if(d===1)return u=n[c],h=t?t(u):u,new ke(h,u.node,ke.BLACK,null,null);{const m=parseInt(d/2,10)+c,g=r(c,m),E=r(m+1,l);return u=n[m],h=t?t(u):u,new ke(h,u.node,ke.BLACK,g,E)}},s=function(c){let l=null,d=null,u=n.length;const h=function(g,E){const M=u-g,Z=u;u-=g;const A=r(M+1,Z),U=n[M],ne=t?t(U):U;m(new ke(ne,U.node,E,null,A))},m=function(g){l?(l.left=g,l=g):(d=g,l=g)};for(let g=0;g<c.count;++g){const E=c.nextBitIsOne(),M=Math.pow(2,c.count-(g+1));E?h(M,ke.BLACK):(h(M,ke.BLACK),h(M,ke.RED))}return d},o=new hN(n.length),a=s(o);return new We(i||e,a)};/**
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
 */let oa;const Qn={};class Ut{static get Default(){return w(Qn&&ae,"ChildrenNode.ts has not been loaded"),oa=oa||new Ut({".priority":Qn},{".priority":ae}),oa}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=An(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof We?t:null}hasIndex(e){return et(this.indexSet_,e.toString())}addIndex(e,t){w(e!==Ct,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(z.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Ts(i,e.getCompare()):a=Qn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new Ut(d,l)}addToIndexes(e,t){const i=ms(this.indexes_,(r,s)=>{const o=An(this.indexSet_,s);if(w(o,"Missing index implementation for "+s),r===Qn)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(z.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ts(a,o.getCompare())}else return Qn;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new z(e.name,a))),c.insert(e,e.node)}});return new Ut(i,this.indexSet_)}removeFromIndexes(e,t){const i=ms(this.indexes_,r=>{if(r===Qn)return r;{const s=t.get(e.name);return s?r.remove(new z(e.name,s)):r}});return new Ut(i,this.indexSet_)}}/**
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
 */let Hi;class k{static get EMPTY_NODE(){return Hi||(Hi=new k(new We(Qc),null,Ut.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Dp(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hi}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Hi:t}}getChild(e){const t=B(e);return t===null?this:this.getImmediateChild(t).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(w(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new z(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Hi:this.priorityNode_;return new k(r,o,s)}}updateChild(e,t){const i=B(e);if(i===null)return t;{w(B(e)!==".priority"||an(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(ie(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(ae,(o,a)=>{t[o]=a.val(e),i++,s&&k.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lp(this.getPriority().val())+":"),this.forEachChild(ae,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":cp(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new z(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new z(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new z(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,z.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$r?-1:0}withIndex(e){if(e===Ct||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ct||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ae),r=t.getIterator(ae);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ct?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fN extends k{constructor(){super(new We(Qc),k.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const $r=new fN;Object.defineProperties(z,{MIN:{value:new z(on,k.EMPTY_NODE)},MAX:{value:new z(Wt,$r)}});Op.__EMPTY_NODE=k.EMPTY_NODE;Ae.__childrenNodeConstructor=k;aN($r);lN($r);/**
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
 */const pN=!0;function _e(n,e=null){if(n===null)return k.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ae(t,_e(e))}if(!(n instanceof Array)&&pN){const t=[];let i=!1;if(Le(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=_e(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new z(o,c)))}}),t.length===0)return k.EMPTY_NODE;const s=Ts(t,oN,o=>o.name,Qc);if(i){const o=Ts(t,ae.getCompare());return new k(s,_e(e),new Ut({".priority":o},{".priority":ae}))}else return new k(s,_e(e),Ut.Default)}else{let t=k.EMPTY_NODE;return Le(n,(i,r)=>{if(et(n,i)&&i.substring(0,1)!=="."){const s=_e(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(_e(e))}}cN(_e);/**
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
 */class Jc extends mo{constructor(e){super(),this.indexPath_=e,w(!W(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?Bn(e.name,t.name):s}makePost(e,t){const i=_e(e),r=k.EMPTY_NODE.updateChild(this.indexPath_,i);return new z(t,r)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,$r);return new z(Wt,e)}toString(){return pr(this.indexPath_,0).join("/")}}/**
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
 */class _N extends mo{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Bn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,t){const i=_e(e);return new z(t,i)}toString(){return".value"}}const Xc=new _N;/**
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
 */function Up(n){return{type:"value",snapshotNode:n}}function _i(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function _r(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function mr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function mN(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Zc{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(_r(t,a)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(_i(t,i)):o.trackChildChange(mr(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ae,(r,s)=>{t.hasChild(r)||i.trackChildChange(_r(r,s))}),t.isLeafNode()||t.forEachChild(ae,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(mr(r,s,o))}else i.trackChildChange(_i(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class gr{constructor(e){this.indexedFilter_=new Zc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gr.getStartPost_(e),this.endPost_=gr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,r,s,o){return this.matches(new z(t,i))||(i=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=k.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(k.EMPTY_NODE);const s=this;return t.forEachChild(ae,(o,a)=>{s.matches(new z(o,a))||(r=r.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class gN{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new gr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new z(t,i))||(i=k.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=k.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(k.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,m)=>u(m,h)}else o=this.index_.getCompare();const a=e;w(a.numChildren()===this.limit_,"");const c=new z(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=r.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,c);if(d&&!i.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(mr(t,i,u)),a.updateImmediateChild(t,i);{s!=null&&s.trackChildChange(_r(t,u));const E=a.updateImmediateChild(t,k.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(_i(h.name,h.node)),E.updateImmediateChild(h.name,h.node)):E}}else return i.isEmpty()?e:d&&o(l,c)>=0?(s!=null&&(s.trackChildChange(_r(l.name,l.node)),s.trackChildChange(_i(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,k.EMPTY_NODE)):e}}/**
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
 */class go{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:on}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new go;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vN(n){return n.loadsAllData()?new Zc(n.getIndex()):n.hasLimit()?new gN(n):new gr(n)}function yN(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function wN(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function xa(n,e,t){const i=n.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,t!=null?(i.startNameSet_=!0,i.indexStartName_=t):(i.startNameSet_=!1,i.indexStartName_=""),i}function EN(n,e,t){let i;return n.index_===Ct||t?i=xa(n,e,t):i=xa(n,e,Wt),i.startAfterSet_=!0,i}function Ua(n,e,t){const i=n.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,t!==void 0?(i.endNameSet_=!0,i.indexEndName_=t):(i.endNameSet_=!1,i.indexEndName_=""),i}function SN(n,e,t){let i;return n.index_===Ct||t?i=Ua(n,e,t):i=Ua(n,e,on),i.endBeforeSet_=!0,i}function vo(n,e){const t=n.copy();return t.index_=e,t}function Gu(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ae?t="$priority":n.index_===Xc?t="$value":n.index_===Ct?t="$key":(w(n.index_ instanceof Jc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=be(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=be(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+be(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=be(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+be(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function qu(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ae&&(e.i=n.index_.toString()),e}/**
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
 */class Rs extends Ap{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Vr("p:rest:"),this.listens_={}}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Rs.getListenId_(e,i),a={};this.listens_[o]=a;const c=Gu(e._queryParams);this.restRequest_(s+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(s,u,!1,i),An(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",r(h,null)}})}unlisten(e,t){const i=Rs.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Gu(e._queryParams),i=e._path.toString(),r=new Be;return this.restRequest_(i+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ar(a.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class IN{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Cs(){return{value:null,children:new Map}}function Ci(n,e,t){if(W(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=B(e);n.children.has(i)||n.children.set(i,Cs());const r=n.children.get(i);e=ie(e),Ci(r,e,t)}}function Fa(n,e){if(W(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ae,(i,r)=>{Ci(n,new J(i),r)}),Fa(n,e)}}else if(n.children.size>0){const t=B(e);return e=ie(e),n.children.has(t)&&Fa(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Va(n,e,t){n.value!==null?t(e,n.value):bN(n,(i,r)=>{const s=new J(e.toString()+"/"+i);Va(r,s,t)})}function bN(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class TN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Le(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
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
 */const Ku=10*1e3,RN=30*1e3,CN=5*60*1e3;class AN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new TN(e);const i=Ku+(RN-Ku)*Math.random();nr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Le(e,(r,s)=>{s>0&&et(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),nr(this.reportStats_.bind(this),Math.floor(Math.random()*2*CN))}}/**
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
 */var gt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function el(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nl(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class As{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=gt.ACK_USER_WRITE,this.source=el()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new J(e));return new As(K(),t,this.revert)}}else return w(B(this.path)===e,"operationForChild called for unrelated child."),new As(ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class cn{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const t=B(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class NN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kN(n,e,t,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(mN(o.childName,o.snapshotNode))}),zi(n,r,"child_removed",e,i,t),zi(n,r,"child_added",e,i,t),zi(n,r,"child_moved",s,i,t),zi(n,r,"child_changed",e,i,t),zi(n,r,"value",e,i,t),r}function zi(n,e,t,i,r,s){const o=i.filter(a=>a.type===t);o.sort((a,c)=>ON(n,a,c)),o.forEach(a=>{const c=PN(n,a,s);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function PN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ON(n,e,t){if(e.childName==null||t.childName==null)throw Si("Should only compare child_ events.");const i=new z(e.childName,e.snapshotNode),r=new z(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
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
 */function yo(n,e){return{eventCache:n,serverCache:e}}function ir(n,e,t,i){return yo(new cn(e,t,i),n.serverCache)}function Fp(n,e,t,i){return yo(n.eventCache,new cn(e,t,i))}function Ns(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Dn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let aa;const LN=()=>(aa||(aa=new We(_A)),aa);class oe{static fromObject(e){let t=new oe(null);return Le(e,(i,r)=>{t=t.set(new J(i),r)}),t}constructor(e,t=LN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:K(),value:this.value};if(W(e))return null;{const i=B(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(ie(e),t);return s!=null?{path:he(new J(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const t=B(e),i=this.children.get(t);return i!==null?i.subtree(ie(e)):new oe(null)}}set(e,t){if(W(e))return new oe(t,this.children);{const i=B(e),s=(this.children.get(i)||new oe(null)).set(ie(e),t),o=this.children.insert(i,s);return new oe(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const t=B(e),i=this.children.get(t);if(i){const r=i.remove(ie(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new oe(null):new oe(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const t=B(e),i=this.children.get(t);return i?i.get(ie(e)):null}}setTree(e,t){if(W(e))return t;{const i=B(e),s=(this.children.get(i)||new oe(null)).setTree(ie(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new oe(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(he(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,K(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(W(e))return null;{const s=B(e),o=this.children.get(s);return o?o.findOnPath_(ie(e),he(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,K(),t)}foreachOnPath_(e,t,i){if(W(e))return this;{this.value&&i(t,this.value);const r=B(e),s=this.children.get(r);return s?s.foreachOnPath_(ie(e),he(t,r),i):new oe(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(he(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new oe(null))}}function rr(n,e,t){if(W(e))return new yt(new oe(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Fe(r,e);return s=s.updateChild(o,t),new yt(n.writeTree_.set(r,s))}else{const r=new oe(t),s=n.writeTree_.setTree(e,r);return new yt(s)}}}function $a(n,e,t){let i=n;return Le(t,(r,s)=>{i=rr(i,he(e,r),s)}),i}function Yu(n,e){if(W(e))return yt.empty();{const t=n.writeTree_.setTree(e,new oe(null));return new yt(t)}}function Ba(n,e){return Wn(n,e)!=null}function Wn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Fe(t.path,e)):null}function Qu(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ae,(i,r)=>{e.push(new z(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new z(i,r.value))}),e}function Zt(n,e){if(W(e))return n;{const t=Wn(n,e);return t!=null?new yt(new oe(t)):new yt(n.writeTree_.subtree(e))}}function Wa(n){return n.writeTree_.isEmpty()}function gi(n,e){return Vp(K(),n.writeTree_,e)}function Vp(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(w(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=Vp(he(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(he(n,".priority"),i)),t}}/**
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
 */function wo(n,e){return Hp(e,n)}function DN(n,e,t,i,r){w(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=rr(n.visibleWrites,e,t)),n.lastWriteId=i}function MN(n,e,t,i){w(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=$a(n.visibleWrites,e,t),n.lastWriteId=i}function xN(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function UN(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);w(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&FN(a,i.path)?r=!1:at(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return VN(n),!0;if(i.snap)n.visibleWrites=Yu(n.visibleWrites,i.path);else{const a=i.children;Le(a,c=>{n.visibleWrites=Yu(n.visibleWrites,he(i.path,c))})}return!0}else return!1}function FN(n,e){if(n.snap)return at(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&at(he(n.path,t),e))return!0;return!1}function VN(n){n.visibleWrites=$p(n.allWrites,$N,K()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function $N(n){return n.visible}function $p(n,e,t){let i=yt.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const o=s.path;let a;if(s.snap)at(t,o)?(a=Fe(t,o),i=rr(i,a,s.snap)):at(o,t)&&(a=Fe(o,t),i=rr(i,K(),s.snap.getChild(a)));else if(s.children){if(at(t,o))a=Fe(t,o),i=$a(i,a,s.children);else if(at(o,t))if(a=Fe(o,t),W(a))i=$a(i,K(),s.children);else{const c=An(s.children,B(a));if(c){const l=c.getChild(ie(a));i=rr(i,K(),l)}}}else throw Si("WriteRecord should have .snap or .children")}}return i}function Bp(n,e,t,i,r){if(!i&&!r){const s=Wn(n.visibleWrites,e);if(s!=null)return s;{const o=Zt(n.visibleWrites,e);if(Wa(o))return t;if(t==null&&!Ba(o,K()))return null;{const a=t||k.EMPTY_NODE;return gi(o,a)}}}else{const s=Zt(n.visibleWrites,e);if(!r&&Wa(s))return t;if(!r&&t==null&&!Ba(s,K()))return null;{const o=function(l){return(l.visible||r)&&(!i||!~i.indexOf(l.writeId))&&(at(l.path,e)||at(e,l.path))},a=$p(n.allWrites,o,e),c=t||k.EMPTY_NODE;return gi(a,c)}}}function BN(n,e,t){let i=k.EMPTY_NODE;const r=Wn(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ae,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){const s=Zt(n.visibleWrites,e);return t.forEachChild(ae,(o,a)=>{const c=gi(Zt(s,new J(o)),a);i=i.updateImmediateChild(o,c)}),Qu(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Zt(n.visibleWrites,e);return Qu(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function WN(n,e,t,i,r){w(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=he(e,t);if(Ba(n.visibleWrites,s))return null;{const o=Zt(n.visibleWrites,s);return Wa(o)?r.getChild(t):gi(o,r.getChild(t))}}function HN(n,e,t,i){const r=he(e,t),s=Wn(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const o=Zt(n.visibleWrites,r);return gi(o,i.getNode().getImmediateChild(t))}else return null}function zN(n,e){return Wn(n.visibleWrites,e)}function jN(n,e,t,i,r,s,o){let a;const c=Zt(n.visibleWrites,e),l=Wn(c,K());if(l!=null)a=l;else if(t!=null)a=gi(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=h.getNext();for(;m&&d.length<r;)u(m,i)!==0&&d.push(m),m=h.getNext();return d}else return[]}function GN(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function ks(n,e,t,i){return Bp(n.writeTree,n.treePath,e,t,i)}function il(n,e){return BN(n.writeTree,n.treePath,e)}function Ju(n,e,t,i){return WN(n.writeTree,n.treePath,e,t,i)}function Ps(n,e){return zN(n.writeTree,he(n.treePath,e))}function qN(n,e,t,i,r,s){return jN(n.writeTree,n.treePath,e,t,i,r,s)}function rl(n,e,t){return HN(n.writeTree,n.treePath,e,t)}function Wp(n,e){return Hp(he(n.treePath,e),n.writeTree)}function Hp(n,e){return{treePath:n,writeTree:e}}/**
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
 */class KN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;w(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),w(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,mr(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,_r(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,_i(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,mr(i,e.snapshotNode,r.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class YN{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const zp=new YN;class sl{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rl(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Dn(this.viewCache_),s=qN(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function QN(n){return{filter:n}}function JN(n,e){w(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function XN(n,e,t,i,r){const s=new KN;let o,a;if(t.type===gt.OVERWRITE){const l=t;l.source.fromUser?o=Ha(n,e,l.path,l.snap,i,r,s):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!W(l.path),o=Os(n,e,l.path,l.snap,i,r,a,s))}else if(t.type===gt.MERGE){const l=t;l.source.fromUser?o=ek(n,e,l.path,l.children,i,r,s):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=za(n,e,l.path,l.children,i,r,a,s))}else if(t.type===gt.ACK_USER_WRITE){const l=t;l.revert?o=ik(n,e,l.path,i,r,s):o=tk(n,e,l.path,l.affectedTree,i,r,s)}else if(t.type===gt.LISTEN_COMPLETE)o=nk(n,e,t.path,i,s);else throw Si("Unknown operation type: "+t.type);const c=s.getChanges();return ZN(e,o,c),{viewCache:o,changes:c}}function ZN(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Ns(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(Up(Ns(e)))}}function jp(n,e,t,i,r,s){const o=e.eventCache;if(Ps(i,t)!=null)return e;{let a,c;if(W(t))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Dn(e),d=l instanceof k?l:k.EMPTY_NODE,u=il(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const l=ks(i,Dn(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=B(t);if(l===".priority"){w(an(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=Ju(i,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=ie(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=Ju(i,t,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=rl(i,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,r,s):a=o.getNode()}}return ir(e,a,o.isFullyInitialized()||W(t),n.filter.filtersNodes())}}function Os(n,e,t,i,r,s,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(W(t))l=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(t,i);l=d.updateFullNode(c.getNode(),m,null)}else{const m=B(t);if(!c.isCompleteForPath(t)&&an(t)>1)return e;const g=ie(t),M=c.getNode().getImmediateChild(m).updateChild(g,i);m===".priority"?l=d.updatePriority(c.getNode(),M):l=d.updateChild(c.getNode(),m,M,g,zp,null)}const u=Fp(e,l,c.isFullyInitialized()||W(t),d.filtersNodes()),h=new sl(r,u,s);return jp(n,u,t,r,h,a)}function Ha(n,e,t,i,r,s,o){const a=e.eventCache;let c,l;const d=new sl(r,e,s);if(W(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=ir(e,l,!0,n.filter.filtersNodes());else{const u=B(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=ir(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=ie(t),m=a.getNode().getImmediateChild(u);let g;if(W(h))g=i;else{const E=d.getCompleteChild(u);E!=null?qc(h)===".priority"&&E.getChild(kp(h)).isEmpty()?g=E:g=E.updateChild(h,i):g=k.EMPTY_NODE}if(m.equals(g))c=e;else{const E=n.filter.updateChild(a.getNode(),u,g,h,d,o);c=ir(e,E,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Xu(n,e){return n.eventCache.isCompleteForChild(e)}function ek(n,e,t,i,r,s,o){let a=e;return i.foreach((c,l)=>{const d=he(t,c);Xu(e,B(d))&&(a=Ha(n,a,d,l,r,s,o))}),i.foreach((c,l)=>{const d=he(t,c);Xu(e,B(d))||(a=Ha(n,a,d,l,r,s,o))}),a}function Zu(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function za(n,e,t,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;W(t)?l=i:l=new oe(null).setTree(t,i);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const m=e.serverCache.getNode().getImmediateChild(u),g=Zu(n,m,h);c=Os(n,c,new J(u),g,r,s,o,a)}}),l.children.inorderTraversal((u,h)=>{const m=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!m){const g=e.serverCache.getNode().getImmediateChild(u),E=Zu(n,g,h);c=Os(n,c,new J(u),E,r,s,o,a)}}),c}function tk(n,e,t,i,r,s,o){if(Ps(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(W(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Os(n,e,t,c.getNode().getChild(t),r,s,a,o);if(W(t)){let l=new oe(null);return c.getNode().forEachChild(Ct,(d,u)=>{l=l.set(new J(d),u)}),za(n,e,t,l,r,s,a,o)}else return e}else{let l=new oe(null);return i.foreach((d,u)=>{const h=he(t,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),za(n,e,t,l,r,s,a,o)}}function nk(n,e,t,i,r){const s=e.serverCache,o=Fp(e,s.getNode(),s.isFullyInitialized()||W(t),s.isFiltered());return jp(n,o,t,i,zp,r)}function ik(n,e,t,i,r,s){let o;if(Ps(i,t)!=null)return e;{const a=new sl(i,e,r),c=e.eventCache.getNode();let l;if(W(t)||B(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ks(i,Dn(e));else{const u=e.serverCache.getNode();w(u instanceof k,"serverChildren would be complete if leaf node"),d=il(i,u)}d=d,l=n.filter.updateFullNode(c,d,s)}else{const d=B(t);let u=rl(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,ie(t),a,s):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,k.EMPTY_NODE,ie(t),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ks(i,Dn(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||Ps(i,K())!=null,ir(e,l,o,n.filter.filtersNodes())}}/**
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
 */class rk{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Zc(i.getIndex()),s=vN(i);this.processor_=QN(s);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(k.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(k.EMPTY_NODE,a.getNode(),null),d=new cn(c,o.isFullyInitialized(),r.filtersNodes()),u=new cn(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=yo(u,d),this.eventGenerator_=new NN(this.query_)}get query(){return this.query_}}function sk(n){return n.viewCache_.serverCache.getNode()}function ok(n){return Ns(n.viewCache_)}function ak(n,e){const t=Dn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!W(e)&&!t.getImmediateChild(B(e)).isEmpty())?t.getChild(e):null}function ed(n){return n.eventRegistrations_.length===0}function ck(n,e){n.eventRegistrations_.push(e)}function td(n,e,t){const i=[];if(t){w(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function nd(n,e,t,i){e.type===gt.MERGE&&e.source.queryId!==null&&(w(Dn(n.viewCache_),"We should always have a full cache before handling merges"),w(Ns(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=XN(n.processor_,r,e,t,i);return JN(n.processor_,s.viewCache),w(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,Gp(n,s.changes,s.viewCache.eventCache.getNode(),null)}function lk(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ae,(s,o)=>{i.push(_i(s,o))}),t.isFullyInitialized()&&i.push(Up(t.getNode())),Gp(n,i,t.getNode(),e)}function Gp(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return kN(n.eventGenerator_,e,t,r)}/**
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
 */let Ls;class qp{constructor(){this.views=new Map}}function uk(n){w(!Ls,"__referenceConstructor has already been defined"),Ls=n}function dk(){return w(Ls,"Reference.ts has not been loaded"),Ls}function hk(n){return n.views.size===0}function ol(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return w(s!=null,"SyncTree gave us an op for an invalid query."),nd(s,e,t,i)}else{let s=[];for(const o of n.views.values())s=s.concat(nd(o,e,t,i));return s}}function Kp(n,e,t,i,r){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=ks(t,r?i:null),c=!1;a?c=!0:i instanceof k?(a=il(t,i),c=!1):(a=k.EMPTY_NODE,c=!1);const l=yo(new cn(a,c,!1),new cn(i,r,!1));return new rk(e,l)}return o}function fk(n,e,t,i,r,s){const o=Kp(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),ck(o,t),lk(o,t)}function pk(n,e,t,i){const r=e._queryIdentifier,s=[];let o=[];const a=ln(n);if(r==="default")for(const[c,l]of n.views.entries())o=o.concat(td(l,t,i)),ed(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const c=n.views.get(r);c&&(o=o.concat(td(c,t,i)),ed(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!ln(n)&&s.push(new(dk())(e._repo,e._path)),{removed:s,events:o}}function Yp(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function en(n,e){let t=null;for(const i of n.views.values())t=t||ak(i,e);return t}function Qp(n,e){if(e._queryParams.loadsAllData())return Eo(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Jp(n,e){return Qp(n,e)!=null}function ln(n){return Eo(n)!=null}function Eo(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ds;function _k(n){w(!Ds,"__referenceConstructor has already been defined"),Ds=n}function mk(){return w(Ds,"Reference.ts has not been loaded"),Ds}let gk=1;class id{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=GN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function al(n,e,t,i,r){return DN(n.pendingWriteTree_,e,t,i,r),r?Ai(n,new Ln(el(),e,t)):[]}function vk(n,e,t,i){MN(n.pendingWriteTree_,e,t,i);const r=oe.fromObject(t);return Ai(n,new mi(el(),e,r))}function Qt(n,e,t=!1){const i=xN(n.pendingWriteTree_,e);if(UN(n.pendingWriteTree_,e)){let s=new oe(null);return i.snap!=null?s=s.set(K(),!0):Le(i.children,o=>{s=s.set(new J(o),!0)}),Ai(n,new As(i.path,s,t))}else return[]}function Br(n,e,t){return Ai(n,new Ln(tl(),e,t))}function yk(n,e,t){const i=oe.fromObject(t);return Ai(n,new mi(tl(),e,i))}function wk(n,e){return Ai(n,new vr(tl(),e))}function Ek(n,e,t){const i=cl(n,t);if(i){const r=ll(i),s=r.path,o=r.queryId,a=Fe(s,e),c=new vr(nl(o),a);return ul(n,s,c)}else return[]}function Ms(n,e,t,i,r=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Jp(o,e))){const c=pk(o,e,t,i);hk(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!r){const d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(s,(h,m)=>ln(m));if(d&&!u){const h=n.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=bk(h);for(let g=0;g<m.length;++g){const E=m[g],M=E.query,Z=t_(n,E);n.listenProvider_.startListening(sr(M),yr(n,M),Z.hashFn,Z.onComplete)}}}!u&&l.length>0&&!i&&(d?n.listenProvider_.stopListening(sr(e),null):l.forEach(h=>{const m=n.queryToTagMap.get(Io(h));n.listenProvider_.stopListening(sr(h),m)}))}Tk(n,l)}return a}function Xp(n,e,t,i){const r=cl(n,i);if(r!=null){const s=ll(r),o=s.path,a=s.queryId,c=Fe(o,e),l=new Ln(nl(a),c,t);return ul(n,o,l)}else return[]}function Sk(n,e,t,i){const r=cl(n,i);if(r){const s=ll(r),o=s.path,a=s.queryId,c=Fe(o,e),l=oe.fromObject(t),d=new mi(nl(a),c,l);return ul(n,o,d)}else return[]}function ja(n,e,t,i=!1){const r=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(r,(h,m)=>{const g=Fe(h,r);s=s||en(m,g),o=o||ln(m)});let a=n.syncPointTree_.get(r);a?(o=o||ln(a),s=s||en(a,K())):(a=new qp,n.syncPointTree_=n.syncPointTree_.set(r,a));let c;s!=null?c=!0:(c=!1,s=k.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((m,g)=>{const E=en(g,K());E&&(s=s.updateImmediateChild(m,E))}));const l=Jp(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=Io(e);w(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=Rk();n.queryToTagMap.set(h,m),n.tagToQueryMap.set(m,h)}const d=wo(n.pendingWriteTree_,r);let u=fk(a,e,t,d,s,c);if(!l&&!o&&!i){const h=Qp(a,e);u=u.concat(Ck(n,e,h))}return u}function So(n,e,t){const r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Fe(o,e),l=en(a,c);if(l)return l});return Bp(r,e,s,t,!0)}function Ik(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=Fe(l,t);i=i||en(d,u)});let r=n.syncPointTree_.get(t);r?i=i||en(r,K()):(r=new qp,n.syncPointTree_=n.syncPointTree_.set(t,r));const s=i!=null,o=s?new cn(i,!0,!1):null,a=wo(n.pendingWriteTree_,e._path),c=Kp(r,e,a,s?o.getNode():k.EMPTY_NODE,s);return ok(c)}function Ai(n,e){return Zp(e,n.syncPointTree_,null,wo(n.pendingWriteTree_,K()))}function Zp(n,e,t,i){if(W(n.path))return e_(n,e,t,i);{const r=e.get(K());t==null&&r!=null&&(t=en(r,K()));let s=[];const o=B(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=Wp(i,o);s=s.concat(Zp(a,c,l,d))}return r&&(s=s.concat(ol(r,n,i,t))),s}}function e_(n,e,t,i){const r=e.get(K());t==null&&r!=null&&(t=en(r,K()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Wp(i,o),d=n.operationForChild(o);d&&(s=s.concat(e_(d,a,c,l)))}),r&&(s=s.concat(ol(r,n,i,t))),s}function t_(n,e){const t=e.query,i=yr(n,t);return{hashFn:()=>(sk(e)||k.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?Ek(n,t._path,i):wk(n,t._path);{const s=vA(r,t);return Ms(n,t,null,s)}}}}function yr(n,e){const t=Io(e);return n.queryToTagMap.get(t)}function Io(n){return n._path.toString()+"$"+n._queryIdentifier}function cl(n,e){return n.tagToQueryMap.get(e)}function ll(n){const e=n.indexOf("$");return w(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new J(n.substr(0,e))}}function ul(n,e,t){const i=n.syncPointTree_.get(e);w(i,"Missing sync point for query tag that we're tracking");const r=wo(n.pendingWriteTree_,e);return ol(i,t,r,null)}function bk(n){return n.fold((e,t,i)=>{if(t&&ln(t))return[Eo(t)];{let r=[];return t&&(r=Yp(t)),Le(i,(s,o)=>{r=r.concat(o)}),r}})}function sr(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(mk())(n._repo,n._path):n}function Tk(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const r=Io(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function Rk(){return gk++}function Ck(n,e,t){const i=e._path,r=yr(n,e),s=t_(n,t),o=n.listenProvider_.startListening(sr(e),r,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(i);if(r)w(!ln(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!W(l)&&d&&ln(d))return[Eo(d).query];{let h=[];return d&&(h=h.concat(Yp(d).map(m=>m.query))),Le(u,(m,g)=>{h=h.concat(g)}),h}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(sr(d),yr(n,d))}}return o}/**
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
 */class dl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new dl(t)}node(){return this.node_}}class hl{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=he(this.path_,e);return new hl(this.syncTree_,t)}node(){return So(this.syncTree_,this.path_)}}const Ak=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},rd=function(n,e,t){if(!n||typeof n!="object")return n;if(w(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Nk(n[".sv"],e,t);if(typeof n[".sv"]=="object")return kk(n[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Nk=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:w(!1,"Unexpected server value: "+n)}},kk=function(n,e,t){n.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&w(!1,"Unexpected increment value: "+i);const r=e.node();if(w(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},n_=function(n,e,t,i){return pl(e,new hl(t,n),i)},fl=function(n,e,t){return pl(n,new dl(e),t)};function pl(n,e,t){const i=n.getPriority().val(),r=rd(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=rd(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new Ae(a,_e(r)):n}else{const o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Ae(r))),o.forEachChild(ae,(a,c)=>{const l=pl(c,e.getImmediateChild(a),t);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
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
 */class _l{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function bo(n,e){let t=e instanceof J?e:new J(e),i=n,r=B(t);for(;r!==null;){const s=An(i.node.children,r)||{children:{},childCount:0};i=new _l(r,i,s),t=ie(t),r=B(t)}return i}function Hn(n){return n.node.value}function ml(n,e){n.node.value=e,Ga(n)}function i_(n){return n.node.childCount>0}function Pk(n){return Hn(n)===void 0&&!i_(n)}function To(n,e){Le(n.node.children,(t,i)=>{e(new _l(t,n,i))})}function r_(n,e,t,i){t&&!i&&e(n),To(n,r=>{r_(r,e,!0,i)}),t&&i&&e(n)}function Ok(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Wr(n){return new J(n.parent===null?n.name:Wr(n.parent)+"/"+n.name)}function Ga(n){n.parent!==null&&Lk(n.parent,n.name,n)}function Lk(n,e,t){const i=Pk(t),r=et(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,Ga(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,Ga(n))}/**
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
 */const Dk=/[\[\].#$\/\u0000-\u001F\u007F]/,Mk=/[\[\].#$\u0000-\u001F\u007F]/,ca=10*1024*1024,Ro=function(n){return typeof n=="string"&&n.length!==0&&!Dk.test(n)},s_=function(n){return typeof n=="string"&&n.length!==0&&!Mk.test(n)},xk=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),s_(n)},wr=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!_o(n)||n&&typeof n=="object"&&et(n,".sv")},kt=function(n,e,t,i){i&&e===void 0||Hr(je(n,"value"),e,t)},Hr=function(n,e,t){const i=t instanceof J?new XA(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+yn(i));if(typeof e=="function")throw new Error(n+"contains a function "+yn(i)+" with contents = "+e.toString());if(_o(e))throw new Error(n+"contains "+e.toString()+" "+yn(i));if(typeof e=="string"&&e.length>ca/3&&io(e)>ca)throw new Error(n+"contains a string greater than "+ca+" utf8 bytes "+yn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Le(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ro(o)))throw new Error(n+" contains an invalid key ("+o+") "+yn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZA(i,o),Hr(n,a,i),eN(i)}),r&&s)throw new Error(n+' contains ".value" child '+yn(i)+" in addition to actual children.")}},Uk=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const s=pr(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ro(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(JA);let r=null;for(t=0;t<e.length;t++){if(i=e[t],r!==null&&at(r,i))throw new Error(n+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},o_=function(n,e,t,i){const r=je(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];Le(e,(o,a)=>{const c=new J(o);if(Hr(r,a,he(t,c)),qc(c)===".priority"&&!wr(a))throw new Error(r+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),Uk(r,s)},gl=function(n,e,t){if(_o(e))throw new Error(je(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!wr(e))throw new Error(je(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},zr=function(n,e,t,i){if(t!==void 0&&!Ro(t))throw new Error(je(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Er=function(n,e,t,i){if(!s_(t))throw new Error(je(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Fk=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Er(n,e,t)},ct=function(n,e){if(B(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},a_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ro(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!xk(t))throw new Error(je(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Vk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Co(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!Kc(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function c_(n,e,t){Co(n,t),l_(n,i=>Kc(i,e))}function tt(n,e,t){Co(n,t),l_(n,i=>at(i,e)||at(e,i))}function l_(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?($k(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function $k(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Tn&&Pe("event: "+t.toString()),Ri(i)}}}/**
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
 */const u_="repo_interrupt",Bk=25;class Wk{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Vk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cs(),this.transactionQueueTree_=new _l,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hk(n,e,t){if(n.stats_=jc(n.repoInfo_),n.forceRestClient_||SA())n.server_=new Rs(n.repoInfo_,(i,r,s,o)=>{sd(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>od(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Vt(n.repoInfo_,e,(i,r,s,o)=>{sd(n,i,r,s,o)},i=>{od(n,i)},i=>{zk(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=CA(n.repoInfo_,()=>new AN(n.stats_,n.server_)),n.infoData_=new IN,n.infoSyncTree_=new id({startListening:(i,r,s,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=Br(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vl(n,"connected",!1),n.serverSyncTree_=new id({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(a,c)=>{const l=o(a,c);tt(n.eventQueue_,i._path,l)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function d_(n){const t=n.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function jr(n){return Ak({timestamp:d_(n)})}function sd(n,e,t,i,r){n.dataUpdateCount++;const s=new J(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){const c=ms(t,l=>_e(l));o=Sk(n.serverSyncTree_,s,c,r)}else{const c=_e(t);o=Xp(n.serverSyncTree_,s,c,r)}else if(i){const c=ms(t,l=>_e(l));o=yk(n.serverSyncTree_,s,c)}else{const c=_e(t);o=Br(n.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=vi(n,s)),tt(n.eventQueue_,a,o)}function od(n,e){vl(n,"connected",e),e===!1&&qk(n)}function zk(n,e){Le(e,(t,i)=>{vl(n,t,i)})}function vl(n,e,t){const i=new J("/.info/"+e),r=_e(t);n.infoData_.updateSnapshot(i,r);const s=Br(n.infoSyncTree_,i,r);tt(n.eventQueue_,i,s)}function Ao(n){return n.nextWriteId_++}function jk(n,e,t){const i=Ik(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(r=>{const s=_e(r).withIndex(e._queryParams.getIndex());ja(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Br(n.serverSyncTree_,e._path,s);else{const a=yr(n.serverSyncTree_,e);o=Xp(n.serverSyncTree_,e._path,s,a)}return tt(n.eventQueue_,e._path,o),Ms(n.serverSyncTree_,e,t,null,!0),s},r=>(Ni(n,"get for query "+be(e)+" failed: "+r),Promise.reject(new Error(r))))}function yl(n,e,t,i,r){Ni(n,"set",{path:e.toString(),value:t,priority:i});const s=jr(n),o=_e(t,i),a=So(n.serverSyncTree_,e),c=fl(o,a,s),l=Ao(n),d=al(n.serverSyncTree_,e,c,l,!0);Co(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,m)=>{const g=h==="ok";g||Ue("set at "+e+" failed: "+h);const E=Qt(n.serverSyncTree_,l,!g);tt(n.eventQueue_,e,E),un(n,r,h,m)});const u=El(n,e);vi(n,u),tt(n.eventQueue_,u,[])}function Gk(n,e,t,i){Ni(n,"update",{path:e.toString(),value:t});let r=!0;const s=jr(n),o={};if(Le(t,(a,c)=>{r=!1,o[a]=n_(he(e,a),_e(c),n.serverSyncTree_,s)}),r)Pe("update() called with empty data.  Don't do anything."),un(n,i,"ok",void 0);else{const a=Ao(n),c=vk(n.serverSyncTree_,e,o,a);Co(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{const u=l==="ok";u||Ue("update at "+e+" failed: "+l);const h=Qt(n.serverSyncTree_,a,!u),m=h.length>0?vi(n,e):e;tt(n.eventQueue_,m,h),un(n,i,l,d)}),Le(t,l=>{const d=El(n,he(e,l));vi(n,d)}),tt(n.eventQueue_,e,[])}}function qk(n){Ni(n,"onDisconnectEvents");const e=jr(n),t=Cs();Va(n.onDisconnect_,K(),(r,s)=>{const o=n_(r,s,n.serverSyncTree_,e);Ci(t,r,o)});let i=[];Va(t,K(),(r,s)=>{i=i.concat(Br(n.serverSyncTree_,r,s));const o=El(n,r);vi(n,o)}),n.onDisconnect_=Cs(),tt(n.eventQueue_,K(),i)}function Kk(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&Fa(n.onDisconnect_,e),un(n,t,i,r)})}function ad(n,e,t,i){const r=_e(t);n.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&Ci(n.onDisconnect_,e,r),un(n,i,s,o)})}function Yk(n,e,t,i,r){const s=_e(t,i);n.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ci(n.onDisconnect_,e,s),un(n,r,o,a)})}function Qk(n,e,t,i){if(_s(t)){Pe("onDisconnect().update() called with empty data.  Don't do anything."),un(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(r,s)=>{r==="ok"&&Le(t,(o,a)=>{const c=_e(a);Ci(n.onDisconnect_,he(e,o),c)}),un(n,i,r,s)})}function Jk(n,e,t){let i;B(e._path)===".info"?i=ja(n.infoSyncTree_,e,t):i=ja(n.serverSyncTree_,e,t),c_(n.eventQueue_,e._path,i)}function qa(n,e,t){let i;B(e._path)===".info"?i=Ms(n.infoSyncTree_,e,t):i=Ms(n.serverSyncTree_,e,t),c_(n.eventQueue_,e._path,i)}function h_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(u_)}function Xk(n){n.persistentConnection_&&n.persistentConnection_.resume(u_)}function Ni(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Pe(t,...e)}function un(n,e,t,i){e&&Ri(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function Zk(n,e,t,i,r,s){Ni(n,"transaction on "+e);const o={path:e,update:t,onComplete:i,status:null,order:ap(),applyLocally:s,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=wl(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Hr("transaction failed: Data returned ",c,o.path),o.status=0;const l=bo(n.transactionQueueTree_,e),d=Hn(l)||[];d.push(o),ml(l,d);let u;typeof c=="object"&&c!==null&&et(c,".priority")?(u=An(c,".priority"),w(wr(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(So(n.serverSyncTree_,e)||k.EMPTY_NODE).getPriority().val();const h=jr(n),m=_e(c,u),g=fl(m,a,h);o.currentOutputSnapshotRaw=m,o.currentOutputSnapshotResolved=g,o.currentWriteId=Ao(n);const E=al(n.serverSyncTree_,e,g,o.currentWriteId,o.applyLocally);tt(n.eventQueue_,e,E),No(n,n.transactionQueueTree_)}}function wl(n,e,t){return So(n.serverSyncTree_,e,t)||k.EMPTY_NODE}function No(n,e=n.transactionQueueTree_){if(e||ko(n,e),Hn(e)){const t=p_(n,e);w(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&eP(n,Wr(e),t)}else i_(e)&&To(e,t=>{No(n,t)})}function eP(n,e,t){const i=t.map(l=>l.currentWriteId),r=wl(n,e,i);let s=r;const o=r.hash();for(let l=0;l<t.length;l++){const d=t[l];w(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Fe(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;n.server_.put(c.toString(),a,l=>{Ni(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(Qt(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();ko(n,bo(n.transactionQueueTree_,e)),No(n,n.transactionQueueTree_),tt(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)Ri(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Ue("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}vi(n,e)}},o)}function vi(n,e){const t=f_(n,e),i=Wr(t),r=p_(n,t);return tP(n,r,i),i}function tP(n,e,t){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Fe(t,c.path);let d=!1,u;if(w(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,r=r.concat(Qt(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Bk)d=!0,u="maxretry",r=r.concat(Qt(n.serverSyncTree_,c.currentWriteId,!0));else{const h=wl(n,c.path,o);c.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Hr("transaction failed: Data returned ",m,c.path);let g=_e(m);typeof m=="object"&&m!=null&&et(m,".priority")||(g=g.updatePriority(h.getPriority()));const M=c.currentWriteId,Z=jr(n),A=fl(g,h,Z);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=A,c.currentWriteId=Ao(n),o.splice(o.indexOf(M),1),r=r.concat(al(n.serverSyncTree_,c.path,A,c.currentWriteId,c.applyLocally)),r=r.concat(Qt(n.serverSyncTree_,M,!0))}else d=!0,u="nodata",r=r.concat(Qt(n.serverSyncTree_,c.currentWriteId,!0))}tt(n.eventQueue_,t,r),r=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}ko(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ri(i[a]);No(n,n.transactionQueueTree_)}function f_(n,e){let t,i=n.transactionQueueTree_;for(t=B(e);t!==null&&Hn(i)===void 0;)i=bo(i,t),e=ie(e),t=B(e);return i}function p_(n,e){const t=[];return __(n,e,t),t.sort((i,r)=>i.order-r.order),t}function __(n,e,t){const i=Hn(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);To(e,r=>{__(n,r,t)})}function ko(n,e){const t=Hn(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,ml(e,t.length>0?t:void 0)}To(e,i=>{ko(n,i)})}function El(n,e){const t=Wr(f_(n,e)),i=bo(n.transactionQueueTree_,e);return Ok(i,r=>{la(n,r)}),la(n,i),r_(i,r=>{la(n,r)}),t}function la(n,e){const t=Hn(e);if(t){const i=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(w(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(w(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Qt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ml(e,void 0):t.length=s+1,tt(n.eventQueue_,Wr(e),r);for(let o=0;o<i.length;o++)Ri(i[o])}}/**
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
 */function nP(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function iP(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ue(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ka=function(n,e){const t=rP(n),i=t.namespace;t.domain==="firebase.com"&&Nt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||fA();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ep(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new J(t.pathString)}},rP=function(n){let e="",t="",i="",r="",s="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(r=nP(n.substring(d,u)));const h=iP(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const m=e.slice(0,l);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */const cd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",sP=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=cd.charAt(t%64),t=Math.floor(t/64);w(t===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=cd.charAt(e[r]);return w(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class m_{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class g_{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Sl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let oP=class{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Be;return Kk(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ct("OnDisconnect.remove",this._path);const e=new Be;return ad(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ct("OnDisconnect.set",this._path),kt("OnDisconnect.set",e,this._path,!1);const t=new Be;return ad(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){ct("OnDisconnect.setWithPriority",this._path),kt("OnDisconnect.setWithPriority",e,this._path,!1),gl("OnDisconnect.setWithPriority",t);const i=new Be;return Yk(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){ct("OnDisconnect.update",this._path),o_("OnDisconnect.update",e,this._path);const t=new Be;return Qk(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};/**
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
 */class qe{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return W(this._path)?null:qc(this._path)}get ref(){return new ht(this._repo,this._path)}get _queryIdentifier(){const e=qu(this._queryParams),t=Hc(e);return t==="{}"?"default":t}get _queryObject(){return qu(this._queryParams)}isEqual(e){if(e=x(e),!(e instanceof qe))return!1;const t=this._repo===e._repo,i=Kc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+QA(this._path)}}function Po(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function _n(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Ct){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==on)throw new Error(i);if(typeof e!="string")throw new Error(r)}if(n.hasEnd()){if(n.getIndexEndName()!==Wt)throw new Error(i);if(typeof t!="string")throw new Error(r)}}else if(n.getIndex()===ae){if(e!=null&&!wr(e)||t!=null&&!wr(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(w(n.getIndex()instanceof Jc||n.getIndex()===Xc,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Oo(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ht extends qe{constructor(e,t){super(e,t,new go,!1)}get parent(){const e=kp(this._path);return e===null?null:new ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Lo=class Ya{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new J(e),i=Mn(this.ref,e);return new Ya(this._node.getChild(t),i,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Ya(r,Mn(this.ref,i),ae)))}hasChild(e){const t=new J(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function v_(n,e){return n=x(n),n._checkNotDeleted("ref"),e!==void 0?Mn(n._root,e):n._root}function ld(n,e){n=x(n),n._checkNotDeleted("refFromURL");const t=Ka(e,n._repo.repoInfo_.nodeAdmin);a_("refFromURL",t);const i=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&i.host!==n._repo.repoInfo_.host&&Nt("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+n._repo.repoInfo_.host+")"),v_(n,t.path.toString())}function Mn(n,e){return n=x(n),B(n._path)===null?Fk("child","path",e):Er("child","path",e),new ht(n._repo,he(n._path,e))}function aP(n,e){n=x(n),ct("push",n._path),kt("push",e,n._path,!0);const t=d_(n._repo),i=sP(t),r=Mn(n,i),s=Mn(n,i);let o;return e!=null?o=Il(s,e).then(()=>s):o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function cP(n){return ct("remove",n._path),Il(n,null)}function Il(n,e){n=x(n),ct("set",n._path),kt("set",e,n._path,!1);const t=new Be;return yl(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function lP(n,e){n=x(n),ct("setPriority",n._path),gl("setPriority",e);const t=new Be;return yl(n._repo,he(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function uP(n,e,t){if(ct("setWithPriority",n._path),kt("setWithPriority",e,n._path,!1),gl("setWithPriority",t),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const i=new Be;return yl(n._repo,n._path,e,t,i.wrapCallback(()=>{})),i.promise}function dP(n,e){o_("update",e,n._path);const t=new Be;return Gk(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function hP(n){n=x(n);const e=new Sl(()=>{}),t=new Gr(e);return jk(n._repo,n,t).then(i=>new Lo(i,new ht(n._repo,n._path),n._queryParams.getIndex()))}class Gr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new m_("value",this,new Lo(e.snapshotNode,new ht(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new g_(this,e,t):null}matches(e){return e instanceof Gr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Do{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new g_(this,e,t):null}createEvent(e,t){w(e.childName!=null,"Child events should have a childName.");const i=Mn(new ht(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new m_(e.type,this,new Lo(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Do?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function qr(n,e,t,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const c=t,l=(d,u)=>{qa(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new Sl(t,s||void 0),a=e==="value"?new Gr(o):new Do(e,o);return Jk(n._repo,n,a),()=>qa(n._repo,n,a)}function Qa(n,e,t,i){return qr(n,"value",e,t,i)}function ud(n,e,t,i){return qr(n,"child_added",e,t,i)}function dd(n,e,t,i){return qr(n,"child_changed",e,t,i)}function hd(n,e,t,i){return qr(n,"child_moved",e,t,i)}function fd(n,e,t,i){return qr(n,"child_removed",e,t,i)}function pd(n,e,t){let i=null;const r=t?new Sl(t):null;e==="value"?i=new Gr(r):e&&(i=new Do(e,r)),qa(n._repo,n,i)}class Et{}class y_ extends Et{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){kt("endAt",this._value,e._path,!0);const t=Ua(e._queryParams,this._value,this._key);if(Oo(t),_n(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new qe(e._repo,e._path,t,e._orderByCalled)}}function fP(n,e){return zr("endAt","key",e),new y_(n,e)}class pP extends Et{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){kt("endBefore",this._value,e._path,!1);const t=SN(e._queryParams,this._value,this._key);if(Oo(t),_n(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new qe(e._repo,e._path,t,e._orderByCalled)}}function _P(n,e){return zr("endBefore","key",e),new pP(n,e)}class w_ extends Et{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){kt("startAt",this._value,e._path,!0);const t=xa(e._queryParams,this._value,this._key);if(Oo(t),_n(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new qe(e._repo,e._path,t,e._orderByCalled)}}function mP(n=null,e){return zr("startAt","key",e),new w_(n,e)}class gP extends Et{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){kt("startAfter",this._value,e._path,!1);const t=EN(e._queryParams,this._value,this._key);if(Oo(t),_n(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new qe(e._repo,e._path,t,e._orderByCalled)}}function vP(n,e){return zr("startAfter","key",e),new gP(n,e)}class yP extends Et{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new qe(e._repo,e._path,yN(e._queryParams,this._limit),e._orderByCalled)}}function wP(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new yP(n)}class EP extends Et{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new qe(e._repo,e._path,wN(e._queryParams,this._limit),e._orderByCalled)}}function SP(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new EP(n)}class IP extends Et{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Po(e,"orderByChild");const t=new J(this._path);if(W(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new Jc(t),r=vo(e._queryParams,i);return _n(r),new qe(e._repo,e._path,r,!0)}}function bP(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Er("orderByChild","path",n),new IP(n)}class TP extends Et{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Po(e,"orderByKey");const t=vo(e._queryParams,Ct);return _n(t),new qe(e._repo,e._path,t,!0)}}function RP(){return new TP}class CP extends Et{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){Po(e,"orderByPriority");const t=vo(e._queryParams,ae);return _n(t),new qe(e._repo,e._path,t,!0)}}function AP(){return new CP}class NP extends Et{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){Po(e,"orderByValue");const t=vo(e._queryParams,Xc);return _n(t),new qe(e._repo,e._path,t,!0)}}function kP(){return new NP}class PP extends Et{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(kt("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new y_(this._value,this._key)._apply(new w_(this._value,this._key)._apply(e))}}function OP(n,e){return zr("equalTo","key",e),new PP(n,e)}function _t(n,...e){let t=x(n);for(const i of e)t=i._apply(t);return t}uk(ht);_k(ht);/**
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
 */const LP="FIREBASE_DATABASE_EMULATOR_HOST",Ja={};let DP=!1;function MP(n,e,t,i){n.repoInfo_=new Ep(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function E_(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||Nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ka(s,r),a=o.repoInfo,c,l;typeof process<"u"&&Nu&&(l=Nu[LP]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=Ka(s,r),a=o.repoInfo):c=!o.repoInfo.secure;const d=r&&c?new ri(ri.OWNER):new bA(n.name,n.options,e);a_("Invalid Firebase Database URL",o),W(o.path)||Nt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=UP(a,n,d,new IA(n.name,t));return new FP(u,n)}function xP(n,e){const t=Ja[e];(!t||t[n.key]!==n)&&Nt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),h_(n),delete t[n.key]}function UP(n,e,t,i){let r=Ja[e.name];r||(r={},Ja[e.name]=r);let s=r[n.toURLString()];return s&&Nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Wk(n,DP,t,i),r[n.toURLString()]=s,s}let FP=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ht(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nt("Cannot call "+e+" on a deleted database.")}};function S_(){pi.IS_TRANSPORT_INITIALIZED&&Ue("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function VP(){S_(),Yt.forceDisallow()}function $P(){S_(),ot.forceDisallow(),Yt.forceAllow()}function BP(n,e,t,i={}){n=x(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Nt("Cannot call useEmulator() after instance has already been initialized.");const r=n._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ri(ri.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:LS(i.mockUserToken,n.app.options.projectId);s=new ri(o)}MP(r,e,t,s)}function WP(n){n=x(n),n._checkNotDeleted("goOffline"),h_(n._repo)}function HP(n){n=x(n),n._checkNotDeleted("goOnline"),Xk(n._repo)}function zP(n,e){lp(n,e)}/**
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
 */function jP(n){sp(fn),sn(new ut("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return E_(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),vt(ku,Pu,n),vt(ku,Pu,"esm2017")}/**
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
 */const GP={".sv":"timestamp"};function qP(){return GP}function KP(n){return{".sv":{increment:n}}}/**
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
 */let YP=class{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function QP(n,e,t){var i;if(n=x(n),ct("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const r=(i=t==null?void 0:t.applyLocally)!==null&&i!==void 0?i:!0,s=new Be,o=(c,l,d)=>{let u=null;c?s.reject(c):(u=new Lo(d,new ht(n._repo,n._path),ae),s.resolve(new YP(l,u)))},a=Qa(n,()=>{});return Zk(n._repo,n._path,e,o,a,r),s.promise}Vt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Vt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};jP();const JP="@firebase/database-compat",XP="2.0.1";/**
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
 */const ZP=new kr("@firebase/database-compat"),I_=function(n){const e="FIREBASE WARNING: "+n;ZP.warn(e)};/**
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
 */const e0=function(n,e,t,i){if(t!==void 0&&typeof t!="boolean")throw new Error(je(n,e)+"must be a boolean.")},t0=function(n,e,t){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(je(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class n0{constructor(e){this._delegate=e}cancel(e){P("OnDisconnect.cancel",0,1,arguments.length),Ne("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),i=>e(i)),t}remove(e){P("OnDisconnect.remove",0,1,arguments.length),Ne("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),i=>e(i)),t}set(e,t){P("OnDisconnect.set",1,2,arguments.length),Ne("OnDisconnect.set","onComplete",t,!0);const i=this._delegate.set(e);return t&&i.then(()=>t(null),r=>t(r)),i}setWithPriority(e,t,i){P("OnDisconnect.setWithPriority",2,3,arguments.length),Ne("OnDisconnect.setWithPriority","onComplete",i,!0);const r=this._delegate.setWithPriority(e,t);return i&&r.then(()=>i(null),s=>i(s)),r}update(e,t){if(P("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,I_("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ne("OnDisconnect.update","onComplete",t,!0);const i=this._delegate.update(e);return t&&i.then(()=>t(null),r=>t(r)),i}}/**
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
 */class i0{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return P("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class tn{constructor(e,t){this._database=e,this._delegate=t}val(){return P("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return P("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return P("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return P("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return P("DataSnapshot.child",0,1,arguments.length),e=String(e),Er("DataSnapshot.child","path",e),new tn(this._database,this._delegate.child(e))}hasChild(e){return P("DataSnapshot.hasChild",1,1,arguments.length),Er("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return P("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return P("DataSnapshot.forEach",1,1,arguments.length),Ne("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new tn(this._database,t)))}hasChildren(){return P("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return P("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return P("DataSnapshot.ref",0,0,arguments.length),new Xe(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class De{constructor(e,t){this.database=e,this._delegate=t}on(e,t,i,r){var s;P("Query.on",2,4,arguments.length),Ne("Query.on","callback",t,!1);const o=De.getCancelAndContextArgs_("Query.on",i,r),a=(l,d)=>{t.call(o.context,new tn(this.database,l),d)};a.userCallback=t,a.context=o.context;const c=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return Qa(this._delegate,a,c),t;case"child_added":return ud(this._delegate,a,c),t;case"child_removed":return fd(this._delegate,a,c),t;case"child_changed":return dd(this._delegate,a,c),t;case"child_moved":return hd(this._delegate,a,c),t;default:throw new Error(je("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,i){if(P("Query.off",0,3,arguments.length),t0("Query.off",e),Ne("Query.off","callback",t,!0),Xl("Query.off","context",i),t){const r=()=>{};r.userCallback=t,r.context=i,pd(this._delegate,e,r)}else pd(this._delegate,e)}get(){return hP(this._delegate).then(e=>new tn(this.database,e))}once(e,t,i,r){P("Query.once",1,4,arguments.length),Ne("Query.once","callback",t,!0);const s=De.getCancelAndContextArgs_("Query.once",i,r),o=new Be,a=(l,d)=>{const u=new tn(this.database,l);t&&t.call(s.context,u,d),o.resolve(u)};a.userCallback=t,a.context=s.context;const c=l=>{s.cancel&&s.cancel.call(s.context,l),o.reject(l)};switch(e){case"value":Qa(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":ud(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":fd(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":dd(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":hd(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error(je("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return P("Query.limitToFirst",1,1,arguments.length),new De(this.database,_t(this._delegate,wP(e)))}limitToLast(e){return P("Query.limitToLast",1,1,arguments.length),new De(this.database,_t(this._delegate,SP(e)))}orderByChild(e){return P("Query.orderByChild",1,1,arguments.length),new De(this.database,_t(this._delegate,bP(e)))}orderByKey(){return P("Query.orderByKey",0,0,arguments.length),new De(this.database,_t(this._delegate,RP()))}orderByPriority(){return P("Query.orderByPriority",0,0,arguments.length),new De(this.database,_t(this._delegate,AP()))}orderByValue(){return P("Query.orderByValue",0,0,arguments.length),new De(this.database,_t(this._delegate,kP()))}startAt(e=null,t){return P("Query.startAt",0,2,arguments.length),new De(this.database,_t(this._delegate,mP(e,t)))}startAfter(e=null,t){return P("Query.startAfter",0,2,arguments.length),new De(this.database,_t(this._delegate,vP(e,t)))}endAt(e=null,t){return P("Query.endAt",0,2,arguments.length),new De(this.database,_t(this._delegate,fP(e,t)))}endBefore(e=null,t){return P("Query.endBefore",0,2,arguments.length),new De(this.database,_t(this._delegate,_P(e,t)))}equalTo(e,t){return P("Query.equalTo",1,2,arguments.length),new De(this.database,_t(this._delegate,OP(e,t)))}toString(){return P("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return P("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(P("Query.isEqual",1,1,arguments.length),!(e instanceof De)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,i){const r={cancel:void 0,context:void 0};if(t&&i)r.cancel=t,Ne(e,"cancel",r.cancel,!0),r.context=i,Xl(e,"context",r.context);else if(t)if(typeof t=="object"&&t!==null)r.context=t;else if(typeof t=="function")r.cancel=t;else throw new Error(je(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return r}get ref(){return new Xe(this.database,new ht(this._delegate._repo,this._delegate._path))}}class Xe extends De{constructor(e,t){super(e,new qe(t._repo,t._path,new go,!1)),this.database=e,this._delegate=t}getKey(){return P("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return P("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Xe(this.database,Mn(this._delegate,e))}getParent(){P("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Xe(this.database,e):null}getRoot(){return P("Reference.root",0,0,arguments.length),new Xe(this.database,this._delegate.root)}set(e,t){P("Reference.set",1,2,arguments.length),Ne("Reference.set","onComplete",t,!0);const i=Il(this._delegate,e);return t&&i.then(()=>t(null),r=>t(r)),i}update(e,t){if(P("Reference.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,I_("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ct("Reference.update",this._delegate._path),Ne("Reference.update","onComplete",t,!0);const i=dP(this._delegate,e);return t&&i.then(()=>t(null),r=>t(r)),i}setWithPriority(e,t,i){P("Reference.setWithPriority",2,3,arguments.length),Ne("Reference.setWithPriority","onComplete",i,!0);const r=uP(this._delegate,e,t);return i&&r.then(()=>i(null),s=>i(s)),r}remove(e){P("Reference.remove",0,1,arguments.length),Ne("Reference.remove","onComplete",e,!0);const t=cP(this._delegate);return e&&t.then(()=>e(null),i=>e(i)),t}transaction(e,t,i){P("Reference.transaction",1,3,arguments.length),Ne("Reference.transaction","transactionUpdate",e,!1),Ne("Reference.transaction","onComplete",t,!0),e0("Reference.transaction","applyLocally",i);const r=QP(this._delegate,e,{applyLocally:i}).then(s=>new i0(s.committed,new tn(this.database,s.snapshot)));return t&&r.then(s=>t(null,s.committed,s.snapshot),s=>t(s,!1,null)),r}setPriority(e,t){P("Reference.setPriority",1,2,arguments.length),Ne("Reference.setPriority","onComplete",t,!0);const i=lP(this._delegate,e);return t&&i.then(()=>t(null),r=>t(r)),i}push(e,t){P("Reference.push",0,2,arguments.length),Ne("Reference.push","onComplete",t,!0);const i=aP(this._delegate,e),r=i.then(o=>new Xe(this.database,o));t&&r.then(()=>t(null),o=>t(o));const s=new Xe(this.database,i);return s.then=r.then.bind(r),s.catch=r.catch.bind(r,void 0),s}onDisconnect(){return ct("Reference.onDisconnect",this._delegate._path),new n0(new oP(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class Sr{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:VP,forceLongPolling:$P}}useEmulator(e,t,i={}){BP(this._delegate,e,t,i)}ref(e){if(P("database.ref",0,1,arguments.length),e instanceof Xe){const t=ld(this._delegate,e.toString());return new Xe(this,t)}else{const t=v_(this._delegate,e);return new Xe(this,t)}}refFromURL(e){P("database.refFromURL",1,1,arguments.length);const i=ld(this._delegate,e);return new Xe(this,i)}goOffline(){return P("database.goOffline",0,0,arguments.length),WP(this._delegate)}goOnline(){return P("database.goOnline",0,0,arguments.length),HP(this._delegate)}}Sr.ServerValue={TIMESTAMP:qP(),increment:n=>KP(n)};function r0({app:n,url:e,version:t,customAuthImpl:i,customAppCheckImpl:r,namespace:s,nodeAdmin:o=!1}){sp(t);const a=new gc("database-standalone"),c=new wa("auth-internal",a);c.setComponent(new ut("auth-internal",()=>i,"PRIVATE"));let l;return r&&(l=new wa("app-check-internal",a),l.setComponent(new ut("app-check-internal",()=>r,"PRIVATE"))),{instance:new Sr(E_(n,c,l,e,o),n),namespace:s}}var s0=Object.freeze({__proto__:null,initStandalone:r0});/**
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
 */const o0=Sr.ServerValue;function a0(n){n.INTERNAL.registerComponent(new ut("database-compat",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new Sr(r,i)},"PUBLIC").setServiceProps({Reference:Xe,Query:De,Database:Sr,DataSnapshot:tn,enableLogging:zP,INTERNAL:s0,ServerValue:o0}).setMultipleInstances(!0)),n.registerVersion(JP,XP)}a0(Nn);const c0={apiKey:"AIzaSyBYTeM84x71LjRl3-a8TIOHX1tlyiy_5ik",authDomain:"stavehumle.firebaseapp.com",databaseURL:"https://stavehumle-default-rtdb.europe-west1.firebasedatabase.app",projectId:"stavehumle",storageBucket:"stavehumle.appspot.com",messagingSenderId:"852736381893",appId:"1:852736381893:web:be9b224f46ba1ed92871ac"};Nn.apps.length===0&&Nn.initializeApp(c0);export{_0 as R,f0 as a,d0 as b,h0 as c,p0 as d,u0 as e,Nn as f};
