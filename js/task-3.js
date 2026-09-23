function getElementWidth(content, padding, border) {
  const totalWidth = content + padding * 2 + border * 2;
  return totalWidth;
}

console.log(getElementWidth(50, 8, 4));
console.log(getElementWidth(60, 12, 8.5));
console.log(getElementWidth(200, 0, 0));
