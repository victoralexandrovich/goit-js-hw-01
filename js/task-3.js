function getElementWidth(content, padding, border) {
  const totalWidth = content + padding * 2 + border * 2;
  return totalWidth;
}

console.log(getElementWidth(300, 20, 5));
console.log(getElementWidth(150, 0, 2));
console.log(getElementWidth(400, 15.5, 1.5));
