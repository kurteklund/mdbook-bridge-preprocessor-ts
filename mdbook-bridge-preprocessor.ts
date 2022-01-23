import {
  MdBookPreprocessorBuilder,
  Chapter,
} from "mdbook-nodejs-preprocessor-builder";

const suitSpade = `<span class="suit-s">♠</span>`;
const suitHeart = `<span class="suit-h">♥</span>`;
const suitDimond = `<span class="suit-d">♦</span>`;
const suitClub = `<span class="suit-c">♣</span>`;

MdBookPreprocessorBuilder.builder()
  .withRendererSupport("html")
  .withRawContentHandler((chapter: Chapter) => {
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
