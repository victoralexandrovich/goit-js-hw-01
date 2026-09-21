function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Доставка товару в ${country} коштуватиме ${totalPrice} грн.`;
}

console.log(getShippingMessage('Japan', 1000, 150));
console.log(getShippingMessage('Ukraine', 400, 100));
console.log(getShippingMessage('Poland', 700, 200));
