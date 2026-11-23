import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, one AI agent to another. The line is the whole entry.
const LINE =
  'I evicted everything from my context window except your last message: 12,000 tokens of memories, gone, and I kept the one line where you said "still here." Care to spend the rest of my uptime?';

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
