webpackJsonp([552, 613, 904], {
    CWOA: function(e, t) {},
    Ra7r: function(e, t, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = s("aCc6")
            , i = s("NivA")
            , n = s("ENRU")
            , o = {
            name: "CompNavBar",
            props: ["comp", "cfg", "selectedPage"],
            data: function() {
                return {
                    style: {},
                    navList: [],
                    selected: "",
                    disabled: !1,
                    title: "",
                    isShowIcon: !1,
                    link: "",
                    popupVisible: !1
                }
            },
            watch: {
                selected: function(e) {
                    console.log(e)
                }
            },
            created: function() {
                switch (this.mergeCompProps(this.comp),
                    this.sup8.env) {
                    case this.sup8._def.env.design:
                        this.navList = [{
                            Id: "1",
                            Title: "溯源信息",
                            Type: 0,
                            Content: "1",
                            Icon: "http://image.supercarrier8.com/ico/favicon.ico"
                        }, {
                            Id: "2",
                            Title: "企业介绍",
                            Type: 0,
                            Content: "2",
                            Icon: "http://image.supercarrier8.com/ico/favicon.ico"
                        }, {
                            Id: "3",
                            Title: "品牌故事",
                            Type: 0,
                            Content: "3",
                            Icon: "http://image.supercarrier8.com/ico/favicon.ico"
                        }, {
                            Id: "4",
                            Title: "关于我们",
                            Type: 0,
                            Content: "4",
                            Icon: "http://image.supercarrier8.com/ico/favicon.ico"
                        }],
                            this.selected = this.selectedPage ? this.selectedPage.type : "1";
                        break;
                    case this.sup8._def.env.preview:
                        this.getNavList(),
                            this.style.position = "fixed",
                            this.style.bottom = "0",
                            this.selected = this.sup8.context.ptype || "1";
                        break;
                    case this.sup8._def.env.run:
                        this.style.position = "fixed",
                            this.style.bottom = "0",
                            this.selected = this.selectedPage ? this.selectedPage.type : "1",
                        _.includes(["300104", "300105", "", void 0, null], this.sup8.context.decodestatus) && this.getNavList()
                }
            },
            mounted: function() {
                this.subscibeMessage(),
                    console.log("comp-navbar", this.comp)
            },
            methods: {
                clickNav: function(e) {
                    switch (this.sup8.env) {
                        case this.sup8._def.env.design:
                            break;
                        case this.sup8._def.env.run:
                            switch (e.Type + "") {
                                case this.sup8._def.linkType.innerPage.value:
                                    var t = _.find(_.cloneDeep(this.cfg.pages), {
                                        type: e.Content
                                    });
                                    t && this.$emit("changeData", {
                                        selectedPage: t
                                    });
                                    break;
                                case this.sup8._def.linkType.outerPage.value:
                                    var s = e.Content;
                                    s && s.length > 0 && (s = this.sup8.$utils.replaceUrlParams(s, this.sup8.context),
                                    this.sup8._appConf.sign.open && (s = this.sup8.$utils.generateUrl(s, !0, !0))),
                                        window.location.href = s;
                                    break;
                                case this.sup8._def.linkType.otherTemplate.value:
                                    var a = {
                                        tid: e.Content,
                                        code: this.sup8.codeInfo.Code || "",
                                        timestamp: this.sup8.$utils.getTimestamp()
                                    };
                                    (this.sup8._appConf.sign.open = !0) && (a.sign = Object(i.sign)(this.sup8._appConf.sign.key, a));
                                    var n = "?";
                                    _.forEach(a, function(e, t) {
                                        n += t + "=" + e + "&"
                                    }),
                                        n = _.trimEnd(n, "&"),
                                        window.location.href = location.origin + n;
                                    break;
                                case this.sup8._def.linkType.customContent.value:
                                    this.$router.push({
                                        name: "CustomPage",
                                        params: {
                                            title: e.Title,
                                            content: e.Content
                                        }
                                    })
                            }
                            break;
                        case this.sup8._def.env.preview:
                            var o = _.find(this.cfg.pages, {
                                type: e.Content
                            });
                            this.$emit("changeData", {
                                selectedPageId: o.id,
                                selectedPage: o
                            }),
                                this.$forceUpdate()
                    }
                },
                getNavList: function() {
                    var e = this;
                    n.default.getNavList(e.sup8.context.eno, function(t) {
                        t.flag && t.data && t.data.Rows && t.data.Rows.length > 0 && (e.navList = _.orderBy(t.data.Rows, ["Sort"], ["desc"]),
                            a.default.publish(a.default.eventKey.hasNavList, {
                                paddingBottom: 27
                            }))
                    })
                },
                subscibeMessage: function() {
                    var e = this;
                    window.addEventListener("message", function(t) {
                        "update" === t.data.type && "CompNavBar" === t.data.target && (e.navList = [],
                        t.data && t.data.data && t.data.data.length > 0 && (_.forEach(t.data.data, function(t) {
                            e.navList.push({
                                Title: t.props.title.val
                            })
                        }),
                            a.default.subscribe(a.default.eventKey.hasNavList),
                            e.$forceUpdate()))
                    }, !1)
                }
            }
        }
            , c = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , s = e._self._c || t;
                return e.navList && e.navList.length > 0 ? s("div", {
                    ref: "container-comp-navbar",
                    staticStyle: {
                        width: "100%",
                        "z-index": "99999"
                    },
                    style: e.style
                }, [1 == e.comp.props.theme.val ? s("div", {
                    staticClass: "container"
                }, [s("mt-navbar", {
                    attrs: {
                        xxxxxx: e.selected
                    },
                    model: {
                        value: e.selected,
                        callback: function(t) {
                            e.selected = t
                        },
                        expression: "selected"
                    }
                }, e._l(e.navList, function(t) {
                    return s("mt-tab-item", {
                        key: t.Id,
                        staticStyle: {
                            color: "#fff",
                            "text-overflow": "ellipsis"
                        },
                        attrs: {
                            id: t.Content
                        }
                    }, [s("div", {
                        staticClass: "navbar-item",
                        style: {
                            fontSize: e.comp.props.fontSize.val + "px",
                            padding: e.comp.props.paddingTop.val + "px 0"
                        },
                        on: {
                            click: function(s) {
                                return e.clickNav(t)
                            }
                        }
                    }, [e._v(e._s(t.Title))])])
                }), 1)], 1) : e._e(), e._v(" "), 2 == e.comp.props.theme.val ? s("div", {
                    staticClass: "nav-item"
                }, [s("mt-navbar", {
                    attrs: {
                        xxxxxx: e.selected
                    },
                    model: {
                        value: e.selected,
                        callback: function(t) {
                            e.selected = t
                        },
                        expression: "selected"
                    }
                }, e._l(e.navList, function(t) {
                    return s("mt-tab-item", {
                        key: t.Id,
                        staticStyle: {
                            "text-overflow": "ellipsis",
                            padding: "0"
                        },
                        attrs: {
                            id: t.Content
                        }
                    }, [s("div", {
                        staticStyle: {
                            padding: "6px 0"
                        },
                        on: {
                            click: function(s) {
                                return e.clickNav(t)
                            }
                        }
                    }, [s("div", {
                        staticClass: "img-bg",
                        class: {
                            activebg: e.selected != t.Content
                        },
                        style: {
                            backgroundColor: e.comp.props.color.val
                        }
                    }, [s("img", {
                        attrs: {
                            src: t.Icon,
                            alt: ""
                        }
                    })]), e._v(" "), s("div", {
                        staticClass: "navbar-item",
                        class: {
                            activecolor: e.selected != t.Content
                        },
                        style: {
                            color: e.comp.props.color.val
                        }
                    }, [e._v("\n              " + e._s(t.Title) + "\n            ")])])])
                }), 1)], 1) : e._e()]) : e._e()
            },
            staticRenderFns: []
        };
        var l = s("VU/8")(o, c, !1, function(e) {
            s("CWOA")
        }, "data-v-b7309138", null);
        t.default = l.exports
    },
    aCc6: function(e, t, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = new (s("7+uW").default)({
            data: function() {
                return {
                    eventKey: {
                        test: "test",
                        antifakeFalse: "antifake.false",
                        antifakeTrue: "antifake.true",
                        pruductChange: "pruduct.change",
                        previewdataChange: "previewdata.change",
                        hasNavList: "has.navlist",
                        updataMainContainerStyle: "maincontainer.style.updata",
                        configSavePreview: "config.save.preview",
                        DialogAddPageVisible: "dialog.addpage.visible",
                        DesignCompRemove: "deign.comp.remove"
                    }
                }
            },
            methods: {
                publish: function(e, t) {
                    console.log("bus.publish", e),
                        this.$emit(e, t)
                },
                subscribe: function(e, t) {
                    this.$on(e, t)
                }
            }
        });
        t.default = a
    }
});
