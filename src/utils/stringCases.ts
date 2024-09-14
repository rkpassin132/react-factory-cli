export function toPascalCase(str: string) {
  return str
    .replace(/([^\w\d]|_|\s)+(.)?/g, (_, __, letter) =>
      letter ? letter.toUpperCase() : ""
    )
    .replace(/^(.)/, (firstLetter) => firstLetter.toUpperCase());
}
