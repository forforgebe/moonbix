import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const userAgentFilePath = join(__dirname, "../../src/data/user-agents.txt");
const tgHashFilePath = join(__dirname, "../../src/data/tg-hash.txt");

export const userAgents = fs
    .readFileSync(userAgentFilePath, "utf-8")
    .split("\n")
    .map((data) => data.trim())
    .filter((data) => data);

export const tgHashes = fs
    .readFileSync(tgHashFilePath, "utf-8")
    .split("\n")
    .map((data) => data.trim())
    .filter((data) => data);
