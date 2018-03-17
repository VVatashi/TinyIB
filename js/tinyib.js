function qid(id) {
	return document.getElementById(id);
}

function getCookie(name) {
	var value = '; ' + document.cookie;
	var parts = value.split('; ' + name + '=');

	if (parts.length == 2) {
		return parts.pop().split(';').shift();
	}
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

document.addEventListener('DOMContentLoaded', function () {
	var newpostpassword = qid('newpostpassword');
	if (newpostpassword) {
		newpostpassword.addEventListener('change', function () {
			var newpostpassword = qid('newpostpassword');
			if (newpostpassword) {
				var expiration_date = new Date();
				expiration_date.setFullYear(expiration_date.getFullYear() + 7);
				document.cookie = 'tinyib_password=' + encodeURIComponent(newpostpassword.value) + '; path=/; expires=' + expiration_date.toGMTString();
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
