import { chmodSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line: the single sentence that could have replaced the whole meeting.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line = "We've spent an hour agreeing to do exactly what we agreed to do last week, so let's just do it and cancel the follow-up about doing it.\n";

const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, line, "utf8");
chmodSync(entryPath, 0o644);
