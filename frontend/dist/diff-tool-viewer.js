/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ze(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const U = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ot = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, Rs = () => !1, zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), En = (e) => e.startsWith("onUpdate:"), X = Object.assign, No = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, tr = Object.prototype.hasOwnProperty, F = (e, t) => tr.call(e, t), S = Array.isArray, ut = (e) => Xt(e) === "[object Map]", $n = (e) => Xt(e) === "[object Set]", Go = (e) => Xt(e) === "[object Date]", $ = (e) => typeof e == "function", G = (e) => typeof e == "string", Le = (e) => typeof e == "symbol", j = (e) => e !== null && typeof e == "object", Oo = (e) => (j(e) || $(e)) && $(e.then) && $(e.catch), ks = Object.prototype.toString, Xt = (e) => ks.call(e), wo = (e) => Xt(e).slice(8, -1), Fs = (e) => Xt(e) === "[object Object]", Do = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ft = /* @__PURE__ */ ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nr = /* @__PURE__ */ ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), An = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, or = /-\w/g, fe = An(
  (e) => e.replace(or, (t) => t.slice(1).toUpperCase())
), sr = /\B([A-Z])/g, st = An(
  (e) => e.replace(sr, "-$1").toLowerCase()
), gt = An((e) => e.charAt(0).toUpperCase() + e.slice(1)), ct = An(
  (e) => e ? `on${gt(e)}` : ""
), at = (e, t) => !Object.is(e, t), bt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, yn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, js = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Yo;
const Zt = () => Yo || (Yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xo(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = G(o) ? cr(o) : xo(o);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (G(e) || j(e))
    return e;
}
const ir = /;(?![^(]*\))/g, rr = /:([^]+)/, lr = /\/\*[^]*?\*\//g;
function cr(e) {
  const t = {};
  return e.replace(lr, "").split(ir).forEach((n) => {
    if (n) {
      const o = n.split(rr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function wt(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (S(e))
    for (let n = 0; n < e.length; n++) {
      const o = wt(e[n]);
      o && (t += o + " ");
    }
  else if (j(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const fr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ur = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ar = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", dr = /* @__PURE__ */ ze(fr), pr = /* @__PURE__ */ ze(ur), hr = /* @__PURE__ */ ze(ar), gr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _r = /* @__PURE__ */ ze(gr);
function Ls(e) {
  return !!e || e === "";
}
function mr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = Qt(e[o], t[o]);
  return n;
}
function Qt(e, t) {
  if (e === t) return !0;
  let n = Go(e), o = Go(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Le(e), o = Le(t), n || o)
    return e === t;
  if (n = S(e), o = S(t), n || o)
    return n && o ? mr(e, t) : !1;
  if (n = j(e), o = j(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), f = t.hasOwnProperty(r);
      if (l && !f || !l && f || !Qt(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function vr(e, t) {
  return e.findIndex((n) => Qt(n, t));
}
const Bs = (e) => !!(e && e.__v_isRef === !0), jt = (e) => G(e) ? e : e == null ? "" : S(e) || j(e) && (e.toString === ks || !$(e.toString)) ? Bs(e) ? jt(e.value) : JSON.stringify(e, Hs, 2) : String(e), Hs = (e, t) => Bs(t) ? Hs(e, t.value) : ut(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], i) => (n[Wn(o, i) + " =>"] = s, n),
    {}
  )
} : $n(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Wn(n))
} : Le(t) ? Wn(t) : j(t) && !S(t) && !Fs(t) ? String(t) : t, Wn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Le(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let _e;
class Er {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = _e, !t && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = _e;
      try {
        return _e = this, t();
      } finally {
        _e = n;
      }
    } else process.env.NODE_ENV !== "production" && xe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = _e, _e = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (_e = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function yr() {
  return _e;
}
let H;
const qn = /* @__PURE__ */ new WeakSet();
class Us {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _e && _e.active && _e.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qn.has(this) && (qn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ws(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, zo(this), qs(this);
    const t = H, n = De;
    H = this, De = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && H !== this && xe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Js(this), H = t, De = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Co(t);
      this.deps = this.depsTail = void 0, zo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    so(this) && this.run();
  }
  get dirty() {
    return so(this);
  }
}
let Ks = 0, Lt, Bt;
function Ws(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bt, Bt = e;
    return;
  }
  e.next = Lt, Lt = e;
}
function Vo() {
  Ks++;
}
function So() {
  if (--Ks > 0)
    return;
  if (Bt) {
    let t = Bt;
    for (Bt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Lt; ) {
    let t = Lt;
    for (Lt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function qs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Js(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), Co(o), br(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function so(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Gs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Gs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wt) || (e.globalVersion = Wt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !so(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = H, o = De;
  H = e, De = !0;
  try {
    qs(e);
    const s = e.fn(e._value);
    (t.version === 0 || at(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    H = n, De = o, Js(e), e.flags &= -3;
  }
}
function Co(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Co(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function br(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let De = !0;
const Ys = [];
function Ve() {
  Ys.push(De), De = !1;
}
function Se() {
  const e = Ys.pop();
  De = e === void 0 ? !0 : e;
}
function zo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = H;
    H = void 0;
    try {
      t();
    } finally {
      H = n;
    }
  }
}
let Wt = 0;
class Nr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!H || !De || H === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== H)
      n = this.activeLink = new Nr(H, this), H.deps ? (n.prevDep = H.depsTail, H.depsTail.nextDep = n, H.depsTail = n) : H.deps = H.depsTail = n, Xs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = H.depsTail, n.nextDep = void 0, H.depsTail.nextDep = n, H.depsTail = n, H.deps === n && (H.deps = o);
    }
    return process.env.NODE_ENV !== "production" && H.onTrack && H.onTrack(
      X(
        {
          effect: H
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Wt++, this.notify(t);
  }
  notify(t) {
    Vo();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            X(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      So();
    }
  }
}
function Xs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Xs(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const io = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), ro = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), qt = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Z(e, t, n) {
  if (De && H) {
    let o = io.get(e);
    o || io.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new zs()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function Pe(e, t, n, o, s, i) {
  const r = io.get(e);
  if (!r) {
    Wt++;
    return;
  }
  const l = (f) => {
    f && (process.env.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: i
    }) : f.trigger());
  };
  if (Vo(), t === "clear")
    r.forEach(l);
  else {
    const f = S(e), p = f && Do(n);
    if (f && n === "length") {
      const d = Number(o);
      r.forEach((a, g) => {
        (g === "length" || g === qt || !Le(g) && g >= d) && l(a);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), p && l(r.get(qt)), t) {
        case "add":
          f ? p && l(r.get("length")) : (l(r.get(dt)), ut(e) && l(r.get(ro)));
          break;
        case "delete":
          f || (l(r.get(dt)), ut(e) && l(r.get(ro)));
          break;
        case "set":
          ut(e) && l(r.get(dt));
          break;
      }
  }
  So();
}
function vt(e) {
  const t = /* @__PURE__ */ I(e);
  return t === e ? t : (Z(t, "iterate", qt), /* @__PURE__ */ me(e) ? t : t.map(Ye));
}
function In(e) {
  return Z(e = /* @__PURE__ */ I(e), "iterate", qt), e;
}
function tt(e, t) {
  return /* @__PURE__ */ Be(e) ? Vt(/* @__PURE__ */ ot(e) ? Ye(t) : t) : Ye(t);
}
const Or = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jn(this, Symbol.iterator, (e) => tt(this, e));
  },
  concat(...e) {
    return vt(this).concat(
      ...e.map((t) => S(t) ? vt(t) : t)
    );
  },
  entries() {
    return Jn(this, "entries", (e) => (e[1] = tt(this, e[1]), e));
  },
  every(e, t) {
    return Ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ke(
      this,
      "filter",
      e,
      t,
      (n) => n.map((o) => tt(this, o)),
      arguments
    );
  },
  find(e, t) {
    return Ke(
      this,
      "find",
      e,
      t,
      (n) => tt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ke(
      this,
      "findLast",
      e,
      t,
      (n) => tt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ke(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Gn(this, "includes", e);
  },
  indexOf(...e) {
    return Gn(this, "indexOf", e);
  },
  join(e) {
    return vt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Gn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return At(this, "pop");
  },
  push(...e) {
    return At(this, "push", e);
  },
  reduce(e, ...t) {
    return Xo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Xo(this, "reduceRight", e, t);
  },
  shift() {
    return At(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return At(this, "splice", e);
  },
  toReversed() {
    return vt(this).toReversed();
  },
  toSorted(e) {
    return vt(this).toSorted(e);
  },
  toSpliced(...e) {
    return vt(this).toSpliced(...e);
  },
  unshift(...e) {
    return At(this, "unshift", e);
  },
  values() {
    return Jn(this, "values", (e) => tt(this, e));
  }
};
function Jn(e, t, n) {
  const o = In(e), s = o[t]();
  return o !== e && !/* @__PURE__ */ me(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const wr = Array.prototype;
function Ke(e, t, n, o, s, i) {
  const r = In(e), l = r !== e && !/* @__PURE__ */ me(e), f = r[t];
  if (f !== wr[t]) {
    const a = f.apply(e, i);
    return l ? Ye(a) : a;
  }
  let p = n;
  r !== e && (l ? p = function(a, g) {
    return n.call(this, tt(e, a), g, e);
  } : n.length > 2 && (p = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const d = f.call(r, p, o);
  return l && s ? s(d) : d;
}
function Xo(e, t, n, o) {
  const s = In(e);
  let i = n;
  return s !== e && (/* @__PURE__ */ me(e) ? n.length > 3 && (i = function(r, l, f) {
    return n.call(this, r, l, f, e);
  }) : i = function(r, l, f) {
    return n.call(this, r, tt(e, l), f, e);
  }), s[t](i, ...o);
}
function Gn(e, t, n) {
  const o = /* @__PURE__ */ I(e);
  Z(o, "iterate", qt);
  const s = o[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ bn(n[0]) ? (n[0] = /* @__PURE__ */ I(n[0]), o[t](...n)) : s;
}
function At(e, t, n = []) {
  Ve(), Vo();
  const o = (/* @__PURE__ */ I(e))[t].apply(e, n);
  return So(), Se(), o;
}
const Dr = /* @__PURE__ */ ze("__proto__,__v_isRef,__isVue"), Zs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Le)
);
function xr(e) {
  Le(e) || (e = String(e));
  const t = /* @__PURE__ */ I(this);
  return Z(t, "has", e), t.hasOwnProperty(e);
}
class Qs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return o === (s ? i ? ii : si : i ? oi : ni).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const r = S(t);
    if (!s) {
      let f;
      if (r && (f = Or[n]))
        return f;
      if (n === "hasOwnProperty")
        return xr;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ee(t) ? t : o
    );
    if ((Le(n) ? Zs.has(n) : Dr(n)) || (s || Z(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ ee(l)) {
      const f = r && Do(n) ? l : l.value;
      return s && j(f) ? /* @__PURE__ */ co(f) : f;
    }
    return j(l) ? s ? /* @__PURE__ */ co(l) : /* @__PURE__ */ To(l) : l;
  }
}
class ei extends Qs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let i = t[n];
    const r = S(t) && Do(n);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ Be(i);
      if (!/* @__PURE__ */ me(o) && !/* @__PURE__ */ Be(o) && (i = /* @__PURE__ */ I(i), o = /* @__PURE__ */ I(o)), !r && /* @__PURE__ */ ee(i) && !/* @__PURE__ */ ee(o))
        return p ? (process.env.NODE_ENV !== "production" && xe(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (i.value = o, !0);
    }
    const l = r ? Number(n) < t.length : F(t, n), f = Reflect.set(
      t,
      n,
      o,
      /* @__PURE__ */ ee(t) ? t : s
    );
    return t === /* @__PURE__ */ I(s) && (l ? at(o, i) && Pe(t, "set", n, o, i) : Pe(t, "add", n, o)), f;
  }
  deleteProperty(t, n) {
    const o = F(t, n), s = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && Pe(t, "delete", n, void 0, s), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Le(n) || !Zs.has(n)) && Z(t, "has", n), o;
  }
  ownKeys(t) {
    return Z(
      t,
      "iterate",
      S(t) ? "length" : dt
    ), Reflect.ownKeys(t);
  }
}
class ti extends Qs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && xe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && xe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Vr = /* @__PURE__ */ new ei(), Sr = /* @__PURE__ */ new ti(), Cr = /* @__PURE__ */ new ei(!0), Tr = /* @__PURE__ */ new ti(!0), lo = (e) => e, cn = (e) => Reflect.getPrototypeOf(e);
function Mr(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, i = /* @__PURE__ */ I(s), r = ut(i), l = e === "entries" || e === Symbol.iterator && r, f = e === "keys" && r, p = s[e](...o), d = n ? lo : t ? Vt : Ye;
    return !t && Z(
      i,
      "iterate",
      f ? ro : dt
    ), X(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: a, done: g } = p.next();
          return g ? { value: a, done: g } : {
            value: l ? [d(a[0]), d(a[1])] : d(a),
            done: g
          };
        }
      }
    );
  };
}
function fn(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      xe(
        `${gt(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ I(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $r(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, r = /* @__PURE__ */ I(i), l = /* @__PURE__ */ I(s);
      e || (at(s, l) && Z(r, "get", s), Z(r, "get", l));
      const { has: f } = cn(r), p = t ? lo : e ? Vt : Ye;
      if (f.call(r, s))
        return p(i.get(s));
      if (f.call(r, l))
        return p(i.get(l));
      i !== r && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Z(/* @__PURE__ */ I(s), "iterate", dt), s.size;
    },
    has(s) {
      const i = this.__v_raw, r = /* @__PURE__ */ I(i), l = /* @__PURE__ */ I(s);
      return e || (at(s, l) && Z(r, "has", s), Z(r, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const r = this, l = r.__v_raw, f = /* @__PURE__ */ I(l), p = t ? lo : e ? Vt : Ye;
      return !e && Z(f, "iterate", dt), l.forEach((d, a) => s.call(i, p(d), p(a), r));
    }
  };
  return X(
    n,
    e ? {
      add: fn("add"),
      set: fn("set"),
      delete: fn("delete"),
      clear: fn("clear")
    } : {
      add(s) {
        !t && !/* @__PURE__ */ me(s) && !/* @__PURE__ */ Be(s) && (s = /* @__PURE__ */ I(s));
        const i = /* @__PURE__ */ I(this);
        return cn(i).has.call(i, s) || (i.add(s), Pe(i, "add", s, s)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ me(i) && !/* @__PURE__ */ Be(i) && (i = /* @__PURE__ */ I(i));
        const r = /* @__PURE__ */ I(this), { has: l, get: f } = cn(r);
        let p = l.call(r, s);
        p ? process.env.NODE_ENV !== "production" && Zo(r, l, s) : (s = /* @__PURE__ */ I(s), p = l.call(r, s));
        const d = f.call(r, s);
        return r.set(s, i), p ? at(i, d) && Pe(r, "set", s, i, d) : Pe(r, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ I(this), { has: r, get: l } = cn(i);
        let f = r.call(i, s);
        f ? process.env.NODE_ENV !== "production" && Zo(i, r, s) : (s = /* @__PURE__ */ I(s), f = r.call(i, s));
        const p = l ? l.call(i, s) : void 0, d = i.delete(s);
        return f && Pe(i, "delete", s, void 0, p), d;
      },
      clear() {
        const s = /* @__PURE__ */ I(this), i = s.size !== 0, r = process.env.NODE_ENV !== "production" ? ut(s) ? new Map(s) : new Set(s) : void 0, l = s.clear();
        return i && Pe(
          s,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = Mr(s, e, t);
  }), n;
}
function Pn(e, t) {
  const n = $r(e, t);
  return (o, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    F(n, s) && s in o ? n : o,
    s,
    i
  );
}
const Ar = {
  get: /* @__PURE__ */ Pn(!1, !1)
}, Ir = {
  get: /* @__PURE__ */ Pn(!1, !0)
}, Pr = {
  get: /* @__PURE__ */ Pn(!0, !1)
}, Rr = {
  get: /* @__PURE__ */ Pn(!0, !0)
};
function Zo(e, t, n) {
  const o = /* @__PURE__ */ I(n);
  if (o !== n && t.call(e, o)) {
    const s = wo(e);
    xe(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ni = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap();
function kr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Fr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kr(wo(e));
}
// @__NO_SIDE_EFFECTS__
function To(e) {
  return /* @__PURE__ */ Be(e) ? e : Rn(
    e,
    !1,
    Vr,
    Ar,
    ni
  );
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  return Rn(
    e,
    !1,
    Cr,
    Ir,
    oi
  );
}
// @__NO_SIDE_EFFECTS__
function co(e) {
  return Rn(
    e,
    !0,
    Sr,
    Pr,
    si
  );
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return Rn(
    e,
    !0,
    Tr,
    Rr,
    ii
  );
}
function Rn(e, t, n, o, s) {
  if (!j(e))
    return process.env.NODE_ENV !== "production" && xe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Fr(e);
  if (i === 0)
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  return /* @__PURE__ */ Be(e) ? /* @__PURE__ */ ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ I(t) : e;
}
function Lr(e) {
  return !F(e, "__v_skip") && Object.isExtensible(e) && yn(e, "__v_skip", !0), e;
}
const Ye = (e) => j(e) ? /* @__PURE__ */ To(e) : e, Vt = (e) => j(e) ? /* @__PURE__ */ co(e) : e;
// @__NO_SIDE_EFFECTS__
function ee(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Br(e) {
  return /* @__PURE__ */ ee(e) ? e.value : e;
}
const Hr = {
  get: (e, t, n) => t === "__v_raw" ? e : Br(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return /* @__PURE__ */ ee(s) && !/* @__PURE__ */ ee(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ri(e) {
  return /* @__PURE__ */ ot(e) ? e : new Proxy(e, Hr);
}
class Ur {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new zs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    H !== this)
      return Ws(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Gs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && xe("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function Kr(e, t, n = !1) {
  let o, s;
  $(e) ? o = e : (o = e.get, s = e.set);
  const i = new Ur(o, s, n);
  return process.env.NODE_ENV, i;
}
const un = {}, Nn = /* @__PURE__ */ new WeakMap();
let ft;
function Wr(e, t = !1, n = ft) {
  if (n) {
    let o = Nn.get(n);
    o || Nn.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && xe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function qr(e, t, n = U) {
  const { immediate: o, deep: s, once: i, scheduler: r, augmentJob: l, call: f } = n, p = (C) => {
    (n.onWarn || xe)(
      "Invalid watch source: ",
      C,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (C) => s ? C : /* @__PURE__ */ me(C) || s === !1 || s === 0 ? Ge(C, 1) : Ge(C);
  let a, g, O, M, x = !1, Y = !1;
  if (/* @__PURE__ */ ee(e) ? (g = () => e.value, x = /* @__PURE__ */ me(e)) : /* @__PURE__ */ ot(e) ? (g = () => d(e), x = !0) : S(e) ? (Y = !0, x = e.some((C) => /* @__PURE__ */ ot(C) || /* @__PURE__ */ me(C)), g = () => e.map((C) => {
    if (/* @__PURE__ */ ee(C))
      return C.value;
    if (/* @__PURE__ */ ot(C))
      return d(C);
    if ($(C))
      return f ? f(C, 2) : C();
    process.env.NODE_ENV !== "production" && p(C);
  })) : $(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (O) {
      Ve();
      try {
        O();
      } finally {
        Se();
      }
    }
    const C = ft;
    ft = a;
    try {
      return f ? f(e, 3, [M]) : e(M);
    } finally {
      ft = C;
    }
  } : (g = Q, process.env.NODE_ENV !== "production" && p(e)), t && s) {
    const C = g, te = s === !0 ? 1 / 0 : s;
    g = () => Ge(C(), te);
  }
  const q = yr(), B = () => {
    a.stop(), q && q.active && No(q.effects, a);
  };
  if (i && t) {
    const C = t;
    t = (...te) => {
      C(...te), B();
    };
  }
  let L = Y ? new Array(e.length).fill(un) : un;
  const ve = (C) => {
    if (!(!(a.flags & 1) || !a.dirty && !C))
      if (t) {
        const te = a.run();
        if (s || x || (Y ? te.some((be, ne) => at(be, L[ne])) : at(te, L))) {
          O && O();
          const be = ft;
          ft = a;
          try {
            const ne = [
              te,
              // pass undefined as the old value when it's changed for the first time
              L === un ? void 0 : Y && L[0] === un ? [] : L,
              M
            ];
            L = te, f ? f(t, 3, ne) : (
              // @ts-expect-error
              t(...ne)
            );
          } finally {
            ft = be;
          }
        }
      } else
        a.run();
  };
  return l && l(ve), a = new Us(g), a.scheduler = r ? () => r(ve, !1) : ve, M = (C) => Wr(C, !1, a), O = a.onStop = () => {
    const C = Nn.get(a);
    if (C) {
      if (f)
        f(C, 4);
      else
        for (const te of C) te();
      Nn.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? ve(!0) : L = a.run() : r ? r(ve.bind(null, !0), !0) : a.run(), B.pause = a.pause.bind(a), B.resume = a.resume.bind(a), B.stop = B, B;
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !j(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ee(e))
    Ge(e.value, t, n);
  else if (S(e))
    for (let o = 0; o < e.length; o++)
      Ge(e[o], t, n);
  else if ($n(e) || ut(e))
    e.forEach((o) => {
      Ge(o, t, n);
    });
  else if (Fs(e)) {
    for (const o in e)
      Ge(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Ge(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const pt = [];
function an(e) {
  pt.push(e);
}
function dn() {
  pt.pop();
}
let Yn = !1;
function b(e, ...t) {
  if (Yn) return;
  Yn = !0, Ve();
  const n = pt.length ? pt[pt.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Jr();
  if (o)
    St(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var r, l;
          return (l = (r = i.toString) == null ? void 0 : r.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: i }) => `at <${sn(n, i.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    s.length && i.push(`
`, ...Gr(s)), console.warn(...i);
  }
  Se(), Yn = !1;
}
function Jr() {
  let e = pt[pt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Gr(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Yr(n));
  }), t;
}
function Yr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${sn(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [s, ...zr(e.props), i] : [s + i];
}
function zr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...li(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function li(e, t, n) {
  return G(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ ee(t) ? (t = li(e, /* @__PURE__ */ I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ I(t), n ? t : [`${e}=`, t]);
}
const Mo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function St(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    en(s, t, n);
  }
}
function He(e, t, n, o) {
  if ($(e)) {
    const s = St(e, t, n, o);
    return s && Oo(s) && s.catch((i) => {
      en(i, t, n);
    }), s;
  }
  if (S(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(He(e[i], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && b(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function en(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || U;
  if (t) {
    let l = t.parent;
    const f = t.proxy, p = process.env.NODE_ENV !== "production" ? Mo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let a = 0; a < d.length; a++)
          if (d[a](e, f, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ve(), St(i, null, 10, [
        e,
        f,
        p
      ]), Se();
      return;
    }
  }
  Xr(e, n, s, o, r);
}
function Xr(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const i = Mo[t];
    if (n && an(n), b(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && dn(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const le = [];
let Ie = -1;
const Dt = [];
let nt = null, Nt = 0;
const ci = /* @__PURE__ */ Promise.resolve();
let On = null;
const Zr = 100;
function fi(e) {
  const t = On || ci;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qr(e) {
  let t = Ie + 1, n = le.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = le[o], i = Jt(s);
    i < e || i === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function kn(e) {
  if (!(e.flags & 1)) {
    const t = Jt(e), n = le[le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jt(n) ? le.push(e) : le.splice(Qr(t), 0, e), e.flags |= 1, ui();
  }
}
function ui() {
  On || (On = ci.then(pi));
}
function ai(e) {
  S(e) ? Dt.push(...e) : nt && e.id === -1 ? nt.splice(Nt + 1, 0, e) : e.flags & 1 || (Dt.push(e), e.flags |= 1), ui();
}
function Qo(e, t, n = Ie + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < le.length; n++) {
    const o = le[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && $o(t, o))
        continue;
      le.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function di(e) {
  if (Dt.length) {
    const t = [...new Set(Dt)].sort(
      (n, o) => Jt(n) - Jt(o)
    );
    if (Dt.length = 0, nt) {
      nt.push(...t);
      return;
    }
    for (nt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Nt = 0; Nt < nt.length; Nt++) {
      const n = nt[Nt];
      process.env.NODE_ENV !== "production" && $o(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    nt = null, Nt = 0;
  }
}
const Jt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pi(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => $o(e, n) : Q;
  try {
    for (Ie = 0; Ie < le.length; Ie++) {
      const n = le[Ie];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), St(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ie < le.length; Ie++) {
      const n = le[Ie];
      n && (n.flags &= -2);
    }
    Ie = -1, le.length = 0, di(e), On = null, (le.length || Dt.length) && pi(e);
  }
}
function $o(e, t) {
  const n = e.get(t) || 0;
  if (n > Zr) {
    const o = t.i, s = o && Ho(o.type);
    return en(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let ke = !1;
const pn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Zt().__VUE_HMR_RUNTIME__ = {
  createRecord: zn(hi),
  rerender: zn(nl),
  reload: zn(ol)
});
const _t = /* @__PURE__ */ new Map();
function el(e) {
  const t = e.type.__hmrId;
  let n = _t.get(t);
  n || (hi(t, e.type), n = _t.get(t)), n.instances.add(e);
}
function tl(e) {
  _t.get(e.type.__hmrId).instances.delete(e);
}
function hi(e, t) {
  return _t.has(e) ? !1 : (_t.set(e, {
    initialDef: wn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function wn(e) {
  return Yi(e) ? e.__vccOpts : e;
}
function nl(e, t) {
  const n = _t.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, wn(o.type).render = t), o.renderCache = [], ke = !0, o.job.flags & 8 || o.update(), ke = !1;
  }));
}
function ol(e, t) {
  const n = _t.get(e);
  if (!n) return;
  t = wn(t), es(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const i = o[s], r = wn(i.type);
    let l = pn.get(r);
    l || (r !== n.initialDef && es(r, t), pn.set(r, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? kn(() => {
      i.job.flags & 8 || (ke = !0, i.parent.update(), ke = !1, l.delete(i));
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  ai(() => {
    pn.clear();
  });
}
function es(e, t) {
  X(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function zn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let we, Rt = [], fo = !1;
function tn(e, ...t) {
  we ? we.emit(e, ...t) : fo || Rt.push({ event: e, args: t });
}
function Ao(e, t) {
  var n, o;
  we = e, we ? (we.enabled = !0, Rt.forEach(({ event: s, args: i }) => we.emit(s, ...i)), Rt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Ao(i, t);
  }), setTimeout(() => {
    we || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, fo = !0, Rt = []);
  }, 3e3)) : (fo = !0, Rt = []);
}
function sl(e, t) {
  tn("app:init", e, t, {
    Fragment: ce,
    Text: nn,
    Comment: ye,
    Static: _n
  });
}
function il(e) {
  tn("app:unmount", e);
}
const rl = /* @__PURE__ */ Io(
  "component:added"
  /* COMPONENT_ADDED */
), gi = /* @__PURE__ */ Io(
  "component:updated"
  /* COMPONENT_UPDATED */
), ll = /* @__PURE__ */ Io(
  "component:removed"
  /* COMPONENT_REMOVED */
), cl = (e) => {
  we && typeof we.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !we.cleanupBuffer(e) && ll(e);
};
// @__NO_SIDE_EFFECTS__
function Io(e) {
  return (t) => {
    tn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const fl = /* @__PURE__ */ _i(
  "perf:start"
  /* PERFORMANCE_START */
), ul = /* @__PURE__ */ _i(
  "perf:end"
  /* PERFORMANCE_END */
);
function _i(e) {
  return (t, n, o) => {
    tn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function al(e, t, n) {
  tn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let oe = null, mi = null;
function Dn(e) {
  const t = oe;
  return oe = e, mi = e && e.type.__scopeId || null, t;
}
function dl(e, t = oe, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && _s(-1);
    const i = Dn(t);
    let r;
    try {
      r = e(...s);
    } finally {
      Dn(i), o._d && _s(1);
    }
    return process.env.NODE_ENV !== "production" && gi(t), r;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function vi(e) {
  nr(e) && b("Do not use built-in directive ids as custom directive id: " + e);
}
function pl(e, t) {
  if (oe === null)
    return process.env.NODE_ENV !== "production" && b("withDirectives can only be used inside render functions."), e;
  const n = Bn(oe), o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, r, l, f = U] = t[s];
    i && ($(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ge(r), o.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: f
    }));
  }
  return e;
}
function rt(e, t, n, o) {
  const s = e.dirs, i = t && t.dirs;
  for (let r = 0; r < s.length; r++) {
    const l = s[r];
    i && (l.oldValue = i[r].value);
    let f = l.dir[o];
    f && (Ve(), He(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Se());
  }
}
function hl(e, t) {
  if (process.env.NODE_ENV !== "production" && (!z || z.isMounted) && b("provide() can only be used inside setup()."), z) {
    let n = z.provides;
    const o = z.parent && z.parent.provides;
    o === n && (n = z.provides = Object.create(o)), n[e] = t;
  }
}
function hn(e, t, n = !1) {
  const o = qi();
  if (o || xt) {
    let s = xt ? xt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && b(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && b("inject() can only be used inside setup() or functional components.");
}
const gl = /* @__PURE__ */ Symbol.for("v-scx"), _l = () => {
  {
    const e = hn(gl);
    return e || process.env.NODE_ENV !== "production" && b(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Xn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && b(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ei(e, t, n);
}
function Ei(e, t, n = U) {
  const { immediate: o, deep: s, flush: i, once: r } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && b(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && b(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && b(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = X({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = b);
  const f = t && o || !t && i !== "post";
  let p;
  if (Yt) {
    if (i === "sync") {
      const O = _l();
      p = O.__watcherHandles || (O.__watcherHandles = []);
    } else if (!f) {
      const O = () => {
      };
      return O.stop = Q, O.resume = Q, O.pause = Q, O;
    }
  }
  const d = z;
  l.call = (O, M, x) => He(O, d, M, x);
  let a = !1;
  i === "post" ? l.scheduler = (O) => {
    he(O, d && d.suspense);
  } : i !== "sync" && (a = !0, l.scheduler = (O, M) => {
    M ? O() : kn(O);
  }), l.augmentJob = (O) => {
    t && (O.flags |= 4), a && (O.flags |= 2, d && (O.id = d.uid, O.i = d));
  };
  const g = qr(e, t, l);
  return Yt && (p ? p.push(g) : f && g()), g;
}
function ml(e, t, n) {
  const o = this.proxy, s = G(e) ? e.includes(".") ? yi(o, e) : () => o[e] : e.bind(o, o);
  let i;
  $(t) ? i = t : (i = t.handler, n = t);
  const r = on(this), l = Ei(s, i.bind(o), n);
  return r(), l;
}
function yi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const vl = /* @__PURE__ */ Symbol("_vte"), El = (e) => e.__isTeleport, yl = /* @__PURE__ */ Symbol("_leaveCb");
function Po(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Po(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function bi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ts = /* @__PURE__ */ new WeakSet();
function ns(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const xn = /* @__PURE__ */ new WeakMap();
function Ht(e, t, n, o, s = !1) {
  if (S(e)) {
    e.forEach(
      (x, Y) => Ht(
        x,
        t && (S(t) ? t[Y] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (Ut(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Ht(e, t, n, o.component.subTree);
    return;
  }
  const i = o.shapeFlag & 4 ? Bn(o.component) : o.el, r = s ? null : i, { i: l, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    b(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, d = l.refs === U ? l.refs = {} : l.refs, a = l.setupState, g = /* @__PURE__ */ I(a), O = a === U ? Rs : (x) => process.env.NODE_ENV !== "production" && (F(g, x) && !/* @__PURE__ */ ee(g[x]) && b(
    `Template ref "${x}" used on a non-ref value. It will not work in the production build.`
  ), ts.has(g[x])) || ns(d, x) ? !1 : F(g, x), M = (x, Y) => !(process.env.NODE_ENV !== "production" && ts.has(x) || Y && ns(d, Y));
  if (p != null && p !== f) {
    if (os(t), G(p))
      d[p] = null, O(p) && (a[p] = null);
    else if (/* @__PURE__ */ ee(p)) {
      const x = t;
      M(p, x.k) && (p.value = null), x.k && (d[x.k] = null);
    }
  }
  if ($(f))
    St(f, l, 12, [r, d]);
  else {
    const x = G(f), Y = /* @__PURE__ */ ee(f);
    if (x || Y) {
      const q = () => {
        if (e.f) {
          const B = x ? O(f) ? a[f] : d[f] : M(f) || !e.k ? f.value : d[e.k];
          if (s)
            S(B) && No(B, i);
          else if (S(B))
            B.includes(i) || B.push(i);
          else if (x)
            d[f] = [i], O(f) && (a[f] = d[f]);
          else {
            const L = [i];
            M(f, e.k) && (f.value = L), e.k && (d[e.k] = L);
          }
        } else x ? (d[f] = r, O(f) && (a[f] = r)) : Y ? (M(f, e.k) && (f.value = r), e.k && (d[e.k] = r)) : process.env.NODE_ENV !== "production" && b("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (r) {
        const B = () => {
          q(), xn.delete(e);
        };
        B.id = -1, xn.set(e, B), he(B, n);
      } else
        os(e), q();
    } else process.env.NODE_ENV !== "production" && b("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function os(e) {
  const t = xn.get(e);
  t && (t.flags |= 8, xn.delete(e));
}
Zt().requestIdleCallback;
Zt().cancelIdleCallback;
const Ut = (e) => !!e.type.__asyncLoader, Ro = (e) => e.type.__isKeepAlive;
function bl(e, t) {
  Ni(e, "a", t);
}
function Nl(e, t) {
  Ni(e, "da", t);
}
function Ni(e, t, n = z) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Fn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Ro(s.parent.vnode) && Ol(o, t, n, s), s = s.parent;
  }
}
function Ol(e, t, n, o) {
  const s = Fn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Oi(() => {
    No(o[t], s);
  }, n);
}
function Fn(e, t, n = z, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      Ve();
      const l = on(n), f = He(t, n, e, r);
      return l(), Se(), f;
    });
    return o ? s.unshift(i) : s.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const s = ct(Mo[e].replace(/ hook$/, ""));
    b(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Xe = (e) => (t, n = z) => {
  (!Yt || e === "sp") && Fn(e, (...o) => t(...o), n);
}, wl = Xe("bm"), Dl = Xe("m"), xl = Xe(
  "bu"
), Vl = Xe("u"), Sl = Xe(
  "bum"
), Oi = Xe("um"), Cl = Xe(
  "sp"
), Tl = Xe("rtg"), Ml = Xe("rtc");
function $l(e, t = z) {
  Fn("ec", e, t);
}
const Al = "components";
function Il(e, t) {
  return Rl(Al, e, !0, t) || e;
}
const Pl = /* @__PURE__ */ Symbol.for("v-ndc");
function Rl(e, t, n = !0, o = !1) {
  const s = oe || z;
  if (s) {
    const i = s.type;
    {
      const l = Ho(
        i,
        !1
      );
      if (l && (l === t || l === fe(t) || l === gt(fe(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      ss(s[e] || i[e], t) || // global registration
      ss(s.appContext[e], t)
    );
    return !r && o ? i : (process.env.NODE_ENV !== "production" && n && !r && b(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), r);
  } else process.env.NODE_ENV !== "production" && b(
    `resolve${gt(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function ss(e, t) {
  return e && (e[t] || e[fe(t)] || e[gt(fe(t))]);
}
function Zn(e, t, n, o) {
  let s;
  const i = n, r = S(e);
  if (r || G(e)) {
    const l = r && /* @__PURE__ */ ot(e);
    let f = !1, p = !1;
    l && (f = !/* @__PURE__ */ me(e), p = /* @__PURE__ */ Be(e), e = In(e)), s = new Array(e.length);
    for (let d = 0, a = e.length; d < a; d++)
      s[d] = t(
        f ? p ? Vt(Ye(e[d])) : Ye(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && b(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (j(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, f) => t(l, f, void 0, i)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let f = 0, p = l.length; f < p; f++) {
        const d = l[f];
        s[f] = t(e[d], d, f, i);
      }
    }
  else
    s = [];
  return s;
}
const uo = (e) => e ? Ji(e) ? Bn(e) : uo(e.parent) : null, ht = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(e.refs) : e.refs,
    $parent: (e) => uo(e.parent),
    $root: (e) => uo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      kn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fi.bind(e.proxy)),
    $watch: (e) => ml.bind(e)
  })
), ko = (e) => e === "_" || e === "$", Qn = (e, t) => e !== U && !e.__isScriptSetup && F(e, t), wi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: i, accessCache: r, type: l, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const g = r[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Qn(o, t))
          return r[t] = 1, o[t];
        if (s !== U && F(s, t))
          return r[t] = 2, s[t];
        if (F(i, t))
          return r[t] = 3, i[t];
        if (n !== U && F(n, t))
          return r[t] = 4, n[t];
        ao && (r[t] = 0);
      }
    }
    const p = ht[t];
    let d, a;
    if (p)
      return t === "$attrs" ? (Z(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Sn()) : process.env.NODE_ENV !== "production" && t === "$slots" && Z(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== U && F(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      a = f.config.globalProperties, F(a, t)
    )
      return a[t];
    process.env.NODE_ENV !== "production" && oe && (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== U && ko(t[0]) && F(s, t) ? b(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === oe && b(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: i } = e;
    return Qn(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && F(s, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== U && F(o, t) ? (o[t] = n, !0) : F(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, props: i, type: r }
  }, l) {
    let f;
    return !!(n[l] || e !== U && l[0] !== "$" && F(e, l) || Qn(t, l) || F(i, l) || F(o, l) || F(ht, l) || F(s.config.globalProperties, l) || (f = r.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : F(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (wi.ownKeys = (e) => (b(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function kl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ht).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ht[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Q
    });
  }), t;
}
function Fl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Q
    });
  });
}
function jl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(/* @__PURE__ */ I(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (ko(o[0])) {
        b(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Q
      });
    }
  });
}
function is(e) {
  return S(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ll() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? b(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ao = !0;
function Bl(e) {
  const t = xi(e), n = e.proxy, o = e.ctx;
  ao = !1, t.beforeCreate && rs(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: r,
    watch: l,
    provide: f,
    inject: p,
    // lifecycle
    created: d,
    beforeMount: a,
    mounted: g,
    beforeUpdate: O,
    updated: M,
    activated: x,
    deactivated: Y,
    beforeDestroy: q,
    beforeUnmount: B,
    destroyed: L,
    unmounted: ve,
    render: C,
    renderTracked: te,
    renderTriggered: be,
    errorCaptured: ne,
    serverPrefetch: ue,
    // public API
    expose: Ue,
    inheritAttrs: Ze,
    // assets
    components: Ne,
    directives: rn,
    filters: Uo
  } = t, Qe = process.env.NODE_ENV !== "production" ? Ll() : null;
  if (process.env.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const P in R)
        Qe("Props", P);
  }
  if (p && Hl(p, o, Qe), r)
    for (const R in r) {
      const P = r[R];
      $(P) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: P.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = P.bind(n), process.env.NODE_ENV !== "production" && Qe("Methods", R)) : process.env.NODE_ENV !== "production" && b(
        `Method "${R}" has type "${typeof P}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !$(s) && b(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && Oo(R) && b(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !j(R))
      process.env.NODE_ENV !== "production" && b("data() should return an object.");
    else if (e.data = /* @__PURE__ */ To(R), process.env.NODE_ENV !== "production")
      for (const P in R)
        Qe("Data", P), ko(P[0]) || Object.defineProperty(o, P, {
          configurable: !0,
          enumerable: !0,
          get: () => R[P],
          set: Q
        });
  }
  if (ao = !0, i)
    for (const R in i) {
      const P = i[R], Ce = $(P) ? P.bind(n, n) : $(P.get) ? P.get.bind(n, n) : Q;
      process.env.NODE_ENV !== "production" && Ce === Q && b(`Computed property "${R}" has no getter.`);
      const Hn = !$(P) && $(P.set) ? P.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        b(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : Q, Ct = Rc({
        get: Ce,
        set: Hn
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (mt) => Ct.value = mt
      }), process.env.NODE_ENV !== "production" && Qe("Computed", R);
    }
  if (l)
    for (const R in l)
      Di(l[R], o, n, R);
  if (f) {
    const R = $(f) ? f.call(n) : f;
    Reflect.ownKeys(R).forEach((P) => {
      hl(P, R[P]);
    });
  }
  d && rs(d, e, "c");
  function ae(R, P) {
    S(P) ? P.forEach((Ce) => R(Ce.bind(n))) : P && R(P.bind(n));
  }
  if (ae(wl, a), ae(Dl, g), ae(xl, O), ae(Vl, M), ae(bl, x), ae(Nl, Y), ae($l, ne), ae(Ml, te), ae(Tl, be), ae(Sl, B), ae(Oi, ve), ae(Cl, ue), S(Ue))
    if (Ue.length) {
      const R = e.exposed || (e.exposed = {});
      Ue.forEach((P) => {
        Object.defineProperty(R, P, {
          get: () => n[P],
          set: (Ce) => n[P] = Ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === Q && (e.render = C), Ze != null && (e.inheritAttrs = Ze), Ne && (e.components = Ne), rn && (e.directives = rn), ue && bi(e);
}
function Hl(e, t, n = Q) {
  S(e) && (e = po(e));
  for (const o in e) {
    const s = e[o];
    let i;
    j(s) ? "default" in s ? i = hn(
      s.from || o,
      s.default,
      !0
    ) : i = hn(s.from || o) : i = hn(s), /* @__PURE__ */ ee(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[o] = i, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function rs(e, t, n) {
  He(
    S(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Di(e, t, n, o) {
  let s = o.includes(".") ? yi(n, o) : () => n[o];
  if (G(e)) {
    const i = t[e];
    $(i) ? Xn(s, i) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e}"`, i);
  } else if ($(e))
    Xn(s, e.bind(n));
  else if (j(e))
    if (S(e))
      e.forEach((i) => Di(i, t, n, o));
    else {
      const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(i) ? Xn(s, i, e) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else process.env.NODE_ENV !== "production" && b(`Invalid watch option: "${o}"`, e);
}
function xi(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !s.length && !n && !o ? f = t : (f = {}, s.length && s.forEach(
    (p) => Vn(f, p, r, !0)
  ), Vn(f, t, r)), j(t) && i.set(t, f), f;
}
function Vn(e, t, n, o = !1) {
  const { mixins: s, extends: i } = t;
  i && Vn(e, i, n, !0), s && s.forEach(
    (r) => Vn(e, r, n, !0)
  );
  for (const r in t)
    if (o && r === "expose")
      process.env.NODE_ENV !== "production" && b(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Ul[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const Ul = {
  data: ls,
  props: cs,
  emits: cs,
  // objects
  methods: kt,
  computed: kt,
  // lifecycle
  beforeCreate: ie,
  created: ie,
  beforeMount: ie,
  mounted: ie,
  beforeUpdate: ie,
  updated: ie,
  beforeDestroy: ie,
  beforeUnmount: ie,
  destroyed: ie,
  unmounted: ie,
  activated: ie,
  deactivated: ie,
  errorCaptured: ie,
  serverPrefetch: ie,
  // assets
  components: kt,
  directives: kt,
  // watch
  watch: Wl,
  // provide / inject
  provide: ls,
  inject: Kl
};
function ls(e, t) {
  return t ? e ? function() {
    return X(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Kl(e, t) {
  return kt(po(e), po(t));
}
function po(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function kt(e, t) {
  return e ? X(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function cs(e, t) {
  return e ? S(e) && S(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : X(
    /* @__PURE__ */ Object.create(null),
    is(e),
    is(t ?? {})
  ) : t;
}
function Wl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = X(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ie(e[o], t[o]);
  return n;
}
function Vi() {
  return {
    app: null,
    config: {
      isNativeTag: Rs,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ql = 0;
function Jl(e, t) {
  return function(o, s = null) {
    $(o) || (o = X({}, o)), s != null && !j(s) && (process.env.NODE_ENV !== "production" && b("root props passed to app.mount() must be an object."), s = null);
    const i = Vi(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const p = i.app = {
      _uid: ql++,
      _component: o,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: ys,
      get config() {
        return i.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" && b(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...a) {
        return r.has(d) ? process.env.NODE_ENV !== "production" && b("Plugin has already been applied to target app.") : d && $(d.install) ? (r.add(d), d.install(p, ...a)) : $(d) ? (r.add(d), d(p, ...a)) : process.env.NODE_ENV !== "production" && b(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(d) {
        return i.mixins.includes(d) ? process.env.NODE_ENV !== "production" && b(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), p;
      },
      component(d, a) {
        return process.env.NODE_ENV !== "production" && yo(d, i.config), a ? (process.env.NODE_ENV !== "production" && i.components[d] && b(`Component "${d}" has already been registered in target app.`), i.components[d] = a, p) : i.components[d];
      },
      directive(d, a) {
        return process.env.NODE_ENV !== "production" && vi(d), a ? (process.env.NODE_ENV !== "production" && i.directives[d] && b(`Directive "${d}" has already been registered in target app.`), i.directives[d] = a, p) : i.directives[d];
      },
      mount(d, a, g) {
        if (f)
          process.env.NODE_ENV !== "production" && b(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && d.__vue_app__ && b(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const O = p._ceVNode || Fe(o, s);
          return O.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (i.reload = () => {
            const M = it(O);
            M.el = null, e(M, d, g);
          }), e(O, d, g), f = !0, p._container = d, d.__vue_app__ = p, process.env.NODE_ENV !== "production" && (p._instance = O.component, sl(p, ys)), Bn(O.component);
        }
      },
      onUnmount(d) {
        process.env.NODE_ENV !== "production" && typeof d != "function" && b(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        f ? (He(
          l,
          p._instance,
          16
        ), e(null, p._container), process.env.NODE_ENV !== "production" && (p._instance = null, il(p)), delete p._container.__vue_app__) : process.env.NODE_ENV !== "production" && b("Cannot unmount an app that is not mounted.");
      },
      provide(d, a) {
        return process.env.NODE_ENV !== "production" && d in i.provides && (F(i.provides, d) ? b(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : b(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[d] = a, p;
      },
      runWithContext(d) {
        const a = xt;
        xt = p;
        try {
          return d();
        } finally {
          xt = a;
        }
      }
    };
    return p;
  };
}
let xt = null;
const Gl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${fe(t)}Modifiers`] || e[`${st(t)}Modifiers`];
function Yl(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || U;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [a]
    } = e;
    if (d)
      if (!(t in d))
        (!a || !(ct(fe(t)) in a)) && b(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ct(fe(t))}" prop.`
        );
      else {
        const g = d[t];
        $(g) && (g(...n) || b(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const i = t.startsWith("update:"), r = i && Gl(o, t.slice(7));
  if (r && (r.trim && (s = n.map((d) => G(d) ? d.trim() : d)), r.number && (s = n.map(js))), process.env.NODE_ENV !== "production" && al(e, t, s), process.env.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[ct(d)] && b(
      `Event "${d}" is emitted in component ${sn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${st(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = o[l = ct(t)] || // also try camelCase event handler (#2249)
  o[l = ct(fe(t))];
  !f && i && (f = o[l = ct(st(t))]), f && He(
    f,
    e,
    6,
    s
  );
  const p = o[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, He(
      p,
      e,
      6,
      s
    );
  }
}
const zl = /* @__PURE__ */ new WeakMap();
function Si(e, t, n = !1) {
  const o = n ? zl : t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let r = {}, l = !1;
  if (!$(e)) {
    const f = (p) => {
      const d = Si(p, t, !0);
      d && (l = !0, X(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (j(e) && o.set(e, null), null) : (S(i) ? i.forEach((f) => r[f] = null) : X(r, i), j(e) && o.set(e, r), r);
}
function jn(e, t) {
  return !e || !zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), F(e, t[0].toLowerCase() + t.slice(1)) || F(e, st(t)) || F(e, t));
}
let ho = !1;
function Sn() {
  ho = !0;
}
function fs(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: f,
    render: p,
    renderCache: d,
    props: a,
    data: g,
    setupState: O,
    ctx: M,
    inheritAttrs: x
  } = e, Y = Dn(e);
  let q, B;
  process.env.NODE_ENV !== "production" && (ho = !1);
  try {
    if (n.shapeFlag & 4) {
      const C = s || o, te = process.env.NODE_ENV !== "production" && O.__isScriptSetup ? new Proxy(C, {
        get(be, ne, ue) {
          return b(
            `Property '${String(
              ne
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(be, ne, ue);
        }
      }) : C;
      q = Oe(
        p.call(
          te,
          C,
          d,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(a) : a,
          O,
          g,
          M
        )
      ), B = l;
    } else {
      const C = t;
      process.env.NODE_ENV !== "production" && l === a && Sn(), q = Oe(
        C.length > 1 ? C(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Sn(), /* @__PURE__ */ Re(l);
            },
            slots: r,
            emit: f
          } : { attrs: l, slots: r, emit: f }
        ) : C(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(a) : a,
          null
        )
      ), B = t.props ? l : Xl(l);
    }
  } catch (C) {
    Kt.length = 0, en(C, e, 1), q = Fe(ye);
  }
  let L = q, ve;
  if (process.env.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([L, ve] = Ci(q)), B && x !== !1) {
    const C = Object.keys(B), { shapeFlag: te } = L;
    if (C.length) {
      if (te & 7)
        i && C.some(En) && (B = Zl(
          B,
          i
        )), L = it(L, B, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !ho && L.type !== ye) {
        const be = Object.keys(l), ne = [], ue = [];
        for (let Ue = 0, Ze = be.length; Ue < Ze; Ue++) {
          const Ne = be[Ue];
          zt(Ne) ? En(Ne) || ne.push(Ne[2].toLowerCase() + Ne.slice(3)) : ue.push(Ne);
        }
        ue.length && b(
          `Extraneous non-props attributes (${ue.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ne.length && b(
          `Extraneous non-emits event listeners (${ne.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !us(L) && b(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = it(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !us(L) && b(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Po(L, n.transition)), process.env.NODE_ENV !== "production" && ve ? ve(L) : q = L, Dn(Y), q;
}
const Ci = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Fo(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Ci(o);
  } else return [e, void 0];
  const s = t.indexOf(o), i = n ? n.indexOf(o) : -1, r = (l) => {
    t[s] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Oe(o), r];
};
function Fo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (Ln(s)) {
      if (s.type !== ye || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Fo(n.children);
      }
    } else
      return;
  }
  return n;
}
const Xl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || zt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Zl = (e, t) => {
  const n = {};
  for (const o in e)
    (!En(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, us = (e) => e.shapeFlag & 7 || e.type === ye;
function Ql(e, t, n) {
  const { props: o, children: s, component: i } = e, { props: r, children: l, patchFlag: f } = t, p = i.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && ke || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? as(o, r, p) : !!r;
    if (f & 8) {
      const d = t.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        const g = d[a];
        if (Ti(r, o, g) && !jn(p, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === r ? !1 : o ? r ? as(o, r, p) : !0 : !!r;
  return !1;
}
function as(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    if (Ti(t, e, i) && !jn(n, i))
      return !0;
  }
  return !1;
}
function Ti(e, t, n) {
  const o = e[n], s = t[n];
  return n === "style" && j(o) && j(s) ? !Qt(o, s) : o !== s;
}
function ec({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Mi = {}, $i = () => Object.create(Mi), Ai = (e) => Object.getPrototypeOf(e) === Mi;
function tc(e, t, n, o = !1) {
  const s = {}, i = $i();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ii(e, t, s, i);
  for (const r in e.propsOptions[0])
    r in s || (s[r] = void 0);
  process.env.NODE_ENV !== "production" && Ri(t || {}, s, e), n ? e.props = o ? s : /* @__PURE__ */ jr(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function nc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function oc(e, t, n, o) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ I(s), [f] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && nc(e)) && (o || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        let g = d[a];
        if (jn(e.emitsOptions, g))
          continue;
        const O = t[g];
        if (f)
          if (F(i, g))
            O !== i[g] && (i[g] = O, p = !0);
          else {
            const M = fe(g);
            s[M] = go(
              f,
              l,
              M,
              O,
              e,
              !1
            );
          }
        else
          O !== i[g] && (i[g] = O, p = !0);
      }
    }
  } else {
    Ii(e, t, s, i) && (p = !0);
    let d;
    for (const a in l)
      (!t || // for camelCase
      !F(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = st(a)) === a || !F(t, d))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[a] = go(
        f,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete s[a]);
    if (i !== l)
      for (const a in i)
        (!t || !F(t, a)) && (delete i[a], p = !0);
  }
  p && Pe(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Ri(t || {}, s, e);
}
function Ii(e, t, n, o) {
  const [s, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let f in t) {
      if (Ft(f))
        continue;
      const p = t[f];
      let d;
      s && F(s, d = fe(f)) ? !i || !i.includes(d) ? n[d] = p : (l || (l = {}))[d] = p : jn(e.emitsOptions, f) || (!(f in o) || p !== o[f]) && (o[f] = p, r = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ I(n), p = l || U;
    for (let d = 0; d < i.length; d++) {
      const a = i[d];
      n[a] = go(
        s,
        f,
        a,
        p[a],
        e,
        !F(p, a)
      );
    }
  }
  return r;
}
function go(e, t, n, o, s, i) {
  const r = e[n];
  if (r != null) {
    const l = F(r, "default");
    if (l && o === void 0) {
      const f = r.default;
      if (r.type !== Function && !r.skipFactory && $(f)) {
        const { propsDefaults: p } = s;
        if (n in p)
          o = p[n];
        else {
          const d = on(s);
          o = p[n] = f.call(
            null,
            t
          ), d();
        }
      } else
        o = f;
      s.ce && s.ce._setProp(n, o);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !l ? o = !1 : r[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === st(n)) && (o = !0));
  }
  return o;
}
const sc = /* @__PURE__ */ new WeakMap();
function Pi(e, t, n = !1) {
  const o = n ? sc : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const i = e.props, r = {}, l = [];
  let f = !1;
  if (!$(e)) {
    const d = (a) => {
      f = !0;
      const [g, O] = Pi(a, t, !0);
      X(r, g), O && l.push(...O);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !f)
    return j(e) && o.set(e, Ot), Ot;
  if (S(i))
    for (let d = 0; d < i.length; d++) {
      process.env.NODE_ENV !== "production" && !G(i[d]) && b("props must be strings when using array syntax.", i[d]);
      const a = fe(i[d]);
      ds(a) && (r[a] = U);
    }
  else if (i) {
    process.env.NODE_ENV !== "production" && !j(i) && b("invalid props options", i);
    for (const d in i) {
      const a = fe(d);
      if (ds(a)) {
        const g = i[d], O = r[a] = S(g) || $(g) ? { type: g } : X({}, g), M = O.type;
        let x = !1, Y = !0;
        if (S(M))
          for (let q = 0; q < M.length; ++q) {
            const B = M[q], L = $(B) && B.name;
            if (L === "Boolean") {
              x = !0;
              break;
            } else L === "String" && (Y = !1);
          }
        else
          x = $(M) && M.name === "Boolean";
        O[
          0
          /* shouldCast */
        ] = x, O[
          1
          /* shouldCastTrue */
        ] = Y, (x || F(O, "default")) && l.push(a);
      }
    }
  }
  const p = [r, l];
  return j(e) && o.set(e, p), p;
}
function ds(e) {
  return e[0] !== "$" && !Ft(e) ? !0 : (process.env.NODE_ENV !== "production" && b(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ic(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ri(e, t, n) {
  const o = /* @__PURE__ */ I(t), s = n.propsOptions[0], i = Object.keys(e).map((r) => fe(r));
  for (const r in s) {
    let l = s[r];
    l != null && rc(
      r,
      o[r],
      l,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(o) : o,
      !i.includes(r)
    );
  }
}
function rc(e, t, n, o, s) {
  const { type: i, required: r, validator: l, skipCheck: f } = n;
  if (r && s) {
    b('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (i != null && i !== !0 && !f) {
      let p = !1;
      const d = S(i) ? i : [i], a = [];
      for (let g = 0; g < d.length && !p; g++) {
        const { valid: O, expectedType: M } = cc(t, d[g]);
        a.push(M || ""), p = O;
      }
      if (!p) {
        b(fc(e, t, a));
        return;
      }
    }
    l && !l(t, o) && b('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const lc = /* @__PURE__ */ ze(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function cc(e, t) {
  let n;
  const o = ic(t);
  if (o === "null")
    n = e === null;
  else if (lc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = j(e) : o === "Array" ? n = S(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function fc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(gt).join(" | ")}`;
  const s = n[0], i = wo(t), r = ps(t, s), l = ps(t, i);
  return n.length === 1 && hs(s) && !uc(s, i) && (o += ` with value ${r}`), o += `, got ${i} `, hs(i) && (o += `with value ${l}.`), o;
}
function ps(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function hs(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function uc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const jo = (e) => e === "_" || e === "_ctx" || e === "$stable", Lo = (e) => S(e) ? e.map(Oe) : [Oe(e)], ac = (e, t, n) => {
  if (t._n)
    return t;
  const o = dl((...s) => (process.env.NODE_ENV !== "production" && z && !(n === null && oe) && !(n && n.root !== z.root) && b(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Lo(t(...s))), n);
  return o._c = !1, o;
}, ki = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (jo(s)) continue;
    const i = e[s];
    if ($(i))
      t[s] = ac(s, i, o);
    else if (i != null) {
      process.env.NODE_ENV !== "production" && b(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const r = Lo(i);
      t[s] = () => r;
    }
  }
}, Fi = (e, t) => {
  process.env.NODE_ENV !== "production" && !Ro(e.vnode) && b(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Lo(t);
  e.slots.default = () => n;
}, _o = (e, t, n) => {
  for (const o in t)
    (n || !jo(o)) && (e[o] = t[o]);
}, dc = (e, t, n) => {
  const o = e.slots = $i();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (_o(o, t, n), n && yn(o, "_", s, !0)) : ki(t, o);
  } else t && Fi(e, t);
}, pc = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let i = !0, r = U;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && ke ? (_o(s, t, n), Pe(e, "set", "$slots")) : n && l === 1 ? i = !1 : _o(s, t, n) : (i = !t.$stable, ki(t, s)), r = t;
  } else t && (Fi(e, t), r = { default: 1 });
  if (i)
    for (const l in s)
      !jo(l) && r[l] == null && delete s[l];
};
let It, qe;
function Et(e, t) {
  e.appContext.config.performance && Cn() && qe.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && fl(e, t, Cn() ? qe.now() : Date.now());
}
function yt(e, t) {
  if (e.appContext.config.performance && Cn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", s = `<${sn(e, e.type)}> ${t}`;
    qe.mark(o), qe.measure(s, n, o), qe.clearMeasures(s), qe.clearMarks(n), qe.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && ul(e, t, Cn() ? qe.now() : Date.now());
}
function Cn() {
  return It !== void 0 || (typeof window < "u" && window.performance ? (It = !0, qe = window.performance) : It = !1), It;
}
function hc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const he = Ec;
function gc(e) {
  return _c(e);
}
function _c(e, t) {
  hc();
  const n = Zt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ao(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: f,
    setText: p,
    setElementText: d,
    parentNode: a,
    nextSibling: g,
    setScopeId: O = Q,
    insertStaticContent: M
  } = e, x = (c, u, h, E = null, _ = null, m = null, w = void 0, N = null, y = process.env.NODE_ENV !== "production" && ke ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Pt(c, u) && (E = ln(c), et(c, _, m, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: v, ref: T, shapeFlag: D } = u;
    switch (v) {
      case nn:
        Y(c, u, h, E);
        break;
      case ye:
        q(c, u, h, E);
        break;
      case _n:
        c == null ? B(u, h, E, w) : process.env.NODE_ENV !== "production" && L(c, u, h, w);
        break;
      case ce:
        rn(
          c,
          u,
          h,
          E,
          _,
          m,
          w,
          N,
          y
        );
        break;
      default:
        D & 1 ? te(
          c,
          u,
          h,
          E,
          _,
          m,
          w,
          N,
          y
        ) : D & 6 ? Uo(
          c,
          u,
          h,
          E,
          _,
          m,
          w,
          N,
          y
        ) : D & 64 || D & 128 ? v.process(
          c,
          u,
          h,
          E,
          _,
          m,
          w,
          N,
          y,
          Mt
        ) : process.env.NODE_ENV !== "production" && b("Invalid VNode type:", v, `(${typeof v})`);
    }
    T != null && _ ? Ht(T, c && c.ref, m, u || c, !u) : T == null && c && c.ref != null && Ht(c.ref, null, m, c, !0);
  }, Y = (c, u, h, E) => {
    if (c == null)
      o(
        u.el = l(u.children),
        h,
        E
      );
    else {
      const _ = u.el = c.el;
      u.children !== c.children && p(_, u.children);
    }
  }, q = (c, u, h, E) => {
    c == null ? o(
      u.el = f(u.children || ""),
      h,
      E
    ) : u.el = c.el;
  }, B = (c, u, h, E) => {
    [c.el, c.anchor] = M(
      c.children,
      u,
      h,
      E,
      c.el,
      c.anchor
    );
  }, L = (c, u, h, E) => {
    if (u.children !== c.children) {
      const _ = g(c.anchor);
      C(c), [u.el, u.anchor] = M(
        u.children,
        h,
        _,
        E
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, ve = ({ el: c, anchor: u }, h, E) => {
    let _;
    for (; c && c !== u; )
      _ = g(c), o(c, h, E), c = _;
    o(u, h, E);
  }, C = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = g(c), s(c), c = h;
    s(u);
  }, te = (c, u, h, E, _, m, w, N, y) => {
    if (u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), c == null)
      be(
        u,
        h,
        E,
        _,
        m,
        w,
        N,
        y
      );
    else {
      const v = c.el && c.el._isVueCE ? c.el : null;
      try {
        v && v._beginPatch(), Ue(
          c,
          u,
          _,
          m,
          w,
          N,
          y
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, be = (c, u, h, E, _, m, w, N) => {
    let y, v;
    const { props: T, shapeFlag: D, transition: V, dirs: A } = c;
    if (y = c.el = r(
      c.type,
      m,
      T && T.is,
      T
    ), D & 8 ? d(y, c.children) : D & 16 && ue(
      c.children,
      y,
      null,
      E,
      _,
      eo(c, m),
      w,
      N
    ), A && rt(c, null, E, "created"), ne(y, c, c.scopeId, w, E), T) {
      for (const W in T)
        W !== "value" && !Ft(W) && i(y, W, null, T[W], m, E);
      "value" in T && i(y, "value", null, T.value, m), (v = T.onVnodeBeforeMount) && Ae(v, E, c);
    }
    process.env.NODE_ENV !== "production" && (yn(y, "__vnode", c, !0), yn(y, "__vueParentComponent", E, !0)), A && rt(c, null, E, "beforeMount");
    const k = mc(_, V);
    k && V.beforeEnter(y), o(y, u, h), ((v = T && T.onVnodeMounted) || k || A) && he(() => {
      v && Ae(v, E, c), k && V.enter(y), A && rt(c, null, E, "mounted");
    }, _);
  }, ne = (c, u, h, E, _) => {
    if (h && O(c, h), E)
      for (let m = 0; m < E.length; m++)
        O(c, E[m]);
    if (_) {
      let m = _.subTree;
      if (process.env.NODE_ENV !== "production" && m.patchFlag > 0 && m.patchFlag & 2048 && (m = Fo(m.children) || m), u === m || Bi(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const w = _.vnode;
        ne(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, ue = (c, u, h, E, _, m, w, N, y = 0) => {
    for (let v = y; v < c.length; v++) {
      const T = c[v] = N ? Je(c[v]) : Oe(c[v]);
      x(
        null,
        T,
        u,
        h,
        E,
        _,
        m,
        w,
        N
      );
    }
  }, Ue = (c, u, h, E, _, m, w) => {
    const N = u.el = c.el;
    process.env.NODE_ENV !== "production" && (N.__vnode = u);
    let { patchFlag: y, dynamicChildren: v, dirs: T } = u;
    y |= c.patchFlag & 16;
    const D = c.props || U, V = u.props || U;
    let A;
    if (h && lt(h, !1), (A = V.onVnodeBeforeUpdate) && Ae(A, h, u, c), T && rt(u, c, h, "beforeUpdate"), h && lt(h, !0), process.env.NODE_ENV !== "production" && ke && (y = 0, w = !1, v = null), (D.innerHTML && V.innerHTML == null || D.textContent && V.textContent == null) && d(N, ""), v ? (Ze(
      c.dynamicChildren,
      v,
      N,
      h,
      E,
      eo(u, _),
      m
    ), process.env.NODE_ENV !== "production" && gn(c, u)) : w || Ce(
      c,
      u,
      N,
      null,
      h,
      E,
      eo(u, _),
      m,
      !1
    ), y > 0) {
      if (y & 16)
        Ne(N, D, V, h, _);
      else if (y & 2 && D.class !== V.class && i(N, "class", null, V.class, _), y & 4 && i(N, "style", D.style, V.style, _), y & 8) {
        const k = u.dynamicProps;
        for (let W = 0; W < k.length; W++) {
          const K = k[W], de = D[K], pe = V[K];
          (pe !== de || K === "value") && i(N, K, de, pe, _, h);
        }
      }
      y & 1 && c.children !== u.children && d(N, u.children);
    } else !w && v == null && Ne(N, D, V, h, _);
    ((A = V.onVnodeUpdated) || T) && he(() => {
      A && Ae(A, h, u, c), T && rt(u, c, h, "updated");
    }, E);
  }, Ze = (c, u, h, E, _, m, w) => {
    for (let N = 0; N < u.length; N++) {
      const y = c[N], v = u[N], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(y, v) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? a(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      x(
        y,
        v,
        T,
        null,
        E,
        _,
        m,
        w,
        !0
      );
    }
  }, Ne = (c, u, h, E, _) => {
    if (u !== h) {
      if (u !== U)
        for (const m in u)
          !Ft(m) && !(m in h) && i(
            c,
            m,
            u[m],
            null,
            _,
            E
          );
      for (const m in h) {
        if (Ft(m)) continue;
        const w = h[m], N = u[m];
        w !== N && m !== "value" && i(c, m, N, w, _, E);
      }
      "value" in h && i(c, "value", u.value, h.value, _);
    }
  }, rn = (c, u, h, E, _, m, w, N, y) => {
    const v = u.el = c ? c.el : l(""), T = u.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: V, slotScopeIds: A } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (ke || D & 2048) && (D = 0, y = !1, V = null), A && (N = N ? N.concat(A) : A), c == null ? (o(v, h, E), o(T, h, E), ue(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      T,
      _,
      m,
      w,
      N,
      y
    )) : D > 0 && D & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === V.length ? (Ze(
      c.dynamicChildren,
      V,
      h,
      _,
      m,
      w,
      N
    ), process.env.NODE_ENV !== "production" ? gn(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || _ && u === _.subTree) && gn(
        c,
        u,
        !0
        /* shallow */
      )
    )) : Ce(
      c,
      u,
      h,
      T,
      _,
      m,
      w,
      N,
      y
    );
  }, Uo = (c, u, h, E, _, m, w, N, y) => {
    u.slotScopeIds = N, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      E,
      w,
      y
    ) : Qe(
      u,
      h,
      E,
      _,
      m,
      w,
      y
    ) : ae(c, u, y);
  }, Qe = (c, u, h, E, _, m, w) => {
    const N = c.component = Vc(
      c,
      E,
      _
    );
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && el(N), process.env.NODE_ENV !== "production" && (an(c), Et(N, "mount")), Ro(c) && (N.ctx.renderer = Mt), process.env.NODE_ENV !== "production" && Et(N, "init"), Cc(N, !1, w), process.env.NODE_ENV !== "production" && yt(N, "init"), process.env.NODE_ENV !== "production" && ke && (c.el = null), N.asyncDep) {
      if (_ && _.registerDep(N, R, w), !c.el) {
        const y = N.subTree = Fe(ye);
        q(null, y, u, h), c.placeholder = y.el;
      }
    } else
      R(
        N,
        c,
        u,
        h,
        _,
        m,
        w
      );
    process.env.NODE_ENV !== "production" && (dn(), yt(N, "mount"));
  }, ae = (c, u, h) => {
    const E = u.component = c.component;
    if (Ql(c, u, h))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && an(u), P(E, u, h), process.env.NODE_ENV !== "production" && dn();
        return;
      } else
        E.next = u, E.update();
    else
      u.el = c.el, E.vnode = u;
  }, R = (c, u, h, E, _, m, w) => {
    const N = () => {
      if (c.isMounted) {
        let { next: D, bu: V, u: A, parent: k, vnode: W } = c;
        {
          const Me = ji(c);
          if (Me) {
            D && (D.el = W.el, P(c, D, w)), Me.asyncDep.then(() => {
              he(() => {
                c.isUnmounted || v();
              }, _);
            });
            return;
          }
        }
        let K = D, de;
        process.env.NODE_ENV !== "production" && an(D || c.vnode), lt(c, !1), D ? (D.el = W.el, P(c, D, w)) : D = W, V && bt(V), (de = D.props && D.props.onVnodeBeforeUpdate) && Ae(de, k, D, W), lt(c, !0), process.env.NODE_ENV !== "production" && Et(c, "render");
        const pe = fs(c);
        process.env.NODE_ENV !== "production" && yt(c, "render");
        const Te = c.subTree;
        c.subTree = pe, process.env.NODE_ENV !== "production" && Et(c, "patch"), x(
          Te,
          pe,
          // parent may have changed if it's in a teleport
          a(Te.el),
          // anchor may have changed if it's in a fragment
          ln(Te),
          c,
          _,
          m
        ), process.env.NODE_ENV !== "production" && yt(c, "patch"), D.el = pe.el, K === null && ec(c, pe.el), A && he(A, _), (de = D.props && D.props.onVnodeUpdated) && he(
          () => Ae(de, k, D, W),
          _
        ), process.env.NODE_ENV !== "production" && gi(c), process.env.NODE_ENV !== "production" && dn();
      } else {
        let D;
        const { el: V, props: A } = u, { bm: k, m: W, parent: K, root: de, type: pe } = c, Te = Ut(u);
        lt(c, !1), k && bt(k), !Te && (D = A && A.onVnodeBeforeMount) && Ae(D, K, u), lt(c, !0);
        {
          de.ce && de.ce._hasShadowRoot() && de.ce._injectChildStyle(pe), process.env.NODE_ENV !== "production" && Et(c, "render");
          const Me = c.subTree = fs(c);
          process.env.NODE_ENV !== "production" && yt(c, "render"), process.env.NODE_ENV !== "production" && Et(c, "patch"), x(
            null,
            Me,
            h,
            E,
            c,
            _,
            m
          ), process.env.NODE_ENV !== "production" && yt(c, "patch"), u.el = Me.el;
        }
        if (W && he(W, _), !Te && (D = A && A.onVnodeMounted)) {
          const Me = u;
          he(
            () => Ae(D, K, Me),
            _
          );
        }
        (u.shapeFlag & 256 || K && Ut(K.vnode) && K.vnode.shapeFlag & 256) && c.a && he(c.a, _), c.isMounted = !0, process.env.NODE_ENV !== "production" && rl(c), u = h = E = null;
      }
    };
    c.scope.on();
    const y = c.effect = new Us(N);
    c.scope.off();
    const v = c.update = y.run.bind(y), T = c.job = y.runIfDirty.bind(y);
    T.i = c, T.id = c.uid, y.scheduler = () => kn(T), lt(c, !0), process.env.NODE_ENV !== "production" && (y.onTrack = c.rtc ? (D) => bt(c.rtc, D) : void 0, y.onTrigger = c.rtg ? (D) => bt(c.rtg, D) : void 0), v();
  }, P = (c, u, h) => {
    u.component = c;
    const E = c.vnode.props;
    c.vnode = u, c.next = null, oc(c, u.props, E, h), pc(c, u.children, h), Ve(), Qo(c), Se();
  }, Ce = (c, u, h, E, _, m, w, N, y = !1) => {
    const v = c && c.children, T = c ? c.shapeFlag : 0, D = u.children, { patchFlag: V, shapeFlag: A } = u;
    if (V > 0) {
      if (V & 128) {
        Ct(
          v,
          D,
          h,
          E,
          _,
          m,
          w,
          N,
          y
        );
        return;
      } else if (V & 256) {
        Hn(
          v,
          D,
          h,
          E,
          _,
          m,
          w,
          N,
          y
        );
        return;
      }
    }
    A & 8 ? (T & 16 && Tt(v, _, m), D !== v && d(h, D)) : T & 16 ? A & 16 ? Ct(
      v,
      D,
      h,
      E,
      _,
      m,
      w,
      N,
      y
    ) : Tt(v, _, m, !0) : (T & 8 && d(h, ""), A & 16 && ue(
      D,
      h,
      E,
      _,
      m,
      w,
      N,
      y
    ));
  }, Hn = (c, u, h, E, _, m, w, N, y) => {
    c = c || Ot, u = u || Ot;
    const v = c.length, T = u.length, D = Math.min(v, T);
    let V;
    for (V = 0; V < D; V++) {
      const A = u[V] = y ? Je(u[V]) : Oe(u[V]);
      x(
        c[V],
        A,
        h,
        null,
        _,
        m,
        w,
        N,
        y
      );
    }
    v > T ? Tt(
      c,
      _,
      m,
      !0,
      !1,
      D
    ) : ue(
      u,
      h,
      E,
      _,
      m,
      w,
      N,
      y,
      D
    );
  }, Ct = (c, u, h, E, _, m, w, N, y) => {
    let v = 0;
    const T = u.length;
    let D = c.length - 1, V = T - 1;
    for (; v <= D && v <= V; ) {
      const A = c[v], k = u[v] = y ? Je(u[v]) : Oe(u[v]);
      if (Pt(A, k))
        x(
          A,
          k,
          h,
          null,
          _,
          m,
          w,
          N,
          y
        );
      else
        break;
      v++;
    }
    for (; v <= D && v <= V; ) {
      const A = c[D], k = u[V] = y ? Je(u[V]) : Oe(u[V]);
      if (Pt(A, k))
        x(
          A,
          k,
          h,
          null,
          _,
          m,
          w,
          N,
          y
        );
      else
        break;
      D--, V--;
    }
    if (v > D) {
      if (v <= V) {
        const A = V + 1, k = A < T ? u[A].el : E;
        for (; v <= V; )
          x(
            null,
            u[v] = y ? Je(u[v]) : Oe(u[v]),
            h,
            k,
            _,
            m,
            w,
            N,
            y
          ), v++;
      }
    } else if (v > V)
      for (; v <= D; )
        et(c[v], _, m, !0), v++;
    else {
      const A = v, k = v, W = /* @__PURE__ */ new Map();
      for (v = k; v <= V; v++) {
        const se = u[v] = y ? Je(u[v]) : Oe(u[v]);
        se.key != null && (process.env.NODE_ENV !== "production" && W.has(se.key) && b(
          "Duplicate keys found during update:",
          JSON.stringify(se.key),
          "Make sure keys are unique."
        ), W.set(se.key, v));
      }
      let K, de = 0;
      const pe = V - k + 1;
      let Te = !1, Me = 0;
      const $t = new Array(pe);
      for (v = 0; v < pe; v++) $t[v] = 0;
      for (v = A; v <= D; v++) {
        const se = c[v];
        if (de >= pe) {
          et(se, _, m, !0);
          continue;
        }
        let $e;
        if (se.key != null)
          $e = W.get(se.key);
        else
          for (K = k; K <= V; K++)
            if ($t[K - k] === 0 && Pt(se, u[K])) {
              $e = K;
              break;
            }
        $e === void 0 ? et(se, _, m, !0) : ($t[$e - k] = v + 1, $e >= Me ? Me = $e : Te = !0, x(
          se,
          u[$e],
          h,
          null,
          _,
          m,
          w,
          N,
          y
        ), de++);
      }
      const Wo = Te ? vc($t) : Ot;
      for (K = Wo.length - 1, v = pe - 1; v >= 0; v--) {
        const se = k + v, $e = u[se], qo = u[se + 1], Jo = se + 1 < T ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          qo.el || Li(qo)
        ) : E;
        $t[v] === 0 ? x(
          null,
          $e,
          h,
          Jo,
          _,
          m,
          w,
          N,
          y
        ) : Te && (K < 0 || v !== Wo[K] ? mt($e, h, Jo, 2) : K--);
      }
    }
  }, mt = (c, u, h, E, _ = null) => {
    const { el: m, type: w, transition: N, children: y, shapeFlag: v } = c;
    if (v & 6) {
      mt(c.component.subTree, u, h, E);
      return;
    }
    if (v & 128) {
      c.suspense.move(u, h, E);
      return;
    }
    if (v & 64) {
      w.move(c, u, h, Mt);
      return;
    }
    if (w === ce) {
      o(m, u, h);
      for (let D = 0; D < y.length; D++)
        mt(y[D], u, h, E);
      o(c.anchor, u, h);
      return;
    }
    if (w === _n) {
      ve(c, u, h);
      return;
    }
    if (E !== 2 && v & 1 && N)
      if (E === 0)
        N.beforeEnter(m), o(m, u, h), he(() => N.enter(m), _);
      else {
        const { leave: D, delayLeave: V, afterLeave: A } = N, k = () => {
          c.ctx.isUnmounted ? s(m) : o(m, u, h);
        }, W = () => {
          m._isLeaving && m[yl](
            !0
            /* cancelled */
          ), D(m, () => {
            k(), A && A();
          });
        };
        V ? V(m, k, W) : W();
      }
    else
      o(m, u, h);
  }, et = (c, u, h, E = !1, _ = !1) => {
    const {
      type: m,
      props: w,
      ref: N,
      children: y,
      dynamicChildren: v,
      shapeFlag: T,
      patchFlag: D,
      dirs: V,
      cacheIndex: A
    } = c;
    if (D === -2 && (_ = !1), N != null && (Ve(), Ht(N, null, h, c, !0), Se()), A != null && (u.renderCache[A] = void 0), T & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const k = T & 1 && V, W = !Ut(c);
    let K;
    if (W && (K = w && w.onVnodeBeforeUnmount) && Ae(K, u, c), T & 6)
      er(c.component, h, E);
    else {
      if (T & 128) {
        c.suspense.unmount(h, E);
        return;
      }
      k && rt(c, null, u, "beforeUnmount"), T & 64 ? c.type.remove(
        c,
        u,
        h,
        Mt,
        E
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== ce || D > 0 && D & 64) ? Tt(
        v,
        u,
        h,
        !1,
        !0
      ) : (m === ce && D & 384 || !_ && T & 16) && Tt(y, u, h), E && Un(c);
    }
    (W && (K = w && w.onVnodeUnmounted) || k) && he(() => {
      K && Ae(K, u, c), k && rt(c, null, u, "unmounted");
    }, h);
  }, Un = (c) => {
    const { type: u, el: h, anchor: E, transition: _ } = c;
    if (u === ce) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && _ && !_.persisted ? c.children.forEach((w) => {
        w.type === ye ? s(w.el) : Un(w);
      }) : Qi(h, E);
      return;
    }
    if (u === _n) {
      C(c);
      return;
    }
    const m = () => {
      s(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: N } = _, y = () => w(h, m);
      N ? N(c.el, m, y) : y();
    } else
      m();
  }, Qi = (c, u) => {
    let h;
    for (; c !== u; )
      h = g(c), s(c), c = h;
    s(u);
  }, er = (c, u, h) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && tl(c);
    const { bum: E, scope: _, job: m, subTree: w, um: N, m: y, a: v } = c;
    gs(y), gs(v), E && bt(E), _.stop(), m && (m.flags |= 8, et(w, c, u, h)), N && he(N, u), he(() => {
      c.isUnmounted = !0;
    }, u), process.env.NODE_ENV !== "production" && cl(c);
  }, Tt = (c, u, h, E = !1, _ = !1, m = 0) => {
    for (let w = m; w < c.length; w++)
      et(c[w], u, h, E, _);
  }, ln = (c) => {
    if (c.shapeFlag & 6)
      return ln(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = g(c.anchor || c.el), h = u && u[vl];
    return h ? g(h) : u;
  };
  let Kn = !1;
  const Ko = (c, u, h) => {
    let E;
    c == null ? u._vnode && (et(u._vnode, null, null, !0), E = u._vnode.component) : x(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, Kn || (Kn = !0, Qo(E), di(), Kn = !1);
  }, Mt = {
    p: x,
    um: et,
    m: mt,
    r: Un,
    mt: Qe,
    mc: ue,
    pc: Ce,
    pbc: Ze,
    n: ln,
    o: e
  };
  return {
    render: Ko,
    hydrate: void 0,
    createApp: Jl(Ko)
  };
}
function eo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function gn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (S(o) && S(s))
    for (let i = 0; i < o.length; i++) {
      const r = o[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Je(s[i]), l.el = r.el), !n && l.patchFlag !== -2 && gn(r, l)), l.type === nn && (l.patchFlag === -1 && (l = s[i] = Je(l)), l.el = r.el), l.type === ye && !l.el && (l.el = r.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function vc(e) {
  const t = e.slice(), n = [0];
  let o, s, i, r, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const p = e[o];
    if (p !== 0) {
      if (s = n[n.length - 1], e[s] < p) {
        t[o] = s, n.push(o);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        l = i + r >> 1, e[n[l]] < p ? i = l + 1 : r = l;
      p < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function ji(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ji(t);
}
function gs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Li(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Li(t.subTree) : null;
}
const Bi = (e) => e.__isSuspense;
function Ec(e, t) {
  t && t.pendingBranch ? S(e) ? t.effects.push(...e) : t.effects.push(e) : ai(e);
}
const ce = /* @__PURE__ */ Symbol.for("v-fgt"), nn = /* @__PURE__ */ Symbol.for("v-txt"), ye = /* @__PURE__ */ Symbol.for("v-cmt"), _n = /* @__PURE__ */ Symbol.for("v-stc"), Kt = [];
let Ee = null;
function re(e = !1) {
  Kt.push(Ee = e ? null : []);
}
function yc() {
  Kt.pop(), Ee = Kt[Kt.length - 1] || null;
}
let Gt = 1;
function _s(e, t = !1) {
  Gt += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function Hi(e) {
  return e.dynamicChildren = Gt > 0 ? Ee || Ot : null, yc(), Gt > 0 && Ee && Ee.push(e), e;
}
function ge(e, t, n, o, s, i) {
  return Hi(
    J(
      e,
      t,
      n,
      o,
      s,
      i,
      !0
    )
  );
}
function bc(e, t, n, o, s) {
  return Hi(
    Fe(
      e,
      t,
      n,
      o,
      s,
      !0
    )
  );
}
function Ln(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = pn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Nc = (...e) => Ki(
  ...e
), Ui = ({ key: e }) => e ?? null, mn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || /* @__PURE__ */ ee(e) || $(e) ? { i: oe, r: e, k: t, f: !!n } : e : null);
function J(e, t = null, n = null, o = 0, s = null, i = e === ce ? 0 : 1, r = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ui(t),
    ref: t && mn(t),
    scopeId: mi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: oe
  };
  return l ? (Bo(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= G(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && b("VNode created with invalid key (NaN). VNode type:", f.type), Gt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ee.push(f), f;
}
const Fe = process.env.NODE_ENV !== "production" ? Nc : Ki;
function Ki(e, t = null, n = null, o = 0, s = null, i = !1) {
  if ((!e || e === Pl) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = ye), Ln(e)) {
    const l = it(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Bo(l, n), Gt > 0 && !i && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (Yi(e) && (e = e.__vccOpts), t) {
    t = Oc(t);
    let { class: l, style: f } = t;
    l && !G(l) && (t.class = wt(l)), j(f) && (/* @__PURE__ */ bn(f) && !S(f) && (f = X({}, f)), t.style = xo(f));
  }
  const r = G(e) ? 1 : Bi(e) ? 128 : El(e) ? 64 : j(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && /* @__PURE__ */ bn(e) && (e = /* @__PURE__ */ I(e), b(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), J(
    e,
    t,
    n,
    o,
    s,
    r,
    i,
    !0
  );
}
function Oc(e) {
  return e ? /* @__PURE__ */ bn(e) || Ai(e) ? X({}, e) : e : null;
}
function it(e, t, n = !1, o = !1) {
  const { props: s, ref: i, patchFlag: r, children: l, transition: f } = e, p = t ? wc(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Ui(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? S(i) ? i.concat(mn(t)) : [i, mn(t)] : mn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && S(l) ? l.map(Wi) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ce ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && it(e.ssContent),
    ssFallback: e.ssFallback && it(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && Po(
    d,
    f.clone(d)
  ), d;
}
function Wi(e) {
  const t = it(e);
  return S(e.children) && (t.children = e.children.map(Wi)), t;
}
function mo(e = " ", t = 0) {
  return Fe(nn, null, e, t);
}
function vo(e = "", t = !1) {
  return t ? (re(), bc(ye, null, e)) : Fe(ye, null, e);
}
function Oe(e) {
  return e == null || typeof e == "boolean" ? Fe(ye) : S(e) ? Fe(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ln(e) ? Je(e) : Fe(nn, null, String(e));
}
function Je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : it(e);
}
function Bo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (S(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Bo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ai(t) ? t._ctx = oe : s === 3 && oe && (oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: oe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [mo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = wt([t.class, o.class]));
      else if (s === "style")
        t.style = xo([t.style, o.style]);
      else if (zt(s)) {
        const i = t[s], r = o[s];
        r && i !== r && !(S(i) && i.includes(r)) && (t[s] = i ? [].concat(i, r) : r);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Ae(e, t, n, o = null) {
  He(e, t, 7, [
    n,
    o
  ]);
}
const Dc = Vi();
let xc = 0;
function Vc(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || Dc, i = {
    uid: xc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Er(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Pi(o, s),
    emitsOptions: Si(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? i.ctx = kl(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Yl.bind(null, i), e.ce && e.ce(i), i;
}
let z = null;
const qi = () => z || oe;
let Tn, Eo;
{
  const e = Zt(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (i) => {
      s.length > 1 ? s.forEach((r) => r(i)) : s[0](i);
    };
  };
  Tn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => z = n
  ), Eo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yt = n
  );
}
const on = (e) => {
  const t = z;
  return Tn(e), e.scope.on(), () => {
    e.scope.off(), Tn(t);
  };
}, ms = () => {
  z && z.scope.off(), Tn(null);
}, Sc = /* @__PURE__ */ ze("slot,component");
function yo(e, { isNativeTag: t }) {
  (Sc(e) || t(e)) && b(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ji(e) {
  return e.vnode.shapeFlag & 4;
}
let Yt = !1;
function Cc(e, t = !1, n = !1) {
  t && Eo(t);
  const { props: o, children: s } = e.vnode, i = Ji(e);
  tc(e, o, i, t), dc(e, s, n || t);
  const r = i ? Tc(e, t) : void 0;
  return t && Eo(!1), r;
}
function Tc(e, t) {
  const n = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && yo(n.name, e.appContext.config), n.components) {
      const s = Object.keys(n.components);
      for (let i = 0; i < s.length; i++)
        yo(s[i], e.appContext.config);
    }
    if (n.directives) {
      const s = Object.keys(n.directives);
      for (let i = 0; i < s.length; i++)
        vi(s[i]);
    }
    n.compilerOptions && Mc() && b(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, wi), process.env.NODE_ENV !== "production" && Fl(e);
  const { setup: o } = n;
  if (o) {
    Ve();
    const s = e.setupContext = o.length > 1 ? Ac(e) : null, i = on(e), r = St(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(e.props) : e.props,
        s
      ]
    ), l = Oo(r);
    if (Se(), i(), (l || e.sp) && !Ut(e) && bi(e), l) {
      if (r.then(ms, ms), t)
        return r.then((f) => {
          vs(e, f, t);
        }).catch((f) => {
          en(f, e, 0);
        });
      if (e.asyncDep = r, process.env.NODE_ENV !== "production" && !e.suspense) {
        const f = sn(e, n);
        b(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      vs(e, r, t);
  } else
    Gi(e, t);
}
function vs(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : j(t) ? (process.env.NODE_ENV !== "production" && Ln(t) && b(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ri(t), process.env.NODE_ENV !== "production" && jl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && b(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Gi(e, n);
}
const Mc = () => !0;
function Gi(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Q);
  {
    const s = on(e);
    Ve();
    try {
      Bl(e);
    } finally {
      Se(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === Q && !t && (o.template ? b(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : b("Component is missing template or render function: ", o));
}
const Es = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Sn(), Z(e, "get", ""), e[t];
  },
  set() {
    return b("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return b("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Z(e, "get", ""), e[t];
  }
};
function $c(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Z(e, "get", "$slots"), t[n];
    }
  });
}
function Ac(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && b("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (S(n) ? o = "array" : /* @__PURE__ */ ee(n) && (o = "ref")), o !== "object" && b(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Es));
      },
      get slots() {
        return o || (o = $c(e));
      },
      get emit() {
        return (s, ...i) => e.emit(s, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Es),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Bn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ri(Lr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ht)
        return ht[n](e);
    },
    has(t, n) {
      return n in t || n in ht;
    }
  })) : e.proxy;
}
const Ic = /(?:^|[-_])\w/g, Pc = (e) => e.replace(Ic, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ho(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function sn(e, t, n = !1) {
  let o = Ho(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e) {
    const s = (i) => {
      for (const r in i)
        if (i[r] === t)
          return r;
    };
    o = s(e.components) || e.parent && s(
      e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? Pc(o) : n ? "App" : "Anonymous";
}
function Yi(e) {
  return $(e) && "__vccOpts" in e;
}
const Rc = (e, t) => {
  const n = /* @__PURE__ */ Kr(e, t, Yt);
  if (process.env.NODE_ENV !== "production") {
    const o = qi();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function kc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!j(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ ee(a)) {
        Ve();
        const g = a.value;
        return Se(), [
          "div",
          {},
          ["span", e, d(a)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ ot(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ me(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${/* @__PURE__ */ Be(a) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ Be(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ me(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...i(a.$)
        ];
    }
  };
  function i(a) {
    const g = [];
    a.type.props && a.props && g.push(r("props", /* @__PURE__ */ I(a.props))), a.setupState !== U && g.push(r("setup", a.setupState)), a.data !== U && g.push(r("data", /* @__PURE__ */ I(a.data)));
    const O = f(a, "computed");
    O && g.push(r("computed", O));
    const M = f(a, "inject");
    return M && g.push(r("injected", M)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function r(a, g) {
    return g = X({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((O) => [
          "div",
          {},
          ["span", o, O + ": "],
          l(g[O], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : j(a) ? ["object", { object: g ? /* @__PURE__ */ I(a) : a }] : ["span", n, String(a)];
  }
  function f(a, g) {
    const O = a.type;
    if ($(O))
      return;
    const M = {};
    for (const x in a.ctx)
      p(O, x, g) && (M[x] = a.ctx[x]);
    return M;
  }
  function p(a, g, O) {
    const M = a[O];
    if (S(M) && M.includes(g) || j(M) && g in M || a.extends && p(a.extends, g, O) || a.mixins && a.mixins.some((x) => p(x, g, O)))
      return !0;
  }
  function d(a) {
    return /* @__PURE__ */ me(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const ys = "3.5.29", je = process.env.NODE_ENV !== "production" ? b : Q;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bo;
const bs = typeof window < "u" && window.trustedTypes;
if (bs)
  try {
    bo = /* @__PURE__ */ bs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && je(`Error creating trusted types policy: ${e}`);
  }
const zi = bo ? (e) => bo.createHTML(e) : (e) => e, Fc = "http://www.w3.org/2000/svg", jc = "http://www.w3.org/1998/Math/MathML", We = typeof document < "u" ? document : null, Ns = We && /* @__PURE__ */ We.createElement("template"), Lc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? We.createElementNS(Fc, e) : t === "mathml" ? We.createElementNS(jc, e) : n ? We.createElement(e, { is: n }) : We.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => We.createTextNode(e),
  createComment: (e) => We.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => We.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      Ns.innerHTML = zi(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ns.content;
      if (o === "svg" || o === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Bc = /* @__PURE__ */ Symbol("_vtc");
function Hc(e, t, n) {
  const o = e[Bc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Os = /* @__PURE__ */ Symbol("_vod"), Uc = /* @__PURE__ */ Symbol("_vsh"), Kc = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Wc = /(?:^|;)\s*display\s*:/;
function qc(e, t, n) {
  const o = e.style, s = G(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (G(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && vn(o, l, "");
        }
      else
        for (const r in t)
          n[r] == null && vn(o, r, "");
    for (const r in n)
      r === "display" && (i = !0), vn(o, r, n[r]);
  } else if (s) {
    if (t !== n) {
      const r = o[Kc];
      r && (n += ";" + r), o.cssText = n, i = Wc.test(n);
    }
  } else t && e.removeAttribute("style");
  Os in e && (e[Os] = i ? o.display : "", e[Uc] && (o.display = "none"));
}
const Jc = /[^\\];\s*$/, ws = /\s*!important$/;
function vn(e, t, n) {
  if (S(n))
    n.forEach((o) => vn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Jc.test(n) && je(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Gc(e, t);
    ws.test(n) ? e.setProperty(
      st(o),
      n.replace(ws, ""),
      "important"
    ) : e[o] = n;
  }
}
const Ds = ["Webkit", "Moz", "ms"], to = {};
function Gc(e, t) {
  const n = to[t];
  if (n)
    return n;
  let o = fe(t);
  if (o !== "filter" && o in e)
    return to[t] = o;
  o = gt(o);
  for (let s = 0; s < Ds.length; s++) {
    const i = Ds[s] + o;
    if (i in e)
      return to[t] = i;
  }
  return t;
}
const xs = "http://www.w3.org/1999/xlink";
function Vs(e, t, n, o, s, i = _r(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(xs, t.slice(6, t.length)) : e.setAttributeNS(xs, t, n) : n == null || i && !Ls(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Le(n) ? String(n) : n
  );
}
function Ss(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? zi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ls(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !r && je(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(s || t);
}
function Xi(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Yc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Cs = /* @__PURE__ */ Symbol("_vei");
function zc(e, t, n, o, s = null) {
  const i = e[Cs] || (e[Cs] = {}), r = i[t];
  if (o && r)
    r.value = process.env.NODE_ENV !== "production" ? Ms(o, t) : o;
  else {
    const [l, f] = Xc(t);
    if (o) {
      const p = i[t] = ef(
        process.env.NODE_ENV !== "production" ? Ms(o, t) : o,
        s
      );
      Xi(e, l, p, f);
    } else r && (Yc(e, l, r, f), i[t] = void 0);
  }
}
const Ts = /(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t;
  if (Ts.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ts); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : st(e.slice(2)), t];
}
let no = 0;
const Zc = /* @__PURE__ */ Promise.resolve(), Qc = () => no || (Zc.then(() => no = 0), no = Date.now());
function ef(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    He(
      tf(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Qc(), n;
}
function Ms(e, t) {
  return $(e) || S(e) ? e : (je(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Q);
}
function tf(e, t) {
  if (S(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const $s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, nf = (e, t, n, o, s, i) => {
  const r = s === "svg";
  t === "class" ? Hc(e, o, r) : t === "style" ? qc(e, n, o) : zt(t) ? En(t) || zc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : of(e, t, o, r)) ? (Ss(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Vs(e, t, o, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(o)) ? Ss(e, fe(t), o, i, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Vs(e, t, o, r));
};
function of(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $s(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return $s(t) && G(n) ? !1 : t in e;
}
const As = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return S(t) ? (n) => bt(t, n) : t;
}, oo = /* @__PURE__ */ Symbol("_assign"), sf = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const s = $n(t);
    Xi(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => n ? js(Mn(r)) : Mn(r)
      );
      e[oo](
        e.multiple ? s ? new Set(i) : i : i[0]
      ), e._assigning = !0, fi(() => {
        e._assigning = !1;
      });
    }), e[oo] = As(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Is(e, t);
  },
  beforeUpdate(e, t, n) {
    e[oo] = As(n);
  },
  updated(e, { value: t }) {
    e._assigning || Is(e, t);
  }
};
function Is(e, t) {
  const n = e.multiple, o = S(t);
  if (n && !o && !$n(t)) {
    process.env.NODE_ENV !== "production" && je(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let s = 0, i = e.options.length; s < i; s++) {
    const r = e.options[s], l = Mn(r);
    if (n)
      if (o) {
        const f = typeof l;
        f === "string" || f === "number" ? r.selected = t.some((p) => String(p) === String(l)) : r.selected = vr(t, l) > -1;
      } else
        r.selected = t.has(l);
    else if (Qt(Mn(r), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Mn(e) {
  return "_value" in e ? e._value : e.value;
}
const rf = /* @__PURE__ */ X({ patchProp: nf }, Lc);
let Ps;
function lf() {
  return Ps || (Ps = gc(rf));
}
const cf = (...e) => {
  const t = lf().createApp(...e);
  process.env.NODE_ENV !== "production" && (uf(t), af(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = df(o);
    if (!s) return;
    const i = t._component;
    !$(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const r = n(s, !1, ff(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), r;
  }, t;
};
function ff(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function uf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => dr(t) || pr(t) || hr(t),
    writable: !1
  });
}
function af(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        je(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return je(o), n;
      },
      set() {
        je(o);
      }
    });
  }
}
function df(e) {
  if (G(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && je(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && je(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function pf() {
  kc();
}
process.env.NODE_ENV !== "production" && pf();
const Zi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, hf = {
  name: "DiffViewer",
  props: {
    originalBlocks: { type: Array, required: !0 },
    modifiedBlocks: { type: Array, required: !0 },
    highlightLevel: { type: String, default: "off" },
    leftLabel: { type: String, default: "Original" },
    rightLabel: { type: String, default: "Modified" }
  },
  emits: ["copy-to-original", "copy-to-modified", "modified-sentence-input"],
  data() {
    return { wordDiffCache: {} };
  },
  methods: {
    onModifiedInput(e, t, n) {
      this.$emit("modified-sentence-input", {
        blockIndex: e,
        sentenceIndex: t,
        value: n.target.value
      });
    },
    escapeHtml(e) {
      const t = document.createElement("div");
      return t.textContent = e, t.innerHTML;
    },
    splitWords(e) {
      const t = [];
      let n = "";
      for (const o of e)
        /\s/.test(o) ? (n && (t.push(n), n = ""), o === `
` && t.push(`
`)) : `.,;:!?()[]{}"'-`.includes(o) ? (n && (t.push(n), n = ""), t.push(o)) : n += o;
      return n && t.push(n), t;
    },
    computeWordDiff(e, t) {
      const n = this.splitWords(e), o = this.splitWords(t), s = [];
      let i = 0, r = 0;
      for (; i < n.length || r < o.length; )
        if (i < n.length && r < o.length && n[i] === o[r])
          s.push({ type: "equal", word: n[i] }), i++, r++;
        else {
          let l = -1, f = -1;
          for (let p = i; p < Math.min(i + 5, n.length); p++) {
            const d = o.slice(r, r + 5).indexOf(n[p]);
            if (d !== -1) {
              l = p, f = r + d;
              break;
            }
          }
          if (l !== -1 && l - i <= 3 && f - r <= 3) {
            for (; i < l; )
              n[i] !== `
` && s.push({ type: "removed", word: n[i] }), i++;
            for (; r < f; )
              o[r] !== `
` && s.push({ type: "added", word: o[r] }), r++;
          } else i < n.length && r < o.length ? (n[i] !== `
` && s.push({ type: "removed", word: n[i] }), o[r] !== `
` && s.push({ type: "added", word: o[r] }), i++, r++) : i < n.length ? (n[i] !== `
` && s.push({ type: "removed", word: n[i] }), i++) : (o[r] !== `
` && s.push({ type: "added", word: o[r] }), r++);
        }
      return s;
    },
    renderSentenceWordDiff(e, t, n) {
      if (!e && !t) return "";
      if (!e)
        return n === "modified" ? `<span class="diff-tool-viewer__word-added">${this.escapeHtml(t)}</span>` : "";
      if (!t)
        return n === "original" ? `<span class="diff-tool-viewer__word-removed">${this.escapeHtml(e)}</span>` : "";
      if (e === t) return this.escapeHtml(e);
      const o = `${e}|||${t}|||${n}`;
      if (this.wordDiffCache[o]) return this.wordDiffCache[o];
      const i = this.computeWordDiff(e, t).map((r) => {
        const l = this.escapeHtml(r.word);
        return r.type === "equal" ? l : r.type === "removed" && n === "original" ? `<span class="diff-tool-viewer__word-removed">${l}</span>` : r.type === "added" && n === "modified" ? `<span class="diff-tool-viewer__word-added">${l}</span>` : "";
      }).filter((r) => r).join(" ");
      return this.wordDiffCache[o] = i, i;
    }
  }
}, gf = { class: "diff-tool-viewer__viewer" }, _f = { class: "diff-tool-viewer__table" }, mf = { class: "diff-tool-viewer__panel-header" }, vf = { class: "diff-tool-viewer__panel-header" }, Ef = ["innerHTML"], yf = { class: "diff-tool-viewer__divider-cell" }, bf = { class: "diff-tool-viewer__copy-controls" }, Nf = ["onClick"], Of = ["onClick"], wf = ["value", "onInput"];
function Df(e, t, n, o, s, i) {
  return re(), ge("div", gf, [
    J("table", _f, [
      J("thead", null, [
        J("tr", null, [
          J("th", mf, jt(n.leftLabel), 1),
          t[0] || (t[0] = J("th", { class: "diff-tool-viewer__divider-header" }, null, -1)),
          J("th", vf, jt(n.rightLabel), 1)
        ])
      ]),
      J("tbody", null, [
        (re(!0), ge(ce, null, Zn(n.originalBlocks, (r, l) => {
          var f, p, d;
          return re(), ge("tr", {
            key: "row-" + l
          }, [
            J("td", {
              class: wt(["diff-tool-viewer__cell", r.type, { "diff-tool-viewer__blank": r.isBlank }])
            }, [
              (re(!0), ge(ce, null, Zn(r.sentences, (a, g) => {
                var O, M;
                return re(), ge("div", {
                  key: "orig-s-" + l + "-" + g,
                  class: wt({ "diff-tool-viewer__placeholder": a === "" })
                }, [
                  a === "" ? (re(), ge(ce, { key: 0 }, [
                    mo(" ")
                  ], 64)) : n.highlightLevel === "word" ? (re(), ge("span", {
                    key: 1,
                    innerHTML: i.renderSentenceWordDiff(a, ((M = (O = n.modifiedBlocks[l]) == null ? void 0 : O.sentences) == null ? void 0 : M[g]) || "", "original")
                  }, null, 8, Ef)) : (re(), ge(ce, { key: 2 }, [
                    mo(jt(a), 1)
                  ], 64))
                ], 2);
              }), 128))
            ], 2),
            J("td", yf, [
              J("div", bf, [
                r.type === "added" || r.type === "changed" ? (re(), ge("button", {
                  key: 0,
                  class: "diff-tool-viewer__copy-btn diff-tool-viewer__copy-to-original",
                  onClick: (a) => e.$emit("copy-to-original", l),
                  title: "Copy to Original"
                }, " ← ", 8, Nf)) : vo("", !0),
                r.type === "removed" || r.type === "changed" ? (re(), ge("button", {
                  key: 1,
                  class: "diff-tool-viewer__copy-btn diff-tool-viewer__copy-to-modified",
                  onClick: (a) => e.$emit("copy-to-modified", l),
                  title: "Copy to Modified"
                }, " → ", 8, Of)) : vo("", !0)
              ])
            ]),
            J("td", {
              class: wt(["diff-tool-viewer__cell", (f = n.modifiedBlocks[l]) == null ? void 0 : f.type, { "diff-tool-viewer__blank": (p = n.modifiedBlocks[l]) == null ? void 0 : p.isBlank }])
            }, [
              (re(!0), ge(ce, null, Zn(((d = n.modifiedBlocks[l]) == null ? void 0 : d.sentences) || [], (a, g) => (re(), ge("textarea", {
                key: "mod-s-" + l + "-" + g,
                class: "diff-tool-viewer__modified-input",
                rows: "1",
                value: a,
                spellcheck: "false",
                onInput: (O) => i.onModifiedInput(l, g, O)
              }, null, 40, wf))), 128))
            ], 2)
          ]);
        }), 128))
      ])
    ])
  ]);
}
const xf = /* @__PURE__ */ Zi(hf, [["render", Df]]), Vf = {
  name: "ViewerApp",
  components: { DiffViewer: xf },
  props: {
    initialBlocks: { type: Array, default: () => [] },
    originalText: { type: String, default: "" },
    modifiedText: { type: String, default: "" },
    leftLabel: { type: String, default: "Original" },
    rightLabel: { type: String, default: "Modified" },
    highlightLevel: { type: String, default: "off" },
    onSave: { type: Function, required: !0 },
    onCancel: { type: Function, required: !0 },
    getStateRef: { type: Object, default: null }
  },
  mounted() {
    this.getStateRef && typeof this.getStateRef == "object" && (this.getStateRef.getBlocks = () => this.buildBlocksForSave()), document.addEventListener("keydown", this.onKeydown);
  },
  data() {
    const e = this.synchronizeBlockLines(this.initialBlocks);
    return {
      originalBlocks: e.originalBlocks,
      modifiedBlocks: e.modifiedBlocks,
      undo_stack: [],
      redo_stack: [],
      can_undo: !1,
      can_redo: !1,
      has_unsaved_changes: !1,
      isSaving: !1,
      highlightLevel: this.highlightLevel || "off",
      _modifiedUndoCellKey: null
    };
  },
  beforeUnmount() {
    this.getStateRef && typeof this.getStateRef == "object" && (this.getStateRef.getBlocks = void 0), document.removeEventListener("keydown", this.onKeydown);
  },
  methods: {
    onKeydown(e) {
      (e.ctrlKey || e.metaKey) && (e.key === "z" && !e.shiftKey ? (e.preventDefault(), this.undo()) : (e.key === "y" || e.key === "z" && e.shiftKey) && (e.preventDefault(), this.redo()));
    },
    synchronizeBlockLines(e) {
      const t = [], n = [];
      return (e || []).forEach((o) => {
        const s = o.original_sentences || [], i = o.modified_sentences || [], r = Math.max(s.length, i.length), l = [...s], f = [...i];
        for (; l.length < r; ) l.push("");
        for (; f.length < r; ) f.push("");
        t.push({
          ...o,
          sentences: l,
          isBlank: s.length === 0
        }), n.push({
          ...o,
          sentences: f,
          isBlank: i.length === 0
        });
      }), { originalBlocks: t, modifiedBlocks: n };
    },
    saveStateToUndo() {
      this.undo_stack.push({
        original: JSON.parse(JSON.stringify(this.originalBlocks)),
        modified: JSON.parse(JSON.stringify(this.modifiedBlocks))
      }), this.can_undo = !0, this.redo_stack = [], this.can_redo = !1, this.has_unsaved_changes = !0;
    },
    handleModifiedSentenceInput({ blockIndex: e, sentenceIndex: t, value: n }) {
      const o = `${e}-${t}`;
      this._modifiedUndoCellKey !== o && (this.saveStateToUndo(), this._modifiedUndoCellKey = o);
      const s = this.modifiedBlocks[e];
      s && (s.sentences[t] = n, s.isBlank = !s.sentences.some((i) => i !== ""), this.has_unsaved_changes = !0);
    },
    handleCopyToOriginal(e) {
      this._modifiedUndoCellKey = null, this.saveStateToUndo();
      const t = this.modifiedBlocks[e].sentences.filter((i) => i !== ""), n = this.originalBlocks[e].sentences, o = Math.max(t.length, n.length), s = [...t];
      for (; s.length < o; ) s.push("");
      this.originalBlocks[e] = {
        ...this.originalBlocks[e],
        sentences: s,
        type: "copied",
        isBlank: t.length === 0
      };
    },
    handleCopyToModified(e) {
      this._modifiedUndoCellKey = null, this.saveStateToUndo();
      const t = this.originalBlocks[e].sentences.filter((i) => i !== ""), n = this.modifiedBlocks[e].sentences, o = Math.max(t.length, n.length), s = [...t];
      for (; s.length < o; ) s.push("");
      this.modifiedBlocks[e] = {
        ...this.modifiedBlocks[e],
        sentences: s,
        type: "copied",
        isBlank: t.length === 0
      };
    },
    undo() {
      if (this.undo_stack.length === 0) return;
      this.redo_stack.push({
        original: JSON.parse(JSON.stringify(this.originalBlocks)),
        modified: JSON.parse(JSON.stringify(this.modifiedBlocks))
      }), this.can_redo = !0;
      const e = this.undo_stack.pop();
      this.originalBlocks = e.original, this.modifiedBlocks = e.modified, this.can_undo = this.undo_stack.length > 0, this.has_unsaved_changes = !0, this._modifiedUndoCellKey = null;
    },
    redo() {
      if (this.redo_stack.length === 0) return;
      this.undo_stack.push({
        original: JSON.parse(JSON.stringify(this.originalBlocks)),
        modified: JSON.parse(JSON.stringify(this.modifiedBlocks))
      }), this.can_undo = !0;
      const e = this.redo_stack.pop();
      this.originalBlocks = e.original, this.modifiedBlocks = e.modified, this.can_redo = this.redo_stack.length > 0, this.has_unsaved_changes = !0, this._modifiedUndoCellKey = null;
    },
    buildBlocksForSave() {
      return this.originalBlocks.map((e, t) => ({
        type: e.type,
        original_sentences: this.originalBlocks[t].sentences.filter((n) => n !== ""),
        modified_sentences: this.modifiedBlocks[t].sentences.filter((n) => n !== ""),
        original_start: e.original_start ?? t,
        modified_start: e.modified_start ?? t
      }));
    },
    handleSave() {
      if (this.has_unsaved_changes) {
        this.isSaving = !0;
        try {
          const e = this.buildBlocksForSave();
          this.onSave({ blocks: e }), this.has_unsaved_changes = !1, this.undo_stack = [], this.can_undo = !1, this._modifiedUndoCellKey = null;
        } finally {
          this.isSaving = !1;
        }
      }
    },
    handleCancel() {
      this.has_unsaved_changes && !confirm("You have unsaved changes. Are you sure you want to cancel?") || this.onCancel();
    }
  }
}, Sf = { class: "diff-tool-viewer" }, Cf = { class: "diff-tool-viewer__toolbar" }, Tf = {
  key: 0,
  class: "diff-tool-viewer__unsaved"
}, Mf = { class: "diff-tool-viewer__highlight" }, $f = { class: "diff-tool-viewer__toolbar-btns" }, Af = ["disabled"], If = ["disabled"], Pf = ["disabled"];
function Rf(e, t, n, o, s, i) {
  const r = Il("DiffViewer");
  return re(), ge("div", Sf, [
    J("div", Cf, [
      s.has_unsaved_changes ? (re(), ge("span", Tf, "Unsaved changes")) : vo("", !0),
      J("div", Mf, [
        t[6] || (t[6] = J("label", null, "Highlight:", -1)),
        pl(J("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (l) => s.highlightLevel = l),
          class: "diff-tool-viewer__select"
        }, [...t[5] || (t[5] = [
          J("option", { value: "off" }, "Off", -1),
          J("option", { value: "word" }, "Word Level", -1)
        ])], 512), [
          [sf, s.highlightLevel]
        ])
      ]),
      J("div", $f, [
        J("button", {
          type: "button",
          class: "diff-tool-viewer__btn diff-tool-viewer__btn--secondary",
          disabled: !s.can_undo,
          onClick: t[1] || (t[1] = (...l) => i.undo && i.undo(...l)),
          title: "Ctrl+Z"
        }, "Undo", 8, Af),
        J("button", {
          type: "button",
          class: "diff-tool-viewer__btn diff-tool-viewer__btn--secondary",
          disabled: !s.can_redo,
          onClick: t[2] || (t[2] = (...l) => i.redo && i.redo(...l)),
          title: "Ctrl+Y"
        }, "Redo", 8, If),
        J("button", {
          type: "button",
          class: "diff-tool-viewer__btn diff-tool-viewer__btn--primary",
          disabled: !s.has_unsaved_changes || s.isSaving,
          onClick: t[3] || (t[3] = (...l) => i.handleSave && i.handleSave(...l))
        }, jt(s.isSaving ? "Saving..." : "Save"), 9, Pf),
        J("button", {
          type: "button",
          class: "diff-tool-viewer__btn diff-tool-viewer__btn--danger",
          onClick: t[4] || (t[4] = (...l) => i.handleCancel && i.handleCancel(...l))
        }, "Cancel")
      ])
    ]),
    Fe(r, {
      "original-blocks": s.originalBlocks,
      "modified-blocks": s.modifiedBlocks,
      "highlight-level": s.highlightLevel,
      "left-label": n.leftLabel,
      "right-label": n.rightLabel,
      onCopyToOriginal: i.handleCopyToOriginal,
      onCopyToModified: i.handleCopyToModified,
      onModifiedSentenceInput: i.handleModifiedSentenceInput
    }, null, 8, ["original-blocks", "modified-blocks", "highlight-level", "left-label", "right-label", "onCopyToOriginal", "onCopyToModified", "onModifiedSentenceInput"])
  ]);
}
const kf = /* @__PURE__ */ Zi(Vf, [["render", Rf]]);
function Ff(e, t) {
  var o, s;
  const n = cf(kf, {
    initialBlocks: t.blocks || [],
    originalText: t.originalText,
    modifiedText: t.modifiedText,
    leftLabel: ((o = t.labels) == null ? void 0 : o.left) ?? "Original",
    rightLabel: ((s = t.labels) == null ? void 0 : s.right) ?? "Modified",
    highlightLevel: t.highlightLevel ?? "off",
    onSave: t.onSave,
    onCancel: t.onCancel,
    getStateRef: t.getStateRef ?? null
  });
  return n.mount(e), {
    unmount() {
      n.unmount();
    }
  };
}
const Lf = { mount: Ff };
export {
  Lf as default,
  Ff as mount
};
