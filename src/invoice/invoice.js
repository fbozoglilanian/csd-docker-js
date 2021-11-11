function invoice(price) {
  let discount = 0;
  //Discount
  if (price > 1000) {
    discount = 0.03;
    if (price > 5000) {
      discount = 0.05;
    }

    price -= price * discount;
  }
  return (price * 1.04);
}

export default invoice;