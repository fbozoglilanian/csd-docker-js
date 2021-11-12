function invoice(price, qty = 1) {
  let cost = getCost(qty, price);
  //Discount
  cost -= cost * getDiscount(cost);
  return (cost * 1.0825);
}

function getCost(qty, price) {
  if (qty <= 0) {
    throw new Error("Qty must be > 0");
  }
  let cost = price * qty;
  return cost;
}

function getDiscount(cost) {
  let discount = 0;
  if (cost > 15000) {
    discount = 0.15;
  } else if (cost > 10000) {
    discount = 0.10;
  } else if (cost > 7000) {
    discount = 0.07;
  } else if (cost > 5000) {
    discount = 0.05;
  } else if (cost > 1000) {
    discount = 0.03;
  }
  return discount;
}

export default invoice;