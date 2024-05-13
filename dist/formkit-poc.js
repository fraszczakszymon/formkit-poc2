import { ref as N, nextTick as vu, reactive as Se, computed as Ie, markRaw as Ct, triggerRef as De, isRef as pt, isReactive as Dt, watch as Pe, defineComponent as Ke, getCurrentInstance as ft, watchEffect as Q, onMounted as hr, onUnmounted as _u, h as dt, inject as ze, provide as yu, toRef as wu, onBeforeUnmount as xu, createTextVNode as ku, resolveComponent as vr, openBlock as $u, createBlock as Cu, withCtx as Su, createVNode as Ze, createElementVNode as Iu, toDisplayString as Au } from "vue";
var _r = [
  "__key",
  "__init",
  "__shim",
  "__original",
  "__index",
  "__prevKey"
];
function $e() {
  return Math.random().toString(36).substring(2, 15);
}
function Mu(e, t) {
  return [...e instanceof Set ? e : new Set(e)];
}
function I(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function z(e, t, r = !0, u = ["__key"]) {
  if (e === t)
    return !0;
  if (typeof t == "object" && typeof e == "object") {
    if (e instanceof Map || e instanceof Set)
      return !1;
    if (e instanceof Date && t instanceof Date)
      return e.getTime() === t.getTime();
    if (e instanceof RegExp && t instanceof RegExp)
      return Pu(e, t);
    if (e === null || t === null || Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const a of u)
      if ((a in e || a in t) && e[a] !== t[a])
        return !1;
    for (const a in e)
      if (!(a in t) || e[a] !== t[a] && !r || r && !z(e[a], t[a], r, u))
        return !1;
    return !0;
  }
  return !1;
}
function Pu(e, t) {
  return e.source === t.source && e.flags.split("").sort().join("") === t.flags.split("").sort().join("");
}
function T(e) {
  const t = typeof e;
  if (t === "number")
    return !1;
  if (e === void 0)
    return !0;
  if (t === "string")
    return e === "";
  if (t === "object") {
    if (e === null)
      return !0;
    for (const r in e)
      return !1;
    return !(e instanceof RegExp || e instanceof Date);
  }
  return !1;
}
function ju(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ou(e) {
  const t = `^${ju(e)}$`, r = {
    MM: "(0[1-9]|1[012])",
    M: "([1-9]|1[012])",
    DD: "([012][0-9]|3[01])",
    D: "([012]?[0-9]|3[01])",
    YYYY: "\\d{4}",
    YY: "\\d{2}"
  }, u = Object.keys(r);
  return new RegExp(
    u.reduce((a, n) => a.replace(n, r[n]), t)
  );
}
function Be(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function je(e) {
  return Be(e) || Array.isArray(e);
}
function ye(e) {
  if (Be(e) === !1 || e.__FKNode__ || e.__POJO__ === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(Be(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1);
}
var ne = /* @__NO_SIDE_EFFECTS__ */ (e, t, r = !1, u = !1) => {
  if (t === null)
    return null;
  const a = {};
  if (typeof t == "string")
    return t;
  for (const n in e)
    if (I(t, n) && (t[n] !== void 0 || !u)) {
      if (r && Array.isArray(e[n]) && Array.isArray(t[n])) {
        a[n] = e[n].concat(t[n]);
        continue;
      }
      if (t[n] === void 0)
        continue;
      ye(e[n]) && ye(t[n]) ? a[n] = /* @__PURE__ */ ne(
        e[n],
        t[n],
        r,
        u
      ) : a[n] = t[n];
    } else
      a[n] = e[n];
  for (const n in t)
    !I(a, n) && t[n] !== void 0 && (a[n] = t[n]);
  return a;
};
function Eu(e) {
  if (e[0] !== '"' && e[0] !== "'" || e[0] !== e[e.length - 1])
    return !1;
  const t = e[0];
  for (let r = 1; r < e.length; r++)
    if (e[r] === t && (r === 1 || e[r - 1] !== "\\") && r !== e.length - 1)
      return !1;
  return !0;
}
function Ru(e) {
  if (!e.length)
    return "";
  let t = "", r = "";
  for (let u = 0; u < e.length; u++) {
    const a = e.charAt(u);
    (a !== "\\" || r === "\\") && (t += a), r = a;
  }
  return t;
}
function de(...e) {
  return e.reduce((t, r) => {
    const { value: u, name: a, modelValue: n, config: o, plugins: i, ...s } = r;
    return Object.assign(t, s);
  }, {});
}
function Lu(e) {
  const t = [];
  let r = "", u = 0, a = "", n = "";
  for (let o = 0; o < e.length; o++) {
    const i = e.charAt(o);
    i === a && n !== "\\" ? a = "" : (i === "'" || i === '"') && !a && n !== "\\" ? a = i : i === "(" && !a ? u++ : i === ")" && !a && u--, i === "," && !a && u === 0 ? (t.push(r), r = "") : (i !== " " || a) && (r += i), n = i;
  }
  return r && t.push(r), t;
}
function zt(e, t) {
  const r = {}, u = t.filter((n) => n instanceof RegExp), a = new Set(t);
  for (const n in e)
    !a.has(n) && !u.some((o) => o.test(n)) && (r[n] = e[n]);
  return r;
}
function Zt(e, t) {
  const r = {}, u = t.filter((a) => a instanceof RegExp);
  return t.forEach((a) => {
    a instanceof RegExp || (r[a] = e[a]);
  }), Object.keys(e).forEach((a) => {
    u.some((n) => n.test(a)) && (r[a] = e[a]);
  }), r;
}
function ge(e) {
  return e.replace(
    /-([a-z0-9])/gi,
    (t, r) => r.toUpperCase()
  );
}
function yr(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, r, u) => r + "-" + u.toLowerCase()
  ).replace(" ", "-").toLowerCase();
}
function bt(e, t = _r) {
  if (e !== null && typeof e == "object") {
    let r;
    if (Array.isArray(e) ? r = [...e] : ye(e) && (r = { ...e }), r)
      return Fu(e, r, t), r;
  }
  return e;
}
function we(e, t = _r) {
  if (e === null || e instanceof RegExp || e instanceof Date || e instanceof Map || e instanceof Set || typeof File == "function" && e instanceof File)
    return e;
  let r;
  Array.isArray(e) ? r = e.map((u) => typeof u == "object" ? we(u, t) : u) : r = Object.keys(e).reduce((u, a) => (u[a] = typeof e[a] == "object" ? we(e[a], t) : e[a], u), {});
  for (const u of t)
    u in e && Object.defineProperty(r, u, {
      enumerable: !1,
      value: e[u]
    });
  return r;
}
function K(e) {
  return typeof e == "object" ? we(e) : e;
}
function Vu(e, t) {
  if (!e || typeof e != "object")
    return null;
  const r = t.split(".");
  let u = e;
  for (const a in r) {
    const n = r[a];
    if (I(u, n) && (u = u[n]), +a === r.length - 1)
      return u;
    if (!u || typeof u != "object")
      return null;
  }
  return null;
}
function B(e) {
  return e !== void 0 && e !== "false" && e !== !1 ? !0 : void 0;
}
function xe(e) {
  return Object.isFrozen(e) ? e : Object.defineProperty(e, "__init", {
    enumerable: !1,
    value: !0
  });
}
function St(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, " ").trim().replace(/\s+/g, "-");
}
function Fu(e, t, r) {
  for (const u of r)
    u in e && Object.defineProperty(t, u, {
      enumerable: !1,
      value: e[u]
    });
  return t;
}
function Du(e) {
  let t = !1;
  return (...r) => {
    if (!t)
      return t = !0, queueMicrotask(() => t = !1), e(...r);
  };
}
function zu(e) {
  if (!(e === "false" || e === !1))
    return !0;
}
function It() {
  const e = [];
  let t = 0;
  const r = (a) => e.push(a), u = (a) => {
    const n = e[t];
    return typeof n == "function" ? n(a, (o) => (t++, u(o))) : (t = 0, a);
  };
  return r.dispatch = u, r.unshift = (a) => e.unshift(a), r.remove = (a) => {
    const n = e.indexOf(a);
    n > -1 && e.splice(n, 1);
  }, r;
}
function wr() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  let r;
  const u = (a, n) => {
    if (r) {
      r.set(n.name, [a, n]);
      return;
    }
    e.has(n.name) && e.get(n.name).forEach((o) => {
      (n.origin === a || o.modifiers.includes("deep")) && o.listener(n);
    }), n.bubble && a.bubble(n);
  };
  return u.flush = () => {
    e.clear(), t.clear(), r == null || r.clear();
  }, u.on = (a, n, o = "push") => {
    const [i, ...s] = a.split("."), b = n.receipt || $e(), m = {
      modifiers: s,
      event: i,
      listener: n,
      receipt: b
    };
    return e.has(i) ? e.get(i)[o](m) : e.set(i, [m]), t.has(b) ? t.get(b)[o](i) : t.set(b, [i]), b;
  }, u.off = (a) => {
    var n;
    t.has(a) && ((n = t.get(a)) == null || n.forEach((o) => {
      const i = e.get(o);
      Array.isArray(i) && e.set(
        o,
        i.filter((s) => s.receipt !== a)
      );
    }), t.delete(a));
  }, u.pause = (a) => {
    r || (r = /* @__PURE__ */ new Map()), a && a.walk((n) => n._e.pause());
  }, u.play = (a) => {
    if (!r)
      return;
    const n = r;
    r = void 0, n.forEach(([o, i]) => u(o, i)), a && a.walk((o) => o._e.play());
  }, u;
}
function Zu(e, t, r, u, a = !0, n) {
  return t._e(e, {
    payload: u,
    name: r,
    bubble: a,
    origin: e,
    meta: n
  }), e;
}
function Nu(e, t, r) {
  return Le(e.parent) && e.parent._e(e.parent, r), e;
}
function Hu(e, t, r, u, a) {
  return t._e.on(r, u, a);
}
function Tu(e, t, r) {
  return t._e.off(r), e;
}
var At = It();
At((e, t) => (e.message || (e.message = `E${e.code}`), t(e)));
var Mt = It();
Mt((e, t) => {
  e.message || (e.message = `W${e.code}`);
  const r = t(e);
  return console && typeof console.warn == "function" && console.warn(r.message), r;
});
function pe(e, t = {}) {
  Mt.dispatch({ code: e, data: t });
}
function H(e, t = {}) {
  throw Error(At.dispatch({ code: e, data: t }).message);
}
function G(e, t) {
  return {
    blocking: !1,
    key: $e(),
    meta: {},
    type: "state",
    visible: !0,
    ...e
  };
}
var Nt = {
  apply: Gu,
  set: qu,
  remove: xr,
  filter: Bu,
  reduce: Uu,
  release: Qu,
  touch: Ku
};
function Wu(e = !1) {
  const t = {};
  let r, u = e, a = [];
  const n = /* @__PURE__ */ new Map();
  let o;
  const i = new Proxy(t, {
    get(...s) {
      const [b, m] = s;
      return m === "buffer" ? u : m === "_b" ? a : m === "_m" ? n : m === "_r" ? o : I(Nt, m) ? Nt[m].bind(
        null,
        t,
        i,
        r
      ) : Reflect.get(...s);
    },
    set(s, b, m) {
      return b === "_n" ? (r = m, o === "__n" && kr(r, i), !0) : b === "_b" ? (a = m, !0) : b === "buffer" ? (u = m, !0) : b === "_r" ? (o = m, !0) : (H(101, r), !1);
    }
  });
  return i;
}
function qu(e, t, r, u) {
  if (t.buffer)
    return t._b.push([[u]]), t;
  if (e[u.key] !== u) {
    if (typeof u.value == "string" && u.meta.localize !== !1) {
      const n = u.value;
      u.value = r.t(u), u.value !== n && (u.meta.locale = r.props.locale);
    }
    const a = `message-${I(e, u.key) ? "updated" : "added"}`;
    e[u.key] = Object.freeze(
      r.hook.message.dispatch(u)
    ), r.emit(a, u);
  }
  return t;
}
function Ku(e, t) {
  for (const r in e) {
    const u = { ...e[r] };
    t.set(u);
  }
}
function xr(e, t, r, u) {
  if (I(e, u)) {
    const a = e[u];
    delete e[u], r.emit("message-removed", a);
  }
  return t.buffer === !0 && (t._b = t._b.filter((a) => (a[0] = a[0].filter((n) => n.key !== u), a[1] || a[0].length))), t;
}
function Bu(e, t, r, u, a) {
  for (const n in e) {
    const o = e[n];
    (!a || o.type === a) && !u(o) && xr(e, t, r, n);
  }
}
function Uu(e, t, r, u, a) {
  for (const n in e) {
    const o = e[n];
    a = u(a, o);
  }
  return a;
}
function Gu(e, t, r, u, a) {
  if (Array.isArray(u)) {
    if (t.buffer) {
      t._b.push([u, a]);
      return;
    }
    const n = new Set(
      u.map((o) => (t.set(o), o.key))
    );
    typeof a == "string" ? t.filter(
      (o) => o.type !== a || n.has(o.key)
    ) : typeof a == "function" && t.filter((o) => !a(o) || n.has(o.key));
  } else
    for (const n in u) {
      const o = r.at(n);
      o ? o.store.apply(u[n], a) : Ju(r, t, n, u[n], a);
    }
}
function Yu(e, ...t) {
  const r = `${e.name}-set`, u = (a) => /* @__PURE__ */ G({
    key: St(a),
    type: "error",
    value: a,
    meta: { source: r, autoClear: !0 }
  });
  return t.filter((a) => !!a).map((a) => {
    if (typeof a == "string" && (a = [a]), Array.isArray(a))
      return a.map((n) => u(n));
    {
      const n = {};
      for (const o in a)
        Array.isArray(a[o]) ? n[o] = a[o].map(
          (i) => u(i)
        ) : n[o] = [u(a[o])];
      return n;
    }
  });
}
function Ju(e, t, r, u, a) {
  var o;
  const n = t._m;
  n.has(r) || n.set(r, []), t._r || (t._r = kr(e, t)), (o = n.get(r)) == null || o.push([u, a]);
}
function kr(e, t) {
  return e.on(
    "child.deep",
    ({ payload: r }) => {
      t._m.forEach((u, a) => {
        e.at(a) === r && (u.forEach(([n, o]) => {
          r.store.apply(n, o);
        }), t._m.delete(a));
      }), t._m.size === 0 && t._r && (e.off(t._r), t._r = void 0);
    }
  );
}
function Qu(e, t) {
  t.buffer = !1, t._b.forEach(([r, u]) => t.apply(r, u)), t._b = [];
}
function Xu() {
  const e = {};
  let t;
  return {
    count: (...r) => ea(t, e, ...r),
    init(r) {
      t = r, r.on("message-added.deep", Ht(e, 1)), r.on("message-removed.deep", Ht(e, -1));
    },
    merge: (r) => Tt(t, e, r),
    settled(r) {
      return I(e, r) ? e[r].promise : Promise.resolve();
    },
    unmerge: (r) => Tt(t, e, r, !0),
    value(r) {
      return I(e, r) ? e[r].count : 0;
    }
  };
}
function ea(e, t, r, u, a = 0) {
  if (u = ta(u || r), !I(t, r)) {
    const n = {
      condition: u,
      count: 0,
      name: r,
      node: e,
      promise: Promise.resolve(),
      resolve: () => {
      }
      // eslint-disable-line @typescript-eslint/no-empty-function
    };
    t[r] = n, a = e.store.reduce(
      (o, i) => o + n.condition(i) * 1,
      a
    ), e.each((o) => {
      o.ledger.count(n.name, n.condition), a += o.ledger.value(n.name);
    });
  }
  return $r(t[r], a).promise;
}
function ta(e) {
  return typeof e == "function" ? e : (t) => t.type === e;
}
function $r(e, t) {
  const r = e.count, u = e.count + t;
  return e.count = u, r === 0 && u !== 0 ? (e.node.emit(`unsettled:${e.name}`, e.count, !1), e.promise = new Promise((a) => e.resolve = a)) : r !== 0 && u === 0 && (e.node.emit(`settled:${e.name}`, e.count, !1), e.resolve()), e.node.emit(`count:${e.name}`, e.count, !1), e;
}
function Ht(e, t) {
  return (r) => {
    for (const u in e) {
      const a = e[u];
      a.condition(r.payload) && $r(a, t);
    }
  };
}
function Tt(e, t, r, u = !1) {
  const a = e;
  for (const n in t) {
    const o = t[n].condition;
    u || r.ledger.count(n, o);
    const i = r.ledger.value(n) * (u ? -1 : 1);
    if (e) {
      do
        e.ledger.count(n, o, i), e = e.parent;
      while (e);
      e = a;
    }
  }
}
var Pt = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), jt = wr();
function ra(e) {
  e.props.id && (Pt.set(e.props.id, e), He.set(e, e.props.id), jt(e, {
    payload: e,
    name: e.props.id,
    bubble: !1,
    origin: e
  }));
}
function ua(e) {
  if (He.has(e)) {
    const t = He.get(e);
    He.delete(e), Pt.delete(t), jt(e, {
      payload: null,
      name: t,
      bubble: !1,
      origin: e
    });
  }
}
function Re(e) {
  return Pt.get(e);
}
function aa(e, t) {
  return jt.on(e, t);
}
function mt(e, t, r) {
  let u = !0;
  return t in e.config._t ? u = !1 : e.emit(`config:${t}`, r, !1), t in e.props || (e.emit("prop", { prop: t, value: r }), e.emit(`prop:${t}`, r)), u;
}
function na(e = {}) {
  const t = /* @__PURE__ */ new Set(), r = {
    ...e,
    _add: (a) => t.add(a),
    _rm: (a) => t.delete(a)
  };
  return new Proxy(r, {
    set(a, n, o, i) {
      return typeof n == "string" && t.forEach((s) => mt(s, n, o)), Reflect.set(a, n, o, i);
    }
  });
}
function Cr(e, t) {
  const r = (t || document).getElementById(e);
  if (r instanceof HTMLFormElement) {
    const u = new Event("submit", { cancelable: !0, bubbles: !0 });
    r.dispatchEvent(u);
    return;
  }
  pe(151, e);
}
function oa(e) {
  const t = (r) => {
    for (const u in r.store) {
      const a = r.store[u];
      a.type === "error" || a.type === "ui" && u === "incomplete" ? r.store.remove(u) : a.type === "state" && r.store.set({ ...a, value: !1 });
    }
  };
  t(e), e.walk(t);
}
function Sr(e, t) {
  const r = typeof e == "string" ? Re(e) : e;
  if (r) {
    const u = (o) => K(o.props.initial) || (o.type === "group" ? {} : o.type === "list" ? [] : void 0);
    r._e.pause(r);
    const a = K(t);
    return t && !T(t) && (r.props.initial = je(a) ? xe(a) : a, r.props._init = r.props.initial), r.input(u(r), !1), r.walk((o) => {
      o.type === "list" && o.sync || o.input(u(o), !1);
    }), r.input(
      T(a) && a ? a : u(r),
      !1
    ), r.type !== "input" && t && !T(t) && je(t) && r.walk((o) => {
      o.props.initial = je(o.value) ? xe(o.value) : o.value, o.props._init = o.props.initial;
    }), r._e.play(r), oa(r), r.emit("reset", r), r;
  }
  pe(152, e);
}
var ia = {
  delimiter: ".",
  delay: 0,
  locale: "en",
  rootClasses: (e) => ({ [`formkit-${yr(e)}`]: !0 })
}, Ir = Symbol("index"), gt = Symbol("removed"), ht = Symbol("moved"), Ar = Symbol("inserted");
function sa(e) {
  return e.type === "list" && Array.isArray(e._value);
}
function Le(e) {
  return e && typeof e == "object" && e.__FKNode__ === !0;
}
var Te = (e, t, r) => {
  H(102, [e, r]);
}, la = {
  _c: E(Pa, Te, !1),
  add: E(xa),
  addProps: E(wa),
  address: E(Oa, Te, !1),
  at: E(Ea),
  bubble: E(Nu),
  clearErrors: E(Ha),
  calm: E(va),
  config: E(!1),
  define: E(ya),
  disturb: E(ha),
  destroy: E(_a),
  extend: E(Wa),
  hydrate: E(ma),
  index: E(Ma, Aa, !1),
  input: E(jr),
  each: E(Ca),
  emit: E(Zu),
  find: E(La),
  on: E(Hu),
  off: E(Tu),
  parent: E(!1, ka),
  plugins: E(!1),
  remove: E($a),
  root: E(Fa, Te, !1),
  reset: E(Za),
  resetConfig: E(Ia),
  setErrors: E(Na),
  submit: E(za),
  t: E(Da),
  use: E(Ot),
  name: E(ja, !1, !1),
  walk: E(Sa)
};
function ca() {
  return new Map(Object.entries(la));
}
function E(e, t, r = !0) {
  return {
    get: e ? (u, a) => r ? (...n) => e(u, a, ...n) : e(u, a) : !1,
    set: t !== void 0 ? t : Te.bind(null)
  };
}
function pa() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(e, {
    get(t, r) {
      return e.has(r) || e.set(r, It()), e.get(r);
    }
  });
}
var Mr = 0, fa = 0;
function da(e) {
  var t, r;
  return ((t = e.parent) == null ? void 0 : t.type) === "list" ? Ir : e.name || `${((r = e.props) == null ? void 0 : r.type) || "input"}_${++Mr}`;
}
function Pr(e) {
  return e.type === "group" ? xe(
    e.value && typeof e.value == "object" && !Array.isArray(e.value) ? e.value : {}
  ) : e.type === "list" ? xe(Array.isArray(e.value) ? e.value : []) : e.value;
}
function jr(e, t, r, u = !0) {
  return t._value = ba(e, e.hook.input.dispatch(r)), e.emit("input", t._value), e.isCreated && e.type === "input" && z(t._value, t.value) && !e.props.mergeStrategy ? (e.emit("commitRaw", t.value), t.settled) : (t.isSettled && e.disturb(), u ? (t._tmo && clearTimeout(t._tmo), t._tmo = setTimeout(
    Ue,
    e.props.delay,
    e,
    t
  )) : Ue(e, t), t.settled);
}
function ba(e, t) {
  switch (e.type) {
    case "input":
      break;
    case "group":
      (!t || typeof t != "object") && H(107, [e, t]);
      break;
    case "list":
      Array.isArray(t) || H(108, [e, t]);
      break;
  }
  return t;
}
function Ue(e, t, r = !0, u = !0) {
  t._value = t.value = e.hook.commit.dispatch(t._value), e.type !== "input" && u && e.hydrate(), e.emit("commitRaw", t.value), e.emit("commit", t.value), r && e.calm();
}
function Or(e, { name: t, value: r, from: u }) {
  if (!Object.isFrozen(e._value)) {
    if (sa(e)) {
      const a = r === gt ? [] : r === ht && typeof u == "number" ? e._value.splice(u, 1) : [r];
      e._value.splice(
        t,
        r === ht || u === Ar ? 0 : 1,
        ...a
      );
      return;
    }
    r !== gt ? e._value[t] = r : delete e._value[t];
  }
}
function ma(e, t) {
  const r = t._value;
  return e.type === "list" && e.sync && ga(e, t), t.children.forEach((u) => {
    if (typeof r == "object")
      if (u.name in r) {
        const a = u.type !== "input" || r[u.name] && typeof r[u.name] == "object" ? xe(r[u.name]) : r[u.name];
        if (!u.isSettled || (!je(a) || u.props.mergeStrategy) && z(a, u._value))
          return;
        u.input(a, !1);
      } else
        (e.type !== "list" || typeof u.name == "number") && Or(t, { name: u.name, value: u.value }), r.__init || (u.type === "group" ? u.input({}, !1) : u.type === "list" ? u.input([], !1) : u.input(void 0, !1));
  }), e;
}
function ga(e, t) {
  const r = e._value;
  if (!Array.isArray(r))
    return;
  const u = [], a = new Set(t.children), n = /* @__PURE__ */ new Map();
  r.forEach((i, s) => {
    if (t.children[s] && t.children[s]._value === i)
      u.push(t.children[s]), a.delete(t.children[s]);
    else {
      u.push(null);
      const b = n.get(i) || [];
      b.push(s), n.set(i, b);
    }
  }), a.size && n.size && a.forEach((i) => {
    if (n.has(i._value)) {
      const s = n.get(i._value), b = s.shift();
      u[b] = i, a.delete(i), s.length || n.delete(i._value);
    }
  });
  const o = [];
  for (n.forEach((i) => {
    o.push(...i);
  }); a.size && o.length; ) {
    const i = a.values().next().value, s = o.shift();
    if (s === void 0)
      break;
    u[s] = i, a.delete(i);
  }
  o.forEach((i, s) => {
    u[i] = Ua({ value: s });
  }), a.size && a.forEach((i) => {
    if (!("__FKP" in i)) {
      const s = i._c.parent;
      if (!s || Ga(s))
        return;
      s.ledger.unmerge(i), i._c.parent = null, i.destroy();
    }
  }), t.children = u;
}
function ha(e, t) {
  var r;
  return t._d <= 0 && (t.isSettled = !1, e.emit("settled", !1, !1), t.settled = new Promise((u) => {
    t._resolve = u;
  }), e.parent && ((r = e.parent) == null || r.disturb())), t._d++, e;
}
function va(e, t, r) {
  var u;
  if (r !== void 0 && e.type !== "input") {
    Or(t, r);
    const a = !!(e.config.mergeStrategy && e.config.mergeStrategy[r.name]);
    return Ue(e, t, !0, a);
  }
  t._d > 0 && t._d--, t._d === 0 && (t.isSettled = !0, e.emit("settled", !0, !1), e.parent && ((u = e.parent) == null || u.calm({ name: e.name, value: t.value })), t._resolve && t._resolve(t.value));
}
function _a(e, t) {
  e.emit("destroying", e), e.store.filter(() => !1), e.parent && e.parent.remove(e), ua(e), e.emit("destroyed", e), t._e.flush(), t._value = t.value = void 0;
  for (const r in t.context)
    delete t.context[r];
  t.plugins.clear(), t.context = null;
}
function ya(e, t, r) {
  t.type = r.type;
  const u = we(r);
  e.props.__propDefs = Er(
    e.props.__propDefs ?? [],
    (u == null ? void 0 : u.props) || []
  ), u.props = e.props.__propDefs, t.props.definition = u, t.value = t._value = Pr({
    type: e.type,
    value: t.value
  }), r.forceTypeProp && (e.props.type && (e.props.originalType = e.props.type), t.props.type = r.forceTypeProp), r.family && (t.props.family = r.family), r.features && r.features.forEach((a) => a(e)), r.props && e.addProps(r.props), e.emit("defined", r);
}
function wa(e, t, r) {
  const u = Array.isArray(r) ? r : Object.keys(r), a = Array.isArray(r) ? {} : u.reduce((o, i) => ("default" in r[i] && (o[i] = r[i].default), o), {});
  if (e.props.attrs) {
    const o = { ...e.props.attrs };
    e.props._emit = !1;
    for (const s in o) {
      const b = ge(s);
      u.includes(b) && (e.props[b] = o[s], delete o[s]);
    }
    Array.isArray(r) || u.forEach((s) => {
      "default" in r[s] && e.props[s] === void 0 && (e.props[s] = a[s]);
    });
    const i = K(t._value);
    e.props.initial = e.type !== "input" ? xe(i) : i, e.props._emit = !0, e.props.attrs = o;
  }
  const n = Er(e.props.__propDefs ?? [], r);
  return e.props.definition && (e.props.definition.props = n), e.props.__propDefs = n, e.emit("added-props", r), e;
}
function vt(e) {
  return Array.isArray(e) ? e.reduce((t, r) => (t[r] = {}, t), {}) : e;
}
function Er(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? e.concat(t) : ne(vt(e), vt(t));
}
function xa(e, t, r, u) {
  if (e.type === "input" && H(100, e), r.parent && r.parent !== e && r.parent.remove(r), !t.children.includes(r)) {
    if (u !== void 0 && e.type === "list") {
      const a = t.children[u];
      a && "__FKP" in a ? (r._c.uid = a.uid, t.children.splice(u, 1, r)) : t.children.splice(u, 0, r), Array.isArray(e.value) && e.value.length < t.children.length && e.disturb().calm({
        name: u,
        value: r.value,
        from: Ar
      });
    } else
      t.children.push(r);
    r.isSettled || e.disturb();
  }
  if (r.parent !== e) {
    if (r.parent = e, r.parent !== e)
      return e.remove(r), r.parent.add(r), e;
  } else
    r.use(e.plugins);
  return Ue(e, t, !1), e.ledger.merge(r), e.emit("child", r), e;
}
function ka(e, t, r, u) {
  return Le(u) ? (e.parent && e.parent !== u && e.parent.remove(e), t.parent = u, e.resetConfig(), u.children.includes(e) ? e.use(u.plugins) : u.add(e), !0) : u === null ? (t.parent = null, !0) : !1;
}
function $a(e, t, r) {
  const u = t.children.indexOf(r);
  if (u !== -1) {
    r.isSettled && e.disturb(), t.children.splice(u, 1);
    let a = B(r.props.preserve), n = r.parent;
    for (; a === void 0 && n; )
      a = B(n.props.preserve), n = n.parent;
    a ? e.calm() : e.calm({
      name: e.type === "list" ? u : r.name,
      value: gt
    }), r.parent = null, r.config._rmn = r;
  }
  return e.ledger.unmerge(r), e.emit("childRemoved", r), e;
}
function Ca(e, t, r) {
  t.children.forEach((u) => !("__FKP" in u) && r(u));
}
function Sa(e, t, r, u = !1, a = !1) {
  t.children.some((n) => {
    if ("__FKP" in n)
      return !1;
    const o = r(n);
    return u && o === !1 ? !0 : a && o === !1 ? !1 : n.walk(r, u, a);
  });
}
function Ia(e, t) {
  const r = e.parent || void 0;
  t.config = Rr(e.config._t, r), e.walk((u) => u.resetConfig());
}
function Ot(e, t, r, u = !0, a = !0) {
  return Array.isArray(r) || r instanceof Set ? (r.forEach((n) => Ot(e, t, n)), e) : (t.plugins.has(r) || (a && typeof r.library == "function" && r.library(e), u && r(e) !== !1 && (t.plugins.add(r), e.children.forEach((n) => n.use(r)))), e);
}
function Aa(e, t, r, u) {
  if (Le(e.parent)) {
    const a = e.parent.children, n = u >= a.length ? a.length - 1 : u < 0 ? 0 : u, o = a.indexOf(e);
    return o === -1 ? !1 : (a.splice(o, 1), a.splice(n, 0, e), e.parent.children = a, e.parent.type === "list" && e.parent.disturb().calm({ name: n, value: ht, from: o }), !0);
  }
  return !1;
}
function Ma(e) {
  if (e.parent) {
    const t = [...e.parent.children].indexOf(e);
    return t === -1 ? e.parent.children.length : t;
  }
  return -1;
}
function Pa(e, t) {
  return t;
}
function ja(e, t) {
  var r;
  return ((r = e.parent) == null ? void 0 : r.type) === "list" ? e.index : t.name !== Ir ? t.name : e.index;
}
function Oa(e, t) {
  return t.parent ? t.parent.address.concat([e.name]) : [e.name];
}
function Ea(e, t, r) {
  const u = typeof r == "string" ? r.split(e.config.delimiter) : r;
  if (!u.length)
    return;
  const a = u[0];
  let n = e.parent;
  for (n || (String(u[0]) === String(e.name) && u.shift(), n = e), a === "$parent" && u.shift(); n && u.length; ) {
    const o = u.shift();
    switch (o) {
      case "$root":
        n = e.root;
        break;
      case "$parent":
        n = n.parent;
        break;
      case "$self":
        n = e;
        break;
      default:
        n = n.children.find(
          (i) => !("__FKP" in i) && String(i.name) === String(o)
        ) || Ra(n, o);
    }
  }
  return n || void 0;
}
function Ra(e, t) {
  const r = String(t).match(/^(find)\((.*)\)$/);
  if (r) {
    const [, u, a] = r, n = a.split(",").map((o) => o.trim());
    switch (u) {
      case "find":
        return e.find(n[0], n[1]);
      default:
        return;
    }
  }
}
function La(e, t, r, u) {
  return Va(e, r, u);
}
function Va(e, t, r = "name") {
  const u = typeof r == "string" ? (n) => n[r] == t : r, a = [e];
  for (; a.length; ) {
    const n = a.shift();
    if (!("__FKP" in n)) {
      if (u(n, t))
        return n;
      a.push(...n.children);
    }
  }
}
function Fa(e) {
  let t = e;
  for (; t.parent; )
    t = t.parent;
  return t;
}
function Rr(e = {}, t) {
  let r;
  return new Proxy(e, {
    get(...u) {
      const a = u[1];
      if (a === "_t")
        return e;
      const n = Reflect.get(...u);
      if (n !== void 0)
        return n;
      if (t) {
        const o = t.config[a];
        if (o !== void 0)
          return o;
      }
      if (e.rootConfig && typeof a == "string") {
        const o = e.rootConfig[a];
        if (o !== void 0)
          return o;
      }
      return a === "delay" && (r == null ? void 0 : r.type) === "input" ? 20 : ia[a];
    },
    set(...u) {
      const a = u[1], n = u[2];
      if (a === "_n")
        return r = n, e.rootConfig && e.rootConfig._add(r), !0;
      if (a === "_rmn")
        return e.rootConfig && e.rootConfig._rm(r), r = void 0, !0;
      if (!z(e[a], n, !1)) {
        const o = Reflect.set(...u);
        return r && (r.emit(`config:${a}`, n, !1), mt(r, a, n), r.walk((i) => mt(i, a, n), !1, !0)), o;
      }
      return !0;
    }
  });
}
function Da(e, t, r, u = "ui") {
  const a = typeof r == "string" ? { key: r, value: r, type: u } : r, n = e.hook.text.dispatch(a);
  return e.emit("text", n, !1), n.value;
}
function za(e) {
  const t = e.name;
  do {
    if (e.props.isForm === !0)
      break;
    e.parent || H(106, t), e = e.parent;
  } while (e);
  e.props.id && Cr(e.props.id, e.props.__root);
}
function Za(e, t, r) {
  return Sr(e, r);
}
function Na(e, t, r, u) {
  const a = `${e.name}-set`, n = e.hook.setErrors.dispatch({ localErrors: r, childErrors: u });
  return Yu(e, n.localErrors, n.childErrors).forEach(
    (o) => {
      e.store.apply(o, (i) => i.meta.source === a);
    }
  ), e;
}
function Ha(e, t, r = !0, u) {
  return e.store.filter((a) => !(u === void 0 || a.meta.source === u), "error"), r && (u = u || `${e.name}-set`, e.walk((a) => {
    a.store.filter((n) => !(n.type === "error" && n.meta && n.meta.source === u));
  })), e;
}
function Ta(e) {
  const t = {
    initial: typeof e == "object" ? K(e) : e
  };
  let r, u = !0, a = {};
  return new Proxy(t, {
    get(...n) {
      var m, _, A, h;
      const [o, i] = n;
      let s;
      I(t, i) ? (s = Reflect.get(...n), (m = a[i]) != null && m.boolean && (s = zu(s))) : r && typeof i == "string" && r.config[i] !== void 0 ? (s = r.config[i], i === "mergeStrategy" && (r == null ? void 0 : r.type) === "input" && Be(s) && r.name in s && (s = s[r.name])) : s = (_ = a[i]) == null ? void 0 : _.default;
      const b = (A = a[i]) == null ? void 0 : A.getter;
      return (h = a[i]) != null && h.boolean && (s = !!s), b ? b(s, r) : s;
    },
    set(n, o, i, s) {
      var A;
      if (o === "_n")
        return r = i, !0;
      if (o === "_emit")
        return u = i, !0;
      let { prop: b, value: m } = r.hook.prop.dispatch({
        prop: o,
        value: i
      });
      const _ = (A = a[b]) == null ? void 0 : A.setter;
      if (m = _ ? _(m, r) : m, !z(t[b], m, !1) || typeof m == "object") {
        const h = Reflect.set(n, b, m, s);
        return b === "__propDefs" && (a = vt(m)), u && (r.emit("prop", { prop: b, value: m }), typeof b == "string" && r.emit(`prop:${b}`, m)), h;
      }
      return !0;
    }
  });
}
function Wa(e, t, r, u) {
  return t.traps.set(r, u), e;
}
function qa(e, t) {
  if (e.props.definition)
    return e.define(e.props.definition);
  for (const r of t) {
    if (e.props.definition)
      return;
    typeof r.library == "function" && r.library(e);
  }
}
function Ka(e) {
  const t = Pr(e), r = Rr(e.config || {}, e.parent);
  return {
    _d: 0,
    _e: wr(),
    uid: Symbol(),
    _resolve: !1,
    _tmo: !1,
    _value: t,
    children: Mu(e.children || []),
    config: r,
    hook: pa(),
    isCreated: !1,
    isSettled: !0,
    ledger: Xu(),
    name: da(e),
    parent: e.parent || null,
    plugins: /* @__PURE__ */ new Set(),
    props: Ta(t),
    settled: Promise.resolve(t),
    store: Wu(!0),
    sync: e.sync || !1,
    traps: ca(),
    type: e.type || "input",
    value: t
  };
}
function Ba(e, t) {
  var u, a;
  const r = (u = t.props) == null ? void 0 : u.id;
  if (r || (a = t.props) == null || delete a.id, e.ledger.init(e.store._n = e.props._n = e.config._n = e), e.props._emit = !1, Object.assign(
    e.props,
    r ? {} : { id: `input_${fa++}` },
    t.props ?? {}
  ), e.props._emit = !0, qa(
    e,
    /* @__PURE__ */ new Set([
      ...t.plugins || [],
      ...e.parent ? e.parent.plugins : []
    ])
  ), t.plugins)
    for (const n of t.plugins)
      Ot(e, e._c, n, !0, !1);
  return e.each((n) => e.add(n)), e.parent && e.parent.add(e, t.index), e.type === "input" && e.children.length && H(100, e), jr(e, e._c, e._value, !1), e.store.release(), r && ra(e), e.emit("created", e), e.isCreated = !0, e;
}
function Ua(e) {
  return {
    __FKP: !0,
    uid: Symbol(),
    name: (e == null ? void 0 : e.name) ?? `p_${Mr++}`,
    value: (e == null ? void 0 : e.value) ?? null,
    _value: (e == null ? void 0 : e.value) ?? null,
    type: (e == null ? void 0 : e.type) ?? "input",
    props: {},
    use: () => {
    },
    input(t) {
      return this._value = t, this.value = t, Promise.resolve();
    },
    isSettled: !0
  };
}
function Ga(e) {
  return "__FKP" in e;
}
function Ya(e) {
  const t = e || {}, r = Ka(t), u = new Proxy(r, {
    get(...a) {
      const [, n] = a;
      if (n === "__FKNode__")
        return !0;
      const o = r.traps.get(n);
      return o && o.get ? o.get(u, r) : Reflect.get(...a);
    },
    set(...a) {
      const [, n, o] = a, i = r.traps.get(n);
      return i && i.set ? i.set(u, r, n, o) : Reflect.set(...a);
    }
  });
  return Ba(u, t);
}
function _t(e) {
  return typeof e != "string" && I(e, "$el");
}
function yt(e) {
  return typeof e != "string" && I(e, "$cmp");
}
function be(e) {
  return !e || typeof e == "string" ? !1 : I(e, "if") && I(e, "then");
}
function Ja(e) {
  return typeof e != "string" && "$formkit" in e;
}
function Qa(e) {
  if (typeof e == "string")
    return {
      $el: "text",
      children: e
    };
  if (Ja(e)) {
    const {
      $formkit: t,
      for: r,
      if: u,
      children: a,
      bind: n,
      ...o
    } = e;
    return Object.assign(
      {
        $cmp: "FormKit",
        props: { ...o, type: t }
      },
      u ? { if: u } : {},
      r ? { for: r } : {},
      a ? { children: a } : {},
      n ? { bind: n } : {}
    );
  }
  return e;
}
function q(e) {
  let t;
  const r = /* @__PURE__ */ new Set(), u = function(f, d) {
    return typeof f == "function" ? f(d) : f;
  }, a = [
    {
      "&&": (p, f, d) => u(p, d) && u(f, d),
      "||": (p, f, d) => u(p, d) || u(f, d)
    },
    {
      "===": (p, f, d) => u(p, d) === u(f, d),
      "!==": (p, f, d) => u(p, d) !== u(f, d),
      "==": (p, f, d) => u(p, d) == u(f, d),
      "!=": (p, f, d) => u(p, d) != u(f, d),
      ">=": (p, f, d) => u(p, d) >= u(f, d),
      "<=": (p, f, d) => u(p, d) <= u(f, d),
      ">": (p, f, d) => u(p, d) > u(f, d),
      "<": (p, f, d) => u(p, d) < u(f, d)
    },
    {
      "+": (p, f, d) => u(p, d) + u(f, d),
      "-": (p, f, d) => u(p, d) - u(f, d)
    },
    {
      "*": (p, f, d) => u(p, d) * u(f, d),
      "/": (p, f, d) => u(p, d) / u(f, d),
      "%": (p, f, d) => u(p, d) % u(f, d)
    }
  ], n = a.reduce((p, f) => p.concat(Object.keys(f)), []), o = new Set(n.map((p) => p.charAt(0)));
  function i(p, f, d, x) {
    const C = p.filter((v) => v.startsWith(f));
    return C.length ? C.find((v) => x.length >= d + v.length && x.substring(d, d + v.length) === v ? v : !1) : !1;
  }
  function s(p, f, d = 1) {
    let x = d ? f.substring(p + 1).trim() : f.substring(0, p).trim();
    if (!x.length)
      return -1;
    if (!d) {
      const v = x.split("").reverse(), w = v.findIndex((c) => o.has(c));
      x = v.slice(w).join("");
    }
    const C = x[0];
    return a.findIndex((v) => {
      const w = Object.keys(v);
      return !!i(w, C, 0, x);
    });
  }
  function b(p, f) {
    let d = "";
    const x = f.length;
    let C = 0;
    for (let v = p; v < x; v++) {
      const w = f.charAt(v);
      if (w === "(")
        C++;
      else if (w === ")")
        C--;
      else if (C === 0 && w === " ")
        continue;
      if (C === 0 && i(n, w, v, f))
        return [d, v - 1];
      d += w;
    }
    return [d, f.length - 1];
  }
  function m(p, f = 0) {
    const d = a[f], x = p.length, C = Object.keys(d);
    let v = 0, w = !1, c = null, g = "", M = null, O, l = "", $ = "", k = "", P = "", W = 0;
    const L = (R, F) => {
      R ? k += F : g += F;
    };
    for (let R = 0; R < x; R++)
      if (l = $, $ = p.charAt(R), ($ === "'" || $ === '"') && l !== "\\" && (v === 0 && !w || v && !P)) {
        v ? P = $ : w = $, L(v, $);
        continue;
      } else if (w && ($ !== w || l === "\\") || P && ($ !== P || l === "\\")) {
        L(v, $);
        continue;
      } else if (w === $) {
        w = !1, L(v, $);
        continue;
      } else if (P === $) {
        P = !1, L(v, $);
        continue;
      } else {
        if ($ === " ")
          continue;
        if ($ === "(")
          v === 0 ? W = R : k += $, v++;
        else if ($ === ")")
          if (v--, v === 0) {
            const F = typeof g == "string" && g.startsWith("$") ? g : void 0, se = F && p.charAt(R + 1) === ".";
            let Y = "";
            se && ([Y, R] = b(R + 2, p));
            const Fe = c ? f : s(W, p, 0), Ce = s(R, p);
            Fe === -1 && Ce === -1 ? (g = _(k, -1, F, Y), typeof g == "string" && (g = k)) : c && (Fe >= Ce || Ce === -1) && f === Fe ? (M = c.bind(null, _(k, -1, F, Y)), c = null, g = "") : Ce > Fe && f === Ce ? g = _(k, -1, F, Y) : g += `(${k})${se ? `.${Y}` : ""}`, k = "";
          } else
            k += $;
        else if (v === 0 && (O = i(C, $, R, p))) {
          R === 0 && H(103, [O, p]), R += O.length - 1, R === p.length - 1 && H(104, [O, p]), c ? g && (M = c.bind(null, _(g, f)), c = d[O].bind(null, M), g = "") : M ? (c = d[O].bind(null, _(M, f)), M = null) : (c = d[O].bind(null, _(g, f)), g = "");
          continue;
        } else
          L(v, $);
      }
    return g && c && (c = c.bind(null, _(g, f))), c = !c && M ? M : c, !c && g && (c = (R, F) => typeof R == "function" ? R(F) : R, c = c.bind(null, _(g, f))), !c && !g && H(105, p), c;
  }
  function _(p, f, d, x) {
    if (d) {
      const C = _(d, a.length);
      let v, w = x ? q(`$${x}`) : !1;
      if (typeof C == "function") {
        const c = Lu(String(p)).map(
          (g) => _(g, -1)
        );
        return (g) => {
          const M = C(g);
          return typeof M != "function" ? (pe(150, d), M) : (v = M(
            ...c.map(
              (O) => typeof O == "function" ? O(g) : O
            )
          ), w && (w = w.provide((O) => {
            const l = t(O);
            return O.reduce(
              (k, P) => {
                if (P === x || (x == null ? void 0 : x.startsWith(`${P}(`))) {
                  const L = Vu(v, P);
                  k[P] = () => L;
                } else
                  k[P] = l[P];
                return k;
              },
              {}
            );
          })), w ? w() : v);
        };
      }
    } else if (typeof p == "string") {
      if (p === "true")
        return !0;
      if (p === "false")
        return !1;
      if (p === "undefined")
        return;
      if (Eu(p))
        return Ru(p.substring(1, p.length - 1));
      if (!isNaN(+p))
        return Number(p);
      if (f < a.length - 1)
        return m(p, f + 1);
      if (p.startsWith("$")) {
        const C = p.substring(1);
        return r.add(C), function(w) {
          return C in w ? w[C]() : void 0;
        };
      }
      return p;
    }
    return p;
  }
  const A = m(
    e.startsWith("$:") ? e.substring(2) : e
  ), h = Array.from(r);
  function y(p) {
    return t = p, Object.assign(
      // @ts-ignore - @rollup/plugin-typescript doesn't like this
      A.bind(null, p(h)),
      { provide: y }
    );
  }
  return Object.assign(A, {
    provide: y
  });
}
function We(e, t, r) {
  return r ? typeof r == "string" ? r.split(" ").reduce(
    (a, n) => Object.assign(a, { [n]: !0 }),
    {}
  ) : typeof r == "function" ? We(
    e,
    t,
    r(t, e)
  ) : r : {};
}
function Xa(e, t, ...r) {
  const u = r.reduce((a, n) => {
    if (!n)
      return ot(a);
    const { $reset: o, ...i } = n;
    return ot(o ? i : Object.assign(a, i));
  }, {});
  return Object.keys(
    e.hook.classes.dispatch({ property: t, classes: u }).classes
  ).filter((a) => u[a]).join(" ") || null;
}
function ot(e) {
  const t = "$remove:";
  let r = !1;
  const u = Object.keys(e).filter((a) => (e[a] && a.startsWith(t) && (r = !0), e[a]));
  return u.length > 1 && r && u.filter((n) => n.startsWith(t)).map((n) => {
    const o = n.substring(t.length);
    e[o] = !1, e[n] = !1;
  }), e;
}
function en(e, t, r) {
  const u = Re(e);
  u ? u.setErrors(t, r) : pe(651, e);
}
function tn(e, t = !0) {
  const r = Re(e);
  r ? r.clearErrors(t) : pe(652, e);
}
var Ge = "1.6.2", Lr = /* @__PURE__ */ new WeakSet();
function Ee(e, t) {
  const r = t || Object.assign(/* @__PURE__ */ new Map(), { active: !1 }), u = /* @__PURE__ */ new Map(), a = function(m) {
    var _;
    r.active && (r.has(e) || r.set(e, /* @__PURE__ */ new Set()), (_ = r.get(e)) == null || _.add(m));
  }, n = function(m) {
    return new Proxy(m, {
      get(..._) {
        return typeof _[1] == "string" && a(`prop:${_[1]}`), Reflect.get(..._);
      }
    });
  }, o = function(m) {
    return new Proxy(m, {
      get(..._) {
        return _[1] === "value" ? (A) => (a(`count:${A}`), m.value(A)) : Reflect.get(..._);
      }
    });
  }, i = function(m, _) {
    return Le(m) ? Ee(m, r) : (_ === "value" && a("commit"), _ === "_value" && a("input"), _ === "props" ? n(m) : _ === "ledger" ? o(m) : (_ === "children" && (a("child"), a("childRemoved")), m));
  }, {
    proxy: s,
    revoke: b
  } = Proxy.revocable(e, {
    get(...m) {
      switch (m[1]) {
        case "_node":
          return e;
        case "deps":
          return r;
        case "watch":
          return (A, h, y) => Dr(s, A, h, y);
        case "observe":
          return () => {
            const A = new Map(r);
            return r.clear(), r.active = !0, A;
          };
        case "stopObserve":
          return () => {
            const A = new Map(r);
            return r.active = !1, A;
          };
        case "receipts":
          return u;
        case "kill":
          return () => {
            Fr(u), Lr.add(m[2]), b();
          };
      }
      const _ = Reflect.get(...m);
      return typeof _ == "function" ? (...A) => {
        const h = _(...A);
        return i(h, m[1]);
      } : i(_, m[1]);
    }
  });
  return s;
}
function Vr(e, [t, r], u, a) {
  t.forEach((n, o) => {
    n.forEach((i) => {
      e.receipts.has(o) || e.receipts.set(o, {});
      const s = e.receipts.get(o) ?? {};
      s[i] = s[i] ?? [], s[i].push(o.on(i, u, a)), e.receipts.set(o, s);
    });
  }), r.forEach((n, o) => {
    n.forEach((i) => {
      if (e.receipts.has(o)) {
        const s = e.receipts.get(o);
        s && I(s, i) && (s[i].map(o.off), delete s[i], e.receipts.set(o, s));
      }
    });
  });
}
function Fr(e) {
  e.forEach((t, r) => {
    for (const u in t)
      t[u].map(r.off);
  }), e.clear();
}
function Dr(e, t, r, u) {
  const a = (i) => {
    const s = e.stopObserve();
    Vr(
      e,
      zr(n, s),
      () => Dr(e, t, r, u),
      u
    ), r && r(i);
  }, n = new Map(e.deps);
  e.observe();
  const o = t(e);
  o instanceof Promise ? o.then((i) => a(i)) : a(o);
}
function zr(e, t) {
  const r = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  return t.forEach((a, n) => {
    if (!e.has(n))
      r.set(n, a);
    else {
      const o = /* @__PURE__ */ new Set(), i = e.get(n);
      a.forEach(
        (s) => !(i != null && i.has(s)) && o.add(s)
      ), r.set(n, o);
    }
  }), e.forEach((a, n) => {
    if (!t.has(n))
      u.set(n, a);
    else {
      const o = /* @__PURE__ */ new Set(), i = t.get(n);
      a.forEach(
        (s) => !(i != null && i.has(s)) && o.add(s)
      ), u.set(n, o);
    }
  }), [r, u];
}
function Zr(e) {
  return Lr.has(e);
}
var Nr = function({ value: t }) {
  return ["yes", "on", "1", 1, !0, "true"].includes(t);
};
Nr.skipEmpty = !1;
var rn = Nr, un = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), u = Date.parse(String(e));
  return isNaN(u) ? !1 : u > r;
}, an = un, nn = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{L}+$", "u"),
    latin: /^[a-z]+$/i
  }, u = I(r, t) ? t : "default";
  return r[u].test(String(e));
}, on = nn, sn = function({ value: e }, t = "default") {
  const r = {
    default: /^[\p{L} ]+$/u,
    latin: /^[a-z ]+$/i
  }, u = I(r, t) ? t : "default";
  return r[u].test(String(e));
}, ln = sn, cn = function({ value: e }, t = "default") {
  const r = {
    default: /^[0-9\p{L}]+$/u,
    latin: /^[0-9a-z]+$/i
  }, u = I(r, t) ? t : "default";
  return r[u].test(String(e));
}, pn = cn, fn = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), u = Date.parse(String(e));
  return isNaN(u) ? !1 : u < r;
}, dn = fn, bn = function({ value: t }, r, u) {
  if (!isNaN(t) && !isNaN(r) && !isNaN(u)) {
    const a = 1 * t;
    r = Number(r), u = Number(u);
    const [n, o] = r <= u ? [r, u] : [u, r];
    return a >= 1 * n && a <= 1 * o;
  }
  return !1;
}, mn = bn, Wt = /(_confirm(?:ed)?)$/, gn = function(t, r, u = "loose") {
  var n;
  r || (r = Wt.test(t.name) ? t.name.replace(Wt, "") : `${t.name}_confirm`);
  const a = (n = t.at(r)) == null ? void 0 : n.value;
  return u === "strict" ? t.value === a : t.value == a;
}, hn = gn, vn = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{L}", "u"),
    latin: /[a-z]/i
  }, u = I(r, t) ? t : "default";
  return r[u].test(String(e));
}, _n = vn, yn = function({ value: e }, t = "default") {
  const r = {
    default: /[\p{L} ]/u,
    latin: /[a-z ]/i
  }, u = I(r, t) ? t : "default";
  return r[u].test(String(e));
}, wn = yn, xn = function({ value: e }, t = "default") {
  const r = {
    default: /[0-9\p{L}]/u,
    latin: /[0-9a-z]/i
  }, u = I(r, t) ? t : "default";
  return r[u].test(String(e));
}, kn = xn, $n = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{Ll}", "u"),
    latin: /[a-z]/
  }, u = I(r, t) ? t : "default";
  return r[u].test(String(e));
}, Cn = $n, Sn = function({ value: t }) {
  return /[0-9]/.test(String(t));
}, In = Sn, An = function({ value: e }) {
  return /[!-/:-@[-`{-~]/.test(String(e));
}, Mn = An, Pn = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{Lu}", "u"),
    latin: /[A-Z]/
  }, u = I(r, t) ? t : "default";
  return r[u].test(String(e));
}, jn = Pn, On = function({ value: t }, r, u) {
  r = r instanceof Date ? r.getTime() : Date.parse(r), u = u instanceof Date ? u.getTime() : Date.parse(u);
  const a = t instanceof Date ? t.getTime() : Date.parse(String(t));
  if (r && !u)
    u = r, r = Date.now();
  else if (!r || !a)
    return !1;
  return a >= r && a <= u;
}, En = On, Rn = function({ value: t }, r) {
  return r && typeof r == "string" ? Ou(r).test(String(t)) : !isNaN(Date.parse(String(t)));
}, Ln = Rn, Vn = function({ value: t }) {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(t));
}, Fn = Vn, Dn = function({ value: t }, ...r) {
  return typeof t == "string" && r.length ? r.some((u) => t.endsWith(u)) : typeof t == "string" && r.length === 0;
}, zn = Dn, Zn = function({ value: t }, ...r) {
  return r.some((u) => typeof u == "object" ? z(u, t) : u == t);
}, Nn = Zn, Hn = function({ value: t }, r = 0, u = 1 / 0) {
  r = parseInt(r), u = isNaN(parseInt(u)) ? 1 / 0 : parseInt(u);
  const a = r <= u ? r : u, n = u >= r ? u : r;
  if (typeof t == "string" || Array.isArray(t))
    return t.length >= a && t.length <= n;
  if (t && typeof t == "object") {
    const o = Object.keys(t).length;
    return o >= a && o <= n;
  }
  return !1;
}, Tn = Hn, Wn = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{Ll}+$", "u"),
    allow_non_alpha: /^[0-9\p{Ll}!-/:-@[-`{-~]+$/u,
    allow_numeric: /^[0-9\p{Ll}]+$/u,
    allow_numeric_dashes: /^[0-9\p{Ll}-]+$/u,
    latin: /^[a-z]+$/
  }, u = I(r, t) ? t : "default";
  return r[u].test(String(e));
}, qn = Wn, Kn = function({ value: t }, ...r) {
  return r.some((u) => (typeof u == "string" && u.substr(0, 1) === "/" && u.substr(-1) === "/" && (u = new RegExp(u.substr(1, u.length - 2))), u instanceof RegExp ? u.test(String(t)) : u === t));
}, Bn = Kn, Un = function({ value: t }, r = 10) {
  return Array.isArray(t) ? t.length <= r : Number(t) <= Number(r);
}, Gn = Un, Yn = function({ value: t }, r = 1) {
  return Array.isArray(t) ? t.length >= r : Number(t) >= Number(r);
}, Jn = Yn, Qn = function({ value: t }, ...r) {
  return !r.some((u) => typeof u == "object" ? z(u, t) : u === t);
}, Xn = Qn, eo = function({ value: t }) {
  return !isNaN(t);
}, to = eo, Hr = function(e, ...t) {
  return T(e.value) ? t.map((u) => {
    var a;
    return (a = e.at(u)) == null ? void 0 : a.value;
  }).some((u) => !T(u)) : !0;
};
Hr.skipEmpty = !1;
var ro = Hr, Tr = function({ value: t }, r = "default") {
  return r === "trim" && typeof t == "string" ? !T(t.trim()) : !T(t);
};
Tr.skipEmpty = !1;
var uo = Tr, ao = function({ value: t }, ...r) {
  return typeof t == "string" && r.length ? r.some((u) => t.startsWith(u)) : typeof t == "string" && r.length === 0;
}, no = ao, oo = function({ value: e }) {
  return /^[!-/:-@[-`{-~]+$/.test(String(e));
}, io = oo, so = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{Lu}+$", "u"),
    latin: /^[A-Z]+$/
  }, u = I(r, t) ? t : "default";
  return r[u].test(String(e));
}, lo = so, co = function({ value: t }, ...r) {
  try {
    const u = r.length ? r : ["http:", "https:"], a = new URL(String(t));
    return u.includes(a.protocol);
  } catch {
    return !1;
  }
}, po = co;
const fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  accepted: rn,
  alpha: on,
  alpha_spaces: ln,
  alphanumeric: pn,
  between: mn,
  confirm: hn,
  contains_alpha: _n,
  contains_alpha_spaces: wn,
  contains_alphanumeric: kn,
  contains_lowercase: Cn,
  contains_numeric: In,
  contains_symbol: Mn,
  contains_uppercase: jn,
  date_after: an,
  date_before: dn,
  date_between: En,
  date_format: Ln,
  email: Fn,
  ends_with: zn,
  is: Nn,
  length: Tn,
  lowercase: qn,
  matches: Bn,
  max: Gn,
  min: Jn,
  not: Xn,
  number: to,
  require_one: ro,
  required: uo,
  starts_with: no,
  symbol: io,
  uppercase: lo,
  url: po
}, Symbol.toStringTag, { value: "Module" }));
var wt = /* @__PURE__ */ G({
  type: "state",
  blocking: !0,
  visible: !1,
  value: !0,
  key: "validating"
});
function bo(e = {}) {
  return function(r) {
    let u = K(r.props.validationRules || {}), a = { ...e, ...u }, n = Ee(r);
    const o = { input: $e(), rerun: null, isPassing: !0 };
    let i = K(r.props.validation);
    r.on("prop:validation", ({ payload: b }) => s(b, u)), r.on(
      "prop:validationRules",
      ({ payload: b }) => s(i, b)
    );
    function s(b, m) {
      var _;
      z(Object.keys(u || {}), Object.keys(m || {})) && z(i, b) || (u = K(m), i = K(b), a = { ...e, ...u }, Fr(n.receipts), (_ = r.props.parsedRules) == null || _.forEach((A) => {
        var h;
        A.messageObserver = (h = A.messageObserver) == null ? void 0 : h.kill();
      }), r.store.filter(() => !1, "validation"), r.props.parsedRules = Kt(b, a), n.kill(), n = Ee(r), xt(n, r.props.parsedRules, o));
    }
    r.props.parsedRules = Kt(i, a), xt(n, r.props.parsedRules, o);
  };
}
function xt(e, t, r) {
  Zr(e) || (r.input = $e(), r.isPassing = !0, e.store.filter((u) => !u.meta.removeImmediately, "validation"), t.forEach(
    (u) => u.debounce && clearTimeout(u.timer)
  ), t.length && (e.store.set(wt), kt(0, t, e, r, !1, () => {
    e.store.remove(wt.key);
  })));
}
function kt(e, t, r, u, a, n) {
  const o = t[e];
  if (!o)
    return n();
  const i = u.input;
  o.state = null;
  function s(b, m) {
    u.isPassing = u.isPassing && !!m, o.queued = !1;
    const _ = r.stopObserve();
    Vr(
      r,
      zr(o.deps, _),
      function() {
        try {
          r.store.set(wt);
        } catch {
        }
        o.queued = !0, u.rerun && clearTimeout(u.rerun), u.rerun = setTimeout(
          xt,
          0,
          r,
          t,
          u
        );
      },
      "unshift"
      // We want these listeners to run before other events are emitted so the 'state.validating' will be reliable.
    ), o.deps = _, u.input === i && (o.state = m, m === !1 ? ho(r, o, a || b) : go(r, o), t.length > e + 1 ? kt(
      e + 1,
      t,
      r,
      u,
      a || b,
      n
    ) : n());
  }
  (!T(r.value) || !o.skipEmpty) && (u.isPassing || o.force) ? o.queued ? mo(o, r, (b) => {
    b instanceof Promise ? b.then((m) => s(!0, m)) : s(!1, b);
  }) : kt(e + 1, t, r, u, a, n) : T(r.value) && o.skipEmpty && u.isPassing ? (r.observe(), r.value, s(!1, u.isPassing)) : s(!1, null);
}
function mo(e, t, r) {
  e.debounce ? e.timer = setTimeout(() => {
    t.observe(), r(e.rule(t, ...e.args));
  }, e.debounce) : (t.observe(), r(e.rule(t, ...e.args)));
}
function go(e, t) {
  const r = `rule_${t.name}`;
  t.messageObserver && (t.messageObserver = t.messageObserver.kill()), I(e.store, r) && e.store.remove(r);
}
function ho(e, t, r) {
  Zr(e) || (t.messageObserver || (t.messageObserver = Ee(e._node)), t.messageObserver.watch(
    (u) => _o(
      u,
      t
    ),
    (u) => {
      const a = vo(e, t, u), n = /* @__PURE__ */ G({
        blocking: t.blocking,
        key: `rule_${t.name}`,
        meta: {
          /**
           * Use this key instead of the message root key to produce i18n validation
           * messages.
           */
          messageKey: t.name,
          /**
           * For messages that were created *by or after* a debounced or async
           * validation rule — we make note of it so we can immediately remove them
           * as soon as the next commit happens.
           */
          removeImmediately: r,
          /**
           * Determines if this message should be passed to localization.
           */
          localize: !a,
          /**
           * The arguments that will be passed to the validation rules
           */
          i18nArgs: u
        },
        type: "validation",
        value: a || "This field is not valid."
      });
      e.store.set(n);
    }
  ));
}
function vo(e, t, r) {
  const u = e.props.validationMessages && I(e.props.validationMessages, t.name) ? e.props.validationMessages[t.name] : void 0;
  return typeof u == "function" ? u(...r) : u;
}
function _o(e, t) {
  return [
    {
      node: e,
      name: Wr(e),
      args: t.args
    }
  ];
}
function Wr(e) {
  return typeof e.props.validationLabel == "function" ? e.props.validationLabel(e) : e.props.validationLabel || e.props.label || e.props.name || String(e.name);
}
var qr = "(?:[\\*+?()0-9]+)", Kr = "[a-zA-Z][a-zA-Z0-9_]+", yo = new RegExp(
  `^(${qr}?${Kr})(?:\\:(.*)+)?$`,
  "i"
), wo = new RegExp(`^(${qr})(${Kr})$`, "i"), xo = /([\*+?]+)?(\(\d+\))([\*+?]+)?/, qt = /\(\d+\)/, ko = {
  blocking: !0,
  debounce: 0,
  force: !1,
  skipEmpty: !0,
  name: ""
};
function Kt(e, t) {
  return e ? (typeof e == "string" ? $o(e) : we(e)).reduce((u, a) => {
    let n = a.shift();
    const o = {};
    if (typeof n == "string") {
      const [i, s] = So(n);
      I(t, i) && (n = t[i], Object.assign(o, s));
    }
    return typeof n == "function" && u.push({
      rule: n,
      args: a,
      timer: 0,
      state: null,
      queued: !0,
      deps: /* @__PURE__ */ new Map(),
      ...ko,
      ...Io(o, n)
    }), u;
  }, []) : [];
}
function $o(e) {
  return e.split("|").reduce((t, r) => {
    const u = Co(r);
    return u && t.push(u), t;
  }, []);
}
function Co(e) {
  const t = e.trim();
  if (t) {
    const r = t.match(yo);
    if (r && typeof r[1] == "string") {
      const u = r[1].trim(), a = r[2] && typeof r[2] == "string" ? r[2].split(",").map((n) => n.trim()) : [];
      return [u, ...a];
    }
  }
  return !1;
}
function So(e) {
  const t = e.match(wo);
  if (!t)
    return [e, { name: e }];
  const r = {
    "*": { force: !0 },
    "+": { skipEmpty: !1 },
    "?": { blocking: !1 }
  }, [, u, a] = t, n = qt.test(u) ? u.match(xo) || [] : [, u];
  return [
    a,
    [n[1], n[2], n[3]].reduce(
      (o, i) => (i && (qt.test(i) ? o.debounce = parseInt(i.substr(1, i.length - 1)) : i.split("").forEach(
        (s) => I(r, s) && Object.assign(o, r[s])
      )), o),
      { name: a }
    )
  ];
}
function Io(e, t) {
  return e.name || (e.name = t.ruleName || t.name), ["skipEmpty", "force", "debounce", "blocking"].reduce(
    (r, u) => (I(t, u) && !I(r, u) && Object.assign(r, {
      [u]: t[u]
    }), r),
    e
  );
}
function j(e) {
  return e[0].toUpperCase() + e.substr(1);
}
function Bt(e, t = "or") {
  return e.reduce((r, u, a) => (r += u, a <= e.length - 2 && e.length > 2 && (r += ", "), a === e.length - 2 && (r += `${e.length === 2 ? " " : ""}${t} `), r), "");
}
function Ne(e) {
  const t = typeof e == "string" ? new Date(Date.parse(e)) : e;
  return t instanceof Date ? new Intl.DateTimeFormat(void 0, {
    dateStyle: "medium",
    timeZone: "UTC"
  }).format(t) : "(unknown)";
}
function Ao(e, t) {
  return Number(e) >= Number(t) ? [t, e] : [e, t];
}
var Mo = {
  /**
   * Shown on a button for adding additional items.
   */
  add: "Add",
  /**
   * Shown when a button to remove items is visible.
   */
  remove: "Remove",
  /**
   * Shown when there are multiple items to remove at the same time.
   */
  removeAll: "Remove all",
  /**
   * Shown when all fields are not filled out correctly.
   */
  incomplete: "Sorry, not all fields are filled out correctly.",
  /**
   * Shown in a button inside a form to submit the form.
   */
  submit: "Submit",
  /**
   * Shown when no files are selected.
   */
  noFiles: "No file chosen",
  /**
   * Shown on buttons that move fields up in a list.
   */
  moveUp: "Move up",
  /**
   * Shown on buttons that move fields down in a list.
   */
  moveDown: "Move down",
  /**
   * Shown when something is actively loading.
   */
  isLoading: "Loading...",
  /**
   * Shown when there is more to load.
   */
  loadMore: "Load more",
  /**
   * Show on buttons that navigate state forward
   */
  next: "Next",
  /**
   * Show on buttons that navigate state backward
   */
  prev: "Previous",
  /**
   * Shown when adding all values.
   */
  addAllValues: "Add all values",
  /**
   * Shown when adding selected values.
   */
  addSelectedValues: "Add selected values",
  /**
   * Shown when removing all values.
   */
  removeAllValues: "Remove all values",
  /**
   * Shown when removing selected values.
   */
  removeSelectedValues: "Remove selected values",
  /**
   * Shown when there is a date to choose.
   */
  chooseDate: "Choose date",
  /**
   * Shown when there is a date to change.
   */
  changeDate: "Change date",
  /**
   * Shown above error summaries when someone attempts to submit a form with
   * errors and the developer has implemented `<FormKitSummary />`.
   */
  summaryHeader: "There were errors in your form.",
  /*
   * Shown when there is something to close
   */
  close: "Close",
  /**
   * Shown when there is something to open.
   */
  open: "Open"
}, Po = {
  /**
   * The value is not an accepted value.
   * @see {@link https://formkit.com/essentials/validation#accepted}
   */
  accepted({ name: e }) {
    return `Please accept the ${e}.`;
  },
  /**
   * The date is not after
   * @see {@link https://formkit.com/essentials/validation#date-after}
   */
  date_after({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${j(e)} must be after ${Ne(t[0])}.` : `${j(e)} must be in the future.`;
  },
  /**
   * The value is not a letter.
   * @see {@link https://formkit.com/essentials/validation#alpha}
   */
  alpha({ name: e }) {
    return `${j(e)} can only contain alphabetical characters.`;
  },
  /**
   * The value is not alphanumeric
   * @see {@link https://formkit.com/essentials/validation#alphanumeric}
   */
  alphanumeric({ name: e }) {
    return `${j(e)} can only contain letters and numbers.`;
  },
  /**
   * The value is not letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#alpha-spaces}
   */
  alpha_spaces({ name: e }) {
    return `${j(e)} can only contain letters and spaces.`;
  },
  /**
   * The value have no letter.
   * @see {@link https://formkit.com/essentials/validation#contains_alpha}
   */
  contains_alpha({ name: e }) {
    return `${j(e)} must contain alphabetical characters.`;
  },
  /**
   * The value have no alphanumeric
   * @see {@link https://formkit.com/essentials/validation#contains_alphanumeric}
   */
  contains_alphanumeric({ name: e }) {
    return `${j(e)} must contain letters or numbers.`;
  },
  /**
   * The value have no letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#contains_alpha-spaces}
   */
  contains_alpha_spaces({ name: e }) {
    return `${j(e)} must contain letters or spaces.`;
  },
  /**
   * The value have no symbol
   * @see {@link https://formkit.com/essentials/validation#contains_symbol}
   */
  contains_symbol({ name: e }) {
    return `${j(e)} must contain a symbol.`;
  },
  /**
   * The value have no uppercase
   * @see {@link https://formkit.com/essentials/validation#contains_uppercase}
   */
  contains_uppercase({ name: e }) {
    return `${j(e)} must contain an uppercase letter.`;
  },
  /**
   * The value have no lowercase
   * @see {@link https://formkit.com/essentials/validation#contains_lowercase}
   */
  contains_lowercase({ name: e }) {
    return `${j(e)} must contain a lowercase letter.`;
  },
  /**
   *  The value have no numeric
   * @see {@link https://formkit.com/essentials/validation#contains_numeric}
   */
  contains_numeric({ name: e }) {
    return `${j(e)} must contain numbers.`;
  },
  /**
   * The value is not symbol
   * @see {@link https://formkit.com/essentials/validation#symbol}
   */
  symbol({ name: e }) {
    return `${j(e)} must be a symbol.`;
  },
  /**
   * The value is not uppercase
   * @see {@link https://formkit.com/essentials/validation#uppercase}
   */
  uppercase({ name: e }) {
    return `${j(e)} can only contain uppercase letters.`;
  },
  /**
   * The value is not lowercase
   * @see {@link https://formkit.com/essentials/validation#lowercase}
   */
  lowercase({ name: e, args: t }) {
    let r = "";
    return Array.isArray(t) && t.length && (t[0] === "allow_non_alpha" && (r = ", numbers and symbols"), t[0] === "allow_numeric" && (r = " and numbers"), t[0] === "allow_numeric_dashes" && (r = ", numbers and dashes")), `${j(e)} can only contain lowercase letters${r}.`;
  },
  /**
   * The date is not before
   * @see {@link https://formkit.com/essentials/validation#date-before}
   */
  date_before({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${j(e)} must be before ${Ne(t[0])}.` : `${j(e)} must be in the past.`;
  },
  /**
   * The value is not between two numbers
   * @see {@link https://formkit.com/essentials/validation#between}
   */
  between({ name: e, args: t }) {
    if (isNaN(t[0]) || isNaN(t[1]))
      return "This field was configured incorrectly and can’t be submitted.";
    const [r, u] = Ao(t[0], t[1]);
    return `${j(e)} must be between ${r} and ${u}.`;
  },
  /**
   * The confirmation field does not match
   * @see {@link https://formkit.com/essentials/validation#confirm}
   */
  confirm({ name: e }) {
    return `${j(e)} does not match.`;
  },
  /**
   * The value is not a valid date
   * @see {@link https://formkit.com/essentials/validation#date-format}
   */
  date_format({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${j(e)} is not a valid date, please use the format ${t[0]}` : "This field was configured incorrectly and can’t be submitted";
  },
  /**
   * Is not within expected date range
   * @see {@link https://formkit.com/essentials/validation#date-between}
   */
  date_between({ name: e, args: t }) {
    return `${j(e)} must be between ${Ne(t[0])} and ${Ne(t[1])}`;
  },
  /**
   * Shown when the user-provided value is not a valid email address.
   * @see {@link https://formkit.com/essentials/validation#email}
   */
  email: "Please enter a valid email address.",
  /**
   * Does not end with the specified value
   * @see {@link https://formkit.com/essentials/validation#ends-with}
   */
  ends_with({ name: e, args: t }) {
    return `${j(e)} doesn’t end with ${Bt(t)}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#is}
   */
  is({ name: e }) {
    return `${j(e)} is not an allowed value.`;
  },
  /**
   * Does not match specified length
   * @see {@link https://formkit.com/essentials/validation#length}
   */
  length({ name: e, args: [t = 0, r = 1 / 0] }) {
    const u = Number(t) <= Number(r) ? t : r, a = Number(r) >= Number(t) ? r : t;
    return u == 1 && a === 1 / 0 ? `${j(e)} must be at least one character.` : u == 0 && a ? `${j(e)} must be less than or equal to ${a} characters.` : u === a ? `${j(e)} should be ${a} characters long.` : u && a === 1 / 0 ? `${j(e)} must be greater than or equal to ${u} characters.` : `${j(e)} must be between ${u} and ${a} characters.`;
  },
  /**
   * Value is not a match
   * @see {@link https://formkit.com/essentials/validation#matches}
   */
  matches({ name: e }) {
    return `${j(e)} is not an allowed value.`;
  },
  /**
   * Exceeds maximum allowed value
   * @see {@link https://formkit.com/essentials/validation#max}
   */
  max({ name: e, node: { value: t }, args: r }) {
    return Array.isArray(t) ? `Cannot have more than ${r[0]} ${e}.` : `${j(e)} must be no more than ${r[0]}.`;
  },
  /**
   * The (field-level) value does not match specified mime type
   * @see {@link https://formkit.com/essentials/validation#mime}
   */
  mime({ name: e, args: t }) {
    return t[0] ? `${j(e)} must be of the type: ${t[0]}` : "No file formats allowed.";
  },
  /**
   * Does not fulfill minimum allowed value
   * @see {@link https://formkit.com/essentials/validation#min}
   */
  min({ name: e, node: { value: t }, args: r }) {
    return Array.isArray(t) ? `Cannot have fewer than ${r[0]} ${e}.` : `${j(e)} must be at least ${r[0]}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#not}
   */
  not({ name: e, node: { value: t } }) {
    return `“${t}” is not an allowed ${e}.`;
  },
  /**
   *  Is not a number
   * @see {@link https://formkit.com/essentials/validation#number}
   */
  number({ name: e }) {
    return `${j(e)} must be a number.`;
  },
  /**
   * Require one field.
   * @see {@link https://formkit.com/essentials/validation#require-one}
   */
  require_one: ({ name: e, node: t, args: r }) => {
    const u = r.map((a) => {
      const n = t.at(a);
      return n ? Wr(n) : !1;
    }).filter((a) => !!a);
    return u.unshift(e), `${u.join(" or ")} is required.`;
  },
  /**
   * Required field.
   * @see {@link https://formkit.com/essentials/validation#required}
   */
  required({ name: e }) {
    return `${j(e)} is required.`;
  },
  /**
   * Does not start with specified value
   * @see {@link https://formkit.com/essentials/validation#starts-with}
   */
  starts_with({ name: e, args: t }) {
    return `${j(e)} doesn’t start with ${Bt(t)}.`;
  },
  /**
   * Is not a url
   * @see {@link https://formkit.com/essentials/validation#url}
   */
  url() {
    return "Please enter a valid URL.";
  },
  /**
   * Shown when the date is invalid.
   */
  invalidDate: "The selected date is invalid."
}, jo = { ui: Mo, validation: Po }, Ut = /* @__PURE__ */ new Set();
function Oo(e) {
  return function(r) {
    Ut.add(r), r.on("destroying", () => Ut.delete(r));
    let u = Gt(r.config.locale, e), a = u ? e[u] : {};
    r.on("prop:locale", ({ payload: n }) => {
      u = Gt(n, e), a = u ? e[u] : {}, r.store.touch();
    }), r.on("prop:label", () => r.store.touch()), r.on("prop:validationLabel", () => r.store.touch()), r.hook.text((n, o) => {
      var s, b;
      const i = ((s = n.meta) == null ? void 0 : s.messageKey) || n.key;
      if (I(a, n.type) && I(a[n.type], i)) {
        const m = a[n.type][i];
        typeof m == "function" ? n.value = Array.isArray((b = n.meta) == null ? void 0 : b.i18nArgs) ? m(...n.meta.i18nArgs) : m(n) : n.value = m;
      }
      return o(n);
    });
  };
}
function Gt(e, t) {
  if (I(t, e))
    return e;
  const [r] = e.split("-");
  if (I(t, r))
    return r;
  for (const u in t)
    return u;
  return !1;
}
function Eo(...e) {
  const t = e.reduce(
    (u, a) => ne(u, a),
    {}
  ), r = () => {
  };
  return r.library = function(u) {
    const a = ge(u.props.type);
    I(t, a) && u.define(t[a]);
  }, r;
}
var Ro = [
  "classes",
  "config",
  "delay",
  "errors",
  "id",
  "index",
  "inputErrors",
  "library",
  "modelValue",
  "onUpdate:modelValue",
  "name",
  "number",
  "parent",
  "plugins",
  "sectionsSchema",
  "type",
  "validation",
  "validationLabel",
  "validationMessages",
  "validationRules",
  // Runtime event props:
  "onInput",
  "onInputRaw",
  "onUpdate:modelValue",
  "onNode",
  "onSubmit",
  "onSubmitInvalid",
  "onSubmitRaw"
];
function ut(e) {
  return e && typeof e == "object" && "group" in e && Array.isArray(e.options);
}
function Br(e, t = { count: 1 }) {
  return Array.isArray(e) ? e.map(
    (r) => {
      if (typeof r == "string" || typeof r == "number")
        return {
          label: String(r),
          value: String(r)
        };
      if (typeof r == "object") {
        if ("group" in r)
          return r.options = Br(r.options || [], t), r;
        "value" in r && typeof r.value != "string" && Object.assign(r, {
          value: `__mask_${t.count++}`,
          __original: r.value
        });
      }
      return r;
    }
  ) : Object.keys(e).map((r) => ({
    label: e[r],
    value: r
  }));
}
function ce(e, t, r = !1) {
  if (Array.isArray(e)) {
    for (const u of e)
      if (!(typeof u != "object" && u)) {
        if (ut(u)) {
          const a = ce(u.options, t, !0);
          if (a !== void 0)
            return a;
        } else if (t == u.value)
          return "__original" in u ? u.__original : u.value;
      }
  }
  return r ? void 0 : t;
}
function ke(e, t) {
  return e === null && t === void 0 || e === void 0 && t === null ? !1 : e == t ? !0 : ye(e) && ye(t) ? z(e, t) : !1;
}
function Et(e) {
  e.hook.prop((t, r) => {
    var u;
    return t.prop === "options" && (typeof t.value == "function" ? (e.props.optionsLoader = t.value, t.value = []) : ((u = e.props)._normalizeCounter ?? (u._normalizeCounter = { count: 1 }), t.value = Br(t.value, e.props._normalizeCounter))), r(t);
  });
}
// @__NO_SIDE_EFFECTS__
function S(e, t, r = !1) {
  return (...u) => {
    const a = (n) => {
      const o = !t || typeof t == "string" ? { $el: t } : t();
      return (_t(o) || yt(o)) && (o.meta || (o.meta = { section: e }), u.length && !o.children && (o.children = [
        ...u.map(
          (i) => typeof i == "function" ? i(n) : i
        )
      ]), _t(o) && (o.attrs = {
        class: `$classes.${e}`,
        ...o.attrs || {}
      })), {
        if: `$slots.${e}`,
        then: `$slots.${e}`,
        else: e in n ? /* @__PURE__ */ Ae(o, n[e]) : o
      };
    };
    return a._s = e, r ? /* @__PURE__ */ Lo(a) : a;
  };
}
// @__NO_SIDE_EFFECTS__
function Lo(e) {
  return (t) => [e(t)];
}
function Ye(e) {
  return !!(e && typeof e == "object" && ("$el" in e || "$cmp" in e || "$formkit" in e));
}
// @__NO_SIDE_EFFECTS__
function Ae(e, t = {}) {
  return typeof e == "string" ? Ye(t) || typeof t == "string" ? t : e : Array.isArray(e) ? Ye(t) ? t : e : ne(e, t);
}
var Vo = /* @__PURE__ */ S("actions", () => ({
  $el: "div",
  if: "$actions"
})), Je = /* @__PURE__ */ S("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "$type",
    name: "$node.props.altName || $node.name",
    disabled: "$option.attrs.disabled || $disabled",
    onInput: "$handlers.toggleChecked",
    checked: "$fns.eq($_value, $onValue)",
    onBlur: "$handlers.blur",
    value: "$: true",
    id: "$id",
    "aria-describedby": {
      if: "$options.length",
      then: {
        if: "$option.help",
        then: '$: "help-" + $option.attrs.id',
        else: void 0
      },
      else: {
        if: "$help",
        then: '$: "help-" + $id',
        else: void 0
      }
    }
  }
})), Ur = /* @__PURE__ */ S("optionHelp", () => ({
  $el: "div",
  if: "$option.help",
  attrs: {
    id: '$: "help-" + $option.attrs.id'
  }
})), Qe = /* @__PURE__ */ S("inner", "span"), Xe = /* @__PURE__ */ S("label", "span"), Gr = /* @__PURE__ */ S("option", () => ({
  $el: "li",
  for: ["option", "$options"],
  attrs: {
    "data-disabled": "$option.attrs.disabled || $disabled || undefined"
  }
})), Yr = /* @__PURE__ */ S("options", "ul"), et = /* @__PURE__ */ S("wrapper", () => ({
  $el: "label",
  attrs: {
    "data-disabled": {
      if: "$options.length",
      then: void 0,
      else: "$disabled || undefined"
    },
    "data-checked": {
      if: "$options == undefined",
      then: "$fns.eq($_value, $onValue) || undefined",
      else: "$fns.isChecked($option.value) || undefined"
    }
  }
})), Fo = /* @__PURE__ */ S("input", () => ({
  $el: "button",
  bind: "$attrs",
  attrs: {
    type: "$type",
    disabled: "$disabled",
    name: "$node.name",
    id: "$id"
  }
})), Do = /* @__PURE__ */ S("default", null), tt = /* @__PURE__ */ S("decorator", () => ({
  $el: "span",
  attrs: {
    "aria-hidden": "true"
  }
})), Jr = /* @__PURE__ */ S("fieldset", () => ({
  $el: "fieldset",
  attrs: {
    id: "$id",
    "aria-describedby": {
      if: "$help",
      then: '$: "help-" + $id',
      else: void 0
    }
  }
})), zo = /* @__PURE__ */ S("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "file",
    disabled: "$disabled",
    name: "$node.name",
    onChange: "$handlers.files",
    onBlur: "$handlers.blur",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), Zo = /* @__PURE__ */ S("fileItem", () => ({
  $el: "li",
  for: ["file", "$value"]
})), No = /* @__PURE__ */ S("fileList", () => ({
  $el: "ul",
  if: "$value.length",
  attrs: {
    "data-has-multiple": "$_hasMultipleFiles"
  }
})), Ho = /* @__PURE__ */ S("fileName", () => ({
  $el: "span",
  attrs: {
    class: "$classes.fileName"
  }
})), Yt = /* @__PURE__ */ S("fileRemove", () => ({
  $el: "button",
  attrs: {
    type: "button",
    onClick: "$handlers.resetFiles"
  }
})), To = /* @__PURE__ */ S("form", () => ({
  $el: "form",
  bind: "$attrs",
  attrs: {
    id: "$id",
    name: "$node.name",
    onSubmit: "$handlers.submit",
    "data-loading": "$state.loading || undefined"
  }
})), Rt = /* @__PURE__ */ S("wrapper", null, !0), re = /* @__PURE__ */ S("help", () => ({
  $el: "div",
  if: "$help",
  attrs: {
    id: '$: "help-" + $id'
  }
})), V = (e, t) => (/* @__PURE__ */ S(`${e}Icon`, () => {
  const r = `_raw${e.charAt(0).toUpperCase()}${e.slice(1)}Icon`;
  return {
    if: `$${e}Icon && $${r}`,
    $el: `${t || "span"}`,
    attrs: {
      class: `$classes.${e}Icon + " " + $classes.icon`,
      innerHTML: `$${r}`,
      onClick: `$handlers.iconClick(${e})`,
      role: `$fns.iconRole(${e})`,
      tabindex: `$fns.iconRole(${e}) === "button" && "0" || undefined`,
      for: {
        if: `${t === "label"}`,
        then: "$id"
      }
    }
  };
}))(), at = /* @__PURE__ */ S("inner", "div"), nt = /* @__PURE__ */ S("label", () => ({
  $el: "label",
  if: "$label",
  attrs: {
    for: "$id"
  }
})), Qr = /* @__PURE__ */ S("legend", () => ({
  $el: "legend",
  if: "$label"
})), oe = /* @__PURE__ */ S("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: "$id + '-' + $message.key",
    "data-message-type": "$message.type"
  }
})), ie = /* @__PURE__ */ S("messages", () => ({
  $el: "ul",
  if: "$defaultMessagePlacement && $fns.length($messages)"
})), Wo = /* @__PURE__ */ S("noFiles", () => ({
  $el: "span",
  if: "$value.length == 0"
})), qo = /* @__PURE__ */ S("optGroup", () => ({
  $el: "optgroup",
  bind: "$option.attrs",
  attrs: {
    label: "$option.group"
  }
})), Jt = /* @__PURE__ */ S("option", () => ({
  $el: "option",
  bind: "$option.attrs",
  attrs: {
    class: "$classes.option",
    value: "$option.value",
    selected: "$fns.isSelected($option)"
  }
})), Qt = /* @__PURE__ */ S("options", () => ({
  $el: null,
  if: "$options.length",
  for: ["option", "$option.options || $options"]
})), fe = /* @__PURE__ */ S("outer", () => ({
  $el: "div",
  attrs: {
    key: "$id",
    "data-family": "$family || undefined",
    "data-type": "$type",
    "data-multiple": '$attrs.multiple || ($type != "select" && $options != undefined) || undefined',
    "data-has-multiple": "$_hasMultipleFiles",
    "data-disabled": '$: ($disabled !== "false" && $disabled) || undefined',
    "data-empty": "$state.empty || undefined",
    "data-complete": "$state.complete || undefined",
    "data-invalid": "$state.valid === false && $state.validationVisible || undefined",
    "data-errors": "$state.errors || undefined",
    "data-submitted": "$state.submitted || undefined",
    "data-prefix-icon": "$_rawPrefixIcon !== undefined || undefined",
    "data-suffix-icon": "$_rawSuffixIcon !== undefined || undefined",
    "data-prefix-icon-click": "$onPrefixIconClick !== undefined || undefined",
    "data-suffix-icon-click": "$onSuffixIconClick !== undefined || undefined"
  }
})), ue = /* @__PURE__ */ S("prefix", null), Ko = /* @__PURE__ */ S("input", () => ({
  $el: "select",
  bind: "$attrs",
  attrs: {
    id: "$id",
    "data-placeholder": "$fns.showPlaceholder($_value, $placeholder)",
    disabled: "$disabled",
    class: "$classes.input",
    name: "$node.name",
    onChange: "$handlers.onChange",
    onInput: "$handlers.selectInput",
    onBlur: "$handlers.blur",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), Bo = /* @__PURE__ */ S("submit", () => ({
  $cmp: "FormKit",
  bind: "$submitAttrs",
  props: {
    type: "submit",
    label: "$submitLabel"
  }
})), ae = /* @__PURE__ */ S("suffix", null), Xr = /* @__PURE__ */ S("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "$type",
    disabled: "$disabled",
    name: "$node.name",
    onInput: "$handlers.DOMInput",
    onBlur: "$handlers.blur",
    value: "$_value",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), Uo = /* @__PURE__ */ S("input", () => ({
  $el: "textarea",
  bind: "$attrs",
  attrs: {
    disabled: "$disabled",
    name: "$node.name",
    onInput: "$handlers.DOMInput",
    onBlur: "$handlers.blur",
    value: "$_value",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  },
  children: "$initialValue"
})), Ve = /* @__PURE__ */ S("wrapper", "div"), Go = 0;
function eu(e) {
  (e.type === "group" || e.type === "list") && e.plugins.add(Yo);
}
function Yo(e) {
  e.props.type === "radio" && (e.addProps(["altName"]), e.props.altName = `${e.name}_${Go++}`);
}
function tu(e) {
  return function(t, r) {
    return t.prop === "options" && Array.isArray(t.value) && (t.value = t.value.map((u) => {
      var a;
      return (a = u.attrs) != null && a.id ? u : ne(u, {
        attrs: {
          id: `${e.props.id}-option-${St(String(u.value))}`
        }
      });
    }), e.props.type === "checkbox" && !Array.isArray(e.value) && (e.isCreated ? e.input([], !1) : e.on("created", () => {
      Array.isArray(e.value) || e.input([], !1);
    }))), r(t);
  };
}
function Jo(e, t) {
  const r = t.target;
  if (r instanceof HTMLInputElement) {
    const u = Array.isArray(e.props.options) ? ce(e.props.options, r.value) : r.value;
    Array.isArray(e.props.options) && e.props.options.length ? Array.isArray(e._value) ? e._value.some((a) => ke(u, a)) ? e.input(
      e._value.filter(
        (a) => !ke(u, a)
      )
    ) : e.input([...e._value, u]) : e.input([u]) : r.checked ? e.input(e.props.onValue) : e.input(e.props.offValue);
  }
}
function Qo(e, t) {
  var r, u;
  return (r = e.context) == null || r.value, (u = e.context) == null || u._value, Array.isArray(e._value) ? e._value.some(
    (a) => ke(ce(e.props.options, t), a)
  ) : !1;
}
function Xo(e) {
  e.on("created", () => {
    var t, r;
    (t = e.context) != null && t.handlers && (e.context.handlers.toggleChecked = Jo.bind(null, e)), (r = e.context) != null && r.fns && (e.context.fns.isChecked = Qo.bind(null, e)), I(e.props, "onValue") || (e.props.onValue = !0), I(e.props, "offValue") || (e.props.offValue = !1);
  }), e.hook.prop(tu(e));
}
function he(e, t) {
  return (r) => {
    r.props[`${e}Icon`] === void 0 && (r.props[`${e}Icon`] = t.startsWith("<svg") ? t : `default:${t}`);
  };
}
function Lt(e) {
  e.on("created", () => {
    "disabled" in e.props && (e.props.disabled = B(e.props.disabled), e.config.disabled = B(e.props.disabled));
  }), e.hook.prop(({ prop: t, value: r }, u) => (r = t === "disabled" ? B(r) : r, u({ prop: t, value: r }))), e.on("prop:disabled", ({ payload: t }) => {
    e.config.disabled = B(t);
  });
}
function qe(e, t) {
  return (r) => {
    r.store.set(
      /* @__PURE__ */ G({
        key: e,
        type: "ui",
        value: t || e,
        meta: {
          localize: !0,
          i18nArgs: [r]
        }
      })
    );
  };
}
var it = typeof window < "u";
function ru(e) {
  e.target instanceof HTMLElement && e.target.hasAttribute("data-file-hover") && e.target.removeAttribute("data-file-hover");
}
function Xt(e, t) {
  t.target instanceof HTMLInputElement ? e === "dragover" && t.target.setAttribute("data-file-hover", "true") : t.preventDefault(), e === "drop" && ru(t);
}
function ei(e) {
  qe("noFiles", "Select file")(e), qe("removeAll", "Remove all")(e), qe("remove")(e), e.addProps(["_hasMultipleFiles"]), it && (window._FormKit_File_Drop || (window.addEventListener(
    "dragover",
    Xt.bind(null, "dragover")
  ), window.addEventListener("drop", Xt.bind(null, "drop")), window.addEventListener("dragleave", ru), window._FormKit_File_Drop = !0)), e.hook.input((t, r) => r(Array.isArray(t) ? t : [])), e.on("input", ({ payload: t }) => {
    e.props._hasMultipleFiles = Array.isArray(t) && t.length > 1 ? !0 : void 0;
  }), e.on("reset", () => {
    if (e.props.id && it) {
      const t = document.getElementById(e.props.id);
      t && (t.value = "");
    }
  }), e.on("created", () => {
    Array.isArray(e.value) || e.input([], !1), e.context && (e.context.handlers.resetFiles = (t) => {
      if (t.preventDefault(), e.input([]), e.props.id && it) {
        const r = document.getElementById(e.props.id);
        r && (r.value = ""), r == null || r.focus();
      }
    }, e.context.handlers.files = (t) => {
      var u, a;
      const r = [];
      if (t.target instanceof HTMLInputElement && t.target.files) {
        for (let n = 0; n < t.target.files.length; n++) {
          let o;
          (o = t.target.files.item(n)) && r.push({ name: o.name, file: o });
        }
        e.input(r);
      }
      e.context && (e.context.files = r), typeof ((u = e.props.attrs) == null ? void 0 : u.onChange) == "function" && ((a = e.props.attrs) == null || a.onChange(t));
    });
  });
}
var er = /* @__PURE__ */ G({
  key: "loading",
  value: !0,
  visible: !1
});
async function ti(e, t) {
  const r = Math.random();
  if (e.props._submitNonce = r, t.preventDefault(), await e.settled, e.ledger.value("validating") && (e.store.set(er), await e.ledger.settled("validating"), e.store.remove("loading"), e.props._submitNonce !== r))
    return;
  const u = (a) => a.store.set(
    /* @__PURE__ */ G({
      key: "submitted",
      value: !0,
      visible: !1
    })
  );
  if (e.walk(u), u(e), e.emit("submit-raw"), typeof e.props.onSubmitRaw == "function" && e.props.onSubmitRaw(t, e), e.ledger.value("blocking"))
    typeof e.props.onSubmitInvalid == "function" && e.props.onSubmitInvalid(e), e.props.incompleteMessage !== !1 && uu(e);
  else if (typeof e.props.onSubmit == "function") {
    const a = e.props.onSubmit(
      e.hook.submit.dispatch(we(e.value)),
      e
    );
    if (a instanceof Promise) {
      const n = e.props.disabled === void 0 && e.props.submitBehavior !== "live";
      n && (e.props.disabled = !0), e.store.set(er), await a, n && (e.props.disabled = !1), e.store.remove("loading");
    }
  } else
    t.target instanceof HTMLFormElement && t.target.submit();
}
function uu(e) {
  e.store.set(
    /* @__PURE__ */ G({
      blocking: !1,
      key: "incomplete",
      meta: {
        localize: e.props.incompleteMessage === void 0,
        i18nArgs: [{ node: e }],
        showAsMessage: !0
      },
      type: "ui",
      value: e.props.incompleteMessage || "Form incomplete."
    })
  );
}
function ri(e) {
  var t;
  e.props.isForm = !0, e.ledger.count("validating", (r) => r.key === "validating"), (t = e.props).submitAttrs ?? (t.submitAttrs = {
    disabled: e.props.disabled
  }), e.on("prop:disabled", ({ payload: r }) => {
    e.props.submitAttrs = { ...e.props.submitAttrs, disabled: r };
  }), e.on("created", () => {
    var r;
    (r = e.context) != null && r.handlers && (e.context.handlers.submit = ti.bind(null, e)), I(e.props, "actions") || (e.props.actions = !0);
  }), e.on("prop:incompleteMessage", () => {
    e.store.incomplete && uu(e);
  }), e.on("settled:blocking", () => e.store.remove("incomplete"));
}
function ui(e) {
  e.props.ignore === void 0 && (e.props.ignore = !0, e.parent = null);
}
function ai(e) {
  e.on("created", () => {
    e.context && (e.context.initialValue = e.value || "");
  });
}
function au(e) {
  if (typeof e.props.number > "u")
    return;
  const t = ["number", "range", "hidden"].includes(e.props.type);
  e.hook.input((r, u) => {
    if (r === "")
      return u(void 0);
    const a = e.props.number === "integer" ? parseInt(r) : parseFloat(r);
    return Number.isFinite(a) ? u(a) : u(t ? void 0 : r);
  });
}
function ni(e, t) {
  t.target instanceof HTMLInputElement && e.input(ce(e.props.options, t.target.value));
}
function oi(e, t) {
  var r, u;
  return (r = e.context) == null || r.value, (u = e.context) == null || u._value, ke(ce(e.props.options, t), e._value);
}
function ii(e) {
  e.on("created", () => {
    var t, r;
    Array.isArray(e.props.options) || pe(350, {
      node: e,
      inputType: "radio"
    }), (t = e.context) != null && t.handlers && (e.context.handlers.toggleChecked = ni.bind(null, e)), (r = e.context) != null && r.fns && (e.context.fns.isChecked = oi.bind(null, e));
  }), e.hook.prop(tu(e));
}
function si(e, t) {
  if (ut(t))
    return !1;
  e.context && e.context.value;
  const r = "__original" in t ? t.__original : t.value;
  return Array.isArray(e._value) ? e._value.some((u) => ke(u, r)) : (e._value === void 0 || e._value === null && !nu(e.props.options, null)) && t.attrs && t.attrs["data-is-placeholder"] ? !0 : ke(r, e._value);
}
function nu(e, t) {
  return e.some((r) => ut(r) ? nu(r.options, t) : ("__original" in r ? r.__original : r.value) === t);
}
async function li(e, t) {
  var r;
  typeof ((r = e.props.attrs) == null ? void 0 : r.onChange) == "function" && (await new Promise((u) => setTimeout(u, 0)), await e.settled, e.props.attrs.onChange(t));
}
function ci(e, t) {
  const r = t.target, u = r.hasAttribute("multiple") ? Array.from(r.selectedOptions).map(
    (a) => ce(e.props.options, a.value)
  ) : ce(e.props.options, r.value);
  e.input(u);
}
function tr(e, t) {
  return e.some(
    (r) => r.attrs && r.attrs["data-is-placeholder"]
  ) ? e : [
    {
      label: t,
      value: "",
      attrs: {
        hidden: !0,
        disabled: !0,
        "data-is-placeholder": "true"
      }
    },
    ...e
  ];
}
function ou(e) {
  const t = e.length > 0 ? e[0] : void 0;
  if (t)
    return ut(t) ? ou(t.options) : "__original" in t ? t.__original : t.value;
}
function pi(e) {
  e.on("created", () => {
    var r, u, a;
    const t = B((r = e.props.attrs) == null ? void 0 : r.multiple);
    !t && e.props.placeholder && Array.isArray(e.props.options) && (e.hook.prop(({ prop: n, value: o }, i) => (n === "options" && (o = tr(o, e.props.placeholder)), i({ prop: n, value: o }))), e.props.options = tr(
      e.props.options,
      e.props.placeholder
    )), t ? e.value === void 0 && e.input([], !1) : e.context && !e.context.options && (e.props.attrs = Object.assign({}, e.props.attrs, {
      value: e._value
    }), e.on("input", ({ payload: n }) => {
      e.props.attrs = Object.assign({}, e.props.attrs, {
        value: n
      });
    })), (u = e.context) != null && u.handlers && (e.context.handlers.selectInput = ci.bind(null, e), e.context.handlers.onChange = li.bind(null, e)), (a = e.context) != null && a.fns && (e.context.fns.isSelected = si.bind(null, e), e.context.fns.showPlaceholder = (n, o) => {
      if (!Array.isArray(e.props.options))
        return !1;
      const i = e.props.options.some(
        (s) => {
          if (s.attrs && "data-is-placeholder" in s.attrs)
            return !1;
          const b = "__original" in s ? s.__original : s.value;
          return z(n, b);
        }
      );
      return o && !i ? !0 : void 0;
    });
  }), e.hook.input((t, r) => {
    var u, a, n;
    return !e.props.placeholder && t === void 0 && Array.isArray((u = e.props) == null ? void 0 : u.options) && e.props.options.length && !B((n = (a = e.props) == null ? void 0 : a.attrs) == null ? void 0 : n.multiple) && (t = ou(e.props.options)), r(t);
  });
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return !!(be(e) && e.if && e.if.startsWith("$slots.") && typeof e.then == "string" && e.then.startsWith("$slots.") && "else" in e);
}
// @__NO_SIDE_EFFECTS__
function ee(e, t, r) {
  const u = (a) => {
    const n = t(a);
    if (r || Ye(n) && "if" in n || /* @__PURE__ */ $t(n)) {
      const o = {
        if: e,
        then: n
      };
      return r && (o.else = r(a)), o;
    } else
      /* @__PURE__ */ $t(n) ? Object.assign(n.else, { if: e }) : Ye(n) && Object.assign(n, { if: e });
    return n;
  };
  return u._s = $e(), u;
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  const r = (u) => {
    const a = e({});
    return /* @__PURE__ */ $t(a) ? (Array.isArray(a.else) || (a.else = /* @__PURE__ */ Ae(
      /* @__PURE__ */ Ae(a.else, t),
      e._s ? u[e._s] : {}
    )), a) : /* @__PURE__ */ Ae(
      /* @__PURE__ */ Ae(a, t),
      e._s ? u[e._s] : {}
    );
  };
  return r._s = e._s, r;
}
var rr = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ fe(
    /* @__PURE__ */ ie(/* @__PURE__ */ oe("$message.value")),
    /* @__PURE__ */ Ve(
      /* @__PURE__ */ Fo(
        /* @__PURE__ */ V("prefix"),
        /* @__PURE__ */ ue(),
        /* @__PURE__ */ Do("$label || $ui.submit.value"),
        /* @__PURE__ */ ae(),
        /* @__PURE__ */ V("suffix")
      )
    ),
    /* @__PURE__ */ re("$help")
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "button",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [qe("submit"), ui],
  /**
   * A key to use for memoizing the schema. This is used to prevent the schema
   * from needing to be stringified when performing a memo lookup.
   */
  schemaMemoKey: "h6st4epl3j8"
}, fi = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ fe(
    /* @__PURE__ */ ee(
      "$options == undefined",
      /**
       * Single checkbox structure.
       */
      /* @__PURE__ */ et(
        /* @__PURE__ */ Qe(/* @__PURE__ */ ue(), /* @__PURE__ */ Je(), /* @__PURE__ */ tt(/* @__PURE__ */ V("decorator")), /* @__PURE__ */ ae()),
        /* @__PURE__ */ ve(/* @__PURE__ */ Xe("$label"), {
          if: "$label"
        })
      ),
      /**
       * Multi checkbox structure.
       */
      /* @__PURE__ */ Jr(
        /* @__PURE__ */ Qr("$label"),
        /* @__PURE__ */ re("$help"),
        /* @__PURE__ */ Yr(
          /* @__PURE__ */ Gr(
            /* @__PURE__ */ et(
              /* @__PURE__ */ Qe(
                /* @__PURE__ */ ue(),
                /* @__PURE__ */ ve(/* @__PURE__ */ Je(), {
                  bind: "$option.attrs",
                  attrs: {
                    id: "$option.attrs.id",
                    value: "$option.value",
                    checked: "$fns.isChecked($option.value)"
                  }
                }),
                /* @__PURE__ */ tt(/* @__PURE__ */ V("decorator")),
                /* @__PURE__ */ ae()
              ),
              /* @__PURE__ */ ve(/* @__PURE__ */ Xe("$option.label"), {
                if: "$option.label"
              })
            ),
            /* @__PURE__ */ Ur("$option.help")
          )
        )
      )
    ),
    // Help text only goes under the input when it is a single.
    /* @__PURE__ */ ee("$options == undefined && $help", /* @__PURE__ */ re("$help")),
    /* @__PURE__ */ ie(/* @__PURE__ */ oe("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "box",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "onValue", "offValue", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [
    Et,
    Xo,
    he("decorator", "checkboxDecorator")
  ],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "qje02tb3gu8"
}, di = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ fe(
    /* @__PURE__ */ Ve(
      /* @__PURE__ */ nt("$label"),
      /* @__PURE__ */ at(
        /* @__PURE__ */ V("prefix", "label"),
        /* @__PURE__ */ ue(),
        /* @__PURE__ */ zo(),
        /* @__PURE__ */ No(
          /* @__PURE__ */ Zo(
            /* @__PURE__ */ V("fileItem"),
            /* @__PURE__ */ Ho("$file.name"),
            /* @__PURE__ */ ee(
              "$value.length === 1",
              /* @__PURE__ */ Yt(
                /* @__PURE__ */ V("fileRemove"),
                '$ui.remove.value + " " + $file.name'
              )
            )
          )
        ),
        /* @__PURE__ */ ee("$value.length > 1", /* @__PURE__ */ Yt("$ui.removeAll.value")),
        /* @__PURE__ */ Wo(/* @__PURE__ */ V("noFiles"), "$ui.noFiles.value"),
        /* @__PURE__ */ ae(),
        /* @__PURE__ */ V("suffix")
      )
    ),
    /* @__PURE__ */ re("$help"),
    /* @__PURE__ */ ie(/* @__PURE__ */ oe("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "text",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [
    ei,
    he("fileItem", "fileItem"),
    he("fileRemove", "fileRemove"),
    he("noFiles", "noFiles")
  ],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "9kqc4852fv8"
}, bi = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ To(
    "$slots.default",
    /* @__PURE__ */ ie(/* @__PURE__ */ oe("$message.value")),
    /* @__PURE__ */ Vo(/* @__PURE__ */ Bo())
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "group",
  /**
   * An array of extra props to accept for this input.
   */
  props: [
    "actions",
    "submit",
    "submitLabel",
    "submitAttrs",
    "submitBehavior",
    "incompleteMessage"
  ],
  /**
   * Additional features that should be added to your input
   */
  features: [ri, Lt],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "5bg016redjo"
}, mi = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Rt("$slots.default"),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "group",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [Lt, eu]
}, gi = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Xr(),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [au]
}, hi = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Rt("$slots.default"),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "list",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["sync", "dynamic"],
  /**
   * Additional features that should be added to your input
   */
  features: [Lt, eu]
}, vi = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Rt(),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: []
}, _i = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ fe(
    /* @__PURE__ */ ee(
      "$options == undefined",
      /**
       * Single radio structure.
       */
      /* @__PURE__ */ et(
        /* @__PURE__ */ Qe(/* @__PURE__ */ ue(), /* @__PURE__ */ Je(), /* @__PURE__ */ tt(/* @__PURE__ */ V("decorator")), /* @__PURE__ */ ae()),
        /* @__PURE__ */ ve(/* @__PURE__ */ Xe("$label"), {
          if: "$label"
        })
      ),
      /**
       * Multi radio structure.
       */
      /* @__PURE__ */ Jr(
        /* @__PURE__ */ Qr("$label"),
        /* @__PURE__ */ re("$help"),
        /* @__PURE__ */ Yr(
          /* @__PURE__ */ Gr(
            /* @__PURE__ */ et(
              /* @__PURE__ */ Qe(
                /* @__PURE__ */ ue(),
                /* @__PURE__ */ ve(/* @__PURE__ */ Je(), {
                  bind: "$option.attrs",
                  attrs: {
                    id: "$option.attrs.id",
                    value: "$option.value",
                    checked: "$fns.isChecked($option.value)"
                  }
                }),
                /* @__PURE__ */ tt(/* @__PURE__ */ V("decorator")),
                /* @__PURE__ */ ae()
              ),
              /* @__PURE__ */ ve(/* @__PURE__ */ Xe("$option.label"), {
                if: "$option.label"
              })
            ),
            /* @__PURE__ */ Ur("$option.help")
          )
        )
      )
    ),
    // Help text only goes under the input when it is a single.
    /* @__PURE__ */ ee("$options == undefined && $help", /* @__PURE__ */ re("$help")),
    /* @__PURE__ */ ie(/* @__PURE__ */ oe("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "box",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "onValue", "offValue", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [Et, ii, he("decorator", "radioDecorator")],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "qje02tb3gu8"
}, yi = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ fe(
    /* @__PURE__ */ Ve(
      /* @__PURE__ */ nt("$label"),
      /* @__PURE__ */ at(
        /* @__PURE__ */ V("prefix"),
        /* @__PURE__ */ ue(),
        /* @__PURE__ */ Ko(
          /* @__PURE__ */ ee(
            "$slots.default",
            () => "$slots.default",
            /* @__PURE__ */ Qt(
              /* @__PURE__ */ ee(
                "$option.group",
                /* @__PURE__ */ qo(/* @__PURE__ */ Qt(/* @__PURE__ */ Jt("$option.label"))),
                /* @__PURE__ */ Jt("$option.label")
              )
            )
          )
        ),
        /* @__PURE__ */ ee("$attrs.multiple !== undefined", () => "", /* @__PURE__ */ V("select")),
        /* @__PURE__ */ ae(),
        /* @__PURE__ */ V("suffix")
      )
    ),
    /* @__PURE__ */ re("$help"),
    /* @__PURE__ */ ie(/* @__PURE__ */ oe("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "placeholder", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [Et, pi, he("select", "select")],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "cb119h43krg"
}, wi = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ fe(
    /* @__PURE__ */ Ve(
      /* @__PURE__ */ nt("$label"),
      /* @__PURE__ */ at(
        /* @__PURE__ */ V("prefix", "label"),
        /* @__PURE__ */ ue(),
        /* @__PURE__ */ Uo(),
        /* @__PURE__ */ ae(),
        /* @__PURE__ */ V("suffix")
      )
    ),
    /* @__PURE__ */ re("$help"),
    /* @__PURE__ */ ie(/* @__PURE__ */ oe("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [ai],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "b1n0td79m9g"
}, Z = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ fe(
    /* @__PURE__ */ Ve(
      /* @__PURE__ */ nt("$label"),
      /* @__PURE__ */ at(
        /* @__PURE__ */ V("prefix", "label"),
        /* @__PURE__ */ ue(),
        /* @__PURE__ */ Xr(),
        /* @__PURE__ */ ae(),
        /* @__PURE__ */ V("suffix")
      )
    ),
    /* @__PURE__ */ re("$help"),
    /* @__PURE__ */ ie(/* @__PURE__ */ oe("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "text",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [au],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "c3cc4kflsg"
}, xi = {
  button: rr,
  submit: rr,
  checkbox: fi,
  file: di,
  form: bi,
  group: mi,
  hidden: gi,
  list: hi,
  meta: vi,
  radio: _i,
  select: yi,
  textarea: wi,
  text: Z,
  color: Z,
  date: Z,
  datetimeLocal: Z,
  email: Z,
  month: Z,
  number: Z,
  password: Z,
  search: Z,
  tel: Z,
  time: Z,
  url: Z,
  week: Z,
  range: Z
}, U = void 0, J = null, rt, iu = !1, Me = !1, ki = /* @__PURE__ */ new Promise((e) => {
  rt = () => {
    iu = !0, e();
  };
}), te = typeof window < "u" && typeof fetch < "u";
U = te ? /* @__PURE__ */ getComputedStyle(document.documentElement) : void 0;
var me = {}, st = {};
function $i(e, t, r, u) {
  t && Object.assign(me, t), te && !Me && (U != null && U.getPropertyValue("--formkit-theme")) ? (rt(), Me = !0) : e && !Me && te ? Ci(e) : !Me && te && rt();
  const a = function(o) {
    var i, s;
    o.addProps(["iconLoader", "iconLoaderUrl"]), o.props.iconHandler = ur(
      (i = o.props) != null && i.iconLoader ? o.props.iconLoader : u,
      (s = o.props) != null && s.iconLoaderUrl ? o.props.iconLoaderUrl : r
    ), Ai(o, o.props.iconHandler), o.on("created", () => {
      var b, m;
      (b = o == null ? void 0 : o.context) != null && b.handlers && (o.context.handlers.iconClick = (_) => {
        const A = `on${_.charAt(0).toUpperCase()}${_.slice(1)}IconClick`, h = o.props[A];
        if (h && typeof h == "function")
          return (y) => h(o, y);
      }), (m = o == null ? void 0 : o.context) != null && m.fns && (o.context.fns.iconRole = (_) => {
        const A = `on${_.charAt(0).toUpperCase()}${_.slice(1)}IconClick`;
        return typeof o.props[A] == "function" ? "button" : null;
      });
    });
  };
  return a.iconHandler = ur(u, r), a;
}
function Ci(e) {
  if (!(!e || !te || typeof getComputedStyle != "function") && (Me = !0, J = document.getElementById("formkit-theme"), e && // if we have a window object
  te && // we don't have an existing theme OR the theme being set up is different
  (!(U != null && U.getPropertyValue("--formkit-theme")) && !J || J != null && J.getAttribute("data-theme") && (J == null ? void 0 : J.getAttribute("data-theme")) !== e))) {
    const r = `https://cdn.jsdelivr.net/npm/@formkit/themes@${Ge.startsWith("__") ? "latest" : Ge}/dist/${e}/theme.css`, u = document.createElement("link");
    u.type = "text/css", u.rel = "stylesheet", u.id = "formkit-theme", u.setAttribute("data-theme", e), u.onload = () => {
      U = getComputedStyle(document.documentElement), rt();
    }, document.head.appendChild(u), u.href = r, J && J.remove();
  }
}
function ur(e, t) {
  return (r) => {
    if (typeof r != "string")
      return;
    if (r.startsWith("<svg"))
      return r;
    const u = r.startsWith("default:");
    r = u ? r.split(":")[1] : r;
    const a = r in me;
    let n;
    if (a)
      return me[r];
    if (!st[r]) {
      if (n = Si(r), n = te && typeof n > "u" ? Promise.resolve(n) : n, n instanceof Promise)
        st[r] = n.then((o) => !o && typeof r == "string" && !u ? n = typeof e == "function" ? e(r) : Ii(r, t) : o).then((o) => (typeof r == "string" && (me[u ? `default:${r}` : r] = o), o));
      else if (typeof n == "string")
        return me[u ? `default:${r}` : r] = n, n;
    }
    return st[r];
  };
}
function Si(e) {
  if (te)
    return iu ? ar(e) : ki.then(() => ar(e));
}
function ar(e) {
  const t = U == null ? void 0 : U.getPropertyValue(`--fk-icon-${e}`);
  if (t) {
    const r = atob(t);
    if (r.startsWith("<svg"))
      return me[e] = r, r;
  }
}
function Ii(e, t) {
  const r = Ge.startsWith("__") ? "latest" : Ge, u = typeof t == "function" ? t(e) : `https://cdn.jsdelivr.net/npm/@formkit/icons@${r}/dist/icons/${e}.svg`;
  if (te)
    return fetch(`${u}`).then(async (a) => {
      const n = await a.text();
      if (n.startsWith("<svg"))
        return n;
    }).catch((a) => {
      console.error(a);
    });
}
function Ai(e, t) {
  const r = /^[a-zA-Z-]+(?:-icon|Icon)$/;
  Object.keys(e.props).filter((a) => r.test(a)).forEach((a) => Mi(e, t, a));
}
function Mi(e, t, r) {
  const u = e.props[r], a = t(u), n = `_raw${r.charAt(0).toUpperCase()}${r.slice(1)}`, o = `on${r.charAt(0).toUpperCase()}${r.slice(1)}Click`;
  if (e.addProps([n, o]), e.on(`prop:${r}`, Pi), a instanceof Promise)
    return a.then((i) => {
      e.props[n] = i;
    });
  e.props[n] = a;
}
function Pi(e) {
  var o;
  const t = e.origin, r = e.payload, u = (o = t == null ? void 0 : t.props) == null ? void 0 : o.iconHandler, a = e.name.split(":")[1], n = `_raw${a.charAt(0).toUpperCase()}${a.slice(1)}`;
  if (u && typeof u == "function") {
    const i = u(r);
    if (i instanceof Promise)
      return i.then((s) => {
        t.props[n] = s;
      });
    t.props[n] = i;
  }
}
var nr = {
  /**
   * FormKit errors:
   */
  100: ({ data: e }) => `Only groups, lists, and forms can have children (${e.name}).`,
  101: ({ data: e }) => `You cannot directly modify the store (${e.name}). See: https://formkit.com/advanced/core#message-store`,
  102: ({
    data: [e, t]
  }) => `You cannot directly assign node.${t} (${e.name})`,
  103: ({ data: [e] }) => `Schema expressions cannot start with an operator (${e})`,
  104: ({ data: [e, t] }) => `Schema expressions cannot end with an operator (${e} in "${t}")`,
  105: ({ data: e }) => `Invalid schema expression: ${e}`,
  106: ({ data: e }) => `Cannot submit because (${e}) is not in a form.`,
  107: ({ data: [e, t] }) => `Cannot set ${e.name} to non object value: ${t}`,
  108: ({ data: [e, t] }) => `Cannot set ${e.name} to non array value: ${t}`,
  /**
   * Input specific errors:
   */
  300: ({ data: [e] }) => `Cannot set behavior prop to overscroll (on ${e.name} input) when options prop is a function.`,
  /**
   * FormKit vue errors:
   */
  600: ({ data: e }) => `Unknown input type${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} ("${e.name}")`,
  601: ({ data: e }) => `Input definition${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} is missing a schema or component property (${e.name}).`
}, or = {
  /**
   * Core warnings:
   */
  150: ({ data: e }) => `Schema function "${e}()" is not a valid function.`,
  151: ({ data: e }) => `No form element with id: ${e}`,
  152: ({ data: e }) => `No input element with id: ${e}`,
  /**
   * Input specific warnings:
   */
  350: ({
    data: { node: e, inputType: t }
  }) => `Invalid options prop for ${e.name} input (${t}). See https://formkit.com/inputs/${t}`,
  /**
   * Vue warnings:
   */
  650: 'Schema "$get()" must use the id of an input to access.',
  651: ({ data: e }) => `Cannot setErrors() on "${e}" because no such id exists.`,
  652: ({ data: e }) => `Cannot clearErrors() on "${e}" because no such id exists.`,
  /**
   * Deprecation warnings:
   */
  800: ({ data: e }) => `${e} is deprecated.`
}, ji = (e, t) => {
  if (e.code in nr) {
    const r = nr[e.code];
    e.message = typeof r == "function" ? r(e) : r;
  }
  return t(e);
}, ir = !1;
function Oi() {
  ir || (At(ji), Mt(Ei), ir = !0);
}
var Ei = (e, t) => {
  if (e.code in or) {
    const r = or[e.code];
    e.message = typeof r == "function" ? r(e) : r;
  }
  return t(e);
}, Ri = Object.defineProperty, Li = Object.getOwnPropertyNames, su = (e, t) => function() {
  return e && (t = (0, e[Li(e)[0]])(e = 0)), t;
}, Vi = (e, t) => {
  for (var r in t)
    Ri(e, r, { get: t[r], enumerable: !0 });
}, sr, lu, cu = su({
  "packages/vue/src/bindings.ts"() {
    sr = function(t) {
      t.ledger.count("blocking", (l) => l.blocking);
      const r = N(!t.ledger.value("blocking"));
      t.ledger.count("errors", (l) => l.type === "error");
      const u = N(!!t.ledger.value("errors"));
      let a = !1;
      vu(() => {
        a = !0;
      });
      const n = Se(
        t.store.reduce((l, $) => ($.visible && (l[$.key] = $), l), {})
      ), o = N(
        t.props.validationVisibility || (t.props.type === "checkbox" ? "dirty" : "blur")
      );
      t.on("prop:validationVisibility", ({ payload: l }) => {
        o.value = l;
      });
      const i = N(o.value === "live"), s = N(!1), b = (l) => {
        s.value = (l ?? []).some(
          ($) => $.name === "required"
        );
      };
      b(t.props.parsedRules), t.on("prop:parsedRules", ({ payload: l }) => b(l));
      const m = N(t.children.map((l) => l.uid)), _ = Ie(() => {
        if (!w.state)
          return !1;
        if (w.state.submitted)
          return !0;
        if (!i.value && !w.state.settled)
          return !1;
        switch (o.value) {
          case "live":
            return !0;
          case "blur":
            return w.state.blurred;
          case "dirty":
            return w.state.dirty;
          default:
            return !1;
        }
      }), A = Ie(() => w && h.value ? r.value && !u.value : w.state.dirty && !T(w.value)), h = N(
        Array.isArray(t.props.parsedRules) && t.props.parsedRules.length > 0
      );
      t.on("prop:parsedRules", ({ payload: l }) => {
        h.value = Array.isArray(l) && l.length > 0;
      });
      const y = Ie(() => {
        const l = {};
        for (const $ in n) {
          const k = n[$];
          (k.type !== "validation" || _.value) && (l[$] = k);
        }
        return l;
      }), p = Se(
        t.store.reduce((l, $) => ($.type === "ui" && $.visible && (l[$.key] = $), l), {})
      ), f = Se({}), d = new Proxy(f, {
        get(...l) {
          const [$, k] = l;
          let P = Reflect.get(...l);
          return !P && typeof k == "string" && !I($, k) && !k.startsWith("__v") && Ee(t).watch((L) => {
            const R = typeof L.config.rootClasses == "function" ? L.config.rootClasses(k, L) : {}, F = L.config.classes ? We(k, L, L.config.classes[k]) : {}, se = We(
              k,
              L,
              L.props[`_${k}Class`]
            ), Y = We(
              k,
              L,
              L.props[`${k}Class`]
            );
            P = Xa(
              L,
              k,
              R,
              F,
              se,
              Y
            ), $[k] = P ?? "";
          }), P;
        }
      });
      t.on("prop:rootClasses", () => {
        const l = Object.keys(f);
        for (const $ of l)
          delete f[$];
      });
      const x = Ie(() => {
        const l = [];
        w.help && l.push(`help-${t.props.id}`);
        for (const $ in y.value)
          l.push(`${t.props.id}-${$}`);
        return l.length ? l.join(" ") : void 0;
      }), C = N(t.value), v = N(t.value), w = Se({
        _value: v,
        attrs: t.props.attrs,
        disabled: t.props.disabled,
        describedBy: x,
        fns: {
          length: (l) => Object.keys(l).length,
          number: (l) => Number(l),
          string: (l) => String(l),
          json: (l) => JSON.stringify(l),
          eq: z
        },
        handlers: {
          blur: (l) => {
            t && (t.store.set(
              /* @__PURE__ */ G({ key: "blurred", visible: !1, value: !0 })
            ), typeof t.props.attrs.onBlur == "function" && t.props.attrs.onBlur(l));
          },
          touch: () => {
            var k;
            const l = w.dirtyBehavior === "compare";
            if ((k = t.store.dirty) != null && k.value && !l)
              return;
            const $ = !z(t.props._init, t._value);
            !$ && !l || t.store.set(
              /* @__PURE__ */ G({ key: "dirty", visible: !1, value: $ })
            );
          },
          DOMInput: (l) => {
            t.input(l.target.value), t.emit("dom-input-event", l);
          }
        },
        help: t.props.help,
        id: t.props.id,
        items: m,
        label: t.props.label,
        messages: y,
        didMount: !1,
        node: Ct(t),
        options: t.props.options,
        defaultMessagePlacement: !0,
        slots: t.props.__slots,
        state: {
          blurred: !1,
          complete: A,
          dirty: !1,
          empty: T(C),
          submitted: !1,
          settled: t.isSettled,
          valid: r,
          errors: u,
          rules: h,
          validationVisible: _,
          required: s
        },
        type: t.props.type,
        family: t.props.family,
        ui: p,
        value: C,
        classes: d
      });
      t.on("created", () => {
        z(w.value, t.value) || (v.value = t.value, C.value = t.value, De(C), De(v)), (async () => (await t.settled, t && (t.props._init = K(t.value))))();
      }), t.on("mounted", () => {
        w.didMount = !0;
      }), t.on("settled", ({ payload: l }) => {
        w.state.settled = l;
      });
      function c(l) {
        (Array.isArray(l) ? l : Object.keys(l)).forEach((k) => {
          k = ge(k), I(w, k) || (w[k] = t.props[k]), t.on(`prop:${k}`, ({ payload: P }) => {
            w[k] = P;
          });
        });
      }
      c((() => {
        const l = [
          "__root",
          "help",
          "label",
          "disabled",
          "options",
          "type",
          "attrs",
          "preserve",
          "preserveErrors",
          "id",
          "dirtyBehavior"
        ], $ = /^[a-zA-Z-]+(?:-icon|Icon)$/, k = Object.keys(t.props).filter((P) => $.test(P));
        return l.concat(k);
      })());
      function M(l) {
        l.props && c(l.props);
      }
      t.props.definition && M(t.props.definition), t.on("added-props", ({ payload: l }) => c(l)), t.on("input", ({ payload: l }) => {
        t.type !== "input" && !pt(l) && !Dt(l) ? v.value = bt(l) : (v.value = l, De(v));
      }), t.on("commitRaw", ({ payload: l }) => {
        t.type !== "input" && !pt(l) && !Dt(l) ? C.value = v.value = bt(l) : (C.value = v.value = l, De(C)), t.emit("modelUpdated");
      }), t.on("commit", ({ payload: l }) => {
        var $;
        if ((!w.state.dirty || w.dirtyBehavior === "compare") && t.isCreated && a)
          if (!(($ = t.store.validating) != null && $.value))
            w.handlers.touch();
          else {
            const k = t.on("message-removed", ({ payload: P }) => {
              P.key === "validating" && (w.handlers.touch(), t.off(k));
            });
          }
        A && t.type === "input" && u.value && !B(t.props.preserveErrors) && t.store.filter(
          (k) => {
            var P;
            return !(k.type === "error" && ((P = k.meta) == null ? void 0 : P.autoClear) === !0);
          }
        ), t.type === "list" && t.sync && (m.value = t.children.map((k) => k.uid)), w.state.empty = T(l);
      });
      const O = async (l) => {
        l.type === "ui" && l.visible && !l.meta.showAsMessage ? p[l.key] = l : l.visible ? n[l.key] = l : l.type === "state" && (w.state[l.key] = !!l.value);
      };
      t.on("message-added", (l) => O(l.payload)), t.on("message-updated", (l) => O(l.payload)), t.on("message-removed", ({ payload: l }) => {
        delete p[l.key], delete n[l.key], delete w.state[l.key];
      }), t.on("settled:blocking", () => {
        r.value = !0;
      }), t.on("unsettled:blocking", () => {
        r.value = !1;
      }), t.on("settled:errors", () => {
        u.value = !1;
      }), t.on("unsettled:errors", () => {
        u.value = !0;
      }), Pe(_, (l) => {
        l && (i.value = !0);
      }), t.context = w, t.emit("context", t, !1), t.on("destroyed", () => {
        t.context = void 0, t = null;
      });
    }, lu = sr;
  }
}), Fi = {};
Vi(Fi, {
  defaultConfig: () => Vt
});
var Vt, Di = su({
  "packages/vue/src/defaultConfig.ts"() {
    cu(), Vt = (e = {}) => {
      Oi();
      const {
        rules: t = {},
        locales: r = {},
        inputs: u = {},
        messages: a = {},
        locale: n = void 0,
        theme: o = void 0,
        iconLoaderUrl: i = void 0,
        iconLoader: s = void 0,
        icons: b = {},
        ...m
      } = e, _ = bo({
        ...fo,
        ...t || {}
      }), A = Oo(
        ne({ en: jo, ...r || {} }, a)
      ), h = Eo(xi, u), y = $i(o, b, i, s);
      return ne(
        {
          plugins: [h, y, lu, A, _],
          ...n ? { config: { locale: n } } : {}
        },
        m || {},
        !0
      );
    };
  }
}), zi = typeof window > "u", lt = /* @__PURE__ */ new Map();
function Zi(e, t) {
  var r;
  !zi || !e || (lt.has(e) || lt.set(e, /* @__PURE__ */ new Set()), (r = lt.get(e)) == null || r.add(t));
}
var pu = typeof window > "u", Oe = {}, _e = {}, D, X = /* @__PURE__ */ new WeakMap(), Ni = "__raw__", Hi = /[a-zA-Z0-9\-][cC]lass$/;
function Ti(e, t) {
  const r = N(null);
  if (e === "get") {
    const a = {};
    return r.value = Wi.bind(null, a), r;
  }
  const u = e.split(".");
  return Q(() => {
    r.value = Ft(
      pt(t) ? t.value : t,
      u
    );
  }), r;
}
function Ft(e, t) {
  if (Array.isArray(e)) {
    for (const a of e) {
      const n = a !== !1 && Ft(a, t);
      if (n !== void 0)
        return n;
    }
    return;
  }
  let r, u = e;
  for (const a in t) {
    const n = t[a];
    if (typeof u != "object" || u === null) {
      r = void 0;
      break;
    }
    const o = u[n];
    if (Number(a) === t.length - 1 && o !== void 0) {
      r = typeof o == "function" ? o.bind(u) : o;
      break;
    }
    u = o;
  }
  return r;
}
function Wi(e, t) {
  if (typeof t != "string")
    return pe(650);
  if (t in e || (e[t] = N(void 0)), e[t].value === void 0) {
    e[t].value = null;
    const r = Re(t);
    r && (e[t].value = r.context), aa(t, ({ payload: u }) => {
      e[t].value = Le(u) ? u.context : u;
    });
  }
  return e[t].value;
}
function lr(e, t, r) {
  function u(h, y) {
    const p = _(q(y.if), { if: !0 }), f = b(h, y.then), d = y.else ? b(h, y.else) : null;
    return [p, f, d];
  }
  function a(h, y) {
    var x, C;
    const p = _(q(h.if));
    let f = () => y, d = () => y;
    return typeof h.then == "object" ? d = n(h.then, void 0) : typeof h.then == "string" && ((x = h.then) != null && x.startsWith("$")) ? d = _(q(h.then)) : d = () => h.then, I(h, "else") && (typeof h.else == "object" ? f = n(h.else) : typeof h.else == "string" && ((C = h.else) != null && C.startsWith("$")) ? f = _(q(h.else)) : f = () => h.else), () => p() ? d() : f();
  }
  function n(h, y, p = {}) {
    const f = new Set(Object.keys(h || {})), d = y ? _(q(y)) : () => ({}), x = [
      (C) => {
        const v = d();
        for (const w in v)
          f.has(w) || (C[w] = v[w]);
      }
    ];
    if (h) {
      if (be(h))
        return a(
          h,
          p
        );
      for (let C in h) {
        const v = h[C];
        let w;
        const c = typeof v == "string";
        C.startsWith(Ni) ? (C = C.substring(7), w = () => v) : c && v.startsWith("$") && v.length > 1 && !(v.startsWith("$reset") && Hi.test(C)) ? w = _(q(v)) : typeof v == "object" && be(v) ? w = a(v, void 0) : typeof v == "object" && ye(v) ? w = n(v) : w = () => v, x.push((g) => {
          g[C] = w();
        });
      }
    }
    return () => {
      const C = Array.isArray(h) ? [] : {};
      return x.forEach((v) => v(C)), C;
    };
  }
  function o(h, y) {
    let p = null, f = () => null, d = !1, x = null, C = null, v = null, w = !1;
    const c = Qa(y);
    if (_t(c) ? (p = c.$el, f = c.$el !== "text" ? n(c.attrs, c.bind) : () => null) : yt(c) ? (typeof c.$cmp == "string" ? I(h, c.$cmp) ? p = h[c.$cmp] : (p = c.$cmp, w = !0) : p = c.$cmp, f = n(c.props, c.bind)) : be(c) && ([d, x, C] = u(h, c)), !be(c) && "if" in c ? d = _(q(c.if)) : !be(c) && p === null && (d = () => !0), "children" in c && c.children)
      if (typeof c.children == "string")
        if (c.children.startsWith("$slots."))
          p = p === "text" ? "slot" : p, x = _(q(c.children));
        else if (c.children.startsWith("$") && c.children.length > 1) {
          const g = _(q(c.children));
          x = () => String(g());
        } else
          x = () => String(c.children);
      else if (Array.isArray(c.children))
        x = b(h, c.children);
      else {
        const [g, M, O] = u(h, c.children);
        x = (l) => g && g() ? M && M(l) : O && O(l);
      }
    if (yt(c))
      if (x) {
        const g = x;
        x = (M) => ({
          default(O, l) {
            var P, W, L, R;
            const $ = D;
            l && (D = l), O && ((P = X.get(D)) == null || P.unshift(O)), M && ((W = X.get(D)) == null || W.unshift(M));
            const k = g(M);
            return O && ((L = X.get(D)) == null || L.shift()), M && ((R = X.get(D)) == null || R.shift()), D = $, k;
          }
        }), x.slot = !0;
      } else
        x = () => ({});
    if ("for" in c && c.for) {
      const g = c.for.length === 3 ? c.for[2] : c.for[1];
      v = [
        typeof g == "string" && g.startsWith("$") ? _(q(g)) : () => g,
        c.for[0],
        c.for.length === 3 ? String(c.for[1]) : null
      ];
    }
    return [d, p, f, x, C, v, w];
  }
  function i(h, y) {
    const p = h(y), f = D;
    return Object.keys(p).reduce((d, x) => {
      const C = p && p[x];
      return d[x] = (v) => C && C(v, f) || null, d;
    }, {});
  }
  function s(h, y) {
    const [p, f, d, x, C, v, w] = o(h, y);
    let c = (g) => {
      if (p && f === null && x)
        return p() ? x(g) : C && C(g);
      if (f && (!p || p())) {
        if (f === "text" && x)
          return ku(String(x()));
        if (f === "slot" && x)
          return x(g);
        const M = w ? vr(f) : f, O = x != null && x.slot ? i(x, g) : null;
        return dt(
          M,
          d(),
          O || (x ? x(g) : [])
        );
      }
      return typeof C == "function" ? C(g) : C;
    };
    if (v) {
      const g = c, [M, O, l] = v;
      c = () => {
        const $ = M(), k = Number.isFinite($) ? Array(Number($)).fill(0).map((R, F) => F) : $, P = [];
        if (typeof k != "object")
          return null;
        const W = X.get(D) || [], L = Array.isArray(k);
        for (const R in k) {
          if (L && R in Array.prototype)
            continue;
          const F = Object.defineProperty(
            {
              ...W.reduce(
                (se, Y) => se.__idata ? { ...se, ...Y } : Y,
                {}
              ),
              [O]: k[R],
              ...l !== null ? { [l]: L ? Number(R) : R } : {}
            },
            "__idata",
            { enumerable: !1, value: !0 }
          );
          W.unshift(F), P.push(g.bind(null, F)()), W.shift();
        }
        return P;
      };
    }
    return c;
  }
  function b(h, y) {
    if (Array.isArray(y)) {
      const f = y.map(s.bind(null, h));
      return (d) => f.map((x) => x(d));
    }
    const p = s(h, y);
    return (f) => p(f);
  }
  const m = [];
  function _(h, y = {}) {
    const p = /* @__PURE__ */ new WeakMap();
    return m.push((f, d) => {
      p.set(
        d,
        h.provide((x) => f(x, y))
      );
    }), () => p.get(D)();
  }
  function A(h, y) {
    r ?? (r = du(t));
    const [p, f] = I(Oe, r) ? Oe[r] : [b(e, t), m];
    return pu || (_e[r] ?? (_e[r] = 0), _e[r]++, Oe[r] = [p, f]), f.forEach((d) => {
      d(h, y);
    }), () => (D = y, p());
  }
  return A;
}
function fu(e, t) {
  const r = X.get(D) || [];
  let u;
  return r.length && (u = Ft(r, e.split("."))), u === void 0 ? t : u;
}
function qi(e, t) {
  return new Proxy(e, {
    get(...r) {
      let u;
      const a = r[1];
      if (typeof a == "string") {
        const n = D;
        D = t, u = fu(a, void 0), D = n;
      }
      return u !== void 0 ? u : Reflect.get(...r);
    }
  });
}
function cr(e, t, r) {
  return e(
    (u, a = {}) => u.reduce((n, o) => {
      if (o.startsWith("slots.")) {
        const i = o.substring(6), s = () => t.slots && I(t.slots, i) && typeof t.slots[i] == "function";
        if (a.if)
          n[o] = s;
        else if (t.slots) {
          const b = qi(t, r);
          n[o] = () => s() ? t.slots[i](b) : null;
        }
      } else {
        const i = Ti(o, t);
        n[o] = () => fu(o, i.value);
      }
      return n;
    }, {}),
    r
  );
}
function pr(e, t, r) {
  if (t ?? (t = du(e)), _e[t]--, _e[t] === 0) {
    delete _e[t];
    const [, u] = Oe[t];
    delete Oe[t], u.length = 0;
  }
  X.delete(r);
}
function du(e) {
  return JSON.stringify(e, (t, r) => typeof r == "function" ? r.toString() : r);
}
var bu = /* @__PURE__ */ Ke({
  name: "FormKitSchema",
  props: {
    schema: {
      type: [Array, Object],
      required: !0
    },
    data: {
      type: Object,
      default: () => ({})
    },
    library: {
      type: Object,
      default: () => ({})
    },
    memoKey: {
      type: String,
      required: !1
    }
  },
  emits: ["mounted"],
  setup(e, t) {
    var b;
    const r = ft();
    let u = {};
    X.set(u, []);
    const a = { FormKit: Ct(gu), ...e.library };
    let n = lr(a, e.schema, e.memoKey), o, i;
    pu || Pe(
      () => e.schema,
      (m, _) => {
        var h;
        const A = u;
        u = {}, X.set(u, []), n = lr(a, e.schema, e.memoKey), o = cr(n, i, u), m === _ && ((h = r == null ? void 0 : r.proxy) == null ? void 0 : h.$forceUpdate).call(h), pr(e.schema, e.memoKey, A);
      },
      { deep: !0 }
    ), Q(() => {
      i = Object.assign(Se(e.data ?? {}), {
        slots: t.slots
      }), t.slots, o = cr(n, i, u);
    });
    function s() {
      pr(e.schema, e.memoKey, u), i.node && i.node.destroy(), i.slots = null, i = null, o = null;
    }
    return hr(() => t.emit("mounted")), _u(s), Zi((b = ft()) == null ? void 0 : b.appContext.app, s), () => o ? o() : null;
  }
}), Ki = bu, Bi = typeof window > "u", fr = Symbol("FormKitParent"), Ui = Symbol("FormKitComponentCallback");
function Gi(e, t) {
  const r = us(e, t);
  if (r.props.definition || H(600, r), r.props.definition.component)
    return () => {
      var b;
      return dt(
        (b = r.props.definition) == null ? void 0 : b.component,
        {
          context: r.context
        },
        { ...t.slots }
      );
    };
  const u = N([]);
  let a = r.props.definition.schemaMemoKey;
  const n = () => {
    var m, _;
    const b = (_ = (m = r.props) == null ? void 0 : m.definition) == null ? void 0 : _.schema;
    b || H(601, r), typeof b == "function" ? (u.value = b({ ...e.sectionsSchema || {} }), (a && e.sectionsSchema || "memoKey" in b && typeof b.memoKey == "string") && (a = (a ?? (b == null ? void 0 : b.memoKey)) + JSON.stringify(e.sectionsSchema))) : u.value = b;
  };
  n(), Bi || r.on("schema", () => {
    a += "♻️", n();
  }), t.emit("node", r);
  const o = r.props.definition.library, i = {
    FormKit: Ct(mu),
    ...o,
    ...e.library ?? {}
  };
  function s() {
    r.emit("mounted");
  }
  return t.expose({ node: r }), () => dt(
    bu,
    {
      schema: u.value,
      data: r.context,
      onMounted: s,
      library: i,
      memoKey: a
    },
    { ...t.slots }
  );
}
var mu = /* @__PURE__ */ Ke(
  Gi,
  {
    props: Ro,
    inheritAttrs: !1
  }
), gu = mu, Yi = Symbol();
function Ji(e, t) {
  return e.component(t.alias || "FormKit", gu).component(t.schemaAlias || "FormKitSchema", Ki), {
    get: Re,
    setLocale: (r) => {
      var u;
      (u = t.config) != null && u.rootConfig && (t.config.rootConfig.locale = r);
    },
    clearErrors: tn,
    setErrors: en,
    submit: Cr,
    reset: Sr
  };
}
var hu = Symbol.for("FormKitOptions"), Qi = Symbol.for("FormKitConfig"), Xi = {
  install(e, t) {
    const r = Object.assign(
      {
        alias: "FormKit",
        schemaAlias: "FormKitSchema"
      },
      typeof t == "function" ? t() : t
    ), u = na(r.config || {});
    r.config = { rootConfig: u }, e.config.globalProperties.$formkit = Ji(e, r), e.provide(hu, r), e.provide(Qi, u), typeof window < "u" && (globalThis.__FORMKIT_CONFIGS__ = (globalThis.__FORMKIT_CONFIGS__ || []).concat([u]));
  }
}, es = typeof window < "u", ct = [
  // Boolean props
  "ignore",
  "disabled",
  "preserve",
  // String props
  "help",
  "label",
  /^preserve(-e|E)rrors/,
  /^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,
  /^[a-zA-Z-]+(?:-class|Class)$/,
  "prefixIcon",
  "suffixIcon",
  /^[a-zA-Z-]+(?:-icon|Icon)$/
], ts = ["disabled", "ignore", "preserve"];
function dr(e, t) {
  t.classes && Object.keys(t.classes).forEach(
    (r) => {
      typeof r == "string" && (e.props[`_${r}Class`] = t.classes[r], je(t.classes[r]) && r === "inner" && Object.values(t.classes[r]));
    }
  );
}
function rs(e) {
  return e ? ["Submit", "SubmitRaw", "SubmitInvalid"].reduce(
    (r, u) => {
      const a = `on${u}`;
      return a in e && typeof e[a] == "function" && (r[a] = e[a]), r;
    },
    {}
  ) : {};
}
function us(e, t, r = {}) {
  const u = Object.assign({}, ze(hu) || {}, r), a = ze(Yi, N(es ? document : void 0)), n = ze(Ui, () => {
  }), o = ft(), i = rs(o == null ? void 0 : o.vnode.props), s = ["modelValue", "model-value"].some(
    (c) => c in ((o == null ? void 0 : o.vnode.props) ?? {})
  );
  let b = !1;
  hr(() => {
    b = !0;
  });
  const m = e.modelValue !== void 0 ? e.modelValue : K(t.attrs.value);
  function _() {
    const c = {
      ...de(e),
      ...i,
      type: e.type ?? "text",
      __root: a.value,
      __slots: t.slots
    }, g = zt(de(t.attrs), ct);
    g.key || (g.key = $e()), c.attrs = g;
    const M = Zt(de(t.attrs), ct);
    for (const l in M)
      ts.includes(l) && M[l] === "" && (M[l] = !0), c[ge(l)] = M[l];
    const O = { props: {} };
    return dr(O, e), Object.assign(c, O.props), typeof c.type != "string" && (c.definition = c.type, delete c.type), c;
  }
  const A = _(), h = A.ignore ? null : e.parent || ze(fr, null), y = Ya(
    ne(
      u || {},
      {
        name: e.name || void 0,
        value: m,
        parent: h,
        plugins: (u.plugins || []).concat(e.plugins ?? []),
        config: e.config || {},
        props: A,
        index: e.index,
        sync: !!B(t.attrs.sync || t.attrs.dynamic)
      },
      !1,
      !0
    )
  );
  n(y), y.props.definition || H(600, y);
  const p = N(
    new Set(
      Array.isArray(y.props.__propDefs) ? y.props.__propDefs : Object.keys(y.props.__propDefs ?? {})
    )
  );
  y.on(
    "added-props",
    ({ payload: c }) => {
      (Array.isArray(c) ? c : Object.keys(c ?? {})).forEach((M) => p.value.add(M));
    }
  );
  const f = Ie(
    () => ct.concat([...p.value]).reduce((c, g) => (typeof g == "string" ? (c.push(ge(g)), c.push(yr(g))) : c.push(g), c), [])
  );
  Q(() => dr(y, e));
  const d = de(e);
  for (const c in d)
    Pe(
      () => e[c],
      () => {
        e[c] !== void 0 && (y.props[c] = e[c]);
      }
    );
  Q(() => {
    y.props.__root = a.value;
  });
  const x = /* @__PURE__ */ new Set(), C = de(t.attrs);
  Q(() => {
    v(Zt(C, f.value));
  });
  function v(c) {
    x.forEach((g) => {
      g(), x.delete(g);
    });
    for (const g in c) {
      const M = ge(g);
      x.add(
        Pe(
          () => t.attrs[g],
          () => {
            y.props[M] = t.attrs[g];
          }
        )
      );
    }
  }
  if (Q(() => {
    const c = zt(de(t.attrs), f.value);
    "multiple" in c && (c.multiple = B(c.multiple)), typeof c.onBlur == "function" && (c.onBlur = Du(c.onBlur)), y.props.attrs = Object.assign({}, y.props.attrs || {}, c);
  }), Q(() => {
    const c = (e.errors ?? []).map(
      (g) => /* @__PURE__ */ G({
        key: St(g),
        type: "error",
        value: g,
        meta: { source: "prop" }
      })
    );
    y.store.apply(
      c,
      (g) => g.type === "error" && g.meta.source === "prop"
    );
  }), y.type !== "input") {
    const c = `${y.name}-prop`;
    Q(() => {
      const g = e.inputErrors ?? {}, M = Object.keys(g);
      M.length || y.clearErrors(!0, c);
      const O = M.reduce((l, $) => {
        let k = g[$];
        return typeof k == "string" && (k = [k]), Array.isArray(k) && (l[$] = k.map(
          (P) => /* @__PURE__ */ G({
            key: P,
            type: "error",
            value: P,
            meta: { source: c }
          })
        )), l;
      }, {});
      y.store.apply(
        O,
        (l) => l.type === "error" && l.meta.source === c
      );
    });
  }
  Q(() => Object.assign(y.config, e.config)), y.type !== "input" && yu(fr, y);
  let w;
  return y.on("modelUpdated", () => {
    var c, g;
    t.emit("inputRaw", (c = y.context) == null ? void 0 : c.value, y), b && t.emit("input", (g = y.context) == null ? void 0 : g.value, y), s && y.context && (w = K(y.value), t.emit("update:modelValue", bt(y.value)));
  }), s && (Pe(
    wu(e, "modelValue"),
    (c) => {
      z(w, c) || y.input(c, !1);
    },
    { deep: !0 }
  ), y.value !== m && y.emit("modelUpdated")), xu(() => y.destroy()), y;
}
var as = /* @__PURE__ */ S("messages", () => ({
  $el: "ul",
  if: "$fns.length($messages)"
})), ns = /* @__PURE__ */ S("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: "$id + '-' + $message.key",
    "data-message-type": "$message.type"
  }
}));
as(ns("$message.value"));
var os = /* @__PURE__ */ S("summary", () => ({
  $el: "div",
  attrs: {
    "aria-live": "polite"
  }
})), is = /* @__PURE__ */ S("summaryInner", () => ({
  $el: "div",
  if: "$summaries.length && $showSummaries"
})), ss = /* @__PURE__ */ S("messages", () => ({
  $el: "ul",
  if: "$summaries.length && $showSummaries"
})), ls = /* @__PURE__ */ S("message", () => ({
  $el: "li",
  for: ["summary", "$summaries"],
  attrs: {
    key: "$summary.key",
    "data-message-type": "$summary.type"
  }
})), cs = /* @__PURE__ */ S("summaryHeader", () => ({
  $el: "h2",
  attrs: {
    id: "$id"
  }
})), ps = /* @__PURE__ */ S("messageLink", () => ({
  $el: "a",
  attrs: {
    id: "$summary.key",
    href: '$: "#" + $summary.id',
    onClick: "$jumpLink"
  }
}));
os(
  is(
    cs("$summaryHeader"),
    ss(ls(ps("$summary.message")))
  )
);
Di();
cu();
var fs = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8,15c-3.86,0-7-3.14-7-7S4.14,1,8,1s7,3.14,7,7-3.14,7-7,7Zm0-13c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Z" fill="currentColor"/><path d="M8,11.5c-.28,0-.5-.22-.5-.5V5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v6c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11,8.5H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h6c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>', br = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 27"><polygon fill="currentColor" points="26.99 0 10.13 17.17 4.69 11.63 0 16.41 10.4 27 15.05 22.27 15.09 22.31 32 5.1 26.99 0"/></svg>', ds = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle fill="currentColor" cx="16" cy="16" r="16"/></svg>', mr = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/><path d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', bs = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 80" fill="currentColor"><path d="M0,72c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8ZM0,40c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8S0,44.4,0,40ZM0,8C0,3.6,3.6,0,8,0s8,3.6,8,8-3.6,8-8,8S0,12.4,0,8ZM30,72c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8ZM30,40c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8ZM30,8c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8Z"/></svg>', ms = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="currentColor" d="M7.56,13.88c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5c2.96,0,5.38-2.41,5.38-5.38S10.53,2.12,7.56,2.12c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5c3.52,0,6.38,2.86,6.38,6.38s-2.86,6.38-6.38,6.38Z"/></svg>', gs = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="currentColor" d="M11.41,8.41h0l1.14-.93,1.14-.93c.48-.39,.37-.74-.25-.77l-1.58-.09-2.5-.14-.41-1.05s0,0,0,0l-.53-1.38-.53-1.38c-.22-.58-.59-.58-.81,0l-1.07,2.75s0,0,0,0l-.41,1.05-2.5,.14-1.58,.09c-.62,.03-.73,.38-.25,.77l1.14,.93,1.14,.93h0l.87,.71-.57,2.15-.47,1.79c-.16,.6,.14,.81,.66,.48l2.48-1.6h0s.94-.61,.94-.61l.94,.61h0s1.24,.8,1.24,.8l1.24,.8c.52,.33,.82,.12,.66-.48l-.47-1.79-.57-2.15,.87-.71Z"/></svg>', hs = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.5,4H1.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H14.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11.02,3.81l-.44-1.46c-.06-.21-.26-.36-.48-.36H5.9c-.22,0-.41,.14-.48,.36l-.44,1.46-.96-.29,.44-1.46c.19-.64,.77-1.07,1.44-1.07h4.2c.67,0,1.24,.43,1.44,1.07l.44,1.46-.96,.29Z" fill="currentColor"/><path d="M11.53,15H4.47c-.81,0-1.47-.64-1.5-1.45l-.34-9.87,1-.03,.34,9.87c0,.27,.23,.48,.5,.48h7.07c.27,0,.49-.21,.5-.48l.34-9.87,1,.03-.34,9.87c-.03,.81-.69,1.45-1.5,1.45Z" fill="currentColor"/><path d="M6.5,11.62c-.28,0-.5-.22-.5-.5V7.12c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v4c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M9.5,11.62c-.28,0-.5-.22-.5-.5V7.12c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v4c0,.28-.22,.5-.5,.5Z" fill="currentColor"/></svg>', vs = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12"><path d="M3.09,11.01c-.18,0-.36-.05-.53-.14-.35-.19-.57-.56-.57-.96V2.09c0-.4,.22-.77,.57-.96,.35-.19,.78-.18,1.12,.03l3.03,1.92c.23,.15,.3,.46,.15,.69-.15,.23-.46,.3-.69,.15l-3.03-1.92s-.07-.02-.1,0-.05,.05-.05,.09v7.82s.02,.07,.05,.09c.03,.02,.07,.02,.1,0l3.03-1.92c.23-.15,.54-.08,.69,.15,.15,.23,.08,.54-.15,.69l-3.03,1.92c-.18,.11-.38,.17-.59,.17Z" fill="currentColor"/><path d="M7.04,10.98c-.18,0-.36-.04-.52-.13-.36-.19-.58-.56-.58-.97V2.11c0-.41,.22-.78,.58-.97,.36-.19,.79-.17,1.13,.05l5.87,3.89c.31,.2,.49,.55,.49,.92,0,.37-.18,.71-.49,.92l-5.87,3.89c-.18,.12-.39,.18-.61,.18Zm0-8.97s-.03,0-.05,.01c-.03,.02-.05,.05-.05,.09v7.77s.02,.07,.05,.09c.03,.02,.07,.02,.1,0l5.87-3.89,.28-.58-.28,.42L7.09,2.03s-.04-.02-.05-.02Z" fill="currentColor"/></svg>', _s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12"><path d="M12.91,11.01c-.2,0-.41-.06-.59-.17l-3.03-1.92c-.23-.15-.3-.46-.15-.69,.15-.23,.46-.3,.69-.15l3.03,1.92s.07,.02,.1,0,.05-.05,.05-.09V2.09s-.02-.07-.05-.09c-.03-.02-.07-.02-.1,0l-3.03,1.92c-.23,.15-.54,.08-.69-.15-.15-.23-.08-.54,.15-.69l3.03-1.92c.34-.21,.77-.23,1.12-.03,.35,.19,.57,.56,.57,.96v7.82c0,.4-.22,.77-.57,.96-.17,.09-.35,.14-.53,.14Z" fill="currentColor"/><path d="M8.96,10.98c-.21,0-.42-.06-.61-.18L2.49,6.92c-.31-.2-.49-.55-.49-.92,0-.37,.18-.71,.49-.92L8.36,1.2c.34-.22,.77-.24,1.13-.05,.36,.19,.58,.56,.58,.97v7.77c0,.41-.22,.78-.58,.97-.16,.09-.34,.13-.52,.13ZM2.76,5.5l.28,.42s-.04,.06-.04,.08l5.92,3.97s.07,.02,.1,0c.03-.02,.05-.05,.05-.09V2.11s-.02-.07-.05-.09c-.03-.02-.07-.02-.1,0L3.04,5.92l-.28-.42Z" fill="currentColor"/></svg>', ys = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 16"><path d="M4.5,13c-.28,0-.5-.22-.5-.5V3.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V12.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M4.5,14c-.13,0-.26-.05-.35-.15L.65,10.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l3.15,3.15,3.15-3.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-3.5,3.5c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', ws = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 16"><path d="M4.5,14c-.28,0-.5-.22-.5-.5V4.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V13.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M8,7.5c-.13,0-.26-.05-.35-.15l-3.15-3.15L1.35,7.35c-.2,.2-.51,.2-.71,0-.2-.2-.2-.51,0-.71l3.5-3.5c.2-.2,.51-.2,.71,0l3.5,3.5c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', xs = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 7"><path d="M8,6.5c-.13,0-.26-.05-.35-.15L3.15,1.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4.15,4.15L12.15,1.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-4.5,4.5c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', ks = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 16"><path d="M5.5,13c-.13,0-.26-.05-.35-.15L.65,8.35c-.2-.2-.2-.51,0-.71L5.15,3.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L1.71,8l4.15,4.15c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', $s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 16"><path d="M1.5,13c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71l4.15-4.15L1.15,3.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L6.35,7.65c.2,.2,.2,.51,0,.71L1.85,12.85c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', gr = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16"><path d="M12.5,16H2.5c-.83,0-1.5-.67-1.5-1.5V1.5c0-.83,.67-1.5,1.5-1.5h7.09c.4,0,.78,.16,1.06,.44l2.91,2.91c.28,.28,.44,.66,.44,1.06V14.5c0,.83-.67,1.5-1.5,1.5ZM2.5,1c-.28,0-.5,.22-.5,.5V14.5c0,.28,.22,.5,.5,.5H12.5c.28,0,.5-.22,.5-.5V4.41c0-.13-.05-.26-.15-.35l-2.91-2.91c-.09-.09-.22-.15-.35-.15H2.5Z" fill="currentColor"/><path d="M13.38,5h-2.91c-.81,0-1.47-.66-1.47-1.47V.62c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.53c0,.26,.21,.47,.47,.47h2.91c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M10,13H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M10,10H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M7,7h-2c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h2c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>', Cs = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.5,14H2.5c-.28,0-.5-.22-.5-.5v-3c0-.13,.05-.26,.15-.35L7.15,5.15c.2-.2,.51-.2,.71,0l3,3c.2,.2,.2,.51,0,.71l-5,5c-.09,.09-.22,.15-.35,.15Zm-2.5-1h2.29l4.5-4.5-2.29-2.29L3,10.71v2.29Z" fill="currentColor"/><path d="M13.37,5.62l-1.38,1.38-3-3,1.38-1.38c.42-.42,.96-.62,1.5-.62s1.08,.2,1.5,.62c.83,.83,.83,2.17,0,3Z" fill="currentColor"/><path d="M12.5,8c-.13,0-.26-.05-.35-.15L8.15,3.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4,4c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', Ss = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.5,16H1.5c-.83,0-1.5-.67-1.5-1.5V2.5c0-.83,.67-1.5,1.5-1.5H14.5c.83,0,1.5,.67,1.5,1.5V14.5c0,.83-.67,1.5-1.5,1.5ZM1.5,2c-.28,0-.5,.22-.5,.5V14.5c0,.28,.22,.5,.5,.5H14.5c.28,0,.5-.22,.5-.5V2.5c0-.28-.22-.5-.5-.5H1.5Z" fill="currentColor"/><path d="M4.5,4c-.28,0-.5-.22-.5-.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11.5,4c-.28,0-.5-.22-.5-.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M15.5,6H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H15.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>', Is = {
  add: fs,
  arrowDown: ys,
  arrowUp: ws,
  check: br,
  close: mr,
  checkboxDecorator: br,
  date: Ss,
  dragHandle: bs,
  fileItem: gr,
  fileRemove: mr,
  noFiles: gr,
  radioDecorator: ds,
  select: xs,
  spinner: ms,
  star: gs,
  trash: hs,
  fastForward: vs,
  right: $s,
  left: ks,
  rewind: _s,
  color: Cs
};
function As(e, t) {
  const r = `${t.props.type}__${e}`, u = `formkit-${e}`, a = t.props.family ? `family:${t.props.family}__${e}` : "", n = `${r}__${a}`;
  if (!(n in le)) {
    const o = le[r] ?? Ms[e] ?? {};
    o[u] = !0, a in le ? le[n] = { ...le[a], ...o } : le[n] = o;
  }
  return le[n] ?? { [u]: !0 };
}
const le = {
  "family:button__wrapper": {
    "group-data-[disabled=true]:grayscale": !0
  },
  "family:button__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "font-bold": !0,
    rounded: !0,
    "outline-none": !0,
    flex: !0,
    "!text-sm": !0,
    "px-7": !0,
    "py-3": !0,
    "items-center": !0,
    "mb-1.5": !0,
    "text-sm": !0,
    "ring-offset-2": !0,
    "ring-blue-500": !0,
    "focus-visible:ring-2": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    shadow: !0,
    "group-data-[prefix-icon]:pl-5": !0,
    "group-data-[suffix-icon]:pr-5": !0,
    border: !0,
    "border-blue-600": !0,
    "text-blue-600": !0,
    "group-[]/repeater:shadow-sm": !0,
    "group-[]/multistep:shadow-sm": !0,
    "dark:border-blue-500": !0
  },
  "family:box__wrapper": {
    "inline-flex": !0,
    "items-center": !0,
    "mb-1": !0,
    "group-data-[multiple]:mb-0": !0
  },
  "family:box__legend": {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "dark:text-neutral-300": !0,
    "mb-2": !0
  },
  "family:box__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    peer: !0,
    "pointer-events-none": !0,
    absolute: !0,
    "h-0": !0,
    "w-0": !0,
    "overflow-hidden": !0,
    "opacity-0": !0
  },
  "family:box__decorator": {
    "mr-1.5": !0,
    "bg-white": !0,
    "ring-blue-500": !0,
    "peer-checked:border-blue-600": !0,
    relative: !0,
    block: !0,
    "text-lg": !0,
    "w-[1em]": !0,
    "aspect-[1/1]": !0,
    border: !0,
    "border-neutral-400": !0,
    "text-transparent": !0,
    "peer-checked:bg-blue-50": !0,
    "peer-checked:text-blue-600": !0,
    "peer-focus-visible:ring-2": !0,
    "peer-focus-visible:ring-offset-1": !0,
    "select-none": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "peer-disabled:bg-neutral-100": !0,
    "group-data-[disabled]:grayscale": !0,
    shadow: !0,
    "peer-disabled:cursor-not-allowed": !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "dark:border-neutral-500": !0,
    "dark:bg-transparent": !0,
    "dark:ring-offset-blue-500": !0,
    "dark:peer-focus-visible:ring-1": !0,
    "dark:peer-disabled:bg-neutral-600/50": !0,
    "dark:peer-checked:bg-blue-900": !0,
    "dark:peer-checked:text-blue-400": !0
  },
  "family:box__decoratorIcon": {
    absolute: !0,
    "left-1/2": !0,
    "top-1/2": !0,
    flex: !0,
    "h-full": !0,
    "w-full": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0
  },
  "family:box__option": {
    "mb-1.5": !0,
    "last:mb-0": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:select-none": !0,
    "group-data-[disabled]:data-[disabled]:opacity-100": !0
  },
  "family:box__label": {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "mb-1": !0,
    "!mb-0": !0,
    "!font-normal": !0,
    "!text-sm": !0,
    "dark:text-neutral-300": !0
  },
  "family:box__optionHelp": {
    "text-neutral-500": !0,
    "text-xs": !0,
    "-mt-1": !0,
    "mb-1.5": !0,
    "ml-[min(2em,1.7rem)]": !0,
    relative: !0,
    "left-px": !0
  },
  "family:box__help": {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0,
    "mb-1": !0,
    "group-data-[multiple]:mb-2": !0,
    "group-data-[multiple]:-mt-1.5": !0
  },
  "family:text__wrapper": {
    flex: !0,
    "flex-col": !0,
    "items-start": !0,
    "justify-start": !0,
    "mb-1.5": !0,
    "last:mb-0": !0
  },
  "family:text__label": {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "dark:text-neutral-300": !0,
    "!inline-flex": !0,
    "mb-1": !0
  },
  "family:text__inner": {
    "text-base": !0,
    flex: !0,
    "items-center": !0,
    "w-full": !0,
    "py-2": !0,
    "px-3": !0,
    rounded: !0,
    border: !0,
    "border-neutral-400": !0,
    "bg-white": !0,
    "focus-within:ring-1": !0,
    "focus-within:!ring-blue-500": !0,
    "focus-within:!border-blue-500": !0,
    "group-data-[invalid]:border-red-500": !0,
    "group-data-[invalid]:ring-1": !0,
    "group-data-[invalid]:ring-red-500": !0,
    "group-data-[disabled]:bg-neutral-100": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    shadow: !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-500": !0,
    "dark:group-data-[disabled]:bg-neutral-800/5": !0,
    "dark:group-data-[invalid]:border-red-500": !0,
    "dark:group-data-[invalid]:ring-red-500": !0
  },
  "family:text__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "text-base": !0,
    "text-neutral-700": !0,
    "min-w-0": !0,
    "min-h-[1.5em]": !0,
    grow: !0,
    "outline-none": !0,
    "bg-transparent": !0,
    "selection:bg-blue-100": !0,
    "placeholder:text-neutral-400": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "dark:placeholder-neutral-400/50": !0,
    "dark:text-neutral-300": !0,
    "border-none": !0,
    "p-0": !0,
    "focus:ring-0": !0
  },
  "family:text__prefixIcon": {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  "family:text__suffixIcon": {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__wrapper": {
    "mb-1.5": !0
  },
  "family:dropdown__inner": {
    relative: !0,
    flex: !0,
    "items-center": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-400": !0,
    rounded: !0,
    "group-data-[is-multiline]:!rounded": !0,
    "focus-within:ring-1": !0,
    "focus-within:!ring-blue-500": !0,
    "focus-within:!border-blue-500": !0,
    "group-data-[invalid]:border-red-500": !0,
    "group-data-[invalid]:ring-1": !0,
    "group-data-[invalid]:ring-red-500": !0,
    "group-data-[disabled]:bg-neutral-100": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    shadow: !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-500": !0,
    "dark:group-data-[disabled]:bg-neutral-700/40": !0,
    "dark:group-data-[invalid]:border-red-500": !0,
    "dark:group-data-[invalid]:ring-red-500": !0
  },
  "family:dropdown__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    grow: !0,
    "p-2": !0,
    "pr-0": !0,
    "pl-3": !0,
    "text-base": !0,
    "text-neutral-700": !0,
    "text-ellipsis": !0,
    "min-w-0": !0,
    "outline-none": !0,
    "bg-transparent": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "group-data-[prefix-icon]:!pl-0": !0,
    "group-data-[suffix-icon]:!pr-0": !0,
    "placeholder:text-neutral-400": !0,
    "selection:bg-blue-100": !0,
    "dark:placeholder:text-neutral-500": !0,
    "dark:text-neutral-300": !0,
    "border-none": !0,
    "focus:ring-0": !0,
    "bg-none": !0
  },
  "family:dropdown__listboxButton": {
    "w-[2.5em]": !0,
    "self-stretch": !0,
    "text-base": !0,
    flex: !0,
    "items-center": !0,
    "text-neutral-700": !0,
    "z-10": !0,
    "dark:text-neutral-300": !0,
    "data-[disabled]:cursor-not-allowed": !0
  },
  "family:dropdown__removeSelection": {
    "w-[2.5em]": !0,
    "self-stretch": !0,
    "text-base": !0,
    flex: !0,
    "items-center": !0,
    "text-neutral-700": !0,
    "hover:text-red-400": !0,
    "z-10": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__controlLabel": {
    absolute: !0,
    "opacity-0": !0,
    "pointer-events-none": !0,
    "text-[0px]": !0
  },
  "family:dropdown__selectIcon": {
    "text-base": !0,
    "inline-flex": !0,
    "justify-center": !0,
    "w-[2.5em]": !0,
    relative: !0,
    "my-auto": !0,
    "[&>svg]:w-[1em]": !0,
    "[&>svg]:mx-auto": !0
  },
  "family:dropdown__closeIcon": {
    "text-base": !0,
    "w-[0.75em]": !0,
    relative: !0,
    "m-auto": !0
  },
  "family:dropdown__prefixIcon": {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "!ml-2": !0,
    "!mr-0": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__suffixIcon": {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "!mr-2": !0,
    "!ml-0": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__dropdownWrapper": {
    rounded: !0,
    "shadow-lg": !0,
    "mt-1": !0,
    "overflow-clip": !0,
    "empty:hidden": !0,
    border: !0,
    "border-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "group-data-[expanded]:opacity-100": !0,
    "group-data-[overscroll]:m-0": !0,
    "group-data-[overscroll]:shadow-none": !0,
    "group-data-[overscroll]:border-none": !0
  },
  "family:dropdown__listitemGroup": {
    "group/optgroup": !0,
    "last:pb-0": !0,
    "border-t": !0,
    "border-b": !0,
    "-mb-px": !0,
    "border-neutral-300": !0,
    "dark:border-neutral-600": !0
  },
  "family:dropdown__groupLabel": {
    block: !0,
    "pt-1.5": !0,
    "pb-1": !0,
    "px-2.5": !0,
    "font-bold": !0,
    "pointer-events-none": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__listbox": {
    "bg-white": !0,
    rounded: !0,
    "empty:hidden": !0,
    "dark:bg-neutral-800": !0,
    "group-data-[overscroll]:shadow-lg": !0,
    "group-data-[overscroll]:border": !0,
    "group-data-[overscroll]:border-neutral-300": !0,
    "group-data-[overscroll]:dark:border-neutral-600": !0
  },
  "family:dropdown__listitem": {
    relative: !0,
    flex: !0,
    "items-center": !0,
    "px-2": !0,
    "py-1.5": !0,
    "first:pt-2": !0,
    "last:pb-2": !0,
    "text-neutral-700": !0,
    "text-base": !0,
    "data-[is-active]:bg-blue-100": !0,
    "dark:text-neutral-200": !0,
    "dark:data-[is-active]:text-neutral-700": !0,
    "before:content-['']": !0,
    "before:absolute": !0,
    "before:inset-0": !0,
    "data-[is-active]:first:before:rounded": !0,
    "data-[is-active]:first:before:rounded-b-none": !0,
    "data-[is-active]:last:before:rounded": !0,
    "data-[is-active]:last:before:rounded-t-none": !0,
    "data-[is-active]:first:last:before:rounded": !0,
    "data-[is-active]:before:ring-1": !0,
    "data-[is-active]:before:ring-blue-500": !0,
    "data-[is-active]:before:ring-inset": !0,
    "data-[is-active]:before:ring-offset-blue-100": !0,
    "group-[]/optgroup:first:before:!rounded-none": !0,
    "group-[]/optgroup:last:before:!rounded-none": !0
  },
  "family:dropdown__selectedIcon": {
    flex: !0,
    absolute: !0,
    "items-center": !0,
    "text-blue-600": !0,
    "left-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  "family:dropdown__option": {
    "ml-[1.5em]": !0
  },
  "family:dropdown__loadMore": {
    "data-[is-active]:bg-blue-100": !0
  },
  "family:dropdown__loadMoreInner": {
    flex: !0,
    "text-sm": !0,
    "text-neutral-500": !0,
    "p-2": !0,
    "items-center": !0,
    "justify-center": !0,
    "[&>span]:mr-2": !0,
    "cursor-pointer": !0,
    "dark:text-neutral-200": !0,
    "dark:hover:text-blue-500": !0
  },
  "family:dropdown__selectionWrapper": {
    grow: !0,
    flex: !0,
    "items-center": !0,
    "text-neutral-700": !0
  },
  "family:dropdown__selection": {
    grow: !0,
    "text-neutral-700": !0,
    "group-data-[multiple]:p-2": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__tagsWrapper": {
    "w-full": !0
  },
  "family:dropdown__tagWrapper": {
    "group/tag": !0,
    rounded: !0,
    "mr-1": !0,
    "mb-1": !0,
    "outline-none": !0,
    "data-[active-selection=true]:ring-2": !0,
    "data-[active-selection=true]:ring-blue-500": !0
  },
  "family:dropdown__tags": {
    "inline-flex": !0,
    "flex-wrap": !0,
    "items-center": !0,
    "w-full": !0,
    "-mb-1": !0,
    "empty:mb-0": !0
  },
  "family:dropdown__tag": {
    flex: !0,
    "items-center": !0,
    "cursor-default": !0,
    rounded: !0,
    "text-sm": !0,
    "px-1.5": !0,
    "py-0.5": !0,
    "bg-blue-600": !0,
    "text-white": !0,
    "[&>[type=button]]:!w-[0.5em]": !0,
    "[&>[type=button]]:aspect-[1/1]": !0,
    "[&>[type=button]]:!text-inherit": !0,
    "[&>[type=button]]:cursor-pointer": !0,
    "group-data-[active-selection=true]/tag:bg-blue-400": !0,
    "group-data-[active-selection=true]/tag:text-neutral-700": !0
  },
  "family:dropdown__tagLabel": {
    "mr-1": !0
  },
  "family:dropdown__emptyMessage": {
    flex: !0,
    "items-center": !0,
    "px-2": !0,
    "py-1.5": !0,
    "first:pt-2": !0,
    "last:pb-2": !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "aria-selected:text-white": !0,
    "aria-selected:bg-blue-600": !0
  },
  button__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "bg-blue-50": !0,
    "hover:bg-blue-100": !0,
    "dark:text-blue-500": !0,
    "dark:bg-transparent": !0,
    "dark:hover:bg-blue-50/5": !0
  },
  checkbox__decorator: {
    rounded: !0
  },
  checkbox__decoratorIcon: {
    "max-w-[66.66%]": !0
  },
  color__inner: {
    "!w-auto": !0,
    "!p-1.5": !0,
    "!inline-flex": !0,
    "group-data-[prefix-icon]:border": !0,
    "group-data-[prefix-icon]:border-neutral-400": !0,
    "group-data-[suffix-icon]:border": !0,
    "group-data-[suffix-icon]:border-neutral-400": !0,
    "dark:group-data-[prefix-icon]:border-neutral-500": !0,
    "dark:group-data-[suffix-icon]:border-neutral-500": !0
  },
  color__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "!w-14": !0,
    "bg-transparent": !0,
    "cursor-pointer": !0,
    rounded: !0,
    "overflow-clip": !0,
    "[&::-webkit-color-swatch-wrapper]:p-0": !0,
    "[&::-webkit-color-swatch]:border-none": !0,
    "[&::-moz-color-swatch]:border-none": !0,
    "group-data-[prefix-icon]:mx-2": !0,
    "group-data-[suffix-icon]:mx-2": !0
  },
  color__prefixIcon: {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "group-data-[prefix-icon]:m-1.5": !0,
    "group-data-[prefix-icon]:mr-0": !0
  },
  color__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "group-data-[suffix-icon]:m-1.5": !0,
    "group-data-[prefix-icon]:ml-0": !0
  },
  date__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "focus:[&::-webkit-datetime-edit-day-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-month-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-year-field]:bg-blue-100": !0
  },
  "datetime-local__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "focus:[&::-webkit-datetime-edit-day-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-month-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-year-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-hour-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-minute-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-ampm-field]:bg-blue-100": !0
  },
  file__fileList: {
    "group/list": !0,
    peer: !0,
    "w-full": !0,
    "min-w-0": !0,
    "data-[has-multiple]:mb-[1.25em]": !0
  },
  file__fileItemIcon: {
    "h-[1em]": !0,
    "w-[1em]": !0,
    "mr-2": !0,
    "shrink-0": !0
  },
  file__fileItem: {
    flex: !0,
    "min-w-0": !0,
    "items-center": !0,
    "text-neutral-700": !0,
    "mb-1.5": !0,
    "last:mb-0": !0,
    "dark:text-neutral-300": !0
  },
  file__fileName: {
    truncate: !0,
    "min-w-0": !0,
    "w-full": !0,
    shrink: !0,
    "leading-5": !0,
    "group-data-[has-multiple]/list:text-sm": !0
  },
  file__fileRemove: {
    "right-2": !0,
    "ring-blue-500": !0,
    rounded: !0,
    "z-20": !0,
    flex: !0,
    "appearance-none": !0,
    "items-center": !0,
    "text-[0px]": !0,
    "outline-none": !0,
    "hover:!text-red-500": !0,
    "focus-visible:ring-2": !0,
    "group-data-[disabled]:pointer-events-none": !0,
    "group-data-[disabled]:!text-neutral-500": !0,
    "peer-data-[has-multiple]:absolute": !0,
    "peer-data-[has-multiple]:bottom-[max(0.5em,8px)]": !0,
    "peer-data-[has-multiple]:left-3": !0,
    "peer-data-[has-multiple]:text-blue-600": !0,
    "peer-data-[has-multiple]:text-xs": !0,
    "peer-data-[has-multiple]:whitespace-nowrap": !0,
    "group-data-[prefix-icon]:peer-data-[has-multiple]:left-2": !0,
    "dark:hover:!text-red-400": !0
  },
  file__fileRemoveIcon: {
    block: !0,
    "text-base": !0,
    "w-[0.75em]": !0,
    relative: !0,
    "z-10": !0
  },
  file__inner: {
    relative: !0,
    "cursor-pointer": !0,
    "group-data-[has-multiple]:rounded": !0
  },
  file__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "cursor-pointer": !0,
    "text-transparent": !0,
    absolute: !0,
    "inset-0": !0,
    "opacity-0": !0,
    "z-10": !0,
    "file:pointer-events-none": !0,
    "file:w-0": !0,
    "file:h-0": !0,
    "file:overflow-hidden": !0
  },
  file__noFiles: {
    flex: !0,
    "w-full": !0,
    "items-center": !0,
    "text-neutral-400": !0,
    "dark:text-neutral-500": !0
  },
  file__noFilesIcon: {
    "w-[1em]": !0,
    "mr-2": !0
  },
  form__form: {
    "group/form": !0
  },
  form__actions: {
    "": !0
  },
  form__summaryInner: {
    "group/summary": !0,
    border: !0,
    "border-neutral-400": !0,
    "bg-white": !0,
    rounded: !0,
    "py-2": !0,
    "px-3": !0,
    shadow: !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-500": !0
  },
  form__summaryHeader: {
    "text-lg": !0,
    "text-neutral-700": !0,
    "font-bold": !0,
    "mb-2": !0,
    "dark:text-neutral-300": !0
  },
  form__messages: {
    "": !0
  },
  form__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0,
    "group-[]/summary:text-sm": !0
  },
  form__messageLink: {
    "group-[]/summary:outline-none": !0,
    "group-[]/summary:focus-visible:ring-2": !0,
    "group-[]/summary:ring-blue-600": !0
  },
  month__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "focus:[&::-webkit-datetime-edit-month-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-year-field]:bg-blue-100": !0
  },
  radio__decorator: {
    "rounded-full": !0
  },
  radio__decoratorIcon: {
    "max-w-[50%]": !0
  },
  range__inner: {
    relative: !0,
    "!border-none": !0,
    "!ring-0": !0,
    "!px-0": !0,
    "!bg-transparent": !0,
    "!shadow-none": !0
  },
  range__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "group/input": !0,
    "cursor-pointer": !0,
    "[&::-webkit-slider-runnable-track]:bg-neutral-400/50": !0,
    "[&::-webkit-slider-runnable-track]:h-[0.25em]": !0,
    "[&::-webkit-slider-runnable-track]:rounded": !0,
    "dark:[&::-webkit-slider-runnable-track]:bg-neutral-500/50": !0,
    "[&::-webkit-slider-thumb]:appearance-none": !0,
    "[&::-webkit-slider-thumb]:w-[0.85em]": !0,
    "[&::-webkit-slider-thumb]:aspect-[1/1]": !0,
    "[&::-webkit-slider-thumb]:bg-blue-600": !0,
    "[&::-webkit-slider-thumb]:rounded-full": !0,
    "[&::-webkit-slider-thumb]:relative": !0,
    "[&::-webkit-slider-thumb]:top-1/2": !0,
    "[&::-webkit-slider-thumb]:-translate-y-1/2": !0,
    "[&::-webkit-slider-thumb]:group-data-[disabled]:bg-neutral-500": !0,
    "[&::-webkit-slider-thumb]:group-data-[disabled]:!ring-neutral-300": !0,
    "[&::-webkit-slider-thumb]:focus-visible:ring-2": !0,
    "[&::-webkit-slider-thumb]:focus:!ring-blue-500": !0,
    "[&::-webkit-slider-thumb]:focus:ring-offset-2": !0,
    "[&::-webkit-slider-thumb]:shadow": !0,
    "dark:[&::-webkit-slider-thumb]:group-data-[disabled]:!ring-neutral-600": !0,
    "dark:[&::-webkit-slider-thumb]:focus:ring-offset-neutral-700": !0,
    "[&::-moz-range-track]:bg-neutral-400/50": !0,
    "[&::-moz-range-track]:h-[0.25]": !0,
    "[&::-moz-range-track]:rounded": !0,
    "dark:[&::-moz-range-track]:bg-neutral-500/50": !0,
    "[&::-moz-range-thumb]:appearance-none": !0,
    "[&::-moz-range-thumb]:border-none": !0,
    "[&::-moz-range-thumb]:w-[0.85em]": !0,
    "[&::-moz-range-thumb]:h-[0.85em]": !0,
    "[&::-moz-range-thumb]:bg-blue-600": !0,
    "[&::-moz-range-thumb]:rounded-full": !0,
    "[&::-moz-range-thumb]:group-data-[disabled]:bg-neutral-500": !0,
    "[&::-moz-range-thumb]:group-data-[disabled]:!ring-neutral-300": !0,
    "[&::-moz-range-thumb]:focus-visible:ring-2": !0,
    "[&::-moz-range-thumb]:focus:!ring-blue-500": !0,
    "[&::-moz-range-thumb]:focus:ring-offset-2": !0,
    "[&::-moz-range-thumb]:shadow": !0,
    "dark:[&::-moz-range-thumb]:group-data-[disabled]:!ring-neutral-500": !0,
    "dark:[&::-moz-range-thumb]:focus:ring-offset-neutral-700": !0
  },
  select__wrapper: {
    "mb-1.5": !0
  },
  select__inner: {
    relative: !0,
    flex: !0,
    "items-center": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-400": !0,
    rounded: !0,
    "focus-within:ring-1": !0,
    "focus-within:!ring-blue-500": !0,
    "focus-within:!border-blue-500": !0,
    "group-data-[invalid]:border-red-500": !0,
    "group-data-[invalid]:ring-1": !0,
    "group-data-[invalid]:ring-red-500": !0,
    "group-data-[disabled]:bg-neutral-100": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    shadow: !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "group-data-[multiple]:rounded": !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-500": !0,
    "dark:group-data-[disabled]:bg-neutral-800/5": !0,
    "dark:group-data-[invalid]:border-red-500": !0,
    "dark:group-data-[invalid]:ring-red-500": !0
  },
  select__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    grow: !0,
    "p-2": !0,
    "py-2": !0,
    "px-3": !0,
    "pr-[2em]": !0,
    "text-base": !0,
    "text-neutral-700": !0,
    "text-ellipsis": !0,
    "min-w-0": !0,
    "outline-none": !0,
    "bg-transparent": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "group-data-[prefix-icon]:!pl-0": !0,
    "group-data-[suffix-icon]:!pr-0": !0,
    "data-[placeholder]:text-neutral-400": !0,
    "group-data-[multiple]:!p-0": !0,
    "selection:bg-blue-100": !0,
    "dark:data-[placeholder]:text-neutral-400/50": !0,
    "dark:text-neutral-300": !0,
    "border-none": !0,
    "focus:ring-0": !0,
    "bg-none": !0
  },
  select__selectIcon: {
    absolute: !0,
    "w-[1em]": !0,
    "text-neutral-700": !0,
    "pointer-events-none": !0,
    "right-2": !0,
    "group-data-[suffix-icon]:mr-[1.5em]": !0,
    "dark:text-neutral-300": !0
  },
  select__optGroup: {
    "bg-white": !0,
    "text-neutral-700": !0,
    "group/optgroup": !0,
    "group-data-[multiple]:px-1.5": !0,
    "pt-1.5": !0,
    "font-bold": !0,
    "text-sm": !0,
    "dark:bg-neutral-800": !0,
    "dark:text-neutral-300": !0
  },
  select__option: {
    "bg-white": !0,
    "text-neutral-700": !0,
    "group-data-[disabled]:opacity-50": !0,
    "group-data-[disabled]:select-none": !0,
    "group-data-[multiple]:checked:bg-blue-100": !0,
    "group-data-[multiple]:focus:bg-blue-100": !0,
    "group-data-[multiple]:text-sm": !0,
    "group-data-[multiple]:outline-none": !0,
    "group-data-[multiple]:border-none": !0,
    "group-data-[multiple]:py-1.5": !0,
    "group-data-[multiple]:px-2": !0,
    "dark:bg-neutral-800": !0,
    "dark:text-neutral-300": !0,
    "dark:group-data-[multiple]:focus:bg-blue-800": !0,
    "dark:group-data-[multiple]:checked:bg-blue-800": !0
  },
  select__prefixIcon: {
    flex: !0,
    "items-center": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "ml-2": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  select__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "mr-2": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  submit__outer: {
    group: !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "text-base": !0,
    "data-[disabled]:opacity-100": !0
  },
  submit__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "bg-blue-600": !0,
    "!text-white": !0,
    "active:text-blue-100": !0,
    "active:bg-blue-700": !0,
    "hover:bg-blue-700": !0,
    "disabled:border-neutral-400": !0,
    "disabled:bg-neutral-400": !0,
    "disabled:text-neutral-100": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "dark:disabled:border-neutral-100": !0,
    "dark:disabled:bg-neutral-500": !0,
    "dark:disabled:text-neutral-200": !0,
    "dark:text-white": !0,
    "dark:ring-offset-blue-500": !0,
    "before:transition-all": !0,
    "group-data-[loading=true]/form:before:content['']": !0,
    "group-data-[loading=true]/form:before:block": !0,
    "group-data-[loading=true]/form:before:animate-spin": !0,
    "group-data-[loading=true]/form:before:w-5": !0,
    "group-data-[loading=true]/form:before:h-5": !0,
    "group-data-[loading=true]/form:before:rounded-full": !0,
    "group-data-[loading=true]/form:before:mr-3": !0,
    "group-data-[loading=true]/form:before:-ml-1.5": !0,
    "group-data-[loading=true]/form:before:border-2": !0,
    "group-data-[loading=true]/form:before:border-solid": !0,
    "group-data-[loading=true]/form:before:border-white": !0,
    "group-data-[loading=true]/form:before:border-r-transparent": !0
  },
  submit__prefixIcon: {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-100": !0
  },
  submit__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-100": !0
  },
  textarea__inner: {
    flex: !0,
    "items-center": !0,
    "mb-1.5": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-400": !0,
    rounded: !0,
    "focus-within:ring-1": !0,
    "focus-within:!ring-blue-500": !0,
    "focus-within:!border-blue-500": !0,
    "group-data-[invalid]:border-red-500": !0,
    "group-data-[invalid]:ring-1": !0,
    "group-data-[invalid]:ring-red-500": !0,
    "group-data-[disabled]:bg-neutral-100": !0,
    shadow: !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "dark:border-neutral-500": !0,
    "dark:group-data-[disabled]:bg-neutral-800/5": !0,
    "dark:group-data-[invalid]:border-red-500": !0,
    "dark:group-data-[invalid]:ring-red-500": !0,
    "dark:bg-transparent": !0
  },
  textarea__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "text-base": !0,
    "h-24": !0,
    "text-neutral-700": !0,
    "min-w-0": !0,
    grow: !0,
    shrink: !0,
    "!py-2": !0,
    "!px-3": !0,
    "outline-none": !0,
    "bg-transparent": !0,
    "selection:bg-blue-100": !0,
    "placeholder:text-neutral-400": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "dark:placeholder-neutral-400/50": !0,
    "dark:text-neutral-300": !0,
    "p-0": !0,
    "border-none": !0,
    "focus:ring-0": !0
  },
  textarea__prefixIcon: {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "!ml-2": !0,
    "!mr-0": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  textarea__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "!mr-2": !0,
    "!ml-0": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  time__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "focus:[&::-webkit-datetime-edit-hour-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-minute-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-ampm-field]:bg-blue-100": !0
  },
  week__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "focus:[&::-webkit-datetime-edit-week-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-year-field]:bg-blue-100": !0
  },
  autocomplete__selections: {
    flex: !0,
    absolute: !0,
    "inset-0": !0,
    "group-data-[multiple]:static": !0,
    "group-data-[multiple]:block": !0,
    "group-data-[empty]:hidden": !0,
    "group-data-[multiple]:mt-1.5": !0
  },
  autocomplete__selectionWrapper: {
    "bg-neutral-100": !0,
    rounded: !0,
    "group-data-[multiple]:border": !0,
    "group-data-[multiple]:border-neutral-300": !0,
    "group-data-[multiple]:mb-1.5": !0,
    "outline-none": !0,
    "data-[active-selection=true]:ring-2": !0,
    "data-[active-selection=true]:ring-blue-500": !0,
    "dark:bg-neutral-600": !0,
    "dark:group-data-[multiple]:border-neutral-500": !0,
    "[&.formkit-dropZone]:opacity-25": !0,
    "[&.formkit-touchDropZone]:opacity-25": !0,
    "[&.formkit-touchDragging]:!flex": !0,
    "[&.formkit-longTouch]:opacity-25": !0
  },
  autocomplete__selection: {
    rounded: !0,
    just: !0,
    "pl-2": !0,
    "[&>*]:ml-0": !0,
    "dark:text-neutral-200": !0
  },
  colorpicker__outer: {
    group: !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0,
    "data-[disabled]:cursor-not-allowed": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  colorpicker__help: {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0,
    "group-data-[inline]:-mt-1": !0,
    "group-data-[inline]:mb-2": !0
  },
  colorpicker__inner: {
    relative: !0,
    "inline-flex": !0,
    "!w-auto": !0,
    "pl-2": !0,
    "group-data-[inline]:border-none": !0,
    "group-data-[inline]:shadow-none": !0,
    "group-data-[inline]:p-0": !0,
    "group-data-[inline]:bg-transparent": !0,
    "group-data-[inline]:outline-none": !0,
    "group-data-[inline]:!ring-0": !0,
    "group-data-[inline]:!w-full": !0,
    "group-data-[inline]:rounded": !0
  },
  colorpicker__swatchPreview: {
    "w-full": !0,
    flex: !0,
    "justify-start": !0,
    "items-center": !0,
    rounded: !0,
    "text-sm": !0,
    "cursor-pointer": !0,
    "outline-none": !0
  },
  colorpicker__canvasSwatchPreviewWrapper: {
    relative: !0,
    "before:content-['']": !0,
    "before:absolute": !0,
    "before:inset-0": !0,
    "before:rounded": !0,
    "before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]": !0,
    "before:z-[2]": !0
  },
  colorpicker__canvasSwatchPreview: {
    "text-base": !0,
    rounded: !0,
    "aspect-[1/1]": !0,
    "shrink-0": !0,
    grow: !0,
    "!w-[1.5em]": !0
  },
  colorpicker__valueString: {
    "text-base": !0,
    "text-neutral-700": !0,
    "selection:bg-blue-100": !0,
    "font-mono": !0,
    "inline-block": !0,
    "ml-2": !0,
    "mr-1.5": !0,
    "dark:text-neutral-300": !0,
    "dark:selection:text-neutral-700": !0
  },
  colorpicker__panel: {
    absolute: !0,
    "left-0": !0,
    "top-full": !0,
    "z-[99]": !0,
    flex: !0,
    "w-[100vw]": !0,
    "max-w-[18.5em]": !0,
    "touch-manipulation": !0,
    "flex-col": !0,
    rounded: !0,
    border: !0,
    "bg-white": !0,
    "p-2": !0,
    "shadow-md": !0,
    "group-data-[inline]:static": !0,
    "group-data-[inline]:max-w-none": !0,
    "border-neutral-400": !0,
    "group-data-[inline]:z-auto": !0,
    "group-data-[inline]:w-full": !0,
    "group-data-[inline]:shadow": !0,
    "group-data-[inline]:group-data-[disabled]:!cursor-not-allowed": !0,
    "group-data-[inline]:group-data-[disabled]:!pointer-events-none": !0,
    "group-data-[inline]:[&:has([id^=swatches]:first-child:last-child)]:w-auto": !0,
    "group-data-[inline]:[&:has([id^=swatches]:first-child:last-child)_[id^=swatches]>div]:w-[1.5em]": !0,
    "dark:bg-neutral-800": !0,
    "dark:border-neutral-500": !0,
    "dark:group-data-[inline]:bg-transparent": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none": !0
  },
  colorpicker__panelClose: {
    flex: !0,
    "justify-end": !0,
    "items-center": !0,
    "text-neutral-600": !0,
    "mb-1.5": !0,
    "-mt-1": !0,
    "border-none": !0,
    "bg-none": !0,
    "border-b": !0,
    "border-neutral-300": !0,
    "w-[calc(100%+1rem)]": !0,
    "-ml-2": !0,
    "pt-0": !0,
    "pr-2": !0,
    "pb-1.5": !0,
    "pl-2": !0,
    "dark:border-neutral-600": !0
  },
  colorpicker__closeIcon: {
    "w-[2rem]": !0,
    "aspect-[1/1]": !0,
    "p-1": !0,
    rounded: !0,
    border: !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:aspect-[1/1]": !0,
    "[&>svg]:max-w-none": !0,
    "[&>svg]:max-h-none": !0
  },
  colorpicker__controlGroup: {
    grid: !0,
    "[grid-template-areas:'a_a_a'_'b_c_e'_'b_d_e']": !0,
    "mb-2": !0
  },
  colorpicker__LS: {
    "[grid-area:a]": !0,
    relative: !0,
    "mb-2": !0
  },
  colorpicker__canvas: {
    block: !0,
    "w-full": !0
  },
  colorpicker__canvasLS: {
    "aspect-[2/1]": !0,
    "cursor-pointer": !0,
    "rounded-none": !0
  },
  colorpicker__canvasHue: {
    "rounded-none": !0
  },
  colorpicker__canvasAlpha: {
    "rounded-none": !0
  },
  colorpicker__preview: {
    rounded: !0,
    "after:rounded": !0,
    relative: !0,
    "inline-flex": !0,
    "aspect-[1/1]": !0,
    "overflow-hidden": !0,
    "[grid-area:b]": !0,
    "mr-2": !0,
    "after:absolute": !0,
    "after:left-0": !0,
    "after:top-0": !0,
    "after:h-full": !0,
    "after:w-full": !0,
    "after:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]": !0,
    "after:content-['']": !0,
    "w-[2em]": !0,
    "dark:after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]": !0
  },
  colorpicker__hue: {
    "[grid-area:c]": !0,
    relative: !0,
    "inline-flex": !0,
    "h-3/4": !0
  },
  colorpicker__alpha: {
    "[grid-area:d]": !0,
    relative: !0,
    "inline-flex": !0,
    "h-3/4": !0
  },
  colorpicker__eyeDropper: {
    "[grid-area:e]": !0,
    "w-[2em]": !0,
    "ml-2": !0,
    "inline-flex": !0,
    "self-center": !0,
    "justify-center": !0,
    "justify-self-center": !0,
    "aspect-[1/1]": !0,
    rounded: !0,
    border: !0,
    "border-neutral-300": !0,
    "cursor-pointer": !0,
    "content-center": !0,
    "items-center": !0,
    "text-neutral-600": !0,
    "dark:border-neutral-600": !0
  },
  colorpicker__eyeDropperIcon: {
    "w-auto": !0,
    "[&>svg]:w-[1em]": !0,
    "dark:text-neutral-400": !0
  },
  colorpicker__control: {
    absolute: !0,
    "bg-white": !0,
    "shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)]": !0,
    "-translate-y-1/2": !0,
    "-translate-x-1/2": !0,
    "pointer-events-none": !0,
    "data-[prevent-focus-style]:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)]": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-offset-2": !0,
    "focus-visible:ring-blue-500": !0
  },
  colorpicker__controlLS: {
    "w-[10px]": !0,
    "h-[10px]": !0,
    "rounded-full": !0
  },
  colorpicker__controlHue: {
    "w-[4px]": !0,
    "h-[calc(100%-2px)]": !0,
    "top-1/2": !0,
    rounded: !0
  },
  colorpicker__controlAlpha: {
    "w-[4px]": !0,
    "h-[calc(100%-2px)]": !0,
    "top-1/2": !0,
    rounded: !0
  },
  colorpicker__formatField: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    grow: !0
  },
  colorpicker__colorField: {
    "bg-transparent": !0,
    "text-neutral-700": !0,
    border: !0,
    "border-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "dark:text-neutral-300": !0,
    "dark:selection:text-neutral-700": !0
  },
  colorpicker__colorInputGroup: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    grow: !0
  },
  colorpicker__fieldGroup: {
    flex: !0,
    "flex-col": !0,
    "items-center": !0,
    "justify-center": !0,
    "w-full": !0,
    "mr-1": !0,
    "[&>input]:p-1": !0,
    "[&>input]:text-sm": !0,
    "[&>input]:text-neutral-700": !0,
    "[&>input]:selection:bg-blue-100": !0,
    "[&>input]:m-0": !0,
    "[&>input]:grow": !0,
    "[&>input]:shrink": !0,
    "[&>input]:w-full": !0,
    "[&>input]:border": !0,
    "[&>input]:border-neutral-300": !0,
    "[&>input]:rounded": !0,
    "[&>input]:text-center": !0,
    "[&>input]:appearance-none": !0,
    "[&>input::-webkit-outer-spin-button]:appearance-none": !0,
    "[&>input::-webkit-inner-spin-button]:appearance-none": !0,
    "[&>input::-webkit-inner-spin-button]:m-0": !0,
    "[&>input:focus]:outline-none": !0,
    "[&>input:focus]:ring-1": !0,
    "[&>input:focus]:ring-blue-600": !0,
    "[&>input:focus]:border-blue-600": !0,
    "max-[431px]:[&>input]:text-base": !0
  },
  colorpicker__fieldLabel: {
    "text-xs": !0,
    "text-neutral-500": !0,
    "mt-1.5": !0,
    "dark:text-neutral-400": !0
  },
  colorpicker__formatSwitcher: {
    flex: !0,
    "justify-end": !0,
    "self-start": !0,
    uppercase: !0,
    "shrink-0": !0,
    "p-1": !0,
    "mt-0.5": !0,
    "text-neutral-600": !0,
    rounded: !0,
    "select-none": !0,
    "dark:text-neutral-400": !0
  },
  colorpicker__switchIcon: {
    "[&>svg]:w-3": !0
  },
  colorpicker__swatches: {
    "inline-flex": !0,
    "flex-wrap": !0,
    "w-full": !0,
    "justify-self-center": !0,
    "min-w-0": !0,
    "mx-auto": !0,
    "px-[1px]": !0,
    "pt-2": !0,
    "pb-2": !0,
    "mt-2": !0,
    "-mb-2": !0,
    "border-t": !0,
    "border-neutral-300": !0,
    "overflow-auto": !0,
    "max-h-[200px]": !0,
    "select-none": !0,
    "first:-mt-[3px]": !0,
    "first:last:-mb-[3px]": !0,
    "first:last:pb-[2px]": !0,
    "first:pt-px": !0,
    "first:border-t-0": !0,
    "dark:border-neutral-600": !0
  },
  colorpicker__swatchGroup: {
    flex: !0,
    "flex-wrap": !0,
    "w-full": !0,
    "mb-2": !0,
    "last:mb-0": !0
  },
  colorpicker__swatchGroupLabel: {
    "ml-1": !0,
    block: !0,
    "w-full": !0,
    "text-sm": !0,
    "text-neutral-500": !0,
    "dark:text-neutral-400": !0
  },
  colorpicker__swatch: {
    relative: !0,
    "text-base": !0,
    "w-[calc((100%/10)-0.5em)]": !0,
    "max-w-[22px]": !0,
    "m-[0.16em]": !0,
    "cursor-pointer": !0,
    "before:content-['']": !0,
    "before:absolute": !0,
    "before:inset-0": !0,
    "before:rounded": !0,
    "before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]": !0,
    "before:pointer-events-none": !0,
    "before:z-[2]": !0,
    "dark:before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]": !0,
    "data-[active=true]:after:content-['']": !0,
    "data-[active=true]:after:block": !0,
    "data-[active=true]:after:absolute": !0,
    "data-[active=true]:after:w-1.5": !0,
    "data-[active=true]:after:h-1.5": !0,
    "data-[active=true]:after:top-1/2": !0,
    "data-[active=true]:after:left-1/2": !0,
    "data-[active=true]:after:pointer-events-none": !0,
    "data-[active=true]:after:rounded-full": !0,
    "data-[active=true]:after:-translate-x-1/2": !0,
    "data-[active=true]:after:-translate-y-1/2": !0,
    "data-[active=true]:after:bg-white": !0,
    "data-[active=true]:after:z-[2]": !0,
    "data-[active=true]:after:ring-1": !0,
    "data-[active=true]:after:ring-[rgba(0,0,0,0.33)]": !0,
    "[&>canvas]:block": !0,
    "[&>canvas]:w-full": !0,
    "[&>canvas]:aspect-[1/1]": !0,
    "[&>canvas]:rounded": !0,
    "[&>canvas:focus-visible]:outline-none": !0,
    "[&>canvas:focus-visible]:ring-2": !0,
    "[&>canvas:focus-visible]:ring-blue-500": !0,
    "[&>canvas:focus-visible]:ring-offset-2": !0,
    "[&>canvas:focus-visible]:ring-offset-white": !0,
    "dark:[&>canvas:focus-visible]:ring-offset-neutral-700": !0
  },
  datepicker__inner: {
    relative: !0,
    "pl-0": !0
  },
  datepicker__removeSelection: {
    "self-stretch": !0,
    "text-base": !0,
    flex: !0,
    "items-center": !0,
    "ml-1": !0,
    "mr-2": !0,
    "text-neutral-700": !0,
    "hover:text-red-400": !0,
    "z-10": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__clearIcon: {
    "[&>svg]:w-[0.75em]": !0
  },
  datepicker__panelWrapper: {
    "group/panel": !0,
    absolute: !0,
    "min-w-[20em]": !0,
    "top-[calc(100%_+_0.5em)]": !0,
    "shadow-[0_0_1.25em_rgba(0,0,0,.25)]": !0,
    rounded: !0,
    "p-4": !0,
    "bg-white": !0,
    "z-10": !0,
    "dark:bg-neutral-800": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:w-full": !0
  },
  datepicker__panelHeader: {
    grid: !0,
    "grid-cols-[2.5em_1fr_2.5em]": !0,
    "justify-center": !0,
    "items-center": !0,
    "border-b-2": !0,
    "border-neutral-300": !0,
    "mb-2": !0,
    "pb-2.5": !0,
    "dark:border-neutral-600": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:grid-cols-[2.5em_1fr_2.5em_2.5em]": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:group-data-[panel=time]/panel:grid-cols-[2.5em_1fr_2.5em]": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:group-data-[panel=month]/panel:grid-cols-[2.5em_1fr_2.5em]": !0
  },
  datepicker__panelClose: {
    "aspect-[1/1]": !0,
    border: !0,
    "border-neutral-300": !0,
    rounded: !0,
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "text-neutral-700": !0,
    "[&_svg]:w-[1.25em]": !0,
    "dark:text-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-data-[panel=time]/panel:col-start-3": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-data-[panel=month]/panel:col-start-3": !0
  },
  datepicker__panel: {
    flex: !0,
    "justify-center": !0
  },
  datepicker__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "pl-3": !0,
    "placeholder:text-neutral-400": !0
  },
  datepicker__monthsHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "col-start-2": !0,
    "col-end-2": !0
  },
  datepicker__timeHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "col-start-2": !0,
    "col-end-2": !0
  },
  datepicker__months: {
    grid: !0,
    "grid-cols-3": !0,
    "w-full": !0
  },
  datepicker__month: {
    "m-1.5": !0,
    "p-1.5": !0,
    "text-center": !0,
    "text-neutral-700": !0,
    rounded: !0,
    "bg-neutral-200": !0,
    "aria-selected:!bg-blue-600": !0,
    "aria-selected:!text-white": !0,
    "focus:outline": !0,
    "focus:outline-2": !0,
    "focus:outline-blue-600": !0,
    "focus:outline-offset-2": !0,
    "focus:bg-white": !0,
    "focus:text-neutral-700": !0,
    "data-[is-extra=true]:opacity-25": !0,
    "group-data-[disabled=true]:opacity-50": !0,
    "group-data-[disabled=true]:cursor-default": !0,
    "group-data-[disabled=true]:pointer-events-none": !0,
    "dark:bg-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__yearsHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "text-neutral-700": !0,
    "col-start-2": !0,
    "col-end-2": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__years: {
    grid: !0,
    "grid-cols-5": !0,
    "w-full": !0
  },
  datepicker__year: {
    "text-base": !0,
    "text-center": !0,
    "text-neutral-700": !0,
    "items-center": !0,
    "m-1.5": !0,
    "p-1.5": !0,
    rounded: !0,
    "bg-neutral-200": !0,
    "aria-selected:!bg-blue-600": !0,
    "aria-selected:!text-white": !0,
    "focus:outline": !0,
    "focus:outline-2": !0,
    "focus:outline-blue-600": !0,
    "focus:outline-offset-2": !0,
    "focus:bg-white": !0,
    "data-[is-extra=true]:opacity-25": !0,
    "group-data-[disabled=true]:opacity-50": !0,
    "group-data-[disabled=true]:cursor-default": !0,
    "group-data-[disabled=true]:pointer-events-none": !0,
    "dark:bg-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__weekDays: {
    grid: !0,
    "grid-cols-7": !0
  },
  datepicker__weekDay: {
    "w-[2.25em]": !0,
    "text-neutral-700": !0,
    "m-1.5": !0,
    rounded: !0,
    "font-medium": !0,
    lowercase: !0,
    "dark:text-neutral-500": !0
  },
  datepicker__calendarWeeks: {
    "": !0
  },
  datepicker__week: {
    grid: !0,
    "grid-cols-7": !0,
    "group-data-[disabled=true]:opacity-50": !0,
    "group-data-[disabled=true]:cursor-default": !0,
    "group-data-[disabled=true]:pointer-events-none": !0
  },
  datepicker__dayCell: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "text-center": !0,
    "text-neutral-700": !0,
    "w-[2.25em]": !0,
    "h-[2.25em]": !0,
    "m-1": !0,
    "p-2": !0,
    rounded: !0,
    "bg-neutral-200": !0,
    "aria-selected:bg-blue-600": !0,
    "aria-selected:text-white": !0,
    "focus:outline": !0,
    "focus:outline-2": !0,
    "focus:outline-blue-600": !0,
    "focus:outline-offset-2": !0,
    "focus:bg-white": !0,
    "data-[is-extra=true]:opacity-25": !0,
    "data-[disabled=true]:opacity-50": !0,
    "data-[disabled=true]:cursor-default": !0,
    "data-[disabled=true]:pointer-events-none": !0,
    "dark:bg-neutral-600": !0,
    "dark:text-neutral-300": !0,
    "dark:aria-selected:bg-blue-600": !0,
    "dark:aria-selected:text-white": !0,
    "dark:focus:outline-blue-600": !0,
    "dark:focus:bg-neutral-200": !0,
    "dark:focus:text-neutral-700": !0
  },
  datepicker__timeInput: {
    "w-full": !0,
    "border-2": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "text-neutral-700": !0,
    "border-neutral-300": !0,
    rounded: !0,
    "p-1.5": !0,
    "my-2.5": !0,
    "focus-visible:outline-blue-600": !0,
    "dark:text-neutral-300": !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-600": !0
  },
  datepicker__daysHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0
  },
  datepicker__prev: {
    "mr-auto": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "hover:bg-neutral-100": !0,
    rounded: !0,
    "col-start-1": !0,
    "col-end-1": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0
  },
  datepicker__prevLabel: {
    hidden: !0
  },
  datepicker__prevIcon: {
    flex: !0,
    "w-[0.75em]": !0,
    "select-none": !0,
    "text-neutral-700": !0,
    "[&>svg]:w-full": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__dayButton: {
    "appearance-none": !0,
    "text-neutral-700": !0,
    "cursor-pointer": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "border-2": !0,
    "border-neutral-300": !0,
    rounded: !0,
    "mx-1": !0,
    "hover:border-blue-600": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0,
    "dark:text-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "dark:hover:border-blue-500": !0
  },
  datepicker__monthButton: {
    "appearance-none": !0,
    "text-neutral-700": !0,
    "cursor-pointer": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "border-2": !0,
    "border-neutral-300": !0,
    rounded: !0,
    "mx-1": !0,
    "hover:border-blue-600": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0,
    "dark:text-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "dark:hover:border-blue-500": !0
  },
  datepicker__yearButton: {
    "appearance-none": !0,
    "text-neutral-700": !0,
    "cursor-pointer": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "border-2": !0,
    "border-neutral-300": !0,
    rounded: !0,
    "mx-1": !0,
    "hover:border-blue-600": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0,
    "dark:text-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "dark:hover:border-blue-500": !0
  },
  datepicker__next: {
    "ml-auto": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    rounded: !0,
    "hover:bg-neutral-100": !0,
    "hover:rounded": !0,
    "col-start-3": !0,
    "col-end-3": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0
  },
  datepicker__nextLabel: {
    hidden: !0
  },
  datepicker__nextIcon: {
    flex: !0,
    "w-[0.75em]": !0,
    "select-none": !0,
    "text-neutral-700": !0,
    "[&>svg]:w-full": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__openButton: {
    "appearance-none": !0,
    "border-0": !0,
    "bg-transparent": !0,
    flex: !0,
    "p-0": !0,
    "self-stretch": !0,
    "cursor-pointer": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0,
    "focus-visible:rounded": !0
  },
  datepicker__calendarIcon: {
    "text-neutral-600": !0,
    "focus-visible:text-blue-600": !0,
    flex: !0,
    "w-[1em]": !0,
    "grow-0": !0,
    "shrink-0": !0,
    "self-stretch": !0,
    "select-none": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:max-h-[1em]": !0,
    "[&>svg]:max-w-[1em]": !0
  },
  dropdown__placeholder: {
    "text-neutral-400": !0,
    grow: !0,
    "dark:text-neutral-400/50": !0
  },
  dropdown__selector: {
    flex: !0,
    grow: !0,
    "justify-between": !0,
    "w-full": !0,
    "py-2": !0,
    "pl-3": !0,
    "pr-0": !0,
    "text-base": !0,
    "text-neutral-700": !0,
    "text-left": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "group-data-[prefix-icon]:!pl-0": !0,
    "group-data-[suffix-icon]:!pr-0": !0,
    "data-[placeholder]:text-neutral-400": !0,
    "selection:bg-blue-100": !0,
    "dark:data-[placeholder]:text-neutral-400/50": !0,
    "dark:text-neutral-300": !0
  },
  dropdown__selectIcon: {
    "shrink-0": !0
  },
  dropdown__selectionsWrapper: {
    "w-[85%]": !0,
    "overflow-hidden": !0
  },
  dropdown__selection: {
    "[&>*]:ml-0": !0
  },
  dropdown__selections: {
    "inline-flex": !0,
    "items-center": !0
  },
  dropdown__selectionsItem: {
    "whitespace-nowrap": !0,
    "mr-1": !0
  },
  dropdown__tagWrapper: {
    "[&.formkit-dropZone_.formkit-tag]:opacity-25": !0,
    "[&.formkit-touchDropZone_.formkit-tag]:opacity-25": !0
  },
  dropdown__truncationCount: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "h-[1.5em]": !0,
    rounded: !0,
    "bg-neutral-400": !0,
    "text-white": !0,
    "whitespace-nowrap": !0,
    "text-[11px]": !0,
    "[line-height:1em]": !0,
    "tracking-tighter": !0,
    "leading-0": !0,
    "py-1": !0,
    "px-1": !0,
    "shrink-0": !0,
    "my-auto": !0
  },
  mask__inner: {
    relative: !0
  },
  mask__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "group-data-[has-overlay]:!caret-neutral-700": !0,
    "dark:group-data-[has-overlay]:!caret-neutral-300": !0
  },
  rating__inner: {
    "text-neutral-300": !0
  },
  rating__itemsWrapper: {
    relative: !0,
    "inline-flex": !0,
    "focus:border-blue-600": !0
  },
  rating__onItemRow: {
    "h-full": !0,
    "w-full": !0
  },
  rating__offItemRow: {
    "h-full": !0,
    "w-full": !0
  },
  rating__onItemWrapper: {
    "[&>*]:w-full": !0,
    "[&>*]:h-full": !0,
    "w-full": !0,
    "h-full": !0,
    "text-yellow-400": !0
  },
  rating__offItemWrapper: {
    "text-neutral-400": !0,
    "w-full": !0,
    "h-full": !0,
    "[&>*]:w-full": !0,
    "[&>*]:h-full": !0,
    "dark:text-neutral-500": !0
  },
  rating__ratingItem: {
    relative: !0,
    "focus-within:outline": !0,
    "focus-within:outline-blue-600": !0,
    "w-[1.5em]": !0,
    "h-[1.5em]": !0
  },
  rating__itemLabelInner: {
    "h-px": !0,
    "w-px": !0,
    "overflow-hidden": !0,
    absolute: !0,
    "white-space-nowrap": !0
  },
  rating__itemLabel: {
    absolute: !0,
    "h-full": !0
  },
  rating__ratingIcon: {
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    flex: !0
  },
  rating__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "outline-none": !0
  },
  rating__messages: {
    "mt-1.5": !0
  },
  repeater__outer: {
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "text-base": !0,
    "group/repeater": !0,
    "max-w-full": !0
  },
  repeater__fieldset: {
    "min-w-0": !0
  },
  repeater__legend: {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "dark:text-neutral-300": !0,
    "mb-2": !0
  },
  repeater__content: {
    "min-w-0": !0,
    grow: !0,
    "p-5": !0,
    flex: !0,
    "flex-col": !0,
    "align-center": !0,
    "[&>div[data-type]]:max-w-none": !0,
    "[&>div[data-type]:last-child]:mb-0": !0
  },
  repeater__addButton: {
    "!mb-0": !0,
    "group-data-[disabled]/repeater:pointer-events-none": !0,
    "group-data-[disabled]/repeater:opacity-50": !0,
    "group-data-[disabled]/repeater:grayscale": !0
  },
  repeater__controlLabel: {
    absolute: !0,
    "opacity-0": !0,
    "pointer-events-none": !0,
    "text-[0px]": !0
  },
  repeater__controls: {
    flex: !0,
    "flex-col": !0,
    "items-center": !0,
    "justify-center": !0,
    "bg-neutral-50": !0,
    "p-2": !0,
    "[&>li]:aspect-[1/1]": !0,
    "dark:bg-neutral-800": !0,
    rounded: !0,
    "rounded-tl-none": !0,
    "rounded-bl-none": !0
  },
  repeater__downControl: {
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    "my-1.5": !0,
    "mx-auto": !0,
    flex: !0,
    "items-center": !0,
    "appearance-none": !0,
    "justify-center": !0,
    "aspect-[1/1]": !0,
    "text-neutral-500": !0,
    "hover:text-blue-600": !0,
    "disabled:hover:text-inherit": !0,
    "disabled:opacity-25": !0,
    "disabled:!text-neutral-500": !0,
    "dark:text-neutral-300": !0,
    "dark:disabled:!text-neutral-300": !0,
    "dark:hover:text-blue-500": !0
  },
  repeater__upControl: {
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    "my-1.5": !0,
    "mx-auto": !0,
    flex: !0,
    "items-center": !0,
    "appearance-none": !0,
    "justify-center": !0,
    "aspect-[1/1]": !0,
    "text-neutral-500": !0,
    "hover:text-blue-600": !0,
    "disabled:hover:text-inherit": !0,
    "disabled:opacity-25": !0,
    "disabled:!text-neutral-500": !0,
    "dark:text-neutral-300": !0,
    "dark:disabled:!text-neutral-300": !0,
    "dark:hover:text-blue-500": !0
  },
  repeater__removeControl: {
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    "my-1.5": !0,
    "mx-auto": !0,
    flex: !0,
    "items-center": !0,
    "appearance-none": !0,
    "justify-center": !0,
    "aspect-[1/1]": !0,
    "text-neutral-500": !0,
    "hover:text-blue-600": !0,
    "disabled:hover:text-inherit": !0,
    "disabled:opacity-25": !0,
    "disabled:!text-neutral-500": !0,
    "dark:text-neutral-300": !0,
    "dark:disabled:!text-neutral-300": !0,
    "dark:hover:text-blue-500": !0
  },
  repeater__insertControl: {
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    "my-1.5": !0,
    "mx-auto": !0,
    flex: !0,
    "items-center": !0,
    "appearance-none": !0,
    "justify-center": !0,
    "aspect-[1/1]": !0,
    "text-neutral-500": !0,
    "hover:text-blue-600": !0,
    "disabled:hover:text-inherit": !0,
    "disabled:opacity-25": !0,
    "disabled:!text-neutral-500": !0,
    "dark:text-neutral-300": !0,
    "dark:disabled:!text-neutral-300": !0,
    "dark:hover:text-blue-500": !0
  },
  repeater__help: {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0,
    "mb-2": !0,
    "-mt-1": !0
  },
  repeater__item: {
    flex: !0,
    relative: !0,
    "w-full": !0,
    "mb-2": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-300": !0,
    rounded: !0,
    shadow: !0,
    "dark:border-neutral-600": !0,
    "dark:bg-transparent": !0,
    "[&.formkit-dropZone]:opacity-30": !0,
    "[&.formkit-dropZone]:pointer-events-none": !0,
    "[&.formkit-dropZone]:blur-[2px]": !0
  },
  repeater__dragHandleWrapper: {
    relative: !0,
    "w-8": !0,
    "bg-neutral-50": !0,
    rounded: !0,
    "rounded-tr-none": !0,
    "rounded-br-none": !0,
    "dark:bg-neutral-800": !0
  },
  repeater__dragHandle: {
    "w-full": !0,
    "h-full": !0,
    flex: !0,
    absolute: !0,
    "top-0": !0,
    "left-0": !0,
    "cursor-grab": !0,
    "active:cursor-grabbing": !0
  },
  repeater__dragHandleIcon: {
    "w-2": !0,
    "m-auto": !0,
    "text-neutral-500": !0,
    "dark:text-neutral-400": !0,
    "[&>svg>path]:fill-current": !0
  },
  repeater__moveDownIcon: {
    block: !0,
    "w-[0.75em]": !0,
    "aspect-[1/1]": !0
  },
  repeater__moveUpIcon: {
    block: !0,
    "w-[0.75em]": !0,
    "aspect-[1/1]": !0
  },
  repeater__removeIcon: {
    block: !0,
    "w-[1.25em]": !0,
    "aspect-[1/1]": !0
  },
  repeater__addIcon: {
    block: !0,
    "w-[1.25em]": !0,
    "aspect-[1/1]": !0
  },
  slider__outer: {
    group: !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  slider__help: {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0,
    "-mt-0.5": !0,
    "mb-1.5": !0
  },
  slider__sliderInner: {
    flex: !0,
    "items-center": !0,
    "[&>[data-type=number]]:mb-0": !0,
    "[&>[data-type=number]]:ml-2.5": !0,
    "[&>[data-type=number]]:shrink": !0,
    "[&>[data-type=number]]:grow-0": !0,
    "[&[data-has-mark-labels=true]_[id^=track]]:mb-5": !0
  },
  slider__track: {
    grow: !0,
    relative: !0,
    "z-20": !0,
    "py-2.5": !0,
    "select-none": !0
  },
  slider__trackWrapper: {
    "px-[2px]": !0,
    "rounded-full": !0,
    "bg-neutral-300": !0,
    "dark:bg-neutral-500": !0
  },
  slider__trackInner: {
    "h-1.5": !0,
    "mx-0.5": !0,
    relative: !0
  },
  slider__prefixIcon: {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  slider__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  slider__fill: {
    "h-full": !0,
    "rounded-full": !0,
    absolute: !0,
    "top-0": !0,
    "-mx-1": !0,
    "bg-blue-600": !0,
    "group-data-[disabled]:bg-neutral-500": !0
  },
  slider__marks: {
    absolute: !0,
    "pointer-events-none": !0,
    "inset-0": !0
  },
  slider__mark: {
    absolute: !0,
    "top-1/2": !0,
    "w-[3px]": !0,
    "h-[3px]": !0,
    "rounded-full": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0,
    "bg-neutral-400": !0,
    "data-[active=true]:bg-white": !0
  },
  slider__markLabel: {
    absolute: !0,
    "top-[calc(100%+0.5em)]": !0,
    "left-1/2": !0,
    "text-neutral-400": !0,
    "text-xs": !0,
    "-translate-x-1/2": !0
  },
  slider__handles: {
    "m-0": !0,
    "p-0": !0,
    "list-none": !0
  },
  slider__handle: {
    group: !0,
    "select-none": !0,
    "w-4": !0,
    "h-4": !0,
    "rounded-full": !0,
    "bg-white": !0,
    absolute: !0,
    "top-1/2": !0,
    "left-0": !0,
    "z-30": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0,
    "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.5)]": !0,
    "focus-visible:outline-0": !0,
    "focus-visible:ring-2": !0,
    "ring-blue-600": !0,
    "data-[is-target=true]:z-20": !0,
    "dark:bg-neutral-200": !0
  },
  slider__tooltip: {
    absolute: !0,
    "bottom-full": !0,
    "left-1/2": !0,
    "-translate-x-1/2": !0,
    "-translate-y-[4px]": !0,
    "bg-blue-600": !0,
    "text-white": !0,
    "py-1": !0,
    "px-1.5": !0,
    "text-xs": !0,
    "leading-none": !0,
    "whitespace-nowrap": !0,
    rounded: !0,
    "opacity-0": !0,
    "pointer-events-none": !0,
    "transition-opacity": !0,
    'after:content-[""]': !0,
    "after:absolute": !0,
    "after:top-full": !0,
    "after:left-1/2": !0,
    "after:-translate-x-1/2": !0,
    "after:-translate-y-[1px]": !0,
    "after:border-4": !0,
    "after:border-transparent": !0,
    "after:border-t-blue-600": !0,
    "group-hover:opacity-100": !0,
    "group-focus-visible:opacity-100": !0,
    "group-data-[show-tooltip=true]:opacity-100": !0
  },
  slider__linkedValues: {
    flex: !0,
    "items-start": !0,
    "justify-between": !0
  },
  slider__minValue: {
    grow: !0,
    "!max-w-[45%]": !0,
    "mb-0": !0,
    "[&>div>div]:relative": !0,
    '[&>div>div::after]:content-[""]': !0,
    "[&>div>div::after]:absolute": !0,
    "[&>div>div::after]:top-1/2": !0,
    "[&>div>div::after]:left-[105.5%]": !0,
    "[&>div>div::after]:w-[12%]": !0,
    "[&>div>div::after]:h-[1px]": !0,
    "[&>div>div::after]:bg-neutral-400": !0,
    "dark:[&>div>div::after]:bg-neutral-500": !0
  },
  slider__maxValue: {
    grow: !0,
    "!max-w-[45%]": !0,
    "mb-0": !0,
    relative: !0
  },
  slider__chart: {
    relative: !0,
    "z-20": !0,
    "mb-2": !0,
    flex: !0,
    "justify-between": !0,
    "items-center": !0,
    "w-full": !0,
    "aspect-[3/1]": !0
  },
  slider__chartBar: {
    absolute: !0,
    "bottom-0": !0,
    "h-full": !0,
    "bg-neutral-400": !0,
    "data-[active=false]:bg-neutral-300": !0,
    "dark:bg-neutral-500": !0,
    "dark:data-[active=false]:bg-neutral-600": !0
  },
  taglist__inner: {
    "py-2": !0,
    "pr-0": !0,
    "pl-0": !0
  },
  taglist__tags: {
    "pl-3": !0
  },
  taglist__tagWrapper: {
    "[&.formkit-dropZone_.formkit-tag]:opacity-25": !0,
    "[&.formkit-touchDropZone_.formkit-tag]:opacity-25": !0
  },
  taglist__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "!p-0": !0,
    "!w-[0%]": !0,
    "min-w-[1em]": !0,
    "inline-block": !0,
    "-mt-1": !0,
    "first:mt-0": !0,
    "first:mb-1": !0
  },
  taglist__listboxButton: {
    "ml-auto": !0,
    "shrink-0": !0
  },
  toggle__outer: {
    group: !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0,
    "max-w-none": !0
  },
  toggle__altLabel: {
    block: !0,
    "w-full": !0,
    "mb-1.5": !0,
    "font-bold": !0,
    "text-xs": !0,
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  toggle__inner: {
    peer: !0,
    "inline-block": !0,
    "mr-2": !0
  },
  toggle__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    peer: !0,
    absolute: !0,
    "opacity-0": !0,
    "w-0": !0,
    "h-0": !0
  },
  toggle__label: {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "mb-1": !0,
    "dark:text-neutral-300": !0,
    "peer-first:font-normal": !0,
    "peer-first:mb-0": !0
  },
  toggle__innerLabel: {
    absolute: !0,
    "text-neutral-200": !0,
    "text-[10px]": !0,
    "font-bold": !0,
    "select-none": !0,
    "left-full": !0,
    "top-1/2": !0,
    "-translate-x-full": !0,
    "-translate-y-1/2": !0,
    "px-1": !0
  },
  toggle__thumb: {
    relative: !0,
    "p-0.5": !0,
    "left-0": !0,
    "aspect-[1/1]": !0,
    "rounded-full": !0,
    "transition-all": !0,
    "w-[1.25em]": !0,
    "bg-neutral-50": !0,
    "text-neutral-600": !0,
    "shadow-base": !0
  },
  toggle__track: {
    "p-0.5": !0,
    "min-w-[3em]": !0,
    relative: !0,
    "cursor-pointer": !0,
    "select-none": !0,
    "rounded-full": !0,
    "transition-all": !0,
    "bg-neutral-400": !0,
    "peer-checked:bg-blue-600": !0,
    "peer-checked:[&>div:last-child]:left-full": !0,
    "peer-checked:[&>div:last-child]:-translate-x-full": !0,
    "peer-checked:[&>div:first-child:not(:last-child)]:left-0": !0,
    "peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0": !0,
    "shadow-sm": !0,
    "peer-focus-visible:ring-2": !0,
    "peer-focus-visible:ring-blue-500": !0,
    "peer-focus-visible:ring-offset-2": !0,
    "dark:bg-neutral-500": !0
  },
  toggle__valueLabel: {
    "font-bold": !0,
    "text-xs": !0,
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  toggle__wrapper: {
    flex: !0,
    "flex-wrap": !0,
    "items-center": !0,
    "mb-1.5": !0
  },
  togglebuttons__wrapper: {
    "mb-1.5": !0
  },
  togglebuttons__options: {
    "group/options": !0,
    "inline-flex": !0,
    "data-[vertical=true]:flex-col": !0
  },
  togglebuttons__option: {
    "group/option": !0
  },
  togglebuttons__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "!px-4": !0,
    "!mb-0": !0,
    relative: !0,
    "focus:z-10": !0,
    "group-data-[vertical=true]/options:w-full": !0,
    "justify-center": !0,
    "bg-blue-50": !0,
    "disabled:opacity-50": !0,
    "disabled:cursor-not-allowed": !0,
    "group-data-[disabled]:disabled:opacity-100": !0,
    "dark:bg-transparent": !0,
    "dark:disabled:bg-transparent": !0,
    "dark:disabled:text-blue-500": !0,
    "dark:text-blue-500": !0,
    "aria-[pressed=true]:bg-blue-600": !0,
    "aria-[pressed=true]:text-white": !0,
    "dark:aria-[pressed=true]:bg-blue-600": !0,
    "dark:aria-[pressed=true]:text-white": !0,
    "group-[]/option:!rounded-none": !0,
    "group-data-[vertical=false]/options:group-first/option:!rounded": !0,
    "group-data-[vertical=true]/options:group-first/option:!rounded": !0,
    "group-data-[vertical=false]/options:group-first/option:!rounded-tr-none": !0,
    "group-data-[vertical=false]/options:group-first/option:!rounded-br-none": !0,
    "group-data-[vertical=true]/options:group-first/option:!rounded-bl-none": !0,
    "group-data-[vertical=true]/options:group-first/option:!rounded-br-none": !0,
    "group-data-[vertical=false]/options:group-last/option:!rounded": !0,
    "group-data-[vertical=true]/options:group-last/option:!rounded": !0,
    "group-data-[vertical=false]/options:group-last/option:!rounded-tl-none": !0,
    "group-data-[vertical=false]/options:group-last/option:!rounded-bl-none": !0,
    "group-data-[vertical=true]/options:group-last/option:!rounded-tl-none": !0,
    "group-data-[vertical=true]/options:group-last/option:!rounded-tr-none": !0,
    "group-data-[vertical=false]/options:group-[]/option:!border-r-0": !0,
    "group-data-[vertical=false]/options:group-last/option:!border-r": !0,
    "group-data-[vertical=false]/options:group-[]/option:aria-[pressed=true]:border-x-blue-500": !0,
    "group-data-[vertical=false]/options:group-first/option:aria-[pressed=true]:border-l-blue-600": !0,
    "group-data-[vertical=false]/options:group-last/option:aria-[pressed=true]:border-r-blue-600": !0,
    "dark:group-data-[vertical=false]/options:group-[]/option:aria-[pressed=true]:border-x-blue-600": !0,
    "dark:group-data-[vertical=false]/options:group-first/option:aria-[pressed=true]:border-l-blue-600": !0,
    "dark:group-data-[vertical=false]/options:group-last/option:aria-[pressed=true]:border-r-blue-600": !0,
    "group-data-[vertical=true]/options:group-[]/option:!border-b-0": !0,
    "group-data-[vertical=true]/options:group-last/option:!border-b": !0,
    "group-data-[vertical=true]/options:group-[]/option:aria-[pressed=true]:border-y-blue-500": !0,
    "group-data-[vertical=true]/options:group-first/option:aria-[pressed=true]:border-t-blue-600": !0,
    "group-data-[vertical=true]/options:group-last/option:aria-[pressed=true]:border-b-blue-600": !0,
    "dark:group-data-[vertical=true]/options:group-[]/option:aria-[pressed=true]:border-y-blue-600": !0,
    "dark:group-data-[vertical=true]/options:group-first/option:aria-[pressed=true]:border-t-blue-600": !0,
    "dark:group-data-[vertical=true]/options:group-last/option:aria-[pressed=true]:border-b-blue-600": !0
  },
  transferlist__outer: {
    group: !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0,
    "max-w-none": !0,
    "[&_.dnd-placeholder]:bg-blue-600": !0,
    "[&_.dnd-placeholder]:text-white": !0
  },
  transferlist__wrapper: {
    flex: !0,
    "flex-col": !0,
    "sm:flex-row": !0,
    "justify-between": !0,
    "w-full": !0,
    "max-w-none": !0
  },
  transferlist__help: {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0,
    "pb-2": !0
  },
  transferlist__transferlist: {
    grow: !0,
    shrink: !0,
    "min-w-0": !0,
    shadow: !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "aspect-[4/5]": !0,
    flex: !0,
    "flex-col": !0,
    "h-[350px]": !0,
    border: !0,
    "border-neutral-300": !0,
    rounded: !0,
    "overflow-hidden": !0,
    "select-none": !0,
    "[&:has(:focus-visible)]:ring-1": !0,
    "[&:has(:focus-visible)]:ring-blue-500": !0,
    "dark:border-neutral-600": !0,
    "dark:bg-neutral-900/50": !0
  },
  transferlist__transferlistHeader: {
    flex: !0,
    "bg-neutral-100": !0,
    "text-neutral-600": !0,
    "text-sm": !0,
    "justify-between": !0,
    "items-center": !0,
    "border-b": !0,
    "border-neutral-300": !0,
    "py-2": !0,
    "px-2.5": !0,
    "dark:bg-neutral-700": !0,
    "dark:border-neutral-600": !0,
    "dark:text-neutral-400": !0
  },
  transferlist__transferlistHeaderItemCount: {
    "ml-auto": !0,
    "text-xs": !0,
    "min-w-[1.5em]": !0,
    "[line-height:1.5em]": !0,
    "px-2": !0,
    "text-center": !0,
    "rounded-xl": !0,
    "bg-neutral-200": !0,
    "text-neutral-700": !0,
    "dark:bg-neutral-500": !0,
    "dark:text-neutral-300": !0
  },
  transferlist__transferlistListItems: {
    "list-none": !0,
    "bg-white": !0,
    "h-full": !0,
    "overflow-x-hidden": !0,
    "overflow-y-auto": !0,
    "dark:bg-transparent": !0,
    "outline-none": !0
  },
  transferlist__transferlistListItem: {
    "py-2": !0,
    "px-2": !0,
    "text-neutral-700": !0,
    "ring-1": !0,
    "ring-neutral-200": !0,
    "aria-selected:bg-blue-100": !0,
    "data-[is-active=true]:bg-blue-100": !0,
    "data-[is-active=true]:ring-blue-200": !0,
    "aria-selected:ring-blue-200": !0,
    relative: !0,
    flex: !0,
    "cursor-pointer": !0,
    "items-center": !0,
    "bg-white": !0,
    "pl-[1.5em]": !0,
    "first:-mt-px": !0,
    "first:border-t": !0,
    "aria-selected:z-[2]": !0,
    "aria-selected:border-transparent": !0,
    "aria-selected:ring-1": !0,
    "data-[is-active=true]:z-[2]": !0,
    "data-[is-active=true]:border-transparent": !0,
    "data-[is-active=true]:ring-1": !0,
    "group-data-[is-max=true]:cursor-not-allowed": !0,
    "dark:bg-neutral-800": !0,
    "dark:text-neutral-300": !0,
    "dark:data-[is-active=true]:bg-blue-900": !0,
    "dark:aria-selected:bg-blue-900": !0,
    "dark:ring-neutral-700": !0,
    "dark:data-[is-active=true]:ring-blue-600": !0,
    "dark:aria-selected:ring-blue-600": !0,
    "[&.formkit-dropZone]:bg-blue-100": !0,
    "[&.formkit-selectionDropZone]:bg-blue-100": !0,
    "[&.formkit-touchDropZone]:bg-blue-100": !0,
    "[&.formkit-touchSelectionDropZone]:bg-blue-100": !0,
    "[&.formkit-longTouch]:bg-blue-100": !0,
    "dark:[&.formkit-dropZone]:bg-blue-900": !0,
    "dark:[&.formkit-selectionDropZone]:bg-blue-900": !0,
    "dark:[&.formkit-touchDropZone]:bg-blue-900": !0,
    "dark:[&.formkit-touchSelectionDropZone]:bg-blue-900": !0,
    "dark:[&.formkit-longTouch]:bg-blue-900": !0
  },
  transferlist__transferlistOption: {
    "text-sm": !0
  },
  transferlist__transferControls: {
    "inline-flex": !0,
    "grow-0": !0,
    shrink: !0,
    border: !0,
    "border-neutral-300": !0,
    "flex-row": !0,
    "sm:flex-col": !0,
    "justify-center": !0,
    "my-2": !0,
    "sm:my-auto": !0,
    "mx-auto": !0,
    "sm:mx-2": !0,
    rounded: !0,
    "overflow-clip": !0,
    "shadow-none": !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "dark:border-neutral-800": !0
  },
  transferlist__sourceEmptyMessage: {
    "appearance-none": !0,
    "border-none": !0,
    "w-full": !0,
    "my-2": !0,
    "text-center": !0,
    "text-neutral-500": !0,
    italic: !0
  },
  transferlist__sourceListItems: {
    "group-data-[is-max=true]:opacity-50": !0
  },
  transferlist__targetEmptyMessage: {
    "appearance-none": !0,
    "border-none": !0,
    "w-full": !0,
    "my-2": !0,
    "text-center": !0,
    "text-neutral-500": !0,
    italic: !0
  },
  transferlist__emptyMessageInner: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "p-2": !0,
    "text-sm": !0
  },
  transferlist__transferlistControls: {
    "bg-white": !0,
    "p-2": !0,
    "border-b": !0,
    "border-neutral-200": !0,
    "dark:bg-neutral-700": !0,
    "dark:border-neutral-700": !0
  },
  transferlist__transferlistSearch: {
    flex: !0,
    border: !0,
    "border-neutral-300": !0,
    rounded: !0,
    "items-center": !0,
    "text-neutral-700": !0,
    "selection:bg-blue-100": !0,
    "dark:border-neutral-600": !0,
    "dark:text-neutral-300": !0,
    "dark:selection:bg-blue-100": !0,
    "dark:selection:text-neutral-700": !0,
    "dark:bg-neutral-800": !0
  },
  transferlist__transferlistSearchInput: {
    "border-none": !0,
    "px-2": !0,
    "py-1.5": !0,
    "w-full": !0,
    "bg-transparent": !0,
    "outline-none": !0,
    "text-sm": !0
  },
  transferlist__transferlistSearchClear: {
    flex: !0,
    "w-[0.75em]": !0,
    "mr-2": !0,
    "[&_svg]:w-full": !0
  },
  transferlist__controlLabel: {
    absolute: !0,
    "opacity-0": !0,
    "pointer-events-none": !0,
    "text-[0px]": !0
  },
  transferlist__selectedIcon: {
    "w-[0.75em]": !0,
    absolute: !0,
    "left-[0.5em]": !0,
    "select-none": !0,
    "text-blue-600": !0,
    "dark:text-blue-500": !0
  },
  transferlist__transferlistButton: {
    "sm:w-5": !0,
    relative: !0,
    flex: !0,
    "justify-center": !0,
    "text-sm": !0,
    "shrink-0": !0,
    "box-content": !0,
    "text-neutral-700": !0,
    "disabled:bg-neutral-200": !0,
    "disabled:!text-neutral-400": !0,
    "bg-neutral-50": !0,
    "hover:text-blue-600": !0,
    "cursor-pointer": !0,
    "appearance-none": !0,
    "border-none": !0,
    "p-2.5": !0,
    "hover:z-10": !0,
    "disabled:cursor-not-allowed": !0,
    "disabled:opacity-50": !0,
    "disabled:hover:text-current": !0,
    "disabled:hover:outline-none": !0,
    "focus-visible:ring-1": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:z-10": !0,
    "dark:bg-neutral-800": !0,
    "dark:text-neutral-400": !0,
    "dark:disabled:!text-neutral-600": !0,
    "dark:disabled:bg-neutral-900": !0,
    "dark:disabled:hover:text-current": !0,
    "dark:disabled:hover:outline-none": !0,
    "dark:hover:text-blue-500": !0
  },
  transferlist__fastForwardIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__moveRightIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__moveLeftIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__rewindIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__messages: {
    "mt-2": !0
  },
  barcode__barcodeIcon: {
    "w-[1.5em]": !0,
    "text-neutral-700": !0,
    "cursor-pointer": !0,
    "dark:text-neutral-300": !0
  },
  barcode__dialog: {
    "border-none": !0,
    "outline-none": !0,
    "overflow-clip": !0,
    "p-0": !0,
    "bg-black": !0,
    rounded: !0,
    "w-[100%-2rem]": !0,
    "max-w-[30rem]": !0,
    "[&::backdrop]:bg-neutral-800/50": !0
  },
  barcode__video: {
    "w-full": !0,
    "aspect-[1/1]": !0,
    "object-cover": !0,
    block: !0,
    "pointer-events-none": !0
  },
  barcode__closeIcon: {
    "cursor-pointer": !0,
    absolute: !0,
    "bg-white": !0,
    "color-neutral-700": !0,
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    rounded: !0,
    flex: !0,
    "top-2": !0,
    "right-2": !0,
    "z-20": !0,
    "[&>svg]:w-[1.25em]": !0,
    "[&>svg]:h-[1.25em]": !0,
    "[&>svg]:m-auto": !0
  },
  barcode__overlay: {
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0,
    absolute: !0,
    "top-1/2": !0,
    "left-1/2": !0,
    "w-[min(20em,75%)]": !0,
    "aspect-[1/1]": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0,
    rounded: !0,
    "pointer-events-none": !0,
    "shadow-[0_0_0_999em_rgba(0,0,0,0.5)]": !0
  },
  barcode__overlayDecorators: {
    absolute: !0,
    "inset-0": !0,
    "z-10": !0
  },
  barcode__overlayDecoratorTopLeft: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    rounded: !0,
    "top-0": !0,
    "left-0": !0,
    "border-l-4": !0,
    "border-t-4": !0,
    "rounded-tr-none": !0,
    "rounded-bl-none": !0
  },
  barcode__overlayDecoratorTopRight: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    rounded: !0,
    "top-0": !0,
    "right-0": !0,
    "border-r-4": !0,
    "border-t-4": !0,
    "rounded-tl-none": !0,
    "rounded-br-none": !0
  },
  barcode__overlayDecoratorBottomRight: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    rounded: !0,
    "bottom-0": !0,
    "right-0": !0,
    "border-r-4": !0,
    "border-b-4": !0,
    "rounded-tr-none": !0,
    "rounded-bl-none": !0
  },
  barcode__overlayDecoratorBottomLeft: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    rounded: !0,
    "bottom-0": !0,
    "left-0": !0,
    "border-l-4": !0,
    "border-b-4": !0,
    "rounded-tl-none": !0,
    "rounded-br-none": !0
  },
  "multi-step__outer": {
    group: !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0,
    "group/multistep": !0,
    "max-w-[32rem]": !0
  },
  "multi-step__wrapper": {
    "group/wrapper": !0,
    "data-[tab-style=tab]:shadow": !0,
    "data-[tab-style=tab]:rounded": !0
  },
  "multi-step__tabs": {
    flex: !0,
    "items-center": !0,
    "group-data-[tab-style=tab]/wrapper:overflow-auto": !0,
    "group-data-[tab-style=tab]/wrapper:border": !0,
    "group-data-[tab-style=tab]/wrapper:border-b-0": !0,
    "group-data-[tab-style=tab]/wrapper:border-neutral-300": !0,
    "group-data-[tab-style=tab]/wrapper:rounded": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-bl-none": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-br-none": !0,
    "dark:group-data-[tab-style=tab]/wrapper:border-neutral-600": !0,
    "group-data-[tab-style=progress]/wrapper:my-6": !0,
    "group-data-[tab-style=progress]/wrapper:justify-around": !0,
    "group-data-[tab-style=progress]/wrapper:overflow-visible": !0,
    "group-data-[tab-style=progress]/wrapper:group-data-[hide-labels=true]/wrapper:mb-3.5": !0
  },
  "multi-step__tab": {
    "group/tab": !0,
    "group-data-[tab-style=tab]/wrapper:relative": !0,
    "group-data-[tab-style=tab]/wrapper:flex": !0,
    "group-data-[tab-style=tab]/wrapper:grow": !0,
    "group-data-[tab-style=tab]/wrapper:text-sm": !0,
    "group-data-[tab-style=tab]/wrapper:items-center": !0,
    "group-data-[tab-style=tab]/wrapper:justify-center": !0,
    "group-data-[tab-style=tab]/wrapper:cursor-pointer": !0,
    "group-data-[tab-style=tab]/wrapper:text-neutral-700": !0,
    "group-data-[tab-style=tab]/wrapper:bg-neutral-100": !0,
    "group-data-[tab-style=tab]/wrapper:py-3.5": !0,
    "group-data-[tab-style=tab]/wrapper:px-4": !0,
    "group-data-[tab-style=tab]/wrapper:border-r": !0,
    "group-data-[tab-style=tab]/wrapper:border-b": !0,
    "group-data-[tab-style=tab]/wrapper:border-neutral-300": !0,
    "group-data-[tab-style=tab]/wrapper:last:border-r-0": !0,
    "group-data-[tab-style=tab]/wrapper:shadow-[inset_0_-0.5em_0.5em_-0.5em_rgba(0,0,0,0.1)]": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:bg-white": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:font-bold": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:border-b-white": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:z-10": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:shadow-[0_0_0.5em_0_rgba(0,0,0,0.1)]": !0,
    "dark:group-data-[tab-style=tab]/wrapper:text-neutral-300": !0,
    "dark:group-data-[tab-style=tab]/wrapper:bg-neutral-950/20": !0,
    "dark:group-data-[tab-style=tab]/wrapper:data-[active=true]:bg-transparent": !0,
    "dark:group-data-[tab-style=tab]/wrapper:data-[active=true]:border-b-transparent": !0,
    "dark:group-data-[tab-style=tab]/wrapper:border-neutral-600": !0,
    "group-data-[tab-style=progress]/wrapper:flex": !0,
    "group-data-[tab-style=progress]/wrapper:flex-col": !0,
    "group-data-[tab-style=progress]/wrapper:items-center": !0,
    "group-data-[tab-style=progress]/wrapper:grow": !0,
    "group-data-[tab-style=progress]/wrapper:shrink-0": !0,
    "group-data-[tab-style=progress]/wrapper:relative": !0,
    "group-data-[tab-style=progress]/wrapper:before:block": !0,
    "group-data-[tab-style=progress]/wrapper:before:text-sm": !0,
    "group-data-[tab-style=progress]/wrapper:before:w-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:before:h-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:before:border-4": !0,
    "group-data-[tab-style=progress]/wrapper:before:border-neutral-300": !0,
    "group-data-[tab-style=progress]/wrapper:before:rounded-full": !0,
    "group-data-[tab-style=progress]/wrapper:before:bg-white": !0,
    "group-data-[tab-style=progress]/wrapper:before:z-10": !0,
    "dark:group-data-[tab-style=progress]/wrapper:before:border-neutral-600": !0,
    "dark:group-data-[tab-style=progress]/wrapper:before:bg-neutral-950": !0,
    "group-data-[tab-style=progress]/wrapper:after:block": !0,
    "group-data-[tab-style=progress]/wrapper:after:h-1": !0,
    "group-data-[tab-style=progress]/wrapper:after:w-full": !0,
    "group-data-[tab-style=progress]/wrapper:after:absolute": !0,
    "group-data-[tab-style=progress]/wrapper:after:top-[0.5em]": !0,
    "group-data-[tab-style=progress]/wrapper:after:left-[calc(50%+0.5em)]": !0,
    "group-data-[tab-style=progress]/wrapper:after:bg-neutral-300": !0,
    "group-data-[tab-style=progress]/wrapper:data-[valid=true]:data-[visited=true]:after:bg-blue-600": !0,
    "group-data-[tab-style=progress]/wrapper:last:after:hidden": !0,
    "dark:group-data-[tab-style=progress]/wrapper:after:bg-neutral-600": !0,
    "dark:group-data-[tab-style=progress]/wrapper:data-[valid=true]:data-[visited=true]:after:bg-blue-600": !0
  },
  "multi-step__tabLabel": {
    "group-data-[tab-style=progress]/wrapper:absolute": !0,
    "group-data-[tab-style=progress]/wrapper:text-neutral-800": !0,
    "group-data-[tab-style=progress]/wrapper:top-full": !0,
    "group-data-[tab-style=progress]/wrapper:w-full": !0,
    "group-data-[tab-style=progress]/wrapper:whitespace-nowrap": !0,
    "group-data-[tab-style=progress]/wrapper:text-xs": !0,
    "dark:group-data-[tab-style=progress]/wrapper:text-neutral-300": !0
  },
  "multi-step__badge": {
    "bg-red-600": !0,
    absolute: !0,
    "font-mono": !0,
    "font-bold": !0,
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "aspect-[1/1]": !0,
    "[line-height:1.25rem]": !0,
    "text-white": !0,
    "rounded-full": !0,
    "group-data-[valid=true]/tab:bg-blue-600": !0,
    "group-data-[tab-style=tab]/wrapper:text-[0.66rem]": !0,
    "group-data-[tab-style=tab]/wrapper:p-1.5": !0,
    "group-data-[tab-style=tab]/wrapper:w-5": !0,
    "group-data-[tab-style=tab]/wrapper:h-5": !0,
    "group-data-[tab-style=tab]/wrapper:top-1.5": !0,
    "group-data-[tab-style=tab]/wrapper:right-1.5": !0,
    "group-data-[tab-style=progress]/wrapper:w-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:h-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:p-1": !0,
    "group-data-[tab-style=progress]/wrapper:text-[10px]": !0,
    "group-data-[tab-style=progress]/wrapper:[line-height:0]": !0,
    "group-data-[tab-style=progress]/wrapper:z-10": !0
  },
  "multi-step__validStepIcon": {
    "w-full": !0,
    "h-full": !0,
    "mt-0.5": !0
  },
  "multi-step__steps": {
    "px-10": !0,
    "pt-8": !0,
    "pb-4": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-300": !0,
    rounded: !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-600": !0,
    "group-data-[tab-style=tab]/wrapper:border-t-0": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-tl-none": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-tr-none": !0,
    "group-data-[tab-style=progress]/wrapper:shadow": !0,
    "[&_[data-type]]:max-w-none": !0
  },
  step__stepActions: {
    flex: !0,
    "justify-between": !0,
    "[&>*]:grow-0": !0
  },
  step__stepPrevious: {
    "mr-1.5": !0
  },
  step__stepNext: {
    "ml-auto": !0
  }
}, Ms = {
  outer: {
    group: !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0
  },
  label: {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "mb-1": !0,
    "dark:text-neutral-300": !0
  },
  legend: {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "dark:text-neutral-300": !0
  },
  input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0
  },
  prefixIcon: {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  loaderIcon: {
    "animate-spin": !0,
    flex: !0,
    "items-center": !0,
    "my-auto": !0,
    "ml-2": !0,
    "text-base": !0,
    "text-neutral-500": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  loadMoreInner: {
    flex: !0,
    "text-sm": !0,
    "text-neutral-500": !0,
    "p-2": !0,
    "items-center": !0,
    "justify-center": !0,
    "[&>span]:mr-2": !0
  },
  help: {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0
  },
  message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  overlay: {
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  overlayPlaceholder: {
    "text-neutral-400": !0,
    "dark:text-neutral-400/50": !0
  },
  overlayLiteral: {
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  overlayChar: {
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  overlayEnum: {
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  }
}, Ps = {
  icons: { ...Is },
  config: { rootClasses: As }
}, js = { class: "font-mono text-sm p-4 bg-slate-100 mb-4" }, Os = /* @__PURE__ */ Ke({
  __name: "Sandbox",
  setup(e) {
    return Ke({
      name: "Sandbox"
    }), (t, r) => {
      const u = vr("FormKit");
      return $u(), Cu(u, { type: "form" }, {
        default: Su(({ value: a }) => [
          Ze(u, {
            type: "text",
            name: "name",
            label: "Name",
            help: "What do people call you?"
          }),
          Ze(u, {
            type: "checkbox",
            name: "flavors",
            label: "Favorite ice cream flavors",
            options: {
              vanilla: "Vanilla",
              chocolate: "Chocolate",
              strawberry: "Strawberry",
              "mint-chocolate-chip": "Mint Chocolate Chip",
              "rocky-road": "Rocky Road",
              "cookie-dough": "Cookie Dough",
              pistachio: "Pistachio"
            },
            validation: "required|min:2"
          }),
          Ze(u, {
            type: "checkbox",
            name: "agree",
            label: "I agree FormKit is the best form authoring framework."
          }),
          Ze(u, {
            type: "time",
            label: "Time",
            name: "time",
            value: "23:15",
            help: "What time will go home today?"
          }),
          Iu("pre", js, Au(a), 1)
        ]),
        _: 1
      });
    };
  }
}), Es = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [u, a] of t)
    r[u] = a;
  return r;
}, Ls = /* @__PURE__ */ Es(Os, [["__scopeId", "data-v-a62507fb"]]), Vs = (e) => {
  e.use(Xi, Vt(Ps));
};
export {
  Ls as Sandbox,
  Vs as initializeFormKit
};
