import { SYNONYMS } from "@/src/lib/constants/synonyms";

function normalizeText(s = "") {
  return s
    .toLowerCase()
    // basic german umlaut handling
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[\p{P}$+<=>^`|~]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function expandSynonyms(ts: string[]) {
  const set = new Set(ts);
  for (const [k, vals] of Object.entries(SYNONYMS)) {
    if (set.has(k)) vals.forEach((v) => set.add(v));
    for (const v of vals) if (set.has(v)) set.add(k);
  }
  return [...set];
}