export function toPascalCase(str: string) {
  return str
    .replace(/([^\w\d]|_|\s)+(.)?/g, (_, __, letter) =>
      letter ? letter.toUpperCase() : ""
    )
    .replace(/^(.)/, (firstLetter) => firstLetter.toUpperCase());
}

export const toCamelCase = (str: string) => {
  const pascalCaseStr = str
      .split(/[-_/]/) // Split on hyphens, underscores, or slashes
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');

  // Convert the first character to lowercase
  return pascalCaseStr.charAt(0).toLowerCase() + pascalCaseStr.slice(1);
};

export function fileNameAndPath(str: string){
  const parts = str.split('/'); 
  const fileName = toPascalCase(parts.pop()!); 
  const pathDir = parts.join('/');
  return { fileName, pathDir };
}
