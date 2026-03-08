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
const U = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Dt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, Rs = () => !1, Xt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), bn = (e) => e.startsWith("onUpdate:"), X = Object.assign, No = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, tr = Object.prototype.hasOwnProperty, F = (e, t) => tr.call(e, t), S = Array.isArray, at = (e) => Zt(e) === "[object Map]", $n = (e) => Zt(e) === "[object Set]", Go = (e) => Zt(e) === "[object Date]", A = (e) => typeof e == "function", G = (e) => typeof e == "string", Le = (e) => typeof e == "symbol", j = (e) => e !== null && typeof e == "object", Oo = (e) => (j(e) || A(e)) && A(e.then) && A(e.catch), ks = Object.prototype.toString, Zt = (e) => ks.call(e), wo = (e) => Zt(e).slice(8, -1), Fs = (e) => Zt(e) === "[object Object]", Do = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lt = /* @__PURE__ */ ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nr = /* @__PURE__ */ ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Pn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, or = /-\w/g, ue = Pn(
  (e) => e.replace(or, (t) => t.slice(1).toUpperCase())
), sr = /\B([A-Z])/g, st = Pn(
  (e) => e.replace(sr, "-$1").toLowerCase()
), _t = Pn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ct = Pn(
  (e) => e ? `on${_t(e)}` : ""
), dt = (e, t) => !Object.is(e, t), Nt = (e, ...t) => {
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
const Qt = () => Yo || (Yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
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
function ut(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (S(e))
    for (let n = 0; n < e.length; n++) {
      const o = ut(e[n]);
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
    n = en(e[o], t[o]);
  return n;
}
function en(e, t) {
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
      if (l && !f || !l && f || !en(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function vr(e, t) {
  return e.findIndex((n) => en(n, t));
}
const Hs = (e) => !!(e && e.__v_isRef === !0), wt = (e) => G(e) ? e : e == null ? "" : S(e) || j(e) && (e.toString === ks || !A(e.toString)) ? Hs(e) ? wt(e.value) : JSON.stringify(e, Bs, 2) : String(e), Bs = (e, t) => Hs(t) ? Bs(e, t.value) : at(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], i) => (n[qn(o, i) + " =>"] = s, n),
    {}
  )
} : $n(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => qn(n))
} : Le(t) ? qn(t) : j(t) && !S(t) && !Fs(t) ? String(t) : t, qn = (e, t = "") => {
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
function br() {
  return _e;
}
let B;
const Jn = /* @__PURE__ */ new WeakSet();
class Us {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _e && _e.active && _e.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jn.has(this) && (Jn.delete(this), this.trigger()));
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
    const t = B, n = De;
    B = this, De = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && B !== this && xe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Js(this), B = t, De = n, this.flags &= -3;
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
    this.flags & 64 ? Jn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    io(this) && this.run();
  }
  get dirty() {
    return io(this);
  }
}
let Ks = 0, Ht, Bt;
function Ws(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bt, Bt = e;
    return;
  }
  e.next = Ht, Ht = e;
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
  for (; Ht; ) {
    let t = Ht;
    for (Ht = void 0; t; ) {
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
    o.version === -1 ? (o === n && (n = s), Co(o), yr(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function io(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Gs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Gs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qt) || (e.globalVersion = qt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !io(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = B, o = De;
  B = e, De = !0;
  try {
    qs(e);
    const s = e.fn(e._value);
    (t.version === 0 || dt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    B = n, De = o, Js(e), e.flags &= -3;
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
function yr(e) {
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
    const n = B;
    B = void 0;
    try {
      t();
    } finally {
      B = n;
    }
  }
}
let qt = 0;
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
    if (!B || !De || B === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== B)
      n = this.activeLink = new Nr(B, this), B.deps ? (n.prevDep = B.depsTail, B.depsTail.nextDep = n, B.depsTail = n) : B.deps = B.depsTail = n, Xs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = B.depsTail, n.nextDep = void 0, B.depsTail.nextDep = n, B.depsTail = n, B.deps === n && (B.deps = o);
    }
    return process.env.NODE_ENV !== "production" && B.onTrack && B.onTrack(
      X(
        {
          effect: B
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, qt++, this.notify(t);
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
const ro = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), lo = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Jt = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Z(e, t, n) {
  if (De && B) {
    let o = ro.get(e);
    o || ro.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new zs()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function Ie(e, t, n, o, s, i) {
  const r = ro.get(e);
  if (!r) {
    qt++;
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
        (g === "length" || g === Jt || !Le(g) && g >= d) && l(a);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), p && l(r.get(Jt)), t) {
        case "add":
          f ? p && l(r.get("length")) : (l(r.get(pt)), at(e) && l(r.get(lo)));
          break;
        case "delete":
          f || (l(r.get(pt)), at(e) && l(r.get(lo)));
          break;
        case "set":
          at(e) && l(r.get(pt));
          break;
      }
  }
  So();
}
function Et(e) {
  const t = /* @__PURE__ */ P(e);
  return t === e ? t : (Z(t, "iterate", Jt), /* @__PURE__ */ me(e) ? t : t.map(Ye));
}
function In(e) {
  return Z(e = /* @__PURE__ */ P(e), "iterate", Jt), e;
}
function tt(e, t) {
  return /* @__PURE__ */ He(e) ? St(/* @__PURE__ */ ot(e) ? Ye(t) : t) : Ye(t);
}
const Or = {
  __proto__: null,
  [Symbol.iterator]() {
    return Gn(this, Symbol.iterator, (e) => tt(this, e));
  },
  concat(...e) {
    return Et(this).concat(
      ...e.map((t) => S(t) ? Et(t) : t)
    );
  },
  entries() {
    return Gn(this, "entries", (e) => (e[1] = tt(this, e[1]), e));
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
    return Yn(this, "includes", e);
  },
  indexOf(...e) {
    return Yn(this, "indexOf", e);
  },
  join(e) {
    return Et(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Yn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Pt(this, "pop");
  },
  push(...e) {
    return Pt(this, "push", e);
  },
  reduce(e, ...t) {
    return Xo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Xo(this, "reduceRight", e, t);
  },
  shift() {
    return Pt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Pt(this, "splice", e);
  },
  toReversed() {
    return Et(this).toReversed();
  },
  toSorted(e) {
    return Et(this).toSorted(e);
  },
  toSpliced(...e) {
    return Et(this).toSpliced(...e);
  },
  unshift(...e) {
    return Pt(this, "unshift", e);
  },
  values() {
    return Gn(this, "values", (e) => tt(this, e));
  }
};
function Gn(e, t, n) {
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
function Yn(e, t, n) {
  const o = /* @__PURE__ */ P(e);
  Z(o, "iterate", Jt);
  const s = o[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Nn(n[0]) ? (n[0] = /* @__PURE__ */ P(n[0]), o[t](...n)) : s;
}
function Pt(e, t, n = []) {
  Ve(), Vo();
  const o = (/* @__PURE__ */ P(e))[t].apply(e, n);
  return So(), Se(), o;
}
const Dr = /* @__PURE__ */ ze("__proto__,__v_isRef,__isVue"), Zs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Le)
);
function xr(e) {
  Le(e) || (e = String(e));
  const t = /* @__PURE__ */ P(this);
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
      return s && j(f) ? /* @__PURE__ */ fo(f) : f;
    }
    return j(l) ? s ? /* @__PURE__ */ fo(l) : /* @__PURE__ */ To(l) : l;
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
      const p = /* @__PURE__ */ He(i);
      if (!/* @__PURE__ */ me(o) && !/* @__PURE__ */ He(o) && (i = /* @__PURE__ */ P(i), o = /* @__PURE__ */ P(o)), !r && /* @__PURE__ */ ee(i) && !/* @__PURE__ */ ee(o))
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
    return t === /* @__PURE__ */ P(s) && (l ? dt(o, i) && Ie(t, "set", n, o, i) : Ie(t, "add", n, o)), f;
  }
  deleteProperty(t, n) {
    const o = F(t, n), s = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && Ie(t, "delete", n, void 0, s), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Le(n) || !Zs.has(n)) && Z(t, "has", n), o;
  }
  ownKeys(t) {
    return Z(
      t,
      "iterate",
      S(t) ? "length" : pt
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
const Vr = /* @__PURE__ */ new ei(), Sr = /* @__PURE__ */ new ti(), Cr = /* @__PURE__ */ new ei(!0), Tr = /* @__PURE__ */ new ti(!0), co = (e) => e, fn = (e) => Reflect.getPrototypeOf(e);
function Mr(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, i = /* @__PURE__ */ P(s), r = at(i), l = e === "entries" || e === Symbol.iterator && r, f = e === "keys" && r, p = s[e](...o), d = n ? co : t ? St : Ye;
    return !t && Z(
      i,
      "iterate",
      f ? lo : pt
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
function un(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      xe(
        `${_t(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ P(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ar(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, r = /* @__PURE__ */ P(i), l = /* @__PURE__ */ P(s);
      e || (dt(s, l) && Z(r, "get", s), Z(r, "get", l));
      const { has: f } = fn(r), p = t ? co : e ? St : Ye;
      if (f.call(r, s))
        return p(i.get(s));
      if (f.call(r, l))
        return p(i.get(l));
      i !== r && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Z(/* @__PURE__ */ P(s), "iterate", pt), s.size;
    },
    has(s) {
      const i = this.__v_raw, r = /* @__PURE__ */ P(i), l = /* @__PURE__ */ P(s);
      return e || (dt(s, l) && Z(r, "has", s), Z(r, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const r = this, l = r.__v_raw, f = /* @__PURE__ */ P(l), p = t ? co : e ? St : Ye;
      return !e && Z(f, "iterate", pt), l.forEach((d, a) => s.call(i, p(d), p(a), r));
    }
  };
  return X(
    n,
    e ? {
      add: un("add"),
      set: un("set"),
      delete: un("delete"),
      clear: un("clear")
    } : {
      add(s) {
        !t && !/* @__PURE__ */ me(s) && !/* @__PURE__ */ He(s) && (s = /* @__PURE__ */ P(s));
        const i = /* @__PURE__ */ P(this);
        return fn(i).has.call(i, s) || (i.add(s), Ie(i, "add", s, s)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ me(i) && !/* @__PURE__ */ He(i) && (i = /* @__PURE__ */ P(i));
        const r = /* @__PURE__ */ P(this), { has: l, get: f } = fn(r);
        let p = l.call(r, s);
        p ? process.env.NODE_ENV !== "production" && Zo(r, l, s) : (s = /* @__PURE__ */ P(s), p = l.call(r, s));
        const d = f.call(r, s);
        return r.set(s, i), p ? dt(i, d) && Ie(r, "set", s, i, d) : Ie(r, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ P(this), { has: r, get: l } = fn(i);
        let f = r.call(i, s);
        f ? process.env.NODE_ENV !== "production" && Zo(i, r, s) : (s = /* @__PURE__ */ P(s), f = r.call(i, s));
        const p = l ? l.call(i, s) : void 0, d = i.delete(s);
        return f && Ie(i, "delete", s, void 0, p), d;
      },
      clear() {
        const s = /* @__PURE__ */ P(this), i = s.size !== 0, r = process.env.NODE_ENV !== "production" ? at(s) ? new Map(s) : new Set(s) : void 0, l = s.clear();
        return i && Ie(
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
function Rn(e, t) {
  const n = Ar(e, t);
  return (o, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    F(n, s) && s in o ? n : o,
    s,
    i
  );
}
const $r = {
  get: /* @__PURE__ */ Rn(!1, !1)
}, Pr = {
  get: /* @__PURE__ */ Rn(!1, !0)
}, Ir = {
  get: /* @__PURE__ */ Rn(!0, !1)
}, Rr = {
  get: /* @__PURE__ */ Rn(!0, !0)
};
function Zo(e, t, n) {
  const o = /* @__PURE__ */ P(n);
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
  return /* @__PURE__ */ He(e) ? e : kn(
    e,
    !1,
    Vr,
    $r,
    ni
  );
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  return kn(
    e,
    !1,
    Cr,
    Pr,
    oi
  );
}
// @__NO_SIDE_EFFECTS__
function fo(e) {
  return kn(
    e,
    !0,
    Sr,
    Ir,
    si
  );
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return kn(
    e,
    !0,
    Tr,
    Rr,
    ii
  );
}
function kn(e, t, n, o, s) {
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
  return /* @__PURE__ */ He(e) ? /* @__PURE__ */ ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Nn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ P(t) : e;
}
function Lr(e) {
  return !F(e, "__v_skip") && Object.isExtensible(e) && yn(e, "__v_skip", !0), e;
}
const Ye = (e) => j(e) ? /* @__PURE__ */ To(e) : e, St = (e) => j(e) ? /* @__PURE__ */ fo(e) : e;
// @__NO_SIDE_EFFECTS__
function ee(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Hr(e) {
  return /* @__PURE__ */ ee(e) ? e.value : e;
}
const Br = {
  get: (e, t, n) => t === "__v_raw" ? e : Hr(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return /* @__PURE__ */ ee(s) && !/* @__PURE__ */ ee(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ri(e) {
  return /* @__PURE__ */ ot(e) ? e : new Proxy(e, Br);
}
class Ur {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new zs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    B !== this)
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
  A(e) ? o = e : (o = e.get, s = e.set);
  const i = new Ur(o, s, n);
  return process.env.NODE_ENV, i;
}
const an = {}, On = /* @__PURE__ */ new WeakMap();
let ft;
function Wr(e, t = !1, n = ft) {
  if (n) {
    let o = On.get(n);
    o || On.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && xe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function qr(e, t, n = U) {
  const { immediate: o, deep: s, once: i, scheduler: r, augmentJob: l, call: f } = n, p = (T) => {
    (n.onWarn || xe)(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (T) => s ? T : /* @__PURE__ */ me(T) || s === !1 || s === 0 ? Ge(T, 1) : Ge(T);
  let a, g, O, C, x = !1, Y = !1;
  if (/* @__PURE__ */ ee(e) ? (g = () => e.value, x = /* @__PURE__ */ me(e)) : /* @__PURE__ */ ot(e) ? (g = () => d(e), x = !0) : S(e) ? (Y = !0, x = e.some((T) => /* @__PURE__ */ ot(T) || /* @__PURE__ */ me(T)), g = () => e.map((T) => {
    if (/* @__PURE__ */ ee(T))
      return T.value;
    if (/* @__PURE__ */ ot(T))
      return d(T);
    if (A(T))
      return f ? f(T, 2) : T();
    process.env.NODE_ENV !== "production" && p(T);
  })) : A(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (O) {
      Ve();
      try {
        O();
      } finally {
        Se();
      }
    }
    const T = ft;
    ft = a;
    try {
      return f ? f(e, 3, [C]) : e(C);
    } finally {
      ft = T;
    }
  } : (g = Q, process.env.NODE_ENV !== "production" && p(e)), t && s) {
    const T = g, te = s === !0 ? 1 / 0 : s;
    g = () => Ge(T(), te);
  }
  const q = br(), H = () => {
    a.stop(), q && q.active && No(q.effects, a);
  };
  if (i && t) {
    const T = t;
    t = (...te) => {
      T(...te), H();
    };
  }
  let L = Y ? new Array(e.length).fill(an) : an;
  const ve = (T) => {
    if (!(!(a.flags & 1) || !a.dirty && !T))
      if (t) {
        const te = a.run();
        if (s || x || (Y ? te.some((ye, ie) => dt(ye, L[ie])) : dt(te, L))) {
          O && O();
          const ye = ft;
          ft = a;
          try {
            const ie = [
              te,
              // pass undefined as the old value when it's changed for the first time
              L === an ? void 0 : Y && L[0] === an ? [] : L,
              C
            ];
            L = te, f ? f(t, 3, ie) : (
              // @ts-expect-error
              t(...ie)
            );
          } finally {
            ft = ye;
          }
        }
      } else
        a.run();
  };
  return l && l(ve), a = new Us(g), a.scheduler = r ? () => r(ve, !1) : ve, C = (T) => Wr(T, !1, a), O = a.onStop = () => {
    const T = On.get(a);
    if (T) {
      if (f)
        f(T, 4);
      else
        for (const te of T) te();
      On.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? ve(!0) : L = a.run() : r ? r(ve.bind(null, !0), !0) : a.run(), H.pause = a.pause.bind(a), H.resume = a.resume.bind(a), H.stop = H, H;
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !j(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ee(e))
    Ge(e.value, t, n);
  else if (S(e))
    for (let o = 0; o < e.length; o++)
      Ge(e[o], t, n);
  else if ($n(e) || at(e))
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
const ht = [];
function dn(e) {
  ht.push(e);
}
function pn() {
  ht.pop();
}
let zn = !1;
function y(e, ...t) {
  if (zn) return;
  zn = !0, Ve();
  const n = ht.length ? ht[ht.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Jr();
  if (o)
    Ct(
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
          ({ vnode: i }) => `at <${rn(n, i.type)}>`
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
  Se(), zn = !1;
}
function Jr() {
  let e = ht[ht.length - 1];
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${rn(
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
  return G(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ ee(t) ? (t = li(e, /* @__PURE__ */ P(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ P(t), n ? t : [`${e}=`, t]);
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
function Ct(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    tn(s, t, n);
  }
}
function Be(e, t, n, o) {
  if (A(e)) {
    const s = Ct(e, t, n, o);
    return s && Oo(s) && s.catch((i) => {
      tn(i, t, n);
    }), s;
  }
  if (S(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Be(e[i], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function tn(e, t, n, o = !0) {
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
      Ve(), Ct(i, null, 10, [
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
    if (n && dn(n), y(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && pn(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const fe = [];
let Pe = -1;
const xt = [];
let nt = null, Ot = 0;
const ci = /* @__PURE__ */ Promise.resolve();
let wn = null;
const Zr = 100;
function fi(e) {
  const t = wn || ci;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qr(e) {
  let t = Pe + 1, n = fe.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = fe[o], i = Gt(s);
    i < e || i === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Fn(e) {
  if (!(e.flags & 1)) {
    const t = Gt(e), n = fe[fe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Gt(n) ? fe.push(e) : fe.splice(Qr(t), 0, e), e.flags |= 1, ui();
  }
}
function ui() {
  wn || (wn = ci.then(pi));
}
function ai(e) {
  S(e) ? xt.push(...e) : nt && e.id === -1 ? nt.splice(Ot + 1, 0, e) : e.flags & 1 || (xt.push(e), e.flags |= 1), ui();
}
function Qo(e, t, n = Pe + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < fe.length; n++) {
    const o = fe[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && Ao(t, o))
        continue;
      fe.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function di(e) {
  if (xt.length) {
    const t = [...new Set(xt)].sort(
      (n, o) => Gt(n) - Gt(o)
    );
    if (xt.length = 0, nt) {
      nt.push(...t);
      return;
    }
    for (nt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ot = 0; Ot < nt.length; Ot++) {
      const n = nt[Ot];
      process.env.NODE_ENV !== "production" && Ao(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    nt = null, Ot = 0;
  }
}
const Gt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pi(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Ao(e, n) : Q;
  try {
    for (Pe = 0; Pe < fe.length; Pe++) {
      const n = fe[Pe];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ct(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Pe < fe.length; Pe++) {
      const n = fe[Pe];
      n && (n.flags &= -2);
    }
    Pe = -1, fe.length = 0, di(e), wn = null, (fe.length || xt.length) && pi(e);
  }
}
function Ao(e, t) {
  const n = e.get(t) || 0;
  if (n > Zr) {
    const o = t.i, s = o && Bo(o.type);
    return tn(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let ke = !1;
const hn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Qt().__VUE_HMR_RUNTIME__ = {
  createRecord: Xn(hi),
  rerender: Xn(nl),
  reload: Xn(ol)
});
const mt = /* @__PURE__ */ new Map();
function el(e) {
  const t = e.type.__hmrId;
  let n = mt.get(t);
  n || (hi(t, e.type), n = mt.get(t)), n.instances.add(e);
}
function tl(e) {
  mt.get(e.type.__hmrId).instances.delete(e);
}
function hi(e, t) {
  return mt.has(e) ? !1 : (mt.set(e, {
    initialDef: Dn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Dn(e) {
  return Yi(e) ? e.__vccOpts : e;
}
function nl(e, t) {
  const n = mt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Dn(o.type).render = t), o.renderCache = [], ke = !0, o.job.flags & 8 || o.update(), ke = !1;
  }));
}
function ol(e, t) {
  const n = mt.get(e);
  if (!n) return;
  t = Dn(t), es(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const i = o[s], r = Dn(i.type);
    let l = hn.get(r);
    l || (r !== n.initialDef && es(r, t), hn.set(r, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? Fn(() => {
      i.job.flags & 8 || (ke = !0, i.parent.update(), ke = !1, l.delete(i));
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  ai(() => {
    hn.clear();
  });
}
function es(e, t) {
  X(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Xn(e) {
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
let we, kt = [], uo = !1;
function nn(e, ...t) {
  we ? we.emit(e, ...t) : uo || kt.push({ event: e, args: t });
}
function $o(e, t) {
  var n, o;
  we = e, we ? (we.enabled = !0, kt.forEach(({ event: s, args: i }) => we.emit(s, ...i)), kt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    $o(i, t);
  }), setTimeout(() => {
    we || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, uo = !0, kt = []);
  }, 3e3)) : (uo = !0, kt = []);
}
function sl(e, t) {
  nn("app:init", e, t, {
    Fragment: se,
    Text: on,
    Comment: be,
    Static: mn
  });
}
function il(e) {
  nn("app:unmount", e);
}
const rl = /* @__PURE__ */ Po(
  "component:added"
  /* COMPONENT_ADDED */
), gi = /* @__PURE__ */ Po(
  "component:updated"
  /* COMPONENT_UPDATED */
), ll = /* @__PURE__ */ Po(
  "component:removed"
  /* COMPONENT_REMOVED */
), cl = (e) => {
  we && typeof we.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !we.cleanupBuffer(e) && ll(e);
};
// @__NO_SIDE_EFFECTS__
function Po(e) {
  return (t) => {
    nn(
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
    nn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function al(e, t, n) {
  nn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let re = null, mi = null;
function xn(e) {
  const t = re;
  return re = e, mi = e && e.type.__scopeId || null, t;
}
function dl(e, t = re, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && _s(-1);
    const i = xn(t);
    let r;
    try {
      r = e(...s);
    } finally {
      xn(i), o._d && _s(1);
    }
    return process.env.NODE_ENV !== "production" && gi(t), r;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function vi(e) {
  nr(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function pl(e, t) {
  if (re === null)
    return process.env.NODE_ENV !== "production" && y("withDirectives can only be used inside render functions."), e;
  const n = Bn(re), o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, r, l, f = U] = t[s];
    i && (A(i) && (i = {
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
    f && (Ve(), Be(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Se());
  }
}
function hl(e, t) {
  if (process.env.NODE_ENV !== "production" && (!z || z.isMounted) && y("provide() can only be used inside setup()."), z) {
    let n = z.provides;
    const o = z.parent && z.parent.provides;
    o === n && (n = z.provides = Object.create(o)), n[e] = t;
  }
}
function gn(e, t, n = !1) {
  const o = qi();
  if (o || Vt) {
    let s = Vt ? Vt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const gl = /* @__PURE__ */ Symbol.for("v-scx"), _l = () => {
  {
    const e = gn(gl);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Zn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !A(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ei(e, t, n);
}
function Ei(e, t, n = U) {
  const { immediate: o, deep: s, flush: i, once: r } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = X({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = y);
  const f = t && o || !t && i !== "post";
  let p;
  if (zt) {
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
  l.call = (O, C, x) => Be(O, d, C, x);
  let a = !1;
  i === "post" ? l.scheduler = (O) => {
    ge(O, d && d.suspense);
  } : i !== "sync" && (a = !0, l.scheduler = (O, C) => {
    C ? O() : Fn(O);
  }), l.augmentJob = (O) => {
    t && (O.flags |= 4), a && (O.flags |= 2, d && (O.id = d.uid, O.i = d));
  };
  const g = qr(e, t, l);
  return zt && (p ? p.push(g) : f && g()), g;
}
function ml(e, t, n) {
  const o = this.proxy, s = G(e) ? e.includes(".") ? bi(o, e) : () => o[e] : e.bind(o, o);
  let i;
  A(t) ? i = t : (i = t.handler, n = t);
  const r = sn(this), l = Ei(s, i.bind(o), n);
  return r(), l;
}
function bi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const vl = /* @__PURE__ */ Symbol("_vte"), El = (e) => e.__isTeleport, bl = /* @__PURE__ */ Symbol("_leaveCb");
function Io(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Io(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function yi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ts = /* @__PURE__ */ new WeakSet();
function ns(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Vn = /* @__PURE__ */ new WeakMap();
function Ut(e, t, n, o, s = !1) {
  if (S(e)) {
    e.forEach(
      (x, Y) => Ut(
        x,
        t && (S(t) ? t[Y] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (Kt(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Ut(e, t, n, o.component.subTree);
    return;
  }
  const i = o.shapeFlag & 4 ? Bn(o.component) : o.el, r = s ? null : i, { i: l, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, d = l.refs === U ? l.refs = {} : l.refs, a = l.setupState, g = /* @__PURE__ */ P(a), O = a === U ? Rs : (x) => process.env.NODE_ENV !== "production" && (F(g, x) && !/* @__PURE__ */ ee(g[x]) && y(
    `Template ref "${x}" used on a non-ref value. It will not work in the production build.`
  ), ts.has(g[x])) || ns(d, x) ? !1 : F(g, x), C = (x, Y) => !(process.env.NODE_ENV !== "production" && ts.has(x) || Y && ns(d, Y));
  if (p != null && p !== f) {
    if (os(t), G(p))
      d[p] = null, O(p) && (a[p] = null);
    else if (/* @__PURE__ */ ee(p)) {
      const x = t;
      C(p, x.k) && (p.value = null), x.k && (d[x.k] = null);
    }
  }
  if (A(f))
    Ct(f, l, 12, [r, d]);
  else {
    const x = G(f), Y = /* @__PURE__ */ ee(f);
    if (x || Y) {
      const q = () => {
        if (e.f) {
          const H = x ? O(f) ? a[f] : d[f] : C(f) || !e.k ? f.value : d[e.k];
          if (s)
            S(H) && No(H, i);
          else if (S(H))
            H.includes(i) || H.push(i);
          else if (x)
            d[f] = [i], O(f) && (a[f] = d[f]);
          else {
            const L = [i];
            C(f, e.k) && (f.value = L), e.k && (d[e.k] = L);
          }
        } else x ? (d[f] = r, O(f) && (a[f] = r)) : Y ? (C(f, e.k) && (f.value = r), e.k && (d[e.k] = r)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (r) {
        const H = () => {
          q(), Vn.delete(e);
        };
        H.id = -1, Vn.set(e, H), ge(H, n);
      } else
        os(e), q();
    } else process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function os(e) {
  const t = Vn.get(e);
  t && (t.flags |= 8, Vn.delete(e));
}
Qt().requestIdleCallback;
Qt().cancelIdleCallback;
const Kt = (e) => !!e.type.__asyncLoader, Ro = (e) => e.type.__isKeepAlive;
function yl(e, t) {
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
  if (jn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Ro(s.parent.vnode) && Ol(o, t, n, s), s = s.parent;
  }
}
function Ol(e, t, n, o) {
  const s = jn(
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
function jn(e, t, n = z, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      Ve();
      const l = sn(n), f = Be(t, n, e, r);
      return l(), Se(), f;
    });
    return o ? s.unshift(i) : s.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const s = ct(Mo[e].replace(/ hook$/, ""));
    y(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Xe = (e) => (t, n = z) => {
  (!zt || e === "sp") && jn(e, (...o) => t(...o), n);
}, wl = Xe("bm"), Dl = Xe("m"), xl = Xe(
  "bu"
), Vl = Xe("u"), Sl = Xe(
  "bum"
), Oi = Xe("um"), Cl = Xe(
  "sp"
), Tl = Xe("rtg"), Ml = Xe("rtc");
function Al(e, t = z) {
  jn("ec", e, t);
}
const $l = "components";
function Pl(e, t) {
  return Rl($l, e, !0, t) || e;
}
const Il = /* @__PURE__ */ Symbol.for("v-ndc");
function Rl(e, t, n = !0, o = !1) {
  const s = re || z;
  if (s) {
    const i = s.type;
    {
      const l = Bo(
        i,
        !1
      );
      if (l && (l === t || l === ue(t) || l === _t(ue(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      ss(s[e] || i[e], t) || // global registration
      ss(s.appContext[e], t)
    );
    return !r && o ? i : (process.env.NODE_ENV !== "production" && n && !r && y(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), r);
  } else process.env.NODE_ENV !== "production" && y(
    `resolve${_t(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function ss(e, t) {
  return e && (e[t] || e[ue(t)] || e[_t(ue(t))]);
}
function Qn(e, t, n, o) {
  let s;
  const i = n, r = S(e);
  if (r || G(e)) {
    const l = r && /* @__PURE__ */ ot(e);
    let f = !1, p = !1;
    l && (f = !/* @__PURE__ */ me(e), p = /* @__PURE__ */ He(e), e = In(e)), s = new Array(e.length);
    for (let d = 0, a = e.length; d < a; d++)
      s[d] = t(
        f ? p ? St(Ye(e[d])) : Ye(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && y(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
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
const ao = (e) => e ? Ji(e) ? Bn(e) : ao(e.parent) : null, gt = (
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
    $parent: (e) => ao(e.parent),
    $root: (e) => ao(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fi.bind(e.proxy)),
    $watch: (e) => ml.bind(e)
  })
), ko = (e) => e === "_" || e === "$", eo = (e, t) => e !== U && !e.__isScriptSetup && F(e, t), wi = {
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
        if (eo(o, t))
          return r[t] = 1, o[t];
        if (s !== U && F(s, t))
          return r[t] = 2, s[t];
        if (F(i, t))
          return r[t] = 3, i[t];
        if (n !== U && F(n, t))
          return r[t] = 4, n[t];
        po && (r[t] = 0);
      }
    }
    const p = gt[t];
    let d, a;
    if (p)
      return t === "$attrs" ? (Z(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Cn()) : process.env.NODE_ENV !== "production" && t === "$slots" && Z(e, "get", t), p(e);
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
    process.env.NODE_ENV !== "production" && re && (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== U && ko(t[0]) && F(s, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === re && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: i } = e;
    return eo(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && F(s, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== U && F(o, t) ? (o[t] = n, !0) : F(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
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
    return !!(n[l] || e !== U && l[0] !== "$" && F(e, l) || eo(t, l) || F(i, l) || F(o, l) || F(gt, l) || F(s.config.globalProperties, l) || (f = r.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : F(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (wi.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function kl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(gt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => gt[n](e),
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
  Object.keys(/* @__PURE__ */ P(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (ko(o[0])) {
        y(
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
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let po = !0;
function Hl(e) {
  const t = xi(e), n = e.proxy, o = e.ctx;
  po = !1, t.beforeCreate && rs(t.beforeCreate, e, "bc");
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
    updated: C,
    activated: x,
    deactivated: Y,
    beforeDestroy: q,
    beforeUnmount: H,
    destroyed: L,
    unmounted: ve,
    render: T,
    renderTracked: te,
    renderTriggered: ye,
    errorCaptured: ie,
    serverPrefetch: ae,
    // public API
    expose: Ue,
    inheritAttrs: Ze,
    // assets
    components: Ne,
    directives: ln,
    filters: Uo
  } = t, Qe = process.env.NODE_ENV !== "production" ? Ll() : null;
  if (process.env.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const I in R)
        Qe("Props", I);
  }
  if (p && Bl(p, o, Qe), r)
    for (const R in r) {
      const I = r[R];
      A(I) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: I.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = I.bind(n), process.env.NODE_ENV !== "production" && Qe("Methods", R)) : process.env.NODE_ENV !== "production" && y(
        `Method "${R}" has type "${typeof I}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !A(s) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && Oo(R) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !j(R))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = /* @__PURE__ */ To(R), process.env.NODE_ENV !== "production")
      for (const I in R)
        Qe("Data", I), ko(I[0]) || Object.defineProperty(o, I, {
          configurable: !0,
          enumerable: !0,
          get: () => R[I],
          set: Q
        });
  }
  if (po = !0, i)
    for (const R in i) {
      const I = i[R], Ce = A(I) ? I.bind(n, n) : A(I.get) ? I.get.bind(n, n) : Q;
      process.env.NODE_ENV !== "production" && Ce === Q && y(`Computed property "${R}" has no getter.`);
      const Un = !A(I) && A(I.set) ? I.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : Q, Tt = Rc({
        get: Ce,
        set: Un
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (vt) => Tt.value = vt
      }), process.env.NODE_ENV !== "production" && Qe("Computed", R);
    }
  if (l)
    for (const R in l)
      Di(l[R], o, n, R);
  if (f) {
    const R = A(f) ? f.call(n) : f;
    Reflect.ownKeys(R).forEach((I) => {
      hl(I, R[I]);
    });
  }
  d && rs(d, e, "c");
  function de(R, I) {
    S(I) ? I.forEach((Ce) => R(Ce.bind(n))) : I && R(I.bind(n));
  }
  if (de(wl, a), de(Dl, g), de(xl, O), de(Vl, C), de(yl, x), de(Nl, Y), de(Al, ie), de(Ml, te), de(Tl, ye), de(Sl, H), de(Oi, ve), de(Cl, ae), S(Ue))
    if (Ue.length) {
      const R = e.exposed || (e.exposed = {});
      Ue.forEach((I) => {
        Object.defineProperty(R, I, {
          get: () => n[I],
          set: (Ce) => n[I] = Ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === Q && (e.render = T), Ze != null && (e.inheritAttrs = Ze), Ne && (e.components = Ne), ln && (e.directives = ln), ae && yi(e);
}
function Bl(e, t, n = Q) {
  S(e) && (e = ho(e));
  for (const o in e) {
    const s = e[o];
    let i;
    j(s) ? "default" in s ? i = gn(
      s.from || o,
      s.default,
      !0
    ) : i = gn(s.from || o) : i = gn(s), /* @__PURE__ */ ee(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[o] = i, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function rs(e, t, n) {
  Be(
    S(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Di(e, t, n, o) {
  let s = o.includes(".") ? bi(n, o) : () => n[o];
  if (G(e)) {
    const i = t[e];
    A(i) ? Zn(s, i) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, i);
  } else if (A(e))
    Zn(s, e.bind(n));
  else if (j(e))
    if (S(e))
      e.forEach((i) => Di(i, t, n, o));
    else {
      const i = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(i) ? Zn(s, i, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function xi(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !s.length && !n && !o ? f = t : (f = {}, s.length && s.forEach(
    (p) => Sn(f, p, r, !0)
  ), Sn(f, t, r)), j(t) && i.set(t, f), f;
}
function Sn(e, t, n, o = !1) {
  const { mixins: s, extends: i } = t;
  i && Sn(e, i, n, !0), s && s.forEach(
    (r) => Sn(e, r, n, !0)
  );
  for (const r in t)
    if (o && r === "expose")
      process.env.NODE_ENV !== "production" && y(
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
  methods: Ft,
  computed: Ft,
  // lifecycle
  beforeCreate: ce,
  created: ce,
  beforeMount: ce,
  mounted: ce,
  beforeUpdate: ce,
  updated: ce,
  beforeDestroy: ce,
  beforeUnmount: ce,
  destroyed: ce,
  unmounted: ce,
  activated: ce,
  deactivated: ce,
  errorCaptured: ce,
  serverPrefetch: ce,
  // assets
  components: Ft,
  directives: Ft,
  // watch
  watch: Wl,
  // provide / inject
  provide: ls,
  inject: Kl
};
function ls(e, t) {
  return t ? e ? function() {
    return X(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Kl(e, t) {
  return Ft(ho(e), ho(t));
}
function ho(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ft(e, t) {
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
    n[o] = ce(e[o], t[o]);
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
    A(o) || (o = X({}, o)), s != null && !j(s) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), s = null);
    const i = Vi(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const p = i.app = {
      _uid: ql++,
      _component: o,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: bs,
      get config() {
        return i.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...a) {
        return r.has(d) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : d && A(d.install) ? (r.add(d), d.install(p, ...a)) : A(d) ? (r.add(d), d(p, ...a)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(d) {
        return i.mixins.includes(d) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), p;
      },
      component(d, a) {
        return process.env.NODE_ENV !== "production" && bo(d, i.config), a ? (process.env.NODE_ENV !== "production" && i.components[d] && y(`Component "${d}" has already been registered in target app.`), i.components[d] = a, p) : i.components[d];
      },
      directive(d, a) {
        return process.env.NODE_ENV !== "production" && vi(d), a ? (process.env.NODE_ENV !== "production" && i.directives[d] && y(`Directive "${d}" has already been registered in target app.`), i.directives[d] = a, p) : i.directives[d];
      },
      mount(d, a, g) {
        if (f)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && d.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const O = p._ceVNode || Fe(o, s);
          return O.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (i.reload = () => {
            const C = it(O);
            C.el = null, e(C, d, g);
          }), e(O, d, g), f = !0, p._container = d, d.__vue_app__ = p, process.env.NODE_ENV !== "production" && (p._instance = O.component, sl(p, bs)), Bn(O.component);
        }
      },
      onUnmount(d) {
        process.env.NODE_ENV !== "production" && typeof d != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        f ? (Be(
          l,
          p._instance,
          16
        ), e(null, p._container), process.env.NODE_ENV !== "production" && (p._instance = null, il(p)), delete p._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(d, a) {
        return process.env.NODE_ENV !== "production" && d in i.provides && (F(i.provides, d) ? y(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : y(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[d] = a, p;
      },
      runWithContext(d) {
        const a = Vt;
        Vt = p;
        try {
          return d();
        } finally {
          Vt = a;
        }
      }
    };
    return p;
  };
}
let Vt = null;
const Gl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ue(t)}Modifiers`] || e[`${st(t)}Modifiers`];
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
        (!a || !(ct(ue(t)) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ct(ue(t))}" prop.`
        );
      else {
        const g = d[t];
        A(g) && (g(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const i = t.startsWith("update:"), r = i && Gl(o, t.slice(7));
  if (r && (r.trim && (s = n.map((d) => G(d) ? d.trim() : d)), r.number && (s = n.map(js))), process.env.NODE_ENV !== "production" && al(e, t, s), process.env.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[ct(d)] && y(
      `Event "${d}" is emitted in component ${rn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${st(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = o[l = ct(t)] || // also try camelCase event handler (#2249)
  o[l = ct(ue(t))];
  !f && i && (f = o[l = ct(st(t))]), f && Be(
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
    e.emitted[l] = !0, Be(
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
  if (!A(e)) {
    const f = (p) => {
      const d = Si(p, t, !0);
      d && (l = !0, X(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (j(e) && o.set(e, null), null) : (S(i) ? i.forEach((f) => r[f] = null) : X(r, i), j(e) && o.set(e, r), r);
}
function Ln(e, t) {
  return !e || !Xt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), F(e, t[0].toLowerCase() + t.slice(1)) || F(e, st(t)) || F(e, t));
}
let go = !1;
function Cn() {
  go = !0;
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
    ctx: C,
    inheritAttrs: x
  } = e, Y = xn(e);
  let q, H;
  process.env.NODE_ENV !== "production" && (go = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = s || o, te = process.env.NODE_ENV !== "production" && O.__isScriptSetup ? new Proxy(T, {
        get(ye, ie, ae) {
          return y(
            `Property '${String(
              ie
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ye, ie, ae);
        }
      }) : T;
      q = Oe(
        p.call(
          te,
          T,
          d,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(a) : a,
          O,
          g,
          C
        )
      ), H = l;
    } else {
      const T = t;
      process.env.NODE_ENV !== "production" && l === a && Cn(), q = Oe(
        T.length > 1 ? T(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Cn(), /* @__PURE__ */ Re(l);
            },
            slots: r,
            emit: f
          } : { attrs: l, slots: r, emit: f }
        ) : T(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(a) : a,
          null
        )
      ), H = t.props ? l : Xl(l);
    }
  } catch (T) {
    Wt.length = 0, tn(T, e, 1), q = Fe(be);
  }
  let L = q, ve;
  if (process.env.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([L, ve] = Ci(q)), H && x !== !1) {
    const T = Object.keys(H), { shapeFlag: te } = L;
    if (T.length) {
      if (te & 7)
        i && T.some(bn) && (H = Zl(
          H,
          i
        )), L = it(L, H, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !go && L.type !== be) {
        const ye = Object.keys(l), ie = [], ae = [];
        for (let Ue = 0, Ze = ye.length; Ue < Ze; Ue++) {
          const Ne = ye[Ue];
          Xt(Ne) ? bn(Ne) || ie.push(Ne[2].toLowerCase() + Ne.slice(3)) : ae.push(Ne);
        }
        ae.length && y(
          `Extraneous non-props attributes (${ae.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ie.length && y(
          `Extraneous non-emits event listeners (${ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !us(L) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = it(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !us(L) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Io(L, n.transition)), process.env.NODE_ENV !== "production" && ve ? ve(L) : q = L, xn(Y), q;
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
    if (Hn(s)) {
      if (s.type !== be || s.children === "v-if") {
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
    (n === "class" || n === "style" || Xt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Zl = (e, t) => {
  const n = {};
  for (const o in e)
    (!bn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, us = (e) => e.shapeFlag & 7 || e.type === be;
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
        if (Ti(r, o, g) && !Ln(p, g))
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
    if (Ti(t, e, i) && !Ln(n, i))
      return !0;
  }
  return !1;
}
function Ti(e, t, n) {
  const o = e[n], s = t[n];
  return n === "style" && j(o) && j(s) ? !en(o, s) : o !== s;
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
const Mi = {}, Ai = () => Object.create(Mi), $i = (e) => Object.getPrototypeOf(e) === Mi;
function tc(e, t, n, o = !1) {
  const s = {}, i = Ai();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Pi(e, t, s, i);
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
  } = e, l = /* @__PURE__ */ P(s), [f] = e.propsOptions;
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
        if (Ln(e.emitsOptions, g))
          continue;
        const O = t[g];
        if (f)
          if (F(i, g))
            O !== i[g] && (i[g] = O, p = !0);
          else {
            const C = ue(g);
            s[C] = _o(
              f,
              l,
              C,
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
    Pi(e, t, s, i) && (p = !0);
    let d;
    for (const a in l)
      (!t || // for camelCase
      !F(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = st(a)) === a || !F(t, d))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[a] = _o(
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
  p && Ie(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Ri(t || {}, s, e);
}
function Pi(e, t, n, o) {
  const [s, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let f in t) {
      if (Lt(f))
        continue;
      const p = t[f];
      let d;
      s && F(s, d = ue(f)) ? !i || !i.includes(d) ? n[d] = p : (l || (l = {}))[d] = p : Ln(e.emitsOptions, f) || (!(f in o) || p !== o[f]) && (o[f] = p, r = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ P(n), p = l || U;
    for (let d = 0; d < i.length; d++) {
      const a = i[d];
      n[a] = _o(
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
function _o(e, t, n, o, s, i) {
  const r = e[n];
  if (r != null) {
    const l = F(r, "default");
    if (l && o === void 0) {
      const f = r.default;
      if (r.type !== Function && !r.skipFactory && A(f)) {
        const { propsDefaults: p } = s;
        if (n in p)
          o = p[n];
        else {
          const d = sn(s);
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
function Ii(e, t, n = !1) {
  const o = n ? sc : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const i = e.props, r = {}, l = [];
  let f = !1;
  if (!A(e)) {
    const d = (a) => {
      f = !0;
      const [g, O] = Ii(a, t, !0);
      X(r, g), O && l.push(...O);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !f)
    return j(e) && o.set(e, Dt), Dt;
  if (S(i))
    for (let d = 0; d < i.length; d++) {
      process.env.NODE_ENV !== "production" && !G(i[d]) && y("props must be strings when using array syntax.", i[d]);
      const a = ue(i[d]);
      ds(a) && (r[a] = U);
    }
  else if (i) {
    process.env.NODE_ENV !== "production" && !j(i) && y("invalid props options", i);
    for (const d in i) {
      const a = ue(d);
      if (ds(a)) {
        const g = i[d], O = r[a] = S(g) || A(g) ? { type: g } : X({}, g), C = O.type;
        let x = !1, Y = !0;
        if (S(C))
          for (let q = 0; q < C.length; ++q) {
            const H = C[q], L = A(H) && H.name;
            if (L === "Boolean") {
              x = !0;
              break;
            } else L === "String" && (Y = !1);
          }
        else
          x = A(C) && C.name === "Boolean";
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
  return e[0] !== "$" && !Lt(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ic(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ri(e, t, n) {
  const o = /* @__PURE__ */ P(t), s = n.propsOptions[0], i = Object.keys(e).map((r) => ue(r));
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
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (i != null && i !== !0 && !f) {
      let p = !1;
      const d = S(i) ? i : [i], a = [];
      for (let g = 0; g < d.length && !p; g++) {
        const { valid: O, expectedType: C } = cc(t, d[g]);
        a.push(C || ""), p = O;
      }
      if (!p) {
        y(fc(e, t, a));
        return;
      }
    }
    l && !l(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
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
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(_t).join(" | ")}`;
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
  const o = dl((...s) => (process.env.NODE_ENV !== "production" && z && !(n === null && re) && !(n && n.root !== z.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Lo(t(...s))), n);
  return o._c = !1, o;
}, ki = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (jo(s)) continue;
    const i = e[s];
    if (A(i))
      t[s] = ac(s, i, o);
    else if (i != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const r = Lo(i);
      t[s] = () => r;
    }
  }
}, Fi = (e, t) => {
  process.env.NODE_ENV !== "production" && !Ro(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Lo(t);
  e.slots.default = () => n;
}, mo = (e, t, n) => {
  for (const o in t)
    (n || !jo(o)) && (e[o] = t[o]);
}, dc = (e, t, n) => {
  const o = e.slots = Ai();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (mo(o, t, n), n && yn(o, "_", s, !0)) : ki(t, o);
  } else t && Fi(e, t);
}, pc = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let i = !0, r = U;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && ke ? (mo(s, t, n), Ie(e, "set", "$slots")) : n && l === 1 ? i = !1 : mo(s, t, n) : (i = !t.$stable, ki(t, s)), r = t;
  } else t && (Fi(e, t), r = { default: 1 });
  if (i)
    for (const l in s)
      !jo(l) && r[l] == null && delete s[l];
};
let It, qe;
function bt(e, t) {
  e.appContext.config.performance && Tn() && qe.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && fl(e, t, Tn() ? qe.now() : Date.now());
}
function yt(e, t) {
  if (e.appContext.config.performance && Tn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", s = `<${rn(e, e.type)}> ${t}`;
    qe.mark(o), qe.measure(s, n, o), qe.clearMeasures(s), qe.clearMarks(n), qe.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && ul(e, t, Tn() ? qe.now() : Date.now());
}
function Tn() {
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
const ge = Ec;
function gc(e) {
  return _c(e);
}
function _c(e, t) {
  hc();
  const n = Qt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && $o(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    insertStaticContent: C
  } = e, x = (c, u, h, E = null, _ = null, m = null, w = void 0, N = null, b = process.env.NODE_ENV !== "production" && ke ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Rt(c, u) && (E = cn(c), et(c, _, m, !0), c = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: v, ref: M, shapeFlag: D } = u;
    switch (v) {
      case on:
        Y(c, u, h, E);
        break;
      case be:
        q(c, u, h, E);
        break;
      case mn:
        c == null ? H(u, h, E, w) : process.env.NODE_ENV !== "production" && L(c, u, h, w);
        break;
      case se:
        ln(
          c,
          u,
          h,
          E,
          _,
          m,
          w,
          N,
          b
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
          b
        ) : D & 6 ? Uo(
          c,
          u,
          h,
          E,
          _,
          m,
          w,
          N,
          b
        ) : D & 64 || D & 128 ? v.process(
          c,
          u,
          h,
          E,
          _,
          m,
          w,
          N,
          b,
          At
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", v, `(${typeof v})`);
    }
    M != null && _ ? Ut(M, c && c.ref, m, u || c, !u) : M == null && c && c.ref != null && Ut(c.ref, null, m, c, !0);
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
  }, H = (c, u, h, E) => {
    [c.el, c.anchor] = C(
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
      T(c), [u.el, u.anchor] = C(
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
  }, T = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = g(c), s(c), c = h;
    s(u);
  }, te = (c, u, h, E, _, m, w, N, b) => {
    if (u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), c == null)
      ye(
        u,
        h,
        E,
        _,
        m,
        w,
        N,
        b
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
          b
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, ye = (c, u, h, E, _, m, w, N) => {
    let b, v;
    const { props: M, shapeFlag: D, transition: V, dirs: $ } = c;
    if (b = c.el = r(
      c.type,
      m,
      M && M.is,
      M
    ), D & 8 ? d(b, c.children) : D & 16 && ae(
      c.children,
      b,
      null,
      E,
      _,
      to(c, m),
      w,
      N
    ), $ && rt(c, null, E, "created"), ie(b, c, c.scopeId, w, E), M) {
      for (const W in M)
        W !== "value" && !Lt(W) && i(b, W, null, M[W], m, E);
      "value" in M && i(b, "value", null, M.value, m), (v = M.onVnodeBeforeMount) && $e(v, E, c);
    }
    process.env.NODE_ENV !== "production" && (yn(b, "__vnode", c, !0), yn(b, "__vueParentComponent", E, !0)), $ && rt(c, null, E, "beforeMount");
    const k = mc(_, V);
    k && V.beforeEnter(b), o(b, u, h), ((v = M && M.onVnodeMounted) || k || $) && ge(() => {
      v && $e(v, E, c), k && V.enter(b), $ && rt(c, null, E, "mounted");
    }, _);
  }, ie = (c, u, h, E, _) => {
    if (h && O(c, h), E)
      for (let m = 0; m < E.length; m++)
        O(c, E[m]);
    if (_) {
      let m = _.subTree;
      if (process.env.NODE_ENV !== "production" && m.patchFlag > 0 && m.patchFlag & 2048 && (m = Fo(m.children) || m), u === m || Hi(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const w = _.vnode;
        ie(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, ae = (c, u, h, E, _, m, w, N, b = 0) => {
    for (let v = b; v < c.length; v++) {
      const M = c[v] = N ? Je(c[v]) : Oe(c[v]);
      x(
        null,
        M,
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
    let { patchFlag: b, dynamicChildren: v, dirs: M } = u;
    b |= c.patchFlag & 16;
    const D = c.props || U, V = u.props || U;
    let $;
    if (h && lt(h, !1), ($ = V.onVnodeBeforeUpdate) && $e($, h, u, c), M && rt(u, c, h, "beforeUpdate"), h && lt(h, !0), process.env.NODE_ENV !== "production" && ke && (b = 0, w = !1, v = null), (D.innerHTML && V.innerHTML == null || D.textContent && V.textContent == null) && d(N, ""), v ? (Ze(
      c.dynamicChildren,
      v,
      N,
      h,
      E,
      to(u, _),
      m
    ), process.env.NODE_ENV !== "production" && _n(c, u)) : w || Ce(
      c,
      u,
      N,
      null,
      h,
      E,
      to(u, _),
      m,
      !1
    ), b > 0) {
      if (b & 16)
        Ne(N, D, V, h, _);
      else if (b & 2 && D.class !== V.class && i(N, "class", null, V.class, _), b & 4 && i(N, "style", D.style, V.style, _), b & 8) {
        const k = u.dynamicProps;
        for (let W = 0; W < k.length; W++) {
          const K = k[W], pe = D[K], he = V[K];
          (he !== pe || K === "value") && i(N, K, pe, he, _, h);
        }
      }
      b & 1 && c.children !== u.children && d(N, u.children);
    } else !w && v == null && Ne(N, D, V, h, _);
    (($ = V.onVnodeUpdated) || M) && ge(() => {
      $ && $e($, h, u, c), M && rt(u, c, h, "updated");
    }, E);
  }, Ze = (c, u, h, E, _, m, w) => {
    for (let N = 0; N < u.length; N++) {
      const b = c[N], v = u[N], M = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Rt(b, v) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 198) ? a(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      x(
        b,
        v,
        M,
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
          !Lt(m) && !(m in h) && i(
            c,
            m,
            u[m],
            null,
            _,
            E
          );
      for (const m in h) {
        if (Lt(m)) continue;
        const w = h[m], N = u[m];
        w !== N && m !== "value" && i(c, m, N, w, _, E);
      }
      "value" in h && i(c, "value", u.value, h.value, _);
    }
  }, ln = (c, u, h, E, _, m, w, N, b) => {
    const v = u.el = c ? c.el : l(""), M = u.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: V, slotScopeIds: $ } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (ke || D & 2048) && (D = 0, b = !1, V = null), $ && (N = N ? N.concat($) : $), c == null ? (o(v, h, E), o(M, h, E), ae(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      M,
      _,
      m,
      w,
      N,
      b
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
    ), process.env.NODE_ENV !== "production" ? _n(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || _ && u === _.subTree) && _n(
        c,
        u,
        !0
        /* shallow */
      )
    )) : Ce(
      c,
      u,
      h,
      M,
      _,
      m,
      w,
      N,
      b
    );
  }, Uo = (c, u, h, E, _, m, w, N, b) => {
    u.slotScopeIds = N, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      E,
      w,
      b
    ) : Qe(
      u,
      h,
      E,
      _,
      m,
      w,
      b
    ) : de(c, u, b);
  }, Qe = (c, u, h, E, _, m, w) => {
    const N = c.component = Vc(
      c,
      E,
      _
    );
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && el(N), process.env.NODE_ENV !== "production" && (dn(c), bt(N, "mount")), Ro(c) && (N.ctx.renderer = At), process.env.NODE_ENV !== "production" && bt(N, "init"), Cc(N, !1, w), process.env.NODE_ENV !== "production" && yt(N, "init"), process.env.NODE_ENV !== "production" && ke && (c.el = null), N.asyncDep) {
      if (_ && _.registerDep(N, R, w), !c.el) {
        const b = N.subTree = Fe(be);
        q(null, b, u, h), c.placeholder = b.el;
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
    process.env.NODE_ENV !== "production" && (pn(), yt(N, "mount"));
  }, de = (c, u, h) => {
    const E = u.component = c.component;
    if (Ql(c, u, h))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && dn(u), I(E, u, h), process.env.NODE_ENV !== "production" && pn();
        return;
      } else
        E.next = u, E.update();
    else
      u.el = c.el, E.vnode = u;
  }, R = (c, u, h, E, _, m, w) => {
    const N = () => {
      if (c.isMounted) {
        let { next: D, bu: V, u: $, parent: k, vnode: W } = c;
        {
          const Me = ji(c);
          if (Me) {
            D && (D.el = W.el, I(c, D, w)), Me.asyncDep.then(() => {
              ge(() => {
                c.isUnmounted || v();
              }, _);
            });
            return;
          }
        }
        let K = D, pe;
        process.env.NODE_ENV !== "production" && dn(D || c.vnode), lt(c, !1), D ? (D.el = W.el, I(c, D, w)) : D = W, V && Nt(V), (pe = D.props && D.props.onVnodeBeforeUpdate) && $e(pe, k, D, W), lt(c, !0), process.env.NODE_ENV !== "production" && bt(c, "render");
        const he = fs(c);
        process.env.NODE_ENV !== "production" && yt(c, "render");
        const Te = c.subTree;
        c.subTree = he, process.env.NODE_ENV !== "production" && bt(c, "patch"), x(
          Te,
          he,
          // parent may have changed if it's in a teleport
          a(Te.el),
          // anchor may have changed if it's in a fragment
          cn(Te),
          c,
          _,
          m
        ), process.env.NODE_ENV !== "production" && yt(c, "patch"), D.el = he.el, K === null && ec(c, he.el), $ && ge($, _), (pe = D.props && D.props.onVnodeUpdated) && ge(
          () => $e(pe, k, D, W),
          _
        ), process.env.NODE_ENV !== "production" && gi(c), process.env.NODE_ENV !== "production" && pn();
      } else {
        let D;
        const { el: V, props: $ } = u, { bm: k, m: W, parent: K, root: pe, type: he } = c, Te = Kt(u);
        lt(c, !1), k && Nt(k), !Te && (D = $ && $.onVnodeBeforeMount) && $e(D, K, u), lt(c, !0);
        {
          pe.ce && pe.ce._hasShadowRoot() && pe.ce._injectChildStyle(he), process.env.NODE_ENV !== "production" && bt(c, "render");
          const Me = c.subTree = fs(c);
          process.env.NODE_ENV !== "production" && yt(c, "render"), process.env.NODE_ENV !== "production" && bt(c, "patch"), x(
            null,
            Me,
            h,
            E,
            c,
            _,
            m
          ), process.env.NODE_ENV !== "production" && yt(c, "patch"), u.el = Me.el;
        }
        if (W && ge(W, _), !Te && (D = $ && $.onVnodeMounted)) {
          const Me = u;
          ge(
            () => $e(D, K, Me),
            _
          );
        }
        (u.shapeFlag & 256 || K && Kt(K.vnode) && K.vnode.shapeFlag & 256) && c.a && ge(c.a, _), c.isMounted = !0, process.env.NODE_ENV !== "production" && rl(c), u = h = E = null;
      }
    };
    c.scope.on();
    const b = c.effect = new Us(N);
    c.scope.off();
    const v = c.update = b.run.bind(b), M = c.job = b.runIfDirty.bind(b);
    M.i = c, M.id = c.uid, b.scheduler = () => Fn(M), lt(c, !0), process.env.NODE_ENV !== "production" && (b.onTrack = c.rtc ? (D) => Nt(c.rtc, D) : void 0, b.onTrigger = c.rtg ? (D) => Nt(c.rtg, D) : void 0), v();
  }, I = (c, u, h) => {
    u.component = c;
    const E = c.vnode.props;
    c.vnode = u, c.next = null, oc(c, u.props, E, h), pc(c, u.children, h), Ve(), Qo(c), Se();
  }, Ce = (c, u, h, E, _, m, w, N, b = !1) => {
    const v = c && c.children, M = c ? c.shapeFlag : 0, D = u.children, { patchFlag: V, shapeFlag: $ } = u;
    if (V > 0) {
      if (V & 128) {
        Tt(
          v,
          D,
          h,
          E,
          _,
          m,
          w,
          N,
          b
        );
        return;
      } else if (V & 256) {
        Un(
          v,
          D,
          h,
          E,
          _,
          m,
          w,
          N,
          b
        );
        return;
      }
    }
    $ & 8 ? (M & 16 && Mt(v, _, m), D !== v && d(h, D)) : M & 16 ? $ & 16 ? Tt(
      v,
      D,
      h,
      E,
      _,
      m,
      w,
      N,
      b
    ) : Mt(v, _, m, !0) : (M & 8 && d(h, ""), $ & 16 && ae(
      D,
      h,
      E,
      _,
      m,
      w,
      N,
      b
    ));
  }, Un = (c, u, h, E, _, m, w, N, b) => {
    c = c || Dt, u = u || Dt;
    const v = c.length, M = u.length, D = Math.min(v, M);
    let V;
    for (V = 0; V < D; V++) {
      const $ = u[V] = b ? Je(u[V]) : Oe(u[V]);
      x(
        c[V],
        $,
        h,
        null,
        _,
        m,
        w,
        N,
        b
      );
    }
    v > M ? Mt(
      c,
      _,
      m,
      !0,
      !1,
      D
    ) : ae(
      u,
      h,
      E,
      _,
      m,
      w,
      N,
      b,
      D
    );
  }, Tt = (c, u, h, E, _, m, w, N, b) => {
    let v = 0;
    const M = u.length;
    let D = c.length - 1, V = M - 1;
    for (; v <= D && v <= V; ) {
      const $ = c[v], k = u[v] = b ? Je(u[v]) : Oe(u[v]);
      if (Rt($, k))
        x(
          $,
          k,
          h,
          null,
          _,
          m,
          w,
          N,
          b
        );
      else
        break;
      v++;
    }
    for (; v <= D && v <= V; ) {
      const $ = c[D], k = u[V] = b ? Je(u[V]) : Oe(u[V]);
      if (Rt($, k))
        x(
          $,
          k,
          h,
          null,
          _,
          m,
          w,
          N,
          b
        );
      else
        break;
      D--, V--;
    }
    if (v > D) {
      if (v <= V) {
        const $ = V + 1, k = $ < M ? u[$].el : E;
        for (; v <= V; )
          x(
            null,
            u[v] = b ? Je(u[v]) : Oe(u[v]),
            h,
            k,
            _,
            m,
            w,
            N,
            b
          ), v++;
      }
    } else if (v > V)
      for (; v <= D; )
        et(c[v], _, m, !0), v++;
    else {
      const $ = v, k = v, W = /* @__PURE__ */ new Map();
      for (v = k; v <= V; v++) {
        const le = u[v] = b ? Je(u[v]) : Oe(u[v]);
        le.key != null && (process.env.NODE_ENV !== "production" && W.has(le.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(le.key),
          "Make sure keys are unique."
        ), W.set(le.key, v));
      }
      let K, pe = 0;
      const he = V - k + 1;
      let Te = !1, Me = 0;
      const $t = new Array(he);
      for (v = 0; v < he; v++) $t[v] = 0;
      for (v = $; v <= D; v++) {
        const le = c[v];
        if (pe >= he) {
          et(le, _, m, !0);
          continue;
        }
        let Ae;
        if (le.key != null)
          Ae = W.get(le.key);
        else
          for (K = k; K <= V; K++)
            if ($t[K - k] === 0 && Rt(le, u[K])) {
              Ae = K;
              break;
            }
        Ae === void 0 ? et(le, _, m, !0) : ($t[Ae - k] = v + 1, Ae >= Me ? Me = Ae : Te = !0, x(
          le,
          u[Ae],
          h,
          null,
          _,
          m,
          w,
          N,
          b
        ), pe++);
      }
      const Wo = Te ? vc($t) : Dt;
      for (K = Wo.length - 1, v = he - 1; v >= 0; v--) {
        const le = k + v, Ae = u[le], qo = u[le + 1], Jo = le + 1 < M ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          qo.el || Li(qo)
        ) : E;
        $t[v] === 0 ? x(
          null,
          Ae,
          h,
          Jo,
          _,
          m,
          w,
          N,
          b
        ) : Te && (K < 0 || v !== Wo[K] ? vt(Ae, h, Jo, 2) : K--);
      }
    }
  }, vt = (c, u, h, E, _ = null) => {
    const { el: m, type: w, transition: N, children: b, shapeFlag: v } = c;
    if (v & 6) {
      vt(c.component.subTree, u, h, E);
      return;
    }
    if (v & 128) {
      c.suspense.move(u, h, E);
      return;
    }
    if (v & 64) {
      w.move(c, u, h, At);
      return;
    }
    if (w === se) {
      o(m, u, h);
      for (let D = 0; D < b.length; D++)
        vt(b[D], u, h, E);
      o(c.anchor, u, h);
      return;
    }
    if (w === mn) {
      ve(c, u, h);
      return;
    }
    if (E !== 2 && v & 1 && N)
      if (E === 0)
        N.beforeEnter(m), o(m, u, h), ge(() => N.enter(m), _);
      else {
        const { leave: D, delayLeave: V, afterLeave: $ } = N, k = () => {
          c.ctx.isUnmounted ? s(m) : o(m, u, h);
        }, W = () => {
          m._isLeaving && m[bl](
            !0
            /* cancelled */
          ), D(m, () => {
            k(), $ && $();
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
      children: b,
      dynamicChildren: v,
      shapeFlag: M,
      patchFlag: D,
      dirs: V,
      cacheIndex: $
    } = c;
    if (D === -2 && (_ = !1), N != null && (Ve(), Ut(N, null, h, c, !0), Se()), $ != null && (u.renderCache[$] = void 0), M & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const k = M & 1 && V, W = !Kt(c);
    let K;
    if (W && (K = w && w.onVnodeBeforeUnmount) && $e(K, u, c), M & 6)
      er(c.component, h, E);
    else {
      if (M & 128) {
        c.suspense.unmount(h, E);
        return;
      }
      k && rt(c, null, u, "beforeUnmount"), M & 64 ? c.type.remove(
        c,
        u,
        h,
        At,
        E
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== se || D > 0 && D & 64) ? Mt(
        v,
        u,
        h,
        !1,
        !0
      ) : (m === se && D & 384 || !_ && M & 16) && Mt(b, u, h), E && Kn(c);
    }
    (W && (K = w && w.onVnodeUnmounted) || k) && ge(() => {
      K && $e(K, u, c), k && rt(c, null, u, "unmounted");
    }, h);
  }, Kn = (c) => {
    const { type: u, el: h, anchor: E, transition: _ } = c;
    if (u === se) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && _ && !_.persisted ? c.children.forEach((w) => {
        w.type === be ? s(w.el) : Kn(w);
      }) : Qi(h, E);
      return;
    }
    if (u === mn) {
      T(c);
      return;
    }
    const m = () => {
      s(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: N } = _, b = () => w(h, m);
      N ? N(c.el, m, b) : b();
    } else
      m();
  }, Qi = (c, u) => {
    let h;
    for (; c !== u; )
      h = g(c), s(c), c = h;
    s(u);
  }, er = (c, u, h) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && tl(c);
    const { bum: E, scope: _, job: m, subTree: w, um: N, m: b, a: v } = c;
    gs(b), gs(v), E && Nt(E), _.stop(), m && (m.flags |= 8, et(w, c, u, h)), N && ge(N, u), ge(() => {
      c.isUnmounted = !0;
    }, u), process.env.NODE_ENV !== "production" && cl(c);
  }, Mt = (c, u, h, E = !1, _ = !1, m = 0) => {
    for (let w = m; w < c.length; w++)
      et(c[w], u, h, E, _);
  }, cn = (c) => {
    if (c.shapeFlag & 6)
      return cn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = g(c.anchor || c.el), h = u && u[vl];
    return h ? g(h) : u;
  };
  let Wn = !1;
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
    ), u._vnode = c, Wn || (Wn = !0, Qo(E), di(), Wn = !1);
  }, At = {
    p: x,
    um: et,
    m: vt,
    r: Kn,
    mt: Qe,
    mc: ae,
    pc: Ce,
    pbc: Ze,
    n: cn,
    o: e
  };
  return {
    render: Ko,
    hydrate: void 0,
    createApp: Jl(Ko)
  };
}
function to({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function _n(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (S(o) && S(s))
    for (let i = 0; i < o.length; i++) {
      const r = o[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Je(s[i]), l.el = r.el), !n && l.patchFlag !== -2 && _n(r, l)), l.type === on && (l.patchFlag === -1 && (l = s[i] = Je(l)), l.el = r.el), l.type === be && !l.el && (l.el = r.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
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
const Hi = (e) => e.__isSuspense;
function Ec(e, t) {
  t && t.pendingBranch ? S(e) ? t.effects.push(...e) : t.effects.push(e) : ai(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), on = /* @__PURE__ */ Symbol.for("v-txt"), be = /* @__PURE__ */ Symbol.for("v-cmt"), mn = /* @__PURE__ */ Symbol.for("v-stc"), Wt = [];
let Ee = null;
function ne(e = !1) {
  Wt.push(Ee = e ? null : []);
}
function bc() {
  Wt.pop(), Ee = Wt[Wt.length - 1] || null;
}
let Yt = 1;
function _s(e, t = !1) {
  Yt += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function Bi(e) {
  return e.dynamicChildren = Yt > 0 ? Ee || Dt : null, bc(), Yt > 0 && Ee && Ee.push(e), e;
}
function oe(e, t, n, o, s, i) {
  return Bi(
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
function yc(e, t, n, o, s) {
  return Bi(
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
function Hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Rt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = hn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Nc = (...e) => Ki(
  ...e
), Ui = ({ key: e }) => e ?? null, vn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || /* @__PURE__ */ ee(e) || A(e) ? { i: re, r: e, k: t, f: !!n } : e : null);
function J(e, t = null, n = null, o = 0, s = null, i = e === se ? 0 : 1, r = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ui(t),
    ref: t && vn(t),
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
    ctx: re
  };
  return l ? (Ho(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= G(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), Yt > 0 && // avoid a block node from tracking itself
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
  if ((!e || e === Il) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = be), Hn(e)) {
    const l = it(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ho(l, n), Yt > 0 && !i && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (Yi(e) && (e = e.__vccOpts), t) {
    t = Oc(t);
    let { class: l, style: f } = t;
    l && !G(l) && (t.class = ut(l)), j(f) && (/* @__PURE__ */ Nn(f) && !S(f) && (f = X({}, f)), t.style = xo(f));
  }
  const r = G(e) ? 1 : Hi(e) ? 128 : El(e) ? 64 : j(e) ? 4 : A(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && /* @__PURE__ */ Nn(e) && (e = /* @__PURE__ */ P(e), y(
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
  return e ? /* @__PURE__ */ Nn(e) || $i(e) ? X({}, e) : e : null;
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
      n && i ? S(i) ? i.concat(vn(t)) : [i, vn(t)] : vn(t)
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
    patchFlag: t && e.type !== se ? r === -1 ? 16 : r | 16 : r,
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
  return f && o && Io(
    d,
    f.clone(d)
  ), d;
}
function Wi(e) {
  const t = it(e);
  return S(e.children) && (t.children = e.children.map(Wi)), t;
}
function jt(e = " ", t = 0) {
  return Fe(on, null, e, t);
}
function vo(e = "", t = !1) {
  return t ? (ne(), yc(be, null, e)) : Fe(be, null, e);
}
function Oe(e) {
  return e == null || typeof e == "boolean" ? Fe(be) : S(e) ? Fe(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Hn(e) ? Je(e) : Fe(on, null, String(e));
}
function Je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : it(e);
}
function Ho(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (S(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ho(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !$i(t) ? t._ctx = re : s === 3 && re && (re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else A(t) ? (t = { default: t, _ctx: re }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [jt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = ut([t.class, o.class]));
      else if (s === "style")
        t.style = xo([t.style, o.style]);
      else if (Xt(s)) {
        const i = t[s], r = o[s];
        r && i !== r && !(S(i) && i.includes(r)) && (t[s] = i ? [].concat(i, r) : r);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function $e(e, t, n, o = null) {
  Be(e, t, 7, [
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
    propsOptions: Ii(o, s),
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
const qi = () => z || re;
let Mn, Eo;
{
  const e = Qt(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (i) => {
      s.length > 1 ? s.forEach((r) => r(i)) : s[0](i);
    };
  };
  Mn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => z = n
  ), Eo = t(
    "__VUE_SSR_SETTERS__",
    (n) => zt = n
  );
}
const sn = (e) => {
  const t = z;
  return Mn(e), e.scope.on(), () => {
    e.scope.off(), Mn(t);
  };
}, ms = () => {
  z && z.scope.off(), Mn(null);
}, Sc = /* @__PURE__ */ ze("slot,component");
function bo(e, { isNativeTag: t }) {
  (Sc(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ji(e) {
  return e.vnode.shapeFlag & 4;
}
let zt = !1;
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
    if (n.name && bo(n.name, e.appContext.config), n.components) {
      const s = Object.keys(n.components);
      for (let i = 0; i < s.length; i++)
        bo(s[i], e.appContext.config);
    }
    if (n.directives) {
      const s = Object.keys(n.directives);
      for (let i = 0; i < s.length; i++)
        vi(s[i]);
    }
    n.compilerOptions && Mc() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, wi), process.env.NODE_ENV !== "production" && Fl(e);
  const { setup: o } = n;
  if (o) {
    Ve();
    const s = e.setupContext = o.length > 1 ? $c(e) : null, i = sn(e), r = Ct(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(e.props) : e.props,
        s
      ]
    ), l = Oo(r);
    if (Se(), i(), (l || e.sp) && !Kt(e) && yi(e), l) {
      if (r.then(ms, ms), t)
        return r.then((f) => {
          vs(e, f, t);
        }).catch((f) => {
          tn(f, e, 0);
        });
      if (e.asyncDep = r, process.env.NODE_ENV !== "production" && !e.suspense) {
        const f = rn(e, n);
        y(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      vs(e, r, t);
  } else
    Gi(e, t);
}
function vs(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : j(t) ? (process.env.NODE_ENV !== "production" && Hn(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ri(t), process.env.NODE_ENV !== "production" && jl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Gi(e, n);
}
const Mc = () => !0;
function Gi(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Q);
  {
    const s = sn(e);
    Ve();
    try {
      Hl(e);
    } finally {
      Se(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === Q && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", o));
}
const Es = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Cn(), Z(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Z(e, "get", ""), e[t];
  }
};
function Ac(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Z(e, "get", "$slots"), t[n];
    }
  });
}
function $c(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (S(n) ? o = "array" : /* @__PURE__ */ ee(n) && (o = "ref")), o !== "object" && y(
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
        return o || (o = Ac(e));
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
      if (n in gt)
        return gt[n](e);
    },
    has(t, n) {
      return n in t || n in gt;
    }
  })) : e.proxy;
}
const Pc = /(?:^|[-_])\w/g, Ic = (e) => e.replace(Pc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Bo(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rn(e, t, n = !1) {
  let o = Bo(t);
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
  return o ? Ic(o) : n ? "App" : "Anonymous";
}
function Yi(e) {
  return A(e) && "__vccOpts" in e;
}
const Rc = (e, t) => {
  const n = /* @__PURE__ */ Kr(e, t, zt);
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
            `>${/* @__PURE__ */ He(a) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ He(a))
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
    a.type.props && a.props && g.push(r("props", /* @__PURE__ */ P(a.props))), a.setupState !== U && g.push(r("setup", a.setupState)), a.data !== U && g.push(r("data", /* @__PURE__ */ P(a.data)));
    const O = f(a, "computed");
    O && g.push(r("computed", O));
    const C = f(a, "inject");
    return C && g.push(r("injected", C)), g.push([
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
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : j(a) ? ["object", { object: g ? /* @__PURE__ */ P(a) : a }] : ["span", n, String(a)];
  }
  function f(a, g) {
    const O = a.type;
    if (A(O))
      return;
    const C = {};
    for (const x in a.ctx)
      p(O, x, g) && (C[x] = a.ctx[x]);
    return C;
  }
  function p(a, g, O) {
    const C = a[O];
    if (S(C) && C.includes(g) || j(C) && g in C || a.extends && p(a.extends, g, O) || a.mixins && a.mixins.some((x) => p(x, g, O)))
      return !0;
  }
  function d(a) {
    return /* @__PURE__ */ me(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const bs = "3.5.29", je = process.env.NODE_ENV !== "production" ? y : Q;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let yo;
const ys = typeof window < "u" && window.trustedTypes;
if (ys)
  try {
    yo = /* @__PURE__ */ ys.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && je(`Error creating trusted types policy: ${e}`);
  }
const zi = yo ? (e) => yo.createHTML(e) : (e) => e, Fc = "http://www.w3.org/2000/svg", jc = "http://www.w3.org/1998/Math/MathML", We = typeof document < "u" ? document : null, Ns = We && /* @__PURE__ */ We.createElement("template"), Lc = {
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
}, Hc = /* @__PURE__ */ Symbol("_vtc");
function Bc(e, t, n) {
  const o = e[Hc];
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
          n[l] == null && En(o, l, "");
        }
      else
        for (const r in t)
          n[r] == null && En(o, r, "");
    for (const r in n)
      r === "display" && (i = !0), En(o, r, n[r]);
  } else if (s) {
    if (t !== n) {
      const r = o[Kc];
      r && (n += ";" + r), o.cssText = n, i = Wc.test(n);
    }
  } else t && e.removeAttribute("style");
  Os in e && (e[Os] = i ? o.display : "", e[Uc] && (o.display = "none"));
}
const Jc = /[^\\];\s*$/, ws = /\s*!important$/;
function En(e, t, n) {
  if (S(n))
    n.forEach((o) => En(e, t, o));
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
const Ds = ["Webkit", "Moz", "ms"], no = {};
function Gc(e, t) {
  const n = no[t];
  if (n)
    return n;
  let o = ue(t);
  if (o !== "filter" && o in e)
    return no[t] = o;
  o = _t(o);
  for (let s = 0; s < Ds.length; s++) {
    const i = Ds[s] + o;
    if (i in e)
      return no[t] = i;
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
let oo = 0;
const Zc = /* @__PURE__ */ Promise.resolve(), Qc = () => oo || (Zc.then(() => oo = 0), oo = Date.now());
function ef(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Be(
      tf(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Qc(), n;
}
function Ms(e, t) {
  return A(e) || S(e) ? e : (je(
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
const As = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, nf = (e, t, n, o, s, i) => {
  const r = s === "svg";
  t === "class" ? Bc(e, o, r) : t === "style" ? qc(e, n, o) : Xt(t) ? bn(t) || zc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : of(e, t, o, r)) ? (Ss(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Vs(e, t, o, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(o)) ? Ss(e, ue(t), o, i, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Vs(e, t, o, r));
};
function of(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && As(t) && A(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return As(t) && G(n) ? !1 : t in e;
}
const $s = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return S(t) ? (n) => Nt(t, n) : t;
}, so = /* @__PURE__ */ Symbol("_assign"), sf = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const s = $n(t);
    Xi(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => n ? js(An(r)) : An(r)
      );
      e[so](
        e.multiple ? s ? new Set(i) : i : i[0]
      ), e._assigning = !0, fi(() => {
        e._assigning = !1;
      });
    }), e[so] = $s(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ps(e, t);
  },
  beforeUpdate(e, t, n) {
    e[so] = $s(n);
  },
  updated(e, { value: t }) {
    e._assigning || Ps(e, t);
  }
};
function Ps(e, t) {
  const n = e.multiple, o = S(t);
  if (n && !o && !$n(t)) {
    process.env.NODE_ENV !== "production" && je(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let s = 0, i = e.options.length; s < i; s++) {
    const r = e.options[s], l = An(r);
    if (n)
      if (o) {
        const f = typeof l;
        f === "string" || f === "number" ? r.selected = t.some((p) => String(p) === String(l)) : r.selected = vr(t, l) > -1;
      } else
        r.selected = t.has(l);
    else if (en(An(r), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function An(e) {
  return "_value" in e ? e._value : e.value;
}
const rf = /* @__PURE__ */ X({ patchProp: nf }, Lc);
let Is;
function lf() {
  return Is || (Is = gc(rf));
}
const cf = (...e) => {
  const t = lf().createApp(...e);
  process.env.NODE_ENV !== "production" && (uf(t), af(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = df(o);
    if (!s) return;
    const i = t._component;
    !A(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
  emits: ["copy-to-original", "copy-to-modified"],
  data() {
    return { wordDiffCache: {} };
  },
  methods: {
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
}, gf = { class: "diff-tool-viewer__viewer" }, _f = { class: "diff-tool-viewer__table" }, mf = { class: "diff-tool-viewer__panel-header" }, vf = { class: "diff-tool-viewer__panel-header" }, Ef = ["innerHTML"], bf = { class: "diff-tool-viewer__divider-cell" }, yf = { class: "diff-tool-viewer__copy-controls" }, Nf = ["onClick"], Of = ["onClick"], wf = ["innerHTML"];
function Df(e, t, n, o, s, i) {
  return ne(), oe("div", gf, [
    J("table", _f, [
      J("thead", null, [
        J("tr", null, [
          J("th", mf, wt(n.leftLabel), 1),
          t[0] || (t[0] = J("th", { class: "diff-tool-viewer__divider-header" }, null, -1)),
          J("th", vf, wt(n.rightLabel), 1)
        ])
      ]),
      J("tbody", null, [
        (ne(!0), oe(se, null, Qn(n.originalBlocks, (r, l) => {
          var f, p, d;
          return ne(), oe("tr", {
            key: "row-" + l
          }, [
            J("td", {
              class: ut(["diff-tool-viewer__cell", r.type, { "diff-tool-viewer__blank": r.isBlank }])
            }, [
              (ne(!0), oe(se, null, Qn(r.sentences, (a, g) => {
                var O, C;
                return ne(), oe("div", {
                  key: "orig-s-" + l + "-" + g,
                  class: ut({ "diff-tool-viewer__placeholder": a === "" })
                }, [
                  a === "" ? (ne(), oe(se, { key: 0 }, [
                    jt(" ")
                  ], 64)) : n.highlightLevel === "word" ? (ne(), oe("span", {
                    key: 1,
                    innerHTML: i.renderSentenceWordDiff(a, ((C = (O = n.modifiedBlocks[l]) == null ? void 0 : O.sentences) == null ? void 0 : C[g]) || "", "original")
                  }, null, 8, Ef)) : (ne(), oe(se, { key: 2 }, [
                    jt(wt(a), 1)
                  ], 64))
                ], 2);
              }), 128))
            ], 2),
            J("td", bf, [
              J("div", yf, [
                r.type === "added" || r.type === "changed" ? (ne(), oe("button", {
                  key: 0,
                  class: "diff-tool-viewer__copy-btn diff-tool-viewer__copy-to-original",
                  onClick: (a) => e.$emit("copy-to-original", l),
                  title: "Copy to Original"
                }, " ← ", 8, Nf)) : vo("", !0),
                r.type === "removed" || r.type === "changed" ? (ne(), oe("button", {
                  key: 1,
                  class: "diff-tool-viewer__copy-btn diff-tool-viewer__copy-to-modified",
                  onClick: (a) => e.$emit("copy-to-modified", l),
                  title: "Copy to Modified"
                }, " → ", 8, Of)) : vo("", !0)
              ])
            ]),
            J("td", {
              class: ut(["diff-tool-viewer__cell", (f = n.modifiedBlocks[l]) == null ? void 0 : f.type, { "diff-tool-viewer__blank": (p = n.modifiedBlocks[l]) == null ? void 0 : p.isBlank }])
            }, [
              (ne(!0), oe(se, null, Qn(((d = n.modifiedBlocks[l]) == null ? void 0 : d.sentences) || [], (a, g) => {
                var O, C;
                return ne(), oe("div", {
                  key: "mod-s-" + l + "-" + g,
                  class: ut({ "diff-tool-viewer__placeholder": a === "" })
                }, [
                  a === "" ? (ne(), oe(se, { key: 0 }, [
                    jt(" ")
                  ], 64)) : n.highlightLevel === "word" ? (ne(), oe("span", {
                    key: 1,
                    innerHTML: i.renderSentenceWordDiff(((C = (O = n.originalBlocks[l]) == null ? void 0 : O.sentences) == null ? void 0 : C[g]) || "", a, "modified")
                  }, null, 8, wf)) : (ne(), oe(se, { key: 2 }, [
                    jt(wt(a), 1)
                  ], 64))
                ], 2);
              }), 128))
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
      highlightLevel: this.highlightLevel || "off"
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
    handleCopyToOriginal(e) {
      this.saveStateToUndo();
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
      this.saveStateToUndo();
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
      this.originalBlocks = e.original, this.modifiedBlocks = e.modified, this.can_undo = this.undo_stack.length > 0, this.has_unsaved_changes = !0;
    },
    redo() {
      if (this.redo_stack.length === 0) return;
      this.undo_stack.push({
        original: JSON.parse(JSON.stringify(this.originalBlocks)),
        modified: JSON.parse(JSON.stringify(this.modifiedBlocks))
      }), this.can_undo = !0;
      const e = this.redo_stack.pop();
      this.originalBlocks = e.original, this.modifiedBlocks = e.modified, this.can_redo = this.redo_stack.length > 0, this.has_unsaved_changes = !0;
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
          this.onSave({ blocks: e }), this.has_unsaved_changes = !1, this.undo_stack = [], this.can_undo = !1;
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
}, Mf = { class: "diff-tool-viewer__highlight" }, Af = { class: "diff-tool-viewer__toolbar-btns" }, $f = ["disabled"], Pf = ["disabled"], If = ["disabled"];
function Rf(e, t, n, o, s, i) {
  const r = Pl("DiffViewer");
  return ne(), oe("div", Sf, [
    J("div", Cf, [
      s.has_unsaved_changes ? (ne(), oe("span", Tf, "Unsaved changes")) : vo("", !0),
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
      J("div", Af, [
        J("button", {
          type: "button",
          class: "diff-tool-viewer__btn diff-tool-viewer__btn--secondary",
          disabled: !s.can_undo,
          onClick: t[1] || (t[1] = (...l) => i.undo && i.undo(...l)),
          title: "Ctrl+Z"
        }, "Undo", 8, $f),
        J("button", {
          type: "button",
          class: "diff-tool-viewer__btn diff-tool-viewer__btn--secondary",
          disabled: !s.can_redo,
          onClick: t[2] || (t[2] = (...l) => i.redo && i.redo(...l)),
          title: "Ctrl+Y"
        }, "Redo", 8, Pf),
        J("button", {
          type: "button",
          class: "diff-tool-viewer__btn diff-tool-viewer__btn--primary",
          disabled: !s.has_unsaved_changes || s.isSaving,
          onClick: t[3] || (t[3] = (...l) => i.handleSave && i.handleSave(...l))
        }, wt(s.isSaving ? "Saving..." : "Save"), 9, If),
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
      onCopyToModified: i.handleCopyToModified
    }, null, 8, ["original-blocks", "modified-blocks", "highlight-level", "left-label", "right-label", "onCopyToOriginal", "onCopyToModified"])
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
