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
System.register("modules/FormMarkup", ["utils/DOM"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var DOM_1, FormMarkup;
    return {
        setters: [
            function (DOM_1_1) {
                DOM_1 = DOM_1_1;
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
                        var button = DOM_1.qid(id);
                        if (button) {
                            button.addEventListener('click', buttons[id]);
                        }
                    });
                };
                FormMarkup.prototype.insertMarkup = function (before, after) {
                    var message = DOM_1.qid('message');
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
            exports_3("default", FormMarkup);
        }
    };
});
System.register("utils/Cookie", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
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
    exports_4("get", get);
    function set(name, value, expiration) {
        var value_enc = encodeURIComponent(value);
        var expiration_str = expiration.toUTCString();
        document.cookie = name + "=" + value_enc + "; path=/; expires=" + expiration_str;
    }
    exports_4("set", set);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("modules/FormSave", ["utils/DOM", "utils/Cookie"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var DOM_2, Cookie, FormSave;
    return {
        setters: [
            function (DOM_2_1) {
                DOM_2 = DOM_2_1;
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
                    var name = DOM_2.qs('input[name="name"]');
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
                    var new_post_password = DOM_2.qid('newpostpassword');
                    if (new_post_password) {
                        // Load delete post password
                        var password = Cookie.get('tinyib_password');
                        new_post_password.value = password;
                        var delete_post_password = DOM_2.qid('deletepostpassword');
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
            exports_5("default", FormSave);
        }
    };
});
System.register("modules/StyleSwitcher", ["utils/DOM", "utils/Cookie"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var DOM_3, Cookie, StyleSwitcher;
    return {
        setters: [
            function (DOM_3_1) {
                DOM_3 = DOM_3_1;
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
                    var styles = DOM_3.qsa('link[title]');
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
                    var style_switcher = DOM_3.qid('style-switcher');
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
                    var head = DOM_3.qs('head');
                    // If no <head> element, do nothing
                    if (!head) {
                        return;
                    }
                    var selected_style = DOM_3.qs('link[data-selected]');
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
            exports_6("default", StyleSwitcher);
        }
    };
});
System.register("index", ["modules/FormMarkup", "modules/FormSave", "modules/StyleSwitcher", "utils/DOM"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    function quotePost(postID) {
        var message = DOM_4.qid('message');
        message.value = message.value + '>>' + postID + '\n';
        message.focus();
        return false;
    }
    function reloadCAPTCHA() {
        var captcha = DOM_4.qid('captcha');
        captcha.value = '';
        captcha.focus();
        var captchaimage = DOM_4.qid('captchaimage');
        captchaimage.src = captchaimage.src + '#new';
        return false;
    }
    function scrollIntoView(el) {
        var wY = window.scrollY || window.pageYOffset;
        var wH = window.innerHeight;
        var elY = 0;
        var elH = 0;
        for (var p = el; p && p.tagName != 'BODY'; p = p.offsetParent) {
            elY += p.offsetTop;
        }
        elH = el.offsetHeight;
        if (wY + wH < elY + elH) {
            el.scrollIntoView(false);
        }
        else if (elY < wY) {
            el.scrollIntoView(true);
        }
    }
    function expandFile(e, id) {
        if (e == undefined || e.which == undefined || e.which == 1) {
            var wrapper_1 = DOM_4.qid('thumbnail-wrapper_' + id);
            var file_1 = DOM_4.qid('file_' + id);
            if (wrapper_1.getAttribute('expanded') != 'true') {
                var expand = DOM_4.qid('expand_' + id);
                wrapper_1.setAttribute('expanded', 'true');
                file_1.innerHTML = decodeURIComponent(expand.textContent);
                file_1.style.visibility = 'hidden';
                setTimeout(function (id) {
                    return function () {
                        wrapper_1.style.display = 'none';
                        file_1.style.visibility = 'visible';
                        file_1.style.display = '';
                        scrollIntoView(file_1);
                    };
                }(id), 100);
            }
            else {
                file_1.style.display = 'none';
                file_1.innerHTML = '';
                wrapper_1.style.display = '';
                wrapper_1.setAttribute('expanded', 'false');
                var thumbnail = DOM_4.qid('thumbnail_' + id);
                scrollIntoView(thumbnail);
            }
            return false;
        }
        return true;
    }
    var FormMarkup_1, FormSave_1, StyleSwitcher_1, DOM_4, modules;
    return {
        setters: [
            function (FormMarkup_1_1) {
                FormMarkup_1 = FormMarkup_1_1;
            },
            function (FormSave_1_1) {
                FormSave_1 = FormSave_1_1;
            },
            function (StyleSwitcher_1_1) {
                StyleSwitcher_1 = StyleSwitcher_1_1;
            },
            function (DOM_4_1) {
                DOM_4 = DOM_4_1;
            }
        ],
        execute: function () {
            modules = {};
            modules['FormMarkup'] = new FormMarkup_1.default();
            modules['FormSave'] = new FormSave_1.default();
            modules['StyleSwitcher'] = new StyleSwitcher_1.default();
            document.addEventListener('DOMContentLoaded', function () {
                // Quote post
                if (window.location.hash) {
                    if (window.location.hash.match(/^#q\d+$/i) !== null) {
                        var quotePostID = window.location.hash.match(/^#q\d+$/i)[0].substr(2);
                        if (quotePostID != '') {
                            quotePost(quotePostID);
                        }
                    }
                }
            }, false);
        }
    };
});
