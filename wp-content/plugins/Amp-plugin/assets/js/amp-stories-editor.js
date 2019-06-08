this.AMP = function(e) {
    var t = {};

    function a(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, a), r.l = !0, r.exports
    }
    return a.m = e, a.c = t, a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var r in e) a.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 42)
}([function(e, t) {
    ! function() {
        e.exports = this.wp.element
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.i18n
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.components
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.data
    }()
}, function(e, t, a) {
    "use strict";
    var n = a(18),
        r = a.n(n),
        o = a(22),
        i = a.n(o),
        c = a(20),
        l = a.n(c),
        s = a(9),
        u = a.n(s),
        d = a(0),
        p = a(29),
        m = a.n(p),
        f = a(19),
        b = a.n(f),
        h = a(12),
        v = a(39),
        q = a(1),
        g = a(3),
        y = a(8),
        O = a(7),
        k = (a(34), a(23)),
        j = a(5),
        _ = a(21);
    a.d(t, "s", function() {
        return M
    }), a.d(t, "B", function() {
        return V
    }), a.d(t, "a", function() {
        return H
    }), a.d(t, "f", function() {
        return L
    }), a.d(t, "b", function() {
        return W
    }), a.d(t, "e", function() {
        return Q
    }), a.d(t, "C", function() {
        return G
    }), a.d(t, "r", function() {
        return $
    }), a.d(t, "A", function() {
        return Y
    }), a.d(t, "m", function() {
        return K
    }), a.d(t, "n", function() {
        return X
    }), a.d(t, "l", function() {
        return ee
    }), a.d(t, "c", function() {
        return te
    }), a.d(t, "d", function() {
        return ne
    }), a.d(t, "j", function() {
        return re
    }), a.d(t, "q", function() {
        return oe
    }), a.d(t, "k", function() {
        return ie
    }), a.d(t, "u", function() {
        return ce
    }), a.d(t, "v", function() {
        return le
    }), a.d(t, "y", function() {
        return se
    }), a.d(t, "z", function() {
        return de
    }), a.d(t, "w", function() {
        return pe
    }), a.d(t, "x", function() {
        return me
    }), a.d(t, "t", function() {
        return fe
    }), a.d(t, "o", function() {
        return be
    }), a.d(t, "p", function() {
        return he
    }), a.d(t, "h", function() {
        return ve
    }), a.d(t, "g", function() {
        return qe
    }), a.d(t, "i", function() {
        return ge
    });
    var E = window.ampStoriesFonts,
        w = Object(g.select)("core/block-editor"),
        S = w.getBlocksByClientId,
        C = w.getBlockRootClientId,
        B = w.getBlockOrder,
        x = w.getBlock,
        z = w.getClientIdsWithDescendants,
        I = Object(g.dispatch)("amp/story"),
        A = I.addAnimation,
        T = I.changeAnimationType,
        P = I.changeAnimationDuration,
        D = I.changeAnimationDelay,
        R = Object(g.select)("amp/story").getAnimatedBlocks,
        N = Object(g.dispatch)("core/block-editor").updateBlockAttributes,
        M = function(e) {
            if (e && void 0 !== E) {
                var t = E.find(function(t) {
                    return t.name === e
                });
                if (t) {
                    var a = t.handle,
                        n = t.src;
                    if (a && n)
                        if (!document.getElementById(a)) {
                            var r = document.createElement("link");
                            r.id = a, r.href = n, r.rel = "stylesheet", r.type = "text/css", r.media = "all", r.crossOrigin = "anonymous", document.head.appendChild(r)
                        }
                }
            }
        },
        V = function(e) {
            var t = e.name;
            return j.e.includes(t) ? "amp/amp-story-page" !== t ? u()({}, e, {
                parent: [""]
            }) : e : u()({}, e, {
                parent: ["amp/amp-story-page"]
            })
        },
        F = function(e) {
            switch (e) {
                case "core/quote":
                case "core/video":
                case "core/embed":
                    return 200;
                case "core/pullquote":
                    return 215;
                case "amp/amp-story-post-author":
                case "amp/amp-story-post-date":
                    return 50;
                case "amp/amp-story-post-title":
                    return 100;
                default:
                    return 60
            }
        },
        H = function(e, t) {
            if (!j.b.includes(t) || "core/template" === t) return e;
            var a = "core/image" === t,
                n = "core/video" === t,
                r = j.d.includes(t),
                o = j.j.includes(t),
                i = {
                    anchor: {
                        type: "string",
                        source: "attribute",
                        attribute: "id",
                        selector: "amp-story-grid-layer .amp-story-block-wrapper > *, amp-story-cta-layer"
                    },
                    ampAnimationType: {
                        type: "string"
                    },
                    addedAttributes: {
                        type: "number",
                        default: 0
                    },
                    ampAnimationAfter: {
                        type: "string"
                    },
                    fontSize: {
                        type: "string"
                    },
                    customFontSize: {
                        type: "number"
                    },
                    ampFontFamily: {
                        type: "string"
                    },
                    textColor: {
                        type: "string"
                    },
                    customTextColor: {
                        type: "string"
                    },
                    backgroundColor: {
                        type: "string"
                    },
                    customBackgroundColor: {
                        type: "string"
                    },
                    opacity: {
                        type: "number",
                        default: 100
                    }
                };
            return o && (i.autoFontSize = {
                type: "number",
                default: 36
            }, i.ampFitText = {
                type: "boolean",
                default: !0
            }), r && (i.positionTop = {
                type: "number",
                default: 0
            }, i.positionLeft = {
                type: "number",
                default: 5
            }, a || (i.height = {
                type: "number",
                default: F(t)
            }, i.width = {
                type: "number",
                default: 250
            }), i.rotationAngle = {
                type: "number",
                default: 0
            }, i.ampAnimationType = {
                source: "attribute",
                selector: ".amp-story-block-wrapper",
                attribute: "animate-in"
            }, i.ampAnimationDelay = {
                source: "attribute",
                selector: ".amp-story-block-wrapper",
                attribute: "animate-in-delay",
                default: 0
            }, i.ampAnimationDuration = {
                source: "attribute",
                selector: ".amp-story-block-wrapper",
                attribute: "animate-in-duration",
                default: 0
            }, i.ampAnimationAfter = {
                source: "attribute",
                selector: ".amp-story-block-wrapper",
                attribute: "animate-in-after"
            }), a && (i.ampShowImageCaption = {
                type: "boolean",
                default: !1
            }), n && (i.autoplay = u()({}, e.attributes.autoplay, {
                default: !0
            }), i.playsInline = u()({}, e.attributes.playsInline, {
                default: !1
            }), i.loop = u()({}, e.attributes.loop, {
                default: !0
            }), i.controls = u()({}, e.attributes.controls, {
                default: !1
            })), Object.keys(i).forEach(function(t) {
                void 0 === i[t].default && void 0 !== e.attributes[t] && void 0 !== e.attributes[t].default && (i[t].default = e.attributes[t].default)
            }), u()({}, e, {
                attributes: u()({}, e.attributes, i),
                supports: u()({}, e.supports, {
                    anchor: !1
                })
            })
        },
        L = function(e, t) {
            if (!j.b.includes(t)) return e;
            if ("core/list" !== t || !e.transforms) return e;
            var a = u()({}, e.transforms, {
                from: e.transforms.from.filter(function(e) {
                    return "prefix" !== e.type
                })
            });
            return u()({}, e, {
                transforms: a
            })
        },
        W = function(e, t, a) {
            var n = {};
            if (!j.b.includes(t.name)) return e;
            var r = u()({}, e);
            if (r.id = a.anchor || m()(), a.rotationAngle) {
                var o = r.style ? r.style : {};
                o = u()({}, o, {
                    transform: "rotate(".concat(parseInt(a.rotationAngle), "deg)")
                }), n.style = o
            }
            return a.ampFontFamily && (n["data-font-family"] = a.ampFontFamily), u()({}, r, n)
        },
        U = document.createElement("div"),
        Q = function(e, t, a) {
            return !e.className && a.includes("is-style-") && 0 === a.indexOf("<amp-story-grid-layer") && (U.innerHTML = a, U.children[0].children.length && U.children[0].children[0].children.length && U.children[0].children[0].children[0].className.includes("is-style-") && (e.className = U.children[0].children[0].children[0].className)), e
        },
        G = function(e, t, a) {
            if (!e || !j.d.includes(t.name)) return e;
            var n = a.ampAnimationType,
                r = a.ampAnimationDelay,
                o = a.ampAnimationDuration,
                i = a.ampAnimationAfter,
                c = a.positionTop,
                s = a.positionLeft,
                p = a.width,
                m = a.height,
                f = {
                    style: {}
                };
            if (void 0 !== c && void 0 !== s) {
                var b = {
                    position: "absolute",
                    top: "".concat(c, "%"),
                    left: "".concat(s, "%")
                };
                f.style = u()({}, f.style, b)
            }
            if (p && m) {
                var h = {
                    width: "".concat(K("x", p), "%"),
                    height: "".concat(K("y", m), "%")
                };
                f.style = u()({}, f.style, h)
            }
            var v = {};
            return n && (v["animate-in"] = n, r && (v["animate-in-delay"] = parseInt(r) + "ms"), o && (v["animate-in-duration"] = parseInt(o) + "ms"), i && (v["animate-in-after"] = i)), Object(d.createElement)("amp-story-grid-layer", {
                template: "vertical"
            }, Object(d.createElement)("div", l()({
                className: "amp-story-block-wrapper"
            }, f, v), e))
        },
        $ = function(e) {
            return i()(new Set(e.map(function(e) {
                return e.parent
            }))).map(function(t) {
                return e.filter(function(e) {
                    var a = e.parent,
                        n = e.animationType;
                    return a === t && n
                }).map(function(e) {
                    var t = e.duration,
                        a = e.delay;
                    return (a ? parseInt(a) : 0) + (t ? parseInt(t) : 0)
                }).reduce(function(e, t) {
                    return Math.max(e, t)
                }, 0)
            }).reduce(function(e, t) {
                return e + t
            }, 0)
        },
        Y = function() {
            var e = document.querySelector(".editor-block-list__layout"),
                t = document.querySelector(".editor-block-navigation");
            if (e) {
                var a = document.createElement("div");
                a.id = "amp-story-editor";
                var n = document.createElement("div");
                if (n.id = "amp-story-block-navigation", e.parentNode.replaceChild(a, e), !document.getElementById("amp-story-controls")) {
                    var r = document.createElement("div");
                    r.id = "amp-story-controls", a.appendChild(r), Object(d.render)(Object(d.createElement)(k.p, null), r)
                }
                if (a.appendChild(e), a.appendChild(n), Object(d.render)(Object(d.createElement)(k.c, null), n), !document.getElementById("amp-story-editor-carousel")) {
                    var o = document.createElement("div");
                    o.id = "amp-story-editor-carousel", a.appendChild(o), Object(d.render)(Object(d.createElement)(k.f, null), o)
                }
            }
            if (t) {
                if (!document.getElementById("amp-story-shortcuts")) {
                    var i = document.createElement("div");
                    i.id = "amp-story-shortcuts", t.parentNode.parentNode.insertBefore(i, t.parentNode.nextSibling), Object(d.render)(Object(d.createElement)(k.m, null), i)
                }
                var c = document.createElement("div");
                c.id = "amp-story-inserter";
                var l = t.parentNode.parentNode.querySelector(".block-editor-inserter").parentNode;
                l.parentNode.replaceChild(c, l), Object(d.render)(Object(d.createElement)(k.h, {
                    position: "bottom right"
                }), c)
            }
        },
        J = Object(q._x)("words", "Word count type. Do not translate!", "amp"),
        Z = function(e, t, a, n, r) {
            if (!e.offsetHeight || !e.offsetWidth) return !1;
            for (e.classList.toggle("is-measuring-fontsize"), n++; n - r > 1;) {
                var o = Math.floor((r + n) / 2);
                e.style.fontSize = o + "px";
                var i = e.offsetHeight,
                    c = e.offsetWidth;
                i > t || c > a ? n = o : r = o
            }
            return e.style.fontSize = r + "px", e.classList.toggle("is-measuring-fontsize"), r
        },
        K = function(e, t) {
            return "x" === e ? Number((t / j.q * 100).toFixed(2)) : "y" === e ? Number((t / j.p * 100).toFixed(2)) : 0
        },
        X = function(e, t) {
            return "x" === e ? Math.round(t / 100 * j.q) : "y" === e ? Math.round(t / 100 * j.p) : 0
        },
        ee = function() {
            var e = Object(_.b)().width,
                t = 200; // changed width
            return {
                width: t,
                height: 1 / .75 * t
            }
        },
        te = function(e, t) {
            var a = t.filter(Boolean);
            if (!a) return e;
            if (1 === a.length) e.backgroundColor = a[0].color;
            else {
                var n = a.map(function(e) {
                    return e.color || "transparent"
                }).join(", ");
                e.backgroundImage = "linear-gradient(to bottom, ".concat(n, ")")
            }
            return e
        },
        ae = function(e) {
            var t = {},
                a = ["positionTop", "positionLeft", "width", "height", "tagName", "align", "content", "text", "value", "citation", "autoFontSize", "rotationAngle"];
            for (var n in e.attributes) e.attributes.hasOwnProperty(n) && a.includes(n) && (t[n] = e.attributes[n]);
            return t
        },
        ne = function(e) {
            var t = [],
                a = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = e.innerBlocks[Symbol.iterator](); !(a = (o = i.next()).done); a = !0) {
                    var c = o.value;
                    t.push(Object(y.createBlock)(c.name, ae(c)))
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    a || null == i.return || i.return()
                } finally {
                    if (n) throw r
                }
            }
            return Object(y.createBlock)(e.name, ae(e), t)
        },
        re = function(e) {
            var t, a = e.className,
                n = e.ampFitText,
                o = e.backgroundColor,
                i = e.textColor,
                c = e.customBackgroundColor,
                l = e.customTextColor,
                s = e.opacity,
                u = Object(O.getColorClassName)("color", i),
                d = Object(O.getColorClassName)("background-color", o),
                p = s && s < 100;
            return b()(a, (t = {
                "amp-text-content": !n,
                "has-text-color": i || l,
                "has-background": o || c
            }, r()(t, u, u), r()(t, d, p ? void 0 : d), t))
        },
        oe = function(e) {
            var t = e.align,
                a = e.fontSize,
                n = e.customFontSize,
                r = e.ampFitText,
                o = e.backgroundColor,
                i = e.textColor,
                c = e.customBackgroundColor,
                l = e.customTextColor,
                s = e.opacity,
                u = Object(O.getColorClassName)("color", i),
                d = Object(g.select)("core/block-editor").getSettings(),
                p = d.colors,
                m = d.fontSizes,
                f = a ? Object(O.getFontSize)(m, a, n).size : n,
                b = f && (f / j.q * 100).toFixed(2) + "vw";
            return {
                backgroundColor: Object(_.a)(p, Object(O.getColorObjectByAttributeValues)(p, o, c), c, s),
                color: u ? void 0 : l,
                fontSize: r ? void 0 : b,
                textAlign: t
            }
        },
        ie = function(e) {
            var t = e.attribute,
                a = e.placeholder,
                n = e.tagName,
                r = void 0 === n ? "p" : n,
                o = e.isEditable,
                i = void 0 !== o && o;
            return {
                supports: {
                    anchor: !0,
                    reusable: !0
                },
                attributes: {
                    align: {
                        type: "string"
                    }
                },
                save: Object(k.A)({
                    tagName: r
                }),
                edit: Object(k.z)({
                    attribute: t,
                    placeholder: a,
                    tagName: r,
                    isEditable: i
                })
            }
        },
        ce = function(e) {
            var t = x(e);
            if (t && "core/image" === t.name) {
                var a = t.attributes;
                !a.ampShowImageCaption && a.caption && 0 !== a.caption.length && N(e, {
                    caption: ""
                })
            }
        },
        le = function(e) {
            var t = x(e);
            if (t && j.b.includes(t.name)) {
                var a = x(C(e));
                if (0 === t.attributes.positionTop && a) {
                    var n = Object(y.createBlock)(t.name);
                    if (Object(h.every)(n.attributes, function(e, a) {
                        return e === t.attributes[a]
                    })) {
                        var r = a.innerBlocks.map(function(e) {
                            return e.attributes.positionTop
                        }).reduce(function(e, t) {
                            return Math.max(e, t)
                        }, 0);
                        N(e, {
                            positionTop: r > 75 ? 0 : r + 10
                        })
                    }
                }
            }
        },
        se = function(e) {
            var t = x(e);
            if (t && j.e.includes(t.name) && "media" === t.attributes.autoAdvanceAfter) {
                var a = S(B(e));
                if (!(t.attributes.autoAdvanceAfterMedia && a.find(function(e) {
                    return e.attributes.anchor === t.attributes.autoAdvanceAfterMedia
                }))) {
                    var n = a.find(function(e) {
                            var t = e.name;
                            return j.l.includes(t)
                        }),
                        r = n ? n.attributes.anchor : "";
                    t.attributes.autoAdvanceAfterMedia !== r && N(e, {
                        autoAdvanceAfterMedia: r
                    })
                }
            }
        },
        ue = function(e) {
            var t = e.name,
                a = e.clientId;
            switch (t) {
                case "amp/amp-story-text":
                    return document.querySelector("#block-".concat(a, " .block-editor-rich-text__editable.is-amp-fit-text"));
                case "amp/amp-story-post-title":
                case "amp/amp-story-post-author":
                case "amp/amp-story-post-date":
                    var n = t.replace("/", "-");
                    return document.querySelector("#block-".concat(a, " .wp-block-").concat(n))
            }
            return null
        },
        de = function(e) {
            var t = e.name,
                a = e.clientId,
                n = e.attributes,
                r = n.width,
                o = n.height,
                i = n.ampFitText,
                c = n.content,
                l = n.autoFontSize;
            if (i) switch (t) {
                case "amp/amp-story-text":
                    var s = ue(e);
                    if (s && i && c.length) {
                        var u = Z(s, o, r, 72, 6);
                        u && l !== u && N(a, {
                            autoFontSize: u
                        })
                    }
                    break;
                case "amp/amp-story-post-title":
                case "amp/amp-story-post-author":
                case "amp/amp-story-post-date":
                    var d = ue(e);
                    if (d && i) {
                        var p = Z(d, o, r, 72, 6);
                        p && l !== p && N(a, {
                            autoFontSize: p
                        })
                    }
            }
        },
        pe = function(e) {
            var t = x(e);
            if (t) {
                var a = t.name,
                    n = t.attributes;
                if ("core/image" === a) {
                    var r = n.width,
                        o = n.height;
                    if (!r && !o && n.id > 0) {
                        var i = (0, Object(g.select)("core").getMedia)(n.id);
                        if (i && i.media_details) {
                            var c = i.media_details,
                                l = c.height,
                                s = c.width,
                                u = 1;
                            (j.q < s || j.p < l) && (u = Math.max(s / j.q, l / j.p)), N(e, {
                                width: Math.round(s / u),
                                height: Math.round(l / u)
                            })
                        }
                    }
                }
            }
        },
        me = function(e) {
            var t = x(e);
            if (t && "amp/amp-story-text" === t.name) {
                var a = !S(B(e)).filter(function(t) {
                        return t.clientId !== e
                    }).some(function(e) {
                        return "h1" === e.attributes.tagName
                    }),
                    n = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            a = e.fontSize,
                            n = e.customFontSize,
                            r = e.positionTop,
                            o = e.type,
                            i = e.content,
                            c = void 0 === i ? "" : i;
                        if (o && "auto" !== o) return o;
                        if (r > 80) return "p";
                        if ("huge" === a || n && n > 40) return t ? "h1" : "h2";
                        if ("large" === a || n && n > 24) return "h2";
                        var l = Object(v.count)(c, J, {});
                        return 4 >= l ? t ? "h1" : "h2" : 10 >= l ? "h2" : "p"
                    }(t.attributes, a);
                t.attributes.tagName !== n && N(e, {
                    tagName: n
                })
            }
        },
        fe = function() {
            var e = R();
            if (Object(h.isEqual)({}, e)) {
                var t = S(z()),
                    a = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = t[Symbol.iterator](); !(a = (o = i.next()).done); a = !0) {
                        var c = o.value,
                            l = C(c.clientId);
                        l && function() {
                            var e = c.attributes,
                                a = e.ampAnimationType,
                                n = e.ampAnimationAfter,
                                r = e.ampAnimationDuration,
                                o = e.ampAnimationDelay,
                                i = t.find(function(e) {
                                    return e.attributes.anchor === n
                                });
                            A(l, c.clientId, i ? i.clientId : void 0), T(l, c.clientId, a), P(l, c.clientId, r ? parseInt(r.replace("ms", "")) : void 0), D(l, c.clientId, o ? parseInt(o.replace("ms", "")) : void 0)
                        }()
                    }
                } catch (e) {
                    n = !0, r = e
                } finally {
                    try {
                        a || null == i.return || i.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
        },
        be = function(e) {
            return e * Math.PI / 180
        },
        he = function(e, t, a, n, r) {
            var o = e.clientY - n,
                i = e.clientX - a,
                c = function(e, t) {
                    return Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2))
                }(i, o),
                l = Math.atan2(o, i) - be(t);
            return {
                deltaW: "right" === r ? c * Math.cos(l) : 0,
                deltaH: "bottom" === r ? c * Math.sin(l) : 0
            }
        },
        ve = function(e, t, a) {
            var n = -e / 2,
                r = t / 2;
            return {
                left: r * Math.sin(a) + n * Math.cos(a) - n,
                top: r * Math.cos(a) - n * Math.sin(a) - r
            }
        },
        qe = function(e, t, a, n, r, o) {
            return n && r ? Object(q.sprintf)(Object(q.__)("Block %s is the only block, and cannot be moved", "amp"), e) : o > 0 && !r ? Object(q.sprintf)( // translators: 1: Type of block (i.e. Text, Image etc), 2: Position of selected block, 3: New position
                Object(q.__)("Move %1$s block from position %2$d down to position %3$d", "amp"), e, t, a) : o > 0 && r ? Object(q.sprintf)(Object(q.__)("Block %s is at the end of the content and can’t be moved down", "amp"), e) : o < 0 && !n ? Object(q.sprintf)( // translators: 1: Type of block (i.e. Text, Image etc), 2: Position of selected block, 3: New position
                Object(q.__)("Move %1$s block from position %2$d up to position %3$d", "amp"), e, t, a) : o < 0 && n ? Object(q.sprintf)(Object(q.__)("Block %s is at the beginning of the content and can’t be moved up", "amp"), e) : void 0
        },
        ge = function(e) {
            return S(B(e)).find(function(e) {
                return "amp/amp-story-cta" === e.name
            })
        }
}, function(e, t, a) {
    "use strict";
    a.d(t, "q", function() {
        return S
    }), a.d(t, "p", function() {
        return C
    }), a.d(t, "n", function() {
        return B
    }), a.d(t, "m", function() {
        return x
    }), a.d(t, "e", function() {
        return z
    }), a.d(t, "d", function() {
        return I
    }), a.d(t, "j", function() {
        return A
    }), a.d(t, "i", function() {
        return T
    }), a.d(t, "b", function() {
        return P
    }), a.d(t, "a", function() {
        return D
    }), a.d(t, "k", function() {
        return R
    }), a.d(t, "r", function() {
        return N
    }), a.d(t, "c", function() {
        return M
    }), a.d(t, "o", function() {
        return V
    }), a.d(t, "l", function() {
        return F
    }), a.d(t, "h", function() {
        return H
    }), a.d(t, "f", function() {
        return L
    }), a.d(t, "g", function() {
        return W
    });
    var n = a(22),
        r = a.n(n),
        o = a(0),
        i = (a(28), a(1)),
        c = function(e) {
            return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Arimo"), Object(o.createElement)("path", {
                d: "M25.232 10.869h-1.304V5.845q0-.893-.19-1.358a1.132 1.132 0 0 0-.125-.232q-.247-.345-.807-.419a2.509 2.509 0 0 0-.328-.02 1.768 1.768 0 0 0-.637.11 1.575 1.575 0 0 0-.696.534q-.389.512-.47 1.355a4.868 4.868 0 0 0-.021.462v4.592h-1.311V4.636a69.373 69.373 0 0 0-.001-.481q-.007-.961-.043-1.211h1.245a.252.252 0 0 1 .003.018q.006.045.011.16a8.532 8.532 0 0 1 .001.02l.015.312a72.157 72.157 0 0 0 .003.058q.011.209.026.787h.022a4.213 4.213 0 0 1 .292-.497q.166-.241.348-.416a1.869 1.869 0 0 1 .334-.259 2.241 2.241 0 0 1 .716-.27 3.155 3.155 0 0 1 .624-.059q.901 0 1.425.359a1.631 1.631 0 0 1 .504.566q.122.22.203.496a3.058 3.058 0 0 1 .022.08h.022q.338-.658.793-1.012a2.04 2.04 0 0 1 .199-.138 2.377 2.377 0 0 1 .778-.293 3.281 3.281 0 0 1 .632-.058 3.489 3.489 0 0 1 .648.056q.713.135 1.099.596.498.595.542 1.888a7.53 7.53 0 0 1 .004.25v5.281h-1.304V5.845q0-.893-.19-1.358a1.132 1.132 0 0 0-.125-.232q-.248-.345-.807-.419a2.509 2.509 0 0 0-.328-.02 1.86 1.86 0 0 0-.606.094 1.526 1.526 0 0 0-.738.547q-.37.493-.455 1.306a4.949 4.949 0 0 0-.025.514v4.592zm-15.286 0H8.518L7.339 7.852H2.637L1.45 10.869H0L4.211.549h1.59l4.145 10.32zm2.388 0h-1.318V4.79a36.993 36.993 0 0 0-.011-.879 49.319 49.319 0 0 0-.033-.967h1.245a244.312 244.312 0 0 1 .02.468q.032.766.037 1.051a5.258 5.258 0 0 1 .001.1h.03a6.431 6.431 0 0 1 .174-.495q.193-.483.418-.756a1.346 1.346 0 0 1 .133-.141 1.344 1.344 0 0 1 .531-.291q.276-.082.626-.082a2.029 2.029 0 0 1 .497.063 2.267 2.267 0 0 1 .038.01V4.08q-.177-.05-.434-.066a4.303 4.303 0 0 0-.269-.008 1.503 1.503 0 0 0-.598.115q-.341.146-.58.478a1.848 1.848 0 0 0-.075.114q-.432.707-.432 2.025v4.131zm25.261-.871a3.067 3.067 0 0 0 .556-.909q.36-.886.36-2.19a8.204 8.204 0 0 0-.071-1.114q-.175-1.274-.786-1.987-.603-.703-1.68-.912a5.232 5.232 0 0 0-.994-.088 5.057 5.057 0 0 0-.885.073q-2.018.359-2.509 2.481a6.889 6.889 0 0 0-.158 1.547 7.799 7.799 0 0 0 .038.785q.062.615.227 1.121a3.43 3.43 0 0 0 .621 1.152 2.768 2.768 0 0 0 .28.289q.533.475 1.301.657a4.523 4.523 0 0 0 1.042.113q.64 0 1.168-.138a2.947 2.947 0 0 0 1.49-.88zm-20.303.871h-1.318V2.944h1.318v7.925zm19.834-3.97a8.771 8.771 0 0 0-.036-.83q-.097-1.013-.451-1.554-.487-.743-1.637-.743-1.157 0-1.673.758-.47.69-.512 2.087a9.359 9.359 0 0 0-.005.282 7.788 7.788 0 0 0 .041.82q.103.969.469 1.535a1.666 1.666 0 0 0 1.207.759 2.612 2.612 0 0 0 .393.029 2.894 2.894 0 0 0 .637-.066q.404-.091.694-.31a1.572 1.572 0 0 0 .364-.386 2.444 2.444 0 0 0 .289-.621q.22-.694.22-1.76zM5.186 2.212l-.198-.608-.066.205q-.183.608-.542 1.56L3.062 6.76h3.859L5.596 3.354a14.133 14.133 0 0 1-.205-.538 19.209 19.209 0 0 1-.205-.604zm12.106-.952h-1.318V0h1.318v1.26z",
                vectorEffect: "non-scaling-stroke",
                strokeLinecap: "round",
                fillRule: "evenodd",
                fontSize: "12",
                stroke: "#000",
                strokeWidth: ".25mm",
                fill: "none"
            }))
        };
    c.defaultProps = {
        width: "38.511",
        height: "11.016",
        viewBox: "0 0 38.511 11.016"
    };
    var l = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Lato"), Object(o.createElement)("path", {
            d: "M14.625 9.105v-5.49H13.41q-.103 0-.105-.072a.104.104 0 0 1 0-.003v-.045l1.32-.03.06-2.955a.145.145 0 0 1 .019-.071.071.071 0 0 1 .015-.02q.015-.013.037-.014a.08.08 0 0 1 .004 0h.045v3.06h2.505v.15h-2.505v5.49a2.497 2.497 0 0 0 .014.275q.023.201.08.359a1.284 1.284 0 0 0 .103.221.974.974 0 0 0 .155.199q.165.161.383.236a1.396 1.396 0 0 0 .404.074 1.597 1.597 0 0 0 .061.001 1.724 1.724 0 0 0 .269-.02 1.248 1.248 0 0 0 .282-.077q.237-.098.402-.21a2.841 2.841 0 0 0 .114-.083q.055-.042.101-.081a1.358 1.358 0 0 0 .051-.047q.087-.084.133-.095a.055.055 0 0 1 .013-.002q.03 0 .06.03l.03.03a1.545 1.545 0 0 1-.194.212 1.82 1.82 0 0 1-.08.069q-.161.132-.352.225a2.002 2.002 0 0 1-.405.146q-.214.053-.424.053-.645 0-1.012-.352-.368-.353-.368-1.163zm-2.88 1.395h-.03q-.105 0-.105-.12l-.045-1.192a8.479 8.479 0 0 1-.453.441 7.289 7.289 0 0 1-.177.155q-.315.266-.668.45-.352.184-.757.285a3.32 3.32 0 0 1-.484.082 4.3 4.3 0 0 1-.416.019 2.27 2.27 0 0 1-.643-.095 2.53 2.53 0 0 1-.021-.006 1.741 1.741 0 0 1-.604-.323 1.597 1.597 0 0 1-.36-.423 1.933 1.933 0 0 1-.078-.147q-.169-.348-.169-.851a1.466 1.466 0 0 1 .289-.889 1.766 1.766 0 0 1 .338-.343q.169-.133.385-.247a3.417 3.417 0 0 1 .162-.081 4.532 4.532 0 0 1 .536-.206q.268-.086.579-.155a9.056 9.056 0 0 1 .388-.078q.908-.161 2.153-.191V5.64a4.484 4.484 0 0 0-.032-.545 3.335 3.335 0 0 0-.095-.49q-.128-.457-.375-.772-.248-.315-.623-.484a1.875 1.875 0 0 0-.484-.141 2.515 2.515 0 0 0-.386-.028q-.39 0-.705.083a3.452 3.452 0 0 0-.324.101 2.678 2.678 0 0 0-.238.101q-.248.12-.432.263-.158.122-.28.228a4.45 4.45 0 0 0-.038.034q-.136.12-.218.203a.803.803 0 0 1-.032.03q-.058.052-.088.052a.054.054 0 0 1-.02-.004q-.024-.01-.055-.041l-.03-.03q.54-.57 1.118-.87a2.635 2.635 0 0 1 .827-.263 3.449 3.449 0 0 1 .515-.037 2.953 2.953 0 0 1 .459.034q.281.044.512.146a1.766 1.766 0 0 1 .679.517 2.028 2.028 0 0 1 .293.506 2.577 2.577 0 0 1 .105.316 3.74 3.74 0 0 1 .099.549 5.02 5.02 0 0 1 .028.542v4.86zM.18 0v10.335h5.355v.165H0V0h.18zm22.509 3.098a3.725 3.725 0 0 0-.729-.068 3.893 3.893 0 0 0-.581.042 2.951 2.951 0 0 0-.795.232q-.596.274-1.005.769a3.042 3.042 0 0 0-.321.474 3.702 3.702 0 0 0-.298.722 4.776 4.776 0 0 0-.147.667 6.035 6.035 0 0 0-.063.889q0 .855.21 1.549a3.938 3.938 0 0 0 .134.374 3.207 3.207 0 0 0 .485.815 2.726 2.726 0 0 0 1.005.761 2.948 2.948 0 0 0 .663.204 3.882 3.882 0 0 0 .713.062q.772 0 1.373-.266a2.719 2.719 0 0 0 1.008-.762 3.068 3.068 0 0 0 .31-.453 3.67 3.67 0 0 0 .309-.735 4.686 4.686 0 0 0 .151-.686 6.014 6.014 0 0 0 .059-.863q0-.855-.21-1.556a3.939 3.939 0 0 0-.151-.418 3.168 3.168 0 0 0-.468-.778 2.792 2.792 0 0 0-1.009-.769 2.919 2.919 0 0 0-.643-.206zm-.729 7.342a3.649 3.649 0 0 0 .664-.058 2.764 2.764 0 0 0 .656-.205q.57-.262.949-.734a3.007 3.007 0 0 0 .428-.733 3.766 3.766 0 0 0 .142-.407q.191-.668.191-1.478a5.965 5.965 0 0 0-.061-.867 4.77 4.77 0 0 0-.13-.614 3.611 3.611 0 0 0-.275-.695 2.963 2.963 0 0 0-.295-.456q-.379-.48-.949-.747a2.785 2.785 0 0 0-.762-.225 3.691 3.691 0 0 0-.558-.041q-.757 0-1.324.266-.566.267-.945.747a3.089 3.089 0 0 0-.432.75 3.843 3.843 0 0 0-.138.401 4.961 4.961 0 0 0-.164.893 6.243 6.243 0 0 0-.027.588 5.952 5.952 0 0 0 .059.855 4.721 4.721 0 0 0 .132.623 3.552 3.552 0 0 0 .266.671 2.891 2.891 0 0 0 .304.469q.379.472.945.735a2.76 2.76 0 0 0 .719.215 3.747 3.747 0 0 0 .605.047zM11.565 9V6.735q-1.998.063-3.124.441a4.148 4.148 0 0 0-.382.148 2.817 2.817 0 0 0-.514.293q-.276.202-.431.449a1.306 1.306 0 0 0-.199.709 2.244 2.244 0 0 0 .027.357q.032.198.102.364a1.352 1.352 0 0 0 .017.04q.147.319.383.525.236.207.54.308a1.968 1.968 0 0 0 .626.101 3.853 3.853 0 0 0 .522-.034 2.982 2.982 0 0 0 .415-.086 3.512 3.512 0 0 0 .638-.249 3.184 3.184 0 0 0 .135-.073 4.064 4.064 0 0 0 .656-.469A10.315 10.315 0 0 0 11.565 9z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    l.defaultProps = {
        width: "25.17",
        height: "10.62",
        viewBox: "0 0 25.17 10.62"
    };
    var s = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Lora"), Object(o.createElement)("path", {
            d: "M0 10.5v-.495q.497-.014.725-.217a.571.571 0 0 0 .025-.023q.225-.225.255-.532.028-.284.03-.955a36.327 36.327 0 0 0 0-.118V1.68a14.948 14.948 0 0 1 .006-.447Q1.052.881 1.08.6L0 .66V0h3.375v.495q-.497.014-.725.217a.571.571 0 0 0-.025.023Q2.4.96 2.37 1.268q-.028.283-.03.954a36.327 36.327 0 0 0 0 .118v6.435a22.259 22.259 0 0 1-.003.366q-.008.512-.042.804L5.1 9.9q.96-.015 1.44-.607.449-.555.478-1.734a6.732 6.732 0 0 0 .002-.164h.51L7.44 10.5H0zm28.2-4.185v-.93q0-.975-.285-1.522a.916.916 0 0 0-.495-.432q-.173-.069-.394-.097a2.596 2.596 0 0 0-.326-.019q-.465 0-.885.195a1.324 1.324 0 0 0-.401.281 1.224 1.224 0 0 0-.214.304.704.704 0 0 1 .167.319q.028.115.028.251 0 .225-.165.428a.534.534 0 0 1-.319.187.813.813 0 0 1-.161.015.788.788 0 0 1-.213-.027.578.578 0 0 1-.282-.176.694.694 0 0 1-.159-.32 1.001 1.001 0 0 1-.021-.212 1.248 1.248 0 0 1 .243-.737 1.696 1.696 0 0 1 .14-.17q.353-.382.963-.616A3.852 3.852 0 0 1 25.522 3a4.198 4.198 0 0 1 .915-.206 5.309 5.309 0 0 1 .608-.034 3.775 3.775 0 0 1 .69.059q.386.072.685.231a1.76 1.76 0 0 1 .485.377 1.976 1.976 0 0 1 .379.651q.206.564.206 1.387a6.697 6.697 0 0 1 0 .07l-.015 3.375a8.633 8.633 0 0 1-.023.623 10.396 10.396 0 0 1-.037.397l1.065-.06v.63h-2.145a2.825 2.825 0 0 1-.022-.128q-.037-.245-.083-.727a4.338 4.338 0 0 1-.804.643 2.936 2.936 0 0 1-1.551.452 3.884 3.884 0 0 1-.634-.048q-.641-.107-1.038-.447a1.6 1.6 0 0 1-.574-1.168 2.096 2.096 0 0 1-.004-.122 1.843 1.843 0 0 1 .593-1.375 2.457 2.457 0 0 1 .104-.095 4.038 4.038 0 0 1 .984-.617 5.357 5.357 0 0 1 .771-.276 7.541 7.541 0 0 1 2.019-.278 7.378 7.378 0 0 1 .104.001zM17.28 10.5v-.45a1.368 1.368 0 0 0 .224-.017q.264-.044.399-.2a.914.914 0 0 0 .184-.347 1.234 1.234 0 0 0 .041-.208q.037-.338.037-1.058V4.8a11.104 11.104 0 0 1 .004-.297q.011-.419.056-.678l-1.065.045v-.615h.465q.57 0 .825-.097a1.403 1.403 0 0 0 .351-.199 1.716 1.716 0 0 0 .129-.109h.435q.04.393.06.928a27.003 27.003 0 0 1 .015.557 3.332 3.332 0 0 1 .595-.716 4.322 4.322 0 0 1 .478-.379 2.834 2.834 0 0 1 .688-.352 2.33 2.33 0 0 1 .759-.128 1.39 1.39 0 0 1 .353.043A1.055 1.055 0 0 1 22.71 3a.774.774 0 0 1 .276.461 1.185 1.185 0 0 1 .024.244.669.669 0 0 1-.063.278q-.04.088-.105.177a1.218 1.218 0 0 1-.02.025q-.187.24-.532.24a.715.715 0 0 1-.292-.058.69.69 0 0 1-.248-.19.71.71 0 0 1-.173-.473q0-.058.008-.119a1.398 1.398 0 0 0-.037 0q-.518 0-1.042.383a2.856 2.856 0 0 0-.069.052 3.461 3.461 0 0 0-.676.71 4.431 4.431 0 0 0-.306.49l.015 3.69a12.56 12.56 0 0 1-.004.317q-.011.444-.056.703l.945-.045v.615H17.28zm-5.055.24q-1.035 0-1.897-.487-.863-.488-1.365-1.358a3.775 3.775 0 0 1-.493-1.661 4.577 4.577 0 0 1-.01-.304q0-1.17.495-2.122.495-.953 1.358-1.5.862-.548 1.912-.548 1.035 0 1.905.503.87.502 1.373 1.372a3.783 3.783 0 0 1 .501 1.864 4.474 4.474 0 0 1 .001.071q0 1.14-.502 2.1a3.998 3.998 0 0 1-.993 1.243 3.846 3.846 0 0 1-.373.272q-.862.555-1.912.555zm.12-.6a2.088 2.088 0 0 0 .685-.106q.588-.203.928-.794.517-.9.517-2.235a6.823 6.823 0 0 0-.104-1.222q-.131-.722-.429-1.315a4.256 4.256 0 0 0-.029-.058 2.307 2.307 0 0 0-.419-.581q-.504-.499-1.269-.499-1.065 0-1.626.842a2.373 2.373 0 0 0-.046.073q-.548.89-.563 2.177a6.258 6.258 0 0 0 0 .073 6.206 6.206 0 0 0 .124 1.26 5.425 5.425 0 0 0 .139.532 3.624 3.624 0 0 0 .305.71 2.774 2.774 0 0 0 .49.633q.532.51 1.297.51zm15.84-1.905l.015-1.41a6.155 6.155 0 0 0-1.231.164 4.93 4.93 0 0 0-.959.338 2.045 2.045 0 0 0-.485.315 1.392 1.392 0 0 0-.475 1.088 1.492 1.492 0 0 0 .038.348.973.973 0 0 0 .292.507 1.14 1.14 0 0 0 .625.286 1.553 1.553 0 0 0 .215.014 2.587 2.587 0 0 0 .64-.077 2.225 2.225 0 0 0 .395-.14q.431-.202.875-.604A5.282 5.282 0 0 0 28.2 9a4.554 4.554 0 0 1-.007-.132q-.008-.228-.008-.633z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    s.defaultProps = {
        width: "30.48",
        height: "10.74",
        viewBox: "0 0 30.48 10.74"
    };
    var u = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Merriweather"), Object(o.createElement)("path", {
            d: "M1.275 11.505l1.11-9.555L.72 1.785V1.14h3.54l2.325 6.93.555 2.01.495-2.01 2.31-6.93h3.51v.645l-1.65.165 1.185 9.54 1.365.15v.645H10.32v-.645l1.395-.135-.69-6.84-.33-3-.66 2.07-2.715 8.01h-.6l-2.55-7.17-.975-2.91-.3 3-.615 6.84 1.47.135v.645H0v-.645l1.275-.135zm39.615-6.93V3.96h3.255v.615l-1.2.18L44.28 9.42l.495 2.085.495-2.1 1.5-5.445h1.245l1.5 5.445.48 2.115.54-2.1 1.32-4.65-1.155-.195V3.96h2.94v.615l-.825.195-2.34 7.635H49.26l-1.635-5.58-.42-1.89-.36 1.89-1.575 5.58h-1.185l-2.4-7.65-.795-.18zm36.705 6.96V.945L76.26.81V.255L78.48 0h.03l.285.195v3.57l-.03 1.245a3.73 3.73 0 0 1 .415-.322q.22-.149.488-.294a8.278 8.278 0 0 1 .447-.224 4.469 4.469 0 0 1 .916-.316 3.651 3.651 0 0 1 .794-.089q.63 0 1.074.16a1.745 1.745 0 0 1 .396.2 1.692 1.692 0 0 1 .533.605 2.461 2.461 0 0 1 .202.512q.206.742.21 1.994a15.656 15.656 0 0 1 0 .054v4.23l1.095.12v.645h-3.36v-.645l1.05-.12V7.275a11.701 11.701 0 0 0-.012-.556q-.025-.511-.098-.863a3.005 3.005 0 0 0-.018-.081 1.659 1.659 0 0 0-.137-.381 1.193 1.193 0 0 0-.365-.429 1.243 1.243 0 0 0-.354-.172q-.308-.098-.741-.098-.582 0-1.25.276a4.738 4.738 0 0 0-.04.016 5.877 5.877 0 0 0-.798.41 4.902 4.902 0 0 0-.417.288v5.835l1.11.12v.645H76.65v-.645l.945-.105zm-10.2-4.245v-.465a6.063 6.063 0 0 0-.015-.447q-.033-.441-.135-.74a1.753 1.753 0 0 0-.008-.02 1.218 1.218 0 0 0-.207-.373 1.086 1.086 0 0 0-.34-.272 1.518 1.518 0 0 0-.321-.12q-.317-.082-.76-.083a4.85 4.85 0 0 0-.014 0q-.765 0-1.387.233-.623.232-1.208.562l-.33-.66a1.09 1.09 0 0 1 .101-.08q.173-.122.514-.301a11.219 11.219 0 0 1 .075-.039q.525-.27 1.2-.48a4.688 4.688 0 0 1 .826-.18 3.96 3.96 0 0 1 .479-.03q1.02 0 1.612.285.593.285.856.915a2.918 2.918 0 0 1 .157.521q.056.266.082.58a7.177 7.177 0 0 1 .023.594v4.95h.93v.555a8.071 8.071 0 0 1-.537.128q-.265.053-.496.077a3.518 3.518 0 0 1-.362.02 1.808 1.808 0 0 1-.166-.007q-.228-.021-.329-.105a.271.271 0 0 1-.07-.096q-.065-.14-.065-.419a2.596 2.596 0 0 1 0-.003v-.555q-.54.48-1.178.848a2.766 2.766 0 0 1-1.174.356 3.387 3.387 0 0 1-.273.011 3.196 3.196 0 0 1-.846-.107 2.458 2.458 0 0 1-.947-.493 1.933 1.933 0 0 1-.639-1.072 3.002 3.002 0 0 1-.073-.683 2.269 2.269 0 0 1 .215-1.005q.246-.505.771-.854a3.23 3.23 0 0 1 .454-.249q1.187-.537 2.853-.662a13.588 13.588 0 0 1 .732-.035zm-45.585.735h-5.34a5.701 5.701 0 0 0 .1 1.1q.167.849.612 1.473.713.997 2.003.997a3.841 3.841 0 0 0 .982-.132 4.554 4.554 0 0 0 .308-.093q.66-.225 1.02-.54l.24.555a2.475 2.475 0 0 1-.438.354q-.218.141-.487.263a5.152 5.152 0 0 1-.343.14 4.818 4.818 0 0 1-1.567.307 4.586 4.586 0 0 1-.105.001 4.048 4.048 0 0 1-1.136-.151 2.974 2.974 0 0 1-1.541-1.041 4.163 4.163 0 0 1-.746-1.54q-.192-.736-.192-1.633a5.604 5.604 0 0 1 .132-1.239 4.51 4.51 0 0 1 .363-1.026 3.885 3.885 0 0 1 .809-1.103 3.597 3.597 0 0 1 .563-.434 3.635 3.635 0 0 1 1.905-.547 4.339 4.339 0 0 1 .068-.001 3.743 3.743 0 0 1 .848.09q.638.149 1.087.54a2.338 2.338 0 0 1 .142.135q.653.672.778 1.864a5.393 5.393 0 0 1 .025.341q0 .93-.09 1.32zm39.03 0H55.5a5.701 5.701 0 0 0 .1 1.1q.167.849.613 1.473.712.997 2.002.997a3.841 3.841 0 0 0 .982-.132 4.554 4.554 0 0 0 .308-.093q.66-.225 1.02-.54l.24.555a2.475 2.475 0 0 1-.438.354q-.218.141-.487.263a5.152 5.152 0 0 1-.343.14 4.818 4.818 0 0 1-1.567.307 4.586 4.586 0 0 1-.105.001 4.048 4.048 0 0 1-1.136-.151 2.974 2.974 0 0 1-1.541-1.041 4.163 4.163 0 0 1-.746-1.54q-.192-.736-.192-1.633a5.604 5.604 0 0 1 .132-1.239 4.51 4.51 0 0 1 .363-1.026 3.885 3.885 0 0 1 .809-1.103 3.597 3.597 0 0 1 .563-.434 3.635 3.635 0 0 1 1.905-.547 4.339 4.339 0 0 1 .068-.001 3.743 3.743 0 0 1 .848.09q.638.149 1.087.54a2.338 2.338 0 0 1 .142.135q.653.672.778 1.864a5.393 5.393 0 0 1 .025.341q0 .93-.09 1.32zm32.325 0h-5.34a5.701 5.701 0 0 0 .1 1.1q.167.849.613 1.473.712.997 2.002.997a3.841 3.841 0 0 0 .982-.132 4.554 4.554 0 0 0 .308-.093q.66-.225 1.02-.54l.24.555a2.475 2.475 0 0 1-.438.354q-.218.141-.487.263a5.152 5.152 0 0 1-.343.14 4.818 4.818 0 0 1-1.567.307 4.586 4.586 0 0 1-.105.001 4.048 4.048 0 0 1-1.136-.151 2.974 2.974 0 0 1-1.541-1.041 4.163 4.163 0 0 1-.746-1.54q-.192-.736-.192-1.633a5.604 5.604 0 0 1 .132-1.239 4.51 4.51 0 0 1 .363-1.026 3.885 3.885 0 0 1 .809-1.103 3.597 3.597 0 0 1 .563-.434 3.635 3.635 0 0 1 1.905-.547 4.339 4.339 0 0 1 .068-.001 3.743 3.743 0 0 1 .848.09q.638.149 1.087.54a2.338 2.338 0 0 1 .142.135q.653.672.778 1.864a5.393 5.393 0 0 1 .025.341q0 .93-.09 1.32zm-69.855 4.26v-.63l1.2-.09V4.95l-1.155-.255V4.02l1.905-.24h.03l.285.24v.24l-.03 1.14h.03a.446.446 0 0 0 .013-.014q.063-.069.385-.443a2.667 2.667 0 0 1 .342-.329q.309-.251.753-.489a3.357 3.357 0 0 1 .797-.31 2.821 2.821 0 0 1 .665-.08 1.702 1.702 0 0 1 .323.03 1.489 1.489 0 0 1 .127.03v1.32a.222.222 0 0 0-.037-.022q-.065-.031-.197-.061a2.583 2.583 0 0 0-.029-.007 1.921 1.921 0 0 0-.343-.043 2.189 2.189 0 0 0-.084-.002 4.784 4.784 0 0 0-.653.042q-.446.062-.802.213-.6.255-1.11.63v5.685l1.995.12v.615h-4.41zm6.75 0v-.63l1.2-.09V4.95l-1.155-.255V4.02l1.905-.24h.03l.285.24v.24l-.03 1.14h.03a.446.446 0 0 0 .013-.014q.063-.069.385-.443a2.667 2.667 0 0 1 .342-.329q.309-.251.753-.489a3.357 3.357 0 0 1 .797-.31 2.821 2.821 0 0 1 .665-.08 1.702 1.702 0 0 1 .323.03 1.489 1.489 0 0 1 .127.03v1.32a.222.222 0 0 0-.037-.022q-.065-.031-.197-.061a2.583 2.583 0 0 0-.029-.007 1.921 1.921 0 0 0-.343-.043 2.189 2.189 0 0 0-.084-.002 4.784 4.784 0 0 0-.653.042q-.446.062-.802.213-.6.255-1.11.63v5.685l1.995.12v.615h-4.41zm64.605 0v-.63l1.2-.09V4.95l-1.155-.255V4.02l1.905-.24h.03l.285.24v.24L96.9 5.4h.03a.446.446 0 0 0 .013-.014q.063-.069.384-.443a2.667 2.667 0 0 1 .343-.329q.309-.251.752-.489a3.357 3.357 0 0 1 .798-.31 2.821 2.821 0 0 1 .665-.08 1.702 1.702 0 0 1 .323.03 1.489 1.489 0 0 1 .127.03v1.32a.222.222 0 0 0-.037-.022q-.065-.031-.197-.061a2.583 2.583 0 0 0-.029-.007 1.921 1.921 0 0 0-.343-.043 2.189 2.189 0 0 0-.084-.002 4.784 4.784 0 0 0-.653.042q-.446.062-.802.213-.6.255-1.11.63v5.685l1.995.12v.615h-4.41zm-23.04-1.515V4.845h-1.14V4.26a19.476 19.476 0 0 0 .259-.059q.514-.12.611-.181.186-.099.29-.353a1.268 1.268 0 0 0 .04-.112 2.489 2.489 0 0 0 .049-.135q.075-.225.181-.635a22.576 22.576 0 0 0 .01-.04 66.034 66.034 0 0 0 .07-.277q.068-.268.116-.469a17.904 17.904 0 0 0 .039-.169h.69v2.13h2.655v.885H72.84v4.86q0 .856.058 1.211a1.822 1.822 0 0 0 .002.011q.053.313.201.431a.325.325 0 0 0 .039.027.556.556 0 0 0 .123.051q.133.039.339.05a3.207 3.207 0 0 0 .168.004q.435 0 .975-.12a6.804 6.804 0 0 0 .282-.069q.272-.072.451-.15a1.582 1.582 0 0 0 .077-.036l.195.57q-.291.228-.902.439a7.907 7.907 0 0 1-.238.078 6.6 6.6 0 0 1-.567.151q-.447.097-.813.097a2.749 2.749 0 0 1-.448-.034q-.239-.04-.429-.125a1.219 1.219 0 0 1-.323-.208 1.03 1.03 0 0 1-.253-.371q-.152-.362-.152-.942zm-33.6.75V4.95l-1.17-.255V4.02l2.055-.24h.03l.3.24v7.515l1.305.105v.645h-3.84v-.645l1.32-.12zm29.37-.87V7.995a10.223 10.223 0 0 0-1 .054q-1.093.117-1.752.486a2.323 2.323 0 0 0-.469.339 1.426 1.426 0 0 0-.469 1.071 2.661 2.661 0 0 0 .034.444q.088.519.401.794a1.464 1.464 0 0 0 .599.311q.222.06.487.069a2.819 2.819 0 0 0 .099.002q.42 0 1.005-.27a5.419 5.419 0 0 0 1.005-.599 5.048 5.048 0 0 0 .06-.046zm-50.91-3.33h4.065a4.56 4.56 0 0 0 .043-.532 5.163 5.163 0 0 0 .002-.128q-.015-.99-.472-1.575a1.459 1.459 0 0 0-.811-.516q-.267-.069-.592-.069a2.115 2.115 0 0 0-1.078.262q-.835.483-1.076 1.861a6.427 6.427 0 0 0-.081.697zm39.03 0h4.065a4.56 4.56 0 0 0 .043-.532 5.163 5.163 0 0 0 .002-.128q-.015-.99-.472-1.575a1.459 1.459 0 0 0-.811-.516q-.267-.069-.592-.069a2.115 2.115 0 0 0-1.078.262q-.835.483-1.076 1.861a6.427 6.427 0 0 0-.081.697zm32.325 0h4.065a4.56 4.56 0 0 0 .043-.532 5.163 5.163 0 0 0 .002-.128q-.015-.99-.473-1.575a1.459 1.459 0 0 0-.81-.516Q90.4 4.5 90.075 4.5a2.115 2.115 0 0 0-1.078.262q-.835.483-1.076 1.861a6.427 6.427 0 0 0-.081.697zM38.52 2.385h-.015a1.102 1.102 0 0 1-.325-.044q-.485-.15-.485-.811a1.214 1.214 0 0 1 .042-.327.93.93 0 0 1 .213-.386.841.841 0 0 1 .508-.264A1.198 1.198 0 0 1 38.64.54a1.29 1.29 0 0 1 .233.02q.127.023.226.075a.57.57 0 0 1 .186.153.902.902 0 0 1 .184.444 1.197 1.197 0 0 1 .011.163q0 .382-.167.627a.811.811 0 0 1-.081.1q-.247.263-.712.263z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    u.defaultProps = {
        width: "100.335",
        height: "12.45",
        viewBox: "0 0 100.335 12.45"
    };
    var d = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Montserrat"), Object(o.createElement)("path", {
            d: "M10.095 0h.255v10.5h-.3V.645l-4.785 8.37h-.18L.3.675V10.5H0V0h.255l4.92 8.61L10.095 0zM29.88 5.925V10.5h-.3V5.925q0-1.03-.38-1.711a2.282 2.282 0 0 0-.348-.471 2.367 2.367 0 0 0-1.146-.651q-.376-.097-.823-.106a4.594 4.594 0 0 0-.093-.001 4.088 4.088 0 0 0-1.007.117 2.865 2.865 0 0 0-1.386.791 3.065 3.065 0 0 0-.815 1.644 4.337 4.337 0 0 0-.062.748V10.5h-.3V2.745h.3v2.07q.36-.99 1.2-1.552a3.262 3.262 0 0 1 1.23-.49 4.481 4.481 0 0 1 .825-.073q1.455 0 2.28.833.825.832.825 2.392zm7.935 3.555l.18-.24a2.911 2.911 0 0 0 .508.388q.309.189.7.34.757.292 1.642.292a6.079 6.079 0 0 0 .688-.036q.715-.082 1.152-.348a1.642 1.642 0 0 0 .11-.074 1.452 1.452 0 0 0 .618-1.046 1.908 1.908 0 0 0 .012-.221 1.634 1.634 0 0 0-.044-.389 1.112 1.112 0 0 0-.294-.533q-.337-.338-.824-.495a6.728 6.728 0 0 0-.341-.1q-.356-.094-.84-.191a22.906 22.906 0 0 0-.162-.032 16.76 16.76 0 0 1-.587-.116q-.521-.113-.89-.236a2.249 2.249 0 0 1-.809-.465 2.185 2.185 0 0 1-.136-.135q-.352-.38-.381-1.032a2.679 2.679 0 0 1-.002-.116 1.742 1.742 0 0 1 .573-1.307 2.397 2.397 0 0 1 .124-.111q.538-.445 1.464-.547a5.342 5.342 0 0 1 .584-.03q.72 0 1.425.218a4.224 4.224 0 0 1 .528.2q.265.122.477.273a2.373 2.373 0 0 1 .135.104l-.18.24a3.037 3.037 0 0 0-.695-.413 3.784 3.784 0 0 0-.385-.142q-.63-.195-1.305-.195a4.985 4.985 0 0 0-.668.042q-.335.045-.607.14a1.916 1.916 0 0 0-.548.29q-.597.465-.607 1.213a1.907 1.907 0 0 0 0 .025 1.768 1.768 0 0 0 .043.4q.072.312.267.53a1.123 1.123 0 0 0 .035.038 2.02 2.02 0 0 0 .715.467 2.414 2.414 0 0 0 .14.05 6.426 6.426 0 0 0 .351.102q.415.108.981.21a20.374 20.374 0 0 0 .018.003 19.837 19.837 0 0 1 .535.113q.512.115.87.231a5.702 5.702 0 0 1 .05.016q.54.18.915.578.351.371.373 1.012a2.541 2.541 0 0 1 .002.09q0 .884-.686 1.425a2.243 2.243 0 0 1-.049.038 2.415 2.415 0 0 1-.709.354q-.332.107-.738.155a5.995 5.995 0 0 1-.698.038 5.133 5.133 0 0 1-1.599-.246 4.849 4.849 0 0 1-.156-.054 4.502 4.502 0 0 1-.566-.248q-.287-.152-.509-.333a2.344 2.344 0 0 1-.2-.184zM71.55 5.415V10.5h-.3V8.85q-.375.795-1.132 1.245a3.136 3.136 0 0 1-1.038.381 4.29 4.29 0 0 1-.785.069 4.543 4.543 0 0 1-.786-.064q-.441-.077-.792-.249a2.274 2.274 0 0 1-.439-.28 1.907 1.907 0 0 1-.721-1.392 2.545 2.545 0 0 1-.007-.19 2.153 2.153 0 0 1 .12-.734 1.867 1.867 0 0 1 .532-.774 1.938 1.938 0 0 1 .618-.357q.554-.206 1.377-.219a7.097 7.097 0 0 1 .113-.001h2.94V5.43a3.775 3.775 0 0 0-.06-.699q-.073-.387-.235-.689a1.825 1.825 0 0 0-.328-.442q-.528-.522-1.483-.601a4.299 4.299 0 0 0-.354-.014q-.84 0-1.567.293-.728.292-1.253.787l-.21-.21q.555-.54 1.35-.847.795-.308 1.665-.308a4.181 4.181 0 0 1 .799.072q.463.09.821.293a2.14 2.14 0 0 1 .442.333q.646.631.707 1.774a4.578 4.578 0 0 1 .006.243zM52.275 6.54v.075h-6.9a4.062 4.062 0 0 0 .16 1.156 3.544 3.544 0 0 0 .305.727q.465.832 1.283 1.297a3.584 3.584 0 0 0 1.585.458 4.316 4.316 0 0 0 .252.007q.795 0 1.493-.307.697-.308 1.147-.893l.21.21q-.51.615-1.26.945-.75.33-1.59.33a4.198 4.198 0 0 1-1.221-.173 3.682 3.682 0 0 1-.767-.329q-.877-.503-1.379-1.403a3.987 3.987 0 0 1-.491-1.679 4.815 4.815 0 0 1-.012-.346 4.67 4.67 0 0 1 .147-1.192 3.962 3.962 0 0 1 .318-.825q.465-.893 1.283-1.395a3.418 3.418 0 0 1 1.742-.502 4.085 4.085 0 0 1 .095-.001q1.005 0 1.83.495.825.495 1.298 1.365.472.87.472 1.98zM36.54 9.78l.21.21a1.496 1.496 0 0 1-.397.297 1.958 1.958 0 0 1-.271.115q-.412.143-.847.143a2.507 2.507 0 0 1-.558-.058q-.387-.089-.668-.311a1.51 1.51 0 0 1-.162-.148 1.743 1.743 0 0 1-.432-.843 2.557 2.557 0 0 1-.055-.545V3.03h-1.5v-.285h1.5V1.05h.3v1.695h2.625v.285H33.66v5.535a2.699 2.699 0 0 0 .04.478q.048.268.155.479a1.312 1.312 0 0 0 .21.303q.374.401 1.066.432a2.646 2.646 0 0 0 .119.003 2.078 2.078 0 0 0 .628-.091 1.701 1.701 0 0 0 .662-.389zm41.67 0l.21.21a1.496 1.496 0 0 1-.397.297 1.958 1.958 0 0 1-.271.115q-.412.143-.847.143a2.507 2.507 0 0 1-.558-.058q-.387-.089-.668-.311a1.51 1.51 0 0 1-.162-.148 1.743 1.743 0 0 1-.432-.843 2.557 2.557 0 0 1-.055-.545V3.03h-1.5v-.285h1.5V1.05h.3v1.695h2.625v.285H75.33v5.535a2.699 2.699 0 0 0 .04.478q.048.268.155.479a1.312 1.312 0 0 0 .21.303q.374.401 1.066.432a2.646 2.646 0 0 0 .119.003 2.078 2.078 0 0 0 .628-.091 1.701 1.701 0 0 0 .662-.389zm-62.659.527a3.883 3.883 0 0 0 1.369.238 4.436 4.436 0 0 0 .132-.002 3.728 3.728 0 0 0 1.796-.501q.862-.502 1.349-1.402a3.908 3.908 0 0 0 .316-.768 4.464 4.464 0 0 0 .172-1.257 4.905 4.905 0 0 0-.018-.422 4.008 4.008 0 0 0-.47-1.595q-.487-.893-1.349-1.395a3.628 3.628 0 0 0-.559-.265A3.883 3.883 0 0 0 16.92 2.7a4.436 4.436 0 0 0-.132.002 3.728 3.728 0 0 0-1.796.501q-.862.502-1.349 1.395a3.849 3.849 0 0 0-.325.794 4.451 4.451 0 0 0-.163 1.223 4.941 4.941 0 0 0 .014.38 4.069 4.069 0 0 0 .473 1.645q.488.9 1.351 1.403a3.628 3.628 0 0 0 .558.264zM58.155 2.7V3h-.09a3.496 3.496 0 0 0-.923.115 2.499 2.499 0 0 0-1.252.777 3.002 3.002 0 0 0-.631 1.211q-.121.448-.144.978a5.812 5.812 0 0 0-.005.249v4.17h-.3V2.745h.3v2.01a3.185 3.185 0 0 1 .44-.873 2.713 2.713 0 0 1 .67-.649 2.976 2.976 0 0 1 1.09-.452 4.181 4.181 0 0 1 .845-.081zm5.745 0V3h-.09a3.496 3.496 0 0 0-.923.115 2.499 2.499 0 0 0-1.252.777 3.002 3.002 0 0 0-.631 1.211q-.121.448-.144.978a5.812 5.812 0 0 0-.005.249v4.17h-.3V2.745h.3v2.01a3.185 3.185 0 0 1 .44-.873 2.713 2.713 0 0 1 .67-.649 2.976 2.976 0 0 1 1.09-.452A4.181 4.181 0 0 1 63.9 2.7zm-46.98 7.56a3.521 3.521 0 0 0 1.335-.251 3.359 3.359 0 0 0 .435-.214q.795-.465 1.245-1.297a3.762 3.762 0 0 0 .431-1.465 4.613 4.613 0 0 0 .019-.418 4.21 4.21 0 0 0-.142-1.112 3.615 3.615 0 0 0-.308-.77q-.45-.833-1.245-1.29a3.464 3.464 0 0 0-1.679-.457 4.103 4.103 0 0 0-.091-.001 3.581 3.581 0 0 0-1.302.234 3.379 3.379 0 0 0-.468.223q-.795.458-1.245 1.291a3.762 3.762 0 0 0-.431 1.464 4.613 4.613 0 0 0-.019.418 4.21 4.21 0 0 0 .142 1.112 3.615 3.615 0 0 0 .308.77q.45.833 1.245 1.298a3.428 3.428 0 0 0 1.709.465 4.055 4.055 0 0 0 .061 0zm28.455-3.93h6.615a3.759 3.759 0 0 0-.285-1.291 3.525 3.525 0 0 0-.21-.419q-.45-.765-1.185-1.2a3.144 3.144 0 0 0-1.607-.435 3.715 3.715 0 0 0-.028 0 3.202 3.202 0 0 0-1.3.263 3.104 3.104 0 0 0-.335.172q-.735.435-1.177 1.2-.443.765-.488 1.71zM71.25 8.28V6.57h-2.955q-1.195 0-1.789.431a1.501 1.501 0 0 0-.064.049 1.558 1.558 0 0 0-.586 1.141 2.159 2.159 0 0 0-.006.164q0 .885.645 1.395t1.8.51a3.602 3.602 0 0 0 1.217-.193q1.005-.359 1.551-1.384a4.12 4.12 0 0 0 .187-.403z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    d.defaultProps = {
        width: "78.42",
        height: "10.545",
        viewBox: "0 0 78.42 10.545"
    };
    var p = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Noto Sans"), Object(o.createElement)("path", {
            d: "M8.489.154v10.708H6.914L1.179 1.97h-.058l.036.594a47.361 47.361 0 0 1 .054.95q.021.469.029.885a24.791 24.791 0 0 1 .005.479v5.984H0V.154h1.56l.33.52 3.515 5.435 1.868 2.907h.059a4.283 4.283 0 0 1-.007-.097q-.013-.231-.04-.863a258.15 258.15 0 0 1-.012-.296 95.86 95.86 0 0 1-.019-.503q-.024-.663-.025-1.024a11.409 11.409 0 0 1 0-.037V.154h1.26zm29.67 10.349V9.214q.681.293 1.491.461a8.305 8.305 0 0 0 .865.135 6.51 6.51 0 0 0 .647.034 5.003 5.003 0 0 0 .661-.041q.332-.044.602-.137a1.939 1.939 0 0 0 .546-.284q.608-.461.608-1.267a2.138 2.138 0 0 0-.031-.374q-.038-.212-.122-.385a1.197 1.197 0 0 0-.067-.12q-.219-.344-.736-.644-.516-.3-1.563-.681a8.525 8.525 0 0 1-.828-.349q-.839-.411-1.282-.912a2.481 2.481 0 0 1-.014-.017 2.56 2.56 0 0 1-.575-1.215 3.614 3.614 0 0 1-.063-.686 2.68 2.68 0 0 1 .166-.961A2.375 2.375 0 0 1 39.24.74a3.305 3.305 0 0 1 1.247-.598Q41.046 0 41.719 0a7.477 7.477 0 0 1 2.062.278 6.704 6.704 0 0 1 .889.323l-.417 1.157a8.239 8.239 0 0 0-1.168-.391q-.66-.163-1.27-.179a4.993 4.993 0 0 0-.126-.001 3.573 3.573 0 0 0-.58.044q-.308.051-.558.16a1.716 1.716 0 0 0-.352.206q-.538.41-.538 1.15a2.209 2.209 0 0 0 .029.37q.037.215.119.391a1.252 1.252 0 0 0 .06.114 1.542 1.542 0 0 0 .252.312q.175.17.422.321.387.238 1.141.531a18.412 18.412 0 0 0 .32.121q1.194.44 1.78.854a3.125 3.125 0 0 1 .482.415 2.396 2.396 0 0 1 .382.537 2.413 2.413 0 0 1 .225.671 3.361 3.361 0 0 1 .054.614 3.112 3.112 0 0 1-.154 1.003 2.567 2.567 0 0 1-.857 1.202 3.405 3.405 0 0 1-1.162.59q-.72.215-1.65.215a11.567 11.567 0 0 1-1.093-.048q-1.095-.104-1.803-.434a3.27 3.27 0 0 1-.049-.023zm23.943.359h-1.304V5.72a3.515 3.515 0 0 0-.038-.538q-.043-.275-.133-.494a1.442 1.442 0 0 0-.264-.429 1.339 1.339 0 0 0-.56-.36q-.341-.12-.806-.12a3.525 3.525 0 0 0-.668.059q-.373.072-.659.233a1.639 1.639 0 0 0-.472.393 2.034 2.034 0 0 0-.329.602q-.2.552-.227 1.369a7.931 7.931 0 0 0-.004.259v4.168H55.32V2.82h1.062l.198 1.099h.073q.373-.594 1.047-.92.674-.326 1.487-.326.951 0 1.588.297a2.119 2.119 0 0 1 .609.421 2.19 2.19 0 0 1 .503.815q.126.346.178.773a5.352 5.352 0 0 1 .037.646v5.237zm1.992-.359V9.302a6.837 6.837 0 0 0 1.222.463 5.154 5.154 0 0 0 1.334.181q.881 0 1.338-.251a1.171 1.171 0 0 0 .113-.071 1.121 1.121 0 0 0 .294-.298q.16-.244.16-.566a.933.933 0 0 0-.294-.683 1.39 1.39 0 0 0-.142-.123 2.707 2.707 0 0 0-.279-.182q-.453-.26-1.27-.572-.874-.338-1.348-.6a3.312 3.312 0 0 1-.249-.151 2.582 2.582 0 0 1-.346-.276q-.187-.18-.307-.382a1.584 1.584 0 0 1-.024-.041 1.646 1.646 0 0 1-.172-.475q-.041-.204-.044-.437a2.83 2.83 0 0 1 0-.033 1.94 1.94 0 0 1 .154-.785q.198-.454.651-.775.641-.454 1.661-.548a6.07 6.07 0 0 1 .551-.024q1.37 0 2.564.542l-.447 1.048a7.693 7.693 0 0 0-.919-.322q-.473-.131-.903-.172a4.044 4.044 0 0 0-.383-.019 4.156 4.156 0 0 0-.452.023q-.466.051-.758.217a1.187 1.187 0 0 0-.035.02 1.006 1.006 0 0 0-.237.197.763.763 0 0 0-.188.517.875.875 0 0 0 .291.664 1.182 1.182 0 0 0 .076.065q.318.251 1.37.671a25.694 25.694 0 0 0 .336.131q.87.324 1.346.609a3.133 3.133 0 0 1 .137.087q.463.311.691.696a1.657 1.657 0 0 1 .016.029 1.718 1.718 0 0 1 .19.535 2.371 2.371 0 0 1 .037.432 2.412 2.412 0 0 1-.118.774 1.968 1.968 0 0 1-.724.973q-.657.482-1.729.589a6.469 6.469 0 0 1-.637.029q-1.589 0-2.527-.505zm-11.264.359h-.96l-.256-1.143h-.059a5.04 5.04 0 0 1-.408.457q-.219.215-.438.366a2.24 2.24 0 0 1-.351.199 2.79 2.79 0 0 1-.577.182q-.281.058-.609.077a5.619 5.619 0 0 1-.319.008q-1.187 0-1.861-.622a2.028 2.028 0 0 1-.599-1.061 3.086 3.086 0 0 1-.075-.697 2.122 2.122 0 0 1 1.205-2.006q.892-.474 2.444-.549a11.707 11.707 0 0 1 .211-.008l1.363-.052v-.476a3.369 3.369 0 0 0-.034-.489q-.036-.25-.114-.451a1.311 1.311 0 0 0-.248-.411 1.198 1.198 0 0 0-.485-.316q-.326-.12-.782-.12a3.807 3.807 0 0 0-1.053.143 3.547 3.547 0 0 0-.152.048 10.204 10.204 0 0 0-.812.31 9.002 9.002 0 0 0-.254.114l-.402-.988a5.878 5.878 0 0 1 1.137-.455 6.647 6.647 0 0 1 .188-.051 5.731 5.731 0 0 1 1.421-.183q.913 0 1.533.253a2.135 2.135 0 0 1 .635.392 1.961 1.961 0 0 1 .522.803q.189.522.189 1.247v5.479zM24.097 9.763v1.011a1.364 1.364 0 0 1-.119.045q-.173.057-.449.113-.384.076-.78.076a3.217 3.217 0 0 1-.948-.127q-1.041-.321-1.314-1.452a3.865 3.865 0 0 1-.096-.903V3.845h-1.136v-.63l1.15-.527.528-1.714h.783V2.82h2.322v1.025h-2.322v4.644a2.331 2.331 0 0 0 .035.413q.04.226.13.406a1.136 1.136 0 0 0 .169.25 1.091 1.091 0 0 0 .637.349 1.603 1.603 0 0 0 .289.025 3.166 3.166 0 0 0 .232-.009q.122-.009.259-.027a6.001 6.001 0 0 0 .11-.016 5.011 5.011 0 0 0 .18-.029q.213-.04.34-.088zm-6.009-1.71a6.281 6.281 0 0 0 .113-1.227q0-1.919-1-3.036a3.21 3.21 0 0 0-1.501-.953 4.173 4.173 0 0 0-1.198-.164q-1.773 0-2.754 1.095-.981 1.095-.981 3.058 0 1.26.454 2.212a4.01 4.01 0 0 0 .073.146 3.3 3.3 0 0 0 1.223 1.315 3.415 3.415 0 0 0 .815.357 3.982 3.982 0 0 0 1.119.152q1.757 0 2.754-1.106a3.402 3.402 0 0 0 .403-.55q.335-.568.48-1.299zm14.488 0a6.281 6.281 0 0 0 .112-1.227q0-1.919-1-3.036a3.21 3.21 0 0 0-1.5-.953 4.173 4.173 0 0 0-1.199-.164q-1.772 0-2.754 1.095-.981 1.095-.981 3.058 0 1.26.454 2.212a4.01 4.01 0 0 0 .073.146 3.3 3.3 0 0 0 1.223 1.315 3.415 3.415 0 0 0 .815.357 3.982 3.982 0 0 0 1.119.152q1.758 0 2.754-1.106a3.402 3.402 0 0 0 .403-.55q.335-.568.481-1.299zM12.129 6.826a6.168 6.168 0 0 0 .055.857q.127.899.542 1.447a1.933 1.933 0 0 0 1.263.747 2.937 2.937 0 0 0 .498.04 2.671 2.671 0 0 0 .726-.093 1.905 1.905 0 0 0 1.025-.694 2.562 2.562 0 0 0 .389-.76q.117-.357.169-.793a6.315 6.315 0 0 0 .042-.751q0-1.516-.604-2.281-.604-.766-1.769-.766a2.512 2.512 0 0 0-1.063.209q-1.273.589-1.273 2.838zm14.487 0a6.168 6.168 0 0 0 .056.857q.126.899.541 1.447a1.933 1.933 0 0 0 1.263.747 2.937 2.937 0 0 0 .499.04 2.671 2.671 0 0 0 .725-.093 1.905 1.905 0 0 0 1.025-.694 2.562 2.562 0 0 0 .389-.76q.117-.357.17-.793a6.315 6.315 0 0 0 .042-.751q0-1.516-.605-2.281-.604-.766-1.768-.766a2.512 2.512 0 0 0-1.063.209q-1.274.589-1.274 2.838zm24.91.828v-.725l-1.187.051a8.375 8.375 0 0 0-.71.054q-.688.085-1.119.285a1.854 1.854 0 0 0-.188.101 1.266 1.266 0 0 0-.611.919 1.898 1.898 0 0 0-.023.304 1.651 1.651 0 0 0 .043.39 1.086 1.086 0 0 0 .342.577q.332.291.896.33a2.624 2.624 0 0 0 .184.006q1.106 0 1.739-.597a1.94 1.94 0 0 0 .55-.963q.084-.333.084-.732z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    p.defaultProps = {
        width: "69.829",
        height: "11.009",
        viewBox: "0 0 69.829 11.009"
    };
    var m = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Open Sans"), Object(o.createElement)("path", {
            d: "M41.236 10.591v-.747q1.157.491 2.951.491a4.664 4.664 0 0 0 .842-.072q.742-.136 1.249-.533a2.007 2.007 0 0 0 .566-.67q.201-.395.207-.884a2.472 2.472 0 0 0 0-.031 2.389 2.389 0 0 0-.036-.427q-.06-.331-.22-.58a1.755 1.755 0 0 0-.286-.336q-.147-.136-.338-.263a3.621 3.621 0 0 0-.211-.13q-.523-.298-1.488-.637a20.845 20.845 0 0 0-.212-.074 11.516 11.516 0 0 1-.821-.315q-.773-.334-1.22-.697a2.445 2.445 0 0 1-.225-.207 2.207 2.207 0 0 1-.565-1.107 3.184 3.184 0 0 1-.062-.64q0-1.199.938-1.956a3.263 3.263 0 0 1 .004-.003 3.336 3.336 0 0 1 1.416-.658 4.783 4.783 0 0 1 1.004-.1 7.085 7.085 0 0 1 2.835.571l-.271.645a7.596 7.596 0 0 0-1.299-.417 5.829 5.829 0 0 0-1.25-.14 4.172 4.172 0 0 0-.759.065q-.439.081-.789.265a2.248 2.248 0 0 0-.342.219 1.761 1.761 0 0 0-.694 1.286 2.37 2.37 0 0 0-.009.209q0 .464.132.798a1.4 1.4 0 0 0 .084.176 1.611 1.611 0 0 0 .279.356q.14.136.322.26a3.002 3.002 0 0 0 .106.068q.491.304 1.684.729 1.253.432 1.883.839.571.369.862.828a2.033 2.033 0 0 1 .057.095 2.191 2.191 0 0 1 .234.649q.054.27.055.58a3.691 3.691 0 0 1 0 .019 2.931 2.931 0 0 1-.162.998 2.505 2.505 0 0 1-.823 1.127 3.431 3.431 0 0 1-1.292.628q-.487.126-1.058.15a6.479 6.479 0 0 1-.268.005q-1.818 0-2.85-.37a3.667 3.667 0 0 1-.16-.062zm-5.955.286h-.718V5.713a4.52 4.52 0 0 0-.04-.624q-.1-.717-.452-1.109a1.358 1.358 0 0 0-.013-.014 1.558 1.558 0 0 0-.645-.409q-.392-.136-.923-.136a4.469 4.469 0 0 0-.771.062q-.412.072-.735.229a1.934 1.934 0 0 0-.585.43 2.133 2.133 0 0 0-.416.701q-.231.612-.246 1.517a7.657 7.657 0 0 0 0 .122v4.395h-.726V2.915h.616l.139 1.092h.044q.702-1.126 2.392-1.234a5.799 5.799 0 0 1 .369-.012 3.613 3.613 0 0 1 1.105.155q1.176.378 1.49 1.679a4.586 4.586 0 0 1 .115 1.074v5.208zm28.865 0h-.718V5.713a4.52 4.52 0 0 0-.04-.624q-.1-.717-.453-1.109a1.358 1.358 0 0 0-.012-.014 1.558 1.558 0 0 0-.645-.409q-.392-.136-.923-.136a4.469 4.469 0 0 0-.771.062q-.412.072-.735.229a1.934 1.934 0 0 0-.585.43 2.133 2.133 0 0 0-.417.701q-.23.612-.245 1.517a7.657 7.657 0 0 0-.001.122v4.395h-.725V2.915h.615l.14 1.092h.044q.702-1.126 2.392-1.234a5.799 5.799 0 0 1 .369-.012 3.613 3.613 0 0 1 1.105.155q1.175.378 1.49 1.679a4.586 4.586 0 0 1 .115 1.074v5.208zm1.86-.345v-.783a5.593 5.593 0 0 0 2.534.6 5.703 5.703 0 0 0 .65-.034q.693-.08 1.119-.343a1.676 1.676 0 0 0 .022-.014 1.514 1.514 0 0 0 .342-.293 1.125 1.125 0 0 0 .27-.751 1.253 1.253 0 0 0-.407-.939 1.68 1.68 0 0 0-.08-.072 2.721 2.721 0 0 0-.355-.248q-.395-.237-1.002-.468a11.474 11.474 0 0 0-.244-.09q-.918-.332-1.416-.593a3.399 3.399 0 0 1-.261-.15 2.826 2.826 0 0 1-.377-.288q-.214-.195-.352-.415a1.565 1.565 0 0 1-.205-.526 2.172 2.172 0 0 1-.04-.43 1.699 1.699 0 0 1 .159-.744q.187-.389.592-.669.574-.398 1.498-.492a5.971 5.971 0 0 1 .6-.029 6.283 6.283 0 0 1 2.446.484l-.271.659q-1.172-.483-2.175-.483-.667 0-1.146.151a2.1 2.1 0 0 0-.399.171 1.346 1.346 0 0 0-.3.224.918.918 0 0 0-.272.669 1.416 1.416 0 0 0 .073.465 1.197 1.197 0 0 0 .37.532 2.166 2.166 0 0 0 .275.192q.491.296 1.458.643a16.607 16.607 0 0 1 .559.212q.502.202.826.38a3.398 3.398 0 0 1 .182.107 2.795 2.795 0 0 1 .379.286q.204.184.339.393a1.726 1.726 0 0 1 .018.028 1.625 1.625 0 0 1 .226.64 2.1 2.1 0 0 1 .019.29 2.235 2.235 0 0 1-.114.732 1.831 1.831 0 0 1-.699.912 2.772 2.772 0 0 1-.798.38q-.36.11-.792.158a6.516 6.516 0 0 1-.717.037 8.453 8.453 0 0 1-.977-.053q-.489-.057-.895-.175a3.601 3.601 0 0 1-.662-.263zm-53.43-.886h-.051l.022.615a19.406 19.406 0 0 1 .022.568 25.103 25.103 0 0 1 .007.619v3.032h-.725V2.915h.615l.139 1.136h.044a2.687 2.687 0 0 1 1.918-1.234 4.275 4.275 0 0 1 .704-.056q1.612 0 2.457 1.059a3.443 3.443 0 0 1 .575 1.099q.271.836.271 1.981a6.96 6.96 0 0 1-.094 1.186q-.196 1.129-.795 1.857-.89 1.08-2.428 1.08a3.849 3.849 0 0 1-1.076-.141 2.712 2.712 0 0 1-1.605-1.236zm42.722 1.231h-.535l-.183-1.26h-.058a5.176 5.176 0 0 1-.455.513q-.251.246-.509.417a2.622 2.622 0 0 1-.27.158q-.634.318-1.498.318a3.677 3.677 0 0 1-.729-.068q-.434-.087-.77-.289a1.996 1.996 0 0 1-.325-.243 1.971 1.971 0 0 1-.6-1.102 2.905 2.905 0 0 1-.052-.561 2.22 2.22 0 0 1 .17-.883q.212-.495.689-.848a2.691 2.691 0 0 1 .112-.078q.689-.458 1.817-.609a8.81 8.81 0 0 1 .991-.072l1.517-.044v-.528a4.481 4.481 0 0 0-.041-.625q-.045-.319-.141-.578a1.814 1.814 0 0 0-.28-.51 1.429 1.429 0 0 0-.685-.464q-.243-.081-.54-.105a3.26 3.26 0 0 0-.262-.01q-1.106 0-2.292.615l-.271-.63a6.624 6.624 0 0 1 1.465-.497 5.524 5.524 0 0 1 1.128-.118q.883 0 1.466.31a1.915 1.915 0 0 1 .493.371 2.075 2.075 0 0 1 .44.734q.117.322.168.722a5.271 5.271 0 0 1 .04.668v5.296zM26.814 6.409v.586h-5.735a5.819 5.819 0 0 0 .081.949q.09.511.277.918a2.668 2.668 0 0 0 .408.638 2.433 2.433 0 0 0 1.357.784 3.699 3.699 0 0 0 .792.08q.681 0 1.198-.095a4.328 4.328 0 0 0 .349-.081q.414-.113.958-.329v.659q-.62.27-1.154.381a4.21 4.21 0 0 1-.091.018 6.181 6.181 0 0 1-.68.086 7.981 7.981 0 0 1-.58.02 4.528 4.528 0 0 1-1.126-.132 3.132 3.132 0 0 1-1.58-.937q-.86-.947-.958-2.567a7.088 7.088 0 0 1-.012-.429 6.286 6.286 0 0 1 .121-1.271q.162-.784.54-1.393a3.661 3.661 0 0 1 .276-.386 3.039 3.039 0 0 1 2.229-1.136 4.162 4.162 0 0 1 .298-.011 3.237 3.237 0 0 1 1.003.149 2.592 2.592 0 0 1 1.216.833 3.341 3.341 0 0 1 .64 1.262q.173.627.173 1.404zm-17.392.725a8.267 8.267 0 0 0 .151-1.626 9.732 9.732 0 0 0-.011-.461q-.042-.887-.249-1.634a4.969 4.969 0 0 0-1.007-1.937A4.047 4.047 0 0 0 6.312.199 5.463 5.463 0 0 0 4.798 0a6.022 6.022 0 0 0-.802.052 4.219 4.219 0 0 0-2.71 1.417 4.566 4.566 0 0 0-.474.648q-.461.763-.66 1.748A8.211 8.211 0 0 0 0 5.493a9.785 9.785 0 0 0 .009.421Q.107 8.181 1.275 9.54a4.07 4.07 0 0 0 1.975 1.277 5.403 5.403 0 0 0 1.533.206 6.013 6.013 0 0 0 .822-.054A4.174 4.174 0 0 0 8.299 9.54a4.649 4.649 0 0 0 .469-.653q.457-.768.654-1.753zM.813 5.508a8.303 8.303 0 0 0 .105 1.366q.224 1.336.921 2.19a3.328 3.328 0 0 0 2.067 1.182 4.985 4.985 0 0 0 .877.074q1.933 0 2.955-1.245a4.071 4.071 0 0 0 .716-1.349q.191-.593.263-1.311a9.148 9.148 0 0 0 .043-.907q0-1.562-.466-2.632a3.81 3.81 0 0 0-.556-.917A3.311 3.311 0 0 0 5.754.812a4.992 4.992 0 0 0-.956-.087 4.685 4.685 0 0 0-1.236.154A3.304 3.304 0 0 0 1.85 1.97Q1.005 2.986.849 4.697a8.938 8.938 0 0 0-.036.811zM12.576 6.68v.234q0 1.868.626 2.666.538.686 1.655.783a4.449 4.449 0 0 0 .385.016 2.628 2.628 0 0 0 .839-.128 2.13 2.13 0 0 0 1.054-.781 3.097 3.097 0 0 0 .464-.952q.206-.683.206-1.589 0-3.437-2.432-3.507a3.552 3.552 0 0 0-.102-.001 4.004 4.004 0 0 0-.761.067q-.431.084-.762.271a1.915 1.915 0 0 0-.52.427 2.262 2.262 0 0 0-.391.692q-.235.638-.259 1.588a8.694 8.694 0 0 0-.002.214zm8.547-.33h4.922a5.153 5.153 0 0 0-.065-.843q-.074-.448-.234-.81a2.477 2.477 0 0 0-.301-.511 1.934 1.934 0 0 0-1.405-.768 2.673 2.673 0 0 0-.258-.012 2.825 2.825 0 0 0-.844.12 2.245 2.245 0 0 0-1.002.638 2.764 2.764 0 0 0-.535.883q-.217.561-.278 1.303zM54.58 7.61v-.784l-1.391.059a10.947 10.947 0 0 0-.823.068q-.793.099-1.286.31a2.118 2.118 0 0 0-.283.146 1.441 1.441 0 0 0-.689 1.046 2.134 2.134 0 0 0-.025.334 1.962 1.962 0 0 0 .054.475 1.337 1.337 0 0 0 .404.686 1.501 1.501 0 0 0 .588.322q.228.067.501.086a3.096 3.096 0 0 0 .204.006q1.274 0 2.01-.729a2.397 2.397 0 0 0 .641-1.166q.095-.393.095-.859z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    m.defaultProps = {
        width: "71.661",
        height: "14.48",
        viewBox: "0 0 71.661 14.48"
    };
    var f = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Open Sans Condensed"), Object(o.createElement)("path", {
            d: "M24.749 11.396h-.689V5.918a4.989 4.989 0 0 0-.041-.672q-.101-.74-.45-1.06a.967.967 0 0 0-.681-.246 1.686 1.686 0 0 0-.555.087q-.48.166-.752.653a2.516 2.516 0 0 0-.218.548q-.152.541-.186 1.33a11.057 11.057 0 0 0-.01.473v4.365h-.696V3.45h.586l.059 1.106h.066a2.323 2.323 0 0 1 .304-.533 1.904 1.904 0 0 1 .413-.398 1.807 1.807 0 0 1 .576-.274 1.654 1.654 0 0 1 .428-.055 2.181 2.181 0 0 1 .556.067 1.467 1.467 0 0 1 .828.552 1.882 1.882 0 0 1 .263.514q.171.497.195 1.235a7.548 7.548 0 0 1 .004.239v5.493zm20.859 0h-.688V5.918a4.989 4.989 0 0 0-.042-.672q-.101-.74-.45-1.06a.967.967 0 0 0-.68-.246 1.686 1.686 0 0 0-.555.087q-.48.166-.753.653a2.516 2.516 0 0 0-.218.548q-.152.541-.186 1.33a11.057 11.057 0 0 0-.01.473v4.365h-.695V3.45h.586l.058 1.106h.066a2.323 2.323 0 0 1 .304-.533 1.904 1.904 0 0 1 .414-.398 1.807 1.807 0 0 1 .576-.274 1.654 1.654 0 0 1 .427-.055 2.181 2.181 0 0 1 .556.067 1.467 1.467 0 0 1 .829.552 1.882 1.882 0 0 1 .262.514q.172.497.195 1.235a7.548 7.548 0 0 1 .004.239v5.493zm26.44 0h-.688V5.918a4.989 4.989 0 0 0-.041-.672q-.101-.74-.451-1.06a.967.967 0 0 0-.68-.246 1.686 1.686 0 0 0-.555.087q-.48.166-.752.653a2.516 2.516 0 0 0-.219.548q-.152.541-.185 1.33a11.057 11.057 0 0 0-.01.473v4.365h-.696V3.45h.586l.059 1.106h.066a2.323 2.323 0 0 1 .303-.533 1.904 1.904 0 0 1 .414-.398 1.807 1.807 0 0 1 .576-.274 1.654 1.654 0 0 1 .428-.055 2.181 2.181 0 0 1 .556.067 1.467 1.467 0 0 1 .828.552 1.882 1.882 0 0 1 .263.514q.171.497.195 1.235a7.548 7.548 0 0 1 .003.239v5.493zm18.794 0h-.688V5.918a4.989 4.989 0 0 0-.041-.672q-.101-.74-.451-1.06a.967.967 0 0 0-.68-.246 1.686 1.686 0 0 0-.555.087q-.48.166-.752.653a2.516 2.516 0 0 0-.219.548q-.152.541-.185 1.33a11.057 11.057 0 0 0-.01.473v4.365h-.696V3.45h.586l.059 1.106h.065a2.323 2.323 0 0 1 .304-.533 1.904 1.904 0 0 1 .414-.398 1.807 1.807 0 0 1 .576-.274 1.654 1.654 0 0 1 .428-.055 2.181 2.181 0 0 1 .556.067 1.467 1.467 0 0 1 .828.552 1.882 1.882 0 0 1 .263.514q.171.497.195 1.235a7.548 7.548 0 0 1 .003.239v5.493zm-61.611-.227v-.776a2.765 2.765 0 0 0 .383.175q.19.07.411.126a5.029 5.029 0 0 0 .151.036 5.153 5.153 0 0 0 1.113.124 1.755 1.755 0 0 0 .763-.163 1.749 1.749 0 0 0 .585-.459 2.192 2.192 0 0 0 .485-1.066 3.03 3.03 0 0 0 .042-.516 3.408 3.408 0 0 0-.043-.563q-.05-.298-.157-.539a1.699 1.699 0 0 0-.173-.304 2.002 2.002 0 0 0-.3-.325q-.339-.301-.904-.601a8.416 8.416 0 0 0-.225-.114 8.516 8.516 0 0 1-.476-.259q-.462-.271-.74-.531a2.433 2.433 0 0 1-.021-.02 2.454 2.454 0 0 1-.608-.912 2.839 2.839 0 0 1-.142-.532q-.045-.261-.054-.559a5.079 5.079 0 0 1-.002-.154q0-.791.322-1.406.322-.615.901-.956a2.453 2.453 0 0 1 1.267-.34 4.83 4.83 0 0 1 .63.039 3.764 3.764 0 0 1 .502.1q.333.091.574.192a2.371 2.371 0 0 1 .228.108l-.279.689a3.755 3.755 0 0 0-1.076-.368 3.381 3.381 0 0 0-.579-.05 1.893 1.893 0 0 0-.614.096 1.602 1.602 0 0 0-.671.442 1.83 1.83 0 0 0-.441.881 2.644 2.644 0 0 0-.054.544 3.664 3.664 0 0 0 .035.524q.04.274.125.499a1.623 1.623 0 0 0 .199.376 1.946 1.946 0 0 0 .283.307q.395.354 1.124.726a5.723 5.723 0 0 1 .703.402q.351.237.608.503a2.837 2.837 0 0 1 .274.329 2.689 2.689 0 0 1 .458 1.144 3.587 3.587 0 0 1 .044.573 3.868 3.868 0 0 1-.107.936 2.765 2.765 0 0 1-.626 1.199 2.371 2.371 0 0 1-1.72.814 3.017 3.017 0 0 1-.14.003q-.898 0-1.548-.184a3.144 3.144 0 0 1-.51-.19zm30.652-.615v.659q-.461.266-1.155.318a4.693 4.693 0 0 1-.347.012 2.649 2.649 0 0 1-1.783-.659 3.458 3.458 0 0 1-.678-.807q-.236-.38-.416-.854a6.37 6.37 0 0 1-.089-.247q-.376-1.125-.413-2.626a13.513 13.513 0 0 1-.004-.337 11.768 11.768 0 0 1 .089-1.495q.196-1.526.823-2.533a3.501 3.501 0 0 1 .696-.827 2.673 2.673 0 0 1 1.79-.638q.982 0 1.714.454l-.33.63a2.503 2.503 0 0 0-1.277-.393 3.03 3.03 0 0 0-.122-.003q-1.208 0-1.922 1.279-.505.903-.653 2.299a11.811 11.811 0 0 0-.061 1.242 11.095 11.095 0 0 0 .062 1.21q.066.599.201 1.118a6.343 6.343 0 0 0 .066.235q.266.878.716 1.429a2.711 2.711 0 0 0 .229.249 2.008 2.008 0 0 0 1.428.585 3.89 3.89 0 0 0 .68-.056q.399-.071.729-.231a2.421 2.421 0 0 0 .027-.013zM8.76 10.298h-.066l.051.871V15h-.696V3.45h.572l.073 1.091h.066q.293-.601.751-.923.457-.322.999-.322a1.919 1.919 0 0 1 1.835 1.194q.427.881.485 2.413a13.174 13.174 0 0 1 .009.502 11.103 11.103 0 0 1-.054 1.138q-.12 1.159-.504 1.898a3.215 3.215 0 0 1-.013.025 2.391 2.391 0 0 1-.408.568 1.696 1.696 0 0 1-1.254.509 1.917 1.917 0 0 1-1.095-.333 2.085 2.085 0 0 1-.731-.867 2.497 2.497 0 0 1-.02-.045zm69.075-5.845h.058l-.029-.886V0h.696v11.396h-.572l-.058-1.113h-.066a2.779 2.779 0 0 1-.294.493 2.073 2.073 0 0 1-.446.441 1.738 1.738 0 0 1-1.04.326 1.907 1.907 0 0 1-1.823-1.194q-.424-.881-.482-2.413a13.257 13.257 0 0 1-.009-.502q0-1.915.519-2.966a3.116 3.116 0 0 1 .059-.114 2.291 2.291 0 0 1 .445-.586q.508-.472 1.262-.472a1.833 1.833 0 0 1 .954.27 2.208 2.208 0 0 1 .06.038 2.181 2.181 0 0 1 .71.75 2.603 2.603 0 0 1 .056.099zm29.399 0h.059l-.03-.886V0h.696v11.396h-.571l-.059-1.113h-.066a2.779 2.779 0 0 1-.293.493 2.073 2.073 0 0 1-.446.441 1.738 1.738 0 0 1-1.041.326 1.907 1.907 0 0 1-1.822-1.194q-.425-.881-.483-2.413a13.257 13.257 0 0 1-.009-.502q0-1.915.519-2.966a3.116 3.116 0 0 1 .06-.114 2.291 2.291 0 0 1 .444-.586q.509-.472 1.262-.472a1.833 1.833 0 0 1 .954.27 2.208 2.208 0 0 1 .061.038 2.181 2.181 0 0 1 .71.75 2.603 2.603 0 0 1 .055.099zm-60.051 6.643v-.813a1.679 1.679 0 0 0 .337.258q.16.094.354.168a2.793 2.793 0 0 0 .026.01 2.626 2.626 0 0 0 .916.165q.615 0 .967-.403a1.374 1.374 0 0 0 .297-.589q.051-.209.054-.455a2.546 2.546 0 0 0 0-.033q0-.527-.252-.89a1.719 1.719 0 0 0-.191-.224q-.273-.275-.772-.6a14.51 14.51 0 0 1-.375-.243q-.355-.24-.571-.424a2.341 2.341 0 0 1-.164-.153q-.297-.307-.462-.688-.164-.381-.164-.909a2.078 2.078 0 0 1 .123-.727 1.845 1.845 0 0 1 .455-.69 1.97 1.97 0 0 1 1.226-.549 2.651 2.651 0 0 1 .246-.011 3.356 3.356 0 0 1 .728.075 2.41 2.41 0 0 1 .876.379l-.358.608q-.601-.403-1.275-.403a1.689 1.689 0 0 0-.426.051 1.205 1.205 0 0 0-.555.312 1.216 1.216 0 0 0-.349.707 1.701 1.701 0 0 0-.017.248q0 .528.249.883t1.054.861q.791.52 1.084.831.293.311.436.688a2.145 2.145 0 0 1 .115.457 2.903 2.903 0 0 1 .028.411 3.074 3.074 0 0 1-.062.639q-.119.56-.466.932a1.697 1.697 0 0 1-.816.481q-.318.087-.707.087a3.583 3.583 0 0 1-.464-.029q-.245-.032-.456-.1a2.176 2.176 0 0 1-.032-.01 3.613 3.613 0 0 1-.239-.09q-.121-.051-.221-.105a1.525 1.525 0 0 1-.177-.113zm45.234 0v-.813a1.679 1.679 0 0 0 .338.258q.16.094.354.168a2.793 2.793 0 0 0 .026.01 2.626 2.626 0 0 0 .915.165q.616 0 .967-.403a1.374 1.374 0 0 0 .298-.589q.05-.209.054-.455a2.546 2.546 0 0 0 0-.033q0-.527-.253-.89a1.719 1.719 0 0 0-.19-.224q-.274-.275-.773-.6a14.51 14.51 0 0 1-.374-.243q-.355-.24-.571-.424a2.341 2.341 0 0 1-.165-.153q-.296-.307-.461-.688-.165-.381-.165-.909a2.078 2.078 0 0 1 .123-.727 1.845 1.845 0 0 1 .456-.69 1.97 1.97 0 0 1 1.225-.549 2.651 2.651 0 0 1 .247-.011 3.356 3.356 0 0 1 .727.075 2.41 2.41 0 0 1 .877.379l-.359.608q-.601-.403-1.274-.403a1.689 1.689 0 0 0-.426.051 1.205 1.205 0 0 0-.556.312 1.216 1.216 0 0 0-.349.707 1.701 1.701 0 0 0-.017.248q0 .528.249.883t1.055.861q.791.52 1.084.831.293.311.435.688a2.145 2.145 0 0 1 .115.457 2.903 2.903 0 0 1 .028.411 3.074 3.074 0 0 1-.062.639q-.119.56-.465.932a1.697 1.697 0 0 1-.817.481q-.317.087-.707.087a3.583 3.583 0 0 1-.464-.029q-.245-.032-.456-.1a2.176 2.176 0 0 1-.032-.01 3.613 3.613 0 0 1-.238-.09q-.122-.051-.221-.105a1.525 1.525 0 0 1-.178-.113zm-53.181.3h-.571l-.088-1.113h-.03a2.786 2.786 0 0 1-.364.606 1.675 1.675 0 0 1-1.364.654q-.776 0-1.249-.619a2.162 2.162 0 0 1-.361-.75q-.084-.304-.104-.663a4.256 4.256 0 0 1-.007-.246 3.054 3.054 0 0 1 .092-.77 2.164 2.164 0 0 1 .589-1.028q.626-.609 1.717-.708a4.581 4.581 0 0 1 .195-.013l.856-.044v-.66q0-.929-.194-1.437a1.498 1.498 0 0 0-.084-.185.921.921 0 0 0-.658-.485 1.366 1.366 0 0 0-.265-.024q-.681 0-1.391.447l-.301-.549q.828-.513 1.736-.513a2.441 2.441 0 0 1 .535.054q.337.076.581.257a1.322 1.322 0 0 1 .298.308q.371.532.423 1.678a8.609 8.609 0 0 1 .009.391v5.412zM6.101 7.534a14.328 14.328 0 0 0 .073-1.506 17.511 17.511 0 0 0 0-.106q-.01-1.625-.323-2.781a5.301 5.301 0 0 0-.464-1.182 3.667 3.667 0 0 0-.204-.328q-.35-.501-.814-.773A2.45 2.45 0 0 0 3.106.535q-.974 0-1.642.532a2.84 2.84 0 0 0-.688.823 3.871 3.871 0 0 0-.156.305q-.425.921-.559 2.373A15.819 15.819 0 0 0 0 6.013a17.7 17.7 0 0 0 0 .106q.016 2.574.784 3.985a3.607 3.607 0 0 0 .229.369q.763 1.07 2.071 1.07 1.501 0 2.296-1.428a4.16 4.16 0 0 0 .018-.034q.537-.986.703-2.547zm12.605-.759v.644h-3.765a10.348 10.348 0 0 0 .045.908q.089.912.35 1.498a2.582 2.582 0 0 0 .096.195q.476.864 1.443.864a2.591 2.591 0 0 0 .804-.135q.376-.122.771-.356v.674a3.094 3.094 0 0 1-1.035.42 2.884 2.884 0 0 1-.569.056q-1.166 0-1.833-.919a2.872 2.872 0 0 1-.104-.154q-.501-.793-.632-2.049a9.134 9.134 0 0 1-.046-.943 11.06 11.06 0 0 1 .053-1.124q.118-1.144.493-1.877a3.138 3.138 0 0 1 .058-.108 2.396 2.396 0 0 1 .454-.589 1.822 1.822 0 0 1 1.286-.484 1.671 1.671 0 0 1 1.321.609 2.468 2.468 0 0 1 .239.332 3.523 3.523 0 0 1 .38.911q.118.434.163.952a7.783 7.783 0 0 1 .028.675zm66.094 0v.644h-3.765a10.348 10.348 0 0 0 .045.908q.088.912.35 1.498a2.582 2.582 0 0 0 .096.195q.476.864 1.443.864a2.591 2.591 0 0 0 .804-.135q.376-.122.771-.356v.674a3.094 3.094 0 0 1-1.035.42 2.884 2.884 0 0 1-.569.056q-1.166 0-1.834-.919a2.872 2.872 0 0 1-.104-.154q-.501-.793-.631-2.049a9.134 9.134 0 0 1-.046-.943 11.06 11.06 0 0 1 .053-1.124q.117-1.144.493-1.877a3.138 3.138 0 0 1 .058-.108 2.396 2.396 0 0 1 .454-.589 1.822 1.822 0 0 1 1.286-.484 1.671 1.671 0 0 1 1.321.609 2.468 2.468 0 0 1 .239.332 3.523 3.523 0 0 1 .38.911q.118.434.163.952a7.783 7.783 0 0 1 .028.675zm16.977 0v.644h-3.764a10.348 10.348 0 0 0 .045.908q.088.912.349 1.498a2.582 2.582 0 0 0 .097.195q.476.864 1.442.864a2.591 2.591 0 0 0 .805-.135q.376-.122.77-.356v.674a3.094 3.094 0 0 1-1.034.42 2.884 2.884 0 0 1-.57.056q-1.166 0-1.833-.919a2.872 2.872 0 0 1-.104-.154q-.501-.793-.632-2.049a9.134 9.134 0 0 1-.046-.943 11.06 11.06 0 0 1 .054-1.124q.117-1.144.492-1.877a3.138 3.138 0 0 1 .059-.108 2.396 2.396 0 0 1 .453-.589 1.822 1.822 0 0 1 1.286-.484 1.671 1.671 0 0 1 1.321.609 2.468 2.468 0 0 1 .239.332 3.523 3.523 0 0 1 .38.911q.118.434.163.952a7.783 7.783 0 0 1 .028.675zM.747 6.028q0 2.388.597 3.607a2.782 2.782 0 0 0 .379.59 1.715 1.715 0 0 0 1.361.629 1.741 1.741 0 0 0 1.422-.69 2.828 2.828 0 0 0 .324-.518q.597-1.208.597-3.618a15.624 15.624 0 0 0-.046-1.247q-.1-1.249-.418-2.065a3.863 3.863 0 0 0-.122-.281 2.698 2.698 0 0 0-.385-.599 1.711 1.711 0 0 0-1.35-.613 1.756 1.756 0 0 0-1.438.69 2.783 2.783 0 0 0-.331.537 4.821 4.821 0 0 0-.324.926q-.228.921-.261 2.218a17.511 17.511 0 0 0-.005.434zM65.962 8.54a10.214 10.214 0 0 0 .059-1.135 9.845 9.845 0 0 0-.054-1.058q-.131-1.209-.584-1.974a2.725 2.725 0 0 0-.279-.393 1.894 1.894 0 0 0-1.5-.684q-1.976 0-2.347 2.712a10.38 10.38 0 0 0-.085 1.397 12.835 12.835 0 0 0 0 .08q.008 1.234.254 2.105a3.84 3.84 0 0 0 .365.887 2.747 2.747 0 0 0 .159.245q.299.408.703.613a2.002 2.002 0 0 0 .921.208 2.565 2.565 0 0 0 .06-.001q1.136-.026 1.753-1.065a2.986 2.986 0 0 0 .007-.012q.435-.739.568-1.925zm11.902-.652v-.454a11.874 11.874 0 0 0-.033-.913q-.086-1.118-.403-1.727a1.751 1.751 0 0 0-.335-.46q-.394-.379-.994-.379a1.253 1.253 0 0 0-.622.151q-.388.217-.609.746-.373.898-.373 2.597a12.265 12.265 0 0 0 .03.898q.067.897.275 1.49a3.028 3.028 0 0 0 .083.212 1.829 1.829 0 0 0 .263.438 1.214 1.214 0 0 0 .982.448 1.418 1.418 0 0 0 .698-.17q.348-.192.587-.603.432-.74.45-2.15a9.709 9.709 0 0 0 .001-.124zm29.399 0v-.454a11.874 11.874 0 0 0-.032-.913q-.087-1.118-.404-1.727a1.751 1.751 0 0 0-.335-.46q-.394-.379-.994-.379a1.253 1.253 0 0 0-.621.151q-.389.217-.609.746-.374.898-.374 2.597a12.265 12.265 0 0 0 .031.898q.066.897.274 1.49a3.028 3.028 0 0 0 .083.212 1.829 1.829 0 0 0 .264.438 1.214 1.214 0 0 0 .981.448 1.418 1.418 0 0 0 .699-.17q.348-.192.587-.603.431-.74.449-2.15a9.709 9.709 0 0 0 .001-.124zM8.745 7.134v.227q0 1.831.432 2.691.43.856 1.309.861a1.82 1.82 0 0 0 .01 0 1.204 1.204 0 0 0 .989-.475 1.896 1.896 0 0 0 .23-.378 3.25 3.25 0 0 0 .206-.608q.15-.618.184-1.512a14.359 14.359 0 0 0 .009-.535q0-1.515-.289-2.366a2.934 2.934 0 0 0-.084-.22q-.349-.806-1.156-.86a1.772 1.772 0 0 0-.119-.004 1.546 1.546 0 0 0-.59.108q-.372.152-.619.518a1.879 1.879 0 0 0-.087.143 2.65 2.65 0 0 0-.224.566q-.201.716-.201 1.844zm53.474 2.661a2.869 2.869 0 0 0 .088.21 1.837 1.837 0 0 0 .284.444 1.27 1.27 0 0 0 .998.435 1.35 1.35 0 0 0 1.253-.816q.453-.869.453-2.663 0-2.043-.598-2.876a1.296 1.296 0 0 0-1.108-.574q-.894 0-1.293.864-.36.781-.395 2.261a13.797 13.797 0 0 0-.004.325q0 1.526.322 2.39zM38.547 8.13v-.828l-.827.044a3.242 3.242 0 0 0-.545.073q-.288.065-.513.185a1.469 1.469 0 0 0-.367.273q-.394.407-.454 1.134a3.285 3.285 0 0 0-.011.269q0 .864.308 1.267a.978.978 0 0 0 .706.396 1.281 1.281 0 0 0 .129.007 1.208 1.208 0 0 0 .964-.45 1.832 1.832 0 0 0 .197-.286 2.736 2.736 0 0 0 .248-.623q.164-.604.165-1.448a8.848 8.848 0 0 0 0-.013zM14.956 6.79h3.054q0-1.311-.399-2.088a1.943 1.943 0 0 0-.239-.366q-.181-.215-.403-.317a1.034 1.034 0 0 0-.438-.093q-1.436 0-1.575 2.864zm66.094 0h3.054q0-1.311-.399-2.088a1.943 1.943 0 0 0-.239-.366q-.182-.215-.404-.317a1.034 1.034 0 0 0-.437-.093q-1.436 0-1.575 2.864zm16.977 0h3.055q0-1.311-.4-2.088a1.943 1.943 0 0 0-.239-.366q-.181-.215-.403-.317a1.034 1.034 0 0 0-.438-.093q-1.435 0-1.575 2.864z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    f.defaultProps = {
        width: "107.959",
        height: "15",
        viewBox: "0 0 107.959 15"
    };
    var b = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Oswald"), Object(o.createElement)("path", {
            d: "M14.13 12.285l-1.425-8.67h.705l1.2 7.755 1.485-7.755h.78l1.515 7.725 1.125-7.725h.705l-1.395 8.67H18L16.5 4.68l-1.47 7.605h-.9zm-6.75-2.34l.675-.195a4.787 4.787 0 0 0 .07.555q.117.617.394.974a1.398 1.398 0 0 0 .031.039 1.372 1.372 0 0 0 .9.484 1.987 1.987 0 0 0 .27.018 1.9 1.9 0 0 0 .41-.041q.267-.059.465-.202a1.105 1.105 0 0 0 .145-.124q.331-.339.358-.937a2.397 2.397 0 0 0 .002-.106q0-.865-1.069-1.844a7.142 7.142 0 0 0-.206-.181L8.82 7.53a6.799 6.799 0 0 1-.41-.383q-.35-.357-.542-.682-.293-.495-.293-1.14a2.285 2.285 0 0 1 .066-.564 1.576 1.576 0 0 1 .467-.793 1.794 1.794 0 0 1 .809-.419q.286-.069.623-.069a2.371 2.371 0 0 1 .584.068 1.582 1.582 0 0 1 .856.532q.417.505.504 1.339a4.296 4.296 0 0 1 .021.326l-.585.18a3.964 3.964 0 0 0-.072-.662q-.239-1.17-1.24-1.183a1.74 1.74 0 0 0-.023 0q-.497 0-.82.216a1.088 1.088 0 0 0-.11.084.973.973 0 0 0-.315.548 1.469 1.469 0 0 0-.03.307q0 .486.181.835a1.375 1.375 0 0 0 .007.013q.187.352.697.802l1.035.915a18.808 18.808 0 0 1 .335.304q.148.137.272.26a7.845 7.845 0 0 1 .226.231 2.938 2.938 0 0 1 .391.534 3.541 3.541 0 0 1 .134.254 2.233 2.233 0 0 1 .194.672 2.84 2.84 0 0 1 .023.37 2.446 2.446 0 0 1-.074.617 1.725 1.725 0 0 1-.496.846q-.557.52-1.499.532a3.52 3.52 0 0 1-.046 0q-1.02 0-1.62-.66a2.475 2.475 0 0 1-.504-.87q-.145-.422-.186-.945zM24.81 7.11v-.615a12.856 12.856 0 0 0-.01-.537q-.021-.488-.081-.826a3.231 3.231 0 0 0-.021-.107 2.175 2.175 0 0 0-.076-.27q-.111-.314-.299-.465-.263-.21-.713-.21a1.785 1.785 0 0 0-.443.052 1.291 1.291 0 0 0-.554.293.934.934 0 0 0-.226.326q-.129.296-.152.759a4.189 4.189 0 0 0-.005.205v.225h-.78q0-1.26.51-1.86.403-.474 1.219-.574a3.82 3.82 0 0 1 .461-.026 2.676 2.676 0 0 1 .557.054q.648.138.966.629a2.12 2.12 0 0 1 .233.512q.209.658.209 1.73v4.365a17.208 17.208 0 0 0 .001.172q.002.193.008.447a59.617 59.617 0 0 0 .006.244 39.045 39.045 0 0 0 .006.189q.011.336.021.441a.597.597 0 0 0 .003.022h-.69a4.228 4.228 0 0 0-.017-.206q-.01-.092-.025-.194a8.484 8.484 0 0 0-.033-.215l-.06-.54q-.195.555-.69.923-.495.367-1.125.367a1.88 1.88 0 0 1-.594-.09 1.551 1.551 0 0 1-.666-.435 1.8 1.8 0 0 1-.442-.917 2.53 2.53 0 0 1-.038-.448q0-.589.16-1.013a1.812 1.812 0 0 1 .11-.239 1.918 1.918 0 0 1 .267-.364q.147-.16.344-.318a4.737 4.737 0 0 1 .387-.278 9.739 9.739 0 0 1 .473-.287q.527-.301 1.302-.681a45.09 45.09 0 0 1 .497-.24zm5.055 1.62V7.185a16.073 16.073 0 0 1 .017-.759q.037-.782.156-1.333.172-.803.607-1.208a1.432 1.432 0 0 1 .599-.327q.221-.063.485-.075a2.84 2.84 0 0 1 .131-.003 1.974 1.974 0 0 1 .524.067 1.674 1.674 0 0 1 .384.158q.397.225.667.57V.135h.795v12.15h-.795v-.66a2.66 2.66 0 0 1-.479.449 1.774 1.774 0 0 1-1.051.346q-.75 0-1.192-.375a1.643 1.643 0 0 1-.352-.426q-.114-.195-.2-.44a3.557 3.557 0 0 1-.093-.311 5.424 5.424 0 0 1-.107-.554q-.096-.666-.096-1.584zM0 8.835v-5.31q0-1.12.304-1.904A2.973 2.973 0 0 1 .683.923q.574-.777 1.823-.9A5.047 5.047 0 0 1 3 0a4.438 4.438 0 0 1 .838.074q.473.091.833.295A2.03 2.03 0 0 1 5.31.93Q6 1.86 6 3.525V8.85a7.095 7.095 0 0 1-.065.994q-.144 1.011-.602 1.661-.668.945-2.333.945-1.003 0-1.644-.346a1.966 1.966 0 0 1-.688-.606Q0 10.545 0 8.835zm5.175.18v-5.61a6.18 6.18 0 0 0-.042-.743q-.098-.812-.43-1.297A1.441 1.441 0 0 0 4 .832Q3.745.735 3.424.698A3.703 3.703 0 0 0 3 .675q-.715 0-1.174.233a1.39 1.39 0 0 0-.528.457q-.473.69-.473 2.04v5.61a6.317 6.317 0 0 0 .042.752q.098.82.431 1.311a1.448 1.448 0 0 0 .715.544q.257.096.578.132a3.687 3.687 0 0 0 .409.021q1.23 0 1.703-.705a2.39 2.39 0 0 0 .292-.634q.095-.31.14-.688a6.237 6.237 0 0 0 .04-.733zm22.215 3.27V.135h.795v12.15h-.795zm6.045-1.215V4.845a3.665 3.665 0 0 0-.417-.362q-.235-.173-.463-.269a1.442 1.442 0 0 0-.56-.119 1.683 1.683 0 0 0-.32.029q-.324.063-.52.264a1.15 1.15 0 0 0-.202.29q-.07.142-.121.319a2.802 2.802 0 0 0-.067.298 5.865 5.865 0 0 0-.055.43q-.05.523-.05 1.265v1.8q0 1.045.103 1.68a4.764 4.764 0 0 0 .01.06q.112.645.405.96a.948.948 0 0 0 .476.274q.152.039.332.041a1.824 1.824 0 0 0 .024 0q.405 0 .773-.21.367-.21.652-.525zm-8.625-.525v-2.85a65.824 65.824 0 0 0-.583.309q-.72.386-1.102.62a7.358 7.358 0 0 0-.085.054 3.031 3.031 0 0 0-.343.25q-.254.216-.399.455a1.438 1.438 0 0 0-.157.377q-.076.282-.076.65 0 .72.33 1.035a1.126 1.126 0 0 0 .795.315 1.454 1.454 0 0 0 .015 0q.525 0 .938-.345a2.542 2.542 0 0 0 .592-.726 2.993 2.993 0 0 0 .075-.144z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    b.defaultProps = {
        width: "34.23",
        height: "12.45",
        viewBox: "0 0 34.23 12.45"
    };
    var h = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Playfair Display"), Object(o.createElement)("path", {
            d: "M27.315 4.035v.3q-.3.03-.532.27-.211.217-.403.681a4.841 4.841 0 0 0-.04.099l-2.46 6.45-.51 1.305q-.285.735-.645 1.05a1.293 1.293 0 0 1-.501.288 1.509 1.509 0 0 1-.039.012q-.315.09-.63.09a1.379 1.379 0 0 1-.326-.037.986.986 0 0 1-.409-.203.786.786 0 0 1-.278-.533 1.123 1.123 0 0 1-.007-.127 1.003 1.003 0 0 1 .03-.25.721.721 0 0 1 .18-.328.689.689 0 0 1 .347-.191 1.041 1.041 0 0 1 .238-.026.956.956 0 0 1 .258.033.744.744 0 0 1 .29.154.614.614 0 0 1 .209.395.887.887 0 0 1 .008.123.784.784 0 0 1-.062.317q-.096.221-.343.358a.112.112 0 0 0 .022.008q.023.006.057.007a.445.445 0 0 0 .011 0 1.077 1.077 0 0 0 .817-.378q.156-.17.289-.418a3.331 3.331 0 0 0 .169-.374l.525-1.365-2.715-6.555a3.351 3.351 0 0 0-.139-.253q-.146-.237-.291-.362a.739.739 0 0 0-.08-.06q-.255-.165-.51-.165v-.315q.602.084 1.361.09a14.802 14.802 0 0 0 .109 0q.742 0 1.924-.088a50.673 50.673 0 0 0 .026-.002v.315q-.426 0-.671.056a.999.999 0 0 0-.116.034q-.248.09-.248.435a1.366 1.366 0 0 0 .029.272q.044.213.151.463l1.8 4.47 1.665-4.335a4.526 4.526 0 0 0 .072-.212q.069-.221.087-.378a.894.894 0 0 0 .006-.1.692.692 0 0 0-.031-.214.532.532 0 0 0-.239-.296q-.236-.145-.715-.197a4.34 4.34 0 0 0-.14-.013v-.3a41.07 41.07 0 0 0 .377.02q.534.025.883.025a16.533 16.533 0 0 0 .47-.006q.37-.011.67-.039zm77.235 0v.3q-.3.03-.532.27-.211.217-.403.681a4.841 4.841 0 0 0-.04.099l-2.46 6.45-.51 1.305q-.285.735-.645 1.05a1.293 1.293 0 0 1-.501.288 1.509 1.509 0 0 1-.039.012q-.315.09-.63.09a1.379 1.379 0 0 1-.326-.037.986.986 0 0 1-.409-.203.786.786 0 0 1-.278-.533 1.123 1.123 0 0 1-.007-.127 1.003 1.003 0 0 1 .03-.25.721.721 0 0 1 .18-.328.689.689 0 0 1 .347-.191 1.041 1.041 0 0 1 .238-.026.956.956 0 0 1 .258.033.744.744 0 0 1 .29.154.614.614 0 0 1 .209.395.887.887 0 0 1 .008.123.784.784 0 0 1-.062.317q-.096.221-.343.358a.112.112 0 0 0 .022.008q.023.006.057.007a.445.445 0 0 0 .011 0 1.077 1.077 0 0 0 .817-.378q.156-.17.289-.418a3.331 3.331 0 0 0 .169-.374l.525-1.365L98.1 5.19a3.351 3.351 0 0 0-.139-.253q-.146-.237-.291-.362a.739.739 0 0 0-.08-.06q-.255-.165-.51-.165v-.315q.602.084 1.361.09a14.802 14.802 0 0 0 .109 0q.742 0 1.924-.088a50.673 50.673 0 0 0 .026-.002v.315q-.426 0-.671.056a.999.999 0 0 0-.116.034q-.248.09-.248.435a1.366 1.366 0 0 0 .029.272q.044.213.151.463l1.8 4.47 1.665-4.335a4.526 4.526 0 0 0 .072-.212q.069-.221.087-.378a.894.894 0 0 0 .006-.1.692.692 0 0 0-.031-.214.532.532 0 0 0-.239-.296q-.236-.145-.715-.197a4.34 4.34 0 0 0-.14-.013v-.3a41.07 41.07 0 0 0 .377.02q.534.025.883.025a16.533 16.533 0 0 0 .47-.006q.37-.011.67-.039zM30.405 3.66v.39h1.605v.3h-1.605v5.865a1.867 1.867 0 0 0 .03.346q.079.418.368.614a1.304 1.304 0 0 0 .337.159q.324.104.791.111a4.541 4.541 0 0 0 .064 0v.315l-.36-.015a306.802 306.802 0 0 0-.535-.015q-1.074-.03-1.415-.03-.378 0-1.687.056a218.727 218.727 0 0 0-.083.004v-.315q.527 0 .792-.163a.62.62 0 0 0 .093-.07.642.642 0 0 0 .155-.228q.1-.235.1-.619V4.35h-1.2v-.3h1.2q0-1.189.134-1.891a4.128 4.128 0 0 1 .031-.149 3.032 3.032 0 0 1 .291-.781A2.642 2.642 0 0 1 29.82.78q.3-.345.765-.548A2.459 2.459 0 0 1 31.4.037a2.912 2.912 0 0 1 .205-.007 2.483 2.483 0 0 1 .613.072 1.876 1.876 0 0 1 .692.333q.465.375.465.93a.866.866 0 0 1-.045.286.742.742 0 0 1-.18.284.76.76 0 0 1-.512.223 1.013 1.013 0 0 1-.058.002.908.908 0 0 1-.319-.054.819.819 0 0 1-.266-.164.716.716 0 0 1-.229-.435 1.027 1.027 0 0 1-.011-.157.937.937 0 0 1 .025-.224.663.663 0 0 1 .147-.286.785.785 0 0 1 .354-.227 1.012 1.012 0 0 1 .104-.028q-.045-.15-.24-.24a.888.888 0 0 0-.187-.061q-.137-.029-.308-.029a1.239 1.239 0 0 0-.329.042 1.05 1.05 0 0 0-.256.108q-.255.15-.39.405a1.321 1.321 0 0 0-.096.228q-.086.264-.121.657a8.863 8.863 0 0 0-.023.342q-.027.526-.03 1.41a67.712 67.712 0 0 0 0 .213zm44.91.18h.345a12.088 12.088 0 0 0-.026.435q-.03.674-.034 1.835a102.175 102.175 0 0 0 0 .28h-.345a4.684 4.684 0 0 0-.194-.774q-.17-.488-.443-.861-.473-.645-1.403-.645a1.55 1.55 0 0 0-.406.051 1.167 1.167 0 0 0-.479.256 1.009 1.009 0 0 0-.326.608 1.462 1.462 0 0 0-.019.24 1.258 1.258 0 0 0 .09.482 1.175 1.175 0 0 0 .27.395q.36.353 1.155.848a2.664 2.664 0 0 1 .076.044q.127.076.329.211a18.97 18.97 0 0 1 .442.297q.196.136.363.26a8.315 8.315 0 0 1 .305.238q.42.345.683.795a1.929 1.929 0 0 1 .248.768 2.414 2.414 0 0 1 .014.267 2.109 2.109 0 0 1-.113.706 1.768 1.768 0 0 1-.63.839 2.759 2.759 0 0 1-1.237.51 3.706 3.706 0 0 1-.585.045 3.676 3.676 0 0 1-.592-.045 2.691 2.691 0 0 1-.593-.165q-.33-.165-.615-.405a.221.221 0 0 0-.051-.039.174.174 0 0 0-.084-.021.155.155 0 0 0-.095.034q-.048.036-.09.111a.623.623 0 0 0-.003.005q-.055.101-.093.256a2.145 2.145 0 0 0-.034.163l-.345.001a16.26 16.26 0 0 0 .026-.507q.03-.79.034-2.162a142.621 142.621 0 0 0 0-.331h.345a9.229 9.229 0 0 0 .122.774q.172.843.478 1.334.426.682 1.441.697a3.103 3.103 0 0 0 .044 0q.525 0 .93-.345a1.072 1.072 0 0 0 .322-.494q.058-.178.076-.395a2.398 2.398 0 0 0 .007-.191 1.42 1.42 0 0 0-.119-.586 1.376 1.376 0 0 0-.278-.404q-.398-.405-1.298-.975a31.244 31.244 0 0 1-.346-.222q-.374-.244-.636-.432a8.363 8.363 0 0 1-.15-.111q-.398-.3-.668-.735a1.79 1.79 0 0 1-.251-.72 2.3 2.3 0 0 1-.019-.3 2.253 2.253 0 0 1 .074-.596 1.572 1.572 0 0 1 .556-.844q.63-.495 1.59-.495a3.017 3.017 0 0 1 .502.04 2.291 2.291 0 0 1 .458.125 2.932 2.932 0 0 1 .314.144q.156.083.279.179a1.59 1.59 0 0 1 .082.067q.133.097.227.115a.22.22 0 0 0 .043.005q.27 0 .33-.66zm4.17 7.32v1.92a1.641 1.641 0 0 0 .025.3q.071.377.335.548a1.207 1.207 0 0 0 .303.136q.294.09.718.096a4.323 4.323 0 0 0 .059 0v.315l-.345-.015a226.276 226.276 0 0 0-.564-.018q-.923-.027-1.251-.027a8.821 8.821 0 0 0-.201.003q-.435.01-1.419.057v-.315q.455 0 .683-.136a.526.526 0 0 0 .09-.066.562.562 0 0 0 .132-.198q.073-.174.083-.443a2.341 2.341 0 0 0 .002-.087V5.67a2.959 2.959 0 0 0-.02-.356q-.051-.422-.235-.649-.255-.315-.885-.315v-.315q.465.045.93.045a7.018 7.018 0 0 0 .637-.027q.297-.027.552-.082a3.246 3.246 0 0 0 .371-.101v1.59a2.932 2.932 0 0 1 .431-.725 2.492 2.492 0 0 1 .529-.482 2.488 2.488 0 0 1 1.364-.427 3.023 3.023 0 0 1 .076-.001q.795 0 1.433.435.637.435.997 1.275.36.84.36 2.01a6.423 6.423 0 0 1-.207 1.648 5.825 5.825 0 0 1-.16.512 3.86 3.86 0 0 1-.647 1.146 3.549 3.549 0 0 1-.493.489 2.766 2.766 0 0 1-1.341.586 3.737 3.737 0 0 1-.587.044q-.57 0-1.035-.225a2.125 2.125 0 0 1-.39-.241 1.654 1.654 0 0 1-.33-.344zm-62.25-4.59v-.93q0-.733-.261-1.077a.776.776 0 0 0-.106-.116 1.216 1.216 0 0 0-.465-.249q-.248-.073-.563-.073a3.207 3.207 0 0 0-.528.04q-.641.108-.957.5.3.075.503.315a.851.851 0 0 1 .191.438 1.145 1.145 0 0 1 .011.162.943.943 0 0 1-.034.259.7.7 0 0 1-.206.333q-.24.218-.615.218a1.067 1.067 0 0 1-.248-.027q-.191-.045-.32-.168a.664.664 0 0 1-.062-.067.955.955 0 0 1-.204-.511 1.243 1.243 0 0 1-.006-.127 1.24 1.24 0 0 1 .028-.273.888.888 0 0 1 .145-.327q.172-.24.517-.48a2.5 2.5 0 0 1 .377-.218q.241-.114.538-.202.555-.165 1.215-.165a3.935 3.935 0 0 1 .672.054q.684.118 1.098.501.375.345.503.833a3.29 3.29 0 0 1 .072.371q.028.195.041.422a8.146 8.146 0 0 1 .014.489v4.17a2.127 2.127 0 0 0 .007.184q.016.182.066.296a.446.446 0 0 0 .032.06q.105.165.36.165.18 0 .338-.082a1.546 1.546 0 0 0 .142-.086q.094-.063.195-.147l.165.255a5.87 5.87 0 0 1-.233.171q-.236.163-.422.251a1.728 1.728 0 0 1-.012.006 1.277 1.277 0 0 1-.271.087q-.131.027-.284.036a2.53 2.53 0 0 1-.143.004 2.258 2.258 0 0 1-.352-.025q-.444-.071-.653-.335-.25-.316-.281-.83a2.462 2.462 0 0 1-.004-.145 3.566 3.566 0 0 1-.349.489q-.316.368-.686.554a2.78 2.78 0 0 1-.962.274 3.434 3.434 0 0 1-.358.018 3.007 3.007 0 0 1-.518-.042q-.281-.049-.503-.157a1.347 1.347 0 0 1-.382-.273 1.558 1.558 0 0 1-.386-.707q-.062-.24-.07-.524a2.986 2.986 0 0 1-.001-.082 2.032 2.032 0 0 1 .059-.504 1.5 1.5 0 0 1 .309-.606q.367-.435.87-.69a6.936 6.936 0 0 1 .383-.179q.201-.087.437-.177a16.483 16.483 0 0 1 .507-.184q.84-.285 1.245-.525a.992.992 0 0 0 .214-.166.669.669 0 0 0 .191-.479zm20.01 0v-.93q0-.733-.261-1.077a.776.776 0 0 0-.106-.116 1.216 1.216 0 0 0-.465-.249q-.248-.073-.563-.073a3.207 3.207 0 0 0-.528.04q-.641.108-.957.5.3.075.503.315a.851.851 0 0 1 .191.438 1.145 1.145 0 0 1 .011.162.943.943 0 0 1-.034.259.7.7 0 0 1-.206.333q-.24.218-.615.218a1.067 1.067 0 0 1-.248-.027q-.191-.045-.32-.168a.664.664 0 0 1-.062-.067.955.955 0 0 1-.204-.511 1.243 1.243 0 0 1-.006-.127 1.24 1.24 0 0 1 .028-.273.888.888 0 0 1 .145-.327q.172-.24.517-.48a2.5 2.5 0 0 1 .377-.218q.241-.114.538-.202.555-.165 1.215-.165a3.935 3.935 0 0 1 .672.054q.684.118 1.098.501.375.345.503.833a3.29 3.29 0 0 1 .072.371q.028.195.041.422a8.146 8.146 0 0 1 .014.489v4.17a2.127 2.127 0 0 0 .007.184q.016.182.066.296a.446.446 0 0 0 .032.06q.105.165.36.165.18 0 .338-.082a1.546 1.546 0 0 0 .142-.086q.094-.063.195-.147l.165.255a5.87 5.87 0 0 1-.233.171q-.236.163-.422.251a1.728 1.728 0 0 1-.012.006 1.277 1.277 0 0 1-.271.087q-.131.027-.284.036a2.53 2.53 0 0 1-.143.004 2.258 2.258 0 0 1-.352-.025q-.444-.071-.653-.335-.25-.316-.281-.83a2.462 2.462 0 0 1-.004-.145 3.566 3.566 0 0 1-.349.489q-.316.368-.686.554a2.78 2.78 0 0 1-.962.274 3.434 3.434 0 0 1-.358.018 3.007 3.007 0 0 1-.518-.042q-.281-.049-.503-.157a1.347 1.347 0 0 1-.382-.273 1.558 1.558 0 0 1-.386-.707q-.062-.24-.07-.524a2.986 2.986 0 0 1-.001-.082 2.032 2.032 0 0 1 .059-.504 1.5 1.5 0 0 1 .309-.606q.367-.435.87-.69a6.936 6.936 0 0 1 .383-.179q.201-.087.437-.177a16.483 16.483 0 0 1 .507-.184q.84-.285 1.245-.525a.992.992 0 0 0 .214-.166.669.669 0 0 0 .191-.479zm57.225 0v-.93q0-.733-.261-1.077a.776.776 0 0 0-.106-.116 1.216 1.216 0 0 0-.465-.249q-.248-.073-.563-.073a3.207 3.207 0 0 0-.528.04q-.641.108-.957.5.3.075.503.315a.851.851 0 0 1 .191.438 1.145 1.145 0 0 1 .011.162.943.943 0 0 1-.034.259.7.7 0 0 1-.206.333q-.24.218-.615.218a1.067 1.067 0 0 1-.248-.027q-.191-.045-.32-.168a.664.664 0 0 1-.062-.067.955.955 0 0 1-.204-.511 1.243 1.243 0 0 1-.006-.127 1.24 1.24 0 0 1 .028-.273.888.888 0 0 1 .145-.327q.172-.24.517-.48a2.5 2.5 0 0 1 .377-.218q.241-.114.538-.202.555-.165 1.215-.165a3.935 3.935 0 0 1 .672.054q.684.118 1.098.501.375.345.503.833a3.29 3.29 0 0 1 .072.371q.028.195.041.422a8.146 8.146 0 0 1 .014.489v4.17a2.127 2.127 0 0 0 .007.184q.016.182.066.296a.446.446 0 0 0 .032.06q.105.165.36.165.18 0 .338-.082a1.546 1.546 0 0 0 .142-.086q.094-.063.195-.147l.165.255a5.87 5.87 0 0 1-.233.171q-.236.163-.422.251a1.728 1.728 0 0 1-.012.006 1.277 1.277 0 0 1-.271.087q-.131.027-.284.036a2.53 2.53 0 0 1-.143.004 2.258 2.258 0 0 1-.352-.025q-.444-.071-.653-.335-.25-.316-.281-.83a2.462 2.462 0 0 1-.004-.145 3.566 3.566 0 0 1-.349.489q-.316.368-.686.554a2.78 2.78 0 0 1-.962.274 3.434 3.434 0 0 1-.358.018 3.007 3.007 0 0 1-.518-.042q-.281-.049-.503-.157a1.347 1.347 0 0 1-.382-.273 1.558 1.558 0 0 1-.386-.707q-.062-.24-.07-.524a2.986 2.986 0 0 1-.001-.082 2.032 2.032 0 0 1 .059-.504 1.5 1.5 0 0 1 .309-.606q.367-.435.87-.69a6.936 6.936 0 0 1 .383-.179q.201-.087.437-.177a16.483 16.483 0 0 1 .507-.184q.84-.285 1.245-.525a.992.992 0 0 0 .214-.166.669.669 0 0 0 .191-.479zm-90.705.9H2.61v2.7a4.308 4.308 0 0 0 .008.281q.018.269.073.442a.819.819 0 0 0 .039.102.621.621 0 0 0 .339.316.862.862 0 0 0 .081.029 1.786 1.786 0 0 0 .186.044q.199.037.492.059a9.744 9.744 0 0 0 .297.017v.3a19.902 19.902 0 0 0-.43-.02q-.706-.025-1.775-.025a60.592 60.592 0 0 0-.604.003q-.843.008-1.316.042v-.3a6.242 6.242 0 0 0 .252-.019q.35-.033.536-.101a.533.533 0 0 0 .319-.299.682.682 0 0 0 .018-.046q.09-.255.09-.825V2.73q0-.57-.09-.825a.582.582 0 0 0-.114-.197.543.543 0 0 0-.223-.148 1.307 1.307 0 0 0-.163-.046q-.179-.04-.444-.062A6.652 6.652 0 0 0 0 1.44v-.3a12.801 12.801 0 0 0 .351.02q.398.017.948.023a53.85 53.85 0 0 0 .531.002l1.62-.015q.266-.014.598-.015a16.961 16.961 0 0 1 .047 0 6.163 6.163 0 0 1 1.016.078q1.03.173 1.669.724a2.635 2.635 0 0 1 .919 1.864 3.673 3.673 0 0 1 .011.289q0 .825-.367 1.583-.368.757-1.245 1.267a3.394 3.394 0 0 1-.861.344q-.642.166-1.472.166zm55.545 4.29l-.87-.015q-.84-.03-1.23-.03a55.62 55.62 0 0 0-.577.003q-.81.008-1.283.042v-.3a6.242 6.242 0 0 0 .252-.019q.35-.033.536-.101a.533.533 0 0 0 .319-.299.682.682 0 0 0 .018-.046q.09-.255.09-.825V2.73q0-.57-.09-.825a.582.582 0 0 0-.114-.197.543.543 0 0 0-.223-.148 1.307 1.307 0 0 0-.163-.046q-.179-.04-.444-.062a6.652 6.652 0 0 0-.181-.012v-.3a9.162 9.162 0 0 0 .288.02q.47.025 1.167.025l1.275-.015a163.608 163.608 0 0 1 .414-.012q.681-.018.951-.018a8.452 8.452 0 0 1 1.494.123q1.563.281 2.481 1.204a4.249 4.249 0 0 1 1.04 1.783q.206.669.26 1.477a8.925 8.925 0 0 1 .02.603 7.042 7.042 0 0 1-.142 1.444 5.443 5.443 0 0 1-.503 1.421q-.645 1.23-1.867 1.898a5.323 5.323 0 0 1-1.616.556 7.312 7.312 0 0 1-1.302.111zM47.235 7.035v3.18a1.867 1.867 0 0 0 .03.346q.079.418.368.614a1.304 1.304 0 0 0 .337.159q.324.104.791.111a4.541 4.541 0 0 0 .064 0v.315l-.36-.015a306.802 306.802 0 0 0-.535-.015q-1.074-.03-1.415-.03-.378 0-1.687.056a218.727 218.727 0 0 0-.083.004v-.315q.527 0 .792-.163a.62.62 0 0 0 .093-.07.642.642 0 0 0 .155-.228q.1-.235.1-.619V5.67a2.959 2.959 0 0 0-.02-.356q-.051-.422-.235-.649-.255-.315-.885-.315v-.315a10.097 10.097 0 0 0 .817.044 9.113 9.113 0 0 0 .113.001 7.018 7.018 0 0 0 .637-.027q.297-.027.552-.082a3.246 3.246 0 0 0 .371-.101v1.875q.27-.75.863-1.335a2.23 2.23 0 0 1 .482-.368 1.685 1.685 0 0 1 .83-.217 1.705 1.705 0 0 1 .451.057 1.289 1.289 0 0 1 .532.288 1.177 1.177 0 0 1 .274.356 1.085 1.085 0 0 1 .108.484 1.09 1.09 0 0 1-.061.37.969.969 0 0 1-.172.297.757.757 0 0 1-.55.276 1.037 1.037 0 0 1-.072.002.86.86 0 0 1-.323-.059.799.799 0 0 1-.239-.151.692.692 0 0 1-.223-.43.987.987 0 0 1-.01-.14.853.853 0 0 1 .293-.647 1.398 1.398 0 0 1 .217-.163.342.342 0 0 0-.246-.146.519.519 0 0 0-.069-.004 1.445 1.445 0 0 0-.877.299 1.973 1.973 0 0 0-.188.158 3.145 3.145 0 0 0-.688.976 3.663 3.663 0 0 0-.062.142 3.895 3.895 0 0 0-.194.602 2.87 2.87 0 0 0-.076.643zM10.965 0v10.365a2.336 2.336 0 0 0 .016.284q.048.389.239.564.229.208.758.229a3.109 3.109 0 0 0 .127.003v.315a159.577 159.577 0 0 0-.559-.023q-.701-.028-1.065-.035a10.797 10.797 0 0 0-.191-.002 11.849 11.849 0 0 0-.236.003q-.501.01-1.579.057v-.315q.527 0 .792-.163a.62.62 0 0 0 .093-.07.642.642 0 0 0 .155-.228q.1-.235.1-.619V1.8a2.959 2.959 0 0 0-.02-.356q-.051-.422-.235-.649Q9.105.48 8.475.48V.165q.465.045.93.045a7.018 7.018 0 0 0 .637-.027q.297-.027.552-.082A3.246 3.246 0 0 0 10.965 0zM88.2 0v10.365a2.336 2.336 0 0 0 .016.284q.048.389.239.564.229.208.758.229a3.109 3.109 0 0 0 .127.003v.315a159.577 159.577 0 0 0-.559-.023q-.701-.028-1.065-.035a10.797 10.797 0 0 0-.191-.002 11.849 11.849 0 0 0-.236.003q-.501.01-1.579.057v-.315q.527 0 .792-.163a.62.62 0 0 0 .093-.07.642.642 0 0 0 .155-.228q.1-.235.1-.619V1.8a2.959 2.959 0 0 0-.02-.356q-.051-.422-.235-.649Q86.34.48 85.71.48V.165q.465.045.93.045a7.018 7.018 0 0 0 .637-.027q.297-.027.552-.082A3.246 3.246 0 0 0 88.2 0zM57.96 2.7v7.5a5.206 5.206 0 0 0 .007.282q.018.334.083.528a.7.7 0 0 0 .095.191.559.559 0 0 0 .227.184q.204.092.597.103a3.978 3.978 0 0 0 .116.002 7.093 7.093 0 0 0 .971-.062q.919-.127 1.534-.515a3.009 3.009 0 0 0 1.209-1.485 3.827 3.827 0 0 0 .074-.203 6.328 6.328 0 0 0 .223-.919q.081-.471.117-1.019a13.954 13.954 0 0 0 .027-.897 12.095 12.095 0 0 0-.048-1.111q-.091-.988-.357-1.701a3.395 3.395 0 0 0-.51-.926 2.903 2.903 0 0 0-.802-.702q-.908-.54-2.453-.54a3.312 3.312 0 0 0-.243.008q-.287.022-.454.097a.574.574 0 0 0-.294.3.796.796 0 0 0-.029.075q-.09.27-.09.81zM42.84 3.87v6.495a2.336 2.336 0 0 0 .016.284q.048.389.239.564.229.208.758.229a3.109 3.109 0 0 0 .127.003v.315a159.577 159.577 0 0 0-.559-.023q-.701-.028-1.065-.035a10.797 10.797 0 0 0-.191-.002 11.849 11.849 0 0 0-.236.003q-.501.01-1.579.057v-.315q.527 0 .792-.163a.62.62 0 0 0 .093-.07.642.642 0 0 0 .155-.228q.1-.235.1-.619V5.67a2.959 2.959 0 0 0-.02-.356q-.051-.422-.235-.649-.255-.315-.885-.315v-.315a10.097 10.097 0 0 0 .817.044 9.113 9.113 0 0 0 .113.001 7.018 7.018 0 0 0 .637-.027q.297-.027.552-.082a3.246 3.246 0 0 0 .371-.101zm25.65 0v6.495a2.336 2.336 0 0 0 .016.284q.048.389.239.564.229.208.758.229a3.109 3.109 0 0 0 .127.003v.315a159.577 159.577 0 0 0-.559-.023q-.701-.028-1.065-.035a10.797 10.797 0 0 0-.191-.002 11.849 11.849 0 0 0-.236.003q-.501.01-1.579.057v-.315q.527 0 .792-.163a.62.62 0 0 0 .093-.07.642.642 0 0 0 .155-.228q.1-.235.1-.619V5.67a2.959 2.959 0 0 0-.02-.356q-.051-.422-.235-.649Q66.63 4.35 66 4.35v-.315a10.097 10.097 0 0 0 .817.044 9.113 9.113 0 0 0 .113.001 7.018 7.018 0 0 0 .637-.027q.297-.027.552-.082a3.246 3.246 0 0 0 .371-.101zm10.995 2.295v4.5q.21.435.615.698a1.61 1.61 0 0 0 .615.233 2.159 2.159 0 0 0 .36.029q1.997 0 2.135-3.354a12.573 12.573 0 0 0 .01-.516q0-2.065-.613-2.905a1.326 1.326 0 0 0-1.127-.575 1.743 1.743 0 0 0-1.13.414 2.258 2.258 0 0 0-.085.074 2.311 2.311 0 0 0-.483.627q-.183.339-.297.775zM2.61 2.73v4.44h1.005a4.284 4.284 0 0 0 .717-.056q.377-.064.669-.202a1.64 1.64 0 0 0 .647-.529 2.801 2.801 0 0 0 .412-.888q.15-.539.15-1.22a5.852 5.852 0 0 0-.046-.758q-.116-.891-.531-1.387a1.737 1.737 0 0 0-.738-.507q-.289-.108-.649-.153a4.32 4.32 0 0 0-.526-.03 3.312 3.312 0 0 0-.243.008q-.287.022-.454.097a.574.574 0 0 0-.294.3.796.796 0 0 0-.029.075q-.09.27-.09.81zm14.625 7.395v-2.94a1.012 1.012 0 0 1-.289.292 1.23 1.23 0 0 1-.086.053 4.575 4.575 0 0 1-.136.073q-.157.081-.381.186a20.935 20.935 0 0 1-.218.101 9.952 9.952 0 0 0-.382.17q-.315.148-.54.288a1.958 1.958 0 0 0-.509.457 2.324 2.324 0 0 0-.099.135 1.403 1.403 0 0 0-.201.465q-.046.19-.053.412a2.582 2.582 0 0 0-.001.083 2.201 2.201 0 0 0 .032.389q.071.393.298.631.33.345.87.345a1.663 1.663 0 0 0 1.113-.434q.234-.202.444-.498a3.91 3.91 0 0 0 .138-.208zm20.01 0v-2.94a1.012 1.012 0 0 1-.289.292 1.23 1.23 0 0 1-.086.053 4.575 4.575 0 0 1-.136.073q-.157.081-.381.186a20.935 20.935 0 0 1-.218.101 9.952 9.952 0 0 0-.382.17q-.315.148-.54.288a1.958 1.958 0 0 0-.509.457 2.324 2.324 0 0 0-.099.135 1.403 1.403 0 0 0-.201.465q-.046.19-.053.412a2.582 2.582 0 0 0-.001.083 2.201 2.201 0 0 0 .032.389q.071.393.298.631.33.345.87.345a1.663 1.663 0 0 0 1.113-.434q.234-.202.444-.498a3.91 3.91 0 0 0 .138-.208zm57.225 0v-2.94a1.012 1.012 0 0 1-.289.292 1.23 1.23 0 0 1-.086.053 4.575 4.575 0 0 1-.136.073q-.157.081-.381.186a20.935 20.935 0 0 1-.218.101 9.952 9.952 0 0 0-.382.17q-.315.148-.54.288a1.958 1.958 0 0 0-.509.457 2.324 2.324 0 0 0-.099.135 1.403 1.403 0 0 0-.201.465q-.046.19-.053.412a2.582 2.582 0 0 0-.001.083 2.201 2.201 0 0 0 .032.389q.071.393.298.631.33.345.87.345a1.663 1.663 0 0 0 1.113-.434q.234-.202.444-.498a3.91 3.91 0 0 0 .138-.208zM42.726.561a.921.921 0 0 0-.666-.276.93.93 0 0 0-.343.063.97.97 0 0 0-.332.222 1.17 1.17 0 0 0-.009.009.921.921 0 0 0-.276.666.93.93 0 0 0 .063.343.97.97 0 0 0 .222.332 1.17 1.17 0 0 0 .009.009.921.921 0 0 0 .666.276.93.93 0 0 0 .343-.063.97.97 0 0 0 .332-.222 1.17 1.17 0 0 0 .009-.009.921.921 0 0 0 .276-.666.93.93 0 0 0-.063-.343.97.97 0 0 0-.222-.332 1.17 1.17 0 0 0-.009-.009zm25.65 0a.921.921 0 0 0-.666-.276.93.93 0 0 0-.343.063.97.97 0 0 0-.332.222 1.17 1.17 0 0 0-.009.009.921.921 0 0 0-.276.666.93.93 0 0 0 .063.343.97.97 0 0 0 .222.332 1.17 1.17 0 0 0 .009.009.921.921 0 0 0 .666.276.93.93 0 0 0 .343-.063.97.97 0 0 0 .332-.222 1.17 1.17 0 0 0 .009-.009.921.921 0 0 0 .276-.666.93.93 0 0 0-.063-.343.97.97 0 0 0-.222-.332 1.17 1.17 0 0 0-.009-.009z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    h.defaultProps = {
        width: "104.55",
        height: "14.58",
        viewBox: "0 0 104.55 14.58"
    };
    var v = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "PT Sans"), Object(o.createElement)("path", {
            d: "M25.665.48l-.375 1.095a2.666 2.666 0 0 0-.245-.101q-.307-.111-.767-.214-.663-.149-1.495-.15a9.34 9.34 0 0 0-.013 0 3.542 3.542 0 0 0-.544.039q-.287.045-.517.141a1.495 1.495 0 0 0-.424.263 1.593 1.593 0 0 0-.318.381 1.286 1.286 0 0 0-.177.661q0 .585.375.975a3.467 3.467 0 0 0 .508.431 4.502 4.502 0 0 0 .43.267 17.34 17.34 0 0 0 .741.381 20.838 20.838 0 0 0 .481.226q.66.3 1.223.698.562.397.937.952a2.126 2.126 0 0 1 .315.765 3.012 3.012 0 0 1 .06.615 3.266 3.266 0 0 1-.072.698 2.674 2.674 0 0 1-.168.517q-.24.54-.705.93a3.072 3.072 0 0 1-.732.451 3.819 3.819 0 0 1-.393.149 4.335 4.335 0 0 1-.776.167 5.821 5.821 0 0 1-.724.043q-1.125 0-1.86-.172-.735-.173-1.14-.383l.42-1.125q.312.176.893.346a9.616 9.616 0 0 0 .127.037 5.025 5.025 0 0 0 .812.151 6.625 6.625 0 0 0 .703.036 4.462 4.462 0 0 0 .651-.046 3.827 3.827 0 0 0 .279-.051 2.38 2.38 0 0 0 .428-.138 1.889 1.889 0 0 0 .322-.177q.315-.218.503-.548a1.415 1.415 0 0 0 .163-.472 1.884 1.884 0 0 0 .024-.308 1.726 1.726 0 0 0-.062-.472 1.322 1.322 0 0 0-.313-.555 3.409 3.409 0 0 0-.527-.452 4.367 4.367 0 0 0-.41-.253 11.509 11.509 0 0 0-.82-.406 13.506 13.506 0 0 0-.403-.172q-.66-.27-1.222-.652-.563-.383-.938-.945-.348-.522-.373-1.309a3.886 3.886 0 0 1-.002-.124 2.852 2.852 0 0 1 .13-.883A2.299 2.299 0 0 1 20.4.72q.702-.591 1.89-.697A6.098 6.098 0 0 1 22.83 0a10.823 10.823 0 0 1 .874.034 8.219 8.219 0 0 1 .791.101q.75.135 1.17.345zm15.51 10.2h-1.2V6.405q0-1.071-.283-1.658a1.711 1.711 0 0 0-.054-.104 1.105 1.105 0 0 0-.686-.523q-.197-.057-.438-.068a2.574 2.574 0 0 0-.114-.002q-.795 0-1.312.428-.518.427-.728 1.072v5.13h-1.2v-7.5H36l.225.915h.06a2.57 2.57 0 0 1 .645-.601 3.207 3.207 0 0 1 .323-.186 2.764 2.764 0 0 1 .757-.249A3.851 3.851 0 0 1 38.7 3q.573 0 1.016.124a2.682 2.682 0 0 1 .064.019q.465.142.773.502a1.914 1.914 0 0 1 .255.392q.094.19.165.419a3.564 3.564 0 0 1 .044.157q.158.607.158 1.537v4.53zM14.925.18v1.11h-3.27v9.39H10.41V1.29H7.14V.18h7.785zm32.76 3.3l-.285.99a3.713 3.713 0 0 0-.329-.137q-.172-.063-.369-.119a6.65 6.65 0 0 0-.134-.036 3.959 3.959 0 0 0-.77-.12 4.621 4.621 0 0 0-.273-.008q-.66 0-.967.225-.308.225-.308.78a.901.901 0 0 0 .037.266.691.691 0 0 0 .233.342q.262.21.643.379a4.029 4.029 0 0 0 .025.011q.397.172.87.337.472.165.87.435.397.27.667.683.27.412.27 1.087a2.592 2.592 0 0 1-.102.734 2.395 2.395 0 0 1-.055.166q-.158.42-.488.72a2.2 2.2 0 0 1-.5.338 2.796 2.796 0 0 1-.318.135q-.487.172-1.147.172-.671 0-1.185-.102a3.794 3.794 0 0 1-.27-.063q-.5-.137-.864-.317a3.149 3.149 0 0 1-.141-.073l.36-1.02a3.065 3.065 0 0 0 .288.142q.158.068.344.132a6.65 6.65 0 0 0 .268.086q.555.165 1.125.165a2.691 2.691 0 0 0 .452-.036q.351-.06.613-.219a.818.818 0 0 0 .361-.477q.059-.19.059-.438a1.206 1.206 0 0 0-.034-.295.829.829 0 0 0-.236-.41 2.096 2.096 0 0 0-.387-.287 2.672 2.672 0 0 0-.28-.14q-.398-.173-.87-.33a4.125 4.125 0 0 1-.77-.345 3.805 3.805 0 0 1-.1-.06q-.398-.248-.668-.638a1.396 1.396 0 0 1-.194-.425q-.052-.187-.068-.411a2.911 2.911 0 0 1-.008-.214 3 3 0 0 1 .054-.59q.129-.639.561-.992a2.064 2.064 0 0 1 .728-.375q.296-.088.649-.116A4.304 4.304 0 0 1 45.375 3q.616 0 1.08.082a3.601 3.601 0 0 1 .277.061q.512.133.899.311a3.79 3.79 0 0 1 .054.026zm-19.71 1.155l-.375-.9a3.967 3.967 0 0 1 .786-.361 5.03 5.03 0 0 1 .542-.149 7.366 7.366 0 0 1 1.466-.164 8.181 8.181 0 0 1 .116-.001q.78 0 1.253.21a2.147 2.147 0 0 1 .358.2q.217.151.359.344a1.294 1.294 0 0 1 .003.004q.247.337.33.742.082.405.082.81 0 .9-.045 1.755a32.907 32.907 0 0 0-.039 1.034 27.772 27.772 0 0 0-.006.586 12.234 12.234 0 0 0 .021.735 10.363 10.363 0 0 0 .024.315 5.345 5.345 0 0 0 .086.589 4.406 4.406 0 0 0 .079.326h-.885l-.315-1.05h-.075a2.311 2.311 0 0 1-.195.26 2.848 2.848 0 0 1-.142.153q-.203.202-.488.36a2.737 2.737 0 0 1-.349.16 3.589 3.589 0 0 1-.311.102 2.715 2.715 0 0 1-.401.079q-.201.024-.424.026a4.333 4.333 0 0 1-.03 0 2.707 2.707 0 0 1-.628-.071 2.394 2.394 0 0 1-.264-.079 2.141 2.141 0 0 1-.556-.297 1.967 1.967 0 0 1-.157-.13q-.3-.278-.472-.668a2.005 2.005 0 0 1-.153-.557 2.558 2.558 0 0 1-.02-.328 2.675 2.675 0 0 1 .041-.482q.064-.351.229-.62.27-.443.758-.705a3.184 3.184 0 0 1 .554-.231q.285-.09.616-.144a8.274 8.274 0 0 1 .806-.091 10.783 10.783 0 0 1 .701-.022h.413q.202 0 .412.03.045-.45.045-.81 0-.704-.24-1.047a.8.8 0 0 0-.09-.108.895.895 0 0 0-.291-.188q-.277-.116-.71-.137a4.101 4.101 0 0 0-.199-.005 3.966 3.966 0 0 0-.325.014 4.932 4.932 0 0 0-.222.024 6.797 6.797 0 0 0-.524.088 7.503 7.503 0 0 0-.076.017 5.057 5.057 0 0 0-.516.141 4.577 4.577 0 0 0-.069.024q-.278.097-.488.217zM0 10.68V.285Q.57.15 1.23.105 1.89.06 2.535.06q.69 0 1.403.135Q4.65.33 5.235.69a2.771 2.771 0 0 1 .918.932 3.246 3.246 0 0 1 .034.058 2.52 2.52 0 0 1 .27.691q.074.309.092.668a4.832 4.832 0 0 1 .006.246 4.436 4.436 0 0 1-.056.727q-.083.5-.289.893a3.081 3.081 0 0 1-.709.909 2.945 2.945 0 0 1-.206.164 3.653 3.653 0 0 1-1.146.55 4.225 4.225 0 0 1-.159.042q-.735.18-1.515.18h-.247a8.738 8.738 0 0 1-.268-.004 9.905 9.905 0 0 1-.093-.003Q1.68 6.735 1.5 6.72q-.166-.014-.242-.028a.663.663 0 0 1-.013-.002v3.99H0zm1.245-9.45v4.35a.35.35 0 0 0 .049.015q.072.017.191.023l.345.015a8.577 8.577 0 0 0 .262.007 7.51 7.51 0 0 0 .083 0h.24q.51 0 1.013-.097a2.677 2.677 0 0 0 .738-.256 2.478 2.478 0 0 0 .169-.097 1.811 1.811 0 0 0 .563-.566 2.216 2.216 0 0 0 .089-.154q.248-.465.248-1.185a2.692 2.692 0 0 0-.035-.45q-.043-.252-.138-.46a1.531 1.531 0 0 0-.06-.117q-.232-.413-.614-.66a2.552 2.552 0 0 0-.745-.325 2.945 2.945 0 0 0-.118-.028q-.48-.105-.96-.105a18.578 18.578 0 0 0-.568.008 16.485 16.485 0 0 0-.182.007 4.155 4.155 0 0 0-.21.014q-.216.02-.36.061zM31.68 8.565V7.32q-.21-.015-.427-.022-.218-.008-.428-.008-.465 0-.907.053a3.347 3.347 0 0 0-.411.073 2.487 2.487 0 0 0-.369.122 1.532 1.532 0 0 0-.313.174 1.243 1.243 0 0 0-.228.216.884.884 0 0 0-.186.42 1.211 1.211 0 0 0-.016.202 1.198 1.198 0 0 0 .082.451 1.105 1.105 0 0 0 .293.412 1.296 1.296 0 0 0 .681.316 1.784 1.784 0 0 0 .279.021 2.682 2.682 0 0 0 .396-.028 2.02 2.02 0 0 0 .354-.084 2.446 2.446 0 0 0 .325-.137 1.906 1.906 0 0 0 .245-.148 1.946 1.946 0 0 0 .266-.229 1.635 1.635 0 0 0 .132-.154q.146-.195.221-.377a1.246 1.246 0 0 0 .011-.028z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    v.defaultProps = {
        width: "47.865",
        height: "10.86",
        viewBox: "0 0 47.865 10.86"
    };
    var q = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "PT Sans Narrow"), Object(o.createElement)("path", {
            d: "M48.705 10.845L44.85 4.02l-.645-1.65h-.045l.165 1.65v6.66h-1.08V.015h.675l3.885 6.81.615 1.575h.06l-.165-1.575V.18h1.08v10.665h-.69zm26.31-7.665h.795l1.335 4.38.27 1.44h.03l.225-1.47 1.02-4.35h1.02l-1.995 7.665H77.1l-1.515-4.92-.21-1.26h-.03l-.21 1.275-1.47 4.905h-.615L70.995 3.18h1.155l1.155 4.365.18 1.455h.03l.27-1.485 1.23-4.335zm-59.49 7.14l.39-1.035q.285.195.803.368.517.172 1.177.172.77 0 1.276-.347a1.719 1.719 0 0 0 .089-.065 1.297 1.297 0 0 0 .442-.668q.066-.221.08-.49a2.797 2.797 0 0 0 .003-.14 1.924 1.924 0 0 0-.08-.563 1.643 1.643 0 0 0-.22-.457 3.753 3.753 0 0 0-.534-.615 4.381 4.381 0 0 0-.216-.187 13.656 13.656 0 0 0-.807-.61 15.283 15.283 0 0 0-.16-.11q-.518-.353-.968-.78-.45-.428-.75-.983a2.412 2.412 0 0 1-.243-.696q-.056-.293-.057-.628a4.05 4.05 0 0 1 0-.011q0-.935.417-1.51a1.838 1.838 0 0 1 .341-.357 2.668 2.668 0 0 1 1.076-.512Q17.996 0 18.48 0a7.13 7.13 0 0 1 .667.03q.335.031.629.096a4.323 4.323 0 0 1 .039.009 4.821 4.821 0 0 1 .399.109q.189.061.346.133a2.256 2.256 0 0 1 .2.103l-.36.99a1.812 1.812 0 0 0-.208-.107q-.223-.1-.543-.187a6.006 6.006 0 0 0-.022-.006q-.47-.126-1.078-.134a6.306 6.306 0 0 0-.084-.001 2.621 2.621 0 0 0-.444.035q-.482.083-.756.363a1.348 1.348 0 0 0-.388.905 1.776 1.776 0 0 0-.002.092q0 .525.3.93a3.874 3.874 0 0 0 .458.512 4.768 4.768 0 0 0 .292.253q.45.36.968.728.517.367.967.817.45.45.75 1.02a2.546 2.546 0 0 1 .25.751 3.466 3.466 0 0 1 .05.599q0 1.32-.78 2.07a2.543 2.543 0 0 1-1.082.606q-.5.144-1.123.144a8.121 8.121 0 0 1-.581-.019q-.518-.038-.896-.146a5.59 5.59 0 0 1-.37-.119q-.182-.066-.334-.138a2.468 2.468 0 0 1-.219-.118zm17.73.36h-1.08V6.105a7.673 7.673 0 0 0-.019-.554q-.039-.539-.161-.881a1.505 1.505 0 0 0-.082-.192.888.888 0 0 0-.644-.475 1.472 1.472 0 0 0-.294-.028 1.641 1.641 0 0 0-.469.064 1.307 1.307 0 0 0-.521.296q-.39.36-.57.885v5.46h-1.08v-7.5h.78l.195.795h.045a2.275 2.275 0 0 1 .501-.51 2.843 2.843 0 0 1 .272-.18 2.046 2.046 0 0 1 .682-.245 2.756 2.756 0 0 1 .48-.04 2.904 2.904 0 0 1 .425.03 2.125 2.125 0 0 1 .422.105q.368.135.616.458a1.736 1.736 0 0 1 .193.323q.076.162.133.356a3.382 3.382 0 0 1 .048.183 4.153 4.153 0 0 1 .078.445q.028.228.04.49a9.237 9.237 0 0 1 .01.43v4.86zM12.12.18v1.035H9.54v9.465H8.415V1.215h-2.58V.18h6.285zM0 10.68V.285a5.298 5.298 0 0 1 .82-.16 6.039 6.039 0 0 1 .2-.02Q1.56.06 2.085.06q.6 0 1.185.135.585.135 1.058.495a2.376 2.376 0 0 1 .542.589 3.091 3.091 0 0 1 .223.401 2.855 2.855 0 0 1 .197.605q.095.444.095 1 0 .804-.201 1.402a2.944 2.944 0 0 1-.077.203q-.277.66-.734 1.073-.458.412-1.05.6-.593.187-1.223.187h-.195a5.44 5.44 0 0 1-.193-.004 6.376 6.376 0 0 1-.092-.003q-.15-.008-.292-.023-.108-.011-.168-.023a.594.594 0 0 1-.035-.007v3.99H0zm22.62-6.195l-.36-.855q.435-.27 1.058-.42a5.496 5.496 0 0 1 1.119-.147 6.22 6.22 0 0 1 .193-.003 3.451 3.451 0 0 1 .402.022q.199.023.365.072a1.527 1.527 0 0 1 .245.094 1.603 1.603 0 0 1 .397.27 1.413 1.413 0 0 1 .204.24 1.801 1.801 0 0 1 .27.655 2.103 2.103 0 0 1 .014.08 5.244 5.244 0 0 1 .066.722 5.885 5.885 0 0 1 .002.14q0 .9-.037 1.755a39.054 39.054 0 0 0-.034 1.133 32.967 32.967 0 0 0-.004.487 15.3 15.3 0 0 0 .012.615 12.148 12.148 0 0 0 .026.443 6.034 6.034 0 0 0 .094.701 5.296 5.296 0 0 0 .048.221h-.825l-.255-.885h-.06a1.88 1.88 0 0 1-.403.482 2.402 2.402 0 0 1-.257.193q-.435.285-1.17.285a1.9 1.9 0 0 1-.673-.115 1.688 1.688 0 0 1-.654-.447 1.868 1.868 0 0 1-.426-.794q-.092-.341-.092-.759a3.166 3.166 0 0 1 .033-.472q.037-.246.116-.453a1.727 1.727 0 0 1 .068-.155q.218-.435.616-.705a2.387 2.387 0 0 1 .57-.281 3.044 3.044 0 0 1 .374-.101 5.334 5.334 0 0 1 .618-.088 7.089 7.089 0 0 1 .605-.025h.3q.15 0 .315.015a10.758 10.758 0 0 0 .031-.387q.01-.177.013-.335a6.121 6.121 0 0 0 .001-.103 4.55 4.55 0 0 0-.016-.396q-.035-.394-.144-.639a.888.888 0 0 0-.095-.165.748.748 0 0 0-.324-.245q-.242-.1-.606-.1a3.21 3.21 0 0 0-.467.036 4.322 4.322 0 0 0-.448.092 4.128 4.128 0 0 0-.375.114q-.254.092-.45.208zm28.905 0l-.36-.855q.435-.27 1.058-.42a5.496 5.496 0 0 1 1.119-.147 6.22 6.22 0 0 1 .193-.003 3.451 3.451 0 0 1 .402.022q.199.023.365.072a1.527 1.527 0 0 1 .245.094 1.603 1.603 0 0 1 .397.27 1.413 1.413 0 0 1 .204.24 1.801 1.801 0 0 1 .27.655 2.103 2.103 0 0 1 .014.08 5.244 5.244 0 0 1 .066.722 5.885 5.885 0 0 1 .002.14q0 .9-.037 1.755a39.054 39.054 0 0 0-.034 1.133 32.967 32.967 0 0 0-.004.487 15.3 15.3 0 0 0 .012.615 12.148 12.148 0 0 0 .026.443 6.034 6.034 0 0 0 .094.701 5.296 5.296 0 0 0 .048.221h-.825l-.255-.885h-.06a1.88 1.88 0 0 1-.403.482 2.402 2.402 0 0 1-.257.193q-.435.285-1.17.285a1.9 1.9 0 0 1-.673-.115 1.688 1.688 0 0 1-.654-.447 1.868 1.868 0 0 1-.426-.794q-.092-.341-.092-.759a3.166 3.166 0 0 1 .033-.472q.037-.246.116-.453a1.727 1.727 0 0 1 .068-.155q.218-.435.616-.705a2.387 2.387 0 0 1 .57-.281 3.044 3.044 0 0 1 .374-.101 5.334 5.334 0 0 1 .618-.088 7.089 7.089 0 0 1 .605-.025h.3q.15 0 .315.015a10.758 10.758 0 0 0 .031-.387q.01-.177.013-.335a6.121 6.121 0 0 0 .001-.103 4.55 4.55 0 0 0-.016-.396q-.035-.394-.144-.639a.888.888 0 0 0-.095-.165.748.748 0 0 0-.324-.245q-.242-.1-.606-.1a3.21 3.21 0 0 0-.467.036 4.322 4.322 0 0 0-.448.092 4.128 4.128 0 0 0-.375.114q-.254.092-.45.208zm-17.055 5.91l.33-.945q.3.18.713.308.412.127.847.127.495 0 .84-.247.321-.231.343-.728a1.687 1.687 0 0 0 .002-.075 1.691 1.691 0 0 0-.031-.332q-.041-.205-.137-.367a1.015 1.015 0 0 0-.042-.066 2.293 2.293 0 0 0-.397-.432 2.685 2.685 0 0 0-.135-.108 5.68 5.68 0 0 0-.651-.417 6.221 6.221 0 0 0-.047-.025q-.375-.203-.697-.488-.323-.285-.533-.675-.179-.331-.205-.815a3.169 3.169 0 0 1-.005-.175 2.84 2.84 0 0 1 .051-.554q.064-.323.21-.571a1.452 1.452 0 0 1 .257-.322q.458-.433 1.253-.482A3.394 3.394 0 0 1 36.645 3q.526 0 .931.082a3.07 3.07 0 0 1 .134.031q.45.112.78.307l-.285.9a2.715 2.715 0 0 0-.339-.148 3.591 3.591 0 0 0-.321-.099q-.375-.098-.765-.098a2.055 2.055 0 0 0-.281.018q-.323.044-.5.201a.618.618 0 0 0-.007.006q-.247.225-.247.705a1.114 1.114 0 0 0 .046.327.926.926 0 0 0 .164.311 2.186 2.186 0 0 0 .306.31 2.743 2.743 0 0 0 .226.17 14.645 14.645 0 0 0 .424.274 17.443 17.443 0 0 0 .274.168q.375.225.698.533a2.543 2.543 0 0 1 .492.655 2.9 2.9 0 0 1 .04.08 1.892 1.892 0 0 1 .147.432q.063.287.063.64 0 .42-.135.795-.135.375-.412.653a1.916 1.916 0 0 1-.466.339 2.364 2.364 0 0 1-.224.103q-.413.165-.968.165a5.772 5.772 0 0 1-.507-.021q-.255-.023-.477-.069a3.115 3.115 0 0 1-.156-.037 3.543 3.543 0 0 1-.391-.128q-.233-.092-.419-.21zm22.77.285v-7.5h.765l.195.795h.045q.21-.435.548-.682.337-.248.817-.248a2.118 2.118 0 0 1 .331.028q.211.033.449.107l-.21 1.095a2.904 2.904 0 0 0-.28-.082q-.146-.035-.277-.047a1.472 1.472 0 0 0-.133-.006 1.356 1.356 0 0 0-.348.042 1.005 1.005 0 0 0-.432.236 1.235 1.235 0 0 0-.323.495 1.643 1.643 0 0 0-.067.247v5.52h-1.08zm4.11 0v-7.5h.765l.195.795h.045q.21-.435.548-.682.337-.248.817-.248a2.118 2.118 0 0 1 .331.028q.211.033.449.107l-.21 1.095a2.904 2.904 0 0 0-.28-.082q-.146-.035-.277-.047a1.472 1.472 0 0 0-.133-.006 1.356 1.356 0 0 0-.348.042 1.005 1.005 0 0 0-.432.236 1.235 1.235 0 0 0-.323.495 1.643 1.643 0 0 0-.067.247v5.52h-1.08zm3.78-3.75q0-2.025.698-2.977a2.247 2.247 0 0 1 1.636-.934A3.182 3.182 0 0 1 67.815 3a3.076 3.076 0 0 1 .809.1 2.083 2.083 0 0 1 1.224.875q.617.923.65 2.747a11.536 11.536 0 0 1 .002.208q0 1.849-.579 2.799a2.414 2.414 0 0 1-.126.186 2.268 2.268 0 0 1-1.661.929 3.164 3.164 0 0 1-.319.016 3.076 3.076 0 0 1-.809-.1 2.083 2.083 0 0 1-1.223-.875q-.618-.923-.651-2.747a11.536 11.536 0 0 1-.002-.208zm1.125 0q0 .66.083 1.2a4.003 4.003 0 0 0 .096.459q.062.225.148.417a2.397 2.397 0 0 0 .026.054 1.801 1.801 0 0 0 .208.337 1.412 1.412 0 0 0 .279.271 1.138 1.138 0 0 0 .536.206 1.479 1.479 0 0 0 .184.011 1.367 1.367 0 0 0 .55-.106q.314-.137.53-.447a1.726 1.726 0 0 0 .09-.144q.33-.59.381-1.796a10.948 10.948 0 0 0 .009-.462 8.871 8.871 0 0 0-.026-.695 7.051 7.051 0 0 0-.056-.497q-.076-.5-.238-.868a2.369 2.369 0 0 0-.033-.07 1.801 1.801 0 0 0-.208-.337 1.412 1.412 0 0 0-.279-.27 1.138 1.138 0 0 0-.536-.207 1.479 1.479 0 0 0-.184-.011 1.302 1.302 0 0 0-.59.13q-.27.135-.468.41a1.784 1.784 0 0 0-.104.165 2.382 2.382 0 0 0-.21.522q-.146.517-.179 1.274a10.574 10.574 0 0 0-.009.454zM1.125 1.185v4.47a.251.251 0 0 0 .043.016q.043.013.107.019a1.092 1.092 0 0 0 .038.003 80.343 80.343 0 0 0 .245.014 87.711 87.711 0 0 0 .017.001 4.761 4.761 0 0 0 .247.007 4.374 4.374 0 0 0 .016 0h.187q.42 0 .81-.105.39-.105.69-.382a1.737 1.737 0 0 0 .294-.362q.109-.174.194-.388a2.383 2.383 0 0 0 .121-.425q.066-.34.066-.768 0-.492-.105-.855a1.898 1.898 0 0 0-.067-.195 2.183 2.183 0 0 0-.185-.357 1.633 1.633 0 0 0-.266-.318q-.277-.255-.652-.36-.375-.105-.78-.105a7.302 7.302 0 0 0-.473.015 6.527 6.527 0 0 0-.105.008q-.277.022-.442.067zm24.39 7.665V7.26q-.15-.015-.3-.022-.15-.008-.3-.008-.36 0-.705.06a2.103 2.103 0 0 0-.383.103 1.747 1.747 0 0 0-.232.107q-.27.15-.427.405a.999.999 0 0 0-.121.299q-.03.128-.036.276a1.843 1.843 0 0 0-.001.07 1.979 1.979 0 0 0 .031.365q.065.343.262.565a.955.955 0 0 0 .698.329 1.265 1.265 0 0 0 .059.001q.63 0 .975-.3t.48-.66zm28.905 0V7.26q-.15-.015-.3-.022-.15-.008-.3-.008-.36 0-.705.06a2.103 2.103 0 0 0-.383.103 1.747 1.747 0 0 0-.232.107q-.27.15-.427.405a.999.999 0 0 0-.121.299q-.03.128-.036.276a1.843 1.843 0 0 0-.001.07 1.979 1.979 0 0 0 .031.365q.065.343.262.565a.955.955 0 0 0 .698.329 1.265 1.265 0 0 0 .059.001q.63 0 .975-.3t.48-.66z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    q.defaultProps = {
        width: "79.71",
        height: "10.86",
        viewBox: "0 0 79.71 10.86"
    };
    var g = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "PT Serif"), Object(o.createElement)("path", {
            d: "M23.07 8.04l.615 2.205a1.338 1.338 0 0 0 .228.181 1.832 1.832 0 0 0 .237.127q.285.127.855.127a3.203 3.203 0 0 0 .659-.066 2.828 2.828 0 0 0 .241-.061 2.274 2.274 0 0 0 .481-.207 1.954 1.954 0 0 0 .247-.168q.307-.248.487-.6a1.645 1.645 0 0 0 .166-.558 2.062 2.062 0 0 0 .014-.245 1.615 1.615 0 0 0-.078-.512 1.369 1.369 0 0 0-.29-.493q-.367-.405-.914-.72a14.503 14.503 0 0 0-.723-.388 17.326 17.326 0 0 0-.47-.227q-.645-.3-1.192-.712-.548-.413-.915-.99a2.251 2.251 0 0 1-.293-.72q-.075-.334-.075-.728a3.017 3.017 0 0 1 .062-.623 2.41 2.41 0 0 1 .163-.502q.225-.495.638-.84a2.826 2.826 0 0 1 .707-.429 3.41 3.41 0 0 1 .275-.103 3.7 3.7 0 0 1 .745-.159A4.752 4.752 0 0 1 25.47.6a10.24 10.24 0 0 1 .928.04 7.91 7.91 0 0 1 .745.103 7.795 7.795 0 0 1 .441.095q.452.113.751.257 0 .205-.024.464a7.597 7.597 0 0 1-.014.129 20.345 20.345 0 0 1-.077.607 22.539 22.539 0 0 1-.013.09 22.839 22.839 0 0 1-.105.655 20.944 20.944 0 0 1-.007.043q-.052.29-.103.519a7.738 7.738 0 0 1-.017.073h-.39l-.6-2.055a1.927 1.927 0 0 0-.243-.088q-.122-.035-.263-.062a3.907 3.907 0 0 0-.176-.03 5.795 5.795 0 0 0-.593-.054 6.837 6.837 0 0 0-.285-.006 2.225 2.225 0 0 0-.532.06 1.564 1.564 0 0 0-.698.368 1.4 1.4 0 0 0-.424.768A2.087 2.087 0 0 0 23.73 3a1.701 1.701 0 0 0 .079.53 1.436 1.436 0 0 0 .288.505q.368.42.923.75a15.037 15.037 0 0 0 .879.482 17.257 17.257 0 0 0 .314.156q.637.307 1.192.712.555.405.923.96a2.143 2.143 0 0 1 .305.749q.062.293.062.631a3.191 3.191 0 0 1-.092.778 2.746 2.746 0 0 1-.156.452q-.247.555-.712.945-.465.39-1.14.6a4.532 4.532 0 0 1-.804.168 6.06 6.06 0 0 1-.726.042 6.815 6.815 0 0 1-.896-.056 5.124 5.124 0 0 1-.799-.169 6.518 6.518 0 0 1-.348-.114q-.481-.175-.717-.366.015-.255.053-.615a22.677 22.677 0 0 1 .077-.647 24.963 24.963 0 0 1 .013-.095 26.208 26.208 0 0 1 .108-.72 24.336 24.336 0 0 1 .004-.023q.046-.276.092-.49a6.526 6.526 0 0 1 .028-.125h.39zm-7.815 2.805v.435H11.04v-.435q.33-.12.668-.21a6.44 6.44 0 0 1 .442-.101 7.732 7.732 0 0 1 .285-.049V1.56H10.14l-.795 2.145H8.97q-.042-.28-.071-.632a13.49 13.49 0 0 1-.004-.05q-.03-.383-.052-.78-.023-.398-.038-.78a21.535 21.535 0 0 1-.01-.319Q8.791.997 8.79.866a12.719 12.719 0 0 1 0-.086h8.715a13.774 13.774 0 0 1 0 .005q0 .293-.015.658a24.422 24.422 0 0 1 0 .012q-.015.375-.037.773l-.045.78q-.023.382-.068.697h-.39l-.78-2.145h-2.295v8.925q.39.075.728.15.337.075.652.21zm37.68-8.955h-.375L51.9.6a3.557 3.557 0 0 0-.308.013q-.163.014-.303.044a1.846 1.846 0 0 0-.131.033q-.308.09-.51.345-.149.187-.241.495a2.754 2.754 0 0 0-.06.24q-.065.323-.087.78a10.261 10.261 0 0 0-.01.48v.75h1.725v.75H50.25v6.015a5.685 5.685 0 0 1 1.016.209 4.951 4.951 0 0 1 .424.151v.375h-3.78v-.375q.465-.27.99-.36V4.53h-1.14v-.39q.525-.33 1.14-.495V3.12a6.356 6.356 0 0 1 .029-.627q.031-.309.094-.572a2.984 2.984 0 0 1 .102-.338 2.751 2.751 0 0 1 .231-.483 2.037 2.037 0 0 1 .399-.477q.405-.353.953-.488a4.658 4.658 0 0 1 .791-.122A5.537 5.537 0 0 1 51.885 0q.103 0 .233.009a5.313 5.313 0 0 1 .082.006 11.526 11.526 0 0 1 .278.027 13.044 13.044 0 0 1 .097.011 4.25 4.25 0 0 1 .33.05 3.856 3.856 0 0 1 .045.01 3.503 3.503 0 0 1 .149.034q.09.023.166.048a10.065 10.065 0 0 1-.071.592 8.246 8.246 0 0 1-.057.331q-.082.427-.202.772zM2.67 7.17v3.315a5.235 5.235 0 0 1 .582.097 4.594 4.594 0 0 1 .183.046 7.452 7.452 0 0 1 .494.151 6.402 6.402 0 0 1 .181.066v.435H0v-.435q.3-.15.615-.225a17.379 17.379 0 0 1 .596-.131 15.789 15.789 0 0 1 .019-.004V1.59a4.918 4.918 0 0 1-.453-.1 4.208 4.208 0 0 1-.192-.057q-.3-.098-.585-.218V.78h1.35a13.87 13.87 0 0 0 .708-.019A17.746 17.746 0 0 0 2.655.72 16.503 16.503 0 0 1 3.679.664 14.359 14.359 0 0 1 4.005.66q.735 0 1.44.158a3.719 3.719 0 0 1 .895.319 3.32 3.32 0 0 1 .357.213 2.785 2.785 0 0 1 .842.92 3.264 3.264 0 0 1 .043.078 2.629 2.629 0 0 1 .252.693q.069.311.082.672a4.872 4.872 0 0 1 .004.187q0 .885-.345 1.515-.345.63-.922 1.035a3.914 3.914 0 0 1-1.132.542 4.5 4.5 0 0 1-.181.051q-.735.187-1.515.187h-.232a7.54 7.54 0 0 1-.206-.003 9.21 9.21 0 0 1-.132-.004 7.288 7.288 0 0 1-.262-.016A6.422 6.422 0 0 1 2.91 7.2q-.159-.014-.234-.029a.709.709 0 0 1-.006-.001zm33.285 2.82l.21.24a1.33 1.33 0 0 1-.184.285 1.787 1.787 0 0 1-.191.195 2.647 2.647 0 0 1-.464.326 3.029 3.029 0 0 1-.121.064q-.33.165-.72.263-.39.097-.795.097a4.802 4.802 0 0 1-.784-.061 3.566 3.566 0 0 1-.776-.216 3.016 3.016 0 0 1-.902-.566 2.841 2.841 0 0 1-.223-.229 3.381 3.381 0 0 1-.57-.933 4.036 4.036 0 0 1-.113-.305q-.232-.72-.232-1.62a6.668 6.668 0 0 1 .086-1.111q.191-1.123.799-1.814a2.881 2.881 0 0 1 1.63-.921 4.327 4.327 0 0 1 .875-.084q.525 0 1.035.143.51.142.908.472a2.22 2.22 0 0 1 .457.527 2.854 2.854 0 0 1 .187.351q.21.463.242 1.114a4.919 4.919 0 0 1 .006.243q0 .255-.022.518-.023.262-.083.562h-4.68a4.457 4.457 0 0 0 .073.818 3.856 3.856 0 0 0 .085.36 2.968 2.968 0 0 0 .258.628 2.555 2.555 0 0 0 .214.324q.315.405.795.638a2.272 2.272 0 0 0 .624.193 3.076 3.076 0 0 0 .501.039 3.928 3.928 0 0 0 .964-.123 4.41 4.41 0 0 0 .101-.027q.354-.098.591-.235a1.314 1.314 0 0 0 .219-.155zm6.72-5.085H40.68a.803.803 0 0 0-.099.065q-.103.079-.231.213a3.807 3.807 0 0 0-.083.09 1.65 1.65 0 0 0-.174.239q-.077.125-.148.281a3.969 3.969 0 0 0-.12.297v4.455q.3.03.6.113a2.671 2.671 0 0 1 .45.17 3.108 3.108 0 0 1 .15.077v.375h-3.54v-.375a3.213 3.213 0 0 1 .261-.13 2.357 2.357 0 0 1 .249-.095q.24-.075.48-.135V4.65l-.99-.12v-.39q.48-.21.99-.337.51-.128.975-.203h.375v1.59h.06a2.398 2.398 0 0 1 .187-.337 3.095 3.095 0 0 1 .196-.263q.247-.3.57-.54.322-.24.705-.367a1.815 1.815 0 0 1 .577-.095 1.898 1.898 0 0 1 .21.012q.105.195.188.428a9.079 9.079 0 0 1 .119.361 10.15 10.15 0 0 1 .038.126v.39zm4.05 6v.375h-3.33v-.375q.225-.12.465-.202a6.808 6.808 0 0 1 .301-.096 8.511 8.511 0 0 1 .224-.062V4.65l-.99-.12v-.39a7.084 7.084 0 0 1 .634-.226 8.411 8.411 0 0 1 .311-.089q.51-.135 1.02-.225h.375v6.945q.3.075.54.158.24.082.45.202zM2.67 1.515v4.86a.386.386 0 0 0 .053.017q.057.013.138.019a1.462 1.462 0 0 0 .027.002 6.811 6.811 0 0 1 .212.014 7.943 7.943 0 0 1 .088.008 3.244 3.244 0 0 0 .307.015h.24q.525 0 .99-.142.465-.143.818-.458a2.186 2.186 0 0 0 .463-.593 2.638 2.638 0 0 0 .099-.202 2.374 2.374 0 0 0 .157-.526q.045-.245.052-.524a4.195 4.195 0 0 0 .001-.105q0-.896-.37-1.466a1.84 1.84 0 0 0-.327-.379q-.629-.554-1.689-.609a4.615 4.615 0 0 0-.239-.006 14.952 14.952 0 0 0-.172.001q-.21.002-.364.011a4.65 4.65 0 0 0-.049.003q-.225.015-.435.06zM31.575 6.87h3.3q.015-.135.023-.262a4.267 4.267 0 0 0 .007-.218 3.885 3.885 0 0 0 0-.03q0-.693-.187-1.182a1.963 1.963 0 0 0-.173-.348 1.173 1.173 0 0 0-.852-.55 1.779 1.779 0 0 0-.273-.02 2.016 2.016 0 0 0-.54.068 1.429 1.429 0 0 0-.765.51 1.798 1.798 0 0 0-.243.439q-.235.587-.297 1.593zM44.138.944a1.01 1.01 0 0 0-.038.286 1.098 1.098 0 0 0 .012.163.763.763 0 0 0 .25.475q.263.232.698.232.17 0 .312-.035a.857.857 0 0 0 .378-.197.749.749 0 0 0 .221-.364 1.035 1.035 0 0 0 .034-.274 1.132 1.132 0 0 0-.012-.169.796.796 0 0 0-.243-.476.855.855 0 0 0-.401-.209 1.275 1.275 0 0 0-.289-.031q-.435 0-.697.24a.773.773 0 0 0-.225.359z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    g.defaultProps = {
        width: "53.265",
        height: "11.46",
        viewBox: "0 0 53.265 11.46"
    };
    var y = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Raleway"), Object(o.createElement)("path", {
            d: "M35.895 10.515l3.21-7.35h.33L36.03 10.95h-.27l-1.905-4.365-1.905 4.365h-.27l-3.405-7.785h.33l3.21 7.35L33.69 6.21l-1.305-3.03h.315l1.155 2.64 1.155-2.64h.315L34.02 6.21l1.875 4.305zM.3 10.95H0V.3h4.335q.645 0 1.2.277.555.278.953.736.397.457.622 1.035.225.577.225 1.177 0 .615-.195 1.185a3.276 3.276 0 0 1-.511.957 3.121 3.121 0 0 1-.044.056q-.36.442-.862.72-.503.277-1.103.322l2.7 4.185h-.36l-2.7-4.185H.3v4.185zm48.9 3.345v-.3q.195 0 .351-.013a2.641 2.641 0 0 0 .092-.009.592.592 0 0 0 .098-.02q.053-.016.093-.041a.254.254 0 0 0 .071-.067.256.256 0 0 0 .025-.03q.024-.033.053-.087a1.492 1.492 0 0 0 .027-.056 7.26 7.26 0 0 0 .035-.075q.053-.115.139-.312a56.781 56.781 0 0 0 .021-.048l.375-.855.549-1.249a1517.411 1517.411 0 0 1 .081-.183l-3.615-7.785h.33l3.435 7.41 3.255-7.41h.33L50.31 13.74a1.181 1.181 0 0 1-.126.214q-.094.126-.213.198a.642.642 0 0 1-.156.068q-.3.075-.615.075zm-21.615-7.23v.165H20.46q.06.75.353 1.403a3.98 3.98 0 0 0 .589.946 3.676 3.676 0 0 0 .168.186q.465.48 1.073.757.607.278 1.282.278.45 0 .878-.12.427-.12.802-.337.375-.218.66-.518.285-.3.45-.66L27 9.24q-.165.405-.472.743-.308.337-.721.584a3.823 3.823 0 0 1-.884.386 4.228 4.228 0 0 1-.015.005q-.488.142-.998.142-.765 0-1.447-.322-.683-.323-1.193-.885a4.345 4.345 0 0 1-.805-1.294 4.913 4.913 0 0 1-.005-.012q-.3-.742-.3-1.582 0-.825.285-1.545t.787-1.26q.503-.54 1.171-.848.667-.307 1.432-.307.78 0 1.463.315.682.315 1.184.855a4.093 4.093 0 0 1 .725 1.094 4.712 4.712 0 0 1 .078.181q.3.735.3 1.575zm-13.14-.135v-.885q0-.6-.18-1.102a2.496 2.496 0 0 0-.304-.595 2.211 2.211 0 0 0-.213-.26q-.338-.353-.81-.548a2.595 2.595 0 0 0-.764-.183 3.133 3.133 0 0 0-.279-.012 2.997 2.997 0 0 0-.665.078 4.035 4.035 0 0 0-.55.17 5.484 5.484 0 0 0-.771.37 6.956 6.956 0 0 0-.534.342l-.18-.24a7.87 7.87 0 0 1 .908-.538q.484-.241.932-.361a3.309 3.309 0 0 1 .86-.121 3.439 3.439 0 0 1 .726.074 2.886 2.886 0 0 1 .452.136q.532.21.9.6a2.63 2.63 0 0 1 .48.726 3.142 3.142 0 0 1 .09.219 3.31 3.31 0 0 1 .174.746 4.227 4.227 0 0 1 .028.499v4.305q0 .273.199.298a.336.336 0 0 0 .041.002v.3a1.414 1.414 0 0 1-.066-.001q-.109-.006-.144-.029a.461.461 0 0 1-.203-.161.603.603 0 0 1-.037-.056.689.689 0 0 1-.089-.317.823.823 0 0 1-.001-.036v-.72a3.491 3.491 0 0 1-1.276 1.026 4.133 4.133 0 0 1-.134.062 4.59 4.59 0 0 1-1.699.379 5.331 5.331 0 0 1-.191.003q-.525 0-.99-.187a2.565 2.565 0 0 1-.637-.367 2.354 2.354 0 0 1-.166-.143q-.337-.323-.532-.758t-.195-.93a1.818 1.818 0 0 1 .125-.678 1.729 1.729 0 0 1 .108-.222 2.055 2.055 0 0 1 .482-.564 2.492 2.492 0 0 1 .177-.133 3.074 3.074 0 0 1 .564-.302 4.011 4.011 0 0 1 .457-.156 4.468 4.468 0 0 1 .784-.142 5.519 5.519 0 0 1 .513-.023q.675 0 1.365.112a7.208 7.208 0 0 1 .724.155 5.632 5.632 0 0 1 .521.168zm31.575 0v-.885q0-.6-.18-1.102a2.496 2.496 0 0 0-.304-.595 2.211 2.211 0 0 0-.213-.26q-.338-.353-.81-.548a2.595 2.595 0 0 0-.764-.183 3.133 3.133 0 0 0-.279-.012 2.997 2.997 0 0 0-.665.078 4.035 4.035 0 0 0-.55.17 5.484 5.484 0 0 0-.771.37 6.956 6.956 0 0 0-.534.342l-.18-.24a7.87 7.87 0 0 1 .908-.538q.484-.241.932-.361a3.309 3.309 0 0 1 .86-.121 3.439 3.439 0 0 1 .726.074 2.886 2.886 0 0 1 .452.136q.532.21.9.6a2.63 2.63 0 0 1 .48.726 3.142 3.142 0 0 1 .09.219 3.31 3.31 0 0 1 .174.746 4.227 4.227 0 0 1 .028.499v4.305q0 .273.199.298a.336.336 0 0 0 .041.002v.3a1.414 1.414 0 0 1-.066-.001q-.109-.006-.144-.029a.461.461 0 0 1-.203-.161.603.603 0 0 1-.037-.056.689.689 0 0 1-.089-.317.823.823 0 0 1-.001-.036v-.72a3.491 3.491 0 0 1-1.276 1.026 4.133 4.133 0 0 1-.134.062 4.59 4.59 0 0 1-1.699.379 5.331 5.331 0 0 1-.191.003q-.525 0-.99-.187a2.565 2.565 0 0 1-.637-.367 2.354 2.354 0 0 1-.166-.143q-.337-.323-.532-.758t-.195-.93a1.818 1.818 0 0 1 .125-.678 1.729 1.729 0 0 1 .108-.222 2.055 2.055 0 0 1 .482-.564 2.492 2.492 0 0 1 .177-.133 3.074 3.074 0 0 1 .564-.302 4.011 4.011 0 0 1 .457-.156 4.468 4.468 0 0 1 .784-.142 5.519 5.519 0 0 1 .513-.023q.675 0 1.365.112a7.208 7.208 0 0 1 .724.155 5.632 5.632 0 0 1 .521.168zM17.25 9.795V0h.3v9.795a1.13 1.13 0 0 0 .038.301.826.826 0 0 0 .232.389.911.911 0 0 0 .45.229 1.323 1.323 0 0 0 .27.026q.126 0 .29-.022a3.771 3.771 0 0 0 .107-.016q.233-.037.428-.097l.105.24q-.161.057-.379.102a4.537 4.537 0 0 1-.139.025 4.567 4.567 0 0 1-.208.031q-.174.022-.309.022a1.329 1.329 0 0 1-.405-.059 1.078 1.078 0 0 1-.45-.278 1.136 1.136 0 0 1-.307-.614 1.609 1.609 0 0 1-.023-.279zM.3.6v5.865h4.14a2.425 2.425 0 0 0 .668-.089 2.108 2.108 0 0 0 .412-.166 2.652 2.652 0 0 0 .818-.668q.337-.412.517-.937.18-.525.18-1.08 0-.57-.21-1.095t-.577-.93q-.368-.405-.863-.652Q4.89.6 4.335.6H.3zm20.16 6.33h6.81a4.369 4.369 0 0 0-.189-1.059 3.911 3.911 0 0 0-.141-.381q-.285-.66-.743-1.132-.457-.473-1.057-.743-.6-.27-1.29-.27-.69 0-1.29.27-.6.27-1.058.75a3.57 3.57 0 0 0-.666.998 4.118 4.118 0 0 0-.061.142 4.359 4.359 0 0 0-.3 1.235 4.979 4.979 0 0 0-.015.19zm-6.015 1.875V7.26a6.97 6.97 0 0 0-2.089-.449 8.212 8.212 0 0 0-.521-.016 5.588 5.588 0 0 0-.628.034 4.234 4.234 0 0 0-.564.101q-.533.135-.915.39-.383.255-.593.607a1.503 1.503 0 0 0-.21.758 1.784 1.784 0 0 0 0 .03q0 .435.172.817.173.383.473.668.3.285.705.443a2.354 2.354 0 0 0 .783.156 2.697 2.697 0 0 0 .087.001 4.687 4.687 0 0 0 1.189-.146 4.098 4.098 0 0 0 .648-.229 3.389 3.389 0 0 0 .626-.361 2.445 2.445 0 0 0 .612-.644 1.405 1.405 0 0 0 .137-.234q.088-.193.088-.381zm31.575 0V7.26a6.97 6.97 0 0 0-2.089-.449 8.212 8.212 0 0 0-.521-.016 5.588 5.588 0 0 0-.628.034 4.234 4.234 0 0 0-.564.101q-.533.135-.915.39-.383.255-.593.607a1.503 1.503 0 0 0-.21.758 1.784 1.784 0 0 0 0 .03q0 .435.173.817.172.383.472.668.3.285.705.443a2.354 2.354 0 0 0 .783.156 2.697 2.697 0 0 0 .087.001 4.687 4.687 0 0 0 1.189-.146 4.098 4.098 0 0 0 .648-.229 3.389 3.389 0 0 0 .626-.361 2.445 2.445 0 0 0 .612-.644 1.405 1.405 0 0 0 .137-.234q.088-.193.088-.381z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    y.defaultProps = {
        width: "54.945",
        height: "14.295",
        viewBox: "0 0 54.945 14.295"
    };
    var O = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Roboto"), Object(o.createElement)("path", {
            d: "M6.929 11.25L4.094 6.687H.396v4.563H0V.586h3.398a5.034 5.034 0 0 1 1.063.106q.688.148 1.21.505a2.998 2.998 0 0 1 .28.217 2.719 2.719 0 0 1 .923 1.798 3.855 3.855 0 0 1 .025.45 2.898 2.898 0 0 1-.677 1.908q-.678.817-1.725 1.014l2.849 4.563v.103h-.417zm17.029-4.014v.125a6.975 6.975 0 0 1-.095 1.184q-.18 1.044-.704 1.76a2.638 2.638 0 0 1-.909.801q-.513.268-1.156.289a3.389 3.389 0 0 1-.11.001 3.697 3.697 0 0 1-.92-.11 3.1 3.1 0 0 1-.677-.259 2.792 2.792 0 0 1-1.106-1.029v1.252h-.395V0h.395v4.768a3.223 3.223 0 0 1 .519-.725 2.722 2.722 0 0 1 .584-.461 2.916 2.916 0 0 1 1.142-.377 3.694 3.694 0 0 1 .443-.026 2.912 2.912 0 0 1 1.033.176 2.557 2.557 0 0 1 1.157.889q.632.844.764 2.228a8.084 8.084 0 0 1 .035.764zm10.891-6.049h.402v2.138h1.802v.403h-1.802v5.625a4.122 4.122 0 0 0 .022.439q.049.45.204.727a1.067 1.067 0 0 0 .049.079q.255.374.83.401a1.941 1.941 0 0 0 .089.002 3.983 3.983 0 0 0 .262-.009q.142-.01.305-.029a8.473 8.473 0 0 0 .217-.028l.066.374q-.242.087-.828.087a2.454 2.454 0 0 1-.447-.037q-.249-.047-.44-.149a1.092 1.092 0 0 1-.351-.293 1.482 1.482 0 0 1-.221-.416q-.139-.392-.157-.967a5.475 5.475 0 0 1-.002-.13V3.728h-1.465v-.403h1.465V1.187zM9.045 7.485v-.351a5.08 5.08 0 0 1 .134-1.189 4.229 4.229 0 0 1 .302-.851 3.475 3.475 0 0 1 .737-1.025 3.246 3.246 0 0 1 .494-.385 3.252 3.252 0 0 1 1.673-.503 3.909 3.909 0 0 1 .125-.002 3.463 3.463 0 0 1 1.192.201 3.2 3.2 0 0 1 .595.289 3.268 3.268 0 0 1 1.146 1.223 3.967 3.967 0 0 1 .088.169 4.398 4.398 0 0 1 .419 1.478 5.418 5.418 0 0 1 .031.551v.351a5.179 5.179 0 0 1-.122 1.146 4.225 4.225 0 0 1-.31.898 3.434 3.434 0 0 1-.765 1.052 3.248 3.248 0 0 1-.461.354 3.252 3.252 0 0 1-1.674.504 3.909 3.909 0 0 1-.125.001 3.457 3.457 0 0 1-1.2-.204 3.197 3.197 0 0 1-.598-.294 3.309 3.309 0 0 1-1.177-1.284 3.962 3.962 0 0 1-.057-.111 4.393 4.393 0 0 1-.416-1.471 5.398 5.398 0 0 1-.031-.547zm16.465 0v-.351a5.08 5.08 0 0 1 .134-1.189 4.229 4.229 0 0 1 .302-.851 3.475 3.475 0 0 1 .737-1.025 3.246 3.246 0 0 1 .494-.385 3.252 3.252 0 0 1 1.673-.503 3.909 3.909 0 0 1 .125-.002 3.463 3.463 0 0 1 1.192.201 3.2 3.2 0 0 1 .595.289 3.268 3.268 0 0 1 1.146 1.223 3.967 3.967 0 0 1 .088.169 4.398 4.398 0 0 1 .419 1.478 5.418 5.418 0 0 1 .031.551v.351a5.179 5.179 0 0 1-.122 1.146 4.225 4.225 0 0 1-.31.898 3.434 3.434 0 0 1-.765 1.052 3.248 3.248 0 0 1-.462.354 3.252 3.252 0 0 1-1.673.504 3.909 3.909 0 0 1-.125.001 3.457 3.457 0 0 1-1.2-.204 3.197 3.197 0 0 1-.598-.294 3.309 3.309 0 0 1-1.178-1.284 3.962 3.962 0 0 1-.056-.111 4.393 4.393 0 0 1-.416-1.471 5.398 5.398 0 0 1-.031-.547zm12.854 0v-.351a5.08 5.08 0 0 1 .134-1.189 4.229 4.229 0 0 1 .302-.851 3.475 3.475 0 0 1 .737-1.025 3.246 3.246 0 0 1 .494-.385 3.252 3.252 0 0 1 1.673-.503 3.909 3.909 0 0 1 .125-.002 3.463 3.463 0 0 1 1.192.201 3.2 3.2 0 0 1 .595.289 3.268 3.268 0 0 1 1.146 1.223 3.967 3.967 0 0 1 .088.169 4.398 4.398 0 0 1 .419 1.478 5.418 5.418 0 0 1 .031.551v.351a5.179 5.179 0 0 1-.122 1.146 4.225 4.225 0 0 1-.31.898 3.434 3.434 0 0 1-.765 1.052 3.248 3.248 0 0 1-.462.354 3.252 3.252 0 0 1-1.673.504 3.909 3.909 0 0 1-.125.001 3.457 3.457 0 0 1-1.2-.204 3.197 3.197 0 0 1-.598-.294 3.309 3.309 0 0 1-1.178-1.284 3.962 3.962 0 0 1-.056-.111 4.393 4.393 0 0 1-.416-1.471 5.398 5.398 0 0 1-.031-.547zM9.441 7.207v.234a4.34 4.34 0 0 0 .181 1.268 3.919 3.919 0 0 0 .211.545q.392.824 1.091 1.286a2.802 2.802 0 0 0 1.433.457 3.412 3.412 0 0 0 .167.004 2.929 2.929 0 0 0 1.16-.224 2.788 2.788 0 0 0 1.049-.794 3.57 3.57 0 0 0 .757-1.611 5.064 5.064 0 0 0 .096-1.011v-.227q0-.974-.396-1.802a3.339 3.339 0 0 0-.572-.85 2.956 2.956 0 0 0-.523-.443 2.793 2.793 0 0 0-1.558-.465 3.359 3.359 0 0 0-.027 0 2.886 2.886 0 0 0-1.196.243 2.816 2.816 0 0 0-1.016.79 3.67 3.67 0 0 0-.793 1.783 5.02 5.02 0 0 0-.064.817zm16.465 0v.234a4.34 4.34 0 0 0 .181 1.268 3.919 3.919 0 0 0 .211.545q.391.824 1.091 1.286a2.802 2.802 0 0 0 1.433.457 3.412 3.412 0 0 0 .167.004 2.929 2.929 0 0 0 1.16-.224 2.788 2.788 0 0 0 1.049-.794 3.57 3.57 0 0 0 .756-1.611 5.064 5.064 0 0 0 .097-1.011v-.227q0-.974-.396-1.802a3.339 3.339 0 0 0-.572-.85 2.956 2.956 0 0 0-.523-.443 2.793 2.793 0 0 0-1.558-.465 3.359 3.359 0 0 0-.027 0 2.886 2.886 0 0 0-1.196.243 2.816 2.816 0 0 0-1.016.79 3.67 3.67 0 0 0-.793 1.783 5.02 5.02 0 0 0-.064.817zm12.854 0v.234a4.34 4.34 0 0 0 .181 1.268 3.919 3.919 0 0 0 .211.545q.391.824 1.091 1.286a2.802 2.802 0 0 0 1.433.457 3.412 3.412 0 0 0 .167.004 2.929 2.929 0 0 0 1.16-.224 2.788 2.788 0 0 0 1.049-.794 3.57 3.57 0 0 0 .756-1.611 5.064 5.064 0 0 0 .097-1.011v-.227q0-.974-.396-1.802a3.339 3.339 0 0 0-.572-.85 2.956 2.956 0 0 0-.523-.443 2.793 2.793 0 0 0-1.558-.465 3.359 3.359 0 0 0-.027 0 2.886 2.886 0 0 0-1.196.243 2.816 2.816 0 0 0-1.016.79 3.67 3.67 0 0 0-.793 1.783 5.02 5.02 0 0 0-.064.817zM18.281 5.61v3.633a2.792 2.792 0 0 0 .458.806 2.485 2.485 0 0 0 .549.494 2.688 2.688 0 0 0 .962.388 3.744 3.744 0 0 0 .741.07 2.443 2.443 0 0 0 .871-.149q.613-.232 1.019-.825a3.295 3.295 0 0 0 .419-.894q.131-.426.193-.943a8.326 8.326 0 0 0 .054-.983 7.006 7.006 0 0 0-.066-.994q-.145-1.013-.611-1.676-.678-.963-1.893-.963a3.216 3.216 0 0 0-.827.102 2.516 2.516 0 0 0-.862.411 2.561 2.561 0 0 0-.703.81 3.643 3.643 0 0 0-.304.713zM.396.981v5.311h3.361a3.3 3.3 0 0 0 .89-.114 2.494 2.494 0 0 0 1.099-.634 2.512 2.512 0 0 0 .756-1.776 3.321 3.321 0 0 0 .002-.106 2.979 2.979 0 0 0-.118-.86 2.292 2.292 0 0 0-.721-1.103 2.825 2.825 0 0 0-1.1-.57q-.417-.115-.912-.14a5.558 5.558 0 0 0-.284-.008H.396z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    O.defaultProps = {
        width: "45.3",
        height: "11.397",
        viewBox: "0 0 45.3 11.397"
    };
    var k = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Roboto Condensed"), Object(o.createElement)("path", {
            d: "M50.757 7.925h.849a6.507 6.507 0 0 1-.134.981q-.113.51-.309.912a2.695 2.695 0 0 1-.523.74 2.8 2.8 0 0 1-1.317.721q-.442.11-.964.117a5.294 5.294 0 0 1-.07 0 3.281 3.281 0 0 1-1.148-.192 2.859 2.859 0 0 1-1.291-.976 4.064 4.064 0 0 1-.669-1.365q-.164-.574-.212-1.258a8.293 8.293 0 0 1-.02-.552V4.739a7.207 7.207 0 0 1 .098-1.228q.119-.687.382-1.237a3.594 3.594 0 0 1 .432-.692Q46.772.439 48.354.439a4.174 4.174 0 0 1 .943.101q.676.156 1.159.558a2.56 2.56 0 0 1 .213.198 2.904 2.904 0 0 1 .581.921q.17.415.263.93a6.973 6.973 0 0 1 .093.779h-.849a6.517 6.517 0 0 0-.1-.741q-.175-.882-.585-1.332a1.783 1.783 0 0 0-.795-.495q-.401-.128-.923-.128a2.593 2.593 0 0 0-.846.132 2.144 2.144 0 0 0-1.036.769q-.674.901-.674 2.615v2.285q0 1.699.652 2.644a2.153 2.153 0 0 0 .757.694q.411.22.931.247a2.855 2.855 0 0 0 .151.004 3.941 3.941 0 0 0 .645-.049q.343-.057.612-.18a1.623 1.623 0 0 0 .544-.393 2.013 2.013 0 0 0 .337-.54q.224-.513.307-1.286a7.75 7.75 0 0 0 .023-.247zM5.471 11.25L3.333 6.812H.842v4.438H0V.586h2.922q1.271 0 2.043.631a2.499 2.499 0 0 1 .217.2 2.74 2.74 0 0 1 .675 1.235q.127.487.127 1.076a3.624 3.624 0 0 1-.137 1.012 3.063 3.063 0 0 1-.361.801 2.587 2.587 0 0 1-1.34 1.08l2.219 4.534v.095h-.894zm55.408-7.925h.776l.022 1.26q.352-.645.897-1.025.546-.381 1.242-.381 2.073 0 2.124 2.761v5.31h-.806V6.028q-.007-1.062-.373-1.568-.366-.505-1.15-.505a1.59 1.59 0 0 0-1.017.367 2.106 2.106 0 0 0-.129.113 2.585 2.585 0 0 0-.484.631q-.158.285-.273.634a4.439 4.439 0 0 0-.016.05v5.5h-.813V3.325zm21.401 0h.777l.022 1.26q.351-.645.897-1.025.545-.381 1.241-.381 2.073 0 2.124 2.761v5.31h-.805V6.028q-.008-1.062-.374-1.568-.366-.505-1.15-.505a1.59 1.59 0 0 0-1.017.367 2.106 2.106 0 0 0-.129.113 2.585 2.585 0 0 0-.483.631q-.159.285-.274.634a4.439 4.439 0 0 0-.016.05v5.5h-.813V3.325zM94.241 5.5h-.813a1.614 1.614 0 0 0-.102-.581 1.461 1.461 0 0 0-.36-.535 1.566 1.566 0 0 0-.869-.419 2.177 2.177 0 0 0-.332-.025 2.279 2.279 0 0 0-.468.046q-.398.083-.671.321a1.188 1.188 0 0 0-.418.862 1.562 1.562 0 0 0-.003.09 1.144 1.144 0 0 0 .061.38.976.976 0 0 0 .261.396q.323.3 1.392.813a19.141 19.141 0 0 1 .51.231q.46.218.752.394a3.054 3.054 0 0 1 .261.173 2.6 2.6 0 0 1 .357.322 1.985 1.985 0 0 1 .273.378 1.668 1.668 0 0 1 .18.522 2.251 2.251 0 0 1 .033.39 2.285 2.285 0 0 1-.104.705 1.85 1.85 0 0 1-.577.855 2.353 2.353 0 0 1-1.006.494q-.351.082-.762.084a4.255 4.255 0 0 1-.027 0 3.524 3.524 0 0 1-.821-.09 2.483 2.483 0 0 1-1.087-.554q-.729-.645-.729-1.663h.821a2.027 2.027 0 0 0 .08.489 1.404 1.404 0 0 0 .414.658q.458.406 1.322.406a2.485 2.485 0 0 0 .499-.047q.315-.065.559-.217a1.46 1.46 0 0 0 .143-.102 1.172 1.172 0 0 0 .45-.853 1.535 1.535 0 0 0 .004-.121 1.137 1.137 0 0 0-.308-.78 1.585 1.585 0 0 0-.116-.117q-.425-.385-1.44-.843-1.014-.458-1.417-.761a2.495 2.495 0 0 1-.312-.277q-.174-.184-.281-.386a1.594 1.594 0 0 1-.159-.473 2.162 2.162 0 0 1-.032-.377 2.075 2.075 0 0 1 .16-.824 1.969 1.969 0 0 1 .5-.688q.659-.597 1.706-.597a3.239 3.239 0 0 1 .767.086 2.25 2.25 0 0 1 1.035.551 2.122 2.122 0 0 1 .654 1.337 2.954 2.954 0 0 1 .02.347zM20.859 6.782v.879a8.418 8.418 0 0 1-.056 1.01q-.062.509-.191.925a3.21 3.21 0 0 1-.393.848 2.069 2.069 0 0 1-1.51.927 2.999 2.999 0 0 1-.398.025 2.535 2.535 0 0 1-.921-.159q-.633-.245-1.04-.864a2.954 2.954 0 0 1-.112-.185l-.037 1.062h-.754V0h.805v4.431q.624-1.172 1.87-1.247a2.884 2.884 0 0 1 .174-.005 2.873 2.873 0 0 1 .771.097 2.003 2.003 0 0 1 1.141.807q.617.887.65 2.629a10.249 10.249 0 0 1 .001.07zm46.949.96v-.821q0-1.86.651-2.801.652-.941 1.934-.941 1.348 0 2.014 1.208V0h.813v11.25h-.762l-.036-1.018q-.597 1.043-1.757 1.152a2.979 2.979 0 0 1-.279.012 2.617 2.617 0 0 1-.823-.122 2.087 2.087 0 0 1-1.085-.83 3.313 3.313 0 0 1-.427-.905q-.235-.758-.243-1.797zm34.958 0v-.821q0-1.86.652-2.801.652-.941 1.934-.941 1.347 0 2.014 1.208V0h.813v11.25h-.762l-.037-1.018q-.596 1.043-1.757 1.152a2.979 2.979 0 0 1-.279.012 2.617 2.617 0 0 1-.823-.122 2.087 2.087 0 0 1-1.085-.83 3.313 3.313 0 0 1-.427-.905q-.234-.758-.243-1.797zm-27.729.132v-.967q0-1.743.761-2.736a2.442 2.442 0 0 1 1.771-.977 3.314 3.314 0 0 1 .324-.015 3.139 3.139 0 0 1 .81.098 2.157 2.157 0 0 1 1.157.744 2.664 2.664 0 0 1 .428.794q.254.724.264 1.776a8.788 8.788 0 0 1 0 .008v.762h-4.71v.447a5.145 5.145 0 0 0 .057.79q.066.425.21.768a2.324 2.324 0 0 0 .316.544 1.895 1.895 0 0 0 1.324.721 2.752 2.752 0 0 0 .32.018 2.602 2.602 0 0 0 .94-.164 2.345 2.345 0 0 0 .957-.693l.425.542a2.509 2.509 0 0 1-1.613.995 3.916 3.916 0 0 1-.746.067 3.43 3.43 0 0 1-.945-.123 2.528 2.528 0 0 1-1.245-.792q-.657-.761-.778-2.057a6.516 6.516 0 0 1-.027-.55zm20.778 0v-.967q0-1.743.762-2.736a2.442 2.442 0 0 1 1.771-.977 3.314 3.314 0 0 1 .324-.015 3.139 3.139 0 0 1 .81.098 2.157 2.157 0 0 1 1.156.744 2.664 2.664 0 0 1 .429.794q.254.724.263 1.776a8.788 8.788 0 0 1 .001.008v.762h-4.71v.447a5.145 5.145 0 0 0 .057.79q.066.425.209.768a2.324 2.324 0 0 0 .316.544 1.895 1.895 0 0 0 1.324.721 2.752 2.752 0 0 0 .321.018 2.602 2.602 0 0 0 .94-.164 2.345 2.345 0 0 0 .957-.693l.424.542a2.509 2.509 0 0 1-1.612.995 3.916 3.916 0 0 1-.746.067 3.43 3.43 0 0 1-.945-.123 2.528 2.528 0 0 1-1.245-.792q-.657-.761-.778-2.057a6.516 6.516 0 0 1-.028-.55zm-65.302-6.57h.813v2.021h1.355v.733h-1.355v5.266q0 .652.194.97a.637.637 0 0 0 .437.299 1.051 1.051 0 0 0 .211.02q.164 0 .461-.051a7.463 7.463 0 0 0 .125-.022l.022.732a1.165 1.165 0 0 1-.214.07q-.239.054-.584.054a1.456 1.456 0 0 1-.694-.155q-.594-.316-.731-1.276a4.333 4.333 0 0 1-.04-.531V4.058H29.29v-.733h1.223V1.304zM7.778 7.822v-.937q0-1.292.441-2.176a3.163 3.163 0 0 1 .336-.534 2.491 2.491 0 0 1 1.82-.984 3.366 3.366 0 0 1 .296-.012 2.971 2.971 0 0 1 .966.149 2.461 2.461 0 0 1 1.155.832 3.355 3.355 0 0 1 .569 1.124q.142.475.189 1.043a6.954 6.954 0 0 1 .022.536v.842q0 1.249-.401 2.103a3.047 3.047 0 0 1-.379.614 2.509 2.509 0 0 1-1.822.963 3.38 3.38 0 0 1-.284.011 2.973 2.973 0 0 1-.969-.151 2.479 2.479 0 0 1-1.133-.801q-.667-.818-.783-2.166a6.722 6.722 0 0 1-.023-.456zm14.656 0v-.937q0-1.292.441-2.176a3.163 3.163 0 0 1 .335-.534 2.491 2.491 0 0 1 1.821-.984 3.366 3.366 0 0 1 .296-.012 2.971 2.971 0 0 1 .965.149 2.461 2.461 0 0 1 1.156.832 3.355 3.355 0 0 1 .568 1.124q.143.475.189 1.043a6.954 6.954 0 0 1 .023.536v.842q0 1.249-.401 2.103a3.047 3.047 0 0 1-.379.614 2.509 2.509 0 0 1-1.823.963 3.38 3.38 0 0 1-.283.011 2.973 2.973 0 0 1-.969-.151 2.479 2.479 0 0 1-1.133-.801q-.667-.818-.783-2.166a6.722 6.722 0 0 1-.023-.456zm11.565 0v-.937q0-1.292.441-2.176a3.163 3.163 0 0 1 .335-.534 2.491 2.491 0 0 1 1.821-.984 3.366 3.366 0 0 1 .296-.012 2.971 2.971 0 0 1 .965.149 2.461 2.461 0 0 1 1.155.832 3.355 3.355 0 0 1 .569 1.124q.143.475.189 1.043a6.954 6.954 0 0 1 .022.536v.842q0 1.249-.4 2.103a3.047 3.047 0 0 1-.38.614 2.509 2.509 0 0 1-1.822.963 3.38 3.38 0 0 1-.283.011 2.973 2.973 0 0 1-.969-.151 2.479 2.479 0 0 1-1.133-.801q-.668-.818-.783-2.166a6.722 6.722 0 0 1-.023-.456zm19.211 0v-.937q0-1.292.441-2.176a3.163 3.163 0 0 1 .336-.534 2.491 2.491 0 0 1 1.82-.984 3.366 3.366 0 0 1 .297-.012 2.971 2.971 0 0 1 .965.149 2.461 2.461 0 0 1 1.155.832 3.355 3.355 0 0 1 .569 1.124q.142.475.189 1.043a6.954 6.954 0 0 1 .022.536v.842q0 1.249-.401 2.103a3.047 3.047 0 0 1-.379.614 2.509 2.509 0 0 1-1.822.963 3.38 3.38 0 0 1-.284.011 2.973 2.973 0 0 1-.969-.151 2.479 2.479 0 0 1-1.133-.801q-.667-.818-.783-2.166a6.722 6.722 0 0 1-.023-.456zM8.599 6.826v.879q0 1.37.553 2.153.52.739 1.421.781a2.368 2.368 0 0 0 .113.003q1.003 0 1.534-.754a2.577 2.577 0 0 0 .345-.721q.189-.605.194-1.44v-.842a5.469 5.469 0 0 0-.06-.836q-.069-.446-.218-.808a2.582 2.582 0 0 0-.279-.513 1.869 1.869 0 0 0-.59-.552q-.37-.213-.842-.234a2.334 2.334 0 0 0-.099-.002 1.86 1.86 0 0 0-.776.158q-.388.176-.677.547a2.294 2.294 0 0 0-.048.064 2.717 2.717 0 0 0-.393.816q-.17.564-.178 1.301zm14.655 0v.879q0 1.37.553 2.153.521.739 1.422.781a2.368 2.368 0 0 0 .113.003q1.003 0 1.534-.754a2.577 2.577 0 0 0 .345-.721q.189-.605.194-1.44v-.842a5.469 5.469 0 0 0-.06-.836q-.069-.446-.218-.808a2.582 2.582 0 0 0-.279-.513 1.869 1.869 0 0 0-.59-.552q-.37-.213-.842-.234a2.334 2.334 0 0 0-.099-.002 1.86 1.86 0 0 0-.776.158q-.388.176-.677.547a2.294 2.294 0 0 0-.048.064 2.717 2.717 0 0 0-.393.816q-.171.564-.179 1.301zm11.565 0v.879q0 1.37.553 2.153.521.739 1.422.781a2.368 2.368 0 0 0 .113.003q1.003 0 1.534-.754a2.577 2.577 0 0 0 .345-.721q.189-.605.193-1.44v-.842a5.469 5.469 0 0 0-.059-.836q-.069-.446-.218-.808a2.582 2.582 0 0 0-.279-.513 1.869 1.869 0 0 0-.59-.552q-.37-.213-.842-.234a2.334 2.334 0 0 0-.099-.002 1.86 1.86 0 0 0-.776.158q-.388.176-.677.547a2.294 2.294 0 0 0-.048.064 2.717 2.717 0 0 0-.394.816q-.17.564-.178 1.301zm19.212 0v.879q0 1.37.553 2.153.521.739 1.422.781a2.368 2.368 0 0 0 .112.003q1.004 0 1.535-.754a2.577 2.577 0 0 0 .345-.721q.189-.605.193-1.44v-.842a5.469 5.469 0 0 0-.06-.836q-.069-.446-.218-.808a2.582 2.582 0 0 0-.279-.513 1.869 1.869 0 0 0-.59-.552q-.37-.213-.842-.234a2.334 2.334 0 0 0-.098-.002 1.86 1.86 0 0 0-.777.158q-.388.176-.677.547a2.294 2.294 0 0 0-.048.064 2.717 2.717 0 0 0-.393.816q-.17.564-.178 1.301zm-33.985.886v-.791q0-1.508-.446-2.233A1.467 1.467 0 0 0 18.567 4a2.377 2.377 0 0 0-.432-.038 1.955 1.955 0 0 0-.88.191q-.668.331-1.003 1.238v3.925a2.348 2.348 0 0 0 .305.549 1.924 1.924 0 0 0 .428.415q.483.34 1.164.34a2.109 2.109 0 0 0 .578-.074 1.464 1.464 0 0 0 .854-.633 2.314 2.314 0 0 0 .257-.563q.204-.645.208-1.638zm48.589-.842v.791a8.066 8.066 0 0 0 .036.791q.079.794.329 1.286a1.927 1.927 0 0 0 .093.164 1.5 1.5 0 0 0 1.085.691 2.371 2.371 0 0 0 .369.027 2.079 2.079 0 0 0 .86-.171q.484-.217.809-.709a2.773 2.773 0 0 0 .191-.343V5.288a2.619 2.619 0 0 0-.38-.656q-.537-.659-1.444-.669a2.539 2.539 0 0 0-.029-.001q-.996 0-1.454.711-.457.71-.465 2.197zm34.959 0v.791a8.066 8.066 0 0 0 .036.791q.078.794.328 1.286a1.927 1.927 0 0 0 .094.164 1.5 1.5 0 0 0 1.085.691 2.371 2.371 0 0 0 .368.027 2.079 2.079 0 0 0 .861-.171q.483-.217.808-.709a2.773 2.773 0 0 0 .192-.343V5.288a2.619 2.619 0 0 0-.381-.656q-.537-.659-1.443-.669a2.539 2.539 0 0 0-.029-.001q-.996 0-1.454.711-.458.71-.465 2.197zM.842 1.377v4.658h2.227a2.226 2.226 0 0 0 .692-.103 1.808 1.808 0 0 0 .817-.545 2.26 2.26 0 0 0 .519-1.119 3.138 3.138 0 0 0 .045-.54 3.452 3.452 0 0 0-.063-.681q-.083-.411-.275-.728a1.877 1.877 0 0 0-.248-.327q-.586-.615-1.641-.615H.842zM75.85 6.599h3.889v-.212a4.939 4.939 0 0 0-.095-.892q-.317-1.511-1.673-1.553a2.529 2.529 0 0 0-.078-.002 2.165 2.165 0 0 0-.632.088 1.637 1.637 0 0 0-.844.59 2.36 2.36 0 0 0-.342.653q-.11.311-.167.692a5.791 5.791 0 0 0-.058.636zm20.778 0h3.89v-.212a4.939 4.939 0 0 0-.095-.892q-.318-1.511-1.673-1.553a2.529 2.529 0 0 0-.078-.002 2.165 2.165 0 0 0-.633.088 1.637 1.637 0 0 0-.843.59 2.36 2.36 0 0 0-.342.653q-.11.311-.167.692a5.791 5.791 0 0 0-.059.636z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    k.defaultProps = {
        width: "108.179",
        height: "11.397",
        viewBox: "0 0 108.179 11.397"
    };
    var j = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Roboto Slab"), Object(o.createElement)("path", {
            d: "M59.414 2.263V3.94h-.395V2.446a2.978 2.978 0 0 0-1.257-1.076 3.791 3.791 0 0 0-.947-.291q-.429-.076-.917-.076a5.25 5.25 0 0 0-.925.077q-.815.146-1.371.572a2.501 2.501 0 0 0-.479.473 1.753 1.753 0 0 0-.367 1.083 1.891 1.891 0 0 0 .595 1.413 2.368 2.368 0 0 0 .105.096 2.89 2.89 0 0 0 .483.327q.731.405 2.047.742a12.906 12.906 0 0 1 1.023.313q.998.355 1.613.803a3.782 3.782 0 0 1 .041.03 2.194 2.194 0 0 1 .89 1.611 3.147 3.147 0 0 1 .015.312 2.484 2.484 0 0 1-.194.998q-.254.585-.839.998a3.872 3.872 0 0 1-1.452.617 5.489 5.489 0 0 1-1.133.112 5.42 5.42 0 0 1-2.055-.4 3.853 3.853 0 0 1-1.637-1.248V8.174h.396v1.589q.571.747 1.457 1.084a5.131 5.131 0 0 0 1.839.337 5.037 5.037 0 0 0 1.003-.094q.749-.153 1.307-.55a2.352 2.352 0 0 0 .543-.525 1.892 1.892 0 0 0 .362-1.145 2.204 2.204 0 0 0-.131-.774 1.928 1.928 0 0 0-.605-.83 3.323 3.323 0 0 0-.5-.33q-.747-.411-2.053-.769-1.604-.432-2.452-.969a3.618 3.618 0 0 1-.217-.148 2.034 2.034 0 0 1-.821-1.431 3.027 3.027 0 0 1-.025-.396 2.29 2.29 0 0 1 .234-1.043q.225-.449.668-.792a2.986 2.986 0 0 1 .094-.07q.996-.71 2.541-.71a5.892 5.892 0 0 1 1.043.088 4.345 4.345 0 0 1 1.056.326 3.24 3.24 0 0 1 1.417 1.241zM1.194.769h3.032a6.275 6.275 0 0 1 .977.071q.523.083.944.261a2.835 2.835 0 0 1 .672.397 2.356 2.356 0 0 1 .844 1.432 3.589 3.589 0 0 1 .064.695q0 .901-.575 1.637a2.588 2.588 0 0 1-1.343.898 3.327 3.327 0 0 1-.228.058q.775.134 1.254.47a1.801 1.801 0 0 1 .394.373A2.319 2.319 0 0 1 7.656 8a3.332 3.332 0 0 1 .071.708v1.077a2.946 2.946 0 0 0 .017.329q.04.353.172.567a.811.811 0 0 0 .027.042.702.702 0 0 0 .513.3 1.049 1.049 0 0 0 .128.007h.374v.396h-.374a1.63 1.63 0 0 1-.365-.038q-.422-.097-.616-.442a2.004 2.004 0 0 1-.212-.571q-.052-.244-.059-.524a3.477 3.477 0 0 1 0-.08V8.723a2.531 2.531 0 0 0-.103-.739 1.933 1.933 0 0 0-.641-.953 2.445 2.445 0 0 0-.82-.431q-.349-.11-.769-.152a5.425 5.425 0 0 0-.531-.025H1.589v4.615h1.194v.395H0v-.395h1.194V1.165H0V.769h1.194zm71.14 10.657h-1.296a31.858 31.858 0 0 1-.044-.244q-.037-.213-.061-.369a7.025 7.025 0 0 1-.024-.167 4.136 4.136 0 0 1-.028-.341 5.073 5.073 0 0 1-.005-.22v-.117a3.337 3.337 0 0 1-.971.979 4.081 4.081 0 0 1-.299.182 3.559 3.559 0 0 1-1.134.387 4.722 4.722 0 0 1-.789.064q-.971 0-1.578-.466a1.992 1.992 0 0 1-.154-.131 1.987 1.987 0 0 1-.621-1.299 2.729 2.729 0 0 1-.013-.265 1.966 1.966 0 0 1 .694-1.523 2.858 2.858 0 0 1 .281-.22 3.491 3.491 0 0 1 1.059-.484q.47-.131 1.029-.171a7.222 7.222 0 0 1 .526-.019h1.97V5.845a2.474 2.474 0 0 0-.081-.655 1.771 1.771 0 0 0-.552-.887 2.088 2.088 0 0 0-.784-.421q-.438-.132-1-.132a4.739 4.739 0 0 0-1.012.105 4.178 4.178 0 0 0-.397.107 3.845 3.845 0 0 0-.642.272 3.068 3.068 0 0 0-.475.314l-.008 1.267h-.395l.007-1.508q.564-.418 1.329-.685a4.796 4.796 0 0 1 1.593-.268q1.109 0 1.835.488a2.459 2.459 0 0 1 .209.157 2.087 2.087 0 0 1 .707 1.218 3.175 3.175 0 0 1 .062.642v3.97a7.144 7.144 0 0 0 .026.608 5.338 5.338 0 0 0 .084.593h.952v.396zm-47.197-3.97v.154q0 1.36-.437 2.3a3.448 3.448 0 0 1-.354.6q-.791 1.07-2.183 1.07a3.902 3.902 0 0 1-.817-.082 2.946 2.946 0 0 1-.82-.303 2.828 2.828 0 0 1-1.08-1.036l-.051 1.267h-.33V.396h-1.194V0h1.589v4.944a3.081 3.081 0 0 1 .827-.994 2.999 2.999 0 0 1 .243-.171 2.717 2.717 0 0 1 1.001-.374 3.652 3.652 0 0 1 .617-.051q1.399 0 2.194 1.11a3.922 3.922 0 0 1 .577 1.233q.15.532.196 1.164a8.065 8.065 0 0 1 .022.595zm54.917 0v.154q0 1.36-.437 2.3a3.448 3.448 0 0 1-.354.6q-.791 1.07-2.183 1.07a3.902 3.902 0 0 1-.817-.082 2.946 2.946 0 0 1-.82-.303 2.828 2.828 0 0 1-1.08-1.036l-.051 1.267h-.33V.396h-1.194V0h1.589v4.944a3.081 3.081 0 0 1 .827-.994 2.999 2.999 0 0 1 .243-.171 2.717 2.717 0 0 1 1.001-.374 3.652 3.652 0 0 1 .617-.051q1.399 0 2.194 1.11a3.922 3.922 0 0 1 .577 1.233q.15.532.196 1.164a8.065 8.065 0 0 1 .022.595zM36.299 1.362h.403v2.139h1.948v.403h-1.948v5.478a4.549 4.549 0 0 0 .023.478q.051.482.214.773a1.029 1.029 0 0 0 .092.137q.33.414.872.414.234 0 .417-.015a8.199 8.199 0 0 0 .101-.008l.261-.027a29.36 29.36 0 0 0 .144-.016l.073.359a2.761 2.761 0 0 1-.451.081q-.215.02-.485.021a7.656 7.656 0 0 1-.038.001 1.949 1.949 0 0 1-.493-.059 1.318 1.318 0 0 1-.719-.461q-.414-.52-.414-1.678V3.904h-1.465v-.403h1.465V1.362zM62.095.396h-1.194V0h1.589v11.03h1.194v.396h-2.783v-.396h1.194V.396zM10.232 7.617V7.31a5.17 5.17 0 0 1 .147-1.265 3.779 3.779 0 0 1 .816-1.585 3.124 3.124 0 0 1 2.264-1.099 4.099 4.099 0 0 1 .237-.007 3.509 3.509 0 0 1 1.241.212 3.117 3.117 0 0 1 1.268.894 3.846 3.846 0 0 1 .877 1.865 5.401 5.401 0 0 1 .086.985v.307a5.204 5.204 0 0 1-.147 1.269 3.778 3.778 0 0 1-.816 1.588 3.118 3.118 0 0 1-2.258 1.099 4.062 4.062 0 0 1-.236.007 3.505 3.505 0 0 1-1.262-.22 3.134 3.134 0 0 1-1.25-.886 3.837 3.837 0 0 1-.877-1.85 5.403 5.403 0 0 1-.09-1.007zm16.428 0V7.31a5.17 5.17 0 0 1 .147-1.265 3.779 3.779 0 0 1 .816-1.585 3.124 3.124 0 0 1 2.265-1.099 4.099 4.099 0 0 1 .237-.007 3.509 3.509 0 0 1 1.24.212 3.117 3.117 0 0 1 1.268.894 3.846 3.846 0 0 1 .877 1.865 5.401 5.401 0 0 1 .086.985v.307a5.204 5.204 0 0 1-.147 1.269 3.778 3.778 0 0 1-.816 1.588 3.118 3.118 0 0 1-2.258 1.099 4.062 4.062 0 0 1-.236.007 3.505 3.505 0 0 1-1.261-.22 3.134 3.134 0 0 1-1.251-.886 3.837 3.837 0 0 1-.877-1.85 5.403 5.403 0 0 1-.09-1.007zm13.579 0V7.31a5.17 5.17 0 0 1 .147-1.265 3.779 3.779 0 0 1 .816-1.585 3.124 3.124 0 0 1 2.265-1.099 4.099 4.099 0 0 1 .237-.007 3.509 3.509 0 0 1 1.24.212 3.117 3.117 0 0 1 1.268.894 3.846 3.846 0 0 1 .877 1.865 5.401 5.401 0 0 1 .086.985v.307a5.204 5.204 0 0 1-.147 1.269 3.778 3.778 0 0 1-.816 1.588 3.118 3.118 0 0 1-2.258 1.099 4.062 4.062 0 0 1-.236.007 3.505 3.505 0 0 1-1.261-.22 3.134 3.134 0 0 1-1.251-.886 3.837 3.837 0 0 1-.877-1.85 5.403 5.403 0 0 1-.09-1.007zM10.627 7.31v.307a4.437 4.437 0 0 0 .178 1.28 3.642 3.642 0 0 0 .657 1.251 2.69 2.69 0 0 0 1.968 1.025 3.63 3.63 0 0 0 .281.011 3.009 3.009 0 0 0 1.075-.185 2.685 2.685 0 0 0 1.151-.855 3.778 3.778 0 0 0 .811-2.029 4.916 4.916 0 0 0 .024-.498V7.31a4.217 4.217 0 0 0-.223-1.395 3.73 3.73 0 0 0-.619-1.114 2.685 2.685 0 0 0-1.957-1.04 3.477 3.477 0 0 0-.277-.011 3.004 3.004 0 0 0-1.08.187 2.684 2.684 0 0 0-1.154.864 3.838 3.838 0 0 0-.825 2.195 4.868 4.868 0 0 0-.01.314zm16.429 0v.307a4.437 4.437 0 0 0 .177 1.28 3.642 3.642 0 0 0 .658 1.251 2.69 2.69 0 0 0 1.967 1.025 3.63 3.63 0 0 0 .281.011 3.009 3.009 0 0 0 1.075-.185 2.685 2.685 0 0 0 1.152-.855 3.778 3.778 0 0 0 .81-2.029 4.916 4.916 0 0 0 .025-.498V7.31a4.217 4.217 0 0 0-.224-1.395 3.73 3.73 0 0 0-.619-1.114 2.685 2.685 0 0 0-1.956-1.04 3.477 3.477 0 0 0-.277-.011 3.004 3.004 0 0 0-1.08.187 2.684 2.684 0 0 0-1.154.864 3.838 3.838 0 0 0-.825 2.195 4.868 4.868 0 0 0-.01.314zm13.579 0v.307a4.437 4.437 0 0 0 .177 1.28 3.642 3.642 0 0 0 .658 1.251 2.69 2.69 0 0 0 1.967 1.025 3.63 3.63 0 0 0 .281.011 3.009 3.009 0 0 0 1.075-.185 2.685 2.685 0 0 0 1.152-.855 3.778 3.778 0 0 0 .81-2.029 4.916 4.916 0 0 0 .025-.498V7.31a4.217 4.217 0 0 0-.224-1.395 3.73 3.73 0 0 0-.619-1.114 2.685 2.685 0 0 0-1.956-1.04 3.477 3.477 0 0 0-.277-.011 3.004 3.004 0 0 0-1.08.187 2.684 2.684 0 0 0-1.154.864 3.838 3.838 0 0 0-.825 2.195 4.868 4.868 0 0 0-.01.314zm-15.908.3v-.154a6.745 6.745 0 0 0-.086-1.104q-.151-.914-.574-1.573a2.246 2.246 0 0 0-.683-.699q-.438-.278-1.011-.322a2.868 2.868 0 0 0-.217-.008 3.652 3.652 0 0 0-.703.063q-.414.082-.736.267a1.929 1.929 0 0 0-.352.26 3.296 3.296 0 0 0-.905 1.446v3.633q.286.806.971 1.285.685.48 1.739.48 1.253 0 1.905-.967a3.48 3.48 0 0 0 .457-1.014q.128-.457.172-1a7.355 7.355 0 0 0 .023-.593zm54.917 0v-.154a6.745 6.745 0 0 0-.086-1.104q-.151-.914-.574-1.573a2.246 2.246 0 0 0-.683-.699q-.438-.278-1.011-.322a2.868 2.868 0 0 0-.217-.008 3.652 3.652 0 0 0-.703.063q-.414.082-.736.267a1.929 1.929 0 0 0-.352.26 3.296 3.296 0 0 0-.905 1.446v3.633q.286.806.971 1.285.685.48 1.739.48 1.253 0 1.905-.967a3.48 3.48 0 0 0 .457-1.014q.128-.457.172-1a7.355 7.355 0 0 0 .023-.593zM1.589 1.165v4.863h2.564a6.149 6.149 0 0 0 .872-.058q.984-.141 1.534-.631a2.281 2.281 0 0 0 .603-.826 2.28 2.28 0 0 0 .17-.888 2.912 2.912 0 0 0-.093-.754 2.018 2.018 0 0 0-.687-1.073q-.781-.633-2.326-.633H1.589zm69.287 8.122V7.405h-1.948a6.104 6.104 0 0 0-.933.067q-.826.128-1.403.5a2.253 2.253 0 0 0-.48.407 1.576 1.576 0 0 0-.399 1.069 1.618 1.618 0 0 0 .492 1.194 1.966 1.966 0 0 0 .05.048 1.842 1.842 0 0 0 .908.452 2.634 2.634 0 0 0 .52.049 4.201 4.201 0 0 0 .986-.111 3.329 3.329 0 0 0 .962-.394q.828-.505 1.245-1.399z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    j.defaultProps = {
        width: "80.054",
        height: "11.58",
        viewBox: "0 0 80.054 11.58"
    };
    var _ = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Slabo 27px"), Object(o.createElement)("path", {
            d: "M.111 10.778V8.704h1v1.37q.469.174 1.151.222a7.861 7.861 0 0 0 .553.019 3.537 3.537 0 0 0 .62-.051q.342-.061.614-.195a1.747 1.747 0 0 0 .349-.226 1.544 1.544 0 0 0 .556-1.089 2.178 2.178 0 0 0 .009-.198 1.93 1.93 0 0 0-.029-.347q-.039-.212-.128-.385a1.782 1.782 0 0 0-.426-.537 2.512 2.512 0 0 0-.293-.216q-.173-.11-.383-.21a12.21 12.21 0 0 0-.435-.197 16.731 16.731 0 0 0-.491-.201q-.5-.185-.991-.398-.491-.213-.889-.528a2.399 2.399 0 0 1-.608-.722 2.779 2.779 0 0 1-.04-.074 2.152 2.152 0 0 1-.202-.601A2.984 2.984 0 0 1 0 3.593a2.633 2.633 0 0 1 .167-.955 2.358 2.358 0 0 1 .722-.981 3.034 3.034 0 0 1 1.141-.576Q2.597.926 3.296.926a5.563 5.563 0 0 1 1.784.281 5.13 5.13 0 0 1 .661.274v2.038h-1V2.185a3.529 3.529 0 0 0-.839-.228 4.725 4.725 0 0 0-.698-.05 3.435 3.435 0 0 0-.581.046q-.308.053-.553.167a1.553 1.553 0 0 0-.403.269 1.671 1.671 0 0 0-.364.474 1.482 1.482 0 0 0-.155.674 1.761 1.761 0 0 0 .028.322q.036.194.119.352a1.099 1.099 0 0 0 .011.02 1.586 1.586 0 0 0 .324.408 1.91 1.91 0 0 0 .12.102 2.481 2.481 0 0 0 .32.208q.165.091.358.17a3.988 3.988 0 0 0 .026.011 139.341 139.341 0 0 0 .438.174l.497.196a16.549 16.549 0 0 1 1.009.435 4.007 4.007 0 0 1 .674.399 3.567 3.567 0 0 1 .197.157 2.45 2.45 0 0 1 .609.792 2.779 2.779 0 0 1 .002.004 2.073 2.073 0 0 1 .158.461q.073.327.073.733a2.879 2.879 0 0 1-.157.971 2.466 2.466 0 0 1-.759 1.076 3.13 3.13 0 0 1-1.229.62q-.455.12-.992.143a5.987 5.987 0 0 1-.252.005 6.707 6.707 0 0 1-1.996-.291 6.169 6.169 0 0 1-.615-.227zm59.982-4.111l1.278-1.815v-.037h-.63v-.926h2.5v.926h-.87l-1.834 2.537 1.926 2.833h.871v.926h-2.778v-.926h.648v-.037l-1.333-1.963-1.371 1.963v.037h.759v.926h-2.592v-.926h.833l1.926-2.704-1.815-2.666h-.852v-.926h2.686v.926h-.593v.037l1.241 1.815zM40.704 9.074h.963v2.037h-5.556v-.833a21.952 21.952 0 0 0 1.598-1.419 16.655 16.655 0 0 0 1.31-1.442q1.166-1.454 1.166-2.454 0-.667-.314-1.056-.3-.37-1.087-.388a3.566 3.566 0 0 0-.08 0 3.506 3.506 0 0 0-1.208.22 4.142 4.142 0 0 0-.237.094v1.352h-.963V3.296a5.931 5.931 0 0 1 1.264-.525 4.714 4.714 0 0 1 1.274-.178 3.972 3.972 0 0 1 .724.061q.402.075.718.24a1.954 1.954 0 0 1 .428.3 1.981 1.981 0 0 1 .6 1.115 2.905 2.905 0 0 1 .048.543 2.992 2.992 0 0 1-.19 1.013q-.283.787-.986 1.672a16.422 16.422 0 0 1-2.583 2.611v.037h3.111V9.074zm8.648-5.185h1.982l.055.592h.037a3.019 3.019 0 0 1 .794-.543 2.54 2.54 0 0 1 1.076-.234 2.321 2.321 0 0 1 1.07.243q.443.226.787.662a3.017 3.017 0 0 1 .051.067q.653.879.716 2.266a6.645 6.645 0 0 1 .006.299 6.111 6.111 0 0 1-.118 1.239q-.163.786-.55 1.396a3.639 3.639 0 0 1-.212.3 3.074 3.074 0 0 1-.792.725 2.672 2.672 0 0 1-1.439.395 3.092 3.092 0 0 1-1.217-.255 3.657 3.657 0 0 1-.172-.078l-.037.018v2.538H52.5v.925h-3.148v-.925h.926V4.815h-.926v-.926zm-3.833 8.889h-1.26a11.177 11.177 0 0 1 .268-1.933 12.691 12.691 0 0 1 .112-.456 21.776 21.776 0 0 1 .787-2.398 25.088 25.088 0 0 1 1.019-2.26 41.902 41.902 0 0 1 .551-1.039 33.776 33.776 0 0 1 .541-.951l-.018-.037h-3.778v1.24h-.963V2.778h5.926v.796a30.887 30.887 0 0 0-1.213 2.167q-.565 1.111-1 2.259a16.439 16.439 0 0 0-.695 2.343q-.259 1.194-.277 2.435zM11.667 5.926v-1.5q1.278-.722 2.611-.722a4.011 4.011 0 0 1 .681.054q.666.115 1.087.473a1.626 1.626 0 0 1 .482.73q.093.271.124.605a3.749 3.749 0 0 1 .015.341v4.278h.926v.926h-1.926l-.056-.833-.037-.019a3.07 3.07 0 0 1-.855.709 2.726 2.726 0 0 1-1.33.328 2.651 2.651 0 0 1-.653-.076 1.856 1.856 0 0 1-.875-.489 1.908 1.908 0 0 1-.559-1.268 2.551 2.551 0 0 1-.006-.167 2.114 2.114 0 0 1 .141-.788q.236-.593.869-.952a3.657 3.657 0 0 1 .833-.336q.806-.223 1.946-.238a12.551 12.551 0 0 1 .156-.001h.315V5.889q0-.397-.109-.66a.834.834 0 0 0-.215-.312q-.3-.266-.971-.286a3.762 3.762 0 0 0-.113-.001 4.629 4.629 0 0 0-.639.041q-.342.048-.629.15a2.484 2.484 0 0 0-.25.105v1h-.963zM20.278 0v4.352l.037.018a2.727 2.727 0 0 1 1.833-.666q1.204 0 1.936 1.018a3.734 3.734 0 0 1 .591 1.328q.123.513.138 1.111a6.734 6.734 0 0 1 .002.172 5.911 5.911 0 0 1-.11 1.179q-.145.708-.477 1.256a3.268 3.268 0 0 1-.348.473 3.072 3.072 0 0 1-1.908 1.008 4.421 4.421 0 0 1-.657.047q-1.056 0-2.148-.352V.926h-.926V0h2.037zM7.222 11.111v-.926h.926V.926h-.926V0h2.037v10.185h.926v.926H7.222zM26.31 6.389a5.823 5.823 0 0 0-.106 1.148 6.941 6.941 0 0 0 .008.342q.073 1.467.779 2.39.455.594 1.093.844a2.786 2.786 0 0 0 1.027.183q1.352 0 2.185-1.074a3.453 3.453 0 0 0 .274-.41q.56-.984.56-2.442 0-.901-.211-1.593a3.208 3.208 0 0 0-.576-1.11 2.526 2.526 0 0 0-1.089-.793 2.893 2.893 0 0 0-1.013-.17 2.734 2.734 0 0 0-1.286.301 2.91 2.91 0 0 0-.89.736 3.272 3.272 0 0 0-.293.414q-.322.54-.462 1.234zm-6.032-1.148v5.018a5.565 5.565 0 0 0 1.084.111 5.179 5.179 0 0 0 .009 0 2.883 2.883 0 0 0 .672-.073 1.877 1.877 0 0 0 1.022-.612 2.052 2.052 0 0 0 .355-.628q.228-.619.228-1.557a6.346 6.346 0 0 0-.049-.814q-.053-.41-.164-.748a2.741 2.741 0 0 0-.24-.54 1.573 1.573 0 0 0-.466-.511q-.378-.257-.914-.257-.815 0-1.537.611zm31.111.185v4.667q.556.277 1.296.277a2.138 2.138 0 0 0 .675-.101 1.736 1.736 0 0 0 .853-.621 2.271 2.271 0 0 0 .332-.649q.201-.594.214-1.456a7.988 7.988 0 0 0 0-.117 6.884 6.884 0 0 0-.038-.752q-.084-.767-.357-1.235a1.748 1.748 0 0 0-.086-.133q-.482-.676-1.296-.676a1.922 1.922 0 0 0-1.2.425 2.854 2.854 0 0 0-.393.371zM27.371 7.37q0 1.463.472 2.232.472.768 1.361.768a1.546 1.546 0 0 0 .653-.134q.327-.15.567-.47a1.958 1.958 0 0 0 .076-.109 2.344 2.344 0 0 0 .264-.578q.179-.574.197-1.409a8.789 8.789 0 0 0 .002-.189 6.707 6.707 0 0 0-.064-.969q-.276-1.882-1.751-1.882a1.827 1.827 0 0 0-.571.085 1.444 1.444 0 0 0-.753.572q-.411.596-.45 1.825a8.309 8.309 0 0 0-.003.258zm-11.815.408h-.445q-1.199 0-1.876.285a2.209 2.209 0 0 0-.087.039 1.208 1.208 0 0 0-.429.326q-.256.315-.256.813 0 .39.145.64a.788.788 0 0 0 .188.221 1.186 1.186 0 0 0 .517.236 1.68 1.68 0 0 0 .335.032 2.412 2.412 0 0 0 1.769-.758 3.322 3.322 0 0 0 .139-.149V7.778z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    _.defaultProps = {
        width: "63.334",
        height: "14.444",
        viewBox: "0 0 63.334 14.444"
    };
    var E = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Source Sans Pro"), Object(o.createElement)("path", {
            d: "M0 8.76l.33-.33q.54.63 1.305 1.005.765.375 1.665.375a3.933 3.933 0 0 0 .587-.042 3.03 3.03 0 0 0 .493-.115 2.785 2.785 0 0 0 .47-.202 2.235 2.235 0 0 0 .347-.233q.338-.278.526-.668.187-.39.187-.87 0-.495-.15-.832a1.928 1.928 0 0 0-.375-.562 1.846 1.846 0 0 0-.022-.023 2.475 2.475 0 0 0-.497-.382 2.806 2.806 0 0 0-.081-.046 8.968 8.968 0 0 0-.52-.262 10.205 10.205 0 0 0-.185-.083L2.55 4.8a6.698 6.698 0 0 1-.366-.171 8.531 8.531 0 0 1-.301-.159q-.353-.195-.653-.472a2.224 2.224 0 0 1-.431-.554 2.582 2.582 0 0 1-.064-.121 1.83 1.83 0 0 1-.152-.467Q.54 2.63.54 2.37a2.282 2.282 0 0 1 .09-.65 2.046 2.046 0 0 1 .12-.31q.21-.435.585-.75a2.628 2.628 0 0 1 .683-.411A3.11 3.11 0 0 1 2.22.173Q2.73 0 3.33 0a3.902 3.902 0 0 1 .821.083 3.045 3.045 0 0 1 .762.27 4.721 4.721 0 0 1 .611.374 3.545 3.545 0 0 1 .506.443l-.3.33q-.435-.48-1.035-.765Q4.095.45 3.33.45a3.372 3.372 0 0 0-.713.071q-.559.121-.959.447a1.657 1.657 0 0 0-.632 1.208 2.168 2.168 0 0 0-.006.164 2.089 2.089 0 0 0 .028.354q.042.242.145.434.172.322.435.555.262.232.562.39.3.157.57.277l1.53.69q.405.18.788.398.382.217.675.517a2.234 2.234 0 0 1 .437.649 2.556 2.556 0 0 1 .027.064q.173.412.173.982 0 .57-.225 1.043-.225.472-.63.825a2.757 2.757 0 0 1-.684.432 3.354 3.354 0 0 1-.291.115 3.61 3.61 0 0 1-.8.172 4.477 4.477 0 0 1-.46.023 4.951 4.951 0 0 1-.914-.08 3.626 3.626 0 0 1-1.006-.34Q.57 9.42 0 8.76zm44.64 0l.33-.33q.54.63 1.305 1.005.765.375 1.665.375a3.933 3.933 0 0 0 .587-.042 3.03 3.03 0 0 0 .493-.115 2.785 2.785 0 0 0 .47-.202 2.235 2.235 0 0 0 .347-.233q.338-.278.526-.668.187-.39.187-.87 0-.495-.15-.832a1.928 1.928 0 0 0-.375-.562 1.846 1.846 0 0 0-.022-.023 2.475 2.475 0 0 0-.497-.382 2.806 2.806 0 0 0-.081-.046 8.968 8.968 0 0 0-.52-.262 10.205 10.205 0 0 0-.185-.083l-1.53-.69a6.698 6.698 0 0 1-.366-.171 8.531 8.531 0 0 1-.301-.159q-.353-.195-.653-.472a2.224 2.224 0 0 1-.431-.554 2.582 2.582 0 0 1-.064-.121 1.83 1.83 0 0 1-.152-.467q-.043-.226-.043-.486a2.282 2.282 0 0 1 .09-.65 2.046 2.046 0 0 1 .12-.31q.21-.435.585-.75a2.628 2.628 0 0 1 .683-.411 3.11 3.11 0 0 1 .202-.076Q47.37 0 47.97 0a3.902 3.902 0 0 1 .821.083 3.045 3.045 0 0 1 .762.27 4.721 4.721 0 0 1 .611.374 3.545 3.545 0 0 1 .506.443l-.3.33q-.435-.48-1.035-.765-.6-.285-1.365-.285a3.372 3.372 0 0 0-.713.071q-.559.121-.959.447a1.657 1.657 0 0 0-.632 1.208 2.168 2.168 0 0 0-.006.164 2.089 2.089 0 0 0 .028.354q.042.242.145.434.172.322.435.555.262.232.562.39.3.157.57.277l1.53.69q.405.18.788.398.382.217.675.517a2.234 2.234 0 0 1 .437.649 2.556 2.556 0 0 1 .027.064q.173.412.173.982 0 .57-.225 1.043-.225.472-.63.825a2.757 2.757 0 0 1-.684.432 3.354 3.354 0 0 1-.291.115 3.61 3.61 0 0 1-.8.172 4.477 4.477 0 0 1-.46.023 4.951 4.951 0 0 1-.914-.08 3.626 3.626 0 0 1-1.006-.34q-.81-.42-1.38-1.08zM16.32 7.53V2.91h.45v4.56a5.7 5.7 0 0 0 .032.626q.082.739.373 1.159.405.585 1.335.585.675 0 1.23-.375.555-.375 1.23-1.185V2.91h.45v7.17h-.39l-.06-1.23h-.03a6.264 6.264 0 0 1-.586.602 4.878 4.878 0 0 1-.539.418q-.585.39-1.335.39a2.951 2.951 0 0 1-.622-.061q-.384-.083-.668-.277a1.575 1.575 0 0 1-.345-.322 2.025 2.025 0 0 1-.319-.597q-.193-.551-.205-1.36a7.333 7.333 0 0 1-.001-.113zm44.52 2.55h-.45V2.91h.39l.06 1.14h.03a7.673 7.673 0 0 1 .646-.579 6.139 6.139 0 0 1 .509-.366 2.385 2.385 0 0 1 1.19-.371 2.907 2.907 0 0 1 .145-.004 2.951 2.951 0 0 1 .622.061q.384.083.668.278a1.575 1.575 0 0 1 .345.321 2.025 2.025 0 0 1 .319.597q.193.551.205 1.36a7.333 7.333 0 0 1 .001.113v4.62h-.45V5.52a5.7 5.7 0 0 0-.032-.626q-.082-.738-.373-1.159-.405-.585-1.335-.585-.675 0-1.237.36-.409.262-.885.713a10.94 10.94 0 0 0-.368.367v5.49zm6.51-.81l.3-.36q.45.39.99.66a2.379 2.379 0 0 0 .566.194q.264.057.572.071a4.546 4.546 0 0 0 .212.005 2.705 2.705 0 0 0 .399-.028 1.985 1.985 0 0 0 .396-.099 1.94 1.94 0 0 0 .306-.143 1.474 1.474 0 0 0 .264-.195q.225-.21.345-.487.12-.278.12-.578a1.32 1.32 0 0 0-.036-.316 1.037 1.037 0 0 0-.129-.306q-.165-.263-.42-.465a2.399 2.399 0 0 0-.498-.303 2.715 2.715 0 0 0-.08-.035q-.322-.135-.637-.255-.42-.15-.832-.315a4.228 4.228 0 0 1-.566-.275 3.705 3.705 0 0 1-.184-.115 1.908 1.908 0 0 1-.531-.522 1.848 1.848 0 0 1-.017-.025q-.21-.323-.21-.788 0-.375.143-.712.142-.338.427-.593a1.93 1.93 0 0 1 .409-.278 2.466 2.466 0 0 1 .296-.127 2.476 2.476 0 0 1 .477-.116q.234-.034.498-.034.54 0 1.065.203a3.614 3.614 0 0 1 .604.297 3.052 3.052 0 0 1 .311.22l-.27.36q-.36-.27-.765-.465T69.9 3.15a2.839 2.839 0 0 0-.368.023q-.225.029-.412.097a1.768 1.768 0 0 0-.283.131 1.326 1.326 0 0 0-.257.192 1.418 1.418 0 0 0-.239.299 1.274 1.274 0 0 0-.076.151q-.105.247-.105.517a1.211 1.211 0 0 0 .029.27.907.907 0 0 0 .121.293 1.421 1.421 0 0 0 .315.343 1.67 1.67 0 0 0 .082.062 3.113 3.113 0 0 0 .387.228 3.673 3.673 0 0 0 .168.079q.308.135.638.255.42.165.855.33t.773.398q.337.232.555.585.205.332.216.818a2.464 2.464 0 0 1 .001.059q0 .39-.157.75-.158.36-.45.63a1.986 1.986 0 0 1-.401.284 2.599 2.599 0 0 1-.335.151 2.588 2.588 0 0 1-.589.141 3.335 3.335 0 0 1-.408.024 3.878 3.878 0 0 1-.898-.1 3.276 3.276 0 0 1-.572-.192 5.169 5.169 0 0 1-.703-.376 4.197 4.197 0 0 1-.437-.322zM40.32 6.51h-5.28a4.478 4.478 0 0 0 .077.846 3.771 3.771 0 0 0 .126.482 3.483 3.483 0 0 0 .336.729 3.039 3.039 0 0 0 .234.328q.367.45.885.698a2.539 2.539 0 0 0 .843.231 3.128 3.128 0 0 0 .319.016 3.588 3.588 0 0 0 .577-.044 2.716 2.716 0 0 0 .518-.136q.48-.18.885-.48l.21.39a6.199 6.199 0 0 1-.544.304 7.593 7.593 0 0 1-.364.169q-.368.159-.902.202a5.172 5.172 0 0 1-.41.015q-.675 0-1.267-.255-.593-.255-1.043-.742a3.376 3.376 0 0 1-.579-.876 4.05 4.05 0 0 1-.126-.302q-.255-.69-.255-1.575a4.979 4.979 0 0 1 .079-.902 3.999 3.999 0 0 1 .183-.673q.263-.705.691-1.192a3.033 3.033 0 0 1 .879-.699 2.912 2.912 0 0 1 .103-.051q.555-.263 1.155-.263a2.944 2.944 0 0 1 .89.128 2.325 2.325 0 0 1 1.083.72 2.743 2.743 0 0 1 .521.958q.129.4.177.884a6.149 6.149 0 0 1 .029.61v.233q0 .111-.03.245a1.451 1.451 0 0 1 0 .002zm12.84-2.49l-.24-.36a5.177 5.177 0 0 1 .131-.092q.128-.087.297-.193a3.754 3.754 0 0 1 .319-.178 4.825 4.825 0 0 1 .281-.129 4.457 4.457 0 0 1 .448-.161 5.412 5.412 0 0 1 .294-.079q.405-.098.84-.098a3.03 3.03 0 0 1 .443.031q.237.035.435.11a1.638 1.638 0 0 1 .172.077q.42.217.675.592.255.375.36.863.105.487.105 1.027v4.65h-.39l-.06-.96h-.03q-.57.45-1.23.795-.66.345-1.38.345a2.806 2.806 0 0 1-.653-.074 2.564 2.564 0 0 1-.142-.038 1.923 1.923 0 0 1-.55-.262 1.801 1.801 0 0 1-.11-.083 1.569 1.569 0 0 1-.39-.478 1.882 1.882 0 0 1-.06-.122q-.155-.346-.164-.817a3.074 3.074 0 0 1-.001-.061q0-1.036.85-1.641a2.867 2.867 0 0 1 .29-.181q1.14-.623 3.57-.893a4.597 4.597 0 0 0 .003-.158 4.763 4.763 0 0 0-.055-.719 2.516 2.516 0 0 0-.135-.518 2.161 2.161 0 0 0-.128-.277q-.195-.353-.547-.57a1.362 1.362 0 0 0-.389-.16q-.233-.058-.519-.058a3.298 3.298 0 0 0-.515.039 2.873 2.873 0 0 0-.22.044 3.696 3.696 0 0 0-.531.168 3.319 3.319 0 0 0-.114.049 5.453 5.453 0 0 0-.354.175 4.497 4.497 0 0 0-.194.11 4.787 4.787 0 0 0-.174.11q-.135.091-.238.175zm-19.74-.39l-.3.33q-.36-.345-.795-.577a1.958 1.958 0 0 0-.662-.21 2.515 2.515 0 0 0-.343-.023q-.57 0-1.072.248-.503.247-.87.69a3.09 3.09 0 0 0-.427.684 3.836 3.836 0 0 0-.151.381 4.024 4.024 0 0 0-.193.953 4.834 4.834 0 0 0-.017.404 4.983 4.983 0 0 0 .055.757 3.902 3.902 0 0 0 .14.601q.195.607.555 1.05.36.442.863.682a2.478 2.478 0 0 0 .872.23 2.988 2.988 0 0 0 .245.01 2.569 2.569 0 0 0 .725-.1 2.282 2.282 0 0 0 .393-.155q.502-.255.892-.615l.27.33q-.45.405-1.012.683a2.699 2.699 0 0 1-.924.26 3.332 3.332 0 0 1-.344.017 3.268 3.268 0 0 1-.928-.129 2.963 2.963 0 0 1-.347-.126q-.585-.255-1.012-.735a3.265 3.265 0 0 1-.484-.724 4.103 4.103 0 0 1-.191-.453 4.211 4.211 0 0 1-.204-.87 5.553 5.553 0 0 1-.044-.713q0-.9.263-1.605a3.954 3.954 0 0 1 .329-.686 3.19 3.19 0 0 1 .376-.499q.442-.48 1.02-.735.577-.255 1.222-.255a3.356 3.356 0 0 1 .527.039q.293.047.535.149a1.838 1.838 0 0 1 .183.09q.495.277.855.622zm44.4 6.45h-.48V.18h2.37q.84 0 1.5.143a3.502 3.502 0 0 1 .568.171 2.574 2.574 0 0 1 .542.294q.45.322.69.84a2.451 2.451 0 0 1 .18.571q.051.265.059.568a4.349 4.349 0 0 1 .001.113q0 1.425-.9 2.123-.9.697-2.58.697h-1.95v4.38zm-66.81.18q-.645 0-1.222-.255-.578-.255-1.013-.735-.435-.48-.69-1.177a4.119 4.119 0 0 1-.212-.889 5.411 5.411 0 0 1-.043-.694 5.429 5.429 0 0 1 .063-.848 4.108 4.108 0 0 1 .192-.757 3.937 3.937 0 0 1 .322-.686 3.154 3.154 0 0 1 .368-.499q.435-.48 1.013-.735.577-.255 1.222-.255t1.223.255q.577.255 1.012.735.435.48.69 1.185.255.705.255 1.605 0 .885-.255 1.583a3.902 3.902 0 0 1-.338.706 3.179 3.179 0 0 1-.352.471q-.435.48-1.012.735-.578.255-1.223.255zm81.39 0q-.645 0-1.222-.255-.578-.255-1.013-.735-.435-.48-.69-1.177a4.119 4.119 0 0 1-.212-.889 5.411 5.411 0 0 1-.043-.694 5.429 5.429 0 0 1 .063-.848 4.108 4.108 0 0 1 .192-.757 3.937 3.937 0 0 1 .322-.686 3.154 3.154 0 0 1 .368-.499q.435-.48 1.013-.735.577-.255 1.222-.255t1.223.255q.577.255 1.012.735.435.48.69 1.185.255.705.255 1.605 0 .885-.255 1.583a3.902 3.902 0 0 1-.338.706 3.179 3.179 0 0 1-.352.471q-.435.48-1.012.735-.578.255-1.223.255zm-67.65-.18h-.45V2.91h.39l.06 1.35h.03a4.109 4.109 0 0 1 .494-.721 3.477 3.477 0 0 1 .376-.374q.51-.435 1.17-.435a1.958 1.958 0 0 1 .293.021 1.771 1.771 0 0 1 .052.009 1.147 1.147 0 0 1 .19.053 1.515 1.515 0 0 1 .155.067l-.12.42a2.483 2.483 0 0 0-.107-.042q-.11-.04-.192-.055a.741.741 0 0 0-.001 0 1.049 1.049 0 0 0-.084-.012q-.087-.009-.206-.011a3.68 3.68 0 0 0-.04 0q-.495 0-1.035.428-.54.427-.975 1.492v4.98zm61.11 0h-.45V2.91h.39l.06 1.35h.03a4.109 4.109 0 0 1 .494-.721 3.477 3.477 0 0 1 .376-.374q.51-.435 1.17-.435a1.958 1.958 0 0 1 .293.021 1.771 1.771 0 0 1 .052.009 1.147 1.147 0 0 1 .19.053 1.515 1.515 0 0 1 .155.067l-.12.42a2.483 2.483 0 0 0-.107-.042q-.11-.04-.192-.055a.741.741 0 0 0-.001 0 1.049 1.049 0 0 0-.084-.012q-.087-.009-.206-.011a3.68 3.68 0 0 0-.04 0q-.495 0-1.035.428-.54.427-.975 1.492v4.98zm-74.85-.24q.57 0 1.065-.24t.855-.682a3.24 3.24 0 0 0 .438-.717 3.943 3.943 0 0 0 .132-.333q.21-.608.21-1.358a4.509 4.509 0 0 0-.082-.875 3.829 3.829 0 0 0-.128-.482 3.736 3.736 0 0 0-.279-.636 3.022 3.022 0 0 0-.291-.429q-.36-.443-.855-.69-.495-.248-1.065-.248t-1.065.248q-.495.247-.855.69a3.143 3.143 0 0 0-.408.658 3.94 3.94 0 0 0-.162.407 4.024 4.024 0 0 0-.193.953 4.834 4.834 0 0 0-.017.404 4.634 4.634 0 0 0 .059.757 3.669 3.669 0 0 0 .151.601 3.684 3.684 0 0 0 .302.663 3.09 3.09 0 0 0 .268.387q.36.442.855.682.495.24 1.065.24zm81.39 0q.57 0 1.065-.24t.855-.682a3.24 3.24 0 0 0 .438-.717 3.943 3.943 0 0 0 .132-.333q.21-.608.21-1.358a4.509 4.509 0 0 0-.082-.875 3.829 3.829 0 0 0-.128-.482 3.736 3.736 0 0 0-.279-.636 3.022 3.022 0 0 0-.291-.429q-.36-.443-.855-.69-.495-.248-1.065-.248t-1.065.248q-.495.247-.855.69a3.143 3.143 0 0 0-.408.658 3.94 3.94 0 0 0-.162.407 4.024 4.024 0 0 0-.193.953 4.834 4.834 0 0 0-.017.404 4.634 4.634 0 0 0 .059.757 3.669 3.669 0 0 0 .151.601 3.684 3.684 0 0 0 .302.663 3.09 3.09 0 0 0 .268.387q.36.442.855.682.495.24 1.065.24zM77.82.6v4.68h1.77a7.422 7.422 0 0 0 .837-.044q.985-.112 1.541-.511.694-.499.764-1.59a3.951 3.951 0 0 0 .008-.255q0-.777-.282-1.264a1.477 1.477 0 0 0-.513-.528 2.691 2.691 0 0 0-.642-.277Q80.595.6 79.53.6h-1.71zM35.04 6.09h4.86a5.859 5.859 0 0 0-.049-.782q-.054-.403-.169-.728a2.22 2.22 0 0 0-.397-.71 2.011 2.011 0 0 0-1.474-.715 2.758 2.758 0 0 0-.161-.005q-.48 0-.93.203-.45.202-.802.585-.353.382-.585.922a3.588 3.588 0 0 0-.216.694 4.624 4.624 0 0 0-.077.536zm22.23 2.52V6q-1.185.135-1.995.338-.583.145-1.003.334a3.382 3.382 0 0 0-.302.153q-.495.285-.712.653a1.571 1.571 0 0 0-.214.71 1.91 1.91 0 0 0-.004.122 2.304 2.304 0 0 0 .021.319q.023.164.071.304a1.273 1.273 0 0 0 .035.09 1.302 1.302 0 0 0 .183.304 1.125 1.125 0 0 0 .17.168 1.445 1.445 0 0 0 .508.26 1.632 1.632 0 0 0 .01.003 2.229 2.229 0 0 0 .5.079 2.559 2.559 0 0 0 .122.003q.66 0 1.275-.307a5.084 5.084 0 0 0 .517-.301q.244-.161.503-.363a9.799 9.799 0 0 0 .315-.259z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    E.defaultProps = {
        width: "95.58",
        height: "10.26",
        viewBox: "0 0 95.58 10.26"
    };
    var w = function(e) {
        return Object(o.createElement)("svg", e, Object(o.createElement)("title", null, "Ubuntu"), Object(o.createElement)("path", {
            d: "M0 7.785v-6.54h1.02V7.65a6.073 6.073 0 0 0 .036.68q.049.438.167.798.202.622.562 1.027.36.405.87.6a2.943 2.943 0 0 0 .721.172 3.703 3.703 0 0 0 .419.023 3.515 3.515 0 0 0 .653-.058 2.833 2.833 0 0 0 .487-.137q.51-.195.87-.6.36-.405.563-1.027a3.873 3.873 0 0 0 .145-.635q.043-.292.053-.62a6.838 6.838 0 0 0 .004-.223V1.245h1.02v6.54a6.379 6.379 0 0 1-.091 1.098 5.475 5.475 0 0 1-.111.499 3.605 3.605 0 0 1-.419.971 3.292 3.292 0 0 1-.234.327 2.927 2.927 0 0 1-.872.721 3.571 3.571 0 0 1-.305.149 3.602 3.602 0 0 1-.777.231q-.368.068-.789.081a6.515 6.515 0 0 1-.197.003 5.681 5.681 0 0 1-.79-.052q-.418-.059-.771-.184a3.187 3.187 0 0 1-.201-.079q-.728-.315-1.178-.87a3.436 3.436 0 0 1-.598-1.115 4.001 4.001 0 0 1-.054-.183 5.8 5.8 0 0 1-.189-1.151A6.86 6.86 0 0 1 0 7.785zm27.465 3.855V4.155a10.723 10.723 0 0 1 .301-.078q.364-.089.869-.192.561-.114 1.314-.142a13.521 13.521 0 0 1 .486-.008q.885 0 1.478.255a2.418 2.418 0 0 1 .618.379 2.134 2.134 0 0 1 .327.349 2.774 2.774 0 0 1 .385.728 3.49 3.49 0 0 1 .117.404 5.912 5.912 0 0 1 .121.785 7.544 7.544 0 0 1 .029.67v4.335h-.975V7.62a10.12 10.12 0 0 0-.016-.583q-.016-.285-.05-.531a4.843 4.843 0 0 0-.046-.281 2.991 2.991 0 0 0-.117-.428q-.103-.288-.258-.502-.263-.36-.69-.518a2.291 2.291 0 0 0-.384-.101q-.306-.056-.689-.056a10.854 10.854 0 0 0-.491.011q-.387.017-.701.064a10.947 10.947 0 0 0-.203.032q-.273.046-.401.086a.668.668 0 0 0-.049.017v6.81h-.975zm-2.58-7.755v7.485a10.723 10.723 0 0 1-.301.078q-.364.089-.869.192-.561.114-1.314.142a13.521 13.521 0 0 1-.486.008q-.87 0-1.455-.255a2.488 2.488 0 0 1-.643-.401 2.234 2.234 0 0 1-.302-.319 2.716 2.716 0 0 1-.392-.713 3.443 3.443 0 0 1-.125-.412 5.692 5.692 0 0 1-.132-.831 7.244 7.244 0 0 1-.026-.624v-4.35h.975V7.92q0 .825.12 1.395a2.944 2.944 0 0 0 .119.42q.109.29.271.502.27.353.698.51.359.133.852.154a4.466 4.466 0 0 0 .19.004 10.925 10.925 0 0 0 .492-.011q.243-.011.459-.033a5.923 5.923 0 0 0 .249-.031 10.822 10.822 0 0 0 .178-.028q.357-.058.467-.107v-6.81h.975zm22.875 0v7.485a10.723 10.723 0 0 1-.301.078q-.364.089-.869.192-.561.114-1.314.142a13.521 13.521 0 0 1-.486.008q-.87 0-1.455-.255a2.488 2.488 0 0 1-.643-.401 2.234 2.234 0 0 1-.302-.319 2.716 2.716 0 0 1-.392-.713 3.443 3.443 0 0 1-.125-.412 5.692 5.692 0 0 1-.132-.831 7.244 7.244 0 0 1-.026-.624v-4.35h.975V7.92q0 .825.12 1.395a2.944 2.944 0 0 0 .119.42q.109.29.271.502.27.353.698.51.359.133.852.154a4.466 4.466 0 0 0 .19.004 10.925 10.925 0 0 0 .492-.011q.243-.011.459-.033a5.923 5.923 0 0 0 .249-.031 10.822 10.822 0 0 0 .178-.028q.357-.058.467-.107v-6.81h.975zM11.16 0v4.35q.255-.195.818-.413.562-.217 1.327-.217a4.02 4.02 0 0 1 .793.075 3.157 3.157 0 0 1 .7.225q.652.3 1.102.84.45.54.683 1.282a5.089 5.089 0 0 1 .207 1.063 6.238 6.238 0 0 1 .025.565 5.521 5.521 0 0 1-.074.923 4.283 4.283 0 0 1-.203.772q-.278.75-.78 1.275-.503.525-1.2.802a3.916 3.916 0 0 1-1.034.251 4.849 4.849 0 0 1-.519.027 13.191 13.191 0 0 1-.669-.016q-.598-.03-1.041-.119a12.708 12.708 0 0 1-.454-.099q-.212-.051-.393-.103a5.576 5.576 0 0 1-.263-.083V.18L11.16 0zm25.755 1.425v2.46h3.09v.825h-3.09v4.125a6.345 6.345 0 0 0 .013.425q.026.377.1.647a2.096 2.096 0 0 0 .093.273q.094.221.229.365.21.225.51.3a2.488 2.488 0 0 0 .388.064 3.138 3.138 0 0 0 .272.011 4.34 4.34 0 0 0 .386-.016q.178-.016.329-.048a1.834 1.834 0 0 0 .275-.078 7.037 7.037 0 0 0 .218-.087q.208-.087.347-.165a1.959 1.959 0 0 0 .02-.011l.24.81q-.161.103-.505.228a7.925 7.925 0 0 1-.23.08q-.525.172-1.14.172-.72 0-1.207-.188a1.848 1.848 0 0 1-.516-.296 1.658 1.658 0 0 1-.264-.273 2.077 2.077 0 0 1-.284-.513 2.81 2.81 0 0 1-.129-.44 5.164 5.164 0 0 1-.082-.538q-.028-.28-.036-.597a9.576 9.576 0 0 1-.002-.215v-7.14l.975-.18zM11.16 5.295v5.43q.187.062.525.12a8.807 8.807 0 0 0 .143.022 4.81 4.81 0 0 0 .303.036q.352.031.827.032a15.134 15.134 0 0 0 .032 0 3.146 3.146 0 0 0 .925-.13 2.475 2.475 0 0 0 1.1-.687 2.645 2.645 0 0 0 .591-1.052q.125-.407.16-.899a5.575 5.575 0 0 0 .014-.397 5.529 5.529 0 0 0-.076-.93 4.906 4.906 0 0 0-.059-.293 3.132 3.132 0 0 0-.204-.602 2.591 2.591 0 0 0-.231-.403 2.174 2.174 0 0 0-.78-.678 2.527 2.527 0 0 0-.007-.004q-.44-.23-1.069-.253a3.877 3.877 0 0 0-.139-.002q-.345 0-.66.067a4.019 4.019 0 0 0-.412.111 3.431 3.431 0 0 0-.173.062 3.755 3.755 0 0 0-.253.109 2.748 2.748 0 0 0-.219.116q-.203.12-.338.225z",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            fillRule: "evenodd",
            fontSize: "12",
            stroke: "#000",
            strokeWidth: ".25mm",
            fill: "none"
        }))
    };
    w.defaultProps = {
        width: "47.76",
        height: "11.865",
        viewBox: "0 0 47.76 11.865"
    };
    var S = 328,
        C = 553,
        B = 40,
        x = 30,
        z = ["amp/amp-story-page", "core/block", "core/template"],
        I = ["core/code", "core/embed", "core/image", "core/list", "core/preformatted", "core/pullquote", "core/quote", "core/table", "core/verse", "core/video", "amp/amp-story-text", "amp/amp-story-post-author", "amp/amp-story-post-date", "amp/amp-story-post-title", "core/html", "core/block", "core/template"],
        A = ["amp/amp-story-text", "amp/amp-story-post-author", "amp/amp-story-post-date", "amp/amp-story-post-title"],
        T = ["amp/amp-story-text", "amp/amp-story-post-author", "amp/amp-story-post-date", "amp/amp-story-post-title", "amp/amp-story-cta"],
        P = [].concat(I, ["amp/amp-story-cta"]),
        D = [].concat(z, r()(P)),
        R = "image",
        N = "video",
        M = ["image", "video"],
        V = ["image"],
        F = ["core/video", "core/audio"],
        H = {
            drop: 1600,
            "fade-in": 500,
            "fly-in-bottom": 500,
            "fly-in-left": 500,
            "fly-in-right": 500,
            "fly-in-top": 500,
            pulse: 500,
            "rotate-in-left": 700,
            "rotate-in-right": 700,
            "twirl-in": 1e3,
            "whoosh-in-left": 500,
            "whoosh-in-right": 500,
            "pan-left": 1e3,
            "pan-right": 1e3,
            "pan-down": 1e3,
            "pan-up": 1e3,
            "zoom-in": 1e3,
            "zoom-out": 1e3
        },
        L = [{
            value: "",
            label: Object(i.__)("None", "amp")
        }, {
            value: "drop",
            label: Object(i.__)("Drop", "amp")
        }, {
            value: "fade-in",
            label: Object(i.__)("Fade In", "amp")
        }, {
            value: "fly-in-bottom",
            label: Object(i.__)("Fly In Bottom", "amp")
        }, {
            value: "fly-in-left",
            label: Object(i.__)("Fly In Left", "amp")
        }, {
            value: "fly-in-right",
            label: Object(i.__)("Fly In Right", "amp")
        }, {
            value: "fly-in-top",
            label: Object(i.__)("Fly In Top", "amp")
        }, {
            value: "pulse",
            label: Object(i.__)("Pulse", "amp")
        }, {
            value: "rotate-in-left",
            label: Object(i.__)("Rotate In Left", "amp")
        }, {
            value: "rotate-in-right",
            label: Object(i.__)("Rotate In Right", "amp")
        }, {
            value: "twirl-in",
            label: Object(i.__)("Twirl In", "amp")
        }, {
            value: "whoosh-in-left",
            label: Object(i.__)("Whoosh In Left", "amp")
        }, {
            value: "whoosh-in-right",
            label: Object(i.__)("Whoosh In Right", "amp")
        }, {
            value: "pan-left",
            label: Object(i.__)("Pan Left", "amp")
        }, {
            value: "pan-right",
            label: Object(i.__)("Pan Right", "amp")
        }, {
            value: "pan-down",
            label: Object(i.__)("Pan Down", "amp")
        }, {
            value: "pan-up",
            label: Object(i.__)("Pan Up", "amp")
        }, {
            value: "zoom-in",
            label: Object(i.__)("Zoom In", "amp")
        }, {
            value: "zoom-out",
            label: Object(i.__)("Zoom Out", "amp")
        }],
        W = {
            Arimo: c,
            Lato: l,
            Lora: s,
            Merriweather: u,
            Montserrat: d,
            "Noto Sans": p,
            "Open Sans": m,
            "Open Sans Condensed": f,
            Oswald: b,
            "Playfair Display": h,
            "PT Sans": v,
            "PT Sans Narrow": q,
            "PT Serif": g,
            Raleway: y,
            Roboto: O,
            "Roboto Condensed": k,
            "Roboto Slab": j,
            "Slabo 27px": _,
            "Source Sans Pro": E,
            Ubuntu: w
        }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.compose
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.blockEditor
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.blocks
    }()
}, function(e, t, a) {
    var n = a(18);
    e.exports = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(a);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
            }))), r.forEach(function(t) {
                n(e, t, a[t])
            })
        }
        return e
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function(e, t, a) {
    e.exports = a(46)()
}, function(e, t) {
    ! function() {
        e.exports = this.lodash
    }()
}, function(e, t) {
    function a(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    e.exports = function(e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, a) {
    var n = a(48),
        r = a(10);
    e.exports = function(e, t) {
        return !t || "object" !== n(t) && "function" != typeof t ? r(e) : t
    }
}, function(e, t) {
    function a(t) {
        return e.exports = a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, a(t)
    }
    e.exports = a
}, function(e, t, a) {
    var n = a(49);
    e.exports = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && n(e, t)
    }
}, function(e, t) {
    e.exports = function(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
    }
}, function(e, t, a) {
    var n;
    ! function() {
        "use strict";
        var a = {}.hasOwnProperty;

        function r() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                if (n) {
                    var o = typeof n;
                    if ("string" === o || "number" === o) e.push(n);
                    else if (Array.isArray(n) && n.length) {
                        var i = r.apply(null, n);
                        i && e.push(i)
                    } else if ("object" === o)
                        for (var c in n) a.call(n, c) && n[c] && e.push(c)
                }
            }
            return e.join(" ")
        }
        e.exports ? (r.default = r, e.exports = r) : void 0 === (n = function() {
            return r
        }.apply(t, [])) || (e.exports = n)
    }()
}, function(e, t) {
    function a() {
        return e.exports = a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        }, a.apply(this, arguments)
    }
    e.exports = a
}, function(e, t, a) {
    "use strict";
    a.d(t, "c", function() {
        return c
    }), a.d(t, "b", function() {
        return l
    }), a.d(t, "d", function() {
        return s
    }), a.d(t, "a", function() {
        return u
    });
    var n = a(31),
        r = a.n(n),
        o = a(1),
        i = a(7),
        c = function(e, t) {
            if (!e || !e.width || !e.height) return !1;
            var a = t.width,
                n = t.height;
            return e.width >= a && e.height >= n
        },
        l = function() {
            return {
                width: 200,
                /* changed width and height*/ height: 337
            }
        },
        s = function(e, t, a) {
            if (!e) return a ? [Object(o.__)("Selecting a featured image is required.", "amp")] : [Object(o.__)("Selecting a featured image is recommended for an optimal user experience.", "amp")];
            var n = [];
            if (["image/png", "image/gif", "image/jpeg"].includes(e.mime_type) || n.push(
                /* translators: 1: .jpg, 2: .png. 3: .gif */
                Object(o.sprintf)(Object(o.__)("The featured image must be in %1$s, %2$s, or %3$s format.", "amp"), ".jpg", ".png", ".gif")), !c(e.media_details, t)) {
                var r = t.width,
                    i = t.height;
                n.push(
                    /* translators: 1: minimum width, 2: minimum height. */
                    Object(o.sprintf)(Object(o.__)("The featured image should have a size of at least %1$s by %2$s pixels.", "amp"), Math.ceil(r), Math.ceil(i)))
            }
            return 0 === n.length ? null : n
        },
        u = function(e, t, a) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
                o = t ? Object(i.getColorObjectByColorValue)(e, t.color) || Object(i.getColorObjectByAttributeValues)(e, t.slug, t.color || a) : {
                    color: a
                };
            if (o && o.color) {
                var c = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                        return e ? (3 === (e = e.replace("#", "")).length && (e = "".concat(e.charAt(0)).concat(e.charAt(0)).concat(e.charAt(1)).concat(e.charAt(1)).concat(e.charAt(2)).concat(e.charAt(2))), [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16), (t = Math.min(100, Math.max(0, t))) / 100]) : []
                    }(o.color, n),
                    l = r()(c, 4),
                    s = l[0],
                    u = l[1],
                    d = l[2],
                    p = l[3];
                return "rgba(".concat(s, ", ").concat(u, ", ").concat(d, ", ").concat(p, ")")
            }
        }
}, function(e, t, a) {
    var n = a(50),
        r = a(51),
        o = a(52);
    e.exports = function(e) {
        return n(e) || r(e) || o()
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0),
        r = (a(11), a(3)),
        o = a(2),
        i = a(1),
        c = a(5),
        l = Object(r.withSelect)(function(e) {
            var t = (0, e("core/block-editor").getSelectedBlock)();
            return {
                selectedBlock: t ? t.name : null
            }
        })(function(e) {
            var t = e.animatedBlocks,
                a = e.onAnimationTypeChange,
                r = e.onAnimationDurationChange,
                l = e.onAnimationDelayChange,
                s = e.onAnimationAfterChange,
                u = e.animationType,
                p = e.animationDuration,
                m = e.animationDelay,
                f = e.animationAfter,
                b = e.selectedBlock,
                h = c.h[u] || 0,
                v = "core/image" === b,
                q = c.f.filter(function(e) {
                    return !(e.value.startsWith("pan-") && !v)
                });
            return Object(n.createElement)(n.Fragment, null, Object(n.createElement)(o.SelectControl, {
                label: Object(i.__)("Animation Type", "amp"),
                value: u,
                options: q,
                onChange: function(e) {
                    a(e), r(c.h[e] || 0), l(0)
                }
            }), u && Object(n.createElement)(n.Fragment, null, Object(n.createElement)(o.RangeControl, {
                label: Object(i.__)("Duration (ms)", "amp"),
                value: p,
                onChange: r,
                min: "0",
                max: "5000",
                placeholder: h,
                initialPosition: h
            }), Object(n.createElement)(o.RangeControl, {
                label: Object(i.__)("Delay (ms)", "amp"),
                value: m || 0,
                onChange: l,
                min: "0",
                max: "5000"
            }), Object(n.createElement)(d, {
                value: f,
                options: t(),
                onChange: s
            })))
        }),
        s = a(20),
        u = a.n(s);
    var d = function(e) {
            var t = e.value,
                a = void 0 === t ? "" : t,
                r = e.options,
                o = e.onChange,
                c = {
                    value: "",
                    label: Object(i.__)("Immediately", "amp")
                };
            return Object(n.createElement)(ke, {
                value: a,
                options: r,
                defaultOption: c,
                onChange: function(e) {
                    var t = e.value,
                        a = e.block;
                    return o("" === t ? void 0 : a.clientId)
                },
                label: Object(i.__)("Begin after", "amp"),
                id: "amp-stories-animation-order-picker",
                ariaLabel: function(e) {
                    var t = e.value,
                        a = e.blockType;
                    return t ? Object(i.sprintf)(Object(i.__)("Begin after: %s", "amp"), a.title) : Object(i.__)("Begin immediately", "amp")
                },
                renderToggle: function(e) {
                    return Object(n.createElement)(R, u()({}, e, {
                        displayIcon: !1,
                        alignIcon: "right"
                    }))
                },
                renderOption: function(e) {
                    return Object(n.createElement)("span", {
                        className: "components-preview-picker__dropdown-label"
                    }, Object(n.createElement)(R, u()({}, e, {
                        alignIcon: "right"
                    })))
                }
            })
        },
        p = a(6),
        m = a(14),
        f = a.n(m),
        b = a(13),
        h = a.n(b),
        v = a(15),
        q = a.n(v),
        g = a(16),
        y = a.n(g),
        O = a(10),
        k = a.n(O),
        j = a(17),
        _ = a.n(j),
        E = a(19),
        w = a.n(E),
        S = function(e) {
            function t() {
                var e;
                return f()(this, t), (e = q()(this, y()(t).apply(this, arguments))).state = {
                    isDragging: !1
                }, e.onDrop = e.onDrop.bind(k()(e)), e
            }
            return _()(t, e), h()(t, [{
                key: "getInsertIndex",
                value: function(e) {
                    var t = this.props,
                        a = t.block.clientId,
                        n = t.getBlockIndex;
                    if (void 0 !== a) {
                        var r = n(a);
                        return "top" === e.y ? r : r + 1
                    }
                }
            }, {
                key: "onDrop",
                value: function(e, t) {
                    var a = this.props,
                        n = a.block.clientId,
                        r = a.moveBlockToPosition,
                        o = a.getBlockIndex,
                        i = function(e) {
                            var t = {
                                srcClientId: null,
                                srcIndex: null,
                                type: null
                            };
                            if (!e.dataTransfer) return t;
                            try {
                                t = Object.assign(t, JSON.parse(e.dataTransfer.getData("text")))
                            } catch (e) {
                                return t
                            }
                            return t
                        }(e),
                        c = i.srcClientId,
                        l = i.srcIndex,
                        s = i.type;
                    if ("block" === s && c !== n) {
                        var u = o(n),
                            d = this.getInsertIndex(t);
                        r(c, l < u ? d - 1 : d)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        a = t.block,
                        r = t.getBlockIndex,
                        c = t.isSelected,
                        l = t.onClick,
                        s = a.clientId,
                        u = "block-navigation-item-".concat(s),
                        d = {
                            type: "block",
                            srcIndex: r(s),
                            srcClientId: s
                        };
                    return Object(n.createElement)("div", {
                        className: w()("editor-block-navigation__item block-editor-block-navigation__item", {
                            "block-editor-block-navigation__item-is-dragging": this.state.isDragging
                        })
                    }, Object(n.createElement)(o.Draggable, {
                        elementId: u,
                        transferData: d,
                        onDragStart: function() {
                            return e.setState({
                                isDragging: !0
                            })
                        },
                        onDragEnd: function() {
                            return e.setState({
                                isDragging: !1
                            })
                        }
                    }, function(t) {
                        var r = t.onDraggableStart,
                            s = t.onDraggableEnd;
                        return Object(n.createElement)(n.Fragment, null, Object(n.createElement)(o.DropZone, {
                            className: e.state.isDragging ? "is-dragging-block" : void 0,
                            onDrop: e.onDrop
                        }), Object(n.createElement)(o.Button, {
                            className: w()("components-button editor-block-navigation__item-button block-editor-block-navigation__item-button", {
                                "is-selected": c
                            }),
                            onClick: l,
                            id: u,
                            onDragStart: r,
                            onDragEnd: s,
                            draggable: !0
                        }, Object(n.createElement)(R, {
                            block: a,
                            accessibilityText: c && Object(i.__)("(selected block)", "amp")
                        })))
                    }))
                }
            }]), t
        }(n.Component),
        C = Object(r.withSelect)(function(e, t) {
            var a = t.block.clientId,
                n = e("core/block-editor"),
                r = n.getBlockOrder,
                o = n.getBlockRootClientId,
                i = (0, n.getBlocksByClientId)(r(o(a))).filter(function(e) {
                    var t = e.name;
                    return c.d.includes(t)
                }).map(function(e) {
                    return e.clientId
                }).reverse();
            return {
                getBlockIndex: function(e) {
                    return i.indexOf(e)
                }
            }
        }),
        B = Object(r.withDispatch)(function(e, t, a) {
            var n = t.block.clientId,
                r = (0, a.select)("core/block-editor"),
                o = r.getBlockOrder,
                i = r.getBlockRootClientId,
                c = e("core/block-editor").moveBlockToPosition,
                l = i(n),
                s = o(l);
            return {
                moveBlockToPosition: function(e, t) {
                    var a = s.length - 1 - t;
                    c(e, l, l, a)
                }
            }
        }),
        x = Object(p.compose)(C, B)(S);
    a(53);

    function z(e) {
        var t = e.blocks,
            a = e.selectedBlockClientId,
            r = e.selectBlock;
        return Object(n.createElement)(o.DropZoneProvider, null, Object(n.createElement)("ul", {
            className: "editor-block-navigation__list block-editor-block-navigation__list",
            role: "list"
        }, t.map(function(e) {
            var t = e.clientId === a;
            return Object(n.createElement)("li", {
                key: e.clientId
            }, Object(n.createElement)(x, {
                block: e,
                isSelected: t,
                onClick: function() {
                    return r(e.clientId)
                }
            }))
        })))
    }
    var I = Object(p.compose)(Object(r.withSelect)(function(e) {
            var t = e("amp/story"),
                a = t.getCurrentPage,
                n = t.isReordering,
                r = e("core/block-editor"),
                o = r.getBlockOrder,
                i = r.getBlocksByClientId,
                l = r.getSelectedBlockClientId;
            return {
                blocks: (a() ? i(o(a())) : []).filter(function(e) {
                    var t = e.name;
                    return c.d.includes(t)
                }).reverse(),
                selectedBlockClientId: l(),
                isReordering: n()
            }
        }), Object(r.withDispatch)(function(e, t) {
            var a = t.onSelect,
                n = void 0 === a ? function() {} : a;
            return {
                selectBlock: function(t) {
                    e("core/block-editor").selectBlock(t), n(t)
                }
            }
        }))(function(e) {
            var t = e.blocks,
                a = e.selectBlock,
                r = e.selectedBlockClientId,
                c = e.isReordering,
                l = t.length > 0;
            return c ? null : Object(n.createElement)(o.NavigableMenu, {
                role: "presentation",
                className: "block-editor-block-navigation__container"
            }, Object(n.createElement)("p", {
                className: "block-editor-block-navigation__label"
            }, Object(i.__)("Block Navigation", "amp")), l && Object(n.createElement)(z, {
                blocks: t,
                selectedBlockClientId: r,
                selectBlock: a
            }), !l && Object(n.createElement)("p", {
                className: "block-editor-block-navigation__paragraph"
            }, Object(i.__)("No blocks created yet.", "amp")))
        }),
        A = a(8),
        T = a(7),
        P = function(e) {
            var t = e.clientId,
                a = e.name,
                r = e.attributes,
                i = e.innerBlocks,
                c = void 0 === i ? [] : i,
                l = Object(A.createBlock)(a, r, c);
            return Object(n.createElement)(o.Disabled, {
                className: "block-editor-block-preview__content editor-styles-wrapper",
                "aria-hidden": !0
            }, Object(n.createElement)(T.BlockEdit, {
                name: a,
                focus: !1,
                clientId: t,
                isLocked: !0,
                insertBlocksAfter: !1,
                attributes: l.attributes,
                setAttributes: function() {}
            }))
        },
        D = a(30),
        R = Object(r.withSelect)(function(e, t) {
            var a = t.block,
                n = t.label;
            if (!a) return {
                content: n,
                icon: null
            };
            var r, o = e("core/editor").getEditedPostAttribute,
                c = e("core"),
                l = c.getAuthors,
                s = c.getMedia,
                u = Object(A.getBlockType)(a.name);
            switch (n = u.title, a.name) {
                case "core/image":
                    if (a.attributes.url && (r = a.attributes.url.slice(a.attributes.url.lastIndexOf("/")).slice(1, 30)).length > 0 && (n = r), a.attributes.id) {
                        var d = s(a.attributes.id);
                        d && (n = d.caption.raw || d.title.raw || n)
                    }
                    break;
                case "amp/amp-story-text":
                    n = (r = a.attributes.content.length > 0 ? a.attributes.content.replace(/<[^<>]+>/g, " ").slice(0, 30) : "").length > 0 ? r : u.title;
                    break;
                case "amp/amp-story-post-author":
                    var p = l().find(function(e) {
                        return e.id === o("author")
                    });
                    n = p ? p.name : Object(i.__)("Post Author", "amp");
                    break;
                case "amp/amp-story-post-date":
                    var m = o("date"),
                        f = Object(D.__experimentalGetSettings)().formats.date,
                        b = m || new Date;
                    n = Object(D.dateI18n)(f, b);
                    break;
                case "amp/amp-story-post-title":
                    n = o("title") || u.title
            }
            return {
                content: n,
                icon: u.icon
            }
        })(function(e) {
            var t = e.content,
                a = e.icon,
                r = e.displayIcon,
                o = void 0 === r || r,
                i = e.alignIcon,
                c = void 0 === i ? "left" : i,
                l = e.accessibilityText,
                s = void 0 !== l && l;
            return Object(n.createElement)(n.Fragment, null, o && "left" === c && Object(n.createElement)(T.BlockIcon, {
                icon: a
            }), t.length > 20 ? "".concat(t.substr(0, 20), "…") : t, s && Object(n.createElement)("span", {
                className: "screen-reader-text"
            }, s), o && "right" === c && Object(n.createElement)(T.BlockIcon, {
                icon: a
            }))
        }),
        N = function(e) {
            var t = e.pages,
                a = e.currentPage,
                r = e.onClick;
            /* translators: %s: Page number */
            return Object(n.createElement)("ul", {
                className: "amp-story-editor-carousel-item-list"
            }, t.map(function(e, t) {
                var c, l = e.clientId === a ? "amp-story-editor-carousel-item amp-story-editor-carousel-item--active" : "amp-story-editor-carousel-item";
                return Object(n.createElement)("li", {
                    key: e.clientId,
                    className: l
                }, Object(n.createElement)(o.Tooltip, {
                    text: (c = t + 1, Object(i.sprintf)(Object(i.__)("Go to page %s", "amp"), c))
                }, Object(n.createElement)(o.Button, {
                    onClick: function(t) {
                        t.preventDefault(), r(e.clientId)
                    },
                    disabled: e.clientId === a
                }, Object(n.createElement)("span", {
                    className: "screen-reader-text"
                }, function(e) {
                    return Object(i.sprintf)(Object(i.__)("Page %s", "amp"), e)
                }(t + 1)))))
            }))
        },
        M = (a(54), function(e) {
            function t() {
                var e;
                return f()(this, t), (e = q()(this, y()(t).apply(this, arguments))).translateWrapper.bind(k()(e)), e
            }
            return _()(t, e), h()(t, [{
                key: "translateWrapper",
                value: function() {
                    var e = document.querySelector("#amp-story-controls + .block-editor-block-list__layout");
                    if (e) {
                        var t = this.props.currentIndex;
                        this.props.isReordering ? e.style.display = "none" : (e.style.display = "", e.style.transform = "translateX(calc(50% - ".concat(1, "px - ").concat((c.q + 50) / 2, "px - ").concat(50 * t, "px - ").concat(t * c.q, "px))"))
                    }
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.translateWrapper()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.translateWrapper()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.pages,
                        a = e.currentPage,
                        r = e.previousPage,
                        c = e.nextPage,
                        l = e.onChangePage,
                        s = e.isReordering,
                        u = function(e) {
                            l(e)
                        };
                    return s ? Object(n.createElement)(U, null) : Object(n.createElement)(n.Fragment, null, Object(n.createElement)("div", {
                        className: "amp-story-editor-carousel-navigation"
                    }, Object(n.createElement)(o.IconButton, {
                        icon: "arrow-left-alt2",
                        label: Object(i.__)("Previous Page", "amp"),
                        onClick: function(e) {
                            e.preventDefault(), u(r)
                        },
                        disabled: null === r
                    }), Object(n.createElement)(N, {
                        pages: t,
                        currentPage: a,
                        onClick: u
                    }), Object(n.createElement)(o.IconButton, {
                        icon: "arrow-right-alt2",
                        label: Object(i.__)("Next Page", "amp"),
                        onClick: function(e) {
                            e.preventDefault(), u(c)
                        },
                        disabled: null === c
                    })))
                }
            }]), t
        }(n.Component)),
        V = Object(p.compose)(Object(r.withSelect)(function(e) {
            var t = e("core/block-editor"),
                a = t.getBlockOrder,
                n = t.getBlocksByClientId,
                r = t.getAdjacentBlockClientId,
                o = e("amp/story"),
                i = o.getCurrentPage,
                c = o.isReordering,
                l = i(),
                s = n(a()),
                u = s.findIndex(function(e) {
                    return e.clientId === l
                });
            return {
                pages: s,
                currentPage: l,
                currentIndex: Math.max(0, u),
                previousPage: i() ? r(l, -1) : null,
                nextPage: i() ? r(l, 1) : null,
                isReordering: c()
            }
        }), Object(r.withDispatch)(function(e) {
            var t = e("amp/story").setCurrentPage,
                a = e("core/block-editor").selectBlock;
            return {
                onChangePage: function(e) {
                    t(e), a(e)
                }
            }
        }))(M),
        F = function(e) {
            function t() {
                var e;
                return f()(this, t), (e = q()(this, y()(t).apply(this, arguments))).state = {
                    isDragging: !1
                }, e.onDrop = e.onDrop.bind(k()(e)), e
            }
            return _()(t, e), h()(t, [{
                key: "getInsertIndex",
                value: function(e) {
                    var t = this.props.index;
                    if (void 0 !== t) return "right" === e.x ? t + 1 : t
                }
            }, {
                key: "onDrop",
                value: function(e, t) {
                    var a = this.props,
                        n = a.page.clientId,
                        r = a.movePageToPosition,
                        o = a.index,
                        i = function(e) {
                            var t = {
                                srcRootClientId: null,
                                srcClientId: null,
                                srcIndex: null,
                                type: null
                            };
                            if (!e.dataTransfer) return t;
                            try {
                                t = Object.assign(t, JSON.parse(e.dataTransfer.getData("text")))
                            } catch (e) {
                                return t
                            }
                            return t
                        }(e),
                        c = i.srcClientId,
                        l = i.srcIndex,
                        s = i.type;
                    if ("block" === s && c !== n) {
                        var u = this.getInsertIndex(t);
                        r(c, l < o ? u - 1 : u)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        a = t.page,
                        r = t.index,
                        i = a.clientId,
                        c = "reorder-page-".concat(i),
                        l = {
                            type: "block",
                            srcIndex: r,
                            srcClientId: i
                        };
                    return Object(n.createElement)("div", {
                        className: "amp-story-reorderer-item"
                    }, Object(n.createElement)(o.Draggable, {
                        elementId: c,
                        transferData: l,
                        onDragStart: function() {
                            return e.setState({
                                isDragging: !0
                            })
                        },
                        onDragEnd: function() {
                            return e.setState({
                                isDragging: !1
                            })
                        }
                    }, function(t) {
                        var r = t.onDraggableStart,
                            i = t.onDraggableEnd;
                        return Object(n.createElement)(n.Fragment, null, Object(n.createElement)(o.DropZone, {
                            className: e.state.isDragging ? "is-dragging-page" : void 0,
                            onDrop: e.onDrop
                        }), Object(n.createElement)("div", {
                            className: "amp-story-reorderer-item-page",
                            id: c
                        }, Object(n.createElement)("div", {
                            className: "amp-story-page-preview",
                            onDragStart: r,
                            onDragEnd: i,
                            draggable: !0
                        }, Object(n.createElement)(P, a))))
                    }))
                }
            }]), t
        }(n.Component),
        H = Object(r.withSelect)(function(e, t) {
            var a = t.page.clientId;
            return {
                index: (0, e("amp/story").getBlockIndex)(a)
            }
        }),
        L = Object(r.withDispatch)(function(e) {
            return {
                movePageToPosition: e("amp/story").movePageToPosition
            }
        }),
        W = Object(p.compose)(H, L)(F),
        U = (a(55), Object(r.withSelect)(function(e) {
            return {
                pages: (0, e("core/block-editor").getBlocksByClientId)((0, e("amp/story").getBlockOrder)())
            }
        })(function(e) {
            var t = e.pages;
            return Object(n.createElement)(o.DropZoneProvider, null, Object(n.createElement)("div", {
                className: "amp-story-reorderer"
            }, t.map(function(e) {
                return Object(n.createElement)(W, {
                    key: "page-".concat(e.clientId),
                    page: e
                })
            })))
        })),
        Q = (a(28), a(56), function(e) {
            return Object(n.createElement)("svg", e, Object(n.createElement)("path", {
                d: "M14 0h10v2H14V0zm0 7h10v2H14V7zm0 7h10v2H14v-2zm-2 1l-5 4v-3.069C3.06 15.436 0 12.072 0 8c0-4.411 3.589-8 8-8h3v2H8C4.691 2 2 4.691 2 8c0 2.967 2.167 5.431 5 5.91V11l5 4z",
                fill: "#555D66"
            }))
        });
    Q.defaultProps = {
        width: "24",
        height: "19",
        viewBox: "0 0 24 19",
        xmlns: "http://www.w3.org/2000/svg"
    };
    var G = Object(p.compose)(Object(r.withSelect)(function(e) {
            return {
                isReordering: (0, e("amp/story").isReordering)()
            }
        }), Object(r.withDispatch)(function(e) {
            var t = e("core/block-editor").clearSelectedBlock,
                a = e("amp/story"),
                n = a.startReordering;
            return {
                startReordering: function() {
                    t(), n()
                },
                saveOrder: a.saveOrder,
                resetOrder: a.resetOrder
            }
        }))(function(e) {
            var t = e.isReordering,
                a = e.startReordering,
                r = e.saveOrder,
                c = e.resetOrder;
            return t ? Object(n.createElement)(n.Fragment, null, Object(n.createElement)(o.IconButton, {
                className: "amp-story-controls-reorder-cancel",
                onClick: c,
                icon: "no-alt"
            }, Object(i.__)("Cancel", "amp")), Object(n.createElement)(o.Button, {
                className: "amp-story-controls-reorder-save",
                onClick: r,
                isLarge: !0,
                isPrimary: !0
            }, Object(i.__)("Save Changes", "amp"))) : Object(n.createElement)(n.Fragment, null, Object(n.createElement)(qe, null), Object(n.createElement)(o.IconButton, {
                className: "amp-story-controls-reorder",
                icon: Q({
                    width: 24,
                    height: 19
                }),
                label: Object(i.__)("Reorder Pages", "amp"),
                onClick: a
            }))
        }),
        $ = Object(r.withSelect)(function(e) {
            var t = e("amp/story").getCurrentPage,
                a = e("core/block-editor"),
                n = a.canInsertBlockType,
                r = a.getBlockListSettings;
            return {
                isReordering: (0, e("amp/story").isReordering)(),
                canInsertBlockType: function(e) {
                    var a = r(t());
                    return n(e, t()) && a && a.allowedBlocks.includes(e)
                }
            }
        }),
        Y = Object(r.withDispatch)(function(e, t, a) {
            var n = a.select,
                r = n("amp/story").getCurrentPage,
                o = n("core/block-editor").getBlockOrder,
                i = e("core/block-editor").insertBlock;
            return {
                insertBlock: function(e) {
                    var t = r(),
                        a = o(t).length,
                        n = Object(A.createBlock)(e, {});
                    i(n, a, t)
                }
            }
        }),
        J = Object(p.compose)($, Y, Object(p.ifCondition)(function(e) {
            return !e.isReordering
        }))(function(e) {
            var t = e.insertBlock,
                a = e.canInsertBlockType;
            return ["amp/amp-story-text", "core/image", "amp/amp-story-cta"].map(function(e) {
                if (!a(e)) return null;
                var r = Object(A.getBlockType)(e);
                return Object(n.createElement)(o.IconButton, {
                    key: e,
                    icon: Object(n.createElement)(T.BlockIcon, {
                        icon: r.icon
                    }),
                    onClick: function() {
                        return t(e)
                    },
                    label: r.title,
                    labelPosition: "bottom"
                })
            })
        }),
        Z = a(4),
        K = function(e) {
            function t() {
                var e;
                return f()(this, t), (e = q()(this, y()(t).apply(this, arguments))).onDrop = e.onDrop.bind(k()(e)), e
            }
            return _()(t, e), h()(t, [{
                key: "onDrop",
                value: function(e) {
                    var t = this.props,
                        a = t.updateBlockAttributes,
                        n = t.srcClientId,
                        r = "block-".concat(n),
                        o = "clone-block-".concat(n),
                        i = document.getElementById(r),
                        c = document.getElementById(o),
                        l = document.querySelector('div[data-amp-selected="parent"] .editor-inner-blocks');
                    if (i && c && l) {
                        c.parentNode.style.visibility = "hidden", c.parentNode.style.transform = "none";
                        var s = c.getBoundingClientRect(),
                            u = l.getBoundingClientRect();
                        a(n, {
                            positionLeft: Object(Z.m)("x", s.left - u.left),
                            positionTop: Object(Z.m)("y", s.top - u.top)
                        })
                    } else e.preventDefault()
                }
            }, {
                key: "render",
                value: function() {
                    return Object(n.createElement)(o.DropZone, {
                        className: "editor-block-drop-zone",
                        onDrop: this.onDrop
                    })
                }
            }]), t
        }(n.Component),
        X = Object(r.withDispatch)(function(e) {
            var t = e("core/block-editor").updateBlockAttributes;
            return {
                updateBlockAttributes: function() {
                    t.apply(void 0, arguments)
                }
            }
        })(K),
        ee = Object(n.createElement)(o.SVG, {
            width: "18",
            height: "18",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 18"
        }, Object(n.createElement)(o.Path, {
            d: "M13,8c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S12.4,8,13,8z M5,6C4.4,6,4,6.4,4,7s0.4,1,1,1s1-0.4,1-1S5.6,6,5,6z M5,10 c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S5.6,10,5,10z M13,10c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S13.6,10,13,10z M9,6 C8.4,6,8,6.4,8,7s0.4,1,1,1s1-0.4,1-1S9.6,6,9,6z M9,10c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S9.6,10,9,10z"
        })),
        te = a(22),
        ae = a.n(te),
        ne = a(12),
        re = function(e) {
            function t() {
                var e;
                return f()(this, t), (e = q()(this, y()(t).apply(this, arguments))).onDragStart = e.onDragStart.bind(k()(e)), e.onDragOver = e.onDragOver.bind(k()(e)), e.onDrop = e.onDrop.bind(k()(e)), e.onDragEnd = e.onDragEnd.bind(k()(e)), e.resetDragState = e.resetDragState.bind(k()(e)), e.isChromeAndHasIframes = !1, e
            }
            return _()(t, e), h()(t, [{
                key: "componentWillUnmount",
                value: function() {
                    this.resetDragState()
                }
            }, {
                key: "onDragEnd",
                value: function(e) {
                    var t = this.props.onDragEnd,
                        a = void 0 === t ? ne.noop : t;
                    e && e.preventDefault(), this.resetDragState(), this.props.setTimeout(a)
                }
            }, {
                key: "onDragOver",
                value: function(e) {
                    this.cloneWrapper.style.top = "".concat(parseInt(this.cloneWrapper.style.top, 10) + e.clientY - this.cursorTop, "px"), this.cloneWrapper.style.left = "".concat(parseInt(this.cloneWrapper.style.left, 10) + e.clientX - this.cursorLeft, "px"), this.cursorLeft = e.clientX, this.cursorTop = e.clientY
                }
            }, {
                key: "onDrop",
                value: function() {
                    this.onDragEnd(null)
                }
            }, {
                key: "onDragStart",
                value: function(e) {
                    var t = this.props,
                        a = t.elementId,
                        n = t.transferData,
                        r = t.onDragStart,
                        o = void 0 === r ? ne.noop : r,
                        i = document.getElementById(a),
                        c = i.closest('div[data-type="amp/amp-story-page"]');
                    if (i && c) {
                        e.dataTransfer.setData("text", JSON.stringify(n));
                        var l = i.parentNode;
                        this.cloneWrapper = document.createElement("div"), this.cloneWrapper.classList.add("components-draggable__clone"), this.cloneWrapper.style.width = "".concat(i.clientWidth, "px"), this.cloneWrapper.style.height = "".concat(i.clientHeight, "px");
                        var s = i.cloneNode(!0);
                        this.cloneWrapper.style.transform = s.style.transform, this.cloneWrapper.style.top = "".concat(Object(Z.n)("y", parseInt(s.style.top)), "px"), this.cloneWrapper.style.left = "".concat(Object(Z.n)("x", parseInt(s.style.left)), "px"), s.id = "clone-".concat(a), s.style.top = 0, s.style.left = 0, s.style.transform = "none", ae()(s.querySelectorAll("iframe")).forEach(function(e) {
                            return e.parentNode.removeChild(e)
                        }), this.cloneWrapper.appendChild(s), l.appendChild(this.cloneWrapper), this.cursorLeft = e.clientX, this.cursorTop = e.clientY, document.body.classList.add("is-dragging-components-draggable"), document.addEventListener("dragover", this.onDragOver), /Chrome/i.test(window.navigator.userAgent) && ae()(document.getElementById("editor").querySelectorAll("iframe")).length > 0 && (this.isChromeAndHasIframes = !0, document.addEventListener("drop", this.onDrop)), this.props.setTimeout(o)
                    } else e.preventDefault()
                }
            }, {
                key: "resetDragState",
                value: function() {
                    document.removeEventListener("dragover", this.onDragOver), this.cloneWrapper && this.cloneWrapper.parentNode && (this.cloneWrapper.parentNode.removeChild(this.cloneWrapper), this.cloneWrapper = null), this.isChromeAndHasIframes && (this.isChromeAndHasIframes = !1, document.removeEventListener("drop", this.onDrop)), document.body.classList.remove("is-dragging-components-draggable")
                }
            }, {
                key: "render",
                value: function() {
                    return (0, this.props.children)({
                        onDraggableStart: this.onDragStart,
                        onDraggableEnd: this.onDragEnd
                    })
                }
            }]), t
        }(n.Component),
        oe = Object(p.withSafeTimeout)(re),
        ie = Object(r.withSelect)(function(e, t) {
            var a = t.clientId,
                n = e("core/block-editor"),
                r = n.getBlockIndex,
                o = (0, n.getBlockRootClientId)(a);
            return {
                index: r(a, o),
                rootClientId: o
            }
        })(function(e) {
            var t = e.children,
                a = e.clientId,
                r = e.rootClientId,
                o = e.blockElementId,
                i = e.index,
                c = e.onDragStart,
                l = e.onDragEnd,
                s = {
                    type: "block",
                    srcIndex: i,
                    srcRootClientId: r,
                    srcClientId: a
                };
            return Object(n.createElement)(oe, {
                elementId: o,
                transferData: s,
                onDragStart: c,
                onDragEnd: l
            }, function(e) {
                var a = e.onDraggableStart,
                    n = e.onDraggableEnd;
                return t({
                    onDraggableStart: a,
                    onDraggableEnd: n
                })
            })
        }),
        ce = function(e) {
            var t = e.isVisible,
                a = e.className,
                r = e.icon,
                o = e.onDragStart,
                i = e.onDragEnd,
                c = e.blockElementId,
                l = e.clientId;
            if (!t) return null;
            var s = w()("editor-block-mover__control-drag-handle block-editor-block-mover__control-drag-handle", a);
            return Object(n.createElement)(ie, {
                clientId: l,
                blockElementId: c,
                onDragStart: o,
                onDragEnd: i
            }, function(e) {
                var t = e.onDraggableStart,
                    a = e.onDraggableEnd;
                return Object(n.createElement)("div", {
                    className: s,
                    "aria-hidden": "true",
                    onDragStart: t,
                    onDragEnd: a,
                    draggable: !0
                }, r)
            })
        },
        le = a(26),
        se = a.n(le),
        ue = function(e) {
            function t() {
                var e;
                return f()(this, t), (e = q()(this, y()(t).apply(this, arguments))).proxyEvent = e.proxyEvent.bind(k()(e)), e.eventMap = {}, e
            }
            return _()(t, e), h()(t, [{
                key: "proxyEvent",
                value: function(e) {
                    var t = !!e.nativeEvent._blockHandled;
                    e.nativeEvent._blockHandled = !0;
                    var a = this.eventMap[e.type];
                    t && (a += "Handled"), this.props[a] && this.props[a](e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        a = t.childHandledEvents,
                        r = void 0 === a ? [] : a,
                        o = t.forwardedRef,
                        i = se()(t, ["childHandledEvents", "forwardedRef"]),
                        c = Object(ne.reduce)([].concat(ae()(r), ae()(Object.keys(i))), function(t, a) {
                            var n = a.match(/^on([A-Z][a-zA-Z]+?)(Handled)?$/);
                            if (n) {
                                !!n[2] && delete i[a];
                                var r = "on" + n[1];
                                t[r] = e.proxyEvent, e.eventMap[n[1].toLowerCase()] = r
                            }
                            return t
                        }, {});
                    return Object(n.createElement)("div", u()({
                        ref: o
                    }, i, c))
                }
            }]), t
        }(n.Component),
        de = function(e, t) {
            return Object(n.createElement)(ue, u()({}, e, {
                forwardedRef: t
            }))
        };
    de.displayName = "IgnoreNestedEvents";
    var pe = Object(n.forwardRef)(de),
        me = (a(60), function(e) {
            function t() {
                var e;
                return f()(this, t), (e = q()(this, y()(t).apply(this, arguments))).state = {
                    isFocused: !1
                }, e.onFocus = e.onFocus.bind(k()(e)), e.onBlur = e.onBlur.bind(k()(e)), e
            }
            return _()(t, e), h()(t, [{
                key: "onFocus",
                value: function() {
                    this.setState({
                        isFocused: !0
                    })
                }
            }, {
                key: "onBlur",
                value: function() {
                    this.setState({
                        isFocused: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.isDraggable,
                        a = e.onDragStart,
                        r = e.clientId,
                        o = e.blockElementId,
                        i = this.state.isFocused;
                    return Object(n.createElement)(pe, {
                        childHandledEvents: ["onDragStart", "onMouseDown"]
                    }, Object(n.createElement)("div", {
                        className: w()("amp-story-editor-block-mover editor-block-mover block-editor-block-mover", {
                            "is-visible": i
                        })
                    }, Object(n.createElement)(ce, {
                        className: "editor-block-mover__control block-editor-block-mover__control",
                        icon: ee,
                        clientId: r,
                        blockElementId: o,
                        isVisible: t,
                        onDragStart: a
                    })))
                }
            }]), t
        }(n.Component)),
        fe = a(25),
        be = (a(61), function(e) {
            return Object(n.createElement)("svg", e, Object(n.createElement)("g", {
                clipPath: "url(#a)"
            }, Object(n.createElement)("path", {
                d: "M71.115 91.034H1.654V1.655h52.923l16.538 16.552v72.828z",
                fill: "#fff"
            }), Object(n.createElement)("path", {
                d: "M54.577 1.655v16.552h16.538L54.577 1.655z",
                fill: "#A9A9A9"
            }), Object(n.createElement)("path", {
                d: "M71.115 19.862H54.577a1.66 1.66 0 0 1-1.654-1.655V1.655c0-.91.744-1.655 1.654-1.655.447 0 .86.182 1.174.48L72.29 17.032a1.65 1.65 0 0 1 0 2.334 1.652 1.652 0 0 1-1.175.496zm-14.884-3.31H67.13L56.23 5.644v10.908z",
                fill: "#686868"
            }), Object(n.createElement)("path", {
                d: "M38.038 92.69H1.654A1.66 1.66 0 0 1 0 91.034V1.655C0 .745.744 0 1.654 0h52.923c.447 0 .86.182 1.174.48L72.29 17.032c.297.314.48.728.48 1.175V48c0 .91-.745 1.655-1.655 1.655S69.462 48.91 69.462 48V18.886L53.898 3.31H3.308v86.07h34.73c.91 0 1.654.744 1.654 1.655a1.66 1.66 0 0 1-1.654 1.655z",
                fill: "#686868"
            }), Object(n.createElement)("path", {
                d: "M64.5 94.345c10.96 0 19.846-8.893 19.846-19.862 0-10.97-8.885-19.862-19.846-19.862-10.96 0-19.846 8.892-19.846 19.862 0 10.97 8.885 19.862 19.846 19.862z",
                fill: "#A9A9A9"
            }), Object(n.createElement)("path", {
                d: "M64.5 96C52.625 96 43 86.367 43 74.483s9.625-21.517 21.5-21.517S86 62.599 86 74.483c-.017 11.884-9.625 21.5-21.5 21.517zm0-39.724c-10.055 0-18.192 8.143-18.192 18.207 0 10.063 8.137 18.207 18.192 18.207s18.192-8.144 18.192-18.207c-.016-10.047-8.153-18.19-18.192-18.207z",
                fill: "#686868"
            }), Object(n.createElement)("path", {
                d: "M64.5 86.069a1.66 1.66 0 0 1-1.654-1.655V64.552c0-.91.744-1.655 1.654-1.655.91 0 1.654.744 1.654 1.655v19.862a1.66 1.66 0 0 1-1.654 1.655z",
                fill: "#fff"
            }), Object(n.createElement)("path", {
                d: "M74.423 76.138H54.577a1.66 1.66 0 0 1-1.654-1.655c0-.91.744-1.655 1.654-1.655h19.846c.91 0 1.654.745 1.654 1.655a1.66 1.66 0 0 1-1.654 1.655z",
                fill: "#fff"
            })), Object(n.createElement)("defs", null, Object(n.createElement)("clipPath", {
                id: "a"
            }, Object(n.createElement)("path", {
                fill: "#fff",
                d: "M0 0h86v96H0z"
            }))))
        });
    be.defaultProps = {
        width: "86",
        height: "96",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };
    var he = function(e) {
        return Object(n.createElement)("svg", e, Object(n.createElement)("path", {
            d: "M9 7h7v2H9v7H7V9H0V7h7V0h2v7z",
            fill: "#FFF"
        }))
    };
    he.defaultProps = {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg"
    };
    var ve = function(e) {
            function t() {
                var e;
                return f()(this, t), (e = q()(this, y()(t).apply(this, arguments))).onToggle = e.onToggle.bind(k()(e)), e.state = {
                    storyTemplates: []
                }, e
            }
            return _()(t, e), h()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.props.fetchStoryTemplates()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props.getBlock;
                    if (e.storyTemplates !== this.props.storyTemplates || e.allBlocks !== this.props.allBlocks) {
                        var a = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var o, i = this.props.storyTemplates[Symbol.iterator](); !(a = (o = i.next()).done); a = !0) {
                                var c = t(o.value.clientId);
                                if (c) {
                                    var l = !0,
                                        s = !1,
                                        u = void 0;
                                    try {
                                        for (var d, p = c.innerBlocks[Symbol.iterator](); !(l = (d = p.next()).done); l = !0) {
                                            var m = d.value;
                                            m.attributes.ampFontFamily && Object(Z.s)(m.attributes.ampFontFamily)
                                        }
                                    } catch (e) {
                                        s = !0, u = e
                                    } finally {
                                        try {
                                            l || null == p.return || p.return()
                                        } finally {
                                            if (s) throw u
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                a || null == i.return || i.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        this.setState({
                            storyTemplates: this.props.storyTemplates
                        })
                    }
                }
            }, {
                key: "onToggle",
                value: function(e) {
                    var t = this.props.onToggle;
                    t && t(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        a = t.insertBlock,
                        r = t.getBlock;
                    return Object(n.createElement)(o.Dropdown, {
                        className: "editor-inserter block-editor-inserter",
                        contentClassName: "amp-stories__template-inserter__popover is-from-top is-bottom editor-inserter__popover",
                        onToggle: this.onToggle,
                        expandOnMobile: !0,
                        renderToggle: function(e) {
                            var t = e.onToggle,
                                a = e.isOpen;
                            return Object(n.createElement)(o.IconButton, {
                                icon: he({
                                    width: 16,
                                    height: 16
                                }),
                                label: Object(i.__)("Insert Template", "amp"),
                                onClick: t,
                                className: "editor-inserter__amp-inserter",
                                "aria-haspopup": "true",
                                "aria-expanded": a
                            })
                        },
                        renderContent: function(t) {
                            var c = t.onClose,
                                l = function(e) {
                                    var t = e ? r(e.clientId) : Object(A.createBlock)("amp/amp-story-page"),
                                        n = Object(Z.d)(t);
                                    a(n), c()
                                };
                            return Object(n.createElement)("div", {
                                className: "amp-stories__editor-inserter__menu"
                            }, Object(n.createElement)("div", {
                                className: "amp-stories__editor-inserter__results",
                                tabIndex: "0",
                                role: "region",
                                "aria-label": Object(i.__)("Available templates", "amp")
                            }, Object(n.createElement)("div", {
                                role: "list",
                                className: "editor-block-types-list block-editor-block-types-list"
                            }, Object(n.createElement)("div", {
                                className: "editor-block-preview block-editor-block-preview"
                            }, Object(n.createElement)(o.IconButton, {
                                icon: be({
                                    width: 86,
                                    height: 96
                                }),
                                label: Object(i.__)("Blank Page", "amp"),
                                onClick: function() {
                                    l(null)
                                },
                                className: "amp-stories__blank-page-inserter editor-block-preview__content block-editor-block-preview__content editor-styles-wrapper"
                            })), e.state.storyTemplates.map(function(e) {
                                return Object(n.createElement)("a", {
                                    key: "template-preview-".concat(e.id),
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        l(e)
                                    },
                                    onKeyDown: function(t) {
                                        Object(ne.includes)([fe.ENTER, fe.SPACE], t.keyCode) && l(e)
                                    },
                                    className: "components-button block-editor-block-preview"
                                }, Object(n.createElement)(P, {
                                    name: "core/block",
                                    attributes: {
                                        ref: e.id
                                    }
                                }))
                            }))))
                        }
                    })
                }
            }]), t
        }(n.Component),
        qe = Object(p.compose)(Object(r.withSelect)(function(e) {
            var t = e("core/editor").__experimentalGetReusableBlocks,
                a = e("core/block-editor"),
                n = a.getBlock,
                r = a.getBlocks,
                o = t();
            return {
                storyTemplates: o.filter(function(e) {
                    return function(e) {
                        var t = n(e);
                        return t && "amp/amp-story-page" === t.name
                    }(e.clientId)
                }),
                getBlock: n,
                allBlocks: r()
            }
        }), Object(r.withDispatch)(function(e) {
            return {
                fetchStoryTemplates: e("core/editor").__experimentalFetchReusableBlocks,
                insertBlock: e("core/block-editor").insertBlock
            }
        }))(ve);
    var ge = function(e) {
            var t = e.fonts,
                a = void 0 === t ? [] : t,
                r = e.onChange,
                o = void 0 === r ? function() {} : r,
                l = e.value,
                s = void 0 === l ? "" : l,
                u = {
                    value: "",
                    label: Object(i.__)("None", "amp")
                },
                d = a.map(function(e) {
                    return {
                        value: e.name,
                        label: e.name
                    }
                }),
                p = function(e) {
                    return c.g[e] ? c.g[e]({
                        height: 13
                    }) : e
                };
            return Object(n.createElement)(ke, {
                value: s,
                options: d,
                defaultOption: u,
                onChange: function(e) {
                    var t = e.value;
                    return o("" === t ? void 0 : t)
                },
                label: Object(i.__)("Font Family", "amp"),
                id: "amp-stories-font-family-picker",
                ariaLabel: function(e) {
                    return Object(i.sprintf)(
                        /* translators: %s: font name */
                        Object(i.__)("Font Family: %s", "amp"), e.label)
                },
                renderToggle: function(e) {
                    var t = e.label;
                    return p(t)
                },
                renderOption: function(e) {
                    return Object(n.createElement)("span", {
                        className: "components-preview-picker__dropdown-label",
                        "data-font-family": "" === e.value ? void 0 : e.value
                    }, p(e.label))
                }
            })
        },
        ye = (a(62), function(e) {
            function t(e) {
                var a;
                return f()(this, t), (a = q()(this, y()(t).call(this, e))).state = {
                    isRotating: !1,
                    angle: e.angle
                }, a.onRotateStart = a.onRotateStart.bind(k()(a)), a.onRotate = a.onRotate.bind(k()(a)), a.onRotateStop = a.onRotateStop.bind(k()(a)), a.onKeyUp = a.onKeyUp.bind(k()(a)), a
            }
            return _()(t, e), h()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.elementRef = document.getElementById(this.props.blockElementId)
                }
            }, {
                key: "onKeyUp",
                value: function(e) {
                    var t = this;
                    if (this.state.isRotating) {
                        e.preventDefault();
                        var a = e.keyCode;
                        if (fe.ESCAPE === a) this.elementRef.classList.remove("is-rotating"), this.elementRef.style.transform = "rotate(".concat(this.props.initialAngle, "deg)"), this.setState({
                            isRotating: !1,
                            angle: this.props.initialAngle
                        }, function() {
                            return t.props.onRotateStop && t.props.onRotateStop(e, t.props.initialAngle)
                        });
                        else if (fe.LEFT === a || fe.RIGHT === a) {
                            var n = fe.LEFT === a ? this.state.angle - 30 : this.state.angle + 30;
                            n > 360 ? n -= 360 : n <= -360 && (n += 360), this.elementRef.style.transform = "rotate(".concat(n, "deg)"),
                                /* translators: %s: degrees */
                                this.props.speak(Object(i.sprintf)(Object(i.__)("Rotating block by %s degrees", "amp"), n)), this.setState({
                                angle: n
                            }, function() {
                                return t.props.onRotate && t.props.onRotate(e, n)
                            })
                        } else fe.ENTER === a && (
                            /* translators: %s: degrees */
                            this.props.speak(Object(i.sprintf)(Object(i.__)("Saving block rotation of %s degrees", "amp"), this.state.angle)), this.onRotateStop(e))
                    }
                }
            }, {
                key: "onRotateStart",
                value: function(e) {
                    var t = this;
                    this.state.isRotating || (e.button && 2 === e.button || (e.preventDefault(), this.elementRef.classList.add("is-rotating"), this.setState({
                        isRotating: !0
                    }, function() {
                        return t.props.onRotateStart && t.props.onRotateStart(e)
                    })))
                }
            }, {
                key: "onRotate",
                value: function(e) {
                    var t = this;
                    if (this.state.isRotating) {
                        e.preventDefault(), this.elementRef.classList.add("is-rotating");
                        var a = this.elementRef.getBoundingClientRect(),
                            n = a.top,
                            r = a.left + a.width / 2,
                            o = n + a.height / 2,
                            i = e.clientX - r,
                            c = e.clientY - o,
                            l = 180 / Math.PI,
                            s = Math.ceil(-l * Math.atan2(i, c));
                        this.state.angle !== s && (this.elementRef.style.transform = "rotate(".concat(s, "deg)"), this.setState({
                            angle: s
                        }, function() {
                            return t.props.onRotate && t.props.onRotate(e, s)
                        }))
                    }
                }
            }, {
                key: "onRotateStop",
                value: function(e) {
                    var t = this;
                    this.state.isRotating && (e.preventDefault(), this.elementRef.classList.remove("is-rotating"), this.elementRef.style.transform = "rotate(".concat(this.state.angle, "deg)"), this.setState({
                        isRotating: !1
                    }, function() {
                        return t.props.onRotateStop && t.props.onRotateStop(e, t.state.angle)
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = w()(this.props.className, {
                        "is-rotating": this.state.isRotating
                    });
                    return Object(n.createElement)("div", {
                        className: e
                    }, Object(n.createElement)("div", {
                        className: "rotatable-box-wrap"
                    }, Object(n.createElement)(o.Button, {
                        role: "switch",
                        "aria-checked": this.state.isRotating,
                        onMouseDown: this.onRotateStart,
                        className: "rotatable-box-wrap__handle"
                    }, Object(n.createElement)("span", {
                        className: "screen-reader-text"
                    }, Object(i.__)("Rotate Block", "amp")))), this.props.children)
                }
            }]), t
        }(n.Component)),
        Oe = Object(p.compose)(o.withSpokenMessages, Object(p.withGlobalEvents)({
            mousemove: "onRotate",
            mouseup: "onRotateStop",
            keyup: "onKeyUp"
        }))(ye);
    a(63);
    var ke = function(e) {
            var t = e.value,
                a = e.options,
                r = e.defaultOption,
                i = e.onChange,
                c = e.label,
                l = e.id,
                s = e.renderToggle,
                u = e.renderOption,
                d = e.ariaLabel,
                p = a.find(function(e) {
                    return t && e.value === t
                }) || r;
            return Object(n.createElement)(o.BaseControl, {
                label: c,
                id: l
            }, Object(n.createElement)("div", {
                className: "components-preview-picker__buttons"
            }, Object(n.createElement)(o.Dropdown, {
                className: "components-preview-picker__dropdown",
                contentClassName: "components-preview-picker__dropdown-content",
                position: "bottom",
                renderToggle: function(e) {
                    var t = e.isOpen,
                        a = e.onToggle;
                    return Object(n.createElement)(o.Button, {
                        className: "components-preview-picker__selector",
                        isLarge: !0,
                        onClick: a,
                        "aria-expanded": t,
                        "aria-label": d(p)
                    }, s(p))
                },
                renderContent: function() {
                    return Object(n.createElement)(o.NavigableMenu, null, [r].concat(ae()(a)).map(function(e) {
                        var t = e.value === p.value;
                        return Object(n.createElement)(o.Button, {
                            key: e.value,
                            onClick: function() {
                                return i(e)
                            },
                            role: "menuitemradio",
                            "aria-checked": t
                        }, t && Object(n.createElement)(o.Dashicon, {
                            icon: "saved"
                        }), u(e))
                    }))
                }
            })))
        },
        je = a(40),
        _e = a.n(je),
        Ee = a(41);
    var we = function(e) {
        var t = e.icon,
            a = e.hasChildBlocksWithInserterSupport,
            r = e.onClick,
            o = e.isDisabled,
            i = e.title,
            c = e.className,
            l = se()(e, ["icon", "hasChildBlocksWithInserterSupport", "onClick", "isDisabled", "title", "className"]),
            s = t ? {
                backgroundColor: t.background,
                color: t.foreground
            } : {},
            d = t && t.shadowColor ? {
                backgroundColor: t.shadowColor
            } : {};
        return Object(n.createElement)("li", {
            className: "editor-block-types-list__list-item block-editor-block-types-list__list-item"
        }, Object(n.createElement)("button", u()({
            className: w()("editor-block-types-list__item block-editor-block-types-list__item", c, {
                "editor-block-types-list__item-has-children block-editor-block-types-list__item-has-children": a
            }),
            onClick: function(e) {
                e.preventDefault(), r()
            },
            disabled: o,
            "aria-label": i
        }, l), Object(n.createElement)("span", {
            className: "editor-block-types-list__item-icon block-editor-block-types-list__item-icon",
            style: s
        }, Object(n.createElement)(T.BlockIcon, {
            icon: t,
            showColors: !0
        }), a && Object(n.createElement)("span", {
            className: "editor-block-types-list__item-icon-stack block-editor-block-types-list__item-icon-stack",
            style: d
        })), Object(n.createElement)("span", {
            className: "editor-block-types-list__item-title block-editor-block-types-list__item-title"
        }, i)))
    };
    var Se, Ce, Be, xe, ze, Ie, Ae, Te = function(e) {
            var t = e.items,
                a = e.onSelect,
                r = e.onHover,
                o = void 0 === r ? function() {} : r,
                i = e.children;
            return Object(n.createElement)("ul", {
                role: "list",
                className: "editor-block-types-list block-editor-block-types-list"
            }, t && t.map(function(e) {
                return Object(n.createElement)(we, {
                    key: e.id,
                    className: Object(A.getBlockMenuDefaultClassName)(e.id),
                    icon: e.icon,
                    hasChildBlocksWithInserterSupport: e.hasChildBlocksWithInserterSupport,
                    onClick: function() {
                        a(e), o(null)
                    },
                    onFocus: function() {
                        return o(e)
                    },
                    onMouseEnter: function() {
                        return o(e)
                    },
                    onMouseLeave: function() {
                        return o(null)
                    },
                    onBlur: function() {
                        return o(null)
                    },
                    isDisabled: e.isDisabled,
                    title: e.title
                })
            }), i)
        },
        Pe = function(e) {
            return e.stopPropagation()
        },
        De = function(e) {
            return e = (e = (e = (e = Object(ne.deburr)(e)).replace(/^\//, "")).toLowerCase()).trim()
        },
        Re = function(e) {
            function t() {
                var e;
                return f()(this, t), (e = q()(this, y()(t).apply(this, arguments))).state = {
                    childItems: [],
                    filterValue: "",
                    hoveredItem: null,
                    suggestedItems: [],
                    reusableItems: [],
                    itemsPerCategory: {},
                    openPanels: ["suggested"]
                }, e.onChangeSearchInput = e.onChangeSearchInput.bind(k()(e)), e.onHover = e.onHover.bind(k()(e)), e.panels = {}, e.inserterResults = Object(n.createRef)(), e
            }
            return _()(t, e), h()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.filter()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.items !== this.props.items && this.filter(this.state.filterValue)
                }
            }, {
                key: "onChangeSearchInput",
                value: function(e) {
                    this.filter(e.target.value)
                }
            }, {
                key: "onHover",
                value: function(e) {
                    this.setState({
                        hoveredItem: e
                    });
                    var t = this.props,
                        a = t.showInsertionPoint,
                        n = t.hideInsertionPoint;
                    e ? a() : n()
                }
            }, {
                key: "bindPanel",
                value: function(e) {
                    var t = this;
                    return function(a) {
                        t.panels[e] = a
                    }
                }
            }, {
                key: "onTogglePanel",
                value: function(e) {
                    var t = this;
                    return function() {
                        -1 !== t.state.openPanels.indexOf(e) ? t.setState({
                            openPanels: Object(ne.without)(t.state.openPanels, e)
                        }) : (t.setState({
                            openPanels: [].concat(ae()(t.state.openPanels), [e])
                        }), t.props.setTimeout(function() {
                            _e()(t.panels[e], t.inserterResults.current, {
                                alignWithTop: !0
                            })
                        }))
                    }
                }
            }, {
                key: "filterOpenPanels",
                value: function(e, t, a, n) {
                    if (e === this.state.filterValue) return this.state.openPanels;
                    if (!e) return ["suggested"];
                    var r = [];
                    return n.length > 0 && r.push("reusable"), a.length > 0 && (r = r.concat(Object.keys(t))), r
                }
            }, {
                key: "filter",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = this.props,
                        a = t.debouncedSpeak,
                        n = t.items,
                        r = t.rootChildBlocks,
                        o = function(e, t) {
                            var a = De(t),
                                n = function(e) {
                                    return -1 !== De(e).indexOf(a)
                                },
                                r = Object(A.getCategories)();
                            return e.filter(function(e) {
                                var t = Object(ne.find)(r, {
                                    slug: e.category
                                });
                                return n(e.title) || Object(ne.some)(e.keywords, n) || t && n(t.title)
                            })
                        }(n, e),
                        c = Object(ne.filter)(o, function(e) {
                            var t = e.name;
                            return Object(ne.includes)(r, t)
                        }),
                        l = [];
                    if (!e) {
                        var s = this.props.maxSuggestedItems || 9;
                        l = Object(ne.filter)(n, function(e) {
                            return e.utility > 0
                        }).slice(0, s)
                    }
                    var u = Object(ne.filter)(o, {
                            category: "reusable"
                        }),
                        d = function(e) {
                            return Object(ne.findIndex)(Object(A.getCategories)(), function(t) {
                                return t.slug === e.category
                            })
                        },
                        p = Object(ne.flow)(function(e) {
                            return Object(ne.filter)(e, function(e) {
                                return "reusable" !== e.category
                            })
                        }, function(e) {
                            return Object(ne.sortBy)(e, d)
                        }, function(e) {
                            return Object(ne.groupBy)(e, "category")
                        })(o);
                    this.setState({
                        hoveredItem: null,
                        childItems: c,
                        filterValue: e,
                        suggestedItems: l,
                        reusableItems: u,
                        itemsPerCategory: p,
                        openPanels: this.filterOpenPanels(e, p, o, u)
                    });
                    var m = Object.keys(p).reduce(function(e, t) {
                        return e + p[t].length
                    }, 0);
                    a(Object(i.sprintf)(Object(i._n)("%d result found.", "%d results found.", m, "amp"), m))
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    Object(ne.includes)([fe.LEFT, fe.DOWN, fe.RIGHT, fe.UP, fe.BACKSPACE, fe.ENTER], e.keyCode) && e.stopPropagation()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        a = t.instanceId,
                        r = t.onSelect,
                        c = this.state,
                        l = c.hoveredItem,
                        s = c.itemsPerCategory,
                        u = c.openPanels,
                        d = c.reusableItems,
                        p = c.suggestedItems,
                        m = function(e) {
                            return -1 !== u.indexOf(e)
                        };
                    return Object(n.createElement)("div", {
                        className: "editor-inserter__menu block-editor-inserter__menu",
                        onKeyPress: Pe,
                        onKeyDown: this.onKeyDown
                    }, Object(n.createElement)("label", {
                        htmlFor: "block-editor-inserter__search-".concat(a),
                        className: "screen-reader-text"
                    }, Object(i.__)("Search for a block", "amp")), Object(n.createElement)("input", {
                        id: "block-editor-inserter__search-".concat(a),
                        type: "search",
                        placeholder: Object(i.__)("Search for a block", "amp"),
                        className: "editor-inserter__search block-editor-inserter__search",
                        autoFocus: !0,
                        onChange: this.onChangeSearchInput
                    }), Object(n.createElement)("div", {
                        className: "editor-inserter__results block-editor-inserter__results",
                        ref: this.inserterResults,
                        tabIndex: "0",
                        role: "region",
                        "aria-label": Object(i.__)("Available block types", "amp")
                    }, !!p.length && Object(n.createElement)(o.PanelBody, {
                        title: Object(i._x)("Most Used", "blocks", "amp"),
                        opened: m("suggested"),
                        onToggle: this.onTogglePanel("suggested"),
                        ref: this.bindPanel("suggested")
                    }, Object(n.createElement)(Te, {
                        items: p,
                        onSelect: r,
                        onHover: this.onHover
                    })), Object(ne.map)(Object(A.getCategories)(), function(t) {
                        var a = s[t.slug];
                        return a && a.length ? Object(n.createElement)(o.PanelBody, {
                            key: t.slug,
                            title: t.title,
                            icon: t.icon,
                            opened: m(t.slug),
                            onToggle: e.onTogglePanel(t.slug),
                            ref: e.bindPanel(t.slug)
                        }, Object(n.createElement)(Te, {
                            items: a,
                            onSelect: r,
                            onHover: e.onHover
                        })) : null
                    }), !!d.length && Object(n.createElement)(o.PanelBody, {
                        className: "editor-inserter__reusable-blocks-panel block-editor-inserter__reusable-blocks-panel",
                        title: Object(i.__)("Reusable", "amp"),
                        opened: m("reusable"),
                        onToggle: this.onTogglePanel("reusable"),
                        icon: "controls-repeat",
                        ref: this.bindPanel("reusable")
                    }, Object(n.createElement)(Te, {
                        items: d,
                        onSelect: r,
                        onHover: this.onHover
                    }), Object(n.createElement)("a", {
                        className: "editor-inserter__manage-reusable-blocks block-editor-inserter__manage-reusable-blocks",
                        href: Object(Ee.addQueryArgs)("edit.php", {
                            post_type: "wp_block"
                        })
                    }, Object(i.__)("Manage All Reusable Blocks", "amp"))), Object(ne.isEmpty)(p) && Object(ne.isEmpty)(d) && Object(ne.isEmpty)(s) && Object(n.createElement)("p", {
                        className: "editor-inserter__no-results block-editor-inserter__no-results"
                    }, Object(i.__)("No blocks found.", "amp"))), l && Object(A.isReusableBlock)(l) && Object(n.createElement)(P, {
                        name: l.name,
                        attributes: l.initialAttributes
                    }))
                }
            }]), t
        }(n.Component),
        Ne = Object(p.compose)(Object(r.withSelect)(function(e, t) {
            var a = t.clientId,
                n = t.isAppender,
                r = t.rootClientId,
                o = e("core/block-editor"),
                i = o.getInserterItems,
                l = o.getBlockName,
                s = o.getBlockRootClientId,
                u = o.getBlockSelectionEnd,
                d = o.canInsertBlockType,
                p = o.getBlockListSettings,
                m = e("core/blocks").getChildBlockNames,
                f = e("amp/story").getCurrentPage,
                b = r;
            if (!b && !a && !n) {
                var h = u();
                h && (b = s(h) || void 0)
            }
            b || (b = f());
            var v = l(b),
                q = [].concat(ae()(i()), ae()(i(b))).filter(function(e) {
                    var t = e.name;
                    if (c.e.includes(t)) return !0;
                    var a = p(b);
                    return d(t, f()) && a && a.allowedBlocks.includes(t)
                });
            return {
                rootChildBlocks: m(v),
                items: ae()(new Set(q)),
                destinationRootClientId: b,
                currentPage: f()
            }
        }), Object(r.withDispatch)(function(e, t, a) {
            var n = a.select;
            return {
                showInsertionPoint: function() {},
                hideInsertionPoint: function() {},
                onSelect: function(a) {
                    var r = e("core/block-editor"),
                        o = r.replaceBlocks,
                        i = r.insertBlock,
                        l = n("core/block-editor").getSelectedBlock,
                        s = t.isAppender,
                        u = a.name,
                        d = a.initialAttributes,
                        p = l(),
                        m = Object(A.createBlock)(u, d);
                    if (!s && p && Object(A.isUnmodifiedDefaultBlock)(p)) o(p.clientId, m);
                    else {
                        var f = c.e.includes(u) ? void 0 : t.destinationRootClientId;
                        i(m, function(e) {
                            var a = n("core/block-editor"),
                                r = a.getBlockIndex,
                                o = a.getBlockSelectionEnd,
                                i = a.getBlockOrder,
                                l = t.clientId,
                                s = t.destinationRootClientId,
                                u = t.isAppender,
                                d = t.currentPage;
                            if (l) return r(l, s);
                            if (c.e.includes(e)) return i().indexOf(d) + 1;
                            var p = o();
                            return !u && p ? r(p, s) + 1 : i(s).length
                        }(u), f)
                    }
                    t.onSelect()
                }
            }
        }), o.withSpokenMessages, p.withInstanceId, p.withSafeTimeout)(Re),
        Me = function(e) {
            var t = e.onToggle,
                a = e.disabled,
                r = e.isOpen;
            return Object(n.createElement)(o.IconButton, {
                icon: "insert",
                label: Object(i.__)("Add block", "amp"),
                labelPosition: "bottom",
                onClick: t,
                className: "editor-inserter__toggle block-editor-inserter__toggle",
                "aria-haspopup": "true",
                "aria-expanded": r,
                disabled: a
            })
        },
        Ve = function(e) {
            function t() {
                var e;
                return f()(this, t), (e = q()(this, y()(t).apply(this, arguments))).onToggle = e.onToggle.bind(k()(e)), e.renderToggle = e.renderToggle.bind(k()(e)), e.renderContent = e.renderContent.bind(k()(e)), e
            }
            return _()(t, e), h()(t, [{
                key: "onToggle",
                value: function(e) {
                    var t = this.props.onToggle;
                    t && t(e)
                }
            }, {
                key: "renderToggle",
                value: function(e) {
                    var t = e.onToggle,
                        a = e.isOpen,
                        n = this.props,
                        r = n.disabled,
                        o = n.renderToggle,
                        i = void 0 === o ? Me : o;
                    return i({
                        onToggle: t,
                        isOpen: a,
                        disabled: r
                    })
                }
            }, {
                key: "renderContent",
                value: function(e) {
                    var t = e.onClose,
                        a = this.props,
                        r = a.rootClientId,
                        o = a.clientId,
                        i = a.isAppender;
                    return Object(n.createElement)(Ne, {
                        onSelect: t,
                        rootClientId: r,
                        clientId: o,
                        isAppender: i
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.position;
                    return Object(n.createElement)(o.Dropdown, {
                        className: "editor-inserter block-editor-inserter",
                        contentClassName: "editor-inserter__popover block-editor-inserter__popover",
                        position: e,
                        onToggle: this.onToggle,
                        expandOnMobile: !0,
                        headerTitle: Object(i.__)("Add a block", "amp"),
                        renderToggle: this.renderToggle,
                        renderContent: this.renderContent
                    })
                }
            }]), t
        }(n.Component),
        Fe = Object(r.withSelect)(function(e) {
            return {
                isReordering: (0, e("amp/story").isReordering)()
            }
        }),
        He = Object(p.compose)(Fe, Object(p.ifCondition)(function(e) {
            return !e.isReordering
        }))(Ve),
        Le = (a(66), 0),
        We = 0,
        Ue = null,
        Qe = function(e) {
            var t = e.isSelected,
                a = e.angle,
                r = e.blockName,
                i = e.ampFitText,
                l = e.minWidth,
                s = e.minHeight,
                d = e.onResizeStart,
                p = e.onResizeStop,
                m = e.children,
                f = se()(e, ["isSelected", "angle", "blockName", "ampFitText", "minWidth", "minHeight", "onResizeStart", "onResizeStop", "children"]),
                b = e.width,
                h = e.height,
                v = "core/image" === r,
                q = c.j.includes(r);
            return Object(n.createElement)(o.ResizableBox, u()({}, f, {
                className: w()("amp-story-resize-container", {
                    "is-selected": t
                }),
                size: {
                    height: h,
                    width: b
                },
                enable: {
                    top: !1,
                    right: !0,
                    bottom: !0,
                    left: !1
                },
                onResizeStop: function(e, t) {
                    var n = Object(Z.p)(e, a, Le, We, t),
                        r = n.deltaW,
                        o = n.deltaH,
                        i = b + r,
                        c = h + o;
                    i = i < Se ? Se : i, c = c < Ce ? Ce : c, p({
                        width: parseInt(i, 10),
                        height: parseInt(c, 10),
                        positionTop: parseInt(Ue.style.top, 10),
                        positionLeft: parseInt(Ue.style.left, 10)
                    })
                },
                onResizeStart: function(e, t, a) {
                    if (Le = e.clientX, We = e.clientY, Se = b, Ce = h, Ue = a.closest(".wp-block"), Be = Ue.style.top, xe = Ue.style.left, v && (ze = Ue.querySelector("figure .components-resizable-box__container")), q && !i) switch (r) {
                        case "amp/amp-story-text":
                            Ae = Ue.querySelector(".block-editor-rich-text__editable.editor-rich-text__editable");
                            break;
                        case "amp/amp-story-post-title":
                            Ae = Ue.querySelector(".wp-block-amp-amp-story-post-title");
                            break;
                        case "amp/amp-story-post-author":
                            Ae = Ue.querySelector(".wp-block-amp-amp-story-post-author");
                            break;
                        case "amp/amp-story-post-date":
                            Ae = Ue.querySelector(".wp-block-amp-amp-story-post-date")
                    }
                    i && "amp/amp-story-text" === r && (Ie = Ue.querySelector(".with-line-height")), d()
                },
                onResize: function(e, t, n) {
                    var r = Object(Z.p)(e, a, Le, We, t),
                        o = r.deltaW,
                        c = r.deltaH;
                    !v || b || h || (b = Ue.clientWidth, h = Ue.clientHeight);
                    var u = l <= b + o ? b + o : l,
                        d = s <= h + c ? h + c : s;
                    if (Ae && (0 > o || 0 > c) && (a && (Ae.style.width = u + "px", Ae.style.height = d + "px"), (u < Ae.scrollWidth || d < Ae.scrollHeight) && (u = Se, d = Ce), a && (Ae.style.width = "initial", Ae.style.height = "100%")), a) {
                        var p = Object(Z.o)(a),
                            m = Object(Z.h)(b, h, p),
                            f = Object(Z.h)(u, d, p),
                            q = {
                                left: f.left - m.left,
                                top: f.top - m.top
                            },
                            g = {
                                left: Object(Z.n)("x", parseInt(xe, 10)),
                                top: Object(Z.n)("y", parseInt(Be, 10))
                            };
                        d < 60 && (q.left = q.left / (60 / d), q.right = q.right / (60 / d));
                        var y = {
                            left: g.left - q.left,
                            top: g.top + q.top
                        };
                        Ue.style.left = Object(Z.m)("x", y.left) + "%", Ue.style.top = Object(Z.m)("y", y.top) + "%"
                    }
                    n.style.width = u + "px", n.style.height = d + "px", Se = u, Ce = d, Ie && i && (Ie.style.lineHeight = d + "px"), ze && v && (ze.style.width = u + "px", ze.style.height = d + "px")
                }
            }), m)
        },
        Ge = a(18),
        $e = a.n(Ge),
        Ye = a(21),
        Je = function(e) {
            function t() {
                return f()(this, t), q()(this, y()(t).apply(this, arguments))
            }
            return _()(t, e), h()(t, [{
                key: "componentDidMount",
                value: function() {
                    Object(Z.z)(this.props)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props,
                        a = t.attributes,
                        n = t.isSelected,
                        r = a.height,
                        o = a.width;
                    (n || e.attributes.height !== r || e.attributes.width !== o) && Object(Z.z)(this.props)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props,
                        a = t.blockContent,
                        r = t.placeholder,
                        o = t.attributes,
                        i = t.setAttributes,
                        c = t.className,
                        l = t.fontSize,
                        s = t.colors,
                        u = t.backgroundColor,
                        d = t.customBackgroundColor,
                        p = t.textColor,
                        m = t.tagName,
                        f = o.align,
                        b = o.opacity,
                        h = o.ampFitText,
                        v = o.autoFontSize,
                        q = l && l.size && l.size + "px",
                        g = Object(Ye.a)(s, u, d, b),
                        y = m;
                    return Object(n.createElement)(n.Fragment, null, Object(n.createElement)(T.BlockControls, null, Object(n.createElement)(T.AlignmentToolbar, {
                        value: f,
                        onChange: function(e) {
                            return i({
                                align: e
                            })
                        }
                    })), Object(n.createElement)(y, {
                        style: {
                            backgroundColor: g,
                            color: p.color,
                            fontSize: h ? v + "px" : q,
                            textAlign: f
                        },
                        className: w()(c, (e = {
                            "has-text-color": p.color,
                            "has-background": u.color
                        }, $e()(e, u.class, u.class), $e()(e, p.class, p.class), $e()(e, l.class, l.class), $e()(e, "is-empty", !a), $e()(e, "is-amp-fit-text", h), e))
                    }, a || r))
                }
            }]), t
        }(n.Component),
        Ze = function(e) {
            var t = e.attribute,
                a = e.placeholder,
                o = e.tagName,
                c = e.isEditable;
            return Object(p.compose)(Object(r.withSelect)(function(e) {
                var n, r = e("core/editor").getEditedPostAttribute,
                    o = e("core").getAuthors,
                    c = e("core/block-editor").getSettings,
                    l = r(t);
                switch (t) {
                    case "date":
                        var s = Object(D.__experimentalGetSettings)().formats.date,
                            u = l || new Date;
                        n = Object(D.dateI18n)(s, u);
                        break;
                    case "author":
                        var d = o().find(function(e) {
                            return e.id === l
                        });
                        n = d ? d.name : Object(i.__)("Anonymous", "amp");
                        break;
                    default:
                        n = l
                }
                var p = c().colors;
                return {
                    blockContent: n,
                    placeholder: a,
                    colors: p
                }
            }), Object(r.withDispatch)(function(e) {
                var a = e("core/editor").editPost;
                return {
                    onChange: function(e) {
                        return a($e()({}, t, e))
                    }
                }
            }))(function(e) {
                return Object(n.createElement)(Je, u()({
                    tagName: o,
                    isEditable: c
                }, e))
            })
        },
        Ke = function(e) {
            var t = e.tagName;
            return function(e) {
                var a = e.attributes,
                    r = a.ampFitText,
                    o = Object(Z.j)(a),
                    i = Object(Z.q)(a);
                if (!r) return Object(n.createElement)(T.RichText.Content, {
                    tagName: t,
                    style: i,
                    className: o,
                    value: "{content}"
                });
                var c = t;
                return Object(n.createElement)(c, {
                    style: i,
                    className: o
                }, Object(n.createElement)("amp-fit-text", {
                    layout: "flex-item",
                    className: "amp-text-content"
                }, "{content}"))
            }
        },
        Xe = function(e) {
            return Object(n.createElement)("svg", e, Object(n.createElement)("g", {
                transform: "translate(3 5)"
            }, Object(n.createElement)("path", {
                d: "M11.2 4h.8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-.8c0-.11.09-.2.2-.2H10a1 1 0 0 0 1-1V4.2c0-.11.09-.2.2-.2z",
                opacity: ".3"
            }), Object(n.createElement)("rect", {
                width: "9",
                height: "9",
                rx: "1"
            })), Object(n.createElement)("path", {
                d: "M20.808 7.145c1.41 1.74 1.283 4.365-1.165 6.348.44-1.348.575-2.628-1.011-4.586L17 10.229l.517-4.923 4.923.517-1.632 1.322z"
            }))
        };
    Xe.defaultProps = {
        width: "24",
        height: "24",
        xmlns: "http://www.w3.org/2000/svg"
    };
    var et = function(e) {
        return Object(n.createElement)("svg", e, Object(n.createElement)("g", {
            transform: "translate(7.65 5)"
        }, Object(n.createElement)("path", {
            d: "M11.2 4h.8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-.8c0-.11.09-.2.2-.2H10a1 1 0 0 0 1-1V4.2c0-.11.09-.2.2-.2z",
            opacity: ".3"
        }), Object(n.createElement)("rect", {
            width: "9",
            height: "9",
            rx: "1"
        })), Object(n.createElement)("path", {
            d: "M3.632 17.653c-1.41-1.74-1.283-4.365 1.165-6.348-.44 1.348-.575 2.628 1.011 4.586l1.632-1.322-.517 4.923L2 18.975l1.632-1.322z"
        }))
    };
    et.defaultProps = {
        width: "24",
        height: "24",
        xmlns: "http://www.w3.org/2000/svg"
    };
    var tt = function(e) {
        return Object(n.createElement)("svg", e, Object(n.createElement)("g", {
            transform: "translate(5.65 5)"
        }, Object(n.createElement)("path", {
            d: "M11.2 4h.8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-.8c0-.11.09-.2.2-.2H10a1 1 0 0 0 1-1V4.2c0-.11.09-.2.2-.2z",
            opacity: ".3"
        }), Object(n.createElement)("rect", {
            width: "9",
            height: "9",
            rx: "1"
        })))
    };
    tt.defaultProps = {
        width: "24",
        height: "24",
        xmlns: "http://www.w3.org/2000/svg"
    };
    var at = function(e) {
        return Object(n.createElement)("svg", e, Object(n.createElement)("g", {
            transform: "translate(6 5)"
        }, Object(n.createElement)("path", {
            d: "M11.2 4h.8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-.8c0-.11.09-.2.2-.2H10a1 1 0 0 0 1-1V4.2c0-.11.09-.2.2-.2z"
        }), Object(n.createElement)("rect", {
            opacity: ".3",
            width: "9",
            height: "9",
            rx: "1"
        })))
    };
    at.defaultProps = {
        width: "24",
        height: "24",
        xmlns: "http://www.w3.org/2000/svg"
    };
    var nt = window,
        rt = nt.getComputedStyle,
        ot = nt.ampStoriesFonts,
        it = Object(o.withFallbackStyles)(function(e, t) {
            var a = t.textColor,
                n = t.backgroundColor,
                r = t.fontSize,
                o = t.customFontSize,
                i = e.querySelector('[contenteditable="true"]'),
                c = i ? rt(i) : null;
            return {
                fallbackBackgroundColor: n || !c ? void 0 : c.backgroundColor,
                fallbackTextColor: a || !c ? void 0 : c.color,
                fallbackFontSize: r || o || !c ? void 0 : parseInt(c.fontSize) || void 0
            }
        }),
        ct = Object(r.withSelect)(function(e, t) {
            var a, n = e("core/block-editor"),
                r = n.getSelectedBlockClientId,
                o = n.getBlockRootClientId,
                i = n.getBlock,
                c = n.getBlockOrder,
                l = n.getBlockIndex,
                s = e("amp/story"),
                u = s.getAnimatedBlocks,
                d = s.isValidAnimationPredecessor,
                p = e("core").getMedia,
                m = r(),
                f = o(m),
                b = (u()[f] || []).find(function(e) {
                    return e.id === t.clientId
                }),
                h = o(t.clientId),
                v = c(h),
                q = l(t.clientId, h);
            if ("core/video" === t.name && t.attributes.id && !t.attributes.poster) {
                var g = p(t.attributes.id),
                    y = g && Object(ne.get)(g, ["_links", "wp:featuredmedia", 0, "href"], null);
                a = y && p(Number(y.split("/").pop()))
            }
            return {
                currentBlockPosition: v.length - 1 - q + 1,
                numberOfBlocks: v.length,
                isFirst: 0 === q,
                isLast: Object(Z.i)(h) ? q === v.length - 2 : q === v.length - 1,
                parentBlock: i(h),
                rootClientId: h,
                animationAfter: b ? b.parent : void 0,
                getAnimatedBlocks: function() {
                    return (u()[f] || []).filter(function(e) {
                        return e.id !== m
                    }).filter(function(e) {
                        var t = e.id,
                            a = i(t);
                        return a && a.attributes.ampAnimationType && d(f, m, t)
                    }).map(function(e) {
                        var t = e.id,
                            a = i(t);
                        return {
                            value: t,
                            label: a.name,
                            block: a,
                            blockType: Object(A.getBlockType)(a.name)
                        }
                    })
                },
                videoFeaturedImage: a
            }
        }),
        lt = Object(r.withDispatch)(function(e, t, a) {
            var n = t.clientId,
                r = t.rootClientId,
                o = t.toggleSelection,
                i = (0, a.select)("core/block-editor"),
                c = i.getSelectedBlockClientId,
                l = i.getBlockRootClientId,
                s = i.getBlockOrder,
                u = e("core/block-editor"),
                d = u.moveBlocksDown,
                p = u.moveBlocksUp,
                m = u.moveBlockToPosition,
                f = u.selectBlock,
                b = c(),
                h = l(b),
                v = e("amp/story"),
                q = v.addAnimation,
                g = v.changeAnimationType,
                y = v.changeAnimationDuration,
                O = v.changeAnimationDelay;
            return {
                onAnimationTypeChange: function(e) {
                    g(h, b, e)
                },
                onAnimationOrderChange: function(e) {
                    q(h, b, e)
                },
                onAnimationDurationChange: function(e) {
                    y(h, b, e)
                },
                onAnimationDelayChange: function(e) {
                    O(h, b, e)
                },
                startBlockActions: function() {
                    return o(!1)
                },
                stopBlockActions: function() {
                    o(!0), f(n)
                },
                bringForward: function() {
                    return d(n, r)
                },
                sendBackward: function() {
                    return p(n, r)
                },
                moveFront: function() {
                    var e = s(r).length - 1;
                    m(n, r, r, e)
                },
                moveBack: function() {
                    m(n, r, r, 0)
                }
            }
        }),
        st = Object(p.compose)(Object(T.withColors)("backgroundColor", {
            textColor: "color"
        }), Object(T.withFontSizes)("fontSize"), it, ct, lt),
        ut = Object(p.createHigherOrderComponent)(function(e) {
            return st(function(t) {
                var a = t.clientId,
                    r = t.name,
                    s = t.attributes,
                    u = t.isSelected,
                    d = t.isLast,
                    p = t.isFirst,
                    m = t.currentBlockPosition,
                    f = t.numberOfBlocks,
                    b = t.fontSize,
                    h = t.setFontSize,
                    v = t.setAttributes,
                    q = t.backgroundColor,
                    g = t.setBackgroundColor,
                    y = t.textColor,
                    O = t.setTextColor,
                    k = t.fallbackBackgroundColor,
                    j = t.fallbackTextColor,
                    _ = t.onAnimationTypeChange,
                    E = t.onAnimationOrderChange,
                    w = t.onAnimationDurationChange,
                    S = t.onAnimationDelayChange,
                    C = t.getAnimatedBlocks,
                    B = t.animationAfter,
                    x = t.videoFeaturedImage,
                    z = t.startBlockActions,
                    I = t.stopBlockActions,
                    P = t.bringForward,
                    D = t.sendBackward,
                    R = t.moveFront,
                    N = t.moveBack;
                if (!c.b.includes(r)) return Object(n.createElement)(e, t);
                var M = Object(A.getBlockType)(r),
                    V = "core/image" === r,
                    F = "core/video" === r,
                    H = "amp/amp-story-text" === r,
                    L = c.j.includes(r),
                    W = c.i.includes(r),
                    U = c.d.includes(r),
                    Q = s.ampFontFamily,
                    G = s.ampFitText,
                    $ = s.height,
                    Y = s.width,
                    J = s.opacity,
                    K = s.type,
                    X = s.ampShowImageCaption,
                    ee = s.ampAnimationType,
                    te = s.ampAnimationDuration,
                    ae = s.ampAnimationDelay,
                    ne = s.rotationAngle;
                F && x && v({
                    poster: x.source_url
                });
                var re = V && (!s.url || !s.url.length);
                return Object(n.createElement)(n.Fragment, null, U && Object(n.createElement)(me, {
                    clientId: t.clientId,
                    blockElementId: "block-".concat(t.clientId),
                    isDraggable: !t.isPartOfMultiSelection
                }), (!U || re) && Object(n.createElement)(e, t), U && !re && Object(n.createElement)(Qe, {
                    isSelected: u,
                    width: Y,
                    height: $,
                    angle: ne,
                    minHeight: c.m,
                    minWidth: c.n,
                    onResizeStop: function(e) {
                        v(e), I()
                    },
                    blockName: r,
                    ampFitText: G,
                    onResizeStart: function() {
                        z()
                    }
                }, Object(n.createElement)(Oe, {
                    blockElementId: "block-".concat(a),
                    initialAngle: ne,
                    className: "amp-story-editor__rotate-container",
                    angle: ne,
                    onRotateStart: function() {
                        z()
                    },
                    onRotateStop: function(e, t) {
                        v({
                            rotationAngle: t
                        }), I()
                    }
                }, Object(n.createElement)(e, t))), !(d && p) && U && Object(n.createElement)(T.InspectorControls, null, Object(n.createElement)(o.PanelBody, {
                    className: "amp-story-order-controls",
                    title: Object(i.__)("Block Position", "amp")
                }, Object(n.createElement)("div", {
                    className: "amp-story-order-controls-wrap"
                }, Object(n.createElement)(o.IconButton, {
                    className: "amp-story-controls-bring-front",
                    onClick: R,
                    icon: tt({
                        width: 24,
                        height: 24
                    }),
                    label: Object(i.__)("Send to front", "amp"),
                    "aria-describedby": "amp-story-controls-bring-front-description-".concat(a),
                    "aria-disabled": d
                }, Object(i.__)("Front", "amp")), Object(n.createElement)(o.IconButton, {
                    className: "amp-story-controls-bring-forward",
                    onClick: P,
                    icon: Xe({
                        width: 24,
                        height: 24
                    }),
                    label: Object(i.__)("Send Forward", "amp"),
                    "aria-describedby": "amp-story-controls-bring-forward-description-".concat(a),
                    "aria-disabled": d
                }, Object(i.__)("Forward", "amp")), Object(n.createElement)(o.IconButton, {
                    className: "amp-story-controls-send-backwards",
                    onClick: D,
                    icon: et({
                        width: 24,
                        height: 24
                    }),
                    label: Object(i.__)("Send Backward", "amp"),
                    "aria-describedby": "amp-story-controls-send-backward-description-".concat(a),
                    "aria-disabled": p
                }, Object(i.__)("Backward", "amp")), Object(n.createElement)(o.IconButton, {
                    className: "amp-story-controls-send-back",
                    onClick: N,
                    icon: at({
                        width: 24,
                        height: 24
                    }),
                    label: Object(i.__)("Send to back", "amp"),
                    "aria-describedby": "amp-story-controls-send-back-description-".concat(a),
                    "aria-disabled": p
                }, Object(i.__)("Back", "amp"))), Object(n.createElement)("span", {
                    className: "amp-story-controls-description",
                    id: "amp-story-controls-bring-front-description-".concat(a)
                }, Object(Z.g)(M && M.title, m, 1, p, d, -1)), Object(n.createElement)("span", {
                    className: "amp-story-controls-description",
                    id: "amp-story-controls-bring-forward-description-".concat(a)
                }, Object(Z.g)(M && M.title, m, m - 1, p, d, -1)), Object(n.createElement)("span", {
                    className: "amp-story-controls-description",
                    id: "amp-story-controls-send-backward-description-".concat(a)
                }, Object(Z.g)(M && M.title, m, m + 1, p, d, 1)), Object(n.createElement)("span", {
                    className: "amp-story-controls-description",
                    id: "amp-story-controls-send-back-description-".concat(a)
                }, Object(Z.g)(M && M.title, m, f, p, d, 1)))), L && Object(n.createElement)(T.InspectorControls, null, Object(n.createElement)(o.PanelBody, {
                    title: Object(i.__)("Text Settings", "amp")
                }, Object(n.createElement)(ge, {
                    fonts: ot,
                    value: Q,
                    onChange: function(e) {
                        Object(Z.s)(e), v({
                            ampFontFamily: e
                        })
                    }
                }), Object(n.createElement)(o.ToggleControl, {
                    label: Object(i.__)("Automatically fit text to container", "amp"),
                    checked: G,
                    onChange: function() {
                        v({
                            ampFitText: !G
                        }), G || h(s.autoFontSize)
                    }
                }), !G && Object(n.createElement)(T.FontSizePicker, {
                    value: b.size,
                    onChange: h
                }), H && Object(n.createElement)(o.SelectControl, {
                    label: Object(i.__)("Select text type", "amp"),
                    value: K,
                    onChange: function(e) {
                        return v({
                            type: e
                        })
                    },
                    options: [{
                        value: "auto",
                        label: Object(i.__)("Automatic", "amp")
                    }, {
                        value: "p",
                        label: Object(i.__)("Paragraph", "amp")
                    }, {
                        value: "h1",
                        label: Object(i.__)("Heading 1", "amp")
                    }, {
                        value: "h2",
                        label: Object(i.__)("Heading 2", "amp")
                    }]
                }))), W && Object(n.createElement)(T.InspectorControls, null, Object(n.createElement)(T.PanelColorSettings, {
                    title: Object(i.__)("Color Settings", "amp"),
                    initialOpen: !1,
                    colorSettings: [{
                        value: q.color,
                        onChange: g,
                        label: Object(i.__)("Background Color", "amp")
                    }, {
                        value: y.color,
                        onChange: O,
                        label: Object(i.__)("Text Color", "amp")
                    }]
                }, Object(n.createElement)(T.ContrastChecker, {
                    textColor: y.color,
                    backgroundColor: q.color,
                    fallbackTextColor: j,
                    fallbackBackgroundColor: k,
                    fontSize: b.size
                }), Object(n.createElement)(o.RangeControl, {
                    label: Object(i.__)("Background Opacity", "amp"),
                    value: J,
                    onChange: function(e) {
                        return v({
                            opacity: e
                        })
                    },
                    min: 5,
                    max: 100,
                    step: 5
                }))), U && Object(n.createElement)(T.InspectorControls, null, Object(n.createElement)(o.PanelBody, {
                    title: Object(i.__)("Animation", "amp")
                }, Object(n.createElement)(l, {
                    animatedBlocks: C,
                    animationType: ee,
                    animationDuration: te ? parseInt(te) : "",
                    animationDelay: ae ? parseInt(ae) : "",
                    animationAfter: B,
                    onAnimationTypeChange: _,
                    onAnimationDurationChange: w,
                    onAnimationDelayChange: S,
                    onAnimationAfterChange: E
                }))), V && Object(n.createElement)(T.InspectorControls, null, Object(n.createElement)(o.PanelBody, {
                    title: Object(i.__)("Story Settings", "amp")
                }, Object(n.createElement)(o.ToggleControl, {
                    label: Object(i.__)("Show or hide the caption", "amp"),
                    checked: X,
                    onChange: function() {
                        t.setAttributes({
                            ampShowImageCaption: !s.ampShowImageCaption
                        }), s.ampShowImageCaption || t.setAttributes({
                            caption: ""
                        })
                    },
                    help: Object(i.__)("Toggle on to show image caption. If you turn this off the current caption text will be deleted.", "amp")
                }))))
            })
        }, "withAmpStorySettings"),
        dt = Object(p.createHigherOrderComponent)(Object(r.withSelect)(function(e, t) {
            var a, n = e("core/block-editor").getBlockAttributes;
            return t.block && t.block.attributes ? a = t.block.attributes : n && (a = n(t.clientId)), {
                attributes: a
            }
        }), "withAttributes"),
        pt = Object(p.createHigherOrderComponent)(Object(r.withSelect)(function(e, t) {
            return {
                blockName: (0, e("core/block-editor").getBlockName)(t.clientId)
            }
        }), "withBlockName"),
        mt = Object(p.createHigherOrderComponent)(Object(r.withSelect)(function(e, t) {
            return {
                hasSelectedInnerBlock: (0, e("core/block-editor").hasSelectedInnerBlock)(t.clientId, !0)
            }
        }), "withHasSelectedInnerBlock"),
        ft = Object(r.withSelect)(function(e, t) {
            var a = e("core/block-editor"),
                n = a.getBlockOrder,
                r = a.getBlockRootClientId,
                o = e("amp/story").isReordering;
            return "" !== r(t.clientId) ? {
                pageNumber: void 0
            } : {
                pageNumber: n().indexOf(t.clientId) + 1,
                isReordering: o()
            }
        }),
        bt = Object(p.compose)(ft, pt),
        ht = Object(p.createHigherOrderComponent)(function(e) {
            return bt(function(t) {
                var a = t.blockName,
                    r = t.pageNumber,
                    o = t.isReordering;
                return c.e.includes(a) && r ? o ? Object(n.createElement)(e, t) : Object(n.createElement)(n.Fragment, null, Object(n.createElement)("div", {
                        className: "amp-story-page-number"
                    },
                    /* translators: %s: Page number */
                    Object(i.sprintf)(Object(i.__)("Page %s", "amp"), r)), Object(n.createElement)(e, t)) : Object(n.createElement)(e, t)
            })
        }, "withPageNumber"),
        vt = Object(p.createHigherOrderComponent)(function(e) {
            return function(t) {
                var a = t.media,
                    r = Object(Ye.d)(a, Object(Z.l)(), !0);
                return r ? Object(n.createElement)(n.Fragment, null, Object(n.createElement)(o.Notice, {
                    status: "warning",
                    isDismissible: !1
                }, r.map(function(e, t) {
                    return Object(n.createElement)("p", {
                        key: "error-".concat(t)
                    }, e)
                })), Object(n.createElement)(e, t)) : Object(n.createElement)(e, t)
            }
        }, "withStoryFeaturedImageNotice"),
        qt = function(e) {
            return Object(r.withSelect)(function(e, t) {
                var a = e("core").getMedia,
                    n = e("core/editor").getEditedPostAttribute,
                    o = e("core/block-editor").getSelectedBlock,
                    i = Object(r.dispatch)("core/editor").editPost,
                    c = n("featured_media"),
                    l = "core/image" === t.name || "amp/amp-story-page" === t.name;
                if (!c && l && t.attributes) {
                    var s = t.attributes.mediaId || t.attributes.id,
                        u = o();
                    if (s && u && u.attributes) {
                        var d = u.attributes.mediaId || u.attributes.id;
                        if (d && d === s) {
                            var p = a(s);
                            p && p.media_details && Object(Ye.c)(p.media_details, Object(Ye.b)()) && Object(Ye.c)(p.media_details, Object(Z.l)()) && i({
                                featured_media: s
                            })
                        }
                    }
                }
            })(e)
        },
        gt = Object(p.createHigherOrderComponent)(Object(r.withSelect)(function(e) {
            return {
                isReordering: (0, e("amp/story").isReordering)()
            }
        }), "withIsReordering"),
        yt = Object(p.createHigherOrderComponent)(Object(r.withSelect)(function(e) {
            return {
                selectedBlock: (0, e("core/block-editor").getSelectedBlock)()
            }
        }), "withSelectedBlock"),
        Ot = a(9),
        kt = a.n(Ot),
        jt = Object(p.compose)(dt, pt, mt),
        _t = function(e) {
            return jt(function(t) {
                var a, r = t.blockName,
                    o = t.hasSelectedInnerBlock,
                    i = t.attributes;
                if (-1 === c.a.indexOf(r)) return Object(n.createElement)(e, t);
                if (o && "amp/amp-story-page" === r) return a = kt()({}, t.wrapperProps, {
                    "data-amp-selected": "parent"
                }), Object(n.createElement)(e, u()({}, t, {
                    wrapperProps: a
                }));
                if (a = kt()({}, t.wrapperProps, {
                    "data-amp-image-caption": "core/image" !== r || i.ampShowImageCaption ? void 0 : "noCaption",
                    "data-font-family": i.ampFontFamily || void 0
                }), c.b.includes(r)) {
                    var l = {
                        top: "".concat(i.positionTop, "%"),
                        left: "".concat(i.positionLeft, "%"),
                        transform: "scale(var(--preview-scale)) translateX(var(--preview-translateX)) translateY(var(--preview-translateY)) rotate(".concat(i.rotationAngle || 0, "deg)")
                    };
                    "amp/amp-story-cta" === r && (l.transform = "scale(var(--preview-scale))"), t.wrapperProps && t.wrapperProps.style && (l = kt()({}, l, t.wrapperProps.style)), a = kt()({}, a, {
                        style: l
                    })
                }
                return Object(n.createElement)(e, u()({}, t, {
                    wrapperProps: a
                }))
            })
        },
        Et = function(e) {
            return Object(r.withSelect)(function(e, t) {
                var a = t.clientId,
                    n = e("core/block-editor").getBlockRootClientId;
                return {
                    isActivePage: (0, e("amp/story").getCurrentPage)() === a,
                    isTopLevelBlock: "" === n(a)
                }
            })(function(t) {
                var a = t.isTopLevelBlock,
                    o = t.isActivePage;
                if (!a) return Object(n.createElement)(e, t);
                var i = kt()({}, t, {
                        className: kt()({}, t.className, {
                            "amp-page-active": a && o,
                            "amp-page-inactive": a && !o
                        }),
                        isLocked: !o
                    }),
                    c = Object(r.dispatch)("amp/story").setCurrentPage,
                    l = Object(r.dispatch)("core/block-editor").selectBlock;
                return o ? Object(n.createElement)(e, i) : Object(n.createElement)(e, u()({}, i, {
                    onSelect: function() {
                        c(t.clientId), l(t.clientId)
                    }
                }))
            })
        },
        wt = Object(p.compose)(pt, mt, yt, gt),
        St = function() {
            return wt(function(e) {
                var t = e.blockName,
                    a = e.hasSelectedInnerBlock,
                    r = e.isReordering,
                    o = e.selectedBlock;
                return r ? null : "amp/amp-story-page" === t && a && o ? Object(n.createElement)(X, {
                    srcClientId: o.clientId
                }) : null
            })
        },
        Ct = a(27),
        Bt = Object(p.compose)(Object(r.withSelect)(function(e, t) {
            var a = e("core/block-editor"),
                n = a.getBlockRootClientId,
                r = a.getBlock,
                o = a.getBlockOrder,
                i = a.getBlocksByClientId;
            if ("amp/amp-story-cta" !== t.name) return {};
            var c = r(n(t.clientId));
            if (!c) return {};
            var l = 0 === o().indexOf(c.clientId),
                s = i(o(c.clientId)).find(function(e) {
                    return e.name === t.name
                }),
                u = s && s.clientId !== t.clientId;
            return {
                isInvalid: l || u,
                originalBlockClientId: u && s.clientId
            }
        }), Object(r.withDispatch)(function(e, t) {
            var a = t.originalBlockClientId;
            return {
                selectFirst: function() {
                    return e("core/block-editor").selectBlock(a)
                }
            }
        })),
        xt = Object(p.createHigherOrderComponent)(function(e) {
            return Bt(function(t) {
                var a = t.isInvalid,
                    r = t.originalBlockClientId,
                    c = t.selectFirst,
                    l = se()(t, ["isInvalid", "originalBlockClientId", "selectFirst"]);
                if (!a || "amp/amp-story-cta" !== l.name) return Object(n.createElement)(e, l);
                var s = Object(A.getBlockType)(l.name),
                    d = [Object(n.createElement)(o.Button, {
                        key: "remove",
                        isLarge: !0,
                        onClick: function() {
                            return l.onReplace([])
                        }
                    }, Object(i.__)("Remove", "amp"))];
                return r && d.unshift(Object(n.createElement)(o.Button, {
                    key: "find-original",
                    isLarge: !0,
                    onClick: c
                }, Object(i.__)("Find original", "amp"))), Object(n.createElement)(n.Fragment, null, Object(n.createElement)("div", {
                    style: {
                        minHeight: "60px"
                    }
                }, Object(n.createElement)(e, u()({
                    key: "block-edit"
                }, l))), Object(n.createElement)(Ct.Warning, {
                    actions: d
                }, Object(n.createElement)("strong", null, s.title, ": "), r ? Object(i.__)("This block can only be used once per page.", "amp") : Object(i.__)("This block can not be used on the first page.", "amp")))
            })
        }, "withCallToActionValidation"),
        zt = Object(p.createHigherOrderComponent)(function(e) {
            return function(t) {
                var a = "amp_story" === Object(r.select)("core/editor").getCurrentPostType(),
                    c = Object(r.select)("core/block-editor").getSelectedBlock();
                return a && c && "core/video" === c.name && c.attributes.src && !c.attributes.poster ? Object(n.createElement)(n.Fragment, null, Object(n.createElement)(o.Notice, {
                    status: "error",
                    isDismissible: !1
                }, Object(i.__)("A poster is required for videos in stories.", "amp")), Object(n.createElement)(e, t)) : Object(n.createElement)(e, t)
            }
        }, "withVideoPosterImageNotice");
    a.d(t, "a", function() {
        return l
    }), a.d(t, "b", function() {
        return d
    }), a.d(t, "c", function() {
        return I
    }), a.d(t, "d", function() {
        return P
    }), a.d(t, "e", function() {
        return R
    }), a.d(t, "f", function() {
        return V
    }), a.d(t, "j", function() {
        return U
    }), a.d(t, "p", function() {
        return G
    }), a.d(t, "m", function() {
        return J
    }), a.d(t, "n", function() {
        return X
    }), a.d(t, "o", function() {
        return me
    }), a.d(t, "q", function() {
        return qe
    }), a.d(t, "g", function() {
        return ge
    }), a.d(t, "l", function() {
        return Oe
    }), a.d(t, "i", function() {
        return ke
    }), a.d(t, "h", function() {
        return He
    }), a.d(t, "k", function() {
        return Qe
    }), a.d(t, "z", function() {
        return Ze
    }), a.d(t, "A", function() {
        return Ke
    }), a.d(t, "s", function() {
        return ut
    }), a.d(t, "t", function() {
        return dt
    }), a.d(t, "u", function() {
        return pt
    }), a.d(t, "x", function() {
        return mt
    }), a.d(t, "B", function() {
        return ht
    }), a.d(t, "E", function() {
        return vt
    }), a.d(t, "w", function() {
        return qt
    }), a.d(t, "y", function() {
        return gt
    }), a.d(t, "C", function() {
        return yt
    }), a.d(t, "G", function() {
        return _t
    }), a.d(t, "r", function() {
        return Et
    }), a.d(t, "D", function() {
        return St
    }), a.d(t, "v", function() {
        return xt
    }), a.d(t, "F", function() {
        return zt
    })
}, function(e, t) {
    ! function() {
        e.exports = this.wp.hooks
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.keycodes
    }()
}, function(e, t, a) {
    var n = a(59);
    e.exports = function(e, t) {
        if (null == e) return {};
        var a, r, o = n(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (o[a] = e[a])
        }
        return o
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.editor
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.React
    }()
}, function(e, t, a) {
    var n = a(57),
        r = a(58);
    e.exports = function(e, t, a) {
        var o = t && a || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var i = (e = e || {}).random || (e.rng || n)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
            for (var c = 0; c < 16; ++c) t[o + c] = i[c];
        return t || r(i)
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.date
    }()
}, function(e, t, a) {
    var n = a(43),
        r = a(44),
        o = a(45);
    e.exports = function(e, t) {
        return n(e) || r(e, t) || o()
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.editPost
    }()
}, function(e, t, a) {
    "use strict";
    var n, r, o = a(0),
        i = (a(11), a(2)),
        c = a(32),
        l = a(3),
        s = a(1),
        u = a(21),
        d = Object(l.withSelect)(function(e) {
            var t = e("core/editor").getCurrentPost(),
                a = e("core/editor").getEditedPostAttribute("featured_media"),
                n = t.featured_media || a;
            return {
                featuredMedia: n ? e("core").getMedia(n) : null
            }
        })(function(e) {
            var t = e.featuredMedia,
                a = e.dimensions,
                n = e.required,
                r = Object(u.d)(t, a, n);
            return r ? Object(o.createElement)(o.Fragment, null, Object(o.createElement)(c.PluginPrePublishPanel, {
                title: Object(s.__)("Featured Image", "amp"),
                initialOpen: "true"
            }, Object(o.createElement)(i.Notice, {
                status: n ? "warning" : "notice",
                isDismissible: !1
            }, r.map(function(e, t) {
                return Object(o.createElement)("p", {
                    key: "error-".concat(t)
                }, e)
            })))) : null
        }),
        p = a(6),
        m = (Object(p.createHigherOrderComponent)(function(e) {
            return function(t) {
                var a = t.media,
                    n = Object(u.d)(a, Object(u.b)(), !1);
                return n ? Object(o.createElement)(o.Fragment, null, Object(o.createElement)(i.Notice, {
                    status: "notice",
                    isDismissible: !1
                }, n.map(function(e, t) {
                    return Object(o.createElement)("p", {
                        key: "error-".concat(t)
                    }, e)
                })), Object(o.createElement)(e, t)) : Object(o.createElement)(e, t)
            }
        }, "withFeaturedImageNotice"), a(14)),
        f = a.n(m),
        b = a(13),
        h = a.n(b),
        v = a(15),
        q = a.n(v),
        g = a(16),
        y = a.n(g),
        O = a(10),
        k = a.n(O),
        j = a(17),
        _ = a.n(j),
        E = a(12),
        w = window.wp,
        S = w.media.View.extend({
            className: "notice notice-warning notice-alt inline",
            template: (n = Object(s.sprintf)(
                /* translators: 1: image width in pixels. 2: image height in pixels. 3: required minimum width in pixels. 4: required minimum height in pixels. */
                Object(s.__)("The selected image is too small (%1$s by %2$s pixels). It should have a size of at least %3$s by %4$s pixels.", "amp"), "{{width}}", "{{height}}", "{{minWidth}}", "{{minHeight}}"), r = Object(E.template)("<p>".concat(n, "</p>"), {
                evaluate: /<#([\s\S]+?)#>/g,
                interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
                escape: /\{\{([^\}]+?)\}\}(?!\})/g
            }), function(e) {
                return r(e)
            })
        }),
        C = w.media.view.Toolbar.Select.extend({
            refresh: function() {
                w.media.view.Toolbar.Select.prototype.refresh.call(this);
                var e = this.controller.state(),
                    t = e.get("selection").models[0],
                    a = e.collection.get("library").get("suggestedWidth"),
                    n = e.collection.get("library").get("suggestedHeight");
                !t || t.get("width") >= a && t.get("height") >= n ? this.secondary.unset("select-error") : this.secondary.set("select-error", new S({
                    minWidth: a,
                    minHeight: n,
                    width: t.get("width"),
                    height: t.get("height")
                }))
            }
        }),
        B = w.media.view.MediaFrame.Select.extend({
            createSelectToolbar: function(e, t) {
                (t = t || this.options.button || {}).controller = this, e.view = new C(t)
            }
        }),
        x = window.wp,
        z = x.media.controller.Cropper.extend({
            doCrop: function(e) {
                var t = e.get("cropDetails"),
                    a = this.imgSelect.getOptions();
                return Math.abs(t.width - a.minWidth) < 10 && (t.width = a.minWidth), Math.abs(t.height - a.minHeight) < 10 && (t.height = a.minHeight), t.dst_width = t.width, t.dst_height = t.height, x.ajax.post("crop-image", {
                    nonce: e.get("nonces").edit,
                    id: e.get("id"),
                    context: "featured-image",
                    cropDetails: t
                })
            }
        }),
        I = window.wp,
        A = function(e, t) {
            var a = t.width,
                n = t.height;
            return function(e) {
                function t() {
                    var e;
                    return f()(this, t), (e = q()(this, y()(t).apply(this, arguments))).props.modalClass && "editor-post-featured-image__media-modal" === e.props.modalClass && (e.init = e.init.bind(k()(e)), e.init()), e
                }
                return _()(t, e), h()(t, [{
                    key: "init",
                    value: function() {
                        var e = this;
                        this.frame = new B({
                            button: {
                                text: Object(s.__)("Select", "amp"),
                                close: !1
                            },
                            states: [new I.media.controller.Library({
                                title: Object(s.__)("Choose image", "amp"),
                                library: I.media.query({
                                    type: "image"
                                }),
                                multiple: !1,
                                date: !1,
                                priority: 20,
                                suggestedWidth: a,
                                suggestedHeight: n
                            }), new z({
                                imgSelectOptions: this.calculateImageSelectOptions,
                                control: this
                            })]
                        }), I.media.frame = this.frame, this.frame.on("select", this.onSelectImage, this), this.frame.on("cropped", this.onCropped, this), this.frame.on("skippedcrop", this.onSkippedCrop, this), this.frame.on("close", function() {
                            e.init()
                        }, this)
                    }
                }, {
                    key: "calculateImageSelectOptions",
                    value: function(e, t) {
                        var r = e.get("width"),
                            o = e.get("height"),
                            i = parseInt(a, 10),
                            c = parseInt(n, 10),
                            l = i / c,
                            s = i,
                            u = c;
                        t.set("canSkipCrop", !0), r / o > l ? i = (c = o) * l : c = (i = r) / l;
                        var d = (r - i) / 2,
                            p = (o - c) / 2;
                        return {
                            aspectRatio: i + ":" + c,
                            handles: !0,
                            keys: !0,
                            instance: !0,
                            persistent: !0,
                            imageWidth: r,
                            imageHeight: o,
                            minWidth: s > i ? i : s,
                            minHeight: u > c ? c : u,
                            x1: d,
                            y1: p,
                            x2: i + d,
                            y2: c + p
                        }
                    }
                }, {
                    key: "onSelectImage",
                    value: function() {
                        var e = this.frame.state().get("selection").first().toJSON();
                        a === e.width && n === e.height ? (this.setImageFromURL(e.url, e.id, e.width, e.height), this.frame.close()) : this.frame.setState("cropper")
                    }
                }, {
                    key: "doAllowCrop",
                    value: function(e) {
                        return e.width && e.height && e.width >= a && e.height >= n
                    }
                }, {
                    key: "mustBeCropped",
                    value: function(e, t, a, n) {
                        return !(e === a && t === n || a <= e)
                    }
                }, {
                    key: "onCropped",
                    value: function(e) {
                        var t = e.url,
                            a = e.id,
                            n = e.width,
                            r = e.height;
                        this.setImageFromURL(t, a, n, r)
                    }
                }, {
                    key: "onSkippedCrop",
                    value: function(e) {
                        var t = e.get("url"),
                            a = e.get("width"),
                            n = e.get("height");
                        this.setImageFromURL(t, e.id, a, n)
                    }
                }, {
                    key: "setImageFromURL",
                    value: function(e, t, a, n) {
                        var r = {},
                            o = this.props.onSelect;
                        r.url = e, r.thumbnail_url = e, r.timestamp = Object(E.now)(), t && (r.attachment_id = t), a && (r.width = a), n && (r.height = n), o(r), Object(l.dispatch)("core/editor").editPost({
                            featured_media: t
                        })
                    }
                }]), t
            }(e)
        };
    a.d(t, "a", function() {
        return d
    }), a.d(t, "b", function() {
        return A
    })
}, function(e, t, a) {
    "use strict";
    var n = {};
    a.r(n), a.d(n, "getAnimatedBlocks", function() {
        return p
    }), a.d(n, "isValidAnimationPredecessor", function() {
        return m
    }), a.d(n, "getCurrentPage", function() {
        return f
    }), a.d(n, "getBlockOrder", function() {
        return b
    }), a.d(n, "getBlockIndex", function() {
        return h
    }), a.d(n, "isReordering", function() {
        return v
    });
    var r = {};
    a.r(r), a.d(r, "addAnimation", function() {
        return k
    }), a.d(r, "changeAnimationType", function() {
        return j
    }), a.d(r, "changeAnimationDuration", function() {
        return _
    }), a.d(r, "changeAnimationDelay", function() {
        return E
    }), a.d(r, "setCurrentPage", function() {
        return w
    }), a.d(r, "startReordering", function() {
        return S
    }), a.d(r, "movePageToPosition", function() {
        return C
    }), a.d(r, "saveOrder", function() {
        return B
    }), a.d(r, "resetOrder", function() {
        return x
    });
    var o = a(3),
        i = a(22),
        c = a.n(i),
        l = a(18),
        s = a.n(l),
        u = a(9),
        d = a.n(u);

    function p(e) {
        return e.animations || {}
    }

    function m(e, t, a, n) {
        if (void 0 === n || !e.animations) return !0;
        var r = e.animations[t] || [];
        if (!r.find(function(e) {
            return e.id === n
        })) return !1;
        return ! function(e, t) {
            for (var a = t; void 0 !== a;) {
                if (a === e) return !0;
                var n = r.find(function(e) {
                    return e.id === a
                });
                a = n ? n.parent : void 0
            }
            return !1
        }(a, n)
    }

    function f(e) {
        return e.currentPage
    }

    function b(e) {
        return e.blocks.order || []
    }

    function h(e, t) {
        return e.blocks.order ? e.blocks.order.indexOf(t) : null
    }

    function v(e) {
        return e.blocks.isReordering || !1
    }
    var q = Object(o.select)("core/block-editor"),
        g = q.getBlock,
        y = q.getBlockOrder;
    var O = Object(o.combineReducers)({
        animations: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0,
                a = d()({}, e),
                n = t.page,
                r = t.item,
                o = t.predecessor,
                i = t.animationType,
                c = t.duration,
                l = t.delay,
                u = a[n] || [],
                p = function(e) {
                    return u.findIndex(function(t) {
                        return t.id === e
                    })
                };
            switch (t.type) {
                case "ADD_ANIMATION":
                    var f = m({
                        animations: e
                    }, n, r, o) ? o : void 0;
                    return -1 !== p(r) ? u[p(r)].parent = f : u.push({
                        id: r,
                        parent: f
                    }), d()({}, a, s()({}, n, u));
                case "CHANGE_ANIMATION_TYPE":
                    if (-1 !== p(r)) {
                        if (u[p(r)].animationType = i, !i) {
                            var b = u[p(r)].parent;
                            for (var h in u.filter(function(e) {
                                return e.parent === r
                            })) u[h].parent = b.parent
                        }
                    } else u.push({
                        id: r,
                        animationType: i
                    });
                    return d()({}, a, s()({}, n, u));
                case "CHANGE_ANIMATION_DURATION":
                    return -1 !== p(r) && (u[p(r)].duration = c), d()({}, a, s()({}, n, u));
                case "CHANGE_ANIMATION_DELAY":
                    return -1 !== p(r) && (u[p(r)].delay = l), d()({}, a, s()({}, n, u))
            }
            return e
        },
        currentPage: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                t = arguments.length > 1 ? arguments[1] : void 0,
                a = t.page;
            switch (t.type) {
                case "SET_CURRENT_PAGE":
                    return g(a) ? a : e
            }
            return e
        },
        blocks: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case "START_REORDERING":
                    return d()({}, e, {
                        order: y(),
                        isReordering: !0
                    });
                case "STOP_REORDERING":
                    return d()({}, e, {
                        isReordering: !1
                    });
                case "MOVE_PAGE":
                    var a = t.page,
                        n = t.index,
                        r = e.order.indexOf(a),
                        o = c()(e.order);
                    return o.splice.apply(o, [n, 0].concat(c()(o.splice(r, 1)))), d()({}, e, {
                        order: o
                    });
                case "RESET_ORDER":
                    return d()({}, e, {
                        order: y(),
                        isReordering: !1
                    })
            }
            return e
        }
    });

    function k(e, t, a) {
        return {
            type: "ADD_ANIMATION",
            page: e,
            item: t,
            predecessor: a
        }
    }

    function j(e, t, a) {
        return {
            type: "CHANGE_ANIMATION_TYPE",
            page: e,
            item: t,
            animationType: a
        }
    }

    function _(e, t, a) {
        return {
            type: "CHANGE_ANIMATION_DURATION",
            page: e,
            item: t,
            duration: a
        }
    }

    function E(e, t, a) {
        return {
            type: "CHANGE_ANIMATION_DELAY",
            page: e,
            item: t,
            delay: a
        }
    }

    function w(e) {
        return {
            type: "SET_CURRENT_PAGE",
            page: e
        }
    }

    function S() {
        return {
            type: "START_REORDERING"
        }
    }

    function C(e, t) {
        return {
            type: "MOVE_PAGE",
            page: e,
            index: t
        }
    }

    function B() {
        return {
            type: "STOP_REORDERING"
        }
    }

    function x() {
        return {
            type: "RESET_ORDER"
        }
    }
    t.a = Object(o.registerStore)("amp/story", {
        reducer: O,
        selectors: n,
        actions: r,
        initialState: {
            animations: {},
            blocks: {
                order: [],
                isReordering: !1
            }
        }
    })
}, function(e, t) {
    ! function() {
        e.exports = this.regeneratorRuntime
    }()
}, function(e, t) {
    function a(e, t, a, n, r, o, i) {
        try {
            var c = e[o](i),
                l = c.value
        } catch (e) {
            return void a(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(n, r)
    }
    e.exports = function(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function c(e) {
                    a(i, r, o, c, l, "next", e)
                }

                function l(e) {
                    a(i, r, o, c, l, "throw", e)
                }
                c(void 0)
            })
        }
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.domReady
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.plugins
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.wordcount
    }()
}, function(e, t, a) {
    "use strict";
    e.exports = a(64)
}, function(e, t) {
    ! function() {
        e.exports = this.wp.url
    }()
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var n = a(31),
        r = a.n(n),
        o = a(35),
        i = a.n(o),
        c = a(36),
        l = a.n(c),
        s = a(24),
        u = a(1),
        d = a(37),
        p = a.n(d),
        m = a(3),
        f = a(38),
        b = a(8),
        h = a(33),
        v = a(23),
        q = a(4),
        g = a(5),
        y = a(34),
        O = Object(m.select)("core/block-editor"),
        k = O.getSelectedBlock,
        j = O.getBlocksByClientId,
        _ = O.getClientIdsWithDescendants,
        E = O.getBlockRootClientId,
        w = O.getBlockOrder,
        S = O.getBlock,
        C = O.getBlockAttributes,
        B = Object(m.dispatch)("core/block-editor"),
        x = B.moveBlockToPosition,
        z = B.updateBlockAttributes,
        I = Object(m.select)("core/edit-post"),
        A = I.getEditorMode,
        T = I.isFeatureActive,
        P = Object(m.dispatch)("core/edit-post").toggleFeature,
        D = Object(m.select)("amp/story"),
        R = D.isReordering,
        N = D.getBlockOrder,
        M = D.getCurrentPage,
        V = D.getAnimatedBlocks,
        F = Object(m.dispatch)("amp/story").setCurrentPage;
    p()(function() {
        Object(b.setDefaultBlockName)("amp/amp-story-page");
        var e = Object(b.getBlockTypes)().filter(function(e) {
                var t = e.name;
                return !g.a.includes(t)
            }),
            t = !0,
            a = !1,
            n = void 0;
        try {
            for (var r, o = e[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                var i = r.value;
                Object(b.unregisterBlockType)(i.name)
            }
        } catch (e) {
            a = !0, n = e
        } finally {
            try {
                t || null == o.return || o.return()
            } finally {
                if (a) throw n
            }
        }
        var c = j(_()),
            l = c.find(function(e) {
                return "amp/amp-story-page" === e.name
            });
        F(l ? l.clientId : void 0);
        var s = !0,
            d = !1,
            p = void 0;
        try {
            for (var m, f = c[Symbol.iterator](); !(s = (m = f.next()).done); s = !0) {
                var h = m.value;
                h.attributes.ampFontFamily && Object(q.s)(h.attributes.ampFontFamily)
            }
        } catch (e) {
            d = !0, p = e
        } finally {
            try {
                s || null == f.return || f.return()
            } finally {
                if (d) throw p
            }
        }
        T("fixedToolbar") || P("fixedToolbar"), Object(q.A)(), document.querySelector(".block-editor-writing-flow__click-redirect").remove();
        for (var v = 0, y = ["amp/amp-story-text", "amp/amp-story-post-author", "amp/amp-story-post-date", "amp/amp-story-post-title"]; v < y.length; v++) {
            var O = y[v];
            Object(b.registerBlockStyle)(O, {
                name: "rounded",
                label: Object(u.__)("Rounded", "amp")
            })
        }
        Object(b.registerBlockStyle)("amp/amp-story-text", {
            name: "half-rounded",
            label: Object(u.__)("Half Rounded", "amp")
        }), Object(b.registerBlockStyle)("core/image", {
            name: "rounded",
            label: Object(u.__)("Rounded", "amp")
        }), Object(b.registerBlockStyle)("core/quote", {
            name: "white",
            label: Object(u.__)("White", "amp")
        }), Object(b.unregisterBlockStyle)("core/quote", "large")
    });
    var H, L = w(),
        W = _(),
        U = A();
    Object(m.subscribe)(l()(i.a.mark(function e() {
        var t, a, n, r, o, c, l, s, u, d, p, m, f;
        return i.a.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    for (Object(q.t)(), t = Object(b.getDefaultBlockName)(), (a = k()) ? "amp/amp-story-page" === a.name && "amp/amp-story-page" !== t ? Object(b.setDefaultBlockName)("amp/amp-story-page") : "amp/amp-story-page" !== a.name && "amp/amp-story-text" !== t && Object(b.setDefaultBlockName)("amp/amp-story-text") : "amp/amp-story-page" !== t && Object(b.setDefaultBlockName)("amp/amp-story-page"), H !== a && (n = document.querySelector(".edit-post-layout")) && n.setAttribute("data-block-name", a ? a.name : ""), H = a, r = w(), o = r.find(function(e) {
                        return !L.includes(e)
                    }), L.filter(function(e) {
                        return !r.includes(e)
                    }).includes(M()) && (c = Math.max(0, L.indexOf(M()) - 1), F((L = r)[c])), L = r, o && F(o), l = !0, s = !1, u = void 0, e.prev = 15, d = W[Symbol.iterator](); !(l = (p = d.next()).done); l = !0) m = p.value, Object(q.v)(m), Object(q.u)(m), Object(q.y)(m), Object(q.x)(m), Object(q.w)(m);
                    e.next = 23;
                    break;
                case 19:
                    e.prev = 19, e.t0 = e.catch(15), s = !0, u = e.t0;
                case 23:
                    e.prev = 23, e.prev = 24, l || null == d.return || d.return();
                case 26:
                    if (e.prev = 26, !s) {
                        e.next = 29;
                        break
                    }
                    throw u;
                case 29:
                    return e.finish(26);
                case 30:
                    return e.finish(23);
                case 31:
                    if (W = _(), "visual" !== (f = A()) || f === U) {
                        e.next = 40;
                        break
                    }
                case 34:
                    if (document.querySelector(".editor-block-list__layout")) {
                        e.next = 39;
                        break
                    }
                    return e.next = 37, new Promise(function(e) {
                        return setTimeout(e, 200)
                    });
                case 37:
                    e.next = 34;
                    break;
                case 39:
                    Object(q.A)();
                case 40:
                    U = f;
                case 41:
                case "end":
                    return e.stop()
            }
        }, e, null, [
            [15, 19, 23, 31],
            [24, , 26, 30]
        ])
    }))), y.a.subscribe(function() {
        var e = w(),
            t = N();
        if (!R() && t.length > 0 && e !== t) {
            var a = !0,
                n = !1,
                o = void 0;
            try {
                for (var i, c = t.entries()[Symbol.iterator](); !(a = (i = c.next()).done); a = !0) {
                    var l = r()(i.value, 2),
                        s = l[0],
                        u = l[1];
                    x(u, "", "", s)
                }
            } catch (e) {
                n = !0, o = e
            } finally {
                try {
                    a || null == c.return || c.return()
                } finally {
                    if (n) throw o
                }
            }
        }
        var d = V(),
            p = function(e) {
                if (!d.hasOwnProperty(e) || !S(e)) return "continue";
                var t = C(e),
                    a = d[e].filter(function(t) {
                        var a = t.id;
                        return e === E(a)
                    }),
                    n = Object(q.r)(a),
                    r = Math.ceil(n / 1e3);
                "time" === t.autoAdvanceAfter ? r > t.autoAdvanceAfterDuration && z(e, {
                    autoAdvanceAfterDuration: r
                }) : z(e, {
                    autoAdvanceAfterDuration: r
                });
                var o = !0,
                    i = !1,
                    c = void 0;
                try {
                    for (var l, s = a[Symbol.iterator](); !(o = (l = s.next()).done); o = !0) {
                        var u = l.value,
                            p = u.id,
                            m = u.parent,
                            f = u.animationType,
                            b = u.duration,
                            h = u.delay,
                            v = m ? S(m) : void 0;
                        z(p, {
                            ampAnimationAfter: v ? v.attributes.anchor : void 0,
                            ampAnimationType: f,
                            ampAnimationDuration: b,
                            ampAnimationDelay: h
                        })
                    }
                } catch (e) {
                    i = !0, c = e
                } finally {
                    try {
                        o || null == s.return || s.return()
                    } finally {
                        if (i) throw c
                    }
                }
            };
        for (var u in d) p(u)
    });
    var Q = a(67);
    Q.keys().forEach(function(e) {
        var t = Q(e),
            a = t.name,
            n = t.render,
            r = t.isActive;
        (void 0 === r || r) && Object(f.registerPlugin)(a, {
            render: n
        })
    }), Object(s.addFilter)("blocks.registerBlockType", "ampStoryEditorBlocks/setBlockParent", q.B), Object(s.addFilter)("blocks.registerBlockType", "ampStoryEditorBlocks/addAttributes", q.a), Object(s.addFilter)("blocks.registerBlockType", "ampStoryEditorBlocks/filterBlockTransforms", q.f), Object(s.addFilter)("editor.BlockEdit", "ampStoryEditorBlocks/addStorySettings", v.s), Object(s.addFilter)("editor.BlockEdit", "ampStoryEditorBlocks/addPageNumber", v.B), Object(s.addFilter)("editor.BlockEdit", "ampStoryEditorBlocks/addEditFeaturedImage", v.w), Object(s.addFilter)("editor.PostFeaturedImage", "ampStoryEditorBlocks/addFeaturedImageNotice", v.E), Object(s.addFilter)("editor.BlockListBlock", "ampStoryEditorBlocks/withActivePageState", v.r), Object(s.addFilter)("editor.BlockListBlock", "ampStoryEditorBlocks/addWrapperProps", v.G), Object(s.addFilter)("editor.MediaUpload", "ampStoryEditorBlocks/addCroppedFeaturedImage", function(e) {
        return Object(h.b)(e, Object(q.l)())
    }), Object(s.addFilter)("editor.MediaUpload", "ampStoryEditorBlocks/addPosterImageNotice", v.F), Object(s.addFilter)("blocks.getSaveContent.extraProps", "ampStoryEditorBlocks/addExtraAttributes", q.b), Object(s.addFilter)("blocks.getSaveElement", "ampStoryEditorBlocks/wrapBlocksInGridLayer", q.C), Object(s.addFilter)("editor.BlockDropZone", "ampStoryEditorBlocks/withStoryBlockDropZone", v.D), Object(s.addFilter)("editor.BlockEdit", "ampStoryEditorBlocks/withCallToActionValidation", v.v), Object(s.addFilter)("blocks.getBlockAttributes", "ampStoryEditorBlocks/filterBlockAttributes", q.e);
    var G = a(70);
    G.keys().forEach(function(e) {
        var t = G(e),
            a = t.name,
            n = t.settings;
        Object(b.registerBlockType)(a, n)
    })
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var a = [],
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, c = e[Symbol.iterator](); !(n = (i = c.next()).done) && (a.push(i.value), !t || a.length !== t); n = !0);
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                n || null == c.return || c.return()
            } finally {
                if (r) throw o
            }
        }
        return a
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(e, t, a) {
    "use strict";
    var n = a(47);

    function r() {}

    function o() {}
    o.resetWarningCache = r, e.exports = function() {
        function e(e, t, a, r, o, i) {
            if (i !== n) {
                var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw c.name = "Invariant Violation", c
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var a = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: r
        };
        return a.PropTypes = a, a
    }
}, function(e, t, a) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t) {
    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function n(t) {
        return "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? e.exports = n = function(e) {
            return a(e)
        } : e.exports = n = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
        }, n(t)
    }
    e.exports = n
}, function(e, t) {
    function a(t, n) {
        return e.exports = a = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, a(t, n)
    }
    e.exports = a
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
            return a
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {}, function(e, t) {
    var a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (a) {
        var n = new Uint8Array(16);
        e.exports = function() {
            return a(n), n
        }
    } else {
        var r = new Array(16);
        e.exports = function() {
            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
            return r
        }
    }
}, function(e, t) {
    for (var a = [], n = 0; n < 256; ++n) a[n] = (n + 256).toString(16).substr(1);
    e.exports = function(e, t) {
        var n = t || 0,
            r = a;
        return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if (null == e) return {};
        var a, n, r = {},
            o = Object.keys(e);
        for (n = 0; n < o.length; n++) a = o[n], t.indexOf(a) >= 0 || (r[a] = e[a]);
        return r
    }
}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {
    "use strict";
    var n = a(65);
    e.exports = function(e, t, a) {
        a = a || {}, 9 === t.nodeType && (t = n.getWindow(t));
        var r = a.allowHorizontalScroll,
            o = a.onlyScrollIfNeeded,
            i = a.alignWithTop,
            c = a.alignWithLeft,
            l = a.offsetTop || 0,
            s = a.offsetLeft || 0,
            u = a.offsetBottom || 0,
            d = a.offsetRight || 0;
        r = void 0 === r || r;
        var p = n.isWindow(t),
            m = n.offset(e),
            f = n.outerHeight(e),
            b = n.outerWidth(e),
            h = void 0,
            v = void 0,
            q = void 0,
            g = void 0,
            y = void 0,
            O = void 0,
            k = void 0,
            j = void 0,
            _ = void 0,
            E = void 0;
        p ? (k = t, E = n.height(k), _ = n.width(k), j = {
            left: n.scrollLeft(k),
            top: n.scrollTop(k)
        }, y = {
            left: m.left - j.left - s,
            top: m.top - j.top - l
        }, O = {
            left: m.left + b - (j.left + _) + d,
            top: m.top + f - (j.top + E) + u
        }, g = j) : (h = n.offset(t), v = t.clientHeight, q = t.clientWidth, g = {
            left: t.scrollLeft,
            top: t.scrollTop
        }, y = {
            left: m.left - (h.left + (parseFloat(n.css(t, "borderLeftWidth")) || 0)) - s,
            top: m.top - (h.top + (parseFloat(n.css(t, "borderTopWidth")) || 0)) - l
        }, O = {
            left: m.left + b - (h.left + q + (parseFloat(n.css(t, "borderRightWidth")) || 0)) + d,
            top: m.top + f - (h.top + v + (parseFloat(n.css(t, "borderBottomWidth")) || 0)) + u
        }), y.top < 0 || O.top > 0 ? !0 === i ? n.scrollTop(t, g.top + y.top) : !1 === i ? n.scrollTop(t, g.top + O.top) : y.top < 0 ? n.scrollTop(t, g.top + y.top) : n.scrollTop(t, g.top + O.top) : o || ((i = void 0 === i || !!i) ? n.scrollTop(t, g.top + y.top) : n.scrollTop(t, g.top + O.top)), r && (y.left < 0 || O.left > 0 ? !0 === c ? n.scrollLeft(t, g.left + y.left) : !1 === c ? n.scrollLeft(t, g.left + O.left) : y.left < 0 ? n.scrollLeft(t, g.left + y.left) : n.scrollLeft(t, g.left + O.left) : o || ((c = void 0 === c || !!c) ? n.scrollLeft(t, g.left + y.left) : n.scrollLeft(t, g.left + O.left)))
    }
}, function(e, t, a) {
    "use strict";
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        };

    function o(e, t) {
        var a = e["page" + (t ? "Y" : "X") + "Offset"],
            n = "scroll" + (t ? "Top" : "Left");
        if ("number" != typeof a) {
            var r = e.document;
            "number" != typeof(a = r.documentElement[n]) && (a = r.body[n])
        }
        return a
    }

    function i(e) {
        return o(e)
    }

    function c(e) {
        return o(e, !0)
    }

    function l(e) {
        var t = function(e) {
                var t, a = void 0,
                    n = void 0,
                    r = e.ownerDocument,
                    o = r.body,
                    i = r && r.documentElement;
                return a = (t = e.getBoundingClientRect()).left, n = t.top, {
                    left: a -= i.clientLeft || o.clientLeft || 0,
                    top: n -= i.clientTop || o.clientTop || 0
                }
            }(e),
            a = e.ownerDocument,
            n = a.defaultView || a.parentWindow;
        return t.left += i(n), t.top += c(n), t
    }
    var s = new RegExp("^(" + /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source + ")(?!px)[a-z%]+$", "i"),
        u = /^(top|right|bottom|left)$/,
        d = "currentStyle",
        p = "runtimeStyle",
        m = "left",
        f = "px";
    var b = void 0;

    function h(e, t) {
        for (var a = 0; a < e.length; a++) t(e[a])
    }

    function v(e) {
        return "border-box" === b(e, "boxSizing")
    }
    "undefined" != typeof window && (b = window.getComputedStyle ? function(e, t, a) {
        var n = "",
            r = e.ownerDocument,
            o = a || r.defaultView.getComputedStyle(e, null);
        return o && (n = o.getPropertyValue(t) || o[t]), n
    } : function(e, t) {
        var a = e[d] && e[d][t];
        if (s.test(a) && !u.test(t)) {
            var n = e.style,
                r = n[m],
                o = e[p][m];
            e[p][m] = e[d][m], n[m] = "fontSize" === t ? "1em" : a || 0, a = n.pixelLeft + f, n[m] = r, e[p][m] = o
        }
        return "" === a ? "auto" : a
    });
    var q = ["margin", "border", "padding"],
        g = -1,
        y = 2,
        O = 1;

    function k(e, t, a) {
        var n = 0,
            r = void 0,
            o = void 0,
            i = void 0;
        for (o = 0; o < t.length; o++)
            if (r = t[o])
                for (i = 0; i < a.length; i++) {
                    var c = void 0;
                    c = "border" === r ? r + a[i] + "Width" : r + a[i], n += parseFloat(b(e, c)) || 0
                }
        return n
    }

    function j(e) {
        return null != e && e == e.window
    }
    var _ = {};

    function E(e, t, a) {
        if (j(e)) return "width" === t ? _.viewportWidth(e) : _.viewportHeight(e);
        if (9 === e.nodeType) return "width" === t ? _.docWidth(e) : _.docHeight(e);
        var n = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = (b(e), v(e)),
            i = 0;
        (null == r || r <= 0) && (r = void 0, (null == (i = b(e, t)) || Number(i) < 0) && (i = e.style[t] || 0), i = parseFloat(i) || 0), void 0 === a && (a = o ? O : g);
        var c = void 0 !== r || o,
            l = r || i;
        if (a === g) return c ? l - k(e, ["border", "padding"], n) : i;
        if (c) {
            var s = a === y ? -k(e, ["border"], n) : k(e, ["margin"], n);
            return l + (a === O ? 0 : s)
        }
        return i + k(e, q.slice(a), n)
    }
    h(["Width", "Height"], function(e) {
        _["doc" + e] = function(t) {
            var a = t.document;
            return Math.max(a.documentElement["scroll" + e], a.body["scroll" + e], _["viewport" + e](a))
        }, _["viewport" + e] = function(t) {
            var a = "client" + e,
                n = t.document,
                r = n.body,
                o = n.documentElement[a];
            return "CSS1Compat" === n.compatMode && o || r && r[a] || o
        }
    });
    var w = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    };

    function S(e) {
        var t = void 0,
            a = arguments;
        return 0 !== e.offsetWidth ? t = E.apply(void 0, a) : function(e, t, a) {
            var n = {},
                r = e.style,
                o = void 0;
            for (o in t) t.hasOwnProperty(o) && (n[o] = r[o], r[o] = t[o]);
            for (o in a.call(e), t) t.hasOwnProperty(o) && (r[o] = n[o])
        }(e, w, function() {
            t = E.apply(void 0, a)
        }), t
    }

    function C(e, t, a) {
        var n = a;
        if ("object" !== (void 0 === t ? "undefined" : r(t))) return void 0 !== n ? ("number" == typeof n && (n += "px"), void(e.style[t] = n)) : b(e, t);
        for (var o in t) t.hasOwnProperty(o) && C(e, o, t[o])
    }
    h(["width", "height"], function(e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1);
        _["outer" + t] = function(t, a) {
            return t && S(t, e, a ? 0 : O)
        };
        var a = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"];
        _[e] = function(t, n) {
            if (void 0 === n) return t && S(t, e, g);
            if (t) {
                b(t);
                return v(t) && (n += k(t, ["padding", "border"], a)), C(t, e, n)
            }
        }
    }), e.exports = n({
        getWindow: function(e) {
            var t = e.ownerDocument || e;
            return t.defaultView || t.parentWindow
        },
        offset: function(e, t) {
            if (void 0 === t) return l(e);
            ! function(e, t) {
                "static" === C(e, "position") && (e.style.position = "relative");
                var a = l(e),
                    n = {},
                    r = void 0,
                    o = void 0;
                for (o in t) t.hasOwnProperty(o) && (r = parseFloat(C(e, o)) || 0, n[o] = r + t[o] - a[o]);
                C(e, n)
            }(e, t)
        },
        isWindow: j,
        each: h,
        css: C,
        clone: function(e) {
            var t = {};
            for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
            if (e.overflow)
                for (var a in e) e.hasOwnProperty(a) && (t.overflow[a] = e.overflow[a]);
            return t
        },
        scrollLeft: function(e, t) {
            if (j(e)) {
                if (void 0 === t) return i(e);
                window.scrollTo(t, c(e))
            } else {
                if (void 0 === t) return e.scrollLeft;
                e.scrollLeft = t
            }
        },
        scrollTop: function(e, t) {
            if (j(e)) {
                if (void 0 === t) return c(e);
                window.scrollTo(i(e), t)
            } else {
                if (void 0 === t) return e.scrollTop;
                e.scrollTop = t
            }
        },
        viewportWidth: 0,
        viewportHeight: 0
    }, _)
}, function(e, t, a) {}, function(e, t, a) {
    var n = {
        "./pre-publish-panel.js": 68,
        "./template-menu-item.js": 69
    };

    function r(e) {
        var t = o(e);
        return a(t)
    }

    function o(e) {
        if (!a.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return n[e]
    }
    r.keys = function() {
        return Object.keys(n)
    }, r.resolve = o, e.exports = r, r.id = 67
}, function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, "name", function() {
        return i
    }), a.d(t, "render", function() {
        return c
    });
    var n = a(0),
        r = a(33),
        o = a(4),
        i = "amp-story-pre-publish-panel",
        c = function() {
            return Object(n.createElement)(r.a, {
                dimensions: Object(o.l)(),
                required: !0
            })
        }
}, function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, "isActive", function() {
        return u
    }), a.d(t, "name", function() {
        return d
    }), a.d(t, "render", function() {
        return p
    });
    var n = a(0),
        r = a(32),
        o = a(1),
        i = a(3),
        c = a(8),
        l = a(12),
        s = function() {
            var e = Object(i.select)("core/block-editor"),
                t = e.getSelectedBlockClientId,
                a = e.getBlock,
                n = Object(i.dispatch)("core/block-editor"),
                r = n.__experimentalReceiveReusableBlocks,
                s = n.__experimentalSaveReusableBlock,
                u = a(t());
            if ("amp/amp-story-page" === u.name) {
                var d = Object(c.cloneBlock)(u),
                    p = {
                        id: Object(l.uniqueId)("reusable"),
                        clientId: d.clientId,
                        title: Object(o.__)("Template", "amp")
                    };
                r([{
                    reusableBlock: p,
                    parsedBlock: d
                }]), s(p.id)
            }
        },
        u = !1,
        d = "amp-story",
        p = function() {
            return Object(n.createElement)(r.PluginBlockSettingsMenuItem, {
                allowedBlocks: ["amp/amp-story-page"],
                icon: "welcome-add-page",
                label: Object(o.__)("Save as Template", "amp"),
                role: "menuitem",
                onClick: s
            })
        }
}, function(e, t, a) {
    var n = {
        "./amp-story-cta/index.js": 80,
        "./amp-story-page/index.js": 81,
        "./amp-story-post-author/index.js": 73,
        "./amp-story-post-date/index.js": 75,
        "./amp-story-post-title/index.js": 77,
        "./amp-story-text/index.js": 82
    };

    function r(e) {
        var t = o(e);
        return a(t)
    }

    function o(e) {
        if (!a.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return n[e]
    }
    r.keys = function() {
        return Object.keys(n)
    }, r.resolve = o, e.exports = r, r.id = 70
}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, "name", function() {
        return c
    }), a.d(t, "settings", function() {
        return l
    });
    var n = a(9),
        r = a.n(n),
        o = a(1),
        i = a(4),
        c = (a(74), "amp/amp-story-post-author"),
        l = r()({
            title: Object(o.__)("Story Author", "amp"),
            description: Object(o.__)("Display the name of the story’s author. Modify by changing the author in the document settings.", "amp"),
            category: "common",
            icon: "admin-users",
            keywords: [Object(o.__)("post", "amp"), Object(o.__)("author", "amp"), Object(o.__)("name", "amp"), Object(o.__)("byline", "amp")]
        }, Object(i.k)({
            tagName: "div",
            attribute: "author",
            isEditable: !1
        }))
}, function(e, t, a) {}, function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, "name", function() {
        return c
    }), a.d(t, "settings", function() {
        return l
    });
    var n = a(9),
        r = a.n(n),
        o = a(1),
        i = a(4),
        c = (a(76), "amp/amp-story-post-date"),
        l = r()({
            title: Object(o.__)("Story Date", "amp"),
            description: Object(o.__)("Display the publish date of the story. Modify by changing the date in the document settings.", "amp"),
            category: "common",
            icon: "clock",
            keywords: [Object(o.__)("post", "amp"), Object(o.__)("publish date", "amp"), Object(o.__)("published date", "amp"), Object(o.__)("date", "amp")]
        }, Object(i.k)({
            tagName: "div",
            attribute: "date",
            isEditable: !1
        }))
}, function(e, t, a) {}, function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, "name", function() {
        return l
    }), a.d(t, "settings", function() {
        return s
    });
    var n = a(9),
        r = a.n(n),
        o = a(0),
        i = a(1),
        c = a(4),
        l = (a(78), "amp/amp-story-post-title"),
        s = r()({
            title: Object(i.__)("Story Title", "amp"),
            description: Object(i.__)("Display the story title. Modify by changing the overall title of the document.", "amp"),
            category: "common",
            icon: Object(o.createElement)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
            }, Object(o.createElement)("path", {
                d: "M5 4v3h5.5v12h3V7H19V4z"
            }), Object(o.createElement)("path", {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            })),
            keywords: [Object(i.__)("post", "amp"), Object(i.__)("title", "amp")]
        }, Object(c.k)({
            tagName: "h1",
            attribute: "title",
            placeholder: Object(i.__)("Add story title…", "amp"),
            isEditable: !0
        }))
}, function(e, t, a) {}, function(e, t, a) {}, function(e, t, a) {
    "use strict";
    a.r(t);
    var n = a(0),
        r = (a(28), a(1)),
        o = a(18),
        i = a.n(o),
        c = a(14),
        l = a.n(c),
        s = a(13),
        u = a.n(s),
        d = a(15),
        p = a.n(d),
        m = a(16),
        f = a.n(m),
        b = a(10),
        h = a.n(b),
        v = a(17),
        q = a.n(v),
        g = a(19),
        y = a.n(g),
        O = a(29),
        k = a.n(O),
        j = (a(11), a(2)),
        _ = a(27),
        E = (a(71), a(3)),
        w = a(21),
        S = function(e) {
            function t(e) {
                var a;
                return l()(this, t), a = p()(this, f()(t).apply(this, arguments)), e.attributes.anchor || a.props.setAttributes({
                    anchor: k()()
                }), a.nodeRef = null, a.bindRef = a.bindRef.bind(h()(a)), a
            }
            return q()(t, e), u()(t, [{
                key: "bindRef",
                value: function(e) {
                    e && (this.nodeRef = e)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props,
                        a = t.attributes,
                        o = t.backgroundColor,
                        c = t.textColor,
                        l = t.setAttributes,
                        s = t.isSelected,
                        u = t.className,
                        d = t.fontSize,
                        p = a.text,
                        m = a.url,
                        f = a.customBackgroundColor,
                        b = a.opacity,
                        h = Object(E.select)("core/block-editor").getSettings().colors,
                        v = Object(w.a)(h, o, f, b);
                    return Object(n.createElement)(n.Fragment, null, Object(n.createElement)("div", {
                        className: u,
                        ref: this.bindRef
                    }, Object(n.createElement)(_.RichText, {
                        placeholder: Object(r.__)("Add text…", "amp"),
                        value: p,
                        onChange: function(e) {
                            return l({
                                text: e
                            })
                        },
                        formattingControls: ["bold", "italic", "strikethrough"],
                        className: y()("amp-block-story-cta__link", (e = {
                            "has-background": o.color
                        }, i()(e, o.class, o.class), i()(e, "has-text-color", c.color), i()(e, c.class, c.class), e)),
                        style: {
                            backgroundColor: v,
                            color: c.color,
                            fontSize: d.size ? d.size + "px" : void 0
                        },
                        keepPlaceholderOnFocus: !0
                    })), s && Object(n.createElement)("form", {
                        className: "amp-block-story-cta__inline-link",
                        onSubmit: function(e) {
                            return e.preventDefault()
                        }
                    }, Object(n.createElement)(j.Dashicon, {
                        icon: "admin-links"
                    }), Object(n.createElement)(_.URLInput, {
                        value: m,
                        onChange: function(e) {
                            return l({
                                url: e
                            })
                        }
                    }), Object(n.createElement)(j.IconButton, {
                        icon: "editor-break",
                        label: Object(r.__)("Apply", "amp"),
                        type: "submit"
                    })))
                }
            }]), t
        }(n.Component),
        C = a(9),
        B = a.n(C),
        x = a(4),
        z = function(e) {
            var t = e.attributes,
                a = t.url,
                r = t.text,
                o = Object(x.j)(B()({}, t, {
                    className: "amp-block-story-cta__link"
                })),
                i = Object(x.q)(t);
            return Object(n.createElement)("amp-story-cta-layer", null, Object(n.createElement)(_.RichText.Content, {
                tagName: "a",
                className: o,
                href: a,
                style: i,
                value: r
            }))
        };
    a.d(t, "name", function() {
        return A
    }), a.d(t, "settings", function() {
        return T
    });
    var I = function(e) {
        return Object(n.createElement)("svg", e, Object(n.createElement)("path", {
            d: "M7 14v2H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5a3.001 3.001 0 0 1-2 2.83V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2z"
        }), Object(n.createElement)("path", {
            d: "M18.31 15.442a.563.563 0 0 0-.202-.636l-6.631-4.808a.562.562 0 0 0-.891.415l-.58 8.17a.564.564 0 0 0 .359.565c.236.1.49.018.644-.175l1.646-2.074 1.632 3.5a.561.561 0 0 0 .748.273L16.477 20a.562.562 0 0 0 .272-.748l-1.633-3.5 2.647.072a.563.563 0 0 0 .548-.382z"
        }))
    };
    I.defaultProps = {
        width: "24",
        height: "24",
        xmlns: "http://www.w3.org/2000/svg"
    };
    var A = "amp/amp-story-cta",
        T = {
            title: Object(r.__)("Call to Action", "amp"),
            description: Object(r.__)("Prompt visitors to take action with a button-style link.", "amp"),
            icon: I,
            category: "layout",
            keywords: [Object(r.__)("call to action", "amp"), Object(r.__)("cta", "amp"), Object(r.__)("button", "amp")],
            attributes: {
                url: {
                    type: "string",
                    source: "attribute",
                    selector: "a",
                    attribute: "href"
                },
                text: {
                    type: "string",
                    source: "html",
                    selector: "a"
                },
                align: {
                    type: "string",
                    default: "center"
                },
                customTextColor: {
                    type: "string",
                    default: "#ffffff"
                },
                customBackgroundColor: {
                    type: "string",
                    default: "#32373c"
                }
            },
            supports: {
                align: !0,
                alignWide: !1
            },
            edit: S,
            save: z
        }
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var n = a(0),
        r = (a(28), a(1)),
        o = a(14),
        i = a.n(o),
        c = a(15),
        l = a.n(c),
        s = a(16),
        u = a.n(s),
        d = a(10),
        p = a.n(d),
        m = a(13),
        f = a.n(m),
        b = a(17),
        h = a.n(b),
        v = a(29),
        q = a.n(v),
        g = a(19),
        y = a.n(g),
        O = (a(11), a(7)),
        k = a(2),
        j = a(3),
        _ = a(6),
        E = a(4),
        w = a(5),
        S = (a(72), [
            ["amp/amp-story-text"]
        ]),
        C = function(e) {
            function t(e) {
                var a;
                return i()(this, t), a = l()(this, u()(t).apply(this, arguments)), e.attributes.anchor || a.props.setAttributes({
                    anchor: q()()
                }), a.onSelectMedia = a.onSelectMedia.bind(p()(a)), a
            }
            return h()(t, e), f()(t, [{
                key: "shouldComponentUpdate",
                value: function() {
                    return this.ensureCTABeingLast(), !0
                }
            }]), f()(t, [{
                key: "onSelectMedia",
                value: function(e) {
                    if (e && e.url) {
                        var t;
                        if (e.media_type) t = e.media_type === w.r ? w.r : w.k;
                        else {
                            if (e.type !== w.k && e.type !== w.r) return;
                            t = e.type
                        }
                        this.props.setAttributes({
                            mediaUrl: e.url,
                            mediaId: e.id,
                            mediaType: t,
                            poster: w.r === t && e.image && e.image.src !== e.icon ? e.image.src : void 0
                        })
                    } else this.props.setAttributes({
                        mediaUrl: void 0,
                        mediaId: void 0,
                        mediaType: void 0,
                        poster: void 0
                    })
                }
            }, {
                key: "removeBackgroundColor",
                value: function(e) {
                    var t = this.props,
                        a = t.attributes,
                        n = t.setAttributes,
                        r = JSON.parse(a.backgroundColors);
                    r.splice(e, 1), n({
                        backgroundColors: JSON.stringify(r)
                    })
                }
            }, {
                key: "setBackgroundColors",
                value: function(e, t) {
                    var a = this.props,
                        n = a.attributes,
                        r = a.setAttributes,
                        o = JSON.parse(n.backgroundColors);
                    o[t] = {
                        color: e
                    }, r({
                        backgroundColors: JSON.stringify(o)
                    })
                }
            }, {
                key: "getOverlayColorSettings",
                value: function() {
                    var e = this,
                        t = this.props.attributes,
                        a = JSON.parse(t.backgroundColors);
                    if (!a.length) return [{
                        value: void 0,
                        onChange: function(t) {
                            e.setBackgroundColors(t, 0)
                        },
                        label: Object(r.__)("Color", "amp")
                    }];
                    var n = [],
                        o = a.length > 1;
                    return a.forEach(function(t, a) {
                        n[a] = {
                            value: t ? t.color : void 0,
                            onChange: function(t) {
                                e.setBackgroundColors(t, a)
                            },
                            /* translators: %s: color number */
                            label: o ? Object(r.sprintf)(Object(r.__)("Color %s", "amp"), a + 1) : Object(r.__)("Color", "amp")
                        }
                    }), n
                }
            }, {
                key: "ensureCTABeingLast",
                value: function() {
                    var e = this.props,
                        t = e.getBlockOrder,
                        a = e.moveBlockToPosition,
                        n = e.clientId,
                        r = t(n);
                    if (!(1 >= r.length)) {
                        var o = Object(E.i)(n);
                        o && r[r.length - 1] !== o.clientId && a(o.clientId, n, n, r.length - 1)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        a = t.attributes,
                        o = t.media,
                        i = t.setAttributes,
                        c = t.totalAnimationDuration,
                        l = t.allowedBlocks,
                        s = a.mediaId,
                        u = a.mediaType,
                        d = a.mediaUrl,
                        p = a.focalPoint,
                        m = void 0 === p ? {
                            x: .5,
                            y: .5
                        } : p,
                        f = a.overlayOpacity,
                        b = a.poster,
                        h = a.autoAdvanceAfter,
                        v = a.autoAdvanceAfterDuration,
                        q = Object(n.createElement)("p", null, Object(r.__)("To edit the background image or video, you need permission to upload media.", "amp")),
                        g = {
                            backgroundImage: w.k === u && d ? "url(".concat(d, ")") : void 0,
                            backgroundPosition: w.k === u ? "".concat(100 * m.x, "% ").concat(100 * m.y, "%") : void 0,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        };
                    w.r === u && b && (g.backgroundImage = "url(".concat(b, ")"));
                    var j, _ = [{
                        value: "",
                        label: Object(r.__)("Manual", "amp")
                    }, {
                        value: "auto",
                        label: Object(r.__)("Automatic", "amp")
                    }, {
                        value: "time",
                        label: Object(r.__)("After a certain time", "amp")
                    }, {
                        value: "media",
                        label: Object(r.__)("After media has played", "amp")
                    }];
                    "media" === h ? j = Object(r.__)("Based on the first media block encountered on the page", "amp") : "auto" === h && (j = Object(r.__)("Based on the duration of all animated blocks on the page", "amp"));
                    var C = {
                            width: "100%",
                            height: "100%",
                            position: "absolute"
                        },
                        B = JSON.parse(a.backgroundColors);
                    (C = Object(E.c)(C, B)).opacity = f / 100;
                    var x = this.getOverlayColorSettings();
                    return Object(n.createElement)(n.Fragment, null, Object(n.createElement)(O.InspectorControls, null, Object(n.createElement)(O.PanelColorSettings, {
                        title: Object(r.__)("Background Color", "amp"),
                        initialOpen: !1,
                        colorSettings: x
                    }, Object(n.createElement)("p", null, B.length < 2 && Object(n.createElement)(k.Button, {
                        onClick: function() {
                            return e.setBackgroundColors(null, 1)
                        },
                        isSmall: !0
                    }, Object(r.__)("Add Gradient", "amp")), B.length > 1 && Object(n.createElement)(k.Button, {
                        onClick: function() {
                            return e.removeBackgroundColor(B.length - 1)
                        },
                        isLink: !0,
                        isDestructive: !0
                    }, Object(r.__)("Remove Gradient", "amp"))), Object(n.createElement)(k.RangeControl, {
                        label: Object(r.__)("Opacity", "amp"),
                        value: f,
                        onChange: function(e) {
                            return i({
                                overlayOpacity: e
                            })
                        },
                        min: 0,
                        max: 100,
                        step: 5,
                        required: !0
                    })), Object(n.createElement)(k.PanelBody, {
                        title: Object(r.__)("Background Media", "amp")
                    }, Object(n.createElement)(n.Fragment, null, Object(n.createElement)(k.BaseControl, null, Object(n.createElement)(O.MediaUploadCheck, {
                        fallback: q
                    }, Object(n.createElement)(O.MediaUpload, {
                        onSelect: this.onSelectMedia,
                        allowedTypes: w.c,
                        value: s,
                        render: function(e) {
                            var t = e.open;
                            return Object(n.createElement)(k.Button, {
                                isDefault: !0,
                                isLarge: !0,
                                onClick: t,
                                className: "editor-amp-story-page-background"
                            }, d ? Object(r.__)("Edit Media", "amp") : Object(r.__)("Select Media", "amp"))
                        }
                    })), !!s && Object(n.createElement)(O.MediaUploadCheck, null, Object(n.createElement)(k.Button, {
                        onClick: function() {
                            return i({
                                mediaUrl: void 0,
                                mediaId: void 0,
                                mediaType: void 0
                            })
                        },
                        isLink: !0,
                        isDestructive: !0
                    }, w.r === u ? Object(r.__)("Remove Video", "amp") : Object(r.__)("Remove image", "amp")))), w.r === u && Object(n.createElement)(O.MediaUploadCheck, null, Object(n.createElement)(k.BaseControl, {
                        id: "editor-amp-story-page-poster",
                        label: Object(r.__)("Poster Image", "amp"),
                        help: Object(r.sprintf)(
                            /* translators: 1: 720p. 2: 720w. 3: 1280h */
                            Object(r.__)("The recommended dimensions for a poster image are: %1$s (%2$s x %3$s)", "amp"), "720p", "720w", "1080h")
                    }, !b && Object(n.createElement)(k.Notice, {
                        status: "error",
                        isDismissible: !1
                    }, Object(r.__)("A poster image must be set.", "amp")), Object(n.createElement)(O.MediaUpload, {
                        title: Object(r.__)("Select Poster Image", "amp"),
                        onSelect: function(e) {
                            return i({
                                poster: e.url
                            })
                        },
                        allowedTypes: w.o,
                        modalClass: "editor-amp-story-background-video-poster__media-modal",
                        render: function(e) {
                            var t = e.open;
                            return Object(n.createElement)(k.Button, {
                                className: y()("editor-amp-story-page-background", {
                                    "editor-post-featured-image__toggle": !b,
                                    "editor-post-featured-image__preview": b
                                }),
                                onClick: t,
                                "aria-label": b ? Object(r.__)("Replace Poster Image", "amp") : null
                            }, b && Object(n.createElement)(k.ResponsiveWrapper, {
                                naturalWidth: 960,
                                naturalHeight: 1280
                            }, Object(n.createElement)("img", {
                                src: b,
                                alt: ""
                            })), !b && Object(r.__)("Set Poster Image", "amp"))
                        }
                    }), b && Object(n.createElement)(k.Button, {
                        onClick: function() {
                            return i({
                                poster: void 0
                            })
                        },
                        isLink: !0,
                        isDestructive: !0
                    }, Object(r.__)("Remove Poster Image", "amp")))), d && Object(n.createElement)(n.Fragment, null, w.k === u && k.FocalPointPicker && Object(n.createElement)(k.FocalPointPicker, {
                        label: Object(r.__)("Focal Point Picker", "amp"),
                        url: d,
                        value: m,
                        onChange: function(e) {
                            return i({
                                focalPoint: e
                            })
                        }
                    })))), Object(n.createElement)(k.PanelBody, {
                        title: Object(r.__)("Page Settings", "amp")
                    }, Object(n.createElement)(k.SelectControl, {
                        label: Object(r.__)("Advance to next page", "amp"),
                        help: j,
                        value: h,
                        options: _,
                        onChange: function(e) {
                            i({
                                autoAdvanceAfter: e
                            }), i({
                                autoAdvanceAfterDuration: c
                            })
                        }
                    }), "time" === h && Object(n.createElement)(k.RangeControl, {
                        label: Object(r.__)("Time in seconds", "amp"),
                        value: v ? parseInt(v) : 0,
                        onChange: function(e) {
                            return i({
                                autoAdvanceAfterDuration: e
                            })
                        },
                        min: Math.max(c, 1),
                        initialPosition: c,
                        help: c > 1 ? Object(r.__)("A minimum time is enforced because there are animated blocks on this page", "amp") : void 0
                    }))), Object(n.createElement)("div", {
                        style: g
                    }, w.r === u && o && Object(n.createElement)("div", {
                        className: "editor-amp-story-page-video-wrap"
                    }, Object(n.createElement)("video", {
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        className: "editor-amp-story-page-video",
                        poster: b
                    }, Object(n.createElement)("source", {
                        src: d,
                        type: o.mime_type
                    }))), B.length > 0 && Object(n.createElement)("div", {
                        style: C
                    }), Object(n.createElement)(O.InnerBlocks, {
                        template: S,
                        allowedBlocks: l
                    })))
                }
            }]), t
        }(n.Component),
        B = Object(_.compose)(Object(j.withSelect)(function(e, t) {
            var a = t.clientId,
                n = t.attributes,
                r = e("core").getMedia,
                o = e("core/block-editor"),
                i = o.getBlockOrder,
                c = o.getBlockRootClientId,
                l = !(0 === i().indexOf(a)) && !Object(E.i)(a),
                s = e("amp/story").getAnimatedBlocks,
                u = n.mediaId,
                d = (s()[a] || []).filter(function(e) {
                    var t = e.id;
                    return a === c(t)
                }),
                p = Object(E.r)(d),
                m = Math.ceil(p / 1e3);
            return {
                media: u ? r(u) : null,
                allowedBlocks: l ? w.b : w.d,
                totalAnimationDuration: m,
                getBlockOrder: i
            }
        }), Object(j.withDispatch)(function() {
            return {
                moveBlockToPosition: Object(j.dispatch)("core/block-editor").moveBlockToPosition
            }
        }))(C),
        x = function(e) {
            var t, a = e.attributes,
                r = a.anchor,
                o = a.focalPoint,
                i = a.overlayOpacity,
                c = a.mediaUrl,
                l = a.mediaType,
                s = a.poster,
                u = a.autoAdvanceAfter,
                d = a.autoAdvanceAfterDuration,
                p = a.autoAdvanceAfterMedia,
                m = JSON.parse(a.backgroundColors);
            ["auto", "time"].includes(u) && d ? t = parseInt(d) + "s" : "media" === u && (t = p);
            var f = {};
            0 < m.length && ((f = Object(E.c)(f, m)).opacity = i / 100);
            var b = {
                objectPosition: w.k === l && o ? "".concat(100 * o.x, "% ").concat(100 * o.y, "%") : "initial"
            };
            return Object(n.createElement)("amp-story-page", {
                style: {
                    backgroundColor: "#ffffff"
                },
                id: r,
                "auto-advance-after": t
            }, c && Object(n.createElement)("amp-story-grid-layer", {
                template: "fill"
            }, w.k === l && Object(n.createElement)("amp-img", {
                layout: "fill",
                src: c,
                style: b
            }), w.r === l && Object(n.createElement)("amp-video", {
                layout: "fill",
                src: c,
                poster: s,
                muted: !0,
                autoplay: !0,
                loop: !0
            })), Object(n.createElement)("amp-story-grid-layer", {
                template: "fill",
                style: f
            }), Object(n.createElement)(O.InnerBlocks.Content, null))
        };
    a.d(t, "name", function() {
        return I
    }), a.d(t, "settings", function() {
        return A
    });
    var z = function(e) {
        return Object(n.createElement)("svg", e, Object(n.createElement)("g", {
            fill: "#181D21"
        }, Object(n.createElement)("path", {
            d: "M18.4 21H5.6V3h7.8l5 4.9V21zM7.1 19.5h9.8V8.6l-4-4.1H7.1v15z"
        }), Object(n.createElement)("path", {
            d: "M11.5 5.4v4.3h4.4"
        })))
    };
    z.defaultProps = {
        viewBox: "0 0 24 24"
    };
    var I = "amp/amp-story-page",
        A = {
            title: Object(r.__)("Page", "amp"),
            category: "layout",
            icon: z({
                width: 24,
                height: 24
            }),
            attributes: {
                anchor: {
                    source: "attribute",
                    selector: "amp-story-page",
                    attribute: "id"
                },
                mediaId: {
                    type: "number"
                },
                mediaUrl: {
                    type: "string",
                    source: "attribute",
                    selector: 'amp-story-grid-layer[template="fill"] > amp-img, amp-story-grid-layer[template="fill"] > amp-video',
                    attribute: "src"
                },
                mediaType: {
                    type: "string"
                },
                poster: {
                    type: "string"
                },
                focalPoint: {
                    type: "object"
                },
                autoAdvanceAfter: {
                    type: "string"
                },
                autoAdvanceAfterDuration: {
                    type: "number"
                },
                autoAdvanceAfterMedia: {
                    type: "string"
                },
                backgroundColors: {
                    default: "[]"
                },
                overlayOpacity: {
                    default: 50
                }
            },
            supports: {
                reusable: !0
            },
            edit: B,
            save: x
        }
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var n = a(0),
        r = a(1),
        o = a(8),
        i = a(18),
        c = a.n(i),
        l = a(9),
        s = a.n(l),
        u = a(14),
        d = a.n(u),
        p = a(13),
        m = a.n(p),
        f = a(15),
        b = a.n(f),
        h = a(16),
        v = a.n(h),
        q = a(10),
        g = a.n(q),
        y = a(17),
        O = a.n(y),
        k = a(19),
        j = a.n(k),
        _ = (a(11), a(7)),
        E = a(3),
        w = a(4),
        S = a(21),
        C = (a(79), function(e) {
            function t() {
                var e;
                return d()(this, t), (e = b()(this, v()(t).apply(this, arguments))).onReplace = e.onReplace.bind(g()(e)), e
            }
            return O()(t, e), m()(t, [{
                key: "componentDidMount",
                value: function() {
                    Object(w.z)(this.props)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props,
                        a = t.attributes,
                        n = t.isSelected,
                        r = a.height,
                        o = a.width;
                    (n || e.attributes.height !== r || e.attributes.width !== o) && Object(w.z)(this.props)
                }
            }, {
                key: "onReplace",
                value: function(e) {
                    var t = this.props,
                        a = t.attributes,
                        n = t.onReplace,
                        r = t.name;
                    (e = e.filter(function(e) {
                        return void 0 !== e
                    })).length && n(e.map(function(e, t) {
                        return 0 === t && e.name === r ? s()({}, e, {
                            attributes: s()({}, a, e.attributes)
                        }) : e
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props,
                        a = t.attributes,
                        o = t.setAttributes,
                        i = t.className,
                        l = t.fontSize,
                        s = t.backgroundColor,
                        u = t.customBackgroundColor,
                        d = t.textColor,
                        p = a.placeholder,
                        m = a.content,
                        f = a.align,
                        b = a.ampFitText,
                        h = a.autoFontSize,
                        v = a.height,
                        q = a.tagName,
                        g = a.opacity,
                        y = l && l.size ? l.size + "px" : void 0;
                    void 0 === y && ("h1" === q ? y = "2rem" : "h2" === q && (y = "1.5rem"));
                    var O = Object(E.select)("core/block-editor").getSettings().colors,
                        k = Object(S.a)(O, s, u, g),
                        w = b && m.length ? {
                            lineHeight: v + "px"
                        } : null;
                    return Object(n.createElement)(n.Fragment, null, Object(n.createElement)(_.BlockControls, null, Object(n.createElement)(_.AlignmentToolbar, {
                        value: f,
                        onChange: function(e) {
                            return o({
                                align: e
                            })
                        }
                    })), Object(n.createElement)("div", {
                        className: j()("wp-block-amp-story-text-wrapper", {
                            "with-line-height": b
                        }),
                        style: w
                    }, Object(n.createElement)(_.RichText, {
                        wrapperClassName: "wp-block-amp-story-text",
                        tagName: "p",
                        value: m,
                        onChange: function(e) {
                            return o({
                                content: e
                            })
                        },
                        onReplace: this.onReplace,
                        onSplit: function() {},
                        style: {
                            backgroundColor: k,
                            color: d.color,
                            fontSize: b ? h + "px" : y,
                            fontWeight: "h1" === q || "h2" === q ? 700 : "normal",
                            textAlign: f,
                            position: b && m.length ? "static" : void 0
                        },
                        className: j()(i, (e = {
                            "has-text-color": d.color,
                            "has-background": s.color
                        }, c()(e, s.class, s.class), c()(e, d.class, d.class), c()(e, l.class, b ? void 0 : l.class), c()(e, "is-amp-fit-text", b), e)),
                        placeholder: p || Object(r.__)("Write text…", "amp")
                    })))
                }
            }]), t
        }(n.Component)),
        B = function(e) {
            var t = e.attributes,
                a = t.content,
                r = t.ampFitText,
                o = t.tagName,
                i = Object(w.j)(t),
                c = Object(w.q)(t);
            if (!r) return Object(n.createElement)(_.RichText.Content, {
                tagName: o,
                style: c,
                className: i,
                value: a,
                format: "string"
            });
            var l = o;
            return c.display = "flex", Object(n.createElement)(l, {
                style: c,
                className: i
            }, Object(n.createElement)("amp-fit-text", {
                layout: "flex-item",
                className: "amp-text-content"
            }, Object(n.createElement)(n.RawHTML, null, a)))
        };
    a.d(t, "name", function() {
        return x
    }), a.d(t, "settings", function() {
        return z
    });
    var x = "amp/amp-story-text",
        z = {
            title: Object(r.__)("Text", "amp"),
            description: Object(r.__)("Add free-form text to your story", "amp"),
            icon: Object(n.createElement)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
            }, Object(n.createElement)("path", {
                d: "M11 5v7H9.5C7.6 12 6 10.4 6 8.5S7.6 5 9.5 5H11m8-2H9.5C6.5 3 4 5.5 4 8.5S6.5 14 9.5 14H11v7h2V5h2v16h2V5h2V3z"
            })),
            category: "common",
            keywords: [Object(r.__)("title", "amp"), Object(r.__)("heading", "amp"), Object(r.__)("paragraph", "amp")],
            supports: {
                anchor: !0,
                reusable: !0,
                className: !1
            },
            attributes: {
                placeholder: {
                    type: "string"
                },
                content: {
                    type: "string",
                    source: "html",
                    selector: ".amp-text-content",
                    default: ""
                },
                type: {
                    type: "string",
                    default: "auto"
                },
                tagName: {
                    type: "string",
                    default: "p"
                },
                align: {
                    type: "string"
                }
            },
            edit: C,
            save: B,
            transforms: {
                from: [{
                    type: "raw",
                    priority: 20,
                    selector: "p,h1,h2",
                    transform: function(e) {
                        var t = e.outerHTML,
                            a = Object(o.getBlockAttributes)(x, t);
                        return a.content || (a.content = e.textContent, a.tagName = e.nodeName, a.ampFitText = !1), Object(o.createBlock)(x, a)
                    }
                }]
            }
        }
}]);