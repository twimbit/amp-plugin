! function(e) {
    var t = {};

    function a(r) {
        if (t[r]) return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, r) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
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
        var r = Object.create(null);
        if (a.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var n in e) a.d(r, n, function(t) {
                return e[t]
            }.bind(null, n));
        return r
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 32)
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
}, function(e, t) {
    ! function() {
        e.exports = this.wp.blockEditor
    }()
}, function(e, t, a) {
    e.exports = a(23)()
}, function(e, t, a) {
    "use strict";
    var r = a(0),
        n = (a(5), a(2)),
        i = a(1),
        o = function(e) {
            var t = e.name,
                a = e.url;
            return Object(r.createElement)(n.Placeholder, {
                label: t
            }, Object(r.createElement)("p", {
                className: "components-placeholder__error"
            }, a), Object(r.createElement)("p", {
                className: "components-placeholder__error"
            }, Object(i.__)("Previews for this are unavailable in the editor, sorry!", "amp")))
        },
        l = function(e) {
            var t = e.attributes,
                a = e.setAttributes,
                o = e.ampLayoutOptions,
                l = t.ampLayout,
                c = t.height,
                u = t.width,
                s = !c && ("fixed" === l || "fixed-height" === l),
                d = !u && "fixed" === l;
            return Object(r.createElement)(r.Fragment, null, Object(r.createElement)(n.SelectControl, {
                label: Object(i.__)("Layout", "amp"),
                value: l,
                options: o,
                onChange: function(e) {
                    return a({
                        ampLayout: e
                    })
                }
            }), d && Object(r.createElement)(n.Notice, {
                status: "error",
                isDismissible: !1
            }, Object(i.sprintf)(
                /* translators: %s is the layout name */
                Object(i.__)("Width is required for %s layout", "amp"), l)), Object(r.createElement)(n.TextControl, {
                type: "number",
                label: Object(i.__)("Width (px)", "amp"),
                value: void 0 !== u ? u : "",
                onChange: function(e) {
                    return a({
                        width: e
                    })
                }
            }), s && Object(r.createElement)(n.Notice, {
                status: "error",
                isDismissible: !1
            }, Object(i.sprintf)(
                /* translators: %s is the layout name */
                Object(i.__)("Height is required for %s layout", "amp"), l)), Object(r.createElement)(n.TextControl, {
                type: "number",
                label: Object(i.__)("Height (px)", "amp"),
                value: c,
                onChange: function(e) {
                    return a({
                        height: e
                    })
                }
            }))
        };
    a.d(t, "b", function() {
        return o
    }), a.d(t, "a", function() {
        return l
    })
}, function(e, t) {
    function a() {
        return e.exports = a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
            }
            return e
        }, a.apply(this, arguments)
    }
    e.exports = a
}, function(e, t, a) {
    var r = a(25);
    e.exports = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(a);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
            }))), n.forEach(function(t) {
                r(e, t, a[t])
            })
        }
        return e
    }
}, function(e, t) {
    ! function() {
        e.exports = this.moment
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.lodash
    }()
}, function(e, t, a) {
    "use strict";
    var r = a(8),
        n = a.n(r),
        i = a(0),
        o = (a(5), a(1)),
        l = a(2),
        c = a(4),
        u = a(3),
        s = ["core/paragraph", "core/heading", "core/code", "core/quote", "core/subhead"],
        d = ["core/image", "core/video"];
    a.d(t, "a", function() {
        return b
    }), a.d(t, "d", function() {
        return p
    }), a.d(t, "b", function() {
        return y
    }), a.d(t, "c", function() {
        return O
    }), a.d(t, "e", function() {
        return F
    });
    var m = [{
            value: "nodisplay",
            label: Object(o.__)("No Display", "amp"),
            notAvailable: ["core-embed/vimeo", "core-embed/dailymotion", "core-embed/hulu", "core-embed/reddit", "core-embed/soundcloud"]
        }, {
            value: "fixed",
            label: Object(o.__)("Fixed", "amp"),
            notAvailable: ["core-embed/soundcloud"]
        }, {
            value: "responsive",
            label: Object(o.__)("Responsive", "amp"),
            notAvailable: ["core-embed/soundcloud"]
        }, {
            value: "fixed-height",
            label: Object(o.__)("Fixed height", "amp"),
            notAvailable: []
        }, {
            value: "fill",
            label: Object(o.__)("Fill", "amp"),
            notAvailable: ["core-embed/soundcloud"]
        }, {
            value: "flex-item",
            label: Object(o.__)("Flex Item", "amp"),
            notAvailable: ["core-embed/soundcloud"]
        }, {
            value: "intrinsic",
            label: Object(o.__)("Intrinsic", "amp"),
            notAvailable: ["core/video", "core-embed/youtube", "core-embed/facebook", "core-embed/instagram", "core-embed/vimeo", "core-embed/dailymotion", "core-embed/hulu", "core-embed/reddit", "core-embed/soundcloud"]
        }],
        b = function(e, t) {
            return "core/shortcode" !== t && "core/gallery" !== t || (e.attributes || (e.attributes = {}), e.attributes.ampCarousel = {
                type: "boolean"
            }, e.attributes.ampLightbox = {
                type: "boolean"
            }), "core/image" === t && (e.attributes || (e.attributes = {}), e.attributes.ampLightbox = {
                type: "boolean"
            }), s.includes(t) && (e.attributes || (e.attributes = {}), e.attributes.ampFitText = {
                default: !1
            }, e.attributes.minFont = {
                default: 6,
                source: "attribute",
                selector: "amp-fit-text",
                attribute: "min-font-size"
            }, e.attributes.maxFont = {
                default: 72,
                source: "attribute",
                selector: "amp-fit-text",
                attribute: "max-font-size"
            }, e.attributes.height = {
                default: "core/image" === t ? 200 : 10 * Math.ceil(7.2),
                source: "attribute",
                selector: "amp-fit-text",
                attribute: "height"
            }), (0 === t.indexOf("core-embed") || d.includes(t)) && (e.attributes || (e.attributes = {}), e.attributes.ampLayout = {
                type: "string"
            }, e.attributes.ampNoLoading = {
                type: "boolean"
            }), e
        },
        p = function(e, t, a) {
            var r = a.text || "",
                n = "",
                o = {
                    layout: "fixed-height"
                };
            if ("core/shortcode" === t.name && A(a)) {
                if (a.ampLightbox || T(a.text || "") && (r = I(a.text)), a.ampCarousel) {
                    if (k(r) && (r = S(r)), !a.ampLightbox) return a.text !== r ? Object(i.createElement)(i.RawHTML, null, r) : e
                } else r = k(a.text || "") ? a.text : a.text.replace("[gallery", "[gallery amp-carousel=false");
                if (a.ampLightbox && !T(r) && (r = r.replace("[gallery", "[gallery amp-lightbox=true")), a.text !== r) return Object(i.createElement)(i.RawHTML, null, r)
            } else if ("core/paragraph" !== t.name || a.ampFitText) {
                if (s.includes(t.name) && a.ampFitText) {
                    if (a.minFont && (o["min-font-size"] = a.minFont), a.maxFont && (o["max-font-size"] = a.maxFont), a.height && (o.height = a.height), "core/paragraph" === t.name) {
                        var l = "<amp-fit-text";
                        for (var c in o) {
                            l += " " + c + '="' + o[c] + '"'
                        }
                        return l += ">" + f(a.content) + "</amp-fit-text>", Object(i.cloneElement)(e, {
                            key: "new",
                            value: l
                        })
                    }
                    return o.children = e, Object(i.createElement)("amp-fit-text", o)
                }
            } else if ((n = f(a.content)) !== a.content) return Object(i.cloneElement)(e, {
                key: "new",
                value: n
            });
            return e
        },
        f = function(e) {
            var t = /<amp-fit-text\b[^>]*>(.*?)<\/amp-fit-text>/.exec(e),
                a = e;
            return t && t[1] && (a = t[1]), a
        },
        h = function(e) {
            for (var t = [{
                value: "",
                label: Object(o.__)("Default", "amp")
            }], a = 0, r = m; a < r.length; a++) {
                var n = r[a];
                !n.notAvailable.includes(e) && t.push({
                    value: n.value,
                    label: n.label
                })
            }
            return t
        },
        y = function(e, t, a) {
            var r = {};
            return "core/shortcode" === t.name ? e : "amp/" === t.name.substr(0, 4) ? e : (a.ampLayout && (r["data-amp-layout"] = a.ampLayout), a.ampNoLoading && (r["data-amp-noloading"] = a.ampNoLoading), a.ampLightbox && (r["data-amp-lightbox"] = a.ampLightbox), a.ampCarousel && (r["data-amp-carousel"] = a.ampCarousel), n()({}, r, e))
        },
        O = function(e) {
            return function(t) {
                var a, r = t.attributes,
                    n = r.text,
                    o = r.ampLayout,
                    l = t.setAttributes,
                    c = t.name;
                if ("core/shortcode" === c) {
                    if (k(n || "") && l({
                        text: S(n)
                    }), T(n || "") && l({
                        text: I(n)
                    }), "" === (a = x(t))) return Object(i.createElement)(e, t)
                } else "core/gallery" === c ? a = C(t) : "core/image" === c ? a = w(t) : d.includes(c) || 0 === c.indexOf("core-embed/") ? a = g(t) : s.includes(c) && (a = v(t));
                return o && "nodisplay" === o ? [a] : Object(i.createElement)(i.Fragment, null, Object(i.createElement)(e, t), a)
            }
        },
        g = function(e) {
            return e.isSelected ? Object(i.createElement)(c.InspectorControls, null, Object(i.createElement)(l.PanelBody, {
                title: Object(o.__)("AMP Settings", "amp")
            }, Object(i.createElement)(j, e), Object(i.createElement)(_, e))) : null
        },
        j = function(e) {
            var t = e.name,
                a = e.attributes.ampLayout,
                r = e.setAttributes,
                n = Object(o.__)("AMP Layout", "amp");
            return "core/image" === t && (n = Object(o.__)("AMP Layout (modifies width/height)", "amp")), Object(i.createElement)(l.SelectControl, {
                label: n,
                value: a,
                options: h(t),
                onChange: function(t) {
                    r({
                        ampLayout: t
                    }), "core/image" === e.name && function(e, t) {
                        var a = e.attributes,
                            r = e.setAttributes;
                        switch (t) {
                            case "fixed-height":
                                a.height || r({
                                    height: 400
                                }), a.ampLightbox && r({
                                    ampLightbox: !1
                                });
                                break;
                            case "fixed":
                                a.height || r({
                                    height: 400
                                }), a.width || r({
                                    width: 608
                                })
                        }
                    }(e, t)
                }
            })
        },
        _ = function(e) {
            var t = e.attributes.ampNoLoading,
                a = e.setAttributes,
                r = Object(o.__)("AMP Noloading", "amp");
            return Object(i.createElement)(l.ToggleControl, {
                label: r,
                checked: t,
                onChange: function() {
                    return a({
                        ampNoLoading: !t
                    })
                }
            })
        },
        v = function(e) {
            var t = e.isSelected,
                a = e.attributes,
                r = e.setAttributes,
                n = a.ampFitText,
                u = a.minFont,
                s = a.maxFont,
                d = a.height,
                m = [{
                    name: "small",
                    shortName: Object(o._x)("S", "font size", "amp"),
                    size: 14
                }, {
                    name: "regular",
                    shortName: Object(o._x)("M", "font size", "amp"),
                    size: 16
                }, {
                    name: "large",
                    shortName: Object(o._x)("L", "font size", "amp"),
                    size: 36
                }, {
                    name: "larger",
                    shortName: Object(o._x)("XL", "font size", "amp"),
                    size: 48
                }];
            if (!t) return null;
            var b = Object(o.__)("Automatically fit text to container", "amp");
            return n && (s = parseInt(s, 10), d = parseInt(d, 10), u = parseInt(u, 10)), Object(i.createElement)(c.InspectorControls, null, Object(i.createElement)(l.PanelBody, {
                title: Object(o.__)("AMP Settings", "amp"),
                className: n ? "is-amp-fit-text" : ""
            }, Object(i.createElement)(l.ToggleControl, {
                label: b,
                checked: n,
                onChange: function() {
                    return r({
                        ampFitText: !n
                    })
                }
            })), n && Object(i.createElement)(i.Fragment, null, Object(i.createElement)(l.TextControl, {
                label: Object(o.__)("Height", "amp"),
                value: d,
                min: 1,
                onChange: function(e) {
                    r({
                        height: e
                    })
                }
            }), s > d && Object(i.createElement)(l.Notice, {
                status: "error",
                isDismissible: !1
            }, Object(o.__)("The height must be greater than the max font size.", "amp")), Object(i.createElement)(l.PanelBody, {
                title: Object(o.__)("Minimum font size", "amp")
            }, Object(i.createElement)(l.FontSizePicker, {
                fallbackFontSize: 14,
                value: u,
                fontSizes: m,
                onChange: function(e) {
                    e || (e = 6), parseInt(e, 10) <= s && r({
                        minFont: e
                    })
                }
            })), u > s && Object(i.createElement)(l.Notice, {
                status: "error",
                isDismissible: !1
            }, Object(o.__)("The min font size must less than the max font size.", "amp")), Object(i.createElement)(l.PanelBody, {
                title: Object(o.__)("Maximum font size", "amp")
            }, Object(i.createElement)(l.FontSizePicker, {
                fallbackFontSize: 48,
                value: s,
                fontSizes: m,
                onChange: function(e) {
                    e || (e = 72), r({
                        maxFont: e,
                        height: Math.max(e, d)
                    })
                }
            }))))
        },
        x = function(e) {
            var t = e.isSelected;
            if (!A(e.attributes) || !t) return null;
            var a = Object(u.select)("amp/block-editor").hasThemeSupport();
            return Object(i.createElement)(c.InspectorControls, null, Object(i.createElement)(l.PanelBody, {
                title: Object(o.__)("AMP Settings", "amp")
            }, a && Object(i.createElement)(P, e), Object(i.createElement)(E, e)))
        },
        E = function(e) {
            var t = e.attributes,
                a = t.ampLightbox,
                r = t.linkTo,
                n = t.ampLayout,
                c = e.setAttributes;
            return Object(i.createElement)(l.ToggleControl, {
                label: Object(o.__)("Add lightbox effect", "amp"),
                checked: a,
                onChange: function(e) {
                    c({
                        ampLightbox: !a
                    }), e && ("fixed-height" === n && c({
                        ampLayout: "fixed"
                    }), r && "none" !== r && c({
                        linkTo: "none"
                    }))
                }
            })
        },
        P = function(e) {
            var t = e.attributes.ampCarousel,
                a = e.setAttributes;
            return Object(i.createElement)(l.ToggleControl, {
                label: Object(o.__)("Display as carousel", "amp"),
                checked: t,
                onChange: function() {
                    return a({
                        ampCarousel: !t
                    })
                }
            })
        },
        w = function(e) {
            return e.isSelected ? Object(i.createElement)(c.InspectorControls, null, Object(i.createElement)(l.PanelBody, {
                title: Object(o.__)("AMP Settings", "amp")
            }, Object(i.createElement)(j, e), Object(i.createElement)(_, e), Object(i.createElement)(E, e))) : null
        },
        C = function(e) {
            if (!e.isSelected) return null;
            var t = Object(u.select)("amp/block-editor").hasThemeSupport();
            return Object(i.createElement)(c.InspectorControls, null, Object(i.createElement)(l.PanelBody, {
                title: Object(o.__)("AMP Settings", "amp")
            }, t && Object(i.createElement)(P, e), Object(i.createElement)(E, e)))
        },
        S = function(e) {
            return e.replace(" amp-carousel=false", "")
        },
        I = function(e) {
            return e.replace(" amp-lightbox=true", "")
        },
        k = function(e) {
            return -1 !== e.indexOf("amp-carousel=false")
        },
        T = function(e) {
            return -1 !== e.indexOf("amp-lightbox=true")
        },
        A = function(e) {
            return e.text && -1 !== e.text.indexOf("gallery")
        },
        F = function() {
            var e = Object(u.select)("amp/block-editor"),
                t = e.getDefaultStatus,
                a = e.getPossibleStatuses,
                r = Object(u.select)("core/editor").getEditedPostAttribute;
            if ("amp_story" === r("type")) return !0;
            var n = r("meta");
            return n && n.amp_status && a().includes(n.amp_status) ? "enabled" === n.amp_status : "enabled" === t()
        }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.hooks
    }()
}, function(e, t, a) {
    "use strict";
    a.d(t, "a", function() {
        return n
    }), a.d(t, "b", function() {
        return i
    });
    a(30);
    var r = a(1),
        n = (a(4), function() {
            return {
                width: 200,
                /* changed width and height*/ height: 337
            }
        }),
        i = function(e, t, a) {
            if (!e) return a ? [Object(r.__)("Selecting a featured image is required.", "amp")] : [Object(r.__)("Selecting a featured image is recommended for an optimal user experience.", "amp")];
            var n = [];
            if (["image/png", "image/gif", "image/jpeg"].includes(e.mime_type) || n.push(
                /* translators: 1: .jpg, 2: .png. 3: .gif */
                Object(r.sprintf)(Object(r.__)("The featured image must be in %1$s, %2$s, or %3$s format.", "amp"), ".jpg", ".png", ".gif")), ! function(e, t) {
                if (!e || !e.width || !e.height) return !1;
                var a = t.width,
                    r = t.height;
                return e.width >= a && e.height >= r
            }(e.media_details, t)) {
                var i = t.width,
                    o = t.height;
                n.push(
                    /* translators: 1: minimum width, 2: minimum height. */
                    Object(r.sprintf)(Object(r.__)("The featured image should have a size of at least %1$s by %2$s pixels.", "amp"), Math.ceil(i), Math.ceil(o)))
            }
            return 0 === n.length ? null : n
        }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.compose
    }()
}, function(e, t, a) {
    "use strict";
    var r, n, i = a(0),
        o = (a(5), a(2)),
        l = a(17),
        c = a(3),
        u = a(1),
        s = a(13),
        d = Object(c.withSelect)(function(e) {
            var t = e("core/editor").getCurrentPost(),
                a = e("core/editor").getEditedPostAttribute("featured_media"),
                r = t.featured_media || a;
            return {
                featuredMedia: r ? e("core").getMedia(r) : null
            }
        })(function(e) {
            var t = e.featuredMedia,
                a = e.dimensions,
                r = e.required,
                n = Object(s.b)(t, a, r);
            return n ? Object(i.createElement)(i.Fragment, null, Object(i.createElement)(l.PluginPrePublishPanel, {
                title: Object(u.__)("Featured Image", "amp"),
                initialOpen: "true"
            }, Object(i.createElement)(o.Notice, {
                status: r ? "warning" : "notice",
                isDismissible: !1
            }, n.map(function(e, t) {
                return Object(i.createElement)("p", {
                    key: "error-".concat(t)
                }, e)
            })))) : null
        }),
        m = a(14),
        b = Object(m.createHigherOrderComponent)(function(e) {
            return function(t) {
                var a = t.media,
                    r = Object(s.b)(a, Object(s.a)(), !1);
                return r ? Object(i.createElement)(i.Fragment, null, Object(i.createElement)(o.Notice, {
                    status: "notice",
                    isDismissible: !1
                }, r.map(function(e, t) {
                    return Object(i.createElement)("p", {
                        key: "error-".concat(t)
                    }, e)
                })), Object(i.createElement)(e, t)) : Object(i.createElement)(e, t)
            }
        }, "withFeaturedImageNotice"),
        p = a(18),
        f = a.n(p),
        h = a(19),
        y = a.n(h),
        O = a(20),
        g = a.n(O),
        j = a(21),
        _ = a.n(j),
        v = a(27),
        x = a.n(v),
        E = a(22),
        P = a.n(E),
        w = a(10),
        C = window.wp,
        S = C.media.View.extend({
            className: "notice notice-warning notice-alt inline",
            template: (r = Object(u.sprintf)(
                /* translators: 1: image width in pixels. 2: image height in pixels. 3: required minimum width in pixels. 4: required minimum height in pixels. */
                Object(u.__)("The selected image is too small (%1$s by %2$s pixels). It should have a size of at least %3$s by %4$s pixels.", "amp"), "{{width}}", "{{height}}", "{{minWidth}}", "{{minHeight}}"), n = Object(w.template)("<p>".concat(r, "</p>"), {
                evaluate: /<#([\s\S]+?)#>/g,
                interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
                escape: /\{\{([^\}]+?)\}\}(?!\})/g
            }), function(e) {
                return n(e)
            })
        }),
        I = C.media.view.Toolbar.Select.extend({
            refresh: function() {
                C.media.view.Toolbar.Select.prototype.refresh.call(this);
                var e = this.controller.state(),
                    t = e.get("selection").models[0],
                    a = e.collection.get("library").get("suggestedWidth"),
                    r = e.collection.get("library").get("suggestedHeight");
                !t || t.get("width") >= a && t.get("height") >= r ? this.secondary.unset("select-error") : this.secondary.set("select-error", new S({
                    minWidth: a,
                    minHeight: r,
                    width: t.get("width"),
                    height: t.get("height")
                }))
            }
        }),
        k = C.media.view.MediaFrame.Select.extend({
            createSelectToolbar: function(e, t) {
                (t = t || this.options.button || {}).controller = this, e.view = new I(t)
            }
        }),
        T = window.wp,
        A = T.media.controller.Cropper.extend({
            doCrop: function(e) {
                var t = e.get("cropDetails"),
                    a = this.imgSelect.getOptions();
                return Math.abs(t.width - a.minWidth) < 10 && (t.width = a.minWidth), Math.abs(t.height - a.minHeight) < 10 && (t.height = a.minHeight), t.dst_width = t.width, t.dst_height = t.height, T.ajax.post("crop-image", {
                    nonce: e.get("nonces").edit,
                    id: e.get("id"),
                    context: "featured-image",
                    cropDetails: t
                })
            }
        }),
        F = window.wp,
        L = function(e, t) {
            var a = t.width,
                r = t.height;
            return function(e) {
                function t() {
                    var e;
                    return f()(this, t), (e = g()(this, _()(t).apply(this, arguments))).props.modalClass && "editor-post-featured-image__media-modal" === e.props.modalClass && (e.init = e.init.bind(x()(e)), e.init()), e
                }
                return P()(t, e), y()(t, [{
                    key: "init",
                    value: function() {
                        var e = this;
                        this.frame = new k({
                            button: {
                                text: Object(u.__)("Select", "amp"),
                                close: !1
                            },
                            states: [new F.media.controller.Library({
                                title: Object(u.__)("Choose image", "amp"),
                                library: F.media.query({
                                    type: "image"
                                }),
                                multiple: !1,
                                date: !1,
                                priority: 20,
                                suggestedWidth: a,
                                suggestedHeight: r
                            }), new A({
                                imgSelectOptions: this.calculateImageSelectOptions,
                                control: this
                            })]
                        }), F.media.frame = this.frame, this.frame.on("select", this.onSelectImage, this), this.frame.on("cropped", this.onCropped, this), this.frame.on("skippedcrop", this.onSkippedCrop, this), this.frame.on("close", function() {
                            e.init()
                        }, this)
                    }
                }, {
                    key: "calculateImageSelectOptions",
                    value: function(e, t) {
                        var n = e.get("width"),
                            i = e.get("height"),
                            o = parseInt(a, 10),
                            l = parseInt(r, 10),
                            c = o / l,
                            u = o,
                            s = l;
                        t.set("canSkipCrop", !0), n / i > c ? o = (l = i) * c : l = (o = n) / c;
                        var d = (n - o) / 2,
                            m = (i - l) / 2;
                        return {
                            aspectRatio: o + ":" + l,
                            handles: !0,
                            keys: !0,
                            instance: !0,
                            persistent: !0,
                            imageWidth: n,
                            imageHeight: i,
                            minWidth: u > o ? o : u,
                            minHeight: s > l ? l : s,
                            x1: d,
                            y1: m,
                            x2: o + d,
                            y2: l + m
                        }
                    }
                }, {
                    key: "onSelectImage",
                    value: function() {
                        var e = this.frame.state().get("selection").first().toJSON();
                        a === e.width && r === e.height ? (this.setImageFromURL(e.url, e.id, e.width, e.height), this.frame.close()) : this.frame.setState("cropper")
                    }
                }, {
                    key: "doAllowCrop",
                    value: function(e) {
                        return e.width && e.height && e.width >= a && e.height >= r
                    }
                }, {
                    key: "mustBeCropped",
                    value: function(e, t, a, r) {
                        return !(e === a && t === r || a <= e)
                    }
                }, {
                    key: "onCropped",
                    value: function(e) {
                        var t = e.url,
                            a = e.id,
                            r = e.width,
                            n = e.height;
                        this.setImageFromURL(t, a, r, n)
                    }
                }, {
                    key: "onSkippedCrop",
                    value: function(e) {
                        var t = e.get("url"),
                            a = e.get("width"),
                            r = e.get("height");
                        this.setImageFromURL(t, e.id, a, r)
                    }
                }, {
                    key: "setImageFromURL",
                    value: function(e, t, a, r) {
                        var n = {},
                            i = this.props.onSelect;
                        n.url = e, n.thumbnail_url = e, n.timestamp = Object(w.now)(), t && (n.attachment_id = t), a && (n.width = a), r && (n.height = r), i(n), Object(c.dispatch)("core/editor").editPost({
                            featured_media: t
                        })
                    }
                }]), t
            }(e)
        };
    a.d(t, "a", function() {
        return d
    }), a.d(t, "c", function() {
        return b
    }), a.d(t, "b", function() {
        return L
    })
}, function(e, t) {
    e.exports = ampBlockEditor
}, function(e, t) {
    ! function() {
        e.exports = this.wp.editPost
    }()
}, function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t) {
    function a(e, t) {
        for (var a = 0; a < t.length; a++) {
            var r = t[a];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    e.exports = function(e, t, r) {
        return t && a(e.prototype, t), r && a(e, r), e
    }
}, function(e, t, a) {
    var r = a(36),
        n = a(27);
    e.exports = function(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? n(e) : t
    }
}, function(e, t) {
    function a(t) {
        return e.exports = a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, a(t)
    }
    e.exports = a
}, function(e, t, a) {
    var r = a(37);
    e.exports = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && r(e, t)
    }
}, function(e, t, a) {
    "use strict";
    var r = a(24);

    function n() {}

    function i() {}
    i.resetWarningCache = n, e.exports = function() {
        function e(e, t, a, n, i, o) {
            if (o !== r) {
                var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw l.name = "Invariant Violation", l
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
            checkPropTypes: i,
            resetWarningCache: n
        };
        return a.PropTypes = a, a
    }
}, function(e, t, a) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
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
    "use strict";
    var r = {};
    a.r(r), a.d(r, "getBlockValidationErrors", function() {
        return l
    }), a.d(r, "hasThemeSupport", function() {
        return c
    }), a.d(r, "isNativeAMP", function() {
        return u
    }), a.d(r, "getDefaultStatus", function() {
        return s
    }), a.d(r, "getPossibleStatuses", function() {
        return d
    });
    var n = a(8),
        i = a.n(n),
        o = a(3);

    function l(e, t) {
        return e.errorsByClientId[t] || []
    }

    function c(e) {
        return Boolean(e.hasThemeSupport)
    }

    function u(e) {
        return Boolean(e.isNativeAMP)
    }

    function s(e) {
        return e.defaultStatus
    }

    function d(e) {
        return e.possibleStatuses
    }
    Object(o.registerStore)("amp/block-editor", {
        reducer: function(e) {
            return e
        },
        selectors: r,
        initialState: i()({}, window.ampBlockEditor)
    })
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.plugins
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.blocks
    }()
}, function(e, t, a) {
    var r = a(33),
        n = a(34),
        i = a(35);
    e.exports = function(e, t) {
        return r(e) || n(e, t) || i()
    }
}, , function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(12),
        n = a(28),
        i = a(29),
        o = a(3),
        l = a(15),
        c = a(11),
        u = a(13),
        s = (a(26), window.ampLatestStoriesBlockData);
    Object(r.addFilter)("blocks.registerBlockType", "ampEditorBlocks/addAttributes", c.a), Object(r.addFilter)("blocks.getSaveElement", "ampEditorBlocks/filterSave", c.d), Object(r.addFilter)("editor.BlockEdit", "ampEditorBlocks/filterEdit", c.c, 20), Object(r.addFilter)("blocks.getSaveContent.extraProps", "ampEditorBlocks/addExtraAttributes", c.b), Object(r.addFilter)("editor.PostFeaturedImage", "ampEditorBlocks/withFeaturedImageNotice", l.c), Object(r.addFilter)("editor.MediaUpload", "ampEditorBlocks/addCroppedFeaturedImage", function(e) {
        return Object(l.b)(e, Object(u.a)())
    });
    var d = a(38);
    d.keys().forEach(function(e) {
        var t = d(e),
            a = t.name,
            r = t.render,
            i = t.icon;
        Object(n.registerPlugin)(a, {
            icon: i,
            render: r
        })
    });
    var m = ["amp/amp-brid-player", "amp/amp-ima-video", "amp/amp-jwplayer", "amp/amp-mathml", "amp/amp-o2-player", "amp/amp-ooyala-player", "amp/amp-reach-player", "amp/amp-springboard-player", "amp/amp-timeago"],
        b = a(41);
    b.keys().forEach(function(e) {
        var t = b(e),
            a = t.name,
            r = t.settings;
        "amp/amp-latest-stories" === a && void 0 === s || (m.includes(a) && !Object(o.select)("amp/block-editor").isNativeAMP() || Object(i.registerBlockType)(a, r))
    })
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var a = [],
            r = !0,
            n = !1,
            i = void 0;
        try {
            for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (a.push(o.value), !t || a.length !== t); r = !0);
        } catch (e) {
            n = !0, i = e
        } finally {
            try {
                r || null == l.return || l.return()
            } finally {
                if (n) throw i
            }
        }
        return a
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(e, t) {
    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(t) {
        return "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? e.exports = r = function(e) {
            return a(e)
        } : e.exports = r = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
        }, r(t)
    }
    e.exports = r
}, function(e, t) {
    function a(t, r) {
        return e.exports = a = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, a(t, r)
    }
    e.exports = a
}, function(e, t, a) {
    var r = {
        "./amp-toggle.js": 39,
        "./pre-publish-panel.js": 40
    };

    function n(e) {
        var t = i(e);
        return a(t)
    }

    function i(e) {
        if (!a.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
    }
    n.keys = function() {
        return Object.keys(r)
    }, n.resolve = i, e.exports = n, n.id = 38
}, function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, "name", function() {
        return d
    }), a.d(t, "icon", function() {
        return m
    }), a.d(t, "render", function() {
        return b
    });
    var r = a(0),
        n = a(16),
        i = (a(5), a(1)),
        o = a(2),
        l = a(3),
        c = a(17),
        u = a(14),
        s = a(11);
    var d = "amp",
        m = "hidden",
        b = Object(u.compose)(Object(l.withSelect)(function() {
            return {
                isEnabled: Object(s.e)()
            }
        }), Object(l.withDispatch)(function(e) {
            return {
                onChange: function(t) {
                    var a = t ? "enabled" : "disabled";
                    e("core/editor").editPost({
                        meta: {
                            amp_status: a
                        }
                    })
                }
            }
        }), u.withInstanceId)(function(e) {
            var t = e.isEnabled,
                a = e.onChange;
            return Object(r.createElement)(r.Fragment, null, Object(r.createElement)(c.PluginPostStatusInfo, null, !n.errorMessages.length && Object(r.createElement)("label", {
                htmlFor: "amp-enabled"
            }, Object(i.__)("Enable AMP", "amp")), !n.errorMessages.length && Object(r.createElement)(o.FormToggle, {
                checked: t,
                onChange: function() {
                    return a(!t)
                },
                id: "amp-enabled"
            }), !!n.errorMessages.length && Object(r.createElement)(o.Notice, {
                status: "warning",
                isDismissible: !1
            }, n.errorMessages.map(function(e, t) {
                return Object(r.createElement)(r.RawHTML, {
                    key: t
                }, e)
            }))))
        })
}, function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, "name", function() {
        return o
    }), a.d(t, "render", function() {
        return l
    });
    var r = a(0),
        n = a(15),
        i = a(13),
        o = "amp-post-featured-image-pre-publish-panel",
        l = function() {
            return Object(r.createElement)(n.a, {
                dimensions: Object(i.a)(),
                required: !1
            })
        }
}, function(e, t, a) {
    var r = {
        "./amp-brid-player/index.js": 46,
        "./amp-ima-video/index.js": 47,
        "./amp-jwplayer/index.js": 48,
        "./amp-latest-stories/index.js": 55,
        "./amp-mathml/index.js": 49,
        "./amp-o2-player/index.js": 50,
        "./amp-ooyala-player/index.js": 51,
        "./amp-reach-player/index.js": 52,
        "./amp-springboard-player/index.js": 53,
        "./amp-timeago/index.js": 54
    };

    function n(e) {
        var t = i(e);
        return a(t)
    }

    function i(e) {
        if (!a.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
    }
    n.keys = function() {
        return Object.keys(r)
    }, n.resolve = i, e.exports = n, n.id = 41
}, , , , , function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(1),
        n = a(7),
        i = a.n(n),
        o = a(0),
        l = (a(5), a(4)),
        c = a(2),
        u = a(6),
        s = function(e) {
            var t = e.attributes,
                a = e.setAttributes,
                n = t.autoPlay,
                s = t.dataPartner,
                d = t.dataPlayer,
                m = t.dataVideo,
                b = t.dataPlaylist,
                p = t.dataOutstream,
                f = [{
                    value: "responsive",
                    label: Object(r.__)("Responsive", "amp")
                }, {
                    value: "fixed-height",
                    label: Object(r.__)("Fixed height", "amp")
                }, {
                    value: "fixed",
                    label: Object(r.__)("Fixed", "amp")
                }, {
                    value: "fill",
                    label: Object(r.__)("Fill", "amp")
                }, {
                    value: "flex-item",
                    label: Object(r.__)("Flex-item", "amp")
                }, {
                    value: "nodisplay",
                    label: Object(r.__)("No Display", "amp")
                }],
                h = !1;
            return s && d && (m || b || p) && (h = "http://cdn.brid.tv/live/partners/".concat(s)), Object(o.createElement)(o.Fragment, null, Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
                title: Object(r.__)("Brid Player Settings", "amp")
            }, Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Brid.tv partner ID (required)", "amp"),
                value: s,
                onChange: function(e) {
                    return a({
                        dataPartner: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Brid.tv player ID (required)", "amp"),
                value: d,
                onChange: function(e) {
                    return a({
                        dataPlayer: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Video ID (one of video / playlist / outstream ID is required)", "amp"),
                value: m,
                onChange: function(e) {
                    return a({
                        dataVideo: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Outstream unit ID (one of video / playlist / outstream ID is required)", "amp"),
                value: p,
                onChange: function(e) {
                    return a({
                        dataOutstream: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Playlist ID (one of video / playlist / outstream ID is required)", "amp"),
                value: b,
                onChange: function(e) {
                    return a({
                        dataPlaylist: e
                    })
                }
            }), Object(o.createElement)(c.ToggleControl, {
                label: Object(r.__)("Autoplay", "amp"),
                checked: n,
                onChange: function() {
                    return a({
                        autoPlay: !n
                    })
                }
            }), Object(o.createElement)(u.a, i()({}, e, {
                ampLayoutOptions: f
            })))), h && Object(o.createElement)(u.b, {
                name: Object(r.__)("Brid Player", "amp"),
                url: h
            }), !h && Object(o.createElement)(c.Placeholder, {
                label: Object(r.__)("Brid Player", "amp")
            }, Object(o.createElement)("p", null, Object(r.__)("Add required data to use the block.", "amp"))))
        },
        d = function(e) {
            var t = e.attributes,
                a = t.dataPlayer,
                r = t.dataOutstream,
                n = t.dataPartner,
                i = t.ampLayout,
                l = t.width,
                c = t.height,
                u = t.dataVideo,
                s = t.autoPlay,
                d = t.dataPlaylist,
                m = {
                    layout: i,
                    height: c,
                    "data-player": a,
                    "data-partner": n
                };
            return "fixed-height" !== i && l && (m.width = l), d && (m["data-playlist"] = d), u && (m["data-video"] = u), r && (m["data-outstream"] = r), s && (m.autoplay = s), Object(o.createElement)("amp-brid-player", m)
        };
    a.d(t, "name", function() {
        return m
    }), a.d(t, "settings", function() {
        return b
    });
    var m = "amp/amp-brid-player",
        b = {
            title: Object(r.__)("AMP Brid Player", "amp"),
            description: Object(r.__)("Displays the Brid Player used in Brid.tv Video Platform.", "amp"),
            category: "embed",
            icon: "embed-generic",
            keywords: [Object(r.__)("Embed", "amp")],
            attributes: {
                autoPlay: {
                    type: "boolean"
                },
                dataPartner: {
                    source: "attribute",
                    selector: "amp-brid-player",
                    attribute: "data-partner"
                },
                dataPlayer: {
                    source: "attribute",
                    selector: "amp-brid-player",
                    attribute: "data-player"
                },
                dataVideo: {
                    source: "attribute",
                    selector: "amp-brid-player",
                    attribute: "data-video"
                },
                dataPlaylist: {
                    source: "attribute",
                    selector: "amp-brid-player",
                    attribute: "data-playlist"
                },
                dataOutstream: {
                    source: "attribute",
                    selector: "amp-brid-player",
                    attribute: "data-outstream"
                },
                ampLayout: {
                    default: "responsive",
                    source: "attribute",
                    selector: "amp-brid-player",
                    attribute: "layout"
                },
                width: {
                    type: "number",
                    default: 600
                },
                height: {
                    default: 400,
                    source: "attribute",
                    selector: "amp-brid-player",
                    attribute: "height"
                }
            },
            edit: s,
            save: d
        }
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(1),
        n = a(7),
        i = a.n(n),
        o = a(0),
        l = (a(5), a(4)),
        c = a(2),
        u = a(6),
        s = function(e) {
            var t = e.attributes,
                a = e.setAttributes,
                n = t.dataDelayAdRequest,
                s = t.dataTag,
                d = t.dataSrc,
                m = t.dataPoster,
                b = [{
                    value: "responsive",
                    label: Object(r.__)("Responsive", "amp")
                }, {
                    value: "fixed",
                    label: Object(r.__)("Fixed", "amp")
                }],
                p = !1;
            return s && d && (p = !0), Object(o.createElement)(o.Fragment, null, Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
                title: Object(r.__)("IMA Video Settings", "amp")
            }, Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Https URL for your VAST ad document (required)", "amp"),
                value: s,
                onChange: function(e) {
                    return a({
                        dataTag: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Https URL of your video content (required)", "amp"),
                value: d,
                onChange: function(e) {
                    return a({
                        dataSrc: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Https URL to preview image", "amp"),
                value: m,
                onChange: function(e) {
                    return a({
                        dataPoster: e
                    })
                }
            }), Object(o.createElement)(c.ToggleControl, {
                label: Object(r.__)("Delay Ad Request", "amp"),
                checked: n,
                onChange: function() {
                    return a({
                        dataDelayAdRequest: !n
                    })
                }
            }), Object(o.createElement)(u.a, i()({}, e, {
                ampLayoutOptions: b
            })))), p && Object(o.createElement)(u.b, {
                name: Object(r.__)("IMA Video", "amp"),
                url: d
            }), !p && Object(o.createElement)(c.Placeholder, {
                label: Object(r.__)("IMA Video", "amp")
            }, Object(o.createElement)("p", null, Object(r.__)("Add required data to use the block.", "amp"))))
        },
        d = function(e) {
            var t = e.attributes,
                a = t.width,
                r = t.dataSrc,
                n = t.ampLayout,
                i = t.dataTag,
                l = t.dataDelayAdRequest,
                c = t.height,
                u = t.dataPoster,
                s = {
                    layout: n,
                    height: c,
                    width: a,
                    "data-tag": i,
                    "data-src": r
                };
            return u && (s["data-poster"] = u), l && (s["data-delay-ad-request"] = l), Object(o.createElement)("amp-ima-video", s)
        };
    a.d(t, "name", function() {
        return m
    }), a.d(t, "settings", function() {
        return b
    });
    var m = "amp/amp-ima-video",
        b = {
            title: Object(r.__)("AMP IMA Video", "amp"),
            description: Object(r.__)("Embeds a video player for instream video ads that are integrated with the IMA SDK", "amp"),
            category: "embed",
            icon: "embed-generic",
            keywords: [Object(r.__)("Embed", "amp")],
            attributes: {
                dataDelayAdRequest: {
                    default: !1,
                    source: "attribute",
                    selector: "amp-ima-video",
                    attribute: "data-delay-ad-request"
                },
                dataTag: {
                    source: "attribute",
                    selector: "amp-ima-video",
                    attribute: "data-tag"
                },
                dataSrc: {
                    source: "attribute",
                    selector: "amp-ima-video",
                    attribute: "data-src"
                },
                dataPoster: {
                    source: "attribute",
                    selector: "amp-ima-video",
                    attribute: "data-poster"
                },
                ampLayout: {
                    default: "responsive",
                    source: "attribute",
                    selector: "amp-ima-video",
                    attribute: "layout"
                },
                width: {
                    default: 600,
                    source: "attribute",
                    selector: "amp-ima-video",
                    attribute: "width"
                },
                height: {
                    default: 400,
                    source: "attribute",
                    selector: "amp-ima-video",
                    attribute: "height"
                }
            },
            edit: s,
            save: d
        }
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(1),
        n = a(7),
        i = a.n(n),
        o = a(0),
        l = (a(5), a(4)),
        c = a(2),
        u = a(6),
        s = function(e) {
            var t = e.attributes,
                a = e.setAttributes,
                n = t.dataPlayerId,
                s = t.dataMediaId,
                d = t.dataPlaylistId,
                m = [{
                    value: "responsive",
                    label: Object(r.__)("Responsive", "amp")
                }, {
                    value: "fixed-height",
                    label: Object(r.__)("Fixed height", "amp")
                }, {
                    value: "fixed",
                    label: Object(r.__)("Fixed", "amp")
                }, {
                    value: "fill",
                    label: Object(r.__)("Fill", "amp")
                }, {
                    value: "flex-item",
                    label: Object(r.__)("Flex-item", "amp")
                }, {
                    value: "nodisplay",
                    label: Object(r.__)("No Display", "amp")
                }],
                b = !1;
            return n && (s || d) && (b = d ? "https://content.jwplatform.com/players/".concat(d, "-").concat(n) : "https://content.jwplatform.com/players/".concat(s, "-").concat(n)), Object(o.createElement)(o.Fragment, null, Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
                title: Object(r.__)("JW Player Settings", "amp")
            }, Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Player ID (required)", "amp"),
                value: n,
                onChange: function(e) {
                    return a({
                        dataPlayerId: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Media ID (required if playlist ID not set)", "amp"),
                value: s,
                onChange: function(e) {
                    return a({
                        dataMediaId: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Playlist ID (required if media ID not set)", "amp"),
                value: d,
                onChange: function(e) {
                    return a({
                        dataPlaylistId: e
                    })
                }
            }), Object(o.createElement)(u.a, i()({}, e, {
                ampLayoutOptions: m
            })))), b && Object(o.createElement)(u.b, {
                name: Object(r.__)("JW Player", "amp"),
                url: b
            }), !b && Object(o.createElement)(c.Placeholder, {
                label: Object(r.__)("JW Player", "amp")
            }, Object(o.createElement)("p", null, Object(r.__)("Add required data to use the block.", "amp"))))
        },
        d = function(e) {
            var t = e.attributes,
                a = t.width,
                r = t.height,
                n = t.ampLayout,
                i = t.dataPlaylistId,
                l = t.dataPlayerId,
                c = t.dataMediaId,
                u = {
                    layout: n,
                    height: r,
                    "data-player-id": l
                };
            return "fixed-height" !== n && a && (u.width = a), i && (u["data-playlist-id"] = i), c && (u["data-media-id"] = c), Object(o.createElement)("amp-jwplayer", u)
        };
    a.d(t, "name", function() {
        return m
    }), a.d(t, "settings", function() {
        return b
    });
    var m = "amp/amp-jwplayer",
        b = {
            title: Object(r.__)("AMP JW Player", "amp"),
            description: Object(r.__)("Displays a cloud-hosted JW Player.", "amp"),
            category: "embed",
            icon: "embed-generic",
            keywords: [Object(r.__)("Embed", "amp")],
            attributes: {
                dataPlayerId: {
                    source: "attribute",
                    selector: "amp-jwplayer",
                    attribute: "data-player-id"
                },
                dataMediaId: {
                    source: "attribute",
                    selector: "amp-jwplayer",
                    attribute: "data-media-id"
                },
                dataPlaylistId: {
                    source: "attribute",
                    selector: "amp-jwplayer",
                    attribute: "data-playlist-id"
                },
                ampLayout: {
                    default: "responsive",
                    source: "attribute",
                    selector: "amp-jwplayer",
                    attribute: "layout"
                },
                width: {
                    default: 600,
                    source: "attribute",
                    selector: "amp-jwplayer",
                    attribute: "width"
                },
                height: {
                    default: 400,
                    source: "attribute",
                    selector: "amp-jwplayer",
                    attribute: "height"
                }
            },
            edit: s,
            save: d
        }
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(1),
        n = a(0),
        i = (a(5), a(4)),
        o = function(e) {
            var t = e.attributes,
                a = e.setAttributes,
                o = t.dataFormula;
            return Object(n.createElement)(i.PlainText, {
                value: o,
                placeholder: Object(r.__)("Insert formula", "amp"),
                onChange: function(e) {
                    return a({
                        dataFormula: e
                    })
                }
            })
        },
        l = function(e) {
            var t = {
                "data-formula": e.attributes.dataFormula,
                layout: "container"
            };
            return Object(n.createElement)("amp-mathml", t)
        };
    a.d(t, "name", function() {
        return c
    }), a.d(t, "settings", function() {
        return u
    });
    var c = "amp/amp-mathml",
        u = {
            title: Object(r.__)("AMP MathML", "amp"),
            category: "common",
            icon: "welcome-learn-more",
            keywords: [Object(r.__)("Mathematical formula", "amp"), Object(r.__)("Scientific content ", "amp")],
            attributes: {
                dataFormula: {
                    source: "attribute",
                    selector: "amp-mathml",
                    attribute: "data-formula"
                }
            },
            edit: o,
            save: l
        }
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(1),
        n = a(7),
        i = a.n(n),
        o = a(0),
        l = (a(5), a(4)),
        c = a(2),
        u = a(6),
        s = function(e) {
            var t = e.attributes,
                a = e.setAttributes,
                n = t.autoPlay,
                s = t.dataPid,
                d = t.dataVid,
                m = t.dataBcid,
                b = t.dataBid,
                p = [{
                    value: "responsive",
                    label: Object(r.__)("Responsive", "amp")
                }, {
                    value: "fixed-height",
                    label: Object(r.__)("Fixed height", "amp")
                }, {
                    value: "fixed",
                    label: Object(r.__)("Fixed", "amp")
                }, {
                    value: "fill",
                    label: Object(r.__)("Fill", "amp")
                }, {
                    value: "flex-item",
                    label: Object(r.__)("Flex-item", "amp")
                }, {
                    value: "nodisplay",
                    label: Object(r.__)("No Display", "amp")
                }],
                f = !1;
            return s && (m || d) && (f = "https://delivery.vidible.tv/htmlembed/pid=".concat(s, "/")), Object(o.createElement)(o.Fragment, null, Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
                title: Object(r.__)("O2 Player Settings", "amp")
            }, Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Player ID (required)", "amp"),
                value: s,
                onChange: function(e) {
                    return a({
                        dataPid: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Buyer Company ID (either buyer or video ID is required)", "amp"),
                value: m,
                onChange: function(e) {
                    return a({
                        dataBcid: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Video ID (either buyer or video ID is required)", "amp"),
                value: d,
                onChange: function(e) {
                    return a({
                        dataVid: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Playlist ID", "amp"),
                value: b,
                onChange: function(e) {
                    return a({
                        dataBid: e
                    })
                }
            }), Object(o.createElement)(c.ToggleControl, {
                label: Object(r.__)("Autoplay", "amp"),
                checked: n,
                onChange: function() {
                    return a({
                        autoPlay: !n
                    })
                }
            }), Object(o.createElement)(u.a, i()({}, e, {
                ampLayoutOptions: p
            })))), f && Object(o.createElement)(u.b, {
                name: Object(r.__)("O2 Player", "amp"),
                url: f
            }), !f && Object(o.createElement)(c.Placeholder, {
                label: Object(r.__)("O2 Player", "amp")
            }, Object(o.createElement)("p", null, Object(r.__)("Add required data to use the block.", "amp"))))
        },
        d = function(e) {
            var t = e.attributes,
                a = t.dataPid,
                r = t.width,
                n = t.height,
                i = t.ampLayout,
                l = t.dataBid,
                c = t.autoPlay,
                u = t.dataBcid,
                s = t.dataVid,
                d = {
                    layout: i,
                    height: n,
                    "data-pid": a
                };
            return "fixed-height" !== i && r && (d.width = r), c || (d["data-macros"] = "m.playback=click"), s ? d["data-vid"] = s : u && (d["data-bcid"] = u), l && (d["data-bid"] = l), Object(o.createElement)("amp-o2-player", d)
        };
    a.d(t, "name", function() {
        return m
    }), a.d(t, "settings", function() {
        return b
    });
    var m = "amp/amp-o2-player",
        b = {
            title: Object(r.__)("AMP O2 Player", "amp"),
            category: "embed",
            icon: "embed-generic",
            keywords: [Object(r.__)("Embed", "amp"), Object(r.__)("AOL O2Player", "amp")],
            attributes: {
                dataPid: {
                    source: "attribute",
                    selector: "amp-o2-player",
                    attribute: "data-pid"
                },
                dataVid: {
                    source: "attribute",
                    selector: "amp-o2-player",
                    attribute: "data-vid"
                },
                dataBcid: {
                    source: "attribute",
                    selector: "amp-o2-player",
                    attribute: "data-bcid"
                },
                dataBid: {
                    source: "attribute",
                    selector: "amp-o2-player",
                    attribute: "data-bid"
                },
                autoPlay: {
                    default: !1
                },
                ampLayout: {
                    default: "responsive",
                    source: "attribute",
                    selector: "amp-o2-player",
                    attribute: "layout"
                },
                width: {
                    default: 600,
                    source: "attribute",
                    selector: "amp-o2-player",
                    attribute: "width"
                },
                height: {
                    default: 400,
                    source: "attribute",
                    selector: "amp-o2-player",
                    attribute: "height"
                }
            },
            edit: s,
            save: d
        }
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(1),
        n = a(7),
        i = a.n(n),
        o = a(0),
        l = (a(5), a(4)),
        c = a(2),
        u = a(6),
        s = function(e) {
            var t = e.attributes,
                a = e.setAttributes,
                n = t.dataEmbedCode,
                s = t.dataPlayerId,
                d = t.dataPcode,
                m = t.dataPlayerVersion,
                b = [{
                    value: "responsive",
                    label: Object(r.__)("Responsive", "amp")
                }, {
                    value: "fixed",
                    label: Object(r.__)("Fixed", "amp")
                }, {
                    value: "fill",
                    label: Object(r.__)("Fill", "amp")
                }, {
                    value: "flex-item",
                    label: Object(r.__)("Flex-item", "amp")
                }],
                p = !1;
            return n && s && d && (p = "http://cf.c.ooyala.com/".concat(n)), Object(o.createElement)(o.Fragment, null, Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
                title: Object(r.__)("Ooyala settings", "amp")
            }, Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Video embed code (required)", "amp"),
                value: n,
                onChange: function(e) {
                    return a({
                        dataEmbedCode: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Player ID (required)", "amp"),
                value: s,
                onChange: function(e) {
                    return a({
                        dataPlayerId: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Provider code for the account (required)", "amp"),
                value: d,
                onChange: function(e) {
                    return a({
                        dataPcode: e
                    })
                }
            }), Object(o.createElement)(c.SelectControl, {
                label: Object(r.__)("Player version", "amp"),
                value: m,
                options: [{
                    value: "v3",
                    label: Object(r.__)("V3", "amp")
                }, {
                    value: "v4",
                    label: Object(r.__)("V4", "amp")
                }],
                onChange: function(e) {
                    return a({
                        dataPlayerVersion: e
                    })
                }
            }), Object(o.createElement)(u.a, i()({}, e, {
                ampLayoutOptions: b
            })))), p && Object(o.createElement)(u.b, {
                name: Object(r.__)("Ooyala Player", "amp"),
                url: p
            }), !p && Object(o.createElement)(c.Placeholder, {
                label: Object(r.__)("Ooyala Player", "amp")
            }, Object(o.createElement)("p", null, Object(r.__)("Add required data to use the block.", "amp"))))
        },
        d = function(e) {
            var t = e.attributes,
                a = t.dataEmbedCode,
                r = t.dataPlayerId,
                n = t.dataPcode,
                i = t.dataPlayerVersion,
                l = t.ampLayout,
                c = t.height,
                u = t.width,
                s = {
                    layout: l,
                    height: c,
                    "data-embedcode": a,
                    "data-playerid": r,
                    "data-pcode": n,
                    "data-playerversion": i
                };
            return "fixed-height" !== l && u && (s.width = u), Object(o.createElement)("amp-ooyala-player", s)
        };
    a.d(t, "name", function() {
        return m
    }), a.d(t, "settings", function() {
        return b
    });
    var m = "amp/amp-ooyala-player",
        b = {
            title: Object(r.__)("AMP Ooyala Player", "amp"),
            description: Object(r.__)("Displays an Ooyala video.", "amp"),
            category: "embed",
            icon: "embed-generic",
            keywords: [Object(r.__)("Embed", "amp"), Object(r.__)("Ooyala video", "amp")],
            attributes: {
                dataEmbedCode: {
                    source: "attribute",
                    selector: "amp-ooyala-player",
                    attribute: "data-embedcode"
                },
                dataPlayerId: {
                    source: "attribute",
                    selector: "amp-ooyala-player",
                    attribute: "data-playerid"
                },
                dataPcode: {
                    source: "attribute",
                    selector: "amp-ooyala-player",
                    attribute: "data-pcode"
                },
                dataPlayerVersion: {
                    default: "v3",
                    source: "attribute",
                    selector: "amp-ooyala-player",
                    attribute: "data-playerversion"
                },
                ampLayout: {
                    default: "responsive",
                    source: "attribute",
                    selector: "amp-ooyala-player",
                    attribute: "layout"
                },
                width: {
                    default: 600,
                    source: "attribute",
                    selector: "amp-ooyala-player",
                    attribute: "width"
                },
                height: {
                    default: 400,
                    source: "attribute",
                    selector: "amp-ooyala-player",
                    attribute: "height"
                }
            },
            edit: s,
            save: d
        }
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(1),
        n = a(7),
        i = a.n(n),
        o = a(0),
        l = (a(5), a(4)),
        c = a(2),
        u = a(6),
        s = function(e) {
            var t = e.attributes,
                a = e.setAttributes,
                n = t.dataEmbedId,
                s = [{
                    value: "responsive",
                    label: Object(r.__)("Responsive", "amp")
                }, {
                    value: "fixed-height",
                    label: Object(r.__)("Fixed Height", "amp")
                }, {
                    value: "fixed",
                    label: Object(r.__)("Fixed", "amp")
                }, {
                    value: "fill",
                    label: Object(r.__)("Fill", "amp")
                }, {
                    value: "flex-item",
                    label: Object(r.__)("Flex-item", "amp")
                }],
                d = !1;
            return n && (d = "https://media-cdn.beachfrontreach.com/acct_1/video/"), Object(o.createElement)(o.Fragment, null, Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
                title: Object(r.__)("Reach settings", "amp")
            }, Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("The Reach player embed id (required)", "amp"),
                value: n,
                onChange: function(e) {
                    return a({
                        dataEmbedId: e
                    })
                }
            }), Object(o.createElement)(u.a, i()({}, e, {
                ampLayoutOptions: s
            })))), d && Object(o.createElement)(u.b, {
                name: Object(r.__)("Reach Player", "amp"),
                url: d
            }), !d && Object(o.createElement)(c.Placeholder, {
                label: Object(r.__)("Reach Player", "amp")
            }, Object(o.createElement)("p", null, Object(r.__)("Add Reach player embed ID to use the block.", "amp"))))
        },
        d = function(e) {
            var t = e.attributes,
                a = t.dataEmbedId,
                r = t.ampLayout,
                n = t.height,
                i = t.width,
                l = {
                    layout: r,
                    height: n,
                    "data-embed-id": a
                };
            return "fixed-height" !== r && i && (l.width = i), Object(o.createElement)("amp-reach-player", l)
        };
    a.d(t, "name", function() {
        return m
    }), a.d(t, "settings", function() {
        return b
    });
    var m = "amp/amp-reach-player",
        b = {
            title: Object(r.__)("AMP Reach Player", "amp"),
            description: Object(r.__)("Displays the Reach Player configured in the Beachfront Reach platform.", "amp"),
            category: "embed",
            icon: "embed-generic",
            keywords: [Object(r.__)("Embed", "amp"), Object(r.__)("Beachfront Reach video", "amp")],
            attributes: {
                dataEmbedId: {
                    source: "attribute",
                    selector: "amp-reach-player",
                    attribute: "data-embed-id"
                },
                ampLayout: {
                    default: "fixed-height",
                    source: "attribute",
                    selector: "amp-reach-player",
                    attribute: "layout"
                },
                width: {
                    default: 600,
                    source: "attribute",
                    selector: "amp-reach-player",
                    attribute: "width"
                },
                height: {
                    default: 400,
                    source: "attribute",
                    selector: "amp-reach-player",
                    attribute: "height"
                }
            },
            edit: s,
            save: d
        }
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(1),
        n = a(7),
        i = a.n(n),
        o = a(0),
        l = (a(5), a(4)),
        c = a(2),
        u = a(6),
        s = function(e) {
            var t = e.attributes,
                a = e.setAttributes,
                n = t.dataSiteId,
                s = t.dataPlayerId,
                d = t.dataContentId,
                m = t.dataDomain,
                b = t.dataMode,
                p = t.dataItems,
                f = [{
                    value: "responsive",
                    label: Object(r.__)("Responsive", "amp")
                }, {
                    value: "fixed",
                    label: Object(r.__)("Fixed", "amp")
                }, {
                    value: "fill",
                    label: Object(r.__)("Fill", "amp")
                }, {
                    value: "flex-item",
                    label: Object(r.__)("Flex-item", "amp")
                }],
                h = !1;
            return n && d && m && b && p && (h = "https://cms.springboardplatform.com/embed_iframe/"), Object(o.createElement)(o.Fragment, null, Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
                title: Object(r.__)("Springboard Player Settings", "amp")
            }, Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("SprintBoard site ID (required)", "amp"),
                value: n,
                onChange: function(e) {
                    return a({
                        dataSiteId: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Player content ID (required)", "amp"),
                value: d,
                onChange: function(e) {
                    return a({
                        dataContentId: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Player ID", "amp"),
                value: s,
                onChange: function(e) {
                    return a({
                        dataPlayerId: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                label: Object(r.__)("Springboard partner domain", "amp"),
                value: m,
                onChange: function(e) {
                    return a({
                        dataDomain: e
                    })
                }
            }), Object(o.createElement)(c.SelectControl, {
                label: Object(r.__)("Mode (required)", "amp"),
                value: b,
                options: [{
                    value: "video",
                    label: Object(r.__)("Video", "amp")
                }, {
                    value: "playlist",
                    label: Object(r.__)("Playlist", "amp")
                }],
                onChange: function(e) {
                    return a({
                        dataMode: e
                    })
                }
            }), Object(o.createElement)(c.TextControl, {
                type: "number",
                label: Object(r.__)("Number of video is playlist (required)", "amp"),
                value: p,
                onChange: function(e) {
                    return a({
                        dataItems: e
                    })
                }
            }), Object(o.createElement)(u.a, i()({}, e, {
                ampLayoutOptions: f
            })))), h && Object(o.createElement)(u.b, {
                name: Object(r.__)("Springboard Player", "amp"),
                url: h
            }), !h && Object(o.createElement)(c.Placeholder, {
                label: Object(r.__)("Springboard Player", "amp")
            }, Object(o.createElement)("p", null, Object(r.__)("Add required data to use the block.", "amp"))))
        },
        d = function(e) {
            var t = e.attributes,
                a = t.dataSiteId,
                r = t.dataPlayerId,
                n = t.dataContentId,
                i = t.dataDomain,
                l = t.dataMode,
                c = t.dataItems,
                u = t.ampLayout,
                s = t.height,
                d = t.width,
                m = {
                    layout: u,
                    height: s,
                    "data-site-id": a,
                    "data-mode": l,
                    "data-content-id": n,
                    "data-player-id": r,
                    "data-domain": i,
                    "data-items": c
                };
            return "fixed-height" !== u && d && (m.width = t.width), Object(o.createElement)("amp-springboard-player", m)
        };
    a.d(t, "name", function() {
        return m
    }), a.d(t, "settings", function() {
        return b
    });
    var m = "amp/amp-springboard-player",
        b = {
            title: Object(r.__)("AMP Springboard Player", "amp"),
            description: Object(r.__)("Displays the Springboard Player used in the Springboard Video Platform", "amp"),
            category: "embed",
            icon: "embed-generic",
            keywords: [Object(r.__)("Embed", "amp")],
            attributes: {
                dataSiteId: {
                    source: "attribute",
                    selector: "amp-springboard-player",
                    attribute: "data-site-id"
                },
                dataContentId: {
                    source: "attribute",
                    selector: "amp-springboard-player",
                    attribute: "data-content-id"
                },
                dataPlayerId: {
                    source: "attribute",
                    selector: "amp-springboard-player",
                    attribute: "data-player-id"
                },
                dataDomain: {
                    source: "attribute",
                    selector: "amp-springboard-player",
                    attribute: "data-domain"
                },
                dataMode: {
                    default: "video",
                    source: "attribute",
                    selector: "amp-springboard-player",
                    attribute: "data-mode"
                },
                dataItems: {
                    default: 1,
                    source: "attribute",
                    selector: "amp-springboard-player",
                    attribute: "data-items"
                },
                ampLayout: {
                    default: "responsive",
                    source: "attribute",
                    selector: "amp-springboard-player",
                    attribute: "layout"
                },
                width: {
                    default: 600,
                    source: "attribute",
                    selector: "amp-springboard-player",
                    attribute: "width"
                },
                height: {
                    default: 400,
                    source: "attribute",
                    selector: "amp-springboard-player",
                    attribute: "height"
                }
            },
            edit: s,
            save: d
        }
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(1),
        n = a(7),
        i = a.n(n),
        o = a(0),
        l = a(9),
        c = a.n(l),
        u = (a(5), a(4)),
        s = a(2),
        d = a(6),
        m = function(e) {
            var t, a = e.attributes,
                n = e.setAttributes,
                l = a.align,
                m = a.cutoff,
                b = a.dateTime;
            b ? t = m && parseInt(m) < Math.abs(c()(b).diff(c()(), "seconds")) ? c()(b).format("dddd D MMMM HH:mm") : c()(b).fromNow() : (t = c()(Date.now()).fromNow(), n({
                dateTime: c()(c()(), c.a.ISO_8601, !0).format()
            }));
            var p = [{
                value: "",
                label: Object(r.__)("Responsive", "amp")
            }, {
                value: "fixed",
                label: Object(r.__)("Fixed", "amp")
            }, {
                value: "fixed-height",
                label: Object(r.__)("Fixed height", "amp")
            }];
            return Object(o.createElement)(o.Fragment, null, Object(o.createElement)(u.InspectorControls, null, Object(o.createElement)(s.PanelBody, {
                title: Object(r.__)("AMP Timeago Settings", "amp")
            }, Object(o.createElement)(s.DateTimePicker, {
                locale: "en",
                currentDate: b || c()(),
                onChange: function(e) {
                    return n({
                        dateTime: c()(e, c.a.ISO_8601, !0).format()
                    })
                }
            }), Object(o.createElement)(d.a, i()({}, e, {
                ampLayoutOptions: p
            })), Object(o.createElement)(s.TextControl, {
                type: "number",
                className: "blocks-amp-timeout__cutoff",
                label: Object(r.__)("Cutoff (seconds)", "amp"),
                value: void 0 !== m ? m : "",
                onChange: function(e) {
                    return n({
                        cutoff: e
                    })
                }
            }))), Object(o.createElement)(u.BlockControls, null, Object(o.createElement)(u.BlockAlignmentToolbar, {
                value: l,
                onChange: function(e) {
                    n({
                        align: e
                    })
                },
                controls: ["left", "center", "right"]
            })), Object(o.createElement)("time", {
                dateTime: b
            }, t))
        },
        b = function(e) {
            var t = e.attributes,
                a = t.ampLayout,
                r = t.width,
                n = t.height,
                i = t.align,
                l = t.cutoff,
                u = {
                    layout: "responsive",
                    className: "align" + (i || "none"),
                    datetime: t.dateTime,
                    locale: "en"
                };
            if (l && (u.cutoff = l), a) switch (a) {
                case "fixed-height":
                    n && (u.height = n, u.layout = a);
                    break;
                case "fixed":
                    n && r && (u.height = n, u.width = r, u.layout = a)
            }
            return Object(o.createElement)("amp-timeago", u, c()(t.dateTime).format("dddd D MMMM HH:mm"))
        };
    a.d(t, "name", function() {
        return p
    }), a.d(t, "settings", function() {
        return f
    });
    var p = "amp/amp-timeago",
        f = {
            title: Object(r.__)("AMP Timeago", "amp"),
            category: "common",
            icon: "backup",
            keywords: [Object(r.__)("Time difference", "amp"), Object(r.__)("Time ago", "amp"), Object(r.__)("Date", "amp")],
            attributes: {
                align: {
                    type: "string"
                },
                cutoff: {
                    source: "attribute",
                    selector: "amp-timeago",
                    attribute: "cutoff"
                },
                dateTime: {
                    source: "attribute",
                    selector: "amp-timeago",
                    attribute: "datetime"
                },
                ampLayout: {
                    default: "fixed-height",
                    source: "attribute",
                    selector: "amp-timeago",
                    attribute: "layout"
                },
                width: {
                    source: "attribute",
                    selector: "amp-timeago",
                    attribute: "width"
                },
                height: {
                    default: 20,
                    source: "attribute",
                    selector: "amp-timeago",
                    attribute: "height"
                }
            },
            getEditWrapperProps: function(e) {
                var t = e.align;
                if ("left" === t || "right" === t || "center" === t) return {
                    "data-align": t
                }
            },
            edit: m,
            save: b
        }
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var r = a(1),
        n = a(7),
        i = a.n(n),
        o = a(18),
        l = a.n(o),
        c = a(19),
        u = a.n(c),
        s = a(20),
        d = a.n(s),
        m = a(21),
        b = a.n(m),
        p = a(22),
        f = a.n(p),
        h = a(0),
        y = a(10),
        O = (a(5), a(2)),
        g = a(4),
        j = a(3),
        _ = window.ampLatestStoriesBlockData,
        v = function(e) {
            function t() {
                return l()(this, t), d()(this, b()(t).apply(this, arguments))
            }
            return f()(t, e), u()(t, [{
                key: "componentDidMount",
                value: function() {
                    if (!document.querySelector('link[href="'.concat(_.storyCardStyleURL, '"]'))) {
                        var e = document.createElement("link");
                        e.setAttribute("rel", "stylesheet"), e.setAttribute("type", "text/css"), e.setAttribute("href", _.storyCardStyleURL), document.head.appendChild(e)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.attributes,
                        a = e.setAttributes,
                        n = e.latestStories,
                        o = t.order,
                        l = t.orderBy,
                        c = t.storiesToShow,
                        u = Object(h.createElement)(g.InspectorControls, null, Object(h.createElement)(O.PanelBody, {
                            title: Object(r.__)("Latest Stories Settings", "amp")
                        }, Object(h.createElement)(O.QueryControls, i()({
                            order: o,
                            orderBy: l
                        }, {
                            numberOfItems: c,
                            onOrderChange: function(e) {
                                return a({
                                    order: e
                                })
                            },
                            onOrderByChange: function(e) {
                                return a({
                                    orderBy: e
                                })
                            },
                            onNumberOfItemsChange: function(e) {
                                return a({
                                    storiesToShow: e
                                })
                            }
                        }))));
                    if (!(Array.isArray(n) && n.length)) return Object(h.createElement)(h.Fragment, null, u, Object(h.createElement)(O.Placeholder, {
                        icon: "admin-post",
                        label: Object(r.__)("Latest Stories", "amp")
                    }, Array.isArray(n) ? Object(r.__)("No stories found.", "amp") : Object(h.createElement)(O.Spinner, null)));
                    var s = Object.assign({}, t, {
                        useCarousel: !1
                    });
                    return Object(h.createElement)(h.Fragment, null, u, Object(h.createElement)(O.ServerSideRender, {
                        block: "amp/amp-latest-stories",
                        attributes: s
                    }))
                }
            }]), t
        }(h.Component),
        x = Object(j.withSelect)(function(e, t) {
            var a = t.attributes,
                r = a.storiesToShow,
                n = a.order,
                i = a.orderBy;
            return {
                latestStories: (0, e("core").getEntityRecords)("postType", "amp_story", Object(y.pickBy)({
                    order: n,
                    orderby: i,
                    per_page: r
                }, function(e) {
                    return !Object(y.isUndefined)(e)
                }))
            }
        })(v);
    a.d(t, "name", function() {
        return E
    }), a.d(t, "settings", function() {
        return P
    });
    var E = "amp/amp-latest-stories",
        P = {
            title: Object(r.__)("Latest Stories", "amp"),
            description: Object(r.__)("See the latest AMP stories", "amp"),
            icon: "list-view",
            category: "widgets",
            keywords: [Object(r.__)("Recent stories", "amp"), Object(r.__)("AMP stories", "amp")],
            supports: {
                html: !1
            },
            edit: x,
            save: function() {
                return null
            }
        }
}]);