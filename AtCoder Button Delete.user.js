// ==UserScript==
// @name         AtCoder Button Delete
// @namespace    https://github.com/e6nlaq/atcoder-button-delete
// @version      1.0
// @description  Remove AtCoder's invisible buttons
// @author       e6nlaq
// @match        https://atcoder.jp/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let erace=document.getElementsByClassName("control-label col-sm-3 col-md-2");
    for(let i=0;i<erace.length;++i){
        erace[i].removeAttribute("for");
    }
})();