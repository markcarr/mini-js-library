(function(window, undefined){
	"use strict";

	if (!Array.prototype.forEach){
		Array.prototype.forEach = function(fn, scope){
			for(var i = 0; i < this.length; ++i){
				fn.call(scope, this[i], i, this);
			}
		}
	}

	if (!document.getElementsByClassName){
		document.getElementsByClassName = function(cl, tag){
			var els, matches = [],
			i = 0, len,
			regex = new RegExp('(?:\\s|^)' + cl + '(?:\\s|$)');

			els = document.getElementsByTagName(tag || "*");
			if(!els[0]) return false;

			for(len = els.length; i < len; i++){
				if(els[i].className.match(regex)) matches.push(els[i]);
			}
			return matches;
		};
	};

	var $ = window.$ = function(el, tag){
		var firstChar = el.charAt(0);

		if(document.querySelectorAll) return document.querySelectorAll(el);

		switch (firstChar){
			case "#":
				return document.getElementById(el.slice(1));
			case ".":
				return document.getElementsByClassName(el.slice(1), tag);
			default:
				return document.getElementsByTagName(el);
		}
	},

	stop = window.stop = function(event){
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
	},

	addEvent = window.addEvent = (function(){
		var filter = function(el, type, fn){
			for ( var i = 0, len = el.length; i < len; i++ ){
				addEvent(el[i], type, fn);
			}
		};

		if (document.addEventListener){
			return function (el, type, fn){
				if (el && el.nodeName || el === window){
					el.addEventListener(type, fn, false);
				} else if(el && el.length){
					filter(el, type, fn);
				}
			};
		}

		return function (el, type, fn){
			if (el && el.nodeName || el === window){
				el.attachEvent('on' + type, function(){
					return fn.call(el, window.event);
				});
			} else if(el && el.length){
				filter(el, type, fn);
			}
		};
	})(),

	hasClass = window.hasClass = function (el, cl){
		var regex = new RegExp('(?:\\s|^)' + cl + '(?:\\s|$)');
		return !!el.className.match(regex);
	},

	addClass = window.addClass = function (el, cl){
		el.className += ' ' + cl;
	},

	removeClass = window.removeClass = function (el, cl){
		var regex = new RegExp('(?:\\s|^)' + cl + '(?:\\s|$)');
		el.className = el.className.replace(regex, ' ');
	},

	toggleClass = window.toggleClass = function (el, cl){
		hasClass(el, cl) ? removeClass(el, cl) : addClass(el, cl);
	};

})(window);