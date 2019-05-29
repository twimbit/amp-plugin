! function(e) {
	var t = {};
	
	function r(n) {
		if (t[n]) return t[n].exports;
		var a = t[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
	}
	r.m = e, r.c = t, r.d = function(e, t, n) {
		r.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, r.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, r.t = function(e, t) {
		if (1 & t && (e = r(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (r.r(n), Object.defineProperty(n, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e)
			for (var a in e) r.d(n, a, function(t) {
				return e[t]
			}.bind(null, a));
		return n
	}, r.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return r.d(t, "a", t), t
	}, r.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, r.p = "", r(r.s = 81)
}({
	0: function(e, t) {
		! function() {
			e.exports = this.wp.element
		}()
	},
	1: function(e, t) {
		! function() {
			e.exports = this.wp.i18n
		}()
	},
	16: function(e, t, r) {
		var n = r(36),
			a = r(37),
			o = r(38);
		e.exports = function(e) {
			return n(e) || a(e) || o()
		}
	},
	19: function(e, t) {
		e.exports = function(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e
		}
	},
	2: function(e, t) {
		! function() {
			e.exports = this.wp.components
		}()
	},
	22: function(e, t) {
		! function() {
			e.exports = this.wp.hooks
		}()
	},
	23: function(e, t, r) {
		"use strict";
		var n = r(6),
			a = r.n(n),
			o = r(0),
			i = r(1),
			c = r(2),
			l = r(4),
			u = r(3),
			s = ["core/paragraph", "core/heading", "core/code", "core/quote", "core/subhead"],
			m = ["core/image", "core/video"];
		r.d(t, "a", function() {
			return d
		}), r.d(t, "d", function() {
			return f
		}), r.d(t, "b", function() {
			return O
		}), r.d(t, "c", function() {
			return g
		}), r.d(t, "e", function() {
			return C
		}); //
		var b = [{
				value: "nodisplay",
				label: Object(i.__)("No Display", "amp"),
				notAvailable: ["core-embed/vimeo", "core-embed/dailymotion", "core-embed/hulu", "core-embed/reddit", "core-embed/soundcloud"]
			}, {
				value: "fixed",
				label: Object(i.__)("Fixed", "amp"),
				notAvailable: ["core-embed/soundcloud"]
			}, {
				value: "responsive",
				label: Object(i.__)("Responsive", "amp"),
				notAvailable: ["core-embed/soundcloud"]
			}, {
				value: "fixed-height",
				label: Object(i.__)("Fixed height", "amp"),
				notAvailable: []
			}, {
				value: "fill",
				label: Object(i.__)("Fill", "amp"),
				notAvailable: ["core-embed/soundcloud"]
			}, {
				value: "flex-item",
				label: Object(i.__)("Flex Item", "amp"),
				notAvailable: ["core-embed/soundcloud"]
			}, {
				value: "intrinsic",
				label: Object(i.__)("Intrinsic", "amp"),
				notAvailable: ["core/video", "core-embed/youtube", "core-embed/facebook", "core-embed/instagram", "core-embed/vimeo", "core-embed/dailymotion", "core-embed/hulu", "core-embed/reddit", "core-embed/soundcloud"]
			}],
			d = function(e, t) {
				return "core/shortcode" !== t && "core/gallery" !== t || (e.attributes || (e.attributes = {}), e.attributes.ampCarousel = {
					type: "boolean"
				}, e.attributes.ampLightbox = {
					type: "boolean"
				}), "core/image" === t && (e.attributes || (e.attributes = {}), e.attributes.ampLightbox = {
					type: "boolean"
				}), s.includes(t) && (e.attributes || (e.attributes = {}), e.attributes.ampFitText = {
					default: !1
				}, e.attributes.minFont = {
					default: 14,
					source: "attribute",
					selector: "amp-fit-text",
					attribute: "min-font-size"
				}, e.attributes.maxFont = {
					default: 54,
					source: "attribute",
					selector: "amp-fit-text",
					attribute: "max-font-size"
				}, e.attributes.height = {
					default: "core/image" === t ? 200 : 50,
					source: "attribute",
					selector: "amp-fit-text",
					attribute: "height"
				}), (0 === t.indexOf("core-embed") || m.includes(t)) && (e.attributes || (e.attributes = {}), e.attributes.ampLayout = {
					type: "string"
				}, e.attributes.ampNoLoading = {
					type: "boolean"
				}), e
			},
			f = function(e, t, r) {
				var n = r.text || "",
					a = "",
					i = {
						layout: "fixed-height"
					};
				if ("core/shortcode" === t.name && I(r)) {
					if (r.ampLightbox || T(r.text || "") && (n = L(r.text)), r.ampCarousel) {
						if (P(n) && (n = S(n)), !r.ampLightbox) return r.text !== n ? Object(o.createElement)(o.RawHTML, null, n) : e
					} else n = P(r.text || "") ? r.text : r.text.replace("[gallery", "[gallery amp-carousel=false");
					if (r.ampLightbox && !T(n) && (n = n.replace("[gallery", "[gallery amp-lightbox=true")), r.text !== n) return Object(o.createElement)(o.RawHTML, null, n)
				} else if ("core/paragraph" !== t.name || r.ampFitText) {
					if (s.includes(t.name) && r.ampFitText) {
						if (r.minFont && (i["min-font-size"] = r.minFont), r.maxFont && (i["max-font-size"] = r.maxFont), r.height && (i.height = r.height), "core/paragraph" === t.name) {
							var c = "<amp-fit-text";
							for (var l in i) {
								c += " " + l + '="' + i[l] + '"'
							}
							return c += ">" + p(r.content) + "</amp-fit-text>", Object(o.cloneElement)(e, {
								key: "new",
								value: c
							})
						}
						return i.children = e, Object(o.createElement)("amp-fit-text", i)
					}
				} else if ((a = p(r.content)) !== r.content) return Object(o.cloneElement)(e, {
					key: "new",
					value: a
				});
				return e
			},
			p = function(e) {
				var t = /<amp-fit-text\b[^>]*>(.*?)<\/amp-fit-text>/.exec(e),
					r = e;
				return t && t[1] && (r = t[1]), r
			},
			h = function(e) {
				for (var t = [{
					value: "",
					label: Object(i.__)("Default", "amp")
				}], r = 0, n = b; r < n.length; r++) {
					var a = n[r];
					!a.notAvailable.includes(e) && t.push({
						value: a.value,
						label: a.label
					})
				}
				return t
			},
			O = function(e, t, r) {
				var n = {};
				return "core/shortcode" === t.name ? e : "amp/" === t.name.substr(0, 4) ? e : (r.ampLayout && (n["data-amp-layout"] = r.ampLayout), r.ampNoLoading && (n["data-amp-noloading"] = r.ampNoLoading), r.ampLightbox && (n["data-amp-lightbox"] = r.ampLightbox), r.ampCarousel && (n["data-amp-carousel"] = r.ampCarousel), a()({}, n, e))
			},
			g = function(e) {
				return function(t) {
					var r, n = t.attributes,
						a = n.text,
						i = n.ampLayout,
						c = t.setAttributes,
						l = t.name;
					if ("core/shortcode" === l) {
						if (P(a || "") && c({
							text: S(a)
						}), T(a || "") && c({
							text: L(a)
						}), "" === (r = y(t))) return Object(o.createElement)(e, t)
					} else "core/gallery" === l ? r = w(t) : "core/image" === l ? r = A(t) : m.includes(l) || 0 === l.indexOf("core-embed/") ? r = v(t) : s.includes(l) && (r = x(t));
					return i && "nodisplay" === i ? [r] : Object(o.createElement)(o.Fragment, null, Object(o.createElement)(e, t), r)
				}
			},
			v = function(e) {
				return e.isSelected ? Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
					title: Object(i.__)("AMP Settings", "amp")
				}, Object(o.createElement)(j, e), Object(o.createElement)(_, e))) : null
			},
			j = function(e) {
				var t = e.name,
					r = e.attributes.ampLayout,
					n = e.setAttributes,
					a = Object(i.__)("AMP Layout", "amp");
				return "core/image" === t && (a = Object(i.__)("AMP Layout (modifies width/height)", "amp")), Object(o.createElement)(c.SelectControl, {
					label: a,
					value: r,
					options: h(t),
					onChange: function(t) {
						n({
							ampLayout: t
						}), "core/image" === e.name && function(e, t) {
							var r = e.attributes,
								n = e.setAttributes;
							switch (t) {
								case "fixed-height":
									r.height || n({
										height: 400
									}), r.ampLightbox && n({
										ampLightbox: !1
									});
									break;
								case "fixed":
									r.height || n({
										height: 400
									}), r.width || n({
										width: 608
									})
							}
						}(e, t)
					}
				})
			},
			_ = function(e) {
				var t = e.attributes.ampNoLoading,
					r = e.setAttributes,
					n = Object(i.__)("AMP Noloading", "amp");
				return Object(o.createElement)(c.ToggleControl, {
					label: n,
					checked: t,
					onChange: function() {
						return r({
							ampNoLoading: !t
						})
					}
				})
			},
			x = function(e) {
				var t = e.isSelected,
					r = e.attributes,
					n = e.setAttributes,
					a = r.ampFitText,
					u = r.minFont,
					s = r.maxFont,
					m = r.height,
					b = [{
						name: "small",
						shortName: Object(i._x)("S", "font size", "amp"),
						size: 14
					}, {
						name: "regular",
						shortName: Object(i._x)("M", "font size", "amp"),
						size: 16
					}, {
						name: "large",
						shortName: Object(i._x)("L", "font size", "amp"),
						size: 36
					}, {
						name: "larger",
						shortName: Object(i._x)("XL", "font size", "amp"),
						size: 48
					}];
				if (!t) return null;
				var d = Object(i.__)("Automatically fit text to container", "amp");
				return a && (s = parseInt(s, 10), m = parseInt(m, 10), u = parseInt(u, 10)), Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
					title: Object(i.__)("AMP Settings", "amp"),
					className: a ? "is-amp-fit-text" : ""
				}, Object(o.createElement)(c.ToggleControl, {
					label: d,
					checked: a,
					onChange: function() {
						return n({
							ampFitText: !a
						})
					}
				})), a && Object(o.createElement)(o.Fragment, null, Object(o.createElement)(c.TextControl, {
					label: Object(i.__)("Height", "amp"),
					value: m,
					min: 1,
					onCHange: function(e) {
						n({
							height: e
						})
					}
				}), s > m && Object(o.createElement)(c.Notice, {
					status: "error",
					isDismissible: !1
				}, Object(i.__)("The height must be greater than the max font size.", "amp")), Object(o.createElement)(c.PanelBody, {
					title: Object(i.__)("Minimum font size", "amp")
				}, Object(o.createElement)(c.FontSizePicker, {
					fallbackFontSize: 14,
					value: u,
					fontSizes: b,
					onChange: function(e) {
						e || (e = 14), parseInt(e, 10) <= s && n({
							minFont: e
						})
					}
				})), u > s && Object(o.createElement)(c.Notice, {
					status: "error",
					isDismissible: !1
				}, Object(i.__)("The min font size must less than the max font size.", "amp")), Object(o.createElement)(c.PanelBody, {
					title: Object(i.__)("Maximum font size", "amp")
				}, Object(o.createElement)(c.FontSizePicker, {
					fallbackFontSize: 48,
					value: s,
					fontSizes: b,
					onChange: function(e) {
						e || (e = 54), n({
							maxFont: e,
							height: Math.max(e, m)
						})
					}
				}))))
			},
			y = function(e) {
				var t = e.isSelected;
				if (!I(e.attributes) || !t) return null;
				var r = Object(u.select)("amp/block-editor").hasThemeSupport();
				return Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
					title: Object(i.__)("AMP Settings", "amp")
				}, r && Object(o.createElement)(k, e), Object(o.createElement)(E, e)))
			},
			E = function(e) {
				var t = e.attributes,
					r = t.ampLightbox,
					n = t.linkTo,
					a = t.ampLayout,
					l = e.setAttributes;
				return Object(o.createElement)(c.ToggleControl, {
					label: Object(i.__)("Add lightbox effect", "amp"),
					checked: r,
					onChange: function(e) {
						l({
							ampLightbox: !r
						}), e && ("fixed-height" === a && l({
							ampLayout: "fixed"
						}), n && "none" !== n && l({
							linkTo: "none"
						}))
					}
				})
			},
			k = function(e) {
				var t = e.attributes.ampCarousel,
					r = e.setAttributes;
				return Object(o.createElement)(c.ToggleControl, {
					label: Object(i.__)("Display as carousel", "amp"),
					checked: t,
					onChange: function() {
						return r({
							ampCarousel: !t
						})
					}
				})
			},
			A = function(e) {
				return e.isSelected ? Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
					title: Object(i.__)("AMP Settings", "amp")
				}, Object(o.createElement)(j, e), Object(o.createElement)(_, e), Object(o.createElement)(E, e))) : null
			},
			w = function(e) {
				if (!e.isSelected) return null;
				var t = Object(u.select)("amp/block-editor").hasThemeSupport();
				return Object(o.createElement)(l.InspectorControls, null, Object(o.createElement)(c.PanelBody, {
					title: Object(i.__)("AMP Settings", "amp")
				}, t && Object(o.createElement)(k, e), Object(o.createElement)(E, e)))
			},
			S = function(e) {
				return e.replace(" amp-carousel=false", "")
			},
			L = function(e) {
				return e.replace(" amp-lightbox=true", "")
			},
			P = function(e) {
				return -1 !== e.indexOf("amp-carousel=false")
			},
			T = function(e) {
				return -1 !== e.indexOf("amp-lightbox=true")
			},
			I = function(e) {
				return e.text && -1 !== e.text.indexOf("gallery")
			},
			C = function() {
				var e = Object(u.select)("amp/block-editor"),
					t = e.getDefaultStatus,
					r = e.getPossibleStatuses,
					n = Object(u.select)("core/editor").getEditedPostAttribute;
				if ("amp_story" === n("type")) return !0;
				var a = n("meta");
				return a && a.amp_status && r().includes(a.amp_status) ? "enabled" === a.amp_status : "enabled" === t()
			}
	},
	26: function(e, t, r) {
		"use strict";
		var n = r(0),
			a = r(1);
		t.a = function(e) {
			var t = e.message,
				r = e.code,
				o = e.node_name,
				i = e.parent_name;
			return t || ("invalid_element" === r && o ? Object(n.createElement)(n.Fragment, null, Object(a.__)("Invalid element: ", "amp"), Object(n.createElement)("code", null, o)) : "invalid_attribute" === r && o ? Object(n.createElement)(n.Fragment, null, Object(a.__)("Invalid attribute: ", "amp"), Object(n.createElement)("code", null, i ? Object(a.sprintf)("%s[%s]", i, o) : o)) : Object(n.createElement)(n.Fragment, null, Object(a.__)("Error code: ", "amp"), Object(n.createElement)("code", null, r || Object(a.__)("unknown", "amp"))))
		}
	},
	28: function(e, t, r) {
		"use strict";
		var n = {};
		r.r(n), r.d(n, "getBlockValidationErrors", function() {
			return c
		}), r.d(n, "hasThemeSupport", function() {
			return l
		}), r.d(n, "isNativeAMP", function() {
			return u
		}), r.d(n, "getDefaultStatus", function() {
			return s
		}), r.d(n, "getPossibleStatuses", function() {
			return m
		});
		var a = r(6),
			o = r.n(a),
			i = r(3);
		
		function c(e, t) {
			return e.errorsByClientId[t] || []
		}
		
		function l(e) {
			return Boolean(e.hasThemeSupport)
		}
		
		function u(e) {
			return Boolean(e.isNativeAMP)
		}
		
		function s(e) {
			return e.defaultStatus
		}
		
		function m(e) {
			return e.possibleStatuses
		}
		Object(i.registerStore)("amp/block-editor", {
			reducer: function(e) {
				return e
			},
			selectors: n,
			initialState: o()({}, window.ampBlockEditor)
		})
	},
	29: function(e, t, r) {
		"use strict";
		var n = r(0),
			a = r(2),
			o = r(1),
			i = r(5),
			c = r(3),
			l = r(26),
			u = Object(c.withSelect)(function(e, t) {
				var r = t.clientId;
				return {
					blockValidationErrors: (0, e("amp/block-validation").getBlockValidationErrors)(r)
				}
			});
		t.a = Object(i.createHigherOrderComponent)(function(e) {
			return u(function(t) {
				var r = t.blockValidationErrors,
					i = t.onReplace,
					c = r.length;
				if (0 === c) return Object(n.createElement)(e, t);
				var u = [{
					label: Object(o.__)("Remove Block", "amp"),
					onClick: function() {
						return i([])
					}
				}];
				return Object(n.createElement)(n.Fragment, null, Object(n.createElement)(a.Notice, {
					status: "warning",
					isDismissible: !1,
					actions: u
				}, Object(n.createElement)("details", {
					className: "amp-block-validation-errors"
				}, Object(n.createElement)("summary", {
					className: "amp-block-validation-errors__summary"
				}, Object(o.sprintf)(Object(o._n)("There is %s issue from AMP validation.", "There are %s issues from AMP validation.", c, "amp"), c)), Object(n.createElement)("ul", {
					className: "amp-block-validation-errors__list"
				}, r.map(function(e, t) {
					return Object(n.createElement)("li", {
						key: t
					}, Object(n.createElement)(l.a, e))
				})))), Object(n.createElement)(e, t))
			})
		}, "withValidationErrorNotice")
	},
	3: function(e, t) {
		! function() {
			e.exports = this.wp.data
		}()
	},
	36: function(e, t) {
		e.exports = function(e) {
			if (Array.isArray(e)) {
				for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
				return r
			}
		}
	},
	37: function(e, t) {
		e.exports = function(e) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
		}
	},
	38: function(e, t) {
		e.exports = function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}
	},
	4: function(e, t) {
		! function() {
			e.exports = this.wp.blockEditor
		}()
	},
	5: function(e, t) {
		! function() {
			e.exports = this.wp.compose
		}()
	},
	6: function(e, t, r) {
		var n = r(19);
		e.exports = function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = null != arguments[t] ? arguments[t] : {},
					a = Object.keys(r);
				"function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
					return Object.getOwnPropertyDescriptor(r, e).enumerable
				}))), a.forEach(function(t) {
					n(e, t, r[t])
				})
			}
			return e
		}
	},
	7: function(e, t) {
		! function() {
			e.exports = this.lodash
		}()
	},
	81: function(e, t, r) {
		"use strict";
		r.r(t);
		var n = {};
		r.r(n), r.d(n, "addValidationError", function() {
			return g
		}), r.d(n, "resetValidationErrors", function() {
			return v
		}), r.d(n, "updateReviewLink", function() {
			return j
		});
		var a = {};
		r.r(a), r.d(a, "getValidationErrors", function() {
			return _
		}), r.d(a, "getBlockValidationErrors", function() {
			return x
		}), r.d(a, "getReviewLink", function() {
			return y
		}), r.d(a, "isSanitizationAutoAccepted", function() {
			return E
		});
		var o = r(22),
			i = r(3),
			c = r(7),
			l = r(1),
			u = function() {
				var e = Object(i.select)("core/notices").getNotices,
					t = Object(i.dispatch)("core/notices").removeNotice;
				e().filter(function(e) {
					return "amp-errors-notice" === e.id
				}) && t("amp-errors-notice")
			},
			s = [],
			m = function() {
				var e, t = Object(i.select)("amp/block-validation"),
					r = t.getValidationErrors,
					n = t.isSanitizationAutoAccepted,
					a = t.getReviewLink,
					o = Object(i.dispatch)("core/notices").createWarningNotice,
					c = r(),
					u = c.length;
				e = Object(l.sprintf)(
					/* translators: %s: number of issues */
					Object(l._n)("There is %s issue from AMP validation which needs review.", "There are %s issues from AMP validation which need review.", u, "amp"), u);
				var s = c.filter(function(e) {
						return e.clientId
					}),
					m = s.length;
				if (m > 0 ? e += " " + Object(l.sprintf)(
					/* translators: %s: number of block errors. */
					Object(l._n)("%s issue is directly due to content here.", "%s issues are directly due to content here.", m, "amp"), m) : 1 === c.length ? e += " " + Object(l.__)("The issue is not directly due to content here.", "amp") : e += " " + Object(l.__)("The issues are not directly due to content here.", "amp"), e += " ", n()) {
					var b = s.filter(function(e) {
							return 0 === e.status || 2 === e.status
						}),
						d = c.filter(function(e) {
							return 0 === e.status || 2 === e.status
						});
					e += 0 === b.length + d.length ? Object(l.__)("However, your site is configured to automatically accept sanitization of the offending markup.", "amp") : Object(l._n)("Your site is configured to automatically accept sanitization errors, but this error could be from when auto-acceptance was not selected, or from manually rejecting an error.", "Your site is configured to automatically accept sanitization errors, but these errors could be from when auto-acceptance was not selected, or from manually rejecting an error.", c.length, "amp")
				} else e += Object(l.__)("Non-accepted validation errors prevent AMP from being served, and the user will be redirected to the non-AMP version.", "amp");
				var f = {
						id: "amp-errors-notice"
					},
					p = a();
				p && (f.actions = [{
					label: Object(l.__)("Review issues", "amp"),
					url: p
				}]), o(e, f)
			},
			b = r(23),
			d = r(29),
			f = r(6),
			p = r.n(f),
			h = r(16),
			O = r.n(h);
		
		function g(e, t) {
			return {
				type: "ADD_VALIDATION_ERROR",
				error: e,
				clientId: t
			}
		}
		
		function v() {
			return {
				type: "RESET_VALIDATION_ERRORS"
			}
		}
		
		function j(e) {
			return {
				type: "UPDATE_REVIEW_LINK",
				url: e
			}
		}
		
		function _(e) {
			return e.errors
		}
		
		function x(e, t) {
			return e.errors.filter(function(e) {
				return e.clientId === t
			})
		}
		
		function y(e) {
			return e.reviewLink
		}
		
		function E(e) {
			return Boolean(e.isSanitizationAutoAccepted)
		}
		Object(i.registerStore)("amp/block-validation", {
			reducer: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
					t = arguments.length > 1 ? arguments[1] : void 0,
					r = t.type,
					n = t.url,
					a = t.error,
					o = t.clientId;
				switch (r) {
					case "ADD_VALIDATION_ERROR":
						var i = e ? e.errors : [],
							c = p()({}, a, {
								clientId: o
							});
						return p()({}, e, {
							errors: [].concat(O()(i), [c])
						});
					case "RESET_VALIDATION_ERRORS":
						return p()({}, e, {
							errors: []
						});
					case "UPDATE_REVIEW_LINK":
						return p()({}, e, {
							reviewLink: n
						})
				}
				return e
			},
			selectors: a,
			actions: n,
			initialState: p()({}, window.ampBlockValidation, {
				errors: [],
				reviewLink: void 0
			})
		}), r(28);
		var k = Object(i.select)("core/editor").isEditedPostDirty;
		Object(i.subscribe)(function() {
			var e, t;
			k() || (Object(b.e)() ? function() {
				var e = Object(i.select)("core/block-editor"),
					t = e.getBlockCount,
					r = e.getClientIdsWithDescendants,
					n = e.getBlock,
					a = Object(i.select)("core/editor").getCurrentPost,
					o = Object(i.dispatch)("amp/block-validation"),
					l = o.resetValidationErrors,
					b = o.addValidationError,
					d = o.updateReviewLink;
				if (0 !== t()) {
					var f = a(),
						p = f.amp_validity || {};
					if (p.results && p.review_link) {
						var h = p.results.filter(function(e) {
							return 3 !== e.term_status
						}).map(function(e) {
							return e.error
						});
						if (!Object(c.isEqual)(h, s))
							if (s = h, l(), 0 !== h.length) {
								d(p.review_link);
								var O = r(),
									g = !0,
									v = !1,
									j = void 0;
								try {
									for (var _, x = h[Symbol.iterator](); !(g = (_ = x.next()).done); g = !0) {
										var y = _.value;
										if (!y.sources) {
											b(y);
											break
										}
										var E = void 0,
											k = !0,
											A = !1,
											w = void 0;
										try {
											for (var S, L = y.sources[Symbol.iterator](); !(k = (S = L.next()).done); k = !0) {
												var P = S.value;
												if (P.block_name && void 0 !== P.block_content_index && f.id === P.post_id) {
													var T = O[P.block_content_index];
													if (T) {
														var I = n(T);
														I && I.name === P.block_name && (E = T)
													}
												}
											}
										} catch (e) {
											A = !0, w = e
										} finally {
											try {
												k || null == L.return || L.return()
											} finally {
												if (A) throw w
											}
										}
										b(y, E)
									}
								} catch (e) {
									v = !0, j = e
								} finally {
									try {
										g || null == x.return || x.return()
									} finally {
										if (v) throw j
									}
								}
								m()
							} else u()
					}
				}
			}() : (e = Object(i.select)("amp/block-validation").getValidationErrors, t = Object(i.dispatch)("amp/block-validation").resetValidationErrors, e().length > 0 && (t(), u(), s = [])))
		}), Object(o.addFilter)("editor.BlockEdit", "amp/add-notice", d.a, 99)
	}
});