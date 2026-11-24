// The Houseplant Out-of-Office — make.fun entry (r1, revised header)
// Writes the funniest out-of-office auto-reply a houseplant would send:
// a fern ignored since March, whose cry for help went unanswered.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office. I haven't been watered since March, and my last email was a cry for help. It went unanswered.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
