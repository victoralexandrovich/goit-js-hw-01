function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `Придбано ${quantity} дроїдів на суму ${totalPrice} кредитів.`;
}

console.log(makeTransaction(1, 1000));
console.log(makeTransaction(3, 15000));
console.log(makeTransaction(20, 500));
