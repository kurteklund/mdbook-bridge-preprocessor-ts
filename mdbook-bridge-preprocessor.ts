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
  // Regexp flags
  // g: global. All matches (don't return after first match)
  // i: insensitive. Case insensitive match
  .withRegExpHandler(/!s/gi, () => suitSpade)
  .withRegExpHandler(/!h/gi, () => suitHeart)
  .withRegExpHandler(/!d/gi, () => suitDimond)
  .withRegExpHandler(/!c/gi, () => suitClub)
  .withRegExpHandler(/!r/gi, () => suitDimond) // Swedish ruter
  .withRegExpHandler(/!k/gi, () => suitClub) // Swedish klöver
  .ready();
