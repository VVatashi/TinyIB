System.register("modules/IModule", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("utils/DOM", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function qid(id) {
        return document.getElementById(id);
    }
    exports_2("qid", qid);
    function qs(selector) {
        return document.querySelector(selector);
    }
    exports_2("qs", qs);
    function qsa(selector) {
        return document.querySelectorAll(selector);
    }
    exports_2("qsa", qsa);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("modules/Captcha", ["utils/DOM"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var DOM_1, Captcha;
    return {
        setters: [
            function (DOM_1_1) {
                DOM_1 = DOM_1_1;
            }
        ],
        execute: function () {
            Captcha = /** @class */ (function () {
                function Captcha() {
                    var _this = this;
                    this.original_src = '';
                    document.addEventListener('DOMContentLoaded', function () { return _this.onLoad(); });
                }
                Captcha.prototype.onLoad = function () {
                    var _this = this;
                    var image = DOM_1.qid('captchaimage');
                    if (image) {
                        this.original_src = image.src;
                        image.addEventListener('click', function () { return _this.reload(); });
                    }
                };
                Captcha.prototype.reload = function () {
                    var captcha = DOM_1.qid('captcha');
                    captcha.value = '';
                    captcha.focus();
                    var image = DOM_1.qid('captchaimage');
                    image.src = this.original_src + "#" + new Date().getTime();
                    return false;
                };
                return Captcha;
            }());
            exports_3("default", Captcha);
        }
    };
});
System.register("modules/ExpandFile", ["utils/DOM"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var DOM_2, ExpandFile;
    return {
        setters: [
            function (DOM_2_1) {
                DOM_2 = DOM_2_1;
            }
        ],
        execute: function () {
            ExpandFile = /** @class */ (function () {
                function ExpandFile() {
                    var _this = this;
                    document.addEventListener('DOMContentLoaded', function () {
                        _this.onLoad();
                        // Wait one second for userscripts init
                        // TODO: Try use MutationObserver instead?
                        setTimeout(function () {
                            // Try detect Dollchan Extension
                            var de = DOM_2.qid('de-main');
                            if (de) {
                                // DE breaks some event handlers, so needs to reattach them
                                _this.onLoad();
                            }
                        }, 1000);
                    });
                }
                ExpandFile.prototype.onLoad = function () {
                    var _this = this;
                    var links = DOM_2.qsa('.file-info__link, .thumbnail');
                    var _loop_1 = function (i) {
                        var id = Number(links[i].getAttribute('data-id'));
                        links[i].addEventListener('click', function (e) { return _this.expandFile(e, id); });
                    };
                    for (var i = 0; i < links.length; ++i) {
                        _loop_1(i);
                    }
                    var files = DOM_2.qsa('.original');
                    var _loop_2 = function (i) {
                        var id = Number(files[i].getAttribute('data-id'));
                        files[i].addEventListener('click', function (e) { return _this.expandFile(e, id); });
                    };
                    for (var i = 0; i < files.length; ++i) {
                        _loop_2(i);
                    }
                };
                ExpandFile.prototype.scrollIntoView = function (element) {
                    var window_pos = window.scrollY || window.pageYOffset;
                    var window_height = window.innerHeight;
                    var element_pos = 0;
                    var element_height = element.offsetHeight;
                    for (var p = element; p && p.tagName !== 'BODY'; p = p.offsetParent) {
                        element_pos += p.offsetTop;
                    }
                    if (window_pos + window_height < element_pos + element_height) {
                        element.scrollIntoView(false);
                    }
                    else if (element_pos < window_pos) {
                        element.scrollIntoView(true);
                    }
                };
                ExpandFile.prototype.expandFile = function (e, id) {
                    var _this = this;
                    if (e === undefined || e.which === undefined || e.which === 1) {
                        if (e) {
                            e.preventDefault();
                        }
                        var thumbnail_1 = DOM_2.qid("thumbnail_wrapper_" + id);
                        var original_1 = DOM_2.qid("original_wrapper_" + id);
                        if (thumbnail_1.getAttribute('data-expanded') !== 'true') {
                            thumbnail_1.setAttribute('data-expanded', 'true');
                            // Load original file
                            var expand = DOM_2.qid("expand_" + id);
                            original_1.innerHTML = decodeURIComponent(expand.textContent);
                            original_1.style.visibility = 'hidden';
                            setTimeout(function () {
                                // Hide thumbnail
                                thumbnail_1.style.display = 'none';
                                // Show original file
                                original_1.style.visibility = 'visible';
                                original_1.style.display = '';
                                _this.scrollIntoView(original_1);
                            }, 100);
                        }
                        else {
                            thumbnail_1.setAttribute('data-expanded', 'false');
                            // Hide original file
                            original_1.style.display = 'none';
                            original_1.innerHTML = '';
                            // Show thumbnail
                            thumbnail_1.style.display = '';
                            var thumbnail_content = DOM_2.qid("thumbnail_" + id);
                            this.scrollIntoView(thumbnail_content);
                        }
                        return false;
                    }
                    return true;
                };
                return ExpandFile;
            }());
            exports_4("default", ExpandFile);
        }
    };
});
System.register("modules/FormMarkup", ["utils/DOM"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var DOM_3, FormMarkup;
    return {
        setters: [
            function (DOM_3_1) {
                DOM_3 = DOM_3_1;
            }
        ],
        execute: function () {
            FormMarkup = /** @class */ (function () {
                function FormMarkup() {
                    var _this = this;
                    document.addEventListener('DOMContentLoaded', function () { return _this.onLoad(); });
                }
                FormMarkup.prototype.onLoad = function () {
                    var _this = this;
                    var buttons = {
                        'markup_quote': function () { return _this.insertMarkup('\n>', '\n'); },
                        'markup_b': function () { return _this.insertBBCode('b'); },
                        'markup_i': function () { return _this.insertBBCode('i'); },
                        'markup_u': function () { return _this.insertBBCode('u'); },
                        'markup_s': function () { return _this.insertBBCode('s'); },
                        'markup_sup': function () { return _this.insertBBCode('sup'); },
                        'markup_sub': function () { return _this.insertBBCode('sub'); },
                        'markup_spoiler': function () { return _this.insertBBCode('spoiler'); },
                        'markup_code': function () { return _this.insertBBCode('code'); },
                        'markup_rp': function () { return _this.insertBBCode('rp'); },
                    };
                    var ids = Object.keys(buttons);
                    ids.forEach(function (id) {
                        var button = DOM_3.qid(id);
                        if (button) {
                            button.addEventListener('click', buttons[id]);
                        }
                    });
                };
                FormMarkup.prototype.insertMarkup = function (before, after) {
                    var message = DOM_3.qid('message');
                    var str = message.value;
                    var begin = message.selectionStart;
                    var end = message.selectionEnd;
                    message.value = [
                        str.substring(0, begin),
                        before,
                        str.substring(begin, end),
                        after,
                        str.substring(end),
                    ].join('');
                    message.focus();
                    message.selectionStart = begin + before.length;
                    message.selectionEnd = begin + before.length + (end - begin);
                    return false;
                };
                FormMarkup.prototype.insertBBCode = function (code) {
                    return this.insertMarkup("[" + code + "]", "[/" + code + "]");
                };
                return FormMarkup;
            }());
            exports_5("default", FormMarkup);
        }
    };
});
System.register("utils/Cookie", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    function get(name, _default) {
        if (_default === void 0) { _default = null; }
        var cookie_str = "; " + document.cookie;
        var cookie_parts = cookie_str.split("; " + name + "=");
        if (cookie_parts.length === 2) {
            var value_enc = cookie_parts.pop().split(';').shift();
            return decodeURIComponent(value_enc);
        }
        return _default;
    }
    exports_6("get", get);
    function set(name, value, expiration) {
        var value_enc = encodeURIComponent(value);
        var expiration_str = expiration.toUTCString();
        document.cookie = name + "=" + value_enc + "; path=/; expires=" + expiration_str;
    }
    exports_6("set", set);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("modules/FormSave", ["utils/DOM", "utils/Cookie"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var DOM_4, Cookie, FormSave;
    return {
        setters: [
            function (DOM_4_1) {
                DOM_4 = DOM_4_1;
            },
            function (Cookie_1) {
                Cookie = Cookie_1;
            }
        ],
        execute: function () {
            FormSave = /** @class */ (function () {
                function FormSave() {
                    var _this = this;
                    document.addEventListener('DOMContentLoaded', function () { return _this.onLoad(); });
                }
                FormSave.prototype.onLoad = function () {
                    var name = DOM_4.qs('input[name="name"]');
                    if (name) {
                        // Load name
                        name.value = Cookie.get('tinyib_name', '');
                        // Save name on change
                        name.addEventListener('change', function () {
                            var expiration_date = new Date();
                            expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);
                            Cookie.set('tinyib_name', name.value, expiration_date);
                        });
                    }
                    var new_post_password = DOM_4.qid('newpostpassword');
                    if (new_post_password) {
                        // Load delete post password
                        var password = Cookie.get('tinyib_password');
                        new_post_password.value = password;
                        var delete_post_password = DOM_4.qid('deletepostpassword');
                        if (delete_post_password) {
                            delete_post_password.value = password;
                        }
                        // Save delete post password on change
                        new_post_password.addEventListener('change', function () {
                            var expiration_date = new Date();
                            expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);
                            Cookie.set('tinyib_password', new_post_password.value, expiration_date);
                        });
                    }
                };
                return FormSave;
            }());
            exports_7("default", FormSave);
        }
    };
});
System.register("modules/QuotePost", ["utils/DOM"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var DOM_5, QuotePost;
    return {
        setters: [
            function (DOM_5_1) {
                DOM_5 = DOM_5_1;
            }
        ],
        execute: function () {
            QuotePost = /** @class */ (function () {
                function QuotePost() {
                    var _this = this;
                    document.addEventListener('DOMContentLoaded', function () { return _this.onLoad(); });
                }
                QuotePost.prototype.onLoad = function () {
                    var _this = this;
                    var hash = window.location.hash;
                    if (hash) {
                        var match = hash.match(/^#q\d+$/i);
                        if (match !== null) {
                            var id = Number(match[0].substr(2));
                            this.quotePost(id);
                        }
                    }
                    var links = DOM_5.qsa('.post-header__reflink');
                    var _loop_3 = function (i) {
                        var id = Number(links[i].getAttribute('data-id'));
                        links[i].addEventListener('click', function () { return _this.quotePost(id); });
                    };
                    for (var i = 0; i < links.length; ++i) {
                        _loop_3(i);
                    }
                };
                QuotePost.prototype.quotePost = function (id) {
                    var message = DOM_5.qid('message');
                    message.value = message.value + ">>" + id + "\n";
                    message.focus();
                    return false;
                };
                return QuotePost;
            }());
            exports_8("default", QuotePost);
        }
    };
});
System.register("modules/StyleSwitcher", ["utils/DOM", "utils/Cookie"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var DOM_6, Cookie, StyleSwitcher;
    return {
        setters: [
            function (DOM_6_1) {
                DOM_6 = DOM_6_1;
            },
            function (Cookie_2) {
                Cookie = Cookie_2;
            }
        ],
        execute: function () {
            StyleSwitcher = /** @class */ (function () {
                function StyleSwitcher() {
                    var _this = this;
                    this.styles = {};
                    // Parse selectable styles from <head>
                    var styles = DOM_6.qsa('link[title]');
                    for (var i = 0; i < styles.length; ++i) {
                        var style = styles[i];
                        var title = style.title;
                        var url = style.getAttribute('href');
                        this.styles[title] = url;
                        style.remove();
                    }
                    // Get selected style
                    var selected_style = Cookie.get('tinyib_style', 'Futaba');
                    this.setStyle(selected_style);
                    // Setup events
                    document.addEventListener('DOMContentLoaded', function () { return _this.onLoad(); });
                }
                StyleSwitcher.prototype.onLoad = function () {
                    var _this = this;
                    var style_switcher = DOM_6.qid('style-switcher');
                    if (style_switcher) {
                        // Populate style switcher widget
                        var styles = Object.keys(this.styles);
                        for (var i = 0; i < styles.length; ++i) {
                            var title = styles[i];
                            var url = this.styles[title];
                            style_switcher.innerHTML += "<option class=\"style-switcher__option\" value=\"" + title + "\">" + title + "</option>";
                        }
                        // Set style change callback
                        style_switcher.addEventListener('change', function () {
                            _this.setStyle(style_switcher.value);
                        });
                    }
                };
                StyleSwitcher.prototype.setStyle = function (style) {
                    var head = DOM_6.qs('head');
                    // If no <head> element, do nothing
                    if (!head) {
                        return;
                    }
                    var selected_style = DOM_6.qs('link[data-selected]');
                    if (selected_style) {
                        // If style already selected, do nothing
                        if (selected_style.title === style) {
                            return;
                        }
                        // Remove previously selected style from <head>
                        selected_style.remove();
                    }
                    // Add currently selected style to <head>
                    var url = this.styles[style];
                    head.innerHTML += "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + url + "\" data-selected=\"true\" />";
                    // Save selected style
                    var expiration_date = new Date();
                    expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);
                    Cookie.set('tinyib_style', style, expiration_date);
                };
                return StyleSwitcher;
            }());
            exports_9("default", StyleSwitcher);
        }
    };
});
System.register("index", ["modules/Captcha", "modules/ExpandFile", "modules/FormMarkup", "modules/FormSave", "modules/QuotePost", "modules/StyleSwitcher"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var Captcha_1, ExpandFile_1, FormMarkup_1, FormSave_1, QuotePost_1, StyleSwitcher_1, modules;
    return {
        setters: [
            function (Captcha_1_1) {
                Captcha_1 = Captcha_1_1;
            },
            function (ExpandFile_1_1) {
                ExpandFile_1 = ExpandFile_1_1;
            },
            function (FormMarkup_1_1) {
                FormMarkup_1 = FormMarkup_1_1;
            },
            function (FormSave_1_1) {
                FormSave_1 = FormSave_1_1;
            },
            function (QuotePost_1_1) {
                QuotePost_1 = QuotePost_1_1;
            },
            function (StyleSwitcher_1_1) {
                StyleSwitcher_1 = StyleSwitcher_1_1;
            }
        ],
        execute: function () {
            modules = {};
            modules['Captcha'] = new Captcha_1.default();
            modules['ExpandFile'] = new ExpandFile_1.default();
            modules['FormMarkup'] = new FormMarkup_1.default();
            modules['FormSave'] = new FormSave_1.default();
            modules['QuotePost'] = new QuotePost_1.default();
            modules['StyleSwitcher'] = new StyleSwitcher_1.default();
        }
    };
});
