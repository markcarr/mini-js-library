vanilla-js-library
==================

Mini Vanilla JavaScript Library

Demo: https://rawgithub.com/markcarr/mini-js-library/master/index.html

miniLib has been tested in the following browsers:
*IE7-10
*Firefox
*Chrome

ID selector<br>
$(#id);

<hr>

Class selector<br>
$(.classname);

<hr>

Class and tag selector<br>
$(.classname, tagname);

<hr>

Tag selector<br>
$(tagname);

<hr>

addEvent<br>
Example: Click event<br>
addEvent(element, event, function(event){<br>
	// Code goes here<br>
});
			
Events:
*click
*blur
*focus
*mouseover
*mouseout
*touchstart
*touchend

<hr>

Prevent default event<br>
stop(event);

<hr>

Add classname to element<br>
addClass(element, classname);

<hr>

Remove classname from element<br>
removeClass(element, classname);

<hr>

Toggle classname on element<br>
toggleClass(element, classname);

<hr>

Check to see if element has classname - boolean<br>
hasClass(element, classname);

<hr>

For each looping<br>
[].forEach.call(array, function(el){<br>
	// Code goes here<br>
});
	
