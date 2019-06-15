//////////////////////////////////////
//Author:		     Robert Bergers
//Project:	     Personal Website
//File:		       ./js/default.js
//////////////////////////////////////

//	Variables
var navOn = false; // Navigation menu flag
var emailOn = false; // Email popup flag

$(document).ready(function() {

	// Event Listeners
	$(".inter-nav").click(function() {
		toggleNav();
	});
	$("#mainbody").click(function() {
		toggleNavOff();
	})
	$("#head-shader").click(function() {
		toggleNavOff();
	});
	$("#skillsbg").click(function() {
		toggleNavOff();
	});
	$("#experiencebg").click(function() {
		toggleNavOff();
	});
	$("#email-button").click(function() {
		toggleEmail();
	});
	$("#close-email").click(function() {
		toggleEmailOff();
	});

});

function toggleNav() {

	if (!navOn) {
		toggleNavOn();
	} else {
		toggleNavOff();
	}

}

function toggleNavOn() {

	$("#nav-overlay").css("height", "150vh");
	$("nav-overlay").css("-webkit-clip-path", "polygon(0 0, 100% 0, 100% 100%, 0 100%)");
	$("#nav-overlay").css("clip-path", "polygon(0 0, 100% 0, 100% 100%, 0 100%)");
	$("#nav-overlay").css("transition", "175ms ease-out");
	$("#nav-overlay").css("opacity", "1");
	navOn = true;
	$(".inter-nav").html("&#10005;");

}

function toggleNavOff() {

	$("#nav-overlay").css("height", "0%");
	$("nav-overlay").css("-webkit-clip-path", "polygon(0 0, 100% 0, 100% 100%, 100% 100%)");
	$("#nav-overlay").css("clip-path", "polygon(0 0, 100% 0, 100% 100%, 100% 100%)");
	$("#nav-overlay").css("transition", "175ms ease-in");
	$("#nav-overlay").css("opacity", "0.1");
	navOn = false;
	$(".inter-nav").html('&#9776;');

}

function toggleEmail() {

if (!emailOn) {
	toggleEmailOn();
} else {
	toggleEmailOff();
}

}

function toggleEmailOn() {

	$("#email-modal").css("top", "0");
	emailOn = true;

}

function toggleEmailOff() {

	$("#email-modal").css("top", "-8em");
	emailOn = false;

}
