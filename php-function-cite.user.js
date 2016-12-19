// ==UserScript==
// @name         PHP.Net Function Cite
// @version      1.0.2
// @description  Adds cite buttons to the function documentation pages on PHP.net
// @author       Yani
// @match        http://php.net/manual/*/function.*.php
// @match        http://*.php.net/manual/*/function.*.php
// @match        https://secure.php.net/manual/*/function.*.php
// @grant        GM_setClipboard
// ==/UserScript==

// Config:
var BBCode_addColor = false;
var BBCode_theColor = "#1692FF";
var HTML_addColor = false;
var HTML_theColor = "#1692FF";

(function() {
    var theURL = window.location.protocol + "//" + window.location.hostname + "/manual/en/" + window.location.pathname.split("/")[3];
    var funcName = $("h1.refname").text() + "()";
    
    $(".edit-bug").html(
        "<a href=\"#\" id=\"citeFuncBB\">Cite (BBCode)</a> <a href=\"#\" id=\"citeFuncHTML\">Cite (HTML)</a>" + $(".edit-bug").html()
    );

    $('#citeFuncBB').click(function(e){
        e.preventDefault();
        GM_setClipboard((BBCode_addColor) ?
                        "[url=" + theURL + "][color=" + BBCode_theColor + "]" + funcName + "[/color][/url]" :
                        "[url=" + theURL + "]" + funcName + "[/url]");
        $(".edit-bug > a:nth-child(1)").fadeOut("fast").fadeIn( "fast");
    });
    
    $('#citeFuncHTML').click(function(e){
        e.preventDefault();
        GM_setClipboard((HTML_addColor) ?
                        "<a href=\"" + theURL + "\" style=\"color:" + HTML_theColor + "\">" + funcName + "</a>" :
                        "<a href=\"" + theURL + "\">" + funcName + "</a>");
        $(".edit-bug > a:nth-child(2)").fadeOut("fast").fadeIn( "fast");
    });
})();