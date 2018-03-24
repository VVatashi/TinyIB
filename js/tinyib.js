function qid(id) {
	return document.getElementById(id);
}

function qs(selector) {
	return document.querySelector(selector);
}

function qsa(selector) {
	return document.querySelectorAll(selector);
}

function getCookie(name) {
	var value = '; ' + document.cookie;
	var parts = value.split('; ' + name + '=');

	if (parts.length == 2) {
		return parts.pop().split(';').shift();
	}
}

function setCookie(name, value, expiration) {
	document.cookie = name + '=' + value + '; path=/; expires=' + expiration;
}

function quotePost(postID) {
	var message = qid('message');
	message.value = message.value + '>>' + postID + '\n';
	message.focus();

	return false;
}

function reloadCAPTCHA() {
	var captcha = qid('captcha');
	captcha.value = '';
	captcha.focus();

	var captchaimage = qid('captchaimage');
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
	} else if (elY < wY) {
		el.scrollIntoView(true);
	}
}

function expandFile(e, id) {
	if (e == undefined || e.which == undefined || e.which == 1) {
		var thumbfile = qid('thumbfile' + id);
		var file = qid('file' + id);

		if (thumbfile.getAttribute('expanded') != 'true') {
			var expand = qid('expand' + id);

			thumbfile.setAttribute('expanded', 'true');
			file.innerHTML = decodeURIComponent(expand.textContent);
			file.style.visibility = 'hidden';

			setTimeout(function (id) {
				return function () {
					thumbfile.style.display = 'none';
					file.style.visibility = 'visible';
					file.style.display = '';
					scrollIntoView(file);
				}
			}(id), 100);
		} else {
			file.style.display = 'none';
			file.innerHTML = '';
			thumbfile.style.display = '';
			thumbfile.setAttribute('expanded', 'false');

			var thumbnail = qid('thumbnail' + id);
			scrollIntoView(thumbnail);
		}

		return false;
	}

	return true;
}

function setStyle(url) {
	var headEl = qs('head');

	if (!headEl) {
		return;
	}

	var selectedStyleEl = qs('head > link[data-selected]');

	if (selectedStyleEl) {
		selectedStyleEl.remove();
	}

	headEl.innerHTML += '<link rel="stylesheet" type="text/css" href="' + url + '" data-selected="true" />';

	var title = '';
	var styles = Object.keys(window.styles);
	for (var i = 0; i < styles.length; ++i) {
		if (window.styles[styles[i]] === url) {
			title = styles[i]
			break;
		}
	}

	var expiration_date = new Date();
	expiration_date.setTime(expiration_date.getTime() + (365 * 24 * 60 * 60 * 1000));
	setCookie('tinyib_style', encodeURIComponent(title), expiration_date.toGMTString());
}

(function () {
	window.styles = {};

	var styleEls = qsa('head > link[title]');
	for (var i = 0; i < styleEls.length; ++i) {
		var styleEl = styleEls[i];
		var title = styleEl.title;
		var url = styleEl.getAttribute('href');
		window.styles[title] = url;
		styleEl.remove();
	}

	var defaultStyleUrl = window.styles['Futaba'] || '';
	var styleTitle = getCookie('tinyib_style');
	if (styleTitle) {
		styleTitle = decodeURIComponent(styleTitle);
		var styleUrl = window.styles[styleTitle];
		if (styleUrl) {
			setStyle(styleUrl);
		} else {
			setStyle(defaultStyleUrl);
		}
	} else {
		setStyle(defaultStyleUrl);
	}
})();

document.addEventListener('DOMContentLoaded', function () {
	var styleSwitcherEl = qid('style-switcher');
	if (styleSwitcherEl) {
		var styles = Object.keys(window.styles);
		for (var i = 0; i < styles.length; ++i) {
			var title = styles[i];
			var url = window.styles[title];
			styleSwitcherEl.innerHTML += '<option value="' + url + '">' + title + '</option>';
		}
	}

	var newpostpassword = qid('newpostpassword');
	if (newpostpassword) {
		newpostpassword.addEventListener('change', function () {
			var newpostpassword = qid('newpostpassword');
			if (newpostpassword) {
				var expiration_date = new Date();
				expiration_date.setFullYear(expiration_date.getFullYear() + 7);
				setCookie('tinyib_password', encodeURIComponent(newpostpassword.value), expiration_date.toGMTString());
			}
		}, false);
	}

	var password = getCookie('tinyib_password');
	if (password && password != '') {
		if (newpostpassword) {
			newpostpassword.value = password;
		}

		var deletepostpassword = qid('deletepostpassword');
		if (deletepostpassword) {
			deletepostpassword.value = password;
		}
	}

	if (window.location.hash) {
		if (window.location.hash.match(/^#q\d+$/i) !== null) {
			var quotePostID = window.location.hash.match(/^#q\d+$/i)[0].substr(2);
			if (quotePostID != '') {
				quotePost(quotePostID);
			}
		}
	}
}, false);