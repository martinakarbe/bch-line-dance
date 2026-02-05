export const contactEmailParts = {
  alias: "linedancebch",
  domain: "online",
  tld: "de",
} as const;

export function getContactEmail() {
  return `${contactEmailParts.alias}@${contactEmailParts.domain}.${contactEmailParts.tld}`;
}

export function getObfuscatedContactEmail() {
  return `${contactEmailParts.alias} [at] ${contactEmailParts.domain} [dot] ${contactEmailParts.tld}`;
}
