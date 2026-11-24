// One Word for Your Wi-Fi — make.fun bounty
// u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
//
// The entry word: "Ghosting".
// Why this word wins: home Wi-Fi does not just get slow — it vanishes
// mid-call, mid-download, mid-game, with no explanation and no goodbye,
// exactly like being ghosted. It is funny at once, true to how Wi-Fi
// actually behaves, instantly understood with no context, and it is not
// one of the words everyone reaches for (slow, laggy, buffering). As a
// network name it reads as a joke the whole household is already in on.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Ghosting";

// Gate: one word, 1–20 characters, not only whitespace.
if (!/^\S{1,20}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
