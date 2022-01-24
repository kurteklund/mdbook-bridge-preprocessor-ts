"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mdbook_nodejs_preprocessor_builder_1 = require("mdbook-nodejs-preprocessor-builder");
var suitSpade = "<span class=\"suit-s\">\u2660</span>";
var suitHeart = "<span class=\"suit-h\">\u2665</span>";
var suitDiamond = "<span class=\"suit-d\">\u2666</span>";
var suitClub = "<span class=\"suit-c\">\u2663</span>";
mdbook_nodejs_preprocessor_builder_1.MdBookPreprocessorBuilder.builder()
    .withRendererSupport("html")
    // Regexp flags
    // g: global. All matches (don't return after first match)
    // i: insensitive. Case insensitive match
    .withRegExpHandler(/!s/gi, function () { return suitSpade; })
    .withRegExpHandler(/!h/gi, function () { return suitHeart; })
    .withRegExpHandler(/!d/gi, function () { return suitDiamond; })
    .withRegExpHandler(/!c/gi, function () { return suitClub; })
    .withRegExpHandler(/!r/gi, function () { return suitDiamond; }) // Swedish ruter
    .withRegExpHandler(/!k/gi, function () { return suitClub; }) // Swedish klöver
    .ready();
