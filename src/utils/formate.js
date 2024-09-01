export const wrapSpaceAroundEn = (str) =>
  str.replaceAll(/[a-zA-Z0-9:-]+/g, (match) => ` ${match} `).trim()
