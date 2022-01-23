"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mdbook_nodejs_preprocessor_builder_1 = require("mdbook-nodejs-preprocessor-builder");
var suitSpade = "<span class=\"suit-s\">\u2660</span>";
var suitHeart = "<span class=\"suit-h\">\u2665</span>";
var suitDimond = "<span class=\"suit-d\">\u2666</span>";
var suitClub = "<span class=\"suit-c\">\u2663</span>";
mdbook_nodejs_preprocessor_builder_1.MdBookPreprocessorBuilder.builder()
    .withRendererSupport("html")
    .withRawContentHandler(function (chapter) {
    chapter.content = chapter.content
        // Regexp flags
        // g: global. All matches (don't return after first match)
        // i: insensitive. Case insensitive match
        .replace(/!s/gi, suitSpade) // '!s' case insetive
        .replace(/!h/gi, suitHeart)
        .replace(/!d/gi, suitDimond)
        .replace(/!r/gi, suitDimond) // Swedish ruter
        .replace(/!c/gi, suitClub)
        .replace(/!k/gi, suitClub); // Swedish klöver
    return chapter;
})
    .ready();
