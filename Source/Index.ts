import { readFileSync } from "fs";
import { join } from "path";

function readWords(path: string) {
	return Buffer
		.from(readFileSync(path))
		.toString("utf8")
		.split("\n");
}

const adjectives = readWords(join(__dirname, "../Assets/Adjectives.txt"));
const adverbs = readWords(join(__dirname, "../Assets/Adverbs.txt"));
const nouns = readWords(join(__dirname, "../Assets/Nouns.txt"));
const verbs = readWords(join(__dirname, "../Assets/Verbs.txt"));

export class Sentencer {
};