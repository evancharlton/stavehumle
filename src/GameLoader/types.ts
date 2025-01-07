export type WordMap = Record<string, Date>;

export type RevealOption =
  | { which: "all" }
  | { which: "length"; length: number }
  | { which: "letter"; letter: string }
  | { which: "letter-length"; letter: string; length: number };

export type StoredRevealOptions = (RevealOption & { when: string })[];
